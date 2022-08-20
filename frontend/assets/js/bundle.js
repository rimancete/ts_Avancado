/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!****************************************************************!*\
  !*** ./src/A0020-this-em-functions/A0020-this-em-functions.ts ***!
  \****************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.funcao = void 0;
function funcao(arg1) {
    console.log(this);
    console.log(arg1);
}
exports.funcao = funcao;
funcao.call(new Date(), 'Olá');
funcao.apply(new Date(), ['Olá']);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map