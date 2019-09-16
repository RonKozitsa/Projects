(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Checkout/components/checkout-page/checkout-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Checkout/components/checkout-page/checkout-page.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!paymentDone else thankYouTemplate\" class=\"row\">\n  <div class=\"col-75\">\n    <div class=\"container\">\n      <form action=\"/action_page.php\">\n\n        <div class=\"row\">\n          <div class=\"col-50\">\n            <h3>Billing Address</h3>\n            <label for=\"fname\"><i class=\"fa fa-user\"></i> Full Name</label>\n            <input type=\"text\" id=\"fname\" name=\"firstname\">\n            <label for=\"email\"><i class=\"fa fa-envelope\"></i> Email</label>\n            <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"john@example.com\">\n            <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Address</label>\n            <input type=\"text\" id=\"adr\" name=\"address\" placeholder=\"542 W. 15th Street\">\n            <label for=\"city\"><i class=\"fa fa-institution\"></i> City</label>\n            <input type=\"text\" id=\"city\" name=\"city\">\n\n            <div class=\"row\">\n              <div class=\"col-50\">\n                <label for=\"state\">State</label>\n                <input type=\"text\" id=\"state\" name=\"state\">\n              </div>\n              <div class=\"col-50\">\n                <label for=\"zip\">Zip</label>\n                <input type=\"text\" id=\"zip\" name=\"zip\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-50\">\n            <h3>Payment</h3>\n            <label for=\"fname\">Accepted Cards</label>\n            <div class=\"icon-container\">\n              <i class=\"fa fa-cc-visa\" style=\"color:navy;\"></i>\n              <i class=\"fa fa-cc-amex\" style=\"color:blue;\"></i>\n              <i class=\"fa fa-cc-mastercard\" style=\"color:red;\"></i>\n              <i class=\"fa fa-cc-discover\" style=\"color:orange;\"></i>\n            </div>\n            <label for=\"cname\">Name on Card</label>\n            <input type=\"text\" id=\"cname\" name=\"cardname\">\n            <label for=\"ccnum\">Credit card number</label>\n            <input type=\"text\" id=\"ccnum\" name=\"cardnumber\" placeholder=\"XXXX-XXXX-XXXX-XXXX\">\n            <label for=\"expmonth\">Exp Month</label>\n            <input type=\"text\" id=\"expmonth\" name=\"expmonth\">\n\n            <div class=\"row\">\n              <div class=\"col-50\">\n                <label for=\"expyear\">Exp Year</label>\n                <input type=\"text\" id=\"expyear\" name=\"expyear\">\n              </div>\n              <div class=\"col-50\">\n                <label for=\"cvv\">CVV</label>\n                <input type=\"text\" id=\"cvv\" name=\"cvv\">\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <label>\n          <input type=\"checkbox\" checked=\"checked\" name=\"sameadr\"> Shipping address same as billing\n        </label>\n        <input (click)=\"paymentDone = true\" value=\"Submit payment\" class=\"btn btn-primary\">\n      </form>\n    </div>\n  </div>\n\n  <div class=\"col-25\">\n    <div class=\"container\">\n      <h4>Total Items:\n        <span class=\"price\" style=\"color:black\">\n          <i class=\"fa fa-shopping-cart\"></i>\n          <b>{{totalItems}}</b>\n        </span>\n      </h4>\n      <p *ngFor=\"let item of cartItemsObject | keyvalue\">\n        <span><b>{{item.value.name | shortenText:20}} <span style=\"margin-left: 30px;\">X {{item.value.amount}}</span></b></span>\n        <span class=\"price\">{{item.value.amount * item.value.price}} $</span>\n      </p>\n      <hr>\n      <p>Total price <span class=\"price\" style=\"color:black\"><b>{{totalPrice}} $</b></span></p>\n    </div>\n  </div>\n</div>\n\n<ng-template #thankYouTemplate>\n  <app-thank-you></app-thank-you>\n  <div class=\"flex flex-center\">\n    <img src=\"https://1.bp.blogspot.com/-tFd5LzyV76o/WKyXIoG6lYI/AAAAAAABuk0/CdDZb_1pZHsKUOxwV7GzLrAeNQI_9P_qACLcB/s1600/09-funny-gif-243-dog-loves-head-massage.gif\">\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Thank-you-page/thank-you/thank-you.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Thank-you-page/thank-you/thank-you.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container biscuit-info-card text-align-center\">\n  <h1 [innerHTML]=\"message\"></h1>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkout-page/checkout-page.component */ "./src/app/Checkout/components/checkout-page/checkout-page.component.ts");
/* harmony import */ var _Thank_you_page_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Thank-you-page/thank-you/thank-you.component */ "./src/app/Thank-you-page/thank-you/thank-you.component.ts");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/shared.module */ "./src/app/Shared/shared.module.ts");







let CheckoutModule = class CheckoutModule {
};
CheckoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutPageComponent"], _Thank_you_page_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["ThankYouComponent"]],
        exports: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _components_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutPageComponent"] }])
        ]
    })
], CheckoutModule);



/***/ }),

/***/ "./src/app/Checkout/components/checkout-page/checkout-page.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Checkout/components/checkout-page/checkout-page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row { /* IE10 */\n  display: -webkit-box;\n  display: flex; /* IE10 */\n  flex-wrap: wrap;\n  margin: 0 -16px;\n}\n\n.col-25 { /* IE10 */\n  -webkit-box-flex: 25%;\n          flex: 25%;\n}\n\n.col-50 { /* IE10 */\n  -webkit-box-flex: 50%;\n          flex: 50%;\n}\n\n.col-75 { /* IE10 */\n  -webkit-box-flex: 75%;\n          flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n  padding: 0 16px;\n}\n\n.container {\n  background-color: #f2f2f2;\n  padding: 5px 20px 15px 20px;\n  border: 1px solid lightgrey;\n  border-radius: 3px;\n  margin-right: 0%;\n}\n\ninput[type=text] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nlabel {\n  margin-bottom: 10px;\n  display: block;\n}\n\n.icon-container {\n  margin-bottom: 20px;\n  padding: 7px 0;\n  font-size: 24px;\n}\n\n.btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px;\n  margin: 10px 0;\n  border: none;\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.btn:hover {\n  background-color: #45a049;\n}\n\nspan.price {\n  float: right;\n  color: grey;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the \"cart\" column go on top) */\n\n@media (max-width: 800px) {\n  .row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0NoZWNrb3V0L2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9jaGVja291dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FDd0IsU0FBUztFQUMvQixvQkFBYTtFQUFiLGFBQWEsRUFDUSxTQUFTO0VBQzlCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLFVBQ2lCLFNBQVM7RUFDeEIscUJBQVM7VUFBVCxTQUFTO0FBQ1g7O0FBRUEsVUFDaUIsU0FBUztFQUN4QixxQkFBUztVQUFULFNBQVM7QUFDWDs7QUFFQSxVQUNpQixTQUFTO0VBQ3hCLHFCQUFTO1VBQVQsU0FBUztBQUNYOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsNk1BQTZNOztBQUM3TTtFQUNFO0lBQ0UsNEJBQThCO0lBQTlCLDhCQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6Ii4uL0NoZWNrb3V0L2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9jaGVja291dC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDsgLyogSUUxMCAqL1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMCAtMTZweDtcbn1cblxuLmNvbC0yNSB7XG4gIC1tcy1mbGV4OiAyNSU7IC8qIElFMTAgKi9cbiAgZmxleDogMjUlO1xufVxuXG4uY29sLTUwIHtcbiAgLW1zLWZsZXg6IDUwJTsgLyogSUUxMCAqL1xuICBmbGV4OiA1MCU7XG59XG5cbi5jb2wtNzUge1xuICAtbXMtZmxleDogNzUlOyAvKiBJRTEwICovXG4gIGZsZXg6IDc1JTtcbn1cblxuLmNvbC0yNSxcbi5jb2wtNTAsXG4uY29sLTc1IHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogNXB4IDIwcHggMTVweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbn1cblxuc3Bhbi5wcmljZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA4MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAoYW5kIGNoYW5nZSB0aGUgZGlyZWN0aW9uIC0gbWFrZSB0aGUgXCJjYXJ0XCIgY29sdW1uIGdvIG9uIHRvcCkgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgLmNvbC0yNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Checkout/components/checkout-page/checkout-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Checkout/components/checkout-page/checkout-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: CheckoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageComponent", function() { return CheckoutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Shared_Services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Services/cart.service */ "./src/app/Shared/Services/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/enums */ "./src/app/Shared/enums.ts");





let CheckoutPageComponent = class CheckoutPageComponent {
    constructor(cartService, http) {
        this.cartService = cartService;
        this.http = http;
        this.paymentDone = false;
        this.totalPrice = 0;
        this.totalItems = 0;
        this.cartItems = [];
        this.cartItemsObject = {};
    }
    ngOnInit() {
        this.http.post(`${src_app_Shared_enums__WEBPACK_IMPORTED_MODULE_4__["SERVER"].URL}/setstatusbyid/checkout`, {}).subscribe();
        this.cartService.getUserCart().subscribe(cart => {
            this.cartItems = cart;
            this.setInfo();
            this.cartItems = this.cartService.removeDuplicates(this.cartItems);
        });
    }
    setInfo() {
        let totalPrice = 0;
        let totalItems = 0;
        this.cartItems.forEach(item => {
            if (item._id in this.cartItemsObject) {
                this.cartItemsObject[item._id].amount += 1;
            }
            else {
                this.cartItemsObject[item._id] = {
                    name: item.name,
                    amount: 1,
                    price: item.price
                };
            }
            totalPrice += item.price;
            totalItems += 1;
        });
        this.totalPrice = totalPrice;
        this.totalItems = totalItems;
    }
};
CheckoutPageComponent.ctorParameters = () => [
    { type: _Shared_Services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CheckoutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-page',
        template: __webpack_require__(/*! raw-loader!./checkout-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/Checkout/components/checkout-page/checkout-page.component.html"),
        styles: [__webpack_require__(/*! ./checkout-page.component.css */ "./src/app/Checkout/components/checkout-page/checkout-page.component.css")]
    })
], CheckoutPageComponent);



/***/ }),

/***/ "./src/app/Thank-you-page/thank-you/thank-you.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Thank-you-page/thank-you/thank-you.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9UaGFuay15b3UtcGFnZS90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Thank-you-page/thank-you/thank-you.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Thank-you-page/thank-you/thank-you.component.ts ***!
  \*****************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Shared_Services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Services/cart.service */ "./src/app/Shared/Services/cart.service.ts");




let ThankYouComponent = class ThankYouComponent {
    constructor(router, cartService) {
        this.router = router;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.message = "Your request is being proccessed....";
        setTimeout(() => {
            this.message = 'Thank you for your Purchase !<br>You will be redirected to the home page';
            setTimeout(() => {
                this.router.navigate(['/home']);
                this.cartService.clearCart().subscribe();
            }, 2500);
        }, 5000);
    }
};
ThankYouComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Shared_Services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
ThankYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thank-you',
        template: __webpack_require__(/*! raw-loader!./thank-you.component.html */ "./node_modules/raw-loader/index.js!./src/app/Thank-you-page/thank-you/thank-you.component.html"),
        styles: [__webpack_require__(/*! ./thank-you.component.css */ "./src/app/Thank-you-page/thank-you/thank-you.component.css")]
    })
], ThankYouComponent);



/***/ })

}]);
//# sourceMappingURL=Checkout-checkout-module-es2015.js.map