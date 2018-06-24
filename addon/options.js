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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configs/defaults.js":
/*!*********************************!*\
  !*** ./src/configs/defaults.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  isReading: true,\n  passedMinutes: 0,\n  breakTimeAmount: 10,\n  readingTimeAmount: 50,\n  idleDetectionInterval: 1200,\n  title: browser.i18n.getMessage(\"notificationTitle\"),\n  message: browser.i18n.getMessage(\"notificationMessage\"),\n  soundEnabled: false,\n  soundPath: '',\n  soundVolume: 0.5\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/configs/defaults.js?");

/***/ }),

/***/ "./src/configs/env.js":
/*!****************************!*\
  !*** ./src/configs/env.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  debugMode: true\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/configs/env.js?");

/***/ }),

/***/ "./src/options/main.js":
/*!*****************************!*\
  !*** ./src/options/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../styles/options_entry.sass */ \"./src/styles/options_entry.sass\");\n\nvar _options = _interopRequireDefault(__webpack_require__(/*! ./options */ \"./src/options/options.js\"));\n\nvar _page = _interopRequireDefault(__webpack_require__(/*! ./page */ \"./src/options/page.js\"));\n\nvar _nodes = _interopRequireDefault(__webpack_require__(/*! ./nodes */ \"./src/options/nodes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", _page.default.render);\n\n_nodes.default.getDOM(\"apply\").addEventListener(\"click\", _options.default.save);\n\n_nodes.default.getDOM(\"reset\").addEventListener(\"click\", _options.default.reset);\n\n_nodes.default.getDOM(\"soundEnabled\").addEventListener(\"click\", _page.default.inputs.sound.toggleEditable);\n\n_nodes.default.getDOM(\"soundVolume\").addEventListener(\"change\", _page.default.labels.sound.volume.set);\n\n//# sourceURL=webpack:///./src/options/main.js?");

/***/ }),

/***/ "./src/options/nodes.js":
/*!******************************!*\
  !*** ./src/options/nodes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  pool: {},\n\n  /**\n   * return specified dom\n   * if it doesnt exist in pool, get it and cache it in pool\n   * @param {*} key \n   */\n  getDOM: function getDOM(key) {\n    if (nodes.pool.hasOwnProperty(key)) {\n      return nodes.pool[key];\n    } else {\n      return nodes.pool[key] = document.querySelector('#' + key);\n    }\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/options/nodes.js?");

/***/ }),

/***/ "./src/options/options.js":
/*!********************************!*\
  !*** ./src/options/options.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _utility = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n\nvar _page = _interopRequireDefault(__webpack_require__(/*! ./page */ \"./src/options/page.js\"));\n\nvar _nodes = _interopRequireDefault(__webpack_require__(/*! ./nodes */ \"./src/options/nodes.js\"));\n\nvar _defaults = _interopRequireDefault(__webpack_require__(/*! ../configs/defaults */ \"./src/configs/defaults.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  /**\n   * gather data from all specified columns\n   * (specify by storageKeys of page.js)\n   * then save them\n   * @param {Event} e \n   */\n  save: function save(e) {\n    _page.default.button.loading.toggle(true); // animation\n\n\n    e.preventDefault();\n\n    var data = _page.default.inputs.get();\n\n    var dom = _page.default.inputs.dom();\n\n    var timestamp = \"[\".concat(data.last_modified, \"] \");\n\n    var stopLoadingAnimation = _page.default.button.loading.toggleFactory(false);\n\n    if (options.checkInputErrorExists(dom)) {\n      options.msg('', false);\n      return;\n    }\n\n    options.apply(timestamp, data, stopLoadingAnimation, stopLoadingAnimation);\n  },\n\n  /**\n   * 重設所有欄位\n   * @param {Event} e \n   */\n  reset: function reset(e) {\n    var _defaultValues;\n\n    e.preventDefault();\n    var data = (_defaultValues = _defaults.default, title = _defaultValues.title, message = _defaultValues.message, breakTimeAmount = _defaultValues.breakTimeAmount, readingTimeAmount = _defaultValues.readingTimeAmount, _defaultValues);\n    var timestamp = data.last_modified = new Date().toLocaleTimeString();\n    options.apply(timestamp, data, function updateOptionsInputs() {\n      _page.default.inputs.set();\n    });\n  },\n\n  /**\n   * 根據input type 檢查資料是否合乎要求\n   * @param {*} dom \n   */\n  checkInputErrorExists: function checkInputErrorExists(dom) {\n    return dom.map(function (el) {\n      if (el.attributes.type && el.attributes.type.value === \"number\") {\n        return el.validity.rangeOverflow || el.validity.rangeUnderflow; // returning True means that something is wrong\n      } else {\n          return false; // so return False when checking a non-number input\n        }\n    }).filter(function (el) {\n      return el;\n    }).length;\n  },\n\n  /**\n   * save data into local storage\n   * @param {String} timestamp \n   * @param {Object} data \n   * @param {Function} successCallback \n   * @param {Function} failCallback\n   */\n  apply: function apply(timestamp, data) {\n    var successCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var failCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    browser.storage.local.set(data).then(function () {\n      options.msg(timestamp + (0, _utility.getLocalString)('optionsApplySuccessMessage'), true);\n      successCallback && successCallback();\n    }).catch(function (err) {\n      options.msg(timestamp + err.message, false);\n      failCallback && failCallback();\n    });\n  },\n  msg: function msg(text, isSuccess) {\n    var n = _nodes.default.getDOM('msg');\n\n    n.innerText = text;\n    n.classList.toggle('success', isSuccess);\n    n.classList.toggle('warning', !isSuccess);\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/options/options.js?");

/***/ }),

/***/ "./src/options/page.js":
/*!*****************************!*\
  !*** ./src/options/page.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _utility = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n\nvar _defaults = _interopRequireDefault(__webpack_require__(/*! ../configs/defaults */ \"./src/configs/defaults.js\"));\n\nvar _nodes = _interopRequireDefault(__webpack_require__(/*! ./nodes */ \"./src/options/nodes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// used to map a DOM's key to the locallized string\n// to render the options page\nvar reflect = {\n  // [dom key]: [locale string key]\n  readingTime_label: 'optionsWorkTimeLabel',\n  breakTime_label: 'optionsBreakTimeLabel',\n  title_label: 'optionsNotificationTitleLabel',\n  message_label: 'optionsNotificationMessageLabel',\n  soundEnabled_label: 'optionsSoundEnabledLabel',\n  soundVolume_label: 'optionsSoundVolumeLabel',\n  soundPath_label: 'optionsSoundPathLabel',\n  apply: 'optionsApplyButton',\n  reset: 'optionsResetButton' // used to retrieve data from specified nodes\n\n};\nvar storageKeys = ['breakTimeAmount', 'readingTimeAmount', 'title', 'message', 'soundEnabled', 'soundPath', 'soundVolume'];\nvar _default = {\n  render: function render() {\n    page.labels.set();\n    page.inputs.set();\n  },\n  labels: {\n    sound: {\n      volume: {\n        /**\n         * render volume's label\n         * @param {Event} e \n         */\n        set: function set() {\n          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n          var value = e === null ? _nodes.default.getDOM('soundVolume').value : e.target.value;\n          _nodes.default.getDOM('soundVolumeValue').innerText = \"\".concat(value * 100, \"%\");\n        }\n      }\n    },\n\n    /**\n     * render all labels\n     */\n    set: function set() {\n      for (var key in reflect) {\n        _nodes.default.getDOM(key).innerText = (0, _utility.getLocalString)(reflect[key]);\n      }\n    }\n  },\n  inputs: {\n    sound: {\n      /**\n       * switch status whether sound-related columns is disabled\n       * @param {Event} e \n       */\n      toggleEditable: function toggleEditable() {\n        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n        var disabled = false;\n        var switchList = ['soundPath', 'soundVolume'];\n\n        if (e === null) {\n          disabled = !_nodes.default.getDOM('soundEnabled').checked;\n        } else {\n          disabled = !e.target.checked;\n        }\n\n        switchList.forEach(function (key) {\n          _nodes.default.getDOM(key).disabled = disabled;\n        });\n      }\n    },\n\n    /**\n     * Retrieve all data from local storage,\n     * and render them into columns with special process depending on its type.\n     * When there's no such value by specified key in storage,\n     * use default values instead.\n     */\n    set: function set() {\n      browser.storage.local.get(storageKeys).then(function (result) {\n        storageKeys.forEach(function (key) {\n          var node = _nodes.default.getDOM(key);\n\n          var value = result[key] || _defaults.default[key];\n\n          switch (node.type) {\n            case 'checkbox':\n              _nodes.default.getDOM(key).checked = value;\n              break;\n\n            default:\n              _nodes.default.getDOM(key).value = value;\n              break;\n          }\n        }); // display current sound volume\n\n        page.labels.sound.volume.set(); // toggle columns related to custom-sound editable or not\n\n        page.inputs.sound.toggleEditable();\n      }).catch(function (err) {\n        console.error(err);\n      });\n    },\n\n    /**\n     * get all data specified by storageKeys,\n     * append a timestamp(last_modified) for always updating value against browser's mechanism\n     */\n    get: function get() {\n      var set = {\n        last_modified: new Date().toLocaleTimeString()\n      };\n      storageKeys.forEach(function (key) {\n        var node = _nodes.default.getDOM(key);\n\n        var attrs = node.attributes;\n\n        if (attrs.type) {\n          switch (attrs.type.value) {\n            case 'number':\n            case 'range':\n              set[key] = node.valueAsNumber;\n              break;\n\n            case 'checkbox':\n              set[key] = node.checked;\n              break;\n\n            default:\n              set[key] = node.value;\n              break;\n          }\n        } else {\n          set[key] = node.value;\n        }\n      });\n      return set;\n    },\n\n    /**\n     * return a list filled with nodes specified by storageKeys\n     */\n    dom: function dom() {\n      return Array.from(storageKeys.map(function (key) {\n        return _nodes.default.getDOM(key);\n      }));\n    }\n  },\n  button: {\n    loading: {\n      /**\n       * toggle loading animation for Apply button\n       * @param {Boolean} isLoading \n       */\n      toggle: function toggle() {\n        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n        _nodes.default.getDOM('apply').classList.toggle('is-loading', isLoading);\n      },\n\n      /**\n       * generate callback to turn on/off loading animation\n       * @param {Boolean} isLoading \n       */\n      toggleFactory: function toggleFactory(isLoading) {\n        return function () {\n          _nodes.default.getDOM('apply').classList.toggle('is-loading', isLoading);\n        };\n      }\n    }\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/options/page.js?");

/***/ }),

/***/ "./src/styles/options_entry.sass":
/*!***************************************!*\
  !*** ./src/styles/options_entry.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/options_entry.sass?");

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