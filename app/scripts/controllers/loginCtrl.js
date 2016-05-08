'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('LoginCtrl', ['ENV', 'authService', 'authDefaults', '$rootScope', '$scope', '$state',
      function(ENV, authService, authDefaults, $rootScope, $scope, $state) {

        authDefaults.authenticateUrl = ENV.api+'/users';
        // define the endpoints that will be authenticated
        authService.addEndpoint(ENV.api);

        // listen for login events
        $rootScope.$on('login', function() {
          $rootScope.loggedInUsername = authService.username();
          $state.go('home');
        });

        // method to log-in
        $scope.onLoginButton = function () {
          // pass input username and password to
          // the service for authentication
          authService
            .login($scope.username, $scope.password)
            .success(function() {
              $scope.error = false;
            })
            .error(function() {
              $scope.error = 'Invalid credentials';
            });
        };
      }
  ]);
