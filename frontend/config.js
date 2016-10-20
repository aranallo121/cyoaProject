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
    .when("/about", {
        templateUrl: "./templates/about.html",
        controller: "HomeController"
    })
    .when("/leaderboard", {
        templateUrl: "./templates/leaderboard.html"
    })
    .when("/q1", {
        templateUrl: "./templates/page1.html",
        controller: "Q1Controller"
    })
    .when("/q2", {
        templateUrl: "./templates/page1.html",
        controller: "Q2Controller"
    })
    .when("/q3", {
        templateUrl: "./templates/page1.html",
        controller: "Q3Controller"
    })
    .when("/q4", {
        templateUrl: "./templates/page1.html",
        controller: "Q4Controller"
    })
    .when("/q5", {
        templateUrl: "./templates/page1.html",
        controller: "Q5Controller"
    })
    .when("/q6", {
        templateUrl: "./templates/page1.html",
        controller: "Q6Controller"
    })
    .when("/q7", {
        templateUrl: "./templates/page1.html",
        controller: "Q7Controller"
    })
    .when("/q8", {
        templateUrl: "./templates/page1.html",
        controller: "Q8Controller"
    })
    .when("/q9", {
        templateUrl: "./templates/page1.html",
        controller: "Q9Controller"
    })
    .when("/q10", {
        templateUrl: "./templates/page1.html",
        controller: "Q10Controller"
    });

    //as we add pages, we'll add more views and create the html files in the templates folder

});//close config
