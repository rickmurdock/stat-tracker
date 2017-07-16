var express = require("express");
var apiRouter = express.Router();
const Activity = require("../models/Activity");


// Show a list of all activities I am tracking.
apiRouter.get("/activities", (req, res) => {
  Activity.find()
    .then(foundActivities => {
      res.status(200).send(foundActivities);
    })
});

// Create a new activity for me to track.
apiRouter.post("/api/activities", (req, res) => {
  let activityData = req.body;
  console.log("====", activityData);
  // activityData = { "name": "boating"};
  let newActivity = new Activity(activityData);
  newActivity.save();
  
  res.status(200).send("");
});

// Show information about one activity I am tracking, 
// and give me the data I have recorded for that activity.
apiRouter.get("/api/activities/:id", (req, res) => {

  Activity.findById(req.params.id)
  .then(foundActivity => {
    res.status(200).send(foundActivity);
  })
  .catch(err => {
    res.status(500).send(err);
  });
});

// Update one activity I am tracking, changing attributes 
// such as name or type. Does not allow for changing tracked data.
apiRouter.put("/api/activities/:id", (req, res) => {
  Activity.findOneAndUpdate( { _id: req.params.id }, req.body )
    .then((updatedActivity) => {
      res.json(updatedActivity);
      // res.status(200).send("Activity naem was updated.");
    })
    .catch(err => {
      res.status(500).send(err);
    });   
});

// Delete one activity I am tracking.
// This should remove tracked data for that activity as well.
apiRouter.delete("/api/activities/:id", (req, res) => {
  Activity.deleteOne({ _id: req.params.id})
    .then(() => {
      res.status(200).send("Activity was deleted.");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Add tracked data for a day. The data sent with this should include 
// the day tracked. You can also override the data for a day already recorded.
apiRouter.post("/api/activities/:id/stats", (req, res) => {

  res.status(200).send("");
});

// Remove tracked data for a day.
apiRouter.delete("/api/stats/:id", (req, res) => {

  res.status(200).send("");
});

module.exports = apiRouter;