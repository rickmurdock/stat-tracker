const express = require("express");
const apiRouter = express.Router();
const Activity = require("../models/Activity");


// Show a list of all activities I am tracking.
apiRouter.get("/activities", (req, res) => {
  Activity
    .find()
    .then(foundActivities => {
      res.status(200).send(foundActivities);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Create a new activity for me to track.
apiRouter.post("/activities", (req, res) => {
  let activityData = req.body;
  let newActivity = new Activity(activityData);
  newActivity
    .save()
    .then(function(newActivity) {
      res.status(200).send(newActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Show information about one activity I am tracking, 
// and give me the data I have recorded for that activity.
apiRouter.get("/activities/:id", (req, res) => {
  Activity
    .findById(req.params.id)
    .then(foundActivity => {
      res.status(200).send(foundActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Update one activity I am tracking, changing attributes 
// such as name or type. Does not allow for changing tracked data.
apiRouter.put("/activities/:id", (req, res) => {
  Activity
    .updateOne( { _id: req.params.id }, req.body )
    .then((updatedActivity) => {
      res.status(200).send(updatedActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });   
});

// Delete one activity I am tracking.
// This should remove tracked data for that activity as well.
apiRouter.delete("/activities/:id", (req, res) => {
  Activity
    .deleteOne({ _id: req.params.id})
    .then(() => {
      res.status(200).send("Activity was deleted.");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Add tracked data for a day. The data sent with this should include 
// the day tracked. You can also override the data for a day already recorded.
apiRouter.post("/activities/:id/stats", (req, res) => {
  Activity
    .findById(req.params.id)
    .then(statLocation => {
      statLocation.tracker.push(req.body);
      statLocation
        .save()
        .then(newStat => {
          res.status(200).send("newStat");
        })
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// Remove tracked data for a day.
apiRouter.delete("stats/:id", (req, res) => {

  res.status(200).send("");
});

module.exports = apiRouter;