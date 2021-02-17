module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+zoZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return REGISTER_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return REGISTER_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return REGISTER_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOGIN_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOGIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOGIN_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LOGOUT_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LOGOUT_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOGOUT_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTHENTICATE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AUTHENTICATE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHENTICATE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CONFIRM_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONFIRM_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CONFIRM_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EDIT_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return EDIT_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDIT_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return UPLOAD_USER_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return UPLOAD_USER_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return UPLOAD_USER_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CREATE_BLOG_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CREATE_BLOG_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CREATE_BLOG_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return RESET_CREATE_BLOG_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_BLOG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_BLOG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_BLOG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return RESET_LOAD_BLOG_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_BLOG_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_BLOG_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_BLOG_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return UPLOAD_BLOG_DATASET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UPLOAD_BLOG_DATASET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_BLOG_DATASET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return RESET_UPLOAD_BLOG_DATASET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return POST_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return POST_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return POST_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_COMMENTS_FAILURE; });
//============================================
//                    User
//============================================
const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';
const AUTHENTICATE_USER_REQUEST = 'AUTHENTICATE_USER_REQUEST';
const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';
const CONFIRM_USER_REQUEST = 'CONFIRM_USER_REQUEST';
const CONFIRM_USER_SUCCESS = 'CONFIRM_USER_SUCCESS';
const CONFIRM_USER_FAILURE = 'CONFIRM_USER_FAILURE';
const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';
const UPLOAD_USER_IMAGE_REQUEST = 'UPLOAD_USER_IMAGE_REQUEST';
const UPLOAD_USER_IMAGE_SUCCESS = 'UPLOAD_USER_IMAGE_SUCCESS';
const UPLOAD_USER_IMAGE_FAILURE = 'UPLOAD_USER_IMAGE_FAILURE'; //=========================================
//                 Blog
//=========================================

const CREATE_BLOG_POST_REQUEST = 'CREATE_BLOG_POST_REQUEST';
const CREATE_BLOG_POST_SUCCESS = 'CREATE_BLOG_POST_SUCCESS';
const CREATE_BLOG_POST_FAILURE = 'CREATE_BLOG_POST_FAILURE';
const RESET_CREATE_BLOG_POST = 'RESET_CREATE_BLOG_POST';
const LOAD_BLOG_POSTS_REQUEST = 'LOAD_BLOG_POSTS_REQUEST';
const LOAD_BLOG_POSTS_SUCCESS = 'LOAD_BLOG_POSTS_SUCCESS';
const LOAD_BLOG_POSTS_FAILURE = 'LOAD_BLOG_POSTS_FAILURE';
const RESET_LOAD_BLOG_POSTS = 'RESET_LOAD_BLOG_POSTS';
const LOAD_BLOG_POST_REQUEST = 'LOAD_BLOG_POST_REQUEST';
const LOAD_BLOG_POST_SUCCESS = 'LOAD_BLOG_POST_SUCCESS';
const LOAD_BLOG_POST_FAILURE = 'LOAD_BLOG_POST_FAILURE';
const UPLOAD_BLOG_DATASET_REQUEST = 'UPLOAD_BLOG_DATASET_REQUEST';
const UPLOAD_BLOG_DATASET_SUCCESS = 'UPLOAD_BLOG_DATASET_SUCCESS';
const UPLOAD_BLOG_DATASET_FAILURE = 'UPLOAD_BLOG_DATASET_FAILURE';
const RESET_UPLOAD_BLOG_DATASET = 'RESET_UPLOAD_BLOG_DATASET'; //=========================================
//                 Comment
//=========================================

const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE';
const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pEZS");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jvO9");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_navBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pQZv");
/* harmony import */ var _css_navBar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_navBar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("91UR");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_storeConfiguration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tW3d");












function App({
  Component
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "\uC815\uACBD\uD558(JustinJeong)"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, {})]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_store_storeConfiguration__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_3___default()(App)));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "91UR":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "NRfZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_URL", function() { return IMAGE_URL; });
const SERVER_URL = 'https://immense-thicket-09423.herokuapp.com'; //=======================================
//                 MOVIE
//=======================================

const API_KEY = '8fdaeec1ff01b8e3ee6edcef29225847';
const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p';

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cXjb":
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__("NRfZ");
} else {}

/***/ }),

/***/ "jvO9":
/***/ (function(module, exports) {



/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pQZv":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tW3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// EXTERNAL MODULE: ./reducers/types.js
var types = __webpack_require__("+zoZ");

// CONCATENATED MODULE: ./reducers/user.js


const initialState = {
  currentUser: {},
  registerUserLoading: false,
  registerUserDone: false,
  registerUserError: null,
  loginUserLoading: false,
  loginUserDone: false,
  loginUserError: null,
  logoutUserLoading: false,
  logoutUserDone: false,
  logoutUserError: null,
  authenticateUserLoading: false,
  authenticateUserDone: false,
  authenticateUserError: null,
  confirmUserLoading: false,
  confirmUserDone: false,
  confirmUserError: null,
  editUserLoading: false,
  editUserDone: false,
  editUserError: null,
  uploadUserImageLoading: false,
  uploadUserImageDone: false,
  uploadUserImageError: null
};

const user = (state = initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case types["F" /* REGISTER_USER_REQUEST */]:
        draft.registerUserLoading = true;
        draft.registerUserDone = false;
        draft.registerUserError = null;
        break;

      case types["G" /* REGISTER_USER_SUCCESS */]:
        draft.registerUserLoading = false;
        draft.registerUserDone = true;
        break;

      case types["E" /* REGISTER_USER_FAILURE */]:
        draft.registerUserLoading = false;
        draft.registerUserError = action.error;
        break;

      case types["w" /* LOGIN_USER_REQUEST */]:
        draft.loginUserLoading = true;
        draft.loginUserDone = false;
        draft.loginUserError = null;
        break;

      case types["x" /* LOGIN_USER_SUCCESS */]:
        draft.loginUserLoading = false;
        draft.loginUserDone = true;
        draft.currentUser.userId = action.payload.userId;
        break;

      case types["v" /* LOGIN_USER_FAILURE */]:
        draft.loginUserLoading = false;
        draft.loginUserError = action.error;
        break;

      case types["z" /* LOGOUT_USER_REQUEST */]:
        draft.logoutUserLoading = true;
        draft.logoutUserDone = false;
        draft.logoutUserError = null;
        break;

      case types["A" /* LOGOUT_USER_SUCCESS */]:
        draft.logoutUserLoading = false;
        draft.logoutUserDone = true;
        draft.currentUser = {};
        break;

      case types["y" /* LOGOUT_USER_FAILURE */]:
        draft.logoutUserLoading = false;
        draft.logoutUserError = action.error;
        break;

      case types["b" /* AUTHENTICATE_USER_REQUEST */]:
        draft.authenticateUserLoading = true;
        draft.authenticateUserDone = false;
        draft.authenticateUserError = null;
        break;

      case types["c" /* AUTHENTICATE_USER_SUCCESS */]:
        draft.currentUser = action.payload.user;
        draft.authenticateUserLoading = false;
        draft.authenticateUserDone = true;
        draft.registerUserLoading = false;
        draft.registerUserDone = false;
        draft.registerUserError = null;
        draft.loginUserLoading = false;
        draft.loginUserDone = false;
        draft.loginUserError = null;
        draft.logoutUserLoading = false;
        draft.logoutUserDone = false;
        draft.logoutUserError = null;
        draft.confirmUserLoading = false;
        draft.confirmUserDone = false;
        draft.confirmUserError = null;
        draft.editUserLoading = false;
        draft.editUserDone = false;
        draft.editUserError = null;
        break;

      case types["a" /* AUTHENTICATE_USER_FAILURE */]:
        draft.currentUser = action.error.user;
        draft.authenticateUserLoading = false;
        draft.authenticateUserError = action.error.err;
        break;

      case types["e" /* CONFIRM_USER_REQUEST */]:
        draft.confirmUserLoading = true;
        draft.confirmUserDone = false;
        draft.confirmUserError = null;
        break;

      case types["f" /* CONFIRM_USER_SUCCESS */]:
        draft.confirmUserLoading = false;
        draft.confirmUserDone = true;
        break;

      case types["d" /* CONFIRM_USER_FAILURE */]:
        draft.confirmUserLoading = false;
        draft.confirmUserError = action.error;
        break;

      case types["k" /* EDIT_USER_REQUEST */]:
        draft.editUserLoading = true;
        draft.editUserDone = false;
        draft.editUserError = null;
        break;

      case types["l" /* EDIT_USER_SUCCESS */]:
        draft.editUserLoading = false;
        draft.editUserDone = true;
        draft.currentUser.isAuth = true;
        break;

      case types["j" /* EDIT_USER_FAILURE */]:
        draft.editUserLoading = false;
        draft.editUserError = action.error;
        break;

      case types["O" /* UPLOAD_USER_IMAGE_REQUEST */]:
        draft.uploadUserImageLoading = true;
        draft.uploadUserImageDone = false;
        draft.uploadUserImageError = null;
        break;

      case types["P" /* UPLOAD_USER_IMAGE_SUCCESS */]:
        draft.uploadUserImageLoading = false;
        draft.uploadUserImageDone = true;
        draft.currentUser.image = action.payload.url;
        break;

      case types["N" /* UPLOAD_USER_IMAGE_FAILURE */]:
        draft.uploadUserImageLoading = false;
        draft.uploadUserImageError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var reducers_user = (user);
// CONCATENATED MODULE: ./reducers/blog.js


const blog_initialState = {
  currentBlogPost: {
    writer: {}
  },
  blogPosts: [],
  uploadDataset: {
    files: []
  },
  message: '',
  noMorePosts: false,
  skip: 0,
  limit: 6,
  createBlogPostLoading: false,
  createBlogPostDone: false,
  createBlogPostError: null,
  loadBlogPostsLoading: false,
  loadBlogPostsDone: false,
  loadBlogPostsError: null,
  loadBlogPostLoading: false,
  loadBlogPostDone: false,
  loadBlogPostError: null,
  uploadBlogDatasetLoading: false,
  uploadBlogDatasetDone: false,
  uploadBlogDatasetError: null
};

const blog = (state = blog_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case types["h" /* CREATE_BLOG_POST_REQUEST */]:
        draft.createBlogPostLoading = true;
        draft.createBlogPostDone = false;
        draft.createBlogPostError = null;
        break;

      case types["i" /* CREATE_BLOG_POST_SUCCESS */]:
        draft.createBlogPostLoading = false;
        draft.createBlogPostDone = true;
        draft.blogPosts.push(action.payload.blog);
        draft.message = action.payload.message;
        break;

      case types["g" /* CREATE_BLOG_POST_FAILURE */]:
        draft.createBlogPostLoading = false;
        draft.createBlogPostError = action.error.code;
        draft.message = action.error.message;
        break;

      case types["H" /* RESET_CREATE_BLOG_POST */]:
        draft.createBlogPostLoading = false;
        draft.createBlogPostDone = false;
        draft.createBlogPostError = null;
        draft.message = '블로그 작성이 정상적으로 초기화되었습니다.';
        break;

      case types["n" /* LOAD_BLOG_POSTS_REQUEST */]:
        draft.loadBlogPostsLoading = true;
        draft.loadBlogPostsDone = false;
        draft.loadBlogPostsError = null;
        break;

      case types["o" /* LOAD_BLOG_POSTS_SUCCESS */]:
        draft.loadBlogPostsLoading = false;
        draft.loadBlogPostsDone = true;
        draft.message = action.payload.message;
        draft.blogPosts.push(...action.payload.blogs);
        draft.noMorePosts = action.noMorePosts;
        draft.skip += draft.limit;
        break;

      case types["m" /* LOAD_BLOG_POSTS_FAILURE */]:
        draft.loadBlogPostsLoading = false;
        draft.loadBlogPostsError = action.error.code;
        draft.message = action.error.message;
        break;

      case types["I" /* RESET_LOAD_BLOG_POSTS */]:
        draft.loadBlogPostsLoading = false;
        draft.loadBlogPostsDone = false;
        draft.loadBlogPostsError = null;
        draft.blogPosts = [];
        draft.noMorePosts = false;
        draft.skip = 0;
        draft.limit = 6;
        draft.message = '블로그 목록이 정상적으로 초기화되었습니다.';
        break;

      case types["q" /* LOAD_BLOG_POST_REQUEST */]:
        draft.loadBlogPostLoading = true;
        draft.loadBlogPostDone = false;
        draft.loadBlogPostError = null;
        break;

      case types["r" /* LOAD_BLOG_POST_SUCCESS */]:
        draft.loadBlogPostLoading = false;
        draft.loadBlogPostDone = true;
        draft.message = action.payload.message;
        draft.currentBlogPost._id = action.payload.blog._id;
        draft.currentBlogPost.title = action.payload.blog.title;
        draft.currentBlogPost.content = action.payload.blog.content;
        draft.currentBlogPost.createdAt = action.payload.blog.createdAt;
        draft.currentBlogPost.writer.userId = action.payload.blog.writer._id;
        draft.currentBlogPost.writer.name = action.payload.blog.writer.name;
        draft.currentBlogPost.writer.email = action.payload.blog.writer.email;
        draft.currentBlogPost.writer.image = action.payload.blog.writer.image;
        break;

      case types["p" /* LOAD_BLOG_POST_FAILURE */]:
        draft.loadBlogPostLoading = false;
        draft.loadBlogPostError = action.error.code;
        draft.message = action.error.message;
        break;

      case types["L" /* UPLOAD_BLOG_DATASET_REQUEST */]:
        draft.uploadBlogDatasetLoading = true;
        draft.uploadBlogDatasetDone = false;
        draft.uploadBlogDatasetError = null;
        break;

      case types["M" /* UPLOAD_BLOG_DATASET_SUCCESS */]:
        draft.uploadBlogDatasetLoading = false;
        draft.uploadBlogDatasetDone = true;
        draft.uploadDataset.url = action.payload.url;
        draft.uploadDataset.fileName = action.payload.fileName;
        draft.uploadDataset.dataType = action.payload.dataType;
        draft.uploadDataset.files.push(action.payload.file);
        draft.message = action.payload.message;
        break;

      case types["K" /* UPLOAD_BLOG_DATASET_FAILURE */]:
        draft.uploadBlogDatasetLoading = false;
        draft.uploadBlogDatasetError = action.error.code;
        draft.message = action.error.message;
        break;

      case types["J" /* RESET_UPLOAD_BLOG_DATASET */]:
        draft.uploadBlogDatasetLoading = false;
        draft.uploadBlogDatasetDone = false;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var reducers_blog = (blog);
// CONCATENATED MODULE: ./reducers/comment.js


const comment_initialState = {
  commentList: [],
  message: '',
  postCommentLoading: false,
  postCommentDone: false,
  postCommentError: null,
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null
};

const comment = (state = comment_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case types["C" /* POST_COMMENT_REQUEST */]:
        draft.postCommentLoading = true;
        draft.postCommentDone = false;
        draft.postCommentError = null;
        break;

      case types["D" /* POST_COMMENT_SUCCESS */]:
        draft.postCommentLoading = false;
        draft.postCommentDone = true;
        draft.message = action.payload.message;
        draft.commentList.push(action.payload.comment);
        break;

      case types["B" /* POST_COMMENT_FAILURE */]:
        draft.postCommentLoading = false;
        draft.postCommentError = action.error.code;
        draft.message = action.error.message;
        break;

      case types["t" /* LOAD_COMMENTS_REQUEST */]:
        draft.loadCommentsLoading = true;
        draft.loadCommentsDone = false;
        draft.loadCommentsError = null;
        break;

      case types["u" /* LOAD_COMMENTS_SUCCESS */]:
        draft.loadCommentsLoading = false;
        draft.loadCommentsDone = true;
        draft.message = action.payload.message;
        draft.commentList = action.payload.comments;
        break;

      case types["s" /* LOAD_COMMENTS_FAILURE */]:
        draft.loadCommentsLoading = false;
        draft.loadCommentsError = action.error.code;
        draft.message = action.error.message;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var reducers_comment = (comment);
// CONCATENATED MODULE: ./reducers/index.js






const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: reducers_user,
          blog: reducers_blog,
          comment: reducers_comment
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./config/key.js
var key = __webpack_require__("cXjb");

// CONCATENATED MODULE: ./sagas/user.js




function registerAPI(data) {
  return external_axios_default.a.post('/api/user/register', data);
}

function* register(action) {
  try {
    const result = yield Object(effects_["call"])(registerAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["G" /* REGISTER_USER_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["E" /* REGISTER_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function loginAPI(data) {
  return external_axios_default.a.post('/api/user/login', data);
}

function* login(action) {
  try {
    const result = yield Object(effects_["call"])(loginAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["x" /* LOGIN_USER_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["v" /* LOGIN_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function logoutAPI() {
  return external_axios_default.a.get('/api/user/logout');
}

function* logout() {
  try {
    const result = yield Object(effects_["call"])(logoutAPI);
    yield Object(effects_["put"])({
      type: types["A" /* LOGOUT_USER_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["y" /* LOGOUT_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function authenticateAPI() {
  return external_axios_default.a.get('/api/user/auth');
}

function* authenticate() {
  try {
    const result = yield Object(effects_["call"])(authenticateAPI);
    yield Object(effects_["put"])({
      type: types["c" /* AUTHENTICATE_USER_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["a" /* AUTHENTICATE_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function confirmAPI(data) {
  return external_axios_default.a.post('/api/user/confirm', data);
}

function* user_confirm(action) {
  try {
    const result = yield Object(effects_["call"])(confirmAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["f" /* CONFIRM_USER_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["d" /* CONFIRM_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function editAPI(data) {
  return external_axios_default.a.post('/api/user/edit', data);
}

function* edit(action) {
  try {
    const result = yield Object(effects_["call"])(editAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["l" /* EDIT_USER_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["j" /* EDIT_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function uploadUserImageAPI(data) {
  return external_axios_default.a.post('/api/user/editImage', data.formData, data.config);
}

function* uploadUserImage(action) {
  try {
    const result = yield Object(effects_["call"])(uploadUserImageAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["P" /* UPLOAD_USER_IMAGE_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["N" /* UPLOAD_USER_IMAGE_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchRegister() {
  yield Object(effects_["takeLatest"])(types["F" /* REGISTER_USER_REQUEST */], register);
}

function* watchLogin() {
  yield Object(effects_["takeLatest"])(types["w" /* LOGIN_USER_REQUEST */], login);
}

function* watchLogout() {
  yield Object(effects_["takeLatest"])(types["z" /* LOGOUT_USER_REQUEST */], logout);
}

function* watchAuthenticate() {
  yield Object(effects_["takeLatest"])(types["b" /* AUTHENTICATE_USER_REQUEST */], authenticate);
}

function* watchConfirm() {
  yield Object(effects_["takeLatest"])(types["e" /* CONFIRM_USER_REQUEST */], user_confirm);
}

function* watchEdit() {
  yield Object(effects_["takeLatest"])(types["k" /* EDIT_USER_REQUEST */], edit);
}

function* watchUploadUserImage() {
  yield Object(effects_["takeLatest"])(types["O" /* UPLOAD_USER_IMAGE_REQUEST */], uploadUserImage);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchRegister), Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogout), Object(effects_["fork"])(watchAuthenticate), Object(effects_["fork"])(watchEdit), Object(effects_["fork"])(watchConfirm), Object(effects_["fork"])(watchUploadUserImage)]);
}
// CONCATENATED MODULE: ./sagas/blog.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function createPostAPI(data) {
  return external_axios_default.a.post('/api/blog/createPost', data);
}

function* createPost(action) {
  try {
    const result = yield Object(effects_["call"])(createPostAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["i" /* CREATE_BLOG_POST_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["g" /* CREATE_BLOG_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function loadPostsAPI(data) {
  return external_axios_default.a.post('/api/blog/blogs', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.payload);
    let noMore = false;

    if (result.data.blogs.length % 6 || result.data.blogs.length === 0) {
      noMore = true;
    }

    yield Object(effects_["put"])({
      type: types["o" /* LOAD_BLOG_POSTS_SUCCESS */],
      payload: result.data,
      noMorePosts: noMore
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["m" /* LOAD_BLOG_POSTS_FAILURE */],
      error: error.response.data
    });
  }
}

function loadPostAPI(data) {
  return external_axios_default.a.get(`/api/blog/${data.postId}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["r" /* LOAD_BLOG_POST_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["p" /* LOAD_BLOG_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function uploadDatasetAPI(data) {
  return external_axios_default.a.post(`/api/blog/uploadDataset`, data.formData, data.config);
}

function* uploadDataset(action) {
  try {
    const result = yield Object(effects_["call"])(uploadDatasetAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["M" /* UPLOAD_BLOG_DATASET_SUCCESS */],
      payload: _objectSpread(_objectSpread({}, result.data), {}, {
        file: action.payload.file,
        dataType: action.payload.dataType
      })
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["K" /* UPLOAD_BLOG_DATASET_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchCreatePost() {
  yield Object(effects_["takeLatest"])(types["h" /* CREATE_BLOG_POST_REQUEST */], createPost);
}

function* watchLoadPosts() {
  yield Object(effects_["takeLatest"])([types["n" /* LOAD_BLOG_POSTS_REQUEST */], types["I" /* RESET_LOAD_BLOG_POSTS */]], loadPosts);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(types["q" /* LOAD_BLOG_POST_REQUEST */], loadPost);
}

function* watchUploadDataset() {
  yield Object(effects_["takeLatest"])(types["L" /* UPLOAD_BLOG_DATASET_REQUEST */], uploadDataset);
}

function* blogSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchCreatePost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchUploadDataset)]);
}
// CONCATENATED MODULE: ./sagas/comment.js




function saveCommentAPI(data) {
  return external_axios_default.a.post('/api/comment/save', data);
}

function* saveComment(action) {
  try {
    const result = yield Object(effects_["call"])(saveCommentAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["D" /* POST_COMMENT_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["B" /* POST_COMMENT_FAILURE */],
      error: error.response.data
    });
  }
}

function loadCommentsAPI(data) {
  return external_axios_default.a.post('/api/comment/comments', data);
}

function* loadComments(action) {
  try {
    const result = yield Object(effects_["call"])(loadCommentsAPI, action.payload);
    yield Object(effects_["put"])({
      type: types["u" /* LOAD_COMMENTS_SUCCESS */],
      payload: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: types["s" /* LOAD_COMMENTS_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchSaveComment() {
  yield Object(effects_["takeLatest"])(types["C" /* POST_COMMENT_REQUEST */], saveComment);
}

function* watchLoadComments() {
  yield Object(effects_["takeLatest"])(types["t" /* LOAD_COMMENTS_REQUEST */], loadComments);
}

function* commentSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchSaveComment), Object(effects_["fork"])(watchLoadComments)]);
}
// CONCATENATED MODULE: ./sagas/index.js






external_axios_default.a.defaults.baseURL = key["SERVER_URL"];
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(blogSaga), Object(effects_["fork"])(commentSaga)]);
}
// CONCATENATED MODULE: ./store/storeConfiguration.js







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(sagaMiddleware)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var storeConfiguration = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });