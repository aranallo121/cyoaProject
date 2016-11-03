var app = angular.module("MainApp");

app.service("TokenService", function() {
  var userToken = "token";

  this.setToken = function(token) {
    localStorage[userToken] = token;
};

  this.getToken = function() {
    return localStorage[userToken];
};

  this.removeToken = function() {
    localStorage.removeItem(userToken);
};
});
