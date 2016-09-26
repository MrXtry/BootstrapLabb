/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("blogModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                .when("/Blogs", {
                    templateUrl: "Views/Blogs.html",
                    controller: "BlogsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Blogs"
                })
                .when("/Blogs/:id", {
                    templateUrl: "Views/Blog.html",
                    controller: "BlogController",
                    caseInsensitiveMatch: true,
                    activeTab: "Blogs"
                });
        }
    ]);