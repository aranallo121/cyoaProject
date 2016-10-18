var app = angular.module("MainApp");

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "./templates/main.html",
        controller: "HomeController"
    })
    .when("/login", {
        templateUrl: "./templates/login.html",
        controller: "HomeController"
    })
    .when("/leaderboard", {
        templateUrl: "./templates/leaderboard.html"
    })
    .when("/pg1", {
        templateUrl: "./templates/page1.html"
    })
    .when("/pg2", {
        templateUrl: "./templates/page2.html"
    });

    //as we add pages, we'll add more views and create the html files in the templates folder

});//close config
