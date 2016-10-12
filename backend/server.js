//add dependancies
var express = require("express");
var cors = require("cors");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//create the server by calling express
var app = express();
mongoose.connect("mongodb://localhost/", function(){
  console.log("Mongoose is ready to goose");
});

//add middleware
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"..",'frontend')))



//routes will be added as they're created here.
//each route will also be added as a dependancy above.


//listen
app.listen(8888, function() {
  console.log("app is listening on port 8888")
})