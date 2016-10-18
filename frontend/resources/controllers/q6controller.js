var app = angular.module("MainApp");

app.controller("Q6Controller", function($scope) {
    $scope.question = "\"Of course, I'm sorry dear.\" She offers you a:";
    $scope.answer1 = "Banana";
    $scope.answer2 = "Chance to off your dad and run away to Florida together";
    $scope.direct1 = "#/q7";
    $scope.direct2 = "#/q10";
});
