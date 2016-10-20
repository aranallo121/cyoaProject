var app = angular.module("MainApp");
app.controller("HomeController", ["$scope", "$location", "LoginService", function ($scope, $location, LoginService) {
      console.log("hitting the home controller");
      $scope.testMessage = "this is a test of the home controller";
      $scope.showLogin = true
        //toggles between signup and login
      $scope.toggleLogin = function () {
        $scope.showLogin = !$scope.showLogin;
      };
      //constructor function to create new user object
      $scope.User = function (username, password) {
          this.username = username;
          this.password = password;
          this.admin = false
        }
        //function to pass user info to constructor
        //and pass object to authservice
      $scope.newUser = function (email, username, password) {
        var newUser = new $scope.User(email, username, password);
        console.log(newUser)
        LoginService.signup(newUser).then(function (response) {
              $scope.toggleLogin();
            })
          }
          //Login a new user
        $scope.loginUser = function (username, password) {
          var userObj = {};
          userObj.username = username;
          userObj.password = password;
          LoginService.login(userObj);
        }
      }]);
