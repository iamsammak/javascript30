/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _control = __webpack_require__(2);
	
	var _control2 = _interopRequireDefault(_control);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(1);
	
	document.addEventListener('DOMContentLoaded', function () {
	  new _control2.default(document.getElementById('spacing'), 'spacing');
	  new _control2.default(document.getElementById('blur'), 'blur');
	  new _control2.default(document.getElementById('color'), 'base');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Control = function () {
	  function Control(el, variable) {
	    _classCallCheck(this, Control);
	
	    this.el = el;
	    this.variable = variable;
	    this.suffix = this.el.dataset.suffix || '';
	    this.bindEvents();
	  }
	
	  _createClass(Control, [{
	    key: 'bindEvents',
	    value: function bindEvents() {
	      this.el.addEventListener('change', this.updateValue.bind(this));
	      this.el.addEventListener('mousemove', this.updateValue.bind(this));
	    }
	  }, {
	    key: 'updateValue',
	    value: function updateValue(e) {
	      document.documentElement.style.setProperty('--' + this.variable, this.el.value + this.suffix);
	    }
	  }]);
	
	  return Control;
	}();
	
	exports.default = Control;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map