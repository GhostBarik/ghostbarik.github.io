(function(e){function t(t){for(var a,i,c=t[0],o=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"4ed2":function(e,t,n){},8365:function(e,t,n){"use strict";n("4ed2")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("notifications",{attrs:{group:"notifications"}}),n("v-container",{staticClass:"grey lighten-5"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"6",sm:"6"}},[n("h4",{staticStyle:{color:"green","margin-top":"10px"}},[e._v(" CEZ - Metering OCR App (v0.45) ")])])],1),n("Home")],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",{attrs:{hidden:e.model}},[e._v("OCR initializing...")]),e._v(" "+e._s(e.debugString)+" "),n("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{id:"webcamButton",hidden:!e.cameraButtonEnabled||!e.model},on:{click:e.enableCam}},[e._v(" Enable Web Camera ")]),n("div",{attrs:{hidden:e.cameraButtonEnabled}},[n("v-row",{attrs:{"no-gutters":""}},[n("div",{staticClass:"camView",attrs:{id:"liveView"}},[n("video",{ref:"webcam",attrs:{id:"webcam",autoplay:"",width:"640",height:"480"}}),e._l(e.predictions,(function(t){return n("p",{key:t.class+"-p",style:{marginLeft:t.bbox[0]+"px",marginTop:t.bbox[1]-10+"px",width:t.bbox[2]-10+"px",top:0,left:0},attrs:{hidden:e.analysisInProgress}},[e._v(" "+e._s(t.class)+" - with "+e._s(Math.round(100*parseFloat(t.score)))+"% confidence ")])})),e._l(e.predictions,(function(t){return n("div",{key:t.class+"-div",staticClass:"highlighter",style:{left:t.bbox[0]+"px",top:t.bbox[1]+"px",width:t.bbox[2]+"px",height:t.bbox[3]+"px"},attrs:{hidden:e.analysisInProgress}})})),n("p",{style:{padding:"0px",margin:"0px",width:"640px",height:"480px",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.1)",border:"3px dashed rgba(255, 0, 0, 0.7)"}}),n("p",{staticClass:"progress",attrs:{hidden:!e.analysisInProgress}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"green"}})],1),n("p",{style:{marginLeft:"2px",marginTop:"2px",width:"10px",top:0,left:0},attrs:{hidden:0==e.blurCoef||e.analysisInProgress}},[e._v(" Blur Factor: "+e._s(e.blurCoef)+" ")]),n("div",{staticClass:"highlighter",style:{left:"2px",top:"2px",width:"10px",height:"10px"},attrs:{hidden:0==e.blurCoef||e.analysisInProgress}})],2)]),n("v-row",{staticClass:"output"},[n("canvas",{ref:"canvas",style:{display:"none"},attrs:{id:"canvas"}}),n("v-col",{attrs:{cols:"12"}},[e._v(" Detected segments: ")]),n("v-col",{attrs:{cols:"5"}},[n("canvas",{ref:"current_sn",staticClass:"canvas-cut",style:{float:"left",backgroundColor:"grey"},attrs:{id:"current_sn"}})]),n("v-col",{attrs:{cols:"5"}},[n("canvas",{ref:"current_value",staticClass:"canvas-cut",style:{float:"left",backgroundColor:"#80808094"},attrs:{id:"current_value"}})]),n("v-col",{attrs:{cols:"2"}},[n("canvas",{ref:"current_tariff",staticClass:"canvas-cut",style:{float:"left",backgroundColor:"#8080804a"},attrs:{id:"current_tariff"}})])],1),n("form",{staticStyle:{width:"100%"},attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-row",[n("v-col",{attrs:{cols:"12",hidden:e.analysisInProgress}},[e._v(" Detected device: "),n("b",{staticStyle:{color:"brown"}},[e._v(e._s(e.detectedDeviceType||"unknown"))])]),n("v-col",{staticStyle:{color:"green"},attrs:{cols:"12",hidden:!e.analysisInProgress}},[e._v(" Analysis in progress... ")]),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"text",label:"Serial Number",name:"sn"},model:{value:e.form.sn,callback:function(t){e.$set(e.form,"sn",t)},expression:"form.sn"}})],1),"zpa_l"==e.detectedDeviceType||"zpa_r"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"text",label:"Value (T1):",name:"value_t1"},model:{value:e.form.value_t1,callback:function(t){e.$set(e.form,"value_t1",t)},expression:"form.value_t1"}})],1):e._e(),"zpa_l"==e.detectedDeviceType||"zpa_r"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"Value (T2):",type:"text",name:"value_t2"},model:{value:e.form.value_t2,callback:function(t){e.$set(e.form,"value_t2",t)},expression:"form.value_t2"}})],1):e._e(),"zpa_l"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"text",label:"Value (P):",name:"value"},model:{value:e.form.value_p,callback:function(t){e.$set(e.form,"value_p",t)},expression:"form.value_p"}})],1):e._e(),"smns"==e.detectedDeviceType?n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{type:"text",label:"Value (SMNS):",name:"value_smns"},model:{value:e.form.value_smns,callback:function(t){e.$set(e.form,"value_smns",t)},expression:"form.value_smns"}})],1):e._e(),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{type:"button"},on:{click:e.clearState}},[e._v("Clear measurements")])],1)],1)],1)],1)],1)},c=[],o=(n("99af"),n("a623"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("45fc"),n("a434"),n("ac1f"),n("2532"),n("5319"),n("159b"),n("3835")),l=(n("c975"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("d4ec")),u=n("bee2"),d=n("1da1"),p=n("0ad6"),f=n("fa11"),v=(n("8b1d"),n("ee7d"),{1:{id:1,name:"smns_value",displayName:"smns_value"},2:{id:2,name:"zpa_type_l_t1",displayName:"zpa_type_l_t1"},3:{id:3,name:"zpa_type_l_t2",displayName:"zpa_type_l_t2"},4:{id:4,name:"zpa_type_l_p",displayName:"zpa_type_l_p"},5:{id:5,name:"zpa_type_r_t1",displayName:"zpa_type_r_t1"},6:{id:6,name:"zpa_type_r_t2",displayName:"zpa_type_r_t2"},7:{id:7,name:"daisy_t1",displayName:"daisy_t1"},8:{id:8,name:"daisy_t2",displayName:"daisy_t2"},9:{id:9,name:"daisy_p",displayName:"daisy_p"},10:{id:10,name:"value",displayName:"value"},11:{id:11,name:"sn",displayName:"sn"},12:{id:12,name:"daisy_logo",displayName:"daisy_logo"},13:{id:13,name:"zpa_l_logo",displayName:"zpa_l_logo"},14:{id:14,name:"daisy_t1_alt",displayName:"daisy_t1_alt"},15:{id:15,name:"daisy_t2_alt",displayName:"daisy_t2_alt"}});function m(){return h.apply(this,arguments)}function h(){return h=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},null!=f){e.next=3;break}throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");case 3:return n=t.modelUrl,a=new y(n),e.next=7,a.load();case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var y=function(){function e(t){Object(l["a"])(this,e),this.modelPath="./mobile_net_v2/model.json"}return Object(u["a"])(e,[{key:"load",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"](this.modelPath);case 2:return this.model=e.sent,t=f["zeros"]([1,300,300,3],"int32"),e.next=6,this.model.executeAsync(t);case 6:return n=e.sent,e.next=9,Promise.all(n.map((function(e){return e.data()})));case 9:n.map((function(e){return e.dispose()})),t.dispose();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"infer",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s,i,c,l,u,d,p,v,m,h,y,b,_,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return f["setBackend"]("webgl"),r=f["tidy"]((function(){return t instanceof f["Tensor"]||(t=f["browser"].fromPixels(t)),t.expandDims(0)})),s=r.shape[1],i=r.shape[2],e.next=6,this.model.executeAsync(r);case 6:return c=e.sent,l=this.model.outputs.map((function(e){return e.name})),u=c[l.indexOf("Identity_1")].dataSync(),d=c[l.indexOf("Identity_2")].dataSync(),p=c[l.indexOf("Identity_4")].dataSync(),r.dispose(),f["dispose"](c),v=this.calculateMaxScores(p,d,c[l.indexOf("Identity_4")].shape[1],c[l.indexOf("Identity_4")].shape[1]),m=Object(o["a"])(v,2),h=m[0],y=m[1],b=f["getBackend"](),"webgl"===f["getBackend"]()&&f["setBackend"]("cpu"),_=f["tidy"]((function(){var e=f["tensor2d"](u,[c[l.indexOf("Identity_1")].shape[1],c[l.indexOf("Identity_1")].shape[2]]);return f["image"].nonMaxSuppression(e,h,n,a,a)})),g=_.dataSync(),_.dispose(),b!==f["getBackend"]()&&f["setBackend"](b),e.abrupt("return",this.buildDetectedObjects(i,s,u,h,g,y));case 21:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"buildDetectedObjects",value:function(e,t,n,a,r,s){for(var i=r.length,c=[],o=0;o<i;o++){for(var l=[],u=0;u<4;u++)l[u]=n[4*r[o]+u];var d=l[0]*t,p=l[1]*e,f=l[2]*t,m=l[3]*e;l[0]=p,l[1]=d,l[2]=m-p,l[3]=f-d;try{c.push({bbox:l,class:v[Math.ceil(s[r[o]])].displayName,score:a[r[o]]})}catch(h){alert("unknown class: "+JSON.stringify(s)+", e:"+JSON.stringify(h)+", indexes: "+JSON.stringify(r))}}return c}},{key:"calculateMaxScores",value:function(e,t,n,a){for(var r=[],s=[],i=0;i<n;i++)r[i]=e[i],s[i]=t[i];return[r,s]}},{key:"detect",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.infer(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"dispose",value:function(){null!=this.model&&this.model.dispose()}}]),e}(),b=n("2bd2");n("fb6a"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e7"),n("219c"),n("170b"),n("b39a"),n("72f7");function _(e){var t=cv.imread(e),n=new cv.Mat,a=new cv.Mat,r=new cv.Mat;cv.cvtColor(t,t,cv.COLOR_RGB2GRAY,0);cv.Laplacian(t,n,cv.CV_64F,1,1,0,cv.BORDER_DEFAULT);cv.meanStdDev(n,r,a);var s=a.data64F[0];return t.delete(),n.delete(),a.delete(),r.delete(),s}function g(e,t,n){var a=new cv.Rect(e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]),r=t.roi(a),s=new cv.Mat;cv.copyMakeBorder(r,s,10,10,10,10,cv.BORDER_CONSTANT);var i=new cv.Mat;cv.copyMakeBorder(s,i,100,100,100,100,cv.BORDER_ISOLATED);var c=new cv.Mat;console.log("before resize: ",i.matSize);var o=n?.6:.85;return cv.resize(i,c,c.size(),o,o,cv.INTER_AREA),r.delete(),s.delete(),i.delete(),c}function x(e,t,n){t=t||"",n=n||512;for(var a=atob(e),r=[],s=0;s<a.length;s+=n){for(var i=a.slice(s,s+n),c=new Array(i.length),o=0;o<i.length;o++)c[o]=i.charCodeAt(o);var l=new Uint8Array(c);r.push(l)}var u=new Blob(r,{type:t});return u}function w(e,t,n,a){var r,s,i=n<a,c=n/a,o=t/a,l=a/t;a>t&&(l=1/l),n>e&&(o=1/o);var u=0;i?(r=a*o,s=n*c):(r=a*l,s=n*l);var d=(e-s)/2;return[d,u,s,r]}n("13d5");var O=n("b85c"),j=n("1157"),k=n.n(j);function R(e,t,n){return S.apply(this,arguments)}function S(){return S=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){k.a.ajax({url:t,headers:a,type:"POST",processData:!1,data:n}).done((function(t,n,a){e({data:t,textStatus:n,jqXHR:a})})).fail((function(e,t,n){r({jqXHR:e,textStatus:t,errorThrown:n})}))})));case 1:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function T(e,t){return C.apply(this,arguments)}function C(){return C=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){k.a.ajax({url:t,headers:n,type:"GET"}).done((function(t,n,a){e({data:t,textStatus:n,jqXHR:a})})).fail((function(e,t,n){a({jqXHR:e,textStatus:t,errorThrown:n})}))})));case 1:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function P(){return z.apply(this,arguments)}function z(){return z=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return e(void 0)})));case 1:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function D(e){return N.apply(this,arguments)}function N(){return N=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e(void 0)}),t)})));case 1:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function A(e){return I.apply(this,arguments)}function I(){return I=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s,i,c,o,l,u,d,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="0c20bfc48b9b487d8a2298030ecd7dc2",a="https://cvbhdevocr.cognitiveservices.azure.com/",r=a+"vision/v3.1/read/analyze",e.prev=3,e.next=6,R(r,t,{"Content-Type":"application/octet-stream","Ocp-Apim-Subscription-Key":n,"Access-Control-Allow-Headers":"*"});case 6:return s=e.sent,i=s.jqXHR,c=i.getResponseHeader("Operation-Location"),e.next=11,D(3e3);case 11:return e.next=13,T(c,{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":n,"Access-Control-Allow-Headers":"*"});case 13:o=e.sent,l=o.data,u="";try{d=l.analyzeResult.readResults[0].lines,u=d.length>1?d.reduce((function(e,t){return e.text.length>t.text.length?e:t}),{text:""}).text:d[0].text}catch(v){console.log("text cannot be extracted from resulted JSON payload")}return e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e["catch"](3),console.log(e.t0),p=e.t0.jqXHR,f=e.t0.errorThrown,void 0!==p&&void 0!==f&&console.log(p,f),e.t0;case 26:case"end":return e.stop()}}),e,null,[[3,20]])}))),I.apply(this,arguments)}function E(e,t){return M.apply(this,arguments)}function M(){return M=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,c,o,l,u,d,p,f,v,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.analysisInProgress=!0,s=null===(a=t.sn)||void 0===a?void 0:a.image,i=t.value.image,c=null===(r=t.tariff)||void 0===r?void 0:r.image,o=[s,i,c].map((function(e){return void 0!==e?A(e):P()})),l=[],e.prev=6,u=Object(O["a"])(o),e.prev=8,u.s();case 10:if((d=u.n()).done){e.next=19;break}return p=d.value,e.t0=l,e.next=15,p;case 15:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t2=e["catch"](8),u.e(e.t2);case 24:return e.prev=24,u.f(),e.finish(24);case 27:e.next=32;break;case 29:e.prev=29,e.t3=e["catch"](6),alert("Failed request: "+JSON.stringify(e.t3));case 32:console.log("PROCESSING FINISHED:",l),n.analysisInProgress=!1,n.detectedDeviceType=t.deviceType,console.log("UPDATING FORM..."),f=l[0],v=l[1],l[2],m=function(e){if("daisy"==t.deviceType){var n=e.replace(/ /g,"");return n.slice(n.length-7)}return"smns"==t.deviceType?e.replace(/ /g,"").replace(/:/g,"").replace(/\./g,""):e.replace(/ /g,"").slice(0,7)};try{void 0!==f&&(n.form.sn=f.replace(/ /g,"")),void 0!==v&&"smns"==t.deviceType?n.form.value_smns=m(v):void 0!==v&&void 0!==t.tariff&&(t.tariff.class.includes("_t1")?n.form.value_t1=m(v):t.tariff.class.includes("_t2")?n.form.value_t2=m(v):t.tariff.class.includes("_p")&&(n.form.value_p=m(v)))}catch(h){alert("cannot update form, reason: "+h)}case 39:case"end":return e.stop()}}),e,null,[[6,29],[8,21,24,27]])}))),M.apply(this,arguments)}var B=n("9586"),$=n("d3fb"),V=n("742d"),H=n("5670"),F=n("ebb6"),J=n("4677"),L=n("df5a"),q=new b["a"];window.addEventListener("error",(function(e){return alert("Error occurred: "+e.error.message),!1}));var U=function(e,t){var n={};if(0==t.length)return n;var a={},r=t.map((function(e){return e[0].class}));t.forEach((function(e){var t=Object(o["a"])(e,2),n=t[0];t[1];a[n.class]=e}));var s=function(e){return r.some((function(t){return t.includes(e)}))};if(s("smns_value")?n.deviceType="smns":s("daisy")?n.deviceType="daisy":s("zpa_type_l")?n.deviceType="zpa_l":s("zpa_type_r")&&(n.deviceType="zpa_r"),a.hasOwnProperty("sn")&&(n.sn={score:a["sn"][0].score,image:a["sn"][1]}),a.hasOwnProperty("smns_value")&&(n.value={score:a["smns_value"][0].score,image:a["smns_value"][1]}),a.hasOwnProperty("value")&&(n.value={score:a["value"][0].score,image:a["value"][1]}),s("_t1")||s("_t2")||s("_p")){var i=t.find((function(e){return e[0].class.includes("_p")||e[0].class.includes("_t1")||e[0].class.includes("_t2")}));n.tariff={score:i[0].score,image:i[1],class:i[0].class}}return n},W=a["default"].extend({name:"Home",data:function(){return{cameraButtonEnabled:!0,model:void 0,predictions:[],cameraOptions:[],blurCoef:0,form:{sn:"",value_t1:"",value_t2:"",value_p:"",value_smns:""},debugString:"",detectedDeviceType:null,analysisInProgress:!1}},created:function(){var e=this;m().then((function(t){e.model=t,e.$notify({group:"notifications",type:"success",title:"Application",text:"Application was successfully initialized!"})})).catch((function(e){alert("Error during model initialization: "+e+", "+JSON.stringify(e))}))},mounted:function(){var e=this,t=function(e){return"smns"==e.deviceType?!!e.value:!!e.sn&&!!e.value&&!!e.tariff&&!!e.deviceType},n=function(t){var n=Object(B["a"])((function(){return Object($["a"])(E(t,e))}));return n},a=q.pipe(Object(V["a"])(U,{})),r=a.pipe(Object(H["a"])(t)).pipe(Object(F["a"])(n)).pipe(Object(J["a"])(1500)).pipe(Object(L["a"])());r.subscribe({next:function(){},error:function(e){alert("error from API observable: "+JSON.stringify(e))}})},methods:{enableCam:function(e){var t=this,n=this.$refs.webcam,a=(this.$refs.canvas,window.navigator.platform);if(navigator.mediaDevices){var r=null;r=a.includes("Win32")?{video:!0,audio:!1}:{video:{facingMode:{exact:"environment"}},audio:!1},navigator.mediaDevices.getUserMedia(r).then((function(e){n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.srcObject=e,n.addEventListener("loadeddata",t.predictWebcam),t.cameraButtonEnabled=!1})).catch((function(e){return alert(e)}))}else alert("enumerateDevices() not supported.")},predictWebcam:function(){var e=this,t=this.takepicture(),n=this.$refs.canvas,a=this.$refs.current_sn,r=this.$refs.current_value,s=this.$refs.current_tariff,i=_(n);this.blurCoef=i;var c=20,o=.5,l=15,u=.8;this.model.detect(n,c,o).then((function(n){var c=function(e){return e.score>u};if(0!=n.length&&n.every(c)&&i>l&&!e.analysisInProgress){var o=n.map((function(e,n){var i=g(e,t,"value"==e.class),c=null;if("value"==e.class||"smns_value"==e.class?c=r:"sn"==e.class?c=a:(e.class.includes("_t1")||e.class.includes("_t2")||e.class.includes("_p"))&&(c=s),null!==c){cv.imshow(c,i);var o=c.toDataURL("image/png").replace("data:image/png;base64,",""),l=document.createElement("image");l.src="data:image/bmp;base64,"+o,document.body.appendChild(l);var u=x(o,"image/png");return i.delete(),[e,u]}return i.delete(),[e,null]}));q.next(o)}e.renderPredictions(n),window.requestAnimationFrame(e.predictWebcam)})).catch((function(e){alert("error during detection: "+JSON.stringify(e))}))},clearState:function(){q.next([]);var e=this.$refs.current_sn,t=this.$refs.current_value,n=this.$refs.current_tariff,a=function(e){return e.getContext("2d").clearRect(0,0,e.width,e.height)};a(e),a(t),a(n),this.form={sn:"",value_t1:"",value_t2:"",value_p:"",value_smns:""},this.detectedDeviceType=null},renderPredictions:function(e){var t=this;this.predictions.splice(0,this.predictions.length),e.forEach((function(e){return t.predictions.push(e)}))},takepicture:function(){var e=this.$refs.webcam,t=this.$refs.canvas,n=e.videoWidth,a=e.videoHeight,r=640,s=480;t.width=r,t.height=s;var i=t.getContext("2d"),c=w(640,480,n,a),l=Object(o["a"])(c,4),u=l[0],d=l[1],p=l[2],f=l[3];return this.debugString="video stream resolution: ".concat(n,"x").concat(a,", after crop: ").concat(p,"x").concat(f),i.drawImage(e,0,0,n,a,u,d,p,f),cv.imread(t)}}}),X=W,G=(n("8365"),n("2877")),K=n("6544"),Y=n.n(K),Z=n("8336"),Q=n("62ad"),ee=n("490a"),te=n("0fd9"),ne=n("8654"),ae=Object(G["a"])(X,i,c,!1,null,"fa318d72",null),re=ae.exports;Y()(ae,{VBtn:Z["a"],VCol:Q["a"],VProgressCircular:ee["a"],VRow:te["a"],VTextField:ne["a"]});var se=a["default"].extend({name:"App",components:{Home:re},data:function(){return{}}}),ie=se,ce=n("7496"),oe=n("a523"),le=n("f6c4"),ue=Object(G["a"])(ie,r,s,!1,null,null,null),de=ue.exports;Y()(ue,{VApp:ce["a"],VCol:Q["a"],VContainer:oe["a"],VMain:le["a"],VRow:te["a"]});var pe=n("8c4f");a["default"].use(pe["a"]);var fe=[{path:"/",name:"Home",component:re}],ve=new pe["a"]({routes:fe}),me=ve,he=n("2f62");a["default"].use(he["a"]);var ye=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}}),be=n("f309");n("d1e78");a["default"].use(be["a"]);var _e=new be["a"]({icons:{iconfont:"md"}}),ge=n("ee98"),xe=n.n(ge);a["default"].config.productionTip=!1,a["default"].use(xe.a),new a["default"]({router:me,store:ye,vuetify:_e,render:function(e){return e(de)}}).$mount("#app")}});
//# sourceMappingURL=app.8800cd4f.js.map