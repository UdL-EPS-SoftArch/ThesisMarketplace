
'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:EditProposalCtrl
 * @description
 * # EditProposalCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('EditProposalCtrl', function($scope, $stateParams, PublishProposals) {

    $scope.publication = {};

    $scope.error = '';

    PublishProposals.query({id: $stateParams.id}).$promise
      .then(function (publication) {
        $scope.publication = publication;
        $scope.publication.publishes = publication._resources('publishes').get();
        $scope.publication.agent = publication._resources('agent').get();
        $scope.publication.commentedBy = publication._resources('commentedBy').get();
      })
      .catch(function (error) {
        $scope.error = error;
      });

    $scope.editProposal = function () {
      $scope.proposal = '/Proposals/' + $location.url().split('/')[2];
      Proposal.save($scope.comment).$promise
        .then(function() {
          $state.go('home');
        })
        .catch(function (error) {
          $scope.error = error;
        });
    };

  });
