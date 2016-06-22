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
    var selectUsers = document.getElementById("selStudents");

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

    $scope.students = [];
    $scope.error = '';

    User.query().$promise
      .then(function (users) {
        $scope.users = users._embeddedItems||[];
        $scope.users.forEach(function(user) {
          var opt = document.createElement("option");
          opt.value= user.id;
          opt.text = user.username;
          selectUsers.appendChild(opt);
        });
      })
      .catch(function (error) {
        $scope.error = error;
      });
  });
