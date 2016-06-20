'use strict';

angular.module('thesismarketApp')
    .controller('ProposalSubmissionsCtrl', function ($scope, $rootScope, ProposalSubmission, PublishProposals) {

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

            PublishProposals.update(publishSubmission._embeddedItems).$promise.then(function () {
                ProposalSubmission.remove(publishSubmission._embeddedItems).$promise.then(function () {


                }).catch(function (error) {
                    $scope.error = error;
                });
            }).catch(function (error) {
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
        });

    });