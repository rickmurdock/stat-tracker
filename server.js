const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/apiRoutes");
const loginRouter = require("./routes/loginRoutes");
const checkAuth = require("./middleware/checkAuth");
const app = express();
const port = process.env.port || 8010;
const dbURL = "mongodb://localhost:27017/statTracker";
const Activity = require("./models/Activity");

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

// let newActivity = new Activity({"name": "walking", "type": "exercise" });
// newActivity.save();

// newActivity = new Activity({ "name": "running", "type": "exercise"});
// newActivity.save();

// newActivity = new Activity({ "name": "sleeping" });
// newActivity.save();


// ROUTES
app.use("/login", loginRouter);
app.use("/api", checkAuth, apiRouter);

// LISTENER
app.listen(port, () => {
  console.log(`Server is running on ${port}!`);
});