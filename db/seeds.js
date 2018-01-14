const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/express-lists-${env}`;

mongoose.connect(dbURI);

const Whiskey = require('../models/whiskey');

Whiskey.collection.drop();

Whiskey
  .create([{
    image: 'https://img.thewhiskyexchange.com/900/gmgob.1974v8.jpg',
    origin: 'Scotland',
    type: 'Single Malt Scotch Whiskey',
    brand: 'Glenmorangie',
    variant: 'Pride 1974',
    age: 42,
    notes: ['Apple', 'Orange', 'Honey', 'Toffee', 'Clove'],
    abv: 52,
    price: 7000
  },{
    image: 'https://img.thewhiskyexchange.com/900/dlmob.40yov1.jpg',
    origin: 'Scotland',
    type: 'Single Malt Scotch Whiskey',
    brand: 'Dalmore',
    variant: '40 year old',
    age: 40,
    notes: ['Gingerbread', 'Maple Syrup', 'Honey', 'Brioche'],
    abv: 42,
    price: 6250
  },{
    image: 'https://img.thewhiskyexchange.com/900/india_amr25.jpg',
    origin: 'India',
    type: 'Single Malt Indian Whiskey',
    brand: 'Amrut',
    variant: 'Naarangi',
    age: 6,
    notes: ['orange'],
    abv: 50,
    price: 99
  },{
    image: 'https://img.thewhiskyexchange.com/900/brbon_mak28.jpg',
    origin: 'America',
    type: 'Bourbon',
    brand: 'Makers Mark',
    variant: '46',
    age: 6,
    notes: ['Spice', 'Caramel', 'Sweetness', 'Vanilla'],
    abv: 47,
    price: 40
  },{
    image: 'https://img.thewhiskyexchange.com/900/brbon_cro7.jpg',
    origin: 'Canada',
    type: 'Blended Canadian Whiskey',
    brand: 'Crown Royal',
    variant: 'Canadian Whiskey',
    age: 0,
    notes: ['Vanilla', 'Fruit', 'Oak'],
    abv: 40,
    price: 25
  },{
    image: 'https://img.thewhiskyexchange.com/900/brbon_jac124.jpg',
    origin: 'America',
    type: 'Tennessee Whiskey',
    brand: 'Jack Daniels',
    variant: 'Sinatra Select',
    notes: ['Honey', 'Apple', 'Oak', 'Butterscotch', 'Caramel', 'Orange', 'Vanilla'],
    abv: 45,
    price: 135
  }])
  .then((whiskey) => {
    console.log(`${whiskey.length} whiskeys created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
