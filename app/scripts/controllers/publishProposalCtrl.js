'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:PublishProposalCtrl
 * @description
 * # PublishProposalCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')

.controller('PublishProposalCtrl', function (PublishProposals) {


    var vm = this;

    /**
     * @ngdoc method
     * @name init
     * @methodOf              
     * @name init thesismarketApp.controller:PublishProposalCtrl
     * @description Function who is auto-executed first.
     */
    //init function
    function init() {

        vm.publishProposals = [];


        PublishProposals.query().$promise.then(function (publishProposals) {
            vm.publishProposals = publishProposals._embeddedItems;
            vm.publishProposals.forEach(function (publishProposal) {
                publishProposal.publishes = publishProposal._resources("publishes").get();
                publishProposal.agent = publishProposal._resources("agent").get();
            });

        });



    }

    init();


});
