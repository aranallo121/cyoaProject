// add dependancies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var highscoreSchema = require("./highscoreSchema");

//HighScoreSchema
var highscoreSchema = new Schema ({
  highscore: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  
});

//export schema
module.exports = mongoose.model("highscore", highscoreSchema);