var app = angular.module("MainApp");

app.service("LoginService", ["$http", "TokenService", function($http, TokenService){
  
//login service to add a new user. Takes a new user object
  this.user = {};
  
  this.login = function(userObj){
    return $http.post("/auth/login", userObj).then(function(response) {
      console.log(response.data);
      this.user = response.data.user;
      TokenService.setToken(response.data.token);
      return response.data
    })
  }
  
  this.signup = function(userObj){
    return $http.post("/auth/signup", userObj).then(function(response) {
      return response.data
    })
  }
  
  this.logout = function() {
    TokenService.removeToken();
    this.user = {};
  }
  
  this.isAuthenticated = function() {
    return !!TokenService.getToken();
  }
  
}]); //close service

app.factory("AuthInterceptor", function($q, $location, TokenService){
  return {
    request: function(config) {
      var token = TokenService.getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.authorization = "Bearer " + token;
      }
      return config;
    },
    responseError: function(response) {
      if (response.status ===401) {
        TokenService.removeToken();
      }
      return $q.reject(response);
    }
  }
});

app.config(function($httpProvider){
  $httpProvider.intercepotors.push("AuthInterceptor");
});






