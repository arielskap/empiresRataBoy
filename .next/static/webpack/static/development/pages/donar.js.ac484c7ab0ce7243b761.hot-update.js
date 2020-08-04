webpackHotUpdate("static\\development\\pages\\donar.js",{

/***/ "./src/pages/donar.js":
/*!****************************!*\
  !*** ./src/pages/donar.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/animations/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\pages\\donar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var response = _ref.response;

  var _useFade = Object(_animations__WEBPACK_IMPORTED_MODULE_4__["useFade"])(),
      fade = _useFade.fade;

  var _useVerifyFetch = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useVerifyFetch"])(response),
      open = _useVerifyFetch.open,
      setOpen = _useVerifyFetch.setOpen,
      errorResponse = _useVerifyFetch.errorResponse,
      data = _useVerifyFetch.data;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isBrowser = true;

    function $MPC_load() {
      window.$MPC_loaded !== true && function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = "".concat(document.location.protocol, "//secure.mlstatic.com/mptools/render.js");
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
        window.$MPC_loaded = true;
      }();
    }

    if (isBrowser) {
      window.$MPC_loaded !== true ? window.attachEvent ? window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false) : null;
    }
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "donar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].main, {
    style: fade,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "my-4 text-2xl font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "$",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "\uD83D\uDCB8"), "Donaciones", __jsx("span", {
    role: "img",
    "aria-label": "$",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "\uD83D\uDCB8")), __jsx("div", {
    className: "flex flex-col items-center justify-around w-full mt-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col items-center justify-center lg:border-2 lg:border-blue-500 lg:rounded lg:p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "px-4 py-2 border-2 rounded border-gold hover:border-transparent hover:bg-yellow-500",
    href: "https://www.paypal.me/ratabboy",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "object-contain p-2 bg-white rounded",
    src: "./static/payPal.png",
    alt: "Pay Pal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "flex flex-col items-center justify-center mt-12 lg:border-2 lg:border-blue-500 lg:rounded lg:p-4 lg:mt-0 lg:row-span-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "object-contain p-2 mb-5 bg-white rounded",
    src: "./static/mercadoPago.png",
    alt: "Mercado Pago",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "grid grid-cols-1 gap-4 mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, data && Array.isArray(data) && data.map(function (donativo) {
    var id = donativo.id,
        name = donativo.name,
        cost = donativo.cost,
        link = donativo.link;
    return __jsx("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      className: "px-4 py-2 font-semibold text-center bg-transparent border rounded text-gold hover:bg-yellow-500 hover:text-white border-gold hover:border-transparent",
      "mp-mode": "dftl",
      href: link,
      name: "MP-payButton",
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, "".concat(name, " $").concat(cost));
  }))), __jsx("div", {
    className: "hidden lg:flex lg:flex-col lg:justify-start lg:h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "text-xl font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Pagar con Qr"), __jsx("h3", {
    className: "mb-4 text-lg font-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Mercado Pago"), __jsx("div", {
    className: "flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "object-contain rounded",
    src: "./static/qr.jpg",
    alt: "qr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    data: {
      open: open,
      setOpen: setOpen
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["MessageErrorFetch"], {
    errorResponse: errorResponse,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Traer la de Alianzas")));
}, "RpXumKijWYFXIf+3sznlDgVW5Zw=", false, function () {
  return [_animations__WEBPACK_IMPORTED_MODULE_4__["useFade"], _hooks__WEBPACK_IMPORTED_MODULE_2__["useVerifyFetch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZG9uYXIuanMiXSwibmFtZXMiOlsicmVzcG9uc2UiLCJ1c2VGYWRlIiwiZmFkZSIsInVzZVZlcmlmeUZldGNoIiwib3BlbiIsInNldE9wZW4iLCJlcnJvclJlc3BvbnNlIiwiZGF0YSIsInVzZUVmZmVjdCIsImlzQnJvd3NlciIsIiRNUENfbG9hZCIsIndpbmRvdyIsIiRNUENfbG9hZGVkIiwicyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJ4IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXR0YWNoRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZG9uYXRpdm8iLCJpZCIsIm5hbWUiLCJjb3N0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxrRkFBa0I7QUFBQTs7QUFBQSxNQUFmQSxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsaUJBQ2RDLDJEQUFPLEVBRE87QUFBQSxNQUN2QkMsSUFEdUIsWUFDdkJBLElBRHVCOztBQUFBLHdCQUVnQkMsNkRBQWMsQ0FBQ0gsUUFBRCxDQUY5QjtBQUFBLE1BRXZCSSxJQUZ1QixtQkFFdkJBLElBRnVCO0FBQUEsTUFFakJDLE9BRmlCLG1CQUVqQkEsT0FGaUI7QUFBQSxNQUVSQyxhQUZRLG1CQUVSQSxhQUZRO0FBQUEsTUFFT0MsSUFGUCxtQkFFT0EsSUFGUDs7QUFJL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVMsT0FBZjs7QUFDQSxhQUFTQyxTQUFULEdBQXFCO0FBQ25CQyxZQUFNLENBQUNDLFdBQVAsS0FBdUIsSUFBdkIsSUFDRSxZQUFZO0FBQ1YsWUFBTUMsQ0FBQyxHQUFHQyxRQUFR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REFEbkIsRUFFaURFLHFEQUZqRDtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkb25hci5qcy5hYzQ4NGM3YWIwY2U3MjQzYjc2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZVZlcmlmeUZldGNoIH0gZnJvbSAnLi4vaG9va3MnO1xyXG5pbXBvcnQgeyBNZXNzYWdlRXJyb3JGZXRjaCwgTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRmFkZSB9IGZyb20gJy4uL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgZmV0Y2hKc29uMiB9IGZyb20gJy4uL2xvY2FsRnVuY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVzcG9uc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZmFkZSB9ID0gdXNlRmFkZSgpO1xyXG4gIGNvbnN0IHsgb3Blbiwgc2V0T3BlbiwgZXJyb3JSZXNwb25zZSwgZGF0YSB9ID0gdXNlVmVyaWZ5RmV0Y2gocmVzcG9uc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBmdW5jdGlvbiAkTVBDX2xvYWQoKSB7XHJcbiAgICAgIHdpbmRvdy4kTVBDX2xvYWRlZCAhPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgcy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICBzLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgIHMuc3JjID0gYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly9zZWN1cmUubWxzdGF0aWMuY29tL21wdG9vbHMvcmVuZGVyLmpzYDtcclxuICAgICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICAgICAgICB4LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHMsIHgpO3dpbmRvdy4kTVBDX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuICAgIGlmIChpc0Jyb3dzZXIpIHtcclxuICAgICAgd2luZG93LiRNUENfbG9hZGVkICE9PSB0cnVlID8gKFxyXG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCA/XHJcbiAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubG9hZCcsICRNUENfbG9hZCkgOlxyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAkTVBDX2xvYWQsIGZhbHNlKVxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPSdkb25hcic+XHJcbiAgICAgIDxhbmltYXRlZC5tYWluIHN0eWxlPXtmYWRlfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdteS00IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICA8c3BhbiByb2xlPSdpbWcnIGFyaWEtbGFiZWw9JyQnPvCfkrg8L3NwYW4+XHJcbiAgICAgICAgICBEb25hY2lvbmVzXHJcbiAgICAgICAgICA8c3BhbiByb2xlPSdpbWcnIGFyaWEtbGFiZWw9JyQnPvCfkrg8L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgdy1mdWxsIG10LTUgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMiBsZzpnYXAtNCBsZzpweC00MCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6Ym9yZGVyLTIgbGc6Ym9yZGVyLWJsdWUtNTAwIGxnOnJvdW5kZWQgbGc6cC00Jz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdweC00IHB5LTIgYm9yZGVyLTIgcm91bmRlZCBib3JkZXItZ29sZCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6YmcteWVsbG93LTUwMCcgaHJlZj0naHR0cHM6Ly93d3cucGF5cGFsLm1lL3JhdGFiYm95JyB0YXJnZXQ9J19fYmxhbmsnPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBwLTIgYmctd2hpdGUgcm91bmRlZCcgc3JjPScuL3N0YXRpYy9wYXlQYWwucG5nJyBhbHQ9J1BheSBQYWwnIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTEyIGxnOmJvcmRlci0yIGxnOmJvcmRlci1ibHVlLTUwMCBsZzpyb3VuZGVkIGxnOnAtNCBsZzptdC0wIGxnOnJvdy1zcGFuLTInPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4gcC0yIG1iLTUgYmctd2hpdGUgcm91bmRlZCcgc3JjPScuL3N0YXRpYy9tZXJjYWRvUGFnby5wbmcnIGFsdD0nTWVyY2FkbyBQYWdvJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBteC00Jz5cclxuICAgICAgICAgICAgICB7ZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubWFwKChkb25hdGl2bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgY29zdCwgbGluayB9ID0gZG9uYXRpdm87XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBjbGFzc05hbWU9J3B4LTQgcHktMiBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIHRleHQtZ29sZCBob3ZlcjpiZy15ZWxsb3ctNTAwIGhvdmVyOnRleHQtd2hpdGUgYm9yZGVyLWdvbGQgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50JyBtcC1tb2RlPSdkZnRsJyBocmVmPXtsaW5rfSBuYW1lPSdNUC1wYXlCdXR0b24nIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtuYW1lfSAkJHtjb3N0fWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIGxnOmZsZXggbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1zdGFydCBsZzpoLWZ1bGwnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+UGFnYXIgY29uIFFyPC9oMj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWItNCB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+TWVyY2FkbyBQYWdvPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4gcm91bmRlZCcgc3JjPScuL3N0YXRpYy9xci5qcGcnIGFsdD0ncXInIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYW5pbWF0ZWQubWFpbj5cclxuICAgICAgPE1vZGFsIGRhdGE9e3sgb3Blbiwgc2V0T3BlbiB9fT5cclxuICAgICAgICA8TWVzc2FnZUVycm9yRmV0Y2ggZXJyb3JSZXNwb25zZT17ZXJyb3JSZXNwb25zZX0+VHJhZXIgbGEgZGUgQWxpYW56YXM8L01lc3NhZ2VFcnJvckZldGNoPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoSnNvbjIoJ2RvbmFjaW9uZXMnKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBqc29uQm9keTogZGF0YSB9IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9