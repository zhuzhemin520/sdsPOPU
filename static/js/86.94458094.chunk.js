(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[86],{1132:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i(2);function s(t,e){return t?e?4:3:e?3:2}function n(t,e,i,n,o){if(Object(r.k)(e)||!e.lengths.length)return null;const l="upperLeft"===(null==o?void 0:o.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const u=t.coords,h=[],p=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:b,coords:d}=e,g=s(i,n);let y=0;for(const r of b){const t=a(p,d,y,r,i,n,l);t&&h.push(t),y+=r*g}if(h.sort(((t,e)=>{let r=l*t[2]-l*e[2];return 0===r&&i&&(r=t[4]-e[4]),r})),h.length){let t=6*h[0][2];u[0]=h[0][0]/t,u[1]=h[0][1]/t,i&&(t=6*h[0][4],u[2]=0!==t?h[0][3]/t:0),(u[0]<p[0]||u[0]>p[1]||u[1]<p[2]||u[1]>p[3]||i&&(u[2]<p[4]||u[2]>p[5]))&&(u.length=0)}if(!u.length){const t=e.lengths[0]?c(d,0,b[0],i,n):null;if(!t)return null;u[0]=t[0],u[1]=t[1],i&&t.length>2&&(u[2]=t[2])}return t}function a(t,e,i,r,n,a,c=1){const o=s(n,a);let l=i,u=i+o,h=0,p=0,b=0,d=0,g=0;for(let s=0,O=r-1;s<O;s++,l+=o,u+=o){const i=e[l],r=e[l+1],s=e[l+2],a=e[u],c=e[u+1],o=e[u+2];let y=i*c-a*r;d+=y,h+=(i+a)*y,p+=(r+c)*y,n&&(y=i*o-a*s,b+=(s+o)*y,g+=y),i<t[0]&&(t[0]=i),i>t[1]&&(t[1]=i),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),n&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(d*c>0&&(d*=-1),g*c>0&&(g*=-1),!d)return null;const y=[h,p,.5*d];return n&&(y[3]=b,y[4]=.5*g),y}function c(t,e,i,r,n){const a=s(r,n);let c=e,p=e+a,b=0,d=0,g=0,y=0;for(let s=0,O=i-1;s<O;s++,c+=a,p+=a){const e=t[c],i=t[c+1],s=t[c+2],n=t[p],a=t[p+1],O=t[p+2],j=r?l(e,i,s,n,a,O):o(e,i,n,a);if(j)if(b+=j,r){const t=h(e,i,s,n,a,O);d+=j*t[0],g+=j*t[1],y+=j*t[2]}else{const t=u(e,i,n,a);d+=j*t[0],g+=j*t[1]}}return b>0?r?[d/b,g/b,y/b]:[d/b,g/b]:i>0?r?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function o(t,e,i,r){const s=i-t,n=r-e;return Math.sqrt(s*s+n*n)}function l(t,e,i,r,s,n){const a=r-t,c=s-e,o=n-i;return Math.sqrt(a*a+c*c+o*o)}function u(t,e,i,r){return[t+.5*(i-t),e+.5*(r-e)]}function h(t,e,i,r,s,n){return[t+.5*(r-t),e+.5*(s-e),i+.5*(n-i)]}},1133:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var r,s,n,a={exports:{}};r=a,s=function(){function t(i,r,s,n,a){for(;n>s;){if(n-s>600){var c=n-s+1,o=r-s+1,l=Math.log(c),u=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*u*(c-u)/c)*(o-c/2<0?-1:1);t(i,r,Math.max(s,Math.floor(r-o*u/c+h)),Math.min(n,Math.floor(r+(c-o)*u/c+h)),a)}var p=i[r],b=s,d=n;for(e(i,s,r),a(i[n],p)>0&&e(i,s,n);b<d;){for(e(i,b,d),b++,d--;a(i[b],p)<0;)b++;for(;a(i[d],p)>0;)d--}0===a(i[s],p)?e(i,s,d):e(i,++d,n),d<=r&&(s=d+1),r<=d&&(n=d-1)}}function e(t,e,i){var r=t[e];t[e]=t[i],t[i]=r}function i(t,e){return t<e?-1:t>e?1:0}return function(e,r,s,n,a){t(e,r,s||0,n||e.length-1,a||i)}},void 0!==(n=s())&&(r.exports=n);const c=a.exports},1242:function(t,e,i){"use strict";i.d(e,"a",(function(){return G}));var r=i(0),s=i(171),n=i(59),a=i(243),c=i(226),o=i(2),l=i(23),u=i(13),h=i(1),p=(i(17),i(12),i(10)),b=i(903),d=i(423),g=i(559),y=i(742),O=i(249),j=i(678),f=i(924),v=i(1219),m=i(1281),I=i(1283),w=i(1313),C=i(1192),E=i(168),V=i(34);let G=class extends a.a{constructor(t){super(t),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=j.a.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null}initialize(){const{layer:t}=this,e="effectiveScaleRange"in t?t:null,i=this.scaleVisibilityEnabled&&Object(o.l)(e),r=new v.a({owner:this,layer:this.owner.layer,preferredUpdatePolicy:V.k.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(t,e)=>new m.a({graphicsCoreOwner:this,graphicsCore:t,queryGraphicUIDsInExtent:e,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(t,i)=>new C.a({graphicsCoreOwner:this,layer:e,queryGraphicUIDsInExtent:i,graphicsCore:t,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:t=>new w.a(t)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new I.a({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const t=this.owner;this.updatingHandles.add((()=>t.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in t){const e=t;this.updatingHandles.add((()=>e.elevationInfo),((t,e)=>{Object(b.a)(t,e)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this.updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(t){if(Object(l.j)(t))return;throw t}this.destroyed||(this.handles.add(Object(u.f)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),u.d)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("frustumVisibility",Object(o.e)(this.frustumVisibility)),this._set("graphicsCore",Object(o.e)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var t;return null==(t=this.graphicsCore)?void 0:t.scaleVisibility}get elevationAlignment(){var t;return null==(t=this.graphicsCore)?void 0:t.elevationAlignment}get objectStates(){var t;return null==(t=this.graphicsCore)?void 0:t.objectStates}get scaleVisibilitySuspended(){return!(!Object(o.l)(this.scaleVisibility)||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return Object(o.l)(this.frustumVisibility)&&this.frustumVisibility.suspended}get suspended(){var t;return null!=(t=this.owner.suspended)&&t}get updating(){var t;return!!(null!=(t=this.graphicsCore)&&t.updating||Object(o.l)(this.scaleVisibility)&&this.scaleVisibility.updating||Object(o.l)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}get graphics3DGraphics(){var t;return null==(t=this.graphicsCore)?void 0:t.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var t;return null==(t=this.graphicsCore)?void 0:t.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var t;return null!=(t=this.owner.fullOpacity)?t:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(t){this.graphicsCore.notifyGraphicGeometryChanged(t)}notifyGraphicVisibilityChanged(t){this.graphicsCore.notifyGraphicVisibilityChanged(t)}getRenderingInfo(t,e,i){const r=Object(y.c)(t,{renderer:e,arcade:i});if(Object(o.l)(r)&&r.color){const t=r.color;t[0]=t[0]/255,t[1]=t[1]/255,t[2]=t[2]/255}return r}getRenderingInfoAsync(t,e,i,r){return Object(y.d)(t,{renderer:e,arcade:i,...r})}getHit(t){if(this.owner.loadedGraphics){const e=this.owner.loadedGraphics.find((e=>e.uid===t));if(e){const t=this.layer instanceof d.a?this.layer:null,i=Object(g.c)(e,t);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(t,e){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,e):Promise.reject()}computeAttachmentOrigin(t,e){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,e):null}getSymbolLayerSize(t,e){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,e):null}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(V.e.MaskOccludee,null);return this.objectStates.setUid(e,t.uid),i}highlight(t){if(t instanceof O.a)return N;if("number"==typeof t)return this.highlight([t]);if(t instanceof s.a)return this.highlight([t]);if(t instanceof n.a&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof s.a){const e=t.map((t=>t.uid)),{set:i,handle:r}=this.objectStates.acquireSet(V.e.Highlight,null);return this.objectStates.setUids(i,e),r}if("number"==typeof t[0]){const e=t,{set:i,handle:r}=this.objectStates.acquireSet(V.e.Highlight,null);return this.objectStates.setObjectIds(i,e),r}}return N}_setupSuspendResumeExtent(){const{scaleVisibility:t,frustumVisibility:e}=this;if(Object(o.k)(t)&&Object(o.k)(e))return;const i=({computedExtent:i,extentPadding:r})=>{this._suspendResumeExtent=Object(E.e)(i,this._suspendResumeExtent,f.a,r),Object(o.l)(t)&&t.setExtent(this._suspendResumeExtent),Object(o.l)(e)&&e.setExtent(this._suspendResumeExtent)};this.handles.add(Object(u.f)((()=>{var t,e;return{computedExtent:null==(t=this.graphicsCore)?void 0:t.computedExtent,extentPadding:null==(e=this.graphicsCore)?void 0:e.extentPadding}}),(t=>i(t)),u.e))}_updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};Object(r.a)([Object(h.b)()],G.prototype,"type",void 0),Object(r.a)([Object(h.b)({constructOnly:!0})],G.prototype,"owner",void 0),Object(r.a)([Object(h.b)()],G.prototype,"layer",null),Object(r.a)([Object(h.b)()],G.prototype,"view",null),Object(r.a)([Object(h.b)({constructOnly:!0})],G.prototype,"graphicsCore",void 0),Object(r.a)([Object(h.b)()],G.prototype,"scaleVisibility",null),Object(r.a)([Object(h.b)({constructOnly:!0})],G.prototype,"frustumVisibility",void 0),Object(r.a)([Object(h.b)()],G.prototype,"elevationAlignment",null),Object(r.a)([Object(h.b)()],G.prototype,"objectStates",null),Object(r.a)([Object(h.b)()],G.prototype,"scaleVisibilitySuspended",null),Object(r.a)([Object(h.b)({readOnly:!0})],G.prototype,"frustumVisibilitySuspended",null),Object(r.a)([Object(h.b)()],G.prototype,"suspended",null),Object(r.a)([Object(h.b)({readOnly:!0})],G.prototype,"updating",null),Object(r.a)([Object(h.b)()],G.prototype,"loadedGraphics",null),Object(r.a)([Object(h.b)()],G.prototype,"fullOpacity",null),Object(r.a)([Object(h.b)()],G.prototype,"slicePlaneEnabled",null),Object(r.a)([Object(h.b)()],G.prototype,"drapeSourceType",void 0),Object(r.a)([Object(h.b)()],G.prototype,"updatePolicy",null),Object(r.a)([Object(h.b)({constructOnly:!0})],G.prototype,"scaleVisibilityEnabled",void 0),Object(r.a)([Object(h.b)({constructOnly:!0})],G.prototype,"frustumVisibilityEnabled",void 0),Object(r.a)([Object(h.b)()],G.prototype,"initializePromise",void 0),G=Object(r.a)([Object(p.a)("esri.views.3d.layers.graphics.GraphicsProcessor")],G);const N=Object(c.c)()},1652:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return b}));var r=i(0),s=i(28),n=i(509),a=i(2),c=i(1),o=(i(17),i(12),i(10)),l=i(1242);const u=t=>{let e=class extends(Object(n.b)(t)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return Object(r.a)([Object(c.b)()],e.prototype,"graphics",void 0),Object(r.a)([Object(c.b)()],e.prototype,"renderer",void 0),Object(r.a)([Object(c.b)()],e.prototype,"updating",void 0),Object(r.a)([Object(c.b)()],e.prototype,"view",void 0),e=Object(r.a)([Object(o.a)("esri.views.layers.GraphicsView")],e),e};let h=class extends(u(s.a)){constructor(t){super(t),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new p}initialize(){this._set("processor",new l.a({owner:this}))}destroy(){this._set("processor",Object(a.e)(this.processor))}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){var t;return!(null==(t=this.processor)||!t.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(t){return this.processor.getHit(t)}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}graphicChanged(t){this.processor.graphicsCore.graphicUpdateHandler(t)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(t,e){return Object(a.l)(e)?e.clientGraphics:null}highlight(t){return this.processor.highlight(t)}maskOccludee(t){return this.processor.maskOccludee(t)}};Object(r.a)([Object(c.b)({readOnly:!0})],h.prototype,"graphics",null),Object(r.a)([Object(c.b)()],h.prototype,"loadedGraphics",null),Object(r.a)([Object(c.b)({readOnly:!0})],h.prototype,"updating",null),Object(r.a)([Object(c.b)({constructOnly:!0})],h.prototype,"view",void 0),Object(r.a)([Object(c.b)()],h.prototype,"processor",void 0),Object(r.a)([Object(c.b)({type:Boolean})],h.prototype,"slicePlaneEnabled",void 0),Object(r.a)([Object(c.b)()],h.prototype,"layer",void 0),h=Object(r.a)([Object(o.a)("esri.views.3d.layers.GraphicsView3D")],h);class p extends n.a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const b=h}}]);
//# sourceMappingURL=86.94458094.chunk.js.map