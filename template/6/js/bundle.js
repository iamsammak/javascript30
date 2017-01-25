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
	
	var _typeahead = __webpack_require__(1);
	
	var _typeahead2 = _interopRequireDefault(_typeahead);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(3);
	
	document.addEventListener('DOMContentLoaded', function () {
	  var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
	
	  var typeahead = new _typeahead2.default(document.getElementById('city'), document.querySelector('.suggestions'), endpoint);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dataFilter = __webpack_require__(2);
	
	var _dataFilter2 = _interopRequireDefault(_dataFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Typeahead = function () {
	  function Typeahead(input, suggestions, dataOrEndpoint) {
	    _classCallCheck(this, Typeahead);
	
	    this.el = input;
	    this.suggestions = suggestions;
	    this.data = new _dataFilter2.default(dataOrEndpoint);
	    this.bindKeyups();
	  }
	
	  _createClass(Typeahead, [{
	    key: 'bindKeyups',
	    value: function bindKeyups() {
	      this.el.addEventListener('keyup', this.generateSuggestions.bind(this));
	    }
	  }, {
	    key: 'generateSuggestions',
	    value: function generateSuggestions() {
	      var _this = this;
	
	      if (this.el.value) this.data.filter(this.el.value).then(function (cities) {
	        return _this.listCities(cities);
	      });else this.showDefault();
	    }
	  }, {
	    key: 'listCities',
	    value: function listCities(cities) {
	      var _this2 = this;
	
	      this.clearList();
	
	      if (cities.length) cities.forEach(function (city) {
	        return _this2.addCity(city);
	      });else this.addItem('No matches...');
	    }
	  }, {
	    key: 'showDefault',
	    value: function showDefault() {
	      this.clearList();
	      this.addItem('Filter For A City');
	      this.addItem('Or A State');
	    }
	  }, {
	    key: 'clearList',
	    value: function clearList() {
	      this.suggestions.innerHTML = '';
	    }
	  }, {
	    key: 'addItem',
	    value: function addItem(text) {
	      var li = document.createElement('li');
	      li.innerText = text;
	      this.suggestions.appendChild(li);
	      return li;
	    }
	  }, {
	    key: 'addCity',
	    value: function addCity(city) {
	      var _this3 = this;
	
	      var cityName = city.city + ', ' + city.state;
	      var li = this.addItem(cityName);
	
	      var regex = new RegExp(this.el.value, 'gi');
	
	      var citySpan = document.createElement('span');
	      citySpan.classList.add('name');
	      citySpan.innerHTML = cityName.replace(regex, function (match) {
	        return '<span class="hl">' + match + '</span>';
	      });
	
	      var populationSpan = document.createElement('span');
	      populationSpan.classList.add('population');
	      populationSpan.innerText = city.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	
	      li.innerHTML = '';
	      li.appendChild(citySpan);
	      li.appendChild(populationSpan);
	
	      li.style.cursor = 'pointer';
	      li.addEventListener('click', function () {
	        _this3.el.value = cityName;
	        _this3.clearList();
	        _this3.addCity(city);
	      });
	    }
	  }]);
	
	  return Typeahead;
	}();
	
	exports.default = Typeahead;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var fetching = false;
	
	var DataFilter = function () {
	  function DataFilter(data) {
	    _classCallCheck(this, DataFilter);
	
	    this.callbacks = [];
	    this.getData(data);
	  }
	
	  _createClass(DataFilter, [{
	    key: "cities",
	    value: function cities(cb) {
	      if (this.cityData) {
	        cb(this.cityData);
	      } else {
	        this.callbacks.push(cb);
	      }
	    }
	  }, {
	    key: "getData",
	    value: function getData(data) {
	      var _this = this;
	
	      if (typeof data === "string") {
	        this.cityData = [];
	
	        if (!fetching) {
	          fetching = true;
	
	          fetch(data).then(function (response) {
	            return response.json();
	          }).then(function (data) {
	            var _cityData;
	
	            return (_cityData = _this.cityData).push.apply(_cityData, _toConsumableArray(data));
	          }).then(function () {
	            _this.callbacks.forEach(function (cb) {
	              return cb(_this.cityData);
	            });
	          });
	        }
	      } else {
	        this.cityData = data;
	      }
	    }
	  }, {
	    key: "filter",
	    value: function filter(text) {
	      var _this2 = this;
	
	      var re = new RegExp(text, 'i');
	
	      return {
	        then: function then(cb) {
	          _this2.cities(function (cities) {
	            var filteredCities = cities.filter(function (city) {
	              return city.city.match(re) || city.state.match(re);
	            });
	            cb(filteredCities);
	          });
	        }
	      };
	    }
	  }]);
	
	  return DataFilter;
	}();
	
	exports.default = DataFilter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map