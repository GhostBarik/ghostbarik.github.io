(function(e){function t(t){for(var n,s,c=t[0],o=t[1],l=t[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1:function(e,t){},"14ef":function(e,t,a){},2:function(e,t){},3:function(e,t){},"93d7":function(e,t,a){"use strict";a("14ef")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("notifications",{attrs:{group:"notifications"}}),a("v-container",{staticClass:"grey lighten-5"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"6",sm:"6"}},[a("h4",{staticStyle:{color:"green","margin-top":"10px"}},[e._v(" CEZ - Metering OCR App (v0.71) ")])]),a("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"6",sm:"6"}},[a("v-btn",{staticClass:"ma-2",attrs:{fabdark:"",small:"",color:"primary"},on:{click:function(t){e.dialog=!0}}},[e._v(" Help ")])],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2"},[e._v(" Guide for using OCR application ")]),a("v-card-text",[a("br"),e._v(" Hello, thank you for using our OCR app. Here are few tips of how to properly use this app: "),a("br"),a("br"),a("ul",[a("li",[e._v("While you're scanning device, try to position the camera in such way that it fits the entire camera view.")]),a("li",[e._v("Prefer using horizontal (landscape) mode on your phone, this will allow to get best results from the camera during capturing.")]),a("li",[e._v("Once you start to see "),a("b",{staticStyle:{color:"orange"}},[e._v("orange")]),e._v(" rectangles in the camera screen, try to steadily hold camera, so that it does not move too much. Application usually need few seconds to properly capture all device parts.")]),a("li",[e._v("If capturing does not work properly, try to (slowly) move camera away from device, so that it occupies less space in the camera view, for some devices this can help.")]),a("li",[e._v('If captured values (tariff, serial number etc.) are not correct, you can click on "Reset Measurements" button and try again.')])])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close guide ")])],1)],1)],1),a("Home")],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("p",{attrs:{hidden:e.model}},[e._v("OCR initializing...")]),e._v(" "+e._s(e.debugString)+" "),a("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{id:"webcamButton",hidden:!e.cameraButtonEnabled||!e.model},on:{click:e.enableCam}},[e._v(" Enable Web Camera ")]),a("div",{attrs:{hidden:e.cameraButtonEnabled}},[a("v-row",{attrs:{"no-gutters":""}},[a("div",{staticClass:"camView",attrs:{id:"liveView"}},[a("video",{ref:"webcam",attrs:{id:"webcam",autoplay:"",width:"640",height:"480"}}),a("p",{style:{padding:"0px",margin:"0px",width:"640px",height:"480px",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.1)",border:"3px dashed rgba(255, 0, 0, 0.7)"}}),e._l(e.predictions,(function(t){return a("p",{key:t.class+"-p",style:{marginLeft:t.bbox[0]+"px",marginTop:t.bbox[1]-10+"px",width:t.bbox[2]-10+"px",top:0,left:0},attrs:{hidden:e.analysisInProgress}},[e._v(" "+e._s(t.class)+" - with "+e._s(Math.round(100*parseFloat(t.score)))+"% confidence ")])})),e._l(e.predictions,(function(t){return a("div",{key:t.class+"-div",staticClass:"highlighter",style:{left:t.bbox[0]+"px",top:t.bbox[1]+"px",width:t.bbox[2]+"px",height:t.bbox[3]+"px"},attrs:{hidden:e.analysisInProgress}})})),a("p",{staticClass:"progress",attrs:{hidden:!e.analysisInProgress}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"green"}})],1),a("p",{style:{marginLeft:"2px",marginTop:"2px",width:"10px",top:0,left:0},attrs:{hidden:0==e.blurCoef||e.analysisInProgress}},[e._v(" Blur Factor: "+e._s(e.blurCoef)+" ")]),a("div",{staticClass:"highlighter",style:{left:"2px",top:"2px",width:"10px",height:"10px"},attrs:{hidden:0==e.blurCoef||e.analysisInProgress}})],2)]),a("v-row",{staticClass:"output",style:{marginBottom:"30px"}},[a("canvas",{ref:"canvas",staticStyle:{display:"none"},attrs:{id:"canvas"}}),a("v-col",{attrs:{cols:"12"}},[e._v(" Detected segments: ")]),a("v-col",{style:{backgroundColor:"grey"},attrs:{cols:"6"}},[a("canvas",{ref:"current_sn",staticClass:"canvas-cut",style:{float:"left"},attrs:{id:"current_sn"}})]),a("v-col",{style:{backgroundColor:"#80808094"},attrs:{cols:"6"}},[a("canvas",{ref:"current_value",staticClass:"canvas-cut",style:{float:"left"},attrs:{id:"current_value"}})]),a("canvas",{ref:"current_tariff",staticClass:"canvas-cut",style:{display:"none",float:"left"},attrs:{id:"current_tariff"}})],1),a("form",{staticStyle:{width:"100%"},attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("v-row",[a("v-col",{attrs:{cols:"6",hidden:e.analysisInProgress}},[e._v(" Detected device: "),a("b",{staticStyle:{color:"brown"}},[e._v(e._s(e.detectedDeviceType||"unknown"))])]),a("v-col",{attrs:{cols:"6",hidden:e.analysisInProgress}},[e._v(" Detected tariff: "),a("b",{staticStyle:{color:"blue"}},[e._v(e._s(e.detectedTariffType||"unknown"))])]),a("v-col",{staticStyle:{color:"green"},attrs:{cols:"12",hidden:!e.analysisInProgress}},[e._v(" Analysis in progress... ")]),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"text",label:"Serial Number",name:"sn"},model:{value:e.form.sn,callback:function(t){e.$set(e.form,"sn",t)},expression:"form.sn"}})],1),"zpa_l"==e.detectedDeviceType||"zpa_r"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"text",label:"Value (T1):",name:"value_t1"},model:{value:e.form.value_t1,callback:function(t){e.$set(e.form,"value_t1",t)},expression:"form.value_t1"}})],1):e._e(),"zpa_l"==e.detectedDeviceType||"zpa_r"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Value (T2):",type:"text",name:"value_t2"},model:{value:e.form.value_t2,callback:function(t){e.$set(e.form,"value_t2",t)},expression:"form.value_t2"}})],1):e._e(),"zpa_l"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"text",label:"Value (P):",name:"value"},model:{value:e.form.value_p,callback:function(t){e.$set(e.form,"value_p",t)},expression:"form.value_p"}})],1):e._e(),"smns"==e.detectedDeviceType?a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"text",label:"Value (SMNS):",name:"value_smns"},model:{value:e.form.value_smns,callback:function(t){e.$set(e.form,"value_smns",t)},expression:"form.value_smns"}})],1):e._e(),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{type:"button"},on:{click:e.clearState}},[e._v("Clear measurements")])],1)],1)],1)],1)],1)},c=[],o=(a("a623"),a("7db0"),a("4160"),a("caad"),a("d81d"),a("45fc"),a("a434"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e7"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("159b"),a("3835")),l=(a("c975"),a("b0c0"),a("3ca3"),a("ddb0"),a("96cf"),a("d4ec")),u=a("bee2"),d=a("1da1"),p=a("0ad6"),f=a("fa11"),v=(a("8b1d"),a("ee7d"),{1:{id:1,name:"smns_value",displayName:"smns_value"},2:{id:2,name:"zpa_type_l_t1",displayName:"zpa_type_l_t1"},3:{id:3,name:"zpa_type_l_t2",displayName:"zpa_type_l_t2"},4:{id:4,name:"zpa_type_l_p",displayName:"zpa_type_l_p"},5:{id:5,name:"zpa_type_r_t1",displayName:"zpa_type_r_t1"},6:{id:6,name:"zpa_type_r_t2",displayName:"zpa_type_r_t2"},7:{id:7,name:"daisy_t1",displayName:"daisy_t1"},8:{id:8,name:"daisy_t2",displayName:"daisy_t2"},9:{id:9,name:"daisy_p",displayName:"daisy_p"},10:{id:10,name:"value",displayName:"value"},11:{id:11,name:"sn",displayName:"sn"},12:{id:12,name:"daisy_logo",displayName:"daisy_logo"},13:{id:13,name:"zpa_l_logo",displayName:"zpa_l_logo"},14:{id:14,name:"daisy_t1_alt",displayName:"daisy_t1_alt"},15:{id:15,name:"daisy_t2_alt",displayName:"daisy_t2_alt"}});function m(){return y.apply(this,arguments)}function y(){return y=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},null!=f){e.next=3;break}throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");case 3:return a=t.modelUrl,n=new h(a),e.next=7,n.load();case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var h=function(){function e(t){Object(l["a"])(this,e),this.modelPath="./mobile_net_v2/model.json"}return Object(u["a"])(e,[{key:"load",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"](this.modelPath);case 2:return this.model=e.sent,t=f["zeros"]([1,300,300,3],"int32"),e.next=6,this.model.executeAsync(t);case 6:return a=e.sent,e.next=9,Promise.all(a.map((function(e){return e.data()})));case 9:a.map((function(e){return e.dispose()})),t.dispose();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"infer",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,i,s,c,l,u,d,p,v,m,y,h,g,b,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return f["setBackend"]("webgl"),r=f["tidy"]((function(){return t instanceof f["Tensor"]||(t=f["browser"].fromPixels(t)),t.expandDims(0)})),i=r.shape[1],s=r.shape[2],e.next=6,this.model.executeAsync(r);case 6:return c=e.sent,l=this.model.outputs.map((function(e){return e.name})),u=c[l.indexOf("Identity_1")].dataSync(),d=c[l.indexOf("Identity_2")].dataSync(),p=c[l.indexOf("Identity_4")].dataSync(),r.dispose(),f["dispose"](c),v=this.calculateMaxScores(p,d,c[l.indexOf("Identity_4")].shape[1],c[l.indexOf("Identity_4")].shape[1]),m=Object(o["a"])(v,2),y=m[0],h=m[1],g=f["getBackend"](),"webgl"===f["getBackend"]()&&f["setBackend"]("cpu"),b=f["tidy"]((function(){var e=f["tensor2d"](u,[c[l.indexOf("Identity_1")].shape[1],c[l.indexOf("Identity_1")].shape[2]]);return f["image"].nonMaxSuppression(e,y,a,n,n)})),_=b.dataSync(),b.dispose(),g!==f["getBackend"]()&&f["setBackend"](g),e.abrupt("return",this.buildDetectedObjects(s,i,u,y,_,h));case 21:case"end":return e.stop()}}),e,this)})));function t(t,a,n){return e.apply(this,arguments)}return t}()},{key:"buildDetectedObjects",value:function(e,t,a,n,r,i){for(var s=r.length,c=[],o=0;o<s;o++){for(var l=[],u=0;u<4;u++)l[u]=a[4*r[o]+u];var d=l[0]*t,p=l[1]*e,f=l[2]*t,m=l[3]*e;l[0]=p,l[1]=d,l[2]=m-p,l[3]=f-d;try{c.push({bbox:l,class:v[Math.ceil(i[r[o]])].displayName,score:n[r[o]]})}catch(y){alert("unknown class: "+JSON.stringify(i)+", e:"+JSON.stringify(y)+", indexes: "+JSON.stringify(r))}}return c}},{key:"calculateMaxScores",value:function(e,t,a,n){for(var r=[],i=[],s=0;s<a;s++)r[s]=e[s],i[s]=t[s];return[r,i]}},{key:"detect",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.infer(t,a,n));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a,n){return e.apply(this,arguments)}return t}()},{key:"dispose",value:function(){null!=this.model&&this.model.dispose()}}]),e}(),g=a("2bd2");a("fb6a");function b(e){var t=cv.imread(e),a=new cv.Mat,n=new cv.Mat,r=new cv.Mat;cv.cvtColor(t,t,cv.COLOR_RGB2GRAY,0);cv.Laplacian(t,a,cv.CV_64F,1,1,0,cv.BORDER_DEFAULT);cv.meanStdDev(a,r,n);var i=n.data64F[0];return t.delete(),a.delete(),n.delete(),r.delete(),i}function _(e,t,a){var n=new cv.Rect(e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]),r=t.roi(n),i=new cv.Mat;cv.copyMakeBorder(r,i,10,10,10,10,cv.BORDER_CONSTANT);var s=new cv.Mat;cv.copyMakeBorder(i,s,100,100,100,100,cv.BORDER_ISOLATED);var c=new cv.Mat,o=a?.6:.85;return cv.resize(s,c,c.size(),o,o,cv.INTER_AREA),r.delete(),i.delete(),s.delete(),c}function w(e,t,a){t=t||"",a=a||512;for(var n=atob(e),r=[],i=0;i<n.length;i+=a){for(var s=n.slice(i,i+a),c=new Array(s.length),o=0;o<s.length;o++)c[o]=s.charCodeAt(o);var l=new Uint8Array(c);r.push(l)}var u=new Blob(r,{type:t});return u}function x(e,t,a,n){var r,i,s=a<n,c=a/n,o=t/n,l=n/t;n>t&&(l=1/l),a>e&&(o=1/o);var u=0;s?(r=n*o,i=a*c):(r=n*l,i=a*l);var d=(e-i)/2;return[d,u,i,r]}a("13d5");var O=a("b85c"),R=a("1157"),T=a.n(R);function S(e,t,a){return k.apply(this,arguments)}function k(){return k=Object(d["a"])(regeneratorRuntime.mark((function e(t,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){T.a.ajax({url:t,headers:n,type:"POST",processData:!1,data:a}).done((function(t,a,n){e({data:t,textStatus:a,jqXHR:n})})).fail((function(e,t,a){r({jqXHR:e,textStatus:t,errorThrown:a})}))})));case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function C(e,t,a){return j.apply(this,arguments)}function j(){return j=Object(d["a"])(regeneratorRuntime.mark((function e(t,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){console.log(JSON.stringify(a)),T.a.ajax({url:t,headers:n,type:"POST",contentType:"application/octet-stream",processData:!1,data:a}).done((function(t,a,n){e({data:t,textStatus:a,jqXHR:n})})).fail((function(e,t,a){r({jqXHR:e,textStatus:t,errorThrown:a})}))})));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function P(e,t){return A.apply(this,arguments)}function A(){return A=Object(d["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){T.a.ajax({url:t,headers:a,type:"GET"}).done((function(t,a,n){e({data:t,textStatus:a,jqXHR:n})})).fail((function(e,t,a){n({jqXHR:e,textStatus:t,errorThrown:a})}))})));case 1:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function D(){return N.apply(this,arguments)}function N(){return N=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return e(void 0)})));case 1:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function z(e){return E.apply(this,arguments)}function E(){return E=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e(void 0)}),t)})));case 1:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function I(e){var t=e.replace(/[\\/|iI:]/g,"1"),a=t.replace(/[OQoD]/g,"0"),n=a.replace(/[B]/g,"8"),r=n.replace(/[^0-9]/g,"");return r}function M(e){return/[0-9]{12}/.test(e)}function V(e){return/[0-9]{7}/.test(e)}function B(e){return/[0-9]{6}/.test(e)||/[0-9]{7}/.test(e)}function L(e){return $.apply(this,arguments)}function $(){return $=Object(d["a"])(regeneratorRuntime.mark((function e(t){var a,n,r,i,s,c,o,l,u,d,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="0c20bfc48b9b487d8a2298030ecd7dc2",n="https://cvbhdevocr.cognitiveservices.azure.com/",r=n+"vision/v3.1/read/analyze",e.prev=3,e.next=6,S(r,t,{"Content-Type":"application/octet-stream","Ocp-Apim-Subscription-Key":a,"Access-Control-Allow-Headers":"*"});case 6:return i=e.sent,s=i.jqXHR,c=s.getResponseHeader("Operation-Location"),e.next=11,z(1200);case 11:return e.next=13,P(c,{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":a,"Access-Control-Allow-Headers":"*"});case 13:o=e.sent,l=o.data,u="",d=l&&l.analyzeResult||{};try{p=l.analyzeResult.readResults[0].lines,f=p.map((function(e){return I(e.text)})),u=f.length>1?f.reduce((function(e,t){return e.length>t.length?e:t}),""):f[0]}catch(v){alert("ERROR: text cannot be extracted from resulted JSON payload")}return e.abrupt("return",[d,u]);case 21:throw e.prev=21,e.t0=e["catch"](3),alert("ERROR during request: "+e.t0+JSON.stringify(e.t0)),e.t0;case 25:case"end":return e.stop()}}),e,null,[[3,21]])}))),$.apply(this,arguments)}function H(e,t,a,n,r,i){var s=r.deviceType;console.log("dt: ",s);var c=function(e){return"daisy"==s?e.slice(Math.max(e.length,7)-7):"zpa_r"==s?e.slice(0,7):"smns"==s?e.slice(Math.max(e.length,7)-7):e};function o(e){return e.slice(Math.max(e.length,16)-16)}var l=c(t||"");console.log("preprocessedValue: ",l);var u=o(e||"");console.log(u,e),"smns"!=r.deviceType&&6==l.length&&(l+="1"),"smns"==r.deviceType&&void 0!==e&&6==l.length&&(l+="0"),"smns"==r.deviceType&&void 0===e&&5==l.length&&(l+="0");var d=M(u),p=!1;function f(e){return e.slice(0,e.length-1)+"."+e.slice(e.length-1)}if(p="smns"==r.deviceType?B(l):V(l),i({group:"notifications",type:p?"success":"warn",title:"Capturing results",text:p?"Sucessfully captured device VALUE":"Cannot capture device VALUE, please try again"}),"smns"==r.deviceType&&void 0==e||i({group:"notifications",type:d?"success":"warn",title:"Capturing results",text:d?"Sucessfully captured device SERIAL NUMBER":"Cannot capture device SERIAL NUMBER, please try again"}),d&&(n.sn=u),"smns"==r.deviceType&&p)n.value_smns=f(l);else if(void 0!==r.tariff&&p){var v=r.tariff.class;v.includes("_t1")?n.value_t1=l:v.includes("_t2")?n.value_t2=l:v.includes("_p")&&(n.value_p=l)}}function U(e,t,a){return F.apply(this,arguments)}function F(){return F=Object(d["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,i,s,c,l,u,d,p,f,v,m,y,h,g,b,_;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.analysisInProgress=!0,c=null===(r=t.sn)||void 0===r?void 0:r.image,l=t.value.image,u=null===(i=t.tariff)||void 0===i?void 0:i.image,d=[c,l,u].map((function(e){return void 0!==e?L(e):D()})),p=[],e.prev=6,f=Object(O["a"])(d),e.prev=8,f.s();case 10:if((v=f.n()).done){e.next=19;break}return m=v.value,e.t0=p,e.next=15,m;case 15:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t2=e["catch"](8),f.e(e.t2);case 24:return e.prev=24,f.f(),e.finish(24);case 27:e.next=32;break;case 29:e.prev=29,e.t3=e["catch"](6),alert("Failed request: "+JSON.stringify(e.t3));case 32:y=p.map((function(e){return void 0!==e?e[1]:void 0})),console.log("FULL RESULTS:",p),console.log("NORMALIZED RESULTS:",y),a.analysisInProgress=!1,a.detectedDeviceType=t.deviceType,a.detectedTariffType=(null===(s=t.tariff)||void 0===s?void 0:s.class)||"unknown",console.log("UPDATING FORM..."),h=Object(o["a"])(y,3),g=h[0],b=h[1],_=h[2];try{H(g,b,_,a.form,t,n)}catch(w){alert("cannot update form: "+w+", "+JSON.stringify(w))}case 41:case"end":return e.stop()}}),e,null,[[6,29],[8,21,24,27]])}))),F.apply(this,arguments)}var J=a("9586"),q=a("d3fb"),W=a("742d"),X=a("5670"),G=a("ebb6"),K=a("4677"),Z=a("df5a"),Q=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,a,n,r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("calling worker thread..."),e.next=3,t.detect(a,n,r);case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),Y=new g["a"];window.addEventListener("error",(function(e){return alert("Error occurred: "+e.error.message),!1}));var ee=function(e,t){var a={};if(0==t.length)return a;var n={},r=t.map((function(e){return e[0].class}));t.forEach((function(e){var t=Object(o["a"])(e,2),a=t[0];t[1];n[a.class]=e}));var i=function(e){return r.some((function(t){return t.includes(e)}))};if(i("smns_value")?a.deviceType="smns":i("daisy")?a.deviceType="daisy":i("zpa_type_l")?a.deviceType="zpa_l":i("zpa_type_r")&&(a.deviceType="zpa_r"),n.hasOwnProperty("sn")&&(a.sn={score:n["sn"][0].score,image:n["sn"][1]}),n.hasOwnProperty("smns_value")&&(a.value={score:n["smns_value"][0].score,image:n["smns_value"][1]}),n.hasOwnProperty("value")&&(a.value={score:n["value"][0].score,image:n["value"][1]}),i("_t1")||i("_t2")||i("_p")){var s=t.find((function(e){return e[0].class.includes("_p")||e[0].class.includes("_t1")||e[0].class.includes("_t2")}));a.tariff={score:s[0].score,image:s[1],class:s[0].class}}return a},te=n["default"].extend({name:"Home",data:function(){return{cameraButtonEnabled:!0,model:void 0,predictions:[],cameraOptions:[],blurCoef:0,form:{sn:"",value_t1:"",value_t2:"",value_p:"",value_smns:""},debugString:"",detectedDeviceType:null,detectedTariffType:null,analysisInProgress:!1}},created:function(){var e=this;m().then((function(t){e.model=t,e.$notify({group:"notifications",type:"success",title:"Application",text:"Application was successfully initialized!"})})).catch((function(e){alert("Error during model initialization: "+e+", "+JSON.stringify(e))}))},mounted:function(){var e=this,t=function(e){return"smns"==e.deviceType?!!e.value:!!e.sn&&!!e.value&&!!e.tariff&&!!e.deviceType},a=function(t){var a=Object(J["a"])((function(){return Object(q["a"])(U(t,e,e.$notify))}));return a},n=Y.pipe(Object(W["a"])(ee,{})),r=n.pipe(Object(X["a"])(t)).pipe(Object(G["a"])(a)).pipe(Object(K["a"])(1e3)).pipe(Object(Z["a"])());r.subscribe({next:function(){},error:function(e){alert("error from API observable: , "+e+", "+JSON.stringify(e))}})},methods:{enableCam:function(e){var t=this,a=this.$refs.webcam,n=window.navigator.platform;if(navigator.mediaDevices){var r=null;r=n.includes("Win32")?{video:!0,audio:!1}:{video:{facingMode:{exact:"environment"}},audio:!1},navigator.mediaDevices.getUserMedia(r).then((function(e){a.setAttribute("autoplay",""),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.srcObject=e,a.addEventListener("loadeddata",t.predictWebcam),t.cameraButtonEnabled=!1})).catch((function(e){return alert(e)}))}else alert("enumerateDevices() not supported.")},predictWebcam:function(){var e=this,t=this.takepicture(),a=this.$refs.canvas,n=this.$refs.current_sn,r=this.$refs.current_value,i=this.$refs.current_tariff,s=b(a);this.blurCoef=s;var c=20,o=.5,l=15,u=.9,d=this.model;Q(d,a,c,o).then((function(c){var o=function(e){return e.score>u};if(c.length>=3&&c.every(o)&&s>l&&!e.analysisInProgress){for(var d=a.toDataURL("image/png").replace("data:image/png;base64,",""),p=window.atob(d),f=p.length,v=new Uint8Array(f),m=0;m<f;m++)v[m]=p.charCodeAt(m);e.analysisInProgress=!0,C("https://web-cez-ocr-backend.azurewebsites.net/data",v,{"Content-Type":"application/octet-stream"}).then((function(a){e.analysisInProgress=!1;var s=a.data.predictions,c=s.map((function(e){var a=_(e,t,"value"==e.class),s=null;if("value"==e.class||"smns_value"==e.class?s=r:"sn"==e.class?s=n:(e.class.includes("_t1")||e.class.includes("_t2")||e.class.includes("_p"))&&(s=i),null!==s){cv.imshow(s,a);var c=s.toDataURL("image/png").replace("data:image/png;base64,",""),o=document.createElement("image");o.src="data:image/bmp;base64,"+c,document.body.appendChild(o);var l=w(c,"image/png");return a.delete(),[e,l]}return a.delete(),[e,null]}));Y.next(c),window.requestAnimationFrame(e.predictWebcam)})).catch((function(t){e.analysisInProgress=!1,alert("cannot send data: "+t),window.requestAnimationFrame(e.predictWebcam)}))}else window.requestAnimationFrame(e.predictWebcam);e.renderPredictions(c)})).catch((function(e){alert("error during detection: "+e+", "+JSON.stringify(e))}))},clearState:function(){Y.next([]);var e=this.$refs.current_sn,t=this.$refs.current_value,a=this.$refs.current_tariff,n=function(e){return e.getContext("2d").clearRect(0,0,e.width,e.height)};n(e),n(t),n(a),this.form={sn:"",value_t1:"",value_t2:"",value_p:"",value_smns:""},this.detectedDeviceType=null},renderPredictions:function(e){var t=this;this.predictions.splice(0,this.predictions.length),e.forEach((function(e){return t.predictions.push(e)}))},takepicture:function(){var e=this.$refs.webcam,t=this.$refs.canvas,a=e.videoWidth,n=e.videoHeight,r=640,i=480;t.width=r,t.height=i;var s=t.getContext("2d"),c=x(r,i,a,n),l=Object(o["a"])(c,4),u=l[0],d=l[1],p=l[2],f=l[3];return s.drawImage(e,0,0,a,n,u,d,p,f),cv.imread(t)}}}),ae=te,ne=(a("93d7"),a("2877")),re=a("6544"),ie=a.n(re),se=a("8336"),ce=a("62ad"),oe=a("490a"),le=a("0fd9"),ue=a("8654"),de=Object(ne["a"])(ae,s,c,!1,null,"12e04878",null),pe=de.exports;ie()(de,{VBtn:se["a"],VCol:ce["a"],VProgressCircular:oe["a"],VRow:le["a"],VTextField:ue["a"]});var fe=n["default"].extend({name:"App",components:{Home:pe},data:function(){return{dialog:!1}}}),ve=fe,me=a("7496"),ye=a("b0af"),he=a("99d9"),ge=a("a523"),be=a("169a"),_e=a("ce7e"),we=a("f6c4"),xe=a("2fa4"),Oe=Object(ne["a"])(ve,r,i,!1,null,null,null),Re=Oe.exports;ie()(Oe,{VApp:me["a"],VBtn:se["a"],VCard:ye["a"],VCardActions:he["a"],VCardText:he["b"],VCardTitle:he["c"],VCol:ce["a"],VContainer:ge["a"],VDialog:be["a"],VDivider:_e["a"],VMain:we["a"],VRow:le["a"],VSpacer:xe["a"]});var Te=a("8c4f");n["default"].use(Te["a"]);var Se=[{path:"/",name:"Home",component:pe}],ke=new Te["a"]({routes:Se}),Ce=ke,je=a("2f62");n["default"].use(je["a"]);var Pe=new je["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ae=a("f309");a("d1e78");n["default"].use(Ae["a"]);var De=new Ae["a"]({icons:{iconfont:"md"}}),Ne=a("ee98"),ze=a.n(Ne);n["default"].config.productionTip=!1,n["default"].use(ze.a),new n["default"]({router:Ce,store:Pe,vuetify:De,render:function(e){return e(Re)}}).$mount("#app")}});
//# sourceMappingURL=app.6304ed11.js.map