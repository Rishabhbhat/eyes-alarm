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

/***/ "./src/178646__zabuhailo__bronzebell1.wav":
/*!************************************************!*\
  !*** ./src/178646__zabuhailo__bronzebell1.wav ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a5d97ad536ac3f7b1accf037828bafed.wav\";\n\n//# sourceURL=webpack:///./src/178646__zabuhailo__bronzebell1.wav?");

/***/ }),

/***/ "./src/background_scripts/IdleDetector.js":
/*!************************************************!*\
  !*** ./src/background_scripts/IdleDetector.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Clock = _interopRequireDefault(__webpack_require__(/*! ./ui/Clock */ \"./src/background_scripts/ui/Clock.js\"));\n\nvar _Sound = _interopRequireDefault(__webpack_require__(/*! ./ui/Sound */ \"./src/background_scripts/ui/Sound.js\"));\n\nvar _Notification = _interopRequireDefault(__webpack_require__(/*! ./ui/Notification */ \"./src/background_scripts/ui/Notification.js\"));\n\nvar _Ticker = _interopRequireDefault(__webpack_require__(/*! ./Ticker */ \"./src/background_scripts/Ticker.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar isLocked = false;\n\nvar IdleDetector =\n/*#__PURE__*/\nfunction () {\n  function IdleDetector() {\n    _classCallCheck(this, IdleDetector);\n  }\n\n  _createClass(IdleDetector, [{\n    key: \"init\",\n    value: function init(val) {\n      browser.idle.setDetectionInterval(val);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      browser.idle.onStateChanged.addListener(this.dispatch);\n    }\n  }, {\n    key: \"dispatch\",\n    value: function dispatch(state) {\n      switch (state) {\n        case 'active':\n          if (isLocked) {\n            _Sound.default.muted = false;\n\n            _Ticker.default.start(); //ui.icon.switch(true)\n\n\n            _Clock.default.switch(true);\n\n            _Clock.default.sync();\n\n            isLocked = false;\n          }\n\n          break;\n\n        case 'idle':\n        case 'locked':\n          _Sound.default.muted = true;\n\n          _Ticker.default.stop();\n\n          _Notification.default.clear();\n\n          _Clock.default.reset();\n\n          isLocked = true;\n          break;\n      }\n    }\n  }]);\n\n  return IdleDetector;\n}();\n\nvar _default = new IdleDetector();\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/IdleDetector.js?");

/***/ }),

/***/ "./src/background_scripts/Storage.js":
/*!*******************************************!*\
  !*** ./src/background_scripts/Storage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _defaults = _interopRequireDefault(__webpack_require__(/*! ../configs/defaults */ \"./src/configs/defaults.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step(\"next\", value); } function _throw(err) { step(\"throw\", err); } _next(); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Storage =\n/*#__PURE__*/\nfunction () {\n  function Storage() {\n    _classCallCheck(this, Storage);\n\n    _defineProperty(this, \"store\", {});\n\n    _defineProperty(this, \"keys\", ['isReading', 'passedMinutes', 'breakTimeAmount', 'readingTimeAmount', 'idleDetectionInterval', 'soundEnabled', 'soundPath']);\n  }\n\n  _createClass(Storage, [{\n    key: \"load\",\n    value: function () {\n      var _load = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var _this = this;\n\n        var result;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return browser.storage.local.get(null);\n\n              case 2:\n                result = _context.sent;\n                this.keys.forEach(function (key) {\n                  _this.store[key] = result[key] || _defaults.default[key];\n                });\n                return _context.abrupt(\"return\", this.store);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function load() {\n        return _load.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return Storage;\n}();\n\nvar _default = new Storage();\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/Storage.js?");

/***/ }),

/***/ "./src/background_scripts/Ticker.js":
/*!******************************************!*\
  !*** ./src/background_scripts/Ticker.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Ticker =\n/*#__PURE__*/\nfunction () {\n  function Ticker() {\n    _classCallCheck(this, Ticker);\n  }\n\n  _createClass(Ticker, [{\n    key: \"start\",\n    value: function start() {\n      browser.alarms.create('eyes-alarm-counter', {\n        periodInMinutes: 1\n      });\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      browser.alarms.clear('eyes-alarm-counter');\n    }\n  }, {\n    key: \"restart\",\n    value: function restart() {\n      this.stop();\n      this.start();\n    }\n  }]);\n\n  return Ticker;\n}();\n\nvar _default = new Ticker();\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/Ticker.js?");

/***/ }),

/***/ "./src/background_scripts/TimePacket.js":
/*!**********************************************!*\
  !*** ./src/background_scripts/TimePacket.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Storage = _interopRequireDefault(__webpack_require__(/*! ./Storage */ \"./src/background_scripts/Storage.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  return {\n    time: _Storage.default.store.passedMinutes,\n    limit: _Storage.default.store.isReading ? _Storage.default.store.readingTimeAmount : _Storage.default.store.breakTimeAmount,\n    reading: _Storage.default.store.isReading\n  };\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/TimePacket.js?");

/***/ }),

/***/ "./src/background_scripts/main.js":
/*!****************************************!*\
  !*** ./src/background_scripts/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _utility = __webpack_require__(/*! ../utility */ \"./src/utility.js\");\n\nvar _Ticker = _interopRequireDefault(__webpack_require__(/*! ./Ticker */ \"./src/background_scripts/Ticker.js\"));\n\nvar _Storage = _interopRequireDefault(__webpack_require__(/*! ./Storage */ \"./src/background_scripts/Storage.js\"));\n\nvar _TimePacket = _interopRequireDefault(__webpack_require__(/*! ./TimePacket */ \"./src/background_scripts/TimePacket.js\"));\n\nvar _IdleDetector = _interopRequireDefault(__webpack_require__(/*! ./IdleDetector */ \"./src/background_scripts/IdleDetector.js\"));\n\nvar _Clock = _interopRequireDefault(__webpack_require__(/*! ./ui/Clock */ \"./src/background_scripts/ui/Clock.js\"));\n\nvar _Notification = _interopRequireDefault(__webpack_require__(/*! ./ui/Notification */ \"./src/background_scripts/ui/Notification.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step(\"next\", value); } function _throw(err) { step(\"throw\", err); } _next(); }); }; }\n\n/**\n *  commands\n */\nfunction resetUI(icontype) {\n  _Clock.default.reset();\n\n  _Clock.default.switch(icontype === 'green' ? true : false);\n\n  _Clock.default.sync(); //Icon.switch(icontype)\n\n}\n\nfunction shouldRead() {\n  return !_Storage.default.store.isReading && _Storage.default.store.passedMinutes >= _Storage.default.store.breakTimeAmount;\n}\n\nfunction shouldBreak() {\n  return _Storage.default.store.isReading && _Storage.default.store.passedMinutes >= _Storage.default.store.readingTimeAmount;\n}\n\nfunction updateClock() {\n  _Clock.default.plus(1);\n\n  _Clock.default.sync();\n}\n/**\n * preparing listeners\n */\n// User interface should respond to status' change\n\n\nbrowser.alarms.onAlarm.addListener(function (alarm) {\n  updateClock();\n\n  if (shouldBreak()) {\n    _Ticker.default.restart();\n\n    resetUI('red');\n\n    _Notification.default.create();\n  } else if (shouldRead()) {\n    _Ticker.default.restart();\n\n    resetUI('green');\n  }\n}); // receive any communication-request from popup(clock)\n\nbrowser.runtime.onMessage.addListener(function (request, sender) {\n  switch (request.type) {\n    case 'requestTime':\n      return (0, _TimePacket.default)();\n\n    case 'resetCounter':\n      _Ticker.default.restart();\n\n      resetUI('green');\n      return (0, _TimePacket.default)();\n  }\n}); // reset popup(clock) and ticker, when setting changes\n\nbrowser.Storage.onChanged.addListener(\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(changes, area) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(area === 'local')) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.prev = 1;\n            _context.next = 4;\n            return _Storage.default.load();\n\n          case 4:\n            _Ticker.default.restart();\n\n            resetUI('green');\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            console.error(_context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[1, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}())\n/**\n *  Activate clock\n */\n(\n/*#__PURE__*/\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee2() {\n  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return _Storage.default.load();\n\n        case 3:\n          _IdleDetector.default.init(_Storage.default.store.idleDetectionInterval);\n\n          _IdleDetector.default.start(); // The clock start working after this line\n\n\n          _Ticker.default.start();\n\n          _context2.next = 11;\n          break;\n\n        case 8:\n          _context2.prev = 8;\n          _context2.t0 = _context2[\"catch\"](0);\n          console.error(_context2.t0);\n\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2, this, [[0, 8]]);\n})));\n\n//# sourceURL=webpack:///./src/background_scripts/main.js?");

/***/ }),

/***/ "./src/background_scripts/ui/AudioElement.js":
/*!***************************************************!*\
  !*** ./src/background_scripts/ui/AudioElement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _zabuhailo__bronzebell = _interopRequireDefault(__webpack_require__(/*! ../../178646__zabuhailo__bronzebell1.wav */ \"./src/178646__zabuhailo__bronzebell1.wav\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar audioElement = new Audio(_zabuhailo__bronzebell.default);\naudioElement.preload = true;\naudioElement.loop = false;\nvar _default = {\n  AudioElement: AudioElement,\n  defaultSoundPath: _zabuhailo__bronzebell.default\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/ui/AudioElement.js?");

/***/ }),

/***/ "./src/background_scripts/ui/Clock.js":
/*!********************************************!*\
  !*** ./src/background_scripts/ui/Clock.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Storage = _interopRequireDefault(__webpack_require__(/*! ../Storage */ \"./src/background_scripts/Storage.js\"));\n\nvar _TimePacket = _interopRequireDefault(__webpack_require__(/*! ../TimePacket */ \"./src/background_scripts/TimePacket.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step(\"next\", value); } function _throw(err) { step(\"throw\", err); } _next(); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Clock =\n/*#__PURE__*/\nfunction () {\n  function Clock() {\n    _classCallCheck(this, Clock);\n  }\n\n  _createClass(Clock, [{\n    key: \"reset\",\n    value: function reset() {\n      _Storage.default.store.passedMinutes = 0;\n    }\n  }, {\n    key: \"plus\",\n    value: function plus(number) {\n      _Storage.default.store.passedMinutes += number;\n    }\n    /**\n     * change storage.store.isReading\n     * for indicating whether it's at reading mode\n     * @param {Boolean} isGreen \n     */\n\n  }, {\n    key: \"switch\",\n    value: function _switch(isGreen) {\n      _Storage.default.store.isReading = isGreen;\n    }\n    /**\n     * send time to popup from background_script\n     */\n\n  }, {\n    key: \"sync\",\n    value: function () {\n      var _sync = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!browser.extension.getViews({\n                  type: \"popup\"\n                }).length) {\n                  _context.next = 9;\n                  break;\n                }\n\n                _context.prev = 1;\n                _context.next = 4;\n                return browser.runtime.sendMessage((0, _TimePacket.default)());\n\n              case 4:\n                _context.next = 9;\n                break;\n\n              case 6:\n                _context.prev = 6;\n                _context.t0 = _context[\"catch\"](1);\n                console.error(_context.t0);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[1, 6]]);\n      }));\n\n      return function sync() {\n        return _sync.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return Clock;\n}();\n\nvar _default = new Clock();\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/ui/Clock.js?");

/***/ }),

/***/ "./src/background_scripts/ui/Notification.js":
/*!***************************************************!*\
  !*** ./src/background_scripts/ui/Notification.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Sound = _interopRequireDefault(__webpack_require__(/*! ./Sound */ \"./src/background_scripts/ui/Sound.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step(\"next\", value); } function _throw(err) { step(\"throw\", err); } _next(); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar notificationParams = {\n  type: 'basic',\n  iconUrl: browser.extension.getURL(paths.notificationIcon),\n  title: defaultValues.title,\n  message: defaultValues.message\n};\nvar notificationID = 'eyes-alarm-n';\n\nvar Notification =\n/*#__PURE__*/\nfunction () {\n  function Notification() {\n    _classCallCheck(this, Notification);\n  }\n\n  _createClass(Notification, [{\n    key: \"create\",\n\n    /**\n     * check if there it's some custom data to rewrite parameters used for showing notifiation\n     * then check again, but this time is for playing sound\n     */\n    value: function () {\n      var _create = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var result;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return browser.storage.local.get(['title', 'message', 'soundEnabled', 'soundPath', 'soundVolume']);\n\n              case 3:\n                result = _context.sent;\n                // rewrite data for creating notification\n                ['title', 'message'].forEach(function (key) {\n                  if (result[key]) {\n                    notificationParams[key] = result[key];\n                  }\n                }); // creating\n\n                browser.notifications.create(notificationID, notificationParams);\n\n                if (result.soundEnabled) {\n                  _Sound.default.play(result.soundPath, result.soundVolume);\n                }\n\n                _context.next = 12;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(_context.t0);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[0, 9]]);\n      }));\n\n      return function create() {\n        return _create.apply(this, arguments);\n      };\n    }()\n    /**\n     * close notifcation\n     */\n\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      browser.notifications.clear(notificationID);\n    }\n  }]);\n\n  return Notification;\n}();\n\nvar _default = new Notification();\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/ui/Notification.js?");

/***/ }),

/***/ "./src/background_scripts/ui/Sound.js":
/*!********************************************!*\
  !*** ./src/background_scripts/ui/Sound.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _AudioElement = __webpack_require__(/*! ./AudioElement */ \"./src/background_scripts/ui/AudioElement.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Sound =\n/*#__PURE__*/\nfunction () {\n  function Sound() {\n    _classCallCheck(this, Sound);\n\n    _defineProperty(this, \"element\", _AudioElement.AudioElement);\n  }\n\n  _createClass(Sound, [{\n    key: \"updatePath\",\n\n    /**\n     * if user doesnt specify the path to play, play default one\n     * if user specified a path, play it\n     * @param {String} path \n     */\n    value: function updatePath() {\n      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n      if (path) {\n        if (this.src !== path) {\n          this.src = path;\n        }\n      } else if (this.src !== _AudioElement.defaultSoundPath) {\n        this.src = _AudioElement.defaultSoundPath;\n      }\n    }\n    /**\n     * set path and volume\n     * then play\n     * @param {String} path \n     */\n\n  }, {\n    key: \"play\",\n    value: function play(path, volume) {\n      try {\n        this.updatePath(path);\n        this.volume = volume;\n        this.element.play();\n      } catch (err) {\n        console.error(err);\n        console.log(this.element);\n      }\n    }\n  }, {\n    key: \"src\",\n    get: function get() {\n      return this.element.src;\n    },\n    set: function set(value) {\n      this.element.src = value;\n    }\n  }, {\n    key: \"volume\",\n    set: function set(value) {\n      this.element.volume = value;\n    }\n  }, {\n    key: \"muted\",\n    set: function set(value) {\n      this.element.muted = value;\n    }\n  }]);\n\n  return Sound;\n}();\n\nvar _default = new Sound();\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/background_scripts/ui/Sound.js?");

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