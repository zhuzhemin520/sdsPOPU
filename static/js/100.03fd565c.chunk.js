(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[100],{1066:function(e,t,n){"use strict";n.r(t),n.d(t,"getContrastingBackgroundTheme",(function(){return M})),n.d(t,"getRenderSymbolParameters",(function(){return j})),n.d(t,"previewSymbol2D",(function(){return k}));var a=n(46),l=n(16),i=n(1292),o=n(31),s=n(389),c=n(223),r=n(488),u=n(1351);const h="picture-fill",d=c.a.size,m=c.a.maxSize,f=c.a.maxOutlineSize,p=c.a.lineWidth,b=document.createElement("canvas");function v(e,t){const n=b.getContext("2d"),a=[];return t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" "),n.measureText(e).width}function y(e){if(0===e.length)return 0;if(e.length>2){const t=Object(o.i)(1),n=parseFloat(e);switch(e.slice(-2)){case"px":return n;case"pt":return n*t;case"in":return 72*n*t;case"pc":return 12*n*t;case"mm":return 2.8346456692913384*n*t;case"cm":return 28.346456692913385*n*t}}return parseFloat(e)}function w(e){const t=null==e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?Object(o.h)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?Object(o.h)(t.height):null}}function g(e,t){return e>t?"dark":"light"}function j(e,t){var n,a;const l="number"==typeof(null==t?void 0:t.size)?null==t?void 0:t.size:null,i=null!=l?Object(o.h)(l):null,r=null!=(null==t?void 0:t.maxSize)?Object(o.h)(t.maxSize):null,u=null!=(null==t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,b=Object(s.c)(e);let g=Object(s.e)(e);"dark"!==M(e,245)||(null==t?void 0:t.ignoreWhiteSymbols)||(g={width:.75,...g,color:"#bdc3c7"});const j={shape:null,fill:b,stroke:g,offset:[0,0]};(null==(n=g)?void 0:n.width)&&(g.width=Math.min(g.width,f));const k=(null==(a=g)?void 0:a.width)||0;let O=null!=(null==t?void 0:t.size)&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale)),x=0,L=0,z=!1;switch(e.type){case"simple-marker":{const n=e.style,{width:a,height:l}=w(t),s=a===l&&null!=a?a:null!=i?i:Math.min(Object(o.h)(e.size),r||m);switch(x=s,L=s,n){case"circle":j.shape={type:"circle",cx:0,cy:0,r:.5*s},O||(x+=k,L+=k);break;case"cross":j.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[x,.5*L]},{command:"M",values:[.5*x,0]},{command:"L",values:[.5*x,L]}]};break;case"diamond":j.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*x,0]},{command:"L",values:[x,.5*L]},{command:"L",values:[.5*x,L]},{command:"Z",values:[]}]},O||(x+=k,L+=k);break;case"square":j.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,0]},{command:"L",values:[x,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},O||(x+=k,L+=k),u&&(z=!0);break;case"triangle":j.shape={type:"path",path:[{command:"M",values:[.5*x,0]},{command:"L",values:[x,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},O||(x+=k,L+=k),u&&(z=!0);break;case"x":j.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,L]},{command:"M",values:[x,0]},{command:"L",values:[0,L]}]},u&&(z=!0);break;case"path":j.shape={type:"path",path:e.path||""},O||(x+=k,L+=k),u&&(z=!0),O=!0}break}case"simple-line":{var C;const{width:e,height:n}=w(t),a=null!=n?n:null!=i?i:k,l=null!=e?e:p;g&&(g.width=a),x=l,L=a;const o=(null==j||null==(C=j.stroke)?void 0:C.cap)||"butt",s="round"===o;O=!0,j.stroke&&(j.stroke.cap="butt"===o?"square":o),j.shape={type:"path",path:[{command:"M",values:[s?a/2:0,L/2]},{command:"L",values:[s?x-a/2:x,L/2]}]};break}case h:case"simple-fill":{const e="object"==typeof(null==t?void 0:t.symbolConfig)&&(null==t?void 0:t.symbolConfig.isSquareFill),{width:n,height:a}=w(t);x=!e&&n!==a||null==n?null!=i?i:d:n,L=!e&&n!==a||null==a?x:a,O||(x+=k,L+=k),O=!0,j.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[x,0]},{command:"L",values:[x,L]},{command:"L",values:[0,L]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.m.fill[0];break}case"picture-marker":{const n=Math.min(Object(o.h)(e.width),r||m),a=Math.min(Object(o.h)(e.height),r||m),{width:l,height:s}=w(t),c=l===s&&null!=l?l:null!=i?i:Math.max(n,a),h=n/a;x=h<=1?Math.ceil(c*h):c,L=h<=1?c:Math.ceil(c/h),j.shape={type:"image",x:-Math.round(x/2),y:-Math.round(L/2),width:x,height:L,src:e.url||""},u&&(z=!0);break}case"text":{const n=e,a=(null==t?void 0:t.overrideText)||n.text||"Aa",l=n.font,{width:s,height:c}=w(t),u=null!=c?c:null!=i?i:Math.min(Object(o.h)(l.size),r||m),h=v(a,{weight:l.weight,size:u,family:l.family}),d=/[\uE600-\uE6FF]/.test(a);x=null!=s?s:d?u:h,L=u;let f=.25*y((l?u:0).toString());d&&(f+=5),j.shape={type:"text",text:a,x:n.xoffset||0,y:n.yoffset||f,align:"middle",alignBaseline:n.verticalAlignment,decoration:l&&l.decoration,rotated:n.rotated,kerning:n.kerning},j.font=l&&{size:u,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return{shapeDescriptor:j,size:[x,L],renderOptions:{node:null==t?void 0:t.node,scale:O,opacity:null==t?void 0:t.opacity,rotation:u,useRotationSize:z,effectView:null==t?void 0:t.effectView}}}async function k(e,t){const{shapeDescriptor:n,size:a,renderOptions:o}=j(e,t);if(!n.shape)throw new l.a("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const n=t.fill,a=e.color;if("pattern"===(null==n?void 0:n.type)&&a&&e.type!==h){const e=await Object(s.d)(n.src,a.toCss(!0));n.src=e,t.fill=n}}(e,n),await async function(e,t,n,a){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await Object(i.b)(e.font)}catch{}const{width:l}=w(a),o=/[\uE600-\uE6FF]/.test(t.shape.text);null!=l||o||(n[0]=v(t.shape.text,{weight:t.font.weight,size:t.font.size,family:t.font.family}))}(e,n,a,t);const u=[[n]];if("object"==typeof(null==t?void 0:t.symbolConfig)&&null!=t&&t.symbolConfig.applyColorModulation){const e=.6*a[0];u.unshift([{...n,offset:[-e,0],fill:Object(c.b)(n.fill,-.3)}]),u.push([{...n,offset:[e,0],fill:Object(c.b)(n.fill,.3)}]),a[0]+=2*e,o.scale=!1}return Object(r.a)(u,a,o)}function M(e,t=225){const n=Object(s.c)(e),l=Object(s.e)(e),i=!n||"type"in n?null:new a.a(n),o=null!=l&&l.color?new a.a(null==l?void 0:l.color):null,c=i?g(Object(u.a)(i),t):null,r=o?g(Object(u.a)(o),t):null;return r?c?c===r?c:t>=225?"light":"dark":r:c}},1292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n(136);const l="woff2",i=new Map;async function o(e){const t=c(e);let n=i.get(t);if(n)return n;const o=new FontFace(e.family,`url('${a.a.fontsUrl}/woff2/${t}.${l}') format('${l}')`),s=document.fonts;return s.has(o)&&"loading"===o.status?o.loaded:(n=o.load(),i.set(t,n),s.add(o),n)}function s(e){if(!e)return"arial-unicode-ms";const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function c(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return s(e.family)+(t.length>0?t:"-regular")}},1351:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(46);n(2);function l(e){let{r:t,g:n,b:l,a:i}=e;return i<1&&(t=Math.round(i*t+255*(1-i)),n=Math.round(i*n+255*(1-i)),l=Math.round(i*l+255*(1-i))),new a.a({r:t,g:n,b:l})}function i(e){const{r:t,g:n,b:a}=l(e);return.2126*t+.7152*n+.0722*a}}}]);
//# sourceMappingURL=100.03fd565c.chunk.js.map