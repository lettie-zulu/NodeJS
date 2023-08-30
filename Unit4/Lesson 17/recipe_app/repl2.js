"use strict";
const mongoose = require("mongoose"), //require Mongoose
  Subscriber = require("./models/subscriber"), //assign the subscriber model to a variable using he model name and local project file.
  Course = require("./models/course");  //require the course model

var testCourse, testSubscriber; //set up two variables outsode the promise chain

mongoose.connect(  "mongodb://127.0.0.1:27017/recipe_db", { useNewUrlParser: true });
mongoose.Promise = global.Promise;  //tell Mongoose to use native promises as in main.js



//17.5 page183
Subscriber.create({
  name: "Jon",
  email: "jon@jonwexler.com",
  zipCode: "12345",
})
  .then((subscriber) => console.log(subscriber))
  .catch((error) => console.log(error.message)); //create a new subscriber document

  var subscriber; //set up a variable to hold query results
Subscriber.findOne({
  name: "Jon",
}).then((result) => {
  subscriber = result;              //search for the document you just created
 // console.log(subscriber.getInfo());    //log the subscriber record
});

// const Course = require("./models/course");
// var testCourse, testSubscriber;
// Course.create({
//   title: "Tomato Land",
//   description: "Locally farmed tomatoes only",
//   zipCode: 12345,
//   items: ["cherry", "heirloom"],
// }).then((course) => (testCourse = course));
// Subscriber.findOne({}).then((subscriber) => (testSubscriber = subscriber));
// testSubscriber.courses.push(testCourse._id);
// testSubscriber.save();
// Subscriber.populate(testSubscriber, "courses").then((subscriber) =>
//   console.log(subscriber)
// );