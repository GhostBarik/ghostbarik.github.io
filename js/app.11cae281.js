(function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0d3d":function(e,t,a){},1:function(e,t){},2:function(e,t){},"27a2":function(e,t,a){"use strict";a("0d3d")},3:function(e,t){},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),a("router-view")],1)},i=[],o=(a("5c0b"),a("2877")),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),u=c.exports,l=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("p",{attrs:{hidden:e.model}},[e._v("Coco SSD initializing...")]),a("button",{attrs:{id:"webcamButton",hidden:!e.cameraButtonEnabled||!e.model},on:{click:e.enableCam}},[e._v(" Enable Webcam ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCamera,expression:"selectedCamera"}],attrs:{hidden:e.cameraButtonEnabled},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCamera=t.target.multiple?a:a[0]}}},e._l(e.cameraOptions,(function(t){return a("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" ")])})),0),a("div",{staticClass:"camView",attrs:{id:"liveView"}},[a("video",{ref:"webcam",attrs:{id:"webcam",autoplay:"",width:"640",height:"480"},on:{loadeddata:e.predictWebcam}}),e._l(e.predictions,(function(t){return a("p",{key:t.class+"-p",style:{marginLeft:t.bbox[0]+"px",marginTop:t.bbox[1]-10+"px",width:t.bbox[2]-10+"px",top:0,left:0}},[e._v(" "+e._s(t.class)+" - with "+e._s(Math.round(100*parseFloat(t.score)))+"% confidence ")])})),e._l(e.predictions,(function(e){return a("div",{key:e.class+"-div",staticClass:"highlighter",style:{left:e.bbox[0]+"px",top:e.bbox[1]+"px",width:e.bbox[2]+"px",height:e.bbox[3]+"px"}})})),a("p",{style:{marginLeft:"2px",marginTop:"2px",width:"10px",top:0,left:0},attrs:{hidden:0==e.blurCoef}},[e._v(" Blur Factor: "+e._s(e.blurCoef)+" ")]),a("div",{staticClass:"highlighter",style:{left:"2px",top:"2px",width:"10px",height:"10px"},attrs:{hidden:0==e.blurCoef}})],2),a("form",{staticStyle:{float:"left"},attrs:{hidden:e.cameraButtonEnabled,id:"form"}},[a("label",{attrs:{for:"sn"}},[e._v("Serial Number (T1):")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.t1.sn,expression:"form.t1.sn"}],attrs:{type:"text",name:"sn"},domProps:{value:e.form.t1.sn},on:{input:function(t){t.target.composing||e.$set(e.form.t1,"sn",t.target.value)}}}),a("br"),a("label",{attrs:{for:"value"}},[e._v("Value (T1):")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.t1.value,expression:"form.t1.value"}],attrs:{type:"text",name:"value"},domProps:{value:e.form.t1.value},on:{input:function(t){t.target.composing||e.$set(e.form.t1,"value",t.target.value)}}}),a("br"),a("label",{attrs:{for:"sn"}},[e._v("Serial Number (T2):")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.t2.sn,expression:"form.t2.sn"}],attrs:{type:"text",name:"sn"},domProps:{value:e.form.t2.sn},on:{input:function(t){t.target.composing||e.$set(e.form.t2,"sn",t.target.value)}}}),a("br"),a("label",{attrs:{for:"value"}},[e._v("Value (T2):")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.t2.value,expression:"form.t2.value"}],attrs:{type:"text",name:"value"},domProps:{value:e.form.t2.value},on:{input:function(t){t.target.composing||e.$set(e.form.t2,"value",t.target.value)}}}),a("br")]),a("div",{staticClass:"output"},[a("canvas",{ref:"canvas",style:{display:"none"},attrs:{id:"canvas"}}),a("canvas",{ref:"elem1",style:{float:"left"},attrs:{id:"elem1"}}),a("canvas",{ref:"elem2",style:{float:"left"},attrs:{id:"elem2"}}),a("canvas",{ref:"elem3",style:{float:"left"},attrs:{id:"elem3"}})])])},p=[],f=(a("4de4"),a("4160"),a("d81d"),a("a434"),a("159b"),a("c975"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("3835")),m=(a("96cf"),a("d4ec")),v=a("bee2"),h=a("1da1"),b=a("0ad6"),y=a("fa11"),_=(a("8b1d"),a("ee7d"),{1:{id:1,name:"smns_value",displayName:"smns_value"},2:{id:2,name:"zpa_type_l_t1",displayName:"zpa_type_l_t1"},3:{id:3,name:"zpa_type_l_t2",displayName:"zpa_type_l_t2"},4:{id:4,name:"zpa_type_l_p",displayName:"zpa_type_l_p"},5:{id:5,name:"zpa_type_r_t1",displayName:"zpa_type_r_t1"},6:{id:6,name:"zpa_type_r_t2",displayName:"zpa_type_r_t2"},7:{id:7,name:"daisy_t1",displayName:"daisy_t1"},8:{id:8,name:"daisy_t2",displayName:"daisy_t2"},9:{id:9,name:"daisy_p",displayName:"daisy_p"},10:{id:10,name:"value",displayName:"value"},11:{id:11,name:"sn",displayName:"sn"},12:{id:12,name:"daisy_logo",displayName:"daisy_logo"}});function g(){return x.apply(this,arguments)}function x(){return x=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{},null!=y){e.next=3;break}throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");case 3:return a=t.modelUrl,n=new w(a),e.next=7,n.load();case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var w=function(){function e(t){Object(m["a"])(this,e),this.modelPath="./mobile_net_v2/model.json"}return Object(v["a"])(e,[{key:"load",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"](this.modelPath);case 2:return this.model=e.sent,t=y["zeros"]([1,300,300,3],"int32"),e.next=6,this.model.executeAsync(t);case 6:return a=e.sent,e.next=9,Promise.all(a.map((function(e){return e.data()})));case 9:a.map((function(e){return e.dispose()})),t.dispose();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"infer",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,i,o,s,c,u,l,d,p,m,v,h,b,_,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=y["tidy"]((function(){return t instanceof y["Tensor"]||(t=y["browser"].fromPixels(t)),t.expandDims(0)})),i=r.shape[1],o=r.shape[2],e.next=5,this.model.executeAsync(r);case 5:return s=e.sent,c=this.model.outputs.map((function(e){return e.name})),u=s[c.indexOf("Identity_1")].dataSync(),l=s[c.indexOf("Identity_2")].dataSync(),d=s[c.indexOf("Identity_4")].dataSync(),r.dispose(),y["dispose"](s),p=this.calculateMaxScores(d,l,s[c.indexOf("Identity_4")].shape[1],s[c.indexOf("Identity_4")].shape[1]),m=Object(f["a"])(p,2),v=m[0],h=m[1],b=y["getBackend"](),"webgl"===y["getBackend"]()&&y["setBackend"]("cpu"),_=y["tidy"]((function(){var e=y["tensor2d"](u,[s[c.indexOf("Identity_1")].shape[1],s[c.indexOf("Identity_1")].shape[2]]);return y["image"].nonMaxSuppression(e,v,a,n,n)})),g=_.dataSync(),_.dispose(),b!==y["getBackend"]()&&y["setBackend"](b),e.abrupt("return",this.buildDetectedObjects(o,i,u,v,g,h));case 20:case"end":return e.stop()}}),e,this)})));function t(t,a,n){return e.apply(this,arguments)}return t}()},{key:"buildDetectedObjects",value:function(e,t,a,n,r,i){for(var o=r.length,s=[],c=0;c<o;c++){for(var u=[],l=0;l<4;l++)u[l]=a[4*r[c]+l];var d=u[0]*t,p=u[1]*e,f=u[2]*t,m=u[3]*e;u[0]=p,u[1]=d,u[2]=m-p,u[3]=f-d,s.push({bbox:u,class:_[i[r[c]]].displayName,score:n[r[c]]})}return s}},{key:"calculateMaxScores",value:function(e,t,a,n){for(var r=[],i=[],o=0;o<a;o++)r[o]=e[o],i[o]=t[o];return[r,i]}},{key:"detect",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.infer(t,a,n));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a,n){return e.apply(this,arguments)}return t}()},{key:"dispose",value:function(){null!=this.model&&this.model.dispose()}}]),e}(),O=a("2bd2");a("fb6a"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e7"),a("219c"),a("170b"),a("b39a"),a("72f7");function k(e){var t=cv.imread(e),a=new cv.Mat,n=new cv.Mat,r=new cv.Mat;cv.cvtColor(t,t,cv.COLOR_RGB2GRAY,0);cv.Laplacian(t,a,cv.CV_64F,1,1,0,cv.BORDER_DEFAULT);cv.meanStdDev(a,r,n);var i=n.data64F[0];return t.delete(),a.delete(),i}var j=a("df5a"),C=new O["a"],N=C.pipe(Object(j["a"])());N.subscribe({next:function(){}});var S=n["a"].extend({name:"Home",data:function(){return{cameraButtonEnabled:!0,model:void 0,predictions:[],cameraOptions:[],selectedCamera:"",blurCoef:0,form:{t1:{sn:"",value:""},t2:{sn:"",value:""}}}},created:function(){var e=this;g().then((function(t){e.model=t}))},watch:{selectedCamera:function(e){var t=this.$refs.webcam,a=this.$refs.canvas;console.log(e);var n={video:{advanced:[{deviceId:e}]}};navigator.mediaDevices.getUserMedia(n).then((function(e){t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.srcObject=e,a.setAttribute("width",640),a.setAttribute("height",480)})).catch((function(e){return console.log(e)}))}},methods:{enableCam:function(e){this.$refs.webcam,this.$refs.canvas;var t=this;navigator.mediaDevices.enumerateDevices().then((function(e){console.log(e);var a=e.filter((function(e){return"videoinput"==e.kind})),n=a.map((function(e){return{value:e.deviceId,text:e.label}}));t.cameraOptions=n,0!=n.length&&(t.selectedCamera=n[0].value),t.cameraButtonEnabled=!1}))},predictWebcam:function(){var e=this;this.takepicture();var t=this.$refs.canvas,a=(this.$refs.elem1,this.$refs.elem2,this.$refs.elem3,k(t));this.blurCoef=a;var n=5,r=.1;this.model.detect(t,n,r).then((function(t){console.log("predicitons: ",t),e.renderPredictions(t),window.requestAnimationFrame(e.predictWebcam)}))},renderPredictions:function(e){var t=this;this.predictions.splice(0,this.predictions.length),e.forEach((function(e){return t.predictions.push(e)}))},takepicture:function(){var e=this.$refs.webcam,t=this.$refs.canvas,a=e.videoWidth,n=e.videoHeight,r=t.getContext("2d");t.width=a,t.height=n,r.drawImage(e,0,0,a,n)}}}),P=S,$=(a("27a2"),Object(o["a"])(P,d,p,!1,null,"6183f91b",null)),B=$.exports;n["a"].use(l["a"]);var R=[{path:"/",name:"Home",component:B}],z=new l["a"]({routes:R}),E=z,M=a("2f62");n["a"].use(M["a"]);var T=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:E,store:T,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.11cae281.js.map