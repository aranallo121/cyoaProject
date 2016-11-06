var app = angular.module("MainApp");

app.controller("Q9Controller", ['$scope', 'ReqService', function($scope, ReqService) {
    ReqService.addPoint();
    $scope.question = "\"I CAN'T STAND THE TENSION ANYMORE! I want you, and I know you want me. Let's get your dad out of the picture and start a new life in the Great American Land of Paradise that is the state of Florida.\" Once you recover from your shock, you gather your thoughts, look mom in the eyes, and mutter:";
    $scope.answer1 = "\"Heck Yeah\"";
    $scope.answer2 = "\"Hell Yeah\"";
    $scope.direct1 = "#/q10";
    $scope.direct2 = "#/q10";
}]);
