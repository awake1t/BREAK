import{B as _,a as y}from"./index.6fbc8c7a.js";/* empty css                        */import{k as K,l as E}from"./element-plus.b5b7f798.js";import{d as A,l,m as i,W as t,P as v,ad as b,u as f,k as r,U as n,S as s,a5 as d,O as B}from"./vue.b4a71da1.js";import"./vue-router.f4f73926.js";import"./vue-i18n.c3212566.js";const k={class:"avoidance-category-title"},g={class:"avoidance-category-description"},R={class:"reference-list"},V=["href"],C=A({__name:"AvoidancesView",setup(N){let w=Object.keys(_.avoidanceCategories),c=Object();return w.forEach(e=>{c[e]=Array(),Object.keys(_.avoidances).forEach(m=>{let o=_.avoidances[m];if(e!==o.category)return;let p={...o,aKey:m};c[e].push(p)})}),(e,m)=>{const o=K,p=E;return r(),l(v,null,[i("h3",null,t(e.$t("menu.avoidances")),1),(r(!0),l(v,null,b(f(c),(O,u)=>(r(),l("div",null,[i("div",null,[i("h4",k,t(e.$t(`BREAK.avoidanceCategories.${u}.title`))+" ("+t(f(_).avoidanceCategories[u].keyword)+") ",1),i("div",g,t(e.$t(`BREAK.avoidanceCategories.${u}.description`)),1)]),n(p,{data:f(c)[u],stripe:"",border:""},{default:s(()=>[n(o,{prop:"aKey",width:"100px",label:e.$t("ID")},null,8,["label"]),n(o,{width:"150px",label:e.$t("title")},{header:s(()=>[d(t(e.$t("title")),1)]),default:s(a=>[d(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.title`):""),1)]),_:1},8,["label"]),n(o,{label:e.$t("summary")},{default:s(a=>[d(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.summary`):""),1)]),_:1},8,["label"]),n(o,{label:e.$t("description")},{default:s(a=>[d(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.description`):""),1)]),_:1},8,["label"]),n(o,{width:"250px",label:e.$t("references")},{default:s(a=>[i("ul",R,[(r(!0),l(v,null,b(a.row.references,(h,$)=>(r(),l("li",null,[a.row.aKey?(r(),l("a",{key:0,href:h.link,target:"_blank"},t(e.$t(`BREAK.avoidances.${a.row.aKey}.references[${$}].title`)),9,V)):B("",!0),d(": "+t(e.$t(`BREAK.avoidances.${a.row.aKey}.references[${$}].description`)),1)]))),256))])]),_:1},8,["label"])]),_:2},1032,["data"])]))),256))],64)}}});const L=y(C,[["__scopeId","data-v-c2494d0f"]]);export{L as default};