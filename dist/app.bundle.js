/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/water.jpg */ "./src/images/water.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;

  font-family: "Roboto", sans-serif;
}

body {
  padding: 0;
  margin: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.tile-list {
  display: flex;
  flex-wrap: wrap;
  width: 42.7rem;
  gap: 0.3rem;
}

.tile {
  flex: 0 0 auto;

  box-sizing: border-box;
  width: 4rem;
  height: 4rem;
  border: solid 1px black;
  border-radius: 5px;
}

.tile.neutral {
  background-color: transparent;
}

.tile.sunk {
  background-color: rgb(110, 15, 15);
}

.tile.hit {
  background-color: rgb(205, 30, 30);
}

.tile.miss {
  background-color: white;
}

.tile.ship {
  background-color: rgb(160, 160, 160);
}

.game {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
}

.labeled-game-board-list {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.labeled-game-board {
  padding: 1rem;
}

.player-name {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.game-result {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;

  width: 100vw;
  height: 100vh;

  font-size: 5rem;
  color: white;

  backdrop-filter: blur(3px) brightness(50%);
}

.ship-placement-phase-display,
.battle-phase-display .labeled-game-board {
  backdrop-filter: blur(100px);
  border-radius: 5px;
}

.ship-placement-dropdown-group {
  display: flex;
  gap: 1rem;

  padding: 1rem;
}

select {
  padding: 10px 5px;
  border-radius: 5px;
  border: solid 1px white;
  font-size: 1rem;
  background: transparent;
}

select:focus {
  border-color: forestgreen;
  outline: none;
  box-shadow: var(--standard-box-shadow);
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;EACE,qDAAqD;;EAErD,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,yDAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;;EAEd,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;;EAEX,YAAY;EACZ,aAAa;;EAEb,eAAe;EACf,YAAY;;EAEZ,0CAA0C;AAC5C;;AAEA;;EAEE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;;EAET,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sCAAsC;AACxC","sourcesContent":["@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);\n\n:root {\n  --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;\n\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-image: url(../images/water.jpg);\n}\n\n.tile-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 42.7rem;\n  gap: 0.3rem;\n}\n\n.tile {\n  flex: 0 0 auto;\n\n  box-sizing: border-box;\n  width: 4rem;\n  height: 4rem;\n  border: solid 1px black;\n  border-radius: 5px;\n}\n\n.tile.neutral {\n  background-color: transparent;\n}\n\n.tile.sunk {\n  background-color: rgb(110, 15, 15);\n}\n\n.tile.hit {\n  background-color: rgb(205, 30, 30);\n}\n\n.tile.miss {\n  background-color: white;\n}\n\n.tile.ship {\n  background-color: rgb(160, 160, 160);\n}\n\n.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 100vh;\n}\n\n.labeled-game-board-list {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n}\n\n.labeled-game-board {\n  padding: 1rem;\n}\n\n.player-name {\n  text-align: center;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.game-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n\n  width: 100vw;\n  height: 100vh;\n\n  font-size: 5rem;\n  color: white;\n\n  backdrop-filter: blur(3px) brightness(50%);\n}\n\n.ship-placement-phase-display,\n.battle-phase-display .labeled-game-board {\n  backdrop-filter: blur(100px);\n  border-radius: 5px;\n}\n\n.ship-placement-dropdown-group {\n  display: flex;\n  gap: 1rem;\n\n  padding: 1rem;\n}\n\nselect {\n  padding: 10px 5px;\n  border-radius: 5px;\n  border: solid 1px white;\n  font-size: 1rem;\n  background: transparent;\n}\n\nselect:focus {\n  border-color: forestgreen;\n  outline: none;\n  box-shadow: var(--standard-box-shadow);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/water.jpg":
/*!******************************!*\
  !*** ./src/images/water.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2443b6c542c565175f9f.jpg";

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberUtils.js */ "./src/js/NumberUtils.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");



class Game {
  player1;
  player2;
  currentTurn;

  constructor() {
    this.player1 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Player 1", true);
    this.player2 = new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Computer", false);

    this.currentTurn = 0;
  }

  nextTurn() {
    if (this.hasUnplacedShips() || !this.isOver()) {
      this.currentTurn = (this.currentTurn + 1) % 2;
    }

    const currentPlayer = this.getCurrentPlayer();
    if (!currentPlayer.isHuman) {
      if (this.hasUnplacedShips()) {
        this.#performComputerShipPlacements(currentPlayer);
        this.nextTurn();
      } else if (!this.isOver()) {
        if (this.currentTurn === 0) {
          this.#performComputerMove(this.player2.gameBoard);
          this.nextTurn();
        } else if (this.currentTurn === 1) {
          this.#performComputerMove(this.player1.gameBoard);
          this.nextTurn();
        }
      }
    }
  }

  getCurrentPlayer() {
    if (this.currentTurn === 0) {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  #getCurrentPlayerOpponent() {
    if (this.currentTurn === 0) {
      return this.player2;
    } else {
      return this.player1;
    }
  }

  #performComputerShipPlacements(player) {
    const orientationOptions = ["horizontal", "vertical"];

    for (let i = 0; i < player.unplacedShips.length; i++) {
      const orientationIndex = _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(
        0,
        orientationOptions.length - 1
      );
      let randomX = _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(
        0,
        player.gameBoard.getGameBoardWidth()
      );
      let randomY = _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(
        0,
        player.gameBoard.getGameBoardHeight()
      );
      while (
        !player.gameBoard.placeShip(
          [randomX, randomY],
          player.unplacedShips[i].length,
          orientationOptions[orientationIndex]
        )
      ) {
        randomX = _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(
          0,
          player.gameBoard.getGameBoardWidth()
        );
        randomY = _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(
          0,
          player.gameBoard.getGameBoardHeight()
        );
      }
    }
    player.unplacedShips = new Array();
  }

  #performComputerMove(gameBoard) {
    const hasAttackBeenPerformed =
      gameBoard.lastCoordinatesAttacked[0] !== -1 &&
      gameBoard.lastCoordinatesAttacked[1] !== -1;
    const isLastAttackMiss =
      gameBoard.lastCoordinatesAttacked[0] !== -1 &&
      gameBoard.lastCoordinatesAttacked[1] !== -1 &&
      !gameBoard.doesShipExist(gameBoard.lastCoordinatesAttacked);
    const isAttackInProgress =
      gameBoard.lastHit[0] !== -1 &&
      gameBoard.lastHit[1] !== -1 &&
      !gameBoard.isShipSunk(gameBoard.lastHit);
    const didLastAttackSinkShip =
      gameBoard.lastCoordinatesAttacked[0] !== -1 &&
      gameBoard.lastCoordinatesAttacked[1] !== -1 &&
      gameBoard.isShipSunk(gameBoard.lastCoordinatesAttacked);

    if (
      !hasAttackBeenPerformed ||
      (isLastAttackMiss && !isAttackInProgress) ||
      didLastAttackSinkShip
    ) {
      gameBoard.receiveAttack(this.#generateRandomAttackCoordinates(gameBoard));
    } else {
      const lastHitAdjacentHits = gameBoard.getAdjacentHits(gameBoard.lastHit);
      const validLastHitAdjacentHits = lastHitAdjacentHits.filter(
        (coordinates) =>
          coordinates !== null && !gameBoard.isShipSunk(coordinates)
      );
      if (validLastHitAdjacentHits.length === 0) {
        gameBoard.receiveAttack(
          this.#selectRandomAdjacentCoordinatesForAttack(
            gameBoard,
            gameBoard.lastHit
          )
        );
      } else {
        gameBoard.receiveAttack(
          this.#selectCoordinatesForAttackByAttackPath(
            gameBoard,
            lastHitAdjacentHits
          )
        );
      }
    }
  }

  #generateRandomAttackCoordinates(gameBoard) {
    const eligibleColumns = new Array();
    for (let i = 0; i < gameBoard.getGameBoardWidth(); i++) {
      if (gameBoard.getNumNotAttackedSpacesInColumn(i) > 0) {
        eligibleColumns.push(i);
      }
    }

    const randomX =
      eligibleColumns[
        _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(0, eligibleColumns.length - 1)
      ];

    const eligibleRows = new Array();
    for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
      if (!gameBoard.areCoordinatesAttacked([randomX, i])) {
        eligibleRows.push(i);
      }
    }

    const randomY =
      eligibleRows[
        _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(0, eligibleRows.length - 1)
      ];

    return [randomX, randomY];
  }

  #selectRandomAdjacentCoordinatesForAttack(gameBoard, startingCoordinates) {
    const adjacentCoordinates =
      gameBoard.getAdjacentCoordinates(startingCoordinates);
    const validAdjacentCoordinates = adjacentCoordinates.filter(
      (coordinates) =>
        coordinates !== null && !gameBoard.areCoordinatesAttacked(coordinates)
    );

    return validAdjacentCoordinates[
      _NumberUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomIntegerInRange(
        0,
        validAdjacentCoordinates.length - 1
      )
    ];
  }

  #selectCoordinatesForAttackByAttackPath(gameBoard, lastHitAdjacentHits) {
    let directionCounter = 0;
    while (
      directionCounter < lastHitAdjacentHits.length &&
      (lastHitAdjacentHits[directionCounter] === null ||
        gameBoard.isShipSunk(lastHitAdjacentHits[directionCounter]))
    ) {
      directionCounter++;
    }
    const oppositeDirectionCounter =
      (directionCounter + 2) % lastHitAdjacentHits.length;
    const perpendicularDirectionCounter =
      (directionCounter + 1) % lastHitAdjacentHits.length;
    const oppositePerpendicularDirectionCounter =
      (perpendicularDirectionCounter + 2) % lastHitAdjacentHits.length;

    const lastHitAdjacentCoordinates = gameBoard.getAdjacentCoordinates(
      gameBoard.lastHit
    );

    const attackOption1 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentHits[directionCounter],
      directionCounter
    );
    const attackOption2 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentCoordinates[oppositeDirectionCounter],
      oppositeDirectionCounter
    );
    const attackOption3 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentCoordinates[perpendicularDirectionCounter],
      perpendicularDirectionCounter
    );
    const attackOption4 = this.#traverseAttackPath(
      gameBoard,
      lastHitAdjacentCoordinates[oppositePerpendicularDirectionCounter],
      oppositePerpendicularDirectionCounter
    );

    if (attackOption1 !== null) {
      return attackOption1;
    } else if (attackOption2 !== null) {
      return attackOption2;
    } else if (attackOption3 !== null) {
      return attackOption3;
    } else {
      return attackOption4;
    }
  }

  #traverseAttackPath(gameBoard, startingCoordinates, direction) {
    if (
      startingCoordinates === null ||
      (gameBoard.areCoordinatesAttacked(startingCoordinates) &&
        (!gameBoard.doesShipExist(startingCoordinates) ||
          gameBoard.isShipSunk(startingCoordinates)))
    ) {
      return null;
    } else if (
      startingCoordinates !== null &&
      !gameBoard.areCoordinatesAttacked(startingCoordinates)
    ) {
      return startingCoordinates;
    }

    return this.#traverseAttackPath(
      gameBoard,
      gameBoard.getAdjacentCoordinates(startingCoordinates)[direction],
      direction
    );
  }

  placeShip(coordinates, unplacedShipIndex, orientation) {
    const currentPlayer = this.getCurrentPlayer();

    const success = currentPlayer.gameBoard.placeShip(
      coordinates,
      currentPlayer.unplacedShips[unplacedShipIndex].length,
      orientation
    );

    if (success) {
      currentPlayer.unplacedShips.splice(unplacedShipIndex, 1);
      if (!currentPlayer.hasUnplacedShips()) {
        this.nextTurn();
      }
    }

    return success;
  }

  receiveAttack(coordinates) {
    const currentPlayerOpponent = this.#getCurrentPlayerOpponent();
    if (currentPlayerOpponent.gameBoard.receiveAttack(coordinates)) {
      this.nextTurn();
    }
  }

  hasUnplacedShips() {
    return this.player1.hasUnplacedShips() || this.player2.hasUnplacedShips();
  }

  isOver() {
    return (
      this.player1.gameBoard.areAllShipsSunk() ||
      this.player2.gameBoard.areAllShipsSunk()
    );
  }
}


/***/ }),

/***/ "./src/js/GameBoard.js":
/*!*****************************!*\
  !*** ./src/js/GameBoard.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/js/Ship.js");


const GAME_BOARD_WIDTH_HEIGHT = 10;

class GameBoard {
  gameBoard;
  ships;
  lastCoordinatesAttacked;
  lastHit;

  constructor() {
    this.gameBoard = new Array(GAME_BOARD_WIDTH_HEIGHT);
    for (let i = 0; i < this.gameBoard.length; i++) {
      this.gameBoard[i] = new Array(GAME_BOARD_WIDTH_HEIGHT);
      for (let j = 0; j < this.gameBoard[i].length; j++) {
        this.gameBoard[i][j] = [false, null];
      }
    }

    this.ships = new Array();

    this.lastCoordinatesAttacked = new Array(-1, -1);
    this.lastHit = new Array(-1, -1);
  }

  placeShip(coordinates, length, orientation) {
    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](length);

    if (!this.#isShipPlacementValid(coordinates, length, orientation)) {
      return false;
    }

    for (let i = 0; i < length; i++) {
      if (orientation === "vertical") {
        this.gameBoard[coordinates[0]][coordinates[1] + i][1] = ship;
      } else {
        this.gameBoard[coordinates[0] + i][coordinates[1]][1] = ship;
      }
    }
    this.ships.push(ship);
    return true;
  }

  receiveAttack(coordinates) {
    if (
      coordinates[0] < 0 ||
      coordinates[0] >= GAME_BOARD_WIDTH_HEIGHT ||
      coordinates[1] < 0 ||
      coordinates[1] >= GAME_BOARD_WIDTH_HEIGHT ||
      this.areCoordinatesAttacked(coordinates)
    ) {
      return false;
    }
    this.gameBoard[coordinates[0]][coordinates[1]][0] = true;
    this.lastCoordinatesAttacked = coordinates;

    const ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
    if (ship !== undefined && ship !== null) {
      ship.hit();
      this.lastHit = coordinates;
    }
    return true;
  }

  areCoordinatesAttacked(coordinates) {
    return this.gameBoard[coordinates[0]][coordinates[1]][0];
  }

  doesShipExist(coordinates) {
    const ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
    return ship !== undefined && ship !== null;
  }

  #isShipPlacementValid(coordinates, length, orientation) {
    let currentX = coordinates[0];
    let currentY = coordinates[1];
    for (let i = 0; i < length; i++) {
      if (
        !this.#areCoordinatesInBounds([currentX, currentY]) ||
        this.gameBoard[currentX][currentY][1] !== null
      ) {
        return false;
      }

      if (orientation === "vertical") {
        currentY++;
      } else {
        currentX++;
      }
    }
    return true;
  }

  #areCoordinatesInBounds(coordinates) {
    return (
      coordinates[0] >= 0 &&
      coordinates[0] < GAME_BOARD_WIDTH_HEIGHT &&
      coordinates[1] >= 0 &&
      coordinates[1] < GAME_BOARD_WIDTH_HEIGHT
    );
  }

  isShipSunk(coordinates) {
    const ship = this.gameBoard[coordinates[0]][coordinates[1]][1];
    if (ship === undefined || ship === null) {
      return false;
    }
    return ship.isSunk();
  }

  areAllShipsSunk() {
    return this.ships.reduce((previous, current) => {
      if (!previous) {
        return previous;
      }
      return current.isSunk();
    }, true);
  }

  getGameBoardWidth() {
    return GAME_BOARD_WIDTH_HEIGHT;
  }

  getGameBoardHeight() {
    return GAME_BOARD_WIDTH_HEIGHT;
  }

  getNumNotAttackedSpacesInColumn(x) {
    if (x < 0 || x >= GAME_BOARD_WIDTH_HEIGHT) {
      return undefined;
    }

    let numNotAttackedSpacesInColumn = GAME_BOARD_WIDTH_HEIGHT;

    for (let y = 0; y < GAME_BOARD_WIDTH_HEIGHT; y++) {
      if (this.areCoordinatesAttacked([x, y])) {
        numNotAttackedSpacesInColumn--;
      }
    }

    return numNotAttackedSpacesInColumn;
  }

  getNumNotAttackedSpacesInRow(y) {
    if (y < 0 || y >= GAME_BOARD_WIDTH_HEIGHT) {
      return undefined;
    }

    let numNotAttackedSpacesInRow = GAME_BOARD_WIDTH_HEIGHT;

    for (let x = 0; x < GAME_BOARD_WIDTH_HEIGHT; x++) {
      if (this.areCoordinatesAttacked([x, y])) {
        numNotAttackedSpacesInRow--;
      }
    }

    return numNotAttackedSpacesInRow;
  }

  getAdjacentHits(coordinates) {
    const adjacentHits = new Array();

    const adjacentCoordinates = this.getAdjacentCoordinates(coordinates);

    for (let i = 0; i < adjacentCoordinates.length; i++) {
      if (
        adjacentCoordinates[i] !== null &&
        this.areCoordinatesAttacked(adjacentCoordinates[i]) &&
        this.doesShipExist(adjacentCoordinates[i])
      ) {
        adjacentHits.push(adjacentCoordinates[i]);
      } else {
        adjacentHits.push(null);
      }
    }

    return adjacentHits;
  }

  getAdjacentCoordinates(coordinates) {
    if (!this.#areCoordinatesInBounds(coordinates)) {
      return new Array();
    }

    const adjacentCoordinates = new Array();

    const top = [coordinates[0], coordinates[1] - 1];
    const right = [coordinates[0] + 1, coordinates[1]];
    const bottom = [coordinates[0], coordinates[1] + 1];
    const left = [coordinates[0] - 1, coordinates[1]];

    if (top[1] >= 0) {
      adjacentCoordinates.push(top);
    } else {
      adjacentCoordinates.push(null);
    }

    if (right[0] < GAME_BOARD_WIDTH_HEIGHT) {
      adjacentCoordinates.push(right);
    } else {
      adjacentCoordinates.push(null);
    }

    if (bottom[1] < GAME_BOARD_WIDTH_HEIGHT) {
      adjacentCoordinates.push(bottom);
    } else {
      adjacentCoordinates.push(null);
    }

    if (left[0] >= 0) {
      adjacentCoordinates.push(left);
    } else {
      adjacentCoordinates.push(null);
    }

    return adjacentCoordinates;
  }
}


/***/ }),

/***/ "./src/js/GameBoardDisplay.js":
/*!************************************!*\
  !*** ./src/js/GameBoardDisplay.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoardDisplay)
/* harmony export */ });
class GameBoardDisplay {
  static draw(
    gameBoard,
    container,
    highlightShips,
    tileClickHandler,
    isDisabled,
    flashLastCoordinatesAttacked
  ) {
    const divGameBoard = document.createElement("div");
    divGameBoard.classList.add("game-board");
    if (isDisabled) {
      divGameBoard.classList.add("disabled");
    }
    divGameBoard.appendChild(
      this.#createTileList(
        gameBoard,
        highlightShips,
        tileClickHandler,
        flashLastCoordinatesAttacked
      )
    );

    container.appendChild(divGameBoard);
  }

  static #createTileList(
    gameBoard,
    highlightShips,
    tileClickHandler,
    flashLastCoordinatesAttacked
  ) {
    const divTileList = document.createElement("div");
    divTileList.classList.add("tile-list");
    for (let j = 0; j < gameBoard.getGameBoardWidth(); j++) {
      for (let i = 0; i < gameBoard.getGameBoardHeight(); i++) {
        divTileList.appendChild(
          this.#createTile(
            gameBoard.areCoordinatesAttacked([i, j]),
            gameBoard.doesShipExist([i, j]),
            gameBoard.isShipSunk([i, j]),
            highlightShips,
            () => tileClickHandler(i, j),
            flashLastCoordinatesAttacked &&
              i === gameBoard.lastCoordinatesAttacked[0] &&
              j === gameBoard.lastCoordinatesAttacked[1]
          )
        );
      }
    }

    return divTileList;
  }

  static #createTile(
    isAttacked,
    containsShip,
    containsSunkenShip,
    highlightShip,
    clickHandler,
    flash
  ) {
    const divTile = document.createElement("div");
    divTile.classList.add("tile");

    let colorClass;
    let alternateClass;
    if (isAttacked && containsSunkenShip) {
      colorClass = "sunk";
      alternateClass = highlightShip ? "ship" : "neutral";
    } else if (isAttacked && containsShip) {
      colorClass = "hit";
      alternateClass = highlightShip ? "ship" : "neutral";
    } else if (isAttacked) {
      colorClass = "miss";
      alternateClass = "neutral";
    } else if (containsShip && highlightShip) {
      colorClass = "ship";
      alternateClass = "ship";
    } else {
      colorClass = "neutral";
      alternateClass = "neutral";
    }
    if (flash) {
      this.#flashClass(divTile, colorClass, alternateClass);
    } else {
      divTile.classList.add(colorClass);
    }

    divTile.onclick = clickHandler;

    return divTile;
  }

  static #flashClass(element, finalClass, alternateClass) {
    element.classList.add(alternateClass);
    if (finalClass !== alternateClass) {
      setTimeout(() => {
        element.classList.add(finalClass);
        element.classList.remove(alternateClass);
      }, 1000);
      setTimeout(() => {
        element.classList.remove(finalClass);
        element.classList.add(alternateClass);
      }, 1700);
      setTimeout(() => {
        element.classList.add(finalClass);
        element.classList.remove(alternateClass);
      }, 2400);
    }
  }
}


/***/ }),

/***/ "./src/js/GameDisplay.js":
/*!*******************************!*\
  !*** ./src/js/GameDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameDisplay)
/* harmony export */ });
/* harmony import */ var _GameBoardDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoardDisplay.js */ "./src/js/GameBoardDisplay.js");


class GameDisplay {
  static draw(game, container) {
    const reDrawFunction = () => {
      GameDisplay.draw(game, container);
    };

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const divGame = document.createElement("div");
    divGame.classList.add("game");
    if (game.hasUnplacedShips()) {
      divGame.appendChild(
        this.#createShipPlacementPhaseDisplay(game, reDrawFunction)
      );
    } else {
      divGame.appendChild(this.#createBattlePhaseDisplay(game, reDrawFunction));
    }

    container.appendChild(divGame);
  }

  static #createShipPlacementPhaseDisplay(game, reDrawFunction) {
    const divShipPlacementPhaseDisplay = document.createElement("div");
    divShipPlacementPhaseDisplay.classList.add("ship-placement-phase-display");

    const currentPlayer = game.getCurrentPlayer();

    const selectShips = this.#createShipDropdown(currentPlayer);
    const selectDirection = this.#createShipDirectionDropdown();

    const divShipPlacementDropdownGroup = document.createElement("div");
    divShipPlacementDropdownGroup.classList.add(
      "ship-placement-dropdown-group"
    );
    divShipPlacementDropdownGroup.appendChild(selectShips);
    divShipPlacementDropdownGroup.appendChild(selectDirection);

    divShipPlacementPhaseDisplay.appendChild(divShipPlacementDropdownGroup);

    const tileClickHandler = (x, y) => {
      if (game.placeShip([x, y], selectShips.value, selectDirection.value)) {
        reDrawFunction();
      }
    };

    divShipPlacementPhaseDisplay.appendChild(
      this.#createLabeledGameBoard(
        currentPlayer.name,
        currentPlayer.gameBoard,
        true,
        tileClickHandler,
        false
      )
    );

    return divShipPlacementPhaseDisplay;
  }

  static #createShipDropdown(currentPlayer) {
    const selectShips = document.createElement("select");
    for (const shipIndex in currentPlayer.unplacedShips) {
      const ship = currentPlayer.unplacedShips[shipIndex];
      const optionShip = document.createElement("option");
      optionShip.textContent = `${ship.name} (${ship.length})`;
      optionShip.value = shipIndex;
      selectShips.appendChild(optionShip);
    }

    return selectShips;
  }

  static #createShipDirectionDropdown() {
    const optionHorizontal = document.createElement("option");
    optionHorizontal.value = "horizontal";
    optionHorizontal.textContent = "Horizontal";

    const optionVertical = document.createElement("option");
    optionVertical.value = "vertical";
    optionVertical.textContent = "Vertical";

    const selectDirection = document.createElement("select");
    selectDirection.appendChild(optionHorizontal);
    selectDirection.appendChild(optionVertical);

    return selectDirection;
  }

  static #createBattlePhaseDisplay(game, reDrawFunction) {
    const divBattlePhaseDisplay = document.createElement("div");
    divBattlePhaseDisplay.classList.add("battle-phase-display");

    if (game.isOver()) {
      const currentPlayer = game.getCurrentPlayer();
      const divGameResult = document.createElement("div");
      divGameResult.classList.add("game-result");
      divGameResult.textContent = `${currentPlayer.name} wins!`;
      divBattlePhaseDisplay.appendChild(divGameResult);
    }
    divBattlePhaseDisplay.appendChild(
      this.#createLabeledGameBoardList(game, reDrawFunction)
    );

    return divBattlePhaseDisplay;
  }

  static #createLabeledGameBoardList(game, reDrawFunction) {
    const isPlayer1GameBoardDisabled = game.currentTurn !== 1 || game.isOver();
    const isPlayer2GameBoardDisabled = game.currentTurn !== 0 || game.isOver();

    const tileClickHandler = (isDisabled, x, y) => {
      if (!isDisabled) {
        game.receiveAttack([x, y]);
        reDrawFunction();
      }
    };

    const divLabeledGameBoardList = document.createElement("div");
    divLabeledGameBoardList.classList.add("labeled-game-board-list");
    divLabeledGameBoardList.appendChild(
      this.#createLabeledGameBoard(
        game.player1.name,
        game.player1.gameBoard,
        isPlayer1GameBoardDisabled,
        (x, y) => tileClickHandler(isPlayer1GameBoardDisabled, x, y),
        isPlayer1GameBoardDisabled,
        !game.player2.isHuman && (!game.isOver() || game.currentTurn === 1)
      )
    );
    divLabeledGameBoardList.appendChild(
      this.#createLabeledGameBoard(
        game.player2.name,
        game.player2.gameBoard,
        isPlayer2GameBoardDisabled,
        (x, y) => tileClickHandler(isPlayer2GameBoardDisabled, x, y),
        isPlayer2GameBoardDisabled,
        !game.player1.isHuman && (!game.isOver() || game.currentTurn === 0)
      )
    );
    return divLabeledGameBoardList;
  }

  static #createLabeledGameBoard(
    playerName,
    gameBoard,
    highlightShips,
    tileClickHandler,
    isDisabled,
    flashLastCoordinatesAttacked
  ) {
    const divPlayerName = document.createElement("div");
    divPlayerName.classList.add("player-name");
    divPlayerName.textContent = playerName;

    const divLabeledGameBoard = document.createElement("div");
    divLabeledGameBoard.classList.add("labeled-game-board");
    divLabeledGameBoard.appendChild(divPlayerName);
    _GameBoardDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"].draw(
      gameBoard,
      divLabeledGameBoard,
      highlightShips,
      tileClickHandler,
      isDisabled,
      flashLastCoordinatesAttacked
    );

    return divLabeledGameBoard;
  }
}


/***/ }),

/***/ "./src/js/NumberUtils.js":
/*!*******************************!*\
  !*** ./src/js/NumberUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberUtils)
/* harmony export */ });
class NumberUtils {
  /*
        Returns a random integer between min (inclusive) and max (inclusive)
    */
  static getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard.js */ "./src/js/GameBoard.js");
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.js */ "./src/js/Ship.js");



class Player {
  name;
  isHuman;
  unplacedShips;
  gameBoard;

  constructor(name, isHuman) {
    this.name = name;
    this.isHuman = isHuman;
    this.gameBoard = new _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    this.unplacedShips = new Array(
      new _Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](5, "Carrier"),
      new _Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](4, "Battleship"),
      new _Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](3, "Destroyer"),
      new _Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](3, "Submarine"),
      new _Ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](2, "Patrol Boat")
    );
  }

  hasUnplacedShips() {
    return this.unplacedShips.length > 0;
  }
}


/***/ }),

/***/ "./src/js/Ship.js":
/*!************************!*\
  !*** ./src/js/Ship.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  name;
  length;
  hitCount;

  constructor(length, name) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
  }

  isSunk() {
    if (this.hitCount < this.length) {
      return false;
    }

    return true;
  }

  hit() {
    this.hitCount++;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ "./src/js/Game.js");
/* harmony import */ var _GameDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameDisplay.js */ "./src/js/GameDisplay.js");




const divGame = document.querySelector(".content");

let game = new _Game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
_GameDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].draw(game, divGame);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0dxRDs7QUFFdEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVcsR0FBRyxZQUFZO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0tlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHVDO0FBQ1Y7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscURBQVM7O0FBRWxDO0FBQ0EsVUFBVSxnREFBSTtBQUNkLFVBQVUsZ0RBQUk7QUFDZCxVQUFVLGdEQUFJO0FBQ2QsVUFBVSxnREFBSTtBQUNkLFVBQVUsZ0RBQUk7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0U7QUFDYzs7QUFFM0M7O0FBRUEsZUFBZSxnREFBSTtBQUNuQix1REFBVyxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9HYW1lQm9hcmREaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9HYW1lRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvTnVtYmVyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2pzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dhdGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuYnVubnkubmV0L2Nzcz9mYW1pbHk9cm9ib3RvOjQwMCw0MDBpLDcwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zdGFuZGFyZC1ib3gtc2hhZG93OiByZ2IoMTU2LCAxNTYsIDE1NikgMXB4IDFweCA1cHg7XG5cbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLnRpbGUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDQyLjdyZW07XG4gIGdhcDogMC4zcmVtO1xufVxuXG4udGlsZSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50aWxlLm5ldXRyYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRpbGUuc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDE1LCAxNSk7XG59XG5cbi50aWxlLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDMwLCAzMCk7XG59XG5cbi50aWxlLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpbGUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbn1cblxuLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGFiZWxlZC1nYW1lLWJvYXJkLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xufVxuXG4ubGFiZWxlZC1nYW1lLWJvYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnBsYXllci1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmdhbWUtcmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDtcblxuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgZm9udC1zaXplOiA1cmVtO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcyg1MCUpO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtcGhhc2UtZGlzcGxheSxcbi5iYXR0bGUtcGhhc2UtZGlzcGxheSAubGFiZWxlZC1nYW1lLWJvYXJkIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtZHJvcGRvd24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG5cbiAgcGFkZGluZzogMXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogZm9yZXN0Z3JlZW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLWJveC1zaGFkb3cpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxxREFBcUQ7O0VBRXJELGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QseURBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVzs7RUFFWCxZQUFZO0VBQ1osYUFBYTs7RUFFYixlQUFlO0VBQ2YsWUFBWTs7RUFFWiwwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTOztFQUVULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNDQUFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmJ1bm55Lm5ldC9jc3M/ZmFtaWx5PXJvYm90bzo0MDAsNDAwaSw3MDApO1xcblxcbjpyb290IHtcXG4gIC0tc3RhbmRhcmQtYm94LXNoYWRvdzogcmdiKDE1NiwgMTU2LCAxNTYpIDFweCAxcHggNXB4O1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3dhdGVyLmpwZyk7XFxufVxcblxcbi50aWxlLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA0Mi43cmVtO1xcbiAgZ2FwOiAwLjNyZW07XFxufVxcblxcbi50aWxlIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50aWxlLm5ldXRyYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50aWxlLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMTUsIDE1KTtcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDMwLCAzMCk7XFxufVxcblxcbi50aWxlLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50aWxlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmxhYmVsZWQtZ2FtZS1ib2FyZC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLmxhYmVsZWQtZ2FtZS1ib2FyZCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucGxheWVyLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1yZXN1bHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgei1pbmRleDogMTA7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcyg1MCUpO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtcGhhc2UtZGlzcGxheSxcXG4uYmF0dGxlLXBoYXNlLWRpc3BsYXkgLmxhYmVsZWQtZ2FtZS1ib2FyZCB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtZHJvcGRvd24tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbnNlbGVjdCB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IGZvcmVzdGdyZWVuO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLWJveC1zaGFkb3cpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBOdW1iZXJVdGlscyBmcm9tIFwiLi9OdW1iZXJVdGlscy5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIHBsYXllcjE7XG4gIHBsYXllcjI7XG4gIGN1cnJlbnRUdXJuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXIgMVwiLCB0cnVlKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIiwgZmFsc2UpO1xuXG4gICAgdGhpcy5jdXJyZW50VHVybiA9IDA7XG4gIH1cblxuICBuZXh0VHVybigpIHtcbiAgICBpZiAodGhpcy5oYXNVbnBsYWNlZFNoaXBzKCkgfHwgIXRoaXMuaXNPdmVyKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudFR1cm4gPSAodGhpcy5jdXJyZW50VHVybiArIDEpICUgMjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgaWYgKCFjdXJyZW50UGxheWVyLmlzSHVtYW4pIHtcbiAgICAgIGlmICh0aGlzLmhhc1VucGxhY2VkU2hpcHMoKSkge1xuICAgICAgICB0aGlzLiNwZXJmb3JtQ29tcHV0ZXJTaGlwUGxhY2VtZW50cyhjdXJyZW50UGxheWVyKTtcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc092ZXIoKSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VHVybiA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuI3BlcmZvcm1Db21wdXRlck1vdmUodGhpcy5wbGF5ZXIyLmdhbWVCb2FyZCk7XG4gICAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFR1cm4gPT09IDEpIHtcbiAgICAgICAgICB0aGlzLiNwZXJmb3JtQ29tcHV0ZXJNb3ZlKHRoaXMucGxheWVyMS5nYW1lQm9hcmQpO1xuICAgICAgICAgIHRoaXMubmV4dFR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFR1cm4gPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllcjE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllcjI7XG4gICAgfVxuICB9XG5cbiAgI2dldEN1cnJlbnRQbGF5ZXJPcHBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VHVybiA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICB9XG4gIH1cblxuICAjcGVyZm9ybUNvbXB1dGVyU2hpcFBsYWNlbWVudHMocGxheWVyKSB7XG4gICAgY29uc3Qgb3JpZW50YXRpb25PcHRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIudW5wbGFjZWRTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb25JbmRleCA9IE51bWJlclV0aWxzLmdldFJhbmRvbUludGVnZXJJblJhbmdlKFxuICAgICAgICAwLFxuICAgICAgICBvcmllbnRhdGlvbk9wdGlvbnMubGVuZ3RoIC0gMVxuICAgICAgKTtcbiAgICAgIGxldCByYW5kb21YID0gTnVtYmVyVXRpbHMuZ2V0UmFuZG9tSW50ZWdlckluUmFuZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuZ2V0R2FtZUJvYXJkV2lkdGgoKVxuICAgICAgKTtcbiAgICAgIGxldCByYW5kb21ZID0gTnVtYmVyVXRpbHMuZ2V0UmFuZG9tSW50ZWdlckluUmFuZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIHBsYXllci5nYW1lQm9hcmQuZ2V0R2FtZUJvYXJkSGVpZ2h0KClcbiAgICAgICk7XG4gICAgICB3aGlsZSAoXG4gICAgICAgICFwbGF5ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBbcmFuZG9tWCwgcmFuZG9tWV0sXG4gICAgICAgICAgcGxheWVyLnVucGxhY2VkU2hpcHNbaV0ubGVuZ3RoLFxuICAgICAgICAgIG9yaWVudGF0aW9uT3B0aW9uc1tvcmllbnRhdGlvbkluZGV4XVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmFuZG9tWCA9IE51bWJlclV0aWxzLmdldFJhbmRvbUludGVnZXJJblJhbmdlKFxuICAgICAgICAgIDAsXG4gICAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5nZXRHYW1lQm9hcmRXaWR0aCgpXG4gICAgICAgICk7XG4gICAgICAgIHJhbmRvbVkgPSBOdW1iZXJVdGlscy5nZXRSYW5kb21JbnRlZ2VySW5SYW5nZShcbiAgICAgICAgICAwLFxuICAgICAgICAgIHBsYXllci5nYW1lQm9hcmQuZ2V0R2FtZUJvYXJkSGVpZ2h0KClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGxheWVyLnVucGxhY2VkU2hpcHMgPSBuZXcgQXJyYXkoKTtcbiAgfVxuXG4gICNwZXJmb3JtQ29tcHV0ZXJNb3ZlKGdhbWVCb2FyZCkge1xuICAgIGNvbnN0IGhhc0F0dGFja0JlZW5QZXJmb3JtZWQgPVxuICAgICAgZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzBdICE9PSAtMSAmJlxuICAgICAgZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzFdICE9PSAtMTtcbiAgICBjb25zdCBpc0xhc3RBdHRhY2tNaXNzID1cbiAgICAgIGdhbWVCb2FyZC5sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFswXSAhPT0gLTEgJiZcbiAgICAgIGdhbWVCb2FyZC5sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFsxXSAhPT0gLTEgJiZcbiAgICAgICFnYW1lQm9hcmQuZG9lc1NoaXBFeGlzdChnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWQpO1xuICAgIGNvbnN0IGlzQXR0YWNrSW5Qcm9ncmVzcyA9XG4gICAgICBnYW1lQm9hcmQubGFzdEhpdFswXSAhPT0gLTEgJiZcbiAgICAgIGdhbWVCb2FyZC5sYXN0SGl0WzFdICE9PSAtMSAmJlxuICAgICAgIWdhbWVCb2FyZC5pc1NoaXBTdW5rKGdhbWVCb2FyZC5sYXN0SGl0KTtcbiAgICBjb25zdCBkaWRMYXN0QXR0YWNrU2lua1NoaXAgPVxuICAgICAgZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzBdICE9PSAtMSAmJlxuICAgICAgZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzFdICE9PSAtMSAmJlxuICAgICAgZ2FtZUJvYXJkLmlzU2hpcFN1bmsoZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkKTtcblxuICAgIGlmIChcbiAgICAgICFoYXNBdHRhY2tCZWVuUGVyZm9ybWVkIHx8XG4gICAgICAoaXNMYXN0QXR0YWNrTWlzcyAmJiAhaXNBdHRhY2tJblByb2dyZXNzKSB8fFxuICAgICAgZGlkTGFzdEF0dGFja1NpbmtTaGlwXG4gICAgKSB7XG4gICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh0aGlzLiNnZW5lcmF0ZVJhbmRvbUF0dGFja0Nvb3JkaW5hdGVzKGdhbWVCb2FyZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0SGl0QWRqYWNlbnRIaXRzID0gZ2FtZUJvYXJkLmdldEFkamFjZW50SGl0cyhnYW1lQm9hcmQubGFzdEhpdCk7XG4gICAgICBjb25zdCB2YWxpZExhc3RIaXRBZGphY2VudEhpdHMgPSBsYXN0SGl0QWRqYWNlbnRIaXRzLmZpbHRlcihcbiAgICAgICAgKGNvb3JkaW5hdGVzKSA9PlxuICAgICAgICAgIGNvb3JkaW5hdGVzICE9PSBudWxsICYmICFnYW1lQm9hcmQuaXNTaGlwU3Vuayhjb29yZGluYXRlcylcbiAgICAgICk7XG4gICAgICBpZiAodmFsaWRMYXN0SGl0QWRqYWNlbnRIaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICB0aGlzLiNzZWxlY3RSYW5kb21BZGphY2VudENvb3JkaW5hdGVzRm9yQXR0YWNrKFxuICAgICAgICAgICAgZ2FtZUJvYXJkLFxuICAgICAgICAgICAgZ2FtZUJvYXJkLmxhc3RIaXRcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgICB0aGlzLiNzZWxlY3RDb29yZGluYXRlc0ZvckF0dGFja0J5QXR0YWNrUGF0aChcbiAgICAgICAgICAgIGdhbWVCb2FyZCxcbiAgICAgICAgICAgIGxhc3RIaXRBZGphY2VudEhpdHNcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2dlbmVyYXRlUmFuZG9tQXR0YWNrQ29vcmRpbmF0ZXMoZ2FtZUJvYXJkKSB7XG4gICAgY29uc3QgZWxpZ2libGVDb2x1bW5zID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmQuZ2V0R2FtZUJvYXJkV2lkdGgoKTsgaSsrKSB7XG4gICAgICBpZiAoZ2FtZUJvYXJkLmdldE51bU5vdEF0dGFja2VkU3BhY2VzSW5Db2x1bW4oaSkgPiAwKSB7XG4gICAgICAgIGVsaWdpYmxlQ29sdW1ucy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbVggPVxuICAgICAgZWxpZ2libGVDb2x1bW5zW1xuICAgICAgICBOdW1iZXJVdGlscy5nZXRSYW5kb21JbnRlZ2VySW5SYW5nZSgwLCBlbGlnaWJsZUNvbHVtbnMubGVuZ3RoIC0gMSlcbiAgICAgIF07XG5cbiAgICBjb25zdCBlbGlnaWJsZVJvd3MgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZC5nZXRHYW1lQm9hcmRIZWlnaHQoKTsgaSsrKSB7XG4gICAgICBpZiAoIWdhbWVCb2FyZC5hcmVDb29yZGluYXRlc0F0dGFja2VkKFtyYW5kb21YLCBpXSkpIHtcbiAgICAgICAgZWxpZ2libGVSb3dzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tWSA9XG4gICAgICBlbGlnaWJsZVJvd3NbXG4gICAgICAgIE51bWJlclV0aWxzLmdldFJhbmRvbUludGVnZXJJblJhbmdlKDAsIGVsaWdpYmxlUm93cy5sZW5ndGggLSAxKVxuICAgICAgXTtcblxuICAgIHJldHVybiBbcmFuZG9tWCwgcmFuZG9tWV07XG4gIH1cblxuICAjc2VsZWN0UmFuZG9tQWRqYWNlbnRDb29yZGluYXRlc0ZvckF0dGFjayhnYW1lQm9hcmQsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBhZGphY2VudENvb3JkaW5hdGVzID1cbiAgICAgIGdhbWVCb2FyZC5nZXRBZGphY2VudENvb3JkaW5hdGVzKHN0YXJ0aW5nQ29vcmRpbmF0ZXMpO1xuICAgIGNvbnN0IHZhbGlkQWRqYWNlbnRDb29yZGluYXRlcyA9IGFkamFjZW50Q29vcmRpbmF0ZXMuZmlsdGVyKFxuICAgICAgKGNvb3JkaW5hdGVzKSA9PlxuICAgICAgICBjb29yZGluYXRlcyAhPT0gbnVsbCAmJiAhZ2FtZUJvYXJkLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoY29vcmRpbmF0ZXMpXG4gICAgKTtcblxuICAgIHJldHVybiB2YWxpZEFkamFjZW50Q29vcmRpbmF0ZXNbXG4gICAgICBOdW1iZXJVdGlscy5nZXRSYW5kb21JbnRlZ2VySW5SYW5nZShcbiAgICAgICAgMCxcbiAgICAgICAgdmFsaWRBZGphY2VudENvb3JkaW5hdGVzLmxlbmd0aCAtIDFcbiAgICAgIClcbiAgICBdO1xuICB9XG5cbiAgI3NlbGVjdENvb3JkaW5hdGVzRm9yQXR0YWNrQnlBdHRhY2tQYXRoKGdhbWVCb2FyZCwgbGFzdEhpdEFkamFjZW50SGl0cykge1xuICAgIGxldCBkaXJlY3Rpb25Db3VudGVyID0gMDtcbiAgICB3aGlsZSAoXG4gICAgICBkaXJlY3Rpb25Db3VudGVyIDwgbGFzdEhpdEFkamFjZW50SGl0cy5sZW5ndGggJiZcbiAgICAgIChsYXN0SGl0QWRqYWNlbnRIaXRzW2RpcmVjdGlvbkNvdW50ZXJdID09PSBudWxsIHx8XG4gICAgICAgIGdhbWVCb2FyZC5pc1NoaXBTdW5rKGxhc3RIaXRBZGphY2VudEhpdHNbZGlyZWN0aW9uQ291bnRlcl0pKVxuICAgICkge1xuICAgICAgZGlyZWN0aW9uQ291bnRlcisrO1xuICAgIH1cbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbkNvdW50ZXIgPVxuICAgICAgKGRpcmVjdGlvbkNvdW50ZXIgKyAyKSAlIGxhc3RIaXRBZGphY2VudEhpdHMubGVuZ3RoO1xuICAgIGNvbnN0IHBlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyID1cbiAgICAgIChkaXJlY3Rpb25Db3VudGVyICsgMSkgJSBsYXN0SGl0QWRqYWNlbnRIaXRzLmxlbmd0aDtcbiAgICBjb25zdCBvcHBvc2l0ZVBlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyID1cbiAgICAgIChwZXJwZW5kaWN1bGFyRGlyZWN0aW9uQ291bnRlciArIDIpICUgbGFzdEhpdEFkamFjZW50SGl0cy5sZW5ndGg7XG5cbiAgICBjb25zdCBsYXN0SGl0QWRqYWNlbnRDb29yZGluYXRlcyA9IGdhbWVCb2FyZC5nZXRBZGphY2VudENvb3JkaW5hdGVzKFxuICAgICAgZ2FtZUJvYXJkLmxhc3RIaXRcbiAgICApO1xuXG4gICAgY29uc3QgYXR0YWNrT3B0aW9uMSA9IHRoaXMuI3RyYXZlcnNlQXR0YWNrUGF0aChcbiAgICAgIGdhbWVCb2FyZCxcbiAgICAgIGxhc3RIaXRBZGphY2VudEhpdHNbZGlyZWN0aW9uQ291bnRlcl0sXG4gICAgICBkaXJlY3Rpb25Db3VudGVyXG4gICAgKTtcbiAgICBjb25zdCBhdHRhY2tPcHRpb24yID0gdGhpcy4jdHJhdmVyc2VBdHRhY2tQYXRoKFxuICAgICAgZ2FtZUJvYXJkLFxuICAgICAgbGFzdEhpdEFkamFjZW50Q29vcmRpbmF0ZXNbb3Bwb3NpdGVEaXJlY3Rpb25Db3VudGVyXSxcbiAgICAgIG9wcG9zaXRlRGlyZWN0aW9uQ291bnRlclxuICAgICk7XG4gICAgY29uc3QgYXR0YWNrT3B0aW9uMyA9IHRoaXMuI3RyYXZlcnNlQXR0YWNrUGF0aChcbiAgICAgIGdhbWVCb2FyZCxcbiAgICAgIGxhc3RIaXRBZGphY2VudENvb3JkaW5hdGVzW3BlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyXSxcbiAgICAgIHBlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyXG4gICAgKTtcbiAgICBjb25zdCBhdHRhY2tPcHRpb240ID0gdGhpcy4jdHJhdmVyc2VBdHRhY2tQYXRoKFxuICAgICAgZ2FtZUJvYXJkLFxuICAgICAgbGFzdEhpdEFkamFjZW50Q29vcmRpbmF0ZXNbb3Bwb3NpdGVQZXJwZW5kaWN1bGFyRGlyZWN0aW9uQ291bnRlcl0sXG4gICAgICBvcHBvc2l0ZVBlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyXG4gICAgKTtcblxuICAgIGlmIChhdHRhY2tPcHRpb24xICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXR0YWNrT3B0aW9uMTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja09wdGlvbjIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhdHRhY2tPcHRpb24yO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrT3B0aW9uMyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGF0dGFja09wdGlvbjM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhdHRhY2tPcHRpb240O1xuICAgIH1cbiAgfVxuXG4gICN0cmF2ZXJzZUF0dGFja1BhdGgoZ2FtZUJvYXJkLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoXG4gICAgICBzdGFydGluZ0Nvb3JkaW5hdGVzID09PSBudWxsIHx8XG4gICAgICAoZ2FtZUJvYXJkLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoc3RhcnRpbmdDb29yZGluYXRlcykgJiZcbiAgICAgICAgKCFnYW1lQm9hcmQuZG9lc1NoaXBFeGlzdChzdGFydGluZ0Nvb3JkaW5hdGVzKSB8fFxuICAgICAgICAgIGdhbWVCb2FyZC5pc1NoaXBTdW5rKHN0YXJ0aW5nQ29vcmRpbmF0ZXMpKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBzdGFydGluZ0Nvb3JkaW5hdGVzICE9PSBudWxsICYmXG4gICAgICAhZ2FtZUJvYXJkLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoc3RhcnRpbmdDb29yZGluYXRlcylcbiAgICApIHtcbiAgICAgIHJldHVybiBzdGFydGluZ0Nvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiN0cmF2ZXJzZUF0dGFja1BhdGgoXG4gICAgICBnYW1lQm9hcmQsXG4gICAgICBnYW1lQm9hcmQuZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhzdGFydGluZ0Nvb3JkaW5hdGVzKVtkaXJlY3Rpb25dLFxuICAgICAgZGlyZWN0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChjb29yZGluYXRlcywgdW5wbGFjZWRTaGlwSW5kZXgsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHRoaXMuZ2V0Q3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGN1cnJlbnRQbGF5ZXIuZ2FtZUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgY3VycmVudFBsYXllci51bnBsYWNlZFNoaXBzW3VucGxhY2VkU2hpcEluZGV4XS5sZW5ndGgsXG4gICAgICBvcmllbnRhdGlvblxuICAgICk7XG5cbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgY3VycmVudFBsYXllci51bnBsYWNlZFNoaXBzLnNwbGljZSh1bnBsYWNlZFNoaXBJbmRleCwgMSk7XG4gICAgICBpZiAoIWN1cnJlbnRQbGF5ZXIuaGFzVW5wbGFjZWRTaGlwcygpKSB7XG4gICAgICAgIHRoaXMubmV4dFR1cm4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyT3Bwb25lbnQgPSB0aGlzLiNnZXRDdXJyZW50UGxheWVyT3Bwb25lbnQoKTtcbiAgICBpZiAoY3VycmVudFBsYXllck9wcG9uZW50LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSkge1xuICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgIH1cbiAgfVxuXG4gIGhhc1VucGxhY2VkU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyMS5oYXNVbnBsYWNlZFNoaXBzKCkgfHwgdGhpcy5wbGF5ZXIyLmhhc1VucGxhY2VkU2hpcHMoKTtcbiAgfVxuXG4gIGlzT3ZlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSB8fFxuICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXAuanNcIjtcblxuY29uc3QgR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgZ2FtZUJvYXJkO1xuICBzaGlwcztcbiAgbGFzdENvb3JkaW5hdGVzQXR0YWNrZWQ7XG4gIGxhc3RIaXQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgQXJyYXkoR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkW2ldID0gbmV3IEFycmF5KEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nYW1lQm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmRbaV1bal0gPSBbZmFsc2UsIG51bGxdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2hpcHMgPSBuZXcgQXJyYXkoKTtcblxuICAgIHRoaXMubGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSBuZXcgQXJyYXkoLTEsIC0xKTtcbiAgICB0aGlzLmxhc3RIaXQgPSBuZXcgQXJyYXkoLTEsIC0xKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuXG4gICAgaWYgKCF0aGlzLiNpc1NoaXBQbGFjZW1lbnRWYWxpZChjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV0gKyBpXVsxXSA9IHNoaXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXSArIGldW2Nvb3JkaW5hdGVzWzFdXVsxXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAoXG4gICAgICBjb29yZGluYXRlc1swXSA8IDAgfHxcbiAgICAgIGNvb3JkaW5hdGVzWzBdID49IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUIHx8XG4gICAgICBjb29yZGluYXRlc1sxXSA8IDAgfHxcbiAgICAgIGNvb3JkaW5hdGVzWzFdID49IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUIHx8XG4gICAgICB0aGlzLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoY29vcmRpbmF0ZXMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV1bMF0gPSB0cnVlO1xuICAgIHRoaXMubGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgPSBjb29yZGluYXRlcztcblxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dWzFdO1xuICAgIGlmIChzaGlwICE9PSB1bmRlZmluZWQgJiYgc2hpcCAhPT0gbnVsbCkge1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIHRoaXMubGFzdEhpdCA9IGNvb3JkaW5hdGVzO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoY29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXVswXTtcbiAgfVxuXG4gIGRvZXNTaGlwRXhpc3QoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5nYW1lQm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXVsxXTtcbiAgICByZXR1cm4gc2hpcCAhPT0gdW5kZWZpbmVkICYmIHNoaXAgIT09IG51bGw7XG4gIH1cblxuICAjaXNTaGlwUGxhY2VtZW50VmFsaWQoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICBsZXQgY3VycmVudFggPSBjb29yZGluYXRlc1swXTtcbiAgICBsZXQgY3VycmVudFkgPSBjb29yZGluYXRlc1sxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLiNhcmVDb29yZGluYXRlc0luQm91bmRzKFtjdXJyZW50WCwgY3VycmVudFldKSB8fFxuICAgICAgICB0aGlzLmdhbWVCb2FyZFtjdXJyZW50WF1bY3VycmVudFldWzFdICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBjdXJyZW50WSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAjYXJlQ29vcmRpbmF0ZXNJbkJvdW5kcyhjb29yZGluYXRlcykge1xuICAgIHJldHVybiAoXG4gICAgICBjb29yZGluYXRlc1swXSA+PSAwICYmXG4gICAgICBjb29yZGluYXRlc1swXSA8IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUICYmXG4gICAgICBjb29yZGluYXRlc1sxXSA+PSAwICYmXG4gICAgICBjb29yZGluYXRlc1sxXSA8IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUXG4gICAgKTtcbiAgfVxuXG4gIGlzU2hpcFN1bmsoY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5nYW1lQm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXVsxXTtcbiAgICBpZiAoc2hpcCA9PT0gdW5kZWZpbmVkIHx8IHNoaXAgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXAuaXNTdW5rKCk7XG4gIH1cblxuICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudC5pc1N1bmsoKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIGdldEdhbWVCb2FyZFdpZHRoKCkge1xuICAgIHJldHVybiBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVDtcbiAgfVxuXG4gIGdldEdhbWVCb2FyZEhlaWdodCgpIHtcbiAgICByZXR1cm4gR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQ7XG4gIH1cblxuICBnZXROdW1Ob3RBdHRhY2tlZFNwYWNlc0luQ29sdW1uKHgpIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgbnVtTm90QXR0YWNrZWRTcGFjZXNJbkNvbHVtbiA9IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVDsgeSsrKSB7XG4gICAgICBpZiAodGhpcy5hcmVDb29yZGluYXRlc0F0dGFja2VkKFt4LCB5XSkpIHtcbiAgICAgICAgbnVtTm90QXR0YWNrZWRTcGFjZXNJbkNvbHVtbi0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudW1Ob3RBdHRhY2tlZFNwYWNlc0luQ29sdW1uO1xuICB9XG5cbiAgZ2V0TnVtTm90QXR0YWNrZWRTcGFjZXNJblJvdyh5KSB7XG4gICAgaWYgKHkgPCAwIHx8IHkgPj0gR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IG51bU5vdEF0dGFja2VkU3BhY2VzSW5Sb3cgPSBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVDtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQ7IHgrKykge1xuICAgICAgaWYgKHRoaXMuYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChbeCwgeV0pKSB7XG4gICAgICAgIG51bU5vdEF0dGFja2VkU3BhY2VzSW5Sb3ctLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVtTm90QXR0YWNrZWRTcGFjZXNJblJvdztcbiAgfVxuXG4gIGdldEFkamFjZW50SGl0cyhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IGFkamFjZW50SGl0cyA9IG5ldyBBcnJheSgpO1xuXG4gICAgY29uc3QgYWRqYWNlbnRDb29yZGluYXRlcyA9IHRoaXMuZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgYWRqYWNlbnRDb29yZGluYXRlc1tpXSAhPT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoYWRqYWNlbnRDb29yZGluYXRlc1tpXSkgJiZcbiAgICAgICAgdGhpcy5kb2VzU2hpcEV4aXN0KGFkamFjZW50Q29vcmRpbmF0ZXNbaV0pXG4gICAgICApIHtcbiAgICAgICAgYWRqYWNlbnRIaXRzLnB1c2goYWRqYWNlbnRDb29yZGluYXRlc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGphY2VudEhpdHMucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRqYWNlbnRIaXRzO1xuICB9XG5cbiAgZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIGlmICghdGhpcy4jYXJlQ29vcmRpbmF0ZXNJbkJvdW5kcyhjb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBuZXcgQXJyYXkoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGphY2VudENvb3JkaW5hdGVzID0gbmV3IEFycmF5KCk7XG5cbiAgICBjb25zdCB0b3AgPSBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdIC0gMV07XG4gICAgY29uc3QgcmlnaHQgPSBbY29vcmRpbmF0ZXNbMF0gKyAxLCBjb29yZGluYXRlc1sxXV07XG4gICAgY29uc3QgYm90dG9tID0gW2Nvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSArIDFdO1xuICAgIGNvbnN0IGxlZnQgPSBbY29vcmRpbmF0ZXNbMF0gLSAxLCBjb29yZGluYXRlc1sxXV07XG5cbiAgICBpZiAodG9wWzFdID49IDApIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaCh0b3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGphY2VudENvb3JkaW5hdGVzLnB1c2gobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0WzBdIDwgR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQpIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaChyaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tWzFdIDwgR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQpIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaChib3R0b20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGphY2VudENvb3JkaW5hdGVzLnB1c2gobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKGxlZnRbMF0gPj0gMCkge1xuICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKGxlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGphY2VudENvb3JkaW5hdGVzLnB1c2gobnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkamFjZW50Q29vcmRpbmF0ZXM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZERpc3BsYXkge1xuICBzdGF0aWMgZHJhdyhcbiAgICBnYW1lQm9hcmQsXG4gICAgY29udGFpbmVyLFxuICAgIGhpZ2hsaWdodFNoaXBzLFxuICAgIHRpbGVDbGlja0hhbmRsZXIsXG4gICAgaXNEaXNhYmxlZCxcbiAgICBmbGFzaExhc3RDb29yZGluYXRlc0F0dGFja2VkXG4gICkge1xuICAgIGNvbnN0IGRpdkdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJvYXJkXCIpO1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICBkaXZHYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgICBkaXZHYW1lQm9hcmQuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLiNjcmVhdGVUaWxlTGlzdChcbiAgICAgICAgZ2FtZUJvYXJkLFxuICAgICAgICBoaWdobGlnaHRTaGlwcyxcbiAgICAgICAgdGlsZUNsaWNrSGFuZGxlcixcbiAgICAgICAgZmxhc2hMYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFxuICAgICAgKVxuICAgICk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2R2FtZUJvYXJkKTtcbiAgfVxuXG4gIHN0YXRpYyAjY3JlYXRlVGlsZUxpc3QoXG4gICAgZ2FtZUJvYXJkLFxuICAgIGhpZ2hsaWdodFNoaXBzLFxuICAgIHRpbGVDbGlja0hhbmRsZXIsXG4gICAgZmxhc2hMYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFxuICApIHtcbiAgICBjb25zdCBkaXZUaWxlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGlsZUxpc3QuY2xhc3NMaXN0LmFkZChcInRpbGUtbGlzdFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVCb2FyZC5nZXRHYW1lQm9hcmRXaWR0aCgpOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkLmdldEdhbWVCb2FyZEhlaWdodCgpOyBpKyspIHtcbiAgICAgICAgZGl2VGlsZUxpc3QuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy4jY3JlYXRlVGlsZShcbiAgICAgICAgICAgIGdhbWVCb2FyZC5hcmVDb29yZGluYXRlc0F0dGFja2VkKFtpLCBqXSksXG4gICAgICAgICAgICBnYW1lQm9hcmQuZG9lc1NoaXBFeGlzdChbaSwgal0pLFxuICAgICAgICAgICAgZ2FtZUJvYXJkLmlzU2hpcFN1bmsoW2ksIGpdKSxcbiAgICAgICAgICAgIGhpZ2hsaWdodFNoaXBzLFxuICAgICAgICAgICAgKCkgPT4gdGlsZUNsaWNrSGFuZGxlcihpLCBqKSxcbiAgICAgICAgICAgIGZsYXNoTGFzdENvb3JkaW5hdGVzQXR0YWNrZWQgJiZcbiAgICAgICAgICAgICAgaSA9PT0gZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzBdICYmXG4gICAgICAgICAgICAgIGogPT09IGdhbWVCb2FyZC5sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFsxXVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGl2VGlsZUxpc3Q7XG4gIH1cblxuICBzdGF0aWMgI2NyZWF0ZVRpbGUoXG4gICAgaXNBdHRhY2tlZCxcbiAgICBjb250YWluc1NoaXAsXG4gICAgY29udGFpbnNTdW5rZW5TaGlwLFxuICAgIGhpZ2hsaWdodFNoaXAsXG4gICAgY2xpY2tIYW5kbGVyLFxuICAgIGZsYXNoXG4gICkge1xuICAgIGNvbnN0IGRpdlRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRpbGUuY2xhc3NMaXN0LmFkZChcInRpbGVcIik7XG5cbiAgICBsZXQgY29sb3JDbGFzcztcbiAgICBsZXQgYWx0ZXJuYXRlQ2xhc3M7XG4gICAgaWYgKGlzQXR0YWNrZWQgJiYgY29udGFpbnNTdW5rZW5TaGlwKSB7XG4gICAgICBjb2xvckNsYXNzID0gXCJzdW5rXCI7XG4gICAgICBhbHRlcm5hdGVDbGFzcyA9IGhpZ2hsaWdodFNoaXAgPyBcInNoaXBcIiA6IFwibmV1dHJhbFwiO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRhY2tlZCAmJiBjb250YWluc1NoaXApIHtcbiAgICAgIGNvbG9yQ2xhc3MgPSBcImhpdFwiO1xuICAgICAgYWx0ZXJuYXRlQ2xhc3MgPSBoaWdobGlnaHRTaGlwID8gXCJzaGlwXCIgOiBcIm5ldXRyYWxcIjtcbiAgICB9IGVsc2UgaWYgKGlzQXR0YWNrZWQpIHtcbiAgICAgIGNvbG9yQ2xhc3MgPSBcIm1pc3NcIjtcbiAgICAgIGFsdGVybmF0ZUNsYXNzID0gXCJuZXV0cmFsXCI7XG4gICAgfSBlbHNlIGlmIChjb250YWluc1NoaXAgJiYgaGlnaGxpZ2h0U2hpcCkge1xuICAgICAgY29sb3JDbGFzcyA9IFwic2hpcFwiO1xuICAgICAgYWx0ZXJuYXRlQ2xhc3MgPSBcInNoaXBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3JDbGFzcyA9IFwibmV1dHJhbFwiO1xuICAgICAgYWx0ZXJuYXRlQ2xhc3MgPSBcIm5ldXRyYWxcIjtcbiAgICB9XG4gICAgaWYgKGZsYXNoKSB7XG4gICAgICB0aGlzLiNmbGFzaENsYXNzKGRpdlRpbGUsIGNvbG9yQ2xhc3MsIGFsdGVybmF0ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2VGlsZS5jbGFzc0xpc3QuYWRkKGNvbG9yQ2xhc3MpO1xuICAgIH1cblxuICAgIGRpdlRpbGUub25jbGljayA9IGNsaWNrSGFuZGxlcjtcblxuICAgIHJldHVybiBkaXZUaWxlO1xuICB9XG5cbiAgc3RhdGljICNmbGFzaENsYXNzKGVsZW1lbnQsIGZpbmFsQ2xhc3MsIGFsdGVybmF0ZUNsYXNzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFsdGVybmF0ZUNsYXNzKTtcbiAgICBpZiAoZmluYWxDbGFzcyAhPT0gYWx0ZXJuYXRlQ2xhc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZmluYWxDbGFzcyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhbHRlcm5hdGVDbGFzcyk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZmluYWxDbGFzcyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbHRlcm5hdGVDbGFzcyk7XG4gICAgICB9LCAxNzAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoZmluYWxDbGFzcyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhbHRlcm5hdGVDbGFzcyk7XG4gICAgICB9LCAyNDAwKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmREaXNwbGF5IGZyb20gXCIuL0dhbWVCb2FyZERpc3BsYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURpc3BsYXkge1xuICBzdGF0aWMgZHJhdyhnYW1lLCBjb250YWluZXIpIHtcbiAgICBjb25zdCByZURyYXdGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgIEdhbWVEaXNwbGF5LmRyYXcoZ2FtZSwgY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdkdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkdhbWUuY2xhc3NMaXN0LmFkZChcImdhbWVcIik7XG4gICAgaWYgKGdhbWUuaGFzVW5wbGFjZWRTaGlwcygpKSB7XG4gICAgICBkaXZHYW1lLmFwcGVuZENoaWxkKFxuICAgICAgICB0aGlzLiNjcmVhdGVTaGlwUGxhY2VtZW50UGhhc2VEaXNwbGF5KGdhbWUsIHJlRHJhd0Z1bmN0aW9uKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2R2FtZS5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVCYXR0bGVQaGFzZURpc3BsYXkoZ2FtZSwgcmVEcmF3RnVuY3Rpb24pKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2R2FtZSk7XG4gIH1cblxuICBzdGF0aWMgI2NyZWF0ZVNoaXBQbGFjZW1lbnRQaGFzZURpc3BsYXkoZ2FtZSwgcmVEcmF3RnVuY3Rpb24pIHtcbiAgICBjb25zdCBkaXZTaGlwUGxhY2VtZW50UGhhc2VEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZTaGlwUGxhY2VtZW50UGhhc2VEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlbWVudC1waGFzZS1kaXNwbGF5XCIpO1xuXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpO1xuXG4gICAgY29uc3Qgc2VsZWN0U2hpcHMgPSB0aGlzLiNjcmVhdGVTaGlwRHJvcGRvd24oY3VycmVudFBsYXllcik7XG4gICAgY29uc3Qgc2VsZWN0RGlyZWN0aW9uID0gdGhpcy4jY3JlYXRlU2hpcERpcmVjdGlvbkRyb3Bkb3duKCk7XG5cbiAgICBjb25zdCBkaXZTaGlwUGxhY2VtZW50RHJvcGRvd25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2U2hpcFBsYWNlbWVudERyb3Bkb3duR3JvdXAuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwic2hpcC1wbGFjZW1lbnQtZHJvcGRvd24tZ3JvdXBcIlxuICAgICk7XG4gICAgZGl2U2hpcFBsYWNlbWVudERyb3Bkb3duR3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0U2hpcHMpO1xuICAgIGRpdlNoaXBQbGFjZW1lbnREcm9wZG93bkdyb3VwLmFwcGVuZENoaWxkKHNlbGVjdERpcmVjdGlvbik7XG5cbiAgICBkaXZTaGlwUGxhY2VtZW50UGhhc2VEaXNwbGF5LmFwcGVuZENoaWxkKGRpdlNoaXBQbGFjZW1lbnREcm9wZG93bkdyb3VwKTtcblxuICAgIGNvbnN0IHRpbGVDbGlja0hhbmRsZXIgPSAoeCwgeSkgPT4ge1xuICAgICAgaWYgKGdhbWUucGxhY2VTaGlwKFt4LCB5XSwgc2VsZWN0U2hpcHMudmFsdWUsIHNlbGVjdERpcmVjdGlvbi52YWx1ZSkpIHtcbiAgICAgICAgcmVEcmF3RnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGl2U2hpcFBsYWNlbWVudFBoYXNlRGlzcGxheS5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuI2NyZWF0ZUxhYmVsZWRHYW1lQm9hcmQoXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIubmFtZSxcbiAgICAgICAgY3VycmVudFBsYXllci5nYW1lQm9hcmQsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRpbGVDbGlja0hhbmRsZXIsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBkaXZTaGlwUGxhY2VtZW50UGhhc2VEaXNwbGF5O1xuICB9XG5cbiAgc3RhdGljICNjcmVhdGVTaGlwRHJvcGRvd24oY3VycmVudFBsYXllcikge1xuICAgIGNvbnN0IHNlbGVjdFNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBmb3IgKGNvbnN0IHNoaXBJbmRleCBpbiBjdXJyZW50UGxheWVyLnVucGxhY2VkU2hpcHMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBjdXJyZW50UGxheWVyLnVucGxhY2VkU2hpcHNbc2hpcEluZGV4XTtcbiAgICAgIGNvbnN0IG9wdGlvblNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uU2hpcC50ZXh0Q29udGVudCA9IGAke3NoaXAubmFtZX0gKCR7c2hpcC5sZW5ndGh9KWA7XG4gICAgICBvcHRpb25TaGlwLnZhbHVlID0gc2hpcEluZGV4O1xuICAgICAgc2VsZWN0U2hpcHMuYXBwZW5kQ2hpbGQob3B0aW9uU2hpcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdFNoaXBzO1xuICB9XG5cbiAgc3RhdGljICNjcmVhdGVTaGlwRGlyZWN0aW9uRHJvcGRvd24oKSB7XG4gICAgY29uc3Qgb3B0aW9uSG9yaXpvbnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uSG9yaXpvbnRhbC52YWx1ZSA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIG9wdGlvbkhvcml6b250YWwudGV4dENvbnRlbnQgPSBcIkhvcml6b250YWxcIjtcblxuICAgIGNvbnN0IG9wdGlvblZlcnRpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25WZXJ0aWNhbC52YWx1ZSA9IFwidmVydGljYWxcIjtcbiAgICBvcHRpb25WZXJ0aWNhbC50ZXh0Q29udGVudCA9IFwiVmVydGljYWxcIjtcblxuICAgIGNvbnN0IHNlbGVjdERpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0RGlyZWN0aW9uLmFwcGVuZENoaWxkKG9wdGlvbkhvcml6b250YWwpO1xuICAgIHNlbGVjdERpcmVjdGlvbi5hcHBlbmRDaGlsZChvcHRpb25WZXJ0aWNhbCk7XG5cbiAgICByZXR1cm4gc2VsZWN0RGlyZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljICNjcmVhdGVCYXR0bGVQaGFzZURpc3BsYXkoZ2FtZSwgcmVEcmF3RnVuY3Rpb24pIHtcbiAgICBjb25zdCBkaXZCYXR0bGVQaGFzZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkJhdHRsZVBoYXNlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiYmF0dGxlLXBoYXNlLWRpc3BsYXlcIik7XG5cbiAgICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgICAgY29uc3QgY3VycmVudFBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpO1xuICAgICAgY29uc3QgZGl2R2FtZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXZHYW1lUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLXJlc3VsdFwiKTtcbiAgICAgIGRpdkdhbWVSZXN1bHQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyLm5hbWV9IHdpbnMhYDtcbiAgICAgIGRpdkJhdHRsZVBoYXNlRGlzcGxheS5hcHBlbmRDaGlsZChkaXZHYW1lUmVzdWx0KTtcbiAgICB9XG4gICAgZGl2QmF0dGxlUGhhc2VEaXNwbGF5LmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy4jY3JlYXRlTGFiZWxlZEdhbWVCb2FyZExpc3QoZ2FtZSwgcmVEcmF3RnVuY3Rpb24pXG4gICAgKTtcblxuICAgIHJldHVybiBkaXZCYXR0bGVQaGFzZURpc3BsYXk7XG4gIH1cblxuICBzdGF0aWMgI2NyZWF0ZUxhYmVsZWRHYW1lQm9hcmRMaXN0KGdhbWUsIHJlRHJhd0Z1bmN0aW9uKSB7XG4gICAgY29uc3QgaXNQbGF5ZXIxR2FtZUJvYXJkRGlzYWJsZWQgPSBnYW1lLmN1cnJlbnRUdXJuICE9PSAxIHx8IGdhbWUuaXNPdmVyKCk7XG4gICAgY29uc3QgaXNQbGF5ZXIyR2FtZUJvYXJkRGlzYWJsZWQgPSBnYW1lLmN1cnJlbnRUdXJuICE9PSAwIHx8IGdhbWUuaXNPdmVyKCk7XG5cbiAgICBjb25zdCB0aWxlQ2xpY2tIYW5kbGVyID0gKGlzRGlzYWJsZWQsIHgsIHkpID0+IHtcbiAgICAgIGlmICghaXNEaXNhYmxlZCkge1xuICAgICAgICBnYW1lLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcbiAgICAgICAgcmVEcmF3RnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGl2TGFiZWxlZEdhbWVCb2FyZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkxhYmVsZWRHYW1lQm9hcmRMaXN0LmNsYXNzTGlzdC5hZGQoXCJsYWJlbGVkLWdhbWUtYm9hcmQtbGlzdFwiKTtcbiAgICBkaXZMYWJlbGVkR2FtZUJvYXJkTGlzdC5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuI2NyZWF0ZUxhYmVsZWRHYW1lQm9hcmQoXG4gICAgICAgIGdhbWUucGxheWVyMS5uYW1lLFxuICAgICAgICBnYW1lLnBsYXllcjEuZ2FtZUJvYXJkLFxuICAgICAgICBpc1BsYXllcjFHYW1lQm9hcmREaXNhYmxlZCxcbiAgICAgICAgKHgsIHkpID0+IHRpbGVDbGlja0hhbmRsZXIoaXNQbGF5ZXIxR2FtZUJvYXJkRGlzYWJsZWQsIHgsIHkpLFxuICAgICAgICBpc1BsYXllcjFHYW1lQm9hcmREaXNhYmxlZCxcbiAgICAgICAgIWdhbWUucGxheWVyMi5pc0h1bWFuICYmICghZ2FtZS5pc092ZXIoKSB8fCBnYW1lLmN1cnJlbnRUdXJuID09PSAxKVxuICAgICAgKVxuICAgICk7XG4gICAgZGl2TGFiZWxlZEdhbWVCb2FyZExpc3QuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLiNjcmVhdGVMYWJlbGVkR2FtZUJvYXJkKFxuICAgICAgICBnYW1lLnBsYXllcjIubmFtZSxcbiAgICAgICAgZ2FtZS5wbGF5ZXIyLmdhbWVCb2FyZCxcbiAgICAgICAgaXNQbGF5ZXIyR2FtZUJvYXJkRGlzYWJsZWQsXG4gICAgICAgICh4LCB5KSA9PiB0aWxlQ2xpY2tIYW5kbGVyKGlzUGxheWVyMkdhbWVCb2FyZERpc2FibGVkLCB4LCB5KSxcbiAgICAgICAgaXNQbGF5ZXIyR2FtZUJvYXJkRGlzYWJsZWQsXG4gICAgICAgICFnYW1lLnBsYXllcjEuaXNIdW1hbiAmJiAoIWdhbWUuaXNPdmVyKCkgfHwgZ2FtZS5jdXJyZW50VHVybiA9PT0gMClcbiAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBkaXZMYWJlbGVkR2FtZUJvYXJkTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyAjY3JlYXRlTGFiZWxlZEdhbWVCb2FyZChcbiAgICBwbGF5ZXJOYW1lLFxuICAgIGdhbWVCb2FyZCxcbiAgICBoaWdobGlnaHRTaGlwcyxcbiAgICB0aWxlQ2xpY2tIYW5kbGVyLFxuICAgIGlzRGlzYWJsZWQsXG4gICAgZmxhc2hMYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFxuICApIHtcbiAgICBjb25zdCBkaXZQbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZQbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItbmFtZVwiKTtcbiAgICBkaXZQbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gcGxheWVyTmFtZTtcblxuICAgIGNvbnN0IGRpdkxhYmVsZWRHYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkxhYmVsZWRHYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImxhYmVsZWQtZ2FtZS1ib2FyZFwiKTtcbiAgICBkaXZMYWJlbGVkR2FtZUJvYXJkLmFwcGVuZENoaWxkKGRpdlBsYXllck5hbWUpO1xuICAgIEdhbWVCb2FyZERpc3BsYXkuZHJhdyhcbiAgICAgIGdhbWVCb2FyZCxcbiAgICAgIGRpdkxhYmVsZWRHYW1lQm9hcmQsXG4gICAgICBoaWdobGlnaHRTaGlwcyxcbiAgICAgIHRpbGVDbGlja0hhbmRsZXIsXG4gICAgICBpc0Rpc2FibGVkLFxuICAgICAgZmxhc2hMYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZFxuICAgICk7XG5cbiAgICByZXR1cm4gZGl2TGFiZWxlZEdhbWVCb2FyZDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyVXRpbHMge1xuICAvKlxuICAgICAgICBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoaW5jbHVzaXZlKVxuICAgICovXG4gIHN0YXRpYyBnZXRSYW5kb21JbnRlZ2VySW5SYW5nZShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL0dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBuYW1lO1xuICBpc0h1bWFuO1xuICB1bnBsYWNlZFNoaXBzO1xuICBnYW1lQm9hcmQ7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgaXNIdW1hbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pc0h1bWFuID0gaXNIdW1hbjtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcblxuICAgIHRoaXMudW5wbGFjZWRTaGlwcyA9IG5ldyBBcnJheShcbiAgICAgIG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICAgIG5ldyBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKSxcbiAgICAgIG5ldyBTaGlwKDMsIFwiRGVzdHJveWVyXCIpLFxuICAgICAgbmV3IFNoaXAoMywgXCJTdWJtYXJpbmVcIiksXG4gICAgICBuZXcgU2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpXG4gICAgKTtcbiAgfVxuXG4gIGhhc1VucGxhY2VkU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5wbGFjZWRTaGlwcy5sZW5ndGggPiAwO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgbmFtZTtcbiAgbGVuZ3RoO1xuICBoaXRDb3VudDtcblxuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0Q291bnQgPSAwO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdENvdW50IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdENvdW50Kys7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gXCIuL0dhbWVEaXNwbGF5LmpzXCI7XG5cbmNvbnN0IGRpdkdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmxldCBnYW1lID0gbmV3IEdhbWUoKTtcbkdhbWVEaXNwbGF5LmRyYXcoZ2FtZSwgZGl2R2FtZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9