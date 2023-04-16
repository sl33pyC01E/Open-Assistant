"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[1248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||y[d]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56668:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},s="Get Tree Manager  Stats",o={type:"api",id:"get-tree-manager-stats",unversionedId:"get-tree-manager-stats",title:"Get Tree Manager  Stats",description:"",slug:"/get-tree-manager-stats",frontMatter:{},api:{tags:["stats"],operationId:"get_tree_manager__stats_api_v1_stats_tree_manager_get",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"TreeManagerStats",required:["state_counts","message_counts"],type:"object",properties:{state_counts:{title:"State Counts",type:"object",additionalProperties:{type:"integer"}},message_counts:{title:"Message Counts",type:"array",items:{title:"TreeMessageCountStats",required:["message_tree_id","state","depth","oldest","youngest","count","goal_tree_size"],type:"object",properties:{message_tree_id:{title:"Message Tree Id",type:"string",format:"uuid"},state:{title:"State",type:"string"},depth:{title:"Depth",type:"integer"},oldest:{title:"Oldest",type:"string",format:"date-time"},youngest:{title:"Youngest",type:"string",format:"date-time"},count:{title:"Count",type:"integer"},goal_tree_size:{title:"Goal Tree Size",type:"integer"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],description:"Get Tree Manager  Stats",method:"get",path:"/api/v1/stats/tree_manager",parameters:[],securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Tree Manager  Stats",description:{type:"text/plain"},url:{path:["api","v1","stats","tree_manager"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-tree-manager-stats",previous:{title:"Get Tree Manager  Message Counts",permalink:"/Open-Assistant/api/get-tree-manager-message-counts"},next:{title:"Get Leaderboard",permalink:"/Open-Assistant/api/get-leaderboard"}},i=[],p={toc:i},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-tree-manager--stats"},"Get Tree Manager  Stats"),(0,r.kt)("p",null,"Get Tree Manager  Stats"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"state_counts"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"message_counts"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"message_tree_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"state"),(0,r.kt)("span",{style:{opacity:"0.6"}}," State"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"depth"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Depth"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"oldest"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"youngest"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Count"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"goal_tree_size"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Goal Tree Size")))))))))))))))}c.isMDXComponent=!0}}]);