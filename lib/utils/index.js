"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.omit = void 0;

var omit = function omit(obj, arr) {
  return Object.keys(obj).filter(function (k) {
    return !arr.includes(k);
  }).reduce(function (acc, key) {
    return acc[key] = obj[key], acc;
  }, {});
};

exports.omit = omit;

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

exports.compose = compose;