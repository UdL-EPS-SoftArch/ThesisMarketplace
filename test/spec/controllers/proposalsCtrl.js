'use strict';

describe('Controller: ProposalsCtrl', function () {

  //angular.module('thesismarketApp', []).config(function (SpringDataRestInterceptorProvider) {
  //  SpringDataRestInterceptorProvider.apply();
  //});

  // load the controller's module
  beforeEach(module('thesismarketApp'));

  var ProposalsCtrl, $q, $rootScope, $httpBackend, $scope, mockProposal, queryDeferred;

  beforeEach(inject(function(_$q_, _$rootScope_, _$httpBackend_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET("views/home.html").respond("<div>mock home</div>");
    $httpBackend.expectGET("views/proposals.html").respond("<div>mock proposals</div>");
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    $scope = $rootScope.$new();

    mockProposal = {
      query: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      }
    };

    spyOn(mockProposal, 'query').and.callThrough();

    ProposalsCtrl = $controller('ProposalsCtrl', {
      '$scope': $scope,
      'Proposal': mockProposal
    });
  }));

  it('List of proposals initially empty', function () {
    expect($scope.proposals.length).toBe(0);
  });

  describe('Proposal.query', function () {

    var mockProposalResponse = {
      "_embeddedItems": [ 
        { "title": "Proposal 1", _resources: function(){return {get: function(){}}} }, 
        { "title": "Proposal 2", _resources: function(){return {get: function(){}}} } ]
    };

    beforeEach(function() {
      queryDeferred.resolve(mockProposalResponse);
      $rootScope.$apply();
    });

    it('should query Proposal service', function () {
      expect(mockProposal.query).toHaveBeenCalled();
    });

    it('should get 2 proposals', function () {
      expect($scope.proposals.length).toBe(2);
    });

  });
});
