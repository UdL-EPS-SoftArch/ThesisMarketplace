'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:RegisterProposals
 * @description
 * # registerProposalCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')

.controller('RegisterProposalCtrl', function (RegisterProposals) {


    var vm = this;

    /**
     * @ngdoc method
     * @name init
     * @methodOf
     * @name init thesismarketApp.controller:registerProposalCtrl
     * @description Function who is auto-executed first.
     */
    //init function
    function init() {

        vm.registerProposals = [];

        RegisterProposals.query().$promise.then(function (registerProposals) {
            vm.registerProposals = registerProposals._embeddedItems;
            vm.registerProposals.forEach(function (registerProposal) {
                registerProposal.registers = registerProposal._resources('registers').get();
                registerProposal.agent = registerProposal._resources('agent').get();
            });
        });
    }
    init();
});
