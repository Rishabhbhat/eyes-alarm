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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background_scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js!./src/178646__zabuhailo__bronzebell1.wav":
/*!***************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js!./src/178646__zabuhailo__bronzebell1.wav ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a5d97ad536ac3f7b1accf037828bafed.wav\";\n\n//# sourceURL=webpack:///./src/178646__zabuhailo__bronzebell1.wav?./node_modules/file-loader/dist/cjs.js");

/***/ }),

/***/ "./src/background_scripts/audioElement.js":
/*!************************************************!*\
  !*** ./src/background_scripts/audioElement.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _zabuhailo__bronzebell = _interopRequireDefault(__webpack_require__(/*! file-loader!../178646__zabuhailo__bronzebell1.wav */ \"./node_modules/file-loader/dist/cjs.js!./src/178646__zabuhailo__bronzebell1.wav\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar audioElement = new Audio(_zabuhailo__bronzebell.default);\naudioElement.preload = true;\naudioElement.loop = false;\nvar _default = {\n  audioElement: audioElement,\n  defaultSoundPath: _zabuhailo__bronzebell.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/audioElement.js?");

/***/ }),

/***/ "./src/background_scripts/clock.js":
/*!*****************************************!*\
  !*** ./src/background_scripts/clock.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ \"./src/background_scripts/storage.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = {\n  reset: function reset() {\n    _storage.default.store.passedMinutes = 0;\n  },\n  plus: function plus(number) {\n    _storage.default.store.passedMinutes += number;\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/clock.js?");

/***/ }),

/***/ "./src/background_scripts/counter.js":
/*!*******************************************!*\
  !*** ./src/background_scripts/counter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  start: function start() {\n    browser.alarms.create('eyes-alarm-counter', {\n      periodInMinutes: 1\n    });\n  },\n  stop: function stop() {\n    browser.alarms.clear('eyes-alarm-counter');\n  },\n  restart: function restart() {\n    counter.stop();\n    counter.start();\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/counter.js?");

/***/ }),

/***/ "./src/background_scripts/idle.js":
/*!****************************************!*\
  !*** ./src/background_scripts/idle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _ui = _interopRequireDefault(__webpack_require__(/*! ./ui */ \"./src/background_scripts/ui.js\"));\n\nvar _clock = _interopRequireDefault(__webpack_require__(/*! ./clock */ \"./src/background_scripts/clock.js\"));\n\nvar _counter = _interopRequireDefault(__webpack_require__(/*! ./counter */ \"./src/background_scripts/counter.js\"));\n\nvar _audioElement = _interopRequireDefault(__webpack_require__(/*! ./audioElement */ \"./src/background_scripts/audioElement.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar isLocked = false;\nvar _default = {\n  init: function init(val) {\n    browser.idle.setDetectionInterval(val);\n  },\n  detect: {\n    start: function start() {\n      browser.idle.onStateChanged.addListener(idle.dispatch);\n    }\n  },\n  dispatch: function dispatch(state) {\n    switch (state) {\n      case 'active':\n        if (isLocked) {\n          _audioElement.default.muted = false;\n\n          _counter.default.start(); //ui.icon.switch(true)\n\n\n          _ui.default.clock.switch(true);\n\n          _ui.default.clock.sync();\n\n          isLocked = false;\n        }\n\n        break;\n\n      case 'idle':\n      case 'locked':\n        _audioElement.default.muted = true;\n\n        _counter.default.stop();\n\n        _ui.default.notice.clear();\n\n        _clock.default.reset();\n\n        isLocked = true;\n        break;\n    }\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/idle.js?");

/***/ }),

/***/ "./src/background_scripts/main.js":
/*!****************************************!*\
  !*** ./src/background_scripts/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _utility = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n\nvar _ui = _interopRequireDefault(__webpack_require__(/*! ./ui */ \"./src/background_scripts/ui.js\"));\n\nvar _idle = _interopRequireDefault(__webpack_require__(/*! ./idle */ \"./src/background_scripts/idle.js\"));\n\nvar _clock = _interopRequireDefault(__webpack_require__(/*! ./clock */ \"./src/background_scripts/clock.js\"));\n\nvar _counter = _interopRequireDefault(__webpack_require__(/*! ./counter */ \"./src/background_scripts/counter.js\"));\n\nvar _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ \"./src/background_scripts/storage.js\"));\n\nvar _timePacket = _interopRequireDefault(__webpack_require__(/*! ./timePacket */ \"./src/background_scripts/timePacket.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n *  callbacks\n */\nfunction resetUI(iconIsGreen) {\n  _clock.default.reset(); //ui.icon.switch(iconIsGreen)\n\n\n  _ui.default.clock.switch(iconIsGreen);\n\n  _ui.default.clock.sync();\n}\n\nfunction shouldRead() {\n  return !_storage.default.store.isReading && _storage.default.store.passedMinutes >= _storage.default.store.breakTimeAmount;\n}\n\nfunction shouldBreak() {\n  return _storage.default.store.isReading && _storage.default.store.passedMinutes >= _storage.default.store.readingTimeAmount;\n}\n\nfunction updateClock() {\n  _clock.default.plus(1);\n\n  _ui.default.clock.sync();\n} // dispatch alarm event\n\n\nbrowser.alarms.onAlarm.addListener(function (alarm) {\n  updateClock();\n\n  if (shouldBreak()) {\n    _counter.default.restart();\n\n    resetUI(false); // turn to red\n\n    _ui.default.notice.create();\n  } else if (shouldRead()) {\n    _counter.default.restart();\n\n    resetUI(true); // turn to green\n  }\n}); // start dispatch request\n\nbrowser.runtime.onMessage.addListener(function (request, sender) {\n  switch (request.type) {\n    case 'requestTime':\n      return Promise.resolve((0, _timePacket.default)());\n\n    case 'resetCounter':\n      _counter.default.restart();\n\n      resetUI(true);\n      return Promise.resolve((0, _timePacket.default)());\n  }\n}); // reset alarms when setting changes\n\nbrowser.storage.onChanged.addListener(function (changes, area) {\n  if (area === 'local') {\n    _storage.default.load({\n      callback: function callback() {\n        _counter.default.restart();\n\n        resetUI(true);\n      }\n    });\n  }\n});\n/**\n *  business logic\n */\n\n_storage.default.load({\n  callback: function callback() {\n    _idle.default.init(_storage.default.store.idleDetectionInterval);\n\n    _idle.default.detect.start();\n\n    _counter.default.start();\n  }\n});\n\n//# sourceURL=webpack:///./src/background_scripts/main.js?");

/***/ }),

/***/ "./src/background_scripts/storage.js":
/*!*******************************************!*\
  !*** ./src/background_scripts/storage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _defaults = _interopRequireDefault(__webpack_require__(/*! ../configs/defaults */ \"./src/configs/defaults.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar storageKeys = ['isReading', 'passedMinutes', 'breakTimeAmount', 'readingTimeAmount', 'idleDetectionInterval', 'soundEnabled', 'soundPath'];\nvar _default = {\n  store: {},\n  load: function load(_ref) {\n    var callback = _ref.callback,\n        params = _ref.params;\n    browser.storage.local.get(null).then(function (result) {\n      storageKeys.forEach(function (key) {\n        storage.store[key] = result[key] || _defaults.default[key];\n      });\n\n      if (callback) {\n        callback(params);\n      }\n    }).catch(function (err) {\n      console.error(err);\n    });\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/storage.js?");

/***/ }),

/***/ "./src/background_scripts/timePacket.js":
/*!**********************************************!*\
  !*** ./src/background_scripts/timePacket.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ \"./src/background_scripts/storage.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  return {\n    time: _storage.default.store.passedMinutes,\n    limit: _storage.default.store.isReading ? _storage.default.store.readingTimeAmount : _storage.default.store.breakTimeAmount,\n    reading: _storage.default.store.isReading\n  };\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/timePacket.js?");

/***/ }),

/***/ "./src/background_scripts/ui.js":
/*!**************************************!*\
  !*** ./src/background_scripts/ui.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ \"./src/background_scripts/storage.js\"));\n\nvar _timePacket = _interopRequireDefault(__webpack_require__(/*! ./timePacket */ \"./src/background_scripts/timePacket.js\"));\n\nvar _audioElement = __webpack_require__(/*! ./audioElement */ \"./src/background_scripts/audioElement.js\");\n\nvar _paths = _interopRequireDefault(__webpack_require__(/*! ../configs/paths */ \"./src/configs/paths.js\"));\n\nvar _defaults = _interopRequireDefault(__webpack_require__(/*! ../configs/defaults */ \"./src/configs/defaults.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar notificationParams = {\n  type: 'basic',\n  iconUrl: browser.extension.getURL(_paths.default.notificationIcon),\n  title: _defaults.default.title,\n  message: _defaults.default.message\n};\nvar notificationID = 'eyes-alarm-n';\nvar _default = {\n  icon: {\n    /**\n     * once used to change the color of clock inside popup\n     * @param {Boolean} isGreen \n     */\n    switch: function _switch(isGreen) {\n      /*\n      let path = isGreen ? paths.greenButton : paths.redButton\n      browser.browserAction.setIcon({ path })\n      */\n    }\n  },\n  notice: {\n    /**\n     * check some custom data if they existed\n     * and passed them to callback for futher process\n     * @param {Array} keys \n     * @param {Function} callback \n     */\n    checkCustomDataExists: function checkCustomDataExists(keys, callback) {\n      browser.storage.local.get(keys).then(function (result) {\n        callback(keys, result);\n      });\n    },\n\n    /**\n     * check if there it's some custom data to rewrite parameters used for showing notifiation\n     * then check again, but this time is for playing sound\n     */\n    create: function create() {\n      ui.notice.checkCustomDataExists(['title', 'message'], function (keys, result) {\n        // rewrite data for creating notification\n        keys.forEach(function (key) {\n          if (result[key]) {\n            notificationParams[key] = result[key];\n          }\n        }); // creating\n\n        browser.notifications.create(notificationID, notificationParams);\n      });\n      ui.notice.checkCustomDataExists(['soundEnabled', 'soundPath', 'soundVolume'], function (keys, result) {\n        if (result.soundEnabled) {\n          ui.sound.play(result.soundPath, result.soundVolume);\n        }\n      });\n    },\n\n    /**\n     * close notifcation\n     */\n    clear: function clear() {\n      browser.notifications.clear(notificationID);\n    }\n  },\n  clock: {\n    /**\n     * change storage.store.isReading\n     * for indicating whether it's at reading mode\n     * @param {Boolean} isGreen \n     */\n    switch: function _switch(isGreen) {\n      _storage.default.store.isReading = isGreen;\n    },\n\n    /**\n     * send time to popup from background_script\n     */\n    sync: function sync() {\n      if (browser.extension.getViews({\n        type: \"popup\"\n      }).length) {\n        browser.runtime.sendMessage((0, _timePacket.default)()).catch(function (err) {\n          console.error(err);\n        });\n      }\n    }\n  },\n  sound: {\n    /**\n     * if user doesnt specify the path to play, play default one\n     * if user specified a path, play it\n     * @param {String} path \n     */\n    updatePath: function updatePath() {\n      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n      if (path) {\n        if (_audioElement.audioElement.src !== path) {\n          _audioElement.audioElement.src = path;\n        }\n      } else if (_audioElement.audioElement.src !== _audioElement.defaultSoundPath) {\n        _audioElement.audioElement.src = _audioElement.defaultSoundPath;\n      }\n    },\n\n    /**\n     * set path and volume\n     * then play\n     * @param {String} path \n     */\n    play: function play(path, volume) {\n      try {\n        ui.sound.updatePath(path);\n        _audioElement.audioElement.volume = volume;\n\n        _audioElement.audioElement.play();\n      } catch (err) {\n        console.error(err);\n        console.log(_audioElement.audioElement);\n      }\n    }\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/ui.js?");

/***/ }),

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

/***/ "./src/configs/paths.js":
/*!******************************!*\
  !*** ./src/configs/paths.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.path = void 0;\nvar path = {\n  greenButton: \"icons/set-timer-button.png\",\n  redButton: \"icons/set-timer-button-red.png\",\n  notificationIcon: \"icons/icon-pad@128.png\",\n  coloredButton: \"icons/icon@128.png\"\n};\nexports.path = path;\n\n//# sourceURL=webpack:///./src/configs/paths.js?");

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