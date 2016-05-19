'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:ProposalsCtrl
 * @description
 * # ProposalsCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('ProposalsCtrl', function($scope, Proposal) {

    $scope.proposals = [];

    Proposal.query().$promise.then(function (proposals) {
      $scope.proposals = proposals._embeddedItems;
      $scope.proposals.forEach(function(proposal) {
        proposal.creator = proposal._resources("creator").get();
      });
    });

  });
