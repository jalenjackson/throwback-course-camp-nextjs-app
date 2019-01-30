webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./frontend/reactComponents/users/registerModal.js":
/*!*********************************************************!*\
  !*** ./frontend/reactComponents/users/registerModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var unstated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! unstated */ "./node_modules/unstated/lib/unstated.es.js");
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
          title: "Basic Drawer",
          placement: "right",
          closable: false,
          onClose: function onClose() {
            return navbarContainer.setContainerState('loginFormVisibility', false);
          },
          visible: navbarContainer.state.loginFormVisibility
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

/***/ })

})
//# sourceMappingURL=_app.js.3f7fa8e16ce7cbf3c9a2.hot-update.js.map