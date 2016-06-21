'use strict';

angular.module('thesismarketApp')
    .controller('ProposalSubmissionsCtrl', function ($scope, $rootScope, $state, ProposalSubmission, PublishProposals) {

        $scope.proposalSubmissions = [];
        $scope.user = $rootScope.loggedInUsername;

        /**
         * @ngdoc method
         * @name sendPublicate
         * @methodOf
         * @name init thesismarketApp.controller:ProposalSubmissionsCtrl
         * @description Function send Publish Submission to Publish Proposal.
         */
        $scope.sendPublicate = function (publishSubmission) {
            var proposalPublication = {
              publishes: '/proposalSubmissions/' + publishSubmission._links.self.href.split('/').pop() };

            PublishProposals.update(proposalPublication).$promise
              .then(function () {
                $state.go('publishproposal');
              })
              .catch(function (error) {
                $scope.error = error;
              });
        };

        ProposalSubmission.query().$promise.then(function (proposalSubmissions) {
            $scope.proposalSubmissions = proposalSubmissions._embeddedItems;
            $scope.proposalSubmissions.forEach(function (proposalSubmission) {
                proposalSubmission.submits = proposalSubmission._resources('submits').get();
                proposalSubmission.agent = proposalSubmission._resources('agent').get();
                var ref = proposalSubmission._links.self.href;
                proposalSubmission.title = ref.split('/')[3] + ' ' + ref.split('/')[4];
            });
        }).catch(function (error) {
          $scope.error = error;
        });

    });
