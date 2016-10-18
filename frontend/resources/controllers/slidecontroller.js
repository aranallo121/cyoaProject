var app = angular.module("MainApp");

app.controller("SlideController", function($scope) {
    console.log("hitting the slide controller");
    $scope.questionTest = "This is what the question looks like. i'm typing a few sentences to see how long blocks of text lay on the page";
    $scope.answer1 = "This is the first answer. Some of them are multiple sentences long, so I want to be sure it fits on the button.";
    $scope.answer2 = "Some are short and need to look good too";
    $scope.direct1 = "#/directtest"
});
