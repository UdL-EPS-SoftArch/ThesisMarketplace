'use strict';

/**
 * @ngdoc service
 * @name thesismarketApp.publishProposals
 * @description
 * # proposal
 * Factory in the thesismarketApp.
 */

angular.module('thesismarketApp')
    .factory('PublishProposals', ['$resource', 'ENV', function ($resource, ENV) {
        return $resource(ENV.api + '/proposalPublications/:id', null, {
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
  }])
    .factory('PublishSubmissions', ['$resource', 'ENV', function ($resource, ENV) {
        return $resource(ENV.api + '/proposalSubmissions/:id', null, {
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