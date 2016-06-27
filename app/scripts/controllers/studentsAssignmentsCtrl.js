'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:StudentsAssignmentsCtrl
 * @description
 * # StudentsAssignments
 * Controller of the thesismarketApp
 */

angular.module('thesismarketApp')
  .controller('StudentsAssignmentsCtrl', function($scope, StudentAssignment) {

    $scope.studentsAssignments = [];

    StudentAssignment.query().$promise.then(function (studentsAssignments) {
      $scope.studentsAssignments = studentsAssignments._embeddedItems;

      $scope.studentsAssignments.forEach(function(studentAssignment) {
        studentAssignment.assigns = studentAssignment._resources('assigns').get();
        $scope.proposal = studentAssignment.assigns.getTarget();
      });

    });

  });
