var app = angular.module("MainApp");

app.controller("Q10Controller", ['$scope', 'ReqService', function($scope, ReqService) {
    ReqService.addPoint();
    ReqService.sendPoints();
    $scope.finalScore = ReqService.scoreCount;
    $scope.question = "You kill your dad and abscond with your mother to the Florida Keys. You have succumbed to the OEDIPUS CYCLE. Your final score is: " + $scope.finalScore;
    $scope.answer1 = "Play Again";
    $scope.answer2 = "There is no escape from your unending subconcious torment";
    $scope.direct1 = "#/q1";
    $scope.direct2 = "#/q1";
}]);
