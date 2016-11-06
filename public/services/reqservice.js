var app = angular.module('MainApp');

app.service("ReqService", function($http) {
//when routes are fleshed out serverside, they will go here
this.scoreCount = 1;

this.addPoint = function() {
    this.scoreCount ++;
    console.log(this.scoreCount);
};
this.sendPoints = function() {
    console.log(this.scoreCount);

};

});
