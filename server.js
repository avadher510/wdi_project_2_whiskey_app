const express        = require('express');
const morgan         = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes         = require('./config/routes');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const session = require('express-session');
const User = require('./models/user');
const flash = require('express-flash');
const { port, env, dbURI, secret } = require('./config/environment');
const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use((req, res, next) => {
  if (!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then((user) => {
      if (!user) {
        return req.session.regenerate(() => {
          req.flash('danger', 'You must be logged in');
          res.redirect('/');
        });
      }
      req.session.userId = user._id;
      res.locals.user = user;
      res.locals.isLoggedIn = true;

      next();
    });
});

app.use(routes);

app.listen(port, () => console.log(`Express is now listening on port ${port}`));
