webpackJsonp([0,3],{1047:function(t,n){},1048:function(t,n,e){t.exports=e(457)},246:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return s});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=e(758),s=function(){function t(){this.listener=new o._20,this.mylistener=new o._20,this.isInstantiated||(this.database=new r("ion-tracking-T3"),this.isInstantiated=!0)}return t.prototype.fetch=function(){return this.database.allDocs({include_docs:!0})},t.prototype.get=function(t){return this.database.get(t)},t.prototype.put=function(t,n){var e=this;return n._id=t,this.get(t).then(function(t){return n._rev=t._rev,e.database.put(n)},function(t){return"404"==t.status?e.database.put(n):new Promise(function(n,e){e(t)})})},t.prototype.sync=function(t){var n=this,e=new r(t);this.database.sync(e,{live:!0}).on("change",function(t){n.listener.emit(t)}).on("error",function(t){console.error(JSON.stringify(t))})},t.prototype.getChangeListener=function(){return this.listener},t=i([e.i(o.R)(),a("design:paramtypes",[])],t)}()},371:function(t,n,e){"use strict";var o=e(1),i=e(419),a=(e.n(i),e(247));e.n(a);e.d(n,"a",function(){return l});var r=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=function(){function t(t){this._service=t,this.title="Main View!",this.options={timeOut:2800,clickToClose:!0,maxLength:0,maxStack:7,showProgressBar:!0,pauseOnHover:!0,animate:"fromRight",position:["top","right"]},console.log("Service created",t)}return t.prototype.onCreate=function(t){console.log(t)},t.prototype.onDestroy=function(t){console.log(t)},t.prototype.onButtonClick=function(){this._service.success("Saved ","New Item created")},t.prototype.onAnotherClick=function(){this._service.error("Error ","Could not load data!")},t.prototype.ngOnInit=function(){i("#test").html("Hello How are you")},t=r([e.i(o.G)({selector:"app-mainview",template:e(766),styles:[e(759)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.NotificationsService&&a.NotificationsService)&&n||Object])],t);var n}()},372:function(t,n,e){"use strict";var o=e(1),i=e(166),a=e(423);e.n(a);e.d(n,"a",function(){return l});var r=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=function(){function t(t){this.http=t,this.people=[]}return t.prototype.ngOnInit=function(){var t=this;this.http.get("https://api.myjson.com/bins/yow47").map(function(t){return t.json()}).subscribe(function(n){return t.people=n})},t=r([e.i(o.G)({selector:"app-grid-view",template:e(769),styles:[e(762)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.a&&i.a)&&n||Object])],t);var n}()},373:function(t,n,e){"use strict";var o=e(1),i=e(166),a=e(246);e.d(n,"a",function(){return l});var r=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=function(){function t(t,n,e){this.database=t,this.zone=n,this.http=e,this.Flights=[]}return t.prototype.ngOnInit=function(){},t=r([e.i(o.G)({selector:"app-network-view",template:e(771),styles:[e(764)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object,"function"==typeof(l="undefined"!=typeof o._26&&o._26)&&l||Object,"function"==typeof(c="undefined"!=typeof i.a&&i.a)&&c||Object])],t);var n,l,c}()},374:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return r});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([e.i(o.G)({selector:"app-station-view",template:e(772),styles:[e(765)]}),a("design:paramtypes",[])],t)}()},456:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=456},457:function(t,n,e){"use strict";var o=e(585),i=(e.n(o),e(544)),a=e(1),r=e(584),s=e(580);r.a.production&&e.i(a._40)(),e.i(i.a)().bootstrapModule(s.a)},579:function(t,n,e){"use strict";var o=e(1),i=e(166),a=e(423),r=(e.n(a),e(246)),s=e(1038),l=(e.n(s),e(419)),c=(e.n(l),e(247));e.n(c);e.d(n,"a",function(){return f});var d=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},p=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},f=function(){function t(t,n,e,i){this.http=t,this._service=n,this.database=e,this.zone=i,this.open=!1,this.options2={timeOut:2800,clickToClose:!0,maxLength:0,maxStack:7,showProgressBar:!1,pauseOnHover:!0,animate:"fromRight",position:["top","right"]},this.listener=new o._20,this.socket=s.connect("http://iontracking2.azurewebsites.net"),this.socket.on("notifyChanges",function(t){n.success("Notification ","Flight Moved")})}return t.prototype.onCreate=function(t){console.log(t)},t.prototype.onDestroy=function(t){console.log(t)},t.prettyConfirm=function(t,n,e){swal({title:t,text:n,type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55"},e)},t.displayOnUI=function(n){console.log("inside Print");for(var e={groupOrder:function(t,n){return t.value-n.value},groupOrderSwap:function(t,n,e){var o=t.value;t.value=n.value,n.value=o},onMove:function(n,e){var o="Do you really want to move the item to\nstart: "+n.start+"\nend: "+n.end+"?";t.prettyConfirm("Move item",o,function(o){if(o)for(var i=n.id,a=i.split("_"),r=t.mydata,s=0,l=r.aircrafts;s<l.length;s++){var c=l[s];if(c.nNbr==a[0]){var d=a[2];c.pFls[d].aGDDt=""+n.start,c.pFls[d].aGADt=""+n.end,t.static_database_ref.put("ionTracking",r)}}else e(null)})},orientation:"both",editable:!0,groupEditable:!0,start:new Date("Sat May 29 2015 20:00:00"),end:new Date("Mon Jun 1 2015")},o=new vis.DataSet(e),i=new vis.DataSet(e),a=0,r=0,s=n.aircrafts;r<s.length;r++){var l=s[r],c=0;o.add([{content:l.nNbr,id:l.nNbr,value:c++,className:"openwheel"}])}for(var d=[],p=0,f=n.aircrafts;p<f.length;p++){var l=f[p];l.hasOwnProperty("pFls")&&d.push(l)}for(var u=0,h=d;u<h.length;u++){for(var l=h[u],b=0,v=l.pFls;b<v.length;b++){var y=v[b];i.add([{id:String(l.nNbr)+"_"+String(y.fltNbr)+"_"+String(a),start:new Date(y.aGDDt),end:new Date(y.aGADt),group:l.nNbr,className:"openwheel",content:y.fltNbr}]),a++}a=0}var g=document.getElementById("visualization");g.innerHTML="";var m=new vis.Timeline(g);m.setOptions(e),m.setGroups(o),m.setItems(i)},t.prototype.ngOnInit=function(){var n=this;t.static_database_ref=this.database,this.database.sync("http://54.200.235.10:4984/ion-tracking"),this.database.getChangeListener().subscribe(function(e){for(var o=function(o){n.zone.run(function(){t.mydata=e.change.docs[o],t.displayOnUI(t.mydata),n.socket.emit("notify")})},i=0;i<e.change.docs.length;i++)o(i)})},t.prototype.clickme=function(){this.open===!1?(l("#footerSlideContent").animate({height:"178px"}),l(this).css("backgroundPosition","bottom left"),this.open=!0):(l("#footerSlideContent").animate({height:"0px"}),l(this).css("backgroundPosition","top left"),this.open=!1)},t=d([e.i(o.G)({selector:"app-root",template:e(767),styles:[e(760)]}),p("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.a&&i.a)&&n||Object,"function"==typeof(a="undefined"!=typeof c.NotificationsService&&c.NotificationsService)&&a||Object,"function"==typeof(f="undefined"!=typeof r.a&&r.a)&&f||Object,"function"==typeof(u="undefined"!=typeof o._26&&o._26)&&u||Object])],t);var n,a,f,u}()},580:function(t,n,e){"use strict";var o=e(121),i=e(1),a=e(535),r=e(166),s=e(579),l=e(371),c=e(583),d=e(373),p=e(581),f=e(374),u=e(372),h=e(246),b=e(247),v=(e.n(b),e(582));e.d(n,"a",function(){return m});var y=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},g=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},m=function(){function t(){}return t=y([e.i(i.I)({declarations:[s.a,l.a,c.a,d.a,f.a,u.a,v.a],imports:[o.c,a.a,r.b,p.a,b.SimpleNotificationsModule,b.PushNotificationsModule],providers:[h.a],bootstrap:[s.a]}),g("design:paramtypes",[])],t)}()},581:function(t,n,e){"use strict";var o=e(564),i=e(371),a=e(372),r=e(374),s=e(373);e.d(n,"a",function(){return c});var l=[{path:"mainview",component:i.a},{path:"gridview",component:a.a},{path:"stationview",component:r.a},{path:"networkview",component:s.a}],c=o.a.forRoot(l)},582:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return r});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){this.open=!1}return t.prototype.ngOnInit=function(){},t=i([e.i(o.G)({selector:"app-footer",template:e(768),styles:[e(761)]}),a("design:paramtypes",[])],t)}()},583:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return r});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([e.i(o.G)({selector:"app-header",template:e(770),styles:[e(763)]}),a("design:paramtypes",[])],t)}()},584:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={production:!0}},585:function(t,n,e){"use strict";var o=e(605),i=(e.n(o),e(598)),a=(e.n(i),e(594)),r=(e.n(a),e(600)),s=(e.n(r),e(599)),l=(e.n(s),e(597)),c=(e.n(l),e(596)),d=(e.n(c),e(604)),p=(e.n(d),e(593)),f=(e.n(p),e(592)),u=(e.n(f),e(602)),h=(e.n(u),e(595)),b=(e.n(h),e(603)),v=(e.n(b),e(601)),y=(e.n(v),e(606)),g=(e.n(y),e(1046));e.n(g)},759:function(t,n){t.exports=""},760:function(t,n){t.exports="#footerSlideContainer{\r\n\tposition:fixed;\r\n\tbottom:0;\r\n\twidth:100%;\r\n}\r\n#footerSlideButton{\r\n\tbackground:url(sliderButton.png) top left no-repeat transparent;\r\n\tposition:absolute;\r\n\ttop:-55px;\r\n\tright:20px;\r\n\twidth:50px;\r\n\theight:50px;\r\n\tborder:none;\r\n\tcursor:pointer;\r\n}\r\n#footerSlideContent{\r\n\twidth:100%;\r\n\theight:0px; \r\n\t\r\n background-color:#04294c;\r\n   color:white;\r\n\tfont-size:0.8em;\r\n\tborder:none;\r\n\tfont-family:DejaVuSansBook, Sans-Serif;\r\n}\r\n#footerSlideContent h3{\r\n\tfont-size:36px;\r\n\tcolor:#9AC941;\r\n\tmargin:10px 0 10px 0;\r\n}\r\n#footerSlideContent ul{\r\n\tcolor:#EE8D40;\r\n\tlist-style-type:none;\r\n\tline-height:2em;\r\n}\r\n#footerSlideText{\r\n\tpadding:15px 10px 25px 25px;\r\n}\r\n"},761:function(t,n){t.exports="#footerSlideContainer{\r\n\tposition:fixed;\r\n\tbottom:0;\r\n\twidth:100%;\r\n}\r\n#footerSlideButton{\r\n\tbackground:url(sliderButton.png) top left no-repeat transparent;\r\n\tposition:absolute;\r\n\ttop:-55px;\r\n\tright:20px;\r\n\twidth:50px;\r\n\theight:50px;\r\n\tborder:none;\r\n\tcursor:pointer;\r\n}\r\n#footerSlideContent{\r\n\twidth:100%;\r\n\theight:0px;\r\n\tbackground:#251b15;\r\n\tcolor:#CCCCCC;\r\n\tfont-size:0.8em;\r\n\tborder:none;\r\n\tfont-family:DejaVuSansBook, Sans-Serif;\r\n}\r\n#footerSlideContent h3{\r\n\tfont-size:36px;\r\n\tcolor:#9AC941;\r\n\tmargin:10px 0 10px 0;\r\n}\r\n#footerSlideContent ul{\r\n\tcolor:#EE8D40;\r\n\tlist-style-type:none;\r\n\tline-height:2em;\r\n}\r\n#footerSlideText{\r\n\tpadding:15px 10px 25px 25px;\r\n}"},762:function(t,n){t.exports=""},763:function(t,n){t.exports=".navbar-inverse{\r\n   background-color:#04294c;\r\n   color:white;\r\n   border-radius:0px;\r\n\r\n}\r\n\r\n.navbar-inverse a{\r\n    color:white\r\n}"},764:function(t,n){t.exports=""},765:function(t,n){t.exports=""},766:function(t,n){t.exports='<simple-notifications \n[options]="options" \n(onCreate)="onCreate($event)"\n(onDestroy)="onDestroy($event)"></simple-notifications>\n<h1>{{title}} </h1>\n<button (click)="onButtonClick()"> Success Notification! </button>\n<button (click)="onAnotherClick()"> Another Notification! </button>\n\n<div id="test"></div>\n'},767:function(t,n){t.exports='<simple-notifications \n[options]="options2" \n(onCreate)="onCreate($event)"\n(onDestroy)="onDestroy($event)"></simple-notifications>\n\n \n<app-header></app-header>\n\n<div class="container-fluid">\n   <router-outlet></router-outlet>\n</div>\n\n<div class="container-fluid">\n   <!-- <div>\n        <label id="notify">Notification</label>\n    </div> -->\n    <div id="visualization"></div>\n</div>\n\n\n\n<div id="footerSlideContainer">\n\t<div id="footerSlideButton" (click)="clickme()">\n        <span class="glyphicon glyphicon-chevron-up" *ngIf="!open"></span>\n        <span class="glyphicon glyphicon-chevron-down" *ngIf="open"></span>\n    </div>\n\t  <div id="footerSlideContent" >\n\t\t <div id="footerSlideText" *ngIf="open">\n\t\t\t\n  <ul class="nav nav-pills hidden-xs hidden-sm" style="margin-bottom: 12px;">\n  <li role="presentation" ><a href="#">RH Smart D:0()</a></li>\n  <li role="presentation" ><a href="#">Alerts</a></li>\n  <li role="presentation" ><a href="#">Reports </a></li>\n  <li role="presentation" ><a href="#">Uncover </a></li>\n  \n  <li role="presentation" ><a href="#">Add all Noses </a></li>\n \n  <li role="presentation" ><a href="#">Current Time</a></li>\n  <li role="presentation" ><a href="#">Add to Workspace</a></li>\n  <li role="presentation" ><a href="#">Hide Delays </a></li>\n  <li role="presentation" ><a href="#">Build Flights </a></li>\n\n<!--\n  <li><button class="btn btn-default label-default" style="color:white">Current Time</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Add to Workspace</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Hide Delays</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Build Flights</button></li>\n  <li class="hidden-sm"><span>Fleet:</span>\n      <button class="btn btn-default label-default" style="color:white">76C, 76N, 20S...</button>\n  </li>       -->\n</ul>\n\n\n<div class="container-fluid">\n            <div class="row"> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-primary col-xs-12">ORD</button>\n                </div>  \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-warning col-xs-12">DEN</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class="btn btn-danger col-xs-12">NYC</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-success col-xs-12">LAH</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-info col-xs-12">BAH</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">LAD</button>\n                </div> \n            </div>\n\n            <div class="row" style="margin-top:2%" class="hidden-xs hidden-sm">\n                <div class="col-sm-3" style="margin-left: -14px;">\n                     <span style="font-size: 1.2em;\n    padding-right: 3%;" >From :</span>\n                     <input type="date" style="padding: 3px;width: 59%;color: black;">\n                </div>\n                <div class="col-sm-3" style="margin-left: -69px">\n                    <span style="font-size: 1.2em;\n    padding-right: 3%;" >To :</span>\n                    <input type="date" style="padding: 3px;width: 59%;color: black;" >\n                </div>\n                <div class="col-sm-3" style="margin-left: -77px;">\n                  <span style="font-size: 1.2em;\n    padding-right: 5%;" >Timezone :</span>\n                  <input type="radio"  name="tmz"><span style="padding-left: 3%;padding-right: 3%">GMT</span>\n                  <input type="radio"  name="tmz"><span style="padding-left: 3%;">Local</span>\n                </div>\n                <div class="col-sm-3" style="margin-left: -61px">\n                  <span style="font-size: 1.2em;\n    padding-right: 5%;" >SortBy : </span>\n                  <input type="checkbox"><span style="padding-left: 3%;padding-right: 3%">Arr</span>\n                  <input type="checkbox"><span style="padding-left: 3%;">Dep</span>\n                </div>\n            </div>                        \n           </div>\n\t   </div>\n\t</div>\n\n\n\n\n\n\n\n\n\n\n\n'},768:function(t,n){t.exports='<div id="footerSlideContainer">\n\t<div id="footerSlideButton"> Click Me</div>\n\t  <div id="footerSlideContent">\n\t\t <div id="footerSlideText">\n\t\t\t\n  <ul class="nav nav-pills hidden-xs hidden-sm">\n  <li role="presentation" ><a href="#">RH Smart D:0()</a></li>\n  <li role="presentation" ><a href="#">Alerts</a></li>\n  <li role="presentation" ><a href="#">Reports </a></li>\n  <li role="presentation" ><a href="#">Uncover </a></li>\n  \n  <li role="presentation" ><a href="#">Add all Noses </a></li>\n \n  <li><button class="btn btn-default label-default" style="color:white">Current Time</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Add to Workspace</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Hide Delays</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Build Flights</button></li>\n  <li class="hidden-sm"><span>Fleet:</span>\n      <button class="btn btn-default label-default" style="color:white">76C, 76N, 20S...</button>\n  </li>      \n</ul>\n\n\n<div class="container-fluid" style="    background-color: #dcdcd9;\n    padding-top: 2%;\n    padding-bottom: 2%;">\n            <div class="row"> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-primary col-xs-12">ORD</button>\n                </div>  \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-warning col-xs-12">DEN</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class="btn btn-danger col-xs-12">NYC</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-success col-xs-12">LAH</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-info col-xs-12">BAH</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">LAD</button>\n                </div> \n            </div>\n\n            <div class="row" style="margin-top:2%" class="hidden-xs hidden-sm">\n                <div class="col-sm-3">\n                     <span >From</span>\n                     <input type="date" style="padding: 3px;border-radius: 8px;">\n                </div>\n                <div class="col-sm-3">\n                    <span >To</span>\n                    <input type="date" style="padding: 3px;border-radius: 8px;" >\n                </div>\n                <div class="col-sm-3">\n                  <span >Timezone</span>\n                  <input type="radio"  name="tmz">GMT\n                  <input type="radio"  name="tmz">Local\n                </div>\n                <div class="col-sm-3">\n                  <span >SortBy </span>\n                  <input type="checkbox">Arr\n                  <input type="checkbox">Dep\n                </div>\n            </div>                        \n        </div>\n\n\n\n\n\n\n\t\t</div>\n\t</div>'},769:function(t,n){t.exports='<table class="table">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Gender</th>\n      <th>company</th>\n      <th>Email</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor="let person of people;let i=index">\n      <th scope="row">{{i+1}}</th>\n      <td>{{person.name}}</td>\n      <td>{{person.gender}}</td>\n      <td>{{person.company}}</td>\n      <td>{{person.email}}</td>\n      <td>{{person.age}}</td>\n    </tr>\n    \n  </tbody>\n</table>\n\n'},770:function(t,n){t.exports='<nav class="navbar navbar-inverse navbar-default">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Ion Tracking</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">  \n       <li><a routerLink="/networkview">Network View</a></li>\n       <li ><a routerLink="/gridview">Station View</a></li>\n       <li class="hidden-sm" ><a routerLink="/stationview">OM View</a></li>\n       <li ><a routerLink="/mainview">Maint. View</a></li>\n       <li class="dropdown hidden-sm hidden-md">\n           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">End Assign <span class="caret"></span></a>\n           <ul class="dropdown-menu">\n               <li><a href="#">--------</a></li>\n               <li><a href="#">--------</a></li>\n               <li><a href="#">--------</a></li>\n           </ul>\n       </li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right hidden-xs  " >\n        <li>\n            <a><span style="color:white;font-size: 1.4em;" class="glyphicon glyphicon-off" aria-hidden="true"></span></a>\n        </li>\n      </ul>\n      <form class="navbar-form navbar-right">\n        <div class="form-group">\n          <input type="text" class="form-control" placeholder="Search">\n        </div>\n      </form>\n\n      \n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n\n\n\n'},771:function(t,n){t.exports='<!--\n    <div id="visualization"></div>\n\n    -->\n'},772:function(t,n){t.exports="<p>\n  station-view works!\n</p>\n"}},[1048]);
//# sourceMappingURL=main.96c92f5273ac55aaca9c.bundle.map