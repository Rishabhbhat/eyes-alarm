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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const env=__webpack_require__(2);function handleResponse(a){console.info(a)}function log(...a){env.debugMode&&console.log(a.reduce((b,c)=>b+c,''))}function toTitleCase(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}function getLocalString(a){return browser.i18n.getMessage(a)}function formatTime(a){if(!Number.isInteger(a))return console.error(`input time [${a}] is not integer`),'ERROR';let b=[],c=0;if(60<=a)do a-=60,c+=1;while(60<=a);return b.push(c,a),b.map((d)=>padTime(d)).join(':')}function padTime(a){return 10>a?`0${a}`:a}module.exports={handleResponse,toTitleCase,getLocalString,log,formatTime};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports={isReading:!0,passedMinutes:0,breakTimeAmount:10,readingTimeAmount:50,idleDetectionInterval:1200,title:browser.i18n.getMessage("notificationTitle"),message:browser.i18n.getMessage("notificationMessage"),soundEnabled:!1,soundPath:"",soundVolume:0.5};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={debugMode:!0};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

var nodes={pool:{},getDOM(a){return nodes.pool.hasOwnProperty(a)?nodes.pool[a]:nodes.pool[a]=document.querySelector('#'+a)}};module.exports=nodes;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const{toTitleCase,getLocalString}=__webpack_require__(0),defaultValues=__webpack_require__(1);var nodes=__webpack_require__(4);const reflect={readingTime_label:'optionsWorkTimeLabel',breakTime_label:'optionsBreakTimeLabel',title_label:'optionsNotificationTitleLabel',message_label:'optionsNotificationMessageLabel',soundEnabled_label:'optionsSoundEnabledLabel',soundVolume_label:'optionsSoundVolumeLabel',soundPath_label:'optionsSoundPathLabel',apply:'optionsApplyButton',reset:'optionsResetButton'},storageKeys=['breakTimeAmount','readingTimeAmount','title','message','soundEnabled','soundPath','soundVolume'];var page={render(){page.labels.set(),page.inputs.set()},labels:{sound:{volume:{set(a=null){let b=null===a?nodes.getDOM('soundVolume').value:a.target.value;nodes.getDOM('soundVolumeValue').innerText=`${100*b}%`}}},set(){for(var a in reflect)nodes.getDOM(a).innerText=getLocalString(reflect[a])}},inputs:{sound:{toggleEditable(a=null){let b=!1;b=null===a?!nodes.getDOM('soundEnabled').checked:!a.target.checked,['soundPath','soundVolume'].forEach((d)=>{nodes.getDOM(d).disabled=b})}},set(){browser.storage.local.get(storageKeys).then((a)=>{storageKeys.forEach((b)=>{let c=nodes.getDOM(b),d=a[b]||defaultValues[b];switch(c.type){case'checkbox':nodes.getDOM(b).checked=d;break;default:nodes.getDOM(b).value=d;}}),page.labels.sound.volume.set(),page.inputs.sound.toggleEditable()}).catch((a)=>{console.error(a)})},get(){let a={last_modified:new Date().toLocaleTimeString()};return storageKeys.forEach((b)=>{let c=nodes.getDOM(b),d=c.attributes;if(d.type)switch(d.type.value){case'number':case'range':a[b]=c.valueAsNumber;break;case'checkbox':a[b]=c.checked;break;default:a[b]=c.value;}else a[b]=c.value}),a},dom(){return Array.from(storageKeys.map((a)=>nodes.getDOM(a)))}},button:{loading:{toggle(a=!1){nodes.getDOM('apply').classList.toggle('is-loading',a)},toggleFactory(a){return()=>{nodes.getDOM('apply').classList.toggle('is-loading',a)}}}}};module.exports=page;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const{getLocalString}=__webpack_require__(0);var page=__webpack_require__(9),nodes=__webpack_require__(4),defaultValues=__webpack_require__(1),options={save(a){page.button.loading.toggle(!0),a.preventDefault();let b=page.inputs.get(),c=page.inputs.dom(),d=`[${b.last_modified}] `,f=page.button.loading.toggleFactory(!1);return options.checkInputErrorExists(c)?void options.msg('',!1):void options.apply(d,b,f,f)},reset(a){a.preventDefault();let b=({title,message,breakTimeAmount,readingTimeAmount}=defaultValues),c=b.last_modified=new Date().toLocaleTimeString();options.apply(c,b,function(){page.inputs.set()})},checkInputErrorExists(a){return a.map((b)=>{return b.attributes.type&&'number'===b.attributes.type.value&&(b.validity.rangeOverflow||b.validity.rangeUnderflow)}).filter((b)=>b).length},apply(a,b,c=void 0,d=void 0){browser.storage.local.set(b).then(()=>{options.msg(a+getLocalString('optionsApplySuccessMessage'),!0),c&&c()}).catch((f)=>{options.msg(a+f.message,!1),d&&d()})},msg(a,b){let c=nodes.getDOM('msg');c.innerText=a,c.classList.toggle('success',b),c.classList.toggle('warning',!b)}};module.exports=options;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);var options=__webpack_require__(12),page=__webpack_require__(9),nodes=__webpack_require__(4);document.addEventListener('DOMContentLoaded',page.render),nodes.getDOM('apply').addEventListener('click',options.save),nodes.getDOM('reset').addEventListener('click',options.reset),nodes.getDOM('soundEnabled').addEventListener('click',page.inputs.sound.toggleEditable),nodes.getDOM('soundVolume').addEventListener('change',page.labels.sound.volume.set);

/***/ })
/******/ ]);