!function e(n,t,r){function o(i,a){if(!t[i]){if(!n[i]){var l="function"==typeof require&&require;if(!a&&l)return l(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=t[i]={exports:{}};n[i][0].call(c.exports,function(e){var t=n[i][1][e];return o(t||e)},c,c.exports,e,n,t,r)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=e("jquery"),i=function(e){return e&&e.__esModule?e:{default:e}}(u),a=function(){function e(){r(this,e),console.log("Hello world"),this.init()}return o(e,[{key:"init",value:function(){var e=this;(0,i.default)(document).on("click",function(){return e.displayMessage()})}},{key:"displayMessage",value:function(){this.anotherMethod(),alert("Hello jquery world!")}},{key:"anotherMethod",value:function(){console.log("Another method should call")}}]),e}();t.default=a},{jquery:"jquery"}],2:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=e("jquery"),u=r(o),i=e("./components/Navigation"),a=r(i);(0,u.default)(function(){return new a.default})},{"./components/Navigation":1,jquery:"jquery"}]},{},[2]);
//# sourceMappingURL=main.bundle.js.map
