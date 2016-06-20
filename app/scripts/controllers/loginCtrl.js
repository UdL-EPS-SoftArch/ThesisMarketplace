'use strict';

/**
 * @ngdoc function
 * @name thesismarketApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the thesismarketApp
 */
angular.module('thesismarketApp')
  .controller('LoginCtrl', ['ENV', 'authService', 'authDefaults', '$rootScope', '$scope', '$state', '$http',
      function(ENV, authService, authDefaults, $rootScope, $scope, $state, $http) {

        authDefaults.authenticateUrl = ENV.api+'/users';
        // define the endpoints that will be authenticated
        authService.addEndpoint(ENV.api);

        // listen for login events
        $rootScope.$on('login', function() {
          $rootScope.loggedInUsername = authService.username();
          $http.get(ENV.api+'/users/'+$rootScope.loggedInUsername).then(function(result) {
            $rootScope.loggedInUserRoles = result.data.authorities;
          });
          $state.go('home');
        });

        $rootScope.isUserInRole = function(role) {
          return $rootScope.loggedInUserRoles.filter(function(userRole) {
            return userRole.authority === role;
          }).length > 0;
        };

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
