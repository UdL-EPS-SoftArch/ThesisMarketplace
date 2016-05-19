'use strict';

angular.module('thesismarketApp')
  .controller('ProposalSubmissionsCtrl', function($scope, ProposalSubmission) {

    $scope.proposalSubmissions = [];

    ProposalSubmission.query().$promise.then(function (proposalSubmissions) {
      $scope.proposalSubmissions = proposalSubmissions._embeddedItems;
      $scope.proposalSubmissions.forEach(function(proposalSubmission) {
        proposalSubmission.submits = proposalSubmission._resources('submits').get();
        proposalSubmission.agent = proposalSubmission._resources('agent').get();
        var ref = proposalSubmission._links.self.href;
        proposalSubmission.title = ref.split('/')[3] + ' ' + ref.split('/')[4];
      });
    });

  });
