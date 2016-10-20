var app = angular.module('MainApp');

app.service("ReqService", function($http) {
//when routes are fleshed out serverside, they will go here
this.scoreCount = 1;

this.addPoint = function() {
    this.scoreCount ++;
    console.log(this.scoreCount);
};
console.log("hitting the req service" + this.scoreCount);

    // this.getUsers = $http.get("http://localhost:8888/routegoeshere").then(function(response) {
    //     return response.data;
    // });
    // this.getOneUser = function(id) {
    //     return $http.get("http://localhost:8080/routegoeshere/" + id).then(function(response) {
    //         return response.data;
    //     });
    // };
});
