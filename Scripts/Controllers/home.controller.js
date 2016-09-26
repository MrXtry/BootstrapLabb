/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            var blogsList = $scope.blogs.slice(Math.max($scope.length - 3, 1)).reverse();
            var firstBlog = blogsList[0];
            $scope.firstBlogHome = firstBlog;
            blogsList.splice(0, 1);
            $scope.blogListHome = blogsList;
                
            console.log(blogsList);

        }
    ]);