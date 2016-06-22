'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:AssignStudentCtrl
 * @description
 * # Create a new assign with student and proposal
 * Controller of the thesismarketApp
 */

angular.module('thesismarketApp')
  .controller('StudentsAssignmentsCtrl', function($scope, StudentAssignment) {

    var selectProposals = document.getElementById("selProposal");

    $scope.proposals = [];
    $scope.error = '';

    Proposal.query().$promise
      .then(function (proposals) {
        $scope.proposals = proposals._embeddedItems||[];
        $scope.proposals.forEach(function(proposal) {
          var opt = document.createElement("option");
          opt.value= proposal.id;
          opt.text = proposal.getTitle();
          selectProposals.appendChild(opt);
        });
      })
      .catch(function (error) {
        $scope.error = error;
      });

  });
