import{Q as R}from"./index-b298ae3b.js";import{P as N,g as $,a as q}from"./constants-238021ed.js";import{d as A}from"./default-2af36baf.js";import{o as H}from"./omit-b7fb3099.js";import{d as M,a as x,r as U,n as W,b as o,Y as P,j as r,f as a,w as _,e as n,h as s,S as k,H as Y,I as G,u as B,v as C,g as J,c as K,B as I,z as T,A as X,_ as Z}from"./index-868c7576.js";import"./index-2635024f.js";import"./question-filled-00b6e9f5.js";const ee=(l="el-option",u={})=>{const m=[];return Object.keys(u).forEach((e,i)=>{const t={optionsType:l,prop:`${l.replace("el-","")}${i+1}`,text:u[e]};["el-radio","el-radio-button","el-checkbox"].includes(l)&&(t.label=e),["el-option"].includes(l)&&(t.value=e,t.label=u[e]),m.push(t)}),m},z=l=>(T("data-v-a2e891ad"),l=l(),X(),l),te={class:"list-wrapper overflow-auto",style:{height:"500px"}},le=["infinite-scroll-disabled"],ae={class:"flex items-start"},se={class:"name flex-1"},oe={class:""},ne={key:1,class:"el-loading-spinner flex-center",style:{position:"unset","margin-top":"10px"}},ie=z(()=>s("svg",{class:"circular",viewBox:"0 0 50 50"},[s("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})],-1)),ce=z(()=>s("div",{class:"text-gray-400"},"loading...",-1)),re=[ie,ce],ue={key:2,class:"mt-2 text-sm text-gray-400 text-center"},de=M({name:"InfiniteScrollList",__name:"list",setup(l){const u={labelPosition:"right",labelWidth:"80px",labelSuffix:":"},m=[{type:"el-input",prop:"name",label:"名称",value:"",attrs:{clearable:!0},col:{xs:24,sm:24,md:12,lg:8,xl:6}},{type:"el-select",prop:"type",label:"类型",value:"",attrs:{class:"w-full"},options:ee("el-option",N),col:{xs:24,sm:24,md:12,lg:8,xl:6}}],e=x([]),i=x({}),t=U({pageNo:1,pageSize:10,total:0}),d=x(!1),O=W(()=>e.value.length>=t.total),v=x(!1),S=()=>{V()},j=f=>{v.value=!1,i.value=f,t.pageNo=1,e.value=[],S()},V=async()=>{if(!v.value)try{d.value=!0;const f=H({...t,...i.value},["total"]),{success:g,data:{rows:h,total:y}={}}=await $(f);if(g){t.total=y??0,t.pageNo+=1;let p=[];Object.values(q).forEach(b=>{p=p.concat(h.filter(w=>w.type===b))}),e.value.length<=t.total&&(e.value=e.value.concat(p)),e.value.length===t.total&&(v.value=!0)}}finally{d.value=!1}};return V(),(f,g)=>{const h=o("el-card"),y=o("el-avatar"),p=o("el-tag"),b=o("el-statistic"),w=o("el-empty"),D=o("el-col"),E=o("el-row"),L=P("waves"),Q=P("infinite-scroll");return n(),r("div",null,[a(h,{shadow:"never"},{default:_(()=>[a(R,{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=c=>i.value=c),formItems:m,formOptions:u,colCount:"4",isQuery:"",onSearch:j},null,8,["modelValue"])]),_:1}),a(h,{shadow:"never"},{default:_(()=>[a(E,null,{default:_(()=>[a(D,{span:24},{default:_(()=>[s("div",te,[k((n(),r("ul",{"infinite-scroll-disabled":v.value,"infinite-scroll-immediate":!1},[(n(!0),r(Y,null,G(e.value,(c,F)=>k((n(),r("li",{key:c.name+F,class:"list-item p-5 cursor-pointer"},[s("div",ae,[s("div",null,[a(y,{shape:"square",size:"large",src:B(A),style:{width:"50px",height:"50px",opacity:.5,marginRight:"16px"}},null,8,["src"])]),s("div",se,[s("p",oe,C(c.name),1),a(p,null,{default:_(()=>[J(C(B(N)[c.type]),1)]),_:2},1024)]),a(b,{title:"权重",value:c.priority},null,8,["value"])])])),[[L]])),128))],8,le)),[[Q,S]]),!d.value&&!e.value.length?(n(),K(w,{key:0,"image-size":200})):I("",!0),d.value?(n(),r("div",ne,re)):I("",!0),!d.value&&O.value?(n(),r("p",ue," 没有更多了~ ")):I("",!0)])]),_:1})]),_:1})]),_:1})])}}});const xe=Z(de,[["__scopeId","data-v-a2e891ad"]]);export{xe as default};
