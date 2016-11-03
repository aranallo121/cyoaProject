var app = angular.module("MainApp");

app.controller("Q7Controller", ['$scope', 'ReqService', function($scope, ReqService) {
    ReqService.addPoint();
    $scope.question = "You accept, and she takes one too. As you eat your bananas, you can't help but feel weird about the sensual undertones of the situation. Struggling to divert from the tension, you";
    $scope.answer1 = "Give in, craft a plan to smother your dad in his sleep, and begin charting the most subtle route to the Florida backwoods with mom";
    $scope.answer2 = "Desperately want to win this game but recognize that you are essentially just another decomposing mammal, games (like life) are meaningless and free will is an illusion";
    $scope.direct1 = "#/q10";
    $scope.direct2 = "#/q10";
}]);
