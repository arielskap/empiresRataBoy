webpackHotUpdate("static\\development\\pages\\guias.js",{

/***/ "./src/localFunction.js":
/*!******************************!*\
  !*** ./src/localFunction.js ***!
  \******************************/
/*! exports provided: fetchJson, fetchJson2, getImgClassHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJson", function() { return fetchJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJson2", function() { return fetchJson2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgClassHero", function() { return getImgClassHero; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fetchJson = function fetchJson(name, link, setFunctions) {
  var setOpen = setFunctions.setOpen,
      setErrorResponse = setFunctions.setErrorResponse,
      setJson = setFunctions.setJson;
  var storage = sessionStorage.getItem(name);

  if (storage) {
    setJson(JSON.parse(sessionStorage.getItem(name)));
  } else {
    fetch("https://api.jsonbin.io/b/".concat(link), {
      headers: {
        'secret-key': '$2b$10$rMiLIzrwZN3L0coOy9YBuO.EbU9bdYqwH79HBShMOATzq1YNKzSvC'
      }
    })["catch"](function (error) {
      console.log("Hubo un problema con la petici\xF3n Fetch:".concat(error.message));

      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }

      setOpen(true);
      setErrorResponse(error.message);
    }).then(function (response) {
      return response.json();
    }).then(function (myJson) {
      if (!myJson.success && myJson.success !== undefined || myJson.lenght <= 0) {
        if (!document.body.classList.contains('overflow-hidden')) {
          document.body.classList.add('overflow-hidden');
        }

        setOpen(true);
        setErrorResponse(myJson.message);
      } else {
        setJson(myJson);
        sessionStorage.setItem(name, JSON.stringify(myJson));
      }
    });
  }
};
var fetchJson2 = function fetchJson2(url) {
  return fetch("https://ratabboy-api.herokuapp.com/".concat(url), {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  })["catch"](function (res) {
    return _objectSpread(_objectSpread({}, res), {}, {
      error: res.message
    });
  }).then(function (res) {
    return res;
  });
};
var getImgClassHero = function getImgClassHero(className) {
  var classNameSrc;

  switch (className.toLowerCase()) {
    case 'barbaro':
      classNameSrc = './static/barbarian.png';
      break;

    case 'clerigo':
      classNameSrc = './static/cleric.png';
      break;

    case 'druida':
      classNameSrc = './static/druid.png';
      break;

    case 'luchador':
      classNameSrc = './static/fighter.png';
      break;

    case 'monje':
      classNameSrc = './static/monk.png';
      break;

    case 'paladin':
      classNameSrc = './static/paladin.png';
      break;

    case 'guardabosques':
      classNameSrc = './static/ranger.png';
      break;

    case 'rebelde':
      classNameSrc = './static/rogue.png';
      break;

    case 'hechicero':
      classNameSrc = './static/sorcer.png';
      break;

    case 'brujo':
      classNameSrc = './static/wizard.png';
      break;

    default:
      break;
  }

  return classNameSrc;
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxGdW5jdGlvbi5qcyJdLCJuYW1lcyI6WyJmZXRjaEpzb24iLCJuYW1lIiwibGluayIsInNldEZ1bmN0aW9ucyIsInNldE9wZW4iLCJzZXRFcnJvclJlc3BvbnNlIiwic2V0SnNvbiIsInN0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibXlKc29uIiwic3VjY2VzcyIsInVuZGVmaW5lZCIsImxlbmdodCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmZXRjaEpzb24yIiwidXJsIiwicmVzIiwiZ2V0SW1nQ2xhc3NIZXJvIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lU3JjIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFhQyxZQUFiLEVBQThCO0FBQUEsTUFDN0NDLE9BRDZDLEdBQ05ELFlBRE0sQ0FDN0NDLE9BRDZDO0FBQUEsTUFDcENDLGdCQURvQyxHQUNORixZQURNLENBQ3BDRSxnQkFEb0M7QUFBQSxNQUNsQkMsT0FEa0IsR0FDTkgsWUFETSxDQUNsQkcsT0FEa0I7QUFFckQsTUFBTUMsT0FBTyxHQUFHQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUJSLElBQXZCLENBQWhCOztBQUNBLE1BQUlNLE9BQUosRUFBYTtBQUNYRCxXQUFPLENBQUNJLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxjQUFjLENBQUNDLE9BQWYsQ0FBdUJSLElBQXZCLENBQVgsQ0FBRCxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xXLFNBQUssb0NBQTZC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QkFBWSxHQUFHLHFCQUFmO0FBQ0E7O0FBQ0YsU0FBSyxPQUFMO0FBQ0VBLGtCQUFZLEdBQUcscUJBQWY7QUFDQTs7QUFDRjtBQUNFO0FBaENKOztBQWtDQSxTQUFPQSxZQUFQO0FBQ0QsQ0FyQ00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGd1aWFzLmpzLmYwMThlNjEwOTAzYTJhYTQ0N2RlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZmV0Y2hKc29uID0gKG5hbWUsIGxpbmssIHNldEZ1bmN0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHsgc2V0T3Blbiwgc2V0RXJyb3JSZXNwb25zZSwgc2V0SnNvbiB9ID0gc2V0RnVuY3Rpb25zO1xyXG4gIGNvbnN0IHN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xyXG4gIGlmIChzdG9yYWdlKSB7XHJcbiAgICBzZXRKc29uKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShuYW1lKSkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkuanNvbmJpbi5pby9iLyR7bGlua31gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnc2VjcmV0LWtleSc6ICckMmIkMTAkck1pTEl6cndaTjNMMGNvT3k5WUJ1Ty5FYlU5YmRZcXdINzlIQlNoTU9BVHpxMVlOS3pTdkMnLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBIdWJvIHVuIHByb2JsZW1hIGNvbiBsYSBwZXRpY2nDs24gRmV0Y2g6JHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJmbG93LWhpZGRlbicpKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yUmVzcG9uc2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChteUpzb24pID0+IHtcclxuICAgICAgICBpZiAoKCFteUpzb24uc3VjY2VzcyAmJiBteUpzb24uc3VjY2VzcyAhPT0gdW5kZWZpbmVkKSB8fCBteUpzb24ubGVuZ2h0IDw9IDApIHtcclxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJmbG93LWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgICAgc2V0RXJyb3JSZXNwb25zZShteUpzb24ubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEpzb24obXlKc29uKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkobXlKc29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hKc29uMiA9ICh1cmwpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vcmF0YWJib3ktYXBpLmhlcm9rdWFwcC5jb20vJHt1cmx9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5yZXMsIGVycm9yOiByZXMubWVzc2FnZSB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbWdDbGFzc0hlcm8gPSAoY2xhc3NOYW1lKSA9PiB7XHJcbiAgbGV0IGNsYXNzTmFtZVNyYztcclxuICBzd2l0Y2ggKGNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICBjYXNlICdiYXJiYXJvJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL2JhcmJhcmlhbi5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2NsZXJpZ28nOlxyXG4gICAgICBjbGFzc05hbWVTcmMgPSAnLi9zdGF0aWMvY2xlcmljLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZHJ1aWRhJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL2RydWlkLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnbHVjaGFkb3InOlxyXG4gICAgICBjbGFzc05hbWVTcmMgPSAnLi9zdGF0aWMvZmlnaHRlci5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ21vbmplJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL21vbmsucG5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdwYWxhZGluJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL3BhbGFkaW4ucG5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdndWFyZGFib3NxdWVzJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL3Jhbmdlci5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3JlYmVsZGUnOlxyXG4gICAgICBjbGFzc05hbWVTcmMgPSAnLi9zdGF0aWMvcm9ndWUucG5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdoZWNoaWNlcm8nOlxyXG4gICAgICBjbGFzc05hbWVTcmMgPSAnLi9zdGF0aWMvc29yY2VyLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnYnJ1am8nOlxyXG4gICAgICBjbGFzc05hbWVTcmMgPSAnLi9zdGF0aWMvd2l6YXJkLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBjbGFzc05hbWVTcmM7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=