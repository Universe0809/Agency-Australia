/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/languageDetector.js":
/*!*********************************!*\
  !*** ./lib/languageDetector.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-language-detector */ \"next-language-detector\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);\nnext_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),\n  supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSxrRUFBZ0IsQ0FBQztFQUM5QkUsV0FBVyxFQUFFRCxnRkFEaUI7RUFFOUJJLGFBQWEsRUFBRUosMEVBQTBCSztBQUZYLENBQUQsQ0FBL0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZW5jeS10aGVtZS8uL2xpYi9sYW5ndWFnZURldGVjdG9yLmpzPzgyYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnbmV4dC1sYW5ndWFnZS1kZXRlY3Rvcic7XG5pbXBvcnQgaTE4bmV4dENvbmZpZyBmcm9tICcuLi9uZXh0LWkxOG5leHQuY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2VEZXRlY3Rvcih7XG4gIGZhbGxiYWNrTG5nOiBpMThuZXh0Q29uZmlnLmkxOG4uZGVmYXVsdExvY2FsZSxcbiAgc3VwcG9ydGVkTG5nczogaTE4bmV4dENvbmZpZy5pMThuLmxvY2FsZXMsXG59KTtcbiJdLCJuYW1lcyI6WyJsYW5ndWFnZURldGVjdG9yIiwiaTE4bmV4dENvbmZpZyIsImZhbGxiYWNrTG5nIiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJzdXBwb3J0ZWRMbmdzIiwibG9jYWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/languageDetector.js\n");

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"getRedirect\": () => (/* binding */ getRedirect),\n/* harmony export */   \"useRedirect\": () => (/* binding */ useRedirect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languageDetector__WEBPACK_IMPORTED_MODULE_2__]);\n_languageDetector__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst useRedirect = go => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const to = go || router.asPath; // language detection\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].detect();\n\n    if (to.startsWith('/' + detectedLng) && router.route === '/404') {\n      // prevent endless loop\n      router.replace('/' + detectedLng + router.route);\n      return;\n    }\n\n    _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cache(detectedLng);\n    router.replace('/' + detectedLng + to);\n  });\n  return null;\n};\nconst Redirect = () => {\n  useRedirect();\n  return null;\n}; // eslint-disable-next-line react/display-name\n\nconst getRedirect = to => () => {\n  useRedirect(to);\n  return null;\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNRyxXQUFXLEdBQUlDLEVBQUQsSUFBUTtFQUNqQyxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCO0VBQ0EsTUFBTUssRUFBRSxHQUFHRixFQUFFLElBQUlDLE1BQU0sQ0FBQ0UsTUFBeEIsQ0FGaUMsQ0FJakM7O0VBQ0FQLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1RLFdBQVcsR0FBR04sZ0VBQUEsRUFBcEI7O0lBQ0EsSUFBSUksRUFBRSxDQUFDSSxVQUFILENBQWMsTUFBTUYsV0FBcEIsS0FBb0NILE1BQU0sQ0FBQ00sS0FBUCxLQUFpQixNQUF6RCxFQUFpRTtNQUFFO01BQ2pFTixNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFNSixXQUFOLEdBQW9CSCxNQUFNLENBQUNNLEtBQTFDO01BQ0E7SUFDRDs7SUFFRFQsK0RBQUEsQ0FBdUJNLFdBQXZCO0lBQ0FILE1BQU0sQ0FBQ08sT0FBUCxDQUFlLE1BQU1KLFdBQU4sR0FBb0JGLEVBQW5DO0VBQ0QsQ0FUUSxDQUFUO0VBV0EsT0FBTyxJQUFQO0FBQ0QsQ0FqQk07QUFtQkEsTUFBTVEsUUFBUSxHQUFHLE1BQU07RUFDNUJYLFdBQVc7RUFDWCxPQUFPLElBQVA7QUFDRCxDQUhNLEVBS1A7O0FBQ08sTUFBTVksV0FBVyxHQUFJVCxFQUFELElBQVEsTUFBTTtFQUN2Q0gsV0FBVyxDQUFDRyxFQUFELENBQVg7RUFDQSxPQUFPLElBQVA7QUFDRCxDQUhNLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9saWIvcmVkaXJlY3QuanM/ODNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbGFuZ3VhZ2VEZXRlY3RvciBmcm9tICcuL2xhbmd1YWdlRGV0ZWN0b3InO1xuXG5leHBvcnQgY29uc3QgdXNlUmVkaXJlY3QgPSAoZ28pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRvID0gZ28gfHwgcm91dGVyLmFzUGF0aDtcblxuICAvLyBsYW5ndWFnZSBkZXRlY3Rpb25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZXRlY3RlZExuZyA9IGxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCk7XG4gICAgaWYgKHRvLnN0YXJ0c1dpdGgoJy8nICsgZGV0ZWN0ZWRMbmcpICYmIHJvdXRlci5yb3V0ZSA9PT0gJy80MDQnKSB7IC8vIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycgKyBkZXRlY3RlZExuZyArIHJvdXRlci5yb3V0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGFuZ3VhZ2VEZXRlY3Rvci5jYWNoZShkZXRlY3RlZExuZyk7XG4gICAgcm91dGVyLnJlcGxhY2UoJy8nICsgZGV0ZWN0ZWRMbmcgKyB0byk7XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IFJlZGlyZWN0ID0gKCkgPT4ge1xuICB1c2VSZWRpcmVjdCgpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBnZXRSZWRpcmVjdCA9ICh0bykgPT4gKCkgPT4ge1xuICB1c2VSZWRpcmVjdCh0byk7XG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJsYW5ndWFnZURldGVjdG9yIiwidXNlUmVkaXJlY3QiLCJnbyIsInJvdXRlciIsInRvIiwiYXNQYXRoIiwiZGV0ZWN0ZWRMbmciLCJkZXRlY3QiLCJzdGFydHNXaXRoIiwicm91dGUiLCJyZXBsYWNlIiwiY2FjaGUiLCJSZWRpcmVjdCIsImdldFJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redirect.js\n");

/***/ }),

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'de', 'id', 'ar', 'pt', 'zh'],\n    fallbackLng: 'en'\n  },\n  ssg: true // Set to true for Static Site Generation (SSG)\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImZhbGxiYWNrTG5nIiwic3NnIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzPzFjYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGkxOG46IHtcbiAgICBkZWZhdWx0TG9jYWxlOiAnZW4nLFxuICAgIGxvY2FsZXM6IFsnZW4nLCAnZGUnLCAnaWQnLCAnYXInLCAncHQnLCAnemgnXSxcbiAgICBmYWxsYmFja0xuZzogJ2VuJyxcbiAgfSxcbiAgc3NnOiB0cnVlIC8vIFNldCB0byB0cnVlIGZvciBTdGF0aWMgU2l0ZSBHZW5lcmF0aW9uIChTU0cpXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0VBQ2ZDLElBQUksRUFBRTtJQUNKQyxhQUFhLEVBQUUsSUFEWDtJQUVKQyxPQUFPLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FGTDtJQUdKQyxXQUFXLEVBQUU7RUFIVCxDQURTO0VBTWZDLEdBQUcsRUFBRSxJQU5VLENBTUw7O0FBTkssQ0FBakIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./lib/redirect.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_redirect__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsaUVBQWVBLG1EQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2VuY3ktdGhlbWUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAnLi4vbGliL3JlZGlyZWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0O1xuIl0sIm5hbWVzIjpbIlJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "next-language-detector":
/*!*****************************************!*\
  !*** external "next-language-detector" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();