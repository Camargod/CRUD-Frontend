(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/app.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/app.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<simple-notifications>\n</simple-notifications>\n\n<div class=\"header\">\n  <div class=\"title\">UserCad</div>\n\n  <div id=\"menu\" class=\"sections-menu\">\n    <div data-menuanchor=\"Home\" [class.item-selected]=\"headerSelectedSection == 0\" [hidden]=\"!isLogged\" (click)=\"moveUp()\" class=\"item\">  Home </div>\n    <div data-menuanchor=\"Home\" [class.item-selected]=\"headerSelectedSection == 0\" [hidden]=\"isLogged\" class=\"item\"> Login </div>\n    <div data-menuanchor=\"Notas\" [class.item-selected]=\"headerSelectedSection == 1\" [hidden]=\"!isLogged\" (click)=\"moveDown()\" class=\"item\"> Sistema </div>\n  </div>\n\n  <div class=\"right-side\"></div>\n</div>\n  \n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" class=\"full-page\">\n  <div class=\"section\" id=\"section0\"> \n      <home-page *ngIf=\"isLogged\" [admin]=\"admin\">\n      </home-page>\n      <login-page id=\"login\" *ngIf=\"!isLogged\" (onLogin)=\"login($event,'false')\">\n      </login-page>\n  </div>\n\n  <div class=\"section system\" id=\"section1\">\n    <div class=\"slide\" data-anchor=\"slide1\">\n      <div *ngIf=\"isLoaded\">\n        <user-create [users]=\"usersCards\">\n        </user-create>\n      </div>\n    </div>\n    <!-- <div class=\"slide\" data-anchor=\"slide2\">Two 2</div> -->\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home-page/home-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home-page/home-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\">\n    <div class=\"header\">\n        <div class= \"welcome\">\n            Bem vindo {{admin.username}}\n        </div>\n    </div>\n    <div class=\"body\">\n\n    </div>\n    <div class=\"footer\">\n        <span class=\"textLoaded\">{{time}}</span>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-page/login-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-page/login-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"circle\"></div>\n\n<div class=\"login-page\">\n    <div class=\"login-area\">\n        <div id=\"my-particles\" class=\"image\">\n            \n        </div>\n        <div class=\"login-form\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"form-signin\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Faça seu login</h1>\n                <label for=\"username\" class=\"sr-only\">Username</label>\n                <input type=\"user\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" required=\"\" autofocus=\"\" ngModel required>\n                <label for=\"pwd\" class=\"sr-only\">Password</label>\n                <input type=\"password\" id=\"pwd\" name=\"pwd\" class=\"form-control\" formControlName=\"pwd\" placeholder=\"Password\" required=\"\" ngModel required>\n                <div class=\"checkbox mb-3\">\n                  <label>\n                    <input type=\"checkbox\" value=\"remember-me\"> Lembre de mim\n                  </label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Entrar</button>\n              </form>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-card/user-card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-card/user-card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" *ngIf=\"!userInfo.isEditing\">\n    <div class=\"head\">\n        <img class=\"image\" width=\"55px\" height=\"55px\" onerror=\"this.src='https://iomed.health/assets/img/100x100/blank-user.png'\" src={{userInfo.user.avatar_url}} alt=\"Foto do Usuario\"/>\n        <span class=\"name\">{{userInfo.user.name}}</span>\n        <svg class=\"bi bi-trash delete-icon\" (click)=\"deleteUser()\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 20 20\" fill=\"#3282b8\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z\"></path>\n            <path fill-rule=\"evenodd\" d=\"M16.5 5a1 1 0 01-1 1H15v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6h-.5a1 1 0 01-1-1V4a1 1 0 011-1H8a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 6L6 6.059V15a1 1 0 001 1h6a1 1 0 001-1V6.059L13.882 6H6.118zM4.5 5V4h11v1h-11z\" clip-rule=\"evenodd\"></path>\n        </svg>\n        <svg aria-hidden=\"true\" width=\"1.3em\" height=\"1.3em\" (click)=\"userInfo.isEditing = !userInfo.isEditing\" class=\"svg-icon va-text-bottom o50 iconPencilSm\"  viewBox=\"0 0 16 16\">\n            <path d=\"M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z\"></path>\n        </svg>\n    </div>\n    <div class=\"body\">\n        <span>{{userInfo.user.bio}}</span>\n    </div>\n</div>\n\n<form form [formGroup]=\"updateForm\" (ngSubmit)=\"updateOrSaveUser()\" class=\"card\" *ngIf=\"userInfo.isEditing\">\n\n    <div class=\"head\">\n        <img class=\"image\" width=\"55px\" height=\"55px\" onerror=\"this.src='https://iomed.health/assets/img/100x100/blank-user.png'\" src={{userInfo.user.avatar_url}} alt=\"Foto do Usuario\"/>\n        <input class=\"name\" formControlName=\"name\" title=\"Nome\" value=\"{{userInfo.user.name}}\">\n        <label>\n            <input type=\"submit\" />\n            <svg class=\"check-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 22 22\"><path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/></svg>\n        </label>\n        <svg class=\"bi bi-trash delete-icon\" (click)=\"deleteUser()\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 20 20\" fill=\"#3282b8\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z\"></path>\n            <path fill-rule=\"evenodd\" d=\"M16.5 5a1 1 0 01-1 1H15v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6h-.5a1 1 0 01-1-1V4a1 1 0 011-1H8a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 6L6 6.059V15a1 1 0 001 1h6a1 1 0 001-1V6.059L13.882 6H6.118zM4.5 5V4h11v1h-11z\" clip-rule=\"evenodd\"></path>\n        </svg>\n        <svg aria-hidden=\"true\" width=\"1.3em\" height=\"1.3em\" (click)=\"userInfo.isEditing = !userInfo.isEditing\" class=\"svg-icon va-text-bottom o50 iconPencilSm\"  viewBox=\"0 0 16 16\">\n            <path d=\"M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z\"></path>\n        </svg>\n    </div>\n    <div class=\"body\">\n        <input class=\"bio-input\" formControlName=\"bio\" title=\"Biografia\" value=\"{{userInfo.user.bio}}\">\n    </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-create/user-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-create/user-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n    <div class=\"header\">\n        <h1>Usuários</h1>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"newUser();\" >Adicionar Usuario</button>\n    </div>\n    <div *ngIf=\"users\">\n        <div class=\"users\">\n            <div *ngFor=\"let item of users; let i = index\">\n                <user-card id=\"i\" *ngIf=\"item.user.id\" [userInfo]='item' (delete)=\"delete(i)\"></user-card>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/entities/admin.ts":
/*!***********************************!*\
  !*** ./src/app/entities/admin.ts ***!
  \***********************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Admin {
    constructor(id, username, pwd) {
        this.id = id;
        this.username = username;
        this.pwd = pwd;
    }
}


/***/ }),

/***/ "./src/app/main/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/main/app.component.scss":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Bree+Serif&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n.header {\n  background-color: #393939;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.header .title {\n  font-family: \"Bree Serif\", serif;\n  font-size: 22px;\n  color: #3282b8;\n  padding-left: 10px;\n  flex: 1;\n}\n.header .sections-menu {\n  flex: 1;\n  line-height: 2;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 4px;\n  font-family: \"Roboto\", monospace;\n}\n.header .sections-menu .item {\n  padding-left: 25px;\n  padding-right: 25px;\n  color: white;\n  border-radius: 8px;\n  transition-duration: 0.5s;\n  -webkit-transition-duration: 0.5s;\n  text-decoration: none !important;\n}\n.header .sections-menu .item:hover {\n  text-shadow: 2px 2px black;\n  cursor: pointer;\n}\n.header .sections-menu .item-selected {\n  padding-left: 18px;\n  padding-top: 0px;\n  padding-right: 18px;\n  background-color: #3282b8;\n  border-radius: 14px;\n  transition-duration: 1.2s;\n  -webkit-transition-duration: 1.2s;\n  box-shadow: 3px 2px 8px black;\n  text-decoration: none;\n  cursor: none !important;\n}\n.header .sections-menu .item-selected:hover {\n  cursor: none !important;\n  text-shadow: 0px 0px black;\n}\n.header .sections-menu .item-selected a {\n  color: black;\n}\n.header .right-side {\n  flex: 1;\n}\n.header a {\n  text-decoration: none;\n  color: white;\n}\n.system {\n  color: white;\n}\n:host ::ng-deep .fp-tableCell {\n  vertical-align: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1hcmdvL0NvZGVzL0NvZGUvQ1JVRC1Gcm9udGVuZC9zcmMvYXBwL21haW4vYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUNBLDBFQUFBO0FBRVI7RUFFRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDREY7QURFRTtFQUVFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNESjtBREdFO0VBRUUsT0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREdJO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFNQSxnQ0FBQTtBQ1BOO0FERU07RUFFRSwwQkFBQTtFQUNBLGVBQUE7QUNEUjtBREtJO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNKTjtBREtNO0VBRUUsdUJBQUE7RUFDQSwwQkFBQTtBQ0pSO0FETU07RUFFRSxZQUFBO0FDTFI7QURVRTtFQUVFLE9BQUE7QUNUSjtBRFdFO0VBRUUscUJBQUE7RUFDQSxZQUFBO0FDVko7QURjQTtFQUVFLFlBQUE7QUNaRjtBRGVBO0VBRUUsd0JBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CcmVlK1NlcmlmJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XG5cbi5oZWFkZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LDU3LDU3KTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgLnRpdGxlXG4gIHtcbiAgICBmb250LWZhbWlseTogJ0JyZWUgU2VyaWYnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IzMyODJiODtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZmxleDogMTtcbiAgfVxuICAuc2VjdGlvbnMtbWVudVxuICB7XG4gICAgZmxleDogMTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIG1vbm9zcGFjZTtcbiAgICAuaXRlbVxuICAgIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgJjpob3ZlclxuICAgICAge1xuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICB9XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLml0ZW0tc2VsZWN0ZWRcbiAgICB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjgyYjg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgICAgIGJveC1zaGFkb3c6IDNweCAycHggOHB4IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgICAgIFxuICAgICAgY3Vyc29yOm5vbmUgIWltcG9ydGFudDtcbiAgICAgICY6aG92ZXJcbiAgICAgIHtcbiAgICAgICAgY3Vyc29yOm5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggYmxhY2s7XG4gICAgICB9XG4gICAgICBhXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmlnaHQtc2lkZVxuICB7XG4gICAgZmxleDogMTtcbiAgfVxuICBhXG4gIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlOyAgICAgIFxuICB9XG59XG5cbi5zeXN0ZW1cbntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZwLXRhYmxlQ2VsbFxue1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QnJlZStTZXJpZiZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMzMjgyYjg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZmxleDogMTtcbn1cbi5oZWFkZXIgLnNlY3Rpb25zLW1lbnUge1xuICBmbGV4OiAxO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBtb25vc3BhY2U7XG59XG4uaGVhZGVyIC5zZWN0aW9ucy1tZW51IC5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5oZWFkZXIgLnNlY3Rpb25zLW1lbnUgLml0ZW06aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlciAuc2VjdGlvbnMtbWVudSAuaXRlbS1zZWxlY3RlZCB7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyODJiODtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzO1xuICBib3gtc2hhZG93OiAzcHggMnB4IDhweCBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5oZWFkZXIgLnNlY3Rpb25zLW1lbnUgLml0ZW0tc2VsZWN0ZWQ6aG92ZXIge1xuICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggYmxhY2s7XG59XG4uaGVhZGVyIC5zZWN0aW9ucy1tZW51IC5pdGVtLXNlbGVjdGVkIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG4uaGVhZGVyIC5yaWdodC1zaWRlIHtcbiAgZmxleDogMTtcbn1cbi5oZWFkZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3lzdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZwLXRhYmxlQ2VsbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/main/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_userDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userDataService */ "./src/app/services/userDataService.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
/* harmony import */ var _entities_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entities/admin */ "./src/app/entities/admin.ts");






let AppComponent = class AppComponent {
    constructor(_cookieService, _userDataService, _notifications) {
        this._cookieService = _cookieService;
        this._userDataService = _userDataService;
        this._notifications = _notifications;
        this.headerSelectedSection = 0;
        this.title = 'EtelgPass';
        this.isLogged = false;
        this.usersArray = [];
        this.usersCards = [];
        this.isLoaded = false;
        // for more details on config options please visit fullPage.js docs
        this.config =
            {
                // fullpage options
                licenseKey: 'YOUR LICENSE KEY HERE',
                sectionsColor: ['#0f4c75', '#0f4c75'],
                menu: '#menu',
                touchSensitivity: 15,
                // fullpage callbacks
                onLeave: (origin, destination, direction) => {
                    this.headerSelectedSection = destination.index;
                },
            };
    }
    ngOnInit() {
        if (this._cookieService.get("isLogged")) {
            this.isLogged = true;
        }
        // $(document).ready(e=>{alert("yaaay")});
    }
    ngAfterViewInit() {
        if (!this.isLogged) {
            this.fullpage_api.setAllowScrolling(false);
            this.fullpage_api.silentMoveTo('Home', 0);
            this.fullpage_api.setKeyboardScrolling(false);
        }
    }
    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }
    getUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this._userDataService.get().subscribe((e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.usersArray = e.body;
                    this.convertUserToUserCard();
                    this.isLogged = !this.isLogged;
                    this.removeFullPageLock();
                    this.isLoaded = true;
                }), err => {
                    this._notifications.error("Erro de requisição de usuários:", err);
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    login(admin, isNew = "false") {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._userDataService.postAdmin(admin, isNew).subscribe((e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (e.status == 418) {
                    this._notifications.error("Usuário ja existente:", "Tente outro nome");
                }
                else {
                    let logged = e.body;
                    this.admin = new _entities_admin__WEBPACK_IMPORTED_MODULE_5__["Admin"](logged.id, logged.username, logged.pwd);
                    this.getUsers();
                }
            }));
        });
    }
    removeFullPageLock() {
        if (!this.isLogged) {
            this.fullpage_api.setAllowScrolling(false);
            this.fullpage_api.silentMoveTo('Home', 0);
            this.fullpage_api.setKeyboardScrolling(false);
        }
        else {
            this.fullpage_api.setAllowScrolling(true);
            this.fullpage_api.silentMoveTo('Home', 0);
            this.fullpage_api.setKeyboardScrolling(true);
        }
    }
    moveDown() {
        this.fullpage_api.moveSectionDown();
    }
    moveUp() {
        this.fullpage_api.moveSectionUp();
    }
    convertUserToUserCard() {
        this.usersArray.map(e => {
            this.usersCards.push({ user: e, isEditing: false, isNew: false });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _services_userDataService__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/main/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/main/app.module.ts":
/*!************************************!*\
  !*** ./src/app/main/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/main/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/main/app.component.ts");
/* harmony import */ var _modules_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/home-page/home-page.component */ "./src/app/modules/home-page/home-page.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "./node_modules/@fullpage/angular-fullpage/fesm2015/fullpage-angular-fullpage.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _modules_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/login-page/login-page.component */ "./src/app/modules/login-page/login-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/fesm2015/primeng-inputswitch.js");
/* harmony import */ var _modules_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/user-create/user-create.component */ "./src/app/modules/user-create/user-create.component.ts");
/* harmony import */ var _services_userDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/userDataService */ "./src/app/services/userDataService.ts");
/* harmony import */ var _modules_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/user-card/user-card.component */ "./src/app/modules/user-card/user-card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _modules_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
            _modules_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"],
            _modules_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_15__["UserCreateComponent"],
            _modules_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_17__["UserCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_9__["AngularFullpageModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__["InputSwitchModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
            _services_userDataService__WEBPACK_IMPORTED_MODULE_16__["UserDataService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _modules_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/home-page/home-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/home-page/home-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  color: white;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.background .header .welcome {\n  font-size: 3.4rem;\n  opacity: 0;\n  -webkit-animation: fadeInOut 3.5 normal forwards;\n          animation: fadeInOut 3.5 normal forwards;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-duration: 5.5s;\n          animation-duration: 5.5s;\n  max-height: 85px;\n}\n.background .body {\n  flex: 6;\n}\n.background .footer {\n  flex: 1;\n  display: flex;\n  flex-direction: row-reverse;\n  margin-bottom: 30px;\n}\n.background .footer .textLoaded {\n  height: 100%;\n  font-size: 80px;\n}\n@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1hcmdvL0NvZGVzL0NvZGUvQ1JVRC1Gcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0FGO0FER0k7RUFFSSxpQkFBQTtFQUlBLFVBQUE7RUFFQSxnREFBQTtVQUFBLHdDQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNFO0VBRUUsT0FBQTtBQ1JKO0FEVUU7RUFFRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFVJO0VBRUUsWUFBQTtFQUNBLGVBQUE7QUNUTjtBRGdCQTtFQUVJO0lBQ0UsVUFBQTtFQ2RKO0VEaUJFO0lBQ0UsVUFBQTtFQ2ZKO0FBQ0Y7QURPQTtFQUVJO0lBQ0UsVUFBQTtFQ2RKO0VEaUJFO0lBQ0UsVUFBQTtFQ2ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZFxue1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5oZWFkZXJcbiAge1xuICAgIC53ZWxjb21lXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDMuNHJlbTtcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyB0b3A6IDEwLjVyZW07XG4gICAgICAgIC8vIGxlZnQ6IDEwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLy8gY29sb3I6ICNGMEEzQkU7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluT3V0IDMuNSBub3JtYWwgZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1LjVzOyBcbiAgICAgICAgbWF4LWhlaWdodDogODVweDtcbiAgICB9XG4gIH1cbiAgLmJvZHlcbiAge1xuICAgIGZsZXg6IDY7XG4gIH1cbiAgLmZvb3RlclxuICB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIC50ZXh0TG9hZGVkXG4gICAge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgIH1cbiAgfVxufVxuXG5cblxuQGtleWZyYW1lcyBmYWRlSW5PdXQgXG57XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59IiwiLmJhY2tncm91bmQge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmFja2dyb3VuZCAuaGVhZGVyIC53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAzLjRyZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDMuNSBub3JtYWwgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1LjVzO1xuICBtYXgtaGVpZ2h0OiA4NXB4O1xufVxuLmJhY2tncm91bmQgLmJvZHkge1xuICBmbGV4OiA2O1xufVxuLmJhY2tncm91bmQgLmZvb3RlciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5iYWNrZ3JvdW5kIC5mb290ZXIgLnRleHRMb2FkZWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home-page/home-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/home-page/home-page.component.ts ***!
  \**********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.timeUpdate();
    }
    timeUpdate() {
        try {
            function checkTime(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                ; // add zero in front of numbers < 10
                return i;
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).subscribe(() => {
                let time = new Date();
                var h = time.getHours();
                var m = time.getMinutes();
                var s = time.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                this.time = h + ":" + m + ":" + s;
                setTimeout(this.timeUpdate, 1000);
            });
        }
        catch (err) {
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomePageComponent.prototype, "admin", void 0);
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/modules/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/modules/login-page/login-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/login-page/login-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".circle {\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: loadingCircle 4s normal forwards;\n  -o-animation: loadingCircle 4s normal forwards;\n  -webkit-animation: loadingCircle 4s normal forwards;\n  -ms-animation: loadingCircle 4s normal forwards;\n  -moz-animation: loadingCircle 4s normal forwards;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  background-color: #0f4c75;\n}\n\n.login-page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-page .login-area {\n  z-index: 2;\n  width: 75%;\n  height: 75%;\n  margin-top: -48px;\n  max-width: 900px;\n  background-color: aliceblue;\n  animation: fadeLogin 0.8s normal forwards;\n  -o-animation: fadeLogin 0.8s normal forwards;\n  -webkit-animation: fadeLogin 0.8s normal forwards;\n  -ms-animation: fadeLogin 0.8s normal forwards;\n  -moz-animation: fadeLogin 0.8s normal forwards;\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n  opacity: 0;\n  display: flex;\n  flex-direction: row;\n}\n\n.login-page .login-area .login-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 50px;\n  flex: 1;\n}\n\n.login-page .login-area .login-form label + input {\n  margin-bottom: 10px;\n}\n\n.login-page .login-area .image {\n  width: 200%;\n  height: 100%;\n  flex: 1;\n  background-image: url(\"https://miro.medium.com/max/2848/0*F3Hrw2qU3aER2Qxr\");\n  image-rendering: crisp-edges;\n}\n\n@-webkit-keyframes loadingCircle {\n  0% {\n    width: 0px;\n    height: 0px;\n    opacity: 0;\n    z-index: 7;\n  }\n  100% {\n    width: 500%;\n    height: 500%;\n    opacity: 1;\n    z-index: 0;\n  }\n}\n\n@keyframes loadingCircle {\n  0% {\n    width: 0px;\n    height: 0px;\n    opacity: 0;\n    z-index: 7;\n  }\n  100% {\n    width: 500%;\n    height: 500%;\n    opacity: 1;\n    z-index: 0;\n  }\n}\n\n@-webkit-keyframes fadeLogin {\n  0% {\n    margin-top: -40px;\n    opacity: 0;\n  }\n  100% {\n    margin-top: 0px;\n    opacity: 1;\n    box-shadow: 2px 2px 2px rgba(88, 81, 81, 0.596);\n  }\n}\n\n@keyframes fadeLogin {\n  0% {\n    margin-top: -40px;\n    opacity: 0;\n  }\n  100% {\n    margin-top: 0px;\n    opacity: 1;\n    box-shadow: 2px 2px 2px rgba(88, 81, 81, 0.596);\n  }\n}\n\n#particles-js {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1hcmdvL0NvZGVzL0NvZGUvQ1JVRC1Gcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBS0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbURBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURFSTtFQUVJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREVRO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQ0RaOztBREVZO0VBRUUsbUJBQUE7QUNEZDs7QURJUTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLDRFQUFBO0VBQ0EsNEJBQUE7QUNIWjs7QURRQTtFQUVJO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQ05KO0VEVUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDUko7QUFDRjs7QURQQTtFQUVJO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQ05KO0VEVUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDUko7QUFDRjs7QURXQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0VDVko7RURhRTtJQUNFLGVBQUE7SUFDQSxVQUFBO0lBQ0EsK0NBQUE7RUNYSjtBQUNGOztBREFBO0VBRUk7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUNWSjtFRGFFO0lBQ0UsZUFBQTtJQUNBLFVBQUE7SUFDQSwrQ0FBQTtFQ1hKO0FBQ0Y7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUgXG57XG4gICAgd2lkdGg6MHB4O1xuICAgIGhlaWdodDowcHg7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDoyMCU7XG4gICAgdG9wOjIwJTtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSA0cyBub3JtYWwgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDRzIG5vcm1hbCBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSA0cyBub3JtYWwgZm9yd2FyZHM7XG4gICAgLW1zLWFuaW1hdGlvbjogbG9hZGluZ0NpcmNsZSA0cyBub3JtYWwgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgNHMgbm9ybWFsIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTowcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0Yzc1O1xufVxuXG4ubG9naW4tcGFnZVxue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAubG9naW4tYXJlYVxuICAgIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIG1hcmdpbi10b3A6IC00OHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUxvZ2luIDAuOHMgbm9ybWFsIGZvcndhcmRzO1xuICAgICAgICAtby1hbmltYXRpb246IGZhZGVMb2dpbiAwLjhzIG5vcm1hbCBmb3J3YXJkcztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVMb2dpbiAwLjhzIG5vcm1hbCBmb3J3YXJkcztcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZUxvZ2luIDAuOHMgbm9ybWFsIGZvcndhcmRzO1xuICAgICAgICAtbW96LWFuaW1hdGlvbjogZmFkZUxvZ2luIDAuOHMgbm9ybWFsIGZvcndhcmRzO1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6MS44cztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLmxvZ2luLWZvcm1cbiAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBsYWJlbCArIGlucHV0IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbWFnZVxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogMjAwJTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8yODQ4LzAqRjNIcncycVUzYUVSMlF4cicpO1xuICAgICAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nQ2lyY2xlIFxue1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB6LWluZGV4OiA3O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAgNTAwJTtcbiAgICAgIGhlaWdodDogNTAwJTtcbiAgICAgIG9wYWNpdHk6MTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVMb2dpbiBcbntcbiAgICAwJSB7XG4gICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIFxuICAgIDEwMCUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgb3BhY2l0eToxO1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSg4OCwgODEsIDgxLCAwLjU5Nik7XG4gICAgfVxufVxuI3BhcnRpY2xlcy1qcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iLCIuY2lyY2xlIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0b3A6IDIwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDRzIG5vcm1hbCBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDRzIG5vcm1hbCBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgNHMgbm9ybWFsIGZvcndhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiBsb2FkaW5nQ2lyY2xlIDRzIG5vcm1hbCBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb246IGxvYWRpbmdDaXJjbGUgNHMgbm9ybWFsIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0Yzc1O1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLXBhZ2UgLmxvZ2luLWFyZWEge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDc1JTtcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYW5pbWF0aW9uOiBmYWRlTG9naW4gMC44cyBub3JtYWwgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZUxvZ2luIDAuOHMgbm9ybWFsIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUxvZ2luIDAuOHMgbm9ybWFsIGZvcndhcmRzO1xuICAtbXMtYW5pbWF0aW9uOiBmYWRlTG9naW4gMC44cyBub3JtYWwgZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlTG9naW4gMC44cyBub3JtYWwgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS44cztcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5sb2dpbi1wYWdlIC5sb2dpbi1hcmVhIC5sb2dpbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgZmxleDogMTtcbn1cbi5sb2dpbi1wYWdlIC5sb2dpbi1hcmVhIC5sb2dpbi1mb3JtIGxhYmVsICsgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luLXBhZ2UgLmxvZ2luLWFyZWEgLmltYWdlIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzI4NDgvMCpGM0hydzJxVTNhRVIyUXhyXCIpO1xuICBpbWFnZS1yZW5kZXJpbmc6IGNyaXNwLWVkZ2VzO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmdDaXJjbGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDc7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDUwMCU7XG4gICAgaGVpZ2h0OiA1MDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlTG9naW4ge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDg4LCA4MSwgODEsIDAuNTk2KTtcbiAgfVxufVxuI3BhcnRpY2xlcy1qcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/login-page/login-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/login-page/login-page.component.ts ***!
  \************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoginPageComponent = class LoginPageComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.onLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: '',
            pwd: ''
        });
    }
    login() {
        this.onLogin.emit(this.loginForm.value);
        this.onLogin.unsubscribe();
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginPageComponent.prototype, "onLogin", void 0);
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/modules/login-page/login-page.component.scss")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/modules/user-card/user-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/user-card/user-card.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 320px;\n  height: 100px;\n  background-color: white;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n}\n.card .head {\n  display: flex;\n  flex-direction: row;\n}\n.card .head .image {\n  border-radius: 50%;\n  padding: 4px;\n}\n.card .head .name {\n  margin-top: 30px;\n  color: black;\n  flex: 2;\n  height: 20px;\n}\n.card .head .delete-icon:hover {\n  fill: #bbe1fa;\n}\n.card .head .check-icon {\n  fill: #40f540;\n}\n.card .head .check-icon:hover {\n  fill: #48e248;\n}\n.card .body {\n  margin-top: -2px;\n  display: flex;\n  flex-direction: row;\n  color: black;\n  flex-wrap: wrap;\n  overflow: hidden;\n  text-align: justify;\n  padding: 0 6px;\n  font-size: 14px;\n}\n.card .body .bio-input {\n  width: 100%;\n}\ninput[type=submit] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1hcmdvL0NvZGVzL0NvZGUvQ1JVRC1Gcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREVRO0VBRUksa0JBQUE7RUFDQSxZQUFBO0FDRFo7QURHUTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDRlo7QURJUTtFQUVJLGFBQUE7QUNIWjtBREtRO0VBRUksYUFBQTtBQ0paO0FES1k7RUFFSSxhQUFBO0FDSmhCO0FEU0k7RUFFSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUlI7QURTUTtFQUVJLFdBQUE7QUNSWjtBRGFBO0VBRUksYUFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLWNhcmQvdXNlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRcbntcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTBweDtcblxuICAgIC5oZWFkXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAuaW1hZ2VcbiAgICAgICAge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7ICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZsZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlbGV0ZS1pY29uOmhvdmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpbGw6ICNiYmUxZmE7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrLWljb25cbiAgICAgICAge1xuICAgICAgICAgICAgZmlsbDogIzQwZjU0MDtcbiAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAjNDhlMjQ4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvZHlcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAuYmlvLWlucHV0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIFxueyBcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi5jYXJkIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHg7XG59XG4uY2FyZCAuaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2FyZCAuaGVhZCAuaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5jYXJkIC5oZWFkIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmbGV4OiAyO1xuICBoZWlnaHQ6IDIwcHg7XG59XG4uY2FyZCAuaGVhZCAuZGVsZXRlLWljb246aG92ZXIge1xuICBmaWxsOiAjYmJlMWZhO1xufVxuLmNhcmQgLmhlYWQgLmNoZWNrLWljb24ge1xuICBmaWxsOiAjNDBmNTQwO1xufVxuLmNhcmQgLmhlYWQgLmNoZWNrLWljb246aG92ZXIge1xuICBmaWxsOiAjNDhlMjQ4O1xufVxuLmNhcmQgLmJvZHkge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogYmxhY2s7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMCA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJkIC5ib2R5IC5iaW8taW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/user-card/user-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user-card/user-card.component.ts ***!
  \**********************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_userDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userDataService */ "./src/app/services/userDataService.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");





let UserCardComponent = class UserCardComponent {
    /**
     *
     */
    constructor(formBuilder, _userDataService, _notifications) {
        this.formBuilder = formBuilder;
        this._userDataService = _userDataService;
        this._notifications = _notifications;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            name: '',
            bio: ''
        });
    }
    notificate(title, message) {
        this._notifications.success(title, message, {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true
        });
    }
    notificateError(title, message) {
        this._notifications.success(title, message, {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true
        });
    }
    deleteUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.userInfo.isNew) {
                    this.delete.emit();
                }
                else {
                    yield this._userDataService.delete(this.userInfo.user).subscribe((e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.notificate("Registro deletado", `Usuário ${e.body.name} removido com sucesso`);
                        this.delete.emit();
                    }));
                }
            }
            catch (err) {
            }
        });
    }
    updateOrSaveUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.userInfo.user.id != -1) {
                    yield this._userDataService.update(this.updateForm.value).subscribe((e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.notificate("Registro atualizado com sucesso", `Usuário ${e.body.name} atualizado com sucesso`);
                        this.userInfo.isEditing = false;
                        this.userInfo.user = e.body;
                    }));
                }
                else {
                    yield this._userDataService.post(this.updateForm.value).subscribe((e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.notificate("Registro inserido com sucesso", `Usuário ${e.body.name} inserido com sucesso`);
                        this.userInfo.isEditing = false;
                        this.userInfo.user = e.body;
                        this.userInfo.isNew = false;
                    }));
                }
            }
            catch (err) {
            }
        });
    }
};
UserCardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_userDataService__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserCardComponent.prototype, "userInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserCardComponent.prototype, "delete", void 0);
UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "user-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-card/user-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-card.component.scss */ "./src/app/modules/user-card/user-card.component.scss")).default]
    })
], UserCardComponent);



/***/ }),

/***/ "./src/app/modules/user-create/user-create.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/user-create/user-create.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n}\n.body .header {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 25px;\n  order: 0;\n  flex: 0 1 auto;\n  align-self: auto;\n  width: 100%;\n}\n.body .users {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  order: 0;\n  flex: 0 2 auto;\n  align-self: auto;\n  padding: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1hcmdvL0NvZGVzL0NvZGUvQ1JVRC1Gcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGFBQUE7RUFHQSxzQkFBQTtFQUdBLGlCQUFBO0VBR0EsMkJBQUE7RUFHQSxzQkFBQTtFQUdBLHVCQUFBO0FDQUo7QURFSTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBR0EsUUFBQTtFQUdBLGNBQUE7RUFHQSxnQkFBQTtFQUNBLFdBQUE7QUNEUjtBRElJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBR0EsUUFBQTtFQUdBLGNBQUE7RUFHQSxnQkFBQTtFQUNBLGFBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keVxue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgLmhlYWRlclxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgLXdlYmtpdC1vcmRlcjogMDtcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xuICAgICAgICAtbXMtZmxleDogMCAxIGF1dG87XG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XG4gICAgICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgfVxuICAgIC51c2Vyc1xuICAgIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1vcmRlcjogMDtcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDAgMiBhdXRvO1xuICAgICAgICAtbXMtZmxleDogMCAyIGF1dG87XG4gICAgICAgIGZsZXg6IDAgMiBhdXRvO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG87XG4gICAgICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDM1cHg7ICAgIFxuICAgIH1cblxufSIsIi5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmJvZHkgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDI1cHg7XG4gIC13ZWJraXQtb3JkZXI6IDA7XG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xuICBvcmRlcjogMDtcbiAgLXdlYmtpdC1mbGV4OiAwIDEgYXV0bztcbiAgLW1zLWZsZXg6IDAgMSBhdXRvO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xuICBhbGlnbi1zZWxmOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5IC51c2VycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtb3JkZXI6IDA7XG4gIC1tcy1mbGV4LW9yZGVyOiAwO1xuICBvcmRlcjogMDtcbiAgLXdlYmtpdC1mbGV4OiAwIDIgYXV0bztcbiAgLW1zLWZsZXg6IDAgMiBhdXRvO1xuICBmbGV4OiAwIDIgYXV0bztcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBhdXRvO1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBhdXRvO1xuICBhbGlnbi1zZWxmOiBhdXRvO1xuICBwYWRkaW5nOiAzNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/user-create/user-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/user-create/user-create.component.ts ***!
  \**************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserCreateComponent = class UserCreateComponent {
    /**
     *
     */
    constructor() { }
    ngOnInit() {
    }
    newUser() {
        this.users.push({ user: { id: -1, name: "", bio: "", avatar_url: "" }, isEditing: true, isNew: true });
    }
    delete(i) {
        this.users[i].user.id = undefined;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserCreateComponent.prototype, "users", void 0);
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "user-create",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-create/user-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.scss */ "./src/app/modules/user-create/user-create.component.scss")).default]
    })
], UserCreateComponent);



/***/ }),

/***/ "./src/app/services/userDataService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/userDataService.ts ***!
  \*********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'jwt-token'
    })
};
let UserDataService = class UserDataService {
    /**
     *
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://localhost:5001';
    }
    get() {
        let a = this.httpClient.get(`${this.baseUrl}/user`, { observe: 'response' });
        return a;
    }
    post(user) {
        let a = this.httpClient.post(`${this.baseUrl}/user`, user, { observe: 'response' });
        return a;
    }
    delete(user) {
        let a = this.httpClient.request('delete', `${this.baseUrl}/user`, { body: user, observe: 'response' });
        return a;
    }
    update(user) {
        let a = this.httpClient.put(`${this.baseUrl}/user`, user, { observe: 'response' });
        return a;
    }
    postAdmin(admin, isNew) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params.set('isNew', isNew);
        let a = this.httpClient.post(`${this.baseUrl}/admin`, admin, { observe: 'response', params });
        return a;
    }
};
UserDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_main_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/main/app.module */ "./src/app/main/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_main_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(() => {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production && 'serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(active => !active && navigator.serviceWorker.register('/ngsw-worker.js')).catch(console.error);
    }
}).catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/camargo/Codes/Code/crud-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map