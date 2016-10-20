var app = angular.module("MainApp");

app.controller("Q3Controller", ['$scope', 'ReqService', function($scope, ReqService) {
    ReqService.addPoint();
    $scope.question = "\"YOU ALWAYS TAKE HIS SIDE!!\" She blurts out, and is immediately embarassed. Desperate to defuse the situation, you:";
    $scope.answer1 = "Bring up how badly your boss chewed you out today";
    $scope.answer2 = "Dig your old rifle out of the attic, murk your dad, and hop the next flight into Tampa";
    $scope.direct1 = "#/q5";
    $scope.direct2 = "#/q10";
}]);
