var app = angular.module("MainApp");

app.controller("Q5Controller", function($scope) {
    $scope.question = "\"AGAIN??\" She shreiks. \"That woman wouldn't know a hard working man from Adam!\" After a moment of deep consideration, you:";
    $scope.answer1 = "reply: \"Speaking of Adam, we're fallen humans lost to depravity. Let's kill dad and fufill our carnal desires in Florida\"";
    $scope.answer2 = "Sigh, say nothing";
    $scope.direct1 = "#/q10";
    $scope.direct2 = "#/q8";
});
