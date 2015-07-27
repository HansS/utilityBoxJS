/* global utilityBox.js, describe, it, expect, should */


//TYPE CHECKS
describe('isArray', function () {
  'use strict';
  it('should return a boolean', function () {
    expect(isArray([])).to.be.a('boolean')
  });
  it('should return true if value passed in is an array', function () {
    expect(isArray([1,2,3])).to.equal(true);
  });
  it('should return false if value passed in is not an array', function () {
    expect(isArray(1)).to.equal(false);
  });

});

describe('isArray', function () {
  'use strict';
  it('should return a boolean', function () {
    expect(isArray([])).to.be.a('boolean')
  });
  it('should return true if value passed in is an array', function () {
    expect(isArray([1,2,3])).to.equal(true);
  });
  it('should return false if value passed in is not an array', function () {
    expect(isArray(1)).to.equal(false);
  });


  // Add more assertions here
});