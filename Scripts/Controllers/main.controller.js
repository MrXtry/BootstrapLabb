/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("MainController", [
        "$scope",
        "$route",
        "$location",
        function ($scope, $route, $location) {
            $scope.$route = $route;
            $scope.blogs = [];

            $scope.loadBlogs = function () {
                var dataString = localStorage.getItem("blogs");
                if (dataString)
                    $scope.blogs = JSON.parse(dataString);
            }

            $scope.saveBlogs = function () {
                var jsonString = JSON.stringify($scope.blogs);
                localStorage.setItem("blogs", jsonString);
            }

            $scope.go = function (url) {
                $location.path(url);
            }


            $scope.loadBlogs();
        }
    ]);