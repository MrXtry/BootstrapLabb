﻿/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("BlogsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Blogs";
            $scope.newBlog = {
                name: "",
                description: ""
            };
            $scope.blogsList = $scope.blogs;

            $scope.addBlog = function () {
                if ($scope.blogs.length == 0)
                    $scope.newBlog.id = 1;
                else
                    $scope.newBlog.id = $scope.blogs[$scope.blogs.length - 1].id + 1;

                $scope.blogs.push($scope.newBlog);
                $scope.newBlog = {};

                $scope.saveBlogs();
            }

            //function blogsListReverse() {
            //    $scope.blogsList.reverse();
            //}



            $scope.removeBlog = function (index) {
                $scope.blogsList.splice(index, 1);
                //var blogRevers = $scope.blogsList.reverse();
                $scope.blogs = $scope.blogsList;
                //$scope.blogsList.reverse();
                $scope.saveBlogs();
            }

            console.log($scope.blogs.length);
            //blogsListReverse();
        }
    ]);