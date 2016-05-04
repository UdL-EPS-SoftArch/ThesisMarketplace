'use strict';

describe('Controller: ProposalsCtrl', function () {

  // load the controller's module
  beforeEach(module('thesismarketApp'));

  var ProposalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProposalsCtrl = $controller('ProposalsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('List of proposals initially empty', function () {
    expect(scope.proposals.length).toBe(0);
  });
});
