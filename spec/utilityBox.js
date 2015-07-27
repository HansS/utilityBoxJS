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


describe('isFunction', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isFunction("test")).to.be.a('boolean');
  });
  it('should return true if value passed in a function', function () {
    expect(_.isFunction(function(){})).to.equal(true);
  });
  it('should return false if value passed in is not a function', function () {
    expect(_.isFunction(1)).to.equal(false);
  });

});

describe('isNumber', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isNumber("test")).to.be.a('boolean');
  });
  it('should return true if value passed in a number', function () {
    expect(_.isNumber(100)).to.equal(true);
  });
  it('should return false if value passed in is not a number', function () {
    expect(_.isNumber("100")).to.equal(false);
  });

});

describe('isObject', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isObject("test")).to.be.a('boolean');
  });
  it('should return true if value passed in a object', function () {
    expect(_.isObject({one:1})).to.equal(true);
  });
  it('should return false if value passed in is not a object', function () {
    expect(_.isObject("object")).to.equal(false);
  });

});

describe('isString', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isString("test")).to.be.a('boolean');
  });
  it('should return true if value passed in is a string', function () {
    expect(_.isString("1")).to.equal(true);
  });
  it('should return false if value passed in is not a function', function () {
    expect(_.isString(1)).to.equal(false);
  });

});


describe('isFalsey', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isFalsey("test")).to.be.a('boolean');
  });
  it('should return true if value passed in is a falsey value', function () {
    expect(_.isFalsey(0)).to.equal(true);
  });
  it('should return false if value passed in is a truthy value', function () {
    expect(_.isFalsey("1")).to.equal(false);
  });

});


