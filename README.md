# LuvWhiskey

This application is based for lovers of whiskey, alongside those new to whiskey, to be able to form a social community and to be able to share their thoughts/opinions on specific whiskeys with the peers. 

The application is designed with ease of use in mind. The users have the ability to contribute to the database by adding whiskeys, being able to favourite whiskeys and comment on whiskeys. Whether on a desktop or a mobile device, they can always be part of the LuvWhiskey community.

<img width="500" alt="desktop LuvWhiskey homepage" src="https://user-images.githubusercontent.com/28264008/35148109-f4af1cfa-fd08-11e7-95c0-a5915ac0f685.png">
<img width="200" height="320" alt="mobile LuvWhiskey homepage" src="https://user-images.githubusercontent.com/28264008/35148158-21e59d98-fd09-11e7-8753-815e4e86ad7d.png">

### ***TECHNOLOGIES USED***

#### Dependencies

* bcrypt: "^1.0.3"
* bluebird: "^3.5.1",
* body-parser": "^1.18.2",
* ejs: "^2.5.6",
* express: "^4.16.2",
* express-ejs-layouts: "^2.3.1",
* express-flash: "^0.0.2",
* express-session: "^1.15.6",
* method-override: "^2.3.10",
* mongoose: "^4.13.9",
* morgan: "^1.9.0"

####Backbone
* 	HTML
*  CSS
*  SCSS
*  JavaScript (ECMA6)
*  Gulp
*  Node.js
*  Embedded.js
*  Mongo
*  Zsh
*  Git
*  Github
*  Heroku

### ***Installation***

Access online via these links:

[GitHub](https://github.com/avadher510/wdi_project_2_whiskey_app)

[HEROKU](https://pure-spire-30986.herokuapp.com/)

***OR***

Install Locally by downloading or cloning the GitHub repository here: [GitHub Repository](https://github.com/avadher510/wdi_project_2_whiskey_app)

### ***Approach to the Project***

This project was challenging but also rewarding and fun to produce. I tried to not only use my skills for the specified technologies used, but also look at it from a Users perspective to produce an app that was both easy to use and scalable. 

Users will register and sign in using an email address and password that has been salted and hashed using Bcrypt:

<img width="500" alt="screen shot 2018-01-19 at 10 59 46" src="https://user-images.githubusercontent.com/28264008/35149038-8659139c-fd0c-11e7-82c2-04c627cd1148.png">

From here, users have the option to access their profile, in which it will display whiskeys they have added or added to favourites. There is also the "Whiskey of the Year":

<img width="500" alt="screen shot 2018-01-19 at 11 04 23" src="https://user-images.githubusercontent.com/28264008/35149267-589fa3c0-fd0d-11e7-97e5-7bb937a7c686.png">
<img width="200" height="320" alt="screen shot 2018-01-19 at 11 06 52" src="https://user-images.githubusercontent.com/28264008/35149757-3e98d30a-fd0f-11e7-9fab-e6d85231771d.png">

Users also have the ability to search all whiskeys or by brand: 

<img width="500" alt="screen shot 2018-01-19 at 11 00 17" src="https://user-images.githubusercontent.com/28264008/35149501-3916de6e-fd0e-11e7-936c-b344355421d1.png">
<img width="200" height="320" alt="screen shot 2018-01-19 at 11 05 48" src="https://user-images.githubusercontent.com/28264008/35149543-6845b548-fd0e-11e7-9b67-5c4ccd4afb6b.png">

To see whiskeys in more detail, add to favourites and comment:

<img width="500" alt="screen shot 2018-01-19 at 11 00 59" src="https://user-images.githubusercontent.com/28264008/35149587-96109f24-fd0e-11e7-9350-faab9eccf60e.png">
<img width="200" height="320" alt="screen shot 2018-01-19 at 11 49 42" src="https://user-images.githubusercontent.com/28264008/35149671-eb202ade-fd0e-11e7-8a64-c0e87f1f20e3.png">

The planning phase was vital to this project as it allowed me map out MVC from the users perspective to develop the application with the user in mind. 

### ***Challenges***

This project had its challenges as it was a new technology stack that had recently be learnt, so implementing this was a challenge in itself. However, given this, I am proud with the end result.

DRY-ing up code was still challenging in the latter stages of the project.

Also using SCSS syntax for the first time was challenging, as the cascading route it takes took time to understand.

The routes were also tricky. For example, adding to favourites - as this involved both the User model and the Whiskey model - it was challenging to access the data from the controller, however I was able to learn and understand this to get the feature working.

### ***Scaling the Game***

The application was designed with scalability in mind. The next feature to implement is to use an API to populate the database with more Whiskeys. From there, using maps API to to create multiple feature, such as plotting where the user logs a Whiskey was purchased from and the price.
In addition, linking via API to retailers to allow a purchase via the app from them.

