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
    .when("/q1", {
        templateUrl: "./templates/page1.html",
        controller: "Q1Controller"
    })
    .when("/pg1", {
        templateUrl: "./templates/page1.html",
        controller: "SlideController"
    });

    //as we add pages, we'll add more views and create the html files in the templates folder

});//close config
