'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.proposalSubmission
 * @description
 * # proposalSubmission
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
  .factory('ProposalSubmission', ['$resource', 'ENV', function($resource, ENV) {
    return $resource(ENV.api+'/proposalSubmissions/:id', null,
      {
        'query': { method:'GET', isArray: false },
        'update': { method:'PUT' },
        'remove': {method:'DELETE'}
      });
  }]);
