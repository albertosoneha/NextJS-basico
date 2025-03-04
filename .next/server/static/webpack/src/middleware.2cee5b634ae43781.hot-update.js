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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    const authenticated = false;\n    if (request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) {\n        console.log();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL('/', request.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUQ7QUFFaEQsU0FBU0MsV0FBV0MsT0FBb0I7SUFFM0MsTUFBTUMsZ0JBQWdCO0lBRXRCLElBQUdELFFBQVFFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsaUJBQWdCLENBQUVILGVBQWdCO1FBQ3JFSSxRQUFRQyxHQUFHO1FBQ1gsT0FBT1IscURBQVlBLENBQUNTLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLEtBQUtSLFFBQVFTLEdBQUc7SUFDekQ7SUFFQSxPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSTtBQUM1QiIsInNvdXJjZXMiOlsiL2hvbWUvbWFucm9iZS9Eb2N1bWVudG9zL0dpdEh1Yi9uZXh0anMvYXVsYS9zcmMvbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgICBcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cbiAgICBpZihyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2Rhc2hib2FyZCcpICYmISBhdXRoZW50aWNhdGVkICkge1xuICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLycsIHJlcXVlc3QudXJsKSlcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImF1dGhlbnRpY2F0ZWQiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});