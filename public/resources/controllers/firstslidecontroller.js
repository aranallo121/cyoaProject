var app = angular.module("MainApp");

app.controller("Q1Controller", ['$scope', 'ReqService', function($scope, ReqService) {
    ReqService.scoreCount = 0;
    ReqService.addPoint();
    $scope.question = "You walk in the door, set your bag down, and walk in the kitchen. \"Hi, honey!\" exclaims your mom. You reply,";
    $scope.answer1 = "\"Hey mom...How's it going?\"";
    $scope.answer2 = "\"God is dead and we are all decaying matter\"";
    $scope.direct1 = "#/q2";
    $scope.direct2 = "#/q4";
}]);
