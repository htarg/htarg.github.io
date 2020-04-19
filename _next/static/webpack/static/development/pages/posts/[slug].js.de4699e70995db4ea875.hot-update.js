webpackHotUpdate("static\\development\\pages\\posts\\[slug].js",{

/***/ "./components/post-header.js":
/*!***********************************!*\
  !*** ./components/post-header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cover-image */ "./components/cover-image.js");
/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post-title */ "./components/post-title.js");
var _jsxFileName = "D:\\Proyectos\\htarg.github.io\\components\\post-header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PostHeader(_ref) {
  var title = _ref.title,
      coverImage = _ref.coverImage,
      date = _ref.date,
      author = _ref.author;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_post_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "hidden md:block md:mb-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: author.name,
    picture: author.picture,
    date: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "max-w-2xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "block md:hidden mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: author.name,
    picture: author.picture,
    date: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "mb-8 md:mb-16 -mx-5 sm:mx-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    src: coverImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=[slug].js.de4699e70995db4ea875.hot-update.js.map