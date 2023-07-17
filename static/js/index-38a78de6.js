import H from"./PluginConfig-afcd4f83.js";import{aP as B,aQ as L,aR as Q,aS as z,aT as k,aU as G,aV as N,aW as W,d as X,q as Y,f as r,b as u,g as v,at as J,Y as K,S as E,c as h,w as c,e as f,aX as Z,j as y,I as b,H as C,ah as R,h as w,v as x,B as I,m as $}from"./index-92b6d272.js";import{_ as O}from"./plugin-vueexport-helper-c27b6911.js";import{P as ee,g as te,a as ne}from"./constants-8cfcf5d7.js";import{d as ie}from"./default-2af36baf.js";import{o as le}from"./omit-60002abc.js";function ae(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function oe(t,e){if(t!==e){var n=t!==void 0,a=t===null,l=t===t,i=B(t),o=e!==void 0,g=e===null,d=e===e,p=B(e);if(!g&&!p&&!i&&t>e||i&&o&&d&&!g&&!p||a&&o&&d||!n&&d||!l)return 1;if(!a&&!i&&!p&&t<e||p&&n&&l&&!a&&!i||g&&n&&l||!o&&l||!d)return-1}return 0}function se(t,e,n){for(var a=-1,l=t.criteria,i=e.criteria,o=l.length,g=n.length;++a<o;){var d=oe(l[a],i[a]);if(d){if(a>=g)return d;var p=n[a];return d*(p=="desc"?-1:1)}}return t.index-e.index}function re(t,e,n){e.length?e=L(e,function(i){return k(i)?function(o){return G(o,i.length===1?i[0]:i)}:i}):e=[Q];var a=-1;e=L(e,N(W));var l=z(t,function(i,o,g){var d=L(e,function(p){return p(i)});return{criteria:d,index:++a,value:i}});return ae(l,function(i,o){return se(i,o,n)})}function q(t,e,n,a){return t==null?[]:(k(e)||(e=e==null?[]:[e]),n=a?void 0:n,k(n)||(n=n==null?[]:[n]),re(t,e,n))}const ce=X({name:"PanelSection",props:{title:{type:String,required:!0},customStyle:{type:[Object,String],default:()=>({})},id:{type:String,default:""},tooltip:{type:String,default:""}},setup(t,{slots:e}){const{id:n,title:a,tooltip:l,customStyle:i}=Y(t);return()=>{var o;return r("div",{class:"panel-section",id:n.value},[r(u("el-divider"),{"content-position":"left",class:"mt-6"},{default:()=>[r("span",{class:"font-title"},[a.value,v(" "),l.value&&r(u("el-tooltip"),null,{default:()=>[r("i",{class:"el-icon-question"},null)]})])]}),r("div",{style:i.value},[(o=e==null?void 0:e.default)==null?void 0:o.call(e)])])}}});const ue=O(ce,[["__scopeId","data-v-0fafcbd5"]]);const de={name:"PluginPage",components:{PanelSection:ue,PluginConfig:H},props:{readonly:Boolean,type:{type:String,default:"scoped"},initialData:{type:Object,default:()=>({})},pluginConfigId:{type:String,default:""},schemaType:{type:String,default:"route"},referPage:{type:String,default:""},showSelector:Boolean,onChange:{type:Function,default:()=>()=>{}}},data(){return{orderBy:q,defaultImg:ie,showEnablePlugin:"all",tabActive:"authentication",PluginTitle:ee,typeList:[],pluginList:[],cachedPluginList:[],enablePluginsList:[],plugins:this.initialData,showPluginConfig:!1,pluginConfig:{name:"",type:"global",item:{}},loading:!1,keyword:"",queryList:[],navs:[],sections:[],scrollTop:0}},computed:{cluster_id(){return this.$route.params.etcdId},workspace_id(){return this.$route.params.workId},panelSectionStyle(){return Object.freeze({display:"grid","grid-template-columns":"repeat(4, 1fr)",gap:"24px"})},showTabs(){return this.scrollTop>120}},async mounted(){await this.getPluginPage(),await this.$nextTick(),this.navs=document.querySelectorAll(".el-tabs__item"),this.sections=document.querySelectorAll(".panel-section");const t=document.querySelector(".app-main .el-scrollbar__wrap");J(t,"scroll",e=>{this.scrollTop=e.target.scrollTop,this.onScroll(e.target.scrollTop)})},beforeUnmount(){window.removeEventListener("scroll",this.onScroll)},methods:{async getPluginPage(){try{this.loading=!0;const{success:t,data:{rows:e}={}}=await te({all:!0});if(t){let n=[];Object.values(ne).forEach(a=>{n=n.concat(e.filter(l=>l.type===a))}),this.cachedPluginList=this.pluginList=n,this.getTypeList(n)}}finally{this.loading=!1}},getTypeList(t){const e=[];t.forEach(n=>{e.includes(n.type)||e.push(n.type)}),this.typeList=e},handlePluginList(t){const e=(this.showEnablePlugin==="enable"?this.enablePluginsList:this.pluginList).filter(this.readonly?n=>n.type===t&&!n.hidden&&this.initialData[n.name]:n=>n.type===t&&!n.hidden);return q(e,"name","asc")},async handlePluginConfigChange({formValues:t,codeData:e,shouldDelete:n}){const a=this.pluginConfig.name;let l={...this.initialData,[a]:{...e,disable:!t.disable}},i="edit";n===!0&&(i="delete",l=le(this.plugins,a)),this.onChange(l,i),this.plugins=l,this.handleCloseDrawer()},onClickConfig(t){this.pluginConfig.name=t.name},async onClickDisabled(t){},handleCloseDrawer(){},handleClickBtns(t,e){const{name:n}=t;switch(n){case"enable":this.pluginConfig.name=e.name,this.showPluginConfig=!0;break}},onTabClick(t){this.scrollToSection(`${t.paneName}`)},remoteMethod(t){t!==""?this.queryList=this.cachedPluginList.filter(e=>e.name.toLowerCase().indexOf(t.toLowerCase())>-1):this.queryList=[]},handleQueryChange(t){const e=[...this.cachedPluginList];this.pluginList=t?e.filter(n=>n.name.toLowerCase().indexOf(t.toLowerCase())>-1):e},querySearch(t,e){const n=i=>o=>new RegExp(i,"gi").test(o.value),a=this.pluginList.map(i=>({...i,value:i.name,address:i.name})),l=t?a.filter(n(t)):a;e(l)},scrollToSection(t){const e=document.getElementById(t);e==null||e.scrollIntoView({behavior:"smooth"})},onScroll(t){var e;(e=this.sections)==null||e.forEach(n=>{const a=n.offsetTop,l=window.innerHeight/2;t>=a-l&&this.navs.forEach(i=>{const o=i.getAttribute("id").replace("tab-",""),g=n.getAttribute("id");o===g&&(this.tabActive=o)})})}}},ge={class:"plugin-list"},fe={class:"truncate text-center"},pe={class:"flex-c flex-1"};function me(t,e,n,a,l,i){const o=u("el-tab-pane"),g=u("el-tabs"),d=u("el-option"),p=u("el-select"),T=u("el-col"),P=u("el-row"),j=u("el-image"),S=u("el-button"),D=u("el-card"),U=u("PanelSection"),M=u("plugin-config"),F=K("loading");return E((f(),h(D,{shadow:"never",class:"plugin-page"},{default:c(()=>[(f(),h(Z,{to:"body"},[E(r(g,{ref:"tabsRef",modelValue:l.tabActive,"onUpdate:modelValue":e[0]||(e[0]=s=>l.tabActive=s),style:{position:"fixed",top:"170px",right:"40px"},"tab-position":"left",onTabClick:i.onTabClick},{default:c(()=>[(f(!0),y(C,null,b(l.typeList,s=>(f(),h(o,{key:s,name:s,label:l.PluginTitle[s]},null,8,["name","label"]))),128))]),_:1},8,["modelValue","onTabClick"]),[[R,i.showTabs]])])),w("div",ge,[r(P,{type:"flex",align:"middle",gutter:16},{default:c(()=>[r(T,{xs:24,sm:24,md:12,lg:8,xl:6},{default:c(()=>[r(p,{modelValue:l.keyword,"onUpdate:modelValue":e[1]||(e[1]=s=>l.keyword=s),filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"搜索插件",style:{width:"100%"},"remote-method":i.remoteMethod,onChange:i.handleQueryChange},{default:c(()=>[(f(!0),y(C,null,b(l.queryList,s=>(f(),h(d,{key:s.name,label:s.name,value:s.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","onChange"])]),_:1})]),_:1}),(f(!0),y(C,null,b(l.typeList,s=>(f(),h(U,{key:s,id:`${s}`,title:l.PluginTitle[s]},{default:c(()=>[r(P,{gutter:16},{default:c(()=>[(f(!0),y(C,null,b(i.handlePluginList(s),m=>(f(),h(T,{xs:24,sm:24,md:12,lg:8,xl:6,key:m.name},{default:c(()=>[r(D,{class:"mb-4",shadow:"hover","body-style":{minHeight:"301px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}},{header:c(()=>[w("div",fe,[w("span",null,x(m.name),1)])]),default:c(()=>[w("div",pe,[r(j,{src:l.defaultImg,style:{width:"50px",height:"50px",opacity:.5,display:"block"}},null,8,["src"])]),r(P,{class:"w-full",type:"flex",justify:"center"},{default:c(()=>{var V,A;return[r(S,{type:n.initialData[m.name]&&!((V=n.initialData[m.name])!=null&&V.disable)?"primary":"default",onClick:_=>i.onClickConfig(m)},{default:c(()=>{var _;return[v(x(n.initialData[m.name]&&!((_=n.initialData[m.name])!=null&&_.disable)?"更 新":"启 用"),1)]}),_:2},1032,["type","onClick"]),n.initialData[m.name]&&!((A=n.initialData[m.name])!=null&&A.disable)?(f(),h(S,{key:0,type:"danger",onClick:_=>i.onClickDisabled(m)},{default:c(()=>[v(x("禁 用"))]),_:2},1032,["onClick"])):I("",!0)]}),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["id","title"]))),128))]),r(M,$(l.pluginConfig,{modelValue:l.showPluginConfig,"onUpdate:modelValue":e[2]||(e[2]=s=>l.showPluginConfig=s),"initial-data":n.initialData,"plugin-list":l.pluginList,"on-change":i.handlePluginConfigChange,onCloseDrawer:i.handleCloseDrawer}),null,16,["modelValue","initial-data","plugin-list","on-change","onCloseDrawer"])]),_:1})),[[F,l.loading]])}const Pe=O(de,[["render",me],["__scopeId","data-v-2b6f0748"]]);export{Pe as default};
