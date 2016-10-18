var app = angular.module("MainApp");

app.controller("Q8Controller", function($scope) {
    $scope.question = "Seeing your frustration, your mom silently walks over and embraces you. Upon realizing the hug has lingered upwards of ten seconds, you";
    $scope.answer1 = "Walk out to the garage, grab a hammer, bludgeon your dad to death, quickly pack your bags and hit the open road with your mom towards Florida";
    $scope.answer2 = "Pull away awkwardly, denying what you both know to be true";
    $scope.direct1 = "#/q10";
    $scope.direct2 = "#/q9";
});
