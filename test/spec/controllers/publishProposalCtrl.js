'use strict';

describe('Controller: PublishProposalCtrl', function() {

    // load the controller's module
    beforeEach(module('thesismarketApp'));

    var ProposalsCtrl, $q, $rootScope, $httpBackend, mockProposal, queryDeferred;

    beforeEach(inject(function(_$q_, _$rootScope_, _$httpBackend_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET("views/publishproposal.html").respond("<div>mock home</div>");


    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller) {

        mockProposal = {
            query: function() {
                queryDeferred = $q.defer();
                return {
                    $promise: queryDeferred.promise
                };
            }
        };

        spyOn(mockProposal, 'query').and.callThrough();

        ProposalsCtrl = $controller('PublishProposalCtrl', {
            'Proposal': mockProposal
        });
    }));

    it('List of proposals initially empty', function() {
        expect(ProposalsCtrl.publishProposals.length).toBe(0);
    });

    describe('Proposal.query', function() {

        var mockProposalResponse = {
            "_embeddedItems": [{
                "title": "Proposal 1"
            }, {
                "title": "Proposal 2"
            }]
        };

        beforeEach(function() {
            queryDeferred.resolve(mockProposalResponse);
            $rootScope.$apply();
        });

        /*it('should query MeetingProposal service', function() {
            expect(mockProposal.query).toHaveBeenCalled();
        });

        it('should set the response from the MeetinProposal.query to $scope.meetings', function() {
            expect(ProposalsCtrl.publishProposals.length).toBe(2);
        });*/

    });
});