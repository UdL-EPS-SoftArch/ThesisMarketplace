'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:PublishProposalCtrl
 * @description
 * # PublishProposalCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
    .controller('PublishProposalCtrl', function(Proposal) {

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

            Proposal.query().$promise.then(function(proposals) {
                vm.publishProposals = proposals._embeddedItems;
            });



        }

        init();


    });