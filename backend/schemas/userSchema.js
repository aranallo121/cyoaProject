// add dependancies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var highscoreSchema = require("./highscoreSchema");
var bcrypt = require('bcrypt');

//UserSchema creation
var userSchema = new Schema ({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  admin: {
    type: Boolean,
    defalut: false
  },
//reference highschore schema
  highsore: {
    type: Schema.Types.ObjectId,
    ref: "highscore"
  }
});

userSchema.pre("save", function(next) {
  var user = this;
  if(!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next (err);
    user.password = hash;
    next();
  })
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    } else {
      callback(null, isMatch);
    }
  })
}

userSchema.methods.withoutPassword = function() {
  var user = this.toObject();
  delete user.password;
  return user;
}

//export schema
module.exports = mongoose.model("User", userSchema);