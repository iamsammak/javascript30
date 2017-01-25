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
	
	var _clock = __webpack_require__(1);
	
	var _clock2 = _interopRequireDefault(_clock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(6);
	
	var deepDupElement = function deepDupElement(el) {
	  var newEl = el.cloneNode();
	
	  var children = Array.from(el.children);
	  children.forEach(function (child) {
	    return newEl.appendChild(deepDupElement(child));
	  });
	
	  return newEl;
	};
	
	var addClock = function addClock(options) {
	  var element = deepDupElement(document.querySelector('#clock-template').children[0]);
	
	  new _clock2.default(element, options.timezone);
	
	  if (options.label) element.querySelector('h3').innerHTML = options.label;
	
	  document.querySelector('.clocks').appendChild(element);
	};
	
	window.addClock = addClock;
	
	document.addEventListener('DOMContentLoaded', function () {
	
	  var clocks = [{ label: 'Local' }, { label: 'Samoa', timezone: -11 }, { label: 'SF', timezone: -8 }, { label: 'SLC', timezone: -7 }, { label: 'Guatemala', timezone: -6 }, { label: 'NYC', timezone: -5 }, { label: 'UTC', timezone: 0 }, { label: 'Kosovo', timezone: +1 }, { label: 'Egypt', timezone: +2 }, { label: 'Cambodia', timezone: +7 }, { label: 'Beijing', timezone: +8 }, { label: 'Fiji', timezone: +12 }];
	
	  clocks.forEach(function (options) {
	    return addClock(options);
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hourHand = __webpack_require__(2);
	
	var _hourHand2 = _interopRequireDefault(_hourHand);
	
	var _minuteHand = __webpack_require__(4);
	
	var _minuteHand2 = _interopRequireDefault(_minuteHand);
	
	var _secondHand = __webpack_require__(5);
	
	var _secondHand2 = _interopRequireDefault(_secondHand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var clocks = [];
	var clockInterval = setInterval(function () {
	  clocks.forEach(function (clock) {
	    return clock.update();
	  });
	}, 1000);
	
	var Clock = function () {
	  function Clock(el, timezone) {
	    _classCallCheck(this, Clock);
	
	    this.el = el;
	    this.timezone = timezone;
	    this.hands = [new _hourHand2.default(this), new _minuteHand2.default(this), new _secondHand2.default(this)];
	
	    clocks.push(this);
	  }
	
	  _createClass(Clock, [{
	    key: 'update',
	    value: function update() {
	      this.currentTime = new Date();
	      this.updateHoursForTimezone();
	      this.updateHands();
	    }
	  }, {
	    key: 'updateHoursForTimezone',
	    value: function updateHoursForTimezone() {
	      if (this.timezone !== undefined) {
	        this.currentTime.setHours(this.currentTime.getUTCHours() + this.timezone);
	      }
	    }
	  }, {
	    key: 'time',
	    value: function time() {
	      return this.currentTime;
	    }
	  }, {
	    key: 'updateHands',
	    value: function updateHands() {
	      this.hands.forEach(function (hand) {
	        return hand.update();
	      });
	    }
	  }]);
	
	  return Clock;
	}();
	
	exports.default = Clock;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hand = __webpack_require__(3);
	
	var _hand2 = _interopRequireDefault(_hand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HourHand = function (_Hand) {
	  _inherits(HourHand, _Hand);
	
	  function HourHand(clock) {
	    _classCallCheck(this, HourHand);
	
	    return _possibleConstructorReturn(this, (HourHand.__proto__ || Object.getPrototypeOf(HourHand)).call(this, 'hour', clock));
	  }
	
	  _createClass(HourHand, [{
	    key: 'calcPercentage',
	    value: function calcPercentage(time) {
	      var hour = time.getHours() % 12;
	
	      return hour / 12;
	    }
	  }]);
	
	  return HourHand;
	}(_hand2.default);
	
	exports.default = HourHand;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hand = function () {
	  function Hand(type, clock) {
	    _classCallCheck(this, Hand);
	
	    this.el = clock.el.querySelector('.' + type + '-hand');
	    this.clock = clock;
	    this.rounds = 0;
	    this.prevDeg = 0;
	  }
	
	  _createClass(Hand, [{
	    key: 'update',
	    value: function update() {
	      this.rotate(this.calcDegrees());
	    }
	  }, {
	    key: 'calcDegrees',
	    value: function calcDegrees() {
	      var time = this.clock.time();
	      var percentage = this.calcPercentage(time);
	      return percentage * 360;
	    }
	  }, {
	    key: 'calcPercentage',
	    value: function calcPercentage() {
	      throw 'needs implemented';
	    }
	  }, {
	    key: 'rotate',
	    value: function rotate(deg) {
	      if (deg === 0 && this.prevDeg !== 0) this.rounds++;
	
	      this.prevDeg = deg;
	
	      deg = deg - 90;
	      deg = this.rounds * 360 + deg;
	      this.el.style.transform = 'rotate(' + deg + 'deg)';
	    }
	  }]);
	
	  return Hand;
	}();
	
	exports.default = Hand;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hand = __webpack_require__(3);
	
	var _hand2 = _interopRequireDefault(_hand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MinuteHand = function (_Hand) {
	  _inherits(MinuteHand, _Hand);
	
	  function MinuteHand(clock) {
	    _classCallCheck(this, MinuteHand);
	
	    return _possibleConstructorReturn(this, (MinuteHand.__proto__ || Object.getPrototypeOf(MinuteHand)).call(this, 'minute', clock));
	  }
	
	  _createClass(MinuteHand, [{
	    key: 'calcPercentage',
	    value: function calcPercentage(time) {
	      var minute = time.getMinutes();
	
	      return minute / 60;
	    }
	  }]);
	
	  return MinuteHand;
	}(_hand2.default);
	
	exports.default = MinuteHand;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hand = __webpack_require__(3);
	
	var _hand2 = _interopRequireDefault(_hand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SecondHand = function (_Hand) {
	  _inherits(SecondHand, _Hand);
	
	  function SecondHand(clock) {
	    _classCallCheck(this, SecondHand);
	
	    return _possibleConstructorReturn(this, (SecondHand.__proto__ || Object.getPrototypeOf(SecondHand)).call(this, 'second', clock));
	  }
	
	  _createClass(SecondHand, [{
	    key: 'calcPercentage',
	    value: function calcPercentage(time) {
	      var second = time.getSeconds();
	
	      return second / 60;
	    }
	  }]);
	
	  return SecondHand;
	}(_hand2.default);
	
	exports.default = SecondHand;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map