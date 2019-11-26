webpackJsonp([3],{

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pagination/pagination.module": [
		410,
		0
	],
	"../pages/test-component/test-component.module": [
		412,
		2
	],
	"../pages/tester/tester.module": [
		411,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.allFruits = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.allFruits.push({ id: 2, fruit: 'Aplle' }, { id: 1, fruit: 'Orange' });
        console.log(this.allFruits);
    };
    HomePage.prototype.openChips = function () {
        this.navCtrl.setRoot('TesterPage');
    };
    HomePage.prototype.salvar = function () {
        console.log(this.allFruits);
    };
    HomePage.prototype.openPagination = function () {
        this.navCtrl.setRoot('PaginationPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\Projetos\componentesIonic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n\n\n\n\n  <div *ngFor="let i of allFruits, let i = index">\n\n\n\n    <ion-item>\n\n      <ion-label >Name</ion-label>\n\n      <ion-input type="" [(ngModel)]="i.fruit"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label >Id</ion-label>\n\n      <ion-input type="" [(ngModel)]="i.id"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label >Teste</ion-label>\n\n      <ion-input type="" [(ngModel)]="i.teste"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n<button ion-button (click)="salvar()"></button>\n\n\n\n  <button ion-button (click)="openChips()">Chips</button>\n\n  <button ion-button (click)="openPagination()">Pagination\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\Projetos\componentesIonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebChipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WebChipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WebChipsPage = /** @class */ (function () {
    function WebChipsPage(navCtrl, navParams) {
        // this.elementosEscolhidos = this.fruitCtrl.valueChanges.pipe(
        //   startWith(null),
        //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.elementos.slice()));
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_keycodes__["c" /* COMMA */]];
        this.formCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]();
        //fruits: string[] = [''];
        this.elementosEscolhidos = [];
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onChange = function (val) {
            // esta funcao é criada vazia para que o registerOnChange sobreescreva com uma função que sincroniza as alteraçoes de valor entre o ANgular e o DOM
        };
        this.onTouched = function () {
        };
        this.elementosFiltrados = this.formCtrl.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["startWith"])(null), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (digitoOuObj) {
            var valor = digitoOuObj ? (digitoOuObj[_this.valorAtrb] ? digitoOuObj[_this.valorAtrb] : digitoOuObj) : digitoOuObj;
            return digitoOuObj ? _this._filter(valor) : (_this.elementos ? _this.elementos.slice() : []);
        }));
    }
    WebChipsPage_1 = WebChipsPage;
    WebChipsPage.prototype.add = function (event) {
        //   // Add fruit only when MatAutocomplete is not open
        //   // To make sure this does not conflict with OptionSelected Event
        //   if (!this.matAutocomplete.isOpen) {
        //     const input = event.input;
        //     const value = event.value;
        //     // Add our fruit
        //     if ((value || '').trim()) {
        //       this.fruits.push(value.trim());
        //     }
        //     // Reset the input value
        //     if (input) {
        //       input.value = '';
        //     }
        //     this.fruitCtrl.setValue(null);
        //   }
    };
    Object.defineProperty(WebChipsPage.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            if (!this._value) {
                this.myInput.nativeElement.value = null;
                this.elementosEscolhidos = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    WebChipsPage.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    WebChipsPage.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    WebChipsPage.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    WebChipsPage.prototype.ngAfterViewInit = function () {
    };
    WebChipsPage.prototype.remove = function (fruit) {
        var index = this.elementosEscolhidos.indexOf(fruit);
        if (index >= 0) {
            this.elementosEscolhidos.splice(index, 1);
        }
        this.value = this.elementosEscolhidos;
        this.selectionChange.emit(this.elementosEscolhidos);
    };
    WebChipsPage.prototype.selected = function (event) {
        var _this = this;
        this.onTouched();
        var elementoParaAdicionar = null;
        if (event.option.value[this.valorAtrb]) {
            var obj = this.elementosEscolhidos
                .find(function (obj) { return obj[_this.valorAtrb] == event.option.value[_this.valorAtrb]; });
            if (!obj) {
                elementoParaAdicionar = event.option.value;
            }
        }
        else if (this.elementosEscolhidos.indexOf(event.option.value) < 0) {
            elementoParaAdicionar = event.option.value;
        }
        console.log('Selected', event.option.viewValue);
        var itemSelecionado = event.option.viewValue;
        var okSave = true;
        //this.elementosEscolhidos = new Array;
        console.log(this.elementosEscolhidos);
        if (this.elementosEscolhidos != []) {
            for (var i = 0; i < this.elementosEscolhidos.length; i++) {
                if (this.elementosEscolhidos[i] == itemSelecionado) {
                    okSave = false;
                    break;
                }
                else {
                    okSave = true;
                }
            }
        }
        if (elementoParaAdicionar) {
            this.elementosEscolhidos.push(elementoParaAdicionar);
            this.value = this.elementosEscolhidos;
            this.myInput.nativeElement.value = '';
            this.formCtrl.setValue(null);
            this.selectionChange.emit(this.elementosEscolhidos);
        }
        //    if(okSave != false){
        //      console.log('evento', event)
        //   this.fruits.push(event.option.viewValue);
        //    }
        //   console.log('Lista', this.fruits)
        //   this.fruitInput.nativeElement.value = '';
        //   this.fruitCtrl.setValue(null);
        //   this.selectionChange.emit(this.fruits)
        //   console.log('valor do formControl', this.fruitCtrl)
        //   console.log('valor atribuido', this.valorAtrb)
    };
    WebChipsPage.prototype._filter = function (value) {
        var _this = this;
        var filterValue = value.toLowerCase();
        console.log('todas frutas', this.elementos);
        var teste = 'fruit';
        return this.elementos.filter(function (fruit) { return (fruit + "." + _this.valorAtrb).toLowerCase().indexOf(filterValue) === 0; });
    };
    WebChipsPage.prototype.teste = function (params) {
        console.log(params);
    };
    WebChipsPage.prototype.listarNoClick = function () {
        this.formCtrl.setValue('');
        this.myInput.nativeElement.blur();
        this.myInput.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], WebChipsPage.prototype, "valorAtrb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], WebChipsPage.prototype, "elementos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], WebChipsPage.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], WebChipsPage.prototype, "selectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], WebChipsPage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('auto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocomplete */])
    ], WebChipsPage.prototype, "matAutocomplete", void 0);
    WebChipsPage = WebChipsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
                    multi: true,
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return WebChipsPage_1; }),
                }
            ],
            selector: 'web-chips',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\Projetos\componentesIonic\src\pages\web-chips\web-chips.html"*/'\n\n<mat-form-field class="example-chip-list">\n\n    <mat-chip-list #chipList aria-label="Fruit selection">\n\n      <mat-chip\n\n        *ngFor="let fruit of elementosEscolhidos"\n\n        [selectable]="selectable"\n\n        [removable]="removable"\n\n        (removed)="remove(fruit)">\n\n        {{fruit[valorAtrb]}} \n\n        <!-- <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon> -->\n\n        &nbsp;<ion-icon matChipRemove *ngIf="removable" name="ios-close"></ion-icon>\n\n      </mat-chip>\n\n      <input\n\n        [placeholder]="placeholder"\n\n        #myInput\n\n        (click)="listarNoClick()"\n\n        [formControl]="formCtrl"\n\n        [matAutocomplete]="auto"\n\n        [matChipInputFor]="chipList"\n\n        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n\n        [matChipInputAddOnBlur]="addOnBlur"\n\n        (matChipInputTokenEnd)="add($event)">\n\n    </mat-chip-list>\n\n    <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">\n\n      <mat-option *ngFor="let fruit of elementos" [value]="fruit">\n\n        {{fruit[valorAtrb]}}\n\n      </mat-option>\n\n    </mat-autocomplete>\n\n  </mat-form-field> \n\n\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\Projetos\componentesIonic\src\pages\web-chips\web-chips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WebChipsPage);
    return WebChipsPage;
    var WebChipsPage_1;
}());

//# sourceMappingURL=web-chips.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(275);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_web_chips_web_chips__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/pagination/pagination.module#PaginationPageModule', name: 'PaginationPage', segment: 'pagination', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tester/tester.module#TesterPageModule', name: 'TesterPage', segment: 'tester', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-component/test-component.module#TestComponentPageModule', name: 'TestComponentPage', segment: 'test-component', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
                    multi: true,
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_9__pages_web_chips_web_chips__["a" /* WebChipsPage */]; }),
                },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\lsrael\Desktop\Projetos\componentesIonic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\Projetos\componentesIonic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map