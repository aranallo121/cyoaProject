// add dependancies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var highscoreSchema = require("./highscoreSchema");

//UserSchema creation
var userSchema = new Schema ({
  username: {
    type: String,
    require: true,
    unique: ture
  },
  password: {
    type: String,
    require: true
  },

//reference highschore schema
  highsore: {
    type: Schema.Types.ObjectId,
    ref: "highscore"
  }
});

//export schema
module.exports = mongoose.model("user", userSchema);