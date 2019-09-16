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

/***/ "./node_modules/raw-loader/index.js!./src/app/About/about-page/about-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/About/about-page/about-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color:darkkhaki\">\n  <div class=\"container\">\n    <h1>Dor's Readme section</h1>\n    <p>\n      Store name:<br>\n      Biscuit<br><br>\n      What are you selling?:<br>\n      I am selling pet accessories in my store, such as bonzo and pet toys.<br><br>\n\n      <h5>What additional page(s) did you add? How to operate them</h5>\n      <p>We added 2 additional pages: \n        <b>Contact page</b> and <b>Thank you page</b><br>\n        <b>Contact page: </b> made for customers to be able to contact the store owners for quiestions and message in general.<br>\n        <b>Thank you page: </b> made for a feedback for the customer after their purchase has been made, it includes a funny GIF for them to enjoy while waiting for the transaction to be proccessed.<br>\n</p>\n\n      What was hard to do?:<br>\n      I found it hard to understand how to make the connection between Mongo data base and my NodeJS code, Apart from\n      the connection, I found it hard to understand the concept of working with databases with collections and\n      documents which enriches my knowledge a lot.\n      Also, it was very difficult to understand how the all authentication process is working, how to work with cookies\n      properly and understand what tokens are, since there exists so many ways to authenticate a user, it was hard to\n      choose the right package to authenticate with.\n      <br>In addition, to understand how to create the backend code readable and divided into folders and create files\n      that use other files document, was pretty hard.\n      And last thing, I didn't know anything about protection of DDOS attacks, and it took a while for me to understand\n      how implement it in my code.\n      <br><br>\n      Who is your partner? name and id. What did you do? What did your partner do?:<br>\n      My partner is Ron Kozitsa 312544240.<br>\n      I've implemented all the backend of the application, starting from the routes, authentication logic and\n      encryption of password, defended from DDOS attacks and stored our data in the database.\n      <br>Also, implemented all the backend logics (admin, cart, store, checkout screen and general logic).\n      <br>Moreover, I've added error management for each of the cases that prone to make errors.\n      <br>In addition I have added useful middleware's that allow us to work easily and restrict unlogged users from\n      getting into restricted routes.\n      <br>My partner, Ron, Implemented the frontend of the application using Angular.\n      <br><br>\n      <h5>Specify all the different route your app supports:</h5>\n      • <b>/register</b> - allows to transmit the new user's information in the body.<br>\n      • <b>/login</b> - allows to authenticate and returns a cookie to the user if his credentials are valid.<br>\n      • <b>/logout</b> - allows to logout the user (deletes the cookies).<br>\n      • <b>/admin/getallitems</b> - allows the admin to get all existing items in the database<br>\n      • <b>/admin/getallusers</b> - allows the admin to get all existing users in the database<br>\n      • <b>/admin/additem</b> - allows the admin to add an item to the database<br>\n      • <b>/admin/deleteuser/:objectid</b> - allows the admin to delete a specific user<br>\n      • <b>/admin/deleteAllUsers</b> - allows the admin to delete all the users in the database<br>\n      • <b>/admin/filter/byUserName/:username</b> - allows the admin to get the user by his name and last name<br>\n      • <b>/admin/filter/byobjectid/:objectid</b> - allows the admin to get the user by his object Id<br>\n      • <b>/cart/getusercart</b> - Allows to get the logged user cart<br>\n      • <b>/cart/additem/:item_id</b> - Allows to add item to the logged user's cart<br>\n      • <b>/cart/deleteItem/:item_id</b> - Allows to delete item from the logged user's cart<br>\n      • <b>/cart/deleteAllItems</b> - Allows to delete all items from the logged user's cart<br>\n      • <b>/store/search/:searchedText</b> - Allows to search documents in the database by text<br>\n      • <b>/addpurchase/:item_id</b> - Allows to add purchase to the user's purchase array<br>\n      • <b>/setstatusbyid/:status</b> - Allows to set the status of the current user.<br>\n      <br><br>\n      How did you make your store secured?:<br>\n      I've created a middleware that allows only logged users that are registered to enter the api's, by this we have\n      avoided DDOS attacks.\n      <br><br>\n\n      Did you implement the store using react.js?:<br>\n      No, we have implemented the store using Angular, NodeJS and mongoDB\n  </div>\n</div>\n<div class=\"container\" style=\"background-color:cornflowerblue\">\n  <div class=\"container\">\n      <h1>Ron's Readme section</h1>\n      <p>\n        <h5>Store name:</h5>\n        Biscuit<br>\n        <h5>What are you selling?:</h5>\n        I am selling pet accessories in my store, such as food, bowls and pet toys.<br>\n  \n        <h5>What additional page(s) did you add? How to operate them</h5>\n        <p>We added 2 additional pages: \n          <b>Contact page</b> and <b>Thank you page</b><br>\n          <b>Contact page: </b> made for customers to be able to contact the store owners for quiestions and message in general.<br>\n          <b>Thank you page: </b> made for a feedback for the customer after their purchase has been made, it includes a funny GIF for them to enjoy while waiting for the transaction to be proccessed.<br>\n\n        </p>\n  \n        <div class=\"container\">\n        <h5>What was hard to do?:</h5>\n        <p>As I was working on the Frontend, for me it was hard to understand how to connect the logics of the frontend with the data from the backend (working with the cookies).\n           I also found it very hard and challenging to create dynamic pages and maintain responsible CSS design as the store kept growing with more pages and more logics inside of it.\n        </p>\n      </div>\n\n      <div class=\"container\">\n        <h5>Who is your partner? name and id. What did you do? What did your partner do?:</h5>\n        <p>My partner is Dor Vaknin.</p>\n        I was responsible for the Frontend, I created from scratch the logic, view and design of the pages, and used many features to have them satisfy the desired behavior. <br>\n        I used guards for preventing the user accessing pages he has no permission to access, I used http Interceptors to make sure the request is sent with the right credentials and used lazy loading for a better performance app.<br>\n       I have learned a lot during the doing of this project and used many known and helpful frameworks and technologies, such as:<br>\n        <ul>\n          <li>Bootstrap 4</li>\n          <li>Ag-Grid</li>\n          <li>NG Bootstrap</li>\n          <li>Ngb Modals</li>\n          <li>Rxjs</li>\n          <li>Lodash</li>\n        </ul>\n        </div>\n        <p>\n            my partner Dor was responsible for implementing the Backend using NodeJs, Dor also implemented the tests.\n        </p>\n        <br><br>\n        <h5>Specify all the different route your app supports:</h5>\n        • <b>/register</b> - allows to transmit the new user's information in the body.<br>\n        • <b>/login</b> - allows to authenticate and returns a cookie to the user if his credentials are valid.<br>\n        • <b>/logout</b> - allows to logout the user (deletes the cookies).<br>\n        • <b>/admin/getallitems</b> - allows the admin to get all existing items in the database<br>\n        • <b>/admin/getallusers</b> - allows the admin to get all existing users in the database<br>\n        • <b>/admin/additem</b> - allows the admin to add an item to the database<br>\n        • <b>/admin/deleteuser/:objectid</b> - allows the admin to delete a specific user<br>\n        • <b>/admin/deleteAllUsers</b> - allows the admin to delete all the users in the database<br>\n        • <b>/admin/filter/byUserName/:username</b> - allows the admin to get the user by his name and last name<br>\n        • <b>/admin/filter/byobjectid/:objectid</b> - allows the admin to get the user by his object Id<br>\n        • <b>/cart/getusercart</b> - Allows to get the logged user cart<br>\n        • <b>/cart/additem/:item_id</b> - Allows to add item to the logged user's cart<br>\n        • <b>/cart/deleteItem/:item_id</b> - Allows to delete item from the logged user's cart<br>\n        • <b>/cart/deleteAllItems</b> - Allows to delete all items from the logged user's cart<br>\n        • <b>/store/search/:searchedText</b> - Allows to search documents in the database by text<br>\n        • <b>/addpurchase/:item_id</b> - Allows to add purchase to the user's purchase array<br>\n        • <b>/setstatusbyid/:status</b> - Allows to set the status of the current user.<br>\n        <br><br>\n        <h5>How did you make your store secured?</h5>\n        we created a middleware that allows only logged users that are registered to enter the api's, by this we have\n        avoided DDOS attacks.\n        <br><br>\n  \n        <h5>Did you implement the store using react.js?</h5>\n        No, we have implemented the store using Angular, NodeJS and mongoDB database\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Auth/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Auth/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Log In</h1>\n  <form #form=\"ngForm\" (ngSubmit)=\"onLogin()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"name\" name=\"name\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n    </div>\n    <div *ngIf=\"displayLoader && !displayErrorLoginMessage\" class=\"biscuit-loader\"></div>\n    <span *ngIf=\"displayErrorLoginMessage\" class=\"biscuit-alert\">Wrong username/password, please try again</span>\n    <div class=\"buttons-container\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.form.valid\">Log in</button>\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"switchToSignUp()\">Sign up</button>\n    </div>\n        <span>\n          <label for=\"remember\">Rememeber me</label>\n          <input [checked]=\"rememberMe\" class=\"rememberMe\" type=\"checkbox\" id=\"remember\">\n        </span>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Auth/components/signup/signup.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Auth/components/signup/signup.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Sign up</h1>\n    <form #signUpForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstName\">Fisrt name</label>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"firstName\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last name</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"lastName\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input #Email=\"ngModel\" type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required email>\n        <div class=\"biscuit-alert\" [hidden]='Email.untouched || Email.valid '>Please enter a valid email</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password (at least 8 characters)</label>\n        <input #password1=\"ngModel\" type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" minlength=\"8\" required>\n      </div>\n      <div class=\"biscuit-alert\" [hidden]='password2.value === password1.value || password2.untouched || !password2.value'>Passwords should be the same</div>\n      <div class=\"biscuit-alert\" [hidden]='password1.valid || !password1.touched'>Password should be at least 8 characters </div>\n      <div class=\"form-group\">\n        <label for=\"passwordConfirm\">Type password again</label>\n        <input #password2=\"ngModel\" type=\"password\" class=\"form-control\" id=\"passwordConfirm\" name=\"passwordConfirm\" [(ngModel)]=\"passwordConfirm\" minlength=\"8\" required>\n      </div>\n      <div class=\"buttons-container\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signUpForm.form.valid\" (click)=\"onSignUp()\">Sign up</button>\n      </div>\n      <div *ngIf=\"displayLodaer\" class=\"biscuit-loader\"></div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Home/components/home-page/home-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Home/components/home-page/home-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"https://avada.theme-fusion.com/veterinarian/wp-content/uploads/sites/80/2016/11/pets_big.png\">\n  <h1>BISCUIT</h1>\n  <h4 class=\"text-muted\">GIVE YOUR PETS WHAT THEY DESERVE</h4>\n  <div class=\"flex\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" aria-label=\"Search\" (input)=\"onTextChangedDebounced()\" [(ngModel)]=\"textualSearch\">\n    <div *ngIf=\"displayLodaer\" class=\"biscuit-loader\"></div>\n  </div>\n</div>\n<div *ngIf=\"dataLoaded\">\n  <div *ngIf=\"itemOnCurrentPage.length else emptyTemplate\" class=\"container card\">\n    <div class=\"items\">\n      <app-item \n      class=\"item\"\n      *ngFor=\"let item of itemOnCurrentPage\"\n      [_id]='item._id'\n      [name]= \"item.name\"\n      [desc] = \"item.desc\"\n      [productType] = \"item.productType\"\n      [pictureURL] = \"item.pictureURL\"\n      [price] = \"item.price\"\n      [animalType] = \"item.animalType\"\n      [isInCart]=\"false\"\n      ></app-item>\n    </div>\n    <pagination\n    *ngIf=\"itemOnCurrentPage.length\"\n    class=\"pagination\"\n    [totalItems]=\"items?.length\"\n    [itemsPerPage]=\"itemsPerPage\"\n    [(ngModel)]=\"currentPage\"\n    (pageChanged)=\"onPageChanged($event.page)\"\n    [maxSize]=\"5\"\n    ></pagination>\n  </div>\n</div>\n\n<ng-template #emptyTemplate>\n  <h3 class=\"no-results\">No results found...</h3>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/Components/item/item.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/Components/item/item.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card biscuit-card\">\n    <img class=\"card-img-top img-responsive biscuit-img\" [src]=\"pictureURL\" alt=\"Card image\">\n    <div class=\"card-body flex\">\n        <h6 class=\"card-subtitle mb-2 text-muted\">Pet type : {{animalType}} | Category : {{productType}}</h6>\n        <div class=\"item-info\">\n            <p class=\"card-title\">{{name | shortenText:25}}</p>\n            <p class=\"card-description\"> {{desc | shortenText:25}} </p>\n            <p class=\"card-footer\" >Price : {{price}} $</p>\n            <a *ngIf=\"!isInCart else inCartTemplate\" (click)=\"addToCart()\" class=\"btn btn-primary\">Add to cart</a>\n            <span *ngIf=\"notifyAdded && !isInCart\" class=\"biscuit-success under-button-in-cart\" [@fadeInOut]>Added to cart !</span>\n        </div>\n    </div>\n</div>\n\n<ng-template #inCartTemplate>\n    <div class=\"flex\">\n        <button class=\"btn btn-info btn-sm\" (click)=\"addToCart()\">Add another</button>\n        <div>{{amountInCart}}</div>\n        <button class=\"btn btn-info btn-sm\" (click)=\"askIfDeleteItem.emit(this)\">Remove from cart</button>\n        <span *ngIf=\"notifyAdded\" class=\"biscuit-success under-button-not-in-cart\" [@fadeInOut]>Added to cart !</span>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Shared/Components/navigation/navigation.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Shared/Components/navigation/navigation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"isLoggedIn else loggedOutTemplate\">\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <li><a [routerLink]=\"['/cart']\">Cart</a></li>\n    <li *ngIf=\"isAdmin\"><a [routerLink]=\"['/admin']\">Activity of users</a></li>\n    <li><a (click)=\"logOut()\">Log out</a></li>\n    <li style=\"float:right\"><a class=\"active\" [routerLink]=\"['/about']\">About</a></li>\n    <li style=\"float:right; border-right: 2px black solid\"><a class=\"active\" [routerLink]=\"['/contact']\">Contact</a></li>\n</ul>\n\n<ng-template #loggedOutTemplate>\n    <ul>\n        <li><a [routerLink]=\"['/login']\">Log in</a></li>\n        <li style=\"float:right\"><a class=\"active\" [routerLink]=\"['/about']\">About</a></li>\n        <li style=\"float:right; border-right: 2px black solid\"><a  class=\"active\" [routerLink]=\"['/contact']\">Contact</a></li>\n    </ul>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main\">\n    <app-navigation></app-navigation>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact-page/contact-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact-page/contact-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted else messageSubmitted\" class=\"container\">\n  <div style=\"text-align:center\">\n    <h2>Contact Us</h2>\n    <p>Leave us a message:</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n      <img src=\"https://avada.theme-fusion.com/veterinarian/wp-content/uploads/sites/80/2016/11/pets_big.png\" style=\"width:100%\">\n    </div>\n    <div class=\"column\">\n      <form action=\"/action_page.php\">\n        <label for=\"fname\">First Name</label>\n        <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n        <label for=\"lname\">Last Name</label>\n        <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n        <label for=\"country\">Country</label>\n        <select id=\"country\" name=\"country\">\n          <option value=\"Israel\">Israel</option>\n          <option value=\"Usa\">Usa</option>\n          <option value=\"Germany\">Germany</option>\n          <option value=\"australia\">australia</option>\n          <option value=\"Denmark\">Denmark</option>\n          <option value=\"usa\">Other...</option>\n        </select>\n        <label for=\"subject\">Message</label>\n        <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:170px\"></textarea>\n        <input class=\"btn btn-primary btn-contact\" (click)=\"submitted = true\" value=\"Submit\">\n      </form>\n    </div>\n  </div>\n</div>\n\n<ng-template #messageSubmitted>\n  <div class=\"flex-column flex-center\">\n  <h1>Thank you! we will be in touch soon :)</h1>\n  <button class=\"btn btn-primary btn-back\" [routerLink]=\"['/home']\">Back to home page</button>\n</div>\n</ng-template>"

/***/ }),

/***/ "./src/app/About/about-page/about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/About/about-page/about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 50px;\n  text-align: center;\n}\n\nh5 {\n  margin-bottom: 30px;\n  margin-top: 50px;\n  text-decoration: underline;\n}\n\nli {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0Fib3V0L2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uL0Fib3V0L2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/About/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/About/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/About/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/About/about-page/about-page.component.css")]
        })
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/Auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/Auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/Auth/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/Auth/components/login/login.component.ts");
/* harmony import */ var _Shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/Services/auth.service */ "./src/app/Shared/Services/auth.service.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/shared.module */ "./src/app/Shared/shared.module.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            providers: [_Shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _Shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/Auth/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Auth/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container * {\n    text-align: center;\n    margin-top: 2%;\n}\n\nh1{\n    margin-bottom: 5%;\n}\n\n.buttons-container{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.buttons-container *{\n    margin: 1%;\n}\n\n.rememberMe {\n    margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Ii4uL0F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciAqIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cbmgxe1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uYnV0dG9ucy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyICp7XG4gICAgbWFyZ2luOiAxJTtcbn1cblxuLnJlbWVtYmVyTWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/Services/auth.service */ "./src/app/Shared/Services/auth.service.ts");
/* harmony import */ var src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/enums */ "./src/app/Shared/enums.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.name = '';
        this.password = '';
        this.displayErrorLoginMessage = false;
        this.displayLoader = false;
        this.rememberMe = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.http.post(src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_5__["SERVER"].URL + "/setstatusbyid/login", {}).subscribe();
    };
    LoginComponent.prototype.onLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.displayErrorLoginMessage = false;
                        this.displayLoader = true;
                        return [4 /*yield*/, this.authService.logIn(this.name, this.password, this.rememberMe)];
                    case 1:
                        _a.sent();
                        if (window.localStorage.getItem('loggedIn') === 'true') {
                            this.router.navigate(['/home']);
                        }
                        else {
                            this.displayLoader = false;
                            this.displayErrorLoginMessage = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.switchToSignUp = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent.prototype.logAdmin = function () {
        this.authService.logInAsAdmin();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _Shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Auth/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Auth/components/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Auth/components/signup/signup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container * {\n    text-align: center;\n    margin-top: 10px;\n}\n\nh1 {\n    margin-bottom: 5%;\n}\n\n.biscuit-loader {\n    left: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0F1dGgvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6Ii4uL0F1dGgvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyICoge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5oMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5iaXNjdWl0LWxvYWRlciB7XG4gICAgbGVmdDogNDklO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Auth/components/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Auth/components/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/Services/auth.service */ "./src/app/Shared/Services/auth.service.ts");
/* harmony import */ var src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/enums */ "./src/app/Shared/enums.ts");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.passwordConfirm = '';
        this.email = '';
        this.displayLodaer = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.http.post(src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_5__["SERVER"].URL + "/setstatusbyid/signUp", {}).subscribe();
    };
    SignupComponent.prototype.onSignUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.displayLodaer = true;
                        return [4 /*yield*/, this.authService.registerNewUser(this.username, this.firstName, this.lastName, this.email, this.password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.authService.logIn(this.username, this.password, false)];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/home']);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _Shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/Auth/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/Auth/components/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/Home/components/home-page/home-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Home/components/home-page/home-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items{\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.container,\ninput {\n  text-align: center;\n}\n\nimg{\n  width: 50%;\n}\n\ninput {\n  margin-top: 20px;\n  width: 20%;\n  margin-left: 40%;\n}\n\n.card {\n  position: static;\n  margin-top: 3%;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.7s;\n  transition: 0.7s;\n  border-radius: 5px;\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkwfK42bfpEV2Fy5QydoHnTArVRNfDnav2Gkm7QrAvPFe3AeoKQ');\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-bottom: 5%;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.item {\n  margin-top: 10%;\n}\n\n.pagination {\n  margin-top: 5%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.biscuit-loader {\n  align-self: flex-end;\n  margin-bottom: 5px;\n  margin-left: 20px;\n  left: 0;\n}\n\n.no-results {\n  font-size: 60px;\n  text-align: center;\n  margin-top: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0hvbWUvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1JQUFtSTtFQUNuSSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiIuLi9Ib21lL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGFpbmVyLFxuaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZ3tcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xufVxuXG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC43cztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FHa3dmSzQyYmZwRVYyRnk1UXlkb0huVEFyVlJOZkRuYXYyR2ttN1FyQXZQRmUzQWVvS1EnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLml0ZW0ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5iaXNjdWl0LWxvYWRlciB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBsZWZ0OiAwO1xufVxuXG4ubm8tcmVzdWx0cyB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Home/components/home-page/home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Home/components/home-page/home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_Services_backend_communicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Services/backend-communicator.service */ "./src/app/Shared/Services/backend-communicator.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/enums */ "./src/app/Shared/enums.ts");






var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(backendCommunicatorService, http) {
        this.backendCommunicatorService = backendCommunicatorService;
        this.http = http;
        this.textualSearch = '';
        this.displayLodaer = false;
        this.onTextChangedDebounced = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.onTextChanged, 500);
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.itemOnCurrentPage = [];
        this.dataLoaded = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.http.post(src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_5__["SERVER"].URL + "/setstatusbyid/home", {}).subscribe();
                        this.displayLodaer = true;
                        return [4 /*yield*/, this.setItems()];
                    case 1:
                        _a.sent();
                        this.itemOnCurrentPage = this.items.slice(0, this.itemsPerPage);
                        this.displayLodaer = false;
                        this.dataLoaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.onPageChanged = function (page) {
        var beggining = Math.min((page - 1) * this.itemsPerPage, this.items.length);
        var end = Math.min(beggining + 12, this.items.length);
        this.itemOnCurrentPage = this.items.slice(beggining, end);
        console.log(this.itemOnCurrentPage);
    };
    HomePageComponent.prototype.onTextChanged = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.displayLodaer = true;
                        return [4 /*yield*/, this.setItems()];
                    case 1:
                        _a.sent();
                        this.onPageChanged(1);
                        this.displayLodaer = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.prototype.setItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.backendCommunicatorService.getItemsBySearch(this.textualSearch)];
                    case 1:
                        _a.items = (_b.sent());
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePageComponent.ctorParameters = function () { return [
        { type: _Shared_Services_backend_communicator_service__WEBPACK_IMPORTED_MODULE_3__["BackendCommunicatorService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/Home/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/Home/components/home-page/home-page.component.css")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/Home/components/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/Home/components/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/Home/components/home-page/home-page.component.ts");
/* harmony import */ var src_app_Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_Shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot()
            ],
            exports: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/Shared/Components/interceptor/interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/Shared/Components/interceptor/interceptor.ts ***!
  \**************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            withCredentials: true,
        });
        return next.handle(request);
    };
    TokenInterceptor.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/Shared/Components/item/item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Shared/Components/item/item.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    white-space: nowrap;\n    overflow: hidden;\n    max-width: 250px;\n}\n\na {\n    color: white !important;\n}\n\n.biscuit-card {\n    position: static;\n    text-align: center;\n    width: 300px;\n    height: 450px;\n}\n\n.buttons-template{\n    margin: 30px 80px;\n}\n\n.biscuit-img {\n    min-height: 200px;\n    max-height: 200px;\n}\n\n.item-info {\n    width: 100%;\n}\n\n.under-button-in-cart {\n    position: absolute;\n    -webkit-transform: translate(-100px, 40px);\n            transform: translate(-100px, 40px);\n}\n\n.under-button-not-in-cart {\n    position: absolute;\n    -webkit-transform: translate(60px,35px);\n            transform: translate(60px,35px);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NoYXJlZC9Db21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQ0FBa0M7WUFBbEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoiLi4vU2hhcmVkL0NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5iaXNjdWl0LWNhcmQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4uYnV0dG9ucy10ZW1wbGF0ZXtcbiAgICBtYXJnaW46IDMwcHggODBweDtcbn1cblxuLmJpc2N1aXQtaW1nIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLml0ZW0taW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi51bmRlci1idXR0b24taW4tY2FydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgNDBweCk7XG59XG5cbi51bmRlci1idXR0b24tbm90LWluLWNhcnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MHB4LDM1cHgpO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/Shared/Components/item/item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Shared/Components/item/item.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _Services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/cart.service */ "./src/app/Shared/Services/cart.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations */ "./src/app/Shared/animations.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums */ "./src/app/Shared/enums.ts");






var ItemComponent = /** @class */ (function () {
    function ItemComponent(cartService) {
        this.cartService = cartService;
        this._id = '';
        this.name = '';
        this.desc = '';
        this.productType = '';
        this.pictureURL = '';
        this.price = null;
        this.animalType = '';
        this.isInCart = false;
        this.askIfDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.amountInCart = 0;
        this.notifyAdded = false;
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.getAmountInCart();
    };
    ItemComponent.prototype.addToCart = function () {
        var _this = this;
        this.cartService.addItem(this._id).subscribe(function (response) {
            _this.notifyAdded = true;
            if (response.status === _enums__WEBPACK_IMPORTED_MODULE_5__["HTTP_STATUS"].OK) {
                setTimeout(function () {
                    _this.notifyAdded = false;
                }, 500);
            }
            _this.getAmountInCart();
        });
    };
    ItemComponent.prototype.getAmountInCart = function () {
        var _this = this;
        this.cartService.getUserCart().subscribe(function (cartItems) {
            _this.amountInCart = 0;
            cartItems.forEach(function (item) { return _this.amountInCart = item._id === _this._id ? _this.amountInCart + 1 : _this.amountInCart; });
        });
        ;
    };
    ItemComponent.ctorParameters = function () { return [
        { type: _Services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "desc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "productType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "pictureURL", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "price", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "animalType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ItemComponent.prototype, "isInCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ItemComponent.prototype, "askIfDeleteItem", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/Components/item/item.component.html"),
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', _animations__WEBPACK_IMPORTED_MODULE_4__["animations"].fadeInOut)],
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/Shared/Components/item/item.component.css")]
        })
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/Shared/Components/navigation/navigation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Shared/Components/navigation/navigation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n    margin-bottom: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    position: fixed;\n    top: 0;\n    width: 100%;\n  }\n  \nli {\n    float: left;\n}\n  \nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n  \n/* Change the link color to #111 (black) on hover */\n  \nli a:hover {\n    background-color: #111;\n    color: white;\n}\n  \n.active {\n    background-color: #4CAF50;\n}\n  \n/* Add a gray right border to all list items, except the last item (last-child) */\n  \nli {\n    border-right: 1px solid #bbb;\n}\n  \nli:last-child {\n    border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NoYXJlZC9Db21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUEsbURBQW1EOztBQUNuRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLGlGQUFpRjs7QUFDakY7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiLi4vU2hhcmVkL0NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbmxpIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxubGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG5saSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbn1cblxuLyogQWRkIGEgZ3JheSByaWdodCBib3JkZXIgdG8gYWxsIGxpc3QgaXRlbXMsIGV4Y2VwdCB0aGUgbGFzdCBpdGVtIChsYXN0LWNoaWxkKSAqL1xubGkge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XG59XG5cbmxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Shared/Components/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Shared/Components/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Shared/Services/auth.service.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService) {
        this.authService = authService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    Object.defineProperty(NavigationComponent.prototype, "isLoggedIn", {
        get: function () {
            return window.localStorage.getItem('loggedIn') === 'true';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isAdmin", {
        get: function () {
            return window.localStorage.getItem('admin') === 'true';
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.ctorParameters = function () { return [
        { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/Shared/Components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/Shared/Components/navigation/navigation.component.css")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/Shared/Pipes/shorten-text.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/Pipes/shorten-text.pipe.ts ***!
  \***************************************************/
/*! exports provided: ShortenTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenTextPipe", function() { return ShortenTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortenTextPipe = /** @class */ (function () {
    function ShortenTextPipe() {
    }
    ShortenTextPipe.prototype.transform = function (value, limit) {
        return value.length > limit ? value.slice(0, limit) + "..." : value;
    };
    ShortenTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'shortenText'
        })
    ], ShortenTextPipe);
    return ShortenTextPipe;
}());



/***/ }),

/***/ "./src/app/Shared/Services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/Services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums */ "./src/app/Shared/enums.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var AuthService = /** @class */ (function () {
    function AuthService(router, http, cookieService) {
        this.router = router;
        this.http = http;
        this.cookieService = cookieService;
    }
    AuthService.prototype.registerNewUser = function (userName, firstName, lastname, email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            ID: userName,
                            Password: password,
                            Name: firstName,
                            Lastname: lastname,
                            Email: email
                        };
                        return [4 /*yield*/, this.http.post(_enums__WEBPACK_IMPORTED_MODULE_4__["SERVER"].URL + "/register", body, { observe: 'response' }).toPromise().then(function (response) {
                                if (response.status === _enums__WEBPACK_IMPORTED_MODULE_4__["HTTP_STATUS"].OK) {
                                    var cookie = _this.cookieService.get('authToken');
                                    _this.cookieService.set('authToken', cookie);
                                    return true;
                                }
                                console.log(response);
                                return false;
                            }, function (error) {
                                console.error(error);
                                return false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logIn = function (userId, password, rememberMe) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            ID: userId,
                            Password: password,
                            rememberMe: rememberMe
                        };
                        return [4 /*yield*/, this.http.post(_enums__WEBPACK_IMPORTED_MODULE_4__["SERVER"].URL + "/login", body, { observe: 'response', withCredentials: true }).toPromise().then(function (response) {
                                console.log(response);
                                if (response.status === _enums__WEBPACK_IMPORTED_MODULE_4__["HTTP_STATUS"].OK) {
                                    window.localStorage.setItem('loggedIn', 'true');
                                    var cookie = _this.cookieService.get('authToken');
                                    _this.cookieService.set('authToken', cookie);
                                    if (response.body.isAdmin) {
                                        window.localStorage.setItem('admin', 'true');
                                    }
                                }
                            }, function (error) {
                                console.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logOut = function () {
        this.router.navigate(['/login']);
        this.http.get(_enums__WEBPACK_IMPORTED_MODULE_4__["SERVER"].URL + "/logout").subscribe();
        window.localStorage.setItem('loggedIn', 'false');
        window.localStorage.setItem('admin', 'false');
    };
    AuthService.prototype.logInAsAdmin = function () {
        window.localStorage.setItem('admin', 'true');
        window.localStorage.setItem('loggedIn', 'true');
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Shared/Services/backend-communicator.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Shared/Services/backend-communicator.service.ts ***!
  \*****************************************************************/
/*! exports provided: BackendCommunicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendCommunicatorService", function() { return BackendCommunicatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/app/Shared/enums.ts");




var BackendCommunicatorService = /** @class */ (function () {
    function BackendCommunicatorService(http) {
        this.http = http;
    }
    BackendCommunicatorService.prototype.getItemsBySearch = function (searchText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/store/search/" + searchText).toPromise()];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    BackendCommunicatorService.prototype.getAllUsers = function () {
        return this.http.get(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/admin/getallusers");
    };
    BackendCommunicatorService.prototype.getSpecificUser = function (userName) {
        return this.http.get(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/admin/filter/byUserName/" + userName);
    };
    BackendCommunicatorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BackendCommunicatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BackendCommunicatorService);
    return BackendCommunicatorService;
}());



/***/ }),

/***/ "./src/app/Shared/Services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/Services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/app/Shared/enums.ts");




var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
    }
    CartService.prototype.addItem = function (itemId) {
        return this.http.post(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/cart/additem/" + itemId, {}, { observe: 'response' });
    };
    CartService.prototype.deleteItem = function (itemID) {
        return this.http.delete(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/cart/deleteItem/" + itemID, { observe: 'response' });
    };
    CartService.prototype.clearCart = function () {
        return this.http.delete(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/cart/deleteAllItems", { observe: 'response' });
    };
    CartService.prototype.getUserCart = function () {
        return this.http.get(_enums__WEBPACK_IMPORTED_MODULE_3__["SERVER"].URL + "/cart/getusercart");
    };
    CartService.prototype.removeDuplicates = function (cart) {
        var nonRepeatedCartItems = [];
        cart.forEach(function (cartItem) {
            if (nonRepeatedCartItems.findIndex(function (item) { return item._id === cartItem._id; }) < 0) {
                nonRepeatedCartItems.push(cartItem);
            }
        });
        return nonRepeatedCartItems;
    };
    CartService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/Shared/Services/guards/admin-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Shared/Services/guards/admin-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/Shared/Services/auth.service.ts");




var AdminGuardService = /** @class */ (function () {
    function AdminGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuardService.prototype.canActivate = function (route, state) {
        var isAdmin = window.localStorage.getItem('admin') === 'true';
        if (isAdmin) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    };
    AdminGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminGuardService);
    return AdminGuardService;
}());



/***/ }),

/***/ "./src/app/Shared/Services/guards/auth-guard.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Shared/Services/guards/auth-guard.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/Shared/Services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var isLoggenID = window.localStorage.getItem('loggedIn');
        if (isLoggenID === 'true') {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/Shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/Shared/animations.ts ***!
  \**************************************/
/*! exports provided: animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animations", function() { return animations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var animations = {
    routeSlide: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('-1 => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(-100%)',
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(0%)',
                })),
            ]),
        ]),
        // Previous, slide left to right to show left page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', [
            // set new page X location to be -100%
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'fixed',
                width: '100%',
                transform: 'translateX(-100%)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                // slide existing page from 0% to 100% to the right
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(100%)',
                }))),
                // slide new page from -100% to 0% to the right
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(0%)',
                }))),
            ]),
        ]),
        // Next, slide right to left to show right page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [
            // set new page X location to be 100%
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'fixed',
                width: '100%',
                transform: 'translateX(100%)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                // slide existing page from 0% to -100% to the left
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'fixed',
                    width: '100%',
                    transform: 'translateX(-100%)',
                }))),
                // slide new page from 100% to 0% to the left
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    transform: 'translateX(0%)',
                }))),
            ]),
        ]),
    ],
    left2right: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms')),
    ],
    right2left: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms')),
    ],
    maxHeight: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '999px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms')),
    ],
    height: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms')),
    ],
    width: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 0, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms')),
    ],
    scale: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)', opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms')),
    ],
    absoluteSlide: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-500%, -50%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-50%, -50%)' })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(500%, -50%)' }))),
    ],
    fadeInOut: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ]),
    ],
    verticalSlide: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-50%, 100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-50%, -50%)' })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-50%, -100%)' }))),
    ],
    simpleCollapse: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms')),
    ],
    collapse: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0, overflow: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms')),
    ],
    tableRowAnimation: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 })),
        ]),
    ],
    enterAnimation: [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '0px', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '100px', opacity: 1 })),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '100px', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '0px', opacity: 0 })),
        ]),
    ],
};


/***/ }),

/***/ "./src/app/Shared/enums.ts":
/*!*********************************!*\
  !*** ./src/app/Shared/enums.ts ***!
  \*********************************/
/*! exports provided: SERVER, HTTP_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER", function() { return SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS", function() { return HTTP_STATUS; });
var SERVER;
(function (SERVER) {
    SERVER["URL"] = "http://127.0.0.1:8080";
})(SERVER || (SERVER = {}));
;
var HTTP_STATUS;
(function (HTTP_STATUS) {
    HTTP_STATUS[HTTP_STATUS["OK"] = 200] = "OK";
    HTTP_STATUS[HTTP_STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(HTTP_STATUS || (HTTP_STATUS = {}));


/***/ }),

/***/ "./src/app/Shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Components_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/item/item.component */ "./src/app/Shared/Components/item/item.component.ts");
/* harmony import */ var _Components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/navigation/navigation.component */ "./src/app/Shared/Components/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Pipes_shorten_text_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pipes/shorten-text.pipe */ "./src/app/Shared/Pipes/shorten-text.pipe.ts");
/* harmony import */ var _Components_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/interceptor/interceptor */ "./src/app/Shared/Components/interceptor/interceptor.ts");











var components = [
    _Components_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"],
    _Components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
];
var pipes = [
    _Pipes_shorten_text_pipe__WEBPACK_IMPORTED_MODULE_8__["ShortenTextPipe"]
];
var modules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](components, pipes),
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](modules),
            exports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](components, modules, pipes),
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _Components_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
                    multi: true
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth/components/login/login.component */ "./src/app/Auth/components/login/login.component.ts");
/* harmony import */ var _Auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth/components/signup/signup.component */ "./src/app/Auth/components/signup/signup.component.ts");
/* harmony import */ var _Home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home/components/home-page/home-page.component */ "./src/app/Home/components/home-page/home-page.component.ts");
/* harmony import */ var _Shared_Services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/Services/guards/auth-guard.service */ "./src/app/Shared/Services/guards/auth-guard.service.ts");
/* harmony import */ var _About_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./About/about-page/about-page.component */ "./src/app/About/about-page/about-page.component.ts");
/* harmony import */ var _Shared_Services_guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Shared/Services/guards/admin-guard.service */ "./src/app/Shared/Services/guards/admin-guard.service.ts");
/* harmony import */ var _contact_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact-page/contact-page.component */ "./src/app/contact/contact-page/contact-page.component.ts");










var routes = [
    { path: 'login', component: _Auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _Auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'home', canActivate: [_Shared_Services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], component: _Home_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
    { path: 'about', component: _About_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"] },
    { path: 'contact', component: _contact_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"] },
    { path: 'cart', canActivate: [_Shared_Services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], loadChildren: function () { return __webpack_require__.e(/*! import() | Cart-cart-module */ "Cart-cart-module").then(__webpack_require__.bind(null, /*! ./Cart/cart.module */ "./src/app/Cart/cart.module.ts")).then(function (m) { return m.CartModule; }); } },
    { path: 'checkout', canActivate: [_Shared_Services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], loadChildren: function () { return __webpack_require__.e(/*! import() | Checkout-checkout-module */ "Checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./Checkout/checkout.module */ "./src/app/Checkout/checkout.module.ts")).then(function (m) { return m.CheckoutModule; }); } },
    { path: 'admin', canActivate: [_Shared_Services_guards_admin_guard_service__WEBPACK_IMPORTED_MODULE_8__["AdminGuardService"]], loadChildren: function () { return __webpack_require__.e(/*! import() | Admin-screen-admin-module-module */ "Admin-screen-admin-module-module").then(__webpack_require__.bind(null, /*! ./Admin-screen/admin-module.module */ "./src/app/Admin-screen/admin-module.module.ts")).then(function (m) { return m.AdminModuleModule; }); } },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-main:last-child {\n    margin-top: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1tYWluOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Auth/auth.module */ "./src/app/Auth/auth.module.ts");
/* harmony import */ var _Home_components_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home/components/home.module */ "./src/app/Home/components/home.module.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Shared/shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony import */ var _About_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./About/about-page/about-page.component */ "./src/app/About/about-page/about-page.component.ts");
/* harmony import */ var _contact_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact-page/contact-page.component */ "./src/app/contact/contact-page/contact-page.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _About_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutPageComponent"],
                _contact_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__["ContactPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _Auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
                _Home_components_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                _Shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact-page/contact-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/contact-page/contact-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\n.btn-contact {\n  -webkit-transform: translate(200px, 10px);\n          transform: translate(200px, 10px);\n  text-align: center;\n}\n\n.btn-back {\n  width: 20%;\n  -webkit-transform: translate(50%,50%);\n          transform: translate(50%,50%);\n  left: 30%;\n  position: relative;\n  margin-top: 20%;\n}\n\n/* Style inputs */\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\n/* Style the container/contact section */\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 10px;\n}\n\n/* Create two columns that float next to eachother */\n\n.column {\n  float: left;\n  width: 50%;\n  margin-top: 6px;\n  padding: 20px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n\n@media screen and (max-width: 600px) {\n  .column, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUEsb0RBQW9EOztBQUNwRDtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUEsK0lBQStJOztBQUMvSTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYnRuLWNvbnRhY3Qge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMDBweCwgMTBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgd2lkdGg6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLDUwJSk7XG4gIGxlZnQ6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi8qIFN0eWxlIGlucHV0cyAqL1xuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qIFN0eWxlIHRoZSBjb250YWluZXIvY29udGFjdCBzZWN0aW9uICovXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBDcmVhdGUgdHdvIGNvbHVtbnMgdGhhdCBmbG9hdCBuZXh0IHRvIGVhY2hvdGhlciAqL1xuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sdW1uLCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact-page/contact-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-page/contact-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! raw-loader!./contact-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/contact/contact-page/contact-page.component.css")]
        })
    ], ContactPageComponent);
    return ContactPageComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rkozitsa/Desktop/FinalWebAppsProject/frontend/webApps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map