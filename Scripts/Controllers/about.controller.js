/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("AboutController", [
        "$scope",
        function ($scope) {
            $scope.title = "Bootstrap Labb";

        }
    ]);