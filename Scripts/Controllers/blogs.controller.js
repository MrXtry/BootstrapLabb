/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("BlogsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Blogs";
            $scope.newBlog = {
                author: "anon",
                name: "",
                description: "",
                comments: []
            };
            $scope.blogsList = $scope.blogs;

            $scope.addBlog = function () {
                if ($scope.blogs.length == 0)
                    $scope.newBlog.id = 1;
                else
                    $scope.newBlog.id = $scope.blogs[$scope.blogs.length - 1].id + 1;

                $scope.newBlog.date = new Date().toLocaleString();
                
                $scope.blogs.push($scope.newBlog);
                $scope.newBlog = {};

                $scope.saveBlogs();
            }

            $scope.removeBlog = function (index) {
                $scope.blogsList.splice(index, 1);
                $scope.blogs = $scope.blogsList;

                $scope.saveBlogs();
            }

        }
    ]);