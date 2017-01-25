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
	
	var _gallery = __webpack_require__(1);
	
	var _gallery2 = _interopRequireDefault(_gallery);
	
	var _panel = __webpack_require__(2);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	__webpack_require__(3);
	
	document.addEventListener('DOMContentLoaded', function () {
	  var images = [['Hey Let\'s Dance', 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500'], ['Give Take Receive', 'https://source.unsplash.com/1CD3fd8kHnE/1500x1500'], ['Experience It Today', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d'], ['Give All You can', 'https://source.unsplash.com/ITjiVXcwVng/1500x1500'], ['Life In Motion', 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500'], ['Right Now Is Good', 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=']];
	
	  var gallery = new _gallery2.default(document.querySelector('.panels'));
	
	  images.forEach(function (image) {
	    return new (Function.prototype.bind.apply(_panel2.default, [null].concat(_toConsumableArray(image), [gallery])))();
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Gallery = function () {
	  function Gallery(el) {
	    _classCallCheck(this, Gallery);
	
	    this.el = el;
	    this.panels = [];
	  }
	
	  _createClass(Gallery, [{
	    key: "push",
	    value: function push(panel) {
	      this.panels.push(panel);
	      this.el.appendChild(panel.el);
	    }
	  }]);
	
	  return Gallery;
	}();
	
	exports.default = Gallery;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Panel = function () {
	  function Panel(words, image, gallery) {
	    _classCallCheck(this, Panel);
	
	    this.el = this.generateElement(words, image);
	    this.gallery = gallery;
	    this.gallery.push(this);
	  }
	
	  _createClass(Panel, [{
	    key: 'activate',
	    value: function activate(e) {
	      if (e.propertyName.includes('flex')) {
	        if (this.el.classList.contains('open')) this.el.classList.add('open-active');else this.el.classList.remove('open-active');
	      }
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      var _this = this;
	
	      this.gallery.panels.forEach(function (panel) {
	        return panel == _this ? null : panel.close();
	      });
	      this.el.classList.toggle('open');
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.el.classList.remove('open');
	    }
	  }, {
	    key: 'generateElement',
	    value: function generateElement(words, image) {
	      var el = document.createElement('div');
	      el.classList.add('panel');
	      el.style.backgroundImage = 'url(' + image + ')';
	
	      var wordsList = words.split(' ').slice(0, 2);
	      wordsList.push(words.split(' ').slice(2).join(' '));
	
	      wordsList.forEach(function (word) {
	        var p = document.createElement('p');
	        p.innerText = word;
	        el.appendChild(p);
	      });
	
	      el.addEventListener('transitionend', this.activate.bind(this));
	      el.addEventListener('click', this.open.bind(this));
	
	      return el;
	    }
	  }]);
	
	  return Panel;
	}();
	
	exports.default = Panel;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map