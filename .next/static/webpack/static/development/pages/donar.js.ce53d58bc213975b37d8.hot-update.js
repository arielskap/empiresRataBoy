webpackHotUpdate("static\\development\\pages\\donar.js",{

/***/ "./src/hooks/useVerifyFetch.jsx":
/*!**************************************!*\
  !*** ./src/hooks/useVerifyFetch.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



var useVerifyFetch = function useVerifyFetch(jsonBody) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      errorResponse = _useState2[0],
      setErrorResponse = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var error = jsonBody.error || jsonBody.message;
    console.log(jsonBody);

    if (error) {
      console.log("Hubo un problema con la petici\xF3n Fetch:".concat(error));

      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }

      setOpen(true);
      setErrorResponse(error);
    }
  }, [jsonBody]);
  return {
    open: open,
    setOpen: setOpen,
    errorResponse: errorResponse,
    setErrorResponse: setErrorResponse,
    data: jsonBody.body
  };
};

_s(useVerifyFetch, "AlqSWNSc0qVOzbjGTzzAfcrDtVc=");

/* harmony default export */ __webpack_exports__["default"] = (useVerifyFetch);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlVmVyaWZ5RmV0Y2guanN4Il0sIm5hbWVzIjpbInVzZVZlcmlmeUZldGNoIiwianNvbkJvZHkiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiZXJyb3JSZXNwb25zZSIsInNldEVycm9yUmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUFBOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDLEtBQUQsQ0FERztBQUFBLE1BQzVCQyxJQUQ0QjtBQUFBLE1BQ3RCQyxPQURzQjs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxLQUFELENBRmY7QUFBQSxNQUU1QkcsYUFGNEI7QUFBQSxNQUViQyxnQkFGYTs7QUFJbkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR1AsUUFBUSxDQUFDTyxLQUFULElBQWtCUCxRQUFRLENBQUNRLE9BQXpDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixRQUFaOztBQUNBLFFBQUlPLEtBQUosRUFBVztBQUNURSxhQUFPLENBQUNDLEdBQVIscURBQXNESCxLQUF0RDs7QUFDQSxVQUFJLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxpQkFBakMsQ0FBTCxFQUEwRDtBQUN4REgsZ0JBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxHQUF4QixDQUE0QixpQkFBNUI7QUFDRDs7QUFDRFosYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRSxzQkFBZ0IsQ0FBQ0UsS0FBRCxDQUFoQjtBQUNEO0FBQ0YsR0FYUSxFQVdOLENBQUNQLFFBQUQsQ0FYTSxDQUFUO0FBYUEsU0FBTztBQUFFRSxRQUFJLEVBQUpBLElBQUY7QUFBUUMsV0FBTyxFQUFQQSxPQUFSO0FBQWlCQyxpQkFBYSxFQUFiQSxhQUFqQjtBQUFnQ0Msb0JBQWdCLEVBQWhCQSxnQkFBaEM7QUFBa0RXLFFBQUksRUFBRWhCLFFBQVEsQ0FBQ1k7QUFBakUsR0FBUDtBQUNELENBbEJEOztHQUFNYixjOztBQW9CU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRvbmFyLmpzLmNlNTNkNThiYzIxMzk3NWIzN2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlVmVyaWZ5RmV0Y2ggPSAoanNvbkJvZHkpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yUmVzcG9uc2UsIHNldEVycm9yUmVzcG9uc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3IgPSBqc29uQm9keS5lcnJvciB8fCBqc29uQm9keS5tZXNzYWdlO1xyXG4gICAgY29uc29sZS5sb2coanNvbkJvZHkpXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coYEh1Ym8gdW4gcHJvYmxlbWEgY29uIGxhIHBldGljacOzbiBGZXRjaDoke2Vycm9yfWApO1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyZmxvdy1oaWRkZW4nKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgc2V0RXJyb3JSZXNwb25zZShlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2pzb25Cb2R5XSk7XHJcblxyXG4gIHJldHVybiB7IG9wZW4sIHNldE9wZW4sIGVycm9yUmVzcG9uc2UsIHNldEVycm9yUmVzcG9uc2UsIGRhdGE6IGpzb25Cb2R5LmJvZHkgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVZlcmlmeUZldGNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9