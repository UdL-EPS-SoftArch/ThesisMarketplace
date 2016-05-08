'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('LogoutCtrl', ['authService', '$rootScope', '$scope', '$state',
      function(authService, $rootScope, $scope, $state) {

        // listen for logout events
        $rootScope.$on('logout', function() {
          $rootScope.loggedInUsername = null;
          $state.go('home');
        });

        authService.logout();
      }
  ]);
