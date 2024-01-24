(()=>{"use strict";var e,t={607:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components;window.wp.data,window.wp.notices;const n=JSON.parse('{"u2":"create-block/offers-block"}');(0,e.registerBlockType)(n.u2,{edit:function({attributes:e,setAttributes:n}){const s=(0,l.useBlockProps)({className:"offers-block"}),{apiEndpoint:o,apiResponse:c}=e;let i=!0;return e.apiEndpoint&&(async()=>{try{const t=await fetch(e.apiEndpoint),r=await t.json();n({apiResponse:r})}catch(e){console.error("Error fetching API:",e)}})(),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,r.__)("Settings","basic-block"),initialOpen:!0},(0,t.createElement)(a.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.TextControl,{label:(0,r.__)("API Endpoint","basic-block"),value:o,onChange:e=>{/^(ftp|http|https):\/\/[^ "]+$/.test(e)?(n({apiEndpoint:e}),i=!0,console.log("VALID URL")):(i=!1,console.log("Invalid URL"))},help:(0,r.__)("Input a valid API Endpoint","basic-block"),className:"is-required",required:!0}))))),(0,t.createElement)("p",{...s},"Offers Block - This will display all offers from an external API"))},save:function({attributes:e}){const r=l.useBlockProps.save({className:"offers-block"}),{apiEndpoint:a,apiResponse:n}=(r.className,e);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("p",{...r},"Offers Block - This will display all offers from an external API"),n&&n.record&&(0,t.createElement)("div",{class:"offers-wrapper"},Object.keys(n.record.offers).map(((e,r)=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{class:"offer-item",key:r},(0,t.createElement)("div",{class:"offer-item-body"},n.record.offers[e].ribbon&&(0,t.createElement)("div",{class:"ribbon-container"},(0,t.createElement)("span",null,n.record.offers[e].ribbon)),(0,t.createElement)("div",{class:"content"},(0,t.createElement)("div",{class:"logo-container"},(0,t.createElement)("img",{class:"logo",src:n.record.offers[e].logo.dark,alt:n.record.offers[e].brand,width:"300"})),(0,t.createElement)("div",{class:"headlines-container"},(0,t.createElement)("div",{class:"headline-one"},n.record.offers[e].headlines.one.title),(0,t.createElement)("div",{class:"headline-two"},n.record.offers[e].headlines.two.title),(0,t.createElement)("div",{class:"headline-three"},n.record.offers[e].headlines.three.title)),(0,t.createElement)("div",{class:"deposits-container"},(0,t.createElement)("ul",{class:"rating","data-rating":"3.5"},(0,t.createElement)("li",{class:"rating__item"}),(0,t.createElement)("li",{class:"rating__item"}),(0,t.createElement)("li",{class:"rating__item"}),(0,t.createElement)("li",{class:"rating__item"}),(0,t.createElement)("li",{class:"rating__item"})),(0,t.createElement)("div",{class:"deposits",id:"depositSlider"},Object.entries(n.record.offers[e].deposits).map((([e,r])=>(0,t.createElement)("div",{class:"deposit-logo"},(0,t.createElement)("img",{src:r.dark_url,alt:""})))))),(0,t.createElement)("div",{class:"bullets-container"},(0,t.createElement)("ul",{class:"bullets"},Object.entries(n.record.offers[e].bullet_points).map((([e,r])=>(0,t.createElement)("li",{class:"bullet-item"},r.title))))),(0,t.createElement)("div",{class:"cta-button-container"},(0,t.createElement)("a",{href:"",class:"cta-button"},n.record.offers[e].cta.one),(0,t.createElement)("span",{class:"text-underline"},n.record.offers[e].cta.two)," | ",(0,t.createElement)("span",{class:"text-underline"},(0,t.createElement)("a",{href:n.record.offers[e].cta.links.review},"Review")))),(0,t.createElement)("div",{class:"preview-container"},(0,t.createElement)("span",null,(0,t.createElement)("img",{src:"images/preview-photo.png",alt:""})),(0,t.createElement)("span",null,"Preview"))),(0,t.createElement)("div",{class:"offer-item-footer"},(0,t.createElement)("span",{class:"fine-print"},n.record.offers[e].fine_print)," | ",(0,t.createElement)("span",{class:"disclaimer"},n.record.offers[e].disclaimer))))))))}})}},r={};function l(e){var a=r[e];if(void 0!==a)return a.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,r,a,n)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,a,n]=e[d],o=!0,c=0;c<r.length;c++)(!1&n||s>=n)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(o=!1,n<s&&(s=n));if(o){e.splice(d--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,a,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[s,o,c]=r,i=0;if(s.some((t=>0!==e[t]))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(c)var d=c(l)}for(t&&t(r);i<s.length;i++)n=s[i],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},r=globalThis.webpackChunkoffers_block=globalThis.webpackChunkoffers_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=l.O(void 0,[431],(()=>l(607)));a=l.O(a)})();