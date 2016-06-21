'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:PublishProposalCtrl
 * @description
 * # PublishProposalCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')

.controller('PublishProposalCtrl', function (PublishProposals, $rootScope, $scope) {
  
    var vm = this;
    $scope.error = '';
  
    //init function
    function init() {

        vm.publishProposals = [];
      
        PublishProposals.query().$promise.then(function (publishProposals) {
            vm.publishProposals = publishProposals._embeddedItems;
            vm.publishProposals.forEach(function (publishProposal) {
                publishProposal.publishes = publishProposal._resources('publishes').get();
                publishProposal.agent = publishProposal._resources('agent').get();
                publishProposal.commentedBy = publishProposal._resources('commentedBy').get();
            });

        }).catch(function (error) {
            $scope.error = error;
        });

    }
  
    init();
});
