'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:CommentsCtrl
 * @description
 * # CommentCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('CommentsCtrl', function ($scope, $location, $state, Comment) {

    $scope.comments = [];
    $scope.comment = {};
    $scope.error = '';

    $scope.getComments = function () {
      Comment.query().$promise
        .then(function (comments) {
          $scope.comments = comments._embeddedItems;
          $scope.comments
            .forEach(function (comment) {
              comment.author = comment._resources('author').get();
              comment.comments = comment._resources('comments').get();
            });
        })
        .catch(function (error) {
          $scope.error = error;
        });
    };

    $scope.addComment = function () {
      $scope.comment.comments = '/proposalPublications/' + $location.url().split('/')[2];
      Comment.save($scope.comment).$promise
        .then(function() {
          $state.go('home');
        })
        .catch(function (error) {
          $scope.error = error;
        });
    };
  });
