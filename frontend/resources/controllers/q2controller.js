var app = angular.module("MainApp");

app.controller("Q2Controller", function($scope) {
    $scope.question = "\"Fine...\" She replies, hesitating. \"Your dad and I are still having trouble, he just doesn't get it.\" You reply:";
    $scope.answer1 = "\"He's doing the best he can...\"";
    $scope.answer2 = "\"Let's kill him and run off to Florida together.\"";
    $scope.direct1 = "#/q3";
    $scope.direct2 = "#/q4";
});
