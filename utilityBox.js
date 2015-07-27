/*! utilityBox.js v0.0.0 - MIT license */
'use strict';

var _ = {};



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