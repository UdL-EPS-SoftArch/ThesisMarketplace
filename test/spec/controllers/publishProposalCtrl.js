'use strict';

describe('Controller: PublishProposalCtrl', function() {

    // load the controller's module
    beforeEach(module('thesismarketApp'));

    var ProposalsCtrl, $q, $rootScope, $scope, $httpBackend, mockPublishProposal, queryDeferred;

    beforeEach(inject(function(_$q_, _$rootScope_, _$httpBackend_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET("views/home.html").respond("<div>mock home</div>");
        $httpBackend.expectGET("views/publishproposal.html").respond("<div>mock home</div>");
    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller) {
        $scope = $rootScope.$new();

        mockPublishProposal = {
            query: function() {
                queryDeferred = $q.defer();
                return {
                    $promise: queryDeferred.promise
                };
            }
        };

        spyOn(mockPublishProposal, 'query').and.callThrough();

        ProposalsCtrl = $controller('PublishProposalCtrl', {
          '$scope': $scope,
          'PublishProposals': mockPublishProposal
        });
    }));

    it('List of proposals initially empty', function() {
        expect(ProposalsCtrl.publishProposals.length).toBe(0);
    });

    describe('PublishProposal.query', function() {

    var mockPublishProposalResponse = {
      "_embeddedItems": [
        { "title": "Proposal Publication 1", _resources: function(){return {get: function(){}}} },
        { "title": "Proposal Publication 2", _resources: function(){return {get: function(){}}} } ]
    };

        beforeEach(function() {
            queryDeferred.resolve(mockPublishProposalResponse);
            $rootScope.$apply();
        });

        it('should query PublishProposal service', function() {
            expect(mockPublishProposal.query).toHaveBeenCalled();
        });

        it('should get 2 proposal publications', function() {
            expect(ProposalsCtrl.publishProposals.length).toBe(2);
        });

    });
});
