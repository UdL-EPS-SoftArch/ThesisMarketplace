/**
 * Created by victor on 27/05/16.
 */


angular.module('thesismarketApp')
  .factory('StudentOffer', ['$resource', 'ENV', function($resource, ENV) {
    return $resource(ENV.api+'/studentOffers/:id', null,
      {
        'query': { method:'GET', isArray: false },
        'update': { method:'PUT' },
        'remove': {method:'DELETE'}
      });
  }]);
