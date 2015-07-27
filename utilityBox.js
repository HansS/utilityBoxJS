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