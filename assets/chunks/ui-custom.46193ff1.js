import{e as c,g as i,i as d,r as p,h as l,w as b,o as u,c as f}from"../app.4953565a.js";const _=c({__name:"VPCarbonAds",setup(v){const{theme:s}=i(),o=s.value.carbonAds,{isAsideEnabled:n}=d(),a=p();let r=!1;function t(){if(!r){r=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${o.code}&placement=${o.placement}`,e.async=!0,a.value.appendChild(e)}}return o&&l(()=>{n.value?t():b(n,e=>e&&t())}),(e,x)=>(u(),f("div",{class:"VPCarbonAds",ref_key:"container",ref:a},null,512))}});export{_ as default};
