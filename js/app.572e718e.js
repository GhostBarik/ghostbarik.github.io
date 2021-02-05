(function(e){function t(t){for(var a,i,c=t[0],o=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"018b":function(e,t,n){},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3a2b":function(e,t,n){"use strict";n("018b")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",{staticClass:"grey lighten-5",staticStyle:{width:"680px"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"6",sm:"6"}},[n("h4",{staticStyle:{color:"green","margin-top":"10px"}},[e._v(" CEZ - Metering OCR App ")])]),n("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"6",sm:"6"}},[n("v-btn",{staticClass:"ma-2",attrs:{fabdark:"",small:"",color:"primary"}},[n("v-icon",[e._v("info")])],1)],1)],1),n("Home")],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",{attrs:{hidden:e.model}},[e._v("OCR initializing...")]),n("v-btn",{staticStyle:{"margin-top":"20px"},attrs:{id:"webcamButton",hidden:!e.cameraButtonEnabled||!e.model},on:{click:e.enableCam}},[e._v(" Enable Web Camera ")]),n("v-row",{attrs:{"no-gutters":""}},[n("div",{staticClass:"camView",attrs:{id:"liveView"}},[n("video",{ref:"webcam",attrs:{id:"webcam",autoplay:""}}),e._l(e.predictions,(function(t){return n("p",{key:t.class+"-p",style:{marginLeft:t.bbox[0]+"px",marginTop:t.bbox[1]-10+"px",width:t.bbox[2]-10+"px",top:0,left:0}},[e._v(" "+e._s(t.class)+" - with "+e._s(Math.round(100*parseFloat(t.score)))+"% confidence ")])})),e._l(e.predictions,(function(e){return n("div",{key:e.class+"-div",staticClass:"highlighter",style:{left:e.bbox[0]+"px",top:e.bbox[1]+"px",width:e.bbox[2]+"px",height:e.bbox[3]+"px"}})})),n("p",{style:{marginLeft:"2px",marginTop:"2px",width:"10px",top:0,left:0},attrs:{hidden:0==e.blurCoef}},[e._v(" Blur Factor: "+e._s(e.blurCoef)+" ")]),n("div",{staticClass:"highlighter",style:{left:"2px",top:"2px",width:"10px",height:"10px"},attrs:{hidden:0==e.blurCoef}})],2)]),n("v-row",{staticClass:"output"},[n("v-col",{attrs:{cols:"12"}},[e._v(" Detected segments: ")]),n("v-col",{attrs:{cols:"4"}},[n("canvas",{ref:"current_sn",staticClass:"canvas-cut",style:{float:"left",backgroundColor:"grey"},attrs:{id:"current_sn"}})]),n("v-col",{attrs:{cols:"4"}},[n("canvas",{ref:"current_value",staticClass:"canvas-cut",style:{float:"left",backgroundColor:"#80808094"},attrs:{id:"current_value"}})]),n("v-col",{attrs:{cols:"4"}},[n("canvas",{ref:"current_tariff",staticClass:"canvas-cut",style:{float:"left",backgroundColor:"#8080804a"},attrs:{id:"current_tariff"}})]),n("canvas",{ref:"canvas",style:{display:"none"},attrs:{id:"canvas"}})],1),n("form",{staticStyle:{width:"100%"},attrs:{hidden:e.cameraButtonEnabled,id:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("v-row",[n("v-col",{attrs:{cols:"12",hidden:e.analysisInProgress}},[e._v(" Detected device: "),n("b",{staticStyle:{color:"brown"}},[e._v(e._s(e.detectedDeviceType||"unknown"))])]),n("v-col",{staticStyle:{color:"green"},attrs:{cols:"12",hidden:!e.analysisInProgress}},[e._v(" Analysis in progress... ")]),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"text",label:"Serial Number",name:"sn"},model:{value:e.form.sn,callback:function(t){e.$set(e.form,"sn",t)},expression:"form.sn"}})],1),"zpa_l"==e.detectedDeviceType||"zpa_r"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"text",label:"Value (T1):",name:"value_t1"},model:{value:e.form.value_t1,callback:function(t){e.$set(e.form,"value_t1",t)},expression:"form.value_t1"}})],1):e._e(),"zpa_l"==e.detectedDeviceType||"zpa_r"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Value (T2):",type:"text",name:"value_t2"},model:{value:e.form.value_t2,callback:function(t){e.$set(e.form,"value_t2",t)},expression:"form.value_t2"}})],1):e._e(),"zpa_l"==e.detectedDeviceType||"daisy"==e.detectedDeviceType?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"text",label:"Value (P):",name:"value"},model:{value:e.form.value_p,callback:function(t){e.$set(e.form,"value_p",t)},expression:"form.value_p"}})],1):e._e(),"smns"==e.detectedDeviceType?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"text",label:"Value (SMNS):",name:"value_smns"},model:{value:e.form.value_smns,callback:function(t){e.$set(e.form,"value_smns",t)},expression:"form.value_smns"}})],1):e._e(),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{type:"button"},on:{click:e.clearState}},[e._v("Clear measurements")])],1)],1)],1)],1)},c=[],o=(n("a623"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("45fc"),n("a434"),n("2532"),n("159b"),n("3835")),l=(n("c975"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("d4ec")),u=n("bee2"),d=n("1da1"),p=n("0ad6"),f=n("fa11"),v=(n("8b1d"),n("ee7d"),{1:{id:1,name:"smns_value",displayName:"smns_value"},2:{id:2,name:"zpa_type_l_t1",displayName:"zpa_type_l_t1"},3:{id:3,name:"zpa_type_l_t2",displayName:"zpa_type_l_t2"},4:{id:4,name:"zpa_type_l_p",displayName:"zpa_type_l_p"},5:{id:5,name:"zpa_type_r_t1",displayName:"zpa_type_r_t1"},6:{id:6,name:"zpa_type_r_t2",displayName:"zpa_type_r_t2"},7:{id:7,name:"daisy_t1",displayName:"daisy_t1"},8:{id:8,name:"daisy_t2",displayName:"daisy_t2"},9:{id:9,name:"daisy_p",displayName:"daisy_p"},10:{id:10,name:"value",displayName:"value"},11:{id:11,name:"sn",displayName:"sn"},12:{id:12,name:"daisy_logo",displayName:"daisy_logo"},13:{id:13,name:"zpa_l_logo",displayName:"zpa_l_logo"},14:{id:14,name:"daisy_t1_alt",displayName:"daisy_t1_alt"},15:{id:15,name:"daisy_t2_alt",displayName:"daisy_t2_alt"}});function m(){return y.apply(this,arguments)}function y(){return y=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},null!=f){e.next=3;break}throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");case 3:return n=t.modelUrl,a=new h(n),e.next=7,a.load();case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var h=function(){function e(t){Object(l["a"])(this,e),this.modelPath="./mobile_net_v2/model.json"}return Object(u["a"])(e,[{key:"load",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["a"](this.modelPath);case 2:return this.model=e.sent,t=f["zeros"]([1,300,300,3],"int32"),e.next=6,this.model.executeAsync(t);case 6:return n=e.sent,e.next=9,Promise.all(n.map((function(e){return e.data()})));case 9:n.map((function(e){return e.dispose()})),t.dispose();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"infer",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s,i,c,l,u,d,p,v,m,y,h,_,b,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=f["tidy"]((function(){return t instanceof f["Tensor"]||(t=f["browser"].fromPixels(t)),t.expandDims(0)})),s=r.shape[1],i=r.shape[2],e.next=5,this.model.executeAsync(r);case 5:return c=e.sent,l=this.model.outputs.map((function(e){return e.name})),u=c[l.indexOf("Identity_1")].dataSync(),d=c[l.indexOf("Identity_2")].dataSync(),p=c[l.indexOf("Identity_4")].dataSync(),r.dispose(),f["dispose"](c),v=this.calculateMaxScores(p,d,c[l.indexOf("Identity_4")].shape[1],c[l.indexOf("Identity_4")].shape[1]),m=Object(o["a"])(v,2),y=m[0],h=m[1],_=f["getBackend"](),"webgl"===f["getBackend"]()&&f["setBackend"]("cpu"),b=f["tidy"]((function(){var e=f["tensor2d"](u,[c[l.indexOf("Identity_1")].shape[1],c[l.indexOf("Identity_1")].shape[2]]);return f["image"].nonMaxSuppression(e,y,n,a,a)})),g=b.dataSync(),b.dispose(),_!==f["getBackend"]()&&f["setBackend"](_),e.abrupt("return",this.buildDetectedObjects(i,s,u,y,g,h));case 20:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"buildDetectedObjects",value:function(e,t,n,a,r,s){for(var i=r.length,c=[],o=0;o<i;o++){for(var l=[],u=0;u<4;u++)l[u]=n[4*r[o]+u];var d=l[0]*t,p=l[1]*e,f=l[2]*t,m=l[3]*e;l[0]=p,l[1]=d,l[2]=m-p,l[3]=f-d;try{c.push({bbox:l,class:v[s[r[o]]].displayName,score:a[r[o]]})}catch(y){alert("unknown class: "+JSON.stringify(s))}}return c}},{key:"calculateMaxScores",value:function(e,t,n,a){for(var r=[],s=[],i=0;i<n;i++)r[i]=e[i],s[i]=t[i];return[r,s]}},{key:"detect",value:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.infer(t,n,a));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,a){return e.apply(this,arguments)}return t}()},{key:"dispose",value:function(){null!=this.model&&this.model.dispose()}}]),e}(),_=n("2bd2");n("fb6a"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e7"),n("219c"),n("170b"),n("b39a"),n("72f7");function b(e){var t=cv.imread(e),n=new cv.Mat,a=new cv.Mat,r=new cv.Mat;cv.cvtColor(t,t,cv.COLOR_RGB2GRAY,0);cv.Laplacian(t,n,cv.CV_64F,1,1,0,cv.BORDER_DEFAULT);cv.meanStdDev(n,r,a);var s=a.data64F[0];return t.delete(),n.delete(),a.delete(),r.delete(),s}n("13d5");var g=n("b85c"),x=n("1157"),w=n.n(x);function O(e,t,n){return j.apply(this,arguments)}function j(){return j=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){w.a.ajax({url:t,headers:a,type:"POST",processData:!1,data:n}).done((function(t,n,a){e({data:t,textStatus:n,jqXHR:a})})).fail((function(e,t,n){r({jqXHR:e,textStatus:t,errorThrown:n})}))})));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function k(e,t){return T.apply(this,arguments)}function T(){return T=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){w.a.ajax({url:t,headers:n,type:"GET"}).done((function(t,n,a){e({data:t,textStatus:n,jqXHR:a})})).fail((function(e,t,n){a({jqXHR:e,textStatus:t,errorThrown:n})}))})));case 1:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function C(){return R.apply(this,arguments)}function R(){return R=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return e(void 0)})));case 1:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return P=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e(void 0)}),t)})));case 1:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function z(e){return A.apply(this,arguments)}function A(){return A=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s,i,c,o,l,u,d,p,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="0c20bfc48b9b487d8a2298030ecd7dc2",a="https://cvbhdevocr.cognitiveservices.azure.com/",r=a+"vision/v3.1/read/analyze",e.prev=3,e.next=6,O(r,t,{"Content-Type":"application/octet-stream","Ocp-Apim-Subscription-Key":n,"Access-Control-Allow-Headers":"*"});case 6:return s=e.sent,i=s.jqXHR,c=i.getResponseHeader("Operation-Location"),e.next=11,S(3e3);case 11:return e.next=13,k(c,{"Content-Type":"application/json","Ocp-Apim-Subscription-Key":n,"Access-Control-Allow-Headers":"*"});case 13:o=e.sent,l=o.data,u="";try{d=l.analyzeResult.readResults[0].lines,u=d.length>1?d.reduce((function(e,t){return e.text.length>t.text.length?e:t}),{text:""}).text:d[0].text}catch(v){console.log("text cannot be extracted from resulted JSON payload")}return e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e["catch"](3),console.log(e.t0),p=e.t0.jqXHR,f=e.t0.errorThrown,void 0!==p&&void 0!==f&&console.log(p,f),e.t0;case 26:case"end":return e.stop()}}),e,null,[[3,20]])}))),A.apply(this,arguments)}function D(e,t){return N.apply(this,arguments)}function N(){return N=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,i,c,o,l,u,d,p,f,v,m,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("PROCESSING IMAGES THROUGH API..."),n.analysisInProgress=!0,s=null===(a=t.sn)||void 0===a?void 0:a.image,i=t.value.image,c=null===(r=t.tariff)||void 0===r?void 0:r.image,o=[s,i,c].map((function(e){return void 0!==e?z(e):C()})),l=[],u=Object(g["a"])(o),e.prev=8,u.s();case 10:if((d=u.n()).done){e.next=19;break}return p=d.value,e.t0=l,e.next=15,p;case 15:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t2=e["catch"](8),u.e(e.t2);case 24:return e.prev=24,u.f(),e.finish(24);case 27:console.log("PROCESSING FINISHED:",l),n.analysisInProgress=!1,n.detectedDeviceType=t.deviceType,console.log("UPDATING FORM..."),f=l[0],v=l[1],m=l[2],void 0!==m&&"daisy"==t.deviceType&&void 0!==t.tariff&&(m.toLowerCase().includes("t1")?t.tariff.class="zpa_type_l_t1":m.toLowerCase().includes("t2")?t.tariff.class="zpa_type_l_t2":m.toLowerCase().includes("p")&&(t.tariff.class="zpa_type_l_p")),void 0!==f&&(n.form.sn=f.replaceAll(" ","")),y=function(e){if("daisy"==t.deviceType){var n=e.replaceAll(" ","");return n.slice(n.length-7)}return"smns"==t.deviceType?e.replaceAll(" ","").replaceAll(":","").replaceAll(".",""):e.replaceAll(" ","").slice(0,7)},void 0!==v&&"smns"==t.deviceType?n.form.value_smns=y(v):void 0!==v&&void 0!==t.tariff&&(t.tariff.class.includes("_t1")?n.form.value_t1=y(v):t.tariff.class.includes("_t2")?n.form.value_t2=y(v):t.tariff.class.includes("_p")&&(n.form.value_p=y(v)));case 36:case"end":return e.stop()}}),e,null,[[8,21,24,27]])}))),N.apply(this,arguments)}var I=n("9586"),E=n("d3fb"),$=n("742d"),M=n("5670"),V=n("ebb6"),H=n("4677"),B=n("df5a"),L=new _["a"];window.addEventListener("error",(function(e){return alert("Error occurred: "+e.error.message),!1}));var F=function(e,t){var n={};if(0==t.length)return n;var a={},r=t.map((function(e){return e[0].class}));t.forEach((function(e){var t=Object(o["a"])(e,2),n=t[0];t[1];a[n.class]=e}));var s=function(e){return r.some((function(t){return t.includes(e)}))};if(s("smns_value")?n.deviceType="smns":s("daisy")?n.deviceType="daisy":s("zpa_type_l")?n.deviceType="zpa_l":s("zpa_type_r")&&(n.deviceType="zpa_r"),a.hasOwnProperty("sn")&&(n.sn={score:a["sn"][0].score,image:a["sn"][1]}),a.hasOwnProperty("smns_value")&&(n.value={score:a["smns_value"][0].score,image:a["smns_value"][1]}),a.hasOwnProperty("value")&&(n.value={score:a["value"][0].score,image:a["value"][1]}),s("_t1")||s("_t2")||s("_p")){var i=t.find((function(e){return e[0].class.includes("_p")||e[0].class.includes("_t1")||e[0].class.includes("_t2")}));n.tariff={score:i[0].score,image:i[1],class:i[0].class}}return n},G=a["a"].extend({name:"Home",data:function(){return{cameraButtonEnabled:!0,model:void 0,predictions:[],cameraOptions:[],blurCoef:0,form:{sn:"",value_t1:"",value_t2:"",value_p:"",value_smns:""},detectedDeviceType:null,analysisInProgress:!1}},created:function(){var e=this;m().then((function(t){e.model=t}))},mounted:function(){var e=this,t=function(e){return"smns"==e.deviceType?!!e.value:!!e.sn&&!!e.value&&!!e.tariff&&!!e.deviceType},n=function(t){var n=Object(I["a"])((function(){return Object(E["a"])(D(t,e))}));return n},a=L.pipe(Object($["a"])(F,{})),r=a.pipe(Object(M["a"])(t)).pipe(Object(V["a"])(n)).pipe(Object(H["a"])(2e3)).pipe(Object(B["a"])());r.subscribe({next:function(){},error:function(){console.log("error from API observable")}})},methods:{enableCam:function(e){var t=this,n=this.$refs.webcam;this.$refs.canvas;if(navigator.mediaDevices){var a={video:{facingMode:{exact:"environment"}},audio:!1};alert("pukavec 7.0"),navigator.mediaDevices.getUserMedia(a).then((function(e){n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.srcObject=e,n.addEventListener("loadeddata",t.predictWebcam)})).catch((function(e){return console.log(e)}))}else alert("enumerateDevices() not supported.")},predictWebcam:function(){var e=this,t=this.$refs.canvas,n=(this.$refs.current_sn,this.$refs.current_value,this.$refs.current_tariff,b(t));this.blurCoef=n;var a=20,r=.5,s=15,i=.9;this.model.detect(t,a,r).then((function(t){var a=function(e){return e.score>i};0!=t.length&&t.every(a)&&n>s&&e.analysisInProgress,e.renderPredictions(t),window.requestAnimationFrame(e.predictWebcam)})).catch((function(e){alert("error during detection: "+JSON.stringify(e))}))},clearState:function(){L.next([]);var e=this.$refs.current_sn,t=this.$refs.current_value,n=this.$refs.current_tariff,a=function(e){return e.getContext("2d").clearRect(0,0,e.width,e.height)};a(e),a(t),a(n),this.form={sn:"",value_t1:"",value_t2:"",value_p:"",value_smns:""},this.detectedDeviceType=null},renderPredictions:function(e){var t=this;this.predictions.splice(0,this.predictions.length),e.forEach((function(e){return t.predictions.push(e)}))},takepicture:function(){var e=this.$refs.webcam,t=this.$refs.canvas,n=e.videoWidth,a=e.videoHeight,r=t.getContext("2d");return t.width=n,t.height=a,r.drawImage(e,0,0,n,a),cv.imread(t)}}}),q=G,X=(n("3a2b"),n("2877")),J=n("6544"),U=n.n(J),W=n("8336"),K=n("62ad"),Y=n("0fd9"),Z=n("8654"),Q=Object(X["a"])(q,i,c,!1,null,"7368366c",null),ee=Q.exports;U()(Q,{VBtn:W["a"],VCol:K["a"],VRow:Y["a"],VTextField:Z["a"]});var te=a["a"].extend({name:"App",components:{Home:ee},data:function(){return{}}}),ne=te,ae=n("7496"),re=n("a523"),se=n("132d"),ie=n("f6c4"),ce=Object(X["a"])(ne,r,s,!1,null,null,null),oe=ce.exports;U()(ce,{VApp:ae["a"],VBtn:W["a"],VCol:K["a"],VContainer:re["a"],VIcon:se["a"],VMain:ie["a"],VRow:Y["a"]});var le=n("8c4f");a["a"].use(le["a"]);var ue=[{path:"/",name:"Home",component:ee}],de=new le["a"]({routes:ue}),pe=de,fe=n("2f62");a["a"].use(fe["a"]);var ve=new fe["a"].Store({state:{},mutations:{},actions:{},modules:{}}),me=n("f309");n("d1e78");a["a"].use(me["a"]);var ye=new me["a"]({icons:{iconfont:"md"}});a["a"].config.productionTip=!1,new a["a"]({router:pe,store:ve,vuetify:ye,render:function(e){return e(oe)}}).$mount("#app")}});
//# sourceMappingURL=app.572e718e.js.map