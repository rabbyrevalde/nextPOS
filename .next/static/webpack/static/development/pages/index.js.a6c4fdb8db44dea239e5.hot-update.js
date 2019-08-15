webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/categories */ "./data/categories.json");
var _data_categories__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/categories */ "./data/categories.json", 1);
var _jsxFileName = "/Users/olainjohn/Desktop/POS/pages/index.js";

// import React, { Component } from "react";





function convertToSlug(Text) {
  return Text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

var CategoryLink = function CategoryLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(convertToSlug(props.slug)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "category-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "categories container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _data_categories__WEBPACK_IMPORTED_MODULE_4__.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "category",
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryLink, {
      slug: item.category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "total-item-per-cat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, item.items.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "category-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.category));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.a6c4fdb8db44dea239e5.hot-update.js.map