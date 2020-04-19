webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date */ "./components/date.js");
/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-image */ "./components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Proyectos\\htarg.github.io\\components\\hero-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeroPost(_ref) {
  var title = _ref.title,
      coverImage = _ref.coverImage,
      date = _ref.date,
      excerpt = _ref.excerpt,
      author = _ref.author,
      slug = _ref.slug;
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mb-8 md:mb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    src: coverImage,
    slug: slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "mb-4 text-4xl lg:text-6xl leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: "/posts/".concat(slug),
    href: "/posts/[slug]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "hover:underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, title))), __jsx("div", {
    className: "mb-4 md:mb-0 text-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-lg leading-relaxed mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, excerpt), __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: author.name,
    picture: author.picture,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_more_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/more-stories */ "./components/more-stories.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_hero_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero-post */ "./components/hero-post.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Proyectos\\htarg.github.io\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var __N_SSG = true;
function Index(_ref) {
  var allPosts = _ref.allPosts;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Hattrick Argentina")), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_components_hero_post__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, allPosts.length > 0 && __jsx(_components_more_stories__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: allPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 35
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.2dc0e2a8c162cda1a7e2.hot-update.js.map