import{aO as u,aP as r,d as _,f as o,b as s,U as c,P as d}from"./index-1dfbcfb5.js";const n=Object.assign({"./FlexBox.vue":()=>r(()=>import("./FlexBox-0c08f419.js"),["static/js/FlexBox-0c08f419.js","static/js/index-1dfbcfb5.js","static/css/index-fecdb203.css","static/css/FlexBox-a8852bff.css"]),"./absolute -margin.vue":()=>r(()=>import("./absolute -margin-f861033a.js"),["static/js/absolute -margin-f861033a.js","static/js/index-1dfbcfb5.js","static/css/index-fecdb203.css","static/css/absolute -margin-b2fa1be0.css"]),"./absolute-transform.vue":()=>r(()=>import("./absolute-transform-975885f7.js"),["static/js/absolute-transform-975885f7.js","static/js/index-1dfbcfb5.js","static/css/index-fecdb203.css","static/css/absolute-transform-f72de191.css"]),"./grid-box.vue":()=>r(()=>import("./grid-box-89d968f0.js"),["static/js/grid-box-89d968f0.js","static/js/index-1dfbcfb5.js","static/css/index-fecdb203.css","static/css/grid-box-c0bade0f.css"])}),i=Object.keys(n).reduce((e,t)=>{const l=t.replace(/^\.\/(.*)\.\w+$/,"$1");return e[l]=u(n[t]),e},{}),a=i;function m(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!d(e)}const f=_({setup(){return()=>{let e;return o("div",{class:"layout-demo"},[o(s("el-row"),{gutter:16},m(e=Object.keys(a).map(t=>o(s("el-col"),{key:t,xs:24,sm:24,md:12,lg:8,xl:6},{default:()=>[o(s("el-card"),{class:"mb-4",shadow:"never"},{default:()=>[c(a[t])],header:()=>o("div",null,[t])})]})))?e:{default:()=>[e]})])}}});export{f as default};
