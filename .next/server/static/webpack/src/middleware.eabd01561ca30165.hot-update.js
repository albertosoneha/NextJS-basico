"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    const authenticated = false;\n    if (request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) {\n        console.log(\"Acesso \");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL('/', request.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUQ7QUFFaEQsU0FBU0MsV0FBV0MsT0FBb0I7SUFFM0MsTUFBTUMsZ0JBQWdCO0lBRXRCLElBQUdELFFBQVFFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsaUJBQWdCLENBQUVILGVBQWdCO1FBQ3JFSSxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPUixxREFBWUEsQ0FBQ1MsUUFBUSxDQUFDLElBQUlDLElBQUksS0FBS1IsUUFBUVMsR0FBRztJQUN6RDtJQUVBLE9BQU9YLHFEQUFZQSxDQUFDWSxJQUFJO0FBQzVCIiwic291cmNlcyI6WyIvaG9tZS9tYW5yb2JlL0RvY3VtZW50b3MvR2l0SHViL25leHRqcy9hdWxhL3NyYy9taWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICAgIFxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgIGlmKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvZGFzaGJvYXJkJykgJiYhIGF1dGhlbnRpY2F0ZWQgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNlc3NvIFwiKVxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXF1ZXN0LnVybCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJhdXRoZW50aWNhdGVkIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});