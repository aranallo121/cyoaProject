var express = require('express');
var highscoreRoute = express.Router();
var User = require('../schemas/userSchema.js');
var Highscore = require('../schemas/highscoreSchema.js');

//this route will be used to pull all highscores to view on like a leader board
highscoreRoute.route('/')
  .get(function(req,res) {
    Highscore.find({
      user:req.user._is
    }, function(err, highscores) {
      if(err) res.status(500).send(err);
      res.send(highscores);
    });
  })

//the post will add new highscores depending on how many pages a user sees while playing
  .post(function(req,res){
    var highscore = new Highscore(req.body);
    highscore.user = req.user;
    highscore.save(function (err, newHighscore) {
      if(err) res.status(500).send(err);
      res.status(201).send(newHighscore);
    })
  });


//this route will be used if we want to pull an individual user's highscore. Maybe we show the user's high score as part of a profile or whatever
highscoreRoute.route('/:highscoreId')
  .get(function(req,res) {
    Highscore.findOne({
      _id:req.params.highscoreId,
      user: req.user._id
    }, function(err, score) {
      if(err) res.status(500).send(err);
      if(!score) res.status(404).send("No score yet");
      else res.send(score);
    });
  })

//This will be used when a player plays again and will need to update their highscore
  .put(function(req,res) {
    Highscore.findByIdAndUpdate({
      _id: req.params.highscoreId,
      user: req.user._id
    }, req.body, {
      new: true
    }, function(err, score){
      if(err) res.status(500).send(err);
      res.send(score);
    })
  });

module.exports = highscoreRoute;
  







