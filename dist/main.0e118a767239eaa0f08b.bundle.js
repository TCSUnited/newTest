webpackJsonp([0,3],{1044:function(t,n){},1045:function(t,n,e){t.exports=e(457)},246:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return s});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=e(757),s=function(){function t(){this.listener=new o._20,this.mylistener=new o._20,this.isInstantiated||(this.database=new r("ion-tracking-T10"),this.isInstantiated=!0)}return t.prototype.fetch=function(){return this.database.allDocs({include_docs:!0})},t.prototype.get=function(t){return this.database.get(t)},t.prototype.put=function(t,n){var e=this;return n._id=t,this.get(t).then(function(t){return n._rev=t._rev,e.database.put(n)},function(t){return"404"==t.status?e.database.put(n):new Promise(function(n,e){e(t)})})},t.prototype.sync=function(t){var n=this,e=new r(t);this.database.sync(e,{live:!0,retry:!0}).on("change",function(t){n.listener.emit(t)}).on("error",function(t){console.error(JSON.stringify(t))})},t.prototype.getChangeListener=function(){return this.listener},t=i([e.i(o.R)(),a("design:paramtypes",[])],t)}()},371:function(t,n,e){"use strict";var o=e(1),i=e(419),a=(e.n(i),e(247));e.n(a);e.d(n,"a",function(){return c});var r=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=function(){function t(t){this._service=t,this.title="Main View!",this.options={timeOut:2800,clickToClose:!0,maxLength:0,maxStack:7,showProgressBar:!0,pauseOnHover:!0,animate:"fromRight",position:["top","right"]},console.log("Service created",t)}return t.prototype.onCreate=function(t){console.log(t)},t.prototype.onDestroy=function(t){console.log(t)},t.prototype.onButtonClick=function(){this._service.success("Saved ","New Item created")},t.prototype.onAnotherClick=function(){this._service.error("Error ","Could not load data!")},t.prototype.ngOnInit=function(){i("#test").html("Hello How are you")},t=r([e.i(o.G)({selector:"app-mainview",template:e(764),styles:[e(758)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.NotificationsService&&a.NotificationsService)&&n||Object])],t);var n}()},372:function(t,n,e){"use strict";var o=e(1),i=e(166),a=e(423);e.n(a);e.d(n,"a",function(){return c});var r=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=function(){function t(t){this.http=t,this.people=[]}return t.prototype.ngOnInit=function(){var t=this;this.http.get("https://api.myjson.com/bins/yow47").map(function(t){return t.json()}).subscribe(function(n){return t.people=n})},t=r([e.i(o.G)({selector:"app-grid-view",template:e(766),styles:[e(760)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.a&&i.a)&&n||Object])],t);var n}()},373:function(t,n,e){"use strict";var o=e(1),i=e(166),a=e(246);e.d(n,"a",function(){return c});var r=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=function(){function t(t,n,e){this.database=t,this.zone=n,this.http=e,this.Flights=[]}return t.prototype.ngOnInit=function(){},t=r([e.i(o.G)({selector:"app-network-view",template:e(768),styles:[e(762)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object,"function"==typeof(c="undefined"!=typeof o._26&&o._26)&&c||Object,"function"==typeof(l="undefined"!=typeof i.a&&i.a)&&l||Object])],t);var n,c,l}()},374:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return r});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([e.i(o.G)({selector:"app-station-view",template:e(769),styles:[e(763)]}),a("design:paramtypes",[])],t)}()},456:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=456},457:function(t,n,e){"use strict";var o=e(584),i=(e.n(o),e(544)),a=e(1),r=e(583),s=e(580);r.a.production&&e.i(a._40)(),e.i(i.a)().bootstrapModule(s.a)},579:function(t,n,e){"use strict";var o=e(1),i=e(166),a=e(423),r=(e.n(a),e(246)),s=e(1035),c=(e.n(s),e(419)),l=(e.n(c),e(247));e.n(l);e.d(n,"a",function(){return d});var f=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},p=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},d=function(){function t(t,n,e,i){this.http=t,this._service=n,this.database=e,this.zone=i,this.open=!1,this.options2={timeOut:2800,clickToClose:!0,maxLength:0,maxStack:7,showProgressBar:!1,pauseOnHover:!0,animate:"fromRight",position:["top","right"]},this.listener=new o._20,this.socket=s.connect("http://iontracking2.azurewebsites.net"),this.socket.on("notifyChanges",function(t){console.log("hi"),n.success("Notification ","Flight Moved")})}return t.prototype.onCreate=function(t){console.log(t)},t.prototype.onDestroy=function(t){console.log(t)},t.prettyConfirm=function(t,n,e){swal({title:t,text:n,type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55"},e)},t.generateClass=function(t){return t%2==0?"colorClass1":t%3==0?"colorClass2":t%5==0?"colorClass3":t%7==0?"colorClass4":"colorClass5"},t.prototype.displayOnUI=function(n){console.log("inside Print"),this.items.clear(),this.groups.clear();for(var e=0,o=0,i=n.aircrafts;o<i.length;o++){var a=i[o],r=0;this.groups.add([{content:a.nNbr,id:a.nNbr,value:r++}])}for(var s=[],c=0,l=n.aircrafts;c<l.length;c++){var a=l[c];a.hasOwnProperty("pFls")&&s.push(a)}for(var f=[],p=0,d=s;p<d.length;p++){for(var a=d[p],u=0,h=a.pFls;u<h.length;u++){var v=h[u];f.push({id:String(a.nNbr)+"_"+String(v.fltNbr)+"_"+String(e),start:new Date(v.aGDDt),end:new Date(v.aGADt),group:a.nNbr,className:t.generateClass(v.fltNbr),content:v.fltNbr}),e++}e=0}this.items.update(f),this.timeline.fit(),this.timeline.setGroups(this.groups)},t.prototype.ngOnInit=function(){var n=this;t.static_database_ref=this.database,this.options={groupOrder:function(t,n){return t.value-n.value},groupOrderSwap:function(t,n,e){var o=t.value;t.value=n.value,n.value=o},onMove:function(n,e){var o="Do you really want to move the item to\nstart: "+n.start+"\nend: "+n.end+"?";t.prettyConfirm("Move item",o,function(o){if(o)for(var i=n.id,a=i.split("_"),r=t.mydata,s=0,c=r.aircrafts;s<c.length;s++){var l=c[s];if(l.nNbr==a[0]){var f=a[2];l.pFls[f].aGDDt=""+n.start,l.pFls[f].aGADt=""+n.end,t.static_database_ref.put("ionTracking2",r)}}else e(null)})},orientation:"both",editable:!0,groupEditable:!0,start:new Date("Sat May 29 2017 20:00:00"),end:new Date("Mon Jun 1 2017")},this.groups=new vis.DataSet,this.items=new vis.DataSet,this.container=document.getElementById("visualization"),this.timeline=new vis.Timeline(this.container,this.items,this.options),this.database.get("ionTracking2").then(function(e){console.log("inside fetch data successfully if exists"),t.mydata=e,n.displayOnUI(t.mydata),n.database.sync("http://54.200.235.10:4984/ion-tracking"),n.database.getChangeListener().subscribe(function(e){for(var o=function(o){n.zone.run(function(){t.mydata=e.change.docs[o],n.displayOnUI(t.mydata),n.socket.emit("notify")})},i=0;i<e.change.docs.length;i++)o(i)})},function(e){"404"==e.status?(console.log("inside error 404"),n.database.sync("http://54.200.235.10:4984/ion-tracking"),n.database.getChangeListener().subscribe(function(e){for(var o=e.change.docs.length,i=function(o){n.zone.run(function(){t.mydata=e.change.docs[o],n.displayOnUI(t.mydata),n.socket.emit("notify")})},a=0;a<o;a++)i(a)})):console.log("inside error else block")})},t.prototype.clickme=function(){this.open===!1?(c("#footerSlideContent").animate({height:"178px"}),c(this).css("backgroundPosition","bottom left"),this.open=!0):(c("#footerSlideContent").animate({height:"0px"}),c(this).css("backgroundPosition","top left"),this.open=!1)},t=f([e.i(o.G)({selector:"app-root",template:e(765),styles:[e(759)]}),p("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.a&&i.a)&&n||Object,"function"==typeof(a="undefined"!=typeof l.NotificationsService&&l.NotificationsService)&&a||Object,"function"==typeof(d="undefined"!=typeof r.a&&r.a)&&d||Object,"function"==typeof(u="undefined"!=typeof o._26&&o._26)&&u||Object])],t);var n,a,d,u}()},580:function(t,n,e){"use strict";var o=e(121),i=e(1),a=e(535),r=e(166),s=e(579),c=e(371),l=e(582),f=e(373),p=e(581),d=e(374),u=e(372),h=e(246),v=e(247);e.n(v);e.d(n,"a",function(){return b});var y=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},g=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},b=function(){function t(){}return t=y([e.i(i.I)({declarations:[s.a,c.a,l.a,f.a,d.a,u.a],imports:[o.c,a.a,r.b,p.a,v.SimpleNotificationsModule,v.PushNotificationsModule],providers:[h.a],bootstrap:[s.a]}),g("design:paramtypes",[])],t)}()},581:function(t,n,e){"use strict";var o=e(564),i=e(371),a=e(372),r=e(374),s=e(373);e.d(n,"a",function(){return l});var c=[{path:"mainview",component:i.a},{path:"gridview",component:a.a},{path:"stationview",component:r.a},{path:"networkview",component:s.a}],l=o.a.forRoot(c)},582:function(t,n,e){"use strict";var o=e(1);e.d(n,"a",function(){return r});var i=this&&this.__decorate||function(t,n,e,o){var i,a=arguments.length,r=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(n,e,r):i(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([e.i(o.G)({selector:"app-header",template:e(767),styles:[e(761)]}),a("design:paramtypes",[])],t)}()},583:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={production:!0}},584:function(t,n,e){"use strict";var o=e(604),i=(e.n(o),e(597)),a=(e.n(i),e(593)),r=(e.n(a),e(599)),s=(e.n(r),e(598)),c=(e.n(s),e(596)),l=(e.n(c),e(595)),f=(e.n(l),e(603)),p=(e.n(f),e(592)),d=(e.n(p),e(591)),u=(e.n(d),e(601)),h=(e.n(u),e(594)),v=(e.n(h),e(602)),y=(e.n(v),e(600)),g=(e.n(y),e(605)),b=(e.n(g),e(1043));e.n(b)},758:function(t,n){t.exports=""},759:function(t,n){t.exports="#footerSlideContainer{\r\n\tposition:fixed;\r\n\tbottom:0;\r\n\twidth:100%;\r\n}\r\n#footerSlideButton{\r\n\tposition:absolute;\r\n\ttop:-55px;\r\n\tright:20px;\r\n\twidth:50px;\r\n\theight:50px;\r\n\tborder:none;\r\n\tcursor:pointer;\r\n}\r\n#footerSlideContent{\r\n\twidth:100%;\r\n\theight:0px; \r\n\t\r\n background-color:#04294c;\r\n   color:white;\r\n\tfont-size:0.8em;\r\n\tborder:none;\r\n\tfont-family:DejaVuSansBook, Sans-Serif;\r\n}\r\n#footerSlideContent h3{\r\n\tfont-size:36px;\r\n\tcolor:#9AC941;\r\n\tmargin:10px 0 10px 0;\r\n}\r\n#footerSlideContent ul{\r\n\tcolor:#EE8D40;\r\n\tlist-style-type:none;\r\n\tline-height:2em;\r\n}\r\n#footerSlideText{\r\n\tpadding:15px 10px 25px 25px;\r\n}\r\n"},760:function(t,n){t.exports=""},761:function(t,n){t.exports=".navbar-inverse{\r\n   background-color:#04294c;\r\n   color:white;\r\n   border-radius:0px;\r\n\r\n}\r\n\r\n.navbar-inverse a{\r\n    color:white\r\n}"},762:function(t,n){t.exports=""},763:function(t,n){t.exports=""},764:function(t,n){t.exports='<simple-notifications \n[options]="options" \n(onCreate)="onCreate($event)"\n(onDestroy)="onDestroy($event)"></simple-notifications>\n<h1>{{title}} </h1>\n<button (click)="onButtonClick()"> Success Notification! </button>\n<button (click)="onAnotherClick()"> Another Notification! </button>\n\n<div id="test"></div>\n'},765:function(t,n){t.exports='<simple-notifications \n[options]="options2" \n(onCreate)="onCreate($event)"\n(onDestroy)="onDestroy($event)"></simple-notifications>\n\n \n<app-header></app-header>\n\n<div class="container-fluid">\n   <router-outlet></router-outlet>\n</div>\n\n<div class="container-fluid">\n   <!-- <div>\n        <label id="notify">Notification</label>\n    </div> -->\n    <div id="visualization"></div>\n</div>\n\n\n\n<div id="footerSlideContainer">\n\t<div id="footerSlideButton" (click)="clickme()">\n        <span class="glyphicon glyphicon-chevron-up" *ngIf="!open"></span>\n        <span class="glyphicon glyphicon-chevron-down" *ngIf="open"></span>\n    </div>\n\t  <div id="footerSlideContent" >\n\t\t <div id="footerSlideText" *ngIf="open">\n\t\t\t\n  <ul class="nav nav-pills hidden-xs hidden-sm" style="margin-bottom: 12px;">\n  <li role="presentation" ><a href="#">RH Smart D:0()</a></li>\n  <li role="presentation" ><a href="#">Alerts</a></li>\n  <li role="presentation" ><a href="#">Reports </a></li>\n  <li role="presentation" ><a href="#">Uncover </a></li>\n  \n  <li role="presentation" ><a href="#">Add all Noses </a></li>\n \n  <li role="presentation" ><a href="#">Current Time</a></li>\n  <li role="presentation" ><a href="#">Add to Workspace</a></li>\n  <li role="presentation" ><a href="#">Hide Delays </a></li>\n  <li role="presentation" ><a href="#">Build Flights </a></li>\n\n<!--\n  <li><button class="btn btn-default label-default" style="color:white">Current Time</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Add to Workspace</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Hide Delays</button></li>\n  <li><button class="btn btn-default label-default" style="color:white">Build Flights</button></li>\n  <li class="hidden-sm"><span>Fleet:</span>\n      <button class="btn btn-default label-default" style="color:white">76C, 76N, 20S...</button>\n  </li>       -->\n</ul>\n\n\n<div class="container-fluid">\n            <div class="row"> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">ORD</button>\n                </div>  \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">DEN</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class="btn btn-default col-xs-12">NYC</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">LAH</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">BAH</button>\n                </div> \n                <div class="col-xs-6 col-md-2" style="margin-top:4px">\n                    <button class=" btn btn-default col-xs-12">LAD</button>\n                </div> \n            </div>\n\n            <div class="row" style="margin-top:2%" class="hidden-xs hidden-sm">\n                <div class="col-sm-3" style="margin-left: -14px;">\n                     <span style="font-size: 1.2em;\n    padding-right: 3%;" >From :</span>\n                     <input type="date" style="padding: 3px;width: 59%;color: black;">\n                </div>\n                <div class="col-sm-3" style="margin-left: -69px">\n                    <span style="font-size: 1.2em;\n    padding-right: 3%;" >To :</span>\n                    <input type="date" style="padding: 3px;width: 59%;color: black;" >\n                </div>\n                <div class="col-sm-3" style="margin-left: -77px;">\n                  <span style="font-size: 1.2em;\n    padding-right: 5%;" >Timezone :</span>\n                  <input type="radio"  name="tmz"><span style="padding-left: 3%;padding-right: 3%">GMT</span>\n                  <input type="radio"  name="tmz"><span style="padding-left: 3%;">Local</span>\n                </div>\n                <div class="col-sm-3" style="margin-left: -61px">\n                  <span style="font-size: 1.2em;\n    padding-right: 5%;" >SortBy : </span>\n                  <input type="checkbox"><span style="padding-left: 3%;padding-right: 3%">Arr</span>\n                  <input type="checkbox"><span style="padding-left: 3%;">Dep</span>\n                </div>\n            </div>                        \n           </div>\n\t   </div>\n\t</div>\n\n\n\n\n\n\n\n\n\n\n\n'},766:function(t,n){t.exports='<table class="table">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Gender</th>\n      <th>company</th>\n      <th>Email</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor="let person of people;let i=index">\n      <th scope="row">{{i+1}}</th>\n      <td>{{person.name}}</td>\n      <td>{{person.gender}}</td>\n      <td>{{person.company}}</td>\n      <td>{{person.email}}</td>\n      <td>{{person.age}}</td>\n    </tr>\n    \n  </tbody>\n</table>\n\n'},767:function(t,n){t.exports='<nav class="navbar navbar-inverse navbar-default">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Ion Tracking</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">  \n       <li><a routerLink="/networkview">Network View</a></li>\n       <li ><a routerLink="/gridview">Station View</a></li>\n       <li class="hidden-sm" ><a routerLink="/stationview">OM View</a></li>\n       <li ><a routerLink="/mainview">Maint. View</a></li>\n       <li class="dropdown hidden-sm hidden-md">\n           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">End Assign <span class="caret"></span></a>\n           <ul class="dropdown-menu">\n               <li><a href="#">--------</a></li>\n               <li><a href="#">--------</a></li>\n               <li><a href="#">--------</a></li>\n           </ul>\n       </li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right hidden-xs  " >\n        <li>\n            <a><span style="color:white;font-size: 1.4em;" class="glyphicon glyphicon-off" aria-hidden="true"></span></a>\n        </li>\n      </ul>\n      <form class="navbar-form navbar-right">\n        <div class="form-group">\n          <input type="text" class="form-control" placeholder="Search">\n        </div>\n      </form>\n\n      \n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n\n\n\n'},768:function(t,n){t.exports='<!--\n    <div id="visualization"></div>\n\n    -->\n'},769:function(t,n){t.exports="<p>\n  station-view works!\n</p>\n"}},[1045]);
//# sourceMappingURL=main.0e118a767239eaa0f08b.bundle.map