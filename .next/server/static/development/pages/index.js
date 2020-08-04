module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/animations/index.js":
/*!*********************************!*\
  !*** ./src/animations/index.js ***!
  \*********************************/
/*! exports provided: useFade, useSlide, useRotateY, useRenderImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSpring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSpring */ "./src/animations/useSpring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFade", function() { return _useSpring__WEBPACK_IMPORTED_MODULE_0__["useFade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSlide", function() { return _useSpring__WEBPACK_IMPORTED_MODULE_0__["useSlide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRotateY", function() { return _useSpring__WEBPACK_IMPORTED_MODULE_0__["useRotateY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRenderImg", function() { return _useSpring__WEBPACK_IMPORTED_MODULE_0__["useRenderImg"]; });



/***/ }),

/***/ "./src/animations/useSpring.js":
/*!*************************************!*\
  !*** ./src/animations/useSpring.js ***!
  \*************************************/
/*! exports provided: useSlide, useFade, useRenderImg, useRotateY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlide", function() { return useSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFade", function() { return useFade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRenderImg", function() { return useRenderImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRotateY", function() { return useRotateY; });
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_0__);

const useSlide = (translateX = 0, translateY = 0) => {
  const [slide, setSlide, stopSlide] = Object(react_spring__WEBPACK_IMPORTED_MODULE_0__["useSpring"])(() => ({
    to: {
      transform: 'translate(0px, 0px)'
    },
    from: {
      transform: `translate(${translateX}px, ${translateY}px)`
    }
  }));
  return {
    slide,
    setSlide,
    stopSlide
  };
};
const useFade = (isReverse = false) => {
  const [fade, setFade, stopFade] = Object(react_spring__WEBPACK_IMPORTED_MODULE_0__["useSpring"])(() => ({
    to: {
      opacity: isReverse ? 0 : 1
    },
    from: {
      opacity: isReverse ? 1 : 0
    }
  }));
  return {
    fade,
    setFade,
    stopFade
  };
};
const useRenderImg = () => {
  const [renderImg, setRenderImg, stopRenderImg] = Object(react_spring__WEBPACK_IMPORTED_MODULE_0__["useSpring"])(() => ({
    config: {
      duration: 1000
    },
    to: {
      opacity: 1,
      filter: 'blur(0)'
    },
    from: {
      opacity: 0,
      filter: 'blur(5px)'
    }
  }));
  return {
    renderImg,
    setRenderImg,
    stopRenderImg
  };
};
const useRotateY = (isReverse = false) => {
  const [rotateY, setRotateY, stopRotateY] = Object(react_spring__WEBPACK_IMPORTED_MODULE_0__["useSpring"])(() => ({
    to: {
      transform: isReverse ? 'rotateY(0deg)' : 'rotateY(180deg)'
    },
    from: {
      transform: isReverse ? 'rotateY(180deg)' : 'rotateY(0deg)'
    }
  }));
  return {
    rotateY,
    setRotateY,
    stopRotateY
  };
};

/***/ }),

/***/ "./src/components/BlackBackground.jsx":
/*!********************************************!*\
  !*** ./src/components/BlackBackground.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations/index.js");
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\BlackBackground.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlackBackground = ({
  children
}) => {
  const {
    fade
  } = Object(_animations__WEBPACK_IMPORTED_MODULE_2__["useFade"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "BlackBackground bg-black-trasparent fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-20",
    style: fade,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (BlackBackground);

/***/ }),

/***/ "./src/components/ButtonModal.jsx":
/*!****************************************!*\
  !*** ./src/components/ButtonModal.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useNearScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useNearScreen */ "./src/hooks/useNearScreen.js");
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\ButtonModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ButtonModal = ({
  children,
  ref,
  onClick = () => {}
}) => {
  const [element, show] = Object(_hooks_useNearScreen__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return __jsx("button", {
    ref: element,
    type: "button",
    className: "w-full min-h-75 flex justify-center items-center relative transform duration-200 hover:scale-110 border-transparent border-2 hover:border-pink-500 rounded",
    onClick: () => {
      onClick();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, show && children);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonModal);

/***/ }),

/***/ "./src/components/CardAlianza.jsx":
/*!****************************************!*\
  !*** ./src/components/CardAlianza.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonModal */ "./src/components/ButtonModal.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\CardAlianza.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CardAlianza = ({
  json
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ButtonModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: () => setOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "object-contain lg:w-48",
    src: json.picture,
    alt: json.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: {
      open,
      setOpen
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-sm text-black rounded shadow-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute top-0 flex justify-center w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "px-3 py-1 text-lg text-center rounded-b bg-black-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, json.name)), __jsx("div", {
    className: "flex items-center justify-center w-full pt-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "object-contain w-64",
    src: json.picture,
    alt: json.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "px-6 py-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "mb-2 text-xl font-bold text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Informaci\xF3n"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Titanes:"), ` ${json.titans}`)), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Requerimientos:"), ` ${json.requirements}`)), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Rese\xF1a:"), ` ${json.review}`))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardAlianza);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\Footer.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Footer = () => {
  const {
    0: buttonTranslate,
    1: setButtonTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const timeOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const timeOutGoogleOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const hideGoogleOptions = () => {
    if (document.body.style.top === '40px' && document.querySelector('.skiptranslate')) {
      if (timeOutGoogleOptions.current) {
        window.clearTimeout(timeOutGoogleOptions.current);
      }

      document.body.style.top = '0px';
      document.querySelector('.skiptranslate').classList.add('hidden');
    } else {
      timeOutGoogleOptions.current = setTimeout(() => {
        hideGoogleOptions();
      }, 1500);
    }
  };

  const translatePage = () => {
    document.querySelector('#buttonTranslate').disabled = true;

    if (document.querySelector('#googleScript')) {
      if (timeOut.current) {
        window.clearTimeout(timeOut.current);
      }

      document.querySelector('#google_translate_element').classList.remove('hidden');
      const googleConst = new google.translate.TranslateElement({
        pageLanguage: 'es'
      }, 'google_translate_element');
      setButtonTranslate(false);
      hideGoogleOptions();
    } else {
      timeOut.current = setTimeout(() => {
        translatePage();
      }, 1000);
    }
  };

  return __jsx("footer", {
    className: "jsx-3963786883" + " " + 'p-3 mt-16',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex flex-col items-center justify-center mt-2 mb-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, buttonTranslate && __jsx("button", {
    id: "buttonTranslate",
    type: "button",
    onClick: translatePage,
    className: "jsx-3963786883" + " " + 'px-4 py-2 font-bold text-white bg-indigo-500 border-b-4 border-indigo-700 rounded button_translate hover:bg-indigo-400 hover:border-indigo-500',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Translate Page"), __jsx("div", {
    id: "google_translate_element",
    className: "jsx-3963786883" + " " + 'hidden w-full p-2 border border-pink-500 rounded',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-3963786883" + " " + 'lg:grid lg:grid-cols-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3963786883" + " " + 'lg:border-r lg:border-pink-500',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center lg:hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./static/firma.png",
    alt: "firma",
    className: "jsx-3963786883" + " " + 'object-contain lg:max-w-lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3963786883" + " " + 'lg:grid lg:grid-cols-2 lg:gap-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3963786883" + " " + 'lg:flex lg:flex-col lg:items-center lg:justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-3963786883" + " " + 'mb-4 text-xl font-bold text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "\xA1Seguime en mis redes!"), __jsx("div", {
    className: "jsx-3963786883" + " " + 'grid grid-cols-3 gap-4 lg:grid-cols-7',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex justify-center lg:col-start-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/groups/alianzaratabboy",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./static/facebook.svg",
    alt: "",
    className: "jsx-3963786883" + " " + 'object-contain w-10 h-full',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.twitch.tv/ratabboypda",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./static/twitch.png",
    alt: "twitch",
    className: "jsx-3963786883" + " " + 'object-contain w-10 h-full',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.youtube.com/user/ratabboy",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "./static/youtube.svg",
    alt: "",
    className: "jsx-3963786883" + " " + 'object-contain w-10 h-full',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center mt-4 lg:mt-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://forms.gle/qAhte7R124TcLw9X6",
    className: "jsx-3963786883" + " " + 'text-lg font-bold text-blue-600 underline hover:text-blue-500 lg:hover:underline lg:no-underline',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "\xA1Contactame!")), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center mt-4 lg:mt-0 lg:col-span-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/donar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-3963786883" + " " + 'inline-block px-6 py-2 text-lg leading-none text-white border border-white rounded hover:border-gold hover:text-gold',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "$",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "\uD83D\uDCB0"), ' ', "\xA1Donar!", ' ', __jsx("span", {
    role: "img",
    "aria-label": "$",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "\uD83D\uDCB0"))))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./static/firma.png",
    alt: "firma",
    className: "jsx-3963786883" + " " + 'object-contain lg:max-w-lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'p-4 my-6 border border-pink-500 rounded lg:p-2 lg:ml-3 lg:border-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-3963786883" + " " + 'text-lg text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "Pagina hecha por:"), __jsx("p", {
    className: "jsx-3963786883" + " " + 'font-bold text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Ariel Santiago Villarreal Gutierrez"), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://play.google.com/store/apps/developer?id=Marte&hl=es_419",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883" + " " + 'flex',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-3963786883" + " " + 'mr-4 text-sm font-bold text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Marte"), __jsx("img", {
    src: "./static/logoDeveloper.png",
    alt: "Marte Industria",
    className: "jsx-3963786883" + " " + 'object-contain w-6 h-6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'mt-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3963786883" + " " + 'text-xl font-bold text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Redes"), __jsx("div", {
    className: "jsx-3963786883" + " " + 'grid grid-cols-2 my-4 sm:grid-cols-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center sm:col-start-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://github.com/arielskap",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "./static/github.svg",
    alt: "Github",
    className: "jsx-3963786883" + " " + 'object-contain w-10 h-full',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'flex items-center justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/ecstasy_ring/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "./static/instagram.svg",
    alt: "Instagram",
    className: "jsx-3963786883" + " " + 'object-contain w-10 h-full',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    className: "jsx-3963786883" + " " + 'text-right',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "mailto:Arielvillagu@hotmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3963786883" + " " + 'text-xs italic text-gray-600',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Contacto: Arielvillagu@hotmail.com")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3963786883",
    __self: undefined
  }, "footer.jsx-3963786883{background-color:#140442;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXGNvbXBvbmVudHNcXEZvb3Rlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEhTLEFBR3NDLHlCQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFyaWVsc2thcFxcRG9jdW1lbnRzXFxlbXBpcmVzUmF0YUJveVxcc3JjXFxjb21wb25lbnRzXFxGb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbYnV0dG9uVHJhbnNsYXRlLCBzZXRCdXR0b25UcmFuc2xhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdGltZU91dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0aW1lT3V0R29vZ2xlT3B0aW9ucyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGlkZUdvb2dsZU9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPT09ICc0MHB4JyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpcHRyYW5zbGF0ZScpKSB7XHJcbiAgICAgIGlmICh0aW1lT3V0R29vZ2xlT3B0aW9ucy5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lT3V0R29vZ2xlT3B0aW9ucy5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpcHRyYW5zbGF0ZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZU91dEdvb2dsZU9wdGlvbnMuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGhpZGVHb29nbGVPcHRpb25zKCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRyYW5zbGF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uVHJhbnNsYXRlJykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb29nbGVTY3JpcHQnKSkge1xyXG4gICAgICBpZiAodGltZU91dC5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lT3V0LmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb29nbGVfdHJhbnNsYXRlX2VsZW1lbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgY29uc3QgZ29vZ2xlQ29uc3QgPSBuZXcgZ29vZ2xlLnRyYW5zbGF0ZS5UcmFuc2xhdGVFbGVtZW50KHsgcGFnZUxhbmd1YWdlOiAnZXMnIH0sICdnb29nbGVfdHJhbnNsYXRlX2VsZW1lbnQnKTtcclxuICAgICAgc2V0QnV0dG9uVHJhbnNsYXRlKGZhbHNlKTtcclxuICAgICAgaGlkZUdvb2dsZU9wdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpbWVPdXQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRyYW5zbGF0ZVBhZ2UoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPSdwLTMgbXQtMTYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMiBtYi00Jz5cclxuICAgICAgICB7YnV0dG9uVHJhbnNsYXRlICYmIChcclxuICAgICAgICAgIDxidXR0b24gaWQ9J2J1dHRvblRyYW5zbGF0ZScgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXt0cmFuc2xhdGVQYWdlfSBjbGFzc05hbWU9J3B4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci1iLTQgYm9yZGVyLWluZGlnby03MDAgcm91bmRlZCBidXR0b25fdHJhbnNsYXRlIGhvdmVyOmJnLWluZGlnby00MDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAnPlRyYW5zbGF0ZSBQYWdlPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGlkPSdnb29nbGVfdHJhbnNsYXRlX2VsZW1lbnQnIGNsYXNzTmFtZT0naGlkZGVuIHctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1waW5rLTUwMCByb3VuZGVkJyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOmdyaWQgbGc6Z3JpZC1jb2xzLTInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpib3JkZXItciBsZzpib3JkZXItcGluay01MDAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxnOmhpZGRlbic+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBsZzptYXgtdy1sZycgc3JjPScuL3N0YXRpYy9maXJtYS5wbmcnIGFsdD0nZmlybWEnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOmdhcC00Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOmZsZXggbGc6ZmxleC1jb2wgbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi00IHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz7CoVNlZ3VpbWUgZW4gbWlzIHJlZGVzITwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgbGc6Z3JpZC1jb2xzLTcnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbGc6Y29sLXN0YXJ0LTMnPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzL2FsaWFuemFyYXRhYmJveScgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIHctMTAgaC1mdWxsJyBzcmM9Jy4vc3RhdGljL2ZhY2Vib29rLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy50d2l0Y2gudHYvcmF0YWJib3lwZGEnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTEwIGgtZnVsbCcgc3JjPScuL3N0YXRpYy90d2l0Y2gucG5nJyBhbHQ9J3R3aXRjaCcgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIvcmF0YWJib3knIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTEwIGgtZnVsbCcgc3JjPScuL3N0YXRpYy95b3V0dWJlLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTQgbGc6bXQtMCc+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgaHJlZj0naHR0cHM6Ly9mb3Jtcy5nbGUvcUFodGU3UjEyNFRjTHc5WDYnIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibHVlLTYwMCB1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibHVlLTUwMCBsZzpob3Zlcjp1bmRlcmxpbmUgbGc6bm8tdW5kZXJsaW5lJz7CoUNvbnRhY3RhbWUhPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTQgbGc6bXQtMCBsZzpjb2wtc3Bhbi0yJz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZG9uYXInPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtNiBweS0yIHRleHQtbGcgbGVhZGluZy1ub25lIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZSByb3VuZGVkIGhvdmVyOmJvcmRlci1nb2xkIGhvdmVyOnRleHQtZ29sZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9J2ltZycgYXJpYS1sYWJlbD0nJCc+8J+SsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgwqFEb25hciFcclxuICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPSckJz7wn5KwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBsZzptYXgtdy1sZycgc3JjPScuL3N0YXRpYy9maXJtYS5wbmcnIGFsdD0nZmlybWEnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00IG15LTYgYm9yZGVyIGJvcmRlci1waW5rLTUwMCByb3VuZGVkIGxnOnAtMiBsZzptbC0zIGxnOmJvcmRlci0yJz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGcgdGV4dC1jZW50ZXInPlBhZ2luYSBoZWNoYSBwb3I6PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyJz5BcmllbCBTYW50aWFnbyBWaWxsYXJyZWFsIEd1dGllcnJlejwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCcgaHJlZj0naHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXZlbG9wZXI/aWQ9TWFydGUmaGw9ZXNfNDE5JyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21yLTQgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1jZW50ZXInPk1hcnRlPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTYgaC02JyBzcmM9Jy4vc3RhdGljL2xvZ29EZXZlbG9wZXIucG5nJyBhbHQ9J01hcnRlIEluZHVzdHJpYScgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz5SZWRlczwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG15LTQgc206Z3JpZC1jb2xzLTQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTpjb2wtc3RhcnQtMic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYXJpZWxza2FwJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIHctMTAgaC1mdWxsJyBzcmM9Jy4vc3RhdGljL2dpdGh1Yi5zdmcnIGFsdD0nR2l0aHViJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Vjc3Rhc3lfcmluZy8nIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4gdy0xMCBoLWZ1bGwnIHNyYz0nLi9zdGF0aWMvaW5zdGFncmFtLnN2ZycgYWx0PSdJbnN0YWdyYW0nIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpBcmllbHZpbGxhZ3VAaG90bWFpbC5jb20nIGNsYXNzTmFtZT0ndGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTYwMCcgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+Q29udGFjdG86IEFyaWVsdmlsbGFndUBob3RtYWlsLmNvbTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MDQ0MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Arielskap\\\\Documents\\\\empiresRataBoy\\\\src\\\\components\\\\Footer.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\Header.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => {
  const handleMenu = () => {
    document.querySelector('.header_content').classList.toggle('menuOpen');
  };

  const closeMenu = () => {
    if (document.querySelector('.header_content').classList.contains('menuOpen')) {
      document.querySelector('.header_content').classList.remove('menuOpen');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const isBrowser = false;

    if (isBrowser) {
      window.addEventListener('scroll', () => {
        closeMenu();
      });

      switch (window.location.pathname) {
        case '/':
          document.querySelector('.Link_home').classList.remove('text-white');
          document.querySelector('.Link_home').classList.add('text-pink-500', 'font-bold');
          break;

        case '/Guias/':
          document.querySelector('.Link_guias').classList.remove('text-white');
          document.querySelector('.Link_guias').classList.add('text-pink-500', 'font-bold');
          break;

        case '/Alianzas/':
          document.querySelector('.Link_alianzas').classList.remove('text-white');
          document.querySelector('.Link_alianzas').classList.add('text-pink-500', 'font-bold');
          break;

        case '/Analisis/':
          document.querySelector('.Link_analisis').classList.remove('text-white');
          document.querySelector('.Link_analisis').classList.add('text-pink-500', 'font-bold');
          break;

        case '/Donar/':
          document.querySelector('.Link_donar').classList.remove('text-white');
          document.querySelector('.Link_donar').classList.add('text-gold', 'font-bold', 'border-gold');
          document.querySelector('.Link_donar_center').classList.add('hidden');
          break;
      }
    }
  }, []);
  return __jsx("header", {
    className: "jsx-852842238" + " " + 'sticky top-0 left-0 z-10 w-full px-6 py-4 border-b border-black',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "jsx-852842238" + " " + 'flex flex-wrap items-center justify-between w-full',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./static/logo.png",
    alt: "logo",
    className: "jsx-852842238" + " " + 'object-contain w-8 h-full mb-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/donar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-852842238" + " " + 'inline-block px-4 py-2 text-sm leading-none text-white border border-white rounded Link_donar_center hover:border-gold hover:text-gold lg:hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "$",
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "\uD83D\uDCB0"), ' ', "\xA1Donar!", ' ', __jsx("span", {
    role: "img",
    "aria-label": "$",
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "\uD83D\uDCB0"))), __jsx("div", {
    className: "jsx-852842238" + " " + 'block lg:hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    onClick: () => {
      handleMenu();
    },
    className: "jsx-852842238" + " " + 'flex items-center px-3 py-2 text-pink-200 border border-pink-400 rounded button_header hover:text-white hover:border-white',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-852842238" + " " + 'w-3 h-3 fill-current',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "jsx-852842238" + " " + 'flex-grow block w-full text-center header_content lg:flex lg:items-center lg:w-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-852842238" + " " + 'text-sm lg:flex-grow',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-852842238" + " " + 'block mt-4 text-white Link_home Link_1 lg:inline-block lg:mt-0 hover:text-pink-500 lg:mr-4 lg:text-lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/guias",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-852842238" + " " + 'block mt-4 text-white Link_guias Link_2 lg:inline-block lg:mt-0 hover:text-pink-500 lg:mr-4 lg:text-lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, "Gu\xEDas")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/alianzas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-852842238" + " " + 'block mt-4 text-white Link_alianzas Link_3 lg:inline-block lg:mt-0 hover:text-pink-500 lg:mr-4 lg:text-lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Alianzas")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/analisis",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-852842238" + " " + 'block mt-4 text-white Link_analisis Link_4 lg:inline-block lg:mt-0 hover:text-pink-500 lg:text-lg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Analisis de Heroes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/donar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-852842238" + " " + 'inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded Link_donar Link_5 hover:border-gold hover:text-gold lg:mt-0 lg:ml-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "$",
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "\uD83D\uDCB0"), ' ', "\xA1Donar!", ' ', __jsx("span", {
    role: "img",
    "aria-label": "$",
    className: "jsx-852842238",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "\uD83D\uDCB0")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "852842238",
    __self: undefined
  }, "header.jsx-852842238{background-color:rgba(1,31,105,0.99);}@media screen and (max-width:1023px){.header_content.jsx-852842238{max-height:0;-webkit-transition:max-height 0.4s ease-out;transition:max-height 0.4s ease-out;overflow:hidden;}.menuOpen.jsx-852842238{max-height:500px;-webkit-transition:max-height 0.4s ease-in;transition:max-height 0.4s ease-in;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXGNvbXBvbmVudHNcXEhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEdTLEFBR3FELEFBS3pCLEFBTUksYUFMbUIsSUFNRCxvQkFYdkMsd0RBTW9CLEVBTWxCLGNBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBcmllbHNrYXBcXERvY3VtZW50c1xcZW1waXJlc1JhdGFCb3lcXHNyY1xcY29tcG9uZW50c1xcSGVhZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoYW5kbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250ZW50JykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250ZW50JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51T3BlbicpKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfY29udGVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVPcGVuJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgaWYgKGlzQnJvd3Nlcikge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3dpdGNoICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHtcclxuICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2hvbWUnKS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXdoaXRlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19ob21lJykuY2xhc3NMaXN0LmFkZCgndGV4dC1waW5rLTUwMCcsICdmb250LWJvbGQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy9HdWlhcy8nOlxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfZ3VpYXMnKS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXdoaXRlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19ndWlhcycpLmNsYXNzTGlzdC5hZGQoJ3RleHQtcGluay01MDAnLCAnZm9udC1ib2xkJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcvQWxpYW56YXMvJzpcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2FsaWFuemFzJykuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC13aGl0ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfYWxpYW56YXMnKS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXBpbmstNTAwJywgJ2ZvbnQtYm9sZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnL0FuYWxpc2lzLyc6XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19hbmFsaXNpcycpLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtd2hpdGUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2FuYWxpc2lzJykuY2xhc3NMaXN0LmFkZCgndGV4dC1waW5rLTUwMCcsICdmb250LWJvbGQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy9Eb25hci8nOlxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfZG9uYXInKS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXdoaXRlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19kb25hcicpLmNsYXNzTGlzdC5hZGQoJ3RleHQtZ29sZCcsICdmb250LWJvbGQnLCAnYm9yZGVyLWdvbGQnKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2RvbmFyX2NlbnRlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0nc3RpY2t5IHRvcC0wIGxlZnQtMCB6LTEwIHctZnVsbCBweC02IHB5LTQgYm9yZGVyLWIgYm9yZGVyLWJsYWNrJz5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsJz5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4gdy04IGgtZnVsbCBtYi0wJyBzcmM9Jy4vc3RhdGljL2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kb25hcic+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC00IHB5LTIgdGV4dC1zbSBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXdoaXRlIHJvdW5kZWQgTGlua19kb25hcl9jZW50ZXIgaG92ZXI6Ym9yZGVyLWdvbGQgaG92ZXI6dGV4dC1nb2xkIGxnOmhpZGRlbic+XHJcbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2ltZycgYXJpYS1sYWJlbD0nJCc+8J+SsDwvc3Bhbj5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgwqFEb25hciFcclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPSckJz7wn5KwPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgbGc6aGlkZGVuJz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiB0ZXh0LXBpbmstMjAwIGJvcmRlciBib3JkZXItcGluay00MDAgcm91bmRlZCBidXR0b25faGVhZGVyIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlJyBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZU1lbnUoKTsgfX0+XHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSd3LTMgaC0zIGZpbGwtY3VycmVudCcgdmlld0JveD0nMCAwIDIwIDIwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5NZW51PC90aXRsZT5cclxuICAgICAgICAgICAgICA8cGF0aCBkPSdNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6JyAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgYmxvY2sgdy1mdWxsIHRleHQtY2VudGVyIGhlYWRlcl9jb250ZW50IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0byc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBsZzpmbGV4LWdyb3cnPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Jsb2NrIG10LTQgdGV4dC13aGl0ZSBMaW5rX2hvbWUgTGlua18xIGxnOmlubGluZS1ibG9jayBsZzptdC0wIGhvdmVyOnRleHQtcGluay01MDAgbGc6bXItNCBsZzp0ZXh0LWxnJz5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2d1aWFzJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Jsb2NrIG10LTQgdGV4dC13aGl0ZSBMaW5rX2d1aWFzIExpbmtfMiBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBob3Zlcjp0ZXh0LXBpbmstNTAwIGxnOm1yLTQgbGc6dGV4dC1sZyc+XHJcbiAgICAgICAgICAgICAgICBHdcOtYXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FsaWFuemFzJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Jsb2NrIG10LTQgdGV4dC13aGl0ZSBMaW5rX2FsaWFuemFzIExpbmtfMyBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCBob3Zlcjp0ZXh0LXBpbmstNTAwIGxnOm1yLTQgbGc6dGV4dC1sZyc+XHJcbiAgICAgICAgICAgICAgICBBbGlhbnphc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvYW5hbGlzaXMnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmxvY2sgbXQtNCB0ZXh0LXdoaXRlIExpbmtfYW5hbGlzaXMgTGlua180IGxnOmlubGluZS1ibG9jayBsZzptdC0wIGhvdmVyOnRleHQtcGluay01MDAgbGc6dGV4dC1sZyc+XHJcbiAgICAgICAgICAgICAgICBBbmFsaXNpcyBkZSBIZXJvZXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2RvbmFyJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC00IHB5LTIgbXQtNCB0ZXh0LXNtIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUgcm91bmRlZCBMaW5rX2RvbmFyIExpbmtfNSBob3Zlcjpib3JkZXItZ29sZCBob3Zlcjp0ZXh0LWdvbGQgbGc6bXQtMCBsZzptbC00Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9J2ltZycgYXJpYS1sYWJlbD0nJCc+8J+SsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICDCoURvbmFyIVxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9J2ltZycgYXJpYS1sYWJlbD0nJCc+8J+SsDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAzMSwgMTA1LCAwLjk5KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlcl9jb250ZW50IHtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudU9wZW4ge1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Arielskap\\\\Documents\\\\empiresRataBoy\\\\src\\\\components\\\\Header.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\Layout.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();

const Layout = ({
  children,
  title
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (false) {}
  }, []);
  return __jsx("div", {
    className: "jsx-2761396840" + " " + 'relative min-h-screen',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Ramon Chozas SA Hoja De Ruta",
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "./static/logo_chozas2.png",
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2761396840" + " " + 'absolute left-0 z-10 hidden w-full h-auto bg-black opacity-50 nav-bg-black',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2761396840" + " " + 'relative flex justify-center pb-24',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("main", {
    className: "jsx-2761396840" + " " + 'container px-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, children), __jsx("aside", {
    id: "aside",
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "modal",
    className: "jsx-2761396840",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2761396840",
    __self: undefined
  }, ".nav-bg-black.jsx-2761396840{top:114px;min-height:calc(100% - 114px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBR3VCLFVBQ29CLDhCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFyaWVsc2thcFxcRG9jdW1lbnRzXFxlbXBpcmVzUmF0YUJveVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgcy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgIHMuaWQgPSAnZ29vZ2xlU2NyaXB0JztcclxuICAgICAgcy5zcmMgPSAnLy90cmFuc2xhdGUuZ29vZ2xlLmNvbS90cmFuc2xhdGVfYS9lbGVtZW50LmpzP2NiPWdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0JztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgbWluLWgtc2NyZWVuJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0nVVRGLTgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1JhbW9uIENob3phcyBTQSBIb2phIERlIFJ1dGEnIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScuL3N0YXRpYy9sb2dvX2Nob3phczIucG5nJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB6LTEwIGhpZGRlbiB3LWZ1bGwgaC1hdXRvIGJnLWJsYWNrIG9wYWNpdHktNTAgbmF2LWJnLWJsYWNrJyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBwYi0yNCc+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgcHgtMic+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZSBpZD0nYXNpZGUnIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxkaXYgaWQ9J21vZGFsJyAvPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2LWJnLWJsYWNre1xyXG4gICAgICAgICAgICB0b3A6IDExNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTRweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Arielskap\\\\Documents\\\\empiresRataBoy\\\\src\\\\components\\\\Layout.jsx */"));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/LoaderColors.jsx":
/*!*****************************************!*\
  !*** ./src/components/LoaderColors.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\LoaderColors.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const LoaderColors = () => {
  return __jsx("div", {
    className: "jsx-546951727" + " " + 'LoaderColors loading-wrap gamba-circles',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-546951727" + " " + 'circle',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-546951727" + " " + 'circle',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-546951727" + " " + 'circle',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-546951727" + " " + 'circle',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "546951727",
    __self: undefined
  }, ".loading-wrap.gamba-circles.jsx-546951727{width:200px;height:200px;}.loading-wrap.gamba-circles.jsx-546951727 .circle.jsx-546951727{border:8px solid transparent;mix-blend-mode:screen;}.loading-wrap.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(1){border-color:#db4437;}.loading-wrap.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(2){border-color:#f4b400;}.loading-wrap.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(3){border-color:#86bc42;}.loading-wrap.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(4){border-color:#4285f4;}.gamba-circles.jsx-546951727{position:absolute;top:50%;left:50%;width:80px;height:80px;margin:0 auto;-webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);-o-transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);-ms-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);}.gamba-circles.jsx-546951727 .circle.jsx-546951727{position:absolute;box-sizing:border-box;width:100%;height:100%;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;border:1px solid transparent;border-radius:92% 110% 132% 88%;}.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(1){-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation:spin1 6s linear infinite;-webkit-animation:spin1-jsx-546951727 6s linear infinite;animation:spin1-jsx-546951727 6s linear infinite;border-color:#c7c7c7;}.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(2){-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation:spin2 6s linear infinite;-webkit-animation:spin2-jsx-546951727 6s linear infinite;animation:spin2-jsx-546951727 6s linear infinite;border-color:#c7c7c7;}.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(3){-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation:spin3 6s linear infinite;-webkit-animation:spin3-jsx-546951727 6s linear infinite;animation:spin3-jsx-546951727 6s linear infinite;border-color:#c7c7c7;}.gamba-circles.jsx-546951727 .circle.jsx-546951727:nth-child(4){-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation:spin4 6s linear infinite;-webkit-animation:spin4-jsx-546951727 6s linear infinite;animation:spin4-jsx-546951727 6s linear infinite;border-color:#c7c7c7;}@-webkit-keyframes spin1{0%.jsx-546951727{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%.jsx-546951727{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spin1-jsx-546951727{0%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin1-jsx-546951727{0%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spin2{0%.jsx-546951727{-webkit-transform:rotate(72deg);-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg);}100%.jsx-546951727{-webkit-transform:rotate(-288deg);-webkit-transform:rotate(-288deg);-ms-transform:rotate(-288deg);transform:rotate(-288deg);}}@-webkit-keyframes spin2-jsx-546951727{0%{-webkit-transform:rotate(72deg);-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg);}100%{-webkit-transform:rotate(-288deg);-webkit-transform:rotate(-288deg);-ms-transform:rotate(-288deg);transform:rotate(-288deg);}}@keyframes spin2-jsx-546951727{0%{-webkit-transform:rotate(72deg);-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg);}100%{-webkit-transform:rotate(-288deg);-webkit-transform:rotate(-288deg);-ms-transform:rotate(-288deg);transform:rotate(-288deg);}}@-webkit-keyframes spin3{0%.jsx-546951727{-webkit-transform:rotate(-144deg);-webkit-transform:rotate(-144deg);-ms-transform:rotate(-144deg);transform:rotate(-144deg);}100%.jsx-546951727{-webkit-transform:rotate(216deg);-webkit-transform:rotate(216deg);-ms-transform:rotate(216deg);transform:rotate(216deg);}}@-webkit-keyframes spin3-jsx-546951727{0%{-webkit-transform:rotate(-144deg);-webkit-transform:rotate(-144deg);-ms-transform:rotate(-144deg);transform:rotate(-144deg);}100%{-webkit-transform:rotate(216deg);-webkit-transform:rotate(216deg);-ms-transform:rotate(216deg);transform:rotate(216deg);}}@keyframes spin3-jsx-546951727{0%{-webkit-transform:rotate(-144deg);-webkit-transform:rotate(-144deg);-ms-transform:rotate(-144deg);transform:rotate(-144deg);}100%{-webkit-transform:rotate(216deg);-webkit-transform:rotate(216deg);-ms-transform:rotate(216deg);transform:rotate(216deg);}}@-webkit-keyframes spin4{0%.jsx-546951727{-webkit-transform:rotate(216deg);-webkit-transform:rotate(216deg);-ms-transform:rotate(216deg);transform:rotate(216deg);}100%.jsx-546951727{-webkit-transform:rotate(-144deg);-webkit-transform:rotate(-144deg);-ms-transform:rotate(-144deg);transform:rotate(-144deg);}}@-webkit-keyframes spin4-jsx-546951727{0%{-webkit-transform:rotate(216deg);-webkit-transform:rotate(216deg);-ms-transform:rotate(216deg);transform:rotate(216deg);}100%{-webkit-transform:rotate(-144deg);-webkit-transform:rotate(-144deg);-ms-transform:rotate(-144deg);transform:rotate(-144deg);}}@keyframes spin4-jsx-546951727{0%{-webkit-transform:rotate(216deg);-webkit-transform:rotate(216deg);-ms-transform:rotate(216deg);transform:rotate(216deg);}100%{-webkit-transform:rotate(-144deg);-webkit-transform:rotate(-144deg);-ms-transform:rotate(-144deg);transform:rotate(-144deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXGNvbXBvbmVudHNcXExvYWRlckNvbG9ycy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVMsQUFHeUIsQUFLaUIsQUFLUixBQUlBLEFBSUEsQUFJQSxBQUlILEFBY0EsQUFhZSxBQVNBLEFBU0EsQUFTQSxBQVVILEFBS0ssQUFPTCxBQUtLLEFBT0QsQUFLRSxBQU9GLEFBS0UsQUFPQSxBQUtELEFBT0MsQUFLRCxBQU9BLEFBS0MsQUFPRCxBQUtDLFlBbEx2QixNQTBCTCxBQWNjLEdBOUJ4QixBQUlBLEFBSUEsQUFJQSxJQXJCQSxDQTBCVyxFQStEYSxBQVlBLENBakdBLEdBNkdJLEFBWUEsQ0F6RUcsQUFTQSxBQVNBLEFBU0EsQUFlRixBQVlBLEFBb0NBLEFBWUEsQUFPQSxBQVlBLENBdkRDLEFBWUEsQUFPQSxBQVlBLEFBaUJBLEFBWUEsQ0F2SmpCLEtBYUEsTUFaQyxLQXZCZCxBQW9DYyxPQVpFLElBd0JXLEFBU0EsQUFTQSxBQVNBLENBdENRLFNBWlksd0JBYWYsSUErQzlCLEFBWUEsZUF2RTBDLENBbUYxQyxBQVlBLElBL0JBLEFBWUEsQUFvQ0EsQUFZQSxBQU9BLEFBWUEsSUF2REEsQUFZQSxBQU9BLEFBWUEsQUFpQkEsQUFZQSxFQXZJNEIsdUJBVWUsQUFTQSxBQVNBLEFBU0EsS0FwQ2xCLENBYmdCLHFDQXVCTixBQVNBLEFBU0EsQUFTQSxFQWpESyxrQkFhWCxvQkFaUSxTQWFMLGdDQUNsQyx5QkFRdUIsQUFTQSxBQVNBLEFBU0EscUJBMUJ2QixBQVNBLEFBU0EsQUFTQSw4QkFqREEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBcmllbHNrYXBcXERvY3VtZW50c1xcZW1waXJlc1JhdGFCb3lcXHNyY1xcY29tcG9uZW50c1xcTG9hZGVyQ29sb3JzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvYWRlckNvbG9ycyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0xvYWRlckNvbG9ycyBsb2FkaW5nLXdyYXAgZ2FtYmEtY2lyY2xlcyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5sb2FkaW5nLXdyYXAuZ2FtYmEtY2lyY2xlcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9hZGluZy13cmFwLmdhbWJhLWNpcmNsZXMgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2FkaW5nLXdyYXAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RiNDQzNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9hZGluZy13cmFwLmdhbWJhLWNpcmNsZXMgLmNpcmNsZTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNGI0MDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvYWRpbmctd3JhcC5nYW1iYS1jaXJjbGVzIC5jaXJjbGU6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODZiYzQyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2FkaW5nLXdyYXAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQyODVmNDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ2FtYmEtY2lyY2xlcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDkyJSAxMTAlIDEzMiUgODglO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5nYW1iYS1jaXJjbGVzIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4xIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluMSA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2M3YzdjNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluMiA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3BpbjIgNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNjN2M3Yzc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmdhbWJhLWNpcmNsZXMgLmNpcmNsZTpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjMgNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW4zIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYzdjN2M3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5nYW1iYS1jaXJjbGVzIC5jaXJjbGU6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW40IDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluNCA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2M3YzdjNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbjEge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4xIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4yIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjg4ZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjg4ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbjIge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0yODhkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yODhkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4zIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBzcGluMyB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNDRkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNDRkZWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluNCB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTQ0ZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQ0ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbjQge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlckNvbG9ycztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Arielskap\\\\Documents\\\\empiresRataBoy\\\\src\\\\components\\\\LoaderColors.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LoaderColors);

/***/ }),

/***/ "./src/components/MessageErrorFetch.jsx":
/*!**********************************************!*\
  !*** ./src/components/MessageErrorFetch.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\MessageErrorFetch.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MessageErrorFetch = ({
  errorResponse,
  children
}) => {
  return __jsx("div", {
    className: "w-full max-w-lg p-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-lg font-bold text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "Error al", ` ${children}`), __jsx("p", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Informaci\xF3n del error:"), ` ${errorResponse}`));
};

/* harmony default export */ __webpack_exports__["default"] = (MessageErrorFetch);

/***/ }),

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/animations/index.js");
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\Modal.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Modal = ({
  children,
  data
}) => {
  if (!data.open) {
    return null;
  }

  const {
    slide,
    setSlide
  } = Object(_animations__WEBPACK_IMPORTED_MODULE_3__["useSlide"])(0, -500);

  const closeModal = () => {
    document.querySelector('.Modal').classList.remove('Modal_active');
    setSlide({
      transform: 'translate(0px, -500px)',
      onRest: () => {
        if (document.body.classList.contains('overflow-hidden')) {
          document.body.classList.remove('overflow-hidden');
        }

        data.setOpen(false);
      }
    });
  };

  const handleClickBackground = e => {
    if (e.target === document.querySelector('.Modal__bg')) {
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (document.querySelector('.Modal')) {
      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }

      document.querySelector('.Modal__bg').addEventListener('click', e => {
        handleClickBackground(e);
      });
    }

    return () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, []);
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(__jsx("div", {
    className: "z-30 overflow-x-hidden overflow-y-auto Modal Modal_active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex items-center justify-center w-full min-h-screen py-6 Modal__bg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "rounded-lg Modal__container",
    style: slide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "absolute z-10 px-2 py-1 text-xl font-bold leading-none text-white bg-red-800 border border-black rounded-lg shadow Modal__close-button text-border-black hover:bg-red-600",
    type: "button",
    onClick: () => {
      closeModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "x"), children))), document.getElementById('modal'));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Footer, Header, BlackBackground, ButtonModal, SEO, CardAlianza, LoaderColors, MessageErrorFetch, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BlackBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlackBackground */ "./src/components/BlackBackground.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlackBackground", function() { return _BlackBackground__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ButtonModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonModal */ "./src/components/ButtonModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModal", function() { return _ButtonModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seo */ "./src/components/seo.js");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return _seo__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _CardAlianza__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardAlianza */ "./src/components/CardAlianza.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardAlianza", function() { return _CardAlianza__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _LoaderColors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoaderColors */ "./src/components/LoaderColors.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderColors", function() { return _LoaderColors__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _MessageErrorFetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MessageErrorFetch */ "./src/components/MessageErrorFetch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageErrorFetch", function() { return _MessageErrorFetch__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/components/index/LinkH1.jsx":
/*!*****************************************!*\
  !*** ./src/components/index/LinkH1.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\index\\LinkH1.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const LinkH1 = () => {
  const copyText = selector => {
    const text = document.querySelector(selector).innerText;
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    document.querySelectorAll('.tooltiptext').forEach(element => {
      const toolTip = element;
      toolTip.innerText = 'Copiado 💖';
    });
  };

  return __jsx("div", {
    className: "jsx-1307727091" + " " + 'px-2 mt-1 mb-6 text-center lg:m-0 tooltip',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: () => copyText('#titleCopy'),
    className: "jsx-1307727091" + " " + 'px-2 py-1 text-lg font-bold break-all bg-black bg-opacity-25 rounded sm:text-xl lg:bg-transparent',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("span", {
    id: "myTooltip",
    className: "jsx-1307727091" + " " + 'text-sm tooltiptext',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Copiar Link"), __jsx("h1", {
    id: "titleCopy",
    className: "jsx-1307727091" + " " + 'hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "https://ratabboy.herokuapp.com/"), __jsx("img", {
    src: "./static/herokuLink.png",
    alt: "https://ratabboy.herokuapp.com/",
    className: "jsx-1307727091" + " " + 'object-contain md:max-w-2xl xl:max-w-4xl',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1307727091",
    __self: undefined
  }, ".tooltip.jsx-1307727091{position:relative;}.tooltip.jsx-1307727091 .tooltiptext.jsx-1307727091{visibility:hidden;width:140px;background-color:#011f69e1;color:#fff;text-align:center;border-radius:6px;padding:5px;position:absolute;z-index:1;bottom:-15%;left:50%;margin-left:-75px;opacity:0;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}.tooltip.jsx-1307727091 .tooltiptext.jsx-1307727091::after{content:\"\";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #011f69e1 transparent;}.tooltip.jsx-1307727091:hover .tooltiptext.jsx-1307727091{visibility:visible;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXGNvbXBvbmVudHNcXGluZGV4XFxMaW5rSDEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCUyxBQUcrQixBQUlBLEFBaUJQLEFBV1EsV0FWRCxPQXJCcEIsQUFJYyxDQTRCRixVQVZFLEFBV2QsQ0E1QjZCLFdBa0JsQixTQUNRLE9BbEJOLFVBbUJNLENBbEJDLGdCQW1CQyxFQWxCRCxpQkFtQnlDLENBbEIvQyxZQUNNLGtCQUNSLFVBQ0UsWUFDSCxNQWVYLEdBZG9CLGtCQUNSLFVBQ2Msd0RBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXGNvbXBvbmVudHNcXGluZGV4XFxMaW5rSDEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlua0gxID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvcHlUZXh0ID0gKHNlbGVjdG9yKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuaW5uZXJUZXh0O1xyXG4gICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICBkdW1teS52YWx1ZSA9IHRleHQ7XHJcbiAgICBkdW1teS5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcHRleHQnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvb2xUaXAgPSBlbGVtZW50O1xyXG4gICAgICB0b29sVGlwLmlubmVyVGV4dCA9ICdDb3BpYWRvIPCfkpYnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3B4LTIgbXQtMSBtYi02IHRleHQtY2VudGVyIGxnOm0tMCB0b29sdGlwJz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IGNvcHlUZXh0KCcjdGl0bGVDb3B5Jyl9IGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtbGcgZm9udC1ib2xkIGJyZWFrLWFsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IHJvdW5kZWQgc206dGV4dC14bCBsZzpiZy10cmFuc3BhcmVudCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtIHRvb2x0aXB0ZXh0JyBpZD0nbXlUb29sdGlwJz5Db3BpYXIgTGluazwvc3Bhbj5cclxuICAgICAgICA8aDEgaWQ9J3RpdGxlQ29weScgY2xhc3NOYW1lPSdoaWRkZW4nPmh0dHBzOi8vcmF0YWJib3kuaGVyb2t1YXBwLmNvbS88L2gxPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBtZDptYXgtdy0yeGwgeGw6bWF4LXctNHhsJyBzcmM9Jy4vc3RhdGljL2hlcm9rdUxpbmsucG5nJyBhbHQ9J2h0dHBzOi8vcmF0YWJib3kuaGVyb2t1YXBwLmNvbS8nIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAudG9vbHRpcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMWY2OWUxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBib3R0b206IC0xNSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDExZjY5ZTEgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtIMTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Arielskap\\\\Documents\\\\empiresRataBoy\\\\src\\\\components\\\\index\\\\LinkH1.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkH1);

/***/ }),

/***/ "./src/components/index/Twitch.jsx":
/*!*****************************************!*\
  !*** ./src/components/index/Twitch.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\components\\index\\Twitch.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Twitch = ({
  targetID = 'twitch-embed',
  width = '940',
  height = '480',
  channel = '',
  theme = ''
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}
  }, []);
  return __jsx("div", {
    id: targetID,
    className: "max-w-6xl w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Twitch);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, title }) {
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'es',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
*/

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useFetch, useSearch, useSearchHeroes, usePageTransition, useDataPj, useVerifyFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useFetch */ "./src/hooks/useFetch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return _useFetch__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSearch */ "./src/hooks/useSearch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return _useSearch__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useSearchHeroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSearchHeroes */ "./src/hooks/useSearchHeroes.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearchHeroes", function() { return _useSearchHeroes__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _usePageTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePageTransition */ "./src/hooks/usePageTransition.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageTransition", function() { return _usePageTransition__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useDataPj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDataPj */ "./src/hooks/useDataPj.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDataPj", function() { return _useDataPj__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useVerifyFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useVerifyFetch */ "./src/hooks/useVerifyFetch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVerifyFetch", function() { return _useVerifyFetch__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/hooks/useDataPj.jsx":
/*!*********************************!*\
  !*** ./src/hooks/useDataPj.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localFunction */ "./src/localFunction.js");



const useDataPj = data => {
  const {
    0: dataPj,
    1: setDataPj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    starsNode: [],
    srcElement: '',
    srcClassHero: '',
    color: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let type, className, color;
    const stars = [];

    for (let i = 0; i < data.stars; i++) {
      stars.push(i);
    }

    type = data.element.toLowerCase();
    className = data.classHero.toLowerCase();

    switch (type) {
      case 'azul hielo':
        type = './static/hielo.png';
        color = 'blue';
        break;

      case 'violeta oscuro':
        type = './static/oscuro.png';
        color = 'purple';
        break;

      case 'verde naturaleza':
        type = './static/naturaleza.png';
        color = 'green';
        break;

      case 'rojo fuego':
        type = './static/fuego.png';
        color = 'red';
        break;

      case 'amarillo sagrado':
        type = './static/sagrado.png';
        color = 'yellow';
        break;

      default:
        break;
    }

    className = Object(_localFunction__WEBPACK_IMPORTED_MODULE_1__["getImgClassHero"])(className);
    setDataPj({
      starsNode: stars,
      srcElement: type,
      srcClassHero: className,
      color
    });
  }, []);
  return {
    dataPj
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useDataPj);

/***/ }),

/***/ "./src/hooks/useFetch.jsx":
/*!********************************!*\
  !*** ./src/hooks/useFetch.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _localFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localFunction */ "./src/localFunction.js");


 //import json from '../json/analisis.json';

const useFetch = id => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorResponse,
    1: setErrorResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(id, _localFunction__WEBPACK_IMPORTED_MODULE_2__["fetchJson2"]); //const data = json;
  //const error = null;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (error) {
      console.log(`Hubo un problema con la petición Fetch:${error.message}`);

      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }

      setOpen(true);
      setErrorResponse(error.message);
    }

    if (data) {
      console.log(data);
    }
  }, [error, data]);
  return {
    open,
    setOpen,
    errorResponse,
    setErrorResponse,
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useFetch);

/***/ }),

/***/ "./src/hooks/useNearScreen.js":
/*!************************************!*\
  !*** ./src/hooks/useNearScreen.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useNearScreen = () => {
  const element = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! intersection-observer */ "intersection-observer", 7))).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const {
          isIntersecting
        } = entries[0];

        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);
  return [element, show];
};

/* harmony default export */ __webpack_exports__["default"] = (useNearScreen);

/***/ }),

/***/ "./src/hooks/usePageTransition.jsx":
/*!*****************************************!*\
  !*** ./src/hooks/usePageTransition.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const usePageTransition = () => {
  const {
    0: item,
    1: setItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_0__["useTransition"])(item, null, {
    config: {
      duration: 500,
      delay: 200
    },
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  return {
    transitions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePageTransition);

/***/ }),

/***/ "./src/hooks/useSearch.jsx":
/*!*********************************!*\
  !*** ./src/hooks/useSearch.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useSearchHeroes = json => {
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: jsonSearch,
    1: setJsonSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(json);
  const options = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    threshold: 0.0,
    keys: ['name']
  });
  const fuse = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Fuse(json, options.current));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (query === '') {
      setJsonSearch(json);
    } else {
      const search = fuse.current.search(query);
      const newJson = [];
      search.forEach(element => {
        newJson.push(element.item);
      });
      setJsonSearch(newJson);
    }
  }, [json, query]);
  return {
    query,
    setQuery,
    jsonSearch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSearchHeroes);

/***/ }),

/***/ "./src/hooks/useSearchHeroes.jsx":
/*!***************************************!*\
  !*** ./src/hooks/useSearchHeroes.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ "fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_1__);



const useSearchHeroes = json => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    query: '',
    stars: '',
    element: '',
    class: '',
    family: '',
    event: ''
  });
  const {
    0: clean,
    1: setClean
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: jsonSearch,
    1: setJsonSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const createFuse = (json, options) => {
    let newOptions = options.keys.filter(option => option !== '');
    newOptions = {
      threshold: 0.3,
      keys: newOptions
    };
    return new fuse_js__WEBPACK_IMPORTED_MODULE_1___default.a(json, newOptions);
  };

  const createOperator = key => {
    let flag = 0;
    let operator;
    let newKey;
    const result = key.some(object => {
      const value = Object.values(object);

      if (value[0] !== '') {
        flag++;
        operator = value[0];
      }

      return flag >= 2;
    });

    if (result) {
      newKey = key.filter(object => {
        const value = Object.values(object);
        return value[0] !== '';
      });
      operator = {
        $and: newKey
      };
    }

    return operator;
  };

  const searching = (json, options, key) => {
    const newJson = [];
    const fuse = createFuse(json, options);
    const operator = createOperator(key);
    const search = fuse.search(operator);
    search.forEach(element => {
      newJson.push(element.item);
    });
    console.log(newJson);
    return newJson;
  };

  const compare = (a, b) => {
    if (a.name.trim() < b.name.trim()) {
      return -1;
    }

    if (a.name.trim() > b.name.trim()) {
      return 1;
    }

    return 0;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let newJson;
    const {
      query,
      stars,
      element,
      class: classHero,
      family,
      event
    } = data;

    if (clean) {
      setData({
        query: '',
        stars: '',
        element: '',
        class: '',
        family: '',
        event: ''
      });
      setJsonSearch(json);
      setClean(false);
    } else {
      if (query === '' && stars === '' && element === '' && classHero === '' && family === '' && event === '') {
        //No tiene nada
        if (json) {
          newJson = json.sort(compare);
          setJsonSearch(newJson);
        }
      } else {
        newJson = searching(json, {
          threshold: 0.3,
          keys: [query && {
            name: 'name'
          }, stars && {
            name: 'stars'
          }, element && {
            name: 'element'
          }, classHero && {
            name: 'class'
          }, family && {
            name: 'family'
          }, event && {
            name: 'event'
          }]
        }, [{
          name: query
        }, {
          stars
        }, {
          element
        }, {
          class: classHero
        }, {
          family
        }, {
          event
        }]);
        setJsonSearch(newJson);
      }
    }
  }, [json, data, clean]);
  return {
    data,
    setData,
    jsonSearch,
    setClean
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useSearchHeroes);

/***/ }),

/***/ "./src/hooks/useVerifyFetch.jsx":
/*!**************************************!*\
  !*** ./src/hooks/useVerifyFetch.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useVerifyFetch = response => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorResponse,
    1: setErrorResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  console.log(response);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const error = response.error || response.message;

    if (error) {
      console.log(`Hubo un problema con la petición Fetch:${error}`);

      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }

      setOpen(true);
      setErrorResponse(error);
    }
  }, [response]);
  return {
    open,
    setOpen,
    errorResponse,
    setErrorResponse,
    data: response.body || undefined
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useVerifyFetch);

/***/ }),

/***/ "./src/localFunction.js":
/*!******************************!*\
  !*** ./src/localFunction.js ***!
  \******************************/
/*! exports provided: fetchJson, fetchJson2, getImgClassHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJson", function() { return fetchJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJson2", function() { return fetchJson2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImgClassHero", function() { return getImgClassHero; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const fetchJson = (name, link, setFunctions) => {
  const {
    setOpen,
    setErrorResponse,
    setJson
  } = setFunctions;
  const storage = sessionStorage.getItem(name);

  if (storage) {
    setJson(JSON.parse(sessionStorage.getItem(name)));
  } else {
    fetch(`https://api.jsonbin.io/b/${link}`, {
      headers: {
        'secret-key': '$2b$10$rMiLIzrwZN3L0coOy9YBuO.EbU9bdYqwH79HBShMOATzq1YNKzSvC'
      }
    }).catch(error => {
      console.log(`Hubo un problema con la petición Fetch:${error.message}`);

      if (!document.body.classList.contains('overflow-hidden')) {
        document.body.classList.add('overflow-hidden');
      }

      setOpen(true);
      setErrorResponse(error.message);
    }).then(response => {
      return response.json();
    }).then(myJson => {
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
const fetchJson2 = url => {
  return fetch(`https://ratabboy-api.herokuapp.com/${url}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json();
  }).catch(res => {
    return _objectSpread(_objectSpread({}, res), {}, {
      error: res.message
    });
  }).then(res => {
    return res;
  });
};
const getImgClassHero = className => {
  let classNameSrc;

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

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/animations/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _components_index_Twitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index/Twitch */ "./src/components/index/Twitch.jsx");
/* harmony import */ var _components_index_LinkH1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index/LinkH1 */ "./src/components/index/LinkH1.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _localFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../localFunction */ "./src/localFunction.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
var _jsxFileName = "C:\\Users\\Arielskap\\Documents\\empiresRataBoy\\src\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ __webpack_exports__["default"] = (({
  response
}) => {
  const {
    fade
  } = Object(_animations__WEBPACK_IMPORTED_MODULE_3__["useFade"])();
  const {
    open,
    setOpen,
    errorResponse,
    data
  } = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useVerifyFetch"])(response);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].main, {
    style: fade,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2663830377" + " " + 'md:hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "./static/redAlianzas2.png",
    alt: "Red Alianzas",
    className: "jsx-2663830377" + " " + 'object-contain w-full max-h-screen',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx(_components_index_LinkH1__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2663830377" + " " + 'hidden md:flex md:flex-col md:items-center md:justify-center md:my-6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_components_index_LinkH1__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "./static/redDeAlianzas.png",
    alt: "Red de Alianzas",
    className: "jsx-2663830377" + " " + 'object-contain md:max-w-4xl xl:max-w-6xl',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2663830377" + " " + 'px-8',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("hr", {
    className: "jsx-2663830377" + " " + 'my-8 hr-home md:hidden',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-2663830377",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-2663830377" + " " + 'mb-4 text-xl font-bold text-center md:text-2xl',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "\xA1Ver Directo Ahora!"), __jsx("div", {
    className: "jsx-2663830377" + " " + 'flex items-center justify-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_components_index_Twitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: "dark",
    width: "100%",
    height: 480,
    channel: "ratabboypda",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }))), __jsx("hr", {
    className: "jsx-2663830377" + " " + 'my-8 hr-home',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-2663830377",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-2663830377" + " " + 'mb-4 text-xl font-bold text-center md:text-2xl',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\xA1Listas de Reproducci\xF3n!"), __jsx("div", {
    className: "jsx-2663830377" + " " + 'grid grid-cols-1 gap-4 md:grid-cols-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, data && Array.isArray(data) && data.map(video => {
    const {
      id,
      name,
      link
    } = video;
    return __jsx("div", {
      key: id,
      className: "jsx-2663830377" + " " + 'mt-2 md:mt-0',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, __jsx("h3", {
      className: "jsx-2663830377" + " " + 'mb-2 font-bold text-center underline text-md',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, name), __jsx("iframe", {
      title: name,
      src: link,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-2663830377" + " " + 'w-full rounded md:h-64',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }));
  }))))), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    data: {
      open,
      setOpen
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["MessageErrorFetch"], {
    errorResponse: errorResponse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Traer la Lista de Reproducci\xF3n")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2663830377",
    __self: undefined
  }, ".hr-home.jsx-2663830377{overflow:visible;padding:0;border:none;height:1px !important;background:#333;background-image:linear-gradient(to right,#ccc,#333,#ccc);color:#333;text-align:center;}.hr-home.jsx-2663830377::after{content:\"\uD83D\uDD79\uFE0F\";display:inline-block;position:relative;top:-0.7em;font-size:1.5em;padding:0 0.25em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFMsQUFHNEIsQUFXSCxjQUNPLEdBWFgsVUFDRSxRQVdNLElBVkksY0FXWCxRQVZLLEdBV0EsYUFWNkMsR0FXNUMsaUJBQ25CLHNDQVhhLFdBQ08sa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQXJpZWxza2FwXFxEb2N1bWVudHNcXGVtcGlyZXNSYXRhQm95XFxzcmNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuaW1wb3J0IHsgdXNlRmFkZSB9IGZyb20gJy4uL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlRXJyb3JGZXRjaCwgTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuaW1wb3J0IFR3aXRjaCBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L1R3aXRjaCc7XHJcbmltcG9ydCBMaW5rSDEgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9MaW5rSDEnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgZmV0Y2hKc29uMiB9IGZyb20gJy4uL2xvY2FsRnVuY3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VWZXJpZnlGZXRjaCB9IGZyb20gJy4uL2hvb2tzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHJlc3BvbnNlIH0pID0+IHtcclxuICBjb25zdCB7IGZhZGUgfSA9IHVzZUZhZGUoKTtcclxuICBjb25zdCB7IG9wZW4sIHNldE9wZW4sIGVycm9yUmVzcG9uc2UsIGRhdGEgfSA9IHVzZVZlcmlmeUZldGNoKHJlc3BvbnNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9J0hvbWUnPlxyXG4gICAgICA8YW5pbWF0ZWQubWFpbiBzdHlsZT17ZmFkZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOmhpZGRlbic+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4gdy1mdWxsIG1heC1oLXNjcmVlbicgc3JjPScuL3N0YXRpYy9yZWRBbGlhbnphczIucG5nJyBhbHQ9J1JlZCBBbGlhbnphcycgLz5cclxuICAgICAgICAgIDxMaW5rSDEgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXggbWQ6ZmxleC1jb2wgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktY2VudGVyIG1kOm15LTYnPlxyXG4gICAgICAgICAgPExpbmtIMSAvPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIG1kOm1heC13LTR4bCB4bDptYXgtdy02eGwnIHNyYz0nLi9zdGF0aWMvcmVkRGVBbGlhbnphcy5wbmcnIGFsdD0nUmVkIGRlIEFsaWFuemFzJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC04Jz5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9J215LTggaHItaG9tZSBtZDpoaWRkZW4nIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYi00IHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1kOnRleHQtMnhsJz7CoVZlciBEaXJlY3RvIEFob3JhITwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPFR3aXRjaCB0aGVtZT0nZGFyaycgd2lkdGg9JzEwMCUnIGhlaWdodD17NDgwfSBjaGFubmVsPSdyYXRhYmJveXBkYScgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9J215LTggaHItaG9tZScgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21iLTQgdGV4dC14bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWQ6dGV4dC0yeGwnPsKhTGlzdGFzIGRlIFJlcHJvZHVjY2nDs24hPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTMnPlxyXG4gICAgICAgICAgICAgIHtkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5tYXAoKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBsaW5rIH0gPSB2aWRlbztcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yIG1kOm10LTAnIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J21iLTIgZm9udC1ib2xkIHRleHQtY2VudGVyIHVuZGVybGluZSB0ZXh0LW1kJz57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPSd3LWZ1bGwgcm91bmRlZCBtZDpoLTY0JyB0aXRsZT17bmFtZX0gc3JjPXtsaW5rfSBmcmFtZUJvcmRlcj0nMCcgYWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlJyBhbGxvd0Z1bGxTY3JlZW4gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FuaW1hdGVkLm1haW4+XHJcbiAgICAgIDxNb2RhbCBkYXRhPXt7IG9wZW4sIHNldE9wZW4gfX0+XHJcbiAgICAgICAgPE1lc3NhZ2VFcnJvckZldGNoIGVycm9yUmVzcG9uc2U9e2Vycm9yUmVzcG9uc2V9PlRyYWVyIGxhIExpc3RhIGRlIFJlcHJvZHVjY2nDs248L01lc3NhZ2VFcnJvckZldGNoPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLmhyLWhvbWUge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEZvciBJRSAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjMzMzLCAjY2NjKTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhyLWhvbWU6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi8J+Vue+4j1wiO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAtMC43ZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hKc29uMignaW5pY2lvVmlkZW9zJylcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcmVzcG9uc2U6IGRhdGEgfSB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Arielskap\\\\Documents\\\\empiresRataBoy\\\\src\\\\pages\\\\index.js */"));
});
function getServerSideProps() {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = _asyncToGenerator(function* () {
    const data = yield Object(_localFunction__WEBPACK_IMPORTED_MODULE_8__["fetchJson2"])('inicioVideos');
    return {
      props: {
        response: data
      }
    };
  });
  return _getServerSideProps.apply(this, arguments);
}

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Arielskap\Documents\empiresRataBoy\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "fuse.js":
/*!**************************!*\
  !*** external "fuse.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvdXNlU3ByaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JsYWNrQmFja2dyb3VuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uTW9kYWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmRBbGlhbnphLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkZXJDb2xvcnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VFcnJvckZldGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgvTGlua0gxLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC9Ud2l0Y2guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZURhdGFQai5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUZldGNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlTmVhclNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlUGFnZVRyYW5zaXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZWFyY2guanN4Iiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VTZWFyY2hIZXJvZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VWZXJpZnlGZXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZ1c2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInVzZVNsaWRlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJzbGlkZSIsInNldFNsaWRlIiwic3RvcFNsaWRlIiwidXNlU3ByaW5nIiwidG8iLCJ0cmFuc2Zvcm0iLCJmcm9tIiwidXNlRmFkZSIsImlzUmV2ZXJzZSIsImZhZGUiLCJzZXRGYWRlIiwic3RvcEZhZGUiLCJvcGFjaXR5IiwidXNlUmVuZGVySW1nIiwicmVuZGVySW1nIiwic2V0UmVuZGVySW1nIiwic3RvcFJlbmRlckltZyIsImNvbmZpZyIsImR1cmF0aW9uIiwiZmlsdGVyIiwidXNlUm90YXRlWSIsInJvdGF0ZVkiLCJzZXRSb3RhdGVZIiwic3RvcFJvdGF0ZVkiLCJCbGFja0JhY2tncm91bmQiLCJCdXR0b25Nb2RhbCIsImVsZW1lbnQiLCJzaG93IiwidXNlTmVhclNjcmVlbiIsIkNhcmRBbGlhbnphIiwianNvbiIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJwaWN0dXJlIiwidGl0YW5zIiwicmVxdWlyZW1lbnRzIiwicmV2aWV3IiwiRm9vdGVyIiwiYnV0dG9uVHJhbnNsYXRlIiwic2V0QnV0dG9uVHJhbnNsYXRlIiwidGltZU91dCIsInVzZVJlZiIsInRpbWVPdXRHb29nbGVPcHRpb25zIiwiaGlkZUdvb2dsZU9wdGlvbnMiLCJib2R5Iiwic3R5bGUiLCJ0b3AiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJ0cmFuc2xhdGVQYWdlIiwiZGlzYWJsZWQiLCJyZW1vdmUiLCJnb29nbGVDb25zdCIsImdvb2dsZSIsInRyYW5zbGF0ZSIsIlRyYW5zbGF0ZUVsZW1lbnQiLCJwYWdlTGFuZ3VhZ2UiLCJIZWFkZXIiLCJoYW5kbGVNZW51IiwidG9nZ2xlIiwiY2xvc2VNZW51IiwiY29udGFpbnMiLCJ1c2VFZmZlY3QiLCJpc0Jyb3dzZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJMYXlvdXQiLCJ0aXRsZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiTG9hZGVyQ29sb3JzIiwiTWVzc2FnZUVycm9yRmV0Y2giLCJlcnJvclJlc3BvbnNlIiwiTW9kYWwiLCJjbG9zZU1vZGFsIiwib25SZXN0IiwiaGFuZGxlQ2xpY2tCYWNrZ3JvdW5kIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJnZXRFbGVtZW50QnlJZCIsIkxpbmtIMSIsImNvcHlUZXh0Iiwic2VsZWN0b3IiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwiZHVtbXkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b29sVGlwIiwiVHdpdGNoIiwidGFyZ2V0SUQiLCJ3aWR0aCIsImhlaWdodCIsImNoYW5uZWwiLCJ0aGVtZSIsInVzZURhdGFQaiIsImRhdGFQaiIsInNldERhdGFQaiIsInN0YXJzTm9kZSIsInNyY0VsZW1lbnQiLCJzcmNDbGFzc0hlcm8iLCJjb2xvciIsInR5cGUiLCJjbGFzc05hbWUiLCJzdGFycyIsImkiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzSGVybyIsImdldEltZ0NsYXNzSGVybyIsInVzZUZldGNoIiwiaWQiLCJzZXRFcnJvclJlc3BvbnNlIiwidXNlU1dSIiwiZmV0Y2hKc29uMiIsImxvZyIsInNldFNob3ciLCJ0aGVuIiwiaXNJbnRlcnNlY3RpbmciLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsInVzZVBhZ2VUcmFuc2l0aW9uIiwiaXRlbSIsInNldEl0ZW0iLCJ0cmFuc2l0aW9ucyIsInVzZVRyYW5zaXRpb24iLCJkZWxheSIsImVudGVyIiwibGVhdmUiLCJ1c2VTZWFyY2hIZXJvZXMiLCJzZXRRdWVyeSIsImpzb25TZWFyY2giLCJzZXRKc29uU2VhcmNoIiwidGhyZXNob2xkIiwia2V5cyIsImZ1c2UiLCJGdXNlIiwidXNlTWVtbyIsInNlYXJjaCIsIm5ld0pzb24iLCJzZXREYXRhIiwiY2xhc3MiLCJmYW1pbHkiLCJjbGVhbiIsInNldENsZWFuIiwiY3JlYXRlRnVzZSIsIm5ld09wdGlvbnMiLCJvcHRpb24iLCJjcmVhdGVPcGVyYXRvciIsImZsYWciLCJvcGVyYXRvciIsIm5ld0tleSIsInNvbWUiLCJvYmplY3QiLCJ2YWx1ZXMiLCIkYW5kIiwic2VhcmNoaW5nIiwiY29tcGFyZSIsImEiLCJiIiwidHJpbSIsInNvcnQiLCJ1c2VWZXJpZnlGZXRjaCIsInJlc3BvbnNlIiwidW5kZWZpbmVkIiwiZmV0Y2hKc29uIiwibGluayIsInNldEZ1bmN0aW9ucyIsInNldEpzb24iLCJzdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiY2F0Y2giLCJteUpzb24iLCJsZW5naHQiLCJzdHJpbmdpZnkiLCJjbGFzc05hbWVTcmMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ2aWRlbyIsImdldFNlcnZlclNpZGVQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztR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QUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic3RhdGljXFxcXGRldmVsb3BtZW50XFxcXHBhZ2VzXFxcXGluZGV4LmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImV4cG9ydCB7IHVzZUZhZGUsIHVzZVNsaWRlLCB1c2VSb3RhdGVZLCB1c2VSZW5kZXJJbWcgfSBmcm9tICcuL3VzZVNwcmluZyc7XHJcbiIsImltcG9ydCB7IHVzZVNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2xpZGUgPSAodHJhbnNsYXRlWCA9IDAsIHRyYW5zbGF0ZVkgPSAwKSA9PiB7XHJcbiAgY29uc3QgW3NsaWRlLCBzZXRTbGlkZSwgc3RvcFNsaWRlXSA9IHVzZVNwcmluZygoKSA9PiAoe1xyXG4gICAgdG86IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgMHB4KScgfSxcclxuICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KWAgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHsgc2xpZGUsIHNldFNsaWRlLCBzdG9wU2xpZGUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGYWRlID0gKGlzUmV2ZXJzZSA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgW2ZhZGUsIHNldEZhZGUsIHN0b3BGYWRlXSA9IHVzZVNwcmluZygoKSA9PiAoe1xyXG4gICAgdG86IHsgb3BhY2l0eTogaXNSZXZlcnNlID8gMCA6IDEgfSxcclxuICAgIGZyb206IHsgb3BhY2l0eTogaXNSZXZlcnNlID8gMSA6IDAgfSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHsgZmFkZSwgc2V0RmFkZSwgc3RvcEZhZGUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VSZW5kZXJJbWcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3JlbmRlckltZywgc2V0UmVuZGVySW1nLCBzdG9wUmVuZGVySW1nXSA9IHVzZVNwcmluZygoKSA9PiAoe1xyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAxMDAwIH0sXHJcbiAgICB0bzogeyBvcGFjaXR5OiAxLCBmaWx0ZXI6ICdibHVyKDApJyB9LFxyXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwLCBmaWx0ZXI6ICdibHVyKDVweCknIH0sXHJcbiAgfSkpO1xyXG4gIHJldHVybiB7IHJlbmRlckltZywgc2V0UmVuZGVySW1nLCBzdG9wUmVuZGVySW1nIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUm90YXRlWSA9IChpc1JldmVyc2UgPSBmYWxzZSkgPT4ge1xyXG4gIGNvbnN0IFtyb3RhdGVZLCBzZXRSb3RhdGVZLCBzdG9wUm90YXRlWV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcclxuICAgIHRvOiB7IHRyYW5zZm9ybTogaXNSZXZlcnNlID8gJ3JvdGF0ZVkoMGRlZyknIDogJ3JvdGF0ZVkoMTgwZGVnKScgfSxcclxuICAgIGZyb206IHsgdHJhbnNmb3JtOiBpc1JldmVyc2UgPyAncm90YXRlWSgxODBkZWcpJyA6ICdyb3RhdGVZKDBkZWcpJyB9LFxyXG4gIH0pKTtcclxuICByZXR1cm4geyByb3RhdGVZLCBzZXRSb3RhdGVZLCBzdG9wUm90YXRlWSB9O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZUZhZGUgfSBmcm9tICcuLi9hbmltYXRpb25zJztcclxuXHJcbmNvbnN0IEJsYWNrQmFja2dyb3VuZCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGZhZGUgfSA9IHVzZUZhZGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9J0JsYWNrQmFja2dyb3VuZCBiZy1ibGFjay10cmFzcGFyZW50IGZpeGVkIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHotMjAnIHN0eWxlPXtmYWRlfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsYWNrQmFja2dyb3VuZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZU5lYXJTY3JlZW4gZnJvbSAnLi4vaG9va3MvdXNlTmVhclNjcmVlbic7XHJcblxyXG5jb25zdCBCdXR0b25Nb2RhbCA9ICh7IGNoaWxkcmVuLCByZWYsIG9uQ2xpY2sgPSAoKSA9PiB7fSB9KSA9PiB7XHJcbiAgY29uc3QgW2VsZW1lbnQsIHNob3ddID0gdXNlTmVhclNjcmVlbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHJlZj17ZWxlbWVudH0gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3ctZnVsbCBtaW4taC03NSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSB0cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGhvdmVyOnNjYWxlLTExMCBib3JkZXItdHJhbnNwYXJlbnQgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLXBpbmstNTAwIHJvdW5kZWQnIG9uQ2xpY2s9eygpID0+IHsgb25DbGljaygpOyB9fT5cclxuICAgICAge3Nob3cgJiYgY2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uTW9kYWw7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uTW9kYWwgZnJvbSAnLi9CdXR0b25Nb2RhbCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcclxuXHJcbmNvbnN0IENhcmRBbGlhbnphID0gKHsganNvbiB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbk1vZGFsIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBsZzp3LTQ4JyBzcmM9e2pzb24ucGljdHVyZX0gYWx0PXtqc29uLm5hbWV9IC8+XHJcbiAgICAgIDwvQnV0dG9uTW9kYWw+XHJcbiAgICAgIDxNb2RhbCBkYXRhPXt7IG9wZW4sIHNldE9wZW4gfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LXNtIHRleHQtYmxhY2sgcm91bmRlZCBzaGFkb3ctbGcnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwnPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3B4LTMgcHktMSB0ZXh0LWxnIHRleHQtY2VudGVyIHJvdW5kZWQtYiBiZy1ibGFjay10cmFuc3BhcmVudCc+e2pzb24ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBwdC0xMCc+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIHctNjQnIHNyYz17anNvbi5waWN0dXJlfSBhbHQ9e2pzb24ubmFtZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC02IHB5LTQnPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi0yIHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz5JbmZvcm1hY2nDs248L2gzPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPlRpdGFuZXM6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2AgJHtqc29uLnRpdGFuc31gfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yJz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5SZXF1ZXJpbWllbnRvczo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7YCAke2pzb24ucmVxdWlyZW1lbnRzfWB9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTInPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPlJlc2XDsWE6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2AgJHtqc29uLnJldmlld31gfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQWxpYW56YTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbYnV0dG9uVHJhbnNsYXRlLCBzZXRCdXR0b25UcmFuc2xhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdGltZU91dCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0aW1lT3V0R29vZ2xlT3B0aW9ucyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGlkZUdvb2dsZU9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPT09ICc0MHB4JyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpcHRyYW5zbGF0ZScpKSB7XHJcbiAgICAgIGlmICh0aW1lT3V0R29vZ2xlT3B0aW9ucy5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lT3V0R29vZ2xlT3B0aW9ucy5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpcHRyYW5zbGF0ZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZU91dEdvb2dsZU9wdGlvbnMuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGhpZGVHb29nbGVPcHRpb25zKCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRyYW5zbGF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uVHJhbnNsYXRlJykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb29nbGVTY3JpcHQnKSkge1xyXG4gICAgICBpZiAodGltZU91dC5jdXJyZW50KSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lT3V0LmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb29nbGVfdHJhbnNsYXRlX2VsZW1lbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgY29uc3QgZ29vZ2xlQ29uc3QgPSBuZXcgZ29vZ2xlLnRyYW5zbGF0ZS5UcmFuc2xhdGVFbGVtZW50KHsgcGFnZUxhbmd1YWdlOiAnZXMnIH0sICdnb29nbGVfdHJhbnNsYXRlX2VsZW1lbnQnKTtcclxuICAgICAgc2V0QnV0dG9uVHJhbnNsYXRlKGZhbHNlKTtcclxuICAgICAgaGlkZUdvb2dsZU9wdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpbWVPdXQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRyYW5zbGF0ZVBhZ2UoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPSdwLTMgbXQtMTYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMiBtYi00Jz5cclxuICAgICAgICB7YnV0dG9uVHJhbnNsYXRlICYmIChcclxuICAgICAgICAgIDxidXR0b24gaWQ9J2J1dHRvblRyYW5zbGF0ZScgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXt0cmFuc2xhdGVQYWdlfSBjbGFzc05hbWU9J3B4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci1iLTQgYm9yZGVyLWluZGlnby03MDAgcm91bmRlZCBidXR0b25fdHJhbnNsYXRlIGhvdmVyOmJnLWluZGlnby00MDAgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAnPlRyYW5zbGF0ZSBQYWdlPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGlkPSdnb29nbGVfdHJhbnNsYXRlX2VsZW1lbnQnIGNsYXNzTmFtZT0naGlkZGVuIHctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1waW5rLTUwMCByb3VuZGVkJyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOmdyaWQgbGc6Z3JpZC1jb2xzLTInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpib3JkZXItciBsZzpib3JkZXItcGluay01MDAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxnOmhpZGRlbic+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBsZzptYXgtdy1sZycgc3JjPScuL3N0YXRpYy9maXJtYS5wbmcnIGFsdD0nZmlybWEnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpncmlkIGxnOmdyaWQtY29scy0yIGxnOmdhcC00Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOmZsZXggbGc6ZmxleC1jb2wgbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi00IHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz7CoVNlZ3VpbWUgZW4gbWlzIHJlZGVzITwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgbGc6Z3JpZC1jb2xzLTcnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbGc6Y29sLXN0YXJ0LTMnPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzL2FsaWFuemFyYXRhYmJveScgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIHctMTAgaC1mdWxsJyBzcmM9Jy4vc3RhdGljL2ZhY2Vib29rLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy50d2l0Y2gudHYvcmF0YWJib3lwZGEnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTEwIGgtZnVsbCcgc3JjPScuL3N0YXRpYy90d2l0Y2gucG5nJyBhbHQ9J3R3aXRjaCcgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3VzZXIvcmF0YWJib3knIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTEwIGgtZnVsbCcgc3JjPScuL3N0YXRpYy95b3V0dWJlLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTQgbGc6bXQtMCc+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgaHJlZj0naHR0cHM6Ly9mb3Jtcy5nbGUvcUFodGU3UjEyNFRjTHc5WDYnIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibHVlLTYwMCB1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibHVlLTUwMCBsZzpob3Zlcjp1bmRlcmxpbmUgbGc6bm8tdW5kZXJsaW5lJz7CoUNvbnRhY3RhbWUhPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTQgbGc6bXQtMCBsZzpjb2wtc3Bhbi0yJz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPScvZG9uYXInPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtNiBweS0yIHRleHQtbGcgbGVhZGluZy1ub25lIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZSByb3VuZGVkIGhvdmVyOmJvcmRlci1nb2xkIGhvdmVyOnRleHQtZ29sZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9J2ltZycgYXJpYS1sYWJlbD0nJCc+8J+SsDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgwqFEb25hciFcclxuICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPSckJz7wn5KwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBsZzptYXgtdy1sZycgc3JjPScuL3N0YXRpYy9maXJtYS5wbmcnIGFsdD0nZmlybWEnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00IG15LTYgYm9yZGVyIGJvcmRlci1waW5rLTUwMCByb3VuZGVkIGxnOnAtMiBsZzptbC0zIGxnOmJvcmRlci0yJz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGcgdGV4dC1jZW50ZXInPlBhZ2luYSBoZWNoYSBwb3I6PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY2VudGVyJz5BcmllbCBTYW50aWFnbyBWaWxsYXJyZWFsIEd1dGllcnJlejwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZmxleCcgaHJlZj0naHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXZlbG9wZXI/aWQ9TWFydGUmaGw9ZXNfNDE5JyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21yLTQgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1jZW50ZXInPk1hcnRlPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTYgaC02JyBzcmM9Jy4vc3RhdGljL2xvZ29EZXZlbG9wZXIucG5nJyBhbHQ9J01hcnRlIEluZHVzdHJpYScgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCc+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz5SZWRlczwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG15LTQgc206Z3JpZC1jb2xzLTQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTpjb2wtc3RhcnQtMic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYXJpZWxza2FwJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIHctMTAgaC1mdWxsJyBzcmM9Jy4vc3RhdGljL2dpdGh1Yi5zdmcnIGFsdD0nR2l0aHViJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2Vjc3Rhc3lfcmluZy8nIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4gdy0xMCBoLWZ1bGwnIHNyYz0nLi9zdGF0aWMvaW5zdGFncmFtLnN2ZycgYWx0PSdJbnN0YWdyYW0nIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpBcmllbHZpbGxhZ3VAaG90bWFpbC5jb20nIGNsYXNzTmFtZT0ndGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTYwMCcgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+Q29udGFjdG86IEFyaWVsdmlsbGFndUBob3RtYWlsLmNvbTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MDQ0MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX2NvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX2NvbnRlbnQnKS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVPcGVuJykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9jb250ZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnbWVudU9wZW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAoaXNCcm93c2VyKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzd2l0Y2ggKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfaG9tZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtd2hpdGUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2hvbWUnKS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXBpbmstNTAwJywgJ2ZvbnQtYm9sZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnL0d1aWFzLyc6XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19ndWlhcycpLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtd2hpdGUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2d1aWFzJykuY2xhc3NMaXN0LmFkZCgndGV4dC1waW5rLTUwMCcsICdmb250LWJvbGQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJy9BbGlhbnphcy8nOlxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfYWxpYW56YXMnKS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXdoaXRlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19hbGlhbnphcycpLmNsYXNzTGlzdC5hZGQoJ3RleHQtcGluay01MDAnLCAnZm9udC1ib2xkJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcvQW5hbGlzaXMvJzpcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2FuYWxpc2lzJykuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC13aGl0ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfYW5hbGlzaXMnKS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXBpbmstNTAwJywgJ2ZvbnQtYm9sZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnL0RvbmFyLyc6XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTGlua19kb25hcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtd2hpdGUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5MaW5rX2RvbmFyJykuY2xhc3NMaXN0LmFkZCgndGV4dC1nb2xkJywgJ2ZvbnQtYm9sZCcsICdib3JkZXItZ29sZCcpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkxpbmtfZG9uYXJfY2VudGVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdzdGlja3kgdG9wLTAgbGVmdC0wIHotMTAgdy1mdWxsIHB4LTYgcHktNCBib3JkZXItYiBib3JkZXItYmxhY2snPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LTggaC1mdWxsIG1iLTAnIHNyYz0nLi9zdGF0aWMvbG9nby5wbmcnIGFsdD0nbG9nbycgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL2RvbmFyJz5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUgcm91bmRlZCBMaW5rX2RvbmFyX2NlbnRlciBob3Zlcjpib3JkZXItZ29sZCBob3Zlcjp0ZXh0LWdvbGQgbGc6aGlkZGVuJz5cclxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPSckJz7wn5KwPC9zcGFuPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICDCoURvbmFyIVxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICA8c3BhbiByb2xlPSdpbWcnIGFyaWEtbGFiZWw9JyQnPvCfkrA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBsZzpoaWRkZW4nPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIHRleHQtcGluay0yMDAgYm9yZGVyIGJvcmRlci1waW5rLTQwMCByb3VuZGVkIGJ1dHRvbl9oZWFkZXIgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGUnIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlTWVudSgpOyB9fT5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J3ctMyBoLTMgZmlsbC1jdXJyZW50JyB2aWV3Qm94PScwIDAgMjAgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPk1lbnU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9J00wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnonIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBibG9jayB3LWZ1bGwgdGV4dC1jZW50ZXIgaGVhZGVyX2NvbnRlbnQgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIGxnOmZsZXgtZ3Jvdyc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmxvY2sgbXQtNCB0ZXh0LXdoaXRlIExpbmtfaG9tZSBMaW5rXzEgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgaG92ZXI6dGV4dC1waW5rLTUwMCBsZzptci00IGxnOnRleHQtbGcnPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvZ3VpYXMnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmxvY2sgbXQtNCB0ZXh0LXdoaXRlIExpbmtfZ3VpYXMgTGlua18yIGxnOmlubGluZS1ibG9jayBsZzptdC0wIGhvdmVyOnRleHQtcGluay01MDAgbGc6bXItNCBsZzp0ZXh0LWxnJz5cclxuICAgICAgICAgICAgICAgIEd1w61hc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvYWxpYW56YXMnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYmxvY2sgbXQtNCB0ZXh0LXdoaXRlIExpbmtfYWxpYW56YXMgTGlua18zIGxnOmlubGluZS1ibG9jayBsZzptdC0wIGhvdmVyOnRleHQtcGluay01MDAgbGc6bXItNCBsZzp0ZXh0LWxnJz5cclxuICAgICAgICAgICAgICAgIEFsaWFuemFzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hbmFsaXNpcyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdibG9jayBtdC00IHRleHQtd2hpdGUgTGlua19hbmFsaXNpcyBMaW5rXzQgbGc6aW5saW5lLWJsb2NrIGxnOm10LTAgaG92ZXI6dGV4dC1waW5rLTUwMCBsZzp0ZXh0LWxnJz5cclxuICAgICAgICAgICAgICAgIEFuYWxpc2lzIGRlIEhlcm9lc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvZG9uYXInPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTQgcHktMiBtdC00IHRleHQtc20gbGVhZGluZy1ub25lIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZSByb3VuZGVkIExpbmtfZG9uYXIgTGlua181IGhvdmVyOmJvcmRlci1nb2xkIGhvdmVyOnRleHQtZ29sZCBsZzptdC0wIGxnOm1sLTQnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPSckJz7wn5KwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIMKhRG9uYXIhXHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcm9sZT0naW1nJyBhcmlhLWxhYmVsPSckJz7wn5KwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDMxLCAxMDUsIDAuOTkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tZW51T3BlbiB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4ge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgcy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgIHMuaWQgPSAnZ29vZ2xlU2NyaXB0JztcclxuICAgICAgcy5zcmMgPSAnLy90cmFuc2xhdGUuZ29vZ2xlLmNvbS90cmFuc2xhdGVfYS9lbGVtZW50LmpzP2NiPWdvb2dsZVRyYW5zbGF0ZUVsZW1lbnRJbml0JztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgbWluLWgtc2NyZWVuJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0nVVRGLTgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1JhbW9uIENob3phcyBTQSBIb2phIERlIFJ1dGEnIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScuL3N0YXRpYy9sb2dvX2Nob3phczIucG5nJyAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB6LTEwIGhpZGRlbiB3LWZ1bGwgaC1hdXRvIGJnLWJsYWNrIG9wYWNpdHktNTAgbmF2LWJnLWJsYWNrJyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBwYi0yNCc+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgcHgtMic+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZSBpZD0nYXNpZGUnIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxkaXYgaWQ9J21vZGFsJyAvPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2LWJnLWJsYWNre1xyXG4gICAgICAgICAgICB0b3A6IDExNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTRweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImNvbnN0IExvYWRlckNvbG9ycyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0xvYWRlckNvbG9ycyBsb2FkaW5nLXdyYXAgZ2FtYmEtY2lyY2xlcyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5sb2FkaW5nLXdyYXAuZ2FtYmEtY2lyY2xlcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9hZGluZy13cmFwLmdhbWJhLWNpcmNsZXMgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2FkaW5nLXdyYXAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RiNDQzNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9hZGluZy13cmFwLmdhbWJhLWNpcmNsZXMgLmNpcmNsZTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNGI0MDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvYWRpbmctd3JhcC5nYW1iYS1jaXJjbGVzIC5jaXJjbGU6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODZiYzQyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2FkaW5nLXdyYXAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQyODVmNDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ2FtYmEtY2lyY2xlcyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDkyJSAxMTAlIDEzMiUgODglO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5nYW1iYS1jaXJjbGVzIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4xIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluMSA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2M3YzdjNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZ2FtYmEtY2lyY2xlcyAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluMiA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3BpbjIgNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNjN2M3Yzc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmdhbWJhLWNpcmNsZXMgLmNpcmNsZTpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjMgNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHNwaW4zIDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYzdjN2M3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5nYW1iYS1jaXJjbGVzIC5jaXJjbGU6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW40IDZzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluNCA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2M3YzdjNztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbjEge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4xIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4yIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjg4ZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjg4ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbjIge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzJkZWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0yODhkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yODhkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4zIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBzcGluMyB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xNDRkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNDRkZWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluNCB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTQ0ZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQ0ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbjQge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0NGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlckNvbG9ycztcclxuIiwiY29uc3QgTWVzc2FnZUVycm9yRmV0Y2ggPSAoeyBlcnJvclJlc3BvbnNlLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LWxnIHAtNCc+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkIHRleHQtY2VudGVyJz5cclxuICAgICAgICBFcnJvciBhbFxyXG4gICAgICAgIHtgICR7Y2hpbGRyZW59YH1cclxuICAgICAgPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdtdC0yJz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+SW5mb3JtYWNpw7NuIGRlbCBlcnJvcjo8L3NwYW4+XHJcbiAgICAgICAge2AgJHtlcnJvclJlc3BvbnNlfWB9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRXJyb3JGZXRjaDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xyXG5pbXBvcnQgeyB1c2VTbGlkZSB9IGZyb20gJy4uL2FuaW1hdGlvbnMnO1xyXG5cclxuY29uc3QgTW9kYWwgPSAoeyBjaGlsZHJlbiwgZGF0YSB9KSA9PiB7XHJcblxyXG4gIGlmICghZGF0YS5vcGVuKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgc2xpZGUsIHNldFNsaWRlIH0gPSB1c2VTbGlkZSgwLCAtNTAwKTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Nb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ01vZGFsX2FjdGl2ZScpXHJcbiAgICBzZXRTbGlkZSh7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIC01MDBweCknLFxyXG4gICAgICBvblJlc3Q6ICgpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJmbG93LWhpZGRlbicpKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnNldE9wZW4oZmFsc2UpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tCYWNrZ3JvdW5kID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk1vZGFsX19iZycpKSB7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Nb2RhbCcpKSB7XHJcbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJmbG93LWhpZGRlbicpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTW9kYWxfX2JnJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUNsaWNrQmFja2dyb3VuZChlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJmbG93LWhpZGRlbicpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nei0zMCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gTW9kYWwgTW9kYWxfYWN0aXZlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtaW4taC1zY3JlZW4gcHktNiBNb2RhbF9fYmcnPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIE1vZGFsX19jb250YWluZXInIHN0eWxlPXtzbGlkZX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCBweC0yIHB5LTEgdGV4dC14bCBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtd2hpdGUgYmctcmVkLTgwMCBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgc2hhZG93IE1vZGFsX19jbG9zZS1idXR0b24gdGV4dC1ib3JkZXItYmxhY2sgaG92ZXI6YmctcmVkLTYwMCcgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB7IGNsb3NlTW9kYWwoKTsgfX0+XHJcbiAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmxhY2tCYWNrZ3JvdW5kIH0gZnJvbSAnLi9CbGFja0JhY2tncm91bmQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbk1vZGFsIH0gZnJvbSAnLi9CdXR0b25Nb2RhbCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU0VPIH0gZnJvbSAnLi9zZW8nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRBbGlhbnphIH0gZnJvbSAnLi9DYXJkQWxpYW56YSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGVyQ29sb3JzIH0gZnJvbSAnLi9Mb2FkZXJDb2xvcnMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lc3NhZ2VFcnJvckZldGNoIH0gZnJvbSAnLi9NZXNzYWdlRXJyb3JGZXRjaCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL01vZGFsJztcclxuIiwiY29uc3QgTGlua0gxID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvcHlUZXh0ID0gKHNlbGVjdG9yKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuaW5uZXJUZXh0O1xyXG4gICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICBkdW1teS52YWx1ZSA9IHRleHQ7XHJcbiAgICBkdW1teS5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcHRleHQnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvb2xUaXAgPSBlbGVtZW50O1xyXG4gICAgICB0b29sVGlwLmlubmVyVGV4dCA9ICdDb3BpYWRvIPCfkpYnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3B4LTIgbXQtMSBtYi02IHRleHQtY2VudGVyIGxnOm0tMCB0b29sdGlwJz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IGNvcHlUZXh0KCcjdGl0bGVDb3B5Jyl9IGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtbGcgZm9udC1ib2xkIGJyZWFrLWFsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IHJvdW5kZWQgc206dGV4dC14bCBsZzpiZy10cmFuc3BhcmVudCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtIHRvb2x0aXB0ZXh0JyBpZD0nbXlUb29sdGlwJz5Db3BpYXIgTGluazwvc3Bhbj5cclxuICAgICAgICA8aDEgaWQ9J3RpdGxlQ29weScgY2xhc3NOYW1lPSdoaWRkZW4nPmh0dHBzOi8vcmF0YWJib3kuaGVyb2t1YXBwLmNvbS88L2gxPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBtZDptYXgtdy0yeGwgeGw6bWF4LXctNHhsJyBzcmM9Jy4vc3RhdGljL2hlcm9rdUxpbmsucG5nJyBhbHQ9J2h0dHBzOi8vcmF0YWJib3kuaGVyb2t1YXBwLmNvbS8nIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAudG9vbHRpcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMWY2OWUxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBib3R0b206IC0xNSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDExZjY5ZTEgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtIMTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFR3aXRjaCA9ICh7IHRhcmdldElEID0gJ3R3aXRjaC1lbWJlZCcsIHdpZHRoID0gJzk0MCcsIGhlaWdodCA9ICc0ODAnLCBjaGFubmVsID0gJycsIHRoZW1lID0gJycgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXQgZW1iZWQ7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICdzcmMnLFxyXG4gICAgICAgICdodHRwczovL2VtYmVkLnR3aXRjaC50di9lbWJlZC92MS5qcycsXHJcbiAgICAgICk7XHJcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGVtYmVkID0gbmV3IHdpbmRvdy5Ud2l0Y2guRW1iZWQodGFyZ2V0SUQsIHsgdGFyZ2V0SUQsIHdpZHRoLCBoZWlnaHQsIGNoYW5uZWwsIHRoZW1lIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3RhcmdldElEfSBjbGFzc05hbWU9J21heC13LTZ4bCB3LWZ1bGwnIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR3aXRjaDtcclxuIiwiLyppbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5cclxuZnVuY3Rpb24gU0VPKHsgZGVzY3JpcHRpb24sIGxhbmcsIG1ldGEsIHRpdGxlIH0pIHtcclxuICBjb25zdCBtZXRhRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBzaXRlLnNpdGVNZXRhZGF0YS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWxtZXRcclxuICAgICAgaHRtbEF0dHJpYnV0ZXM9e3tcclxuICAgICAgICBsYW5nLFxyXG4gICAgICB9fVxyXG4gICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgIHRpdGxlVGVtcGxhdGU9e2AlcyB8ICR7c2l0ZS5zaXRlTWV0YWRhdGEudGl0bGV9YH1cclxuICAgICAgbWV0YT17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ29nOnRpdGxlJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ29nOnR5cGUnLFxyXG4gICAgICAgICAgY29udGVudDogJ3dlYnNpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3R3aXR0ZXI6Y2FyZCcsXHJcbiAgICAgICAgICBjb250ZW50OiAnc3VtbWFyeScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAndHdpdHRlcjpjcmVhdG9yJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IHNpdGUuc2l0ZU1ldGFkYXRhLmF1dGhvcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICd0d2l0dGVyOnRpdGxlJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgY29udGVudDogbWV0YURlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0uY29uY2F0KG1ldGEpfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5TRU8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhbmc6ICdlcycsXHJcbiAgbWV0YTogW10sXHJcbiAgZGVzY3JpcHRpb246ICcnLFxyXG59O1xyXG5cclxuU0VPLnByb3BUeXBlcyA9IHtcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG1ldGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU87XHJcbiovXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRmV0Y2ggfSBmcm9tICcuL3VzZUZldGNoJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTZWFyY2ggfSBmcm9tICcuL3VzZVNlYXJjaCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU2VhcmNoSGVyb2VzIH0gZnJvbSAnLi91c2VTZWFyY2hIZXJvZXMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVBhZ2VUcmFuc2l0aW9uIH0gZnJvbSAnLi91c2VQYWdlVHJhbnNpdGlvbic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRGF0YVBqIH0gZnJvbSAnLi91c2VEYXRhUGonO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVZlcmlmeUZldGNoIH0gZnJvbSAnLi91c2VWZXJpZnlGZXRjaCc7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEltZ0NsYXNzSGVybyB9IGZyb20gJy4uL2xvY2FsRnVuY3Rpb24nO1xyXG5cclxuY29uc3QgdXNlRGF0YVBqID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBbZGF0YVBqLCBzZXREYXRhUGpdID0gdXNlU3RhdGUoe1xyXG4gICAgc3RhcnNOb2RlOiBbXSxcclxuICAgIHNyY0VsZW1lbnQ6ICcnLFxyXG4gICAgc3JjQ2xhc3NIZXJvOiAnJyxcclxuICAgIGNvbG9yOiAnJyxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHR5cGUsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgY29sb3I7XHJcbiAgICBjb25zdCBzdGFycyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnN0YXJzOyBpKyspIHtcclxuICAgICAgc3RhcnMucHVzaChpKTtcclxuICAgIH1cclxuICAgIHR5cGUgPSBkYXRhLmVsZW1lbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGNsYXNzTmFtZSA9IGRhdGEuY2xhc3NIZXJvLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnYXp1bCBoaWVsbyc6XHJcbiAgICAgICAgdHlwZSA9ICcuL3N0YXRpYy9oaWVsby5wbmcnO1xyXG4gICAgICAgIGNvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd2aW9sZXRhIG9zY3Vybyc6XHJcbiAgICAgICAgdHlwZSA9ICcuL3N0YXRpYy9vc2N1cm8ucG5nJztcclxuICAgICAgICBjb2xvciA9ICdwdXJwbGUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd2ZXJkZSBuYXR1cmFsZXphJzpcclxuICAgICAgICB0eXBlID0gJy4vc3RhdGljL25hdHVyYWxlemEucG5nJztcclxuICAgICAgICBjb2xvciA9ICdncmVlbic7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Jvam8gZnVlZ28nOlxyXG4gICAgICAgIHR5cGUgPSAnLi9zdGF0aWMvZnVlZ28ucG5nJztcclxuICAgICAgICBjb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhbWFyaWxsbyBzYWdyYWRvJzpcclxuICAgICAgICB0eXBlID0gJy4vc3RhdGljL3NhZ3JhZG8ucG5nJztcclxuICAgICAgICBjb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2xhc3NOYW1lID0gZ2V0SW1nQ2xhc3NIZXJvKGNsYXNzTmFtZSk7XHJcbiAgICBzZXREYXRhUGooe1xyXG4gICAgICBzdGFyc05vZGU6IHN0YXJzLFxyXG4gICAgICBzcmNFbGVtZW50OiB0eXBlLFxyXG4gICAgICBzcmNDbGFzc0hlcm86IGNsYXNzTmFtZSxcclxuICAgICAgY29sb3IsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHsgZGF0YVBqIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VEYXRhUGo7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgZmV0Y2hKc29uMiB9IGZyb20gJy4uL2xvY2FsRnVuY3Rpb24nO1xyXG4vL2ltcG9ydCBqc29uIGZyb20gJy4uL2pzb24vYW5hbGlzaXMuanNvbic7XHJcblxyXG5jb25zdCB1c2VGZXRjaCA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JSZXNwb25zZSwgc2V0RXJyb3JSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGlkLCBmZXRjaEpzb24yKTtcclxuICAvL2NvbnN0IGRhdGEgPSBqc29uO1xyXG4gIC8vY29uc3QgZXJyb3IgPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBIdWJvIHVuIHByb2JsZW1hIGNvbiBsYSBwZXRpY2nDs24gRmV0Y2g6JHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyZmxvdy1oaWRkZW4nKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgc2V0RXJyb3JSZXNwb25zZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIH0sIFtlcnJvciwgZGF0YV0pO1xyXG5cclxuICByZXR1cm4geyBvcGVuLCBzZXRPcGVuLCBlcnJvclJlc3BvbnNlLCBzZXRFcnJvclJlc3BvbnNlLCBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaDtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlTmVhclNjcmVlbiA9ICgpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFByb21pc2UucmVzb2x2ZShcclxuICAgICAgdHlwZW9mIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgP1xyXG4gICAgICAgIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6XHJcbiAgICAgICAgaW1wb3J0KCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKSxcclxuICAgIClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBpc0ludGVyc2VjdGluZyB9ID0gZW50cmllc1swXTtcclxuICAgICAgICAgIGlmIChpc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LmN1cnJlbnQpO1xyXG4gICAgICB9KTtcclxuICB9LCBbZWxlbWVudF0pO1xyXG5cclxuICByZXR1cm4gW2VsZW1lbnQsIHNob3ddO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTmVhclNjcmVlbjtcclxuIiwiaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlUGFnZVRyYW5zaXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdHJhbnNpdGlvbnMgPSB1c2VUcmFuc2l0aW9uKGl0ZW0sIG51bGwsIHtcclxuICAgIGNvbmZpZzogeyBkdXJhdGlvbjogNTAwLCBkZWxheTogMjAwIH0sXHJcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgIGVudGVyOiB7IG9wYWNpdHk6IDEgfSxcclxuICAgIGxlYXZlOiB7IG9wYWNpdHk6IDAgfSxcclxuICB9KTtcclxuICByZXR1cm4geyB0cmFuc2l0aW9ucyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUGFnZVRyYW5zaXRpb247XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VTZWFyY2hIZXJvZXMgPSAoanNvbikgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtqc29uU2VhcmNoLCBzZXRKc29uU2VhcmNoXSA9IHVzZVN0YXRlKGpzb24pO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VSZWYoe1xyXG4gICAgdGhyZXNob2xkOiAwLjAsXHJcbiAgICBrZXlzOiBbXHJcbiAgICAgICduYW1lJyxcclxuICAgIF0sXHJcbiAgfSk7XHJcbiAgY29uc3QgZnVzZSA9IHVzZVJlZihuZXcgRnVzZShqc29uLCBvcHRpb25zLmN1cnJlbnQpKTtcclxuXHJcbiAgdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAocXVlcnkgPT09ICcnKSB7XHJcbiAgICAgIHNldEpzb25TZWFyY2goanNvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzZWFyY2ggPSBmdXNlLmN1cnJlbnQuc2VhcmNoKHF1ZXJ5KTtcclxuICAgICAgY29uc3QgbmV3SnNvbiA9IFtdO1xyXG5cclxuICAgICAgc2VhcmNoLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBuZXdKc29uLnB1c2goZWxlbWVudC5pdGVtKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRKc29uU2VhcmNoKG5ld0pzb24pO1xyXG4gICAgfVxyXG4gIH0sIFtqc29uLCBxdWVyeV0pO1xyXG4gIHJldHVybiB7IHF1ZXJ5LCBzZXRRdWVyeSwganNvblNlYXJjaCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU2VhcmNoSGVyb2VzO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XHJcblxyXG5jb25zdCB1c2VTZWFyY2hIZXJvZXMgPSAoanNvbikgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHF1ZXJ5OiAnJyxcclxuICAgIHN0YXJzOiAnJyxcclxuICAgIGVsZW1lbnQ6ICcnLFxyXG4gICAgY2xhc3M6ICcnLFxyXG4gICAgZmFtaWx5OiAnJyxcclxuICAgIGV2ZW50OiAnJyxcclxuICB9KTtcclxuICBjb25zdCBbY2xlYW4sIHNldENsZWFuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbanNvblNlYXJjaCwgc2V0SnNvblNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUZ1c2UgPSAoanNvbiwgb3B0aW9ucykgPT4ge1xyXG4gICAgbGV0IG5ld09wdGlvbnMgPSBvcHRpb25zLmtleXMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAhPT0gJycpO1xyXG4gICAgbmV3T3B0aW9ucyA9IHsgdGhyZXNob2xkOiAwLjMsIGtleXM6IG5ld09wdGlvbnMgfTtcclxuICAgIHJldHVybiBuZXcgRnVzZShqc29uLCBuZXdPcHRpb25zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVPcGVyYXRvciA9IChrZXkpID0+IHtcclxuICAgIGxldCBmbGFnID0gMDtcclxuICAgIGxldCBvcGVyYXRvcjtcclxuICAgIGxldCBuZXdLZXk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0ga2V5LnNvbWUoKG9iamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcclxuICAgICAgaWYgKHZhbHVlWzBdICE9PSAnJykge1xyXG4gICAgICAgIGZsYWcrKztcclxuICAgICAgICBvcGVyYXRvciA9IHZhbHVlWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmbGFnID49IDI7XHJcbiAgICB9KTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgbmV3S2V5ID0ga2V5LmZpbHRlcigob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBPYmplY3QudmFsdWVzKG9iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlWzBdICE9PSAnJztcclxuICAgICAgfSk7XHJcbiAgICAgIG9wZXJhdG9yID0ge1xyXG4gICAgICAgICRhbmQ6IG5ld0tleSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcGVyYXRvcjtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hpbmcgPSAoanNvbiwgb3B0aW9ucywga2V5KSA9PiB7XHJcbiAgICBjb25zdCBuZXdKc29uID0gW107XHJcbiAgICBjb25zdCBmdXNlID0gY3JlYXRlRnVzZShqc29uLCBvcHRpb25zKTtcclxuICAgIGNvbnN0IG9wZXJhdG9yID0gY3JlYXRlT3BlcmF0b3Ioa2V5KTtcclxuICAgIGNvbnN0IHNlYXJjaCA9IGZ1c2Uuc2VhcmNoKG9wZXJhdG9yKTtcclxuICAgIHNlYXJjaC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIG5ld0pzb24ucHVzaChlbGVtZW50Lml0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdKc29uKTtcclxuICAgIHJldHVybiBuZXdKc29uO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xyXG4gICAgaWYgKGEubmFtZS50cmltKCkgPCBiLm5hbWUudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmIChhLm5hbWUudHJpbSgpID4gYi5uYW1lLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH07XHJcblxyXG4gIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IG5ld0pzb247XHJcbiAgICBjb25zdCB7IHF1ZXJ5LCBzdGFycywgZWxlbWVudCwgY2xhc3M6IGNsYXNzSGVybywgZmFtaWx5LCBldmVudCB9ID0gZGF0YTtcclxuICAgIGlmIChjbGVhbikge1xyXG4gICAgICBzZXREYXRhKHtcclxuICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgc3RhcnM6ICcnLFxyXG4gICAgICAgIGVsZW1lbnQ6ICcnLFxyXG4gICAgICAgIGNsYXNzOiAnJyxcclxuICAgICAgICBmYW1pbHk6ICcnLFxyXG4gICAgICAgIGV2ZW50OiAnJyxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEpzb25TZWFyY2goanNvbik7XHJcbiAgICAgIHNldENsZWFuKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChxdWVyeSA9PT0gJycgJiYgc3RhcnMgPT09ICcnICYmIGVsZW1lbnQgPT09ICcnICYmIGNsYXNzSGVybyA9PT0gJycgJiYgZmFtaWx5ID09PSAnJyAmJiBldmVudCA9PT0gJycpIHsgLy9ObyB0aWVuZSBuYWRhXHJcbiAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgIG5ld0pzb24gPSBqc29uLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgICAgICBzZXRKc29uU2VhcmNoKG5ld0pzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdKc29uID0gc2VhcmNoaW5nKGpzb24sIHtcclxuICAgICAgICAgIHRocmVzaG9sZDogMC4zLFxyXG4gICAgICAgICAga2V5czogW1xyXG4gICAgICAgICAgICBxdWVyeSAmJiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGFycyAmJiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ3N0YXJzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxlbWVudCAmJiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ2VsZW1lbnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGFzc0hlcm8gJiYge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdjbGFzcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbWlseSAmJiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV2ZW50ICYmIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnZXZlbnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHsgbmFtZTogcXVlcnkgfSxcclxuICAgICAgICAgIHsgc3RhcnMgfSxcclxuICAgICAgICAgIHsgZWxlbWVudCB9LFxyXG4gICAgICAgICAgeyBjbGFzczogY2xhc3NIZXJvIH0sXHJcbiAgICAgICAgICB7IGZhbWlseSB9LFxyXG4gICAgICAgICAgeyBldmVudCB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHNldEpzb25TZWFyY2gobmV3SnNvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbanNvbiwgZGF0YSwgY2xlYW5dKTtcclxuICByZXR1cm4geyBkYXRhLCBzZXREYXRhLCBqc29uU2VhcmNoLCBzZXRDbGVhbiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU2VhcmNoSGVyb2VzO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlVmVyaWZ5RmV0Y2ggPSAocmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yUmVzcG9uc2UsIHNldEVycm9yUmVzcG9uc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvciA9IHJlc3BvbnNlLmVycm9yIHx8IHJlc3BvbnNlLm1lc3NhZ2U7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coYEh1Ym8gdW4gcHJvYmxlbWEgY29uIGxhIHBldGljacOzbiBGZXRjaDoke2Vycm9yfWApO1xyXG4gICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyZmxvdy1oaWRkZW4nKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgc2V0RXJyb3JSZXNwb25zZShlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIHJldHVybiB7IG9wZW4sIHNldE9wZW4sIGVycm9yUmVzcG9uc2UsIHNldEVycm9yUmVzcG9uc2UsIGRhdGE6IHJlc3BvbnNlLmJvZHkgfHwgdW5kZWZpbmVkIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VWZXJpZnlGZXRjaDtcclxuIiwiZXhwb3J0IGNvbnN0IGZldGNoSnNvbiA9IChuYW1lLCBsaW5rLCBzZXRGdW5jdGlvbnMpID0+IHtcclxuICBjb25zdCB7IHNldE9wZW4sIHNldEVycm9yUmVzcG9uc2UsIHNldEpzb24gfSA9IHNldEZ1bmN0aW9ucztcclxuICBjb25zdCBzdG9yYWdlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcclxuICBpZiAoc3RvcmFnZSkge1xyXG4gICAgc2V0SnNvbihKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0obmFtZSkpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmpzb25iaW4uaW8vYi8ke2xpbmt9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ3NlY3JldC1rZXknOiAnJDJiJDEwJHJNaUxJenJ3Wk4zTDBjb095OVlCdU8uRWJVOWJkWXF3SDc5SEJTaE1PQVR6cTFZTkt6U3ZDJyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgSHVibyB1biBwcm9ibGVtYSBjb24gbGEgcGV0aWNpw7NuIEZldGNoOiR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyZmxvdy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICBzZXRFcnJvclJlc3BvbnNlKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigobXlKc29uKSA9PiB7XHJcbiAgICAgICAgaWYgKCghbXlKc29uLnN1Y2Nlc3MgJiYgbXlKc29uLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCkgfHwgbXlKc29uLmxlbmdodCA8PSAwKSB7XHJcbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyZmxvdy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICAgIHNldEVycm9yUmVzcG9uc2UobXlKc29uLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRKc29uKG15SnNvbik7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KG15SnNvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSnNvbjIgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL3JhdGFiYm95LWFwaS5oZXJva3VhcHAuY29tLyR7dXJsfWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4ucmVzLCBlcnJvcjogcmVzLm1lc3NhZ2UgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW1nQ2xhc3NIZXJvID0gKGNsYXNzTmFtZSkgPT4ge1xyXG4gIGxldCBjbGFzc05hbWVTcmM7XHJcbiAgc3dpdGNoIChjbGFzc05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY2FzZSAnYmFyYmFybyc6XHJcbiAgICAgIGNsYXNzTmFtZVNyYyA9ICcuL3N0YXRpYy9iYXJiYXJpYW4ucG5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdjbGVyaWdvJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL2NsZXJpYy5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2RydWlkYSc6XHJcbiAgICAgIGNsYXNzTmFtZVNyYyA9ICcuL3N0YXRpYy9kcnVpZC5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2x1Y2hhZG9yJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL2ZpZ2h0ZXIucG5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdtb25qZSc6XHJcbiAgICAgIGNsYXNzTmFtZVNyYyA9ICcuL3N0YXRpYy9tb25rLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAncGFsYWRpbic6XHJcbiAgICAgIGNsYXNzTmFtZVNyYyA9ICcuL3N0YXRpYy9wYWxhZGluLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZ3VhcmRhYm9zcXVlcyc6XHJcbiAgICAgIGNsYXNzTmFtZVNyYyA9ICcuL3N0YXRpYy9yYW5nZXIucG5nJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdyZWJlbGRlJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL3JvZ3VlLnBuZyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnaGVjaGljZXJvJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL3NvcmNlci5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2JydWpvJzpcclxuICAgICAgY2xhc3NOYW1lU3JjID0gJy4vc3RhdGljL3dpemFyZC5wbmcnO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gY2xhc3NOYW1lU3JjO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZUZhZGUgfSBmcm9tICcuLi9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTWVzc2FnZUVycm9yRmV0Y2gsIE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCBUd2l0Y2ggZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9Ud2l0Y2gnO1xyXG5pbXBvcnQgTGlua0gxIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvTGlua0gxJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IGZldGNoSnNvbjIgfSBmcm9tICcuLi9sb2NhbEZ1bmN0aW9uJztcclxuaW1wb3J0IHsgdXNlVmVyaWZ5RmV0Y2ggfSBmcm9tICcuLi9ob29rcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyByZXNwb25zZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBmYWRlIH0gPSB1c2VGYWRlKCk7XHJcbiAgY29uc3QgeyBvcGVuLCBzZXRPcGVuLCBlcnJvclJlc3BvbnNlLCBkYXRhIH0gPSB1c2VWZXJpZnlGZXRjaChyZXNwb25zZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPSdIb21lJz5cclxuICAgICAgPGFuaW1hdGVkLm1haW4gc3R5bGU9e2ZhZGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpoaWRkZW4nPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29iamVjdC1jb250YWluIHctZnVsbCBtYXgtaC1zY3JlZW4nIHNyYz0nLi9zdGF0aWMvcmVkQWxpYW56YXMyLnBuZycgYWx0PSdSZWQgQWxpYW56YXMnIC8+XHJcbiAgICAgICAgICA8TGlua0gxIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IG1kOmZsZXgtY29sIG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWNlbnRlciBtZDpteS02Jz5cclxuICAgICAgICAgIDxMaW5rSDEgLz5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiBtZDptYXgtdy00eGwgeGw6bWF4LXctNnhsJyBzcmM9Jy4vc3RhdGljL3JlZERlQWxpYW56YXMucG5nJyBhbHQ9J1JlZCBkZSBBbGlhbnphcycgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtOCc+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdteS04IGhyLWhvbWUgbWQ6aGlkZGVuJyAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWItNCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTJ4bCc+wqFWZXIgRGlyZWN0byBBaG9yYSE8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxUd2l0Y2ggdGhlbWU9J2RhcmsnIHdpZHRoPScxMDAlJyBoZWlnaHQ9ezQ4MH0gY2hhbm5lbD0ncmF0YWJib3lwZGEnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdteS04IGhyLWhvbWUnIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYi00IHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1kOnRleHQtMnhsJz7CoUxpc3RhcyBkZSBSZXByb2R1Y2Npw7NuITwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIGdhcC00IG1kOmdyaWQtY29scy0zJz5cclxuICAgICAgICAgICAgICB7ZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubWFwKCh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgbGluayB9ID0gdmlkZW87XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMiBtZDptdC0wJyBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi0yIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB1bmRlcmxpbmUgdGV4dC1tZCc+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT0ndy1mdWxsIHJvdW5kZWQgbWQ6aC02NCcgdGl0bGU9e25hbWV9IHNyYz17bGlua30gZnJhbWVCb3JkZXI9JzAnIGFsbG93PSdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZScgYWxsb3dGdWxsU2NyZWVuIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hbmltYXRlZC5tYWluPlxyXG4gICAgICA8TW9kYWwgZGF0YT17eyBvcGVuLCBzZXRPcGVuIH19PlxyXG4gICAgICAgIDxNZXNzYWdlRXJyb3JGZXRjaCBlcnJvclJlc3BvbnNlPXtlcnJvclJlc3BvbnNlfT5UcmFlciBsYSBMaXN0YSBkZSBSZXByb2R1Y2Npw7NuPC9NZXNzYWdlRXJyb3JGZXRjaD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIC5oci1ob21lIHtcclxuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBGb3IgSUUgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgIzMzMywgI2NjYyk7XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oci1ob21lOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIvCflbnvuI9cIjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRvcDogLTAuN2VtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoSnNvbjIoJ2luaWNpb1ZpZGVvcycpXHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IHJlc3BvbnNlOiBkYXRhIH0gfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZ1c2UuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=