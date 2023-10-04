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

/***/ "./src/Js/index.js":
/*!*************************!*\
  !*** ./src/Js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   respStartIndex: () => (/* binding */ respStartIndex)\n/* harmony export */ });\n/* harmony import */ var _modules_burgermenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgermenu */ \"./src/Js/modules/burgermenu.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/Js/modules/slider.js\");\n/* harmony import */ var _modules_bookcatnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bookcatnav */ \"./src/Js/modules/bookcatnav.js\");\n/* harmony import */ var _modules_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fetch */ \"./src/Js/modules/fetch.js\");\n/* harmony import */ var _modules_renderdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderdata */ \"./src/Js/modules/renderdata.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst bookCards = document.querySelectorAll(\".cards-block__cards-item\");\r\n\r\nconst loadMoreButton = document.querySelector(\".books-block__button\");\r\n\r\nconst buyButtons = document.querySelectorAll(\".cards-item__button\");\r\nconst buyButton = document.querySelector(\".cards-item__button\");\r\nconst cartCounter = document.querySelector(\".cart-count\");\r\n\r\n////Burger menu\r\n\r\n(0,_modules_burgermenu__WEBPACK_IMPORTED_MODULE_0__.burgerMenuForMob)();\r\n\r\n////Start Slider\r\n\r\n_modules_slider__WEBPACK_IMPORTED_MODULE_1__.posterItems.forEach(_modules_slider__WEBPACK_IMPORTED_MODULE_1__.scroll);\r\n_modules_slider__WEBPACK_IMPORTED_MODULE_1__.posterDotz.forEach(_modules_slider__WEBPACK_IMPORTED_MODULE_1__.scroll);\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.autoScroll)();\r\n\r\n////Book sidebar category navigation\r\n\r\nconst chooseBookCategory = (item, index) => {\r\n  let currentIndex;\r\n  item.addEventListener(\"click\", () => {\r\n    currentIndex = index;\r\n    (0,_modules_bookcatnav__WEBPACK_IMPORTED_MODULE_2__.thisBookCategoty)(currentIndex);\r\n    (0,_modules_fetch__WEBPACK_IMPORTED_MODULE_3__.checkCatForResp)();\r\n    showCards();\r\n  });\r\n};\r\n\r\n_modules_bookcatnav__WEBPACK_IMPORTED_MODULE_2__.bookCategory.forEach(chooseBookCategory);\r\n\r\n//// Fetch response to GoogleBooks\r\n\r\nlet respStartIndex = 0;\r\n\r\n(0,_modules_fetch__WEBPACK_IMPORTED_MODULE_3__.checkCatForResp)();\r\n\r\n//Show info from response on cards\r\n\r\nasync function showCards() {\r\n  let booksArray = await (0,_modules_fetch__WEBPACK_IMPORTED_MODULE_3__.sendRequest)();\r\n  console.log(booksArray);\r\n  await (0,_modules_renderdata__WEBPACK_IMPORTED_MODULE_4__.renderData)(booksArray);\r\n}\r\n\r\nshowCards();\r\n\r\nfunction showMoreCards() {\r\n  loadMoreButton.addEventListener(\"click\", () => {\r\n    respStartIndex += 6;\r\n    showCards();\r\n  });\r\n}\r\n\r\nshowMoreCards();\r\n\r\n//// Cart counter\r\n\r\n// let shopCount = 0;\r\n\r\n// cartCounter.innerHTML = shopCount;\r\n\r\n// const checkCount = (count) => {\r\n//   if (count) {\r\n//     cartCounter.classList.add(\"cart-count__active\");\r\n//   } else {\r\n//     cartCounter.classList.remove(\"cart-count__active\");\r\n//   }\r\n// };\r\n\r\n// checkCount(shopCount);\r\n\r\n// const countPlus = () => (cartCounter.innerHTML = ++shopCount);\r\n// const countMinus = () => (cartCounter.innerHTML = --shopCount);\r\n\r\n// function addGoods() {\r\n//   if (this.innerHTML == \"buy now\") {\r\n//     this.classList.add(\"button__tabbed\");\r\n//     this.innerHTML = \"in the cart\";\r\n//     countPlus();\r\n//   } else {\r\n//     this.classList.remove(\"button__tabbed\");\r\n//     this.innerHTML = \"buy now\";\r\n//     countMinus();\r\n//   }\r\n//   checkCount(shopCount);\r\n// }\r\n\r\n// buyButtons.forEach((btn) => btn.addEventListener(\"click\", addGoods));\r\n\r\n// LOCALSTORAGE\r\n\r\n//// класс для объекта \"Корзина\"\r\n\r\nfunction addGoods() {\r\n  if (this.innerHTML == \"buy now\") {\r\n    this.classList.add(\"button__tabbed\");\r\n    this.innerHTML = \"in the cart\";\r\n  } else {\r\n    this.classList.remove(\"button__tabbed\");\r\n    this.innerHTML = \"buy now\";\r\n  }\r\n}\r\n\r\n//   checkCount(shopCount);\r\n// }\r\n\r\nbuyButtons.forEach((btn) =>\r\n  btn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    console.log(e.target.closest(\".cards-item__info\"));\r\n  })\r\n);\r\n\n\n//# sourceURL=webpack://bookshop_project/./src/Js/index.js?");

/***/ }),

/***/ "./src/Js/modules/bookcatnav.js":
/*!**************************************!*\
  !*** ./src/Js/modules/bookcatnav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bookCategory: () => (/* binding */ bookCategory),\n/* harmony export */   thisBookCategoty: () => (/* binding */ thisBookCategoty)\n/* harmony export */ });\nconst bookCategory = document.querySelectorAll(\".book-list__list-item\");\r\n\r\nconst thisBookCategoty = (index) => {\r\n  bookCategory.forEach((item) =>\r\n    item.classList.remove(\"book-list__list-item_active\")\r\n  );\r\n  bookCategory[index].classList.add(\"book-list__list-item_active\");\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop_project/./src/Js/modules/bookcatnav.js?");

/***/ }),

/***/ "./src/Js/modules/burgermenu.js":
/*!**************************************!*\
  !*** ./src/Js/modules/burgermenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerMenuForMob: () => (/* binding */ burgerMenuForMob)\n/* harmony export */ });\nconst menuButton = document.querySelector(\".header__burger-logo\");\r\nconst bugerMenuBody = document.querySelector(\".header__burger-body\");\r\n\r\nfunction burgerMenuForMob() {\r\n  menuButton.addEventListener(\"click\", () => {\r\n    menuButton.classList.toggle(\"used\");\r\n    bugerMenuBody.classList.toggle(\"shown\");\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://bookshop_project/./src/Js/modules/burgermenu.js?");

/***/ }),

/***/ "./src/Js/modules/fetch.js":
/*!*********************************!*\
  !*** ./src/Js/modules/fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkCatForResp: () => (/* binding */ checkCatForResp),\n/* harmony export */   sendRequest: () => (/* binding */ sendRequest)\n/* harmony export */ });\n/* harmony import */ var _bookcatnav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookcatnav */ \"./src/Js/modules/bookcatnav.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/Js/index.js\");\n///// fetch запрос на сервер\r\nconst APIKey = \"AIzaSyCtJI5Ny3xpinAktf4VXAeiWG3j0-j1B1k\";\r\n\r\n\r\n\r\n\r\nlet subjResp;\r\n\r\nconst checkCatForResp = () => {\r\n  _bookcatnav__WEBPACK_IMPORTED_MODULE_0__.bookCategory.forEach((item) => {\r\n    if (item.classList.contains(\"book-list__list-item_active\")) {\r\n      subjResp = item.innerText;\r\n    }\r\n  });\r\n};\r\n\r\nasync function sendRequest() {\r\n  let URL = `https://www.googleapis.com/books/v1/volumes?q=\"subject:${subjResp}\"&key=${APIKey}&printType=books&startIndex=${___WEBPACK_IMPORTED_MODULE_1__.respStartIndex}&maxResults=6&langRestrict=en`;\r\n  const response = await fetch(URL);\r\n  const data = await response.json();\r\n  return data.items;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop_project/./src/Js/modules/fetch.js?");

/***/ }),

/***/ "./src/Js/modules/renderdata.js":
/*!**************************************!*\
  !*** ./src/Js/modules/renderdata.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderData: () => (/* binding */ renderData)\n/* harmony export */ });\nconst itemImages = document.querySelectorAll(\".cards-item__img\");\r\nconst itemAuthor = document.querySelectorAll(\".cards-item__author\");\r\nconst itemTitles = document.querySelectorAll(\".cards-item__title\");\r\nconst itemStars = document.querySelectorAll(\".cards-item__stars\");\r\nconst itemStarsActive = document.querySelectorAll(\".cards-item__stars_active\");\r\nconst itemViews = document.querySelectorAll(\".cards-item__views\");\r\nconst itemDiscs = document.querySelectorAll(\".cards-item__disc\");\r\nconst itemPrices = document.querySelectorAll(\".cards-item__price\");\r\n\r\nfunction renderData(data) {\r\n  for (let i = 0; i < data.length; i++) {\r\n    itemTitles[i].innerHTML = data[i].volumeInfo.title;\r\n    if (!data[i].volumeInfo.authors) {\r\n      itemAuthor[i].innerHTML = \"N/A\";\r\n    } else if (data[i].volumeInfo.authors.length > 1) {\r\n      itemAuthor[i].innerHTML = data[i].volumeInfo.authors.toString();\r\n    } else {\r\n      itemAuthor[i].innerHTML = data[i].volumeInfo.authors[0];\r\n    }\r\n    if (!data[i].volumeInfo.imageLinks) {\r\n      itemImages[\r\n        i\r\n      ].innerHTML = `<img src=\"/src/img/placeholder_pic.jpg\" alt=\"pic of book\" />`;\r\n    } else {\r\n      itemImages[\r\n        i\r\n      ].innerHTML = `<img src=\"${data[i].volumeInfo.imageLinks.thumbnail}\" alt=\"pic of book\" />`;\r\n    }\r\n    if (!data[i].volumeInfo.description) {\r\n      itemDiscs[i].innerHTML = \"N/A\";\r\n    } else {\r\n      itemDiscs[i].innerHTML = data[i].volumeInfo.description;\r\n    }\r\n    if (data[i].saleInfo.retailPrice) {\r\n      itemPrices[\r\n        i\r\n      ].innerHTML = `${data[i].saleInfo.retailPrice.currencyCode} ${data[i].saleInfo.retailPrice.amount}`;\r\n    }\r\n\r\n    if (data[i].volumeInfo.ratingsCount) {\r\n      itemViews[i].innerHTML = `${data[i].volumeInfo.ratingsCount} review`;\r\n    }\r\n    if (data[i].volumeInfo.averageRating) {\r\n      itemStarsActive[i].style.width = `${\r\n        data[i].volumeInfo.averageRating / 0.05\r\n      }%`;\r\n    } else {\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop_project/./src/Js/modules/renderdata.js?");

/***/ }),

/***/ "./src/Js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/Js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoScroll: () => (/* binding */ autoScroll),\n/* harmony export */   posterDotz: () => (/* binding */ posterDotz),\n/* harmony export */   posterItems: () => (/* binding */ posterItems),\n/* harmony export */   scroll: () => (/* binding */ scroll)\n/* harmony export */ });\n// слайдер прокрутки картинок\r\nconst posterItems = document.querySelectorAll(\".poster-items__item\");\r\nconst posterDotz = document.querySelectorAll(\".sliderdotz__item\");\r\n\r\nlet currentIndex = 0;\r\n\r\nconst thisPoster = (index) => {\r\n  posterDotz.forEach((item) =>\r\n    item.classList.remove(\"sliderdotz__item_active\")\r\n  );\r\n  posterDotz[index].classList.add(\"sliderdotz__item_active\");\r\n\r\n  posterItems.forEach((item) =>\r\n    item.classList.remove(\"poster-items__item_active\")\r\n  );\r\n  posterItems[index].classList.add(\"poster-items__item_active\");\r\n};\r\n\r\nconst scroll = (item, index) => {\r\n  item.addEventListener(\"click\", () => {\r\n    currentIndex = index;\r\n    thisPoster(currentIndex);\r\n  });\r\n};\r\n\r\nconst autoScroll = () => {\r\n  let index = 0;\r\n  setInterval(() => {\r\n    thisPoster(index);\r\n    if (index == posterItems.length - 1) {\r\n      index = 0;\r\n    } else {\r\n      index++;\r\n    }\r\n  }, 5000);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop_project/./src/Js/modules/slider.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Js/index.js");
/******/ 	
/******/ })()
;