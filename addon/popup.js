/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configs/env.js":
/*!****************************!*\
  !*** ./src/configs/env.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  debugMode: true\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/configs/env.js?");

/***/ }),

/***/ "./src/popup/clock.js":
/*!****************************!*\
  !*** ./src/popup/clock.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _utility = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _default = {\n  dom: null,\n  request: function request() {\n    browser.runtime.sendMessage({\n      type: 'requestTime'\n    }).then(clock.update).catch(function (err) {\n      console.error(err);\n    });\n  },\n  reset: function reset() {\n    browser.runtime.sendMessage({\n      type: 'resetCounter'\n    }).then(clock.update).catch(function (err) {\n      console.error(err);\n    });\n  },\n  update: function update(msg) {\n    if (_typeof(msg) === 'object') {\n      if (!clock.dom) {\n        clock.dom = document.querySelector(\"#monitor\");\n      }\n\n      var remain = msg.limit - msg.time;\n      clock.dom.innerText = (0, _utility.formatTime)(remain);\n      clock.dom.classList.toggle('warning', !msg.reading);\n    }\n\n    return true;\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/popup/clock.js?");

/***/ }),

/***/ "./src/popup/main.js":
/*!***************************!*\
  !*** ./src/popup/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../styles/popup_entry.sass */ \"./src/styles/popup_entry.sass\");\n\nvar _clock = _interopRequireDefault(__webpack_require__(/*! ./clock */ \"./src/popup/clock.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.querySelector('#refresh_button').addEventListener('click', _clock.default.reset);\ndocument.querySelector('#options_button').addEventListener('click', function (e) {\n  e.preventDefault();\n  browser.runtime.openOptionsPage();\n});\nwindow.addEventListener(\"load\", function (event) {\n  browser.runtime.onMessage.addListener(_clock.default.update);\n\n  _clock.default.request();\n});\nwindow.addEventListener(\"unload\", function (event) {\n  browser.runtime.onMessage.removeListener(_clock.default.update);\n});\n\n//# sourceURL=webpack:///./src/popup/main.js?");

/***/ }),

/***/ "./src/styles/popup_entry.sass":
/*!*************************************!*\
  !*** ./src/styles/popup_entry.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/popup_entry.sass?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar env = __webpack_require__(/*! ./configs/env */ \"./src/configs/env.js\");\n\nfunction handleResponse(r) {\n  console.info(r);\n}\n\nfunction log() {\n  if (env.debugMode) {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    console.log(args.reduce(function (acc, val) {\n      return acc + val;\n    }, ''));\n  }\n}\n/**\n * baNANA => Banana\n * @param {String} word \n */\n\n\nfunction toTitleCase(word) {\n  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();\n}\n/**\n * retrieve localized string\n * @param {String} key \n */\n\n\nfunction getLocalString(key) {\n  return browser.i18n.getMessage(key);\n}\n/**\n * format time to [12:00] style\n * @param {Number} minutes \n */\n\n\nfunction formatTime(minutes) {\n  if (!Number.isInteger(minutes)) {\n    console.error(\"input time [\".concat(minutes, \"] is not integer\"));\n    return 'ERROR';\n  }\n\n  var formatted = [];\n  var hour = 0;\n\n  if (minutes >= 60) {\n    do {\n      minutes -= 60;\n      hour += 1;\n    } while (minutes >= 60);\n  }\n\n  formatted.push(hour, minutes);\n  return formatted.map(function (el) {\n    return padTime(el);\n  }).join(':');\n}\n/**\n * accept a number\n * if it's less than 10, pad it with zero\n * @param {Number} val \n */\n\n\nfunction padTime(val) {\n  return val < 10 ? \"0\".concat(val) : val;\n}\n\nmodule.exports = {\n  handleResponse: handleResponse,\n  toTitleCase: toTitleCase,\n  getLocalString: getLocalString,\n  log: log,\n  formatTime: formatTime\n};\n\n//# sourceURL=webpack:///./src/utility.js?");

/***/ })

/******/ });