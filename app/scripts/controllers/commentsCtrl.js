'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:CommentsCtrl
 * @description
 * # CommentCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
    .controller('CommentsCtrl', function ($scope, Comment) {

        $scope.comments = [];

        Comment.query().$promise.then(function (comments) {
            $scope.comments = comments._embeddedItems;
            $scope.comments.forEach(function (comment) {
                comment.author = comment._resources("author").get();
            });
        });

    });
