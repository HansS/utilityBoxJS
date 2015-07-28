/* global utilityBox.js, describe, it, expect, should */


//TYPE CHECKS


describe('_.isArray', function () {
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

describe('_.isBoolean', function () {
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


describe('_.isFunction', function () {
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

describe('_.isNumber', function () {
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

describe('_.isObject', function () {
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

describe('_.isString', function () {
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


describe('_.isFalsey', function () {
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


describe('_.isTruthy', function () {
  'use strict';
  it('should return a boolean value', function () {
    expect(_.isTruthy("test")).to.be.a('boolean');
  });
  it('should return true if value passed in is a truthy value', function () {
    expect(_.isTruthy(0)).to.equal(false);
  });
  it('should return false if value passed in is a falsey value', function () {
    expect(_.isTruthy("1")).to.equal(true);
  });

});

describe('_.sum', function () {
  'use strict';
  it('should return a number value', function () {
    expect(_.sum([5,5])).to.be.a('number');
  });

  it('should return the sum of numbers in array', function () {
    expect(_.sum([5,5,5])).to.equal(15);
  });

});


