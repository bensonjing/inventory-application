#! /usr/bin/env node

console.log(
  "This script populates some test cars, brands, and categories to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
import async from "async";
import Car from "./models/car.js";
import Brand from "./models/brand.js";
import Category from "./models/category.js";

import mongoose from "mongoose";
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const cars = [];
const brands = [];
const categories = [];

const carCreate = (name, price, brand, category, callback) => {
  const car = new Car({
    name: name,
    price: price,
    brand: brand,
    category: category,
  });

  car.save((err) => {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("New Car: " + car);
    cars.push(car);
    callback(null, car);
  });
};

const brandCreate = (name, callback) => {
  const brand = new Brand({ name: name });

  brand.save((err) => {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("New Brand: " + brand);
    brands.push(brand);
    callback(null, brand);
  });
};

const categoryCreate = (name, description, callback) => {
  const category = new Category({
    name: name,
    description: description,
  });

  category.save((err) => {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("New Category: " + category);
    categories.push(category);
    callback(null, category);
  });
};

const createCars = (callback) => {
  async.parallel(
    [
      function (callback) {
        carCreate(
          "Lamborghini Aventador SVJ",
          600000,
          brands[0],
          categories[0],
          callback
        );
      },
      function (callback) {
        carCreate(
          "Lamborghini Urus",
          250000,
          brands[0],
          categories[2],
          callback
        );
      },
      function (callback) {
        carCreate("Mercedes GT63s", 200000, brands[1], categories[1], callback);
      },
      function (callback) {
        carCreate(
          "Rolls Royce Phantom EWB",
          500000,
          brands[2],
          categories[1],
          callback
        );
      },
    ],
    callback
  );
};

const createBrands = (callback) => {
  async.parallel(
    [
      function (callback) {
        brandCreate("Lamborghini", callback);
      },
      function (callback) {
        brandCreate("Mercedes-Benz", callback);
      },
      function (callback) {
        brandCreate("Rolls Royce", callback);
      },
    ],
    callback
  );
};

const createCategories = (callback) => {
  async.parallel(
    [
      function (callback) {
        categoryCreate(
          "Sport Cars",
          "A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving and racing capability.",
          callback
        );
      },
      function (callback) {
        categoryCreate(
          "Sedan",
          "A sedan is a passenger car in a three-box configuration with separate compartments for an engine, passengers, and cargo.",
          callback
        );
      },
      function (callback) {
        categoryCreate(
          "SUV",
          "is a car classification that combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive.",
          callback
        );
      },
    ],
    callback
  );
};

async.series(
  [createBrands, createCategories, createCars],
  function (err, result) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log(result);
    }
    mongoose.connection.close();
  }
);
