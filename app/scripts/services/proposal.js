'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.proposal
 * @description
 * # proposal
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
  .factory('Proposal', ['$resource', 'ENV', function($resource, ENV) {
    return $resource(ENV.api+'/proposals/:id', null,
      {
        'query': { method:'GET', isArray: false },
        'update': { method:'PUT' },
        'remove': {method:'DELETE'}
      });
  }]);
