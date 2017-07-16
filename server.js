const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const bodyParser = require("body-parser");
var api = require("./routes/api");
var jwt = require('jsonwebtoken');
// Require the config file containing the key to sign the JWT.
var jwtConfig = require('./jwtConfig.js');
const app = express();
const port = process.env.port || 8010;
const dbURL = "mongodb://localhost:27017/statTracker";
//const Activity = require("./models/Activity");

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB CONNECTION
mongoose.connect(dbURL).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("connected to statTracker DB.");
});

let user = "Rick";
let password = "pass";


// let newActivity = new Activity({"name": "walking", "type": "exercise" });
// newActivity.save();

// newActivity = new Activity({ "name": "running", "type": "exercise"});
// newActivity.save();

// newActivity = new Activity({ "name": "sleeping" });
// newActivity.save();


// ROUTES
// app.use("/api", checkAuth, api);
app.use("/api", api);


// LISTENER
app.listen(port, () => {
  console.log(`Server is running on ${port}!`);
});