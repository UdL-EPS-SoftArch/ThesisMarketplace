'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.publishProposals
 * @description
 * # proposal
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
    .factory('RegisterProposals', ['$resource', 'ENV', function ($resource, ENV) {
        return $resource(ENV.api + '/proposalRegistrations/:id', null, {
            'query': {
                method: 'GET',
                isArray: false
            },
            'update': {
                method: 'PUT'
            },
            'remove': {
                method: 'DELETE'
            }
        });
  }]);
