/*! utilityBox.js v0.0.0 - MIT license */
'use strict';

/*
Notes: 
Functions currently work for modern browsers, testing for older browsers planned.
*/



var _ = {};

/* TYPE CHECKS
   ========================================================================== */
_.isArray = function(value) {
  if(Object.prototype.toString.call(value) === "[object Array]"){
    return true;
  }
  return false;
}

_.isBoolean = function(value) {
  if(Object.prototype.toString.call(value) === "[object Boolean]"){
    return true;
  }
  return false;
}

_.isFunction = function(value){
  if(Object.prototype.toString.call(value) === "[object Function]"){
    return true;
  }
  return false;
}

_.isNumber = function(value) {
  if(Object.prototype.toString.call(value) === "[object Number]"){
    return true;
  }
  return false;
}

_.isObject = function(value) {
  if(Object.prototype.toString.call(value) === "[object Object]"){
    return true;
  }
  return false;
}

_.isString = function(value){
  if(Object.prototype.toString.call(value) === "[object String]"){
    return true;
  }
  return false;
}

_.isFalsey = function(value){
  if(!Boolean(value)) return true;
  return false;
}

_.isTruthy = function(value){
  if(Boolean(value)) return true;
  return false; 
}





/* Math Operations
   ========================================================================== */
_.sum = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total
}

_.average = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
  //TODO: roudn decimals to the tens place
}

_.isOdd = function(number){
  if(number % 2 === 1) return true;
  return false;
}

_.isEven = function(number) {
  if(number % 2 === 0) return true;
  return false
}
