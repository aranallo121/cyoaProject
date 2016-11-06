var app = angular.module("MainApp");

app.controller("Q4Controller", ['$scope', 'ReqService', function($scope, ReqService) {
    ReqService.addPoint();
    $scope.question = "\"Oh honey!\" She laughts, sheepishly. \"You are so silly. How has work been lately?\"";
    $scope.answer1 = "\"Oh fine, my boss has been giving me a hard time, though.\"";
    $scope.answer2 = "\"Don't ask me stupid questions. Feed me\"";
    $scope.direct1 = "#/q5";
    $scope.direct2 = "#/q6";
}]);
