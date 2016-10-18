var app = angular.module("MainApp");

app.controller("HomeController", function($scope) {
    console.log("hitting the home controller");
    $scope.testMessage = "this is a test of the home controller";
});
