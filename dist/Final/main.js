(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activity.service.ts":
/*!*************************************!*\
  !*** ./src/app/activity.service.ts ***!
  \*************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
        //?????? ????????????
        this.activitys = [];
        this.activityS = [];
        this.activitysUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ActivityService.prototype.getActivity = function () {
        var _this = this;
        this.http.get('/api/activitys').subscribe(function (Data) {
            _this.activitys = Data.activitys;
            _this.activity = _this.activitys[0];
            _this.activitysUpdated.next(_this.activitys.slice());
        });
    };
    ActivityService.prototype.getactivitysUpdatedListener = function () {
        return this.activitysUpdated.asObservable();
    };
    ActivityService.prototype.addActivity = function (id, userAccount, //?????????id
    activityOrganization, activityStart, //????????????
    activityEnd, //????????????
    activityPosition, activityDescription) {
        var _this = this;
        var activity = {
            _id: null,
            userAccount: userAccount,
            activityOrganization: activityOrganization,
            activityStart: activityStart,
            activityEnd: activityEnd,
            activityPosition: activityPosition,
            activityDescription: activityDescription,
        };
        this.http.post('/api/activityadd', activity).subscribe(function (responseData) {
            _this.activityS.push(activity);
            _this.activitysUpdated.next(_this.activityS.slice());
        });
    };
    ActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/admin-hotel/admin-hotel.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-hotel/admin-hotel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n    <title>Administrator Management System</title>\n   \n</head>\n<body>\n    <!--??????-->\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"navbar-header\">\n            <a href=\"#\" class=\"navbar-brand\">Administrator Management System</a>\n        </div>\n        <ul class=\"nav navbar-nav\" style=\"margin-right: 20px\">\n            <li><a href=\"#\">&nbsp;Log out<output></output></a></li>\n        </ul>\n    </div>\n    <!--?????????-->\n    <div class=\"navbar-default navbar-collapse\" id=\"sidebar\">\n        <ul class=\"nav\">\n            <li>\n                <a href=\"#sub1\" data-toggle=\"collapse\">System Function<span class=\"glyphicon glyphicon-chevron-down pull-right\"></span></a>\n                <ul id=\"sub1\" class=\"nav collapse\">\n                    <li><a href=\"./../adminmainpage/\">&nbsp;&nbsp;&nbsp;Manage User</a></li>\n                    <li><a href=\"./../adminorder\">&nbsp;&nbsp;&nbsp;Manage Order</a></li>\n                    <li><a href=\"./../adminhotel\">&nbsp;&nbsp;&nbsp;Manage Hotel</a></li>\n                </ul>\n            </li>\n            \n        </ul>\n    </div>\n    <!--?????????-->\n    <div id=\"main\">\n        \n        <!-- ?????????-->\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <!--??????-->\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\"></div>\n                    <div class=\"panel-body\">\n                        <table class=\"table table-striped table-bordered\">\n                            <thead><tr>\n                                <th>User Account</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>E-mail</th>\n                                <th>Phone Number</th>\n                                \n                            </tr></thead>\n                            <tbody *ngIf=\"hotels.length > 0\" >\n                                <tr *ngFor=\"let h of hotels\">\n                                    <td>{{h.userAccount}}</td>\n                                    <td>{{h.firstName}}</td>\n                                    <td>{{h.lastName}}</td>\n                                    <td>{{h.email}}</td>\n                                    <td>{{h.phone}}</td>\n                                    <td></td>\n                                </tr>\n                                \n                                \n                        </table>\n                        <table class=\"table table-striped table-bordered\">\n                                <thead><tr>\n                                    <th>Location</th>\n                                    <th>Price</th>\n                                    <th>Name</th>\n                                    <th>Modify</th>\n                                </tr></thead>\n                                <tbody *ngIf=\"hotels.length > 0\" >\n                                    <tr *ngFor=\"let h of hotels\">\n                                        <td>{{h.location}}</td>\n                                        <td>{{h.price}}</td>\n                                        <td>{{h.name}}</td>\n                                        <td><button href=\"/anew/todel/@a.id\" onclick=\"return confirm('Are you sure to delete the data?')\" (click)=\"delete(h)\">Delete</button></td>\n\n                                    </tr>\n                                    \n                                    \n                            </table>\n                    </div>\n                </div>\n            </div>\n        </div><!-- ?????????-->\n    </div>\n<script src=\"js/jQuery.js\"></script>\n<script src=\"js/bootstrap.js\"></script>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/admin-hotel/admin-hotel.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin-hotel/admin-hotel.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  margin-left: 210px;\n  margin-right: 10px;\n  width: 1200px;\n  margin-top: 74px; }\n\n#sidebar {\n  width: 200px;\n  position: absolute;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYWRtaW4taG90ZWwvYWRtaW4taG90ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWhvdGVsL2FkbWluLWhvdGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW57XG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDc0cHg7XG59XG5cbiNzaWRlYmFye1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-hotel/admin-hotel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-hotel/admin-hotel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHotelComponent", function() { return AdminHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminHotelComponent = /** @class */ (function () {
    function AdminHotelComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.hotels = [];
    }
    AdminHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            console.log(_this.hotels);
        });
    };
    AdminHotelComponent.prototype.delete = function (h) {
        console.log(h._id);
        this.http.delete('/api/users/' + h._id).subscribe(function (oooData) {
            console.log("chenggong");
            window.location.reload();
        });
    };
    AdminHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-hotel',
            template: __webpack_require__(/*! ./admin-hotel.component.html */ "./src/app/admin-hotel/admin-hotel.component.html"),
            styles: [__webpack_require__(/*! ./admin-hotel.component.scss */ "./src/app/admin-hotel/admin-hotel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminHotelComponent);
    return AdminHotelComponent;
}());



/***/ }),

/***/ "./src/app/admin-order/admin-order.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-order/admin-order.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n    <title>Administrator Management System</title>\n   \n</head>\n<body>\n    <!--??????-->\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"navbar-header\">\n            <a href=\"#\" class=\"navbar-brand\">Administrator Management System</a>\n        </div>\n        <ul class=\"nav navbar-nav\" style=\"margin-right: 20px\">\n            <li><a href=\"#\">&nbsp;Log out<output></output></a></li>\n        </ul>\n    </div>\n    <!--?????????-->\n    <div class=\"navbar-default navbar-collapse\" id=\"sidebar\">\n        <ul class=\"nav\">\n            <li>\n                <a href=\"#sub1\" data-toggle=\"collapse\">System Function<span class=\"glyphicon glyphicon-chevron-down pull-right\"></span></a>\n                <ul id=\"sub1\" class=\"nav collapse\">\n                    <li><a href=\"./../adminmainpage/\">&nbsp;&nbsp;&nbsp;Manage User</a></li>\n                    <li><a href=\"./../adminorder\">&nbsp;&nbsp;&nbsp;Manage Order</a></li>\n                    <li><a href=\"./../adminhotel\">&nbsp;&nbsp;&nbsp;Manage Hotel</a></li>\n                </ul>\n            </li>\n            \n        </ul>\n    </div>\n    <!--?????????-->\n    <div id=\"main\">\n        \n        <!-- ?????????-->\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <!--??????-->\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\"></div>\n                    <div class=\"panel-body\">\n                            <table class=\"table table-striped table-bordered\">\n                                    <thead><tr>\n                                        <th>First Name</th>\n                                        <th>Last Name</th>\n                                        <th>E-mail</th>\n                                        <th>Phone Number</th>\n                                        \n                                    </tr></thead>\n                                    <tbody *ngIf=\"orders.length > 0\" >\n                                        <tr *ngFor=\"let o of orders\">\n                                            <td>{{o.firstName}}</td>\n                                            <td>{{o.lastName}}</td>\n                                            <td>{{o.email}}</td>\n                                            <td>{{o.phone}}</td>\n                                         \n                                          \n                                        </tr>\n                                        \n                                        \n                                </table>\n                                <table class=\"table table-striped table-bordered\">\n                                        <thead><tr>\n                                            <th>Date</th>\n                                            <th>Hotel Name</th>\n                                            \n                                            \n                                        </tr></thead>\n                                        <tbody *ngIf=\"orders.length > 0\" >\n                                            <tr *ngFor=\"let o of orders\">\n                                                <td>{{o.date}}</td>\n                                                <td>{{o.hotelName}}</td>\n                                                \n                                                \n                                              \n                                            </tr>\n                                            \n                                            \n                                    </table>\n                        \n                        \n                    </div>\n                </div>\n            </div>\n        </div><!-- ?????????-->\n    </div>\n<script src=\"js/jQuery.js\"></script>\n<script src=\"js/bootstrap.js\"></script>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/admin-order/admin-order.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin-order/admin-order.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  margin-left: 210px;\n  margin-right: 10px;\n  width: 1200px;\n  margin-top: 74px; }\n\n#sidebar {\n  width: 200px;\n  position: absolute;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYWRtaW4tb3JkZXIvYWRtaW4tb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW9yZGVyL2FkbWluLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW57XG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDc0cHg7XG59XG5cbiNzaWRlYmFye1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-order/admin-order.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-order/admin-order.component.ts ***!
  \******************************************************/
/*! exports provided: AdminOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderComponent", function() { return AdminOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminOrderComponent = /** @class */ (function () {
    function AdminOrderComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.orders = [];
    }
    AdminOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/orders').subscribe(function (Data) {
            _this.orders = Data.orders;
            console.log(_this.orders);
        });
    };
    AdminOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-order',
            template: __webpack_require__(/*! ./admin-order.component.html */ "./src/app/admin-order/admin-order.component.html"),
            styles: [__webpack_require__(/*! ./admin-order.component.scss */ "./src/app/admin-order/admin-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminOrderComponent);
    return AdminOrderComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <title>Admin login</title>\n  <body>\n    <div class=header>\n      Welcome Administrator login\n    </div>\n    \n        <div class=pic1>\n          <img src=\"../../assets/65da1ebd445b5ea8bc5628edfc5f8569.jpg\" width=\"260\" height=\"500\" />\n        </div>\n        <div class=body>\n        \n            <div class=AU>Administrator username???\n\t\t            <input type=\"password\"   id=\"username\"  name=\"passwordprevious\" style=\"width: 300px\"><br>\n\t\t        </div><br><br>\n\t\t        <div class=PW>Password:\n                <input type=\"password\"   id=\"password\"  name=\"passwordprevious\" style=\"width: 300px\"> <br>\n            </div><br><br>\n            <button (click)=\"checkadmin()\" >Login</button>\n\t\t\n          </div>\n          <div class=pic2>\n              <img src=\"../../assets/4939da2b1cbe627cb885ab1c69c2c9cb.jpg\" width=\"280\" height=\"500\" />\n          </div>\n\n    \n  <div class=logo>\n      <img id=\"hotel\" src=\"../../assets/InterContinental_Hotels_logo.jpg\" width=\"180\" height=\"80\" /> \n      <img id=\"hotel\" src=\"../../assets/Hilton.jpg\" width=\"180\" height=\"80\" />\n      <img id=\"hotel\" src=\"../../assets/Marriott_Logo.svg.jpg\" width=\"180\" height=\"80\" />\n      <img id=\"hotel\" src=\"../../assets/1200px-Crowne_Plaza_logo.svg.jpg\" width=\"180\" height=\"80\" />\n      <img id=\"hotel\" src=\"../../assets/Holiday_Inn_Logo.svg.jpg\" width=\"180\" height=\"80\" />\n      <img id=\"hotel\" src=\"../../assets/c2cec3fdfc0392457447fd538594a4c27c1e25ff.jpg\" width=\"180\" height=\"80\" />\n      <img id=\"hotel\" src=\"../../assets/th.jpg\" width=\"180\" height=\"80\" />\n  </div>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 40px;\n  text-align: center;\n  border: solid black,2px;\n  background-color: grey; }\n\n.body {\n  position: absolute;\n  height: 500px;\n  width: 900px;\n  border: transparent black 1px;\n  font-size: 40px;\n  text-align: center;\n  background-color: lightblue;\n  top: 56px;\n  left: 260px; }\n\n#password {\n  position: relative;\n  left: 270px; }\n\n#Login {\n  position: absolute;\n  size: 60px; }\n\n#Reset {\n  position: absolute;\n  size: 60px;\n  padding-left: 100px;\n  padding-top: 400px; }\n\n.logo {\n  height: 60px;\n  position: relative;\n  padding: 50px;\n  margin: 30px; }\n\n#hotel {\n  position: relative;\n  padding-left: 30px; }\n\n.AU {\n  padding-top: 30px; }\n\n.pic1 {\n  position: relative; }\n\n.pic2 {\n  position: absolute;\n  top: 56px;\n  left: 1160px; }\n\n#password {\n  position: absolute;\n  left: 550px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixzQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxrQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVc7RUFDWCw2QkFBNEI7RUFDNUIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQiwyQkFBMEI7RUFDMUIsU0FBUTtFQUNSLFdBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFpQjtFQUNqQixXQUFVLEVBQUE7O0FBSWQ7RUFDSSxrQkFBaUI7RUFDakIsVUFBUyxFQUFBOztBQUtiO0VBQ0ksa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBVztFQUNYLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFpQixFQUFBOztBQUlyQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBmb250LXNpemU6NDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOnNvbGlkIGJsYWNrLDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XG59XG5cbi5ib2R5e1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6OTAwcHg7XG4gICAgYm9yZGVyOnRyYW5zcGFyZW50IGJsYWNrIDFweDtcbiAgICBmb250LXNpemU6NDBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcbiAgICB0b3A6NTZweDtcbiAgICBsZWZ0OjI2MHB4O1xufVxuXG4jcGFzc3dvcmR7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoyNzBweDtcbiAgICBcbn1cblxuI0xvZ2lue1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHNpemU6NjBweDtcbiAgICBcbiAgICBcbn1cblxuI1Jlc2V0e1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHNpemU6NjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6MTAwcHg7XG4gICAgcGFkZGluZy10b3A6NDAwcHg7XG59XG5cbi5sb2dve1xuICAgIGhlaWdodDo2MHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHBhZGRpbmc6NTBweDtcbiAgICBtYXJnaW46MzBweDtcbn1cblxuI2hvdGVse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDozMHB4O1xufVxuXG4uQVV7XG4gICAgcGFkZGluZy10b3A6MzBweDtcbn1cblxuLnBpYzF7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbn1cblxuLnBpYzJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1NnB4O1xuICAgIGxlZnQ6MTE2MHB4O1xufVxuXG4jcGFzc3dvcmR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDo1NTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    AdminComponent.prototype.checkadmin = function () {
        var a = document.getElementById("username").value;
        var b = document.getElementById("password").value;
        if (a != "Admin" || b != "123456") {
            alert("Your role is not administrator");
            return;
        }
        else {
            window.location.href = "/adminmainpage";
        }
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/adminmainpage/adminmainpage.component.html":
/*!************************************************************!*\
  !*** ./src/app/adminmainpage/adminmainpage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n\n    <title>Administrator Management System</title>\n   \n</head>\n<body>\n    <!--??????-->\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"navbar-header\">\n            <a href=\"#\" class=\"navbar-brand\">Administrator Management System</a>\n        </div>\n        <ul class=\"nav navbar-nav\" style=\"margin-right: 20px\">\n            <li><a href=\"#\">&nbsp;Log out<output></output></a></li>\n        </ul>\n    </div>\n    <!--?????????-->\n    <div class=\"navbar-default navbar-collapse\" id=\"sidebar\">\n        <ul class=\"nav\">\n            <li>\n                <a href=\"#sub1\" data-toggle=\"collapse\">System Function<span class=\"glyphicon glyphicon-chevron-down pull-right\"></span></a>\n                <ul id=\"sub1\" class=\"nav collapse\">\n                    <li><a href=\"./adminmainpage/\">&nbsp;&nbsp;&nbsp;Manage User</a></li>\n                    <li><a href=\"./adminorder\">&nbsp;&nbsp;&nbsp;Manage Order</a></li>\n                    <li><a href=\"./adminhotel\">&nbsp;&nbsp;&nbsp;Manage Hotel</a></li>\n                </ul>\n            </li>\n            \n        </ul>\n    </div>\n    <!--?????????-->\n    <div id=\"main\">\n        \n        <!-- ?????????-->\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <!--??????-->\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\"></div>\n                    <div class=\"panel-body\">\n                        <table class=\"table table-striped table-bordered\">\n                            <thead><tr>\n                                <th>User Account</th>\n                                <th>Password</th>\n                                <th>Role</th>\n                                <th></th>\n                            </tr></thead>\n                            <tbody *ngIf=\"user.length > 0\" >\n                            <tr *ngFor=\"let u of user\">\n                                <td>{{u.UserAccount}}</td>\n                                <td>{{u.UserPassword}}</td>\n                                <td>{{u.Role}}</td>\n                                <td><button href=\"/anew/todel/@a.id\" onclick=\"return confirm('Are you sure to delete the data?')\" (click)=\"delete(u)\">Delete</button></td>\n                            </tr>\n                            \n                            </tbody>\n\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div><!-- ?????????-->\n    </div>\n<script src=\"js/jQuery.js\"></script>\n<script src=\"js/bootstrap.js\"></script>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/adminmainpage/adminmainpage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/adminmainpage/adminmainpage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  margin-left: 210px;\n  margin-right: 10px;\n  width: 1200px;\n  margin-top: 74px; }\n\n#sidebar {\n  width: 200px;\n  position: absolute;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYWRtaW5tYWlucGFnZS9hZG1pbm1haW5wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbm1haW5wYWdlL2FkbWlubWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcbiAgICBtYXJnaW4tbGVmdDogMjEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNzRweDtcbn1cblxuI3NpZGViYXJ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/adminmainpage/adminmainpage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adminmainpage/adminmainpage.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminmainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmainpageComponent", function() { return AdminmainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminmainpageComponent = /** @class */ (function () {
    function AdminmainpageComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.user = [];
    }
    AdminmainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (Data) {
            _this.user = Data.user;
            console.log(_this.user);
        });
    };
    AdminmainpageComponent.prototype.delete = function (u) {
        console.log(u._id);
        this.http.delete('/api/users/' + u._id).subscribe(function (oooData) {
            console.log("chenggong");
            window.location.reload();
        });
    };
    AdminmainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminmainpage',
            template: __webpack_require__(/*! ./adminmainpage.component.html */ "./src/app/adminmainpage/adminmainpage.component.html"),
            styles: [__webpack_require__(/*! ./adminmainpage.component.scss */ "./src/app/adminmainpage/adminmainpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminmainpageComponent);
    return AdminmainpageComponent;
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
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _adminmainpage_adminmainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminmainpage/adminmainpage.component */ "./src/app/adminmainpage/adminmainpage.component.ts");
/* harmony import */ var _hotel_hotel_view_hotel_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotel/hotel-view/hotel-view.component */ "./src/app/hotel/hotel-view/hotel-view.component.ts");
/* harmony import */ var _hotel_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotel/hotel-detail/hotel-detail.component */ "./src/app/hotel/hotel-detail/hotel-detail.component.ts");
/* harmony import */ var _hotel_hotel_book_hotel_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hotel/hotel-book/hotel-book.component */ "./src/app/hotel/hotel-book/hotel-book.component.ts");
/* harmony import */ var _hotel_hotel_add_hotel_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hotel/hotel-add/hotel-add.component */ "./src/app/hotel/hotel-add/hotel-add.component.ts");
/* harmony import */ var _hmmain_hmmain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hmmain/hmmain.component */ "./src/app/hmmain/hmmain.component.ts");
/* harmony import */ var _hmmodifypass_hmmodifypass_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hmmodifypass/hmmodifypass.component */ "./src/app/hmmodifypass/hmmodifypass.component.ts");
/* harmony import */ var _hmmodifypasssucc_hmmodifypasssucc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hmmodifypasssucc/hmmodifypasssucc.component */ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.ts");
/* harmony import */ var _hmmanage_hmmanage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hmmanage/hmmanage.component */ "./src/app/hmmanage/hmmanage.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _hmcomp_hmcomp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hmcomp/hmcomp.component */ "./src/app/hmcomp/hmcomp.component.ts");
/* harmony import */ var _hmorder_hmorder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hmorder/hmorder.component */ "./src/app/hmorder/hmorder.component.ts");
/* harmony import */ var _admin_hotel_admin_hotel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-hotel/admin-hotel.component */ "./src/app/admin-hotel/admin-hotel.component.ts");
/* harmony import */ var _admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-order/admin-order.component */ "./src/app/admin-order/admin-order.component.ts");
/* harmony import */ var _hmregister_hmregister_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hmregister/hmregister.component */ "./src/app/hmregister/hmregister.component.ts");
/* harmony import */ var _hmstudent_hmstudent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hmstudent/hmstudent.component */ "./src/app/hmstudent/hmstudent.component.ts");
/* harmony import */ var _hmaddschool_hmaddschool_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hmaddschool/hmaddschool.component */ "./src/app/hmaddschool/hmaddschool.component.ts");
/* harmony import */ var _hmschool_hmschool_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hmschool/hmschool.component */ "./src/app/hmschool/hmschool.component.ts");
/* harmony import */ var _hmoschool_hmoschool_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hmoschool/hmoschool.component */ "./src/app/hmoschool/hmoschool.component.ts");
/* harmony import */ var _hmordersearch_hmordersearch_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./hmordersearch/hmordersearch.component */ "./src/app/hmordersearch/hmordersearch.component.ts");
/* harmony import */ var _hmblog_hmblog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hmblog/hmblog.component */ "./src/app/hmblog/hmblog.component.ts");
/* harmony import */ var _hmstudentrec_hmstudentrec_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hmstudentrec/hmstudentrec.component */ "./src/app/hmstudentrec/hmstudentrec.component.ts");
/* harmony import */ var _studentmain_studentmain_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./studentmain/studentmain.component */ "./src/app/studentmain/studentmain.component.ts");
/* harmony import */ var _studentaddrecomm_studentaddrecomm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./studentaddrecomm/studentaddrecomm.component */ "./src/app/studentaddrecomm/studentaddrecomm.component.ts");
/* harmony import */ var _studentinfo_studentinfo_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./studentinfo/studentinfo.component */ "./src/app/studentinfo/studentinfo.component.ts");
/* harmony import */ var _studentrec_studentrec_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./studentrec/studentrec.component */ "./src/app/studentrec/studentrec.component.ts");
/* harmony import */ var _studentresume_studentresume_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./studentresume/studentresume.component */ "./src/app/studentresume/studentresume.component.ts");
/* harmony import */ var _studentschool_studentschool_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./studentschool/studentschool.component */ "./src/app/studentschool/studentschool.component.ts");
/* harmony import */ var _mainclass_mainclass_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mainclass/mainclass.component */ "./src/app/mainclass/mainclass.component.ts");
/* harmony import */ var _mainblog_mainblog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mainblog/mainblog.component */ "./src/app/mainblog/mainblog.component.ts");
/* harmony import */ var _studyabroad_studyabroad_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./studyabroad/studyabroad.component */ "./src/app/studyabroad/studyabroad.component.ts");
/* harmony import */ var _applymaster_applymaster_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./applymaster/applymaster.component */ "./src/app/applymaster/applymaster.component.ts");
/* harmony import */ var _applybachelor_applybachelor_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./applybachelor/applybachelor.component */ "./src/app/applybachelor/applybachelor.component.ts");
/* harmony import */ var _applyhighschool_applyhighschool_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./applyhighschool/applyhighschool.component */ "./src/app/applyhighschool/applyhighschool.component.ts");







































var routes = [
    { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
    { path: 'mainpage', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__["MainpageComponent"] },
    { path: 'mainclass', component: _mainclass_mainclass_component__WEBPACK_IMPORTED_MODULE_33__["MainclassComponent"] },
    { path: 'mainblog', component: _mainblog_mainblog_component__WEBPACK_IMPORTED_MODULE_34__["MainblogComponent"] },
    { path: 'studyabroad', component: _studyabroad_studyabroad_component__WEBPACK_IMPORTED_MODULE_35__["StudyabroadComponent"] },
    { path: 'applymaster', component: _applymaster_applymaster_component__WEBPACK_IMPORTED_MODULE_36__["ApplymasterComponent"] },
    { path: 'applybachelor', component: _applybachelor_applybachelor_component__WEBPACK_IMPORTED_MODULE_37__["ApplybachelorComponent"] },
    { path: 'applyhighschool', component: _applyhighschool_applyhighschool_component__WEBPACK_IMPORTED_MODULE_38__["ApplyhighschoolComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'adminmainpage', component: _adminmainpage_adminmainpage_component__WEBPACK_IMPORTED_MODULE_5__["AdminmainpageComponent"] },
    { path: 'hmmain', component: _hmmain_hmmain_component__WEBPACK_IMPORTED_MODULE_10__["HMmainComponent"] },
    { path: 'hmmodifypass', component: _hmmodifypass_hmmodifypass_component__WEBPACK_IMPORTED_MODULE_11__["HmmodifypassComponent"] },
    { path: 'hmmodifypasssucc', component: _hmmodifypasssucc_hmmodifypasssucc_component__WEBPACK_IMPORTED_MODULE_12__["HmmodifypasssuccComponent"] },
    { path: 'hmmanage', component: _hmmanage_hmmanage_component__WEBPACK_IMPORTED_MODULE_13__["HmmanageComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"] },
    { path: 'adminhotel', component: _admin_hotel_admin_hotel_component__WEBPACK_IMPORTED_MODULE_17__["AdminHotelComponent"] },
    { path: 'hoteldetail', component: _hotel_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_7__["HotelDetailComponent"] },
    { path: 'hotels', component: _hotel_hotel_view_hotel_view_component__WEBPACK_IMPORTED_MODULE_6__["HotelViewComponent"] },
    { path: 'hotelbook', component: _hotel_hotel_book_hotel_book_component__WEBPACK_IMPORTED_MODULE_8__["HotelBookComponent"] },
    { path: 'hoteladd', component: _hotel_hotel_add_hotel_add_component__WEBPACK_IMPORTED_MODULE_9__["HotelAddComponent"] },
    { path: 'hmcomp', component: _hmcomp_hmcomp_component__WEBPACK_IMPORTED_MODULE_15__["HmcompComponent"] },
    { path: 'hmorder', component: _hmorder_hmorder_component__WEBPACK_IMPORTED_MODULE_16__["HmorderComponent"] },
    { path: 'adminorder', component: _admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_18__["AdminOrderComponent"] },
    { path: 'hmblog', component: _hmblog_hmblog_component__WEBPACK_IMPORTED_MODULE_25__["HmblogComponent"] },
    { path: 'hmregister', component: _hmregister_hmregister_component__WEBPACK_IMPORTED_MODULE_19__["HmregisterComponent"] },
    { path: 'hmstudent', component: _hmstudent_hmstudent_component__WEBPACK_IMPORTED_MODULE_20__["HmstudentComponent"] },
    { path: 'hmstudentrec', component: _hmstudentrec_hmstudentrec_component__WEBPACK_IMPORTED_MODULE_26__["HmstudentrecComponent"] },
    { path: 'hmaddschool', component: _hmaddschool_hmaddschool_component__WEBPACK_IMPORTED_MODULE_21__["HmaddschoolComponent"] },
    { path: 'hmschool', component: _hmschool_hmschool_component__WEBPACK_IMPORTED_MODULE_22__["HmschoolComponent"] },
    { path: 'hmoschool', component: _hmoschool_hmoschool_component__WEBPACK_IMPORTED_MODULE_23__["HmoschoolComponent"] },
    { path: 'hmordersearch', component: _hmordersearch_hmordersearch_component__WEBPACK_IMPORTED_MODULE_24__["HmordersearchComponent"] },
    { path: 'hmordersearch', component: _hmordersearch_hmordersearch_component__WEBPACK_IMPORTED_MODULE_24__["HmordersearchComponent"] },
    { path: 'studentmain', component: _studentmain_studentmain_component__WEBPACK_IMPORTED_MODULE_27__["StudentmainComponent"] },
    { path: 'studentaddrecomm', component: _studentaddrecomm_studentaddrecomm_component__WEBPACK_IMPORTED_MODULE_28__["StudentaddrecommComponent"] },
    { path: 'studentinfo', component: _studentinfo_studentinfo_component__WEBPACK_IMPORTED_MODULE_29__["StudentinfoComponent"] },
    { path: 'studentrec', component: _studentrec_studentrec_component__WEBPACK_IMPORTED_MODULE_30__["StudentrecComponent"] },
    { path: 'studentresume', component: _studentresume_studentresume_component__WEBPACK_IMPORTED_MODULE_31__["StudentresComponent"] },
    { path: 'studentschool', component: _studentschool_studentschool_component__WEBPACK_IMPORTED_MODULE_32__["StudentschoolComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Final';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _hmmain_hmmain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hmmain/hmmain.component */ "./src/app/hmmain/hmmain.component.ts");
/* harmony import */ var _hmmodifypass_hmmodifypass_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hmmodifypass/hmmodifypass.component */ "./src/app/hmmodifypass/hmmodifypass.component.ts");
/* harmony import */ var _hmmodifypasssucc_hmmodifypasssucc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hmmodifypasssucc/hmmodifypasssucc.component */ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.ts");
/* harmony import */ var _hmmanage_hmmanage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hmmanage/hmmanage.component */ "./src/app/hmmanage/hmmanage.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js");
/* harmony import */ var _hotel_hotel_view_hotel_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hotel/hotel-view/hotel-view.component */ "./src/app/hotel/hotel-view/hotel-view.component.ts");
/* harmony import */ var _hotel_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hotel/hotel-detail/hotel-detail.component */ "./src/app/hotel/hotel-detail/hotel-detail.component.ts");
/* harmony import */ var _hotel_hotel_book_hotel_book_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hotel/hotel-book/hotel-book.component */ "./src/app/hotel/hotel-book/hotel-book.component.ts");
/* harmony import */ var _hotel_hotel_add_hotel_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hotel/hotel-add/hotel-add.component */ "./src/app/hotel/hotel-add/hotel-add.component.ts");
/* harmony import */ var _adminmainpage_adminmainpage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adminmainpage/adminmainpage.component */ "./src/app/adminmainpage/adminmainpage.component.ts");
/* harmony import */ var _hmcomp_hmcomp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hmcomp/hmcomp.component */ "./src/app/hmcomp/hmcomp.component.ts");
/* harmony import */ var _hmorder_hmorder_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hmorder/hmorder.component */ "./src/app/hmorder/hmorder.component.ts");
/* harmony import */ var _admin_hotel_admin_hotel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-hotel/admin-hotel.component */ "./src/app/admin-hotel/admin-hotel.component.ts");
/* harmony import */ var _admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-order/admin-order.component */ "./src/app/admin-order/admin-order.component.ts");
/* harmony import */ var _hotel_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./hotel/order-view/order-view.component */ "./src/app/hotel/order-view/order-view.component.ts");
/* harmony import */ var _hmregister_hmregister_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./hmregister/hmregister.component */ "./src/app/hmregister/hmregister.component.ts");
/* harmony import */ var _hmstudent_hmstudent_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hmstudent/hmstudent.component */ "./src/app/hmstudent/hmstudent.component.ts");
/* harmony import */ var _hmaddschool_hmaddschool_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hmaddschool/hmaddschool.component */ "./src/app/hmaddschool/hmaddschool.component.ts");
/* harmony import */ var _hmschool_hmschool_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hmschool/hmschool.component */ "./src/app/hmschool/hmschool.component.ts");
/* harmony import */ var _hmoschool_hmoschool_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./hmoschool/hmoschool.component */ "./src/app/hmoschool/hmoschool.component.ts");
/* harmony import */ var _hmordersearch_hmordersearch_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hmordersearch/hmordersearch.component */ "./src/app/hmordersearch/hmordersearch.component.ts");
/* harmony import */ var _hmblog_hmblog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./hmblog/hmblog.component */ "./src/app/hmblog/hmblog.component.ts");
/* harmony import */ var _hmstudentrec_hmstudentrec_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./hmstudentrec/hmstudentrec.component */ "./src/app/hmstudentrec/hmstudentrec.component.ts");
/* harmony import */ var _studentmain_studentmain_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./studentmain/studentmain.component */ "./src/app/studentmain/studentmain.component.ts");
/* harmony import */ var _studentaddrecomm_studentaddrecomm_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./studentaddrecomm/studentaddrecomm.component */ "./src/app/studentaddrecomm/studentaddrecomm.component.ts");
/* harmony import */ var _studentinfo_studentinfo_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./studentinfo/studentinfo.component */ "./src/app/studentinfo/studentinfo.component.ts");
/* harmony import */ var _studentrec_studentrec_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./studentrec/studentrec.component */ "./src/app/studentrec/studentrec.component.ts");
/* harmony import */ var _studentresume_studentresume_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./studentresume/studentresume.component */ "./src/app/studentresume/studentresume.component.ts");
/* harmony import */ var _studentschool_studentschool_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./studentschool/studentschool.component */ "./src/app/studentschool/studentschool.component.ts");
/* harmony import */ var _mainclass_mainclass_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mainclass/mainclass.component */ "./src/app/mainclass/mainclass.component.ts");
/* harmony import */ var _mainblog_mainblog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mainblog/mainblog.component */ "./src/app/mainblog/mainblog.component.ts");
/* harmony import */ var _studyabroad_studyabroad_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./studyabroad/studyabroad.component */ "./src/app/studyabroad/studyabroad.component.ts");
/* harmony import */ var _applymaster_applymaster_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./applymaster/applymaster.component */ "./src/app/applymaster/applymaster.component.ts");
/* harmony import */ var _applybachelor_applybachelor_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./applybachelor/applybachelor.component */ "./src/app/applybachelor/applybachelor.component.ts");
/* harmony import */ var _applyhighschool_applyhighschool_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./applyhighschool/applyhighschool.component */ "./src/app/applyhighschool/applyhighschool.component.ts");














// import { FullCalendarModule } from '@fullcalendar/angular'; 
// import dayGridPlugin from '@fullcalendar/daygrid';


// View All Hotels

// View Details of Hotel

// Book A Hotel

// Add A Hotel



























// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
// ]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__["MainpageComponent"],
                _mainclass_mainclass_component__WEBPACK_IMPORTED_MODULE_40__["MainclassComponent"],
                _mainblog_mainblog_component__WEBPACK_IMPORTED_MODULE_41__["MainblogComponent"],
                _studyabroad_studyabroad_component__WEBPACK_IMPORTED_MODULE_42__["StudyabroadComponent"],
                _applymaster_applymaster_component__WEBPACK_IMPORTED_MODULE_43__["ApplymasterComponent"],
                _applybachelor_applybachelor_component__WEBPACK_IMPORTED_MODULE_44__["ApplybachelorComponent"],
                _applyhighschool_applyhighschool_component__WEBPACK_IMPORTED_MODULE_45__["ApplyhighschoolComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _hmmain_hmmain_component__WEBPACK_IMPORTED_MODULE_9__["HMmainComponent"],
                _hmmodifypass_hmmodifypass_component__WEBPACK_IMPORTED_MODULE_10__["HmmodifypassComponent"],
                _hmmodifypasssucc_hmmodifypasssucc_component__WEBPACK_IMPORTED_MODULE_11__["HmmodifypasssuccComponent"],
                _hmmanage_hmmanage_component__WEBPACK_IMPORTED_MODULE_12__["HmmanageComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _hotel_hotel_view_hotel_view_component__WEBPACK_IMPORTED_MODULE_16__["HotelViewComponent"],
                _hotel_hotel_detail_hotel_detail_component__WEBPACK_IMPORTED_MODULE_17__["HotelDetailComponent"],
                _hotel_hotel_book_hotel_book_component__WEBPACK_IMPORTED_MODULE_18__["HotelBookComponent"],
                _hotel_hotel_add_hotel_add_component__WEBPACK_IMPORTED_MODULE_19__["HotelAddComponent"],
                _adminmainpage_adminmainpage_component__WEBPACK_IMPORTED_MODULE_20__["AdminmainpageComponent"],
                _hmcomp_hmcomp_component__WEBPACK_IMPORTED_MODULE_21__["HmcompComponent"],
                _adminmainpage_adminmainpage_component__WEBPACK_IMPORTED_MODULE_20__["AdminmainpageComponent"],
                _hmorder_hmorder_component__WEBPACK_IMPORTED_MODULE_22__["HmorderComponent"],
                _admin_hotel_admin_hotel_component__WEBPACK_IMPORTED_MODULE_23__["AdminHotelComponent"],
                _admin_order_admin_order_component__WEBPACK_IMPORTED_MODULE_24__["AdminOrderComponent"],
                _hotel_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_25__["OrderViewComponent"],
                _hmregister_hmregister_component__WEBPACK_IMPORTED_MODULE_26__["HmregisterComponent"],
                _hmstudent_hmstudent_component__WEBPACK_IMPORTED_MODULE_27__["HmstudentComponent"],
                _hmaddschool_hmaddschool_component__WEBPACK_IMPORTED_MODULE_28__["HmaddschoolComponent"],
                _hmschool_hmschool_component__WEBPACK_IMPORTED_MODULE_29__["HmschoolComponent"],
                _hmoschool_hmoschool_component__WEBPACK_IMPORTED_MODULE_30__["HmoschoolComponent"],
                _hmordersearch_hmordersearch_component__WEBPACK_IMPORTED_MODULE_31__["HmordersearchComponent"],
                _hmblog_hmblog_component__WEBPACK_IMPORTED_MODULE_32__["HmblogComponent"],
                _hmstudentrec_hmstudentrec_component__WEBPACK_IMPORTED_MODULE_33__["HmstudentrecComponent"],
                _studentmain_studentmain_component__WEBPACK_IMPORTED_MODULE_34__["StudentmainComponent"],
                _studentaddrecomm_studentaddrecomm_component__WEBPACK_IMPORTED_MODULE_35__["StudentaddrecommComponent"],
                _studentinfo_studentinfo_component__WEBPACK_IMPORTED_MODULE_36__["StudentinfoComponent"],
                _studentresume_studentresume_component__WEBPACK_IMPORTED_MODULE_38__["StudentresComponent"],
                _studentrec_studentrec_component__WEBPACK_IMPORTED_MODULE_37__["StudentrecComponent"],
                _studentschool_studentschool_component__WEBPACK_IMPORTED_MODULE_39__["StudentschoolComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //FullCalendarModule,
                angular_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_15__["adapterFactory"],
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/applybachelor/applybachelor.component.html":
/*!************************************************************!*\
  !*** ./src/app/applybachelor/applybachelor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <br>\n              <h4 class=\"text-white\">Michi Academy </h4>\n              <p class=\"text-muted\">????????????????????????</p>\n              <br>\n    \n    \n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <br>\n              <form class=\"user\" >\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\"\n                    id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter Email Address...\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"\n                    id=\"login-user-password\" placeholder=\"Password\">\n                </div>\n              </form>\n              <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\">\n                    <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n                </a>\n                    \n    \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a (click)=\"main()\">????????????</a></li>\n                  <li><a (click)=\"class()\" >????????????</a></li>\n                  <li><a (click)=\"abroad()\" >????????????</a></li>\n                  <li><a (click)=\"blog()\">Blog</a></li>\n                  <li>\n                    <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        ????????????\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n    \n        </nav>\n\n<br>\n<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n\t<h1 class=\"display-4\">???????????? </h1>\n\t<p class=\"lead\">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>\n  </div>\n  <br>\n    <!-- Container (?????? Section) -->\n    <div class=\"container marketing\">\n\n      <!-- Three columns of text below the carousel -->\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/g7XPSvb/2021-08-18-09-35-46.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>????????????</h2>\n          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n          \n        </div>\n        <div class=\"col-lg-6\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/0YJ4x0X/4.png\"  alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>????????????</h2>\n          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n          \n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/vQ621hs/1.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>????????????</h2>\n          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n          \n        </div>\n        <div class=\"col-lg-6\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/88vhF85/3.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>GPA</h2>\n          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n          \n        </div>\n      </div>\n    </div>\n\n    <!-- Container (Blog Section) -->\n\n  \n \n    <!-- Container (Blog Section) -->\n    <div class=\"section-title\">\n      <br>\n      <h2>FAQ</h2>         \n      <br>\n      <h4>\n      </h4>\n    </div>\n    <div class=\"container\">\n      <div class=\"row clearfix\">\n        <div class=\"col-md-12 column\">\n          <div class=\"panel-group\" id=\"panel-35714\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-623008\">????????????????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-623008\" class=\"panel-collapse in\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">????????????</b>  <br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????PS?????????????????????essay???<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????????????? </b>  <br>\n                  ????????????TOEFL-?????????????????????IELTS-?????? <br>\n                  ??????????????????SAT???????????????ACT<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????? </b><br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br>\n                  Vericant????????????????????????????????? <br>\n                  InitialView????????????????????????????????? <br>\n                  CIEE-CAI????????????????????????????????? <br>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-175945\">???????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-175945\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ?????????????????????????????????????????????????????????????????????8???9?????????????????????????????????????????????????????????????????????1??????3????????????<br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">??????1 </b><br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">??????2 </b><br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">??????3 </b><br>\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n\n                  <b style=\"font-size: 20px;color:#003520\">?????? </b><br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/?????????????????????Final Transcripts??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-1\" href=\"#panel-element-1\">??????????????????????????????????????????????????? </a>\n              </div>\n              <div id=\"panel-element-1\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-2\" href=\"#panel-element-2\">??????????????????????????????????????????????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-2\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">PS???Personal Statement ???????????????   </b><br>\n                  ???????????????????????????????????????????????????PS?????????????????????????????????????????????????????????????????????PS????????????????????????????????????????????????????????????PS????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????SAT???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????? PS??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">Essay?????????????????? </b><br>\n                  ??????????????????????????????????????????PS???SUB Essays???SUB ESSAYs??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????PS????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????PS?????????ESSAY????????????????????????????????????????????????PS???????????????????????????????????????ESSAYS??????????????????????????????PS?????????ESSAYS???????????????COMMON APPLICATION???????????????????????????????????????????????????????????? http://www.commonapp.org/???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? \n\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-3\" href=\"#panel-element-3\">??????????????????????????????????????????????????????  </a>\n              </div>\n              <div id=\"panel-element-3\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">??????????????????   </b><br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">?????????????????????   </b><br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????&Essays&PS???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????-Hugo????????????????????????</b> <br>\n                  Hugo??????????????????????????????????????????????????????????????????Hugo???????????????1???????????????????????????????????????????????? <br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;100?????????????????????????????????????????????????????????????????????????????????<br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;??????APEC?????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n                  &nbsp;&nbsp;&nbsp;&nbsp;????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br>\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????&Essays&PS???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-4\" href=\"#panel-element-4\">?????????EA???ED???RA???RD???  </a>\n              </div>\n              <div id=\"panel-element-4\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ????????????????????????ED, EA, RD, RA ????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????ED, EA, RD, RA????????????????????????????????????????????????ED?????????????????????EA??????????????????????????????ED???EA??????????????????????????????????????? ??????You are my first choice!?????????????????????????????????????????????????????????????????????????????????????????????offer???  <br><br>\n\n                  <b style=\"font-size: 20px;color:#003520\">EARLY DECISION (ED)  </b><br>\n                  ????????????Deadline???<br>\n                  ???????????????ED1??????????????????11???1??????ED2??????????????????1???1??????????????????????????????????????????????????????ED???????????????????????????????????????ED?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????ED??????????????????????????????????????????????????????????????????ED???????????????????????????????????????????????????ED???????????????????????????????????????????????????ED???ED1???ED2???????????????????????????A?????????ED1???????????????????????????B?????????ED2?????????ED1??????ED2?????????ED????????????????????????????????????????????????EA?????????????????????????????????????????????????????????EA??????????????????????????????EA???(??????EA?????????????????????)????????????????????????????????????ED?????????????????????????????????????????????????????????RD????????????????????????ED??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????(need-based financial aid)?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????ED????????????????????????????????????ED????????????????????????????????????(???????????????Gap year?????????????????????)?????????ED???????????????????????????????????????2????????????ED??????????????????????????????ED??????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">EARLY ACTION (EA)  </b><br>\n                  ????????????Deadline???<br>\n                  ???????????????EA?????????????????????11???1??????????????????????????????EA?????????????????????????????????????????????????????????????????????????????????????????????5???1????????????????????????????????????????????????Non-restrictive early action????????????????????????????????????????????????????????????????????????????????????????????????????????????EA?????????????????????EA??????non-binding;????????????????????????????????????Single-choice Early Action???Restrictive Early Action(REA)?????????????????????????????????????????????????????????????????????????????????????????????EA??????Single-choice Early Action???Restrictive Early Action????????????????????????????????????????????????????????????????????????????????????????????????EA???ED??????????????????????????????Single-choice Early Action???Restrictive Early Action????????????????????????????????????ED???EA??????????????????????????????????????????ED??????????????????????????????????????????????????????????????????Reach???(??????????????????????????????????????????????????????????????????)??????EA?????????????????????????????????????????????Match??? (?????????????????????????????????????????????????????????????????????)?????????????????????????????????????????????????????????????????????offer?????????????????????????????????????????????EA???????????????????????????????????????ED2??????RD???????????????EA???????????????????????????????????????????????????RD????????????EA?????????????????????????????????????????????????????????????????????????????????????????????RD?????????<br><br>\n                  \n                  ???????????????????????????RD?????????????????????RA?????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">REGULAR DECISION (RD)????????????  </b><br>\n                  ????????????Regular Decision???????????????????????????????????????????????????1???1????????????????????????????????? ???4???1?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">ROLLING ADMISSION (RA)???????????? </b><br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-5\" href=\"#panel-element-5\">?????????????????????????????? </a>\n              </div>\n              <div id=\"panel-element-5\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????8???????????????????????????????????????ACT\\SAT????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????(????????????????????????)??????????????????????????????????????????????????????????????????????????????<br>\n                  ???????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">Need-Blind (??????????????????)  </b><br>\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">Need-Based (??????????????????)  </b><br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????need-based??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">Merit-Based ( ???????????????)   </b><br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n\n\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/applybachelor/applybachelor.component.scss":
/*!************************************************************!*\
  !*** ./src/app/applybachelor/applybachelor.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.marketing .col-lg-6 {\n  margin-bottom: 1.5rem;\n  text-align: center;\n  position: relative; }\n\n.marketing h2 {\n  font-weight: 400; }\n\n.marketing .col-lg-6 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n.pricing-header {\n  max-width: 700px; }\n\n.text-center {\n  text-align: center;\n  position: relative;\n  left: 50%;\n  top: 76px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nbody {\n  margin-top: 20px;\n  color: #6c7293; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #e7eaed;\n  border-radius: 0; }\n\n.accordion .card {\n  margin-bottom: .75rem;\n  box-shadow: 0px 1px 15px 1px rgba(230, 234, 236, 0.35);\n  border-radius: .25rem; }\n\n.accordion .card .card-header {\n  background-color: transparent;\n  border: none;\n  padding: 2rem; }\n\n.grid-margin {\n  margin-bottom: 0.625rem; }\n\n.accordion .card .card-header a[aria-expanded=\"true\"]:before {\n  content: \"\\F374\"; }\n\n.accordion .card .card-header a:before {\n  font-family: \"Material Design Icons\";\n  position: absolute;\n  right: 7px;\n  top: 0;\n  font-size: 18px;\n  display: block; }\n\n.accordion .card .card-header a[aria-expanded=\"false\"]:before {\n  content: \"\\F415\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYXBwbHliYWNoZWxvci9hcHBseWJhY2hlbG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQ0FBbUMsRUFBQTs7QUFFckM7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSwyQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSwyQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRTlCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSwyQ0FBd0MsRUFBQTs7QUFFMUM7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWhCO0VBQVksa0JBQWlCLEVBQUE7O0FBQzdCO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxVQUFVO0lBQ1YsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSxVQUFVO0lBQ1YsaUNBQWlDLEVBQUEsRUFBQTs7QUFHckM7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFFaEI7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUEsRUFDcEI7O0FBRUg7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCOztBQUdMO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBRXJCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHdDQUErQjtVQUEvQixnQ0FBK0IsRUFBQTs7QUFLaEM7RUFDSSxnQkFBZTtFQUNuQixjQUFjLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFxQjtFQUNyQixzREFBc0Q7RUFDdEQscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBseWJhY2hlbG9yL2FwcGx5YmFjaGVsb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250OiA0MDAgMTVweCBMYXRvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfSAgXG4gIC5qdW1ib3Ryb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTAwcHggMjVweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAub3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5mb250LXdlaWdodC1ub3JtYWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xuICB9XG4gIC5mb250LXdlaWdodC1ub3JtYWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubWFya2V0aW5nIC5jb2wtbGctNiAge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9IFxuICAubWFya2V0aW5nIGgyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9IFxuICAubWFya2V0aW5nIC5jb2wtbGctNiBwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLjc1cmVtO1xuICB9XG4gIC5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucm91bmRlZC1jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xuICB9XG4gIC5iZy1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICB9XG4gIC5sb2dvLXNtYWxsIHtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLmxvZ28ge1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gIH1cbiAgLnRodW1ibmFpbCB7XG4gICAgcGFkZGluZzogMCAwIDE1cHggMDtcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC50aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuY2Fyb3VzZWwtY29udHJvbC5yaWdodCwgLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gIH1cbiAgLml0ZW0gc3BhbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIC5wYW5lbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyMzUxRjsgXG4gICAgYm9yZGVyLXJhZGl1czowICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xuICB9XG4gIC5wYW5lbDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwwLDAsIC4yKTtcbiAgfVxuICAucGFuZWwtZm9vdGVyIC5idG46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuICAucGFuZWwtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gIH1cbiBcbiAgLnBhbmVsLWZvb3RlciBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuICAuc2xpZGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3R0b206IDFweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xufVxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAyMzUxRjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbn1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLXNtLTQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgfVxuICAgIC5idG4tbGcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgfVxuICB9XG5cbi5wcmljaW5nLWhlYWRlciB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbn1cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNzZweDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcblxufVxuXG5cbmJvZHl7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuY29sb3I6ICM2YzcyOTM7XG59XG4uY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VhZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmFjY29yZGlvbiAuY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAxcHggcmdiYSgyMzAsIDIzNCwgMjM2LCAwLjM1KTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG4uZ3JpZC1tYXJnaW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxGMzc0XCI7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBhOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgRGVzaWduIEljb25zXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGFbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXEY0MTVcIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/applybachelor/applybachelor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/applybachelor/applybachelor.component.ts ***!
  \**********************************************************/
/*! exports provided: ApplybachelorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplybachelorComponent", function() { return ApplybachelorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");






var ApplybachelorComponent = /** @class */ (function () {
    function ApplybachelorComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
    }
    ApplybachelorComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                console.log(_this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    ApplybachelorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
    };
    ApplybachelorComponent.prototype.main = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainpage'], navigationExtras);
    };
    //direct to the ???????????? page
    ApplybachelorComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    ApplybachelorComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    ApplybachelorComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    ApplybachelorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applybachelor',
            template: __webpack_require__(/*! ./applybachelor.component.html */ "./src/app/applybachelor/applybachelor.component.html"),
            styles: [__webpack_require__(/*! ./applybachelor.component.scss */ "./src/app/applybachelor/applybachelor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApplybachelorComponent);
    return ApplybachelorComponent;
}());



/***/ }),

/***/ "./src/app/applyhighschool/applyhighschool.component.html":
/*!****************************************************************!*\
  !*** ./src/app/applyhighschool/applyhighschool.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <br>\n              <h4 class=\"text-white\">Michi Academy </h4>\n              <p class=\"text-muted\">????????????????????????</p>\n              <br>\n    \n    \n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <br>\n              <form class=\"user\" >\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\"\n                    id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter Email Address...\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"\n                    id=\"login-user-password\" placeholder=\"Password\">\n                </div>\n              </form>\n              <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\">\n                    <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n                </a>\n                    \n    \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a (click)=\"main()\">????????????</a></li>\n                  <li><a (click)=\"class()\" >????????????</a></li>\n                  <li><a (click)=\"abroad()\" >????????????</a></li>\n                  <li><a (click)=\"blog()\">Blog</a></li>\n                  <li>\n                    <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        ????????????\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n    \n        </nav>\n\n<br>\n<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n\t<h1 class=\"display-4\">???????????? </h1>\n\t<p class=\"lead\">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>\n  </div>\n  <br>\n    <!-- Container (?????? Section) -->\n    <div class=\"container marketing\">\n\n      <!-- Three columns of text below the carousel -->\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/NyQbvNh/5.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>????????????</h2>\n          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n          \n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-6\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/n0h31KC/6.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>????????????</h2>\n          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n          \n        </div><!-- /.col-lg-4 -->\n      </div><!-- /.row -->\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/2gqWCS7/7.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>GPA</h2>\n          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n          \n        </div><!-- /.col-lg-4 -->\n      </div><!-- /.row -->\n    </div>\n\n    <!-- Container (Blog Section) -->\n    <div class=\"section-title\">\n      <br>\n      <h2>FAQ</h2>         \n      <br>\n      <h4>\n      </h4>\n    </div>\n    <div class=\"container\">\n      <div class=\"row clearfix\">\n        <div class=\"col-md-12 column\">\n          <div class=\"panel-group\" id=\"panel-35714\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-623008\">??????????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-623008\" class=\"panel-collapse in\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">????????????</b>  <br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????3?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????PS???????????????????????????additional essay??? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????????????? </b>  <br>\n                  ????????????toefl-?????????????????????toefl jr-???????????????ielts-?????????slep <br>\n                  ??????????????????ssat???????????????isee <br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????? </b><br>\n                  ????????????????????????????????????????????????????????????????????????<br>\n                  Vericant????????????????????????????????? <br>\n                  InitialView????????????????????????????????? <br>\n                  CIEE-CAI????????????????????????????????? <br>\n                  ???????????????????????????????????????????????????????????????????????????<br>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-175945\">????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-175945\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">???????????? </b><br>\n                  ?????????????????????5?????????6?????????????????????8???????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">???????????? </b><br>\n                  ???????????????9?????????????????????12????????????????????????????????????\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-1\" href=\"#panel-element-1\">?????????????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-1\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????????1???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-2\" href=\"#panel-element-2\">?????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-2\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">J1??????  </b><br>\n                  ???????????????J-1?????????????????????????????????????????????Exchange-Visitor Programs??????J-1?????????????????????????????????????????????????????????????????????????????????<br>\n                  ??????????????????J-1??????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">F1??????  </b><br>\n                  ???????????????????????????????????????????????????F1??????????????????J1????????????????????????F1???????????????????????????????????????????????????????????????????????????????????????????????????????????????F1????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????90%\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-3\" href=\"#panel-element-3\">????????????????????????????????? </a>\n              </div>\n              <div id=\"panel-element-3\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  <b style=\"font-size: 20px;color:#003520\">????????????  </b><br>\n                  ?????????????????????????????????????????????????????????????????????????????????(???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????) <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????  </b><br>\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">??????????????????????????????????????????????????????</b> <br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? \n\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-4\" href=\"#panel-element-4\">???????????????????????????????????????????????????????????? </a>\n              </div>\n              <div id=\"panel-element-4\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ??????????????????????????????????????????????????? <br><br>\n\n                  <b style=\"font-size: 20px;color:#003520\">????????????????????? </b><br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????9??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">?????????????????????  </b><br>\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? \n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-5\" href=\"#panel-element-5\">??????????????????????????????????????????????????????????????????????????????????????????????????? </a>\n              </div>\n              <div id=\"panel-element-5\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????  </b><br>\n                  ???????????????????????????????????????????????????S-2018????????????????????????1???????????????????????????S?????????????????????????????????2017???10-11?????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????  </b><br>\n                  ???????????????????????????????????????????????????F-2018????????????????????????9???????????????????????????F?????????????????????????????????2017???1-2?????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????????   </b><br>\n                  ?????????????????????&????????????????????????????????????R-2018????????????????????????9?????????????????????????????????1?????????????????????R??????????????????????????????????????????????????????????????????????????????????????????????????????\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-6\">??????????????????????????????????????????????????????????????? </a>\n              </div>\n              <div id=\"panel-element-6\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????1??????1????????????????????????????????????1????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? \n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-7\" href=\"#panel-element-7\">?????????????????????????????????SSAT+?????????????????????????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-7\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-8\" href=\"#panel-element-8\">??????????????????????????????????????????????????????</a>\n              </div>\n              <div id=\"panel-element-8\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????Thanksgiving (11???)???Christmas(12???)???Spring break(??????)???Summer(??????)???<br><br>\n\n                  <b style=\"font-size: 20px;color:#003520\">??????????????? </b><br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">Spring break(??????) </b><br>\n                  ??????????????????????????????????????????????????????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">Summer(??????)  </b><br>\n                  ??????????????????????????????????????????summer school,??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????AP???IB??????????????????<br><br>\n                  <b style=\"font-size: 20px;color:#003520\">?????????????????????????????????????????????????????????-2009~2010-?????????????????? </b><br>\n                  Labor Day September 7, 2009 <br>\n                  Fall Break October 5 - 13, 2009 <br>\n                  Thanksgiving Break November 25 - 27, 2009Winter Break December 21 - January 1 <br>\n                  Second Semester Begins January 4, 2010 <br>\n                  Martin Luther King, Jr. Holiday January 18, 2010 <br>\n                  President???s Day February 15, 2010 <br>\n                  Mini-Break March 11 - 12, 2010 <br>\n                  Good Friday April 2, 2010 <br>\n                  Spring Break April 5 - 9, 2010 <br>\n                  Primary Election Day May 18, 2010 <br>\n                  Last Day for Students May 21, 2010 <br>\n                  Closing Day for Teachers & Staff May 24, 2010 <br>\n                  ???????????????????????????????????????????????????????????????????????????????????????????????? \n\n                </div>\n              </div>\n            </div>\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                 <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-9\" href=\"#panel-element-9\">AP???IB??????</a>\n              </div>\n              <div id=\"panel-element-9\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\">\n                  ????????????????????????????????????????????????????????????????????????????????????????????????10-12????????????????????????????????????11???????????????????????????????????????10?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n\n                  <b style=\"font-size: 20px;color:#003520\">????????? </b><br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????GPA??????????????????????????? <br><br>\n                  <b style=\"font-size: 20px;color:#003520\">????????? </b><br>\n                  ??????????????????????????????????????????????????????????????????????????????????????????????????????GPA?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????GPA??????????????????????????????????????????????????????????????????????????????????????????GPA??????????????????<br><br>\n                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n                  ???????????????????????????????????????????????????????????? <br>\n                  https://apstudent.collegeboard.org/home \n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n \n    <br>\n    <br>\n\n\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/applyhighschool/applyhighschool.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/applyhighschool/applyhighschool.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.marketing .col-lg-6 {\n  margin-bottom: 1.5rem;\n  text-align: center;\n  position: relative; }\n\n.marketing .col-lg-12 {\n  margin-bottom: 1.5rem;\n  text-align: center;\n  position: relative; }\n\n.marketing h2 {\n  font-weight: 400; }\n\n.marketing .col-lg-6 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n.pricing-header {\n  max-width: 700px; }\n\n.text-center {\n  text-align: center;\n  position: relative;\n  left: 50%;\n  top: 76px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nbody {\n  margin-top: 20px;\n  color: #6c7293; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #e7eaed;\n  border-radius: 0; }\n\n.accordion .card {\n  margin-bottom: .75rem;\n  box-shadow: 0px 1px 15px 1px rgba(230, 234, 236, 0.35);\n  border-radius: .25rem; }\n\n.accordion .card .card-header {\n  background-color: transparent;\n  border: none;\n  padding: 2rem; }\n\n.grid-margin {\n  margin-bottom: 0.625rem; }\n\n.accordion .card .card-header a[aria-expanded=\"true\"]:before {\n  content: \"\\F374\"; }\n\n.accordion .card .card-header a:before {\n  font-family: \"Material Design Icons\";\n  position: absolute;\n  right: 7px;\n  top: 0;\n  font-size: 18px;\n  display: block; }\n\n.accordion .card .card-header a[aria-expanded=\"false\"]:before {\n  content: \"\\F415\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYXBwbHloaWdoc2Nob29sL2FwcGx5aGlnaHNjaG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUNBQW1DLEVBQUE7O0FBRXJDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsMkJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UsMkJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRTlCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSwyQ0FBd0MsRUFBQTs7QUFFMUM7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWhCO0VBQVksa0JBQWlCLEVBQUE7O0FBQzdCO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxVQUFVO0lBQ1YsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSxVQUFVO0lBQ1YsaUNBQWlDLEVBQUEsRUFBQTs7QUFHckM7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFFaEI7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUEsRUFDcEI7O0FBRUg7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCOztBQUdMO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBRXJCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHdDQUErQjtVQUEvQixnQ0FBK0IsRUFBQTs7QUFLaEM7RUFDSSxnQkFBZTtFQUNuQixjQUFjLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFxQjtFQUNyQixzREFBc0Q7RUFDdEQscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBseWhpZ2hzY2hvb2wvYXBwbHloaWdoc2Nob29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH0gIFxuICAuanVtYm90cm9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwMHB4IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZm9udC13ZWlnaHQtbm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogNDAwIWltcG9ydGFudDtcbiAgfVxuICAuZm9udC13ZWlnaHQtbm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogNDAwIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1hcmtldGluZyAuY29sLWxnLTYge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9IFxuICAubWFya2V0aW5nIC5jb2wtbGctMTIge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9IFxuICAubWFya2V0aW5nIGgyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9IFxuICAubWFya2V0aW5nIC5jb2wtbGctNiBwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLjc1cmVtO1xuICB9XG4gIC5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucm91bmRlZC1jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xuICB9XG4gIC5iZy1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICB9XG4gIC5sb2dvLXNtYWxsIHtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLmxvZ28ge1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gIH1cbiAgLnRodW1ibmFpbCB7XG4gICAgcGFkZGluZzogMCAwIDE1cHggMDtcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC50aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuY2Fyb3VzZWwtY29udHJvbC5yaWdodCwgLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gIH1cbiAgLml0ZW0gc3BhbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIC5wYW5lbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyMzUxRjsgXG4gICAgYm9yZGVyLXJhZGl1czowICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xuICB9XG4gIC5wYW5lbDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwwLDAsIC4yKTtcbiAgfVxuICAucGFuZWwtZm9vdGVyIC5idG46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuICAucGFuZWwtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gIH1cbiBcbiAgLnBhbmVsLWZvb3RlciBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuICAuc2xpZGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3R0b206IDFweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xufVxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAyMzUxRjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbn1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLXNtLTQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgfVxuICAgIC5idG4tbGcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgfVxuICB9XG5cbi5wcmljaW5nLWhlYWRlciB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbn1cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNzZweDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcblxufVxuXG5cbmJvZHl7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuY29sb3I6ICM2YzcyOTM7XG59XG4uY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VhZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmFjY29yZGlvbiAuY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAxcHggcmdiYSgyMzAsIDIzNCwgMjM2LCAwLjM1KTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG4uZ3JpZC1tYXJnaW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxGMzc0XCI7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBhOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgRGVzaWduIEljb25zXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGFbYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXEY0MTVcIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/applyhighschool/applyhighschool.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/applyhighschool/applyhighschool.component.ts ***!
  \**************************************************************/
/*! exports provided: ApplyhighschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyhighschoolComponent", function() { return ApplyhighschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");






var ApplyhighschoolComponent = /** @class */ (function () {
    function ApplyhighschoolComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
    }
    ApplyhighschoolComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                console.log(_this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    ApplyhighschoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
    };
    ApplyhighschoolComponent.prototype.main = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainpage'], navigationExtras);
    };
    //direct to the ???????????? page
    ApplyhighschoolComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    ApplyhighschoolComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    ApplyhighschoolComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    ApplyhighschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applyhighschool',
            template: __webpack_require__(/*! ./applyhighschool.component.html */ "./src/app/applyhighschool/applyhighschool.component.html"),
            styles: [__webpack_require__(/*! ./applyhighschool.component.scss */ "./src/app/applyhighschool/applyhighschool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApplyhighschoolComponent);
    return ApplyhighschoolComponent;
}());



/***/ }),

/***/ "./src/app/applymaster/applymaster.component.html":
/*!********************************************************!*\
  !*** ./src/app/applymaster/applymaster.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <br>\n              <h4 class=\"text-white\">Michi Academy </h4>\n              <p class=\"text-muted\">????????????????????????</p>\n              <br>\n    \n    \n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <br>\n              <form class=\"user\" >\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\"\n                    id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter Email Address...\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"\n                    id=\"login-user-password\" placeholder=\"Password\">\n                </div>\n              </form>\n              <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\">\n                    <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n                </a>\n                    \n    \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a (click)=\"main()\">????????????</a></li>\n                  <li><a (click)=\"class()\" >????????????</a></li>\n                  <li><a (click)=\"abroad()\" >????????????</a></li>\n                  <li><a (click)=\"blog()\">Blog</a></li>\n                  <li>\n                    <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        ????????????\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n    \n        </nav>\n\n<br>\n<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n\t<h1 class=\"display-4\">???????????? </h1>\n\t<p class=\"lead\">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>\n  </div>\n  <br>\n    <!-- Container (?????? Section) -->\n    <div class=\"container marketing\">\n\n      <!-- Three columns of text below the carousel -->\n      <div class=\"row\">\n        <div class=\"col-lg-3\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/hWNssd6/3.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>??????</h2>\n          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/t8QhdMZ/4.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>????????????</h2>\n          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div><!-- /.col-lg-4 -->\n        <div class=\"col-lg-3\">\n          <img class=\"rounded-circle\" src=\"https://i.ibb.co/n0rX53V/1.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n          <h2>GPA</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div><!-- /.col-lg-4 -->\n\t\t<div class=\"col-lg-3\">\n\t\t\t<img class=\"rounded-circle\" src=\"https://i.ibb.co/5sJPH5w/2.png\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n\t\t\t<h2>???????????????</h2>\n\t\t\t<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n\t\t\t<p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n\t\t  </div><!-- /.col-lg-4 -->\n      </div><!-- /.row -->\n    </div>\n\n    <!-- Container (Blog Section) -->\n\n  \n \n<!-- Container (Q&A) Section) -->\n<div class=\"section-title\">\n  <br>\n  <h2>FAQ</h2>         \n  <br>\n  <h4>\n  </h4>\n</div>\n<div class=\"container\">\n  <div class=\"row clearfix\">\n    <div class=\"col-md-12 column\">\n      <div class=\"panel-group\" id=\"panel-35714\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-623008\">??????????????????????????????????????????????????????????????????????????????</a>\n          </div>\n          <div id=\"panel-element-623008\" class=\"panel-collapse in\">\n            <div class=\"panel-body\">\n              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n              <br>\n              \n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-175945\">?????????????????????????????????????????????????????????????????????????????????</a>\n          </div>\n          <div id=\"panel-element-175945\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-1\" href=\"#panel-element-1\">????????????????????????????????????GMAT??????GRE???</a>\n          </div>\n          <div id=\"panel-element-1\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              ?????????????????????????????????GMAT??????????????????GRE <br>\n            ?????????????????????????????????GMAT???GRE??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n              <br>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-2\" href=\"#panel-element-2\">?????? GMAT ??? GRE ????????????????????????????????????????????????????????????????????????</a>\n          </div>\n          <div id=\"panel-element-2\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n              \n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-3\" href=\"#panel-element-3\">?????????????????????????????????????????????????????? </a>\n          </div>\n          <div id=\"panel-element-3\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n              ?????????MBA?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-4\" href=\"#panel-element-4\">????????????????????????MBA????????????????????????</a>\n          </div>\n          <div id=\"panel-element-4\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n\n              <b style=\"font-size: 20px;color:#003520\">???????????? </b><br>\n              ?????????????????????????????????????????????????????????????????????.???GMAT??????????????????????????????????????????.????????????????????????????????????????????????????????????????????????20%-40%???????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">?????????????????? </b><br>\n              ??????????????????????????????????????????MBA??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">????????????</b><br>\n              ??????MBA??????????????????????????????????????????????????????????????????????????????????????????????????????top???????????????????????????????????????2???5??????<br><br>\n              <b style=\"font-size: 20px;color:#003520\">?????? </b><br>\n              ????????????PS????????????ESSAY????????????????????????MBA???????????????????????????????????????ESSAY?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">???????????????</b><br>\n              ?????????????????????????????????????????????????????????????????????????????????????????????30???????????????<br><br>\n\n              <b style=\"font-size: 20px;color:#003520\">MBA???????????????</b><br>\n              ?????????MBA??????????????????4?????????????????????????????????????????????MBA???????????????????????????????????????????????????????????????????????????????????????????????????MBA?????????????????????????????????????????????????????????MBA????????????????????????????????????????????????<br><br>\n              <b style=\"font-size: 20px;color:#003520\">???????????? </b><br>\n              ??????????????????MBA?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">MBA??????????????????</b><br>\n              MBA??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n\n              <b style=\"font-size: 20px;color:#003520\">???MBA??????????????????????????????????????????</b><br>\n              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n              <b style=\"font-size: 20px;color:#003520\">?????????MBA???????????? </b><br>\n              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????MBA???????????????MBA?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">????????????</b><br>\n              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-5\" href=\"#panel-element-5\">?????????????????????????????????????????? </a>\n          </div>\n          <div id=\"panel-element-5\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              ??????????????????????????????????????????????????????<br><br>\n              <b style=\"font-size: 20px;color:#003520\">????????????vs ????????????</b><br>\n              ???????????????????????????????????????????????????????????????????????????????????????????????????usnews.com???????????????????????????????????????????????????Grad school????????????????????????????????? ???????????? ???????????????????????????????????????????????????100?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n\n              <b style=\"font-size: 15px;color:#3B604F\">?????????????????????????????????????????????????????????</b><br>\n              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br>\n              <b style=\"font-size: 15px;color:#3B604F\">???????????????????????????????????????</b><br>\n              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n\n              <b style=\"font-size: 20px;color:#003520\">????????????&????????????  </b><br>\n              ???????????????????????????????????????????????????????????????????????????????????????TESOL????????????????????????practicum?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">????????????&????????????   </b><br>\n              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????IT???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">?????????????????????????????????????????????  </b><br>\n              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????University of North Carolina Chapel Hill???University of Wisconsin???Madison?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????University of Notre Dame???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n\n              <b style=\"font-size: 20px;color:#003520\">??????????????? ?????????????????????   </b><br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????????????????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????????????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n              <b style=\"font-size: 20px;color:#003520\">??????????????? ?????????????????????  </b><br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;??????????????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????????(???????????????)?????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;??????????????????????????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????????????????????????????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????????????????????????????????????????????????????????<br>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;???????????????????????????????????????????????????????????????<br><br>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n             <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-6\">???????????????????????????????????????????????? </a>\n          </div>\n          <div id=\"panel-element-6\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">\n              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n\n              <b style=\"font-size: 20px;color:#003520\">????????????????????? </b><br>\n              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">?????????????????????????????????</b><br>\n              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br><br>\n              <b style=\"font-size: 20px;color:#003520\">?????????????????????</b><br>\n              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/??????/???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>\n              \n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/applymaster/applymaster.component.scss":
/*!********************************************************!*\
  !*** ./src/app/applymaster/applymaster.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.marketing .col-lg-3 {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n\n.marketing h2 {\n  font-weight: 400; }\n\n.marketing .col-lg-3 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n.pricing-header {\n  max-width: 700px; }\n\n.text-center {\n  text-align: center;\n  position: relative;\n  left: 50%;\n  top: 76px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nbody {\n  margin-top: 20px;\n  color: #6c7293; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #e7eaed;\n  border-radius: 0; }\n\n.accordion .card {\n  margin-bottom: .75rem;\n  box-shadow: 0px 1px 15px 1px rgba(230, 234, 236, 0.35);\n  border-radius: .25rem; }\n\n.accordion .card .card-header {\n  background-color: transparent;\n  border: none;\n  padding: 2rem; }\n\n.grid-margin {\n  margin-bottom: 0.625rem; }\n\n.accordion .card .card-header a[aria-expanded=\"true\"]:before {\n  content: \"\\F374\"; }\n\n.accordion .card .card-header a:before {\n  font-family: \"Material Design Icons\";\n  position: absolute;\n  right: 7px;\n  top: 0;\n  font-size: 18px;\n  display: block; }\n\n.accordion .card .card-header a[aria-expanded=\"false\"]:before {\n  content: \"\\F415\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvYXBwbHltYXN0ZXIvYXBwbHltYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLDJCQUEwQixFQUFBOztBQUU1QjtFQUNFLDJCQUEwQixFQUFBOztBQUc1QjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDZCQUE0QixFQUFBOztBQUU5QjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsMkNBQXdDLEVBQUE7O0FBRTFDO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUMsRUFBQTs7QUFFckM7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUVoQjtFQUFZLGtCQUFpQixFQUFBOztBQUM3QjtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUc3QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQyxFQUFBLEVBQUE7O0FBR3JDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsV0FBVztJQUNYLG1CQUFtQixFQUFBLEVBQ3BCOztBQUVIO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFHTDtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQjtFQUVyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCx3Q0FBK0I7VUFBL0IsZ0NBQStCLEVBQUE7O0FBS2hDO0VBQ0ksZ0JBQWU7RUFDbkIsY0FBYyxFQUFBOztBQUVkO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUI7RUFDckIsc0RBQXNEO0VBQ3RELHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVqQjtFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwbHltYXN0ZXIvYXBwbHltYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBmb250OiA0MDAgMTVweCBMYXRvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfSAgXG4gIC5qdW1ib3Ryb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTAwcHggMjVweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAub3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5mb250LXdlaWdodC1ub3JtYWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xuICB9XG4gIC5mb250LXdlaWdodC1ub3JtYWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubWFya2V0aW5nIC5jb2wtbGctMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSBcbiAgLm1hcmtldGluZyBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfSBcbiAgLm1hcmtldGluZyAuY29sLWxnLTMgcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcbiAgfVxuICAuYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnJvdW5kZWQtY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgfVxuICAuYmctZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgfVxuICAubG9nby1zbWFsbCB7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5sb2dvIHtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgICBmb250LXNpemU6IDIwMHB4O1xuICB9XG4gIC50aHVtYm5haWwge1xuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAudGh1bWJuYWlsIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaXRlbSBoNCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbjogNzBweCAwO1xuICB9XG4gIC5pdGVtIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICAucGFuZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7IFxuICAgIGJvcmRlci1yYWRpdXM6MCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgfVxuICAucGFuZWw6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDVweCAwcHggNDBweCByZ2JhKDAsMCwwLCAuMik7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDIzNTFGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgfVxuICAucGFuZWwtaGVhZGluZyB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICB9XG4gXG4gIC5wYW5lbC1mb290ZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAucGFuZWwtZm9vdGVyIGg0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIgLmJ0biB7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAubmF2YmFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUY7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDMgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLm5hdmJhciBsaSBhLCAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2YmFyLW5hdiBsaSBhOmhvdmVyLCAubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XG4gICAgY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgZm9vdGVyIC5nbHlwaGljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5zbGlkZWFuaW0ge3Zpc2liaWxpdHk6aGlkZGVuO31cbiAgLnNsaWRlIHtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAuY2FwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG4gIC5zZWN0aW9uLXRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXRpdGxlIGg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjdGlvbi10aXRsZSBoMjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgYm90dG9tOiAxcHg7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA2MHB4KTtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICMwMjM1MUY7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XG59XG4gIEBrZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XG4gICAgfSBcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbC1zbS00IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMjVweCAwO1xuICAgIH1cbiAgICAuYnRuLWxnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubG9nbyB7XG4gICAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIH1cbiAgfVxuXG4ucHJpY2luZy1oZWFkZXIge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG59XG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDc2cHg7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG5cbn1cblxuXG5ib2R5e1xuICAgIG1hcmdpbi10b3A6MjBweDtcbmNvbG9yOiAjNmM3MjkzO1xufVxuLmNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlYWVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5hY2NvcmRpb24gLmNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggMXB4IHJnYmEoMjMwLCAyMzQsIDIzNiwgMC4zNSk7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuLmdyaWQtbWFyZ2luIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbn1cbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl06YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcRjM3NFwiO1xufVxuLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgYTpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIERlc2lnbiBJY29uc1wiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3B4O1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciBhW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxGNDE1XCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/applymaster/applymaster.component.ts":
/*!******************************************************!*\
  !*** ./src/app/applymaster/applymaster.component.ts ***!
  \******************************************************/
/*! exports provided: ApplymasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplymasterComponent", function() { return ApplymasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");






var ApplymasterComponent = /** @class */ (function () {
    function ApplymasterComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
    }
    ApplymasterComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                console.log(_this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    ApplymasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
    };
    ApplymasterComponent.prototype.main = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainpage'], navigationExtras);
    };
    //direct to the ???????????? page
    ApplymasterComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    ApplymasterComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    ApplymasterComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    ApplymasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applymaster',
            template: __webpack_require__(/*! ./applymaster.component.html */ "./src/app/applymaster/applymaster.component.html"),
            styles: [__webpack_require__(/*! ./applymaster.component.scss */ "./src/app/applymaster/applymaster.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApplymasterComponent);
    return ApplymasterComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        //?????? ????????????
        this.blogs = [];
        this.blogS = [];
        this.blogsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    BlogService.prototype.getActivity = function () {
        var _this = this;
        this.http.get('/api/blogs').subscribe(function (Data) {
            _this.blogs = Data.blogs;
            _this.blog = _this.blogs[0];
            _this.blogsUpdated.next(_this.blogs.slice());
        });
    };
    BlogService.prototype.getblogsUpdatedListener = function () {
        return this.blogsUpdated.asObservable();
    };
    BlogService.prototype.addBlog = function (id, blogTitle, //??????
    blogSubtitle, //?????????
    blogTime, //????????????
    blogPicture, //??????
    blogLink, //link
    countNumber) {
        var _this = this;
        var blog = {
            _id: null,
            blogTitle: blogTitle,
            blogSubtitle: blogSubtitle,
            blogTime: blogTime,
            blogPicture: blogPicture,
            blogLink: blogLink,
            countNumber: countNumber,
        };
        this.http.post('/api/blogadd', blog).subscribe(function (responseData) {
            _this.blogS.push(blog);
            _this.blogsUpdated.next(_this.blogS.slice());
        });
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/education.service.ts":
/*!**************************************!*\
  !*** ./src/app/education.service.ts ***!
  \**************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var EducationService = /** @class */ (function () {
    function EducationService(http) {
        this.http = http;
        //?????? ????????????
        this.educations = [];
        this.educationS = [];
        this.educationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    EducationService.prototype.getEducation = function () {
        var _this = this;
        this.http.get('/api/educations').subscribe(function (Data) {
            _this.educations = Data.educations;
            _this.education = _this.educations[0];
            _this.educationsUpdated.next(_this.educations.slice());
        });
    };
    EducationService.prototype.getrecommendersUpdatedListener = function () {
        return this.educationsUpdated.asObservable();
    };
    EducationService.prototype.addEducation = function (id, userAccount, //?????????id
    type, //????????????????????????????????????
    educationName, educationLocation, educationStart, //??????????????????
    educationEnd, //??????????????????
    major, Degree, GPA, MajorGPA, //??????GPA
    SecondDegree, //?????????
    SecondGPA, //???????????? GPA
    other) {
        var _this = this;
        var education = {
            _id: null,
            userAccount: userAccount,
            type: type,
            educationName: educationName,
            educationLocation: educationLocation,
            educationStart: educationStart,
            educationEnd: educationEnd,
            major: major,
            Degree: Degree,
            GPA: GPA,
            MajorGPA: MajorGPA,
            SecondDegree: SecondDegree,
            SecondGPA: SecondGPA,
            other: other,
        };
        this.http.post('/api/educationadd', education).subscribe(function (responseData) {
            _this.educationS.push(education);
            _this.educationsUpdated.next(_this.educationS.slice());
        });
    };
    EducationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/experience.service.ts":
/*!***************************************!*\
  !*** ./src/app/experience.service.ts ***!
  \***************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ExperienceService = /** @class */ (function () {
    function ExperienceService(http) {
        this.http = http;
        //?????? ????????????
        this.experiences = [];
        this.experienceS = [];
        this.experiencesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ExperienceService.prototype.getExperience = function () {
        var _this = this;
        this.http.get('/api/experiences').subscribe(function (Data) {
            _this.experiences = Data.experiences;
            _this.experience = _this.experiences[0];
            _this.experiencesUpdated.next(_this.experiences.slice());
        });
    };
    ExperienceService.prototype.getexperiencesUpdatedListener = function () {
        return this.experiencesUpdated.asObservable();
    };
    ExperienceService.prototype.addExperience = function (id, userAccount, //?????????id
    type, //?????????????????????/????????????
    institution, institutionLocation, experienceStart, //??????????????????
    experienceEnd, //??????????????????
    experienceposition, responsibilities, project, achievement) {
        var _this = this;
        var experience = {
            _id: null,
            userAccount: userAccount,
            type: type,
            institution: institution,
            institutionLocation: institutionLocation,
            experienceStart: experienceStart,
            experienceEnd: experienceEnd,
            experienceposition: experienceposition,
            responsibilities: responsibilities,
            project: project,
            achievement: achievement,
        };
        this.http.post('/api/experienceadd', experience).subscribe(function (responseData) {
            _this.experienceS.push(experience);
            _this.experiencesUpdated.next(_this.experienceS.slice());
        });
    };
    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/hm.service.ts":
/*!*******************************!*\
  !*** ./src/app/hm.service.ts ***!
  \*******************************/
/*! exports provided: HmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmService", function() { return HmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HmService = /** @class */ (function () {
    function HmService(http) {
        this.http = http;
        this.hotels = [];
        this.hotelM = [];
        this.hotelMUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HmService.prototype.getHotelM = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            //console.log(Data);
            _this.hotels = Data.hotels;
            //console.log(this.hotels[0].email);
            _this.hotel = _this.hotels[0];
            console.log(_this.hotel.email);
            _this.hotelMUpdated.next(_this.hotels.slice());
        });
        // console.log("From  Hotel");
        // console.log(this.hotel)
        // return this.hotel;
    };
    HmService.prototype.getHotelMUpdatedListener = function () {
        return this.hotelMUpdated.asObservable();
    };
    HmService.prototype.addHotel = function (id, userAccount, firstName, lastName, email, phone, name, location, image, price) {
        var _this = this;
        var hotel = {
            _id: null,
            userAccount: userAccount,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            name: name,
            location: location,
            image: image,
            price: price
        };
        this.http.post('/api/hoteladd', hotel).subscribe(function (responseData) {
            _this.hotelM.push(hotel);
            _this.hotelMUpdated.next(_this.hotelM.slice());
        });
    };
    HmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HmService);
    return HmService;
}());



/***/ }),

/***/ "./src/app/hmaddschool/hmaddschool.component.html":
/*!********************************************************!*\
  !*** ./src/app/hmaddschool/hmaddschool.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >????????????????????????</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li > <a (click)=\"hmstudent(hotel)\"> {{student.firstName}} {{student.lastName}}</a></li>\n      <li class=\"active\">????????????</li>\n  </ol>\n\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n      <h4>{{hotel.userAccount}}  </h4>\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n        <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n        <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n        <li class=\"active\"><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n        <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n        <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n        <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n      </ul><br>\n      \n      </div>\n    \n      <div class=\"col-sm-9\">\n        <h2>{{student.firstName}} {{student.lastName}}</h2>\n      <p>{{student.userAccount}}</p>\n      <hr>\n        <form (submit)=\"addschool(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n          <fieldset>\n            <legend>??????????????????</legend>\n            <div class=\"form-group row\">\n              <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">????????????</label>\n              <div class=\"col-sm-10\">\n                <div class=\"form-group\" style=\"width:80%\">\n                  <select class=\"form-control\" id=\"exampleSelect1\">\n                    <option>?????????</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">University</label>\n              <input type=\"text\" class=\"form-control\"  name=\"University\" placeholder=\"Enter University\" ngModel required>\n              <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">School</label>\n              <input type=text class=\"form-control\" name=\"Uschool\" placeholder=\"Enter School\" ngModel required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Major</label>\n              <input type=text class=\"form-control\" name=\"major\" placeholder=\"Enter Major\" ngModel required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Deadline 1</label>\n              <input class=\"form-control\" name=\"ddl1\" type=\"date\" placeholder=\"date\" style=\"width:50%\" ngModel required>\n              <small class=\"form-text text-muted\">???????????????deadline??????????????????????????????</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Deadline 2</label>\n              <input class=\"form-control\" name=\"ddl2\" type=\"date\" placeholder=\"date\" style=\"width:50%\" ngModel >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Deadline 3</label>\n              <input class=\"form-control\" name=\"ddl3\" type=\"date\" placeholder=\"date\" style=\"width:50%\" ngModel >\n            </div>  \n            \n            <fieldset class=\"form-group\">\n              <legend>Interview</legend>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"interview\" id=\"interview1\" value=\"yes\"  ngModel required>\n                  ?????????\n                </label>\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"interview\" id=\"interview2\" value=\"no\"  ngModel required>\n                  ?????????\n                </label>\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"interview\" id=\"interview3\" value=\"other\" ngModel required>\n                  ??????\n                </label>\n              </div>\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <legend>Video Essay</legend>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"videoessay\" id=\"videoessay1\" value=\"???Video Essay\"  ngModel required>\n                  ???Video Essay\n                </label>\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"videoessay\" id=\"videoessay2\" value=\"????????????????????????\" ngModel required>\n                  ????????????????????????\n                </label>\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"videoessay\" id=\"videoessay3\" value=\"????????????????????????\" ngModel required>\n                  ????????????????????????\n                </label>\n              </div>\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <legend>??????link</legend>\n              <div class=\"form-check\">\n                <input type=\"text\" class=\"form-control\"  name=\"link\" placeholder=\"Enter Link\" ngModel required>\n              </div>\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <legend>????????????</legend>\n              <div class=\"form-check\">\n                <input type=\"text\" class=\"form-control\"  name=\"applyAccount\" placeholder=\"Enter Apply Account\" >\n              </div>\n              <legend>????????????</legend>\n              <div class=\"form-check\">\n                <input type=\"text\" class=\"form-control\"  name=\"applyPassword\" placeholder=\"Enter Apply Password\" >\n              </div>\n            </fieldset>\n            \n            <fieldset class=\"form-group\">\n              <legend>?????????????????????</legend>\n              <div class=\"form-check\">\n                <input type=\"text\" class=\"form-control\"  name=\"recommNumber\" placeholder=\"Enter Recommendation Letter Number\" ngModel required>\n              </div>\n            </fieldset>\n\n            <button  class=\"btn btn-primary\" >??????</button>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n  \n\n  "

/***/ }),

/***/ "./src/app/hmaddschool/hmaddschool.component.scss":
/*!********************************************************!*\
  !*** ./src/app/hmaddschool/hmaddschool.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1hZGRzY2hvb2wvaG1hZGRzY2hvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFDQTtFQUFjLGNBQWMsRUFBQTtBQUU1Qiw4Q0FBQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUlkLGdFQUFBO0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFFZjtJQUFjLFlBQVksRUFBQSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvaG1hZGRzY2hvb2wvaG1hZGRzY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgaGVpZ2h0IG9mIHRoZSBncmlkIHNvIC5zaWRlbmF2IGNhbiBiZSAxMDAlIChhZGp1c3QgaWYgbmVlZGVkKSAqL1xuLnJvdy5jb250ZW50IHtoZWlnaHQ6IDE1MDBweH1cbiAgICBcbi8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4vKiBPbiBzbWFsbCBzY3JlZW5zLCBzZXQgaGVpZ2h0IHRvICdhdXRvJyBmb3Igc2lkZW5hdiBhbmQgZ3JpZCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hmaddschool/hmaddschool.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hmaddschool/hmaddschool.component.ts ***!
  \******************************************************/
/*! exports provided: HmaddschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmaddschoolComponent", function() { return HmaddschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _school_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../school.service */ "./src/app/school.service.ts");





//import {School} from '../school.model';

var HmaddschoolComponent = /** @class */ (function () {
    function HmaddschoolComponent(route, router, http, schoolService, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.schoolService = schoolService;
        this.hmService = hmService;
        this.students = []; //all the students from database
        this.hotels = [];
        //student????????????
        // Slocation:String;
        // Sname: String;
        //school??????
        this.University = "";
        this.Uschool = "";
        this.major = "";
        this.ddl1 = "";
        this.ddl2 = "";
        this.ddl3 = "";
        this.interview = "";
        this.videoessay = "";
        this.link = "";
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            _this.studentID = params["studentID"];
        });
        console.log("?????? ID ???+" + this.studentID);
    }
    HmaddschoolComponent.prototype.addschool = function (form) {
        this.ngOnInit();
        //console.log("School???" + form.value.Uschool + "ddl1???" + form.value.ddl1 + "??????" + form.value.interview);
        this.schoolService.addSchool("", this.studentID, "?????????", form.value.University, form.value.Uschool, form.value.major, form.value.ddl1, form.value.ddl2, form.value.ddl3, form.value.interview, form.value.videoessay, form.value.link, form.value.applyAccount, form.value.applyPassword, form.value.recommNumber, "");
        alert("Add School Seccuss!!");
        console.log("?????????" + form.value.recommNumber);
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/hmstudent'], navigationExtras);
    };
    HmaddschoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("???????????????");
                    console.log(_this.hotel);
                }
            }
        });
        //?????? ??????????????????
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h._id === _this.studentID) {
                    _this.student = h;
                    //this.Sname=this.student.name;
                    //this.Slocation = this.student.location;
                    console.log("Student Personal Information");
                    console.log(_this.student);
                }
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //direct to the hotel manage page
    HmaddschoolComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmaddschoolComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmaddschoolComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmaddschoolComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmaddschoolComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmaddschoolComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the register page
    HmaddschoolComponent.prototype.hmstudent = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/hmstudent'], navigationExtras);
    };
    //direct to the blog page
    HmaddschoolComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmaddschoolComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmaddschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmaddschool',
            template: __webpack_require__(/*! ./hmaddschool.component.html */ "./src/app/hmaddschool/hmaddschool.component.html"),
            styles: [__webpack_require__(/*! ./hmaddschool.component.scss */ "./src/app/hmaddschool/hmaddschool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _school_service__WEBPACK_IMPORTED_MODULE_5__["SchoolService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmaddschoolComponent);
    return HmaddschoolComponent;
}());



/***/ }),

/***/ "./src/app/hmblog/hmblog.component.html":
/*!**********************************************!*\
  !*** ./src/app/hmblog/hmblog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n\t\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t\t<a class=\"navbar-brand\" >????????????????????????</a>\n\t\t</div>\n\t\t<div class=\"nav  navbar-right\">\n\t\t  <ul class=\"nav navbar-nav\">\n\t\t\t<li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n\t\t\t<li class=\"dropdown\">\n\t\t\t  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t{{hotel.userAccount}} <b class=\"caret\"></b>\n\t\t\t  </a>\n\t\t\t  <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t\t\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"nav navbar-nav navbar-right\">\n\t\t\t  <a href=\"/mainpage\">Log Out</a>\n\t\t\t</li>\n\t\t  </ul>\n\t\t</div>\n\t  </div>\n\t</nav>\n\t\n  </header>\n  \n  <ol class=\"breadcrumb\">\n  <li><a (click)=\"main(hotel)\">Home</a></li>\n\t<li ><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n  <li class=\"active\">Blog??????</li>\n</ol>\n\n<div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t  <div class=\"col-sm-3 sidenav\">\n\t\t<h4>{{hotel.userAccount}}  </h4>\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t  <li ><a (click)=\"main(hotel)\">Home</a></li>\n      <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n      <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n      <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n      <li class=\"active\"><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n\t\t</ul><br>\n\t\t\n\t  </div>\n  \n\t  <div class=\"col-sm-9\">\n      <div class=\"container\">\n        <div class=\"row clearfix\">\n          <div class=\"col-md-12 column\">\n            <div class=\"row clearfix\">\n              <div class=\"col-md-7 column\">\n                <div class=\"page-header\">\n                  <h1>\n                    ????????????Blog?????? \n                  </h1>\n                </div>\n                <form (submit)=\"addblog(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n                  <div class=\"form-group\">\n                     <label for=\"exampleInputEmail1\">Blog ??????</label><input  class=\"form-control\" name=\"blogTitle\" ngModel >\n                  </div>\n                  <div class=\"form-group\">\n                     <label for=\"exampleInputPassword1\">Blog ?????????</label><input class=\"form-control\" name=\"blogSubtitle\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">????????????</label><input  class=\"form-control\" name=\"blogPicture\" ngModel>\n                 </div>\n                 <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\">????????????</label><input  class=\"form-control\" name=\"blogLink\" ngModel>\n                 </div>\n                 <div class=\"form-group\">\n                  <label for=\"exampleInputPassword1\">????????????</label><input class=\"form-control\" name=\"blogTime\" type=\"date\" placeholder=\"date\" ngModel >\n               </div>\n                 <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                </form>\n              </div>\n              <div class=\"col-md-3 column\" *ngIf=\"blogs.length > 0\">\n                <blockquote *ngFor=\"let b of blogs\">\n                  <p>\n                   {{b.blogTitle}}\n                  </p> <small>{{b.blogTime}}</small>\n                </blockquote>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hmblog/hmblog.component.scss":
/*!**********************************************!*\
  !*** ./src/app/hmblog/hmblog.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1ibG9nL2htYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBQTtBQUNBO0VBQWMsY0FBYyxFQUFBO0FBRTVCLDhDQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9obWJsb2cvaG1ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7aGVpZ2h0OiAxNTAwcHh9XG4gICAgXG4vKiBTZXQgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCAxMDAlIGhlaWdodCAqL1xuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLyogT24gc21hbGwgc2NyZWVucywgc2V0IGhlaWdodCB0byAnYXV0bycgZm9yIHNpZGVuYXYgYW5kIGdyaWQgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAucm93LmNvbnRlbnQge2hlaWdodDogYXV0bzt9IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/hmblog/hmblog.component.ts":
/*!********************************************!*\
  !*** ./src/app/hmblog/hmblog.component.ts ***!
  \********************************************/
/*! exports provided: HmblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmblogComponent", function() { return HmblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");








var HmblogComponent = /** @class */ (function () {
    // private usersSub: Subscription;
    function HmblogComponent(route, router, userService, http, stService, blogService, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.http = http;
        this.stService = stService;
        this.blogService = blogService;
        this.hmService = hmService;
        this.user = [];
        this.hotels = [];
        this.blogs = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("constructor+" + this.managerID);
    }
    HmblogComponent.prototype.addblog = function (form) {
        this.blogNum = this.blogs.length + 1;
        console.log("blog" + form.value.blogTitle + "????????????" + this.blogNum);
        //console.log("School???" + form.value.Uschool + "ddl1???" + form.value.ddl1 + "??????" + form.value.interview);
        this.blogService.addBlog("", form.value.blogTitle, form.value.blogSubtitle, form.value.blogTime, form.value.blogPicture, form.value.blogLink, this.blogNum);
        alert("Add Blog Seccuss!!");
        window.location.reload();
    };
    HmblogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            //console.log(this.user.length);
        });
        //??????HotelM ????????????
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("ngOnInIT");
                    console.log(_this.hotel);
                }
            }
        });
        //??????Blog ????????????
        this.http.get('/api/blogs').subscribe(function (Data) {
            //this.blogs = Data.blogs;
            for (var i = Data.blogs.length - 1; i >= 0; i--) {
                _this.blogs.push(Data.blogs[i]);
            }
            _this.blogNum = _this.blogs.length;
            console.log("Blog??????????????????" + _this.blogNum);
            console.log(_this.blogs);
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //direct to the hotel manage page
    HmblogComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmblogComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmblogComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmblogComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmblogComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmblogComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the register page
    HmblogComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmblogComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmblog',
            template: __webpack_require__(/*! ./hmblog.component.html */ "./src/app/hmblog/hmblog.component.html"),
            styles: [__webpack_require__(/*! ./hmblog.component.scss */ "./src/app/hmblog/hmblog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _st_service__WEBPACK_IMPORTED_MODULE_6__["StService"],
            _blog_service__WEBPACK_IMPORTED_MODULE_7__["BlogService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"]])
    ], HmblogComponent);
    return HmblogComponent;
}());



/***/ }),

/***/ "./src/app/hmcomp/hmcomp.component.html":
/*!**********************************************!*\
  !*** ./src/app/hmcomp/hmcomp.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" >????????????????????????</a>\n    </div>\n    <div class=\"nav  navbar-right\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            Shortcut <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n            <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n            <li class=\"divider\"></li>\n          </ul>\n        </li>\n        <li class=\"nav navbar-nav navbar-right\">\n          <a href=\"/mainpage\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<ol class=\"breadcrumb\">\n    <li><a (click)=\"main(hotel)\">Home</a></li>\n    <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n    <li class=\"active\">Complete info</li>\n</ol>\n<div id=\"user\" class=\"well well-lg\">\n    <ul class=\"nav nav-pills nav-stacked\">\n      <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n      <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n      <li class=\"active\"><a (click)=\"comp(hotel)\">Complete info</a></li>\n      <li ><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n    </ul>\n</div>\n<div id=\"main\" class=\"well well-lg\" >\n    <div id=\"inner\">\n        <form id=\"form1\" action=\"\" method=\"post\">\n            <table>\n                  <tr>\n                    <td>Your First Name\n                    </td>\n                    <td><div class=\"input-group\">\t\t\n                      <span class=\"input-group-addon\">???</span>\n                      <input class=\"form-control\" id=\"firstName\" value=\"{{hotel.firstName}}\" [(ngModel)]=\"firstName\" placeholder=\"Please input First Name\" name=\"firstName\" style=\"width: 385px; \"></div>\n                    </td>\n                  </tr>\n                  <tr>\n                      <td>Your Last Name</td>\n                      <td><div class=\"input-group\"><span class=\"input-group-addon\"> ???</span>\n                        <input  class=\"form-control\" id=\"lastName\" [(ngModel)]=\"lastName\" value=\"{{hotel.lastName}}\" placeholder=\"Please input Last Name\" name=\"lastName\" style=\"width: 385px; \"></div>\n                      </td>\n                  </tr>\n                  <tr>\n                      <td>Personal Email\n                      </td>\n                      <td><div class=\"input-group\"><span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-eye-close\"></span></span>\n                        <input  class=\"form-control\" value=\"{{hotel.email}}\" [(ngModel)]=\"email\"  id=\"email\" placeholder=\"Please input Hotel Telephone\" name=\"email\" style=\"width: 385px; \"></div>\n                      </td>\n                  </tr>\n                  \n                  <tr>\n                      <td>\n                      </td>\n                      <td>\n                      <input type=\"button\" id=\"verdict\" value=\"Complete Information\" class=\"btn btn-primary btn-lg \" data-toggle=\"modal\" data-target=\"#myModal\" >\n                      </td> \n                  </tr>\n            </table>\n        </form>\n        <!-- ????????????Modal??? -->\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n              &times;\n            </button>\n            <h4 class=\"modal-title\" id=\"myModalLabel\">\n              Are you confirmed to update your hotel information?\n            </h4>\n          </div>\n          <div class=\"modal-body\">Before you push this button, we have to make sure your decision again.\n\n            \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close\n            </button>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateProfile()\">\n              Change instantly \n            </button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal -->\n  </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/hmcomp/hmcomp.component.scss":
/*!**********************************************!*\
  !*** ./src/app/hmcomp/hmcomp.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  position: absolute;\n  top: 200px;\n  left: 500px;\n  width: 700px;\n  height: 500px; }\n\n#user {\n  position: absolute;\n  top: 200px;\n  left: 100px; }\n\n#inner {\n  position: relative;\n  top: 30px;\n  left: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1jb21wL2htY29tcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLFVBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2htY29tcC9obWNvbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjAwcHg7XG4gICAgbGVmdDo1MDBweDtcbiAgICB3aWR0aDo3MDBweDtcbiAgICBoZWlnaHQ6NTAwcHg7XG4gICAgfVxuI3VzZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwMHB4O1xuICAgIGxlZnQ6MTAwcHg7XG59XG4jaW5uZXJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjMwcHg7XG4gICAgbGVmdDo1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hmcomp/hmcomp.component.ts":
/*!********************************************!*\
  !*** ./src/app/hmcomp/hmcomp.component.ts ***!
  \********************************************/
/*! exports provided: HmcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmcompComponent", function() { return HmcompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HmcompComponent = /** @class */ (function () {
    function HmcompComponent(route, router, http, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.hotels = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("constructor+" + this.managerID);
    }
    HmcompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.firstName = _this.hotel.firstName;
                    _this.lastName = _this.hotel.lastName;
                    _this.email = _this.hotel.email;
                    _this.image = _this.hotel.image;
                    console.log("ngOnInIT");
                    console.log(_this.hotel);
                }
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //update hotel information like price or other
    HmcompComponent.prototype.updateProfile = function () {
        console.log("Inside Update");
        var Hotel = {
            userAccount: this.hotel.userAccount,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.hotel.phone,
            name: this.hotel.name,
            location: this.hotel.location,
            image: this.image,
            price: this.hotel.price,
        };
        this.http.put('/api/hotels/' + this.hotel.userAccount, Hotel)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        var navigationExtras = {
            queryParams: {
                "managerID": this.hotel.userAccount,
            }
        };
        //console.log("hahah"+hotel.userAccount);
        this.router.navigate(['/hmmodifypasssucc'], navigationExtras);
    };
    //direct to the hotel manage page
    HmcompComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmcompComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmcompComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmcompComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmcompComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    HmcompComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmcompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmcomp',
            template: __webpack_require__(/*! ./hmcomp.component.html */ "./src/app/hmcomp/hmcomp.component.html"),
            styles: [__webpack_require__(/*! ./hmcomp.component.scss */ "./src/app/hmcomp/hmcomp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_2__["HmService"]])
    ], HmcompComponent);
    return HmcompComponent;
}());



/***/ }),

/***/ "./src/app/hmmain/hmmain.component.html":
/*!**********************************************!*\
  !*** ./src/app/hmmain/hmmain.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n\t<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n\t\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t\t<a class=\"navbar-brand\" >????????????????????????</a>\n\t\t</div>\n\t\t<div class=\"nav  navbar-right\">\n\t\t  <ul class=\"nav navbar-nav\">\n\t\t\t<li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n\t\t\t<li class=\"dropdown\">\n\t\t\t  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t{{hotel.userAccount}} <b class=\"caret\"></b>\n\t\t\t  </a>\n\t\t\t  <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t\t\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t<li><a (click)=\"hotelman(hotel)\">????????????</a></li>\n\t\t\t\t<li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"nav navbar-nav navbar-right\">\n\t\t\t  <a href=\"/mainpage\">Log Out</a>\n\t\t\t</li>\n\t\t  </ul>\n\t\t</div>\n\t  </div>\n\t</nav>\n\t\n  </header>\n  \n  <ol class=\"breadcrumb\">\n\t<li class=\"active\">Home - {{hotel.userAccount}}</li>\n</ol>\n\n<div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t  <div class=\"col-sm-3 sidenav\">\n\t\t<h4>{{hotel.userAccount}}  </h4>\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t  <li class=\"active\"><a (click)=\"main(hotel)\">Home</a></li>\n\t\t  <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t<li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n\t\t\t<li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n\t\t\t<li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n\t\t\t<li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n\t\t</ul><br>\n\t\t\n\t  </div>\n\n\t  <div class=\"col-sm-9\">\n\t\t<div>\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t  <div class=\"btn-group\">\n\t\t\t\t\t<div\n\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t  mwlCalendarPreviousView\n\t\t\t\t\t  [view]=\"view\"\n\t\t\t\t\t  [(viewDate)]=\"viewDate\"\n\t\t\t\t\t  (viewDateChange)=\"closeOpenMonthViewDay()\"\n\t\t\t\t\t>\n\t\t\t\t\t  Previous\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\t  class=\"btn btn-outline-secondary\"\n\t\t\t\t\t  mwlCalendarToday\n\t\t\t\t\t  [(viewDate)]=\"viewDate\"\n\t\t\t\t\t>\n\t\t\t\t\t  Today\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t  mwlCalendarNextView\n\t\t\t\t\t  [view]=\"view\"\n\t\t\t\t\t  [(viewDate)]=\"viewDate\"\n\t\t\t\t\t  (viewDateChange)=\"closeOpenMonthViewDay()\"\n\t\t\t\t\t>\n\t\t\t\t\t  Next\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t  <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t  <div class=\"btn-group\">\n\t\t\t\t\t<div\n\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t  (click)=\"setView(CalendarView.Month)\"\n\t\t\t\t\t  [class.active]=\"view === CalendarView.Month\"\n\t\t\t\t\t>\n\t\t\t\t\t  Month\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t  (click)=\"setView(CalendarView.Week)\"\n\t\t\t\t\t  [class.active]=\"view === CalendarView.Week\"\n\t\t\t\t\t>\n\t\t\t\t\t  Week\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t  (click)=\"setView(CalendarView.Day)\"\n\t\t\t\t\t  [class.active]=\"view === CalendarView.Day\"\n\t\t\t\t\t>\n\t\t\t\t\t  Day\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t  <br/>\n\t\t\t  <div [ngSwitch]=\"view\">\n\t\t\t\t<mwl-calendar-month-view\n\t\t\t\t  *ngSwitchCase=\"CalendarView.Month\"\n\t\t\t\t  [viewDate]=\"viewDate\"\n\t\t\t\t  [events]=\"events\"\n\t\t\t\t  [refresh]=\"refresh\"\n\t\t\t\t  [activeDayIsOpen]=\"activeDayIsOpen\"\n\t\t\t\t  (dayClicked)=\"dayClicked($event.day)\"\n\t\t\t\t  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n\t\t\t\t  (eventTimesChanged)=\"eventTimesChanged($event)\"\n\t\t\t\t>\n\t\t\t\t</mwl-calendar-month-view>\n\t\t\t\t<mwl-calendar-week-view\n\t\t\t\t\t*ngSwitchCase=\"CalendarView.Week\"\n\t\t\t\t\t[viewDate]=\"viewDate\"\n\t\t\t\t\t[events]=\"events\"\n\t\t\t\t\t[refresh]=\"refresh\"\n\t\t\t\t\t(eventClicked)=\"handleEvent('Clicked', $event.event)\"\n\t\t\t\t\t(eventTimesChanged)=\"eventTimesChanged($event)\"\n\t\t\t\t>\n\t\t\t\t</mwl-calendar-week-view>\n\t\t\t\t<mwl-calendar-day-view\n\t\t\t\t\t*ngSwitchCase=\"CalendarView.Day\"\n\t\t\t\t\t[viewDate]=\"viewDate\"\n\t\t\t\t\t[events]=\"events\"\n\t\t\t\t\t[refresh]=\"refresh\"\n\t\t\t\t\t(eventClicked)=\"handleEvent('Clicked', $event.event)\"\n\t\t\t\t\t(eventTimesChanged)=\"eventTimesChanged($event)\"\n\t\t\t\t>\n\t\t\t\t</mwl-calendar-day-view>\n\t\t\t  </div>\t\t  \n\t\t</div>\n\n\n\t\t<h4><small>????????????</small></h4>\n\t\t<hr>\n\t\t<h2>Version 2.13</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Apr 26, 2022.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span><span class=\"label label-danger\">????????????</span> </h5><br>\n\t\t<p>1. ?????????????????????????????????2021?????????2022????????????</p>\n\t\t<p>2. ???????????????????????????????????????????????????</p>\n\t\t<p>3. ???????????????????????????????????????????????????FAQ??????</p>\n\t\t\n\t\t\n\t\t<hr>\n\t\t<h2>Version 2.12</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Nov 13, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> </h5><br>\n\t\t<p>1. ???????????????????????????????????????????????????</p>\n\t\t<p>2. ?????????????????????????????????</p>\n\t\t\n\t\t\n\t\t<hr>\n\t\t<h2>Version 2.11</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Oct 24, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> <span class=\"label label-danger\">????????????</span></h5><br>\n\t\t<p>1. ???????????????????????????????????????</p>\n\t\t<p>2. ???????????????????????????????????????</p>\n\t\t<p>3. Debug ??????????????????????????????????????????</p>\n\n\t\t<hr>\n\t\t<h2>Version 2.10</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Oct 22, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> </h5><br>\n\t\t<p>1. ??????????????????</p>\n\n\n\t\t<hr>\n\t\t<h2>Version 2.9</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Oct 16, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> <span class=\"label label-danger\">????????????</span></h5><br>\n\t\t<p>1. Debug????????????????????????????????????</p>\n\t\t<p>2. Debug???????????????????????????????????????</p>\n\n\t\t<hr>\n\t\t<h2>Version 2.8</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Oct 08, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> </h5><br>\n\t\t<p>1. ????????????????????????????????????????????????????????????</p>\n\n\t\t<hr>\n\t\t<h2>Version 2.7</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Oct 02, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> </h5><br>\n\t\t<p>1. ????????????????????????????????????????????????????????????????????????</p>\n\t\t\n\n\t\t<hr>\n\t\t<h2>Version 2.6</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Sep 27, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span> <span class=\"label label-primary\">??????</span></h5><br>\n\t\t<p>1. ????????????????????????????????????????????????????????????????????? ??????????????????</p>\n\t\t<p>2. ?????? ??????-???????????? ??????????????????????????????????????????????????????????????????</p><br>\n\n\n\t\t<hr>\n\t\t<h2>Version 2.5</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Sep 23, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span><span class=\"label label-primary\">??????</span></h5><br>\n\t\t<p>1. ??????????????????????????????????????????????????????????????????????????????????????????????????????</p><br>\n\t\t<p>2. ?????? ??????-????????????-??????????????? ?????????Q&A????????????</p><br>\n\t\t<hr>\n\t\n\t\t<h2>Version 2.4</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Aug 21, 2021.</h5>\n\t\t<h5><span class=\"label label-primary\">??????</span></h5><br>\n\t\t<p>1. ?????? ??????-???????????? ??????????????????????????????????????????????????????</p><br>\n\t\t<hr>\n\n\t\t<h2>Version 2.3</h2>\n\t\t<h5><span class=\"glyphicon glyphicon-time\"></span> Post by Yi, Aug 08, 2021.</h5>\n\t\t<h5><span class=\"label label-success\">???????????????</span><span class=\"label label-danger\">????????????</span></h5><br>\n\t\t<p>1. ?????? ????????????</p><br>\n\t\t<p>1. ?????? ????????????</p><br>\n\t\t<hr>\n\n\t\t<br><br>\n\t  </div>\n\t</div>\n</div>\n\n  \n  "

/***/ }),

/***/ "./src/app/hmmain/hmmain.component.scss":
/*!**********************************************!*\
  !*** ./src/app/hmmain/hmmain.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1tYWluL2htbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBQTtBQUNBO0VBQWMsY0FBYyxFQUFBO0FBRTVCLDhDQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9obW1haW4vaG1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7aGVpZ2h0OiAxNTAwcHh9XG4gICAgXG4vKiBTZXQgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCAxMDAlIGhlaWdodCAqL1xuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLyogT24gc21hbGwgc2NyZWVucywgc2V0IGhlaWdodCB0byAnYXV0bycgZm9yIHNpZGVuYXYgYW5kIGdyaWQgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAucm93LmNvbnRlbnQge2hlaWdodDogYXV0bzt9IFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/hmmain/hmmain.component.ts":
/*!********************************************!*\
  !*** ./src/app/hmmain/hmmain.component.ts ***!
  \********************************************/
/*! exports provided: HMmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HMmainComponent", function() { return HMmainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
var HMmainComponent = /** @class */ (function () {
    function HMmainComponent(hmService, http, route, router) {
        var _this = this;
        this.hmService = hmService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.hotels = [];
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"];
        this.viewDate = new Date();
        this.events = [
        // {
        //   start: startOfDay(new Date("2021/10/31")),
        //   title: 'An event with no end date',
        //   color: colors.yellow,
        // },
        ];
        this.activeDayIsOpen = true;
        this.schools = [];
        this.school = [];
        this.students = [];
        this.student = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            //console.log(this.managerID);
        });
    }
    HMmainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            //console.log(Data);
            _this.hotels = Data.hotels;
            //console.log(this.hotels[0].email);
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    console.log("???????????????" + _this.hotel);
                }
            }
            //this.hotel = this.hotels[0];
            console.log("happy" + _this.hotel.email);
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
        this.http.get('/api/students/').subscribe(function (Data) {
            _this.students = Data.students;
            console.log(_this.students);
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var st = _a[_i];
                _this.student.push(st);
            }
        });
        this.http.get('/api/schools').subscribe(function (Data) {
            _this.schools = Data.schools;
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var sc = _a[_i];
                if (sc.state === "?????????") { //????????????school????????? ???????????????????????????
                    for (var _b = 0, _c = _this.student; _b < _c.length; _b++) {
                        var test = _c[_b];
                        if (sc.userAccount === test._id) { //???????????????????????????
                            var studentName = test.firstName + " " + test.lastName;
                            sc.userAccount = studentName;
                            //console.log("???????????????" +sc.userAccount + test.firstName);
                        }
                    }
                    _this.school.push(sc); //???????????????
                }
            }
            console.log("??????????????????" + _this.school.length);
            for (var _d = 0, _e = _this.school; _d < _e.length; _d++) {
                var s = _e[_d];
                if (s.ddl1 != " ") {
                    var data = s.ddl1;
                    var tit = s.userAccount + " ??? " + s.univName + "??? " + s.majorName;
                    var url = s._id;
                    var fullName = s.userAccount;
                    _this.addEvent(tit, data, url, fullName);
                }
                if (s.ddl2 != " ") {
                    var data = s.ddl2;
                    var tit = s.userAccount + " ??? " + s.univName + "??? " + s.majorName;
                    var url = s._id;
                    var fullName = s.userAccount;
                    _this.addEvent2(tit, data, url, fullName);
                }
                if (s.ddl3 != " ") {
                    var data = s.ddl3;
                    var tit = s.userAccount + " ??? " + s.univName + "??? " + s.majorName;
                    var url = s._id;
                    var fullName = s.userAccount;
                    _this.addEvent3(tit, data, url, fullName);
                }
            }
        });
    };
    HMmainComponent.prototype.addEvent = function (tit, data, url, fullName) {
        this.events = this.events.concat([
            {
                title: tit,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(data)),
                color: colors.red,
                id: url,
                meta: fullName,
            },
        ]);
    };
    HMmainComponent.prototype.addEvent2 = function (tit, data, url, fullName) {
        this.events = this.events.concat([
            {
                title: tit,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(data)),
                color: colors.yellow,
                id: url,
                meta: fullName,
            },
        ]);
    };
    HMmainComponent.prototype.addEvent3 = function (tit, data, url, fullName) {
        this.events = this.events.concat([
            {
                title: tit,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(data)),
                color: colors.blue,
                id: url,
                meta: fullName,
            },
        ]);
    };
    HMmainComponent.prototype.setView = function (view) {
        this.view = view;
    };
    HMmainComponent.prototype.handleEvent = function (action, event) {
        console.log("????????????" + event.meta);
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "fullName": event.meta,
                "schoolID": event.id,
            }
        };
        this.router.navigate(['/hmoschool'], navigationExtras);
    };
    HMmainComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    //direct to the hotel manage page
    HMmainComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HMmainComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HMmainComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HMmainComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HMmainComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HMmainComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the blog page
    HMmainComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HMmainComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HMmainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmmain',
            template: __webpack_require__(/*! ./hmmain.component.html */ "./src/app/hmmain/hmmain.component.html"),
            styles: [__webpack_require__(/*! ./hmmain.component.scss */ "./src/app/hmmain/hmmain.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hm_service__WEBPACK_IMPORTED_MODULE_4__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HMmainComponent);
    return HMmainComponent;
}());



/***/ }),

/***/ "./src/app/hmmanage/hmmanage.component.html":
/*!**************************************************!*\
  !*** ./src/app/hmmanage/hmmanage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >????????????????????????</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li class=\"active\">Manage Student</li>\n  </ol>\n\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-2 sidenav\">\n      <h4>{{hotel.userAccount}}  </h4>\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li ><a (click)=\"main(hotel)\">Home</a></li>\n        <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n        <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n        <li class=\"active\"><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n        <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n        <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n        <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n      </ul><br>\n      \n      </div>\n    \n      <div class=\"col-sm-10\">\n      <!-- ?????????-->\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <!--??????-->\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\"><h2>Year 2022</h2></div>\n                    </div>\n                  </div>\n                  <div class=\"panel-body\">\n                      <table class=\"table table-striped table-bordered\">\n                          <thead><tr>\n                              <th>User Account</th>\n                              <th>Full Name</th>\n                              <th>Gender</th>\n                              <th></th>\n                          </tr></thead>\n                          <tbody *ngIf=\"student.length > 0\" >\n                          <tr *ngFor=\"let o of student\">\n                              <td>{{o.userAccount}}</td>\n                              <td>{{o.firstName}} {{o.lastName}}</td>\n                              <td>{{o.gender}}</td>\n                              <td><button href=\"/anew/todel/@a.id\" (click)=\"more(o)\" >More</button></td>\n                          </tr>\n                          \n                          </tbody>\n\n                      </table>\n                  </div>\n              </div>\n              <hr>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8\"><h2>Year 2021</h2></div>\n                  </div>\n                  \n                </div>\n                <div class=\"panel-body\">\n                    <table class=\"table table-striped table-bordered\">\n                        <thead><tr>\n                            <th>User Account</th>\n                            <th>Full Name</th>\n                            <th>Gender</th>\n                            <th></th>\n                        </tr></thead>\n                        <tbody *ngIf=\"student2.length > 0\" >\n                        <tr *ngFor=\"let s of student2\">\n                            <td>{{s.userAccount}}</td>\n                            <td>{{s.firstName}} {{s.lastName}}</td>\n                            <td>{{s.gender}}</td>\n                            <td><button href=\"/anew/todel/@a.id\" (click)=\"more(s)\" >More</button></td>\n                        </tr>\n                        \n                        </tbody>\n\n                    </table>\n                </div>\n            </div>\n          </div>\n        </div><!-- ?????????-->\n      </div>\n    </div>\n  </div>\n\n  \n  "

/***/ }),

/***/ "./src/app/hmmanage/hmmanage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/hmmanage/hmmanage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1tYW5hZ2UvaG1tYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFDQTtFQUFjLGNBQWMsRUFBQTtBQUU1Qiw4Q0FBQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUlkLGdFQUFBO0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFFZjtJQUFjLFlBQVksRUFBQSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvaG1tYW5hZ2UvaG1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgaGVpZ2h0IG9mIHRoZSBncmlkIHNvIC5zaWRlbmF2IGNhbiBiZSAxMDAlIChhZGp1c3QgaWYgbmVlZGVkKSAqL1xuLnJvdy5jb250ZW50IHtoZWlnaHQ6IDE1MDBweH1cbiAgICBcbi8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4vKiBPbiBzbWFsbCBzY3JlZW5zLCBzZXQgaGVpZ2h0IHRvICdhdXRvJyBmb3Igc2lkZW5hdiBhbmQgZ3JpZCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59Il19 */"

/***/ }),

/***/ "./src/app/hmmanage/hmmanage.component.ts":
/*!************************************************!*\
  !*** ./src/app/hmmanage/hmmanage.component.ts ***!
  \************************************************/
/*! exports provided: HmmanageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmmanageComponent", function() { return HmmanageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var HmmanageComponent = /** @class */ (function () {
    function HmmanageComponent(route, router, http, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.students = []; //all the orders from database
        this.student = []; //2022??????
        this.student2 = []; // 2021???????????????
        this.hotels = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("constructor+" + this.managerID);
    }
    HmmanageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    //console.log("???????????????");
                    //console.log(this.hotel);
                }
            }
        });
        // select the particular order by hotel id
        this.http.get('/api/students').subscribe(function (oData) {
            _this.students = oData.students;
            console.log("??????????????????");
            console.log(_this.students);
            for (var i = oData.students.length - 1; i >= 20; i--) {
                _this.student.push(oData.students[i]);
            }
            for (var x = 19; x >= 0; x--) {
                _this.student2.push(oData.students[x]);
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //update hotel information like price or other
    HmmanageComponent.prototype.updateProfile = function () {
        console.log("Inside Update");
        var Hotel = {
            userAccount: this.hotel.userAccount,
            firstName: this.hotel.firstName,
            lastName: this.hotel.lastName,
            email: this.hotel.email,
            phone: this.phone,
            name: this.name,
            location: this.location,
            image: this.hotel.image,
            price: this.price,
        };
        console.log(Hotel.price + "ddddd" + Hotel.userAccount);
        this.http.put('/api/hotels/' + this.hotel.userAccount, Hotel)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        var navigationExtras = {
            queryParams: {
                "managerID": this.hotel.userAccount,
            }
        };
        //console.log("hahah"+hotel.userAccount);
        this.router.navigate(['/hmmodifypasssucc'], navigationExtras);
    };
    //direct to the hotel manage page
    HmmanageComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmmanageComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmmanageComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmmanageComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmmanageComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmmanageComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the blog page
    HmmanageComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmmanageComponent.prototype.more = function (o) {
        console.log(o._id);
        console.log(this.managerID);
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "studentID": o._id,
            }
        };
        this.router.navigate(['/hmstudent'], navigationExtras);
    };
    HmmanageComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmmanageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmmanage',
            template: __webpack_require__(/*! ./hmmanage.component.html */ "./src/app/hmmanage/hmmanage.component.html"),
            styles: [__webpack_require__(/*! ./hmmanage.component.scss */ "./src/app/hmmanage/hmmanage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmmanageComponent);
    return HmmanageComponent;
}());



/***/ }),

/***/ "./src/app/hmmodifypass/hmmodifypass.component.html":
/*!**********************************************************!*\
  !*** ./src/app/hmmodifypass/hmmodifypass.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n\t<div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\" >Hotel Manager Main Page</a>\n    </div>\n    <div class=\"nav  navbar-right\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\tShortcut <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n            <li><a (click)=\"hotelman(hotel)\">Manage Hotel</a></li>\n            <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n\t\t\t\t\t</ul>\n        </li>\n        <li class=\"nav navbar-nav navbar-right\">\n          <a href=\"/mainpage\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<ol class=\"breadcrumb\">\n\t<li><a (click)=\"main(hotel)\">Home</a></li>\n\t<li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n\t<li class=\"active\">Change Password</li>\n</ol>\n<div id=\"user\" class=\"well well-lg\">\n  <ul class=\"nav nav-pills nav-stacked\">\n    <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n    <li class=\"active\"><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n    <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n    <li><a (click)=\"hotelman(hotel)\">Managehotel</a></li>\n    <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n  </ul>\n</div>\n<div id=\"main\" class=\"well well-lg\" >\n    <div id=\"inner\">\n        <form id=\"form1\" action=\"PasswordModifyServlet\" method=\"post\">\n            <table>\n                <tr>\n                    <td>Current Password\n                    </td>\n                    <td><div class=\"input-group\">\t\t\n                      <span class=\"input-group-addon\">???</span><input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Please input previous password\" name=\"passwordprevious\" style=\"width: 385px\"></div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>New Password</td>\n                    <td><div class=\"input-group\"><span class=\"input-group-addon\"> ???</span><input type=\"password\" class=\"form-control\" id=\"password1\" placeholder=\"Please input New password\" name=\"password1\" style=\"width: 385px; \"></div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Confirm New Password\n                    </td>\n                    <td><div class=\"input-group\"><span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-eye-close\"></span></span>\n                      <input type=\"password\" class=\"form-control\"  id=\"password2\" placeholder=\"Please input New password\" name=\"password2\" style=\"width: 385px; \"></div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                    </td>\n                    <td>\n                    <input type=\"button\" id=\"verdict\" (click)=\"checkp()\" value=\"Change Password\" class=\"btn btn-primary btn-lg \" data-toggle=\"modal\"  >\n                    </td> \n                </tr>   \n            </table>\n            \n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hmmodifypass/hmmodifypass.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/hmmodifypass/hmmodifypass.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  position: absolute;\n  top: 200px;\n  left: 500px;\n  width: 700px;\n  height: 300px; }\n\n#user {\n  position: absolute;\n  top: 200px;\n  left: 100px; }\n\n#inner {\n  position: relative;\n  top: 30px;\n  left: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1tb2RpZnlwYXNzL2htbW9kaWZ5cGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLFVBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2htbW9kaWZ5cGFzcy9obW1vZGlmeXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjAwcHg7XG4gICAgbGVmdDo1MDBweDtcbiAgICB3aWR0aDo3MDBweDtcbiAgICBoZWlnaHQ6MzAwcHg7XG4gICAgfVxuI3VzZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwMHB4O1xuICAgIGxlZnQ6MTAwcHg7XG59XG4jaW5uZXJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjMwcHg7XG4gICAgbGVmdDo1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hmmodifypass/hmmodifypass.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hmmodifypass/hmmodifypass.component.ts ***!
  \********************************************************/
/*! exports provided: HmmodifypassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmmodifypassComponent", function() { return HmmodifypassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var HmmodifypassComponent = /** @class */ (function () {
    function HmmodifypassComponent(route, router, http, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.hotels = [];
        this.user = []; //users Array from all 
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("constructor+" + this.managerID);
    }
    HmmodifypassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    console.log("ngOnInIT");
                    console.log(_this.hotel);
                }
            }
        });
        this.http.get('/api/users').subscribe(function (uData) {
            _this.user = uData.user;
            for (var _i = 0, _a = _this.user; _i < _a.length; _i++) {
                var u = _a[_i];
                if (u.UserAccount === _this.managerID) {
                    _this.us = u;
                    _this.origP = _this.us.UserPassword;
                    console.log("ngggggg" + _this.origP);
                    console.log(_this.us);
                }
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //check password validation
    HmmodifypassComponent.prototype.checkp = function () {
        var temp = document.getElementById("password").value;
        var temp1 = document.getElementById("password1").value;
        var temp2 = document.getElementById("password2").value;
        if (temp === "" || temp1 === "" || temp2 === "") {
            alert("please input every area");
            return;
        }
        if (temp1 != temp2) {
            alert("Two passwords should be the same.");
            return;
        }
        if (temp != this.origP) {
            alert("the Original password is wrong ");
            return;
        }
        this.updateProfile(temp1);
    };
    //update hotel manager password 
    HmmodifypassComponent.prototype.updateProfile = function (temp1) {
        console.log("Inside Update" + temp1);
        var User = {
            UserAccount: this.hotel.userAccount,
            UserPassword: temp1,
            Role: this.us.Role,
        };
        console.log("User object" + User.UserPassword + "  " + User.Role);
        this.http.put('/api/users/' + this.hotel.userAccount, User)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        var navigationExtras = {
            queryParams: {
                "managerID": this.hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypasssucc'], navigationExtras);
    };
    //direct to the hotel manage page
    HmmodifypassComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmmodifypassComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmmodifypassComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmmodifypassComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmmodifypassComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "hotelID": hotel._id,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    HmmodifypassComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmmodifypassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmmodifypass',
            template: __webpack_require__(/*! ./hmmodifypass.component.html */ "./src/app/hmmodifypass/hmmodifypass.component.html"),
            styles: [__webpack_require__(/*! ./hmmodifypass.component.scss */ "./src/app/hmmodifypass/hmmodifypass.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmmodifypassComponent);
    return HmmodifypassComponent;
}());



/***/ }),

/***/ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.html":
/*!******************************************************************!*\
  !*** ./src/app/hmmodifypasssucc/hmmodifypasssucc.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >Hotel Manager Main Page</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"hotelman(hotel)\">Manage Hotel</a></li>\n              <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li class=\"active\">Change Successfully</li>\n  </ol>\n  <div class=\"jumbotron\"  align=\"middle\">\n      <h1 align=\"middle\">Change Successfully</h1>\n      <p align=\"middle\">Actually you could click button to go back.</p>\n      <button align=\"middle\" type=\"button\" class=\"btn btn-primary btn-lg\" style=\"font-size: 60px;\" >\n        <span class=\"glyphicon glyphicon-hand-right\"></span> Go Back, Folks!\n      </button>\n  </div>\n      \n"

/***/ }),

/***/ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/hmmodifypasssucc/hmmodifypasssucc.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2htbW9kaWZ5cGFzc3N1Y2MvaG1tb2RpZnlwYXNzc3VjYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/hmmodifypasssucc/hmmodifypasssucc.component.ts ***!
  \****************************************************************/
/*! exports provided: HmmodifypasssuccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmmodifypasssuccComponent", function() { return HmmodifypasssuccComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var HmmodifypasssuccComponent = /** @class */ (function () {
    function HmmodifypasssuccComponent(route, router, http, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.hotels = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("constructor+" + this.managerID);
    }
    HmmodifypasssuccComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    console.log("ngOnInIT");
                    console.log(_this.hotel);
                }
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //direct to the hotel manage page
    HmmodifypasssuccComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmmodifypasssuccComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmmodifypasssuccComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmmodifypasssuccComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmmodifypasssuccComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "hotelID": hotel._id,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    HmmodifypasssuccComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmmodifypasssuccComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmmodifypasssucc',
            template: __webpack_require__(/*! ./hmmodifypasssucc.component.html */ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.html"),
            styles: [__webpack_require__(/*! ./hmmodifypasssucc.component.scss */ "./src/app/hmmodifypasssucc/hmmodifypasssucc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmmodifypasssuccComponent);
    return HmmodifypasssuccComponent;
}());



/***/ }),

/***/ "./src/app/hmorder/hmorder.component.html":
/*!************************************************!*\
  !*** ./src/app/hmorder/hmorder.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" >????????????????????????</a>\n    </div>\n    <div class=\"nav  navbar-right\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            Shortcut <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n            <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n            <li class=\"divider\"></li>\n            <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n            <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n          </ul>\n        </li>\n        <li class=\"nav navbar-nav navbar-right\">\n          <a href=\"/mainpage\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<ol class=\"breadcrumb\">\n    <li><a (click)=\"main(hotel)\">Home</a></li>\n    <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n    <li class=\"active\">????????????</li>\n</ol>\n<div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t  <div class=\"col-sm-2 sidenav\">\n\t\t<h4>{{hotel.userAccount}}  </h4>\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t  <li ><a (click)=\"main(hotel)\">Home</a></li>\n\t\t  <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t<li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n\t\t\t<li class=\"active\"><a (click)=\"hmorder(hotel)\">????????????</a></li>\n\t\t\t<li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n      <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n\t\t</ul><br>\n\t\t\n\t  </div>\n  \n\t  <div class=\"col-sm-10\">\n    <table class=\"table table-hover\" id=\"tableData\">\n      <thead>\n        <tr>\n          <th scope=\"col\" colspan=\"5\"><h3>\n            ?????????????????????\n            <small class=\"text-muted\">{{schools.length}}</small>\n          </h3></th>\n          <th scope=\"col\" colspan=\"5\">\n            <form (submit)=\"sele(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n              <div class=\"form-group\" >\n                <div class=\"row\">\n                  <div class=\"col-sm-8\">\n\n                        <select class=\"form-control\" id=\"studName\"  *ngIf=\"student.length > 0\" ng-model=\"fLevelBefore\" ng-change=\"changervar('fLevelBefore')\">\n                        <option  *ngFor=\"let st of student\"  value=\"{{st._id}}\"> {{st.firstName}}  {{st.lastName}}  </option>\n                        </select>\n \n\n                  </div>\n                  <div class=\"col-sm-2\"><button class=\"btn btn-primary\">??????</button></div>\n                </div>\n\n              </div>\n            </form>\n          </th>\n          <th>\n           \n          </th>\n          \n        </tr>\n      </thead>\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width:70px\">States</th>\n          <th scope=\"col\" style=\"width:120px\">Name</th>\n          <th scope=\"col\" style=\"width:100px\">University</th>\n          <th scope=\"col\" style=\"width:100px\">School</th>\n          <th scope=\"col\" style=\"width:150px\">Major</th>\n          <th scope=\"col\" style=\"width:90px\">Deadline 1</th>\n          <th scope=\"col\" style=\"width:90px\">Deadline 2</th>\n          <th scope=\"col\" style=\"width:90px\">Deadline 3</th>\n          <th scope=\"col\">??????</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"school.length > 0\">\n        <tr class=\"table-dark\"  *ngFor=\"let s of school\">\n          <th scope=\"row\">{{s.state}}</th>\n          <td>{{s.userAccount}}</td>\n          <td>{{s.univName}}</td>\n          <td>{{s.schoolName}}</td>\n          <td>{{s.majorName}}</td>\n          <td>{{s.ddl1}}</td>\n          <td>{{s.ddl2}}</td>\n          <td>{{s.ddl3}}</td>\n          <td><button href=\"/anew/todel/@a.id\" (click)=\"hmschooldetail(s)\">More</button>\n            <button href=\"/anew/todel/@a.id\" onclick=\"return confirm('??????????????????????????????????')\" (click)=\"delete(s)\">Delete</button>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hmorder/hmorder.component.scss":
/*!************************************************!*\
  !*** ./src/app/hmorder/hmorder.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1vcmRlci9obW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7QUFJZCxnRUFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBRWY7SUFBYyxZQUFZLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2htb3JkZXIvaG1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBoZWlnaHQgb2YgdGhlIGdyaWQgc28gLnNpZGVuYXYgY2FuIGJlIDEwMCUgKGFkanVzdCBpZiBuZWVkZWQpICovXG4ucm93LmNvbnRlbnQge2hlaWdodDogMTUwMHB4fVxuICAgIFxuLyogU2V0IGdyYXkgYmFja2dyb3VuZCBjb2xvciBhbmQgMTAwJSBoZWlnaHQgKi9cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hmorder/hmorder.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hmorder/hmorder.component.ts ***!
  \**********************************************/
/*! exports provided: HmorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmorderComponent", function() { return HmorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var HmorderComponent = /** @class */ (function () {
    function HmorderComponent(route, router, http, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.orders = []; //all the orders from database
        this.order = []; //the specific order selected by this hotel i
        this.hotels = [];
        this.schools = [];
        this.school = [];
        this.students = [];
        this.student = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("?????????ID+" + this.managerID);
    }
    HmorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                }
            }
        });
        this.http.get('/api/students/').subscribe(function (Data) {
            _this.students = Data.students;
            console.log(_this.students);
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var st = _a[_i];
                _this.student.push(st);
            }
        });
        this.http.get('/api/schools').subscribe(function (Data) {
            _this.schools = Data.schools;
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var sc = _a[_i];
                for (var _b = 0, _c = _this.student; _b < _c.length; _b++) {
                    var test = _c[_b];
                    if (sc.userAccount === test._id) { //???????????????????????????
                        var studentName = test.firstName + " " + test.lastName;
                        sc.userAccount = studentName;
                        //console.log("???????????????" +sc.userAccount + test.firstName);
                    }
                }
                _this.school.push(sc);
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    HmorderComponent.prototype.sele = function (form) {
        //console.log("??????"+st._id);
        var studentID = document.getElementById("studName").value;
        console.log("????????????ID???" + studentID);
        var navigationExtras = {
            queryParams: {
                "managerID": this.hotel.userAccount,
                "studentID": studentID,
            }
        };
        this.router.navigate(['/hmordersearch'], navigationExtras);
        // this.http.get<{schools: School[]}>('/api/studentschooldetail/'+temp0).subscribe((Data) => {
        //       this.schools = Data.schools;
        //       for(let school of this.schools){
        //         for(let test of this.student){
        //           if(school.userAccount=== test._id ){//???????????????????????????
        //             let studentName = test.firstName + " " + test.lastName;
        //             school.userAccount =studentName;
        //             console.log("???????????????" +school.userAccount + test.firstName);
        //           }
        //         }
        //       //  this.school.push(school); 
        //        window.location.reload(); 
        //       }
        // });
    };
    //direct to the hotel manage page
    HmorderComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmorderComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmorderComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmorderComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmorderComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmorderComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    HmorderComponent.prototype.delete = function (s) {
        console.log(s._id);
        this.http.delete('/api/schools/' + s._id).subscribe(function (oooData) {
            console.log("??????????????????????????????");
            window.location.reload();
        });
    };
    //direct to the school detail page
    HmorderComponent.prototype.hmschooldetail = function (s) {
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "fullName": s.userAccount,
                "schoolID": s._id,
            }
        };
        this.router.navigate(['/hmoschool'], navigationExtras);
    };
    //direct to the blog page
    HmorderComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmorderComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmorder',
            template: __webpack_require__(/*! ./hmorder.component.html */ "./src/app/hmorder/hmorder.component.html"),
            styles: [__webpack_require__(/*! ./hmorder.component.scss */ "./src/app/hmorder/hmorder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmorderComponent);
    return HmorderComponent;
}());



/***/ }),

/***/ "./src/app/hmordersearch/hmordersearch.component.html":
/*!************************************************************!*\
  !*** ./src/app/hmordersearch/hmordersearch.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" >????????????????????????</a>\n    </div>\n    <div class=\"nav  navbar-right\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            Shortcut <b class=\"caret\"></b>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n            <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n            <li class=\"divider\"></li>\n            <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n            <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n          </ul>\n        </li>\n        <li class=\"nav navbar-nav navbar-right\">\n          <a href=\"/mainpage\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<ol class=\"breadcrumb\">\n    <li><a (click)=\"main(hotel)\">Home</a></li>\n    <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n    <li class=\"active\">????????????</li>\n</ol>\n<div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t  <div class=\"col-sm-3 sidenav\">\n\t\t<h4>{{hotel.userAccount}}  </h4>\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t  <li ><a (click)=\"main(hotel)\">Home</a></li>\n\t\t  <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t<li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n\t\t\t<li class=\"active\"><a (click)=\"hmorder(hotel)\">????????????</a></li>\n\t\t\t<li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n      <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n\t\t</ul><br>\n\t\t\n\t  </div>\n  \n\t  <div class=\"col-sm-9\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\" colspan=\"5\"><h3>\n            ?????????????????????\n            <small class=\"text-muted\">{{school.length}}</small>\n          </h3></th>\n          <th scope=\"col\" colspan=\"3\">\n            <form (submit)=\"sele(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n              <div class=\"form-group\" >\n                ???????????????\n               {{studentName}}\n              </div>\n            </form>\n          </th>\n          <th>\n           \n          </th>\n          \n        </tr>\n      </thead>\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width:70px\">States</th>\n          <th scope=\"col\" style=\"width:120px\">Name</th>\n          <th scope=\"col\" style=\"width:100px\">University</th>\n          <th scope=\"col\" style=\"width:100px\">School</th>\n          <th scope=\"col\" style=\"width:150px\">Major</th>\n          <th scope=\"col\" style=\"width:90px\">Deadline 1</th>\n          <th scope=\"col\" style=\"width:90px\">Deadline 2</th>\n          <th scope=\"col\" style=\"width:90px\">Deadline 3</th>\n          <th scope=\"col\">??????</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"school.length > 0\">\n        <tr class=\"table-dark\"  *ngFor=\"let s of school\">\n          <th scope=\"row\">{{s.state}}</th>\n          <td>{{s.userAccount}}</td>\n          <td>{{s.univName}}</td>\n          <td>{{s.schoolName}}</td>\n          <td>{{s.majorName}}</td>\n          <td>{{s.ddl1}}</td>\n          <td>{{s.ddl2}}</td>\n          <td>{{s.ddl3}}</td>\n          <td><button href=\"/anew/todel/@a.id\" (click)=\"hmschooldetail(s)\">More</button>\n            <button href=\"/anew/todel/@a.id\" onclick=\"return confirm('??????????????????????????????????')\" (click)=\"delete(s)\">Delete</button>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/hmordersearch/hmordersearch.component.scss":
/*!************************************************************!*\
  !*** ./src/app/hmordersearch/hmordersearch.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1vcmRlcnNlYXJjaC9obW9yZGVyc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7QUFJZCxnRUFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBRWY7SUFBYyxZQUFZLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2htb3JkZXJzZWFyY2gvaG1vcmRlcnNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBoZWlnaHQgb2YgdGhlIGdyaWQgc28gLnNpZGVuYXYgY2FuIGJlIDEwMCUgKGFkanVzdCBpZiBuZWVkZWQpICovXG4ucm93LmNvbnRlbnQge2hlaWdodDogMTUwMHB4fVxuICAgIFxuLyogU2V0IGdyYXkgYmFja2dyb3VuZCBjb2xvciBhbmQgMTAwJSBoZWlnaHQgKi9cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hmordersearch/hmordersearch.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hmordersearch/hmordersearch.component.ts ***!
  \**********************************************************/
/*! exports provided: HmordersearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmordersearchComponent", function() { return HmordersearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var HmordersearchComponent = /** @class */ (function () {
    function HmordersearchComponent(route, router, http, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.orders = []; //all the orders from database
        this.order = []; //the specific order selected by this hotel i
        this.hotels = [];
        this.schools = [];
        this.school = [];
        this.students = [];
        this.student = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            _this.studentID = params["studentID"];
        });
        console.log("?????????ID+" + this.managerID);
        console.log("??????ID+" + this.studentID);
    }
    HmordersearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                }
            }
        });
        this.http.get('/api/students/').subscribe(function (Data) {
            _this.students = Data.students;
            console.log(_this.students);
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var st = _a[_i];
                _this.student.push(st);
                if (st._id === _this.studentID) {
                    _this.studentName = st.firstName + " " + st.lastName;
                }
            }
        });
        //?????? ????????? ????????????
        this.http.get('/api/studentschooldetail/' + this.studentID).subscribe(function (orderData) {
            console.log("?????????????????????");
            console.log(orderData);
            _this.school = orderData.schools;
            for (var _i = 0, _a = _this.school; _i < _a.length; _i++) {
                var sc = _a[_i];
                for (var _b = 0, _c = _this.student; _b < _c.length; _b++) {
                    var test = _c[_b];
                    if (sc.userAccount === test._id) { //???????????????????????????
                        var studentName = test.firstName + " " + test.lastName;
                        sc.userAccount = studentName;
                        //console.log("???????????????" +sc.userAccount + test.firstName);
                    }
                }
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //direct to the hotel manage page
    HmordersearchComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmordersearchComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmordersearchComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmordersearchComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmordersearchComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmordersearchComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    HmordersearchComponent.prototype.delete = function (s) {
        console.log(s._id);
        this.http.delete('/api/schools/' + s._id).subscribe(function (oooData) {
            console.log("??????????????????????????????");
            window.location.reload();
        });
    };
    //direct to the school detail page
    HmordersearchComponent.prototype.hmschooldetail = function (s) {
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "studentID": this.studentID,
                "schoolID": s._id,
            }
        };
        this.router.navigate(['/hmschool'], navigationExtras);
    };
    //direct to the blog page
    HmordersearchComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmordersearchComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmordersearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmordersearch',
            template: __webpack_require__(/*! ./hmordersearch.component.html */ "./src/app/hmordersearch/hmordersearch.component.html"),
            styles: [__webpack_require__(/*! ./hmordersearch.component.scss */ "./src/app/hmordersearch/hmordersearch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmordersearchComponent);
    return HmordersearchComponent;
}());



/***/ }),

/***/ "./src/app/hmoschool/hmoschool.component.html":
/*!****************************************************!*\
  !*** ./src/app/hmoschool/hmoschool.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >????????????????????????</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"hotelman(hotel)\">Manage Hotel</a></li>\n              <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n</nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li >  {{fullName}}  </li>\n      <li class=\"active\"> ??????????????????</li>\n  </ol>\n\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n      <h4>{{hotel.userAccount}}  </h4>\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n        <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n        <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n        <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n        <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n        <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n        <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n      </ul><br>\n      \n      </div>\n    \n      <div class=\"col-sm-9\">\n        <h2>{{fullName}} </h2>  \n      <hr>\n      <h5>????????????????????????????????????????????????????????????????????????</h5>\n\n      <br>\n      <hr>\n      <h3>??????????????????       \n        <a href=\"{{school.link}}\">\n         <span class=\"glyphicon glyphicon-link\"></span>\n        </a>\n      </h3>\n\n      <br>\n      <form id=\"form1\" action=\"\" method=\"post\">\n        <table>\n              <tr>\n                <td>University\n                </td>\n                <td><div class=\"input-group\">\t\t\n                  <input class=\"form-control\" id=\"univName\" value=\"{{school.univName}}\" [(ngModel)]=\"univName\"  name=\"univName\" style=\"width: 785px;\" disabled=\"\"></div>\n                </td>\n              </tr>\n              <tr>\n                  <td>School</td>\n                  <td><div class=\"input-group\">\n                    <input  class=\"form-control\" id=\"schoolName\" [(ngModel)]=\"schoolName\" value=\"{{school.schoolName}}\"  name=\"schoolName\" style=\"width: 785px;\" disabled=\"\"></div>\n                  </td>\n              </tr>\n              <tr>\n                  <td>Major\n                  </td>\n                  <td><div class=\"input-group\">\n                    <input  class=\"form-control\" value=\"{{school.majorName}}\" [(ngModel)]=\"majorName\"  id=\"majorName\"  name=\"majorName\" disabled=\"\" style=\"width: 785px;\"></div>\n                  </td>\n              </tr>\n              <tr>\n                <td>Deadline 1\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.ddl1}}\" [(ngModel)]=\"ddl1\"  id=\"ddl1\"  name=\"ddl1\" disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Deadline 2\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.ddl2}}\" [(ngModel)]=\"ddl2\"  id=\"ddl2\" name=\"ddl2\"  disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Deadline 3\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.ddl3}}\" [(ngModel)]=\"ddl3\"  id=\"ddl3\"  name=\"ddl3\" disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              \n              <tr>\n                <td>Interview\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.interview}}\" [(ngModel)]=\"interview\"  id=\"interview\" disabled=\"\" name=\"interview\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Video Essay\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.videoEssay}}\" [(ngModel)]=\"videoEssay\"  id=\"videoEssay\" disabled=\"\" name=\"videoEssay\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Link\n                </td>\n                <td>\n                  <div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.link}}\" [(ngModel)]=\"link\"  id=\"link\"  name=\"link\" disabled=\"\" style=\"width: 785px; \">\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>????????????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.applyAccount}}\" [(ngModel)]=\"applyAccount\"  id=\"applyAccount\" disabled=\"\" name=\"applyAccount\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>????????????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.applyPassword}}\" [(ngModel)]=\"applyPassword\"  id=\"applyPassword\" disabled=\"\" name=\"applyPassword\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>???????????????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.recommNumber}}\" [(ngModel)]=\"recommNumber\"  id=\"recommNumber\" disabled=\"\" name=\"recommNumber\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>??????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.other}}\" [(ngModel)]=\"other\"  id=\"other\"  name=\"other\" disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n        </table>\n      </form>\n      <hr>\n      <h3>?????????</h3>\n        <div class=\"row\">\n          <div class=\"col-sm-4 tuijian\">\n            <h4>\n              ???????????????????????????????????????\n              <small class=\"text-muted\">{{recomletters.length}}</small>\n            </h4>\n            <div *ngIf=\"recomletters.length > 0\">\n              <div class=\"panel-group\" id=\"accordion\" *ngFor=\"let l of recomletters\">\n                <div class=\"panel panel-success\" *ngIf=\"l.state=='?????????'\">\n                  <div class=\"panel-heading\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-10\"><b>{{l.recommenderName}} </b></div>\n                        <div class=\"col-sm-2\"><small>{{l.state}}</small></div>\n                      </div>\n                  </div>\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\"><b>{{l.type}} </b></div>\n                      <div class=\"col-sm-5\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"panel panel-default\" *ngIf=\"l.state=='?????????'\">\n                  <div class=\"panel-heading\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-10\"><b>{{l.recommenderName}} </b></div>\n                        <div class=\"col-sm-2\"><small>{{l.state}}</small></div>\n                      </div>\n                  </div>\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\"><b>{{l.type}} </b></div>\n                      <div class=\"col-sm-5\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"panel panel-danger\" *ngIf=\"l.state=='??????'\">\n                  <div class=\"panel-heading\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-10\"><b>{{l.recommenderName}} </b></div>\n                        <div class=\"col-sm-2\"><small>{{l.state}}</small></div>\n                      </div>\n                  </div>\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\"><b>{{l.type}} </b></div>\n                      <div class=\"col-sm-5\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 caozuo\">            \n          </div>\n        </div>\n      \n\n      <hr>\n      <h3>??????</h3>\n        <div class=\"row\">\n          <div class=\"col-sm-4 tuijian\">\n            <h4>\n              ????????????????????????????????????\n              <small class=\"text-muted\">{{statements.length}}</small>\n            </h4>\n\n            <div class=\"container\" *ngIf=\"statements.length > 0\">\n              <div class=\"row clearfix\" *ngFor=\"let st of statements\">\n                <div class=\"col-md-6 column\">\n                  <div class=\"panel panel-info\" >\n                    <div class=\"panel-heading\" >\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{st._id}}\">\n                      <b> {{st.stype}} </b> ??? {{st.words}} ?????? <br>\n                      </a>\n                    </h4>\n                    </div>\n                    <div id=\"{{st._id}}\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                      {{st.question}}\n                    </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 caozuo\">\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  \n\n  \n\n  "

/***/ }),

/***/ "./src/app/hmoschool/hmoschool.component.scss":
/*!****************************************************!*\
  !*** ./src/app/hmoschool/hmoschool.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n.tuijian {\n  width: 600px; }\n.caozuo {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1vc2Nob29sL2htb3NjaG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBQTtBQUNBO0VBQWMsY0FBYyxFQUFBO0FBRTVCLDhDQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUc7QUFHL0I7RUFDRSxZQUFZLEVBQUE7QUFFZDtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2htb3NjaG9vbC9obW9zY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgaGVpZ2h0IG9mIHRoZSBncmlkIHNvIC5zaWRlbmF2IGNhbiBiZSAxMDAlIChhZGp1c3QgaWYgbmVlZGVkKSAqL1xuLnJvdy5jb250ZW50IHtoZWlnaHQ6IDE1MDBweH1cbiAgICBcbi8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4vKiBPbiBzbWFsbCBzY3JlZW5zLCBzZXQgaGVpZ2h0IHRvICdhdXRvJyBmb3Igc2lkZW5hdiBhbmQgZ3JpZCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59XG5cbi50dWlqaWFue1xuICB3aWR0aDogNjAwcHg7XG59XG4uY2FvenVve1xuICB3aWR0aDogMzAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hmoschool/hmoschool.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hmoschool/hmoschool.component.ts ***!
  \**************************************************/
/*! exports provided: HmoschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmoschoolComponent", function() { return HmoschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _recletter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recletter.service */ "./src/app/recletter.service.ts");
/* harmony import */ var _statement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../statement.service */ "./src/app/statement.service.ts");







var HmoschoolComponent = /** @class */ (function () {
    function HmoschoolComponent(route, router, http, hmService, statementService, recomletterService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.statementService = statementService;
        this.recomletterService = recomletterService;
        this.students = []; //all the orders from database
        this.hotels = [];
        this.schools = [];
        //???????????????
        this.recommenders = [];
        //???????????????
        this.recomletters = [];
        //????????????
        this.statements = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            _this.fullName = params["fullName"];
            _this.schoolID = params["schoolID"];
        });
        console.log(" school???ID???" + this.schoolID);
    }
    HmoschoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("???????????????");
                    console.log(_this.hotel);
                }
            }
        });
        //?????? ???????????????????????????
        this.http.get('/api/schools').subscribe(function (Data) {
            //console.log(orderData);
            _this.schools = Data.schools;
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var s = _a[_i];
                if (s._id === _this.schoolID) {
                    //console.log("????????????");
                    _this.school = s;
                    _this.studentID = s.userAccount;
                    console.log("????????????" + _this.studentID);
                    _this.state = _this.school.state; //????????????????????????????????????????????????offer??????????????????
                    _this.univName = _this.school.univName; //????????????
                    _this.schoolName = _this.school.schoolName; //????????????
                    _this.majorName = _this.school.majorName; //????????????
                    _this.ddl1 = _this.school.ddl1; //DDL 1
                    _this.ddl2 = _this.school.ddl2; //DDL 2
                    _this.ddl3 = _this.school.ddl3; //DDL 3
                    _this.interview = _this.school.interview; //?????? ???????????????-????????????????????????
                    _this.videoEssay = _this.school.videoEssay; // videoEssay(????????????????????????????????????????????????)
                    _this.link = _this.school.link; //??????
                    _this.applyAccount = _this.school.applyAccount; //????????????
                    _this.applyPassword = _this.school.applyPassword; //???????????????
                    _this.recommNumber = _this.school.recommNumber; //???????????????
                    _this.other = _this.school.other;
                }
            }
        });
        //?????? ??????????????????
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h._id === _this.studentID) {
                    _this.student = h;
                    console.log("Student Personal Information");
                    console.log(_this.student);
                }
            }
        });
        //?????? ????????? ???????????????
        this.http.get('/api/studentrecommenderdetail/' + this.studentID).subscribe(function (orderData) {
            //console.log(orderData);
            _this.recommenders = orderData.recommenders;
        });
        //?????? ??????????????? ????????? ??????
        this.http.get('/api/schoolrecomletterlist/' + this.schoolID).subscribe(function (Data) {
            //console.log(Data);
            _this.recomletters = Data.recomletters;
        });
        //?????? ??????????????? ?????? ??????
        this.http.get('/api/statementdetail/' + this.schoolID).subscribe(function (Data) {
            //console.log(Data);
            _this.statements = Data.statements;
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    HmoschoolComponent.prototype.updateLetterNoSubmit = function (l) {
        var Recomletter = {
            schoolID: l.schoolID,
            studentID: l.studentID,
            recommender: l.recommender,
            recommenderName: l.recommenderName,
            type: l.type,
            state: "?????????",
        };
        this.http.put('/api/recomletters/' + l._id, Recomletter)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("???????????????????????????!!");
        window.location.reload();
    };
    HmoschoolComponent.prototype.updateLetterSubmit = function (l) {
        var Recomletter = {
            schoolID: l.schoolID,
            studentID: l.studentID,
            recommender: l.recommender,
            recommenderName: l.recommenderName,
            type: l.type,
            state: "?????????",
        };
        this.http.put('/api/recomletters/' + l._id, Recomletter)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("???????????????????????????!!");
        window.location.reload();
    };
    HmoschoolComponent.prototype.updateLetterDiscard = function (l) {
        var Recomletter = {
            schoolID: l.schoolID,
            studentID: l.studentID,
            recommender: l.recommender,
            recommenderName: l.recommenderName,
            type: l.type,
            state: "??????",
        };
        this.http.put('/api/recomletters/' + l._id, Recomletter)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("???????????????????????????!!");
        window.location.reload();
    };
    //direct to the hotel manage page
    HmoschoolComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmoschoolComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmoschoolComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmoschoolComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmoschoolComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmoschoolComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the addschool page
    HmoschoolComponent.prototype.hmaddschool = function (hotel, student) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.student._id,
            }
        };
        this.router.navigate(['/hmaddschool'], navigationExtras);
    };
    //direct to the register page
    HmoschoolComponent.prototype.hmstudent = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/hmstudent'], navigationExtras);
    };
    //direct to the blog page
    HmoschoolComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmoschoolComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmoschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmoschool',
            template: __webpack_require__(/*! ./hmoschool.component.html */ "./src/app/hmoschool/hmoschool.component.html"),
            styles: [__webpack_require__(/*! ./hmoschool.component.scss */ "./src/app/hmoschool/hmoschool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"],
            _statement_service__WEBPACK_IMPORTED_MODULE_6__["StatementService"],
            _recletter_service__WEBPACK_IMPORTED_MODULE_5__["RecomletterService"]])
    ], HmoschoolComponent);
    return HmoschoolComponent;
}());



/***/ }),

/***/ "./src/app/hmregister/hmregister.component.html":
/*!******************************************************!*\
  !*** ./src/app/hmregister/hmregister.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n\t\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t\t<a class=\"navbar-brand\" >????????????????????????</a>\n\t\t</div>\n\t\t<div class=\"nav  navbar-right\">\n\t\t  <ul class=\"nav navbar-nav\">\n\t\t\t<li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n\t\t\t<li class=\"dropdown\">\n\t\t\t  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t{{hotel.userAccount}} <b class=\"caret\"></b>\n\t\t\t  </a>\n\t\t\t  <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n\t\t\t\t\t\t\t<li><a (click)=\"comp(hotel)\">Complete info</a></li>\n\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"nav navbar-nav navbar-right\">\n\t\t\t  <a href=\"/mainpage\">Log Out</a>\n\t\t\t</li>\n\t\t  </ul>\n\t\t</div>\n\t  </div>\n\t</nav>\n\t\n  </header>\n  \n  <ol class=\"breadcrumb\">\n  <li><a (click)=\"main(hotel)\">Home</a></li>\n\t<li ><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n  <li class=\"active\">????????????</li>\n</ol>\n\n<div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t  <div class=\"col-sm-3 sidenav\">\n\t\t<h4>{{hotel.userAccount}}  </h4>\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t  <li ><a (click)=\"main(hotel)\">Home</a></li>\n      <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n      <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n      <li class=\"active\"><a (click)=\"hmregister(hotel)\">????????????</a></li>\n      <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n\t\t</ul><br>\n\t\t\n\t  </div>\n  \n\t  <div class=\"col-sm-9\">\n      <div id=\"register\">\n        \n        <table>\n          <tr>\n            <td>Create user account\n            </td>\n            <td><div class=\"input-group\">\t\t\n              <span class=\"input-group-addon\">???</span>\n              <input class=\"form-control\" id=\"user-account\" placeholder=\"e.g. abc@cde.com\"  style=\"width: 385px; \"></div>\n            </td>\n          </tr>\n          <tr>\n              <td>Create password</td>\n              <td><div class=\"input-group\"><span class=\"input-group-addon\"> ???</span>\n                <input  class=\"form-control\" type=\"password\" id=\"user-password\" placeholder=\"e.g. abc1234cc\"  style=\"width: 385px; \"></div>\n              </td>\n          </tr>\n          <tr>\n              <td>Confirm password\n              </td>\n              <td><div class=\"input-group\"><span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-eye-close\"></span></span>\n                <input  class=\"form-control\"  type=\"password\" id=\"confirm-password\" style=\"width: 385px\" style=\"width: 385px; \"></div>\n              </td>\n          </tr>\n          <tr>\n            <td>Type\n            </td>\n            <td>\n              <span class=\"hint\" id=\"hint4\"></span>\n              <input type=\"radio\" name=\"options\" id=\"option-student\" value=\"student\"> Student\n              <input type=\"radio\" name=\"options\" id=\"option-manager\" value=\"manager\">   Manager\n            </td>\n        </tr>\n              <tr>\n                  <td>\n                    <button id=\"tutorial-button\" class=\"btn btn-primary\" (click)='tutorialmessage()'>Tutorial</button>\n                  </td>\n                  <td>\n                    <button id=\"join-button1\" class=\"btn btn-primary\" (click)=\"check()\">Create Account</button>\n                  </td> \n              </tr>\n        </table>\n        \n        \n      </div>\n\t  </div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hmregister/hmregister.component.scss":
/*!******************************************************!*\
  !*** ./src/app/hmregister/hmregister.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1yZWdpc3Rlci9obXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7QUFJZCxnRUFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBRWY7SUFBYyxZQUFZLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2htcmVnaXN0ZXIvaG1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBoZWlnaHQgb2YgdGhlIGdyaWQgc28gLnNpZGVuYXYgY2FuIGJlIDEwMCUgKGFkanVzdCBpZiBuZWVkZWQpICovXG4ucm93LmNvbnRlbnQge2hlaWdodDogMTUwMHB4fVxuICAgIFxuLyogU2V0IGdyYXkgYmFja2dyb3VuZCBjb2xvciBhbmQgMTAwJSBoZWlnaHQgKi9cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hmregister/hmregister.component.ts":
/*!****************************************************!*\
  !*** ./src/app/hmregister/hmregister.component.ts ***!
  \****************************************************/
/*! exports provided: HmregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmregisterComponent", function() { return HmregisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");







var HmregisterComponent = /** @class */ (function () {
    // private usersSub: Subscription;
    function HmregisterComponent(route, router, userService, http, stService, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.http = http;
        this.stService = stService;
        this.hmService = hmService;
        this.user = [];
        this.hotels = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
        });
        console.log("constructor+" + this.managerID);
    }
    HmregisterComponent.prototype.tutorialmessage = function () {
        alert("Your user account should be in email form and your password should contain numbers and alphabets.");
    };
    //When leave this page, set all elements to default value
    HmregisterComponent.prototype.setdefault = function () {
        document.getElementById("hint4").style.display = "none";
        document.getElementById("option-student").checked = false;
        document.getElementById("option-manager").checked = false;
        document.getElementById("user-password").value = null;
        document.getElementById("user-account").value = null;
        document.getElementById("confirm-password").value = null;
        document.getElementById("user-password").style.borderColor = "black";
        document.getElementById("user-account").style.borderColor = "black";
        document.getElementById("confirm-password").style.borderColor = "black";
    };
    HmregisterComponent.prototype.check = function () {
        this.ngOnInit();
        this.user = this.user;
        //Getting value from HTML element
        var temp0 = document.getElementById("user-account").value;
        var temp1 = document.getElementById("user-password").value;
        var temp2 = document.getElementById("confirm-password").value;
        var temp3 = document.getElementById("option-student");
        var temp4 = document.getElementById("option-manager");
        var temp8 = document.getElementById("hint4");
        var re1 = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"); //Regex for user account
        var re2 = new RegExp("^[a-zA-Z0-9-]+$");
        //Check if there are empty fields
        if (temp0 == "" || temp1 == "" || temp2 == "") {
            document.getElementById("user-account").style.borderColor = "red";
            document.getElementById("user-password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "red";
            temp8.style.display = "inline-block";
            temp3.checked = false;
            temp4.checked = false;
            alert("Please enter all fields.");
            return;
        }
        //Check have user chosen any role
        if (temp3.checked == false && temp4.checked == false) {
            document.getElementById("user-account").style.borderColor = "black";
            document.getElementById("user-password").style.borderColor = "black";
            document.getElementById("confirm-password").style.borderColor = "black";
            temp8.style.display = "inline-block";
            alert("Please choose a role.");
            return;
        }
        //Check if two passwords are the same
        if (temp1 != temp2) {
            document.getElementById("user-password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "red";
            temp8.style.display = "none";
            document.getElementById("user-account").style.borderColor = "black";
            document.getElementById("user-password").value = null;
            document.getElementById("confirm-password").value = null;
            alert("Two passwords should be the same.");
            return;
        }
        //Check user account regex
        if (!temp0.match(re1)) {
            alert("Your user account should be in email form.");
            document.getElementById("user-account").style.borderColor = "red";
            document.getElementById("user-password").style.borderColor = "black";
            document.getElementById("confirm-password").style.borderColor = "black";
            temp8.style.display = "none";
            return;
        }
        //Check password regex
        if (!temp1.match(re2)) {
            alert("Your password should contain numbers and alphabets.");
            document.getElementById("user-account").style.borderColor = "black";
            document.getElementById("user-password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "black";
            temp8.style.display = "none";
            return;
        }
        //If all field are success, check if the account already exist
        else {
            //this.ngOnInit();
            for (var indexc = 0; indexc < this.user.length; indexc++) {
                if (temp0 == this.user[indexc].UserAccount) {
                    alert("This account has already been registered.");
                    document.getElementById("user-password").value = null;
                    document.getElementById("user-account").value = null;
                    document.getElementById("confirm-password").value = null;
                    document.getElementById("user-account").style.borderColor = "red";
                    document.getElementById("confirm-password").style.borderColor = "black";
                    document.getElementById("user-password").style.borderColor = "black";
                    temp8.style.display = "none";
                    temp3.checked = false;
                    temp4.checked = false;
                    return;
                }
                else {
                    continue;
                }
            }
            if (indexc == this.user.length) {
                var temp16 = void 0;
                if (temp3.checked == true) {
                    console.log("nmb");
                    temp16 = "student";
                    //create one resp in students database
                    console.log(temp0);
                    this.stService.addStudent("", temp0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
                    //???64?????????
                }
                if (temp4.checked == true) {
                    temp16 = "manager";
                    //create one resp in hotels database
                    console.log(temp0);
                    this.hmService.addHotel("", temp0, "", "", "", "", "", "", "", "");
                }
                document.getElementById("user-account").style.borderColor = "black";
                document.getElementById("user-password").style.borderColor = "black";
                document.getElementById("confirm-password").style.borderColor = "black";
                temp8.style.display = "none";
                alert("Seccuss!!");
                document.getElementById("user-password").value = null;
                document.getElementById("user-account").value = null;
                document.getElementById("confirm-password").value = null;
                temp3.checked = false;
                temp4.checked = false;
                this.userService.addUser(temp0, temp1, temp16);
                //this.ngOnInit();
                window.location.reload();
            }
        }
    };
    HmregisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
        //??????HotelM ????????????
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("ngOnInIT");
                    console.log(_this.hotel);
                }
            }
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //direct to the hotel manage page
    HmregisterComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmregisterComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmregisterComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmregisterComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmregisterComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmregisterComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the blog page
    HmregisterComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmregisterComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmregister',
            template: __webpack_require__(/*! ./hmregister.component.html */ "./src/app/hmregister/hmregister.component.html"),
            styles: [__webpack_require__(/*! ./hmregister.component.scss */ "./src/app/hmregister/hmregister.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _st_service__WEBPACK_IMPORTED_MODULE_6__["StService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"]])
    ], HmregisterComponent);
    return HmregisterComponent;
}());



/***/ }),

/***/ "./src/app/hmschool/hmschool.component.html":
/*!**************************************************!*\
  !*** ./src/app/hmschool/hmschool.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >????????????????????????</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"hotelman(hotel)\">Manage Hotel</a></li>\n              <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n</nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li >   <a (click)=\"hmstudent(hotel)\">{{student.firstName}} {{student.lastName}}</a> </li>\n      <li class=\"active\"> ??????????????????</li>\n  </ol>\n\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n      <h4>{{hotel.userAccount}}  </h4>\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n        <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n        <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n        <li class=\"active\"><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n        <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n        <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n        <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n      </ul><br>\n      \n      </div>\n    \n      <div class=\"col-sm-9\">\n        <h2>{{student.firstName}} {{student.lastName}}</h2>\n      <p>{{student.userAccount}}</p>  \n      <hr>\n      <h3>????????????</h3>\n        <div class=\"row\">\n          <div class=\"col-sm-7\"><b>{{school.state}} </b></div>\n          <div class=\"col-sm-3\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">????????????\n              <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a onclick=\"return confirm('????????????????????????????????????????')\" (click)=\"updateStateDone()\">?????????</a></li>\n                <li><a onclick=\"return confirm('????????????????????????????????????????')\" (click)=\"updateStateOffer()\">Offer</a></li>\n                <li><a onclick=\"return confirm('????????????????????????????????????????')\" (click)=\"updateStateRef()\">??????</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      <br>\n      <hr>\n      <h3>??????????????????       \n        <a href=\"{{school.link}}\">\n         <span class=\"glyphicon glyphicon-link\"></span>\n        </a>\n      </h3>\n\n      <br>\n      <form id=\"form1\" action=\"\" method=\"post\">\n        <table>\n              <tr>\n                <td>University\n                </td>\n                <td><div class=\"input-group\">\t\t\n                  <input class=\"form-control\" id=\"univName\" value=\"{{school.univName}}\" [(ngModel)]=\"univName\"  name=\"univName\" style=\"width: 785px;\" disabled=\"\"></div>\n                </td>\n              </tr>\n              <tr>\n                  <td>School</td>\n                  <td><div class=\"input-group\">\n                    <input  class=\"form-control\" id=\"schoolName\" [(ngModel)]=\"schoolName\" value=\"{{school.schoolName}}\"  name=\"schoolName\" style=\"width: 785px;\" disabled=\"\"></div>\n                  </td>\n              </tr>\n              <tr>\n                  <td>Major\n                  </td>\n                  <td><div class=\"input-group\">\n                    <input  class=\"form-control\" value=\"{{school.majorName}}\" [(ngModel)]=\"majorName\"  id=\"majorName\"  name=\"majorName\" disabled=\"\" style=\"width: 785px;\"></div>\n                  </td>\n              </tr>\n              <tr>\n                <td>Deadline 1\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.ddl1}}\" [(ngModel)]=\"ddl1\"  id=\"ddl1\"  name=\"ddl1\" disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Deadline 2\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.ddl2}}\" [(ngModel)]=\"ddl2\"  id=\"ddl2\" name=\"ddl2\"  disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Deadline 3\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.ddl3}}\" [(ngModel)]=\"ddl3\"  id=\"ddl3\"  name=\"ddl3\" disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              \n              <tr>\n                <td>Interview\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.interview}}\" [(ngModel)]=\"interview\"  id=\"interview\" disabled=\"\" name=\"interview\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Video Essay\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.videoEssay}}\" [(ngModel)]=\"videoEssay\"  id=\"videoEssay\" disabled=\"\" name=\"videoEssay\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>Link\n                </td>\n                <td>\n                  <div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.link}}\" [(ngModel)]=\"link\"  id=\"link\"  name=\"link\" disabled=\"\" style=\"width: 785px; \">\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>????????????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.applyAccount}}\" [(ngModel)]=\"applyAccount\"  id=\"applyAccount\" disabled=\"\" name=\"applyAccount\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>????????????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.applyPassword}}\" [(ngModel)]=\"applyPassword\"  id=\"applyPassword\" disabled=\"\" name=\"applyPassword\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>???????????????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.recommNumber}}\" [(ngModel)]=\"recommNumber\"  id=\"recommNumber\" disabled=\"\" name=\"recommNumber\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                <td>??????\n                </td>\n                <td><div class=\"input-group\">\n                  <input class=\"form-control\" value=\"{{school.other}}\" [(ngModel)]=\"other\"  id=\"other\"  name=\"other\" disabled=\"\" style=\"width: 785px; \"></div>\n                </td>\n              </tr>\n              <tr>\n                  <td>\n                  </td>\n                  <td>\n                  <input type=\"button\" id=\"modi\" (click)=\"modify()\" value=\"????????????\" class=\"btn btn-primary btn-lg \" >\n                  <input type=\"button\" id=\"confirm\" disabled=\"\" (click)=\"update()\" value=\"????????????\" class=\"btn btn-primary btn-lg \"  >\n                  </td> \n              </tr>\n        </table>\n      </form>\n      <hr>\n      \n      <h3>?????????</h3>\n        <div class=\"row\">\n          <div class=\"col-sm-4 tuijian\">\n            <h4>\n              ???????????????????????????????????????\n              <small class=\"text-muted\">{{recomletters.length}}</small>\n            </h4>\n            <div *ngIf=\"recomletters.length > 0\">\n              <div class=\"panel-group\" id=\"accordion\" *ngFor=\"let l of recomletters\">\n                <div class=\"panel panel-success\" *ngIf=\"l.state=='?????????'\">\n                  <div class=\"panel-heading\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-10\"><b>{{l.recommenderName}} </b></div>\n                        <div class=\"col-sm-2\"><small>{{l.state}}</small></div>\n                      </div>\n                  </div>\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\"><b>{{l.type}} </b></div>\n                      <div class=\"col-sm-5\">\n\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"panel-footer\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <button  class=\"btn btn-danger btn-sm\" href=\"/anew/todel/@a.id\"  (click)=\"deleteRL(l)\">Delete</button>\n                      </div>\n                      <div class=\"col-sm-5\">\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterNoSubmit(l)\">?????????</button>\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterSubmit(l)\">?????????</button>\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterDiscard(l)\">??????</button>\n                        </div>\n                        \n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n                <div class=\"panel panel-default\" *ngIf=\"l.state=='?????????'\">\n                  <div class=\"panel-heading\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-10\"><b>{{l.recommenderName}} </b></div>\n                        <div class=\"col-sm-2\"><small>{{l.state}}</small></div>\n                      </div>\n                  </div>\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\"><b>{{l.type}} </b></div>\n                      <div class=\"col-sm-5\">\n\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"panel-footer\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <button  class=\"btn btn-danger btn-sm\" href=\"/anew/todel/@a.id\"  (click)=\"deleteRL(l)\">Delete</button>\n                      </div>\n                      <div class=\"col-sm-5\">\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterNoSubmit(l)\">?????????</button>\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterSubmit(l)\">?????????</button>\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterDiscard(l)\">??????</button>\n                        </div>\n                        \n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n                <div class=\"panel panel-danger\" *ngIf=\"l.state=='??????'\">\n                  <div class=\"panel-heading\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-10\"><b>{{l.recommenderName}} </b></div>\n                        <div class=\"col-sm-2\"><small>{{l.state}}</small></div>\n                      </div>\n                  </div>\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\"><b>{{l.type}} </b></div>\n                      <div class=\"col-sm-5\">\n\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"panel-footer\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <button  class=\"btn btn-danger btn-sm\" href=\"/anew/todel/@a.id\"  (click)=\"deleteRL(l)\">Delete</button>\n                      </div>\n                      <div class=\"col-sm-5\">\n                        <div class=\"btn-group\">\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterNoSubmit(l)\">?????????</button>\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterSubmit(l)\">?????????</button>\n                          <button type=\"button\" class=\"btn btn-primary\" href=\"/anew/todel/@a.id\" onclick=\"return confirm('???????????????????????????????????????????')\" (click)=\"updateLetterDiscard(l)\">??????</button>\n                        </div>\n                        \n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 caozuo\">\n            <form (submit)=\"addrecomLetter(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n              <fieldset>\n                <legend>?????????????????????</legend>\n                <div>\n                  <label>???????????????</label>\n                  <div class=\"col-sm-10\" >\n                    <div class=\"form-group\">\n                      <select class=\"form-control\" id=\"select\" *ngIf=\"recommenders.length > 0\"  ng-model=\"fLevelBefore\" ng-change=\"changervar('fLevelBefore')\">\n                        <option *ngFor=\"let r of recommenders\" id=\"recommenderID\" name=\"recommenderID\"  value=\"{{r._id}}\"> {{r.firstName}} {{r.lastName}}</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <fieldset class=\"form-group\">\n                  <legend>??????</legend>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" id=\"Academic\" value=\"Academic\"  ngModel required>\n                      Academic ??????\n                    </label>\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" id=\"Professional\" value=\"Professional\"  ngModel required>\n                      Professional ??????\n                    </label>\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\"  id=\"Rother\" value=\"other\" ngModel required>\n                      other\n                    </label>\n                  </div>\n                </fieldset>\n    \n                <button  class=\"btn btn-primary\">??????</button>\n              </fieldset>\n            </form>\n            \n          </div>\n        </div>\n      \n\n      <hr>\n      <h3>??????</h3>\n        <div class=\"row\">\n          <div class=\"col-sm-4 tuijian\">\n            <h4>\n              ????????????????????????????????????\n              <small class=\"text-muted\">{{statements.length}}</small>\n            </h4>\n\n            <div class=\"container\" *ngIf=\"statements.length > 0\">\n              <div class=\"row clearfix\" *ngFor=\"let st of statements\">\n                <div class=\"col-md-6 column\">\n                  <div class=\"panel panel-info\" >\n                    <div class=\"panel-heading\" >\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{st._id}}\">\n                      <b> {{st.stype}} </b> ??? {{st.words}} ?????? <br>\n                      </a>\n                    </h4>\n                    </div>\n                    <div id=\"{{st._id}}\" class=\"panel-collapse collapse\">\n                      <div class=\"panel-body\">\n                        {{st.question}}\n                      </div>\n                      <div class=\"panel-footer\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-10\">\n                            \n                          </div>\n                          <div class=\"col-sm-2\">\n                            <button  class=\"btn btn-danger\" href=\"/anew/todel/@a.id\"  (click)=\"deleteST(st)\">Delete</button>\n                            \n                          </div>\n                        </div>\n                        \n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 caozuo\">\n            <form (submit)=\"addstatement(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n              <fieldset>\n                <legend>????????????</legend>\n                <fieldset class=\"form-group\">\n                  <legend>??????</legend>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" name=\"stype\" id=\"PS\" value=\"Personal Statement\"  ngModel required>\n                      Personal Statement\n                    </label>\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" name=\"stype\" id=\"SOP\" value=\"Statement of Purpose\"  ngModel required>\n                      Statement of Purpose\n                    </label>\n                    <br>\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" name=\"stype\" id=\"Essay\" value=\"Essay\" ngModel required>\n                      Essay\n                    </label>\n                    <br>\n                    <label class=\"form-check-label\">\n                      <input type=\"radio\" class=\"form-check-input\" name=\"stype\" id=\"Rother\" value=\"other\" ngModel required>\n                      Other\n                    </label>\n                  </div>\n                </fieldset>\n                <div class=\"form-group\">\n                  <label class=\"col-form-label mt-4\" for=\"inputDefault\">????????????</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"?????????????????????\" id=\"question\" ngModel required>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-form-label mt-4\" for=\"inputDefault\">????????????</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"?????????????????????\" id=\"words\" ngModel required>\n                </div>\n                <button  class=\"btn btn-primary\">??????</button>\n              </fieldset>\n            </form>\n            \n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  \n\n  \n\n  "

/***/ }),

/***/ "./src/app/hmschool/hmschool.component.scss":
/*!**************************************************!*\
  !*** ./src/app/hmschool/hmschool.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n.tuijian {\n  width: 600px; }\n.caozuo {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1zY2hvb2wvaG1zY2hvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFDQTtFQUFjLGNBQWMsRUFBQTtBQUU1Qiw4Q0FBQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUlkLGdFQUFBO0FBQ0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFFZjtJQUFjLFlBQVksRUFBQSxFQUFHO0FBRy9CO0VBQ0UsWUFBWSxFQUFBO0FBRWQ7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9obXNjaG9vbC9obXNjaG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCBoZWlnaHQgb2YgdGhlIGdyaWQgc28gLnNpZGVuYXYgY2FuIGJlIDEwMCUgKGFkanVzdCBpZiBuZWVkZWQpICovXG4ucm93LmNvbnRlbnQge2hlaWdodDogMTUwMHB4fVxuICAgIFxuLyogU2V0IGdyYXkgYmFja2dyb3VuZCBjb2xvciBhbmQgMTAwJSBoZWlnaHQgKi9cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn1cblxuLnR1aWppYW57XG4gIHdpZHRoOiA2MDBweDtcbn1cbi5jYW96dW97XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hmschool/hmschool.component.ts":
/*!************************************************!*\
  !*** ./src/app/hmschool/hmschool.component.ts ***!
  \************************************************/
/*! exports provided: HmschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmschoolComponent", function() { return HmschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _recletter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recletter.service */ "./src/app/recletter.service.ts");
/* harmony import */ var _statement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../statement.service */ "./src/app/statement.service.ts");







var HmschoolComponent = /** @class */ (function () {
    function HmschoolComponent(route, router, http, hmService, statementService, recomletterService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.hmService = hmService;
        this.statementService = statementService;
        this.recomletterService = recomletterService;
        this.students = []; //all the orders from database
        this.hotels = [];
        this.schools = [];
        //???????????????
        this.recommenders = [];
        //???????????????
        this.recomletters = [];
        //????????????
        this.statements = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            _this.studentID = params["studentID"];
            _this.schoolID = params["schoolID"];
        });
        console.log("?????? ID ???" + this.studentID + " school???ID???" + this.schoolID);
    }
    HmschoolComponent.prototype.addrecomLetter = function (form) {
        this.recommenderID = document.getElementById("select").value;
        var rtype1 = document.getElementById("Academic");
        var rtype2 = document.getElementById("Professional");
        var rtype3 = document.getElementById("Rother");
        //console.log("?????????ID" + this.recommenderID );  
        for (var _i = 0, _a = this.recommenders; _i < _a.length; _i++) {
            var rec = _a[_i];
            if (rec._id === this.recommenderID) {
                this.recommenderName = rec.firstName.concat(" ");
                this.recommenderName = this.recommenderName.concat(rec.lastName);
                //console.log("??????????????????"+this.recommenderName);
            }
        }
        if (rtype1.checked == true) {
            //console.log("??????????????????"+form.value.type +"??????ID"+this.schoolID);
            this.recomletterService.addRecomletter("", this.schoolID, this.studentID, this.recommenderID, this.recommenderName, "Academic", "?????????");
        }
        if (rtype2.checked == true) {
            //console.log("??????????????????"+form.value.type +"??????ID"+this.schoolID);
            this.recomletterService.addRecomletter("", this.schoolID, this.studentID, this.recommenderID, this.recommenderName, "Professional", "?????????");
        }
        if (rtype3.checked == true) {
            //console.log("??????????????????"+form.value.type +"??????ID"+this.schoolID);
            this.recomletterService.addRecomletter("", this.schoolID, this.studentID, this.recommenderID, this.recommenderName, "Rother", "?????????");
        }
        alert("?????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.addstatement = function (form) {
        var question = document.getElementById("question").value;
        var words = document.getElementById("words").value;
        console.log("??????" + question + "??????ID" + this.schoolID + "??????" + words + "??????" + form.value.stype);
        //console.log("??????????????????"+form.value.type +"??????ID"+this.schoolID);
        this.statementService.addStatement("", this.schoolID, question, form.value.stype, words);
        alert("??????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("???????????????");
                    console.log(_this.hotel);
                }
            }
        });
        //?????? ??????????????????
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h._id === _this.studentID) {
                    _this.student = h;
                    console.log("Student Personal Information");
                    console.log(_this.student);
                }
            }
        });
        //?????? ???????????????????????????
        this.http.get('/api/schools').subscribe(function (Data) {
            //console.log(orderData);
            _this.schools = Data.schools;
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var s = _a[_i];
                if (s._id === _this.schoolID) {
                    //console.log("????????????");
                    _this.school = s;
                    _this.state = _this.school.state; //????????????????????????????????????????????????offer??????????????????
                    _this.univName = _this.school.univName; //????????????
                    _this.schoolName = _this.school.schoolName; //????????????
                    _this.majorName = _this.school.majorName; //????????????
                    _this.ddl1 = _this.school.ddl1; //DDL 1
                    _this.ddl2 = _this.school.ddl2; //DDL 2
                    _this.ddl3 = _this.school.ddl3; //DDL 3
                    _this.interview = _this.school.interview; //?????? ???????????????-????????????????????????
                    _this.videoEssay = _this.school.videoEssay; // videoEssay(????????????????????????????????????????????????)
                    _this.link = _this.school.link; //??????
                    _this.applyAccount = _this.school.applyAccount; //????????????
                    _this.applyPassword = _this.school.applyPassword; //???????????????
                    _this.recommNumber = _this.school.recommNumber; //???????????????
                    _this.other = _this.school.other;
                }
            }
        });
        //?????? ????????? ???????????????
        this.http.get('/api/studentrecommenderdetail/' + this.studentID).subscribe(function (orderData) {
            //console.log(orderData);
            _this.recommenders = orderData.recommenders;
        });
        //?????? ??????????????? ????????? ??????
        this.http.get('/api/schoolrecomletterlist/' + this.schoolID).subscribe(function (Data) {
            //console.log(Data);
            _this.recomletters = Data.recomletters;
        });
        //?????? ??????????????? ?????? ??????
        this.http.get('/api/statementdetail/' + this.schoolID).subscribe(function (Data) {
            //console.log(Data);
            _this.statements = Data.statements;
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //????????????
    HmschoolComponent.prototype.deleteST = function (st) {
        console.log("??????ID???" + st._id);
        this.http.delete('/api/statements/' + st._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    //???????????????
    HmschoolComponent.prototype.deleteRL = function (l) {
        console.log("?????????ID???" + l._id);
        this.http.delete('/api/recomletters/' + l._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    HmschoolComponent.prototype.modify = function () {
        //console.log("?????????????????????");
        document.getElementById("univName").removeAttribute("disabled");
        document.getElementById("schoolName").removeAttribute("disabled");
        document.getElementById("majorName").removeAttribute("disabled");
        document.getElementById("ddl1").removeAttribute("disabled");
        document.getElementById("ddl2").removeAttribute("disabled");
        document.getElementById("ddl3").removeAttribute("disabled");
        document.getElementById("interview").removeAttribute("disabled");
        document.getElementById("videoEssay").removeAttribute("disabled");
        document.getElementById("link").removeAttribute("disabled");
        document.getElementById("applyAccount").removeAttribute("disabled");
        document.getElementById("applyPassword").removeAttribute("disabled");
        document.getElementById("recommNumber").removeAttribute("disabled");
        document.getElementById("other").removeAttribute("disabled");
        document.getElementById("confirm").removeAttribute("disabled");
        document.getElementById("modi").setAttribute("disabled", "");
    };
    HmschoolComponent.prototype.update = function () {
        //console.log("Inside Update"+ this.ddl3);
        var School = {
            userAccount: this.studentID,
            state: this.state,
            univName: this.univName,
            schoolName: this.schoolName,
            majorName: this.majorName,
            ddl1: this.ddl1,
            ddl2: this.ddl2,
            ddl3: this.ddl3,
            interview: this.interview,
            videoEssay: this.videoEssay,
            link: this.link,
            applyAccount: this.applyAccount,
            applyPassword: this.applyPassword,
            recommNumber: this.recommNumber,
            other: this.other,
        };
        this.http.put('/api/schools/' + this.schoolID, School)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("????????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.updateStateDone = function () {
        var School = {
            userAccount: this.studentID,
            state: "?????????",
            univName: this.univName,
            schoolName: this.schoolName,
            majorName: this.majorName,
            ddl1: this.ddl1,
            ddl2: this.ddl2,
            ddl3: this.ddl3,
            interview: this.interview,
            videoEssay: this.videoEssay,
            link: this.link,
            applyAccount: this.applyAccount,
            applyPassword: this.applyPassword,
            recommNumber: this.recommNumber,
            other: this.other,
        };
        this.http.put('/api/schools/' + this.schoolID, School)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("????????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.updateStateOffer = function () {
        var School = {
            userAccount: this.studentID,
            state: "Offer",
            univName: this.univName,
            schoolName: this.schoolName,
            majorName: this.majorName,
            ddl1: this.ddl1,
            ddl2: this.ddl2,
            ddl3: this.ddl3,
            interview: this.interview,
            videoEssay: this.videoEssay,
            link: this.link,
            applyAccount: this.applyAccount,
            applyPassword: this.applyPassword,
            recommNumber: this.recommNumber,
            other: this.other,
        };
        this.http.put('/api/schools/' + this.schoolID, School)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("????????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.updateStateRef = function () {
        var School = {
            userAccount: this.studentID,
            state: "??????",
            univName: this.univName,
            schoolName: this.schoolName,
            majorName: this.majorName,
            ddl1: this.ddl1,
            ddl2: this.ddl2,
            ddl3: this.ddl3,
            interview: this.interview,
            videoEssay: this.videoEssay,
            link: this.link,
            applyAccount: this.applyAccount,
            applyPassword: this.applyPassword,
            recommNumber: this.recommNumber,
            other: this.other,
        };
        this.http.put('/api/schools/' + this.schoolID, School)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("????????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.updateLetterNoSubmit = function (l) {
        var Recomletter = {
            schoolID: l.schoolID,
            studentID: l.studentID,
            recommender: l.recommender,
            recommenderName: l.recommenderName,
            type: l.type,
            state: "?????????",
        };
        this.http.put('/api/recomletters/' + l._id, Recomletter)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("???????????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.updateLetterSubmit = function (l) {
        var Recomletter = {
            schoolID: l.schoolID,
            studentID: l.studentID,
            recommender: l.recommender,
            recommenderName: l.recommenderName,
            type: l.type,
            state: "?????????",
        };
        this.http.put('/api/recomletters/' + l._id, Recomletter)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("???????????????????????????!!");
        window.location.reload();
    };
    HmschoolComponent.prototype.updateLetterDiscard = function (l) {
        var Recomletter = {
            schoolID: l.schoolID,
            studentID: l.studentID,
            recommender: l.recommender,
            recommenderName: l.recommenderName,
            type: l.type,
            state: "??????",
        };
        this.http.put('/api/recomletters/' + l._id, Recomletter)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("???????????????????????????!!");
        window.location.reload();
    };
    //direct to the hotel manage page
    HmschoolComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmschoolComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmschoolComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmschoolComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmschoolComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmschoolComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the addschool page
    HmschoolComponent.prototype.hmaddschool = function (hotel, student) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.student._id,
            }
        };
        this.router.navigate(['/hmaddschool'], navigationExtras);
    };
    //direct to the register page
    HmschoolComponent.prototype.hmstudent = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/hmstudent'], navigationExtras);
    };
    //direct to the blog page
    HmschoolComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmschoolComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmschool',
            template: __webpack_require__(/*! ./hmschool.component.html */ "./src/app/hmschool/hmschool.component.html"),
            styles: [__webpack_require__(/*! ./hmschool.component.scss */ "./src/app/hmschool/hmschool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"],
            _statement_service__WEBPACK_IMPORTED_MODULE_6__["StatementService"],
            _recletter_service__WEBPACK_IMPORTED_MODULE_5__["RecomletterService"]])
    ], HmschoolComponent);
    return HmschoolComponent;
}());



/***/ }),

/***/ "./src/app/hmstudent/hmstudent.component.html":
/*!****************************************************!*\
  !*** ./src/app/hmstudent/hmstudent.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >????????????????????????</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"hotelman(hotel)\">Manage Hotel</a></li>\n              <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li class=\"active\">{{student.firstName}} {{student.lastName}}</li>\n  </ol>\n\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-2 sidenav\">\n      <h4>{{hotel.userAccount}}  </h4>\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n        <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n        <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n        <li class=\"active\"><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n        <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n        <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n        <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n      </ul><br>\n      \n      </div>\n    \n      <div class=\"col-sm-10\">\n        <h2>{{student.firstName}} {{student.lastName}}</h2>\n      <p>{{student.userAccount}}</p>\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" data-toggle=\"tab\" href=\"#profile\" >????????????</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" data-toggle=\"tab\" href=\"#otherinfo\" >????????????</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" data-toggle=\"tab\" href=\"#edu\" >????????????</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" data-toggle=\"tab\" href=\"#exp\" >????????????</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#dropdown1\">???????????????</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#dropdown2\">????????????</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#dropdown3\">????????????</a>\n        </li>\n      </ul>\n      <div id=\"myTabContent\" class=\"tab-content\">\n        <div class=\"tab-pane fade \" id=\"profile\">\n          <div id=\"personal\" >\n            <h3>????????????</h3> \n            <hr>\n            <table class=\"table table-bordered\" >\n              <tbody>\n                <tr>\n                <td >?????? Firstname</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"firstName\" value=\"{{student.firstName}}\" [(ngModel)]=\"firstName\"  name=\"firstName\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                <td >?????? Lastname</td>\n                <td ><input class=\"form-control\" id=\"lastName\" value=\"{{student.lastName}}\" [(ngModel)]=\"lastName\"  name=\"lastName\" style=\"width: 200px;\" disabled=\"\"></td>\n                <td >?????? Gender</td>\n                <td><input class=\"form-control\" id=\"gender\" value=\"{{student.gender}}\" [(ngModel)]=\"gender\"  name=\"gender\" style=\"width: 200px;\" disabled=\"\"></td>\n                </tr>\n                <tr>\n                <td >??????????????? dob</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"dob\" value=\"{{student.dob}}\" [(ngModel)]=\"dob\"  name=\"dob\" style=\"width: 200px;\" disabled=\"\">\n                  <small class=\"form-text text-muted\">?????????MM/DD/YYYY</small>\n                </td>\n                <td >????????? currentAddress\t</td>\n                <td colspan=\"3\"><input class=\"form-control\" id=\"currentAddress\" value=\"{{student.currentAddress}}\" [(ngModel)]=\"currentAddress\"  name=\"currentAddress\" style=\"width: 500px;\" disabled=\"\">\n                  <small class=\"form-text text-muted\">??????????????????????????????????????????</small></td>\n                </tr>\n                <tr>\n                <td >??????</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"citizen\" value=\"{{student.citizen}}\" [(ngModel)]=\"citizen\"  name=\"citizen\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                <td >?????????????????? Permanent Address</td>\n                <td colspan=\"3\"><input class=\"form-control\" id=\"permanentAddress\" value=\"{{student.permanentAddress}}\" [(ngModel)]=\"permanentAddress\"  name=\"permanentAddress\" style=\"width:500px;\" disabled=\"\">\n                  <small class=\"form-text text-muted\">??????????????????????????????????????????</small></td>\n                </tr>\n                <tr>\n                <td >?????? Cellphone</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"phone\" value=\"{{student.phone}}\" [(ngModel)]=\"phone\"  name=\"phone\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                <td >?????? Email</td>\n                <td ><input class=\"form-control\" id=\"email\" value=\"{{student.email}}\" [(ngModel)]=\"email\"  name=\"email\" style=\"width: 200px;\" disabled=\"\"></td>\n                <td >SSN </td>\n                <td><input class=\"form-control\" id=\"ssn\" value=\"{{student.ssn}}\" [(ngModel)]=\"ssn\"  name=\"ssn\" style=\"width: 200px;\" disabled=\"\"></td>\n                </tr>\n                <tr>\n                <td >????????? Passport</td>\n                <td colspan=\"2\">\t\n                  <input class=\"form-control\" id=\"passport\" value=\"{{student.passport}}\" [(ngModel)]=\"passport\"  name=\"passport\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                <td >???????????? Visa Number</td>\n                <td colspan=\"2\"><input class=\"form-control\" id=\"visa\" value=\"{{student.visa}}\" [(ngModel)]=\"visa\"  name=\"visa\" style=\"width: 200px;\" disabled=\"\"></td>\n                </tr>\n                <tr>\n                <td >????????????????????? Email</td>\n                <td colspan=\"2\">\t\n                  <input class=\"form-control\" id=\"appEmail\" value=\"{{student.appEmail}}\" [(ngModel)]=\"appEmail\"  name=\"appEmail\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                <td >??????????????????????????? Password</td>\n                <td colspan=\"2\"><input class=\"form-control\" id=\"appPsw\" value=\"{{student.appPsw}}\" [(ngModel)]=\"appPsw\"  name=\"appPsw\" style=\"width: 200px;\" disabled=\"\"></td>\n                </tr> \n              </tbody>\n            </table>\n\n          </div>\n          <div id=\"family\" >\n            <h3>????????????</h3>\n            <hr>\n            <form id=\"form2\" action=\"\" method=\"post\">\n            <table class=\"table table-bordered\" >\n              <tbody>\n                <tr>\n                <td ></td>\n                <td >\t\n                  Father ??????\n                </td>\n                <td >Mother ??????</td>\n                </tr>\n                <tr>\n                <td >?????? <br> <small class=\"form-text text-muted\">????????????????????????????????????????????????</small></td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomName\" value=\"{{student.MomName}}\" [(ngModel)]=\"MomName\"  name=\"MomName\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatName\" value=\"{{student.FatName}}\" [(ngModel)]=\"FatName\"  name=\"FatName\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Address ???????????? <br> <small class=\"form-text text-muted\">??????????????????????????????????????????</small></td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomAddress\" value=\"{{student.MomAddress}}\" [(ngModel)]=\"MomAddress\"  name=\"MomAddress\" style=\"width: 400px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatAddress\" value=\"{{student.FatAddress}}\" [(ngModel)]=\"FatAddress\"  name=\"FatAddress\" style=\"width: 400px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Organization Name & Address ???????????????????????????<br> <small class=\"form-text text-muted\">???????????????????????????????????????????????????</small></td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomOrganazation\" value=\"{{student.MomOrganazation}}\" [(ngModel)]=\"MomOrganazation\"  name=\"MomOrganazation\" style=\"width: 400px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatOrganazation\" value=\"{{student.FatOrganazation}}\" [(ngModel)]=\"FatOrganazation\"  name=\"FatOrganazation\" style=\"width: 400px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Position ?????? </td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomJob\" value=\"{{student.MomJob}}\" [(ngModel)]=\"MomJob\"  name=\"MomJob\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatJob\" value=\"{{student.FatJob}}\" [(ngModel)]=\"FatJob\"  name=\"FatJob\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Level of Education ???????????? </td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomEducation\" value=\"{{student.MomEducation}}\" [(ngModel)]=\"MomEducation\"  name=\"MomEducation\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatEducation\" value=\"{{student.FatEducation}}\" [(ngModel)]=\"FatEducation\"  name=\"FatEducation\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >School Name ????????????</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomSchool\" value=\"{{student.MomSchool}}\" [(ngModel)]=\"MomSchool\"  name=\"MomSchool\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatSchool\" value=\"{{student.FatSchool}}\" [(ngModel)]=\"FatSchool\"  name=\"FatSchool\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Year of Graduation ????????????</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomGraduation\" value=\"{{student.MomGraduation}}\" [(ngModel)]=\"MomGraduation\"  name=\"MomGraduation\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatGraduation\" value=\"{{student.FatGraduation}}\" [(ngModel)]=\"FatGraduation\"  name=\"FatGraduation\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Phone ?????? </td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomPhone\" value=\"{{student.MomPhone}}\" [(ngModel)]=\"MomPhone\"  name=\"MomPhone\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatPhone\" value=\"{{student.FatPhone}}\" [(ngModel)]=\"FatPhone\"  name=\"FatPhone\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td >Email  ??????  </td>\n                <td >\t\n                  <input class=\"form-control\" id=\"MomEmail\" value=\"{{student.MomEmail}}\" [(ngModel)]=\"MomEmail\"  name=\"MomEmail\" style=\"width: 200px;\" disabled=\"\">\n                  \n                </td>\n                <td>\n                  <input class=\"form-control\" id=\"FatEmail\" value=\"{{student.FatEmail}}\" [(ngModel)]=\"FatEmail\"  name=\"FatEmail\" style=\"width: 200px;\" disabled=\"\">\n                </td>\n                </tr>\n              </tbody>\n            </table>\n            </form>\n          </div>\n        </div>\n        <div class=\"tab-pane fade \" id=\"otherinfo\">               \n          <div id=\"standardtest\" >\n            <h3>????????????</h3>\n            <hr>\n            <table class=\"table table-bordered\" >\n              <tbody>\n                <tr>\n                  <td colspan=\"10\">\n                    <h4>TOEFL/IELTS</h4> <small class=\"form-text text-muted\">?????????IELTS??????????????????????????????</small>\n                  </td>\n                </tr>\n                <tr>\n                <td >?????? Total Score</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"TOEFL\" value=\"{{student.TOEFL}}\" [(ngModel)]=\"TOEFL\"  name=\"TOEFL\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >?????? Reading</td>\n                <td ><input class=\"form-control\" id=\"TOEFLR\" value=\"{{student.TOEFLR}}\" [(ngModel)]=\"TOEFLR\"  name=\"TOEFLR\" style=\"width: 50px;\" disabled=\"\"></td>\n                <td >?????? Listening</td>\n                <td><input class=\"form-control\" id=\"TOEFLL\" value=\"{{student.TOEFLL}}\" [(ngModel)]=\"TOEFLL\"  name=\"TOEFLL\" style=\"width: 50px;\" disabled=\"\"></td>\n                <td >?????? Speaking</td>\n                <td ><input class=\"form-control\" id=\"TOEFLS\" value=\"{{student.TOEFLS}}\" [(ngModel)]=\"TOEFLS\"  name=\"TOEFLS\" style=\"width: 50px;\" disabled=\"\"></td>\n                <td >?????? Writing</td>\n                <td><input class=\"form-control\" id=\"TOEFLW\" value=\"{{student.TOEFLW}}\" [(ngModel)]=\"TOEFLW\"  name=\"TOEFLW\" style=\"width: 50px;\" disabled=\"\"></td>\n                </tr>\n                <tr>\n                <td colspan=\"10\">\n                  <h4>GRE</h4> <small class=\"form-text text-muted\">??????????????????GRE???????????????</small>\n                </td>\n                </tr>\n                <tr>\n                <td >?????? Total Score</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"GRE\" value=\"{{student.GRE}}\" [(ngModel)]=\"GRE\"  name=\"GRE\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Verbal</td>\n                <td ><input class=\"form-control\" id=\"GREV\" value=\"{{student.GREV}}\" [(ngModel)]=\"GREV\"  name=\"GREV\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GREVP\" value=\"{{student.GREVP}}\" [(ngModel)]=\"GREVP\"  name=\"GREVP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Quantitative</td>\n                <td ><input class=\"form-control\" id=\"GREQ\" value=\"{{student.GREQ}}\" [(ngModel)]=\"GREQ\"  name=\"GREQ\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GREQP\" value=\"{{student.GREQP}}\" [(ngModel)]=\"GREQP\"  name=\"GREQP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td colspan=\"2\" ></td>\n                <td >Analytical Writing</td>\n                <td ><input class=\"form-control\" id=\"GREW\" value=\"{{student.GREW}}\" [(ngModel)]=\"GREW\"  name=\"GREW\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GREWP\" value=\"{{student.GREWP}}\" [(ngModel)]=\"GREWP\"  name=\"GREWP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td colspan=\"4\"></td>\n                </tr>\n                <tr>\n                <td colspan=\"10\">\n                  <h4>GMAT</h4> <small class=\"form-text text-muted\">??????????????????GMAT???????????????</small>\n                </td>\n                </tr>\n                <tr>\n                <td >?????? Total Score</td>\n                <td >\t\n                  <input class=\"form-control\" id=\"GMAT\" value=\"{{student.GMAT}}\" [(ngModel)]=\"GMAT\"  name=\"GMAT\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Verbal</td>\n                <td ><input class=\"form-control\" id=\"GMATV\" value=\"{{student.GMATV}}\" [(ngModel)]=\"GMATV\"  name=\"GMATV\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GMATVP\" value=\"{{student.GMATVP}}\" [(ngModel)]=\"GMATVP\"  name=\"GMATVP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Quantitative</td>\n                <td ><input class=\"form-control\" id=\"GMATQ\" value=\"{{student.GMATQ}}\" [(ngModel)]=\"GMATQ\"  name=\"GMATQ\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GMATQP\" value=\"{{student.GMATQP}}\" [(ngModel)]=\"GMATQP\"  name=\"GMATQP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td colspan=\"2\" ></td>\n                <td >Analytical Writing</td>\n                <td ><input class=\"form-control\" id=\"GMATW\" value=\"{{student.GMATW}}\" [(ngModel)]=\"GMATW\"  name=\"GMATW\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GMATWP\" value=\"{{student.GMATWP}}\" [(ngModel)]=\"GMATWP\"  name=\"GMATWP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Reasoning</td>\n                <td ><input class=\"form-control\" id=\"GMATR\" value=\"{{student.GMATR}}\" [(ngModel)]=\"GMATR\"  name=\"GMATR\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                <td >Percentile</td>\n                <td ><input class=\"form-control\" id=\"GMATRP\" value=\"{{student.GMATRP}}\" [(ngModel)]=\"GMATRP\"  name=\"GMATRP\" style=\"width: 80px;\" disabled=\"\">\n                </td>\n                </tr>\n                <tr>\n                <td colspan=\"2\">\n                  <h4>Others</h4> \n                </td>\n                <td colspan=\"8\">\n                  <input class=\"form-control\" id=\"OtherStandardTest\" value=\"{{student.OtherStandardTest}}\" [(ngModel)]=\"OtherStandardTest\"  name=\"OtherStandardTest\" style=\"width: 900px;\" disabled=\"\">\n                </td>\n                </tr>\n                \n              </tbody>\n            </table>\n            \n          </div>\n          <div id=\"skills\" >\n            <h3>??????</h3>\n            <hr>\n            <table class=\"table table-bordered\" >\n              <tbody>\n                <tr>\n                  <td colspan=\"2\">\n                    <p>????????????????????????: C (2 yrs ) C++ JAVA (5 yrs )Python; ????????????SPSS, SAS, Stata; ???????????????Eview;????????????UFIDA, ERP; ???????????? Bloomberg Reuters </p> <br> <b>??????????????????????????????????????????</b> \n                  </td>\n                </tr>\n                <tr>\n                <td >Language Ability ????????????</td>\n                <td style=\"width: 900px;\">\t\n                  <input class=\"form-control\" id=\"Language\" value=\"{{student.Language}}\" [(ngModel)]=\"Language\"  name=\"Language\" style=\"width: 800px;\" disabled=\"\">\n    \n                </td>\t\n                </tr>\n                <tr>\n                <td >Computer Skills ???????????????</td>\n                <td style=\"width: 900px;\">\t\n                  <input class=\"form-control\" id=\"ComputerSkills\" value=\"{{student.ComputerSkills}}\" [(ngModel)]=\"ComputerSkills\"  name=\"ComputerSkills\" style=\"width: 800px;\" disabled=\"\">\n    \n                </td>\n                </tr>\n                <tr>\n                <td >Other Skills & Certificates <br> ????????????????????? <br><small class=\"form-text text-muted\">??????: CFA CPA ??????????????????</small></td>\n                <td style=\"width: 900px;\">\t\n                  <input class=\"form-control\" id=\"OtherSkills\" value=\"{{student.OtherSkills}}\" [(ngModel)]=\"OtherSkills\"  name=\"OtherSkills\" style=\"width: 800px;\" disabled=\"\">\n    \n                </td>\t\n                </tr>\n                <tr>\n                <td >Hobbies ?????? <br><small class=\"form-text text-muted\">?????? 10????????????????????????????????? 6?????????????????????????????????10???</small></td>\n                <td style=\"width: 900px;\">\t\n                  <input class=\"form-control\" id=\"Hobbies\" value=\"{{student.Hobbies}}\" [(ngModel)]=\"Hobbies\"  name=\"Hobbies\" style=\"width: 800px;\" disabled=\"\">\n    \n                </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"tab-pane fade \" id=\"edu\">\n          <div id=\"Education\">\n            <div class=\"row\">\n              <div class=\"col-sm-10\">\n                <h3>\n                  ?????????????????????????????????\n                  <small class=\"text-muted\">{{education.length}}</small>\n              </h3>\n              </div>\n              <div class=\"col-sm-2\">          \n              </div>\n            </div>\n          \n\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" *ngIf=\"education.length > 0\">\n\t\t\t\t\t\t<div class=\"panel panel-primary\" *ngFor=\"let e of education\">\n\t\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t\t\thref=\"#{{e._id}}\">\n\t\t\t\t\t\t\t\t<b>{{e.educationName}} </b> ({{e.type}})\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div id=\"{{e._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"width: 30%; background-color: lightgray;\">University ??????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"width: 70%;\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.educationName}}\n\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Address ????????????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.educationLocation}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">???????????? </td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">From</td>\n\t\t\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.educationStart}}\n\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">To</td>\n\t\t\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.educationEnd}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Major ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.major}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Degree ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.Degree}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Overall GPA\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.GPA}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Major GPA ??????GPA </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.MajorGPA}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Second Degree or Minor ??????????????????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.SecondDegree}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Overall GPA\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.SecondGPA}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">????????????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.other}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr> \n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n              <div class=\"panel-footer\">\n                <div class=\"row\">\n                  <div class=\"col-sm-10\">\n                    \n                  </div>\n                  <div class=\"col-sm-2\">\n                    <input type=\"button\" href=\"/anew/todel/@a.id\"  id=\"shanchu\"  value=\"??????\" class=\"btn btn-primary \" onclick=\"return confirm('????????????????????????????????????????')\" (click)=\"deleteE(e)\">\n                    \n                  </div>\n                </div>\n                \n              </div>\n\t\t\t\t\t\t  </div> \n\n\t\t\t\t\t\t</div>\n            \n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\n        </div>\n        <div class=\"tab-pane fade \" id=\"exp\">\n          <h3>\n            ?????????????????????????????????\n            <small class=\"text-muted\">{{experience.length}}</small>\n          </h3>\n          <br>\n          <div id=\"Experience\">\n            <br>\n            <div class=\"panel-group\" id=\"accordion\" *ngIf=\"experience.length > 0\">\n              <div class=\"panel panel-primary\" *ngFor=\"let ex of experience\">\n                <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n                  href=\"#{{ex._id}}\">\n                  <b>{{ex.institution}} </b> ({{ex.type}})\n                  </a>\n                </h4>\n                </div>\n                <div id=\"{{ex._id}}\" class=\"panel-collapse collapse in\">\n                <div class=\"panel-body\">\n                  <table class=\"table table-bordered\" >\n                    <tbody>\n                      <tr >\n                      <td style=\"width: 30%; background-color: lightgray;\">Company/Institution <br> ??????/???????????? </td>\n                      <td colspan=\"4\" style=\"width: 70%;\">\t\n                        {{ex.institution}}\n                      </td>\t\n                      </tr>\n                      <tr>\n                      <td style=\"background-color: lightgray;\">Address ??????</td>\n                      <td colspan=\"4\">\t\n                        {{ex.institutionLocation}}\n                      </td>\n                      </tr>\n                      <tr>\n                      <td style=\"background-color: lightgray;\">???????????? </td>\n                      <td style=\"background-color: lightgray;\">From</td>\n                      <td >\t\n                        {{ex.experienceStart}}\n                      </td>\t\n                      <td style=\"background-color: lightgray;\">To</td>\n                      <td >\t\n                        {{ex.experienceEnd}}\n                      </td>\n                      </tr>\n                      <tr>\n                      <td style=\"background-color: lightgray;\">Position or Title ?????? </td>\n                      <td colspan=\"4\">\t\n                        {{ex.experienceposition}}\n                      </td>\n                      </tr>\n                      <tr>\n                      <td style=\"background-color: lightgray;\">Responsibilities ?????? </td>\n                      <td colspan=\"4\">\t\n                        {{ex.responsibilities}}\n                      </td>\n                      </tr>\n                      <tr >\n                      <td style=\"background-color: lightgray;\">Project  ???????????? \n                      </td>\n                      <td colspan=\"4\">\t\n                        {{ex.project}}\n                      </td>\n                      </tr>\n                      <tr>\n                      <td style=\"background-color: lightgray;\">Achievement ?????? </td>\n                      <td colspan=\"4\">\t\n                        {{ex.achievement}}\n                      </td>\n                      </tr> \n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"panel-footer\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-10\">\n                      \n                    </div>\n                    <div class=\"col-sm-2\">\n                      <input type=\"button\" href=\"/anew/todel/@a.id\"  id=\"shanchu\"  value=\"??????\" class=\"btn btn-primary \" onclick=\"return confirm('????????????????????????????????????????')\" (click)=\"deleteEx(ex)\">\n                      \n                    </div>\n                  </div>\n                  \n                </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"tab-pane fade \" id=\"dropdown1\">\n          <h3>\n            ????????????????????????????????????\n            <small class=\"text-muted\">{{recommenders.length}}</small>\n          </h3>\n          <hr>\n          <div class=\"panel-group\" id=\"accordion\" *ngIf=\"recommenders.length > 0\">\n            <div class=\"panel panel-primary\" *ngFor=\"let k of recommenders\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n                    href=\"#{{k._id}}\">\n                  <b> {{k.firstName}} {{k.lastName}}</b>\n                  </a>\n                </h4>\n              </div>\n              <div id=\"{{k._id}}\" class=\"panel-collapse collapse in\">\n                <div class=\"panel-body\">\n                  <table class=\"table table-hover\">\n                    <thead style=\"background-color: lightgray;\">\n                      <tr>\n                        <th scope=\"col\" >??????</th>\n                        <th scope=\"col\" >??????title</th>\n                        <th scope=\"col\" >??????</th>\n                        <th scope=\"col\">Relationship</th>\n                        <th scope=\"col\">????????????</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n                      <tr class=\"table-dark\" >\n                        <td>{{k.gender}} </td>\n                        <td>{{k.title}}</td>\n                        <td>{{k.education}}</td>\n                        <td>{{k.relation}}</td>\n                        <td>{{k.organization}}</td>  \n                      </tr>\n                    </tbody>\n                    <thead style=\"background-color: lightgray;\">\n                      <tr>\n                        <th scope=\"col\" >??????</th>\n                        <th scope=\"col\" >Email</th>\n                        <th scope=\"col\">??????</th>\n                        <th scope=\"col\" >??????</th>\n                        <th scope=\"col\">??????????????????????????????</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n                      <tr class=\"table-dark\" >\n                        <td>{{k.position}} </td>\n                        <td>{{k.email}}</td>\n                        <td>{{k.phone}}</td>\n                        <td>{{k.location}}</td>\n                        <td>{{k.duration}}</td>  \n                      </tr>\n                    </tbody>\n                    <thead style=\"background-color: lightgray;\">\n                      <tr>\n                        <th colspan=\"5\">???????????????????????????????????????????????????????????????????????????</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td colspan=\"5\">{{k.other}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"panel-footer\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-10\">\n                      <input type=\"button\" href=\"/anew/todel/@a.id\" value=\"??????\" class=\"btn btn-primary \" (click)=\"deleteRD(k)\">\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <button href=\"/anew/todel/@a.id\" (click)=\"studentrec(k)\">More</button>\n                      \n                    </div>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n        <div class=\"tab-pane fade in active\" id=\"dropdown2\">\n\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th scope=\"col\" colspan=\"6\"><h3>\n                  ????????????????????????\n                  <small class=\"text-muted\">{{schools.length}}</small>\n                </h3></th>\n                <th scope=\"col\" colspan=\"4\"> <button type=\"button\" class=\"btn btn-danger\" (click)=\"hmaddschool(hotel,student)\">????????????</button>\n                  <button type=\"button\" class=\"btn btn-warning\" (click)=\"exportAsExcelFile()\">??????excel</button></th>\n              </tr>\n            </thead>\n            <thead>\n              <tr>\n                <th scope=\"col\" style=\"width:50px\">States</th>\n                <th scope=\"col\" style=\"width:200px\">University</th>\n                <th scope=\"col\" style=\"width:200px\">School</th>\n                <th scope=\"col\" style=\"width:200px\">Major</th>\n                <th scope=\"col\" style=\"width:90px\">Deadline 1</th>\n                <th scope=\"col\" style=\"width:90px\">Deadline 2</th>\n                <th scope=\"col\" style=\"width:90px\">Deadline 3</th>\n                <th scope=\"col\" style=\"width:20px\">RecNum</th>\n                <th scope=\"col\" style=\"width:20px\"></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"schools.length > 0\">\n              <tr class=\"table-dark\"  *ngFor=\"let s of schools\">\n                <th scope=\"row\">{{s.state}}</th>\n                <td>{{s.univName}}</td>\n                <td>{{s.schoolName}}</td>\n                <td>{{s.majorName}}</td>\n                <td>{{s.ddl1}}</td>\n                <td>{{s.ddl2}}</td>\n                <td>{{s.ddl3}}</td>\n                <td>{{s.recommNumber}}</td>\n                <td><button href=\"/anew/todel/@a.id\" (click)=\"hmschooldetail(s)\">More</button></td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n        <div class=\"tab-pane fade \" id=\"dropdown3\">\n          <div class=\"col-sm-9\">\n            <div class=\"container\">\n              <div class=\"row clearfix\">\n                <div class=\"col-md-12 column\">\n                  <div class=\"row clearfix\">\n                    <div class=\"col-md-7 column\">\n                      <br>\n                      <form (submit)=\"addNotif(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n                        <fieldset>\n                          <fieldset class=\"form-group\">\n                            <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input type=\"radio\" class=\"form-check-input\" name=\"type\" id=\"immedi\" value=\"??????\"  ngModel required>\n                                ??????\n                              </label>\n                              <label class=\"form-check-label\">\n                                <input type=\"radio\" class=\"form-check-input\" name=\"type\" id=\"normal\" value=\"??????\"  ngModel required>\n                                ??????\n                              </label>\n                              <label class=\"form-check-label\">\n                                <input type=\"radio\" class=\"form-check-input\" name=\"type\" id=\"medium\" value=\"????????????\" ngModel required>\n                                ????????????\n                              </label>\n                            </div>\n                          </fieldset>\n                          <div class=\"form-group\">\n                            <label for=\"exampleTextarea\" class=\"form-label mt-4\">????????????</label>\n                            <input class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" style=\"margin-top: 0px; margin-bottom: 0px; height: 108px;\" ngModel required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">????????????</label>\n                            <input class=\"form-control\" name=\"ddl1\" type=\"date\" placeholder=\"date\" style=\"width:50%\" ngModel required>\n                          </div>\n              \n                          <button  class=\"btn btn-primary\">????????????</button>\n                        </fieldset>\n                      </form>\n                    </div>\n                    <div class=\"col-md-3 column\" *ngIf=\"notifs.length > 0\">\n                      <blockquote *ngFor=\"let n of notifs\">\n                        <p>\n                         {{n.content}}\n                        </p> <small>{{n.ndate}}  {{n.nstate}}</small>\n                      </blockquote>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          \n        </div>\n      </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  \n  \n\n  "

/***/ }),

/***/ "./src/app/hmstudent/hmstudent.component.scss":
/*!****************************************************!*\
  !*** ./src/app/hmstudent/hmstudent.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 4000px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 1000px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1zdHVkZW50L2htc3R1ZGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBQTtBQUNBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCLDhDQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9obXN0dWRlbnQvaG1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7XG4gIGhlaWdodDogNDAwMHB4O1xufVxuICAgIFxuLyogU2V0IGdyYXkgYmFja2dyb3VuZCBjb2xvciBhbmQgMTAwJSBoZWlnaHQgKi9cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hmstudent/hmstudent.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hmstudent/hmstudent.component.ts ***!
  \**************************************************/
/*! exports provided: HmstudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmstudentComponent", function() { return HmstudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notif.service */ "./src/app/notif.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);








var HmstudentComponent = /** @class */ (function () {
    function HmstudentComponent(route, router, http, notifService, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.notifService = notifService;
        this.hmService = hmService;
        this.students = []; //all the orders from database
        this.hotels = [];
        //??????????????????
        this.educations = [];
        this.education = [];
        //??????????????????
        this.experiences = [];
        this.experience = [];
        //????????????
        this.notifs = [];
        //school ??????
        this.schools = [];
        //???????????????
        this.recommenders = [];
        this.excelData = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            _this.studentID = params["studentID"];
        });
        console.log("?????? ID ???+" + this.studentID);
    }
    HmstudentComponent.prototype.addNotif = function (form) {
        var content = document.getElementById("exampleTextarea").value;
        //console.log(content);
        this.notifService.addNotif("", this.studentID, content, form.value.ddl1, "??????", form.value.type);
        alert("??????????????????!!");
    };
    HmstudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("???????????????");
                    console.log(_this.hotel);
                }
            }
        });
        //?????? ??????????????????
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h._id === _this.studentID) {
                    _this.student = h;
                    _this.studentName = _this.student.firstName + " " + _this.student.lastName;
                    //this.Sname=this.student.name;
                    //this.Slocation = this.student.location;
                    console.log("Student Personal Information");
                    console.log(_this.student);
                }
            }
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/educations/').subscribe(function (Data) {
            _this.educations = Data.educations;
            for (var _i = 0, _a = _this.educations; _i < _a.length; _i++) {
                var y = _a[_i];
                if (y.userAccount === _this.studentID) {
                    _this.education.push(y);
                }
            }
            console.log("?????????????????????" + _this.education);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/experiences/').subscribe(function (Data) {
            _this.experiences = Data.experiences;
            for (var _i = 0, _a = _this.experiences; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.userAccount === _this.studentID) {
                    _this.experience.push(i);
                }
            }
            console.log("?????????????????????" + _this.experience);
        });
        //?????? ????????? ????????????
        this.http.get('/api/studentschooldetail/' + this.studentID).subscribe(function (orderData) {
            console.log(orderData);
            _this.schools = orderData.schools;
        });
        //?????? ????????? ???????????????
        this.http.get('/api/studentrecommenderdetail/' + this.studentID).subscribe(function (orderData) {
            console.log(orderData);
            _this.recommenders = orderData.recommenders;
        });
        //?????? ?????????????????????
        this.http.get('/api/notifdetail/' + this.studentID).subscribe(function (o) {
            console.log(o);
            _this.notifs = o.notifs;
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //??????????????????
    HmstudentComponent.prototype.deleteE = function (e) {
        console.log(e._id);
        this.http.delete('/api/education/' + e._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    //??????????????????
    HmstudentComponent.prototype.deleteEx = function (ex) {
        console.log(ex._id);
        this.http.delete('/api/experience/' + ex._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    //???????????????
    HmstudentComponent.prototype.deleteRD = function (k) {
        console.log(k._id);
        this.http.delete('/api/recommenders/' + k._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    //???json????????????excel
    HmstudentComponent.prototype.exportAsExcelFile = function () {
        var json = this.schools;
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_6__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_6__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //????????????????????????????????????????????????????????????xml???????????????????????????????????????????????????
        this.saveAsExcelFile(excelBuffer, this.studentName + "???????????????");
    };
    HmstudentComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        });
        file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"](data, fileName + '_export_' + new Date().getTime() + '.xlsx');
        // ????????????.xlsx,????????????????????????????????????????????????Excel????????????
    };
    //direct to the hotel manage page
    HmstudentComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmstudentComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmstudentComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmstudentComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmstudentComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmstudentComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the addschool page
    HmstudentComponent.prototype.hmaddschool = function (hotel, student) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.student._id,
            }
        };
        this.router.navigate(['/hmaddschool'], navigationExtras);
    };
    //direct to the school detail page
    HmstudentComponent.prototype.hmschooldetail = function (s) {
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "studentID": this.studentID,
                "schoolID": s._id,
            }
        };
        this.router.navigate(['/hmschool'], navigationExtras);
    };
    //direct to the ????????????????????? page
    HmstudentComponent.prototype.studentrec = function (k) {
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "studentID": this.student._id,
                "recommenderID": k._id,
            }
        };
        this.router.navigate(['/hmstudentrec'], navigationExtras);
    };
    //direct to the blog page
    HmstudentComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmstudentComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmstudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmstudent',
            template: __webpack_require__(/*! ./hmstudent.component.html */ "./src/app/hmstudent/hmstudent.component.html"),
            styles: [__webpack_require__(/*! ./hmstudent.component.scss */ "./src/app/hmstudent/hmstudent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _notif_service__WEBPACK_IMPORTED_MODULE_5__["NotifService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmstudentComponent);
    return HmstudentComponent;
}());



/***/ }),

/***/ "./src/app/hmstudentrec/hmstudentrec.component.html":
/*!**********************************************************!*\
  !*** ./src/app/hmstudentrec/hmstudentrec.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >????????????????????????</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"main(hotel)\">HomePage</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              Shortcut <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n              <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n              <li class=\"divider\"></li>\n              <li><a (click)=\"hotelman(hotel)\">Manage Hotel</a></li>\n              <li><a (click)=\"hmorder(hotel)\">Order</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <ol class=\"breadcrumb\">\n      <li><a (click)=\"main(hotel)\">Home</a></li>\n      <li><a (click)=\"main(hotel)\">{{hotel.userAccount}}</a></li>\n      <li><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n      <li>{{student.firstName}} {{student.lastName}}</li>\n      <li class=\"active\">{{recommender.firstName}} {{recommender.lastName}}\n      </li>\n  </ol>\n\n  <div class=\"container-fluid\">\n    <div class=\"row content\">\n      <div class=\"col-sm-3 sidenav\">\n      <h4>{{hotel.userAccount}}  </h4>\n      <ul class=\"nav nav-pills nav-stacked\">\n        <li ><a (click)=\"main(hotel)\">Home-{{hotel.userAccount}}</a></li>\n        <li ><a (click)=\"modifyP(hotel)\">Change Password</a></li>\n        <li><a (click)=\"comp(hotel)\">Complete info</a></li>\n        <li class=\"active\"><a (click)=\"hotelman(hotel)\">Manage Student</a></li>\n        <li><a (click)=\"hmorder(hotel)\">????????????</a></li>\n        <li><a (click)=\"hmregister(hotel)\">????????????</a></li>\n        <li ><a (click)=\"hmblog(hotel)\">Blog??????</a></li>\n      </ul><br>\n      \n      </div>\n    \n      <div class=\"col-sm-9\">\n        <h2>{{student.firstName}} {{student.lastName}}</h2>\n      <p>{{student.userAccount}}</p>\n\n      <hr>\n      ?????????????????????{{recommender.firstName}} {{recommender.lastName}} \n      <br>\n      ???????????????????????????{{recommender.relation}}\n      <br>\n      <b>?????????????????????????????????????????????????????????????????????</b>\n\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\" colspan=\"7\"><h3>\n              ???????????????????????????????????????\n              <small class=\"text-muted\">{{schools.length}}</small>\n            </h3></th>\n            \n          </tr>\n        </thead>\n        <thead>\n          <tr>\n            <th scope=\"col\" style=\"width:80px\">States</th>\n            <th scope=\"col\" style=\"width:200px\">University</th>\n            <th scope=\"col\" style=\"width:200px\">School</th>\n            <th scope=\"col\" style=\"width:200px\">Major</th>\n            <th scope=\"col\" style=\"width:90px\">Deadline 1</th>\n            <th scope=\"col\" style=\"width:90px\">Deadline 2</th>\n            <th scope=\"col\" style=\"width:90px\">Deadline 3</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"schools.length > 0\">\n          <tr class=\"table-dark\"  *ngFor=\"let s of schools\">\n            <th scope=\"row\">{{s.state}}</th>\n            <td>{{s.univName}}</td>\n            <td>{{s.schoolName}}</td>\n            <td>{{s.majorName}}</td>\n            <td>{{s.ddl1}}</td>\n            <td>{{s.ddl2}}</td>\n            <td>{{s.ddl3}}</td>\n          </tr>\n\n        </tbody>\n      </table>\n\n\n      </div>\n    </div>\n  </div>\n  \n  \n\n  "

/***/ }),

/***/ "./src/app/hmstudentrec/hmstudentrec.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/hmstudentrec/hmstudentrec.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 4000px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG1zdHVkZW50cmVjL2htc3R1ZGVudHJlYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBQTtBQUNBO0VBQWMsY0FBYyxFQUFBO0FBRTVCLDhDQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9obXN0dWRlbnRyZWMvaG1zdHVkZW50cmVjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7aGVpZ2h0OiA0MDAwcHh9XG4gICAgXG4vKiBTZXQgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCAxMDAlIGhlaWdodCAqL1xuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLyogT24gc21hbGwgc2NyZWVucywgc2V0IGhlaWdodCB0byAnYXV0bycgZm9yIHNpZGVuYXYgYW5kIGdyaWQgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAucm93LmNvbnRlbnQge2hlaWdodDogYXV0bzt9IFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/hmstudentrec/hmstudentrec.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hmstudentrec/hmstudentrec.component.ts ***!
  \********************************************************/
/*! exports provided: HmstudentrecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmstudentrecComponent", function() { return HmstudentrecComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _notif_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notif.service */ "./src/app/notif.service.ts");






var HmstudentrecComponent = /** @class */ (function () {
    function HmstudentrecComponent(route, router, http, notifService, hmService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.http = http;
        this.notifService = notifService;
        this.hmService = hmService;
        this.students = []; //all the orders from database
        this.hotels = [];
        //school ??????
        this.schools = [];
        this.recommenders = [];
        //???????????????
        this.recomletters = [];
        this.route.queryParams.subscribe(function (params) {
            _this.managerID = params["managerID"];
            _this.studentID = params["studentID"];
            _this.recommenderID = params["recommenderID"];
        });
        console.log("????????? ID ???+" + this.recommenderID);
    }
    HmstudentrecComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (Data) {
            _this.hotels = Data.hotels;
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.managerID) {
                    _this.hotel = h;
                    _this.name = _this.hotel.name;
                    _this.location = _this.hotel.location;
                    _this.phone = _this.hotel.phone;
                    _this.price = _this.hotel.price;
                    console.log("???????????????");
                    console.log(_this.hotel);
                }
            }
        });
        //?????? ??????????????????
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h._id === _this.studentID) {
                    _this.student = h;
                    //this.Sname=this.student.name;
                    //this.Slocation = this.student.location;
                    console.log("Student Personal Information");
                    console.log(_this.student);
                }
            }
        });
        //?????? ????????? ?????????????????????
        this.http.get('/api/recommenders').subscribe(function (Data) {
            _this.recommenders = Data.recommenders;
            for (var _i = 0, _a = _this.recommenders; _i < _a.length; _i++) {
                var r = _a[_i];
                if (r._id === _this.recommenderID) {
                    _this.recommender = r;
                    //this.Sname=this.student.name;
                    //this.Slocation = this.student.location;
                    console.log("????????? Personal Information");
                    console.log(_this.recommender);
                }
            }
        });
        //?????? ????????????????????????????????????
        this.http.get('/api/recomletters').subscribe(function (Data) {
            for (var _i = 0, _a = Data.recomletters; _i < _a.length; _i++) {
                var rl = _a[_i];
                if (rl.recommender === _this.recommenderID) {
                    _this.recomletters.push(rl);
                }
            }
            console.log("???????????????");
            console.log(_this.recomletters);
        });
        //?????? ????????? ????????????
        this.http.get('/api/studentschooldetail/' + this.studentID).subscribe(function (orderData) {
            console.log("??????????????????");
            console.log(orderData.schools);
            for (var _i = 0, _a = orderData.schools; _i < _a.length; _i++) {
                var os = _a[_i];
                for (var _b = 0, _c = _this.recomletters; _b < _c.length; _b++) {
                    var rl = _c[_b];
                    if (rl.schoolID === os._id) {
                        os.state = rl.state;
                        _this.schools.push(os);
                    }
                }
            }
            console.log("???????????????");
            console.log(_this.schools);
        });
        this.hotelMSub = this.hmService.getHotelMUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    //??????????????????
    HmstudentrecComponent.prototype.deleteE = function (e) {
        console.log(e._id);
        this.http.delete('/api/education/' + e._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    //??????????????????
    HmstudentrecComponent.prototype.deleteEx = function (ex) {
        console.log(ex._id);
        this.http.delete('/api/experience/' + ex._id).subscribe(function (oooData) {
            window.location.reload();
        });
    };
    //direct to the hotel manage page
    HmstudentrecComponent.prototype.hotelman = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmanage'], navigationExtras);
    };
    //direct to the modify password page
    HmstudentrecComponent.prototype.modifyP = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmodifypass'], navigationExtras);
    };
    //direct to the complete information page
    HmstudentrecComponent.prototype.comp = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmcomp'], navigationExtras);
    };
    //direct to the hotel manager main page
    HmstudentrecComponent.prototype.main = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmmain'], navigationExtras);
    };
    //direct to the hotel order 
    HmstudentrecComponent.prototype.hmorder = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmorder'], navigationExtras);
    };
    //direct to the register page
    HmstudentrecComponent.prototype.hmregister = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmregister'], navigationExtras);
    };
    //direct to the addschool page
    HmstudentrecComponent.prototype.hmaddschool = function (hotel, student) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
                "studentID": this.student._id,
            }
        };
        this.router.navigate(['/hmaddschool'], navigationExtras);
    };
    //direct to the school detail page
    HmstudentrecComponent.prototype.hmschooldetail = function (s) {
        var navigationExtras = {
            queryParams: {
                "managerID": this.managerID,
                "studentID": this.studentID,
                "schoolID": s._id,
            }
        };
        this.router.navigate(['/hmschool'], navigationExtras);
    };
    //direct to the blog page
    HmstudentrecComponent.prototype.hmblog = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "managerID": hotel.userAccount,
            }
        };
        this.router.navigate(['/hmblog'], navigationExtras);
    };
    HmstudentrecComponent.prototype.ngOnDestroy = function () {
        this.hotelMSub.unsubscribe();
    };
    HmstudentrecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hmstudentrec',
            template: __webpack_require__(/*! ./hmstudentrec.component.html */ "./src/app/hmstudentrec/hmstudentrec.component.html"),
            styles: [__webpack_require__(/*! ./hmstudentrec.component.scss */ "./src/app/hmstudentrec/hmstudentrec.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _notif_service__WEBPACK_IMPORTED_MODULE_5__["NotifService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_3__["HmService"]])
    ], HmstudentrecComponent);
    return HmstudentrecComponent;
}());



/***/ }),

/***/ "./src/app/honor.service.ts":
/*!**********************************!*\
  !*** ./src/app/honor.service.ts ***!
  \**********************************/
/*! exports provided: HonorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HonorService", function() { return HonorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HonorService = /** @class */ (function () {
    function HonorService(http) {
        this.http = http;
        //?????? ????????????
        this.honors = [];
        this.honorS = [];
        this.honorsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HonorService.prototype.getHonor = function () {
        var _this = this;
        this.http.get('/api/honors').subscribe(function (Data) {
            _this.honors = Data.honors;
            _this.honor = _this.honors[0];
            _this.honorsUpdated.next(_this.honors.slice());
        });
    };
    HonorService.prototype.gethonorssUpdatedListener = function () {
        return this.honorsUpdated.asObservable();
    };
    HonorService.prototype.addHonor = function (id, userAccount, //?????????id
    honorDate, prize, percentage, grantor) {
        var _this = this;
        var honor = {
            _id: null,
            userAccount: userAccount,
            honorDate: honorDate,
            prize: prize,
            percentage: percentage,
            grantor: grantor,
        };
        this.http.post('/api/honoradd', honor).subscribe(function (responseData) {
            _this.honorS.push(honor);
            _this.honorsUpdated.next(_this.honorS.slice());
        });
    };
    HonorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HonorService);
    return HonorService;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-add/hotel-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/hotel/hotel-add/hotel-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n   <meta charset=\"UTF-8\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n   <title>Booking</title>\n   <!-- Latest compiled and minified CSS -->\n   <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n       integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"/hotels\">Hotels</a>\n            </div>\n        </div>\n    </nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <h1 style=\"text-align:center\">Add Your Hotel</h1>\n        <div style=\"width:30%; margin:30px auto;\">\n            <form (submit)=\"onAddHotel(postForm)\" #postForm=\"ngForm\">\n            \n                        <div class=\"form-group\">\n                            <input class=\"form-control\" name=\"firstName\" type=\"text\" placeholder=\"firstName\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" name=\"lastName\" type=\"text\" placeholder=\"lastName\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                          <input class=\"form-control\" name=\"email\" type=\"text\" placeholder=\"email\" ngModel>\n                        </div>\n                        <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"phone\" type=\"text\" placeholder=\"phone\" ngModel>\n                        </div>\n                <div class=\"form-group\">\n                    <input class=\"form-control\" name=\"name\" type=\"text\" placeholder=\"hotel name\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <input class=\"form-control\" name=\"location\" type=\"text\" placeholder=\"location\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" name=\"image\" type=\"text\" placeholder=\"image\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                        <input class=\"form-control\" name=\"price\" type=\"text\" placeholder=\"price\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-lg btn-primary btn-block\">Add Hotel</button>\n                </div>\n            </form>\n            <a href=\"/hotels\">Go Back</a>\n        </div>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/hotel/hotel-add/hotel-add.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/hotel/hotel-add/hotel-add.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsL2hvdGVsLWFkZC9ob3RlbC1hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/hotel/hotel-add/hotel-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hotel/hotel-add/hotel-add.component.ts ***!
  \********************************************************/
/*! exports provided: HotelAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelAddComponent", function() { return HotelAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../hotel.service */ "./src/app/hotel/hotel.service.ts");



var HotelAddComponent = /** @class */ (function () {
    function HotelAddComponent(hotelService) {
        this.hotelService = hotelService;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
        this.name = "";
        this.location = "";
        this.image = "";
        this.price = "";
    }
    HotelAddComponent.prototype.onAddHotel = function (form) {
        this.hotelService.addHotel("", "test234@qq.com", form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.name, form.value.location, form.value.image, form.value.price);
    };
    HotelAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-add',
            template: __webpack_require__(/*! ./hotel-add.component.html */ "./src/app/hotel/hotel-add/hotel-add.component.html"),
            styles: [__webpack_require__(/*! ./hotel-add.component.scss */ "./src/app/hotel/hotel-add/hotel-add.component.scss")]
        })
        // display single hotel detail
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], HotelAddComponent);
    return HotelAddComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-book/hotel-book.component.html":
/*!************************************************************!*\
  !*** ./src/app/hotel/hotel-book/hotel-book.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Booking</title>\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n  integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">Hotels</a>\n        <a class=\"navbar-brand\">login in as {{userId}}</a>\n        <a class=\"navbar-brand\" href=\"/\">Logout</a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <h1 style=\"text-align:center\"> Book Your Hotel</h1>\n      <div style=\"width:30%; margin:30px auto;\">\n        <form (submit)=\"onAddOrder(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"firstName\" type=\"text\" placeholder=\"first name\" ngModel required>\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"lastName\" type=\"text\" placeholder=\"last name\" ngModel required>\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"email\" type=\"email\" placeholder=\"email\" ngModel required>\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\"  name=\"phone\" type=\"text\" placeholder=\"phone\" pattern=\"[0-9]{10}\" ngModel required>\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"date\" type=\"date\" placeholder=\"date\" ngModel required>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-lg btn-primary btn-block\">Book</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/hotel/hotel-book/hotel-book.component.scss":
/*!************************************************************!*\
  !*** ./src/app/hotel/hotel-book/hotel-book.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsL2hvdGVsLWJvb2svaG90ZWwtYm9vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/hotel/hotel-book/hotel-book.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel/hotel-book/hotel-book.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelBookComponent", function() { return HotelBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hotel.service */ "./src/app/hotel/hotel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HotelBookComponent = /** @class */ (function () {
    function HotelBookComponent(route, router, hotelService, http) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.hotelService = hotelService;
        this.http = http;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
        this.date = "";
        this.route.queryParams.subscribe(function (params) {
            _this.hotelId = params["hotelId"];
            _this.hotelName = params["hotelName"];
            _this.userId = params["userId"];
        });
    }
    HotelBookComponent.prototype.onAddOrder = function (form) {
        this.hotelService.addOrder(form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.date, this.hotelId, this.hotelName, this.userId);
        alert('Booking Successed');
    };
    HotelBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-hotel-book',
            template: __webpack_require__(/*! ./hotel-book.component.html */ "./src/app/hotel/hotel-book/hotel-book.component.html"),
            styles: [__webpack_require__(/*! ./hotel-book.component.scss */ "./src/app/hotel/hotel-book/hotel-book.component.scss")]
        })
        // display single hotel detail
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _hotel_service__WEBPACK_IMPORTED_MODULE_3__["HotelService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HotelBookComponent);
    return HotelBookComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-detail/hotel-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hotel/hotel-detail/hotel-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>YelpCamp</title>\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n  integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n<body>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\">Hotels</a>\n          <a class=\"navbar-brand\">login in as {{userId}}</a>\n          <a class=\"navbar-brand\" href=\"/\">Logout</a>\n        </div>\n\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <p class=\"lead\">Hotel</p>\n        <div class=\"list-group\">\n          <li class=\"list-group-item active\">INFO 1</li>\n          <li class=\"list-group-item\">INFO 2</li>\n          <li class=\"list-group-item\">INFO 3</li>\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <div class=\"thumbnail\">\n          <img class=\"img-responsive\" src=\"{{hotel.image}}\">\n          <div class=\"caption-full\">\n            <h4 class=\"pull-right\">{{hotel.price}}/night</h4>\n            <h4>{{hotel.name}}</h4>\n            <h4>{{hotel.location}}</h4>\n\n            <!-- <a class=\"btn btn-info\" href=\"/hotelbook\">Book</a> -->\n            <button class=\"btn btn-info\" (click)=\"bookHotel(hotel)\">Book</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/hotel/hotel-detail/hotel-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/hotel/hotel-detail/hotel-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail img {\n  width: 100%; }\n\n/* select caption-full class under thumbnail, space in btw!!! */\n\n.thumbnail .caption-full {\n  padding: 9px; }\n\n.thumbnail {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG90ZWwvaG90ZWwtZGV0YWlsL2hvdGVsLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVksRUFBQTs7QUFFZCwrREFBQTs7QUFDQTtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvdGVsL2hvdGVsLWRldGFpbC9ob3RlbC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoIDogMTAwJTtcbn1cbi8qIHNlbGVjdCBjYXB0aW9uLWZ1bGwgY2xhc3MgdW5kZXIgdGh1bWJuYWlsLCBzcGFjZSBpbiBidHchISEgKi9cbi50aHVtYm5haWwgLmNhcHRpb24tZnVsbHtcbiAgcGFkZGluZzogOXB4O1xufVxuLnRodW1ibmFpbHtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hotel/hotel-detail/hotel-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hotel/hotel-detail/hotel-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailComponent", function() { return HotelDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../hotel.service */ "./src/app/hotel/hotel.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HotelDetailComponent = /** @class */ (function () {
    function HotelDetailComponent(route, router, hotelService, http) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.hotelService = hotelService;
        this.http = http;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(function (params) {
            _this.hotelId = params["hotelId"];
            _this.userId = params["userId"];
        });
    }
    HotelDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/hoteldetail/' + this.hotelId).subscribe(function (hotelData) {
            console.log(hotelData.hotels);
            _this.hotel = hotelData.hotels;
            // console.log(this.hotel.name);
        });
    };
    HotelDetailComponent.prototype.bookHotel = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "hotelId": hotel._id,
                "hotelName": hotel.name,
                "userId": this.userId
            }
        };
        this.router.navigate(['/hotelbook'], navigationExtras);
    };
    HotelDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-hotel-detail',
            template: __webpack_require__(/*! ./hotel-detail.component.html */ "./src/app/hotel/hotel-detail/hotel-detail.component.html"),
            styles: [__webpack_require__(/*! ./hotel-detail.component.scss */ "./src/app/hotel/hotel-detail/hotel-detail.component.scss")]
        })
        // display single hotel detail
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HotelDetailComponent);
    return HotelDetailComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel-view/hotel-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/hotel/hotel-view/hotel-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>YelpCamp</title>\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n  integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n</head>\n\n<body>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">Hotels</a>\n        <a class=\"navbar-brand\">login in as {{userId}}</a>\n        <a class=\"navbar-brand\" (click)=\"viewOrder()\">View Orders</a>\n        <a class=\"navbar-brand\" href=\"/\">Logout</a>\n      </div>\n    </div>\n  </nav>\n  <header class=\"jumbotron\">\n    <div class=\"container\">\n      <h1>View Our Hotel Selection</h1>\n      <p>Search For Hotel</p>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <form (submit)=\"onSearch(postForm)\" id=\"search-form\" #postForm=\"ngForm\">\n              <div class=\"col-lg-3 col-md-3 col-sm-12 p-0\">\n                <input type=\"text\" class=\"form-control search-slt\" placeholder=\"Search By Name\" name=\"searchName\" ngModel/>\n              </div>\n              <button class=\"btn btn-danger wrn-btn\">Submit</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h3> View Our Hotel Selection</h3>\n    </div>\n  </div>\n  <div class=\"row text-center\" style=\"display:flex; flex-wrap: wrap;\">\n    <div *ngIf=\"hotels.length > 0\">\n      <div  *ngFor=\"let hotel of hotels\">\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"thumbnail\">\n            <img src=\"{{hotel.image}}\">\n            <div class=\"caption\">\n              <h4>{{hotel.name}}</h4>\n            </div>\n            <p>\n              <button class=\"btn btn-primary\" (click)=\"hotelDetail(hotel)\">More Info</button>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/hotel/hotel-view/hotel-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/hotel/hotel-view/hotel-view.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-large {\n  float: right; }\n\n.thumbnail img {\n  width: 100%; }\n\n.thumbnail .caption-full {\n  padding: 9px; }\n\n.thumbnail {\n  padding: 0; }\n\n.form-control {\n  height: auto;\n  margin-bottom: 20px; }\n\n#search-form {\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG90ZWwvaG90ZWwtdmlldy9ob3RlbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvdGVsL2hvdGVsLXZpZXcvaG90ZWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbGFyZ2V7XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG4udGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGh1bWJuYWlsIC5jYXB0aW9uLWZ1bGx7XG4gIHBhZGRpbmc6IDlweDtcbn1cblxuLnRodW1ibmFpbHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgaGVpZ2h0OmF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzZWFyY2gtZm9ybXtcbiAgZGlzcGxheTppbmxpbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hotel/hotel-view/hotel-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel/hotel-view/hotel-view.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelViewComponent", function() { return HotelViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hotel.service */ "./src/app/hotel/hotel.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HotelViewComponent = /** @class */ (function () {
    function HotelViewComponent(route, router, hotelService, http) {
        this.route = route;
        this.router = router;
        this.hotelService = hotelService;
        this.http = http;
        // title = 'Hotel View';
        this.hotels = [];
    }
    HotelViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelService.getHotels();
        this.hotelsSub = this.hotelService.getHotelsUpdatedListener().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
        this.route.queryParams.subscribe(function (params) {
            _this.userId = params["userId"];
        });
    };
    HotelViewComponent.prototype.onSearch = function (form) {
        var _this = this;
        var searchName = form.value.searchName;
        console.log(searchName);
        this.http.get('/api/hotelsearch/' + searchName).subscribe(function (hotelData) {
            console.log(hotelData);
            _this.hotels = hotelData.hotels;
        });
    };
    HotelViewComponent.prototype.hotelDetail = function (hotel) {
        var navigationExtras = {
            queryParams: {
                "hotelId": hotel._id,
                "userId": this.userId,
            }
        };
        this.router.navigate(['/hoteldetail'], navigationExtras);
    };
    HotelViewComponent.prototype.viewOrder = function () {
        var navigationExtras = {
            queryParams: {
                "userId": this.userId
            }
        };
        this.router.navigate(['/vieworder'], navigationExtras);
    };
    HotelViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-hotel-view',
            template: __webpack_require__(/*! ./hotel-view.component.html */ "./src/app/hotel/hotel-view/hotel-view.component.html"),
            styles: [__webpack_require__(/*! ./hotel-view.component.scss */ "./src/app/hotel/hotel-view/hotel-view.component.scss")]
        })
        //display all hotels
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _hotel_service__WEBPACK_IMPORTED_MODULE_3__["HotelService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HotelViewComponent);
    return HotelViewComponent;
}());



/***/ }),

/***/ "./src/app/hotel/hotel.service.ts":
/*!****************************************!*\
  !*** ./src/app/hotel/hotel.service.ts ***!
  \****************************************/
/*! exports provided: HotelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function() { return HotelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
        this.hotels = [];
        this.orders = [];
        this.hotelsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.orderUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.hotelM = [];
        this.hotelMUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.hotelUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HotelService.prototype.getHotels = function () {
        var _this = this;
        this.http.get('/api/hotels').subscribe(function (hotelData) {
            console.log(hotelData);
            _this.hotels = hotelData.hotels;
            _this.hotelsUpdated.next(_this.hotels.slice());
        });
    };
    HotelService.prototype.getHotelsUpdatedListener = function () {
        return this.hotelsUpdated.asObservable();
    };
    HotelService.prototype.getOrdersUpdatedListener = function () {
        return this.orderUpdated.asObservable();
    };
    // addHotel(name: string, location: string, image: string, price: string){
    //   const hotel: Hotel = {
    //     id: null,
    //     name: name,
    //     location: location,
    //     image: image,
    //     price: price
    //   };
    //   this.http.post('/api/hoteladd', hotel).subscribe((responseData) =>{
    //       this.hotels.push(hotel);
    //       this.hotelsUpdated.next([...this.hotels]);
    //   });
    // }
    // addHotel(
    //   id: string,
    //   userAccount:String,
    //   firstName: String,
    //   lastName: String,
    //   email: String,
    //   phone: String,
    //   name: String,
    //   location: String,
    //   image: String,
    //   price: String,
    // ){
    //   const hotel: HotelM = {
    HotelService.prototype.getHotelUpdatedListener = function () {
        return this.hotelUpdated.asObservable();
    };
    HotelService.prototype.addHotel = function (id, userAccount, firstName, lastName, email, phone, name, location, image, price) {
        var _this = this;
        var hotel = {
            _id: null,
            userAccount: userAccount,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            name: name,
            location: location,
            image: image,
            price: price
        };
        this.http.post('/api/hoteladd', hotel).subscribe(function (responseData) {
            _this.hotelM.push(hotel);
            _this.hotelMUpdated.next(_this.hotelM.slice());
        });
    };
    HotelService.prototype.addOrder = function (firstName, lastName, email, phone, date, hotelId, hotelName, userId) {
        var _this = this;
        var order = {
            id: null,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            date: date,
            hotelId: hotelId,
            hotelName: hotelName,
            userId: userId
        };
        this.http.post('/api/hotelbook', order).subscribe(function (responseData) {
            _this.orders.push(order);
            _this.orderUpdated.next(_this.orders.slice());
        });
    };
    HotelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/app/hotel/order-view/order-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/hotel/order-view/order-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Order</title>\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n</head>\n<body>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand\">Hotels</a>\n            <a class=\"navbar-brand\">login in as {{userId}}</a>\n            <a class=\"navbar-brand\" href=\"/\">Logout</a>\n          </div>\n        </div>\n      </nav>\n  <h1> Your Booking </h1>\n  <div id=\"accordion\" class=\"accordion\">\n    <div *ngIf=\"orders.length > 0\">\n      <div *ngFor=\"let order of orders\">\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingOne\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Hotel Name : {{order.hotelName}}\n              </button>\n            </h5>\n          </div>\n\n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n            <div class=\"card-body\">\n              <li>Date : {{order.date}}</li>\n              <li>First Name : {{order.firstName}} </li>\n              <li>Last Name : {{order.lastName}}</li>\n              <li>Contact Phone : {{order.phone}}</li>\n              <li>User Account : {{order.userId}}</li>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/hotel/order-view/order-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/hotel/order-view/order-view.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordion {\n  width: 80%;\n  margin: auto;\n  margin-top: 10px; }\n\nh1 {\n  margin-left: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvaG90ZWwvb3JkZXItdmlldy9vcmRlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvdGVsL29yZGVyLXZpZXcvb3JkZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmgxe1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hotel/order-view/order-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel/order-view/order-view.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hotel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../hotel.service */ "./src/app/hotel/hotel.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var OrderViewComponent = /** @class */ (function () {
    function OrderViewComponent(route, router, hotelService, http) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.hotelService = hotelService;
        this.http = http;
        this.orders = [];
        this.route.queryParams.subscribe(function (params) {
            _this.userId = params["userId"];
        });
    }
    OrderViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/vieworder/' + this.userId).subscribe(function (orderData) {
            console.log(orderData);
            _this.orders = orderData.orders;
        });
    };
    OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-order-view',
            template: __webpack_require__(/*! ./order-view.component.html */ "./src/app/hotel/order-view/order-view.component.html"),
            styles: [__webpack_require__(/*! ./order-view.component.scss */ "./src/app/hotel/order-view/order-view.component.scss")]
        })
        //display all hotels
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _hotel_service__WEBPACK_IMPORTED_MODULE_3__["HotelService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderViewComponent);
    return OrderViewComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Join us today!</h1>\n</div>\n<div class=\"EntirePage\">\n  <div id=\"register\">\n    <button id=\"register-button1\" class=\"btn btn-primary\" routerLink=\"/mainpage\" (click)=\"setdefault()\">Back to home page</button>\n    <button id=\"tutorial-button\" class=\"btn btn-primary\" (click)='tutorialmessage()'>Tutorial</button>\n    <div class=\"divtitle\">\n      <h1>I am a new user, create a new account</h1>\n      <div class=\"divcontent\">\n        <p>Create user account:</p>\n        <input type=\"text\" class=\"infoinput\" id=\"user-account\" placeholder=\"e.g. abc@cde.com\"  style=\"width: 385px\">\n        <p>Create password:</p>\n        <input type=\"password\" class=\"infoinput\" id=\"user-password\" placeholder=\"e.g. abc1234cc\"  style=\"width: 385px\">\n        <p>Confirm password:</p>\n        <input type=\"password\" class=\"infoinput\" id=\"confirm-password\" style=\"width: 385px\">\n        <p>I am a:</p>\n        <span class=\"hint\" id=\"hint4\">??????</span><label class=\"btn btn-primary\">\n          <input type=\"radio\" name=\"options\" id=\"option-traveller\" value=\"travler\"> traveller \n        </label>\n        <label class=\"btn btn-primary\">\n          <input type=\"radio\" name=\"options\" id=\"option-manager\" value=\"manager\">  hotel manager \n        </label>  \n    </div>\n  </div>\n  <button id=\"join-button1\" class=\"btn btn-primary\" (click)=\"check()\">Join now!</button>\n  </div>\n  <div id=\"login\">\n    <div class=\"divtitle\">\n      <h1>I already had an account, log in here!</h1>\n      <div class=\"divcontent\">\n          <p>User account:</p>\n          <input type=\"text\" class=\"infoinput\" id=\"login-user-account\" style=\"width: 385px\">\n          <p>Please enter your password:</p>\n          <input type=\"password\" class=\"infoinput\" id=\"login-user-password\" style=\"width: 385px\"><br/><br/>\n          <button id=\"login-button1\" class=\"btn btn-primary\" (click)=\"checklogin()\" (click)=\"setdefault()\">Let's get it started!</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <p>Author: Yanfei Peng, Mingchang Chen, Haozheng Yi, Enshu Shang. 2019, Apr.</p>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 70px;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  padding-left: 15px;\n  padding-right: 15px;\n  background-color: gray;\n  text-align: center;\n  padding-top: 1px;\n  position: fixed;\n  top: 0px; }\n\n.footer {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  padding-left: 15px;\n  padding-right: 15px;\n  background-color: gray;\n  text-align: center;\n  padding-top: 15px; }\n\n.EntirePage {\n  border-left: solid;\n  border-right: solid;\n  border-color: gray;\n  border-width: 2px;\n  margin-left: 10%;\n  margin-right: 10%;\n  height: 787px;\n  width: 80%; }\n\n#register {\n  width: 50%;\n  height: 787px;\n  border-right: solid;\n  border-width: 1px;\n  border-color: gray;\n  float: left; }\n\n#register-button1 {\n  position: absolute;\n  top: 70px;\n  left: 10.1%; }\n\n.divtitle {\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 140px;\n  text-align: center;\n  font-size: 25px; }\n\n#join-button1 {\n  position: relative;\n  top: 32px;\n  right: -50%; }\n\n#login {\n  width: 50%;\n  height: 600px;\n  float: left; }\n\n.hint {\n  position: relative;\n  left: -3px;\n  display: none; }\n\n#tutorial-button {\n  position: absolute;\n  top: 104px;\n  left: 10.1%; }\n\n.infoinput {\n  border-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZUFBZTtFQUNmLFFBQU8sRUFBQTs7QUFHWDtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFZO0VBQ1osVUFBUyxFQUFBOztBQUdiO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFHZjtFQUNJLFVBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsV0FBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIGhlaWdodDo3MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6MXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MHB4O1xufVxuXG4uZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xufVxuXG4uRW50aXJlUGFnZSB7XG4gICAgYm9yZGVyLWxlZnQgOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIGhlaWdodDo3ODdweDtcbiAgICB3aWR0aDo4MCU7XG59XG5cbiNyZWdpc3RlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDc4N3B4O1xuICAgIGJvcmRlci1yaWdodDogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jcmVnaXN0ZXItYnV0dG9uMXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3MHB4O1xuICAgIGxlZnQ6IDEwLjElO1xufVxuXG4uZGl2dGl0bGUge1xuICAgIHdpZHRoOjgwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIG1hcmdpbi10b3A6MTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuI2pvaW4tYnV0dG9uMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDozMnB4O1xuICAgIHJpZ2h0Oi01MCU7XG59XG5cbiNsb2dpbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGludCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0zcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3R1dG9yaWFsLWJ1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDRweDtcbiAgICBsZWZ0OiAxMC4xJTtcbn1cblxuLmluZm9pbnB1dHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");






var LoginComponent = /** @class */ (function () {
    // private usersSub: Subscription;
    function LoginComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
    }
    LoginComponent.prototype.tutorialmessage = function () {
        alert("Your user account should be in email form and your password should contain numbers and alphabets.");
    };
    //When leave this page, set all elements to default value
    LoginComponent.prototype.setdefault = function () {
        document.getElementById("hint4").style.display = "none";
        document.getElementById("option-traveller").checked = false;
        document.getElementById("option-manager").checked = false;
        document.getElementById("user-password").value = null;
        document.getElementById("user-account").value = null;
        document.getElementById("confirm-password").value = null;
        document.getElementById("user-password").style.borderColor = "black";
        document.getElementById("user-account").style.borderColor = "black";
        document.getElementById("confirm-password").style.borderColor = "black";
    };
    LoginComponent.prototype.check = function () {
        this.ngOnInit();
        this.user = this.user;
        //Getting value from HTML element
        var temp0 = document.getElementById("user-account").value;
        var temp1 = document.getElementById("user-password").value;
        var temp2 = document.getElementById("confirm-password").value;
        var temp3 = document.getElementById("option-traveller");
        var temp4 = document.getElementById("option-manager");
        var temp8 = document.getElementById("hint4");
        var re1 = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"); //Regex for user account
        var re2 = new RegExp("^[a-zA-Z0-9-]+$");
        //Check if there are empty fields
        if (temp0 == "" || temp1 == "" || temp2 == "") {
            document.getElementById("user-account").style.borderColor = "red";
            document.getElementById("user-password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "red";
            temp8.style.display = "inline-block";
            temp3.checked = false;
            temp4.checked = false;
            alert("Please enter all fields.");
            return;
        }
        //Check have user chosen any role
        if (temp3.checked == false && temp4.checked == false) {
            document.getElementById("user-account").style.borderColor = "black";
            document.getElementById("user-password").style.borderColor = "black";
            document.getElementById("confirm-password").style.borderColor = "black";
            temp8.style.display = "inline-block";
            alert("Please choose a role.");
            return;
        }
        //Check if two passwords are the same
        if (temp1 != temp2) {
            document.getElementById("user-password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "red";
            temp8.style.display = "none";
            document.getElementById("user-account").style.borderColor = "black";
            document.getElementById("user-password").value = null;
            document.getElementById("confirm-password").value = null;
            alert("Two passwords should be the same.");
            return;
        }
        //Check user account regex
        if (!temp0.match(re1)) {
            alert("Your user account should be in email form.");
            document.getElementById("user-account").style.borderColor = "red";
            document.getElementById("user-password").style.borderColor = "black";
            document.getElementById("confirm-password").style.borderColor = "black";
            temp8.style.display = "none";
            return;
        }
        //Check password regex
        if (!temp1.match(re2)) {
            alert("Your password should contain numbers and alphabets.");
            document.getElementById("user-account").style.borderColor = "black";
            document.getElementById("user-password").style.borderColor = "red";
            document.getElementById("confirm-password").style.borderColor = "black";
            temp8.style.display = "none";
            return;
        }
        //If all field are success, check if the account already exist
        else {
            //this.ngOnInit();
            for (var indexc = 0; indexc < this.user.length; indexc++) {
                if (temp0 == this.user[indexc].UserAccount) {
                    alert("This account has already been registered.");
                    document.getElementById("user-password").value = null;
                    document.getElementById("user-account").value = null;
                    document.getElementById("confirm-password").value = null;
                    document.getElementById("user-account").style.borderColor = "red";
                    document.getElementById("confirm-password").style.borderColor = "black";
                    document.getElementById("user-password").style.borderColor = "black";
                    temp8.style.display = "none";
                    temp3.checked = false;
                    temp4.checked = false;
                    return;
                }
                else {
                    continue;
                }
            }
            if (indexc == this.user.length) {
                var temp16 = void 0;
                if (temp3.checked == true) {
                    temp16 = "traveller";
                }
                if (temp4.checked == true) {
                    temp16 = "manager";
                    //create one resp in hotels database
                    console.log(temp0);
                    this.hmService.addHotel("", temp0, "", "", "", "", "", "", "", "");
                }
                document.getElementById("user-account").style.borderColor = "black";
                document.getElementById("user-password").style.borderColor = "black";
                document.getElementById("confirm-password").style.borderColor = "black";
                temp8.style.display = "none";
                alert("Seccuss!!");
                document.getElementById("user-password").value = null;
                document.getElementById("user-account").value = null;
                document.getElementById("confirm-password").value = null;
                temp3.checked = false;
                temp4.checked = false;
                this.userService.addUser(temp0, temp1, temp16);
                //this.ngOnInit();
                window.location.reload();
            }
        }
    };
    LoginComponent.prototype.checklogin = function () {
        this.ngOnInit();
        this.user = this.user;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "traveller") {
                            alert("Welcome " + this.user[index].Role + "!");
                            // this.user.length = this.user.length+1;
                            var NavigationExtras = {
                                queryParams: {
                                    "userId": this.user[index].UserAccount,
                                }
                            };
                            // window.open("/hotels","_self");
                            this.router.navigate(['/hotels'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainblog/mainblog.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainblog/mainblog.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n  <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 col-md-7 py-4\">\n          <br>\n          <h4 class=\"text-white\">Michi Academy </h4>\n          <p class=\"text-muted\">????????????????????????</p>\n          <br>\n\n\n        </div>\n        <div class=\"col-sm-4 offset-md-1 py-4\">\n          <br>\n          <form class=\"user\" >\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control form-control-user\"\n                id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                    placeholder=\"Enter Email Address...\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control form-control-user\"\n                id=\"login-user-password\" placeholder=\"Password\">\n            </div>\n          </form>\n          <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n          <br>\n          <br>\n        </div>\n      </div>\n    </div>\n  </div>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>                        \n            </button>\n            <a class=\"navbar-brand\">\n                <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n            </a>\n                \n\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a (click)=\"main()\">????????????</a></li>\n              <li><a (click)=\"class()\" >????????????</a></li>\n              <li><a  (click)=\"abroad()\">????????????</a></li>\n              <li><a (click)=\"blog()\">Blog</a></li>\n              <li>\n                <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    ????????????\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n\n    </nav>\n    \n\n    <!-- Container (?????? Section) -->\n    <section class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Michi Blog</h1>\n        <p class=\"lead text-muted\">????????????????????????????????????????????????</p>\n        <p>\n         \n        </p>\n      </div>\n    </section>\n\n\n    <!-- Container (Blog Section) -->\n    <div class=\"album py-5 bg-light\">\n      <div class=\"container\">\n\n        <div class=\"row\" *ngIf=\"blogs.length > 0\">\n          <div class=\"col-md-4\" *ngFor=\"let b of blogs\">\n            <div class=\"card mb-4 box-shadow\">\n              <img class=\"card-img-top\" src=\"{{b.blogPicture}}\" alt=\"Card image cap\" style=\"width: 100%;\" >\n              <div class=\"card-body\">\n                <h4>{{b.blogTitle}}</h4>\n                <p class=\"card-text\">{{b.blogSubtitle}}</p>\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"col-md-12 column\">\n                    <div class=\"row clearfix\">\n                      <div class=\"col-md-4 column\">\n                         <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\"> <a href=\"{{b.blogLink}}\">??????</a> </button>\n                      </div>\n                      <div class=\"col-md-8 column\">\n                        <span class=\"glyphicon glyphicon-time\"></span> Post by Yuxin, {{b.blogTime}}\n                      </div>\n                    </div>\n                    <br>\n                  </div>   \n                </div>\n              </div>\n            </div>\n           \n          \n          </div>\n\n        </div>\n        <br>\n      </div>\n    </div>\n    <br>\n\n\n\n\n\n\n\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/mainblog/mainblog.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mainblog/mainblog.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvbWFpbmJsb2cvbWFpbmJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsMkNBQXdDLEVBQUE7O0FBRTFDO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUMsRUFBQTs7QUFFckM7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUVoQjtFQUFZLGtCQUFpQixFQUFBOztBQUM3QjtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUc3QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQyxFQUFBLEVBQUE7O0FBR3JDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsV0FBVztJQUNYLG1CQUFtQixFQUFBLEVBQ3BCOztBQUVIO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21haW5ibG9nL21haW5ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH0gXG5cbiAgLmp1bWJvdHJvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMDBweCAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgfVxuICAuYmctZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgfVxuICAubG9nby1zbWFsbCB7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIC5sb2dvIHtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgICBmb250LXNpemU6IDIwMHB4O1xuICB9XG4gIC50aHVtYm5haWwge1xuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gICAgYm9yZGVyOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAudGh1bWJuYWlsIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaXRlbSBoNCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbjogNzBweCAwO1xuICB9XG4gIC5pdGVtIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICAucGFuZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7IFxuICAgIGJvcmRlci1yYWRpdXM6MCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgfVxuICAucGFuZWw6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDVweCAwcHggNDBweCByZ2JhKDAsMCwwLCAuMik7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDIzNTFGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgfVxuICAucGFuZWwtaGVhZGluZyB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhbmVsLWZvb3RlciBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuICAuc2xpZGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3R0b206IDFweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xufVxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAyMzUxRjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbn1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLXNtLTQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgfVxuICAgIC5idG4tbGcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/mainblog/mainblog.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainblog/mainblog.component.ts ***!
  \************************************************/
/*! exports provided: MainblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainblogComponent", function() { return MainblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");






var MainblogComponent = /** @class */ (function () {
    function MainblogComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
        this.blogs = [];
    }
    MainblogComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                console.log(_this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    MainblogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
        //??????Blog ????????????
        this.http.get('/api/blogs').subscribe(function (Data) {
            //this.blogs = Data.blogs;
            for (var i = Data.blogs.length - 1; i >= 0; i--) {
                _this.blogs.push(Data.blogs[i]);
            }
            console.log(_this.blogs);
        });
    };
    MainblogComponent.prototype.main = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainpage'], navigationExtras);
    };
    MainblogComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    MainblogComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    MainblogComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    MainblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainblog',
            template: __webpack_require__(/*! ./mainblog.component.html */ "./src/app/mainblog/mainblog.component.html"),
            styles: [__webpack_require__(/*! ./mainblog.component.scss */ "./src/app/mainblog/mainblog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MainblogComponent);
    return MainblogComponent;
}());



/***/ }),

/***/ "./src/app/mainclass/mainclass.component.html":
/*!****************************************************!*\
  !*** ./src/app/mainclass/mainclass.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <br>\n              <h4 class=\"text-white\">Michi Academy </h4>\n              <p class=\"text-muted\">????????????????????????</p>\n              <br>\n    \n    \n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <br>\n              <form class=\"user\" >\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\"\n                    id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter Email Address...\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"\n                    id=\"login-user-password\" placeholder=\"Password\">\n                </div>\n              </form>\n              <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\">\n                    <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n                </a>\n                    \n    \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a (click)=\"main()\">????????????</a></li>\n                  <li><a (click)=\"class()\" >????????????</a></li>\n                  <li><a (click)=\"abroad()\" >????????????</a></li>\n                  <li><a (click)=\"blog()\">Blog</a></li>\n                  <li>\n                    <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        ????????????\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n    \n        </nav>\n\n\n    <!-- Container (?????? Section) -->\n      <div class=\"container\" style=\"width: 100%;\">\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\" >\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\" ></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\" ></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\" ></li>\n          </ol>\n      \n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner\">\n      \n            <div class=\"item active\">\n              <img src=\"https://i.ibb.co/nR2KzLc/B1.png\" alt=\"Los Angeles\" style=\"width:100%;\">\n              <div class=\"carousel-caption\">\n                \n              </div>\n            </div>\n      \n            <div class=\"item\">\n              <img src=\"https://i.ibb.co/54hNVJ3/B2.png\" alt=\"Chicago\" style=\"width:100%;\">\n              <div class=\"carousel-caption\">\n               \n              </div>\n            </div>\n          \n            <div class=\"item\">\n              <img src=\"https://i.ibb.co/1TJQbXs/B3.png\" alt=\"New York\" style=\"width:100%;\">\n              <div class=\"carousel-caption\">\n                \n              </div>\n            </div>\n        \n          </div>\n      \n          <!-- Left and right controls -->\n          <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\" style=\"color: white;\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\" style=\"color: white;\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n\n    <!-- Container (Blog Section) -->\n    <div class=\"container-fluid\" >\n        <div class=\"section-title\">\n            <br>\n            <h2>????????????????????????</h2>         \n            <br>\n            <h4>\n            </h4>\n          </div>\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <div class=\"caption\">  \n                    <h4>\n                        Michi Academy???5????????????????????????????????????99%??????????????????????????????????????????\n                    </h4>\n                    <p>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Container (???????????? Section) -->\n  <div id=\"courses\" class=\"container-fluid\">\n    <div class=\"section-title\">\n        <br>\n        <h2>????????????</h2>         \n        <br>\n        <h4>\n        </h4>\n      </div>\n      <div class=\"container\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-3 column\">\n                        <img  src=\"https://i.ibb.co/vxmNnfH/Wechat-IMG3.jpg\"  class=\"img-thumbnail\" style=\"width: 100%;\" />\n                    </div>\n                    <div class=\"col-md-3 column\">\n                        <img src=\"https://i.ibb.co/fDc2HCH/Wechat-IMG7.jpg\"  class=\"img-thumbnail\" style=\"width: 100%;\"/>\n                    </div>\n                    <div class=\"col-md-3 column\">\n                        <img  src=\"https://i.ibb.co/GQTdV6T/Wechat-IMG5.png\"   class=\"img-thumbnail\" style=\"width: 100%;\" />\n                    </div>\n                    <div class=\"col-md-3 column\">\n                        <img src=\"https://i.ibb.co/kgYRF9d/Wechat-IMG4.jpg\"  class=\"img-thumbnail\" style=\"width: 100%;\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n    <!-- Container (???????????? Section) -->\n    <div id=\"courses\" class=\"container-fluid\">\n        <div class=\"section-title\">\n            <br>\n            <h2>????????????</h2>         \n            <br>\n            <h4>\n            </h4>\n          </div>\n          <div class=\"container\">\n            <div class=\"row clearfix\">\n                <div class=\"col-md-12 column\">\n                    <div class=\"row clearfix\">\n                        <div class=\"col-md-3 column\">\n                            <img  src=\"https://i.ibb.co/5Ffgs71/3.png\" class=\"img-thumbnail\"  style=\"width: 100%;\" />\n                        </div>\n                        <div class=\"col-md-3 column\">\n                            <img  src=\"https://i.ibb.co/6BT42yG/1.png\" class=\"img-thumbnail\"  style=\"width: 100%;\"/>\n                        </div>\n                        <div class=\"col-md-3 column\">\n                            <img  src=\"https://i.ibb.co/9NZ9ZSn/4.jpg\" class=\"img-thumbnail\"  style=\"width: 100%;\"/>\n                        </div>\n                        <div class=\"col-md-3 column\">\n                            <img src=\"https://i.ibb.co/5Ffgs71/3.png\" class=\"img-thumbnail\"  style=\"width: 100%;\"/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n\n\n\n  <!-- Container (????????????) Section) -->\n  <div id=\"case\" class=\"container\">\n    <div class=\"section-title\">\n        <br>\n        <h2>????????????</h2>         \n        <br>\n        <h4>\n        </h4>\n      </div>\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/boy.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h3 class=\"caption\">\n\t\t\t\t\t\t\t\t???*???\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???170+145\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????20??????GRE155?????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????170+155\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/girl.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h3 class=\"caption\">\n\t\t\t\t\t\t\t\t???*???\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???169+146\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????20??????GRE????????????  \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????170+158\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/boy.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h3 class=\"caption\">\n\t\t\t\t\t\t\t\t???*???\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GMAT???550\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????20??????GMAT????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????640\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/boy.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h3 class=\"caption\">\n\t\t\t\t\t\t\t\t???*???\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????SPS??????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???169+148\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????16??????GRE????????????  \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????169+155\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/boy.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h3 class=\"caption\">\n\t\t\t\t\t\t\t\t???*???\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???165+130\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????20??????GRE????????????  \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????168+152\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/boy.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h3 class=\"caption\">\n\t\t\t\t\t\t\t\t???*???\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????SAT???1170\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????40??????SAT????????????  \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t????????????????????????1440\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </div>\n\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/mainclass/mainclass.component.scss":
/*!****************************************************!*\
  !*** ./src/app/mainclass/mainclass.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvbWFpbmNsYXNzL21haW5jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUNBQW1DLEVBQUE7O0FBRXJDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSwyQ0FBd0MsRUFBQTs7QUFFMUM7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWhCO0VBQVksa0JBQWlCLEVBQUE7O0FBQzdCO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxVQUFVO0lBQ1YsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSxVQUFVO0lBQ1YsaUNBQWlDLEVBQUEsRUFBQTs7QUFHckM7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFFaEI7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUEsRUFDcEI7O0FBRUg7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNsYXNzL21haW5jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQ6IDQwMCAxNXB4IExhdG8sIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICBjb2xvcjogIzgxODE4MTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMzMDMwMzA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgY29sb3I6ICMzMDMwMzA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9IFxuXG4gIC5qdW1ib3Ryb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTAwcHggMjVweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XG4gIH1cbiAgLmJnLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIH1cbiAgLmxvZ28tc21hbGwge1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAubG9nbyB7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gICAgZm9udC1zaXplOiAyMDBweDtcbiAgfVxuICAudGh1bWJuYWlsIHtcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLnRodW1ibmFpbCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLml0ZW0gaDQge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW46IDcwcHggMDtcbiAgfVxuICAuaXRlbSBzcGFuIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgLnBhbmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDIzNTFGOyBcbiAgICBib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XG4gIH1cbiAgLnBhbmVsOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDQwcHggcmdiYSgwLDAsMCwgLjIpO1xuICB9XG4gIC5wYW5lbC1mb290ZXIgLmJ0bjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyMzUxRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLnBhbmVsLWhlYWRpbmcge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgfVxuIFxuICAucGFuZWwtZm9vdGVyIGgzIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciBoNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAucGFuZWwtZm9vdGVyIC5idG4ge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLm5hdmJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICB9XG4gIC5uYXZiYXIgbGkgYSwgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuZ2x5cGhpY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgfVxuICAuc2xpZGVhbmltIHt2aXNpYmlsaXR5OmhpZGRlbjt9XG4gIC5zbGlkZSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgLmNhcHRpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAuc2VjdGlvbi10aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlY3Rpb24tdGl0bGUgaDI6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGJvdHRvbTogMXB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XG59XG4uc2VjdGlvbi10aXRsZSBoMjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDIzNTFGO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xufVxuICBAa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XG4gICAgfSBcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb2wtc20tNCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDI1cHggMDtcbiAgICB9XG4gICAgLmJ0bi1sZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgZm9udC1zaXplOiAxNTBweDtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mainclass/mainclass.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mainclass/mainclass.component.ts ***!
  \**************************************************/
/*! exports provided: MainclassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainclassComponent", function() { return MainclassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hm.service */ "./src/app/hm.service.ts");






var MainclassComponent = /** @class */ (function () {
    function MainclassComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
    }
    MainclassComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                console.log(_this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    MainclassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
    };
    MainclassComponent.prototype.main = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainpage'], navigationExtras);
    };
    MainclassComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    MainclassComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    MainclassComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    MainclassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainclass',
            template: __webpack_require__(/*! ./mainclass.component.html */ "./src/app/mainclass/mainclass.component.html"),
            styles: [__webpack_require__(/*! ./mainclass.component.scss */ "./src/app/mainclass/mainclass.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MainclassComponent);
    return MainclassComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <br>\n              <h4 class=\"text-white\">Michi Academy </h4>\n              <p class=\"text-muted\">????????????????????????</p>\n              <br>\n    \n    \n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <br>\n              <form class=\"user\" >\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\"\n                    id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter Email Address...\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"\n                    id=\"login-user-password\" placeholder=\"Password\">\n                </div>\n              </form>\n              <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\">\n                    <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n                </a>\n                    \n    \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a (click)=\"main()\">????????????</a></li>\n                  <li><a (click)=\"class()\" >????????????</a></li>\n                  <li><a  (click)=\"abroad()\">????????????</a></li>\n                  <li><a (click)=\"blog()\">Blog</a></li>\n                  <li>\n                    <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        ????????????\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n    \n        </nav>\n\n\n    <!-- Container (?????? Section) -->\n      <div class=\"container\" style=\"width: 100%;\">\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\" >\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\" ></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\" ></li>\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\" ></li>\n          </ol>\n      \n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner\">\n      \n            <div class=\"item active\">\n              <img src=\"https://www.w3schools.com/bootstrap/la.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n              <div class=\"carousel-caption\">\n                <h3>Michi Academy</h3>\n                <p>????????????????????????????????????????????????SAT/GRE???????????????????????????????????????GMAT?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>\n              </div>\n            </div>\n      \n            <div class=\"item\">\n              <img src=\"https://www.w3schools.com/bootstrap/chicago.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n              <div class=\"carousel-caption\">\n                <h3>???????????????Michi</h3>\n                <p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                </p>\n              </div>\n            </div>\n          \n            <div class=\"item\">\n              <img src=\"https://www.w3schools.com/bootstrap/ny.jpg\" alt=\"New York\" style=\"width:100%;\">\n              <div class=\"carousel-caption\">\n                <h3>Michi Academy</h3>\n                <p>10????????????????????????????????????99%??????????????????????????????????????????</p>\n                <p><button class=\"btn btn-default btn-lg\">????????????</button>\n                </p>\n              </div>\n            </div>\n        \n          </div>\n      \n          <!-- Left and right controls -->\n          <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\" style=\"color: white;\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\" style=\"color: white;\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n\n    <!-- Container (Blog Section) -->\n    <div class=\"container-fluid\" >\n        <div class=\"section-title\">\n            <br>\n            <h2>?????????????????????????????????????????????????</h2>         \n            <br>\n            <h4>\n            </h4>\n          </div>\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <div>  \n                    <h4>\n                        ??????????????????????????????????????????7/3/1????????????10%???instruct??????????????????????????????????????????30%???mentor????????????coach?????????????????????????????????????????????????????????70%??????practice???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????coach???practice???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                    </h4>\n                    <p>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Container (???????????? Section) -->\n  <div id=\"courses\" class=\"container-fluid\">\n    <div class=\"section-title\">\n        <br>\n        <h2>????????????</h2>         \n        <br>\n        <h4>\n        </h4>\n      </div>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <h2>20??????GRE Verbal 155????????????</h2><br>\n        <h4>?????????????????????????????????Verbal 146-150???????????????????????????????????????????????????????????????????????????8?????????????????????GRE??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</h4><br>\n        <p ><strong>????????????</strong></p>\n        <p>??????GPA 3.0????????????????????????????????????</p>\n      </div>\n      <div class=\"col-sm-4\">\n        \n        <img src=\"http://www.yxprep.com/assets/img/features-1.svg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 100%;\">\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"container-fluid bg-grey\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <img src=\"http://www.yxprep.com/assets/img/features-2.svg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 100%;\">\n        \n      </div>\n      <div class=\"col-sm-8\">\n        <h2>8??????GRE??????????????????</h2><br>\n        <h4>??????????????????????????????????????????????????????????????????2????????????????????????60???????????????GRE??????????????????1???????????????????????????????????????????????????????????????2????????????????????????????????????????????????????????????????????????</h4><br>\n        <p ><strong>????????????</strong></p>\n        <p>??????1????????????GRE????????????/????????????????????????6???????????????????????????</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <h2>SAT????????????1500??????</h2><br>\n        <h4>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????50????????????????????????????????????????????????????????????????????????1500???</h4><br>\n        <p ><strong>????????????</strong></p>\n        <p>??????/????????????3???????????????SAT??????1360+???????????????28+</p>\n      </div>\n      <div class=\"col-sm-4\">\n        \n        <img src=\"http://www.yxprep.com/assets/img/features-3.svg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 100%;\">\n      </div>\n    </div>\n  </div>\n \n<!-- Container (????????????) Section) -->\n  <div id=\"case\" class=\"container\">\n    <div class=\"section-title\">\n        <br>\n        <h2>????????????</h2>         \n        <br>\n        <h4>\n        </h4>\n      </div>\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://watchourcity.com/wp-content/uploads/2019/11/USC-logo-small-e1573767009559.jpg\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tUniversity of Southern California\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???170+145\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tUniversity of California, Los Angeles\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???170+145\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tHarvard University\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????UCI\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://m.media-amazon.com/images/I/61Fa-pNEFXL._AC_SY450_.jpg\" style=\"width: 22%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tColumbia University\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????UMB\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://i.pinimg.com/originals/4a/21/25/4a2125ea3d703bee63e98de2913ba2ad.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tMassachusetts Institute of Technology\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????Canada\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://seeklogo.com/images/C/carnegie-mellon-university-logo-389DF9E4D6-seeklogo.com.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tCarnegie Mellon University\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????NEU\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </div>\n\n\n\n    <!-- Container (???????????? Section) -->\n    <div class=\"container\" id=\"instructor\">\n        <div class=\"section-title\">\n            <br>\n            <h2>????????????</h2>         \n            <br>\n            <h4>??????10????????????????????????????????????</h4>\n          </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/woman.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Ms.Yuxin\n                                </h3>\n                                <p>\n                                    ?????????????????????\n                                </p>\n                                <p>\n                                    ?????????????????????????????????????????????????????????7?????????????????????????????????????????????????????????????????????????????????????????????????????????GRE???????????????100%?????????????????????????????????????????????????????????????????????????????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/woman.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Ms.Shelly\n                                </h3>\n                                <p>\n                                    ?????????/AMC???????????????\n                                </p>\n                                <p>\n                                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/man.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Mr.Rick\n                                </h3>\n                                <p>\n                                    ???GRE/GMAT?????????????????????\n                                </p>\n                                <p>\n                                    ????????????????????????????????????GRE?????????GMAT??????????????????3???+????????????????????????????????????????????????????????????????????????SAT???GRE??????????????????????????????????????????????????????????????????SSAT?????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/man.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Mr.Yi\n                                </h3>\n                                <p>\n                                    ???????????????????????????\n                                </p>\n                                <p>\n                                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????SAT???GRE?????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/woman.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Ms. Claire\n                                </h3>\n                                <p>\n                                    ?????????/?????????????????????\n                                </p>\n                                <p>\n                                    ?????????????????????????????????????????????????????????6????????????????????????????????????????????????????????????????????????????????????????????????SAT????????????????????????????????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/woman.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Ms.Qiu\n                                </h3>\n                                <p>\n                                    ???AP/SAT Sub???????????????\n                                </p>\n                                <p>\n                                    ???????????????????????????????????????AP???SAT??????STEM???????????????????????????4?????????????????????????????????????????????????????????100%?????????AP 5??????SAT II 800??????????????????????????????????????????????????????????????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/man.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Mr. Sean\n                                </h3>\n                                <p>\n                                    ?????????/?????????????????????\n                                </p>\n                                <p>\n                                    ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????6????????????????????????Sean?????????Michi????????????????????????interactive reading????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"thumbnail\">\n                            <img alt=\"300x200\" src=\"http://www.yxprep.com/assets/img/woman.png\" style=\"width: 30%;\"/>\n                            <div class=\"caption\">\n                                <h3>\n                                    Ms.Federico\n                                </h3>\n                                <p>\n                                    ???AP/SAT Sub???????????????\n                                </p>\n                                <p>\n                                    ?????????????????????????????????????????????????????????????????????????????????10??????????????????ACT???AP??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                                </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsMkNBQXdDLEVBQUE7O0FBRTFDO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUMsRUFBQTs7QUFFckM7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUVoQjtFQUFZLGtCQUFpQixFQUFBOztBQUM3QjtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUc3QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQyxFQUFBLEVBQUE7O0FBR3JDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsV0FBVztJQUNYLG1CQUFtQixFQUFBLEVBQ3BCOztBQUVIO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH0gIFxuICAuanVtYm90cm9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwMHB4IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xuICB9XG4gIC5iZy1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICB9XG4gIC5sb2dvLXNtYWxsIHtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLmxvZ28ge1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gIH1cbiAgLnRodW1ibmFpbCB7XG4gICAgcGFkZGluZzogMCAwIDE1cHggMDtcbiAgICBib3JkZXI6IDFweDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC50aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuY2Fyb3VzZWwtY29udHJvbC5yaWdodCwgLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBjb2xvcjogIzAyMzUxRjtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gIH1cbiAgLml0ZW0gc3BhbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIC5wYW5lbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyMzUxRjsgXG4gICAgYm9yZGVyLXJhZGl1czowICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xuICB9XG4gIC5wYW5lbDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwwLDAsIC4yKTtcbiAgfVxuICAucGFuZWwtZm9vdGVyIC5idG46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuICAucGFuZWwtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gIH1cbiBcbiAgLnBhbmVsLWZvb3RlciBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuICAuc2xpZGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3R0b206IDFweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xufVxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAyMzUxRjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbn1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLXNtLTQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgfVxuICAgIC5idG4tbGcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");






var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
    }
    MainpageComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            //console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            //console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                //console.log(this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                //console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            //console.log(userData.user);
            //console.log(this.user.length);
        });
    };
    //direct to the ???????????? page
    MainpageComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    MainpageComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    MainpageComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.scss */ "./src/app/mainpage/mainpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/notif.service.ts":
/*!**********************************!*\
  !*** ./src/app/notif.service.ts ***!
  \**********************************/
/*! exports provided: NotifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifService", function() { return NotifService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var NotifService = /** @class */ (function () {
    function NotifService(http) {
        this.http = http;
        //?????? ????????????
        this.notifs = [];
        this.notifS = [];
        this.notifsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    NotifService.prototype.getNotif = function () {
        var _this = this;
        this.http.get('/api/notifs').subscribe(function (Data) {
            _this.notifs = Data.notifs;
            _this.notif = _this.notifs[0];
            _this.notifsUpdated.next(_this.notifs.slice());
        });
    };
    NotifService.prototype.getnotifsUpdatedListener = function () {
        return this.notifsUpdated.asObservable();
    };
    NotifService.prototype.addNotif = function (id, userAccount, //?????????id
    content, //??????????????????
    ndate, //????????????
    nstate, //???????????????"??????/??????"???
    ntype) {
        var _this = this;
        var notif = {
            _id: null,
            userAccount: userAccount,
            content: content,
            ndate: ndate,
            nstate: nstate,
            ntype: ntype,
        };
        this.http.post('/api/notifadd', notif).subscribe(function (responseData) {
            _this.notifS.push(notif);
            _this.notifsUpdated.next(_this.notifS.slice());
        });
    };
    NotifService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotifService);
    return NotifService;
}());



/***/ }),

/***/ "./src/app/publication.service.ts":
/*!****************************************!*\
  !*** ./src/app/publication.service.ts ***!
  \****************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PublicationService = /** @class */ (function () {
    function PublicationService(http) {
        this.http = http;
        //?????? ????????????
        this.publications = [];
        this.publicationS = [];
        this.publicationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PublicationService.prototype.getPublication = function () {
        var _this = this;
        this.http.get('/api/publications').subscribe(function (Data) {
            _this.publications = Data.publications;
            _this.publication = _this.publications[0];
            _this.publicationsUpdated.next(_this.publications.slice());
        });
    };
    PublicationService.prototype.getpublicationsUpdatedListener = function () {
        return this.publicationsUpdated.asObservable();
    };
    PublicationService.prototype.addPublication = function (id, userAccount, //?????????id
    PublicationTitle, PublicationJournal, //??????
    PublicationDate, //??????
    PublicationLink, //??????
    PublicationAuthors, PublicationAbstract, PublicationLevel) {
        var _this = this;
        var publication = {
            _id: null,
            userAccount: userAccount,
            PublicationTitle: PublicationTitle,
            PublicationJournal: PublicationJournal,
            PublicationDate: PublicationDate,
            PublicationLink: PublicationLink,
            PublicationAuthors: PublicationAuthors,
            PublicationAbstract: PublicationAbstract,
            PublicationLevel: PublicationLevel,
        };
        this.http.post('/api/publicationadd', publication).subscribe(function (responseData) {
            _this.publicationS.push(publication);
            _this.publicationsUpdated.next(_this.publicationS.slice());
        });
    };
    PublicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PublicationService);
    return PublicationService;
}());



/***/ }),

/***/ "./src/app/recletter.service.ts":
/*!**************************************!*\
  !*** ./src/app/recletter.service.ts ***!
  \**************************************/
/*! exports provided: RecomletterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomletterService", function() { return RecomletterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var RecomletterService = /** @class */ (function () {
    function RecomletterService(http) {
        this.http = http;
        //?????? ????????????
        this.recomletters = [];
        this.recomletterS = [];
        this.recomlettersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RecomletterService.prototype.getRecomletter = function () {
        var _this = this;
        this.http.get('/api/recomletters').subscribe(function (Data) {
            _this.recomletters = Data.recomletters;
            _this.recomletter = _this.recomletters[0];
            _this.recomlettersUpdated.next(_this.recomletters.slice());
        });
    };
    RecomletterService.prototype.getrecommendersUpdatedListener = function () {
        return this.recomlettersUpdated.asObservable();
    };
    RecomletterService.prototype.addRecomletter = function (id, schoolID, //?????????????????????id
    studentID, //???????????????id
    recommender, //?????????id
    recommenderName, //???????????????
    type, //???????????? acedemic / professional
    state) {
        var _this = this;
        var recomletter = {
            _id: null,
            schoolID: schoolID,
            studentID: studentID,
            recommender: recommender,
            recommenderName: recommenderName,
            type: type,
            state: state,
        };
        this.http.post('/api/recomletteradd', recomletter).subscribe(function (responseData) {
            _this.recomletterS.push(recomletter);
            _this.recomlettersUpdated.next(_this.recomletterS.slice());
        });
    };
    RecomletterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecomletterService);
    return RecomletterService;
}());



/***/ }),

/***/ "./src/app/recom.service.ts":
/*!**********************************!*\
  !*** ./src/app/recom.service.ts ***!
  \**********************************/
/*! exports provided: RecommenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommenderService", function() { return RecommenderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var RecommenderService = /** @class */ (function () {
    function RecommenderService(http) {
        this.http = http;
        //?????? ????????????
        this.recommenders = [];
        this.recommenderS = [];
        this.recommendersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RecommenderService.prototype.getRecommender = function () {
        var _this = this;
        this.http.get('/api/recommenders').subscribe(function (Data) {
            //console.log(Data);
            _this.recommenders = Data.recommenders;
            //console.log(this.recommenders[0].userAccount);
            _this.recommender = _this.recommenders[0];
            //console.log(this.hotel.email);
            _this.recommendersUpdated.next(_this.recommenders.slice());
        });
        // console.log("From  Hotel");
        // console.log(this.hotel)
        // return this.hotel;
    };
    RecommenderService.prototype.getrecommendersUpdatedListener = function () {
        return this.recommendersUpdated.asObservable();
    };
    RecommenderService.prototype.addRecommender = function (id, userAccount, //???????????????id
    firstName, //???????????????
    lastName, email, //?????????email
    phone, //
    title, // ???????????????
    location, //??????
    gender, //??????
    education, //??????
    organization, //????????????
    duration, //??????????????????????????????
    position, //??????
    relation, //??????????????????
    other) {
        var _this = this;
        var recommender = {
            _id: null,
            userAccount: userAccount,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            title: title,
            location: location,
            gender: gender,
            education: education,
            organization: organization,
            duration: duration,
            position: position,
            relation: relation,
            other: other,
        };
        this.http.post('/api/recommenderadd', recommender).subscribe(function (responseData) {
            _this.recommenderS.push(recommender);
            _this.recommendersUpdated.next(_this.recommenderS.slice());
        });
    };
    RecommenderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecommenderService);
    return RecommenderService;
}());



/***/ }),

/***/ "./src/app/school.service.ts":
/*!***********************************!*\
  !*** ./src/app/school.service.ts ***!
  \***********************************/
/*! exports provided: SchoolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SchoolService = /** @class */ (function () {
    function SchoolService(http) {
        this.http = http;
        this.hotelMUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //?????? ????????????
        this.schools = [];
        this.schoolS = [];
        this.schoolsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SchoolService.prototype.getSchool = function () {
        var _this = this;
        this.http.get('/api/schools').subscribe(function (Data) {
            //console.log(Data);
            _this.schools = Data.schools;
            console.log(_this.schools[0].userAccount);
            _this.school = _this.schools[0];
            //console.log(this.hotel.email);
            _this.schoolsUpdated.next(_this.schools.slice());
        });
        // console.log("From  Hotel");
        // console.log(this.hotel)
        // return this.hotel;
    };
    SchoolService.prototype.getschoolsUpdatedListener = function () {
        return this.schoolsUpdated.asObservable();
    };
    SchoolService.prototype.addSchool = function (id, userAccount, state, //????????????????????????????????????????????????offer??????????????????
    univName, //????????????
    schoolName, //????????????
    majorName, //????????????
    ddl1, //DDL 1
    ddl2, //DDL 2
    ddl3, //DDL 3
    interview, //?????? ???????????????-????????????????????????
    videoEssay, // videoEssay(????????????????????????????????????????????????)
    link, //??????
    applyAccount, //????????????
    applyPassword, //???????????????
    recommNumber, //?????????????????????
    other) {
        var _this = this;
        var school = {
            _id: null,
            userAccount: userAccount,
            state: state,
            univName: univName,
            schoolName: schoolName,
            majorName: majorName,
            ddl1: ddl1,
            ddl2: ddl2,
            ddl3: ddl3,
            interview: interview,
            videoEssay: videoEssay,
            link: link,
            applyAccount: applyAccount,
            applyPassword: applyPassword,
            recommNumber: recommNumber,
            other: other,
        };
        this.http.post('/api/schooladd', school).subscribe(function (responseData) {
            _this.schoolS.push(school);
            _this.schoolsUpdated.next(_this.schoolS.slice());
        });
    };
    SchoolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "./src/app/st.service.ts":
/*!*******************************!*\
  !*** ./src/app/st.service.ts ***!
  \*******************************/
/*! exports provided: StService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StService", function() { return StService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StService = /** @class */ (function () {
    function StService(http) {
        this.http = http;
        this.hotels = [];
        this.hotelM = [];
        this.hotelMUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //?????? ????????????
        this.students = [];
        this.studentS = [];
        this.studentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    StService.prototype.getStudent = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            //console.log(Data);
            _this.students = Data.students;
            console.log(_this.students[0].userAccount);
            _this.student = _this.students[0];
            //console.log(this.hotel.email);
            _this.studentsUpdated.next(_this.students.slice());
        });
        // console.log("From  Hotel");
        // console.log(this.hotel)
        // return this.hotel;
    };
    StService.prototype.getstudentsUpdatedListener = function () {
        return this.studentsUpdated.asObservable();
    };
    StService.prototype.addStudent = function (id, userAccount, firstName, lastName, email, phone, dob, // ??????
    currentAddress, permanentAddress, gender, ssn, passport, //?????????????????????
    visa, appEmail, //???????????????????????????
    appPsw, //???????????????????????????
    citizen, //??????
    //???????????????
    TOEFL, TOEFLR, //????????????
    TOEFLL, //????????????
    TOEFLS, //????????????
    TOEFLW, //????????????
    GRE, GREV, //GRE Verbal????????????
    GREVP, GREQ, GREQP, GREW, GREWP, GMAT, //GMAT ??????
    GMATV, GMATVP, GMATQ, GMATQP, GMATW, GMATWP, GMATR, GMATRP, OtherStandardTest, //?????????????????????
    //Skills & Hobbies
    Language, ComputerSkills, //???????????????
    OtherSkills, //?????????????????????
    Hobbies, //??????
    //Professional Interest????????????
    Professional1, Professional2, Professional3, 
    //Career Plan????????????
    CareerPlan1, CareerPlan2, 
    //Personal Strength????????????
    Strength1, Strength2, 
    //????????????
    MomName, MomAddress, MomOrganazation, MomJob, MomEducation, //??????????????????
    MomSchool, //??????????????????
    MomGraduation, //??????????????????
    MomPhone, MomEmail, 
    //????????????
    FatName, FatAddress, FatOrganazation, FatJob, FatEducation, //??????????????????
    FatSchool, //??????????????????
    FatGraduation, //??????????????????
    FatPhone, FatEmail) {
        var _this = this;
        var student = {
            _id: null,
            userAccount: userAccount,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            dob: dob,
            currentAddress: currentAddress,
            permanentAddress: permanentAddress,
            gender: gender,
            ssn: ssn,
            passport: passport,
            visa: visa,
            appEmail: appEmail,
            appPsw: appPsw,
            citizen: citizen,
            //???????????????
            TOEFL: TOEFL,
            TOEFLR: TOEFLR,
            TOEFLL: TOEFLL,
            TOEFLS: TOEFLS,
            TOEFLW: TOEFLW,
            GRE: GRE,
            GREV: GREV,
            GREVP: GREVP,
            GREQ: GREQ,
            GREQP: GREQP,
            GREW: GREW,
            GREWP: GREWP,
            GMAT: GMAT,
            GMATV: GMATV,
            GMATVP: GMATVP,
            GMATQ: GMATQ,
            GMATQP: GMATQP,
            GMATW: GMATW,
            GMATWP: GMATWP,
            GMATR: GMATR,
            GMATRP: GMATRP,
            OtherStandardTest: OtherStandardTest,
            //Skills & Hobbies
            Language: Language,
            ComputerSkills: ComputerSkills,
            OtherSkills: OtherSkills,
            Hobbies: Hobbies,
            //Professional Interest????????????
            Professional1: Professional1,
            Professional2: Professional2,
            Professional3: Professional3,
            //Career Plan????????????
            CareerPlan1: CareerPlan1,
            CareerPlan2: CareerPlan2,
            //Personal Strength????????????
            Strength1: Strength1,
            Strength2: Strength2,
            //????????????
            MomName: MomName,
            MomAddress: MomAddress,
            MomOrganazation: MomOrganazation,
            MomJob: MomJob,
            MomEducation: MomEducation,
            MomSchool: MomSchool,
            MomGraduation: MomGraduation,
            MomPhone: MomPhone,
            MomEmail: MomEmail,
            //????????????
            FatName: FatName,
            FatAddress: FatAddress,
            FatOrganazation: FatOrganazation,
            FatJob: FatJob,
            FatEducation: FatEducation,
            FatSchool: FatSchool,
            FatGraduation: FatGraduation,
            FatPhone: FatPhone,
            FatEmail: FatEmail,
        };
        this.http.post('/api/studentadd', student).subscribe(function (responseData) {
            _this.studentS.push(student);
            _this.studentsUpdated.next(_this.studentS.slice());
        });
    };
    StService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StService);
    return StService;
}());



/***/ }),

/***/ "./src/app/statement.service.ts":
/*!**************************************!*\
  !*** ./src/app/statement.service.ts ***!
  \**************************************/
/*! exports provided: StatementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementService", function() { return StatementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StatementService = /** @class */ (function () {
    function StatementService(http) {
        this.http = http;
        //?????? ????????????
        this.statements = [];
        this.statementS = [];
        this.statementsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    StatementService.prototype.getStatement = function () {
        var _this = this;
        this.http.get('/api/statements').subscribe(function (Data) {
            _this.statements = Data.statements;
            _this.statement = _this.statements[0];
            _this.statementsUpdated.next(_this.statements.slice());
        });
    };
    StatementService.prototype.getstatementsUpdatedListener = function () {
        return this.statementsUpdated.asObservable();
    };
    StatementService.prototype.addStatement = function (id, schoolID, //?????????????????????id
    question, //????????????
    stype, //????????????(PS/SOP/Essay)
    words) {
        var _this = this;
        var statement = {
            _id: null,
            schoolID: schoolID,
            question: question,
            stype: stype,
            words: words,
        };
        this.http.post('/api/statementadd', statement).subscribe(function (responseData) {
            _this.statementS.push(statement);
            _this.statementsUpdated.next(_this.statementS.slice());
        });
    };
    StatementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StatementService);
    return StatementService;
}());



/***/ }),

/***/ "./src/app/studentaddrecomm/studentaddrecomm.component.html":
/*!******************************************************************!*\
  !*** ./src/app/studentaddrecomm/studentaddrecomm.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >{{student.firstName}} {{student.lastName}}</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"studentmain(student) \">Home</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              ????????? <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"rec(student)\">?????????????????????</a></li>\n              <li><a (click)=\"addRecom(student)\">?????????????????????</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t  <div class=\"col-sm-3 sidenav\">\n\t\t  <h3></h3>\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t  <li ><a (click)=\"studentmain(student)\">????????????</a></li>\n\t\t\t<li ><a >????????????</a></li>\n\t\t\t<li ><a (click)=\"info(student)\">????????????</a></li>\n\t\t\t<li ><a (click)=\"resume(student)\">????????????</a></li>\n\t\t\t<li ><a (click)=\"rec(student)\">???????????????</a></li>\n\t\t\t<li  class=\"active\"><a (click)=\"addRecom(student)\">???????????????</a></li>\n\t\t</ul><br>\t\n\t  </div>\n  \n\t  <div class=\"col-sm-9\">\n\t\t<div >\n\n\t\t\t<h3 align=\"center\">???????????????</h3>\n\t\t\t<br> \n\t\t\t<div class=\"container\">\n\t\t\t\n\t\t\t  <form (submit)=\"addschool(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n\n\t\t\t\t\n\t\t\t  <table class=\"table  table-bordered\">\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <td  > <b>???First Name</b> </td>\n\t\t\t\t\t  <td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t<input class=\"form-control\" id=\"firstName\"  name=\"firstName\"  placeholder=\"????????????????????????\" style=\"width: 400px;\" ngModel required></div></td>\n\t\t\t\t\t  <td  ><b>???Last Name</b></td>\n\t\t\t\t\t  <td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t<input class=\"form-control\" id=\"lastName\"  name=\"lastName\"  placeholder=\"????????????????????????\" style=\"width: 400px;\"  ngModel required></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <td  ><b>?????? gender</b></td>\n\t\t\t\t\t  <td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t<input class=\"form-control\" id=\"gender\"  name=\"gender\"  placeholder=\"????????????????????????\" style=\"width: 400px;\" ngModel required></div></td>\n\t\t\t\t\t  <td  ><b>?????? title</b></td>\n\t\t\t\t\t  <td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t<input class=\"form-control\" id=\"title\"  name=\"title\"  placeholder=\"????????????????????????\" style=\"width: 400px;\" ngModel required></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t  <td   ><b>?????? Educational Qualification</b></td>\n\t\t\t\t\t  <td ><div class=\"input-group\">\t\t\n\t\t\t\t\t\t<input class=\"form-control\" id=\"education\"  name=\"education\"  placeholder=\"????????????????????????\" style=\"width: 400px;\" ngModel></div></td>\n\t\t\t\t\t\t<td  ><b>?????? Telephone</b></td>\n\t\t\t\t\t\t<td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t  <input class=\"form-control\" id=\"phone\"  name=\"phone\"   style=\"width: 400px;\" ngModel></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td  ><b>???????????? Organization</b></td>\n\t\t\t\t\t\t<td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t  <input class=\"form-control\" id=\"organization\"  name=\"organization\"  placeholder=\"????????????????????????????????????\" style=\"width: 400px;\" ngModel required></div></td>\n\t\t\t\t\t\t<td  ><b>?????????????????????????????? Duration</b></td>\n\t\t\t\t\t\t<td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t  <input class=\"form-control\" id=\"duration\"  name=\"duration\"  placeholder=\"?????????????????????\" style=\"width: 400px;\" ngModel></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td  ><b>?????? Position</b></td>\n\t\t\t\t\t\t<td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t  <input class=\"form-control\" id=\"position\"  name=\"position\"   style=\"width: 400px;\" ngModel></div></td>\n\t\t\t\t\t\t<td  ><b>???????????? Work Email</b></td>\n\t\t\t\t\t\t<td><div class=\"input-group\">\t\t\n\t\t\t\t\t\t  <input class=\"form-control\" id=\"email\"  name=\"email\"  placeholder=\"????????????????????????????????????\" style=\"width: 400px;\" ngModel required></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td   colspan=\"1\" ><b>???????????? Postal Address</b></td>\n\t\t\t\t\t\t<td colspan=\"3\"><div class=\"input-group\">\t\t\n\t\t\t\t\t\t  <input class=\"form-control\" id=\"location\"  name=\"location\"  placeholder=\"??????????????????????????? ??????\" style=\"width: 800px;\" ngModel required></div></td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td   colspan=\"1\" ><b>???????????????????????????\n\t\t\t\t\t\t\tRelationship to the applicant</b>  </td>\n\t\t\t\t\t\t<td colspan=\"3\"><div class=\"input-group\">\t\t\n\t\t\t\t\t\t<input class=\"form-control\" id=\"relation\"  name=\"relation\"  placeholder=\"??????????????? instructor??????????????????supervisor??????????????????\" style=\"width: 800px;\"   ngModel required></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td   colspan=\"4\" ><b>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????FAQ??????</b> <br>\n\t\t\t\t\t\t\t<p style=\"color:red\">????????????????????????????????????????????? ????????????/????????????????????? CS4100 Web Design????????????????????????????????? FALL 2019?????????????????????????????????????????????????????? A?????????5%?????????</p> \n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td colspan=\"4\"  align=\"center\"><div class=\"input-group\">\t\t\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"other\"  name=\"other\"  style=\"width: 1000px; height:100px\"  ngModel></div>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td   colspan=\"3\" > <p style=\"color:red\"><b>????????????????????????????????????????????????First Name ??? Last Name ????????????????????????????????????</b> </p>  </td>\n\t\t\t\t\t\t<td colspan=\"1\"  align=\"center\"><button  class=\"btn btn-primary\" >??????</button>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t</tr>\n\t\t\t\t  </tbody>\n\t\t\t  </table>\n\t\t\t</form>\n\t\t\t</div> \n\t\t</div>\n\n\t\t<!-- Container (Q&A) Section) -->\n<div class=\"section-title\">\n\t<br>\n\t<h2>FAQ</h2>         \n\t<br>\n\t<h4>\n\t</h4>\n  </div>\n  <div class=\"container\">\n\t<div class=\"row clearfix\">\n\t  <div class=\"col-md-12 column\">\n\t\t<div class=\"panel-group\" id=\"panel-35714\">\n\t\t  <div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t   <a class=\"panel-title\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-623008\">???????????????office hour???\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div id=\"panel-element-623008\" class=\"panel-collapse in\">\n\t\t\t  <div class=\"panel-body\">\n\t\t\t\t??????????????????????????? ??? office hour???????????????????????????????????? <br>\n\t\t\t\t<br>\n\t\t\t\t<b style=\"font-size: 20px;color:#003520\">?????? </b><br>\n\t\t\t\t??????World Politics????????????????????????Office hour???????????????????????????????????????????????????????????????????????????????????????paper????????????????????????&???????????????????????????????????????????????????????????????paper draft???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????domestic Market???????????????supply and demand???????????? <br>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t   <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-35714\" href=\"#panel-element-175945\">????????????????????????????????????</a>\n\t\t\t</div>\n\t\t\t<div id=\"panel-element-175945\" class=\"panel-collapse collapse\">\n\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\n\t\t\t\t<b style=\"font-size: 20px;color:#003520\">??????1 </b><br>\n\t\t\t\t???????????????Classical Liberal Era??????????????????????????????????????????????????????Globalized Market???????????????????????????????????????????????????????????????International Relation and Government Policy????????????????????????domestic Market <br><br>\n\t\t\t\t<b style=\"font-size: 20px;color:#003520\">??????2 </b><br>\n\t\t\t\t???????????????????????????????????? ????????????????????? ????????????????????????discussion??? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t   <a class=\"panel-title collapsed\" data-toggle=\"collapse\" data-parent=\"#panel-1\" href=\"#panel-element-1\">?????????/????????????????????????????????????</a>\n\t\t\t</div>\n\t\t\t<div id=\"panel-element-1\" class=\"panel-collapse collapse\">\n\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\n\t\t\t\t<b style=\"font-size: 20px;color:#003520\">?????? </b><br>\n\t\t\t\t??????????????????????????????????????????????????????????????????website??????????????????????????????????????? ?????????React???JPA?????????pick up????????????????????????????????????????????????????????? Developed a full-stack bartering web application using Spring framework and JPA??????????????????????????????online chatting system???implement?????????????????????reconstruction??? ??????????????????????????????????????????????????????build????????????????????????????????????????????????React?????????project??????????????????????????????????????????get familiar with ??????????????????<br>\n\t\t\t  \n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\n  \n\t\t</div>\n\t  </div>\n\t</div>\n  </div>\n\n\t  </div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/studentaddrecomm/studentaddrecomm.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/studentaddrecomm/studentaddrecomm.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 200px; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n.section-title h4 {\n  text-align: center; }\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(253, 253, 253, 0.2); }\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n.panel-footer {\n  background-color: #02351F !important; }\n.panel-footer h3 {\n  font-size: 32px; }\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZGVudGFkZHJlY29tbS9zdHVkZW50YWRkcmVjb21tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUc7QUFFL0I7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFFeEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTBCO0VBQzFCLDJCQUEyQixFQUFBO0FBRTdCO0VBQ0UsaURBQWlELEVBQUE7QUFFbkQ7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTtBQUVoQjtFQUNFLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTtBQUVqQztFQUNFLG9DQUFvQyxFQUFBO0FBR3RDO0VBQ0UsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUVqQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudGFkZHJlY29tbS9zdHVkZW50YWRkcmVjb21tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7aGVpZ2h0OiAxNTAwcHh9XG4gICAgXG4vKiBTZXQgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCAxMDAlIGhlaWdodCAqL1xuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG4vKiBPbiBzbWFsbCBzY3JlZW5zLCBzZXQgaGVpZ2h0IHRvICdhdXRvJyBmb3Igc2lkZW5hdiBhbmQgZ3JpZCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59XG4uc2VjdGlvbi10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgYm90dG9tOiAxcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XG59XG4uc2VjdGlvbi10aXRsZSBoMjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDIzNTFGO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XG59XG5cbi5wYW5lbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7IFxuICBib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xufVxuLnBhbmVsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMjUzLCAyNTMsIDI1MywgMC4yKTtcbn1cbi5wYW5lbC1mb290ZXIgLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMjM1MUY7XG59XG4ucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbn1cbi5wYW5lbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG59XG5cbi5wYW5lbC1mb290ZXIgaDMge1xuICBmb250LXNpemU6IDMycHg7XG59XG4ucGFuZWwtZm9vdGVyIGg0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucGFuZWwtZm9vdGVyIC5idG4ge1xuICBtYXJnaW46IDE1cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/studentaddrecomm/studentaddrecomm.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/studentaddrecomm/studentaddrecomm.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentaddrecommComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentaddrecommComponent", function() { return StudentaddrecommComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recom.service */ "./src/app/recom.service.ts");






var StudentaddrecommComponent = /** @class */ (function () {
    function StudentaddrecommComponent(stService, http, route, recommenderService, router) {
        var _this = this;
        this.stService = stService;
        this.http = http;
        this.route = route;
        this.recommenderService = recommenderService;
        this.router = router;
        this.students = [];
        this.route.queryParams.subscribe(function (params) {
            _this.studentUserAcc = params["studentUserAcc"];
            _this.studentID = params["studentID"];
            //console.log("??????ID" + this.studentID);
        });
    }
    StudentaddrecommComponent.prototype.addschool = function (form) {
        //this.ngOnInit();
        this.recommenderService.addRecommender("", this.studentID, form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.title, form.value.location, form.value.gender, form.value.education, form.value.organization, form.value.duration, form.value.position, form.value.relation, form.value.other);
        alert("?????????????????????!!");
        //console.log("?????????" + form.value.firstName);
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": this.studentUserAcc,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    StudentaddrecommComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentUserAcc) {
                    _this.student = h;
                    console.log("????????????" + _this.student.lastName);
                }
            }
        });
        this.stSub = this.stService.getstudentsUpdatedListener().subscribe(function (students) {
            _this.students = students;
        });
    };
    //direct to the student main page
    StudentaddrecommComponent.prototype.studentmain = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentaddrecommComponent.prototype.addRecom = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentaddrecomm'], navigationExtras);
    };
    //direct to the ?????????????????? page
    StudentaddrecommComponent.prototype.info = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentinfo'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentaddrecommComponent.prototype.rec = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentrec'], navigationExtras);
    };
    //direct to the ???????????? page
    StudentaddrecommComponent.prototype.resume = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentresume'], navigationExtras);
    };
    StudentaddrecommComponent.prototype.ngOnDestroy = function () {
        this.stSub.unsubscribe();
    };
    StudentaddrecommComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentaddrecomm',
            template: __webpack_require__(/*! ./studentaddrecomm.component.html */ "./src/app/studentaddrecomm/studentaddrecomm.component.html"),
            styles: [__webpack_require__(/*! ./studentaddrecomm.component.scss */ "./src/app/studentaddrecomm/studentaddrecomm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_st_service__WEBPACK_IMPORTED_MODULE_2__["StService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _recom_service__WEBPACK_IMPORTED_MODULE_5__["RecommenderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StudentaddrecommComponent);
    return StudentaddrecommComponent;
}());



/***/ }),

/***/ "./src/app/studentinfo/studentinfo.component.html":
/*!********************************************************!*\
  !*** ./src/app/studentinfo/studentinfo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >{{student.firstName}} {{student.lastName}}</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"studentmain(student)\">Home</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              ????????? <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"rec(student)\">?????????????????????</a></li>\n              <li><a (click)=\"addRecom(student)\">?????????????????????</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\t  <div class=\"container-fluid\">\n\t\t<div class=\"row content\">\n\t\t  <div class=\"col-sm-3 sidenav\">\n\t\t\t  <h3></h3>\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t  <li ><a (click)=\"studentmain(student)\">????????????</a></li>\n\t\t\t\t<li ><a >????????????</a></li>\n\t\t\t\t<li class=\"active\"><a >????????????</a></li>\n\t\t\t\t<li ><a (click)=\"resume(student)\">????????????</a></li>\n\t\t\t\t<li><a (click)=\"rec(student)\">???????????????</a></li>\n\t\t\t\t<li><a (click)=\"addRecom(student)\">???????????????</a></li>\n\t\t\t</ul><br>\t\n\t\t  </div>\n\t  \n\t\t  <div class=\"col-sm-9\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h2>{{student.firstName}} {{student.lastName}}</h2>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<p>????????????????????????????????????????????????????????????????????????</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<input type=\"button\" id=\"modifyPersonal\" (click)=\"modifyPersonal()\" value=\"????????????\" class=\"btn btn-primary  \" >\n\t\t\t\t\t\t<input type=\"button\" id=\"updatePersonal\" disabled=\"\" (click)=\"updatePersonal()\" value=\"????????????\" class=\"btn btn-primary\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t  <li class=\"active\"><a data-toggle=\"pill\" href=\"#personal\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#standardtest\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#interest\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#career\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#strength\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#family\">????????????</a></li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t  <div id=\"personal\" class=\"tab-pane fade in active\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form id=\"form1\" action=\"\" method=\"post\">\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >?????? Firstname</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"firstName\" value=\"{{student.firstName}}\" [(ngModel)]=\"firstName\"  name=\"firstName\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >?????? Lastname</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"lastName\" value=\"{{student.lastName}}\" [(ngModel)]=\"lastName\"  name=\"lastName\" style=\"width: 200px;\" disabled=\"\"></td>\n\t\t\t\t\t\t\t<td >?????? Gender</td>\n\t\t\t\t\t\t\t<td><input class=\"form-control\" id=\"gender\" value=\"{{student.gender}}\" [(ngModel)]=\"gender\"  name=\"gender\" style=\"width: 200px;\" disabled=\"\"></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >??????????????? dob</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"dob\" value=\"{{student.dob}}\" [(ngModel)]=\"dob\"  name=\"dob\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">?????????MM/DD/YYYY</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >????????? currentAddress\t</td>\n\t\t\t\t\t\t\t<td colspan=\"3\"><input class=\"form-control\" id=\"currentAddress\" value=\"{{student.currentAddress}}\" [(ngModel)]=\"currentAddress\"  name=\"currentAddress\" style=\"width: 600px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">??????????????????????????????????????????</small></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >??????</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"citizen\" value=\"{{student.citizen}}\" [(ngModel)]=\"citizen\"  name=\"citizen\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >?????????????????? Permanent Address</td>\n\t\t\t\t\t\t\t<td colspan=\"3\"><input class=\"form-control\" id=\"permanentAddress\" value=\"{{student.permanentAddress}}\" [(ngModel)]=\"permanentAddress\"  name=\"permanentAddress\" style=\"width: 600px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">??????????????????????????????????????????</small></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >?????? Cellphone</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"phone\" value=\"{{student.phone}}\" [(ngModel)]=\"phone\"  name=\"phone\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >?????? Email</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"email\" value=\"{{student.email}}\" [(ngModel)]=\"email\"  name=\"email\" style=\"width: 200px;\" disabled=\"\"></td>\n\t\t\t\t\t\t\t<td >SSN </td>\n\t\t\t\t\t\t\t<td><input class=\"form-control\" id=\"ssn\" value=\"{{student.ssn}}\" [(ngModel)]=\"ssn\"  name=\"ssn\" style=\"width: 200px;\" disabled=\"\"></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >????????? Passport</td>\n\t\t\t\t\t\t\t<td colspan=\"2\">\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"passport\" value=\"{{student.passport}}\" [(ngModel)]=\"passport\"  name=\"passport\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >???????????? Visa Number</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"><input class=\"form-control\" id=\"visa\" value=\"{{student.visa}}\" [(ngModel)]=\"visa\"  name=\"visa\" style=\"width: 200px;\" disabled=\"\"></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >????????????????????? Email</td>\n\t\t\t\t\t\t\t<td colspan=\"2\">\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"appEmail\" value=\"{{student.appEmail}}\" [(ngModel)]=\"appEmail\"  name=\"appEmail\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >??????????????????????????? Password</td>\n\t\t\t\t\t\t\t<td colspan=\"2\"><input class=\"form-control\" id=\"appPsw\" value=\"{{student.appPsw}}\" [(ngModel)]=\"appPsw\"  name=\"appPsw\" style=\"width: 200px;\" disabled=\"\"></td>\n\t\t\t\t\t\t  </tr> \n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</form>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"standardtest\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"10\">\n\t\t\t\t\t\t\t\t\t<h4>TOEFL/IELTS</h4> <small class=\"form-text text-muted\">?????????IELTS??????????????????????????????</small>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >?????? Total Score</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"TOEFL\" value=\"{{student.TOEFL}}\" [(ngModel)]=\"TOEFL\"  name=\"TOEFL\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >?????? Reading</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"TOEFLR\" value=\"{{student.TOEFLR}}\" [(ngModel)]=\"TOEFLR\"  name=\"TOEFLR\" style=\"width: 50px;\" disabled=\"\"></td>\n\t\t\t\t\t\t\t<td >?????? Listening</td>\n\t\t\t\t\t\t\t<td><input class=\"form-control\" id=\"TOEFLL\" value=\"{{student.TOEFLL}}\" [(ngModel)]=\"TOEFLL\"  name=\"TOEFLL\" style=\"width: 50px;\" disabled=\"\"></td>\n\t\t\t\t\t\t\t<td >?????? Speaking</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"TOEFLS\" value=\"{{student.TOEFLS}}\" [(ngModel)]=\"TOEFLS\"  name=\"TOEFLS\" style=\"width: 50px;\" disabled=\"\"></td>\n\t\t\t\t\t\t\t<td >?????? Writing</td>\n\t\t\t\t\t\t\t<td><input class=\"form-control\" id=\"TOEFLW\" value=\"{{student.TOEFLW}}\" [(ngModel)]=\"TOEFLW\"  name=\"TOEFLW\" style=\"width: 50px;\" disabled=\"\"></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td colspan=\"10\">\n\t\t\t\t\t\t\t\t<h4>GRE</h4> <small class=\"form-text text-muted\">??????????????????GRE???????????????</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >?????? Total Score</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"GRE\" value=\"{{student.GRE}}\" [(ngModel)]=\"GRE\"  name=\"GRE\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Verbal</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GREV\" value=\"{{student.GREV}}\" [(ngModel)]=\"GREV\"  name=\"GREV\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GREVP\" value=\"{{student.GREVP}}\" [(ngModel)]=\"GREVP\"  name=\"GREVP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Quantitative</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GREQ\" value=\"{{student.GREQ}}\" [(ngModel)]=\"GREQ\"  name=\"GREQ\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GREQP\" value=\"{{student.GREQP}}\" [(ngModel)]=\"GREQP\"  name=\"GREQP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td colspan=\"2\" ></td>\n\t\t\t\t\t\t\t<td >Analytical Writing</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GREW\" value=\"{{student.GREW}}\" [(ngModel)]=\"GREW\"  name=\"GREW\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GREWP\" value=\"{{student.GREWP}}\" [(ngModel)]=\"GREWP\"  name=\"GREWP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"4\"></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td colspan=\"10\">\n\t\t\t\t\t\t\t\t<h4>GMAT</h4> <small class=\"form-text text-muted\">??????????????????GMAT???????????????</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >?????? Total Score</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"GMAT\" value=\"{{student.GMAT}}\" [(ngModel)]=\"GMAT\"  name=\"GMAT\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Verbal</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATV\" value=\"{{student.GMATV}}\" [(ngModel)]=\"GMATV\"  name=\"GMATV\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATVP\" value=\"{{student.GMATVP}}\" [(ngModel)]=\"GMATVP\"  name=\"GMATVP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Quantitative</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATQ\" value=\"{{student.GMATQ}}\" [(ngModel)]=\"GMATQ\"  name=\"GMATQ\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATQP\" value=\"{{student.GMATQP}}\" [(ngModel)]=\"GMATQP\"  name=\"GMATQP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td colspan=\"2\" ></td>\n\t\t\t\t\t\t\t<td >Analytical Writing</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATW\" value=\"{{student.GMATW}}\" [(ngModel)]=\"GMATW\"  name=\"GMATW\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATWP\" value=\"{{student.GMATWP}}\" [(ngModel)]=\"GMATWP\"  name=\"GMATWP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Reasoning</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATR\" value=\"{{student.GMATR}}\" [(ngModel)]=\"GMATR\"  name=\"GMATR\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Percentile</td>\n\t\t\t\t\t\t\t<td ><input class=\"form-control\" id=\"GMATRP\" value=\"{{student.GMATRP}}\" [(ngModel)]=\"GMATRP\"  name=\"GMATRP\" style=\"width: 80px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t\t\t\t<h4>Others</h4> \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"8\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"OtherStandardTest\" value=\"{{student.OtherStandardTest}}\" [(ngModel)]=\"OtherStandardTest\"  name=\"OtherStandardTest\" style=\"width: 900px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t\n\t\t\t\t  </div>\n\n\t\t\t\t  <div id=\"interest\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<b>Why do you choose the major you are applying for? What specific branch or concentration are you most interested in?\n\t\t\t\t\t\t\t\t\t\t????????????????????????????????????????????????????????????????????? (????????????????????????????????????????????????????????????????????????????????????)\n\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t\t<p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? </p>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Professional1\" value=\"{{student.Professional1}}\" [(ngModel)]=\"Professional1\"  name=\"Professional1\" style=\"width: 800px; height: 30px;\" disabled=\"\" >\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td > <b>What is the biggest advantage and disadvantage for you to apply for this major?\n\t\t\t\t\t\t\t\t???????????????????????????????????????????????????????????????????????????????????????????????????</b> \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Professional2\" value=\"{{student.Professional2}}\" [(ngModel)]=\"Professional2\"  name=\"Professional2\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >If you intend to change your major, please give your reasons in details.\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????????????? \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Professional3\" value=\"{{student.Professional3}}\" [(ngModel)]=\"Professional3\"  name=\"Professional3\" style=\"width: 800px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"career\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<b>Why do you choose to pursue your degree in the US? Any study plans?\n\t\t\t\t\t\t\t\t\t\t?????????????????????????????????/????????????????????????????????????????????????\n\t\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"CareerPlan1\" value=\"{{student.CareerPlan1}}\" [(ngModel)]=\"CareerPlan1\"  name=\"CareerPlan1\" style=\"width: 800px; height: 30px;\" disabled=\"\" >\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td > <b>What are your specific short-term and long-term goals? How will your graduate degree help you achieve your goals?\n\t\t\t\t\t\t\t\t????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</b> <br>\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">????????????????????????????????????????????????</small><br>\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">?????????????????????xxx?????? ?????????????????? ???????????????????????????????????????????????????linkedin??????indeed???</small><br>\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">??????????????????????????????????????????????????????????????????/?????????????????????????????????</small><br>\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">???3-5???  ??????xx????????????????????????????????????????????????</small><br>\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">???5-10??? ????????????????????????????????????????????????????????? ???????????????????????????????????????</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"CareerPlan2\" value=\"{{student.CareerPlan2}}\" [(ngModel)]=\"CareerPlan2\"  name=\"CareerPlan2\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"strength\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<b>????????????Most Significant Accomplishment\n\t\t\t\t\t\t\t\t\t\t??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n\t\t\t\t\t\t\t\t\t</b><br>\n\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">????????????????????????????????????????????????????????????????????????????????????Part4. ?????????????????????</small><br>\n\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\" style=\"color:red\">???????????????leadership?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? \n\t\t\t\t\t\t\t\t\t\t???????????????Diversity??????????????????????????????????????????????????????????????????????????????????????????</small><br>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Strength1\" value=\"{{student.Strength1}}\" [(ngModel)]=\"Strength1\"  name=\"Strength1\" style=\"width: 800px; height: 30px;\" disabled=\"\" >\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td > <b>?????????????????????Is there any other relative experience or information helpful for your application? \n\t\t\t\t\t\t\t\t??????????????????????????????????????????????????????\n\t\t\t\t\t\t\t\t</b> <br>\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</small><br>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Strength2\" value=\"{{student.Strength2}}\" [(ngModel)]=\"Strength2\"  name=\"Strength2\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"family\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<form id=\"form2\" action=\"\" method=\"post\">\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td ></td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\tFather ??????\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td >Mother ??????</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >?????? <br> <small class=\"form-text text-muted\">????????????????????????????????????????????????</small></td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomName\" value=\"{{student.MomName}}\" [(ngModel)]=\"MomName\"  name=\"MomName\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatName\" value=\"{{student.FatName}}\" [(ngModel)]=\"FatName\"  name=\"FatName\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Address ???????????? <br> <small class=\"form-text text-muted\">??????????????????????????????????????????</small></td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomAddress\" value=\"{{student.MomAddress}}\" [(ngModel)]=\"MomAddress\"  name=\"MomAddress\" style=\"width: 400px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatAddress\" value=\"{{student.FatAddress}}\" [(ngModel)]=\"FatAddress\"  name=\"FatAddress\" style=\"width: 400px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Organization Name & Address ???????????????????????????<br> <small class=\"form-text text-muted\">???????????????????????????????????????????????????</small></td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomOrganazation\" value=\"{{student.MomOrganazation}}\" [(ngModel)]=\"MomOrganazation\"  name=\"MomOrganazation\" style=\"width: 400px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatOrganazation\" value=\"{{student.FatOrganazation}}\" [(ngModel)]=\"FatOrganazation\"  name=\"FatOrganazation\" style=\"width: 400px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Position ?????? </td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomJob\" value=\"{{student.MomJob}}\" [(ngModel)]=\"MomJob\"  name=\"MomJob\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatJob\" value=\"{{student.FatJob}}\" [(ngModel)]=\"FatJob\"  name=\"FatJob\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Level of Education ???????????? </td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomEducation\" value=\"{{student.MomEducation}}\" [(ngModel)]=\"MomEducation\"  name=\"MomEducation\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatEducation\" value=\"{{student.FatEducation}}\" [(ngModel)]=\"FatEducation\"  name=\"FatEducation\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >School Name ????????????</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomSchool\" value=\"{{student.MomSchool}}\" [(ngModel)]=\"MomSchool\"  name=\"MomSchool\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatSchool\" value=\"{{student.FatSchool}}\" [(ngModel)]=\"FatSchool\"  name=\"FatSchool\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Year of Graduation ????????????</td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomGraduation\" value=\"{{student.MomGraduation}}\" [(ngModel)]=\"MomGraduation\"  name=\"MomGraduation\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatGraduation\" value=\"{{student.FatGraduation}}\" [(ngModel)]=\"FatGraduation\"  name=\"FatGraduation\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Phone ?????? </td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomPhone\" value=\"{{student.MomPhone}}\" [(ngModel)]=\"MomPhone\"  name=\"MomPhone\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatPhone\" value=\"{{student.FatPhone}}\" [(ngModel)]=\"FatPhone\"  name=\"FatPhone\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Email  ??????  </td>\n\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"MomEmail\" value=\"{{student.MomEmail}}\" [(ngModel)]=\"MomEmail\"  name=\"MomEmail\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"FatEmail\" value=\"{{student.FatEmail}}\" [(ngModel)]=\"FatEmail\"  name=\"FatEmail\" style=\"width: 200px;\" disabled=\"\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</form>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/studentinfo/studentinfo.component.scss":
/*!********************************************************!*\
  !*** ./src/app/studentinfo/studentinfo.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 200px; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZGVudGluZm8vc3R1ZGVudGluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFDQTtFQUFjLGNBQWMsRUFBQTtBQUU1Qiw4Q0FBQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFJZCxnRUFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBRWY7SUFBYyxZQUFZLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRpbmZvL3N0dWRlbnRpbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7aGVpZ2h0OiAxNTAwcHh9XG4gICAgXG4vKiBTZXQgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCAxMDAlIGhlaWdodCAqL1xuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG4vKiBPbiBzbWFsbCBzY3JlZW5zLCBzZXQgaGVpZ2h0IHRvICdhdXRvJyBmb3Igc2lkZW5hdiBhbmQgZ3JpZCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59Il19 */"

/***/ }),

/***/ "./src/app/studentinfo/studentinfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/studentinfo/studentinfo.component.ts ***!
  \******************************************************/
/*! exports provided: StudentinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentinfoComponent", function() { return StudentinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../education.service */ "./src/app/education.service.ts");
/* harmony import */ var _experience_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../experience.service */ "./src/app/experience.service.ts");
/* harmony import */ var _publication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publication.service */ "./src/app/publication.service.ts");
/* harmony import */ var _activity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../activity.service */ "./src/app/activity.service.ts");
/* harmony import */ var _honor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../honor.service */ "./src/app/honor.service.ts");










var StudentinfoComponent = /** @class */ (function () {
    function StudentinfoComponent(stService, http, route, router, educationService, experienceService, publicationService, activityService, honorService) {
        var _this = this;
        this.stService = stService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.educationService = educationService;
        this.experienceService = experienceService;
        this.publicationService = publicationService;
        this.activityService = activityService;
        this.honorService = honorService;
        this.students = [];
        //school ??????
        this.schools = [];
        this.school = [];
        //??????????????????
        this.educations = [];
        this.education = [];
        //??????????????????
        this.experiences = [];
        this.experience = [];
        //??????
        this.publications = [];
        this.publication = [];
        //????????????
        this.activitys = [];
        this.activity = [];
        //??????
        this.honors = [];
        this.honor = [];
        this.route.queryParams.subscribe(function (params) {
            _this.studentUserAcc = params["studentUserAcc"];
            _this.studentID = params["studentID"];
        });
    }
    StudentinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentUserAcc) {
                    _this.student = h;
                    console.log("????????????" + _this.student.lastName);
                }
            }
            _this.studentID = _this.student._id;
            console.log("??????id???" + _this.studentID);
        });
        //?????? ????????? ????????????
        this.http.get('/api/schools/').subscribe(function (orderData) {
            _this.schools = orderData.schools;
            console.log(_this.studentID);
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.userAccount === _this.studentID) {
                    _this.school.push(x);
                    //console.log(this.school);
                }
            }
            console.log(_this.school);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/educations/').subscribe(function (Data) {
            _this.educations = Data.educations;
            for (var _i = 0, _a = _this.educations; _i < _a.length; _i++) {
                var y = _a[_i];
                if (y.userAccount === _this.studentID) {
                    _this.education.push(y);
                }
            }
            console.log("?????????????????????" + _this.education);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/experiences/').subscribe(function (Data) {
            _this.experiences = Data.experiences;
            for (var _i = 0, _a = _this.experiences; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.userAccount === _this.studentID) {
                    _this.experience.push(i);
                }
            }
            console.log("?????????????????????" + _this.experience);
        });
        //?????? ????????? ????????????
        this.http.get('/api/publications/').subscribe(function (Data) {
            _this.publications = Data.publications;
            for (var _i = 0, _a = _this.publications; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.userAccount === _this.studentID) {
                    _this.publication.push(p);
                }
            }
            console.log("???????????????" + _this.publication);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/activitys/').subscribe(function (Data) {
            _this.activitys = Data.activitys;
            for (var _i = 0, _a = _this.activitys; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a.userAccount === _this.studentID) {
                    _this.activity.push(a);
                }
            }
            console.log("?????????????????????" + _this.activity);
        });
        //?????? ????????? ????????????
        this.http.get('/api/honors/').subscribe(function (Data) {
            _this.honors = Data.honors;
            for (var _i = 0, _a = _this.honors; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentID) {
                    _this.honor.push(h);
                }
            }
            console.log("???????????????" + _this.honor);
        });
        this.stSub = this.stService.getstudentsUpdatedListener().subscribe(function (students) {
            _this.students = students;
        });
    };
    StudentinfoComponent.prototype.modifyPersonal = function () {
        //??????????????????
        document.getElementById("firstName").removeAttribute("disabled");
        document.getElementById("lastName").removeAttribute("disabled");
        document.getElementById("gender").removeAttribute("disabled");
        document.getElementById("dob").removeAttribute("disabled");
        document.getElementById("currentAddress").removeAttribute("disabled");
        document.getElementById("citizen").removeAttribute("disabled");
        document.getElementById("permanentAddress").removeAttribute("disabled");
        document.getElementById("phone").removeAttribute("disabled");
        document.getElementById("email").removeAttribute("disabled");
        document.getElementById("ssn").removeAttribute("disabled");
        document.getElementById("passport").removeAttribute("disabled");
        document.getElementById("visa").removeAttribute("disabled");
        document.getElementById("appEmail").removeAttribute("disabled");
        document.getElementById("appPsw").removeAttribute("disabled");
        document.getElementById("visa").removeAttribute("disabled");
        //??????????????????
        document.getElementById("TOEFL").removeAttribute("disabled");
        document.getElementById("TOEFLR").removeAttribute("disabled");
        document.getElementById("TOEFLL").removeAttribute("disabled");
        document.getElementById("TOEFLS").removeAttribute("disabled");
        document.getElementById("TOEFLW").removeAttribute("disabled");
        document.getElementById("GRE").removeAttribute("disabled");
        document.getElementById("GREV").removeAttribute("disabled");
        document.getElementById("GREVP").removeAttribute("disabled");
        document.getElementById("GREQ").removeAttribute("disabled");
        document.getElementById("GREQP").removeAttribute("disabled");
        document.getElementById("GREW").removeAttribute("disabled");
        document.getElementById("GREWP").removeAttribute("disabled");
        document.getElementById("GMAT").removeAttribute("disabled");
        document.getElementById("GMATV").removeAttribute("disabled");
        document.getElementById("GMATVP").removeAttribute("disabled");
        document.getElementById("GMATQ").removeAttribute("disabled");
        document.getElementById("GMATQP").removeAttribute("disabled");
        document.getElementById("GMATW").removeAttribute("disabled");
        document.getElementById("GMATWP").removeAttribute("disabled");
        document.getElementById("GMATR").removeAttribute("disabled");
        document.getElementById("GMATRP").removeAttribute("disabled");
        document.getElementById("OtherStandardTest").removeAttribute("disabled");
        //Professional Interest????????????
        document.getElementById("Professional1").removeAttribute("disabled");
        document.getElementById("Professional2").removeAttribute("disabled");
        document.getElementById("Professional3").removeAttribute("disabled");
        //Career Plan????????????
        document.getElementById("CareerPlan1").removeAttribute("disabled");
        document.getElementById("CareerPlan2").removeAttribute("disabled");
        //Personal Strength????????????
        document.getElementById("Strength1").removeAttribute("disabled");
        document.getElementById("Strength2").removeAttribute("disabled");
        //????????????
        document.getElementById("MomName").removeAttribute("disabled");
        document.getElementById("MomAddress").removeAttribute("disabled");
        document.getElementById("MomOrganazation").removeAttribute("disabled");
        document.getElementById("MomJob").removeAttribute("disabled");
        document.getElementById("MomEducation").removeAttribute("disabled");
        document.getElementById("MomSchool").removeAttribute("disabled");
        document.getElementById("MomGraduation").removeAttribute("disabled");
        document.getElementById("MomPhone").removeAttribute("disabled");
        document.getElementById("MomEmail").removeAttribute("disabled");
        //????????????
        document.getElementById("FatName").removeAttribute("disabled");
        document.getElementById("FatAddress").removeAttribute("disabled");
        document.getElementById("FatOrganazation").removeAttribute("disabled");
        document.getElementById("FatJob").removeAttribute("disabled");
        document.getElementById("FatEducation").removeAttribute("disabled");
        document.getElementById("FatSchool").removeAttribute("disabled");
        document.getElementById("FatGraduation").removeAttribute("disabled");
        document.getElementById("FatPhone").removeAttribute("disabled");
        document.getElementById("FatEmail").removeAttribute("disabled");
        document.getElementById("updatePersonal").removeAttribute("disabled");
        document.getElementById("modifyPersonal").setAttribute("disabled", "");
    };
    StudentinfoComponent.prototype.updatePersonal = function () {
        var Student = {
            userAccount: this.studentUserAcc,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            dob: document.getElementById("dob").value,
            currentAddress: document.getElementById("currentAddress").value,
            permanentAddress: document.getElementById("permanentAddress").value,
            gender: document.getElementById("gender").value,
            ssn: document.getElementById("ssn").value,
            passport: document.getElementById("passport").value,
            visa: document.getElementById("visa").value,
            appEmail: document.getElementById("appEmail").value,
            appPsw: document.getElementById("appPsw").value,
            citizen: document.getElementById("citizen").value,
            //???????????????
            TOEFL: document.getElementById("TOEFL").value,
            TOEFLR: document.getElementById("TOEFLR").value,
            TOEFLL: document.getElementById("TOEFLL").value,
            TOEFLS: document.getElementById("TOEFLS").value,
            TOEFLW: document.getElementById("TOEFLW").value,
            GRE: document.getElementById("GRE").value,
            GREV: document.getElementById("GREV").value,
            GREVP: document.getElementById("GREVP").value,
            GREQ: document.getElementById("GREQ").value,
            GREQP: document.getElementById("GREQP").value,
            GREW: document.getElementById("GREW").value,
            GREWP: document.getElementById("GREWP").value,
            GMAT: document.getElementById("GMAT").value,
            GMATV: document.getElementById("GMATV").value,
            GMATVP: document.getElementById("GMATVP").value,
            GMATQ: document.getElementById("GMATQ").value,
            GMATQP: document.getElementById("GMATQP").value,
            GMATW: document.getElementById("GMATW").value,
            GMATWP: document.getElementById("GMATWP").value,
            GMATR: document.getElementById("GMATR").value,
            GMATRP: document.getElementById("GMATRP").value,
            OtherStandardTest: document.getElementById("OtherStandardTest").value,
            //Skills & Hobbies
            Language: this.student.Language,
            ComputerSkills: this.student.ComputerSkills,
            OtherSkills: this.student.OtherSkills,
            Hobbies: this.student.Hobbies,
            //Professional Interest????????????
            Professional1: document.getElementById("Professional1").value,
            Professional2: document.getElementById("Professional2").value,
            Professional3: document.getElementById("Professional3").value,
            //Career Plan????????????
            CareerPlan1: document.getElementById("CareerPlan1").value,
            CareerPlan2: document.getElementById("CareerPlan2").value,
            //Personal Strength????????????
            Strength1: document.getElementById("Strength1").value,
            Strength2: document.getElementById("Strength2").value,
            //????????????
            MomName: document.getElementById("MomName").value,
            MomAddress: document.getElementById("MomAddress").value,
            MomOrganazation: document.getElementById("MomOrganazation").value,
            MomJob: document.getElementById("MomJob").value,
            MomEducation: document.getElementById("MomEducation").value,
            MomSchool: document.getElementById("MomSchool").value,
            MomGraduation: document.getElementById("MomGraduation").value,
            MomPhone: document.getElementById("MomPhone").value,
            MomEmail: document.getElementById("MomEmail").value,
            //????????????
            FatName: document.getElementById("FatName").value,
            FatAddress: document.getElementById("FatAddress").value,
            FatOrganazation: document.getElementById("FatOrganazation").value,
            FatJob: document.getElementById("FatJob").value,
            FatEducation: document.getElementById("FatEducation").value,
            FatSchool: document.getElementById("FatSchool").value,
            FatGraduation: document.getElementById("FatGraduation").value,
            FatPhone: document.getElementById("FatPhone").value,
            FatEmail: document.getElementById("FatEmail").value,
        };
        this.http.put('/api/students/' + this.studentUserAcc, Student)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("????????????????????????!!" + document.getElementById("firstName").value);
        window.location.reload();
    };
    StudentinfoComponent.prototype.addEducation = function (form) {
        var educationType = "";
        var type1 = document.getElementById("type1");
        var type2 = document.getElementById("type2");
        var type3 = document.getElementById("type3");
        if (type1.checked == true) {
            educationType = "??????";
        }
        if (type2.checked == true) {
            educationType = "??????";
        }
        if (type3.checked == true) {
            educationType = "?????????";
        }
        var educationName = document.getElementById("educationName").value;
        var educationLocation = document.getElementById("educationLocation").value;
        var educationStart = document.getElementById("educationStart").value;
        var educationEnd = document.getElementById("educationEnd").value;
        var major = document.getElementById("major").value;
        var Degree = document.getElementById("Degree").value;
        var GPA = document.getElementById("GPA").value;
        var MajorGPA = document.getElementById("MajorGPA").value;
        var SecondDegree = document.getElementById("SecondDegree").value;
        var SecondGPA = document.getElementById("SecondGPA").value;
        var other = document.getElementById("other").value;
        console.log("School??????" + educationType + "????????????" + educationName);
        this.educationService.addEducation("", this.studentID, educationType, educationName, educationLocation, educationStart, educationEnd, major, Degree, GPA, MajorGPA, SecondDegree, SecondGPA, other);
        alert("????????????????????????!!");
        window.location.reload();
    };
    StudentinfoComponent.prototype.addExperience = function (form) {
        var experiencetype = "";
        var experiencetype1 = document.getElementById("experiencetype1");
        var experiencetype2 = document.getElementById("experiencetype2");
        if (experiencetype1.checked == true) {
            experiencetype = "????????????";
        }
        if (experiencetype2.checked == true) {
            experiencetype = "????????????";
        }
        var institution = document.getElementById("institution").value;
        var institutionLocation = document.getElementById("institutionLocation").value;
        var experienceStart = document.getElementById("experienceStart").value;
        var experienceEnd = document.getElementById("experienceEnd").value;
        var experienceposition = document.getElementById("experienceposition").value;
        var responsibilities = document.getElementById("responsibilities").value;
        var project = document.getElementById("project").value;
        var achievement = document.getElementById("achievement").value;
        //console.log("School???" + form.value.type );
        this.experienceService.addExperience("", this.studentID, experiencetype, institution, institutionLocation, experienceStart, experienceEnd, experienceposition, responsibilities, project, achievement);
        alert("????????????????????????!!");
        window.location.reload();
    };
    StudentinfoComponent.prototype.addPublication = function (form) {
        var PublicationTitle = document.getElementById("PublicationTitle").value;
        var PublicationJournal = document.getElementById("PublicationJournal").value;
        var PublicationDate = document.getElementById("PublicationDate").value;
        var PublicationLink = document.getElementById("PublicationLink").value;
        var PublicationAuthors = document.getElementById("PublicationAuthors").value;
        var PublicationAbstract = document.getElementById("PublicationAbstract").value;
        var PublicationLevel = document.getElementById("PublicationLevel").value;
        //console.log("School???" + form.value.type );
        this.publicationService.addPublication("", this.studentID, PublicationTitle, PublicationJournal, PublicationDate, PublicationLink, PublicationAuthors, PublicationAbstract, PublicationLevel);
        alert("??????????????????!!");
        window.location.reload();
    };
    StudentinfoComponent.prototype.addActivity = function (form) {
        var activityOrganization = document.getElementById("activityOrganization").value;
        var activityStart = document.getElementById("activityStart").value;
        var activityEnd = document.getElementById("activityEnd").value;
        var activityPosition = document.getElementById("activityPosition").value;
        var activityDescription = document.getElementById("activityDescription").value;
        //console.log("School???" + form.value.type );
        this.activityService.addActivity("", this.studentID, activityOrganization, activityStart, activityEnd, activityPosition, activityDescription);
        alert("????????????????????????!!");
        window.location.reload();
    };
    StudentinfoComponent.prototype.addHonor = function (form) {
        var honorDate = document.getElementById("honorDate").value;
        var prize = document.getElementById("prize").value;
        var percentage = document.getElementById("percentage").value;
        var grantor = document.getElementById("grantor").value;
        console.log("????????????" + prize);
        this.honorService.addHonor("", this.studentID, honorDate, prize, percentage, grantor);
        alert("??????????????????!!");
        window.location.reload();
    };
    //direct to the student main page
    StudentinfoComponent.prototype.studentmain = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentinfoComponent.prototype.addRecom = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentaddrecomm'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentinfoComponent.prototype.rec = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentrec'], navigationExtras);
    };
    //direct to the ???????????? page
    StudentinfoComponent.prototype.resume = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentresume'], navigationExtras);
    };
    StudentinfoComponent.prototype.ngOnDestroy = function () {
        this.stSub.unsubscribe();
    };
    StudentinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentinfo',
            template: __webpack_require__(/*! ./studentinfo.component.html */ "./src/app/studentinfo/studentinfo.component.html"),
            styles: [__webpack_require__(/*! ./studentinfo.component.scss */ "./src/app/studentinfo/studentinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_st_service__WEBPACK_IMPORTED_MODULE_2__["StService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _education_service__WEBPACK_IMPORTED_MODULE_5__["EducationService"],
            _experience_service__WEBPACK_IMPORTED_MODULE_6__["ExperienceService"],
            _publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"],
            _activity_service__WEBPACK_IMPORTED_MODULE_8__["ActivityService"],
            _honor_service__WEBPACK_IMPORTED_MODULE_9__["HonorService"]])
    ], StudentinfoComponent);
    return StudentinfoComponent;
}());



/***/ }),

/***/ "./src/app/studentmain/studentmain.component.html":
/*!********************************************************!*\
  !*** ./src/app/studentmain/studentmain.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >{{student.firstName}} {{student.lastName}}</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"studentmain(student)\">Home</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              ????????? <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"rec(student)\">?????????????????????</a></li>\n              <li><a (click)=\"addRecom(student)\">?????????????????????</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\t  <div class=\"container-fluid\">\n\t\t<div class=\"row content\">\n\t\t  <div class=\"col-sm-3 sidenav\">\n\t\t\t  <h3></h3>\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t  <li class=\"active\"><a (click)=\"studentmain(student)\">????????????</a></li>\n\t\t\t\t<li ><a >????????????</a></li>\n\t\t\t\t<li><a (click)=\"info(student)\">????????????</a></li>\n\t\t\t\t<li ><a (click)=\"resume(student)\">????????????</a></li>\n\t\t\t\t<li><a (click)=\"rec(student)\">???????????????</a></li>\n\t\t\t\t<li><a (click)=\"addRecom(student)\">???????????????</a></li>\n\t\t\t</ul><br>\t\n\t\t  </div>\n\t  \n\t\t  <div class=\"col-sm-9\">\n\t\t\t<div *ngIf=\"notifs.length > 0\">\n\t\t\t\t<div *ngFor=\"let n of notifs\">\n\t\t\t\t\t<div *ngIf=\"n.nstate=='??????'\">\n\t\t\t\t\t<div class=\"alert alert-dismissible alert-warning\" *ngIf=\"n.ntype=='????????????'\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\"aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t\t<div class=\"toast show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n\t\t\t\t\t\t\t<div class=\"toast-header\">\n\t\t\t\t\t\t\t  <strong class=\"me-auto\">??????{{n.ntype}}?????? </strong>\n\t\t\t\t\t\t\t  <small>{{n.ndate}}</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"toast-body\">\n\t\t\t\t\t\t\t\t{{n.content}}\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" href=\"/anew/todel/@a.id\"  (click)=\"updateNotif(n)\">?????????????????????</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-dismissible alert-success\" *ngIf=\"n.ntype=='??????'\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\"aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t\t<div class=\"toast show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n\t\t\t\t\t\t\t<div class=\"toast-header\">\n\t\t\t\t\t\t\t  <strong class=\"me-auto\">??????{{n.ntype}}?????? </strong>\n\t\t\t\t\t\t\t  <small>{{n.ndate}}</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"toast-body\">\n\t\t\t\t\t\t\t\t{{n.content}}\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\" href=\"/anew/todel/@a.id\"  (click)=\"updateNotif(n)\">?????????????????????</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-dismissible alert-danger\" *ngIf=\"n.ntype=='??????'\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\"aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t\t<div class=\"toast show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n\t\t\t\t\t\t\t<div class=\"toast-header\">\n\t\t\t\t\t\t\t  <strong class=\"me-auto\">??????{{n.ntype}}?????? </strong>\n\t\t\t\t\t\t\t  <small>{{n.ndate}}</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"toast-body\">\n\t\t\t\t\t\t\t\t{{n.content}}\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm\" href=\"/anew/todel/@a.id\"  (click)=\"updateNotif(n)\">?????????????????????</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t<h4>???????????????????????????{{school.length}}</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#demo\">????????????</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"demo\" class=\"collapse\">\n\t\t\t<h5>?????????????????????????????????????????????deadline???????????????????????????round1????????????round2????????????round3???????????????????????????????????????????????????</h5>\n\t\t\t<hr>\n\t\t\t<div>\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t  <div class=\"btn-group\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t\t  mwlCalendarPreviousView\n\t\t\t\t\t\t  [view]=\"view\"\n\t\t\t\t\t\t  [(viewDate)]=\"viewDate\"\n\t\t\t\t\t\t  (viewDateChange)=\"closeOpenMonthViewDay()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  Previous\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t  class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t  mwlCalendarToday\n\t\t\t\t\t\t  [(viewDate)]=\"viewDate\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  Today\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t\t  mwlCalendarNextView\n\t\t\t\t\t\t  [view]=\"view\"\n\t\t\t\t\t\t  [(viewDate)]=\"viewDate\"\n\t\t\t\t\t\t  (viewDateChange)=\"closeOpenMonthViewDay()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  Next\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t  <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t  <div class=\"btn-group\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t\t  (click)=\"setView(CalendarView.Month)\"\n\t\t\t\t\t\t  [class.active]=\"view === CalendarView.Month\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  Month\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t\t  (click)=\"setView(CalendarView.Week)\"\n\t\t\t\t\t\t  [class.active]=\"view === CalendarView.Week\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  Week\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t  class=\"btn btn-primary\"\n\t\t\t\t\t\t  (click)=\"setView(CalendarView.Day)\"\n\t\t\t\t\t\t  [class.active]=\"view === CalendarView.Day\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  Day\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t  <br/>\n\t\t\t\t  <div [ngSwitch]=\"view\">\n\t\t\t\t\t<mwl-calendar-month-view\n\t\t\t\t\t  *ngSwitchCase=\"CalendarView.Month\"\n\t\t\t\t\t  [viewDate]=\"viewDate\"\n\t\t\t\t\t  [events]=\"events\"\n\t\t\t\t\t  [refresh]=\"refresh\"\n\t\t\t\t\t  [activeDayIsOpen]=\"activeDayIsOpen\"\n\t\t\t\t\t  (dayClicked)=\"dayClicked($event.day)\"\n\t\t\t\t\t  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n\t\t\t\t\t  (eventTimesChanged)=\"eventTimesChanged($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t</mwl-calendar-month-view>\n\t\t\t\t\t<mwl-calendar-week-view\n\t\t\t\t\t\t*ngSwitchCase=\"CalendarView.Week\"\n\t\t\t\t\t\t[viewDate]=\"viewDate\"\n\t\t\t\t\t\t[events]=\"events\"\n\t\t\t\t\t\t[refresh]=\"refresh\"\n\t\t\t\t\t\t(eventClicked)=\"handleEvent('Clicked', $event.event)\"\n\t\t\t\t\t\t(eventTimesChanged)=\"eventTimesChanged($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t</mwl-calendar-week-view>\n\t\t\t\t\t<mwl-calendar-day-view\n\t\t\t\t\t\t*ngSwitchCase=\"CalendarView.Day\"\n\t\t\t\t\t\t[viewDate]=\"viewDate\"\n\t\t\t\t\t\t[events]=\"events\"\n\t\t\t\t\t\t[refresh]=\"refresh\"\n\t\t\t\t\t\t(eventClicked)=\"handleEvent('Clicked', $event.event)\"\n\t\t\t\t\t\t(eventTimesChanged)=\"eventTimesChanged($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t</mwl-calendar-day-view>\n\t\t\t\t  </div>\t\t  \n\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t  <hr>\n\t\t\t  <div class=\"panel-group\" id=\"accordion\" *ngIf=\"school.length > 0\">\n\t\t\t\t<div *ngFor=\"let k of school\">\n\t\t\t\t<div class=\"panel panel-success\"  *ngIf=\"k.state=='Offer'\">\n\t\t\t\t  <div class=\"panel-heading\" >\n\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\thref=\"#{{k._id}}\">\n\t\t\t\t\t  <b> {{k.univName}} </b> ??? {{k.majorName}} ??? <br><small style=\"color: green;\">{{k.state}}</small>\n\t\t\t\t\t  </a>\n\t\t\t\t\t</h4>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"{{k._id}}\" class=\"panel-collapse collapse\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 1 </td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 2</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 3</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">?????????????????????</td>\t\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td >{{k.ddl1}} </td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl2}}</td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl3}}</td>\t\n\t\t\t\t\t\t\t\t<td >{{k.recommNumber}}</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyAccount}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyPassword}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.link}}\n\t\t\t\t\t\t\t\t\t<a href=\"{{k.link}}\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<button href=\"/anew/todel/@a.id\" (click)=\"schooldetail(k)\">More</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <br>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel panel-primary\" *ngIf=\"k.state=='?????????'\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t  <h4 class=\"panel-title\">\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t  href=\"#{{k._id}}\">\n\t\t\t\t\t\t<b> {{k.univName}} </b>??? {{k.majorName}} ??? <br><small style=\"color: whitesmoke;\">{{k.state}}</small>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t  </h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"{{k._id}}\" class=\"panel-collapse collapse\">\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 1 </td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 2</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 3</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">?????????????????????</td>\t\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td >{{k.ddl1}} </td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl2}}</td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl3}}</td>\t\n\t\t\t\t\t\t\t\t<td >{{k.recommNumber}}</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyAccount}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyPassword}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.link}}\n\t\t\t\t\t\t\t\t\t<a href=\"{{k.link}}\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<button href=\"/anew/todel/@a.id\" (click)=\"schooldetail(k)\">More</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel panel-warning\" *ngIf=\"k.state=='?????????'\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t  <h4 class=\"panel-title\">\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t  href=\"#{{k._id}}\">\n\t\t\t\t\t\t<b> {{k.univName}} </b> ??? {{k.majorName}} ???  <br><small style=\"color: goldenrod;\">{{k.state}}</small>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t  </h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"{{k._id}}\" class=\"panel-collapse collapse\">\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 1 </td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 2</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 3</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">?????????????????????</td>\t\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td >{{k.ddl1}} </td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl2}}</td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl3}}</td>\t\n\t\t\t\t\t\t\t\t<td >{{k.recommNumber}}</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyAccount}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyPassword}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.link}}\n\t\t\t\t\t\t\t\t\t<a href=\"{{k.link}}\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<button href=\"/anew/todel/@a.id\" (click)=\"schooldetail(k)\">More</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel panel-default\" *ngIf=\"k.state=='??????'\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t  <h4 class=\"panel-title\">\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t  href=\"#{{k._id}}\">\n\t\t\t\t\t\t<b> {{k.univName}} </b> ??? {{k.majorName}} ???  <br><small style=\"color: red;\">{{k.state}}</small>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t  </h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"{{k._id}}\" class=\"panel-collapse collapse\">\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 1 </td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 2</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">Deadline 3</td>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">?????????????????????</td>\t\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td >{{k.ddl1}} </td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl2}}</td>\n\t\t\t\t\t\t\t\t<td >{{k.ddl3}}</td>\t\n\t\t\t\t\t\t\t\t<td >{{k.recommNumber}}</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyAccount}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.applyPassword}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td style=\"background-color: gainsboro;\">????????????</td>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t{{k.link}}\n\t\t\t\t\t\t\t\t\t<a href=\"{{k.link}}\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<button href=\"/anew/todel/@a.id\" (click)=\"schooldetail(k)\">More</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t  </div>\n\t\t\t  \n\t\t  </div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/studentmain/studentmain.component.scss":
/*!********************************************************!*\
  !*** ./src/app/studentmain/studentmain.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 200px; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZGVudG1haW4vc3R1ZGVudG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFDQTtFQUFjLGNBQWMsRUFBQTtBQUU1Qiw4Q0FBQTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFJZCxnRUFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYSxFQUFBO0VBRWY7SUFBYyxZQUFZLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRtYWluL3N0dWRlbnRtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiB0aGUgZ3JpZCBzbyAuc2lkZW5hdiBjYW4gYmUgMTAwJSAoYWRqdXN0IGlmIG5lZWRlZCkgKi9cbi5yb3cuY29udGVudCB7aGVpZ2h0OiAxNTAwcHh9XG4gICAgXG4vKiBTZXQgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCAxMDAlIGhlaWdodCAqL1xuLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuXG4vKiBPbiBzbWFsbCBzY3JlZW5zLCBzZXQgaGVpZ2h0IHRvICdhdXRvJyBmb3Igc2lkZW5hdiBhbmQgZ3JpZCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5yb3cuY29udGVudCB7aGVpZ2h0OiBhdXRvO30gXG59Il19 */"

/***/ }),

/***/ "./src/app/studentmain/studentmain.component.ts":
/*!******************************************************!*\
  !*** ./src/app/studentmain/studentmain.component.ts ***!
  \******************************************************/
/*! exports provided: StudentmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentmainComponent", function() { return StudentmainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
var StudentmainComponent = /** @class */ (function () {
    function StudentmainComponent(stService, http, route, router) {
        var _this = this;
        this.stService = stService;
        this.http = http;
        this.route = route;
        this.router = router;
        //????????????
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarView"];
        this.viewDate = new Date();
        this.events = [
        // {
        //   start: startOfDay(new Date("2021/10/31")),
        //   title: 'An event with no end date',
        //   color: colors.yellow,
        // },
        ];
        this.activeDayIsOpen = true;
        this.students = [];
        //school ??????
        this.schools = [];
        this.school = [];
        this.notifs = [];
        this.notif = [];
        this.route.queryParams.subscribe(function (params) {
            _this.studentUserAcc = params["studentUserAcc"];
            _this.studentID = params["studentID"];
        });
    }
    StudentmainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentUserAcc) {
                    _this.student = h;
                    console.log("????????????" + _this.student.lastName);
                }
            }
            //this.studentID = this.student._id;
            console.log("??????id???" + _this.studentID);
        });
        //?????? ????????? ????????????
        this.http.get('/api/schools/').subscribe(function (orderData) {
            _this.schools = orderData.schools;
            console.log(_this.studentID);
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.userAccount === _this.studentID) {
                    _this.school.push(x);
                    //console.log(this.school);
                }
            }
            console.log(_this.school);
            for (var _b = 0, _c = _this.school; _b < _c.length; _b++) {
                var s = _c[_b];
                if (s.state === "?????????") {
                    if (s.ddl1 != " ") {
                        var data = s.ddl1;
                        var tit = " ??? " + s.univName + "??? " + s.majorName;
                        var url = s._id;
                        var fullName = s.userAccount;
                        _this.addEvent(tit, data);
                    }
                    if (s.ddl2 != " ") {
                        var data = s.ddl2;
                        var tit = " ??? " + s.univName + "??? " + s.majorName;
                        _this.addEvent2(tit, data);
                    }
                    if (s.ddl3 != " ") {
                        var data = s.ddl3;
                        var tit = " ??? " + s.univName + "??? " + s.majorName;
                        _this.addEvent3(tit, data);
                    }
                }
            }
        });
        //?????? ?????????????????????
        this.http.get('/api/notifdetail/' + this.studentID).subscribe(function (o) {
            _this.notif = o.notifs;
            for (var _i = 0, _a = _this.notif; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n.userAccount === _this.studentID) {
                    _this.notifs.push(n);
                    //console.log(this.school);
                }
            }
        });
        this.stSub = this.stService.getstudentsUpdatedListener().subscribe(function (students) {
            _this.students = students;
        });
    };
    StudentmainComponent.prototype.updateNotif = function (n) {
        var Notif = {
            userAccount: n.userAccount,
            content: n.content,
            ndate: n.ndate,
            nstate: "??????",
            ntype: n.ntype,
        };
        this.http.put('/api/notif/' + n._id, Notif)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
            if (data[0] === undefined) {
                console.log("Undefine");
            }
        });
        alert("??????????????????");
        window.location.reload();
    };
    StudentmainComponent.prototype.addEvent = function (tit, data) {
        this.events = this.events.concat([
            {
                title: tit,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(data)),
                color: colors.red,
            },
        ]);
    };
    StudentmainComponent.prototype.addEvent2 = function (tit, data) {
        this.events = this.events.concat([
            {
                title: tit,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(data)),
                color: colors.yellow,
            },
        ]);
    };
    StudentmainComponent.prototype.addEvent3 = function (tit, data) {
        this.events = this.events.concat([
            {
                title: tit,
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(data)),
                color: colors.blue,
            },
        ]);
    };
    StudentmainComponent.prototype.setView = function (view) {
        this.view = view;
    };
    StudentmainComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    //direct to the student main page
    StudentmainComponent.prototype.studentmain = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentmainComponent.prototype.addRecom = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentaddrecomm'], navigationExtras);
    };
    //direct to the ?????????????????? page
    StudentmainComponent.prototype.info = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentinfo'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentmainComponent.prototype.rec = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentrec'], navigationExtras);
    };
    //direct to the school detail page
    StudentmainComponent.prototype.schooldetail = function (k) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": this.student.userAccount,
                "studentID": this.student._id,
                "schoolID": k._id,
            }
        };
        this.router.navigate(['/studentschool'], navigationExtras);
    };
    //direct to the ???????????? page
    StudentmainComponent.prototype.resume = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentresume'], navigationExtras);
    };
    StudentmainComponent.prototype.ngOnDestroy = function () {
        this.stSub.unsubscribe();
    };
    StudentmainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentmain',
            template: __webpack_require__(/*! ./studentmain.component.html */ "./src/app/studentmain/studentmain.component.html"),
            styles: [__webpack_require__(/*! ./studentmain.component.scss */ "./src/app/studentmain/studentmain.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_st_service__WEBPACK_IMPORTED_MODULE_4__["StService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], StudentmainComponent);
    return StudentmainComponent;
}());



/***/ }),

/***/ "./src/app/studentrec/studentrec.component.html":
/*!******************************************************!*\
  !*** ./src/app/studentrec/studentrec.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >{{student.firstName}} {{student.lastName}}</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"studentmain(student)\">Home</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              ????????? <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"rec(student)\">?????????????????????</a></li>\n              <li><a (click)=\"addRecom(student)\">?????????????????????</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\t  <div class=\"container-fluid\">\n\t\t<div class=\"row content\">\n\t\t  <div class=\"col-sm-3 sidenav\">\n\t\t\t  <h3></h3>\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t  <li ><a (click)=\"studentmain(student)\">????????????</a></li>\n\t\t\t\t<li ><a >????????????</a></li>\n\t\t\t\t<li ><a (click)=\"info(student)\">????????????</a></li>\n\t\t\t\t<li ><a (click)=\"resume(student)\">????????????</a></li>\n\t\t\t\t<li  class=\"active\"><a (click)=\"rec(student)\">???????????????</a></li>\n\t\t\t\t<li><a (click)=\"addRecom(student)\">???????????????</a></li>\n\t\t\t</ul><br>\t\n\t\t  </div>\n\t  \n\t\t  <div class=\"col-sm-9\">\n\t\t\t<h3>\n\t\t\t\t????????????????????????????????????\n\t\t\t\t<small class=\"text-muted\">{{recommenders.length}}</small>\n\t\t\t  </h3>\n\t\t\t  <hr>\n\t\t\t  <div class=\"panel-group\" id=\"accordion\" *ngIf=\"recommenders.length > 0\">\n\t\t\t\t<div class=\"panel panel-primary\" *ngFor=\"let k of recommenders\">\n\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\thref=\"#{{k._id}}\">\n\t\t\t\t\t  <b> {{k.firstName}} {{k.lastName}}</b>\n\t\t\t\t\t  </a>\n\t\t\t\t\t</h4>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"{{k._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t  <table class=\"table table-hover\">\n\t\t\t\t\t\t<thead style=\"background-color: lightgray;\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<th scope=\"col\" >??????</th>\n\t\t\t\t\t\t\t<th scope=\"col\" >??????title</th>\n\t\t\t\t\t\t\t<th scope=\"col\" >??????</th>\n\t\t\t\t\t\t\t<th scope=\"col\">Relationship</th>\n\t\t\t\t\t\t\t<th scope=\"col\">????????????</th>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody >\n\t\t\t\t\t\t  <tr class=\"table-dark\" >\n\t\t\t\t\t\t\t<td>{{k.gender}} </td>\n\t\t\t\t\t\t\t<td>{{k.title}}</td>\n\t\t\t\t\t\t\t<td>{{k.education}}</td>\n\t\t\t\t\t\t\t<td>{{k.relation}}</td>\n\t\t\t\t\t\t\t<td>{{k.organization}}</td>  \n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<thead style=\"background-color: lightgray;\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<th scope=\"col\" >??????</th>\n\t\t\t\t\t\t\t<th scope=\"col\" >Email</th>\n\t\t\t\t\t\t\t<th scope=\"col\">??????</th>\n\t\t\t\t\t\t\t<th scope=\"col\" >??????</th>\n\t\t\t\t\t\t\t<th scope=\"col\">??????????????????????????????</th>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody >\n\t\t\t\t\t\t  <tr class=\"table-dark\" >\n\t\t\t\t\t\t\t<td>{{k.position}} </td>\n\t\t\t\t\t\t\t<td>{{k.email}}</td>\n\t\t\t\t\t\t\t<td>{{k.phone}}</td>\n\t\t\t\t\t\t\t<td>{{k.location}}</td>\n\t\t\t\t\t\t\t<td>{{k.duration}}</td>  \n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<thead style=\"background-color: lightgray;\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<th colspan=\"5\">???????????????????????????????????????????????????????????????????????????</th>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td colspan=\"5\">{{k.other}}</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t  </table>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/studentrec/studentrec.component.scss":
/*!******************************************************!*\
  !*** ./src/app/studentrec/studentrec.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 200px; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZGVudHJlYy9zdHVkZW50cmVjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50cmVjL3N0dWRlbnRyZWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgaGVpZ2h0IG9mIHRoZSBncmlkIHNvIC5zaWRlbmF2IGNhbiBiZSAxMDAlIChhZGp1c3QgaWYgbmVlZGVkKSAqL1xuLnJvdy5jb250ZW50IHtoZWlnaHQ6IDE1MDBweH1cbiAgICBcbi8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/studentrec/studentrec.component.ts":
/*!****************************************************!*\
  !*** ./src/app/studentrec/studentrec.component.ts ***!
  \****************************************************/
/*! exports provided: StudentrecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentrecComponent", function() { return StudentrecComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StudentrecComponent = /** @class */ (function () {
    function StudentrecComponent(stService, http, route, router) {
        var _this = this;
        this.stService = stService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.students = [];
        //school ??????
        this.schools = [];
        this.school = [];
        //???????????????
        this.recommenders = [];
        this.route.queryParams.subscribe(function (params) {
            _this.studentUserAcc = params["studentUserAcc"];
            _this.studentID = params["studentID"];
        });
    }
    StudentrecComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentUserAcc) {
                    _this.student = h;
                    console.log("????????????" + _this.student.lastName);
                }
            }
            _this.studentID = _this.student._id;
            console.log("??????id???" + _this.studentID);
        });
        //?????? ????????? ????????????
        this.http.get('/api/schools/').subscribe(function (orderData) {
            _this.schools = orderData.schools;
            console.log(_this.studentID);
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.userAccount === _this.studentID) {
                    _this.school.push(x);
                    //console.log(this.school);
                }
            }
            console.log(_this.school);
        });
        //?????? ????????? ???????????????
        this.http.get('/api/studentrecommenderdetail/' + this.studentID).subscribe(function (orderData) {
            console.log(orderData);
            _this.recommenders = orderData.recommenders;
        });
        this.stSub = this.stService.getstudentsUpdatedListener().subscribe(function (students) {
            _this.students = students;
        });
    };
    //direct to the student main page
    StudentrecComponent.prototype.studentmain = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentrecComponent.prototype.addRecom = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentaddrecomm'], navigationExtras);
    };
    //direct to the ?????????????????? page
    StudentrecComponent.prototype.info = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentinfo'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentrecComponent.prototype.rec = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentrec'], navigationExtras);
    };
    //direct to the ???????????? page
    StudentrecComponent.prototype.resume = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentresume'], navigationExtras);
    };
    StudentrecComponent.prototype.ngOnDestroy = function () {
        this.stSub.unsubscribe();
    };
    StudentrecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentrec',
            template: __webpack_require__(/*! ./studentrec.component.html */ "./src/app/studentrec/studentrec.component.html"),
            styles: [__webpack_require__(/*! ./studentrec.component.scss */ "./src/app/studentrec/studentrec.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_st_service__WEBPACK_IMPORTED_MODULE_2__["StService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StudentrecComponent);
    return StudentrecComponent;
}());



/***/ }),

/***/ "./src/app/studentresume/studentresume.component.html":
/*!************************************************************!*\
  !*** ./src/app/studentresume/studentresume.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >{{student.firstName}} {{student.lastName}}</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"studentmain(student)\">Home</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              ????????? <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"rec(student)\">?????????????????????</a></li>\n              <li><a (click)=\"addRecom(student)\">?????????????????????</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n</nav>\n\t  <div class=\"container-fluid\">\n\t\t<div class=\"row content\">\n\t\t  <div class=\"col-sm-3 sidenav\">\n\t\t\t  <h3></h3>\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t  <li ><a (click)=\"studentmain(student)\">????????????</a></li>\n\t\t\t\t<li ><a >????????????</a></li>\n\t\t\t\t<li ><a (click)=\"info(student)\">????????????</a></li>\n\t\t\t\t<li class=\"active\"><a (click)=\"resume(student)\">????????????</a></li>\n\t\t\t\t<li><a (click)=\"rec(student)\">???????????????</a></li>\n\t\t\t\t<li><a (click)=\"addRecom(student)\">???????????????</a></li>\n\t\t\t</ul><br>\t\n\t\t  </div>\n\t  \n\t\t  <div class=\"col-sm-9\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<h2>{{student.firstName}} {{student.lastName}}</h2>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<p>????????????????????????????????????????????????????????????????????????</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<input type=\"button\" id=\"modifyPersonal\" (click)=\"modifyPersonal()\" value=\"????????????\" class=\"btn btn-primary  \" >\n\t\t\t\t\t\t<input type=\"button\" id=\"updatePersonal\" disabled=\"\" (click)=\"updatePersonal()\" value=\"????????????\" class=\"btn btn-primary\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<ul class=\"nav nav-pills\">\n\t\t\t\t  \n\t\t\t\t  <li  class=\"active\"><a data-toggle=\"pill\" href=\"#Education\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#Experience\">????????????/????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#Publication\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#Honors\">??????&??????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#Activities\">????????????</a></li>\n\t\t\t\t  <li><a data-toggle=\"pill\" href=\"#skills\">??????&??????</a></li>\n\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<div class=\"tab-content\">\n\n\t\t\t\t  <div id=\"Education\" class=\"tab-pane fade in active\">\n\t\t\t\t\t  <hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<h4>??????????????????????????????????????????????????????????????????</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#demo\">??????????????????</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"demo\" class=\"collapse\"><hr>\n\t\t\t\t\t  <p>??????????????????????????????????????????</p>\n\t\t\t\t\t\n\t\t\t\t\t<form (submit)=\"addEducation(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n\t\t\t\t\t\n\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >??????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <div class=\"form-check\" >\n\t\t\t\t\t\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"type\" id=\"type1\" value=\"??????\"  ngModel required>\n\t\t\t\t\t\t\t\t\t\t??????\n\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"type\" id=\"type2\" value=\"??????\"  ngModel required>\n\t\t\t\t\t\t\t\t\t\t??????\n\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"type\" id=\"type3\" value=\"?????????\" ngModel required>\n\t\t\t\t\t\t\t\t\t\t?????????\n\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t</tr>\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >University ??????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"educationName\"  name=\"educationName\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">?????????????????????</small>\n\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Address ????????????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"educationLocation\"  name=\"educationLocation\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">?????????????????????</small>\n\t  \n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >???????????? </td>\n\t\t\t\t\t\t\t  <td >From</td>\n\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"educationStart\"   name=\"educationStart\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">??????MM/DD/YYYY</small>\n\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t  <td >To</td>\n\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"educationEnd\"   name=\"educationEnd\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">??????MM/DD/YYYY</small>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Major ?????? <br><small class=\"form-text text-muted\">???????????????????????????</small></td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"major\"  name=\"major\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Degree ?????? <br><small class=\"form-text text-muted\">BS/BA/BM/BE?????????????????????????????????</small></td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"Degree\"  name=\"Degree\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t  <td colspan=\"2\">Overall GPA<br><small class=\"form-text text-muted\">??????????????????????????????????????????</small>\n\t\t\t\t\t\t\t\t  <br><small class=\"form-text text-muted\">??????????????????????????????????????????????????????????????????????????????(????????????????????)/ ????????????</small>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t  <td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"GPA\"  name=\"GPA\" style=\"width: 400px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">????????? XXX/100,  XXX/4.0  or  _____/_____</small>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Major GPA ??????GPA <br><small class=\"form-text text-muted\">????????????????????????</small></td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"MajorGPA\"  name=\"MajorGPA\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Second Degree or Minor ??????????????????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"SecondDegree\"  name=\"SecondDegree\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t  <td colspan=\"2\">Overall GPA<br><small class=\"form-text text-muted\">??????????????????????????????????????????</small>\n\t\t\t\t\t\t\t\t  <br><small class=\"form-text text-muted\">??????????????????????????????????????????????????????????????????????????????(????????????????????)/ ????????????</small>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t  <td colspan=\"3\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"SecondGPA\"  name=\"SecondGPA\" style=\"width: 400px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">????????? XXX/100,  XXX/4.0  or  _____/_____</small>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >????????????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"other\"  name=\"other\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td colspan=\"4\"></td>\n\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t  <button  class=\"btn btn-primary\" >??????</button>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t  \t</table> \n\t\t\t\t\t</form>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" *ngIf=\"education.length > 0\">\n\t\t\t\t\t\t<div class=\"panel panel-primary\" *ngFor=\"let k of education\">\n\t\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t\t\thref=\"#{{k._id}}\">\n\t\t\t\t\t\t\t\t<b>{{k.educationName}} </b> ({{k.type}})\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div id=\"{{k._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"width: 30%; background-color: lightgray;\">University ??????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"width: 70%;\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.educationName}}\n\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Address ????????????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.educationLocation}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">???????????? </td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">From</td>\n\t\t\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.educationStart}}\n\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">To</td>\n\t\t\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.educationEnd}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Major ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.major}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Degree ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.Degree}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Overall GPA\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.GPA}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Major GPA ??????GPA </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.MajorGPA}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Second Degree or Minor ??????????????????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.SecondDegree}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Overall GPA\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.SecondGPA}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">????????????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{k.other}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>  \n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\n\t\t\t\t  <div id=\"Experience\" class=\"tab-pane fade\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t<h4>??????????????????part?????????PS?????????????????????</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#demo2\">????????????/????????????</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"demo2\" class=\"collapse\"><hr>\n\t\t\t\t\t\t<form (submit)=\"addExperience(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n\t\t\t\t\t  <fieldset class=\"form-group\">\n\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >??????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <div class=\"form-check\" >\n\t\t\t\t\t\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"experiencetype\" id=\"experiencetype1\" value=\"????????????\"  ngModel required>\n\t\t\t\t\t\t\t\t\t\t????????????\n\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"form-check-input\" name=\"experiencetype\" id=\"experiencetype2\" value=\"????????????\"  ngModel required>\n\t\t\t\t\t\t\t\t\t\t????????????\n\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t</tr>\t\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Company/Institution <br> ??????/???????????? </td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"institution\"  name=\"institution\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">???????????????/??????????????????</small>\n\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Address ??????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"institutionLocation\"  name=\"institutionLocation\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">?????????????????????</small>\n\t  \n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >???????????? </td>\n\t\t\t\t\t\t\t  <td >From</td>\n\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"experienceStart\"   name=\"experienceStart\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">??????MM/DD/YYYY</small>\n\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t  <td >To</td>\n\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"experienceEnd\"   name=\"experienceEnd\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">??????MM/DD/YYYY</small>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Position or Title ??????<br><small class=\"form-text text-muted\">?????????????????????????????????Offer Letter??????</small></td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"experienceposition\"  name=\"experienceposition\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Responsibilities ?????? </td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"responsibilities\"  name=\"responsibilities\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Project  ???????????? <br><small class=\"form-text text-muted\">?????????SOAR???????????????</small>\n\t\t\t\t\t\t\t\t<br>Situation?????? <br> Obstacle??????<br>Activity??????<br>Result??????\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"project\"  name=\"project\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"5\">\t\n\t\t\t\t\t\t\t\t\t<p>????????? SOAR ??????</p><br>\n\t\t\t\t\t\t\t\t\t<p>\tSOAR ???Situation, Obstacle, Activities and Result??? ???????????????????????????????????????</p><br>\n\t\t\t\t\t\t\t\t\t<p> Situation: ?????????????????????????????????????????????????????????????????????????????????</p><br>\n\t\t\t\t\t\t\t\t\t<p>\tObstacle:  ????????????????????????????????????????????????????????????????????????</p><br>\n\t\t\t\t\t\t\t\t\t<p>\tActivities??? ?????????????????????????????????????????????????????????????????????????????????</p><br>\n\t\t\t\t\t\t\t\t\t<p>\tResult: ?????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p><br>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p>\t??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n\t\t\t\t\t\t\t\t\t\t?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????Situation ???Obstacle, ??????Activities ???Results ????????????????????????????????????????????????SOAR?????????????????????????????????????????????????????????????????????????????????????????????SOAR????????????????????????????????????</p>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <td >Achievement ??????</td>\n\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"achievement\"  name=\"achievement\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"4\"></td>\n\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-primary\" >??????</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t  </table>\n\t\t\t\t\t  </fieldset>\n\t\t\t\t\t  </form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\" *ngIf=\"experience.length > 0\">\n\t\t\t\t\t\t<div class=\"panel panel-primary\" *ngFor=\"let e of experience\">\n\t\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t  <a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t\t\thref=\"#{{e._id}}\">\n\t\t\t\t\t\t\t\t<b>{{e.institution}} </b> ({{e.type}})\n\t\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div id=\"{{e._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"width: 30%; background-color: lightgray;\">Company/Institution <br> ??????/???????????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"width: 70%;\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.institution}}\n\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Address ??????</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.institutionLocation}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">???????????? </td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">From</td>\n\t\t\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.experienceStart}}\n\t\t\t\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">To</td>\n\t\t\t\t\t\t\t\t\t\t<td >\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.experienceEnd}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Position or Title ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.experienceposition}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Responsibilities ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.responsibilities}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr >\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Project  ???????????? \n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.project}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"background-color: lightgray;\">Achievement ?????? </td>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t\t{{e.achievement}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t  </tr> \n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"Publication\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t  <h4>??????????????????????????????????????????????????????????????????</h4>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"col-sm-2\">\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#demo3\">????????????</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"demo3\" class=\"collapse\"><hr>\n\t\t\t\t\t<p>?????????????????????????????????????????????????????????????????????????????????????????????</p><br><p>?????????Study on the Risk of Oversea M&A under the Background of Financial Crisis- in the case of China. Market Modernization 11 2009.10</p>\n\t\t\t\t\t<form (submit)=\"addPublication(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n\t\t\t\t  <fieldset class=\"form-group\">\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t  <tbody>\t\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Title ????????????</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"PublicationTitle\"  name=\"PublicationTitle\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >??????</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"PublicationJournal\"  name=\"PublicationJournal\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >???????????? </td>\n\t\t\t\t\t\t  <td colspan=\"4\">\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"PublicationDate\"  name=\"PublicationDate\" type=\"date\" placeholder=\"date\" style=\"width:50%\" ngModel >\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Link ?????? </td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"PublicationLink\"  name=\"PublicationLink\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Authors </td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"PublicationAuthors\"  name=\"PublicationAuthors\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Abstract ??????</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"PublicationAbstract\"  name=\"PublicationAbstract\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Level ??????</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"PublicationLevel\"  name=\"PublicationLevel\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td colspan=\"4\"></td>\n\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t  <button  class=\"btn btn-primary\" >??????</button>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t  </tbody>\n\t\t\t\t  </table>\n\t\t\t\t  </fieldset>\n\t\t\t\t  </form>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"panel-group\" id=\"accordion\" *ngIf=\"publication.length > 0\">\n\t\t\t\t\t  <div class=\"panel panel-primary\" *ngFor=\"let p of publication\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t  <h4 class=\"panel-title\">\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t\t  href=\"#{{p._id}}\">\n\t\t\t\t\t\t\t  <b>{{p.PublicationTitle}} </b> \n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"{{p._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t\t  <table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t  <td style=\"width: 30%; background-color: lightgray;\">??????</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\" style=\"width: 70%;\">\t\n\t\t\t\t\t\t\t\t\t\t  {{p.PublicationJournal}}\n\t\t\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">????????????</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{p.PublicationDate}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Link ?????? </td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{p.PublicationLink}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Authors</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{p.PublicationAuthors}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Abstract ??????\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{p.PublicationAbstract}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Level ??????</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{p.PublicationLevel}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr> \n\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"Honors\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t  <h4>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</h4>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"col-sm-2\">\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#demo6\">????????????</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"demo6\" class=\"collapse\"><hr>\n\t\t\t\t\t<form (submit)=\"addHonor(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n\t\t\t\t  \t<fieldset class=\"form-group\">\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t  <tbody>\t\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Prize?????????????????????????????????????????????project?????????\t</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"prize\"  name=\"prize\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >?????????</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"percentage\"  name=\"percentage\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">?????????TOP???????????????????????????????????????????????????????????????????????????????????????/???????????????????????????1???????????????2???????????????100????????????top 2%</small>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Date?????? </td>\n\t\t\t\t\t\t  <td colspan=\"4\">\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"honorDate\"   name=\"honorDate\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">??????MM/DD/YYYY</small>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Grantor ???????????? </td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"grantor\"  name=\"grantor\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td colspan=\"4\"></td>\n\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t  <button  class=\"btn btn-primary\" >??????</button>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t  </tbody>\n\t\t\t\t \t </table>\n\t\t\t\t  \t</fieldset>\n\t\t\t\t  \t</form>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"panel-group\" id=\"accordion\" *ngIf=\"honor.length > 0\">\n\t\t\t\t\t  <div class=\"panel panel-primary\" *ngFor=\"let h of honor\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t  <h4 class=\"panel-title\">\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t\t  href=\"#{{h._id}}\">\n\t\t\t\t\t\t\t  <b>{{h.prize}} </b> \n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"{{h._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t\t  <table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t  <td style=\"width: 30%; background-color: lightgray;\">Date ??????</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\" style=\"width: 70%;\">\t\n\t\t\t\t\t\t\t\t\t\t  {{h.honorDate}}\n\t\t\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Prize?????????????????????????????????????????????project?????????\t</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{h.prize}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">????????? </td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{h.percentage}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Grantor ????????????</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{h.grantor}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"Activities\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t  <h4></h4>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"col-sm-2\">\n\t\t\t\t\t\t  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#demo4\">??????????????????</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"demo4\" class=\"collapse\"><hr>\n\t\t\t\t\t<p>?????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>\n\t\t\t\t\t<form (submit)=\"addActivity(postForm)\" #postForm=\"ngForm\" ngNativeValidate>\n\t\t\t\t  <fieldset class=\"form-group\">\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t  <tbody>\t\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Organization ??????????????? </td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"activityOrganization\"  name=\"activityOrganization\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >???????????? </td>\n\t\t\t\t\t\t  <td >From</td>\n\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"activityStart\"   name=\"activityStart\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">?????? MM/YYYY</small>\n\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t  <td >To</td>\n\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"activityEnd\"   name=\"activityEnd\" style=\"width: 200px;\" ngModel>\n\t\t\t\t\t\t\t  <small class=\"form-text text-muted\">?????? MM/YYYY</small>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Position ????????????</td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"activityPosition\"  name=\"activityPosition\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td >Description of Position & Activities ????????????????????????????????? <br><small class=\"form-text text-muted\">???eg: ???????????????????????????????????????????????????</small></td>\n\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t  <input class=\"form-control\" id=\"activityDescription\"  name=\"activityDescription\" style=\"width: 800px;\" ngModel>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t  <td colspan=\"4\"></td>\n\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t  <button  class=\"btn btn-primary\" >??????</button>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t  </tbody>\n\t\t\t\t  </table>\n\t\t\t\t  </fieldset>\n\t\t\t\t  </form>\n\t\t\t\t  </div>\n\t\t\t\t  <hr>\n\t\t\t\t  <div class=\"panel-group\" id=\"accordion\" *ngIf=\"activity.length > 0\">\n\t\t\t\t\t  <div class=\"panel panel-primary\" *ngFor=\"let a of activity\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t  <h4 class=\"panel-title\">\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" \n\t\t\t\t\t\t\t  href=\"#{{a._id}}\">\n\t\t\t\t\t\t\t  <b>{{a.activityOrganization}} </b>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"{{a._id}}\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t\t  <table class=\"table table-bordered\" >\n\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t\t  <td style=\"width: 30%; background-color: lightgray;\">Organization ???????????????</td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\" style=\"width: 70%;\">\t\n\t\t\t\t\t\t\t\t\t\t  {{a.activityOrganization}}\n\t\t\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">???????????? </td>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">From</td>\n\t\t\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t\t\t  {{a.activityStart}}\n\t\t\t\t\t\t\t\t\t  </td>\t\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">To</td>\n\t\t\t\t\t\t\t\t\t  <td >\t\n\t\t\t\t\t\t\t\t\t\t  {{a.activityEnd}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Position ???????????? </td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{a.activityPosition}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t  <td style=\"background-color: lightgray;\">Description of Position & Activities ?????????????????????????????????  </td>\n\t\t\t\t\t\t\t\t\t  <td colspan=\"4\">\t\n\t\t\t\t\t\t\t\t\t\t  {{a.activityDescription}}\n\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t</tr> \n\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t\t  <div id=\"skills\" class=\"tab-pane fade\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<table class=\"table table-bordered\" >\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t\t\t\t\t<p>????????????????????????: C (2 yrs ) C++ JAVA (5 yrs )Python; ????????????SPSS, SAS, Stata; ???????????????Eview;????????????UFIDA, ERP; ???????????? Bloomberg Reuters </p> <br> <b>??????????????????????????????????????????</b> \n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Language Ability ????????????</td>\n\t\t\t\t\t\t\t<td style=\"width: 900px;\">\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Language\" value=\"{{student.Language}}\" [(ngModel)]=\"Language\"  name=\"Language\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Computer Skills ???????????????</td>\n\t\t\t\t\t\t\t<td style=\"width: 900px;\">\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"ComputerSkills\" value=\"{{student.ComputerSkills}}\" [(ngModel)]=\"ComputerSkills\"  name=\"ComputerSkills\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Other Skills & Certificates <br> ????????????????????? <br><small class=\"form-text text-muted\">??????: CFA CPA ??????????????????</small></td>\n\t\t\t\t\t\t\t<td style=\"width: 900px;\">\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"OtherSkills\" value=\"{{student.OtherSkills}}\" [(ngModel)]=\"OtherSkills\"  name=\"OtherSkills\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\t\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td >Hobbies ?????? <br><small class=\"form-text text-muted\">?????? 10????????????????????????????????? 6?????????????????????????????????10???</small></td>\n\t\t\t\t\t\t\t<td style=\"width: 900px;\">\t\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"Hobbies\" value=\"{{student.Hobbies}}\" [(ngModel)]=\"Hobbies\"  name=\"Hobbies\" style=\"width: 800px;\" disabled=\"\">\n\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t  </div>\n\n\n\n\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/studentresume/studentresume.component.scss":
/*!************************************************************!*\
  !*** ./src/app/studentresume/studentresume.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 200px; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZGVudHJlc3VtZS9zdHVkZW50cmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50cmVzdW1lL3N0dWRlbnRyZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgaGVpZ2h0IG9mIHRoZSBncmlkIHNvIC5zaWRlbmF2IGNhbiBiZSAxMDAlIChhZGp1c3QgaWYgbmVlZGVkKSAqL1xuLnJvdy5jb250ZW50IHtoZWlnaHQ6IDE1MDBweH1cbiAgICBcbi8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/studentresume/studentresume.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/studentresume/studentresume.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentresComponent", function() { return StudentresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../education.service */ "./src/app/education.service.ts");
/* harmony import */ var _experience_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../experience.service */ "./src/app/experience.service.ts");
/* harmony import */ var _publication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../publication.service */ "./src/app/publication.service.ts");
/* harmony import */ var _activity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../activity.service */ "./src/app/activity.service.ts");
/* harmony import */ var _honor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../honor.service */ "./src/app/honor.service.ts");










var StudentresComponent = /** @class */ (function () {
    function StudentresComponent(stService, http, route, router, educationService, experienceService, publicationService, activityService, honorService) {
        var _this = this;
        this.stService = stService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.educationService = educationService;
        this.experienceService = experienceService;
        this.publicationService = publicationService;
        this.activityService = activityService;
        this.honorService = honorService;
        this.students = [];
        //school ??????
        this.schools = [];
        this.school = [];
        //??????????????????
        this.educations = [];
        this.education = [];
        //??????????????????
        this.experiences = [];
        this.experience = [];
        //??????
        this.publications = [];
        this.publication = [];
        //????????????
        this.activitys = [];
        this.activity = [];
        //??????
        this.honors = [];
        this.honor = [];
        this.route.queryParams.subscribe(function (params) {
            _this.studentUserAcc = params["studentUserAcc"];
            _this.studentID = params["studentID"];
        });
    }
    StudentresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentUserAcc) {
                    _this.student = h;
                    console.log("????????????" + _this.student.lastName);
                }
            }
            _this.studentID = _this.student._id;
            console.log("??????id???" + _this.studentID);
        });
        //?????? ????????? ????????????
        this.http.get('/api/schools/').subscribe(function (orderData) {
            _this.schools = orderData.schools;
            console.log(_this.studentID);
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.userAccount === _this.studentID) {
                    _this.school.push(x);
                    //console.log(this.school);
                }
            }
            console.log(_this.school);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/educations/').subscribe(function (Data) {
            _this.educations = Data.educations;
            for (var _i = 0, _a = _this.educations; _i < _a.length; _i++) {
                var y = _a[_i];
                if (y.userAccount === _this.studentID) {
                    _this.education.push(y);
                }
            }
            console.log("?????????????????????" + _this.education);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/experiences/').subscribe(function (Data) {
            _this.experiences = Data.experiences;
            for (var _i = 0, _a = _this.experiences; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.userAccount === _this.studentID) {
                    _this.experience.push(i);
                }
            }
            console.log("?????????????????????" + _this.experience);
        });
        //?????? ????????? ????????????
        this.http.get('/api/publications/').subscribe(function (Data) {
            _this.publications = Data.publications;
            for (var _i = 0, _a = _this.publications; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p.userAccount === _this.studentID) {
                    _this.publication.push(p);
                }
            }
            console.log("???????????????" + _this.publication);
        });
        //?????? ????????? ??????????????????
        this.http.get('/api/activitys/').subscribe(function (Data) {
            _this.activitys = Data.activitys;
            for (var _i = 0, _a = _this.activitys; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a.userAccount === _this.studentID) {
                    _this.activity.push(a);
                }
            }
            console.log("?????????????????????" + _this.activity);
        });
        //?????? ????????? ????????????
        this.http.get('/api/honors/').subscribe(function (Data) {
            _this.honors = Data.honors;
            for (var _i = 0, _a = _this.honors; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentID) {
                    _this.honor.push(h);
                }
            }
            console.log("???????????????" + _this.honor);
        });
        this.stSub = this.stService.getstudentsUpdatedListener().subscribe(function (students) {
            _this.students = students;
        });
    };
    StudentresComponent.prototype.modifyPersonal = function () {
        //Skills & Hobbies
        document.getElementById("Language").removeAttribute("disabled");
        document.getElementById("ComputerSkills").removeAttribute("disabled");
        document.getElementById("OtherSkills").removeAttribute("disabled");
        document.getElementById("Hobbies").removeAttribute("disabled");
        document.getElementById("updatePersonal").removeAttribute("disabled");
        document.getElementById("modifyPersonal").setAttribute("disabled", "");
    };
    StudentresComponent.prototype.updatePersonal = function () {
        var Student = {
            userAccount: this.studentUserAcc,
            firstName: this.student.firstName,
            lastName: this.student.lastName,
            email: this.student.email,
            phone: this.student.phone,
            dob: this.student.dob,
            currentAddress: this.student.currentAddress,
            permanentAddress: this.student.permanentAddress,
            gender: this.student.gender,
            ssn: this.student.ssn,
            passport: this.student.passport,
            visa: this.student.visa,
            appEmail: this.student.appEmail,
            appPsw: this.student.appPsw,
            citizen: this.student.citizen,
            //???????????????
            TOEFL: this.student.TOEFL,
            TOEFLR: this.student.TOEFLR,
            TOEFLL: this.student.TOEFLL,
            TOEFLS: this.student.TOEFLS,
            TOEFLW: this.student.TOEFLW,
            GRE: this.student.GRE,
            GREV: this.student.GREV,
            GREVP: this.student.GREVP,
            GREQ: this.student.GREQ,
            GREQP: this.student.GREQP,
            GREW: this.student.GREW,
            GREWP: this.student.GREWP,
            GMAT: this.student.GMAT,
            GMATV: this.student.GMATV,
            GMATVP: this.student.GMATVP,
            GMATQ: this.student.GMATQ,
            GMATQP: this.student.GMATQP,
            GMATW: this.student.GMATW,
            GMATWP: this.student.GMATWP,
            GMATR: this.student.GMATR,
            GMATRP: this.student.GMATRP,
            OtherStandardTest: this.student.OtherStandardTest,
            //Skills & Hobbies
            Language: document.getElementById("Language").value,
            ComputerSkills: document.getElementById("ComputerSkills").value,
            OtherSkills: document.getElementById("OtherSkills").value,
            Hobbies: document.getElementById("Hobbies").value,
            //Professional Interest????????????
            Professional1: this.student.Professional1,
            Professional2: this.student.Professional2,
            Professional3: this.student.Professional3,
            //Career Plan????????????
            CareerPlan1: this.student.CareerPlan1,
            CareerPlan2: this.student.CareerPlan2,
            //Personal Strength????????????
            Strength1: this.student.Strength1,
            Strength2: this.student.Strength2,
            //????????????
            MomName: this.student.MomName,
            MomAddress: this.student.MomAddress,
            MomOrganazation: this.student.MomOrganazation,
            MomJob: this.student.MomJob,
            MomEducation: this.student.MomEducation,
            MomSchool: this.student.MomSchool,
            MomGraduation: this.student.MomGraduation,
            MomPhone: this.student.MomPhone,
            MomEmail: this.student.MomEmail,
            //????????????
            FatName: this.student.FatName,
            FatAddress: this.student.FatAddress,
            FatOrganazation: this.student.FatOrganazation,
            FatJob: this.student.FatJob,
            FatEducation: this.student.FatEducation,
            FatSchool: this.student.FatSchool,
            FatGraduation: this.student.FatGraduation,
            FatPhone: this.student.FatPhone,
            FatEmail: this.student.FatEmail,
        };
        this.http.put('/api/students/' + this.studentUserAcc, Student)
            .subscribe(function (data) {
            var options = {
                overlay: true,
                overlayClickToClose: true,
                showCloseButton: true,
                duration: 5000
            };
        });
        alert("????????????????????????!!" + this.student.firstName);
        window.location.reload();
    };
    StudentresComponent.prototype.addEducation = function (form) {
        var educationType = "";
        var type1 = document.getElementById("type1");
        var type2 = document.getElementById("type2");
        var type3 = document.getElementById("type3");
        if (type1.checked == true) {
            educationType = "??????";
        }
        if (type2.checked == true) {
            educationType = "??????";
        }
        if (type3.checked == true) {
            educationType = "?????????";
        }
        var educationName = document.getElementById("educationName").value;
        var educationLocation = document.getElementById("educationLocation").value;
        var educationStart = document.getElementById("educationStart").value;
        var educationEnd = document.getElementById("educationEnd").value;
        var major = document.getElementById("major").value;
        var Degree = document.getElementById("Degree").value;
        var GPA = document.getElementById("GPA").value;
        var MajorGPA = document.getElementById("MajorGPA").value;
        var SecondDegree = document.getElementById("SecondDegree").value;
        var SecondGPA = document.getElementById("SecondGPA").value;
        var other = document.getElementById("other").value;
        console.log("School??????" + educationType + "????????????" + educationName);
        this.educationService.addEducation("", this.studentID, educationType, educationName, educationLocation, educationStart, educationEnd, major, Degree, GPA, MajorGPA, SecondDegree, SecondGPA, other);
        alert("????????????????????????!!");
        window.location.reload();
    };
    StudentresComponent.prototype.addExperience = function (form) {
        var experiencetype = "";
        var experiencetype1 = document.getElementById("experiencetype1");
        var experiencetype2 = document.getElementById("experiencetype2");
        if (experiencetype1.checked == true) {
            experiencetype = "????????????";
        }
        if (experiencetype2.checked == true) {
            experiencetype = "????????????";
        }
        var institution = document.getElementById("institution").value;
        var institutionLocation = document.getElementById("institutionLocation").value;
        var experienceStart = document.getElementById("experienceStart").value;
        var experienceEnd = document.getElementById("experienceEnd").value;
        var experienceposition = document.getElementById("experienceposition").value;
        var responsibilities = document.getElementById("responsibilities").value;
        var project = document.getElementById("project").value;
        var achievement = document.getElementById("achievement").value;
        //console.log("School???" + form.value.type );
        this.experienceService.addExperience("", this.studentID, experiencetype, institution, institutionLocation, experienceStart, experienceEnd, experienceposition, responsibilities, project, achievement);
        alert("????????????????????????!!");
        window.location.reload();
    };
    StudentresComponent.prototype.addPublication = function (form) {
        var PublicationTitle = document.getElementById("PublicationTitle").value;
        var PublicationJournal = document.getElementById("PublicationJournal").value;
        var PublicationDate = document.getElementById("PublicationDate").value;
        var PublicationLink = document.getElementById("PublicationLink").value;
        var PublicationAuthors = document.getElementById("PublicationAuthors").value;
        var PublicationAbstract = document.getElementById("PublicationAbstract").value;
        var PublicationLevel = document.getElementById("PublicationLevel").value;
        //console.log("School???" + form.value.type );
        this.publicationService.addPublication("", this.studentID, PublicationTitle, PublicationJournal, PublicationDate, PublicationLink, PublicationAuthors, PublicationAbstract, PublicationLevel);
        alert("??????????????????!!");
        window.location.reload();
    };
    StudentresComponent.prototype.addActivity = function (form) {
        var activityOrganization = document.getElementById("activityOrganization").value;
        var activityStart = document.getElementById("activityStart").value;
        var activityEnd = document.getElementById("activityEnd").value;
        var activityPosition = document.getElementById("activityPosition").value;
        var activityDescription = document.getElementById("activityDescription").value;
        //console.log("School???" + form.value.type );
        this.activityService.addActivity("", this.studentID, activityOrganization, activityStart, activityEnd, activityPosition, activityDescription);
        alert("????????????????????????!!");
        window.location.reload();
    };
    StudentresComponent.prototype.addHonor = function (form) {
        var honorDate = document.getElementById("honorDate").value;
        var prize = document.getElementById("prize").value;
        var percentage = document.getElementById("percentage").value;
        var grantor = document.getElementById("grantor").value;
        console.log("????????????" + prize);
        this.honorService.addHonor("", this.studentID, honorDate, prize, percentage, grantor);
        alert("??????????????????!!");
        window.location.reload();
    };
    //direct to the student main page
    StudentresComponent.prototype.studentmain = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    //direct to the ?????????????????? page
    StudentresComponent.prototype.info = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentinfo'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentresComponent.prototype.addRecom = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentaddrecomm'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentresComponent.prototype.rec = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentrec'], navigationExtras);
    };
    //direct to the ???????????? page
    StudentresComponent.prototype.resume = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentresume'], navigationExtras);
    };
    StudentresComponent.prototype.ngOnDestroy = function () {
        this.stSub.unsubscribe();
    };
    StudentresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentresume',
            template: __webpack_require__(/*! ./studentresume.component.html */ "./src/app/studentresume/studentresume.component.html"),
            styles: [__webpack_require__(/*! ./studentresume.component.scss */ "./src/app/studentresume/studentresume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_st_service__WEBPACK_IMPORTED_MODULE_2__["StService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _education_service__WEBPACK_IMPORTED_MODULE_5__["EducationService"],
            _experience_service__WEBPACK_IMPORTED_MODULE_6__["ExperienceService"],
            _publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"],
            _activity_service__WEBPACK_IMPORTED_MODULE_8__["ActivityService"],
            _honor_service__WEBPACK_IMPORTED_MODULE_9__["HonorService"]])
    ], StudentresComponent);
    return StudentresComponent;
}());



/***/ }),

/***/ "./src/app/studentschool/studentschool.component.html":
/*!************************************************************!*\
  !*** ./src/app/studentschool/studentschool.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" >{{student.firstName}} {{student.lastName}}</a>\n      </div>\n      <div class=\"nav  navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a (click)=\"studentmain(student)\">Home</a></li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              ????????? <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a (click)=\"rec(student)\">?????????????????????</a></li>\n              <li><a (click)=\"addRecom(student)\">?????????????????????</a></li>\n            </ul>\n          </li>\n          <li class=\"nav navbar-nav navbar-right\">\n            <a href=\"/mainpage\">Log Out</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\t  <div class=\"container-fluid\">\n\t\t<div class=\"row content\">\n\t\t  <div class=\"col-sm-3 sidenav\">\n\t\t\t  <h3></h3>\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t  <li ><a (click)=\"studentmain(student)\">????????????</a></li>\n\t\t\t\t<li ><a >????????????</a></li>\n\t\t\t\t<li ><a (click)=\"info(student)\">????????????</a></li>\n\t\t\t\t<li ><a (click)=\"resume(student)\">????????????</a></li>\n\t\t\t\t<li ><a (click)=\"rec(student)\">???????????????</a></li>\n\t\t\t\t<li><a (click)=\"addRecom(student)\">???????????????</a></li>\n\t\t\t</ul><br>\t\n\t\t  </div>\n\t  \n\t\t  <div class=\"col-sm-9\">\n\t\t  <hr>\n\t\t  <h3>????????????</h3>\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col-sm-7\"><b>{{school.state}} </b></div>\n\t\t\t</div>\n\t\t  <br>\n\t\t  <hr>\n\t\t  <h3>??????????????????\n\t\t\t<a href=\"{{school.link}}\">\n\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span>\n\t\t\t   </a>\n\t\t  </h3>\n\t\t  \n\t\t  <br>\n\t\t  <form id=\"form1\" action=\"\" method=\"post\">\n\t\t\t<table>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>University\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\t\t\n\t\t\t\t\t  <input class=\"form-control\" id=\"univName\" value=\"{{school.univName}}\" [(ngModel)]=\"univName\"  name=\"univName\" style=\"width: 785px;\" disabled=\"\"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t  <td>School</td>\n\t\t\t\t\t  <td><div class=\"input-group\">\n\t\t\t\t\t\t<input  class=\"form-control\" id=\"schoolName\" [(ngModel)]=\"schoolName\" value=\"{{school.schoolName}}\"  name=\"schoolName\" style=\"width: 785px;\" disabled=\"\"></div>\n\t\t\t\t\t  </td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t  <td>Major\n\t\t\t\t\t  </td>\n\t\t\t\t\t  <td><div class=\"input-group\">\n\t\t\t\t\t\t<input  class=\"form-control\" value=\"{{school.majorName}}\" [(ngModel)]=\"majorName\"  id=\"majorName\"  name=\"majorName\" disabled=\"\" style=\"width: 785px;\"></div>\n\t\t\t\t\t  </td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>Deadline 1\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.ddl1}}\" [(ngModel)]=\"ddl1\"  id=\"ddl1\"  name=\"ddl1\" disabled=\"\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>Deadline 2\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.ddl2}}\" [(ngModel)]=\"ddl2\"  id=\"ddl2\" name=\"ddl2\"  disabled=\"\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>Deadline 3\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.ddl3}}\" [(ngModel)]=\"ddl3\"  id=\"ddl3\"  name=\"ddl3\" disabled=\"\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  \n\t\t\t\t  <tr>\n\t\t\t\t\t<td>Interview\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.interview}}\" [(ngModel)]=\"interview\"  id=\"interview\" disabled=\"\" name=\"interview\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>Video Essay\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.videoEssay}}\" [(ngModel)]=\"videoessay\"  id=\"videoessay\" disabled=\"\" name=\"videoessay\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>Link\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.link}}\" [(ngModel)]=\"link\"  id=\"link\"  name=\"link\" disabled=\"\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>????????????\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.applyAccount}}\" [(ngModel)]=\"applyAccount\"  id=\"applyAccount\" disabled=\"\" name=\"applyAccount\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>????????????\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.applyPassword}}\" [(ngModel)]=\"applyPassword\"  id=\"applyPassword\" disabled=\"\" name=\"applyPassword\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>???????????????\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><div class=\"input-group\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"{{school.recommNumber}}\" [(ngModel)]=\"recommNumber\"  id=\"recommNumber\" disabled=\"\" name=\"recommNumber\" style=\"width: 785px; \"></div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t  \n\t\t\t</table>\n\t\t  </form>\n\t\t  <hr>\n\t\t  <h3>?????????</h3>\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col-sm-4 tuijian\">\n\t\t\t\t<h4>\n\t\t\t\t  ???????????????????????????????????????\n\t\t\t\t  <small class=\"text-muted\">{{recomletters.length}}</small>\n\t\t\t\t</h4>\n\t\t\t\t<div *ngIf=\"recomletters.length > 0\">\n\t\t\t\t  <div class=\"panel-group\" id=\"accordion\" *ngFor=\"let l of recomletters\">\n\t\t\t\t\t<div class=\"panel panel-success\" *ngIf=\"l.state=='?????????'\">\n\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-9\"><b>{{l.recommenderName}} </b></div>\n\t\t\t\t\t\t\t<div class=\"col-sm-3\"><small>{{l.state}}</small></div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t  <div class=\"col-sm-12\">?????????<b>{{l.type}} </b></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel panel-default\" *ngIf=\"l.state=='?????????'\">\n\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-9\"><b>{{l.recommenderName}} </b></div>\n\t\t\t\t\t\t\t<div class=\"col-sm-3\"><small>{{l.state}}</small></div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t  <div class=\"col-sm-12\">?????????<b>{{l.type}} </b></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel panel-danger\" *ngIf=\"l.state=='??????'\">\n\t\t\t\t\t  <div class=\"panel-heading\">\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-9\"><b>{{l.recommenderName}} </b></div>\n\t\t\t\t\t\t\t<div class=\"col-sm-3\"><small>{{l.state}}</small></div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t  <div class=\"col-sm-12\">?????????<b>{{l.type}} </b></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t<hr>\n\t\t<h3>??????</h3>\n\t\t<div class=\"col-sm-8 tuijian\">\n            <h4>\n              ????????????????????????????????????\n              <small class=\"text-muted\">{{statements.length}}</small>\n            </h4>\n\n            <div class=\"container\" *ngIf=\"statements.length > 0\">\n              <div class=\"row clearfix\" *ngFor=\"let st of statements\">\n                <div class=\"col-md-8 column\">\n                  <div class=\"panel panel-info\" >\n                    <div class=\"panel-heading\" >\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{st._id}}\">\n                      <b> {{st.stype}} </b> ??? {{st.words}} ?????? <br>\n                      </a>\n                    </h4>\n                    </div>\n                    <div id=\"{{st._id}}\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                      {{st.question}}\n                    </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\t\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/studentschool/studentschool.component.scss":
/*!************************************************************!*\
  !*** ./src/app/studentschool/studentschool.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n.row.content {\n  height: 1500px; }\n/* Set gray background color and 100% height */\n.sidenav {\n  background-color: #f1f1f1;\n  height: 100%;\n  width: 200px; }\n/* On small screens, set height to 'auto' for sidenav and grid */\n@media screen and (max-width: 767px) {\n  .sidenav {\n    height: auto;\n    padding: 15px; }\n  .row.content {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZGVudHNjaG9vbC9zdHVkZW50c2Nob29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFBO0FBQ0E7RUFBYyxjQUFjLEVBQUE7QUFFNUIsOENBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBSWQsZ0VBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUVmO0lBQWMsWUFBWSxFQUFBLEVBQUciLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50c2Nob29sL3N0dWRlbnRzY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgaGVpZ2h0IG9mIHRoZSBncmlkIHNvIC5zaWRlbmF2IGNhbiBiZSAxMDAlIChhZGp1c3QgaWYgbmVlZGVkKSAqL1xuLnJvdy5jb250ZW50IHtoZWlnaHQ6IDE1MDBweH1cbiAgICBcbi8qIFNldCBncmF5IGJhY2tncm91bmQgY29sb3IgYW5kIDEwMCUgaGVpZ2h0ICovXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5cbi8qIE9uIHNtYWxsIHNjcmVlbnMsIHNldCBoZWlnaHQgdG8gJ2F1dG8nIGZvciBzaWRlbmF2IGFuZCBncmlkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnJvdy5jb250ZW50IHtoZWlnaHQ6IGF1dG87fSBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/studentschool/studentschool.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/studentschool/studentschool.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentschoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentschoolComponent", function() { return StudentschoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../st.service */ "./src/app/st.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StudentschoolComponent = /** @class */ (function () {
    function StudentschoolComponent(stService, http, route, router) {
        var _this = this;
        this.stService = stService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.students = [];
        //school ??????
        this.schools = [];
        //???????????????
        this.recomletters = [];
        //????????????
        this.statements = [];
        this.route.queryParams.subscribe(function (params) {
            _this.studentUserAcc = params["studentUserAcc"];
            _this.studentID = params["studentID"];
            _this.schoolID = params["schoolID"];
        });
    }
    StudentschoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/students').subscribe(function (Data) {
            _this.students = Data.students;
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.userAccount === _this.studentUserAcc) {
                    _this.student = h;
                    console.log("????????????" + _this.student.lastName);
                }
            }
            // this.studentID = this.student._id;
            console.log("??????id???" + _this.studentID);
        });
        //?????? ???????????????????????????
        this.http.get('/api/schools').subscribe(function (Data) {
            //console.log(orderData);
            _this.schools = Data.schools;
            for (var _i = 0, _a = _this.schools; _i < _a.length; _i++) {
                var s = _a[_i];
                if (s._id === _this.schoolID) {
                    //console.log("????????????");
                    _this.school = s;
                    _this.state = _this.school.state; //????????????????????????????????????????????????offer??????????????????
                    _this.univName = _this.school.univName; //????????????
                    _this.schoolName = _this.school.schoolName; //????????????
                    _this.majorName = _this.school.majorName; //????????????
                    _this.ddl1 = _this.school.ddl1; //DDL 1
                    _this.ddl2 = _this.school.ddl2; //DDL 2
                    _this.ddl3 = _this.school.ddl3; //DDL 3
                    _this.interview = _this.school.interview; //?????? ???????????????-????????????????????????
                    _this.videoEssay = _this.school.videoEssay; // videoEssay(????????????????????????????????????????????????)
                    _this.link = _this.school.link; //??????
                    _this.applyAccount = _this.school.applyAccount; //????????????
                    _this.applyPassword = _this.school.applyPassword; //???????????????
                    _this.recommNumber = _this.school.recommNumber; //???????????????
                    _this.other = _this.school.other;
                }
            }
        });
        //?????? ??????????????? ????????? ??????
        this.http.get('/api/schoolrecomletterlist/' + this.schoolID).subscribe(function (Data) {
            //console.log(Data);
            _this.recomletters = Data.recomletters;
        });
        //?????? ??????????????? ?????? ??????
        this.http.get('/api/statementdetail/' + this.schoolID).subscribe(function (Data) {
            //console.log(Data);
            _this.statements = Data.statements;
        });
        this.stSub = this.stService.getstudentsUpdatedListener().subscribe(function (students) {
            _this.students = students;
        });
    };
    //direct to the student main page
    StudentschoolComponent.prototype.studentmain = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentmain'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentschoolComponent.prototype.addRecom = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentaddrecomm'], navigationExtras);
    };
    //direct to the ?????????????????? page
    StudentschoolComponent.prototype.info = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentinfo'], navigationExtras);
    };
    //direct to the ??????????????? page
    StudentschoolComponent.prototype.rec = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": student._id,
            }
        };
        this.router.navigate(['/studentrec'], navigationExtras);
    };
    //direct to the ???????????? page
    StudentschoolComponent.prototype.resume = function (student) {
        var navigationExtras = {
            queryParams: {
                "studentUserAcc": student.userAccount,
                "studentID": this.studentID,
            }
        };
        this.router.navigate(['/studentresume'], navigationExtras);
    };
    StudentschoolComponent.prototype.ngOnDestroy = function () {
        this.stSub.unsubscribe();
    };
    StudentschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentschool',
            template: __webpack_require__(/*! ./studentschool.component.html */ "./src/app/studentschool/studentschool.component.html"),
            styles: [__webpack_require__(/*! ./studentschool.component.scss */ "./src/app/studentschool/studentschool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_st_service__WEBPACK_IMPORTED_MODULE_2__["StService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StudentschoolComponent);
    return StudentschoolComponent;
}());



/***/ }),

/***/ "./src/app/studyabroad/studyabroad.component.html":
/*!********************************************************!*\
  !*** ./src/app/studyabroad/studyabroad.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-8 col-md-7 py-4\">\n              <br>\n              <h4 class=\"text-white\">Michi Academy </h4>\n              <p class=\"text-muted\">????????????????????????</p>\n              <br>\n    \n    \n            </div>\n            <div class=\"col-sm-4 offset-md-1 py-4\">\n              <br>\n              <form class=\"user\" >\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\"\n                    id=\"login-user-account\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Enter Email Address...\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"\n                    id=\"login-user-password\" placeholder=\"Password\">\n                </div>\n              </form>\n              <button type=\"button\" class=\"btn\" style=\"background-color: #02351F; color:white\" (click)=\"checklogin()\" data-dismiss=\"modal\">Log In</button>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>                        \n                </button>\n                <a class=\"navbar-brand\">\n                    <img src=\"https://i.ibb.co/zrhz7DH/Wechat-IMG5.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 20%;\">\n                </a>\n                    \n    \n              </div>\n              <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a (click)=\"main()\">????????????</a></li>\n                  <li><a (click)=\"class()\" >????????????</a></li>\n                  <li><a (click)=\"abroad()\" >????????????</a></li>\n                  <li><a (click)=\"blog()\">Blog</a></li>\n                  <li>\n                    <a data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        ????????????\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n    \n    \n        </nav>\n\n<br>\n<div class=\"container\">\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://i.ibb.co/stYkZgp/Pro-2021-08-09-0.png\" />\n\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t????????????\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<a class=\"btn\" (click)=\"highschool()\">????????????</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://i.ibb.co/ncRZhyh/Pro-2021-08-09-0-1.png\"  />\n\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t????????????\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t <a class=\"btn\" (click)=\"bachelor()\">????????????</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://i.ibb.co/QntK2SW/Pro-2021-08-09-0-2.png\" />\n\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t????????????\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<a class=\"btn\" (click)=\"master()\">????????????</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"section-title\">\n  <br>\n  <h2>????????????</h2>         \n  <br>\n  <h4>\n  </h4>\n</div>\n<div class=\"container\">\n  <div class=\"row clearfix\">\n      <div class=\"col-md-12 column\">\n          <div class=\"row clearfix\">\n              <div class=\"col-md-4 column\">\n                  <img  src=\"https://i.ibb.co/VvJ6WpN/2021-09-28-10-17-39.png\"  class=\"img-thumbnail\" style=\"width: 100%;\" />\n                  <div class=\"caption\">\n                    <h3>\n                      ???????????????\n                    </h3>\n                    <p>\n                       Michi ?????????????????????5?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                    </p>\n                    <button data-toggle=\"collapse\" data-target=\"#demo\">????????????</button>\n\n                    <div id=\"demo\" class=\"collapse\">\n                    ?????????1??????/???\n                    </div>\n                  </div>\n              </div>\n              <div class=\"col-md-4 column\">\n                  <img src=\"https://i.ibb.co/qFVZpPZ/2021-09-28-10-19-29.png\"  class=\"img-thumbnail\" style=\"width: 100%;\"/>\n                  <div class=\"caption\">\n                    <h3>\n                      ????????????\n                    </h3>\n                    <p>\n                       ??????????????????????????????????????????Michi ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n                    </p>\n                    <button data-toggle=\"collapse\" data-target=\"#demo1\">????????????</button>\n\n                    <div id=\"demo1\" class=\"collapse\">\n                    ?????????1000??????/???\n                    </div>\n                  </div>\n              </div>\n              <div class=\"col-md-4 column\">\n                  <img  src=\"https://i.ibb.co/ZdHym3P/2021-09-28-10-20-11.png\"   class=\"img-thumbnail\" style=\"width: 100%;\" />\n                  <div class=\"caption\">\n                    <h3>\n                      ????????????\n                    </h3>\n                    <p>\n                       ??????????????????GPA????????????????????????????????????????????????????????????????????????Michi ?????????????????????????????????????????????????????????????????????????????????????????????????????????\n                    </p>\n                    <button data-toggle=\"collapse\" data-target=\"#demo2\">????????????</button>\n\n                    <div id=\"demo2\" class=\"collapse\">\n                    ?????????3000??????\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n<!-- Container (??????????????????) Section) -->\n    <!-- Container (?????? Section) -->\n    <div class=\"section-title\">\n      <br>\n      <h2>????????????</h2>         \n      <br>\n      <h4>\n      </h4>\n    </div>\n    <div class=\"container\" style=\"width: 100%;\">\n      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\" >\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\" ></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\" ></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\" ></li>\n        </ol>\n    \n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n    \n          <div class=\"item active\">\n            <div>\n              <div class=\"col-md-9 column\" style=\"display:inline-block;left:20%; position: relative;\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default4.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                          <a class=\"btn\" (click)=\"highschool()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default5.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                           <a class=\"btn\" (click)=\"bachelor()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default6.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                          <a class=\"btn\" (click)=\"master()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"item\">\n            <div>\n              <div class=\"col-md-9 column\" style=\"display:inline-block;left:20%; position: relative;\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default4.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                          <a class=\"btn\" (click)=\"highschool()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default5.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                           <a class=\"btn\" (click)=\"bachelor()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default6.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                          <a class=\"btn\" (click)=\"master()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        \n          <div class=\"item\">\n            <div>\n              <div class=\"col-md-9 column\" style=\"display:inline-block;left:20%; position: relative;\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default4.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                          <a class=\"btn\" (click)=\"highschool()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default5.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                           <a class=\"btn\" (click)=\"bachelor()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img alt=\"300x200\" src=\"https://www.runoob.com/try/bootstrap/layoutit/v3/default6.jpg\" />\n                      <div class=\"caption\">\n                        <h3>\n                          ????????????\n                        </h3>\n                        <p>\n                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n                        </p>\n                        <p>\n                          <a class=\"btn\" (click)=\"master()\">????????????</a>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      \n        </div>\n    \n        <!-- Left and right controls -->\n        <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\" style=\"color: white;\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\" style=\"color: white;\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n\n<!-- Container (????????????) Section) -->\n  <div id=\"case\" class=\"container\">\n    <div class=\"section-title\">\n        <br>\n        <h2>????????????</h2>         \n        <br>\n        <h4>\n        </h4>\n      </div>\n\t<div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://watchourcity.com/wp-content/uploads/2019/11/USC-logo-small-e1573767009559.jpg\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tUniversity of Southern California\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???170+145\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tUniversity of California, Los Angeles\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????????????????????????????\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE???170+145\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tHarvard University\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????UCI\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <div class=\"row clearfix\">\n\t\t<div class=\"col-md-12 column\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://m.media-amazon.com/images/I/61Fa-pNEFXL._AC_SY450_.jpg\" style=\"width: 22%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tColumbia University\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????UMB\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://i.pinimg.com/originals/4a/21/25/4a2125ea3d703bee63e98de2913ba2ad.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tMassachusetts Institute of Technology\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????Canada\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"300x200\" src=\"https://seeklogo.com/images/C/carnegie-mellon-university-logo-389DF9E4D6-seeklogo.com.png\" style=\"width: 25%;\"/>\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<h4 class=\"caption\">\n\t\t\t\t\t\t\t\tCarnegie Mellon University\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????NEU\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t?????????????????????GRE??????\n\t\t\t\t\t\t\t</p>\n                            <p>\n\t\t\t\t\t\t\t\t?????????????????????XXXXX\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </div>\n\n\n\n  <!-- Container (Footer Section) -->\n<div id=\"footer\" class=\"panel-footer\">\n    <h2 class=\"text-center\" style=\"color: white;\">????????????</h2>\n    <br>\n    <div class=\"container\" style=\"color: white;\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 column\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 column\">\n                        <p>????????????</p>\n                        <div class=\"container\">\n                            <div class=\"row clearfix\">\n                                <div class=\"col-md-12 column\">\n                                    <address> <strong>Michi Academy Inc.</strong><br />  4199 Campus Dr, Suite 550<br /> Irvine, CA, 92612<br /> United States<br /></address>\n                                </div>\n                            </div>\n                        </div>\n                        <p><span class=\"glyphicon glyphicon-phone\"></span>???????????????: YuxinPREP</p>\n                        <p><span class=\"glyphicon glyphicon-envelope\"></span>??????: YuxinPREP@gmail.com</p>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>?????????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr1.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 column\">\n                        <p>??????????????????</p>\n                        <div class=\"container\">\n                            <img src=\"http://www.yxprep.com/assets/img/qr2.jpg\" alt=\"Wechat-IMG5\" border=\"0\" style=\"width: 12%;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"../../vendor/jquery/jquery.min.js\"></script>\n    <script src=\"../../vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Core plugin JavaScript-->\n    <script src=\"../../vendor/jquery-easing/jquery.easing.min.js\"></script>\n\n    <!-- Custom scripts for all pages-->\n    <script src=\"../../js/sb-admin-2.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/studyabroad/studyabroad.component.scss":
/*!********************************************************!*\
  !*** ./src/app/studyabroad/studyabroad.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181; }\n\nh2 {\n  font-size: 24px;\n  text-transform: uppercase;\n  color: #303030;\n  font-weight: 600;\n  margin-bottom: 30px; }\n\nh4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  color: #303030;\n  font-weight: 400;\n  margin-bottom: 30px; }\n\n.jumbotron {\n  background-color: #02351F;\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.marketing .col-lg-4 {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n\n.marketing h2 {\n  font-weight: 400; }\n\n.marketing .col-lg-4 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.container-fluid {\n  padding: 60px 50px; }\n\n.bg-grey {\n  background-color: #f6f6f6; }\n\n.logo-small {\n  color: #02351F;\n  font-size: 50px; }\n\n.logo {\n  color: #02351F;\n  font-size: 200px; }\n\n.thumbnail {\n  padding: 0 0 15px 0;\n  border: 1px;\n  border-color: lightgray;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n\n.carousel-control.right, .carousel-control.left {\n  background-image: none;\n  color: #02351F; }\n\n.carousel-indicators li {\n  border-color: white; }\n\n.carousel-indicators li.active {\n  background-color: white; }\n\n.carousel {\n  text-align: center;\n  position: relative;\n  left: auto; }\n\n.carousel-inner {\n  text-align: center;\n  position: relative; }\n\n.item h4 {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0; }\n\n.item span {\n  font-style: normal; }\n\n.panel {\n  border: 1px solid #02351F;\n  border-radius: 0 !important;\n  transition: box-shadow 0.5s; }\n\n.panel:hover {\n  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2); }\n\n.panel-footer .btn:hover {\n  border: 1px solid #02351F;\n  background-color: #fff !important;\n  color: #02351F; }\n\n.panel-heading {\n  color: #fff !important;\n  background-color: #02351F !important;\n  padding: 25px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.panel-footer {\n  background-color: #02351F !important; }\n\n.panel-footer h3 {\n  font-size: 32px; }\n\n.panel-footer h4 {\n  color: white;\n  font-size: 14px; }\n\n.panel-footer .btn {\n  margin: 15px 0;\n  background-color: #02351F;\n  color: #fff; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: #02351F;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-family: Montserrat, sans-serif; }\n\n.navbar li a, .navbar .navbar-brand {\n  color: #fff !important; }\n\n.navbar-nav li a:hover, .navbar-nav li.active a {\n  color: #02351F !important;\n  background-color: #fff !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n\nfooter .glyphicon {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #02351F; }\n\n.slideanim {\n  visibility: hidden; }\n\n.slide {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible; }\n\n.caption {\n  text-align: center; }\n\n.section-title h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center; }\n\n.section-title h4 {\n  text-align: center; }\n\n.section-title h2::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px); }\n\n.section-title h2::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #02351F;\n  bottom: 0;\n  left: calc(50% - 20px); }\n\n@keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(70%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%); } }\n\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0; }\n  .btn-lg {\n    width: 100%;\n    margin-bottom: 35px; } }\n\n@media screen and (max-width: 480px) {\n  .logo {\n    font-size: 150px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lY28vRG9jdW1lbnRzL01pY2hpL01pY2hpL3NyYy9hcHAvc3R1ZHlhYnJvYWQvc3R1ZHlhYnJvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLDJCQUEwQixFQUFBOztBQUU1QjtFQUNFLDJCQUEwQixFQUFBOztBQUc1QjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDZCQUE0QixFQUFBOztBQUU5QjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVMsRUFBQTs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsMkNBQXdDLEVBQUE7O0FBRTFDO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVqQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUMsRUFBQTs7QUFFckM7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUVoQjtFQUFZLGtCQUFpQixFQUFBOztBQUM3QjtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsVUFBVTtJQUNWLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUc3QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQyxFQUFBLEVBQUE7O0FBR3JDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBRWhCO0lBQ0UsV0FBVztJQUNYLG1CQUFtQixFQUFBLEVBQ3BCOztBQUVIO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5YWJyb2FkL3N0dWR5YWJyb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgICBjb2xvcjogIzMwMzAzMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH0gIFxuICAuanVtYm90cm9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwMHB4IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZm9udC13ZWlnaHQtbm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogNDAwIWltcG9ydGFudDtcbiAgfVxuICAuZm9udC13ZWlnaHQtbm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogNDAwIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1hcmtldGluZyAuY29sLWxnLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0gXG4gIC5tYXJrZXRpbmcgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH0gXG4gIC5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xuICAgIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAuNzVyZW07XG4gIH1cbiAgLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5yb3VuZGVkLWNpcmNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHg7XG4gIH1cbiAgLmJnLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIH1cbiAgLmxvZ28tc21hbGwge1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICAubG9nbyB7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gICAgZm9udC1zaXplOiAyMDBweDtcbiAgfVxuICAudGh1bWJuYWlsIHtcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLnRodW1ibmFpbCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1jb250cm9sLnJpZ2h0LCAuY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNhcm91c2Vse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDphdXRvO1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICB9XG4gIC5pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gIH1cbiAgLml0ZW0gc3BhbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIC5wYW5lbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAyMzUxRjsgXG4gICAgYm9yZGVyLXJhZGl1czowICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xuICB9XG4gIC5wYW5lbDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA0MHB4IHJnYmEoMCwwLDAsIC4yKTtcbiAgfVxuICAucGFuZWwtZm9vdGVyIC5idG46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMjM1MUY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDIzNTFGO1xuICB9XG4gIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjM1MUYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuICAucGFuZWwtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGICFpbXBvcnRhbnQ7XG4gIH1cbiBcbiAgLnBhbmVsLWZvb3RlciBoMyB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5wYW5lbC1mb290ZXIgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnBhbmVsLWZvb3RlciAuYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzNTFGO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzUxRjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICAubmF2YmFyIGxpIGEsIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsIC5uYXZiYXItbmF2IGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzAyMzUxRiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBmb290ZXIgLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICMwMjM1MUY7XG4gIH1cbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuICAuc2xpZGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5jYXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbiAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBib3R0b206IDFweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xufVxuLnNlY3Rpb24tdGl0bGUgaDI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAyMzUxRjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbn1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLXNtLTQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgfVxuICAgIC5idG4tbGcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/studyabroad/studyabroad.component.ts":
/*!******************************************************!*\
  !*** ./src/app/studyabroad/studyabroad.component.ts ***!
  \******************************************************/
/*! exports provided: StudyabroadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyabroadComponent", function() { return StudyabroadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../hm.service */ "./src/app/hm.service.ts");






var StudyabroadComponent = /** @class */ (function () {
    function StudyabroadComponent(route, router, userService, hmService, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hmService = hmService;
        this.http = http;
        this.user = [];
        this.students = [];
    }
    StudyabroadComponent.prototype.checklogin = function () {
        var _this = this;
        this.ngOnInit();
        this.user = this.user;
        this.studentID = this.studentID;
        //Check if there are empty fields
        var temp9 = document.getElementById("login-user-account").value;
        var temp10 = document.getElementById("login-user-password").value;
        if (temp9 === "" || temp10 === "") {
            alert("Please enter all fields.");
            document.getElementById("login-user-account").value = null;
            document.getElementById("login-user-password").value = null;
            return;
        }
        else { //See if the account exist
            console.log(this.user);
            for (var index = 0; index < this.user.length; index++) {
                if (temp9 == this.user[index].UserAccount) {
                    //alert("find");
                    if (temp10 == this.user[index].UserPassword) {
                        document.getElementById("login-user-account").value = null;
                        document.getElementById("login-user-password").value = null;
                        if (this.user[index].Role == "manager") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //this.user.length = this.user.length+1;
                            //window.open("/hmmain","_self");
                            //direct to the hotel manager page
                            console.log(this.user[index].UserAccount);
                            var navigationExtras = {
                                queryParams: {
                                    "managerID": this.user[index].UserAccount,
                                }
                            };
                            this.router.navigate(['/hmmain'], navigationExtras);
                            return;
                        }
                        if (this.user[index].Role == "student") {
                            alert("Welcome " + this.user[index].Role + "!");
                            //console.log(this.user[index].UserAccount);
                            // API_PATH + '/students'
                            this.http.get('/api/students').subscribe(function (Data) {
                                _this.students = Data.students;
                                console.log(_this.students);
                                for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                                    var h = _a[_i];
                                    if (h.userAccount == _this.user[index].UserAccount) {
                                        _this.studentID = h._id;
                                        console.log("?????????ID???" + _this.studentID);
                                        var NavigationExtras = {
                                            queryParams: {
                                                "studentUserAcc": _this.user[index].UserAccount,
                                                "studentID": _this.studentID,
                                            }
                                        };
                                        _this.router.navigate(['/studentmain'], NavigationExtras);
                                    }
                                }
                                //console.log("??????id???"+this.studentID);
                            });
                            //console.log("??????id2???"+this.studentID);
                            // this.user.length = this.user.length+1;
                            // const NavigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     "studentUserAcc" : this.user[index].UserAccount,
                            //   }
                            // };
                            // window.open("/hotels","_self");
                            //this.router.navigate(['/studentmain'], NavigationExtras);
                            return;
                        }
                    }
                    else {
                        document.getElementById("login-user-password").value = null;
                        alert("Your password is incorrect.");
                        return;
                    }
                }
                else {
                    continue;
                }
            }
            if (index == this.user.length) {
                console.log(index);
                alert("No such account.");
                document.getElementById("login-user-account").value = null;
                document.getElementById("login-user-password").value = null;
                return;
            }
        }
    };
    StudyabroadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            console.log(userData.user);
            console.log(_this.user.length);
        });
    };
    StudyabroadComponent.prototype.main = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainpage'], navigationExtras);
    };
    //direct to the ???????????? page
    StudyabroadComponent.prototype.class = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainclass'], navigationExtras);
    };
    //direct to the Blog page
    StudyabroadComponent.prototype.blog = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/mainblog'], navigationExtras);
    };
    //direct to the ?????? page
    StudyabroadComponent.prototype.abroad = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/studyabroad'], navigationExtras);
    };
    //direct to the ???????????? page
    StudyabroadComponent.prototype.master = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/applymaster'], navigationExtras);
    };
    //direct to the ???????????? page
    StudyabroadComponent.prototype.bachelor = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/applybachelor'], navigationExtras);
    };
    //direct to the ???????????? page
    StudyabroadComponent.prototype.highschool = function () {
        var navigationExtras = {
            queryParams: {}
        };
        this.router.navigate(['/applyhighschool'], navigationExtras);
    };
    StudyabroadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studyabroad',
            template: __webpack_require__(/*! ./studyabroad.component.html */ "./src/app/studyabroad/studyabroad.component.html"),
            styles: [__webpack_require__(/*! ./studyabroad.component.scss */ "./src/app/studyabroad/studyabroad.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _hm_service__WEBPACK_IMPORTED_MODULE_5__["HmService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudyabroadComponent);
    return StudyabroadComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UserService.prototype.getUsers = function () {
        var _this = this;
        this.http.get('/api/users').subscribe(function (userData) {
            _this.user = userData.user;
            //console.log(userData.user[0]); 
            _this.usersUpdated.next(_this.user.slice());
        });
    };
    UserService.prototype.getUsersUpdatedListener = function () {
        return this.usersUpdated.asObservable();
    };
    UserService.prototype.addUser = function (UserAccount, UserPassword, Role) {
        var _this = this;
        var user = {
            UserAccount: UserAccount,
            UserPassword: UserPassword,
            Role: Role
        };
        console.log(user.UserAccount);
        this.http.post('/api/users', user).subscribe(function (responseData) {
            _this.user.push(user);
            _this.usersUpdated.next(_this.user.slice());
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/eco/Documents/Michi/Michi/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map