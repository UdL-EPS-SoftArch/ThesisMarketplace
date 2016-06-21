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

    var API = "https://thesismarket-api.herokuapp.com";
    $scope.comments = [];
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
        })
    };
    
    $scope.addComment = function () {
      $scope.comment.comments = API + "/proposalPublications/" + $location.url().split('/')[2];
      Comment.save($scope.comment)
        .$promise
        .then(function (comment) {
          $state.go('home');
        });
    };
  });
