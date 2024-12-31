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
  width: 37.7rem;
  gap: 0.3rem;
}

.tile {
  flex: 0 0 auto;

  box-sizing: border-box;
  width: 3.5rem;
  height: 3.5rem;
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
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;EACE,qDAAqD;;EAErD,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,yDAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;;EAEd,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;;EAEX,YAAY;EACZ,aAAa;;EAEb,eAAe;EACf,YAAY;;EAEZ,0CAA0C;AAC5C;;AAEA;;EAEE,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;;EAET,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sCAAsC;AACxC","sourcesContent":["@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);\n\n:root {\n  --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;\n\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-image: url(../images/water.jpg);\n}\n\n.tile-list {\n  display: flex;\n  flex-wrap: wrap;\n  width: 37.7rem;\n  gap: 0.3rem;\n}\n\n.tile {\n  flex: 0 0 auto;\n\n  box-sizing: border-box;\n  width: 3.5rem;\n  height: 3.5rem;\n  border: solid 1px black;\n  border-radius: 5px;\n}\n\n.tile.neutral {\n  background-color: transparent;\n}\n\n.tile.sunk {\n  background-color: rgb(110, 15, 15);\n}\n\n.tile.hit {\n  background-color: rgb(205, 30, 30);\n}\n\n.tile.miss {\n  background-color: white;\n}\n\n.tile.ship {\n  background-color: rgb(160, 160, 160);\n}\n\n.game {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 100vh;\n}\n\n.labeled-game-board-list {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n}\n\n.labeled-game-board {\n  padding: 1rem;\n}\n\n.player-name {\n  text-align: center;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.game-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n\n  width: 100vw;\n  height: 100vh;\n\n  font-size: 5rem;\n  color: white;\n\n  backdrop-filter: blur(3px) brightness(50%);\n}\n\n.ship-placement-phase-display,\n.battle-phase-display .labeled-game-board {\n  backdrop-filter: blur(100px);\n  border-radius: 5px;\n}\n\n.ship-placement-dropdown-group {\n  display: flex;\n  gap: 1rem;\n\n  padding: 1rem;\n}\n\nselect {\n  padding: 10px 5px;\n  border-radius: 5px;\n  border: solid 1px white;\n  font-size: 1rem;\n  background: transparent;\n}\n\nselect:focus {\n  border-color: forestgreen;\n  outline: none;\n  box-shadow: var(--standard-box-shadow);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0dxRDs7QUFFdEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVcsR0FBRyxZQUFZO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0tlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHVDO0FBQ1Y7O0FBRWQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscURBQVM7O0FBRWxDO0FBQ0EsVUFBVSxnREFBSTtBQUNkLFVBQVUsZ0RBQUk7QUFDZCxVQUFVLGdEQUFJO0FBQ2QsVUFBVSxnREFBSTtBQUNkLFVBQVUsZ0RBQUk7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0U7QUFDYzs7QUFFM0M7O0FBRUEsZUFBZSxnREFBSTtBQUNuQix1REFBVyxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9HYW1lQm9hcmREaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9HYW1lRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvTnVtYmVyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2pzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dhdGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuYnVubnkubmV0L2Nzcz9mYW1pbHk9cm9ib3RvOjQwMCw0MDBpLDcwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zdGFuZGFyZC1ib3gtc2hhZG93OiByZ2IoMTU2LCAxNTYsIDE1NikgMXB4IDFweCA1cHg7XG5cbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLnRpbGUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDM3LjdyZW07XG4gIGdhcDogMC4zcmVtO1xufVxuXG4udGlsZSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGlsZS5uZXV0cmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50aWxlLnN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEwLCAxNSwgMTUpO1xufVxuXG4udGlsZS5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAzMCwgMzApO1xufVxuXG4udGlsZS5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50aWxlLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG59XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxhYmVsZWQtZ2FtZS1ib2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cblxuLmxhYmVsZWQtZ2FtZS1ib2FyZCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wbGF5ZXItbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5nYW1lLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTA7XG5cbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpIGJyaWdodG5lc3MoNTAlKTtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBoYXNlLWRpc3BsYXksXG4uYmF0dGxlLXBoYXNlLWRpc3BsYXkgLmxhYmVsZWQtZ2FtZS1ib2FyZCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNoaXAtcGxhY2VtZW50LWRyb3Bkb3duLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuXG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IGZvcmVzdGdyZWVuO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1ib3gtc2hhZG93KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscURBQXFEOztFQUVyRCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHlEQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7O0VBRVgsWUFBWTtFQUNaLGFBQWE7O0VBRWIsZUFBZTtFQUNmLFlBQVk7O0VBRVosMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUzs7RUFFVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5idW5ueS5uZXQvY3NzP2ZhbWlseT1yb2JvdG86NDAwLDQwMGksNzAwKTtcXG5cXG46cm9vdCB7XFxuICAtLXN0YW5kYXJkLWJveC1zaGFkb3c6IHJnYigxNTYsIDE1NiwgMTU2KSAxcHggMXB4IDVweDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy93YXRlci5qcGcpO1xcbn1cXG5cXG4udGlsZS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMzcuN3JlbTtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGlsZSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMy41cmVtO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRpbGUubmV1dHJhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRpbGUuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEwLCAxNSwgMTUpO1xcbn1cXG5cXG4udGlsZS5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMzAsIDMwKTtcXG59XFxuXFxuLnRpbGUubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRpbGUuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxufVxcblxcbi5nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubGFiZWxlZC1nYW1lLWJvYXJkLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubGFiZWxlZC1nYW1lLWJvYXJkIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wbGF5ZXItbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5nYW1lLXJlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KSBicmlnaHRuZXNzKDUwJSk7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1waGFzZS1kaXNwbGF5LFxcbi5iYXR0bGUtcGhhc2UtZGlzcGxheSAubGFiZWxlZC1nYW1lLWJvYXJkIHtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDBweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1kcm9wZG93bi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuc2VsZWN0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogZm9yZXN0Z3JlZW47XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtYm94LXNoYWRvdyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuL051bWJlclV0aWxzLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgcGxheWVyMTtcbiAgcGxheWVyMjtcbiAgY3VycmVudFR1cm47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcihcIlBsYXllciAxXCIsIHRydWUpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLmN1cnJlbnRUdXJuID0gMDtcbiAgfVxuXG4gIG5leHRUdXJuKCkge1xuICAgIGlmICh0aGlzLmhhc1VucGxhY2VkU2hpcHMoKSB8fCAhdGhpcy5pc092ZXIoKSkge1xuICAgICAgdGhpcy5jdXJyZW50VHVybiA9ICh0aGlzLmN1cnJlbnRUdXJuICsgMSkgJSAyO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICBpZiAoIWN1cnJlbnRQbGF5ZXIuaXNIdW1hbikge1xuICAgICAgaWYgKHRoaXMuaGFzVW5wbGFjZWRTaGlwcygpKSB7XG4gICAgICAgIHRoaXMuI3BlcmZvcm1Db21wdXRlclNoaXBQbGFjZW1lbnRzKGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgICB0aGlzLm5leHRUdXJuKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzT3ZlcigpKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUdXJuID09PSAwKSB7XG4gICAgICAgICAgdGhpcy4jcGVyZm9ybUNvbXB1dGVyTW92ZSh0aGlzLnBsYXllcjIuZ2FtZUJvYXJkKTtcbiAgICAgICAgICB0aGlzLm5leHRUdXJuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHVybiA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuI3BlcmZvcm1Db21wdXRlck1vdmUodGhpcy5wbGF5ZXIxLmdhbWVCb2FyZCk7XG4gICAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBsYXllcigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VHVybiA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICB9XG4gIH1cblxuICAjZ2V0Q3VycmVudFBsYXllck9wcG9uZW50KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRUdXJuID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXIyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXIxO1xuICAgIH1cbiAgfVxuXG4gICNwZXJmb3JtQ29tcHV0ZXJTaGlwUGxhY2VtZW50cyhwbGF5ZXIpIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbk9wdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci51bnBsYWNlZFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbkluZGV4ID0gTnVtYmVyVXRpbHMuZ2V0UmFuZG9tSW50ZWdlckluUmFuZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIG9yaWVudGF0aW9uT3B0aW9ucy5sZW5ndGggLSAxXG4gICAgICApO1xuICAgICAgbGV0IHJhbmRvbVggPSBOdW1iZXJVdGlscy5nZXRSYW5kb21JbnRlZ2VySW5SYW5nZShcbiAgICAgICAgMCxcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5nZXRHYW1lQm9hcmRXaWR0aCgpXG4gICAgICApO1xuICAgICAgbGV0IHJhbmRvbVkgPSBOdW1iZXJVdGlscy5nZXRSYW5kb21JbnRlZ2VySW5SYW5nZShcbiAgICAgICAgMCxcbiAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5nZXRHYW1lQm9hcmRIZWlnaHQoKVxuICAgICAgKTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgIXBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIFtyYW5kb21YLCByYW5kb21ZXSxcbiAgICAgICAgICBwbGF5ZXIudW5wbGFjZWRTaGlwc1tpXS5sZW5ndGgsXG4gICAgICAgICAgb3JpZW50YXRpb25PcHRpb25zW29yaWVudGF0aW9uSW5kZXhdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByYW5kb21YID0gTnVtYmVyVXRpbHMuZ2V0UmFuZG9tSW50ZWdlckluUmFuZ2UoXG4gICAgICAgICAgMCxcbiAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLmdldEdhbWVCb2FyZFdpZHRoKClcbiAgICAgICAgKTtcbiAgICAgICAgcmFuZG9tWSA9IE51bWJlclV0aWxzLmdldFJhbmRvbUludGVnZXJJblJhbmdlKFxuICAgICAgICAgIDAsXG4gICAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5nZXRHYW1lQm9hcmRIZWlnaHQoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBwbGF5ZXIudW5wbGFjZWRTaGlwcyA9IG5ldyBBcnJheSgpO1xuICB9XG5cbiAgI3BlcmZvcm1Db21wdXRlck1vdmUoZ2FtZUJvYXJkKSB7XG4gICAgY29uc3QgaGFzQXR0YWNrQmVlblBlcmZvcm1lZCA9XG4gICAgICBnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWRbMF0gIT09IC0xICYmXG4gICAgICBnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWRbMV0gIT09IC0xO1xuICAgIGNvbnN0IGlzTGFzdEF0dGFja01pc3MgPVxuICAgICAgZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzBdICE9PSAtMSAmJlxuICAgICAgZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzFdICE9PSAtMSAmJlxuICAgICAgIWdhbWVCb2FyZC5kb2VzU2hpcEV4aXN0KGdhbWVCb2FyZC5sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCk7XG4gICAgY29uc3QgaXNBdHRhY2tJblByb2dyZXNzID1cbiAgICAgIGdhbWVCb2FyZC5sYXN0SGl0WzBdICE9PSAtMSAmJlxuICAgICAgZ2FtZUJvYXJkLmxhc3RIaXRbMV0gIT09IC0xICYmXG4gICAgICAhZ2FtZUJvYXJkLmlzU2hpcFN1bmsoZ2FtZUJvYXJkLmxhc3RIaXQpO1xuICAgIGNvbnN0IGRpZExhc3RBdHRhY2tTaW5rU2hpcCA9XG4gICAgICBnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWRbMF0gIT09IC0xICYmXG4gICAgICBnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWRbMV0gIT09IC0xICYmXG4gICAgICBnYW1lQm9hcmQuaXNTaGlwU3VuayhnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWQpO1xuXG4gICAgaWYgKFxuICAgICAgIWhhc0F0dGFja0JlZW5QZXJmb3JtZWQgfHxcbiAgICAgIChpc0xhc3RBdHRhY2tNaXNzICYmICFpc0F0dGFja0luUHJvZ3Jlc3MpIHx8XG4gICAgICBkaWRMYXN0QXR0YWNrU2lua1NoaXBcbiAgICApIHtcbiAgICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHRoaXMuI2dlbmVyYXRlUmFuZG9tQXR0YWNrQ29vcmRpbmF0ZXMoZ2FtZUJvYXJkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RIaXRBZGphY2VudEhpdHMgPSBnYW1lQm9hcmQuZ2V0QWRqYWNlbnRIaXRzKGdhbWVCb2FyZC5sYXN0SGl0KTtcbiAgICAgIGNvbnN0IHZhbGlkTGFzdEhpdEFkamFjZW50SGl0cyA9IGxhc3RIaXRBZGphY2VudEhpdHMuZmlsdGVyKFxuICAgICAgICAoY29vcmRpbmF0ZXMpID0+XG4gICAgICAgICAgY29vcmRpbmF0ZXMgIT09IG51bGwgJiYgIWdhbWVCb2FyZC5pc1NoaXBTdW5rKGNvb3JkaW5hdGVzKVxuICAgICAgKTtcbiAgICAgIGlmICh2YWxpZExhc3RIaXRBZGphY2VudEhpdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgIHRoaXMuI3NlbGVjdFJhbmRvbUFkamFjZW50Q29vcmRpbmF0ZXNGb3JBdHRhY2soXG4gICAgICAgICAgICBnYW1lQm9hcmQsXG4gICAgICAgICAgICBnYW1lQm9hcmQubGFzdEhpdFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICAgIHRoaXMuI3NlbGVjdENvb3JkaW5hdGVzRm9yQXR0YWNrQnlBdHRhY2tQYXRoKFxuICAgICAgICAgICAgZ2FtZUJvYXJkLFxuICAgICAgICAgICAgbGFzdEhpdEFkamFjZW50SGl0c1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjZ2VuZXJhdGVSYW5kb21BdHRhY2tDb29yZGluYXRlcyhnYW1lQm9hcmQpIHtcbiAgICBjb25zdCBlbGlnaWJsZUNvbHVtbnMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZC5nZXRHYW1lQm9hcmRXaWR0aCgpOyBpKyspIHtcbiAgICAgIGlmIChnYW1lQm9hcmQuZ2V0TnVtTm90QXR0YWNrZWRTcGFjZXNJbkNvbHVtbihpKSA+IDApIHtcbiAgICAgICAgZWxpZ2libGVDb2x1bW5zLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tWCA9XG4gICAgICBlbGlnaWJsZUNvbHVtbnNbXG4gICAgICAgIE51bWJlclV0aWxzLmdldFJhbmRvbUludGVnZXJJblJhbmdlKDAsIGVsaWdpYmxlQ29sdW1ucy5sZW5ndGggLSAxKVxuICAgICAgXTtcblxuICAgIGNvbnN0IGVsaWdpYmxlUm93cyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkLmdldEdhbWVCb2FyZEhlaWdodCgpOyBpKyspIHtcbiAgICAgIGlmICghZ2FtZUJvYXJkLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoW3JhbmRvbVgsIGldKSkge1xuICAgICAgICBlbGlnaWJsZVJvd3MucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21ZID1cbiAgICAgIGVsaWdpYmxlUm93c1tcbiAgICAgICAgTnVtYmVyVXRpbHMuZ2V0UmFuZG9tSW50ZWdlckluUmFuZ2UoMCwgZWxpZ2libGVSb3dzLmxlbmd0aCAtIDEpXG4gICAgICBdO1xuXG4gICAgcmV0dXJuIFtyYW5kb21YLCByYW5kb21ZXTtcbiAgfVxuXG4gICNzZWxlY3RSYW5kb21BZGphY2VudENvb3JkaW5hdGVzRm9yQXR0YWNrKGdhbWVCb2FyZCwgc3RhcnRpbmdDb29yZGluYXRlcykge1xuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXMgPVxuICAgICAgZ2FtZUJvYXJkLmdldEFkamFjZW50Q29vcmRpbmF0ZXMoc3RhcnRpbmdDb29yZGluYXRlcyk7XG4gICAgY29uc3QgdmFsaWRBZGphY2VudENvb3JkaW5hdGVzID0gYWRqYWNlbnRDb29yZGluYXRlcy5maWx0ZXIoXG4gICAgICAoY29vcmRpbmF0ZXMpID0+XG4gICAgICAgIGNvb3JkaW5hdGVzICE9PSBudWxsICYmICFnYW1lQm9hcmQuYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChjb29yZGluYXRlcylcbiAgICApO1xuXG4gICAgcmV0dXJuIHZhbGlkQWRqYWNlbnRDb29yZGluYXRlc1tcbiAgICAgIE51bWJlclV0aWxzLmdldFJhbmRvbUludGVnZXJJblJhbmdlKFxuICAgICAgICAwLFxuICAgICAgICB2YWxpZEFkamFjZW50Q29vcmRpbmF0ZXMubGVuZ3RoIC0gMVxuICAgICAgKVxuICAgIF07XG4gIH1cblxuICAjc2VsZWN0Q29vcmRpbmF0ZXNGb3JBdHRhY2tCeUF0dGFja1BhdGgoZ2FtZUJvYXJkLCBsYXN0SGl0QWRqYWNlbnRIaXRzKSB7XG4gICAgbGV0IGRpcmVjdGlvbkNvdW50ZXIgPSAwO1xuICAgIHdoaWxlIChcbiAgICAgIGRpcmVjdGlvbkNvdW50ZXIgPCBsYXN0SGl0QWRqYWNlbnRIaXRzLmxlbmd0aCAmJlxuICAgICAgKGxhc3RIaXRBZGphY2VudEhpdHNbZGlyZWN0aW9uQ291bnRlcl0gPT09IG51bGwgfHxcbiAgICAgICAgZ2FtZUJvYXJkLmlzU2hpcFN1bmsobGFzdEhpdEFkamFjZW50SGl0c1tkaXJlY3Rpb25Db3VudGVyXSkpXG4gICAgKSB7XG4gICAgICBkaXJlY3Rpb25Db3VudGVyKys7XG4gICAgfVxuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uQ291bnRlciA9XG4gICAgICAoZGlyZWN0aW9uQ291bnRlciArIDIpICUgbGFzdEhpdEFkamFjZW50SGl0cy5sZW5ndGg7XG4gICAgY29uc3QgcGVycGVuZGljdWxhckRpcmVjdGlvbkNvdW50ZXIgPVxuICAgICAgKGRpcmVjdGlvbkNvdW50ZXIgKyAxKSAlIGxhc3RIaXRBZGphY2VudEhpdHMubGVuZ3RoO1xuICAgIGNvbnN0IG9wcG9zaXRlUGVycGVuZGljdWxhckRpcmVjdGlvbkNvdW50ZXIgPVxuICAgICAgKHBlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyICsgMikgJSBsYXN0SGl0QWRqYWNlbnRIaXRzLmxlbmd0aDtcblxuICAgIGNvbnN0IGxhc3RIaXRBZGphY2VudENvb3JkaW5hdGVzID0gZ2FtZUJvYXJkLmdldEFkamFjZW50Q29vcmRpbmF0ZXMoXG4gICAgICBnYW1lQm9hcmQubGFzdEhpdFxuICAgICk7XG5cbiAgICBjb25zdCBhdHRhY2tPcHRpb24xID0gdGhpcy4jdHJhdmVyc2VBdHRhY2tQYXRoKFxuICAgICAgZ2FtZUJvYXJkLFxuICAgICAgbGFzdEhpdEFkamFjZW50SGl0c1tkaXJlY3Rpb25Db3VudGVyXSxcbiAgICAgIGRpcmVjdGlvbkNvdW50ZXJcbiAgICApO1xuICAgIGNvbnN0IGF0dGFja09wdGlvbjIgPSB0aGlzLiN0cmF2ZXJzZUF0dGFja1BhdGgoXG4gICAgICBnYW1lQm9hcmQsXG4gICAgICBsYXN0SGl0QWRqYWNlbnRDb29yZGluYXRlc1tvcHBvc2l0ZURpcmVjdGlvbkNvdW50ZXJdLFxuICAgICAgb3Bwb3NpdGVEaXJlY3Rpb25Db3VudGVyXG4gICAgKTtcbiAgICBjb25zdCBhdHRhY2tPcHRpb24zID0gdGhpcy4jdHJhdmVyc2VBdHRhY2tQYXRoKFxuICAgICAgZ2FtZUJvYXJkLFxuICAgICAgbGFzdEhpdEFkamFjZW50Q29vcmRpbmF0ZXNbcGVycGVuZGljdWxhckRpcmVjdGlvbkNvdW50ZXJdLFxuICAgICAgcGVycGVuZGljdWxhckRpcmVjdGlvbkNvdW50ZXJcbiAgICApO1xuICAgIGNvbnN0IGF0dGFja09wdGlvbjQgPSB0aGlzLiN0cmF2ZXJzZUF0dGFja1BhdGgoXG4gICAgICBnYW1lQm9hcmQsXG4gICAgICBsYXN0SGl0QWRqYWNlbnRDb29yZGluYXRlc1tvcHBvc2l0ZVBlcnBlbmRpY3VsYXJEaXJlY3Rpb25Db3VudGVyXSxcbiAgICAgIG9wcG9zaXRlUGVycGVuZGljdWxhckRpcmVjdGlvbkNvdW50ZXJcbiAgICApO1xuXG4gICAgaWYgKGF0dGFja09wdGlvbjEgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhdHRhY2tPcHRpb24xO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrT3B0aW9uMiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGF0dGFja09wdGlvbjI7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tPcHRpb24zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXR0YWNrT3B0aW9uMztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF0dGFja09wdGlvbjQ7XG4gICAgfVxuICB9XG5cbiAgI3RyYXZlcnNlQXR0YWNrUGF0aChnYW1lQm9hcmQsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xuICAgIGlmIChcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMgPT09IG51bGwgfHxcbiAgICAgIChnYW1lQm9hcmQuYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChzdGFydGluZ0Nvb3JkaW5hdGVzKSAmJlxuICAgICAgICAoIWdhbWVCb2FyZC5kb2VzU2hpcEV4aXN0KHN0YXJ0aW5nQ29vcmRpbmF0ZXMpIHx8XG4gICAgICAgICAgZ2FtZUJvYXJkLmlzU2hpcFN1bmsoc3RhcnRpbmdDb29yZGluYXRlcykpKVxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMgIT09IG51bGwgJiZcbiAgICAgICFnYW1lQm9hcmQuYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChzdGFydGluZ0Nvb3JkaW5hdGVzKVxuICAgICkge1xuICAgICAgcmV0dXJuIHN0YXJ0aW5nQ29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuI3RyYXZlcnNlQXR0YWNrUGF0aChcbiAgICAgIGdhbWVCb2FyZCxcbiAgICAgIGdhbWVCb2FyZC5nZXRBZGphY2VudENvb3JkaW5hdGVzKHN0YXJ0aW5nQ29vcmRpbmF0ZXMpW2RpcmVjdGlvbl0sXG4gICAgICBkaXJlY3Rpb25cbiAgICApO1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCB1bnBsYWNlZFNoaXBJbmRleCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gdGhpcy5nZXRDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gY3VycmVudFBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKFxuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICBjdXJyZW50UGxheWVyLnVucGxhY2VkU2hpcHNbdW5wbGFjZWRTaGlwSW5kZXhdLmxlbmd0aCxcbiAgICAgIG9yaWVudGF0aW9uXG4gICAgKTtcblxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBjdXJyZW50UGxheWVyLnVucGxhY2VkU2hpcHMuc3BsaWNlKHVucGxhY2VkU2hpcEluZGV4LCAxKTtcbiAgICAgIGlmICghY3VycmVudFBsYXllci5oYXNVbnBsYWNlZFNoaXBzKCkpIHtcbiAgICAgICAgdGhpcy5uZXh0VHVybigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJPcHBvbmVudCA9IHRoaXMuI2dldEN1cnJlbnRQbGF5ZXJPcHBvbmVudCgpO1xuICAgIGlmIChjdXJyZW50UGxheWVyT3Bwb25lbnQuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpKSB7XG4gICAgICB0aGlzLm5leHRUdXJuKCk7XG4gICAgfVxuICB9XG5cbiAgaGFzVW5wbGFjZWRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIxLmhhc1VucGxhY2VkU2hpcHMoKSB8fCB0aGlzLnBsYXllcjIuaGFzVW5wbGFjZWRTaGlwcygpO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnBsYXllcjEuZ2FtZUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpIHx8XG4gICAgICB0aGlzLnBsYXllcjIuZ2FtZUJvYXJkLmFyZUFsbFNoaXBzU3VuaygpXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcC5qc1wiO1xuXG5jb25zdCBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBnYW1lQm9hcmQ7XG4gIHNoaXBzO1xuICBsYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZDtcbiAgbGFzdEhpdDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBBcnJheShHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5nYW1lQm9hcmRbaV0gPSBuZXcgQXJyYXkoR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdhbWVCb2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLmdhbWVCb2FyZFtpXVtqXSA9IFtmYWxzZSwgbnVsbF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zaGlwcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgdGhpcy5sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IG5ldyBBcnJheSgtMSwgLTEpO1xuICAgIHRoaXMubGFzdEhpdCA9IG5ldyBBcnJheSgtMSwgLTEpO1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cbiAgICBpZiAoIXRoaXMuI2lzU2hpcFBsYWNlbWVudFZhbGlkKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSArIGldWzFdID0gc2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdICsgaV1bY29vcmRpbmF0ZXNbMV1dWzFdID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGlmIChcbiAgICAgIGNvb3JkaW5hdGVzWzBdIDwgMCB8fFxuICAgICAgY29vcmRpbmF0ZXNbMF0gPj0gR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQgfHxcbiAgICAgIGNvb3JkaW5hdGVzWzFdIDwgMCB8fFxuICAgICAgY29vcmRpbmF0ZXNbMV0gPj0gR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQgfHxcbiAgICAgIHRoaXMuYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChjb29yZGluYXRlcylcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5nYW1lQm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXVswXSA9IHRydWU7XG4gICAgdGhpcy5sYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCA9IGNvb3JkaW5hdGVzO1xuXG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2FtZUJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV1bMV07XG4gICAgaWYgKHNoaXAgIT09IHVuZGVmaW5lZCAmJiBzaGlwICE9PSBudWxsKSB7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgdGhpcy5sYXN0SGl0ID0gY29vcmRpbmF0ZXM7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChjb29yZGluYXRlcykge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dWzBdO1xuICB9XG5cbiAgZG9lc1NoaXBFeGlzdChjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dWzFdO1xuICAgIHJldHVybiBzaGlwICE9PSB1bmRlZmluZWQgJiYgc2hpcCAhPT0gbnVsbDtcbiAgfVxuXG4gICNpc1NoaXBQbGFjZW1lbnRWYWxpZChjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGxldCBjdXJyZW50WCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGxldCBjdXJyZW50WSA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuI2FyZUNvb3JkaW5hdGVzSW5Cb3VuZHMoW2N1cnJlbnRYLCBjdXJyZW50WV0pIHx8XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkW2N1cnJlbnRYXVtjdXJyZW50WV1bMV0gIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGN1cnJlbnRZKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50WCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNhcmVDb29yZGluYXRlc0luQm91bmRzKGNvb3JkaW5hdGVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvb3JkaW5hdGVzWzBdID49IDAgJiZcbiAgICAgIGNvb3JkaW5hdGVzWzBdIDwgR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQgJiZcbiAgICAgIGNvb3JkaW5hdGVzWzFdID49IDAgJiZcbiAgICAgIGNvb3JkaW5hdGVzWzFdIDwgR0FNRV9CT0FSRF9XSURUSF9IRUlHSFRcbiAgICApO1xuICB9XG5cbiAgaXNTaGlwU3Vuayhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdhbWVCb2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dWzFdO1xuICAgIGlmIChzaGlwID09PSB1bmRlZmluZWQgfHwgc2hpcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcC5pc1N1bmsoKTtcbiAgfVxuXG4gIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50LmlzU3VuaygpO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgZ2V0R2FtZUJvYXJkV2lkdGgoKSB7XG4gICAgcmV0dXJuIEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUO1xuICB9XG5cbiAgZ2V0R2FtZUJvYXJkSGVpZ2h0KCkge1xuICAgIHJldHVybiBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVDtcbiAgfVxuXG4gIGdldE51bU5vdEF0dGFja2VkU3BhY2VzSW5Db2x1bW4oeCkge1xuICAgIGlmICh4IDwgMCB8fCB4ID49IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCBudW1Ob3RBdHRhY2tlZFNwYWNlc0luQ29sdW1uID0gR0FNRV9CT0FSRF9XSURUSF9IRUlHSFQ7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUOyB5KyspIHtcbiAgICAgIGlmICh0aGlzLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoW3gsIHldKSkge1xuICAgICAgICBudW1Ob3RBdHRhY2tlZFNwYWNlc0luQ29sdW1uLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bU5vdEF0dGFja2VkU3BhY2VzSW5Db2x1bW47XG4gIH1cblxuICBnZXROdW1Ob3RBdHRhY2tlZFNwYWNlc0luUm93KHkpIHtcbiAgICBpZiAoeSA8IDAgfHwgeSA+PSBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgbnVtTm90QXR0YWNrZWRTcGFjZXNJblJvdyA9IEdBTUVfQk9BUkRfV0lEVEhfSEVJR0hUO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVDsgeCsrKSB7XG4gICAgICBpZiAodGhpcy5hcmVDb29yZGluYXRlc0F0dGFja2VkKFt4LCB5XSkpIHtcbiAgICAgICAgbnVtTm90QXR0YWNrZWRTcGFjZXNJblJvdy0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudW1Ob3RBdHRhY2tlZFNwYWNlc0luUm93O1xuICB9XG5cbiAgZ2V0QWRqYWNlbnRIaXRzKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgYWRqYWNlbnRIaXRzID0gbmV3IEFycmF5KCk7XG5cbiAgICBjb25zdCBhZGphY2VudENvb3JkaW5hdGVzID0gdGhpcy5nZXRBZGphY2VudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRqYWNlbnRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBhZGphY2VudENvb3JkaW5hdGVzW2ldICE9PSBudWxsICYmXG4gICAgICAgIHRoaXMuYXJlQ29vcmRpbmF0ZXNBdHRhY2tlZChhZGphY2VudENvb3JkaW5hdGVzW2ldKSAmJlxuICAgICAgICB0aGlzLmRvZXNTaGlwRXhpc3QoYWRqYWNlbnRDb29yZGluYXRlc1tpXSlcbiAgICAgICkge1xuICAgICAgICBhZGphY2VudEhpdHMucHVzaChhZGphY2VudENvb3JkaW5hdGVzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkamFjZW50SGl0cy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGphY2VudEhpdHM7XG4gIH1cblxuICBnZXRBZGphY2VudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKCF0aGlzLiNhcmVDb29yZGluYXRlc0luQm91bmRzKGNvb3JkaW5hdGVzKSkge1xuICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkamFjZW50Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoKTtcblxuICAgIGNvbnN0IHRvcCA9IFtjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0gLSAxXTtcbiAgICBjb25zdCByaWdodCA9IFtjb29yZGluYXRlc1swXSArIDEsIGNvb3JkaW5hdGVzWzFdXTtcbiAgICBjb25zdCBib3R0b20gPSBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgMV07XG4gICAgY29uc3QgbGVmdCA9IFtjb29yZGluYXRlc1swXSAtIDEsIGNvb3JkaW5hdGVzWzFdXTtcblxuICAgIGlmICh0b3BbMV0gPj0gMCkge1xuICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKHRvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRbMF0gPCBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVCkge1xuICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKHJpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKG51bGwpO1xuICAgIH1cblxuICAgIGlmIChib3R0b21bMV0gPCBHQU1FX0JPQVJEX1dJRFRIX0hFSUdIVCkge1xuICAgICAgYWRqYWNlbnRDb29yZGluYXRlcy5wdXNoKGJvdHRvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAobGVmdFswXSA+PSAwKSB7XG4gICAgICBhZGphY2VudENvb3JkaW5hdGVzLnB1c2gobGVmdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkamFjZW50Q29vcmRpbmF0ZXMucHVzaChudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRqYWNlbnRDb29yZGluYXRlcztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkRGlzcGxheSB7XG4gIHN0YXRpYyBkcmF3KFxuICAgIGdhbWVCb2FyZCxcbiAgICBjb250YWluZXIsXG4gICAgaGlnaGxpZ2h0U2hpcHMsXG4gICAgdGlsZUNsaWNrSGFuZGxlcixcbiAgICBpc0Rpc2FibGVkLFxuICAgIGZsYXNoTGFzdENvb3JkaW5hdGVzQXR0YWNrZWRcbiAgKSB7XG4gICAgY29uc3QgZGl2R2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZHYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWUtYm9hcmRcIik7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIGRpdkdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICAgIGRpdkdhbWVCb2FyZC5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuI2NyZWF0ZVRpbGVMaXN0KFxuICAgICAgICBnYW1lQm9hcmQsXG4gICAgICAgIGhpZ2hsaWdodFNoaXBzLFxuICAgICAgICB0aWxlQ2xpY2tIYW5kbGVyLFxuICAgICAgICBmbGFzaExhc3RDb29yZGluYXRlc0F0dGFja2VkXG4gICAgICApXG4gICAgKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZHYW1lQm9hcmQpO1xuICB9XG5cbiAgc3RhdGljICNjcmVhdGVUaWxlTGlzdChcbiAgICBnYW1lQm9hcmQsXG4gICAgaGlnaGxpZ2h0U2hpcHMsXG4gICAgdGlsZUNsaWNrSGFuZGxlcixcbiAgICBmbGFzaExhc3RDb29yZGluYXRlc0F0dGFja2VkXG4gICkge1xuICAgIGNvbnN0IGRpdlRpbGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUaWxlTGlzdC5jbGFzc0xpc3QuYWRkKFwidGlsZS1saXN0XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZUJvYXJkLmdldEdhbWVCb2FyZFdpZHRoKCk7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmQuZ2V0R2FtZUJvYXJkSGVpZ2h0KCk7IGkrKykge1xuICAgICAgICBkaXZUaWxlTGlzdC5hcHBlbmRDaGlsZChcbiAgICAgICAgICB0aGlzLiNjcmVhdGVUaWxlKFxuICAgICAgICAgICAgZ2FtZUJvYXJkLmFyZUNvb3JkaW5hdGVzQXR0YWNrZWQoW2ksIGpdKSxcbiAgICAgICAgICAgIGdhbWVCb2FyZC5kb2VzU2hpcEV4aXN0KFtpLCBqXSksXG4gICAgICAgICAgICBnYW1lQm9hcmQuaXNTaGlwU3VuayhbaSwgal0pLFxuICAgICAgICAgICAgaGlnaGxpZ2h0U2hpcHMsXG4gICAgICAgICAgICAoKSA9PiB0aWxlQ2xpY2tIYW5kbGVyKGksIGopLFxuICAgICAgICAgICAgZmxhc2hMYXN0Q29vcmRpbmF0ZXNBdHRhY2tlZCAmJlxuICAgICAgICAgICAgICBpID09PSBnYW1lQm9hcmQubGFzdENvb3JkaW5hdGVzQXR0YWNrZWRbMF0gJiZcbiAgICAgICAgICAgICAgaiA9PT0gZ2FtZUJvYXJkLmxhc3RDb29yZGluYXRlc0F0dGFja2VkWzFdXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaXZUaWxlTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyAjY3JlYXRlVGlsZShcbiAgICBpc0F0dGFja2VkLFxuICAgIGNvbnRhaW5zU2hpcCxcbiAgICBjb250YWluc1N1bmtlblNoaXAsXG4gICAgaGlnaGxpZ2h0U2hpcCxcbiAgICBjbGlja0hhbmRsZXIsXG4gICAgZmxhc2hcbiAgKSB7XG4gICAgY29uc3QgZGl2VGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcblxuICAgIGxldCBjb2xvckNsYXNzO1xuICAgIGxldCBhbHRlcm5hdGVDbGFzcztcbiAgICBpZiAoaXNBdHRhY2tlZCAmJiBjb250YWluc1N1bmtlblNoaXApIHtcbiAgICAgIGNvbG9yQ2xhc3MgPSBcInN1bmtcIjtcbiAgICAgIGFsdGVybmF0ZUNsYXNzID0gaGlnaGxpZ2h0U2hpcCA/IFwic2hpcFwiIDogXCJuZXV0cmFsXCI7XG4gICAgfSBlbHNlIGlmIChpc0F0dGFja2VkICYmIGNvbnRhaW5zU2hpcCkge1xuICAgICAgY29sb3JDbGFzcyA9IFwiaGl0XCI7XG4gICAgICBhbHRlcm5hdGVDbGFzcyA9IGhpZ2hsaWdodFNoaXAgPyBcInNoaXBcIiA6IFwibmV1dHJhbFwiO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRhY2tlZCkge1xuICAgICAgY29sb3JDbGFzcyA9IFwibWlzc1wiO1xuICAgICAgYWx0ZXJuYXRlQ2xhc3MgPSBcIm5ldXRyYWxcIjtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zU2hpcCAmJiBoaWdobGlnaHRTaGlwKSB7XG4gICAgICBjb2xvckNsYXNzID0gXCJzaGlwXCI7XG4gICAgICBhbHRlcm5hdGVDbGFzcyA9IFwic2hpcFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvckNsYXNzID0gXCJuZXV0cmFsXCI7XG4gICAgICBhbHRlcm5hdGVDbGFzcyA9IFwibmV1dHJhbFwiO1xuICAgIH1cbiAgICBpZiAoZmxhc2gpIHtcbiAgICAgIHRoaXMuI2ZsYXNoQ2xhc3MoZGl2VGlsZSwgY29sb3JDbGFzcywgYWx0ZXJuYXRlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZUaWxlLmNsYXNzTGlzdC5hZGQoY29sb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgZGl2VGlsZS5vbmNsaWNrID0gY2xpY2tIYW5kbGVyO1xuXG4gICAgcmV0dXJuIGRpdlRpbGU7XG4gIH1cblxuICBzdGF0aWMgI2ZsYXNoQ2xhc3MoZWxlbWVudCwgZmluYWxDbGFzcywgYWx0ZXJuYXRlQ2xhc3MpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYWx0ZXJuYXRlQ2xhc3MpO1xuICAgIGlmIChmaW5hbENsYXNzICE9PSBhbHRlcm5hdGVDbGFzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChmaW5hbENsYXNzKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFsdGVybmF0ZUNsYXNzKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShmaW5hbENsYXNzKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFsdGVybmF0ZUNsYXNzKTtcbiAgICAgIH0sIDE3MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChmaW5hbENsYXNzKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGFsdGVybmF0ZUNsYXNzKTtcbiAgICAgIH0sIDI0MDApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVCb2FyZERpc3BsYXkgZnJvbSBcIi4vR2FtZUJvYXJkRGlzcGxheS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRGlzcGxheSB7XG4gIHN0YXRpYyBkcmF3KGdhbWUsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHJlRHJhd0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgR2FtZURpc3BsYXkuZHJhdyhnYW1lLCBjb250YWluZXIpO1xuICAgIH07XG5cbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGl2R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2R2FtZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZVwiKTtcbiAgICBpZiAoZ2FtZS5oYXNVbnBsYWNlZFNoaXBzKCkpIHtcbiAgICAgIGRpdkdhbWUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMuI2NyZWF0ZVNoaXBQbGFjZW1lbnRQaGFzZURpc3BsYXkoZ2FtZSwgcmVEcmF3RnVuY3Rpb24pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZHYW1lLmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZUJhdHRsZVBoYXNlRGlzcGxheShnYW1lLCByZURyYXdGdW5jdGlvbikpO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZHYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyAjY3JlYXRlU2hpcFBsYWNlbWVudFBoYXNlRGlzcGxheShnYW1lLCByZURyYXdGdW5jdGlvbikge1xuICAgIGNvbnN0IGRpdlNoaXBQbGFjZW1lbnRQaGFzZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlNoaXBQbGFjZW1lbnRQaGFzZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VtZW50LXBoYXNlLWRpc3BsYXlcIik7XG5cbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKCk7XG5cbiAgICBjb25zdCBzZWxlY3RTaGlwcyA9IHRoaXMuI2NyZWF0ZVNoaXBEcm9wZG93bihjdXJyZW50UGxheWVyKTtcbiAgICBjb25zdCBzZWxlY3REaXJlY3Rpb24gPSB0aGlzLiNjcmVhdGVTaGlwRGlyZWN0aW9uRHJvcGRvd24oKTtcblxuICAgIGNvbnN0IGRpdlNoaXBQbGFjZW1lbnREcm9wZG93bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZTaGlwUGxhY2VtZW50RHJvcGRvd25Hcm91cC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJzaGlwLXBsYWNlbWVudC1kcm9wZG93bi1ncm91cFwiXG4gICAgKTtcbiAgICBkaXZTaGlwUGxhY2VtZW50RHJvcGRvd25Hcm91cC5hcHBlbmRDaGlsZChzZWxlY3RTaGlwcyk7XG4gICAgZGl2U2hpcFBsYWNlbWVudERyb3Bkb3duR3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0RGlyZWN0aW9uKTtcblxuICAgIGRpdlNoaXBQbGFjZW1lbnRQaGFzZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2U2hpcFBsYWNlbWVudERyb3Bkb3duR3JvdXApO1xuXG4gICAgY29uc3QgdGlsZUNsaWNrSGFuZGxlciA9ICh4LCB5KSA9PiB7XG4gICAgICBpZiAoZ2FtZS5wbGFjZVNoaXAoW3gsIHldLCBzZWxlY3RTaGlwcy52YWx1ZSwgc2VsZWN0RGlyZWN0aW9uLnZhbHVlKSkge1xuICAgICAgICByZURyYXdGdW5jdGlvbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkaXZTaGlwUGxhY2VtZW50UGhhc2VEaXNwbGF5LmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy4jY3JlYXRlTGFiZWxlZEdhbWVCb2FyZChcbiAgICAgICAgY3VycmVudFBsYXllci5uYW1lLFxuICAgICAgICBjdXJyZW50UGxheWVyLmdhbWVCb2FyZCxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGlsZUNsaWNrSGFuZGxlcixcbiAgICAgICAgZmFsc2VcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIGRpdlNoaXBQbGFjZW1lbnRQaGFzZURpc3BsYXk7XG4gIH1cblxuICBzdGF0aWMgI2NyZWF0ZVNoaXBEcm9wZG93bihjdXJyZW50UGxheWVyKSB7XG4gICAgY29uc3Qgc2VsZWN0U2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGZvciAoY29uc3Qgc2hpcEluZGV4IGluIGN1cnJlbnRQbGF5ZXIudW5wbGFjZWRTaGlwcykge1xuICAgICAgY29uc3Qgc2hpcCA9IGN1cnJlbnRQbGF5ZXIudW5wbGFjZWRTaGlwc1tzaGlwSW5kZXhdO1xuICAgICAgY29uc3Qgb3B0aW9uU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25TaGlwLnRleHRDb250ZW50ID0gYCR7c2hpcC5uYW1lfSAoJHtzaGlwLmxlbmd0aH0pYDtcbiAgICAgIG9wdGlvblNoaXAudmFsdWUgPSBzaGlwSW5kZXg7XG4gICAgICBzZWxlY3RTaGlwcy5hcHBlbmRDaGlsZChvcHRpb25TaGlwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0U2hpcHM7XG4gIH1cblxuICBzdGF0aWMgI2NyZWF0ZVNoaXBEaXJlY3Rpb25Ecm9wZG93bigpIHtcbiAgICBjb25zdCBvcHRpb25Ib3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25Ib3Jpem9udGFsLnZhbHVlID0gXCJob3Jpem9udGFsXCI7XG4gICAgb3B0aW9uSG9yaXpvbnRhbC50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuXG4gICAgY29uc3Qgb3B0aW9uVmVydGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvblZlcnRpY2FsLnZhbHVlID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIG9wdGlvblZlcnRpY2FsLnRleHRDb250ZW50ID0gXCJWZXJ0aWNhbFwiO1xuXG4gICAgY29uc3Qgc2VsZWN0RGlyZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3REaXJlY3Rpb24uYXBwZW5kQ2hpbGQob3B0aW9uSG9yaXpvbnRhbCk7XG4gICAgc2VsZWN0RGlyZWN0aW9uLmFwcGVuZENoaWxkKG9wdGlvblZlcnRpY2FsKTtcblxuICAgIHJldHVybiBzZWxlY3REaXJlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgI2NyZWF0ZUJhdHRsZVBoYXNlRGlzcGxheShnYW1lLCByZURyYXdGdW5jdGlvbikge1xuICAgIGNvbnN0IGRpdkJhdHRsZVBoYXNlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2QmF0dGxlUGhhc2VEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJiYXR0bGUtcGhhc2UtZGlzcGxheVwiKTtcblxuICAgIGlmIChnYW1lLmlzT3ZlcigpKSB7XG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKCk7XG4gICAgICBjb25zdCBkaXZHYW1lUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdkdhbWVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImdhbWUtcmVzdWx0XCIpO1xuICAgICAgZGl2R2FtZVJlc3VsdC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQbGF5ZXIubmFtZX0gd2lucyFgO1xuICAgICAgZGl2QmF0dGxlUGhhc2VEaXNwbGF5LmFwcGVuZENoaWxkKGRpdkdhbWVSZXN1bHQpO1xuICAgIH1cbiAgICBkaXZCYXR0bGVQaGFzZURpc3BsYXkuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLiNjcmVhdGVMYWJlbGVkR2FtZUJvYXJkTGlzdChnYW1lLCByZURyYXdGdW5jdGlvbilcbiAgICApO1xuXG4gICAgcmV0dXJuIGRpdkJhdHRsZVBoYXNlRGlzcGxheTtcbiAgfVxuXG4gIHN0YXRpYyAjY3JlYXRlTGFiZWxlZEdhbWVCb2FyZExpc3QoZ2FtZSwgcmVEcmF3RnVuY3Rpb24pIHtcbiAgICBjb25zdCBpc1BsYXllcjFHYW1lQm9hcmREaXNhYmxlZCA9IGdhbWUuY3VycmVudFR1cm4gIT09IDEgfHwgZ2FtZS5pc092ZXIoKTtcbiAgICBjb25zdCBpc1BsYXllcjJHYW1lQm9hcmREaXNhYmxlZCA9IGdhbWUuY3VycmVudFR1cm4gIT09IDAgfHwgZ2FtZS5pc092ZXIoKTtcblxuICAgIGNvbnN0IHRpbGVDbGlja0hhbmRsZXIgPSAoaXNEaXNhYmxlZCwgeCwgeSkgPT4ge1xuICAgICAgaWYgKCFpc0Rpc2FibGVkKSB7XG4gICAgICAgIGdhbWUucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xuICAgICAgICByZURyYXdGdW5jdGlvbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkaXZMYWJlbGVkR2FtZUJvYXJkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TGFiZWxlZEdhbWVCb2FyZExpc3QuY2xhc3NMaXN0LmFkZChcImxhYmVsZWQtZ2FtZS1ib2FyZC1saXN0XCIpO1xuICAgIGRpdkxhYmVsZWRHYW1lQm9hcmRMaXN0LmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy4jY3JlYXRlTGFiZWxlZEdhbWVCb2FyZChcbiAgICAgICAgZ2FtZS5wbGF5ZXIxLm5hbWUsXG4gICAgICAgIGdhbWUucGxheWVyMS5nYW1lQm9hcmQsXG4gICAgICAgIGlzUGxheWVyMUdhbWVCb2FyZERpc2FibGVkLFxuICAgICAgICAoeCwgeSkgPT4gdGlsZUNsaWNrSGFuZGxlcihpc1BsYXllcjFHYW1lQm9hcmREaXNhYmxlZCwgeCwgeSksXG4gICAgICAgIGlzUGxheWVyMUdhbWVCb2FyZERpc2FibGVkLFxuICAgICAgICAhZ2FtZS5wbGF5ZXIyLmlzSHVtYW4gJiYgKCFnYW1lLmlzT3ZlcigpIHx8IGdhbWUuY3VycmVudFR1cm4gPT09IDEpXG4gICAgICApXG4gICAgKTtcbiAgICBkaXZMYWJlbGVkR2FtZUJvYXJkTGlzdC5hcHBlbmRDaGlsZChcbiAgICAgIHRoaXMuI2NyZWF0ZUxhYmVsZWRHYW1lQm9hcmQoXG4gICAgICAgIGdhbWUucGxheWVyMi5uYW1lLFxuICAgICAgICBnYW1lLnBsYXllcjIuZ2FtZUJvYXJkLFxuICAgICAgICBpc1BsYXllcjJHYW1lQm9hcmREaXNhYmxlZCxcbiAgICAgICAgKHgsIHkpID0+IHRpbGVDbGlja0hhbmRsZXIoaXNQbGF5ZXIyR2FtZUJvYXJkRGlzYWJsZWQsIHgsIHkpLFxuICAgICAgICBpc1BsYXllcjJHYW1lQm9hcmREaXNhYmxlZCxcbiAgICAgICAgIWdhbWUucGxheWVyMS5pc0h1bWFuICYmICghZ2FtZS5pc092ZXIoKSB8fCBnYW1lLmN1cnJlbnRUdXJuID09PSAwKVxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIGRpdkxhYmVsZWRHYW1lQm9hcmRMaXN0O1xuICB9XG5cbiAgc3RhdGljICNjcmVhdGVMYWJlbGVkR2FtZUJvYXJkKFxuICAgIHBsYXllck5hbWUsXG4gICAgZ2FtZUJvYXJkLFxuICAgIGhpZ2hsaWdodFNoaXBzLFxuICAgIHRpbGVDbGlja0hhbmRsZXIsXG4gICAgaXNEaXNhYmxlZCxcbiAgICBmbGFzaExhc3RDb29yZGluYXRlc0F0dGFja2VkXG4gICkge1xuICAgIGNvbnN0IGRpdlBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlBsYXllck5hbWUuY2xhc3NMaXN0LmFkZChcInBsYXllci1uYW1lXCIpO1xuICAgIGRpdlBsYXllck5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuXG4gICAgY29uc3QgZGl2TGFiZWxlZEdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2TGFiZWxlZEdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwibGFiZWxlZC1nYW1lLWJvYXJkXCIpO1xuICAgIGRpdkxhYmVsZWRHYW1lQm9hcmQuYXBwZW5kQ2hpbGQoZGl2UGxheWVyTmFtZSk7XG4gICAgR2FtZUJvYXJkRGlzcGxheS5kcmF3KFxuICAgICAgZ2FtZUJvYXJkLFxuICAgICAgZGl2TGFiZWxlZEdhbWVCb2FyZCxcbiAgICAgIGhpZ2hsaWdodFNoaXBzLFxuICAgICAgdGlsZUNsaWNrSGFuZGxlcixcbiAgICAgIGlzRGlzYWJsZWQsXG4gICAgICBmbGFzaExhc3RDb29yZGluYXRlc0F0dGFja2VkXG4gICAgKTtcblxuICAgIHJldHVybiBkaXZMYWJlbGVkR2FtZUJvYXJkO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJVdGlscyB7XG4gIC8qXG4gICAgICAgIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChpbmNsdXNpdmUpXG4gICAgKi9cbiAgc3RhdGljIGdldFJhbmRvbUludGVnZXJJblJhbmdlKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkLmpzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIG5hbWU7XG4gIGlzSHVtYW47XG4gIHVucGxhY2VkU2hpcHM7XG4gIGdhbWVCb2FyZDtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBpc0h1bWFuKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlzSHVtYW4gPSBpc0h1bWFuO1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuXG4gICAgdGhpcy51bnBsYWNlZFNoaXBzID0gbmV3IEFycmF5KFxuICAgICAgbmV3IFNoaXAoNSwgXCJDYXJyaWVyXCIpLFxuICAgICAgbmV3IFNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpLFxuICAgICAgbmV3IFNoaXAoMywgXCJEZXN0cm95ZXJcIiksXG4gICAgICBuZXcgU2hpcCgzLCBcIlN1Ym1hcmluZVwiKSxcbiAgICAgIG5ldyBTaGlwKDIsIFwiUGF0cm9sIEJvYXRcIilcbiAgICApO1xuICB9XG5cbiAgaGFzVW5wbGFjZWRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy51bnBsYWNlZFNoaXBzLmxlbmd0aCA+IDA7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBuYW1lO1xuICBsZW5ndGg7XG4gIGhpdENvdW50O1xuXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0Q291bnQgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0Q291bnQrKztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lLmpzXCI7XG5pbXBvcnQgR2FtZURpc3BsYXkgZnJvbSBcIi4vR2FtZURpc3BsYXkuanNcIjtcblxuY29uc3QgZGl2R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxubGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuR2FtZURpc3BsYXkuZHJhdyhnYW1lLCBkaXZHYW1lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=