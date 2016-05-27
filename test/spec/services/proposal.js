'use strict';

describe('Service: proposal', function () {

  // load the service's module
  beforeEach(module('thesismarketApp'));

  // instantiate service
  var Proposal;
  beforeEach(inject(function (_Proposal_) {
    Proposal = _Proposal_;
  }));

  it('should do something', function () {
    expect(!!Proposal).toBe(true);
  });

});
