
'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:EditProposalCtrl
 * @description
 * # EditProposalCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('EditProposalCtrl', function($scope, $location, $state, $stateParams, Proposal) {

    $scope.proposal = {};
    $scope.error = '';

    Proposal.query({id: $stateParams.id}).$promise
      .then(function (proposal) {
        $scope.proposal = proposal;
      })
      .catch(function (error) {
        $scope.error = error;
      });

    $scope.editProposal = function () {
      Proposal.update({id: $stateParams.id}, $scope.proposal).$promise
        .then(function() {
          $state.go('proposals');
        })
        .catch(function (error) {
          $scope.error = error;
        });
    };

  });
