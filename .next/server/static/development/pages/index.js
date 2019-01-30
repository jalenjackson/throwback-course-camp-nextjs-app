module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/reactComponents/globalComponents/svgs/circle.js":
/*!******************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/svgs/circle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Circle = function Circle() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.Circle,
    className: "circle"
  });
};

var styles = {
  Circle: {
    borderRadius: '100%',
    width: '15px',
    height: '15px',
    background: 'none'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./frontend/reactComponents/globalComponents/svgs/square.js":
/*!******************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/svgs/square.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Square = function Square() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.Square,
    className: "square"
  });
};

var styles = {
  Square: {
    width: '20px',
    height: '20px',
    background: 'none',
    border: '2px solid #F6E23C'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./frontend/reactComponents/index/index.js":
/*!*************************************************!*\
  !*** ./frontend/reactComponents/index/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexComponent; });
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/rate */ "antd/lib/rate");
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/auto-complete */ "antd/lib/auto-complete");
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _globalComponents_svgs_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../globalComponents/svgs/circle */ "./frontend/reactComponents/globalComponents/svgs/circle.js");
/* harmony import */ var _globalComponents_svgs_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../globalComponents/svgs/square */ "./frontend/reactComponents/globalComponents/svgs/square.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);











function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function onSelect(value) {
  console.log('onSelect', value);
}

var IndexComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexComponent, _React$Component);

  function IndexComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dataSource: [],
      didUserScroll: false,
      value: 5
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (value) {
      _this.setState({
        dataSource: value ? _this.searchResult(value) : []
      });
    });

    return _this;
  }

  _createClass(IndexComponent, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(-3 + jquery__WEBPACK_IMPORTED_MODULE_13___default()(window).scrollTop() / 50);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(window).on("scroll", function () {
        if (-3 + jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).scrollTop() / 50 > 0) {
          return jquery__WEBPACK_IMPORTED_MODULE_13___default()('.skewed-background').css({
            transform: 'skewY(0deg)'
          });
        }

        jquery__WEBPACK_IMPORTED_MODULE_13___default()('.skewed-background').css({
          transform: "skewY(".concat(-3 + jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).scrollTop() / 50, "deg)")
        });
      });

      if (-3 + jquery__WEBPACK_IMPORTED_MODULE_13___default()(window).scrollTop() / 50 > 0) {
        return jquery__WEBPACK_IMPORTED_MODULE_13___default()('.skewed-background').css({
          transform: 'skewY(0deg)'
        });
      }
    }
  }, {
    key: "renderOption",
    value: function renderOption(item) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Option, {
        key: item.category,
        text: item.category
      }, item.query, " \u5728", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "https://s.taobao.com/search?q=".concat(item.query),
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.category), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "global-search-item-count"
      }, "\u7EA6 ", item.count, " \u4E2A\u7ED3\u679C"));
    }
  }, {
    key: "searchResult",
    value: function searchResult(query) {
      return new Array(getRandomInt(5)).join('.').split('.').map(function (item, idx) {
        return {
          query: query,
          category: "".concat(query).concat(idx),
          count: getRandomInt(200, 100)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sliderOptions = {
        dots: true,
        speed: 350,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [{
          breakpoint: 1554,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 870,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      };
      var content = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Content"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Content"));
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "home-page-value-props-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "home-page-value-props-inner"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "random-designs"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_globalComponents_svgs_circle__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_globalComponents_svgs_square__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_globalComponents_svgs_circle__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "home-page-value-props-text-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Innovate For The Future"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Proven fun interactive affordable online courses"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "value-props-search",
        size: "large",
        style: {
          width: '100%'
        },
        dataSource: this.state.dataSource.map(this.renderOption),
        onSelect: onSelect,
        onSearch: this.handleSearch,
        placeholder: "Search For A Course...",
        optionLabelProp: "text"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
        suffix: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            transform: 'translateX(15px)',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          className: "search-btn",
          size: "large",
          type: "primary"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "search"
        }))
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "home-page-value-props-svg-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/backgroundImages/homePageHeader.svg"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "courses-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "courses-text-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/icons/paperWithBulletPoints.svg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/backgroundImages/designs-on-edge.svg"
      }), "Popular Courses")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "courses-carousel"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, sliderOptions, lodash__WEBPACK_IMPORTED_MODULE_14___default.a.times(8, function (i) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "inner-carousel"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            background: testColors[i]
          },
          className: "top-info"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
          className: "top-info-header"
        }, "24 hours")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "carousel-copy"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, lodash__WEBPACK_IMPORTED_MODULE_14___default.a.truncate('Digital literacy', {
          length: 30
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, lodash__WEBPACK_IMPORTED_MODULE_14___default.a.truncate('Digital literacy covers basic computing principles and foundational knowledge...', {
          length: 60
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Taught by", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, lodash__WEBPACK_IMPORTED_MODULE_14___default.a.truncate(' Jalen Jackson', {
          length: 20
        }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "price"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "/static/icons/money.svg"
        }), "$30.23"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_rate__WEBPACK_IMPORTED_MODULE_5___default.a, {
          style: {
            float: 'right',
            transform: 'translate(-10px, -30px)'
          },
          disabled: true,
          defaultValue: 5
        }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_4___default.a, {
          content: content,
          title: "Title"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            background: testColors[i]
          },
          className: "explore-button",
          type: "primary",
          icon: "eye"
        }, "Explore")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "preview-button",
          src: "/static/icons/video-play.svg"
        }));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "see-all-link"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "See All")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "skewed-background"
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "popular-categories"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/backgroundImages/course-categories.svg",
        className: "popular-categories-background"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "popular-categories-text-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/icons/chemistryGlass.svg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, "Popular Categories"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "popular-category-list"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "popular-category-row",
        gutter: 16
      }, lodash__WEBPACK_IMPORTED_MODULE_14___default.a.times(8, function (i) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
          className: "gutter-row",
          span: 6
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "gutter-box"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: testImages[i]
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "category-title"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, testTitles[i])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "category-explore-btn-container"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_4___default.a, {
          content: content,
          title: "Title"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          className: "explore-button",
          type: "primary",
          icon: "eye"
        }, "Explore")))));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "See All"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "earn-money-cta"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/backgroundImages/earn-money.svg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "earn-money-cta-text-container"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Want To Earn Money Teaching?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Lorem ipsum is simply dummy text. Hello world you are awesome"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "primary",
        icon: "dollar"
      }, "Get Started"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "company-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/icons/paperWithBulletPoints.svg"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "footer-company-name"
      }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "company-footer-items"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "gutter-row",
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Learn"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Courses"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Community")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "gutter-row",
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Practice"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Quizzes"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Picture Quizzes"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Matching Games"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Crunch Challenges"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Coding Challenges"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Coding Projects")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "gutter-row",
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Join"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Register"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Login")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "gutter-row",
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Information"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Terms And Conditions"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Privacy Policy")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "bottom-footer"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "bottom-footer-divider"
      }, "\xA9 Company Name, LLC"))));
    }
  }]);

  return IndexComponent;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);


var testColors = ['#9B3B5A', '#FED766', '#031F4B', '#FE8A71', '#FEC8C1', '#039688', '#1E1F26', '#FF6F69'];
var testImages = ['/static/icons/computerWithMonitor.svg', '/static/icons/businessSuit.svg', '/static/icons/bucketWithPaint.svg', '/static/icons/whiteboardWithChart.svg', '/static/icons/calculator.svg', '/static/icons/books.svg', '/static/icons/music.svg', '/static/icons/earth.svg'];
var testTitles = ['Software Engineering', 'Business', 'Design', 'Marketing', 'Mathematics', 'Literature', 'Music', 'History'];

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontend_reactComponents_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontend/reactComponents/index/index */ "./frontend/reactComponents/index/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Home Page")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_frontend_reactComponents_index_index__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {});

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 8:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/auto-complete":
/*!*****************************************!*\
  !*** external "antd/lib/auto-complete" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/carousel":
/*!************************************!*\
  !*** external "antd/lib/carousel" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "antd/lib/rate":
/*!********************************!*\
  !*** external "antd/lib/rate" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/rate");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map