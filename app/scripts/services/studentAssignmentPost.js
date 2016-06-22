'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.studentAssignment
 * @description
 * # studentAssignment
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
  .factory('StudentAssignment', ['$resource', 'ENV', function($resource, ENV) {
    return $resource(ENV.api+'/studentsAssignments/:id', null,
      {
        'query': { method:'GET', isArray: false },
        'update': { method:'PUT' },
        'remove': {method:'DELETE'}
      });
  }]);
