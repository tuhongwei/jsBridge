/**
 * jsBridge v1.0.0
 * (c) 2019 Twittytop
 * @license MIT
 */
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  window.JSBridge = {};

  window.JSBridge.callJS = function (action, params, whoAmI) {
    params = JSON.parse(JSON.stringify(params));
    return window.JSBridge[action](params, whoAmI);
  };

  JSBridge.canBack = function (params, whoAmI) {
    var result = {
      can: false,
      target: 'prev'
    };
    return result;
  };

})));
