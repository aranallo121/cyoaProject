// add dependancies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var scoreSchema = require("./scoreSchema");

//HighScoreSchema
var highscoreSchema = new Schema ({
  highscore: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
  
});

//export schema
module.exports = mongoose.model("highscore", highscoreSchema);