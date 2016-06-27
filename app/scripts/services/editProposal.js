'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.editProposal
 * @description
 * # Editproposal
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
  .factory('EditProposals', ['$resource', 'ENV', function ($resource, ENV) {
    return $resource(ENV.api + '/proposals/:id', null, {
      'query': {
        method: 'GET',
        isArray: false
      },
      'update': {
        method: 'POST'
      },
      'remove': {
        method: 'DELETE'
      }
    });
  }]);
