'use strict';

angular.module('thesismarketApp')
  .controller('ProposalSubmissionsCtrl', function($scope, ProposalSubmission) {

    $scope.proposalSubmissions = [];

    ProposalSubmission.query().$promise.then(function (proposalSubmissions) {
      $scope.proposalSubmissions = proposalSubmissions._embeddedItems;
    });

  });
