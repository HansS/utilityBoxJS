/* global utilityBox.js, describe, it, expect, should */


//TYPE CHECKS


describe('isArray', function () {
  'use strict';
  it('should return a boolean', function () {
    expect(_.isArray([])).to.be.a('boolean')
  });
  it('should return true if value passed in is an array', function () {
    expect(_.isArray([1,2,3])).to.equal(true);
  });
  it('should return false if value passed in is not an array', function () {
    expect(_.isArray(1)).to.equal(false);
  });

});

describe('isBoolean', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isBoolean(1)).to.be.a('boolean');
  });
  it('should return true if value passed in is a boolean value', function () {
    expect(_.isBoolean(false)).to.equal(true);
  });
  it('should return false if value passed in is not a boolean value', function () {
    expect(_.isBoolean(1)).to.equal(false);
  });

});