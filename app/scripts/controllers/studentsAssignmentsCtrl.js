'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:StudentsAssignmentsCtrl
 * @description
 * # StudentsAssignments
 * Controller of the thesismarketApp
 */

alert("")

angular.module('thesismarketApp')
  .controller('StudentsAssignmentsCtrl', function($scope, StudentAssignment) {

    alert("Enter controller");
    $scope.studentsAssignments = [];
    alert("test1");

    StudentAssignment.query().$promise.then(function (studentsAssignments) {
      $scope.studentsAssignments = studentsAssignments._embeddedItems;

      $scope.studentsAssignments.forEach(function(studentAssignment) {
        studentAssignment.assigns = studentAssignment._resources("assigns").get();
      });

    });

  });
