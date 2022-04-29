/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/User */ \"./src/ts/user/User.ts\");\n/* harmony import */ var _slot_Slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slot/Slot */ \"./src/ts/slot/Slot.ts\");\n/* harmony import */ var _slot_Reel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slot/Reel */ \"./src/ts/slot/Reel.ts\");\nvar _a;\r\n\r\n\r\n\r\nlet reels = [\r\n    new _slot_Reel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([1, 3, 3, 3, 3, 2, 7, 4, 4, 4, 4, 7, 7, 5, 5, 5, 5, 2, 2, 0, 6, 6, 6, 6, 3]),\r\n    new _slot_Reel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([1, 7, 5, 7, 5, 5, 5, 2, 6, 2, 6, 6, 6, 6, 3, 0, 3, 3, 3, 7, 4, 7, 4, 4, 4]),\r\n    new _slot_Reel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([1, 3, 3, 3, 3, 7, 7, 0, 4, 4, 4, 4, 7, 7, 5, 5, 5, 5, 2, 2, 6, 6, 6, 6, 3])\r\n];\r\n//construct slot game\r\nconst game = new _slot_Slot__WEBPACK_IMPORTED_MODULE_1__[\"default\"](reels);\r\n//construct user\r\nconst gamer = new _user_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Root gamer', 1000, game);\r\n(_a = document.getElementById(\"startGameButton\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\r\n    gamer.spin();\r\n});\r\n\n\n//# sourceURL=webpack://slot-emul/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/slot/Banner.ts":
/*!*******************************!*\
  !*** ./src/ts/slot/Banner.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banner)\n/* harmony export */ });\nclass Banner {\r\n    constructor(image, rank) {\r\n        this.image = image;\r\n        this.rank = rank;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://slot-emul/./src/ts/slot/Banner.ts?");

/***/ }),

/***/ "./src/ts/slot/Reel.ts":
/*!*****************************!*\
  !*** ./src/ts/slot/Reel.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Reel)\n/* harmony export */ });\n/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner */ \"./src/ts/slot/Banner.ts\");\n\r\nclass Reel {\r\n    constructor(indexes) {\r\n        this.strip = [];\r\n        this.banners = [\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('sevens.jpg', 0),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('seven.jpg', 1),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('orange.jpg', 2),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('bell.jpg', 3),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('plum.jpg', 4),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('raspberry.jpg', 5),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('bar.jpg', 6),\r\n            new _Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('cherry.jpg', 7)\r\n        ];\r\n        if (indexes.length > 0) {\r\n            indexes.forEach(index => this.strip.push(this.banners[index]));\r\n        }\r\n        this.startPosition = this.stopPosition = Math.floor(Math.random() * this.strip.length);\r\n        this.prevPosition = this.stopPosition - 1;\r\n        this.nextPosition = this.stopPosition + 1;\r\n        if (this.prevPosition < 0) {\r\n            this.prevPosition = this.strip.length - 1;\r\n        }\r\n        if (this.nextPosition >= this.strip.length) {\r\n            this.nextPosition = 0;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://slot-emul/./src/ts/slot/Reel.ts?");

/***/ }),

/***/ "./src/ts/slot/Slot.ts":
/*!*****************************!*\
  !*** ./src/ts/slot/Slot.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slot)\n/* harmony export */ });\n/* harmony import */ var _tools_randomizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/randomizer */ \"./src/ts/tools/randomizer.ts\");\n\r\nclass Slot {\r\n    constructor(reels) {\r\n        this.reels = [];\r\n        this.reels = reels;\r\n    }\r\n    spin() {\r\n        if (this.reels.length > 0) {\r\n            this.reels.forEach((reel) => {\r\n                reel.startPosition = reel.stopPosition;\r\n                reel.stopPosition = (0,_tools_randomizer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(reel.strip.length);\r\n            });\r\n        }\r\n    }\r\n    generateScreen() {\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://slot-emul/./src/ts/slot/Slot.ts?");

/***/ }),

/***/ "./src/ts/tools/randomizer.ts":
/*!************************************!*\
  !*** ./src/ts/tools/randomizer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomizer)\n/* harmony export */ });\nfunction randomizer(limit) {\r\n    return Math.floor(Math.random() * limit);\r\n}\r\n\n\n//# sourceURL=webpack://slot-emul/./src/ts/tools/randomizer.ts?");

/***/ }),

/***/ "./src/ts/user/User.ts":
/*!*****************************!*\
  !*** ./src/ts/user/User.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\r\n    constructor(name, credit, game) {\r\n        this.name = name;\r\n        this.credit = credit;\r\n        this.game = game;\r\n    }\r\n    spin() {\r\n        this.game.spin();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://slot-emul/./src/ts/user/User.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;