webpackHotUpdate("static\\development\\pages\\posts\\[slug].js",{

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./components/date.js");
var _jsxFileName = "D:\\Proyectos\\htarg.github.io\\components\\avatar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Avatar(_ref) {
  var name = _ref.name,
      picture = _ref.picture,
      date = _ref.date;
  console.log(date);
  return __jsx("div", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: picture,
    className: "w-12 h-auto mr-4",
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Escrito por ", __jsx("span", {
    className: "text-l font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 24
    }
  }, name), " el ", __jsx(_date__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dateString: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 76
    }
  })));
}

/***/ })

})
//# sourceMappingURL=[slug].js.dbb5dd9d412b24c7d020.hot-update.js.map