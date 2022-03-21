(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./action_confirmation_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/action_confirmation_controller.js",
	"./admin_data_table_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin_data_table_controller.js",
	"./ajax_uploader_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ajax_uploader_controller.js",
	"./crud_form_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/crud_form_controller.js",
	"./form_collection_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_collection_controller.js",
	"./menu_toggle_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js",
	"./resource_picker_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/resource_picker_controller.js",
	"./sidebar_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/sidebar_controller.js",
	"./tooltip_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/tooltip_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/action_confirmation_controller.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/action_confirmation_controller.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var element = this.element;
      var message = this.messageValue;
      var csrf = this.csrfValue;
      element.addEventListener('click', function (e) {
        e.preventDefault();

        if (confirm(message)) {
          var formData = new FormData();
          formData.append('token', csrf);
          fetch(element.href, {
            method: 'POST',
            body: formData
          }).then(function (r) {
            return r.json();
          }).then(function (data) {
            if (data.redirect) {
              window.location.href = data.redirect;
            } else {
              window.location.reload();
            }
          });
        }
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);

_defineProperty(_default, "values", {
  message: String,
  csrf: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin_data_table_controller.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin_data_table_controller.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var _components_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/data-table */ "./assets/components/data-table.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      if ('ajaxUrl' in this.element.dataset) {
        fetch(this.element.dataset.ajaxUrl, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then(function (r) {
          return r.text();
        }).then(function (html) {
          _this.element.innerHTML = html;
          var table = new _components_data_table__WEBPACK_IMPORTED_MODULE_1__.DataTable(_this.element.querySelector('[data-role="table-widget"]'), 'ajax' in _this.element.dataset);
        });
      } else {
        var table = new _components_data_table__WEBPACK_IMPORTED_MODULE_1__.DataTable(this.element.querySelector('[data-role="table-widget"]'), 'ajax' in this.element.dataset);
      }
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ajax_uploader_controller.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/ajax_uploader_controller.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      if (this.pathInputTarget.value) {
        this.linkTarget.href = this.pathInputTarget.value;
        this.sizeTarget.innerText = this.formatSize(this.sizeInputTarget.value);

        if (this.imageValue) {
          this.thumbnailTarget.src = this.pathInputTarget.value;
        } else {
          this.linkTarget.innerText = this.nameInputTarget.value;
        }
      } else {
        this.linkTarget.style.display = 'none';
        this.sizeTarget.style.display = 'none';
      }
    }
  }, {
    key: "choice",
    value: function choice() {
      var _this = this;

      var controller = this;
      var input = document.createElement('input');
      input.type = 'file';
      input.click();

      input.onchange = function (e) {
        if (input.files.length === 0) {
          return;
        }

        var formData = new FormData();
        formData.append('upload', e.target.files[0]);
        _this.spinnerTarget.style.display = null;
        _this.uploadIconTarget.style.display = 'none';
        fetch(controller.urlValue, {
          method: 'post',
          body: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then(function (r) {
          return r.json();
        }).then(function (data) {
          if (data.url) {
            controller.pathInputTarget.value = data.url;
            controller.nameInputTarget.value = data.originalName;
            controller.mimeTypeInputTarget.value = data.mimeType;
            controller.sizeInputTarget.value = data.size;

            if (controller.imageValue) {
              controller.thumbnailTarget.src = data.url;
            } else {
              controller.linkTarget.innerText = data.originalName;
            }

            controller.linkTarget.href = data.url;
            controller.sizeTarget.innerText = controller.formatSize(data.size);
            controller.linkTarget.style.display = null;
            controller.sizeTarget.style.display = null;
            _this.spinnerTarget.style.display = 'none';
            _this.uploadIconTarget.style.display = null;
          } else if (Array.isArray(data)) {
            return Promise.reject(data.join('. '));
          }
        })["catch"](function (e) {
          _this.spinnerTarget.style.display = 'none';
          _this.uploadIconTarget.style.display = null;
          alert(e);
        });
      };
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.pathInputTarget.value = null;
      this.sizeInputTarget.value = null;
      this.mimeTypeInputTarget.value = null;
      this.nameInputTarget.value = null;
      this.linkTarget.style.display = 'none';
      this.sizeTarget.style.display = 'none';
    }
  }, {
    key: "formatSize",
    value: function formatSize(bytes) {
      if (!bytes) return '';
      var i = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
    }
  }, {
    key: "htmlToElements",
    value: function htmlToElements(html) {
      var template = document.createElement('template');
      html = html.trim();
      template.innerHTML = html;
      return template.content.firstChild;
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);

_defineProperty(_default, "targets", ["pathInput", "sizeInput", "mimeTypeInput", "nameInput", "link", "size", "thumbnail", "spinner", "uploadIcon"]);

_defineProperty(_default, "values", {
  image: Boolean,
  url: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/crud_form_controller.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/crud_form_controller.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "changeState",
    value: function changeState(_ref) {
      var _ref$params = _ref.params,
          key = _ref$params.key,
          value = _ref$params.value;
      var newState = {};

      if (this.stateTarget.value) {
        var currentState = JSON.parse(this.stateTarget.value);

        if (_typeof(currentState) == "object") {
          newState = currentState;
        }
      }

      newState[key] = value;
      this.stateTarget.value = JSON.stringify(newState);
    }
  }, {
    key: "ajaxSubmit",
    value: function ajaxSubmit(event) {
      var _this = this;

      event.preventDefault();
      fetch(this.element.action, {
        method: this.element.method,
        body: new FormData(this.element),
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (r) {
        return r.text();
      }).then(function (html) {
        _this.element.parentElement.innerHTML = html;
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);

_defineProperty(_default, "targets", ["state"]);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_collection_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_collection_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this.index = this.itemTargets.length;
    }
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "add",
    value: function add(_ref) {
      var _ref$params = _ref.params,
          prototypeName = _ref$params.prototypeName,
          prototype = _ref$params.prototype;
      prototype = prototype.replace(new RegExp(prototypeName + 'label__', 'g'), this.index).replace(new RegExp(prototypeName, 'g'), this.index);
      var newNode = this.htmlToElements(prototype);

      if (typeof newNode.dataset.sortingField === 'string') {
        var sortingInput = newNode.querySelector('#' + newNode.dataset.sortingField);

        if (sortingInput) {
          sortingInput.value = (this.index + 1) * 10;
        }
      }

      this.containerTarget.appendChild(newNode);

      var _iterator = _createForOfIteratorHelper(newNode.querySelectorAll('script')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var oldScript = _step.value;
          var newScript = document.createElement("script");

          var _iterator2 = _createForOfIteratorHelper(oldScript.attributes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var attr = _step2.value;
              newScript.setAttribute(attr.name, attr.value);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.index++;
    }
  }, {
    key: "delete",
    value: function _delete(event) {
      event.target.closest('[data-form-collection-target="item"]').remove();
    }
  }, {
    key: "htmlToElements",
    value: function htmlToElements(html) {
      var template = document.createElement('template');
      html = html.trim();
      template.innerHTML = html;
      return template.content.firstChild;
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);

_defineProperty(_default, "targets", ["container", "item"]);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.addEventListener('click', function (e) {
        e.preventDefault();
        window.dispatchEvent(new Event('admin.open-sidebar'));
        this.classList.toggle('menu-toggle__opened');
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/resource_picker_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/resource_picker_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var _components_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/data-table */ "./assets/components/data-table.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this.value = JSON.parse(this.inputTarget.value);
    }
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "openModal",
    value: function openModal() {
      var controller = this;
      var modalWrapper = document.createElement('div');
      modalWrapper.innerHTML = "\n            <div class=\"modal\" tabindex=\"-1\">\n              <div class=\"modal-dialog modal-xl\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <div class=\"modal-title\">\u0412\u044B\u0431\u043E\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u0430</div>\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n                  </div>\n                  <div class=\"modal-body\" data-role=\"modal-body\">\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">\u041E\u0442\u043C\u0435\u043D\u0430</button>\n                    <button type=\"button\" class=\"btn btn-primary\" data-role=\"select\">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n        ";
      document.body.append(modalWrapper);
      var modalElement = modalWrapper.querySelector('.modal');
      var modal = new bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal(modalElement);
      modal.show();
      var tempValue = this.value;

      if (controller.multipleValue && !Array.isArray(tempValue)) {
        tempValue = [];
      }

      modalElement.querySelector('[data-role="select"]').addEventListener('click', function (e) {
        e.preventDefault();
        modal.hide();
        controller.updateValue(tempValue);
      });
      modalElement.addEventListener('hidden.bs.modal', function (event) {
        modalWrapper.remove();
      });
      fetch(this.urlValue, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (r) {
        return r.text();
      }).then(function (html) {
        modalElement.querySelector('[data-role="modal-body"]').innerHTML = html;
        var table = new _components_data_table__WEBPACK_IMPORTED_MODULE_1__.DataTable(modalElement.querySelector('[data-role="table-widget"]'), true, function (table) {
          table.hideCheckAll();

          if (controller.multipleValue) {
            tempValue.forEach(function (item) {
              return table.checkItem(item.id);
            });
          } else if (tempValue !== null) {
            table.checkItem(tempValue.id);
          }
        });
        table.addEventListener('check', function (e) {
          if (e.detail.checked) {
            if (controller.multipleValue) {
              tempValue.push(e.detail.item);
            } else {
              table.uncheckAll();
              table.checkItem(e.detail.item.id);
              tempValue = e.detail.item;
            }
          } else {
            if (controller.multipleValue) {
              tempValue = tempValue.filter(function (i) {
                return i.id !== e.detail.item.id;
              });
            } else {
              tempValue = null;
            }
          }
        });
      });
    }
  }, {
    key: "updateValue",
    value: function updateValue(value) {
      var _this = this;

      this.value = value;
      this.inputTarget.value = JSON.stringify(value);

      if (this.multipleValue) {
        this.containerTarget.innerHTML = '';
        value.forEach(function (item) {
          _this.containerTarget.appendChild(_this.htmlToElements(_this.containerTarget.dataset.prototype.replace(/__id__/g, item === null ? '' : item.id).replace(/__label__/g, item === null ? '' : item.name)));
        });
      } else {
        this.nameTarget.innerText = value === null ? '' : value.name;
      }
    }
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var target = _ref.target;
      var element = target.closest('[data-resource-picker-target="element"]');

      if (this.multipleValue) {
        this.updateValue(this.value.filter(function (i) {
          return i.id != element.dataset.id;
        }));
      } else {
        this.updateValue(null);
      }
    }
  }, {
    key: "htmlToElements",
    value: function htmlToElements(html) {
      var template = document.createElement('template');
      html = html.trim();
      template.innerHTML = html;
      return template.content.firstChild;
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);

_defineProperty(_default, "targets", ["input", "container", "element", "name"]);

_defineProperty(_default, "values", {
  multiple: Boolean,
  url: String,
  prototype: String
});



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/sidebar_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/sidebar_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var sidebar = this.element;
      window.addEventListener('admin.open-sidebar', function () {
        if (sidebar.classList.contains('admin-sidebar--opened')) {
          sidebar.classList.remove('admin-sidebar--opened');
          document.body.style.overflow = '';
        } else {
          sidebar.classList.add('admin-sidebar--opened');
          document.body.style.overflow = 'hidden';
        }
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/tooltip_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/tooltip_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var tooltip = new bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tooltip(this.element, {
        boundary: document.body
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);

_defineProperty(_default, "values", {
  title: String
});



/***/ }),

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/admin.scss */ "./assets/styles/admin.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/data-table.js":
/*!*****************************************!*\
  !*** ./assets/components/data-table.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTable": () => (/* binding */ DataTable)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DataTable = /*#__PURE__*/function (_EventTarget) {
  _inherits(DataTable, _EventTarget);

  var _super = _createSuper(DataTable);

  function DataTable(element, ajax, onUpdate) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _super.call(this);
    _this.element = element;
    _this.tableConfig = new TableConfigStorage(element.dataset.id);

    _this.init(ajax, onUpdate);

    return _this;
  }

  _createClass(DataTable, [{
    key: "init",
    value: function init(ajax, onUpdate) {
      var _this2 = this;

      //filters
      var openFilters = this.element.querySelector('[data-role="open-filters"]');
      var closeFilters = this.element.querySelectorAll('[data-role="close-filters"]');
      var filters = this.element.querySelector('[data-role="filters"]');

      if (openFilters) {
        openFilters.addEventListener('click', function (e) {
          filters.classList.add('active');
        });
      }

      if (closeFilters) {
        closeFilters.forEach(function (i) {
          i.addEventListener('click', function (e) {
            filters.classList.remove('active');
          });
        });
      } //checkboxes


      this.element.querySelectorAll('[data-role="check"]').forEach(function (i) {
        var controller = _this2;
        i.addEventListener('change', function (e) {
          var row = e.target.closest('[data-role="row"]');
          controller.dispatchEvent(new CustomEvent('check', {
            detail: {
              checked: e.target.checked,
              item: {
                id: row.dataset.id,
                name: row.dataset.name
              }
            }
          }));
        });
      }); //confirmations

      this.element.querySelectorAll('[data-role="confirmation"]').forEach(function (i) {
        var controller = _this2;
        i.addEventListener('click', function (e) {
          e.preventDefault();

          if (confirm(i.dataset.confirmationText)) {
            var formData = new FormData();
            formData.append('token', controller.element.dataset.csrf);
            fetch(i.href, {
              method: 'POST',
              body: formData
            }).then(function () {
              if (ajax) {
                controller.ajaxLoad(controller.element.dataset.url, onUpdate);
              } else {
                window.location.reload();
              }
            });
          }
        });
      }); //tree

      var toggleTreeItem = function toggleTreeItem(row) {
        var opened = row.classList.contains('data-table__row--opened');
        row.classList.toggle('data-table__row--opened');
        toggleChildrenRows(row.dataset.id, opened);

        if (opened) {
          _this2.tableConfig.closeRow(row.dataset.id);
        } else {
          _this2.tableConfig.openRow(row.dataset.id);
        }
      };

      var toggleChildrenRows = function toggleChildrenRows(parentId, hide) {
        _this2.element.querySelectorAll('[data-role="row"][data-parent="' + parentId + '"]').forEach(function (row) {
          if (hide) {
            row.classList.add('d-none');
            toggleChildrenRows(row.dataset.id, true);
          } else {
            row.classList.remove('d-none');

            if (row.classList.contains('data-table__row--opened')) {
              toggleChildrenRows(row.dataset.id, false);
            }
          }
        });
      };

      var branchOpened = function branchOpened(row) {
        var parent = _this2.element.querySelector('[data-role="row"][data-id="' + row.dataset.parent + '"]');

        if (!parent) {
          return true;
        }

        return parent.classList.contains('data-table__row--opened') && branchOpened(parent);
      };

      var rows = this.element.querySelectorAll('[data-role="row"]');
      rows.forEach(function (row) {
        if (_this2.tableConfig.isOpenedRow(row.dataset.id)) {
          row.classList.add('data-table__row--opened');
        }
      });
      rows.forEach(function (row) {
        if (!row.dataset.parent) return;

        if (branchOpened(row)) {
          row.classList.remove('d-none');
        }
      });
      this.element.querySelectorAll('[data-role="collapse-children"]').forEach(function (i) {
        i.addEventListener('click', function (e) {
          e.preventDefault();
          toggleTreeItem(i.closest('[data-role="row"]'));
        });
      }); //ajax

      if (ajax) {
        this.element.querySelectorAll('[data-role="sort"]').forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            _this2.ajaxLoad(link.href, onUpdate);
          });
        });
        this.element.querySelectorAll('form[name="filter"]').forEach(function (form) {
          form.addEventListener('submit', function (e) {
            e.preventDefault();

            _this2.ajaxLoad(form.getAttribute('action') + '?' + new URLSearchParams(new FormData(form)).toString(), onUpdate);
          });
        });
        this.element.querySelectorAll('[data-role="pagination"] a').forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            _this2.ajaxLoad(link.href, onUpdate);
          });
        });
        this.element.querySelectorAll('form[name="search"]').forEach(function (form) {
          form.addEventListener('submit', function (e) {
            e.preventDefault();

            _this2.ajaxLoad(form.getAttribute('action') + '?' + new URLSearchParams(new FormData(form)).toString(), onUpdate);
          });
        });
        this.element.querySelectorAll('[data-role="reset-filters"]').forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            _this2.ajaxLoad(link.href, onUpdate);
          });
        });
        this.element.querySelectorAll('[data-role="reset-search"]').forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();

            _this2.ajaxLoad(link.href, onUpdate);
          });
        });
      }

      if (typeof onUpdate === 'function') {
        onUpdate(this);
      }
    }
  }, {
    key: "ajaxLoad",
    value: function ajaxLoad(url, onUpdate, options) {
      var _this3 = this;

      options = options || {};
      options.headers = options.headers || {};
      options.headers['X-Requested-With'] = 'XMLHttpRequest';
      fetch(url, options).then(function (r) {
        return r.text();
      }).then(function (html) {
        var node = new DOMParser().parseFromString(html, 'text/html').body.childNodes[0];

        _this3.element.replaceWith(node);

        _this3.element = node;

        _this3.init(true, onUpdate);
      });
    }
  }, {
    key: "checkItem",
    value: function checkItem(id) {
      var row = this.element.querySelector('[data-role="row"][data-id="' + id + '"]');

      if (row) {
        var checkbox = row.querySelector('[data-role="check"]');

        if (checkbox) {
          checkbox.checked = true;
        }
      }
    }
  }, {
    key: "uncheckAll",
    value: function uncheckAll() {
      this.element.querySelectorAll('[data-role="check-all"], [data-role="check"]').forEach(function (i) {
        i.checked = false;
      });
    }
  }, {
    key: "hideCheckAll",
    value: function hideCheckAll() {
      var element = this.element.querySelector('[data-role="check-all"]');

      if (element) {
        element.style.display = 'none';
      }
    }
  }]);

  return DataTable;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

var TableConfigStorage = /*#__PURE__*/function () {
  function TableConfigStorage(tableId) {
    _classCallCheck(this, TableConfigStorage);

    this.key = 'admin-table-' + tableId;
    this.config = JSON.parse(window.localStorage.getItem(this.key));

    if (this.config === null) {
      this.config = {
        openedRows: {}
      };
    }
  }

  _createClass(TableConfigStorage, [{
    key: "openRow",
    value: function openRow(id) {
      this.config.openedRows[id] = true;
      this.flush();
    }
  }, {
    key: "closeRow",
    value: function closeRow(id) {
      delete this.config.openedRows[id];
      this.flush();
    }
  }, {
    key: "isOpenedRow",
    value: function isOpenedRow(id) {
      return this.config.openedRows[id] === true;
    }
  }, {
    key: "flush",
    value: function flush() {
      window.localStorage.setItem(this.key, JSON.stringify(this.config));
    }
  }]);

  return TableConfigStorage;
}();

/***/ }),

/***/ "./assets/styles/admin.scss":
/*!**********************************!*\
  !*** ./assets/styles/admin.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-7e3309"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEtBQUwsQ0FBV3JFLE1BQU0sQ0FBQzZLLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLEtBQUs5RyxHQUFqQyxDQUFYLENBQWQ7O0FBQ0EsUUFBSSxLQUFLNEcsTUFBTCxLQUFnQixJQUFwQixFQUEwQjtBQUN0QixXQUFLQSxNQUFMLEdBQWM7QUFDVkcsUUFBQUEsVUFBVSxFQUFFO0FBREYsT0FBZDtBQUdIO0FBQ0o7Ozs7V0FFRCxpQkFBUTNELEVBQVIsRUFBWTtBQUNSLFdBQUt3RCxNQUFMLENBQVlHLFVBQVosQ0FBdUIzRCxFQUF2QixJQUE2QixJQUE3QjtBQUNBLFdBQUs0RCxLQUFMO0FBQ0g7OztXQUVELGtCQUFTNUQsRUFBVCxFQUFhO0FBQ1QsYUFBTyxLQUFLd0QsTUFBTCxDQUFZRyxVQUFaLENBQXVCM0QsRUFBdkIsQ0FBUDtBQUNBLFdBQUs0RCxLQUFMO0FBQ0g7OztXQUVELHFCQUFZNUQsRUFBWixFQUFnQjtBQUNaLGFBQU8sS0FBS3dELE1BQUwsQ0FBWUcsVUFBWixDQUF1QjNELEVBQXZCLE1BQStCLElBQXRDO0FBQ0g7OztXQUVELGlCQUFRO0FBQ0pwSCxNQUFBQSxNQUFNLENBQUM2SyxZQUFQLENBQW9CSSxPQUFwQixDQUE0QixLQUFLakgsR0FBakMsRUFBc0NJLElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUtzRyxNQUFwQixDQUF0QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDdk9MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYWN0aW9uX2NvbmZpcm1hdGlvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hZG1pbl9kYXRhX3RhYmxlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2FqYXhfdXBsb2FkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY3J1ZF9mb3JtX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fY29sbGVjdGlvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tZW51X3RvZ2dsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXNvdXJjZV9waWNrZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvc2lkZWJhcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy90b29sdGlwX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZGF0YS10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbl9jb25maXJtYXRpb25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FjdGlvbl9jb25maXJtYXRpb25fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vYWRtaW5fZGF0YV90YWJsZV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYWRtaW5fZGF0YV90YWJsZV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9hamF4X3VwbG9hZGVyX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hamF4X3VwbG9hZGVyX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2NydWRfZm9ybV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY3J1ZF9mb3JtX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2Zvcm1fY29sbGVjdGlvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9jb2xsZWN0aW9uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL21lbnVfdG9nZ2xlX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9tZW51X3RvZ2dsZV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9yZXNvdXJjZV9waWNrZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3Jlc291cmNlX3BpY2tlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9zaWRlYmFyX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9zaWRlYmFyX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3Rvb2x0aXBfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3Rvb2x0aXBfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgbWVzc2FnZTogU3RyaW5nLFxuICAgICAgICBjc3JmOiBTdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VWYWx1ZTtcbiAgICAgICAgY29uc3QgY3NyZiA9IHRoaXMuY3NyZlZhbHVlO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCBjc3JmKTtcbiAgICAgICAgICAgICAgICBmZXRjaChlbGVtZW50LmhyZWYsIHttZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGF9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKCdhamF4VXJsJyBpbiB0aGlzLmVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgZmV0Y2godGhpcy5lbGVtZW50LmRhdGFzZXQuYWpheFVybCwge2hlYWRlcnM6IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9fSlcbiAgICAgICAgICAgICAgICAudGhlbihyID0+IHIudGV4dCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwidGFibGUtd2lkZ2V0XCJdJyksICdhamF4JyBpbiB0aGlzLmVsZW1lbnQuZGF0YXNldCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IERhdGFUYWJsZSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInRhYmxlLXdpZGdldFwiXScpLCAnYWpheCcgaW4gdGhpcy5lbGVtZW50LmRhdGFzZXQpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wicGF0aElucHV0XCIsIFwic2l6ZUlucHV0XCIsIFwibWltZVR5cGVJbnB1dFwiLCBcIm5hbWVJbnB1dFwiLCBcImxpbmtcIiwgXCJzaXplXCIsIFwidGh1bWJuYWlsXCIsIFwic3Bpbm5lclwiLCBcInVwbG9hZEljb25cIl07XG5cbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICBpbWFnZTogQm9vbGVhbixcbiAgICAgICAgdXJsOiBTdHJpbmcsXG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF0aElucHV0VGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmtUYXJnZXQuaHJlZiA9IHRoaXMucGF0aElucHV0VGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zaXplVGFyZ2V0LmlubmVyVGV4dCA9IHRoaXMuZm9ybWF0U2l6ZSh0aGlzLnNpemVJbnB1dFRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1ibmFpbFRhcmdldC5zcmMgPSB0aGlzLnBhdGhJbnB1dFRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rVGFyZ2V0LmlubmVyVGV4dCA9IHRoaXMubmFtZUlucHV0VGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW5rVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLnNpemVUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNob2ljZSgpIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHRoaXM7XG5cbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZCcsIGUudGFyZ2V0LmZpbGVzWzBdKTtcblxuICAgICAgICAgICAgdGhpcy5zcGlubmVyVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy51cGxvYWRJY29uVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIGZldGNoKGNvbnRyb2xsZXIudXJsVmFsdWUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5wYXRoSW5wdXRUYXJnZXQudmFsdWUgPSBkYXRhLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIubmFtZUlucHV0VGFyZ2V0LnZhbHVlID0gZGF0YS5vcmlnaW5hbE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLm1pbWVUeXBlSW5wdXRUYXJnZXQudmFsdWUgPSBkYXRhLm1pbWVUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5zaXplSW5wdXRUYXJnZXQudmFsdWUgPSBkYXRhLnNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyLmltYWdlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnRodW1ibmFpbFRhcmdldC5zcmMgPSBkYXRhLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5saW5rVGFyZ2V0LmlubmVyVGV4dCA9IGRhdGEub3JpZ2luYWxOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmxpbmtUYXJnZXQuaHJlZiA9IGRhdGEudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5zaXplVGFyZ2V0LmlubmVyVGV4dCA9IGNvbnRyb2xsZXIuZm9ybWF0U2l6ZShkYXRhLnNpemUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmxpbmtUYXJnZXQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNpemVUYXJnZXQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRJY29uVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhLmpvaW4oJy4gJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bpbm5lclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEljb25UYXJnZXQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMucGF0aElucHV0VGFyZ2V0LnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXplSW5wdXRUYXJnZXQudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1pbWVUeXBlSW5wdXRUYXJnZXQudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWVJbnB1dFRhcmdldC52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGlua1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnNpemVUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBmb3JtYXRTaXplKGJ5dGVzKSB7XG4gICAgICAgIGlmICghYnl0ZXMpIHJldHVybiAnJztcbiAgICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpO1xuICAgICAgICByZXR1cm4gKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSkpLnRvRml4ZWQoMikgKiAxICsgJyAnICsgWydCJywgJ2tCJywgJ01CJywgJ0dCJywgJ1RCJ11baV07XG4gICAgfVxuXG4gICAgaHRtbFRvRWxlbWVudHMoaHRtbCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBodG1sID0gaHRtbC50cmltKCk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInN0YXRlXCJdO1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VTdGF0ZSh7cGFyYW1zOiB7a2V5LCB2YWx1ZX19KSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGF0ZSA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZVRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRTdGF0ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3U3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnN0YXRlVGFyZ2V0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGFqYXhTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBmZXRjaCh0aGlzLmVsZW1lbnQuYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMuZWxlbWVudC5tZXRob2QsXG4gICAgICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEodGhpcy5lbGVtZW50KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ociA9PiByLnRleHQoKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wiY29udGFpbmVyXCIsIFwiaXRlbVwiXTtcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLml0ZW1UYXJnZXRzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuXG4gICAgfVxuXG4gICAgYWRkKHtwYXJhbXM6IHtwcm90b3R5cGVOYW1lLCBwcm90b3R5cGV9fSkge1xuICAgICAgICBwcm90b3R5cGUgPSBwcm90b3R5cGVcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG90eXBlTmFtZSArICdsYWJlbF9fJywgJ2cnKSwgdGhpcy5pbmRleClcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG90eXBlTmFtZSwgJ2cnKSwgdGhpcy5pbmRleClcbiAgICAgICAgO1xuXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSB0aGlzLmh0bWxUb0VsZW1lbnRzKHByb3RvdHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdOb2RlLmRhdGFzZXQuc29ydGluZ0ZpZWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgc29ydGluZ0lucHV0ID0gbmV3Tm9kZS5xdWVyeVNlbGVjdG9yKCcjJyArIG5ld05vZGUuZGF0YXNldC5zb3J0aW5nRmllbGQpO1xuICAgICAgICAgICAgaWYgKHNvcnRpbmdJbnB1dCkge1xuICAgICAgICAgICAgICAgIHNvcnRpbmdJbnB1dC52YWx1ZSA9ICh0aGlzLmluZGV4ICsgMSkgKiAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyVGFyZ2V0LmFwcGVuZENoaWxkKG5ld05vZGUpO1xuXG4gICAgICAgIGZvciAobGV0IG9sZFNjcmlwdCBvZiBuZXdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgYXR0ciBvZiBvbGRTY3JpcHQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIG5ld1NjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3U2NyaXB0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9sZFNjcmlwdC5pbm5lckhUTUwpKTtcbiAgICAgICAgICAgIG9sZFNjcmlwdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTY3JpcHQsIG9sZFNjcmlwdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxuXG4gICAgZGVsZXRlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1mb3JtLWNvbGxlY3Rpb24tdGFyZ2V0PVwiaXRlbVwiXScpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGh0bWxUb0VsZW1lbnRzKGh0bWwpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2FkbWluLm9wZW4tc2lkZWJhcicpKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS10b2dnbGVfX29wZW5lZCcpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCB7IERhdGFUYWJsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGEtdGFibGVcIjtcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJpbnB1dFwiLCBcImNvbnRhaW5lclwiLCBcImVsZW1lbnRcIiwgXCJuYW1lXCJdO1xuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgICAgICB1cmw6IFN0cmluZyxcbiAgICAgICAgcHJvdG90eXBlOiBTdHJpbmcsXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEpTT04ucGFyc2UodGhpcy5pbnB1dFRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgIH1cblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IHRoaXM7XG5cbiAgICAgICAgbGV0IG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbFdyYXBwZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXhsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+0JLRi9Cx0L7RgCDRgNC10YHRg9GA0YHQsDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCIgZGF0YS1yb2xlPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+0J7RgtC80LXQvdCwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1yb2xlPVwic2VsZWN0XCI+0JLRi9Cx0YDQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtb2RhbFdyYXBwZXIpO1xuXG4gICAgICAgIGxldCBtb2RhbEVsZW1lbnQgPSBtb2RhbFdyYXBwZXIucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgIGxldCBtb2RhbCA9IG5ldyBNb2RhbChtb2RhbEVsZW1lbnQpO1xuICAgICAgICBtb2RhbC5zaG93KCk7XG5cbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIubXVsdGlwbGVWYWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh0ZW1wVmFsdWUpKSB7XG4gICAgICAgICAgICB0ZW1wVmFsdWUgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwic2VsZWN0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGVWYWx1ZSh0ZW1wVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2RhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBtb2RhbFdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZldGNoKHRoaXMudXJsVmFsdWUsIHtoZWFkZXJzOiB7J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnfX0pXG4gICAgICAgICAgICAudGhlbihyID0+IHIudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJtb2RhbC1ib2R5XCJdJykuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBEYXRhVGFibGUobW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJ0YWJsZS13aWRnZXRcIl0nKSwgdHJ1ZSwgZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmhpZGVDaGVja0FsbCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlci5tdWx0aXBsZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmFsdWUuZm9yRWFjaChpdGVtID0+IHRhYmxlLmNoZWNrSXRlbShpdGVtLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVtcFZhbHVlICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmNoZWNrSXRlbSh0ZW1wVmFsdWUuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0YWJsZS5hZGRFdmVudExpc3RlbmVyKCdjaGVjaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRldGFpbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlci5tdWx0aXBsZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZhbHVlLnB1c2goZS5kZXRhaWwuaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnVuY2hlY2tBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5jaGVja0l0ZW0oZS5kZXRhaWwuaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZhbHVlID0gZS5kZXRhaWwuaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyLm11bHRpcGxlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmFsdWUgPSB0ZW1wVmFsdWUuZmlsdGVyKGkgPT4gaS5pZCAhPT0gZS5kZXRhaWwuaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGVWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyVGFyZ2V0LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxUb0VsZW1lbnRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuZGF0YXNldC5wcm90b3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvX19pZF9fL2csIGl0ZW0gPT09IG51bGwgPyAnJyA6IGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fbGFiZWxfXy9nLCBpdGVtID09PSBudWxsID8gJycgOiBpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVUYXJnZXQuaW5uZXJUZXh0ID0gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUoe3RhcmdldH0pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXNvdXJjZS1waWNrZXItdGFyZ2V0PVwiZWxlbWVudFwiXScpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUuZmlsdGVyKGkgPT4gaS5pZCAhPSBlbGVtZW50LmRhdGFzZXQuaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBodG1sVG9FbGVtZW50cyhodG1sKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FkbWluLm9wZW4tc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnYWRtaW4tc2lkZWJhci0tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FkbWluLXNpZGViYXItLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdhZG1pbi1zaWRlYmFyLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICB0aXRsZTogU3RyaW5nXG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvYWRtaW4uc2Nzcyc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImV4cG9ydCBjbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgYWpheCwgb25VcGRhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZyA9IG5ldyBUYWJsZUNvbmZpZ1N0b3JhZ2UoZWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgICAgdGhpcy5pbml0KGFqYXgsIG9uVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpbml0KGFqYXgsIG9uVXBkYXRlKSB7XG4gICAgICAgIC8vZmlsdGVyc1xuICAgICAgICBjb25zdCBvcGVuRmlsdGVycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwib3Blbi1maWx0ZXJzXCJdJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlRmlsdGVycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiY2xvc2UtZmlsdGVyc1wiXScpO1xuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJmaWx0ZXJzXCJdJyk7XG5cbiAgICAgICAgaWYgKG9wZW5GaWx0ZXJzKSB7XG4gICAgICAgICAgICBvcGVuRmlsdGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsb3NlRmlsdGVycykge1xuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2hlY2tib3hlc1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cImNoZWNrXCJdJykuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJvbGU9XCJyb3dcIl0nKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGVjaycsIHtkZXRhaWw6IHtjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkLCBpdGVtOiB7aWQ6IHJvdy5kYXRhc2V0LmlkLCBuYW1lOiByb3cuZGF0YXNldC5uYW1lfX19KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jb25maXJtYXRpb25zXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiY29uZmlybWF0aW9uXCJdJykuZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzO1xuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oaS5kYXRhc2V0LmNvbmZpcm1hdGlvblRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgY29udHJvbGxlci5lbGVtZW50LmRhdGFzZXQuY3NyZik7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGkuaHJlZiwge21ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YX0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmFqYXhMb2FkKGNvbnRyb2xsZXIuZWxlbWVudC5kYXRhc2V0LnVybCwgb25VcGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3RyZWVcbiAgICAgICAgY29uc3QgdG9nZ2xlVHJlZUl0ZW0gPSAocm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcGVuZWQgPSByb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXRhLXRhYmxlX19yb3ctLW9wZW5lZCcpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoJ2RhdGEtdGFibGVfX3Jvdy0tb3BlbmVkJyk7XG4gICAgICAgICAgICB0b2dnbGVDaGlsZHJlblJvd3Mocm93LmRhdGFzZXQuaWQsIG9wZW5lZCk7XG4gICAgICAgICAgICBpZiAob3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5jbG9zZVJvdyhyb3cuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcub3BlblJvdyhyb3cuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlQ2hpbGRyZW5Sb3dzID0gKHBhcmVudElkLCBoaWRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInJvd1wiXVtkYXRhLXBhcmVudD1cIicgKyBwYXJlbnRJZCArICdcIl0nKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDaGlsZHJlblJvd3Mocm93LmRhdGFzZXQuaWQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2RhdGEtdGFibGVfX3Jvdy0tb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNoaWxkcmVuUm93cyhyb3cuZGF0YXNldC5pZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYnJhbmNoT3BlbmVkID0gKHJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJyb3dcIl1bZGF0YS1pZD1cIicgKyByb3cuZGF0YXNldC5wYXJlbnQgKyAnXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnZGF0YS10YWJsZV9fcm93LS1vcGVuZWQnKSAmJiBicmFuY2hPcGVuZWQocGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInJvd1wiXScpO1xuICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlQ29uZmlnLmlzT3BlbmVkUm93KHJvdy5kYXRhc2V0LmlkKSkge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdkYXRhLXRhYmxlX19yb3ctLW9wZW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJvdy5kYXRhc2V0LnBhcmVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoYnJhbmNoT3BlbmVkKHJvdykpIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiY29sbGFwc2UtY2hpbGRyZW5cIl0nKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRyZWVJdGVtKGkuY2xvc2VzdCgnW2RhdGEtcm9sZT1cInJvd1wiXScpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2FqYXhcbiAgICAgICAgaWYgKGFqYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwic29ydFwiXScpLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWpheExvYWQobGluay5ocmVmLCBvblVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybVtuYW1lPVwiZmlsdGVyXCJdJykuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWpheExvYWQoZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICsgJz8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhuZXcgRm9ybURhdGEoZm9ybSkpLnRvU3RyaW5nKCksIG9uVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhZ2luYXRpb25cIl0gYScpLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWpheExvYWQobGluay5ocmVmLCBvblVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybVtuYW1lPVwic2VhcmNoXCJdJykuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWpheExvYWQoZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICsgJz8nICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhuZXcgRm9ybURhdGEoZm9ybSkpLnRvU3RyaW5nKCksIG9uVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInJlc2V0LWZpbHRlcnNcIl0nKS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFqYXhMb2FkKGxpbmsuaHJlZiwgb25VcGRhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicmVzZXQtc2VhcmNoXCJdJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hamF4TG9hZChsaW5rLmhyZWYsIG9uVXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvblVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25VcGRhdGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhamF4TG9hZCh1cmwsIG9uVXBkYXRlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuICAgICAgICBmZXRjaCh1cmwsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihyID0+IHIudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHkuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwbGFjZVdpdGgobm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQodHJ1ZSwgb25VcGRhdGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1cblxuICAgIGNoZWNrSXRlbShpZCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cInJvd1wiXVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY2hlY2tcIl0nKTtcbiAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5jaGVja0FsbCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJjaGVjay1hbGxcIl0sIFtkYXRhLXJvbGU9XCJjaGVja1wiXScpLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoaWRlQ2hlY2tBbGwoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNoZWNrLWFsbFwiXScpO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBUYWJsZUNvbmZpZ1N0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHRhYmxlSWQpIHtcbiAgICAgICAgdGhpcy5rZXkgPSAnYWRtaW4tdGFibGUtJyArIHRhYmxlSWRcbiAgICAgICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpO1xuICAgICAgICBpZiAodGhpcy5jb25maWcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG9wZW5lZFJvd3M6IHt9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Sb3coaWQpIHtcbiAgICAgICAgdGhpcy5jb25maWcub3BlbmVkUm93c1tpZF0gPSB0cnVlO1xuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuXG4gICAgY2xvc2VSb3coaWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLm9wZW5lZFJvd3NbaWRdO1xuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuXG4gICAgaXNPcGVuZWRSb3coaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wZW5lZFJvd3NbaWRdID09PSB0cnVlO1xuICAgIH1cblxuICAgIGZsdXNoKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsIm1lc3NhZ2UiLCJtZXNzYWdlVmFsdWUiLCJjc3JmIiwiY3NyZlZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJocmVmIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyIiwianNvbiIsImRhdGEiLCJyZWRpcmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiU3RyaW5nIiwiRGF0YVRhYmxlIiwiZGF0YXNldCIsImFqYXhVcmwiLCJoZWFkZXJzIiwidGV4dCIsImh0bWwiLCJpbm5lckhUTUwiLCJ0YWJsZSIsInF1ZXJ5U2VsZWN0b3IiLCJwYXRoSW5wdXRUYXJnZXQiLCJ2YWx1ZSIsImxpbmtUYXJnZXQiLCJzaXplVGFyZ2V0IiwiaW5uZXJUZXh0IiwiZm9ybWF0U2l6ZSIsInNpemVJbnB1dFRhcmdldCIsImltYWdlVmFsdWUiLCJ0aHVtYm5haWxUYXJnZXQiLCJzcmMiLCJuYW1lSW5wdXRUYXJnZXQiLCJzdHlsZSIsImRpc3BsYXkiLCJjb250cm9sbGVyIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2xpY2siLCJvbmNoYW5nZSIsImZpbGVzIiwibGVuZ3RoIiwidGFyZ2V0Iiwic3Bpbm5lclRhcmdldCIsInVwbG9hZEljb25UYXJnZXQiLCJ1cmxWYWx1ZSIsInVybCIsIm9yaWdpbmFsTmFtZSIsIm1pbWVUeXBlSW5wdXRUYXJnZXQiLCJtaW1lVHlwZSIsInNpemUiLCJBcnJheSIsImlzQXJyYXkiLCJQcm9taXNlIiwicmVqZWN0Iiwiam9pbiIsImFsZXJ0IiwiYnl0ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicG93IiwidG9GaXhlZCIsInRlbXBsYXRlIiwidHJpbSIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaW1hZ2UiLCJCb29sZWFuIiwicGFyYW1zIiwia2V5IiwibmV3U3RhdGUiLCJzdGF0ZVRhcmdldCIsImN1cnJlbnRTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImV2ZW50IiwiYWN0aW9uIiwicGFyZW50RWxlbWVudCIsImluZGV4IiwiaXRlbVRhcmdldHMiLCJwcm90b3R5cGVOYW1lIiwicHJvdG90eXBlIiwicmVwbGFjZSIsIlJlZ0V4cCIsIm5ld05vZGUiLCJodG1sVG9FbGVtZW50cyIsInNvcnRpbmdGaWVsZCIsInNvcnRpbmdJbnB1dCIsImNvbnRhaW5lclRhcmdldCIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsIm9sZFNjcmlwdCIsIm5ld1NjcmlwdCIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwibmFtZSIsImNyZWF0ZVRleHROb2RlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJNb2RhbCIsImlucHV0VGFyZ2V0IiwibW9kYWxXcmFwcGVyIiwibW9kYWxFbGVtZW50IiwibW9kYWwiLCJzaG93IiwidGVtcFZhbHVlIiwibXVsdGlwbGVWYWx1ZSIsImhpZGUiLCJ1cGRhdGVWYWx1ZSIsImhpZGVDaGVja0FsbCIsImZvckVhY2giLCJpdGVtIiwiY2hlY2tJdGVtIiwiaWQiLCJkZXRhaWwiLCJjaGVja2VkIiwicHVzaCIsInVuY2hlY2tBbGwiLCJmaWx0ZXIiLCJuYW1lVGFyZ2V0IiwibXVsdGlwbGUiLCJzaWRlYmFyIiwiY29udGFpbnMiLCJvdmVyZmxvdyIsImFkZCIsIlRvb2x0aXAiLCJ0b29sdGlwIiwiYm91bmRhcnkiLCJ0aXRsZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImFqYXgiLCJvblVwZGF0ZSIsInRhYmxlQ29uZmlnIiwiVGFibGVDb25maWdTdG9yYWdlIiwiaW5pdCIsIm9wZW5GaWx0ZXJzIiwiY2xvc2VGaWx0ZXJzIiwiZmlsdGVycyIsInJvdyIsIkN1c3RvbUV2ZW50IiwiY29uZmlybWF0aW9uVGV4dCIsImFqYXhMb2FkIiwidG9nZ2xlVHJlZUl0ZW0iLCJvcGVuZWQiLCJ0b2dnbGVDaGlsZHJlblJvd3MiLCJjbG9zZVJvdyIsIm9wZW5Sb3ciLCJwYXJlbnRJZCIsImJyYW5jaE9wZW5lZCIsInBhcmVudCIsInJvd3MiLCJpc09wZW5lZFJvdyIsImxpbmsiLCJmb3JtIiwiZ2V0QXR0cmlidXRlIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJvcHRpb25zIiwibm9kZSIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImNoaWxkTm9kZXMiLCJyZXBsYWNlV2l0aCIsImNoZWNrYm94IiwiRXZlbnRUYXJnZXQiLCJ0YWJsZUlkIiwiY29uZmlnIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9wZW5lZFJvd3MiLCJmbHVzaCIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9