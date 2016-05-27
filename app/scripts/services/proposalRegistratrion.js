'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.proposalSubmission
 * @description
 * # proposalSubmission
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
  .factory('ProposalRegistration', ['$resource', 'ENV', function($resource, ENV) {
    return $resource(ENV.api+'/proposalRegistrations/:id', null,
      {
        'query': { method:'GET', isArray: false },
        'update': { method:'PUT' },
        'remove': {method:'DELETE'}
      });
  }]);
