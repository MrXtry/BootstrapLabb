/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("BlogController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.title = "Blog";
            $scope.newComment = {};

            $scope.blog = $scope.blogs.filter(function (blog) {
                return blog.id == $routeParams.id;
            })[0];

            console.log($scope.blog);

            $scope.addComment = function () {
                $scope.newComment.date = new Date().toLocaleString();
                $scope.blog.comments.push($scope.newComment);
                $scope.newComment = {};

                $scope.saveBlogs();
            }
        }
    ]);