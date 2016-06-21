'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:ProposalsCtrl
 * @description
 * # ProposalsCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('ProposalsCtrl', function($scope, $state, $rootScope, Proposal, ProposalSubmission) {

    $scope.proposals = [];
    $scope.error = '';

    Proposal.query().$promise
      .then(function (proposals) {
        $scope.proposals = proposals._embeddedItems||[];
        $scope.proposals.forEach(function(proposal) {
          proposal.creator = proposal._resources('creator').get();
        });
      })
      .catch(function (error) {
        $scope.error = error;
      });

    $scope.submitProposal = function (proposal) {
      var proposalSubmission = {
        submits: '/proposals/' + proposal._links.self.href.split('/').pop() };

      ProposalSubmission.update(proposalSubmission).$promise
        .then(function () {
          $state.go('proposalSubmissions');
        })
        .catch(function (error) {
          $scope.error = error;
        });
    };
    
  });
