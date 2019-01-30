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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/reactComponents/globalComponents/navbar/SetAuthentication.js":
/*!*******************************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/SetAuthentication.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetAuthentication; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SetAuthentication =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetAuthentication, _React$Component);

  function SetAuthentication() {
    _classCallCheck(this, SetAuthentication);

    return _possibleConstructorReturn(this, _getPrototypeOf(SetAuthentication).apply(this, arguments));
  }

  _createClass(SetAuthentication, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.navbarContainer.setContainerState('authenticated', this.props.authenticated);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return SetAuthentication;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./frontend/reactComponents/globalComponents/navbar/index.js":
/*!*******************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unstated */ "unstated");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbarContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarContainer */ "./frontend/reactComponents/globalComponents/navbar/navbarContainer.js");
/* harmony import */ var _navbars_desktopNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbars/desktopNavbar */ "./frontend/reactComponents/globalComponents/navbar/navbars/desktopNavbar.js");
/* harmony import */ var _SetAuthentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SetAuthentication */ "./frontend/reactComponents/globalComponents/navbar/SetAuthentication.js");
/* harmony import */ var _navbars_mobileNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbars/mobileNavbar */ "./frontend/reactComponents/globalComponents/navbar/navbars/mobileNavbar.js");







var Navbar = function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_1__["Subscribe"], {
    to: [_navbarContainer__WEBPACK_IMPORTED_MODULE_2__["default"]]
  }, function (navbarContainer) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SetAuthentication__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navbarContainer: navbarContainer,
      authenticated: props.auth.authenticated
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbars_mobileNavbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbars_desktopNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      auth: props.auth
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./frontend/reactComponents/globalComponents/navbar/index.less":
/*!*********************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/index.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/reactComponents/globalComponents/navbar/localization.js":
/*!**************************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/localization.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-localization */ "react-localization");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_localization__WEBPACK_IMPORTED_MODULE_0__);

var localization = new react_localization__WEBPACK_IMPORTED_MODULE_0___default.a({
  en: {
    CompanyName: 'Logo & Company Name',
    MenuLinks: {
      LearnAndPractice: 'Learn And Practice',
      Learn: 'Learn',
      Courses: 'Courses',
      AllCourses: 'All courses',
      Categories: 'Categories',
      Community: 'Community',
      Practice: 'Practice',
      Quizzes: 'Quizzes',
      AllQuizzes: 'All Quizzes',
      PictureQuizzes: 'Picture Quizzes',
      MatchingGames: 'Matching Games',
      CrunchChallenges: 'CrunchChallenges',
      CodingChallenges: 'CodingChallenges',
      CodingProjects: 'CodingProjects',
      EarnMoneyTeaching: 'Earn Money Teaching',
      Register: 'Register',
      Login: 'Login'
    },
    MenuKeys: {
      Home: 'home',
      Courses: 'courses',
      CourseCategories: 'courseCategories',
      Community: 'community',
      Quizzes: 'quizzes',
      QuizCategories: 'quizCategories',
      PictureQuizzes: 'pictureQuizzes',
      PictureQuizCategories: 'pictureQuizCategories',
      MatchingGames: 'matchingGames',
      MatchingGameCategories: 'matchingGameCategories',
      CrunchChallenges: 'crunchChallenges',
      CrunchChallengeCategories: 'crunchChallengeCategories',
      CodingChallenges: 'codingChallenges',
      CodingChallengeCategories: 'codingChallengeCategories',
      CodingProjects: 'codingProjects',
      CodingProjectCategories: 'codingProjectCategories',
      BecomeATeacher: 'becomeTeacher',
      Register: 'register',
      Login: 'login'
    },
    Search: {
      Placeholder: 'Search For A Course...'
    },
    NavbarContainer: {
      InvalidAuthorization: 'Invalid Authorization',
      UnexpectedError: 'Sorry an unexpected error occurred. We are working diligently to get this resolved.',
      EnterValidEmailAddress: 'Please enter a valid email address',
      FillInFieldsError: 'Please make sure all fields are filled in',
      SignOutQuote: 'Signing you out',
      SignOutFinished: 'You are now signed out.'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (localization);

/***/ }),

/***/ "./frontend/reactComponents/globalComponents/navbar/navbarContainer.js":
/*!*****************************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/navbarContainer.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated */ "unstated");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unstated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalHelpers_axiosCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalHelpers/axiosCalls */ "./globalHelpers/axiosCalls.js");
/* harmony import */ var _globalHelpers_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../globalHelpers/validations */ "./globalHelpers/validations.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localization */ "./frontend/reactComponents/globalComponents/navbar/localization.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_6__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var NavbarContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(NavbarContainer, _Container);

  function NavbarContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavbarContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavbarContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeLink: '',
      autoCompleteDataSource: ['course 1', 'course 2', 'course 3'],
      loginFormVisibility: false,
      registerFormVisibility: false,
      name: '',
      email: '',
      password: '',
      loginErrorMessage: '',
      registerErrorMessage: '',
      loginSubmissionInProgress: false,
      registerSubmissionInProgress: false,
      authorizationToken: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getAutoCompleteDataResults", function (value) {
      _this.setState({
        dataSource: !value ? [] : [value, value + value, value + value + value]
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setContainerState", function (stateName, value) {
      _this.setState(_defineProperty({}, stateName, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLoginSubmission",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(form) {
        var loginResponse, userCookie;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.state.email.trim().length === 0 || _this.state.password.trim().length === 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this.setState({
                  loginErrorMessage: _localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.FillInFieldsError
                }));

              case 2:
                if (Object(_globalHelpers_validations__WEBPACK_IMPORTED_MODULE_4__["IsTheEmailAddressValid"])(_this.state.email)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", _this.setState({
                  loginErrorMessage: _localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.EnterValidEmailAddress
                }));

              case 4:
                _this.setState({
                  loginSubmissionInProgress: true
                });

                _context.prev = 5;
                _context.next = 8;
                return Object(_globalHelpers_axiosCalls__WEBPACK_IMPORTED_MODULE_3__["GraphQlMutate"])(_globalHelpers_axiosCalls__WEBPACK_IMPORTED_MODULE_3__["GraphQlDevURI"], "\n      query {\n        login(email: \"".concat(_this.state.email, "\", password: \"").concat(_this.state.password, "\") {\n          _id\n          email\n          name\n          token\n        }\n      }\n    "));

              case 8:
                loginResponse = _context.sent;
                form.resetFields();
                userCookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_6___default.a();
                userCookie.set('auth', loginResponse.data.data.login, {
                  path: '/'
                });
                _context.next = 14;
                return _this.setState({
                  loginErrorMessage: '',
                  loginSubmissionInProgress: false,
                  loginFormVisibility: false
                });

              case 14:
                window.location.reload();
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](5);
                form.resetFields();

                _this.setState({
                  loginErrorMessage: _localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.InvalidAuthorization,
                  loginSubmissionInProgress: false
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRegistrationSubmission",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(form) {
        var registrationResponse, userCookie;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this.state.email.trim().length === 0 || _this.state.password.trim().length === 0 || _this.state.name.trim().length === 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", _this.setState({
                  registerErrorMessage: _localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.FillInFieldsError
                }));

              case 2:
                if (Object(_globalHelpers_validations__WEBPACK_IMPORTED_MODULE_4__["IsTheEmailAddressValid"])(_this.state.email)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", _this.setState({
                  registerErrorMessage: _localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.EnterValidEmailAddress
                }));

              case 4:
                _this.setState({
                  registerSubmissionInProgress: true
                });

                _context2.prev = 5;
                _context2.next = 8;
                return Object(_globalHelpers_axiosCalls__WEBPACK_IMPORTED_MODULE_3__["GraphQlMutate"])(_globalHelpers_axiosCalls__WEBPACK_IMPORTED_MODULE_3__["GraphQlDevURI"], "\n      mutation {\n        createUser(userInput: \n        { \n          name: \"".concat(_this.state.name, "\",\n          email: \"").concat(_this.state.email, "\", \n          password: \"").concat(_this.state.password, "\" \n        }) \n        {\n          _id\n          email\n          name\n          token\n        }\n      }\n    "));

              case 8:
                registrationResponse = _context2.sent;

                if (!registrationResponse.data.errors) {
                  _context2.next = 12;
                  break;
                }

                form.resetFields();
                return _context2.abrupt("return", _this.setState({
                  registerErrorMessage: registrationResponse.data.errors[0].message,
                  registerSubmissionInProgress: false
                }));

              case 12:
                form.resetFields();
                userCookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_6___default.a();
                userCookie.set('auth', registrationResponse.data.data.createUser, {
                  path: '/'
                });

                _this.setState({
                  registerErrorMessage: '',
                  registerSubmissionInProgress: false
                });

                window.location.reload();
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](5);

                _this.setState({
                  registerErrorMessage: _localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.UnexpectedError,
                  registerSubmissionInProgress: false
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 19]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "signUserOut",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var userCookie;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              userCookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_6___default.a();
              _context3.next = 3;
              return antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.loading(_localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.SignOutQuote, 1);

            case 3:
              userCookie.set('auth', {
                authenticated: false
              });

              antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success(_localization__WEBPACK_IMPORTED_MODULE_5__["default"].NavbarContainer.SignOutFinished, 2.5);

              setTimeout(function () {
                window.location.reload();
              }, 500);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    return _this;
  }

  return NavbarContainer;
}(unstated__WEBPACK_IMPORTED_MODULE_2__["Container"]);

/* harmony default export */ __webpack_exports__["default"] = (NavbarContainer);

/***/ }),

/***/ "./frontend/reactComponents/globalComponents/navbar/navbars/desktopNavbar.js":
/*!***********************************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/navbars/desktopNavbar.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/badge */ "antd/lib/badge");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/auto-complete */ "antd/lib/auto-complete");
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _svgs_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../svgs/index */ "./frontend/reactComponents/globalComponents/svgs/index.js");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unstated */ "unstated");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(unstated__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _navbarContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../navbarContainer */ "./frontend/reactComponents/globalComponents/navbar/navbarContainer.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../localization */ "./frontend/reactComponents/globalComponents/navbar/localization.js");
/* harmony import */ var _users_loginModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../users/loginModal */ "./frontend/reactComponents/users/loginModal.js");
/* harmony import */ var _users_registerModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../users/registerModal */ "./frontend/reactComponents/users/registerModal.js");














var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.SubMenu;
var MenuItemGroup = antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.ItemGroup;

var DesktopNavbar = function DesktopNavbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_9__["Subscribe"], {
    to: [_navbarContainer__WEBPACK_IMPORTED_MODULE_10__["default"]]
  }, function (navbarContainer) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      id: "navbar"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: function onClick(e) {
        return navbarContainer.setContainerState('activeLink', e.key);
      },
      selectedKeys: [navbarContainer.state.activeLink],
      mode: "horizontal"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Home
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].CompanyName)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3___default.a, {
      dataSource: navbarContainer.state.autoCompleteDataSource,
      onSearch: navbarContainer.getAutoCompleteDataResults,
      placeholder: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].Search.Placeholder
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
      suffix: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "search",
        className: "certain-category-icon"
      })
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: inlineStyling().PaperWithBulletPointsSVGStyles,
        component: _svgs_index__WEBPACK_IMPORTED_MODULE_8__["PaperWithBulletPointsSVG"]
      }), _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.LearnAndPractice)
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuItemGroup, {
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Learn
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Courses,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Courses
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Courses
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.AllCourses), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CourseCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Community
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Community)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuItemGroup, {
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Practice
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Quizzes,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Quizzes
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Quizzes
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.AllQuizzes), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.QuizCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.PictureQuizzes,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.PictureQuizzes
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.PictureQuizzes
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.PictureQuizzes), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.PictureQuizCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.MatchingGames,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.MatchingGames
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.MatchingGames
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.MatchingGames), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.MatchingGameCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CrunchChallenges,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.CrunchChallenges
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CrunchChallenges
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.MatchingGames), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CrunchChallengeCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CodingChallenges,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.CodingChallenges
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CodingChallenges
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.CodingChallenges), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CodingChallengeCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CodingProjects,
      title: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.CodingProjects
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CodingProjects
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.CodingProjects), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.CodingProjectCategories
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Categories)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.BecomeATeacher
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      href: "https://ant.design",
      target: "_blank",
      rel: "noopener noreferrer"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: inlineStyling().MoneySVGStyles,
      component: _svgs_index__WEBPACK_IMPORTED_MODULE_8__["MoneySVG"]
    }), _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.EarnMoneyTeaching)), !props.auth.authenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      onClick: function onClick() {
        return navbarContainer.setContainerState('registerFormVisibility', true);
      },
      style: inlineStyling(navbarContainer.state.authenticated).NonAuthenticatedMenuItems,
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Register
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "dashed"
    }, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Register)) : null, !props.auth.authenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      onClick: function onClick() {
        return navbarContainer.setContainerState('loginFormVisibility', true);
      },
      style: inlineStyling(navbarContainer.state.authenticated).NonAuthenticatedMenuItems,
      key: _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuKeys.Login
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, _localization__WEBPACK_IMPORTED_MODULE_11__["default"].MenuLinks.Login)) : null, props.auth.authenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      style: inlineStyling(navbarContainer.state.authenticated).AuthenticatedMenuItems,
      title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
        shape: "circle",
        size: "small",
        style: inlineStyling().AuthenticatedAvatar
      }))
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuItemGroup, {
      title: "Jalen Jackson"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      key: "notifications",
      title: "Notifications"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: "notification1"
    }, "Notification 1")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: "profile"
    }, "Profile"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: "settings"
    }, "Settings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: "help"
    }, "Help"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      onClick: function onClick() {
        return navbarContainer.signUserOut(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a, SubMenu, MenuItemGroup);
      },
      key: "signout"
    }, "Sign Out"))) : null, props.auth.authenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubMenu, {
      style: inlineStyling(navbarContainer.state.authenticated).AuthenticatedMenuItems,
      title: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_0___default.a, {
        style: {
          transform: 'translate(12px, -3px)',
          fontSize: 11
        },
        count: 10
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "bell",
        style: {
          fontSize: 24,
          transform: 'translateY(5px)'
        }
      })))
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
      key: "notification1"
    }, "Notification 1")) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_users_loginModal__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_users_registerModal__WEBPACK_IMPORTED_MODULE_13__["default"], null));
  });
};

var inlineStyling = function inlineStyling() {
  return {
    PaperWithBulletPointsSVGStyles: {
      width: 20,
      transform: 'translateY(0.35rem)'
    },
    MoneySVGStyles: {
      width: 30,
      transform: 'translateY(0.29em)'
    },
    NonAuthenticatedMenuItems: {
      float: 'right'
    },
    AuthenticatedMenuItems: {
      float: 'right'
    },
    AuthenticatedBadge: {
      transform: 'translate(-13px, -5px)'
    },
    AuthenticatedAvatar: {
      width: 30,
      height: 30
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopNavbar);

/***/ }),

/***/ "./frontend/reactComponents/globalComponents/navbar/navbars/mobileNavbar.js":
/*!**********************************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/navbar/navbars/mobileNavbar.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileNavbar; });
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




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



var MobileNavbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileNavbar, _React$Component);

  function MobileNavbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MobileNavbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MobileNavbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showDrawer", function () {
      _this.setState({
        visible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPopoverContent", function () {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", null, "Hey"));
    });

    return _this;
  }

  _createClass(MobileNavbar, [{
    key: "render",
    value: function render() {
      var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.SubMenu;
      var MenuItemGroup = antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.ItemGroup;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        id: "mobile-navbar"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", null, "Logo"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        onClick: this.showDrawer,
        src: "/static/icons/hamburger.png"
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
        title: "Basic Drawer",
        placement: "right",
        closable: false,
        onClose: this.onClose,
        visible: this.state.visible
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        mode: "inline"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "mail"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Learn And Practice"))
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MenuItemGroup, {
        key: "g1",
        title: "Item 1"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "1"
      }, "Option 1"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "2"
      }, "Option 2")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MenuItemGroup, {
        key: "g2",
        title: "Item 2"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "3"
      }, "Option 3"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "4"
      }, "Option 4"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "appstore"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Navigation Two"))
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "5"
      }, "Option 5"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "6"
      }, "Option 6"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SubMenu, {
        key: "sub3",
        title: "Submenu"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "7"
      }, "Option 7"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "8"
      }, "Option 8"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SubMenu, {
        key: "sub4",
        title: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "setting"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Navigation Three"))
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "9"
      }, "Option 9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "10"
      }, "Option 10"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "11"
      }, "Option 11"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        key: "12"
      }, "Option 12")))));
    }
  }]);

  return MobileNavbar;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);



/***/ }),

/***/ "./frontend/reactComponents/globalComponents/svgs/index.js":
/*!*****************************************************************!*\
  !*** ./frontend/reactComponents/globalComponents/svgs/index.js ***!
  \*****************************************************************/
/*! exports provided: MoneySVG, PaperWithBulletPointsSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneySVG", function() { return MoneySVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperWithBulletPointsSVG", function() { return PaperWithBulletPointsSVG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MoneySVG = function MoneySVG() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("object", {
    id: "svg1",
    data: "/static/icons/money.svg",
    type: "image/svg+xml"
  });
};
var PaperWithBulletPointsSVG = function PaperWithBulletPointsSVG() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("object", {
    id: "svg1",
    data: "/static/icons/paperWithBulletPoints.svg",
    type: "image/svg+xml"
  });
};

/***/ }),

/***/ "./frontend/reactComponents/index/index.less":
/*!***************************************************!*\
  !*** ./frontend/reactComponents/index/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/reactComponents/users/less/modals.less":
/*!*********************************************************!*\
  !*** ./frontend/reactComponents/users/less/modals.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./frontend/reactComponents/users/loginModal.js":
/*!******************************************************!*\
  !*** ./frontend/reactComponents/users/loginModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! unstated */ "unstated");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(unstated__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _globalComponents_navbar_navbarContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalComponents/navbar/navbarContainer */ "./frontend/reactComponents/globalComponents/navbar/navbarContainer.js");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var LoginModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginModal, _React$Component);

  function LoginModal() {
    _classCallCheck(this, LoginModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginModal).apply(this, arguments));
  }

  _createClass(LoginModal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_7__["Subscribe"], {
        to: [_globalComponents_navbar_navbarContainer__WEBPACK_IMPORTED_MODULE_8__["default"]]
      }, function (navbarContainer) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
          title: "Basic Drawer",
          placement: "right",
          closable: false,
          onClose: function onClose() {
            return navbarContainer.setContainerState('loginFormVisibility', false);
          },
          visible: navbarContainer.state.loginFormVisibility
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {
          onKeyPress: function onKeyPress(e) {
            return e.key === 'Enter' ? navbarContainer.handleLoginSubmission(_this.props.form) : null;
          },
          id: "login-form",
          layout: "horizontal",
          hideRequiredMark: true
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
          gutter: 16
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 24
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
          label: "Email"
        }, getFieldDecorator('loginEmail', {
          rules: [{
            required: true,
            message: 'Please enter a valid email address'
          }]
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onChange: function onChange(e) {
            return navbarContainer.setContainerState('email', e.target.value);
          },
          placeholder: "Please enter a valid email address",
          type: "email"
        }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
          gutter: 16
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 24
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
          label: "Password"
        }, getFieldDecorator('loginPassword', {
          rules: [{
            required: true,
            message: 'Please enter a password'
          }]
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onChange: function onChange(e) {
            return navbarContainer.setContainerState('password', e.target.value);
          },
          placeholder: "Please enter a password",
          type: "password"
        }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "modal-auth-error-message"
        }, navbarContainer.state.loginErrorMessage)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "modal-auth-submit-button-container"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: function onClick() {
            return navbarContainer.setContainerState('loginFormVisibility', false);
          }
        }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "primary",
          icon: "login",
          loading: navbarContainer.state.loginSubmissionInProgress,
          onClick: function onClick() {
            return navbarContainer.handleLoginSubmission(_this.props.form);
          }
        }, "Submit"))));
      });
    }
  }]);

  return LoginModal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.create()(LoginModal));

/***/ }),

/***/ "./frontend/reactComponents/users/registerModal.js":
/*!*********************************************************!*\
  !*** ./frontend/reactComponents/users/registerModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "antd/lib/drawer");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! unstated */ "unstated");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(unstated__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _globalComponents_navbar_navbarContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalComponents/navbar/navbarContainer */ "./frontend/reactComponents/globalComponents/navbar/navbarContainer.js");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RegisterModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegisterModal, _React$Component);

  function RegisterModal() {
    _classCallCheck(this, RegisterModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegisterModal).apply(this, arguments));
  }

  _createClass(RegisterModal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_7__["Subscribe"], {
        to: [_globalComponents_navbar_navbarContainer__WEBPACK_IMPORTED_MODULE_8__["default"]]
      }, function (navbarContainer) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
          placement: "right",
          closable: false,
          title: "Create a new account",
          onClose: function onClose() {
            return navbarContainer.setContainerState('registerFormVisibility', false);
          },
          visible: navbarContainer.state.registerFormVisibility
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {
          onKeyPress: function onKeyPress(e) {
            return e.key === 'Enter' ? navbarContainer.handleRegistrationSubmission(_this.props.form) : null;
          },
          layout: "horizontal",
          hideRequiredMark: true
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
          gutter: 16
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 24
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
          label: "Name"
        }, getFieldDecorator('name', {
          rules: [{
            required: true,
            message: 'Please enter your name'
          }]
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onChange: function onChange(e) {
            return navbarContainer.setContainerState('name', e.target.value);
          },
          placeholder: "Please enter your name",
          type: "name"
        }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
          gutter: 16
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 24
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
          label: "Email"
        }, getFieldDecorator('email', {
          rules: [{
            required: true,
            message: 'Please enter a valid email address'
          }]
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onChange: function onChange(e) {
            return navbarContainer.setContainerState('email', e.target.value);
          },
          placeholder: "Please enter a valid email address",
          type: "email"
        }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
          gutter: 16
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
          span: 24
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
          label: "Password"
        }, getFieldDecorator('password', {
          rules: [{
            required: true,
            message: 'Please enter a password'
          }]
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
          onChange: function onChange(e) {
            return navbarContainer.setContainerState('password', e.target.value);
          },
          placeholder: "Please enter a password",
          type: "password"
        }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "modal-auth-error-message"
        }, navbarContainer.state.registerErrorMessage)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "modal-auth-submit-button-container"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onClick: function onClick() {
            return navbarContainer.setContainerState('registerFormVisibility', false);
          },
          style: {
            marginRight: 8
          }
        }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "primary",
          icon: "user",
          loading: navbarContainer.state.registerSubmissionInProgress,
          onClick: function onClick() {
            return navbarContainer.handleRegistrationSubmission(_this.props.form);
          }
        }, "Submit"))));
      });
    }
  }]);

  return RegisterModal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.create()(RegisterModal));

/***/ }),

/***/ "./globalHelpers/axiosCalls.js":
/*!*************************************!*\
  !*** ./globalHelpers/axiosCalls.js ***!
  \*************************************/
/*! exports provided: GraphQlDevURI, GraphQlMutate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQlDevURI", function() { return GraphQlDevURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQlMutate", function() { return GraphQlMutate; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var GraphQlDevURI = 'http://localhost:5000/graphql';
var GraphQlMutate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(uri, query) {
    var headers, graphQlQuery;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            headers = {
              'Content-Type': 'application/json'
            };
            graphQlQuery = {
              query: "\n        ".concat(query, "\n      ")
            };
            return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(uri, JSON.stringify(graphQlQuery), {
              headers: headers
            }));

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function GraphQlMutate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./globalHelpers/validations.js":
/*!**************************************!*\
  !*** ./globalHelpers/validations.js ***!
  \**************************************/
/*! exports provided: IsTheEmailAddressValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTheEmailAddressValid", function() { return IsTheEmailAddressValid; });
var IsTheEmailAddressValid = function IsTheEmailAddressValid(email) {
  var regexEmailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmailValidation.test(String(email).toLowerCase());
};

/***/ }),

/***/ "./globalHelpers/verifyAuthentication.js":
/*!***********************************************!*\
  !*** ./globalHelpers/verifyAuthentication.js ***!
  \***********************************************/
/*! exports provided: VerifyAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAuthentication", function() { return VerifyAuthentication; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var VerifyAuthentication = function VerifyAuthentication(ctx) {
  var checkForAuthenticationCookie = typeof document === 'undefined' ? new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a(ctx.req.headers.cookie) : new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a();
  var authenticationCookie = checkForAuthenticationCookie.get('auth');

  if (authenticationCookie) {
    try {
      jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(authenticationCookie.token, process.env.JWT_SECRET_KEY);
      return _objectSpread({}, authenticationCookie, {
        authenticated: true
      });
    } catch (e) {
      return {
        authenticated: false
      };
    }
  } else {
    return {
      authenticated: false
    };
  }
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! unstated */ "unstated");
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(unstated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globalHelpers_verifyAuthentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalHelpers/verifyAuthentication */ "./globalHelpers/verifyAuthentication.js");
/* harmony import */ var _frontend_reactComponents_globalComponents_navbar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend/reactComponents/globalComponents/navbar/index */ "./frontend/reactComponents/globalComponents/navbar/index.js");
/* harmony import */ var _static_styles_application_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/styles/application.less */ "./static/styles/application.less");
/* harmony import */ var _static_styles_application_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_styles_application_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_styles_global_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/styles/global.less */ "./static/styles/global.less");
/* harmony import */ var _static_styles_global_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_styles_global_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _frontend_reactComponents_users_less_modals_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../frontend/reactComponents/users/less/modals.less */ "./frontend/reactComponents/users/less/modals.less");
/* harmony import */ var _frontend_reactComponents_users_less_modals_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_frontend_reactComponents_users_less_modals_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _frontend_reactComponents_index_index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../frontend/reactComponents/index/index.less */ "./frontend/reactComponents/index/index.less");
/* harmony import */ var _frontend_reactComponents_index_index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_frontend_reactComponents_index_index_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _frontend_reactComponents_globalComponents_navbar_index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../frontend/reactComponents/globalComponents/navbar/index.less */ "./frontend/reactComponents/globalComponents/navbar/index.less");
/* harmony import */ var _frontend_reactComponents_globalComponents_navbar_index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_frontend_reactComponents_globalComponents_navbar_index_less__WEBPACK_IMPORTED_MODULE_10__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          auth = _this$props.auth;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(unstated__WEBPACK_IMPORTED_MODULE_3__["Provider"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_frontend_reactComponents_globalComponents_navbar_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        auth: auth
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        auth: auth
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  auth: Object(_globalHelpers_verifyAuthentication__WEBPACK_IMPORTED_MODULE_4__["VerifyAuthentication"])(ctx)
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./static/styles/application.less":
/*!****************************************!*\
  !*** ./static/styles/application.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./static/styles/global.less":
/*!***********************************!*\
  !*** ./static/styles/global.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


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

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/badge":
/*!*********************************!*\
  !*** external "antd/lib/badge" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

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

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-localization":
/*!*************************************!*\
  !*** external "react-localization" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-localization");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "unstated":
/*!***************************!*\
  !*** external "unstated" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("unstated");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map