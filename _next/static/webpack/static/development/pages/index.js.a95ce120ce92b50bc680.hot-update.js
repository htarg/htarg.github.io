webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/more-stories.js":
/*!************************************!*\
  !*** ./components/more-stories.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoreStories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/post-preview */ "./components/post-preview.js");
var _jsxFileName = "D:\\Proyectos\\htarg.github.io\\components\\more-stories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function MoreStories(_ref) {
  var _this = this;

  var posts = _ref.posts;
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Art\xEDculos del Blog"), __jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, posts.map(function (post) {
    return __jsx(_components_post_preview__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: post.slug,
      title: post.title,
      coverImage: post.coverImage,
      date: post.date,
      author: post.author,
      slug: post.slug,
      excerpt: post.excerpt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.a95ce120ce92b50bc680.hot-update.js.map