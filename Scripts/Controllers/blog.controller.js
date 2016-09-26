/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("BlogController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.title = "Blog";

            $scope.blog = $scope.blogs.filter(function (blog) {
                return blog.id == $routeParams.id;
            })[0];

            console.log($scope.blog);
        }
    ]);