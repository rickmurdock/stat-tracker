var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  name: {
    type: String,
    requied: true
  },
  measurement: {
    type: String
  },
  tracker: [
    {
      date: {
        type: Date
      },
      count: {
        type: Number,
        default: 0
      }
    }
  ]
});

module.exports = mongoose.model("Activity", activitySchema);