var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  // userId: {
  //   type: String,
  //   required: true
  // },
  // userName: {
  //   type: String,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },  
  activity: [
    {
      id: {
        type: Number,
        // required: true
      },
      name: {
        type: String,
        // requied: true
      },
      type: {
        type: String
      },
      tracker: [
        {
          date: {
            type: Date,
            // required: true
          },
          count: {
            type: Number,
            // requied: true,
            default: 0
          }
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Activity", activitySchema);