webpackJsonp([0,3],{

/***/ 1047:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(457);


/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PouchDBService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PouchDB = __webpack_require__(758);
var PouchDBService = (function () {
    function PouchDBService() {
        this.listener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.mylistener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        if (!this.isInstantiated) {
            this.database = new PouchDB("ion-tracking-sync25");
            this.isInstantiated = true;
        }
    }
    PouchDBService.prototype.getChangestoUI = function () {
        this.database.changes({ live: true, since: 'now' })
            .on('change', function (change) {
            this.mylistener.emit(change);
            // this.database.fetch()
        })
            .on('error', console.log.bind(console));
    };
    PouchDBService.prototype.fetch = function () {
        return this.database.allDocs({ include_docs: true });
    };
    PouchDBService.prototype.get = function (id) {
        return this.database.get(id);
    };
    PouchDBService.prototype.put = function (id, document) {
        var _this = this;
        document._id = id;
        return this.get(id).then(function (result) {
            document._rev = result._rev;
            return _this.database.put(document);
        }, function (error) {
            if (error.status == "404") {
                return _this.database.put(document);
            }
            else {
                return new Promise(function (resolve, reject) {
                    reject(error);
                });
            }
        });
    };
    PouchDBService.prototype.sync = function (remote) {
        var _this = this;
        var remoteDatabase = new PouchDB(remote);
        this.database.sync(remoteDatabase, {
            live: true
        }).on('change', function (change) {
            _this.listener.emit(change);
        }).on('error', function (error) {
            console.error(JSON.stringify(error));
        });
    };
    PouchDBService.prototype.getChangeListener = function () {
        return this.listener;
    };
    PouchDBService.prototype.getChangeMyListener = function () {
        return this.mylistener;
    };
    PouchDBService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], PouchDBService);
    return PouchDBService;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/pouchdb.config.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainviewComponent = (function () {
    function MainviewComponent(_service) {
        this._service = _service;
        this.title = 'Main View!';
        this.options = {
            timeOut: 2800,
            clickToClose: true,
            maxLength: 0,
            maxStack: 7,
            showProgressBar: true,
            pauseOnHover: true,
            animate: 'fromRight',
            position: ['top', 'right']
        };
        console.log('Service created', _service);
    }
    MainviewComponent.prototype.onCreate = function (event) {
        console.log(event);
    };
    MainviewComponent.prototype.onDestroy = function (event) {
        console.log(event);
    };
    MainviewComponent.prototype.onButtonClick = function () {
        this._service.success("Saved ", "New Item created");
    };
    MainviewComponent.prototype.onAnotherClick = function () {
        this._service.error("Error ", "Could not load data!");
        //this._service.info("Error ", "Try again")
    };
    MainviewComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#test').html('Hello How are you');
    };
    MainviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-mainview',
            template: __webpack_require__(766),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]) === 'function' && _a) || Object])
    ], MainviewComponent);
    return MainviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/mainview.component.js.map

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GridViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridViewComponent = (function () {
    function GridViewComponent(http) {
        this.http = http;
        this.people = [];
    }
    GridViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.myjson.com/bins/yow47')
            .map(function (res) { return res.json(); })
            .subscribe(function (people) { return _this.people = people; });
    };
    GridViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-grid-view',
            template: __webpack_require__(769),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], GridViewComponent);
    return GridViewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/grid-view.component.js.map

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pouchdb_config__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NetworkViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkViewComponent = (function () {
    function NetworkViewComponent(database, zone, http) {
        this.database = database;
        this.zone = zone;
        this.http = http;
        this.Flights = [];
    }
    //https://api.myjson.com/bins/ljcfj
    NetworkViewComponent.prototype.ngOnInit = function () {
        /* Remove for complete working
            
        
            this.database.sync()
        
            var options = {
            groupOrder: function (a, b) {
              return a.value - b.value;
            },
            groupOrderSwap: function (a, b, groups) {
                var v = a.value;
                a.value = b.value;
                b.value = v;
            },
            orientation: 'both',
            editable: true,
            groupEditable: true,
            start: new Date(2015, 6, 1),
            end: new Date(2015, 10, 1)
          };
        
              var groups = new vis.DataSet(options);
              var items = new vis.DataSet(options)
        
          /*  this.http.get('../../data.json')
              .map(res => res.json())
                .subscribe(data => {
                  this.Flights = data
               // console.log(this.Flights)
              //  this.database.put("complete_data",this.Flights)
                });
        */
        //This complete_data is the ID of database in pouchDB 
        //this.database.get("complete_data").then(function (doc) {
        /* Remove for complete working
    
    this.database.get("ionTracking").then(function (doc) {
    
    var mydata= doc
    //console.log(mydata)
    for(let item of mydata.aircrafts){
    
    //	console.log(item.nNbr)
        var i=0
        groups.add([
            {"content": item.nNbr, "id": item.nNbr, "value": i++, className:'openwheel'}
        ])
        //  console.log(items)
    }
    
    
    /*working code
    for(let item of mydata.aircrafts){
    
    items.add([
              {
                start: new Date(2015, 0, 10),
                end: new Date(2015, 0, 11),
                group:item.nNbr,
                className:"openwheel",
                content:item.carrCd,
                },
          ])
    }
    */
        /* Remove for complete working
        
        var myarray:any= []
        
        for(let item of mydata.aircrafts){
            if(item.hasOwnProperty('pFls'))
                {
                         myarray.push(item)
                }
        }
        
        console.log(myarray)
        
        
        for(let item of myarray)
        {
            for(let subitem of item.pFls){
         //console.log(subitem)
                items.add([
                    {
                        start: new Date(subitem.aGDDt),
                        end: new Date(subitem.aGADt),
                        group:item.nNbr,
                        className:"openwheel",
                        content:item.carrCd,
                        },
                ])
              }
        }
        
        
        var container = document.getElementById('visualization');
         
          var timeline = new vis.Timeline(container);
          timeline.setOptions(options);
          timeline.setGroups(groups);
          timeline.setItems(items);
          
        }).catch(function (err) {
          console.log(err+"hello");
        });
        
        
        /*
        
          
          var groups = new vis.DataSet([
            {"content": "Formula E", "id": "Formula E", "value": 1, className:'openwheel'},
            {"content": "WRC", "id": "WRC", "value": 2, className:'rally'},
            {"content": "MotoGP", "id": "MotoGP", "value": 3, className:'motorcycle'},
            {"content": "V8SC", "id": "V8SC", "value": 4, className:'touringcars'},
            {"content": "WTCC", "id": "WTCC", "value": 5, className:'touringcars'},
            {"content": "F1", "id": "F1", "value": 6, className:'openwheel'},
            {"content": "SBK", "id": "SBK", "value": 7, className:'motorcycle'},
            {"content": "IndyCar", "id": "IndyCar", "value": 8, className:'openwheel'},
            {"content": "MotoAmerica", "id": "MotoAmerica", "value": 9, className:'motorcycle'},
            {"content": "SGP", "id": "SGP", "value": 10, className:'rally'},
            {"content": "EWC", "id": "EWC", "value": 11, className:'endurance'},
            {"content": "BSB", "id": "BSB", "value": 12, className:'motorcycle'},
            {"content": "DTM", "id": "DTM", "value": 13, className:'touringcars'},
            {"content": "BTCC", "id": "BTCC", "value": 14, className:'touringcars'},
            {"content": "WorldRX", "id": "WorldRX", "value": 15, className:'rally'},
            {"content": "WSR", "id": "WSR", "value": 16, className:'openwheel'},
            {"content": "Roads", "id": "Roads", "value": 17, className:'motorcycle'},
            {"content": "WEC", "id": "WEC", "value": 18, className:'endurance'},
            {"content": "GP2", "id": "GP2", "value": 19, className:'openwheel'}
          ]);
          
          // create a dataset with items
          // note that months are zero-based in the JavaScript Date object, so month 3 is April
          var items = new vis.DataSet([
            {start: new Date(2015, 0, 10), end: new Date(2015, 0, 11), group:"Formula E", className:"openwheel", content:"Argentina",id:"531@motocal.net"},
            {start: new Date(2015, 0, 22), end: new Date(2015, 0, 26), group:"WRC", className:"rally", content:"Rallye Monte-Carlo",id:"591@motocal.net"},
            {start: new Date(2015, 1, 4), end: new Date(2015, 1, 8), group:"MotoGP", className:"motorcycle", content:"Sepang MotoGP Test 1",id:"578@motocal.net"},
            {start: new Date(2015, 1, 12), end: new Date(2015, 1, 16), group:"WRC", className:"rally", content:"Rally Sweden",id:"592@motocal.net"},
            {start: new Date(2015, 1, 20), end: new Date(2015, 1, 23), group:"SBK", className:"motorcycle", content:"Australia",id:"616@motocal.net"},
            {start: new Date(2015, 1, 23), end: new Date(2015, 1, 27), group:"MotoGP", className:"motorcycle", content:"Sepang MotoGP Test 2",id:"579@motocal.net"},
            {start: new Date(2015, 1, 26), end: new Date(2015, 2, 2), group:"V8SC", className:"touringcar", content:"Clipsal 500 Adelaide",id:"659@motocal.net"},
            {start: new Date(2015, 2, 5), end: new Date(2015, 2, 9), group:"WRC", className:"rally", content:"Rally Guanajuato Mexico",id:"593@motocal.net"},
            {start: new Date(2015, 2, 6), end: new Date(2015, 2, 9), group:"WTCC", className:"touringcar", content:"Argentina",id:"717@motocal.net"},
            {start: new Date(2015, 2, 12), end: new Date(2015, 2, 16), group:"V8SC", className:"touringcar", content:"Australian Grand Prix",id:"660@motocal.net"},
            {start: new Date(2015, 2, 13), end: new Date(2015, 2, 16), group:"F1", className:"openwheel", content:"Australia",id:"630@motocal.net"},
            {start: new Date(2015, 2, 14), end: new Date(2015, 2, 15), group:"Formula E", className:"openwheel", content:"Miami, USA",id:"534@motocal.net"},
            {start: new Date(2015, 2, 14), end: new Date(2015, 2, 17), group:"MotoGP", className:"motorcycle", content:"Qatar MotoGP Test",id:"577@motocal.net"},
            {start: new Date(2015, 2, 20), end: new Date(2015, 2, 23), group:"SBK", className:"motorcycle", content:"Thailand",id:"617@motocal.net"},
            {start: new Date(2015, 2, 27), end: new Date(2015, 2, 30), group:"F1", className:"openwheel", content:"Malaysia",id:"631@motocal.net"},
            {start: new Date(2015, 2, 27), end: new Date(2015, 2, 30), group:"V8SC", className:"touringcar", content:"Tasmania SuperSprint",id:"661@motocal.net"},
            {start: new Date(2015, 2, 27), end: new Date(2015, 2, 30), group:"IndyCar", className:"openwheel", content:"Grand Prix of St. Petersburg",id:"752@motocal.net"},
            {start: new Date(2015, 3, 4), end: new Date(2015, 3, 7), group:"BSB", className:"motorcycle", content:"Round 1",id:"604@motocal.net"},
            {start: new Date(2015, 3, 4), end: new Date(2015, 3, 6), group:"BTCC", className:"touringcar", content:"Rounds 1, 2 & 3",id:"581@motocal.net"},
            {start: new Date(2015, 3, 4), end: new Date(2015, 3, 5), group:"Formula E", className:"openwheel", content:"Long Beach, USA",id:"535@motocal.net"},
            {start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group:"IndyCar", className:"openwheel", content:"Indy Grand Prix of Louisiana",id:"753@motocal.net"},
            {start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group:"MotoAmerica", className:"motorcycle", content:"COTA",id:"705@motocal.net"},
            {start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group:"SBK", className:"motorcycle", content:"Aragon",id:"618@motocal.net"},
            {start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group:"MotoGP", className:"motorcycle", content:"Americas",id:"540@motocal.net"},
            {start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group:"F1", className:"openwheel", content:"China",id:"632@motocal.net"},
            {start: new Date(2015, 3, 12), end: new Date(2015, 3, 13), group:"WEC", className:"endurance", content:"6 Hours of Silverstone",id:"674@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"BSB", className:"motorcycle", content:"Round 2",id:"605@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"F1", className:"openwheel", content:"Bahrain",id:"633@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"IndyCar", className:"openwheel", content:"Grand Prix of Long Beach",id:"754@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"MotoAmerica", className:"motorcycle", content:"Road Atlanta",id:"706@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"SBK", className:"motorcycle", content:"Netherlands",id:"619@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"WTCC", className:"touringcar", content:"Morocco",id:"718@motocal.net"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group:"MotoGP", className:"motorcycle", content:"Argentina",id:"559@motocal.net"},
            {start: new Date(2015, 3, 18), end: new Date(2015, 3, 19), group:"SGP", className:"rally", content:"Warsaw",id:"729@motocal.net"},
            {start: new Date(2015, 3, 18), end: new Date(2015, 3, 20), group:"EWC", className:"endurance", content:"24 Heures Moto Le Mans",id:"701@motocal.net"},
            {start: new Date(2015, 3, 18), end: new Date(2015, 3, 20), group:"BTCC", className:"touringcar", content:"Rounds 4, 5 & 6",id:"582@motocal.net"},
            {start: new Date(2015, 3, 23), end: new Date(2015, 3, 27), group:"WRC", className:"rally", content:"Rally Argentina",id:"595@motocal.net"},
            {start: new Date(2015, 3, 24), end: new Date(2015, 3, 27), group:"WorldRX", className:"rally", content:"Portugal",id:"686@motocal.net"},
            {start: new Date(2015, 3, 24), end: new Date(2015, 3, 27), group:"IndyCar", className:"openwheel", content:"Indy Grand Prix of Alabama",id:"755@motocal.net"},
            {start: new Date(2015, 3, 25), end: new Date(2015, 3, 27), group:"WSR", className:"openwheel", content:"Spain",id:"742@motocal.net"},
            {start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group:"MotoGP", className:"motorcycle", content:"Spain",id:"542@motocal.net"},
            {start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group:"WorldRX", className:"rally", content:"Hockenheim",id:"768@motocal.net"},
            {start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group:"DTM", className:"touringcar", content:"Hockenheim",id:"650@motocal.net"},
            {start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group:"WTCC", className:"touringcar", content:"Hungary",id:"719@motocal.net"},
            {start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group:"V8SC", className:"touringcar", content:"Perth SuperSprint",id:"662@motocal.net"},
            {start: new Date(2015, 4, 2), end: new Date(2015, 4, 5), group:"BSB", className:"motorcycle", content:"Round 3",id:"606@motocal.net"},
            {start: new Date(2015, 4, 2), end: new Date(2015, 4, 3), group:"WEC", className:"endurance", content:"6 Hours of Spa-Francorchamps",id:"675@motocal.net"},
            {start: new Date(2015, 4, 7), end: new Date(2015, 4, 10), group:"IndyCar", className:"openwheel", content:"Grand Prix of Indianapolis",id:"756@motocal.net"},
            {start: new Date(2015, 4, 8), end: new Date(2015, 4, 11), group:"F1", className:"openwheel", content:"Spain",id:"634@motocal.net"},
            {start: new Date(2015, 4, 8), end: new Date(2015, 4, 11), group:"SBK", className:"motorcycle", content:"Italy",id:"620@motocal.net"},
            {start: new Date(2015, 4, 9), end: new Date(2015, 4, 10), group:"Formula E", className:"openwheel", content:"Monaco",id:"536@motocal.net"},
            {start: new Date(2015, 4, 9), end: new Date(2015, 4, 11), group:"BTCC", className:"touringcar", content:"Rounds 7, 8 & 9",id:"583@motocal.net"},
            {start: new Date(2015, 4, 10), end: new Date(2015, 4, 17), group:"Roads", className:"motorcycle", content:"North West 200",id:"682@motocal.net"},
            {start: new Date(2015, 4, 15), end: new Date(2015, 4, 17), group:"WTCC", className:"touringcar", content:"Germany",id:"720@motocal.net"},
            {start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group:"WorldRX", className:"rally", content:"Belgium",id:"687@motocal.net"},
            {start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group:"V8SC", className:"touringcar", content:"Winton SuperSprint",id:"663@motocal.net"},
            {start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group:"MotoGP", className:"motorcycle", content:"France",id:"543@motocal.net"},
            {start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group:"MotoAmerica", className:"motorcycle", content:"VIR",id:"707@motocal.net"},
            {start: new Date(2015, 4, 16), end: new Date(2015, 4, 17), group:"SGP", className:"rally", content:"Tampere",id:"730@motocal.net"},
            {start: new Date(2015, 4, 21), end: new Date(2015, 4, 25), group:"WRC", className:"rally", content:"Rally de Portugal",id:"594@motocal.net"},
            {start: new Date(2015, 4, 21), end: new Date(2015, 4, 25), group:"F1", className:"openwheel", content:"Monaco",id:"635@motocal.net"},
            {start: new Date(2015, 4, 22), end: new Date(2015, 4, 25), group:"WorldRX", className:"rally", content:"Great Britain",id:"688@motocal.net"},
            {start: new Date(2015, 4, 22), end: new Date(2015, 4, 25), group:"SBK", className:"motorcycle", content:"UK",id:"621@motocal.net"},
            {start: new Date(2015, 4, 22), end: new Date(2015, 4, 25), group:"IndyCar", className:"openwheel", content:"Indianapolis 500",id:"757@motocal.net"},
            {start: new Date(2015, 4, 23), end: new Date(2015, 4, 24), group:"SGP", className:"rally", content:"Prague",id:"731@motocal.net"},
            {start: new Date(2015, 4, 23), end: new Date(2015, 4, 24), group:"Formula E", className:"openwheel", content:"Germany",id:"537@motocal.net"},
            {start: new Date(2015, 4, 24), end: new Date(2015, 4, 25), group:"WSR", className:"openwheel", content:"Monaco",id:"743@motocal.net"},
            {start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group:"MotoAmerica", className:"motorcycle", content:"Road America",id:"708@motocal.net"},
            {start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group:"IndyCar", className:"openwheel", content:"Dual in Detroit",id:"758@motocal.net"},
            {start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group:"MotoGP", className:"motorcycle", content:"Italy",id:"562@motocal.net"},
            {start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group:"DTM", className:"touringcar", content:"Lausitzring",id:"651@motocal.net"},
            {start: new Date(2015, 4, 30), end: new Date(2015, 5, 13), group:"Roads", className:"motorcycle", content:"Isle of Man TT",id:"683@motocal.net"},
            {start: new Date(2015, 4, 30), end: new Date(2015, 5, 1), group:"WSR", className:"openwheel", content:"Belgium",id:"745@motocal.net"},
            {start: new Date(2015, 5, 4), end: new Date(2015, 5, 7), group:"IndyCar", className:"openwheel", content:"Firestone 600",id:"759@motocal.net"},
            {start: new Date(2015, 5, 5), end: new Date(2015, 5, 8), group:"SBK", className:"motorcycle", content:"Portugal",id:"622@motocal.net"},
            {start: new Date(2015, 5, 5), end: new Date(2015, 5, 8), group:"F1", className:"openwheel", content:"Canada",id:"636@motocal.net"},
            {start: new Date(2015, 5, 5), end: new Date(2015, 5, 8), group:"WTCC", className:"touringcar", content:"Russia",id:"721@motocal.net"},
            {start: new Date(2015, 5, 6), end: new Date(2015, 5, 7), group:"Formula E", className:"openwheel", content:"Russia",id:"716@motocal.net"},
            {start: new Date(2015, 5, 6), end: new Date(2015, 5, 8), group:"BTCC", className:"touringcar", content:"Rounds 10, 11 & 12",id:"584@motocal.net"},
            {start: new Date(2015, 5, 11), end: new Date(2015, 5, 15), group:"WRC", className:"rally", content:"Rally d'Italia Sardegna",id:"596@motocal.net"},
            {start: new Date(2015, 5, 12), end: new Date(2015, 5, 15), group:"MotoGP", className:"motorcycle", content:"Catalunya",id:"545@motocal.net"},
            {start: new Date(2015, 5, 12), end: new Date(2015, 5, 15), group:"IndyCar", className:"openwheel", content:"Indy Toronto",id:"760@motocal.net"},
            {start: new Date(2015, 5, 12), end: new Date(2015, 5, 15), group:"MotoAmerica", className:"motorcycle", content:"Barber",id:"709@motocal.net"},
            {start: new Date(2015, 5, 13), end: new Date(2015, 5, 15), group:"WSR", className:"openwheel", content:"Hungary",id:"746@motocal.net"},
            {start: new Date(2015, 5, 13), end: new Date(2015, 5, 15), group:"WEC", className:"endurance", content:"24 Heures du Mans",id:"676@motocal.net"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 22), group:"V8SC", className:"touringcar", content:"Skycity Triple Crown",id:"664@motocal.net"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 22), group:"WTCC", className:"touringcar", content:"Slovakia",id:"722@motocal.net"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 22), group:"SBK", className:"motorcycle", content:"Riviera di Rimini",id:"623@motocal.net"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 22), group:"BSB", className:"motorcycle", content:"Round 4",id:"607@motocal.net"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 22), group:"F1", className:"openwheel", content:"Austria",id:"637@motocal.net"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 22), group:"WorldRX", className:"rally", content:"Germany",id:"689@motocal.net"},
            {start: new Date(2015, 5, 25), end: new Date(2015, 5, 28), group:"MotoGP", className:"motorcycle", content:"Netherlands",id:"546@motocal.net"},
            {start: new Date(2015, 5, 25), end: new Date(2015, 5, 28), group:"IndyCar", className:"openwheel", content:"MAVTV 500",id:"761@motocal.net"},
            {start: new Date(2015, 5, 26), end: new Date(2015, 5, 29), group:"WTCC", className:"touringcar", content:"France",id:"723@motocal.net"},
            {start: new Date(2015, 5, 26), end: new Date(2015, 5, 29), group:"DTM", className:"touringcar", content:"Norisring",id:"652@motocal.net"},
            {start: new Date(2015, 5, 26), end: new Date(2015, 5, 29), group:"MotoAmerica", className:"motorcycle", content:"Miller",id:"710@motocal.net"},
            {start: new Date(2015, 5, 27), end: new Date(2015, 5, 29), group:"BTCC", className:"touringcar", content:"Rounds 13, 14 & 15",id:"585@motocal.net"},
            {start: new Date(2015, 5, 27), end: new Date(2015, 5, 29), group:"Formula E", className:"openwheel", content:"United Kingdom",id:"538@motocal.net"},
            {start: new Date(2015, 6, 2), end: new Date(2015, 6, 6), group:"WRC", className:"rally", content:"Rally Poland",id:"597@motocal.net"},
            {start: new Date(2015, 6, 3), end: new Date(2015, 6, 6), group:"F1", className:"openwheel", content:"Britain",id:"638@motocal.net"},
            {start: new Date(2015, 6, 3), end: new Date(2015, 6, 6), group:"WorldRX", className:"rally", content:"Sweden",id:"690@motocal.net"},
            {start: new Date(2015, 6, 3), end: new Date(2015, 6, 6), group:"BSB", className:"motorcycle", content:"Round 5",id:"608@motocal.net"},
            {start: new Date(2015, 6, 4), end: new Date(2015, 6, 5), group:"SGP", className:"rally", content:"Cardiff",id:"732@motocal.net"},
            {start: new Date(2015, 6, 6), end: new Date(2015, 6, 10), group:"Roads", className:"motorcycle", content:"Southern 100",id:"714@motocal.net"},
            {start: new Date(2015, 6, 10), end: new Date(2015, 6, 13), group:"MotoGP", className:"motorcycle", content:"Germany",id:"565@motocal.net"},
            {start: new Date(2015, 6, 10), end: new Date(2015, 6, 13), group:"DTM", className:"touringcar", content:"Zandvoort",id:"653@motocal.net"},
            {start: new Date(2015, 6, 10), end: new Date(2015, 6, 13), group:"IndyCar", className:"openwheel", content:"Wisconsin 250",id:"763@motocal.net"},
            {start: new Date(2015, 6, 10), end: new Date(2015, 6, 13), group:"V8SC", className:"touringcar", content:"Townsville 400",id:"665@motocal.net"},
            {start: new Date(2015, 6, 10), end: new Date(2015, 6, 13), group:"WTCC", className:"touringcar", content:"Portugal",id:"724@motocal.net"},
            {start: new Date(2015, 6, 11), end: new Date(2015, 6, 13), group:"WSR", className:"openwheel", content:"Austria",id:"747@motocal.net"},
            {start: new Date(2015, 6, 16), end: new Date(2015, 6, 19), group:"IndyCar", className:"openwheel", content:"Iowa Corn Indy 300",id:"764@motocal.net"},
            {start: new Date(2015, 6, 17), end: new Date(2015, 6, 20), group:"SBK", className:"motorcycle", content:"USA",id:"625@motocal.net"},
            {start: new Date(2015, 6, 17), end: new Date(2015, 6, 20), group:"BSB", className:"motorcycle", content:"Round 6",id:"609@motocal.net"},
            {start: new Date(2015, 6, 17), end: new Date(2015, 6, 20), group:"MotoAmerica", className:"motorcycle", content:"Mazda Raceway",id:"711@motocal.net"},
            {start: new Date(2015, 6, 18), end: new Date(2015, 6, 19), group:"SGP", className:"rally", content:"Daugavpils",id:"733@motocal.net"},
            {start: new Date(2015, 6, 24), end: new Date(2015, 6, 27), group:"F1", className:"openwheel", content:"Hungary",id:"640@motocal.net"},
            {start: new Date(2015, 6, 25), end: new Date(2015, 6, 26), group:"SGP", className:"rally", content:"Målilla",id:"734@motocal.net"},
            {start: new Date(2015, 6, 26), end: new Date(2015, 6, 27), group:"EWC", className:"endurance", content:"Suzuka 8 Hours",id:"702@motocal.net"},
            {start: new Date(2015, 6, 30), end: new Date(2015, 7, 3), group:"WRC", className:"rally", content:"Rally Finland",id:"598@motocal.net"},
            {start: new Date(2015, 6, 31), end: new Date(2015, 7, 3), group:"BSB", className:"motorcycle", content:"Round 7",id:"610@motocal.net"},
            {start: new Date(2015, 6, 31), end: new Date(2015, 7, 3), group:"V8SC", className:"touringcar", content:"Ipswich SuperSprint",id:"666@motocal.net"},
            {start: new Date(2015, 6, 31), end: new Date(2015, 7, 3), group:"DTM", className:"touringcar", content:"Spielberg",id:"654@motocal.net"},
            {start: new Date(2015, 6, 31), end: new Date(2015, 7, 3), group:"IndyCar", className:"openwheel", content:"Honda Indy 200",id:"765@motocal.net"},
            {start: new Date(2015, 6, 31), end: new Date(2015, 7, 3), group:"SBK", className:"motorcycle", content:"Malaysia",id:"626@motocal.net"},
            {start: new Date(2015, 7, 3), end: new Date(2015, 7, 9), group:"Roads", className:"motorcycle", content:"Ulster Grand Prix",id:"684@motocal.net"},
            {start: new Date(2015, 7, 7), end: new Date(2015, 7, 9), group:"WorldRX", className:"rally", content:"Canada",id:"691@motocal.net"},
            {start: new Date(2015, 7, 7), end: new Date(2015, 7, 10), group:"MotoAmerica", className:"motorcycle", content:"INDY",id:"712@motocal.net"},
            {start: new Date(2015, 7, 7), end: new Date(2015, 7, 10), group:"MotoGP", className:"motorcycle", content:"Indianapolis",id:"548@motocal.net"},
            {start: new Date(2015, 7, 8), end: new Date(2015, 7, 10), group:"BTCC", className:"touringcar", content:"Rounds 16, 17 & 18",id:"586@motocal.net"},
            {start: new Date(2015, 7, 8), end: new Date(2015, 7, 9), group:"SGP", className:"rally", content:"Horsens",id:"735@motocal.net"},
            {start: new Date(2015, 7, 10), end: new Date(2015, 7, 12), group:"Formula E", className:"openwheel", content:"Pre-season test 1",id:"769@motocal.net"},
            {start: new Date(2015, 7, 14), end: new Date(2015, 7, 17), group:"MotoGP", className:"motorcycle", content:"Czech Republic",id:"549@motocal.net"},
            {start: new Date(2015, 7, 17), end: new Date(2015, 7, 19), group:"Formula E", className:"openwheel", content:"Pre-season test 2",id:"770@motocal.net"},
            {start: new Date(2015, 7, 20), end: new Date(2015, 7, 24), group:"WRC", className:"rally", content:"Rallye Deutschland",id:"599@motocal.net"},
            {start: new Date(2015, 7, 21), end: new Date(2015, 7, 24), group:"IndyCar", className:"openwheel", content:"Pocono IndyCar 500",id:"766@motocal.net"},
            {start: new Date(2015, 7, 21), end: new Date(2015, 7, 24), group:"BSB", className:"motorcycle", content:"Round 8",id:"611@motocal.net"},
            {start: new Date(2015, 7, 21), end: new Date(2015, 7, 24), group:"WorldRX", className:"rally", content:"Norway",id:"692@motocal.net"},
            {start: new Date(2015, 7, 21), end: new Date(2015, 7, 24), group:"F1", className:"openwheel", content:"Belgium",id:"641@motocal.net"},
            {start: new Date(2015, 7, 21), end: new Date(2015, 7, 24), group:"V8SC", className:"touringcar", content:"Sydney Motorsport Park SuperSprint",id:"667@motocal.net"},
            {start: new Date(2015, 7, 22), end: new Date(2015, 7, 23), group:"EWC", className:"endurance", content:"Oschersleben 8 Hours",id:"703@motocal.net"},
            {start: new Date(2015, 7, 22), end: new Date(2015, 8, 5), group:"Roads", className:"motorcycle", content:"Classic TT & Manx GP",id:"715@motocal.net"},
            {start: new Date(2015, 7, 22), end: new Date(2015, 7, 24), group:"BTCC", className:"touringcar", content:"Rounds 19, 20 & 21",id:"587@motocal.net"},
            {start: new Date(2015, 7, 24), end: new Date(2015, 7, 26), group:"Formula E", className:"openwheel", content:"Pre-season test 3",id:"771@motocal.net"},
            {start: new Date(2015, 7, 28), end: new Date(2015, 7, 31), group:"DTM", className:"touringcar", content:"Moscow Raceway",id:"655@motocal.net"},
            {start: new Date(2015, 7, 28), end: new Date(2015, 7, 31), group:"IndyCar", className:"openwheel", content:"Grand Prix of Sonoma",id:"767@motocal.net"},
            {start: new Date(2015, 7, 28), end: new Date(2015, 7, 31), group:"MotoGP", className:"motorcycle", content:"Great Britain",id:"568@motocal.net"},
            {start: new Date(2015, 7, 29), end: new Date(2015, 7, 30), group:"SGP", className:"rally", content:"Gorzów",id:"737@motocal.net"},
            {start: new Date(2015, 7, 30), end: new Date(2015, 7, 31), group:"WEC", className:"endurance", content:"6 Hours of N&uuml;rburgring",id:"677@motocal.net"},
            {start: new Date(2015, 8, 4), end: new Date(2015, 8, 7), group:"BSB", className:"motorcycle", content:"Round 9",id:"612@motocal.net"},
            {start: new Date(2015, 8, 4), end: new Date(2015, 8, 7), group:"WorldRX", className:"rally", content:"France",id:"693@motocal.net"},
            {start: new Date(2015, 8, 4), end: new Date(2015, 8, 7), group:"F1", className:"openwheel", content:"Italy",id:"642@motocal.net"},
            {start: new Date(2015, 8, 5), end: new Date(2015, 8, 7), group:"WSR", className:"openwheel", content:"United Kingdom",id:"748@motocal.net"},
            {start: new Date(2015, 8, 5), end: new Date(2015, 8, 7), group:"BTCC", className:"touringcar", content:"Rounds 22, 23 & 24",id:"588@motocal.net"},
            {start: new Date(2015, 8, 10), end: new Date(2015, 8, 14), group:"WRC", className:"rally", content:"Rally Australia",id:"600@motocal.net"},
            {start: new Date(2015, 8, 11), end: new Date(2015, 8, 14), group:"V8SC", className:"touringcar", content:"Sandown 500",id:"668@motocal.net"},
            {start: new Date(2015, 8, 11), end: new Date(2015, 8, 14), group:"MotoAmerica", className:"motorcycle", content:"New Jersey",id:"713@motocal.net"},
            {start: new Date(2015, 8, 11), end: new Date(2015, 8, 14), group:"MotoGP", className:"motorcycle", content:"San Marino",id:"551@motocal.net"},
            {start: new Date(2015, 8, 11), end: new Date(2015, 8, 14), group:"WTCC", className:"touringcar", content:"Japan",id:"725@motocal.net"},
            {start: new Date(2015, 8, 11), end: new Date(2015, 8, 14), group:"DTM", className:"touringcar", content:"Oschersleben",id:"656@motocal.net"},
            {start: new Date(2015, 8, 12), end: new Date(2015, 8, 14), group:"WSR", className:"openwheel", content:"Germany",id:"749@motocal.net"},
            {start: new Date(2015, 8, 12), end: new Date(2015, 8, 13), group:"SGP", className:"rally", content:"Krško",id:"738@motocal.net"},
            {start: new Date(2015, 8, 18), end: new Date(2015, 8, 21), group:"SBK", className:"motorcycle", content:"Spain",id:"627@motocal.net"},
            {start: new Date(2015, 8, 18), end: new Date(2015, 8, 21), group:"BSB", className:"motorcycle", content:"Round 10",id:"613@motocal.net"},
            {start: new Date(2015, 8, 18), end: new Date(2015, 8, 21), group:"F1", className:"openwheel", content:"Singapore",id:"643@motocal.net"},
            {start: new Date(2015, 8, 18), end: new Date(2015, 8, 21), group:"WorldRX", className:"rally", content:"Barcelona",id:"694@motocal.net"},
            {start: new Date(2015, 8, 19), end: new Date(2015, 8, 20), group:"WEC", className:"endurance", content:"6 Hours of Circuit of the Americas",id:"678@motocal.net"},
            {start: new Date(2015, 8, 19), end: new Date(2015, 8, 21), group:"EWC", className:"endurance", content:"Bol d’Or",id:"704@motocal.net"},
            {start: new Date(2015, 8, 25), end: new Date(2015, 8, 28), group:"MotoGP", className:"motorcycle", content:"Aragon",id:"570@motocal.net"},
            {start: new Date(2015, 8, 25), end: new Date(2015, 8, 28), group:"DTM", className:"touringcar", content:"N&uuml;rburgring",id:"657@motocal.net"},
            {start: new Date(2015, 8, 25), end: new Date(2015, 8, 28), group:"WTCC", className:"touringcar", content:"China",id:"726@motocal.net"},
            {start: new Date(2015, 8, 25), end: new Date(2015, 8, 28), group:"F1", className:"openwheel", content:"Japan",id:"644@motocal.net"},
            {start: new Date(2015, 8, 26), end: new Date(2015, 8, 28), group:"BTCC", className:"touringcar", content:"Rounds 25, 26 & 27",id:"589@motocal.net"},
            {start: new Date(2015, 8, 26), end: new Date(2015, 8, 27), group:"SGP", className:"rally", content:"Stockholm",id:"739@motocal.net"},
            {start: new Date(2015, 8, 26), end: new Date(2015, 8, 28), group:"WSR", className:"openwheel", content:"France",id:"750@motocal.net"},
            {start: new Date(2015, 9, 1), end: new Date(2015, 9, 5), group:"WRC", className:"rally", content:"Rallye de France",id:"601@motocal.net"},
            {start: new Date(2015, 9, 2), end: new Date(2015, 9, 5), group:"SBK", className:"motorcycle", content:"France",id:"628@motocal.net"},
            {start: new Date(2015, 9, 2), end: new Date(2015, 9, 5), group:"BSB", className:"motorcycle", content:"Round 11",id:"614@motocal.net"},
            {start: new Date(2015, 9, 2), end: new Date(2015, 9, 5), group:"WorldRX", className:"rally", content:"Turkey",id:"695@motocal.net"},
            {start: new Date(2015, 9, 3), end: new Date(2015, 9, 4), group:"SGP", className:"rally", content:"Toruń",id:"740@motocal.net"},
            {start: new Date(2015, 9, 8), end: new Date(2015, 9, 12), group:"V8SC", className:"touringcar", content:"Bathurst 1000",id:"669@motocal.net"},
            {start: new Date(2015, 9, 9), end: new Date(2015, 9, 12), group:"F1", className:"openwheel", content:"Russia",id:"645@motocal.net"},
            {start: new Date(2015, 9, 9), end: new Date(2015, 9, 12), group:"MotoGP", className:"motorcycle", content:"Japan",id:"553@motocal.net"},
            {start: new Date(2015, 9, 10), end: new Date(2015, 9, 12), group:"BTCC", className:"touringcar", content:"Rounds 28, 29 & 30",id:"590@motocal.net"},
            {start: new Date(2015, 9, 11), end: new Date(2015, 9, 12), group:"WEC", className:"endurance", content:"6 Hours of Fuji",id:"679@motocal.net"},
            {start: new Date(2015, 9, 16), end: new Date(2015, 9, 19), group:"WorldRX", className:"rally", content:"Italy",id:"696@motocal.net"},
            {start: new Date(2015, 9, 16), end: new Date(2015, 9, 19), group:"MotoGP", className:"motorcycle", content:"Australia",id:"572@motocal.net"},
            {start: new Date(2015, 9, 16), end: new Date(2015, 9, 19), group:"DTM", className:"touringcar", content:"Hockenheim",id:"658@motocal.net"},
            {start: new Date(2015, 9, 16), end: new Date(2015, 9, 19), group:"BSB", className:"motorcycle", content:"Round 12",id:"615@motocal.net"},
            {start: new Date(2015, 9, 16), end: new Date(2015, 9, 19), group:"SBK", className:"motorcycle", content:"Qatar",id:"629@motocal.net"},
            {start: new Date(2015, 9, 17), end: new Date(2015, 9, 19), group:"WSR", className:"openwheel", content:"Spain",id:"751@motocal.net"},
            {start: new Date(2015, 9, 22), end: new Date(2015, 9, 26), group:"WRC", className:"rally", content:"Rally de Espana",id:"602@motocal.net"},
            {start: new Date(2015, 9, 23), end: new Date(2015, 9, 26), group:"V8SC", className:"touringcar", content:"Gold Coast 600",id:"670@motocal.net"},
            {start: new Date(2015, 9, 23), end: new Date(2015, 9, 26), group:"MotoGP", className:"motorcycle", content:"Malaysia",id:"573@motocal.net"},
            {start: new Date(2015, 9, 23), end: new Date(2015, 9, 26), group:"F1", className:"openwheel", content:"United States",id:"646@motocal.net"},
            {start: new Date(2015, 9, 24), end: new Date(2015, 9, 25), group:"SGP", className:"rally", content:"Melbourne",id:"741@motocal.net"},
            {start: new Date(2015, 9, 30), end: new Date(2015, 10, 2), group:"F1", className:"openwheel", content:"Mexico",id:"647@motocal.net"},
            {start: new Date(2015, 9, 30), end: new Date(2015, 10, 2), group:"WTCC", className:"touringcar", content:"Thailand",id:"727@motocal.net"},
            {start: new Date(2015, 10, 1), end: new Date(2015, 10, 2), group:"WEC", className:"endurance", content:"6 Hours of Shanghai",id:"680@motocal.net"},
            {start: new Date(2015, 10, 6), end: new Date(2015, 10, 9), group:"MotoGP", className:"motorcycle", content:"Valencia",id:"556@motocal.net"},
            {start: new Date(2015, 10, 6), end: new Date(2015, 10, 9), group:"V8SC", className:"touringcar", content:"ITM 500 Auckland",id:"671@motocal.net"},
            {start: new Date(2015, 10, 12), end: new Date(2015, 10, 16), group:"WRC", className:"rally", content:"Wales Rally GB",id:"603@motocal.net"},
            {start: new Date(2015, 10, 13), end: new Date(2015, 10, 16), group:"F1", className:"openwheel", content:"Brazil",id:"648@motocal.net"},
            {start: new Date(2015, 10, 19), end: new Date(2015, 10, 23), group:"Roads", className:"motorcycle", content:"Macau Grand Prix",id:"685@motocal.net"},
            {start: new Date(2015, 10, 20), end: new Date(2015, 10, 23), group:"WTCC", className:"touringcar", content:"Qatar",id:"728@motocal.net"},
            {start: new Date(2015, 10, 20), end: new Date(2015, 10, 23), group:"V8SC", className:"touringcar", content:"Phillip Island SuperSprint",id:"672@motocal.net"},
            {start: new Date(2015, 10, 21), end: new Date(2015, 10, 22), group:"WEC", className:"endurance", content:"6 Hours of Bahrain",id:"681@motocal.net"},
            {start: new Date(2015, 10, 27), end: new Date(2015, 10, 30), group:"WorldRX", className:"rally", content:"Argentina",id:"700@motocal.net"},
            {start: new Date(2015, 10, 27), end: new Date(2015, 10, 30), group:"F1", className:"openwheel", content:"Abu Dhabi",id:"649@motocal.net"},
            {start: new Date(2015, 11, 4), end: new Date(2015, 11, 7), group:"V8SC", className:"touringcar", content:"Sydney 500",id:"673@motocal.net"},
            {start: new Date(2015, 2, 9), end: new Date(2015, 2, 11), group:"GP2", className:"openwheel", content:"Yas Marina Test",id:"1@gp2series.com"},
            {start: new Date(2015, 3, 1), end: new Date(2015, 3, 3), group:"GP2", className:"openwheel", content:"Sakhir Test",id:"2@gp2series.com"},
            {start: new Date(2015, 3, 17), end: new Date(2015, 3, 19), group:"GP2", className:"openwheel", content:"Sakhir, Bahrain",id:"3@gp2series.com"},
            {start: new Date(2015, 4, 8), end: new Date(2015, 4, 10), group:"GP2", className:"openwheel", content:"Barcelona, Spain",id:"4@gp2series.com"},
            {start: new Date(2015, 4, 21), end: new Date(2015, 4, 23), group:"GP2", className:"openwheel", content:"Monte Carlo, Monaco",id:"5@gp2series.com"},
            {start: new Date(2015, 5, 19), end: new Date(2015, 5, 21), group:"GP2", className:"openwheel", content:"Spielber, Austria",id:"6@gp2series.com"},
            {start: new Date(2015, 6, 3), end: new Date(2015, 6, 5), group:"GP2", className:"openwheel", content:"Silverstone, Great-Britain",id:"7@gp2series.com"},
            {start: new Date(2015, 6, 24), end: new Date(2015, 6, 26), group:"GP2", className:"openwheel", content:"Budapest, Hungary",id:"8@gp2series.com"},
            {start: new Date(2015, 7, 21), end: new Date(2015, 7, 23), group:"GP2", className:"openwheel", content:"Spa-Francorchamps, Belgium",id:"9@gp2series.com"},
            {start: new Date(2015, 8, 4), end: new Date(2015, 8, 6), group:"GP2", className:"openwheel", content:"Monza, Italy",id:"10@gp2series.com"},
            {start: new Date(2015, 9, 9), end: new Date(2015, 9, 11), group:"GP2", className:"openwheel", content:"Sochi, Russia",id:"11@gp2series.com"},
            {start: new Date(2015, 10, 27), end: new Date(2015, 10, 29), group:"GP2", className:"openwheel", content:"Yas Marina, UAE",id:"12@gp2series.com"},
          ])
        */
        // create visualization
    };
    NetworkViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-network-view',
            template: __webpack_require__(771),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_pouchdb_config__["a" /* PouchDBService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_pouchdb_config__["a" /* PouchDBService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* NgZone */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _c) || Object])
    ], NetworkViewComponent);
    return NetworkViewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/network-view.component.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StationViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StationViewComponent = (function () {
    function StationViewComponent() {
    }
    StationViewComponent.prototype.ngOnInit = function () {
    };
    StationViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-station-view',
            template: __webpack_require__(772),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], StationViewComponent);
    return StationViewComponent;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/station-view.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 456;


/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(580);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/main.js.map

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchdb_config__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(http, _service, database, zone) {
        this.http = http;
        this._service = _service;
        this.database = database;
        this.zone = zone;
        this.open = false;
        this.options2 = {
            timeOut: 2800,
            clickToClose: true,
            maxLength: 0,
            maxStack: 7,
            showProgressBar: false,
            pauseOnHover: true,
            animate: 'fromRight',
            position: ['top', 'right']
        };
        this.listener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        console.log('Service created', _service);
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__["connect"]('http://localhost:3000');
        // var socket = io.connect('http://iontracking2.azurewebsites.net');
        this.socket.on('notifyChanges', function (data) {
            console.log('hi');
            _service.success("Notification ", "Flight Moved");
            // document.getElementById('notify').innerHTML=data.msg
        });
    }
    AppComponent.prototype.onCreate = function (event) {
        console.log(event);
    };
    AppComponent.prototype.onDestroy = function (event) {
        console.log(event);
    };
    AppComponent.prettyConfirm = function (title, text, callback) {
        swal({
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#DD6B55"
        }, callback);
    };
    AppComponent.displayOnUI = function (doc) {
        console.log('inside Print');
        var options = {
            groupOrder: function (a, b) {
                return a.value - b.value;
            },
            groupOrderSwap: function (a, b, groups) {
                var v = a.value;
                a.value = b.value;
                b.value = v;
            },
            onMove: function (item, callback) {
                var title = 'Do you really want to move the item to\n' +
                    'start: ' + item.start + '\n' +
                    'end: ' + item.end + '?';
                AppComponent.prettyConfirm('Move item', title, function (ok) {
                    if (ok) {
                        var id = item.id;
                        var myarray_1 = id.split("_");
                        var dummy = AppComponent.mydata;
                        for (var _i = 0, _a = dummy.aircrafts; _i < _a.length; _i++) {
                            var aircraft = _a[_i];
                            if (aircraft.nNbr == myarray_1[0]) {
                                var flightindex = myarray_1[2];
                                aircraft.pFls[flightindex].aGDDt = "" + item.start + "";
                                aircraft.pFls[flightindex].aGADt = "" + item.end + "";
                                AppComponent.static_database_ref.put('ionTracking', dummy);
                            }
                        }
                    }
                    else {
                        callback(null); // cancel editing item
                    }
                });
            },
            orientation: 'both',
            editable: true,
            groupEditable: true,
            start: new Date("Sat May 29 2015 20:00:00"),
            end: new Date("Mon Jun 1 2015")
        };
        var groups = new vis.DataSet(options);
        var items = new vis.DataSet(options);
        var itemCount = 0;
        for (var _i = 0, _a = doc.aircrafts; _i < _a.length; _i++) {
            var item = _a[_i];
            var i = 0;
            groups.add([
                { "content": item.nNbr, "id": item.nNbr, "value": i++, className: 'openwheel' }
            ]);
        }
        var myarray = [];
        for (var _b = 0, _c = doc.aircrafts; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.hasOwnProperty('pFls')) {
                myarray.push(item);
            }
        }
        for (var _d = 0, myarray_2 = myarray; _d < myarray_2.length; _d++) {
            var item = myarray_2[_d];
            for (var _e = 0, _f = item.pFls; _e < _f.length; _e++) {
                var subitem = _f[_e];
                items.add([
                    {
                        id: String(item.nNbr) + "_" + String(subitem.fltNbr) + "_" + String(itemCount),
                        start: new Date(subitem.aGDDt),
                        end: new Date(subitem.aGADt),
                        group: item.nNbr,
                        className: "openwheel",
                        content: subitem.fltNbr,
                    },
                ]);
                itemCount++;
            }
            itemCount = 0;
        }
        var container = document.getElementById('visualization');
        container.innerHTML = "";
        var timeline = new vis.Timeline(container);
        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        AppComponent.static_database_ref = this.database;
        this.database.get('ionTracking').then(function (doc) {
            console.log('inside fetch data successfully if exists');
            AppComponent.mydata = doc;
            AppComponent.displayOnUI(AppComponent.mydata);
            //  this.database.sync("http://localhost:4984/ion-tracking");
            _this.database.sync("http://54.200.235.10:4984/ion-tracking");
            _this.database.getChangeListener().subscribe(function (data) {
                var _loop_1 = function(i) {
                    _this.zone.run(function () {
                        AppComponent.mydata = data.change.docs[i];
                        AppComponent.displayOnUI(AppComponent.mydata);
                        _this.socket.emit('notify');
                        //document.getElementById('notify').innerHTML='Changes made to Couchbase'
                    });
                };
                for (var i = 0; i < data.change.docs.length; i++) {
                    _loop_1(i);
                }
            });
        }, function (err) {
            if (err.status == "404") {
                console.log('inside error 404');
                //    this.database.sync("http://localhost:4984/ion-tracking");
                _this.database.sync("http://54.200.235.10:4984/ion-tracking");
                _this.database.getChangeListener().subscribe(function (data) {
                    var _loop_2 = function(i) {
                        _this.zone.run(function () {
                            AppComponent.mydata = data.change.docs[i];
                        });
                    };
                    for (var i = 0; i < data.change.docs.length; i++) {
                        _loop_2(i);
                    }
                    AppComponent.displayOnUI(AppComponent.mydata);
                });
            }
            else {
                console.log('inside error else block');
            }
        });
    };
    AppComponent.prototype.clickme = function () {
        if (this.open === false) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#footerSlideContent').animate({ height: '178px' });
            __WEBPACK_IMPORTED_MODULE_5_jquery__(this).css('backgroundPosition', 'bottom left');
            this.open = true;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#footerSlideContent').animate({ height: '0px' });
            __WEBPACK_IMPORTED_MODULE_5_jquery__(this).css('backgroundPosition', 'top left');
            this.open = false;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(767),
            styles: [__webpack_require__(760)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_pouchdb_config__["a" /* PouchDBService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_pouchdb_config__["a" /* PouchDBService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* NgZone */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/app.component.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MainView_mainview_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__network_view_network_view_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__station_view_station_view_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_view_grid_view_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pouchdb_config__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_notifications__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__(582);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__MainView_mainview_component__["a" /* MainviewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__network_view_network_view_component__["a" /* NetworkViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__station_view_station_view_component__["a" /* StationViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__grid_view_grid_view_component__["a" /* GridViewComponent */], __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular2_notifications__["PushNotificationsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_pouchdb_config__["a" /* PouchDBService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/app.module.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainView_mainview_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_view_grid_view_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__station_view_station_view_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_view_network_view_component__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });





var APP_ROUTES = [
    { path: 'mainview', component: __WEBPACK_IMPORTED_MODULE_1__MainView_mainview_component__["a" /* MainviewComponent */] },
    { path: 'gridview', component: __WEBPACK_IMPORTED_MODULE_2__grid_view_grid_view_component__["a" /* GridViewComponent */] },
    { path: 'stationview', component: __WEBPACK_IMPORTED_MODULE_3__station_view_station_view_component__["a" /* StationViewComponent */] },
    { path: 'networkview', component: __WEBPACK_IMPORTED_MODULE_4__network_view_network_view_component__["a" /* NetworkViewComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/app.routing.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.open = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(768),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/footer.component.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(770),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/header.component.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/environment.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/United TCS/Desktop/Praveen/CEAN/angularDemo/Test/src/polyfills.js.map

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "#footerSlideContainer {\r\n\tposition: fixed;\r\n\tbottom:0;\r\n\twidth: 100%;\r\n}\r\n#footerSlideButton {\r\n\tbackground: url(sliderButton.png) top left no-repeat transparent;\r\n\tposition: absolute;\r\n\ttop: -55px;\r\n\tright: 20px;\r\n\twidth:50px;\r\n\theight:50px;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n#footerSlideContent {\r\n\twidth: 100%;\r\n\theight: 0px; \r\n\t\r\n\tbackground: #251b15;\r\n\tcolor: #CCCCCC;\r\n\tfont-size: 0.8em;\r\n\tborder: none;\r\n\tfont-family: DejaVuSansBook, Sans-Serif;\r\n}\r\n#footerSlideContent h3 {\r\n\tfont-size: 36px;\r\n\tcolor: #9AC941;\r\n\tmargin: 10px 0 10px 0;\r\n}\r\n#footerSlideContent ul {\r\n\tcolor: #EE8D40;\r\n\tlist-style-type: none;\r\n\tline-height: 2em;\r\n}\r\n#footerSlideText {\r\n\tpadding: 15px 10px 25px 25px;\r\n}\r\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = "#footerSlideContainer {\r\n\tposition: fixed;\r\n\tbottom:0;\r\n\twidth: 100%;\r\n}\r\n#footerSlideButton {\r\n\tbackground: url(sliderButton.png) top left no-repeat transparent;\r\n\tposition: absolute;\r\n\ttop: -55px;\r\n\tright: 20px;\r\n\twidth:50px;\r\n\theight:50px;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n}\r\n#footerSlideContent {\r\n\twidth: 100%;\r\n\theight: 0px;\r\n\tbackground: #251b15;\r\n\tcolor: #CCCCCC;\r\n\tfont-size: 0.8em;\r\n\tborder: none;\r\n\tfont-family: DejaVuSansBook, Sans-Serif;\r\n}\r\n#footerSlideContent h3 {\r\n\tfont-size: 36px;\r\n\tcolor: #9AC941;\r\n\tmargin: 10px 0 10px 0;\r\n}\r\n#footerSlideContent ul {\r\n\tcolor: #EE8D40;\r\n\tlist-style-type: none;\r\n\tline-height: 2em;\r\n}\r\n#footerSlideText {\r\n\tpadding: 15px 10px 25px 25px;\r\n}"

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ".navbar-inverse{\r\n   background-color:  #04294c;\r\n   color: white   ;\r\n   border-radius: 0px;\r\n\r\n}\r\n\r\n.navbar-inverse a{\r\n    color: white\r\n}"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "<simple-notifications \n[options]=\"options\" \n(onCreate)=\"onCreate($event)\"\n(onDestroy)=\"onDestroy($event)\"></simple-notifications>\n<h1>{{title}} </h1>\n<button (click)=\"onButtonClick()\"> Success Notification! </button>\n<button (click)=\"onAnotherClick()\"> Another Notification! </button>\n\n<div id=\"test\"></div>\n"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = "<simple-notifications \n[options]=\"options2\" \n(onCreate)=\"onCreate($event)\"\n(onDestroy)=\"onDestroy($event)\"></simple-notifications>\n\n \n<app-header></app-header>\n\n<div class=\"container-fluid\">\n   <router-outlet></router-outlet>\n</div>\n\n<div class=\"container-fluid\">\n   <!-- <div>\n        <label id=\"notify\">Notification</label>\n    </div> -->\n    <div id=\"visualization\"></div>\n</div>\n\n\n\n<div id=\"footerSlideContainer\">\n\t<div id=\"footerSlideButton\" (click)=\"clickme()\">\n        <span class=\"glyphicon glyphicon-chevron-up\" *ngIf=\"!open\"></span>\n        <span class=\"glyphicon glyphicon-chevron-down\" *ngIf=\"open\"></span>\n    </div>\n\t  <div id=\"footerSlideContent\" >\n\t\t <div id=\"footerSlideText\" *ngIf=\"open\">\n\t\t\t\n  <ul class=\"nav nav-pills hidden-xs hidden-sm\">\n  <li role=\"presentation\" ><a href=\"#\">RH Smart D:0()</a></li>\n  <li role=\"presentation\" ><a href=\"#\">Alerts</a></li>\n  <li role=\"presentation\" ><a href=\"#\">Reports </a></li>\n  <li role=\"presentation\" ><a href=\"#\">Uncover </a></li>\n  \n  <li role=\"presentation\" ><a href=\"#\">Add all Noses </a></li>\n \n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Current Time</button></li>\n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Add to Workspace</button></li>\n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Hide Delays</button></li>\n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Build Flights</button></li>\n  <li class=\"hidden-sm\"><span>Fleet:</span>\n      <button class=\"btn btn-default label-default\" style=\"color:white\">76C, 76N, 20S...</button>\n  </li>      \n</ul>\n\n\n<div class=\"container-fluid\">\n            <div class=\"row\"> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-primary col-xs-12\">ORD</button>\n                </div>  \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-warning col-xs-12\">DEN</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\"btn btn-danger col-xs-12\">NYC</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-success col-xs-12\">LAH</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-info col-xs-12\">BAH</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-default col-xs-12\">LAD</button>\n                </div> \n            </div>\n\n            <div class=\"row\" style=\"margin-top:2%\" class=\"hidden-xs hidden-sm\">\n                <div class=\"col-sm-3\">\n                     <span >From</span>\n                     <input type=\"date\" style=\"padding: 3px;border-radius: 8px;\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <span >To</span>\n                    <input type=\"date\" style=\"padding: 3px;border-radius: 8px;\" >\n                </div>\n                <div class=\"col-sm-3\">\n                  <span >Timezone</span>\n                  <input type=\"radio\"  name=\"tmz\">GMT\n                  <input type=\"radio\"  name=\"tmz\">Local\n                </div>\n                <div class=\"col-sm-3\">\n                  <span >SortBy </span>\n                  <input type=\"checkbox\">Arr\n                  <input type=\"checkbox\">Dep\n                </div>\n            </div>                        \n           </div>\n\t   </div>\n\t</div>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = "<div id=\"footerSlideContainer\">\n\t<div id=\"footerSlideButton\"> Click Me</div>\n\t  <div id=\"footerSlideContent\">\n\t\t <div id=\"footerSlideText\">\n\t\t\t\n  <ul class=\"nav nav-pills hidden-xs hidden-sm\">\n  <li role=\"presentation\" ><a href=\"#\">RH Smart D:0()</a></li>\n  <li role=\"presentation\" ><a href=\"#\">Alerts</a></li>\n  <li role=\"presentation\" ><a href=\"#\">Reports </a></li>\n  <li role=\"presentation\" ><a href=\"#\">Uncover </a></li>\n  \n  <li role=\"presentation\" ><a href=\"#\">Add all Noses </a></li>\n \n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Current Time</button></li>\n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Add to Workspace</button></li>\n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Hide Delays</button></li>\n  <li><button class=\"btn btn-default label-default\" style=\"color:white\">Build Flights</button></li>\n  <li class=\"hidden-sm\"><span>Fleet:</span>\n      <button class=\"btn btn-default label-default\" style=\"color:white\">76C, 76N, 20S...</button>\n  </li>      \n</ul>\n\n\n<div class=\"container-fluid\" style=\"    background-color: #dcdcd9;\n    padding-top: 2%;\n    padding-bottom: 2%;\">\n            <div class=\"row\"> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-primary col-xs-12\">ORD</button>\n                </div>  \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-warning col-xs-12\">DEN</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\"btn btn-danger col-xs-12\">NYC</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-success col-xs-12\">LAH</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-info col-xs-12\">BAH</button>\n                </div> \n                <div class=\"col-xs-6 col-md-2\" style=\"margin-top:4px\">\n                    <button class=\" btn btn-default col-xs-12\">LAD</button>\n                </div> \n            </div>\n\n            <div class=\"row\" style=\"margin-top:2%\" class=\"hidden-xs hidden-sm\">\n                <div class=\"col-sm-3\">\n                     <span >From</span>\n                     <input type=\"date\" style=\"padding: 3px;border-radius: 8px;\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <span >To</span>\n                    <input type=\"date\" style=\"padding: 3px;border-radius: 8px;\" >\n                </div>\n                <div class=\"col-sm-3\">\n                  <span >Timezone</span>\n                  <input type=\"radio\"  name=\"tmz\">GMT\n                  <input type=\"radio\"  name=\"tmz\">Local\n                </div>\n                <div class=\"col-sm-3\">\n                  <span >SortBy </span>\n                  <input type=\"checkbox\">Arr\n                  <input type=\"checkbox\">Dep\n                </div>\n            </div>                        \n        </div>\n\n\n\n\n\n\n\t\t</div>\n\t</div>"

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Gender</th>\n      <th>company</th>\n      <th>Email</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let person of people;let i=index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{person.name}}</td>\n      <td>{{person.gender}}</td>\n      <td>{{person.company}}</td>\n      <td>{{person.email}}</td>\n      <td>{{person.age}}</td>\n    </tr>\n    \n  </tbody>\n</table>\n\n"

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Ion Tracking</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">  \n       <li><a routerLink=\"/networkview\">Network View</a></li>\n       <li ><a routerLink=\"/gridview\">Station View</a></li>\n       <li ><a routerLink=\"/stationview\">OM View</a></li>\n       <li ><a routerLink=\"/mainview\">Maint. View</a></li>\n       <li class=\"dropdown\">\n           <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">End Assign <span class=\"caret\"></span></a>\n           <ul class=\"dropdown-menu\">\n               <li><a href=\"#\">--------</a></li>\n               <li><a href=\"#\">--------</a></li>\n               <li><a href=\"#\">--------</a></li>\n           </ul>\n       </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right hidden-xs hidden-sm hidden-md\" >\n        <li>\n            <a><span style=\"color:white;font-size: 1.4em;\" class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span></a>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-right\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n      </form>\n\n      \n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n\n\n\n"

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = "<!--\n    <div id=\"visualization\"></div>\n\n    -->\n"

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = "<p>\n  station-view works!\n</p>\n"

/***/ }

},[1048]);
//# sourceMappingURL=main.bundle.map