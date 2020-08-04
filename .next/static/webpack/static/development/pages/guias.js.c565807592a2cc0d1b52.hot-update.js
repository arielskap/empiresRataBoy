webpackHotUpdate("static\\development\\pages\\guias.js",{

/***/ "./src/pages/guias.js":
/*!****************************!*\
  !*** ./src/pages/guias.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _components_guias_CardGuias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/guias/CardGuias */ "./src/components/guias/CardGuias.jsx");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/animations/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\pages\\guias.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var jsonBody = _ref.jsonBody;

  var _useFade = Object(_animations__WEBPACK_IMPORTED_MODULE_4__["useFade"])(),
      fade = _useFade.fade;

  var _useVerifyFetch = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useVerifyFetch"])(jsonBody),
      open = _useVerifyFetch.open,
      setOpen = _useVerifyFetch.setOpen,
      errorResponse = _useVerifyFetch.errorResponse,
      data = _useVerifyFetch.data;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Guias",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].main, {
    className: "mx-4 lg:grid lg:grid-cols-2",
    style: fade,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:flex lg:flex-col lg:justify-center lg:items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "py-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-xl font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "\xA1Todas mis Gu\xEDas!")), __jsx("div", {
    className: "flex items-center justify-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://drive.google.com/drive/folders/1DqpgV7wugGVlbo5TvehZ7YrBG5NpMPEA",
    className: "px-4 py-2 font-bold text-white bg-pink-500 border-b-4 border-pink-700 rounded hover:bg-pink-400 hover:border-pink-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Ir al Drive"))), __jsx("div", {
    className: "mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-lg font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Listado de Gu\xEDas"), __jsx("ul", {
    className: "flex flex-col items-center p-2 mt-2 border-2 border-pink-500 rounded sm:grid sm:grid-cols-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, data && Array.isArray(data) && data.map(function (guia) {
    var id = guia.id;
    return __jsx("li", {
      className: "mb-1 text-center",
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(_components_guias_CardGuias__WEBPACK_IMPORTED_MODULE_3__["default"], {
      json: guia,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }));
  })))), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    data: {
      open: open,
      setOpen: setOpen
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["MessageErrorFetch"], {
    errorResponse: errorResponse,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Traer la Lista de Guias")));
}, "B4CzFkftKN9ByXbccFzSGHK5h0s=", false, function () {
  return [_animations__WEBPACK_IMPORTED_MODULE_4__["useFade"], _hooks__WEBPACK_IMPORTED_MODULE_6__["useVerifyFetch"]];
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ3VpYXMuanMiXSwibmFtZXMiOlsianNvbkJvZHkiLCJ1c2VGYWRlIiwiZmFkZSIsInVzZVZlcmlmeUZldGNoIiwib3BlbiIsInNldE9wZW4iLCJlcnJvclJlc3BvbnNlIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImd1aWEiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2Usa0ZBQWtCO0FBQUE7O0FBQUEsTUFBZkEsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGlCQUNkQywyREFBTyxFQURPO0FBQUEsTUFDdkJDLElBRHVCLFlBQ3ZCQSxJQUR1Qjs7QUFBQSx3QkFFZ0JDLDZEQUFjLENBQUNILFFBQUQsQ0FGOUI7QUFBQSxNQUV2QkksSUFGdUIsbUJBRXZCQSxJQUZ1QjtBQUFBLE1BRWpCQyxPQUZpQixtQkFFakJBLE9BRmlCO0FBQUEsTUFFUkMsYUFGUSxtQkFFUkEsYUFGUTtBQUFBLE1BRU9DLElBRlAsbUJBRU9BLElBRlA7O0FBSS9CLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFELENBQVUsSUFBVjtBQUFlLGFBQVMsRUFBQyw2QkFBekI7QUFBdUQsU0FBSyxFQUFFTCxJQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQW1CLE9BQUcsRUFBQyxxQkFBdkI7QUFBNkMsUUFBSSxFQUFDLDBFQUFsRDtBQUE2SCxhQUFTLEVBQUMsdUhBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FKRixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUksYUFBUyxFQUFDLDZGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ssSUFBSSxJQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsSUFBZCxDQUFSLElBQStCQSxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQVU7QUFBQSxRQUN6Q0MsRUFEeUMsR0FDbENELElBRGtDLENBQ3pDQyxFQUR5QztBQUVqRCxXQUNFO0FBQUksZUFBUyxFQUFDLGtCQUFkO0FBQWlDLFNBQUcsRUFBRUEsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbUVBQUQ7QUFBVyxVQUFJLEVBQUVELElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBS0QsR0FQK0IsQ0FEbEMsQ0FGRixDQVRGLENBREYsRUF3QkUsTUFBQyxpREFBRDtBQUFPLFFBQUksRUFBRTtBQUFFUCxVQUFJLEVBQUpBLElBQUY7QUFBUUMsYUFBTyxFQUFQQTtBQUFSLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBbUIsaUJBQWEsRUFBRUMsYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixDQXhCRixDQURGO0FBOEJELENBbENEO0FBQUEsVUFDbUJMLG1EQURuQixFQUVpREUscURBRmpEO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGd1aWFzLmpzLmM1NjU4MDc1OTJhMmNjMGQxYjUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IE1vZGFsLCBNZXNzYWdlRXJyb3JGZXRjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgQ2FyZEd1aWFzIGZyb20gJy4uL2NvbXBvbmVudHMvZ3VpYXMvQ2FyZEd1aWFzJztcclxuaW1wb3J0IHsgdXNlRmFkZSB9IGZyb20gJy4uL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlVmVyaWZ5RmV0Y2ggfSBmcm9tICcuLi9ob29rcyc7XHJcbmltcG9ydCB7IGZldGNoSnNvbjIgfSBmcm9tICcuLi9sb2NhbEZ1bmN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGpzb25Cb2R5IH0pID0+IHtcclxuICBjb25zdCB7IGZhZGUgfSA9IHVzZUZhZGUoKTtcclxuICBjb25zdCB7IG9wZW4sIHNldE9wZW4sIGVycm9yUmVzcG9uc2UsIGRhdGEgfSA9IHVzZVZlcmlmeUZldGNoKGpzb25Cb2R5KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9J0d1aWFzJz5cclxuICAgICAgPGFuaW1hdGVkLm1haW4gY2xhc3NOYW1lPSdteC00IGxnOmdyaWQgbGc6Z3JpZC1jb2xzLTInIHN0eWxlPXtmYWRlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6ZmxleCBsZzpmbGV4LWNvbCBsZzpqdXN0aWZ5LWNlbnRlciBsZzppdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTQnPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+wqFUb2RhcyBtaXMgR3XDrWFzITwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwnPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBocmVmPSdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xRHFwZ1Y3d3VnR1ZsYm81VHZlaFo3WXJCRzVOcE1QRUEnIGNsYXNzTmFtZT0ncHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLXBpbmstNTAwIGJvcmRlci1iLTQgYm9yZGVyLXBpbmstNzAwIHJvdW5kZWQgaG92ZXI6YmctcGluay00MDAgaG92ZXI6Ym9yZGVyLXBpbmstNTAwJz5JciBhbCBEcml2ZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00Jz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkJz5MaXN0YWRvIGRlIEd1w61hczwvaDI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTIgbXQtMiBib3JkZXItMiBib3JkZXItcGluay01MDAgcm91bmRlZCBzbTpncmlkIHNtOmdyaWQtY29scy0yJz5cclxuICAgICAgICAgICAge2RhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLm1hcCgoZ3VpYSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGd1aWE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTEgdGV4dC1jZW50ZXInIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEd1aWFzIGpzb249e2d1aWF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hbmltYXRlZC5tYWluPlxyXG4gICAgICA8TW9kYWwgZGF0YT17eyBvcGVuLCBzZXRPcGVuIH19PlxyXG4gICAgICAgIDxNZXNzYWdlRXJyb3JGZXRjaCBlcnJvclJlc3BvbnNlPXtlcnJvclJlc3BvbnNlfT5UcmFlciBsYSBMaXN0YSBkZSBHdWlhczwvTWVzc2FnZUVycm9yRmV0Y2g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hKc29uMignZ3VpYXMnKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBqc29uQm9keTogZGF0YS5ib2R5IH0gfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9