'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:proposalRegistrationCtrl
 * @description
 * # ProposalRegistrationCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')

.controller('ProposalRegistrationCtrl', function (RegisterProposals) {


    var vm = this;

    /**
     * @ngdoc method
     * @name init
     * @methodOf
     * @name init thesismarketApp.controller:proposalRegistrationCtrl
     * @description Function for show registered proposals.
     */
    //init function
    function init() {


       $scope.proposalRegisters = [];

        RegisterProposals.query().$promise.then(function (registerProposals) {
            vm.registerProposals = registerProposals._embeddedItems;
            vm.registerProposals.forEach(function (publishProposal) {
                registerProposals.registers = registerProposals._resources("registers").get();
                registerProposals.agent = registerProposals._resources("agent").get();
            });

        });
    }
    init();
});
