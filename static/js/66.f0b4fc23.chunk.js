(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[66],{1108:function(t,e,r){"use strict";function n(t){return t&&"getAtOrigin"in t&&"originOf"in t}r.d(e,"a",(function(){return n}))},1114:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(1108),i=r(44),s=r(901),o=r(356),a=r(103),l=r(1);function c(t){return u[function(t){return t instanceof Blob?t.type:function(t){const e=Object(i.p)(t);return j[e]||b}(t.url)}(t)]||p}const u={},b="text/plain",p=u[b],j={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const h in j)u[j[h]]=h;var O=r(199);function d(t){var e;const r=null!=(e=null==t?void 0:t.origins)?e:[void 0];return(e,s)=>{const u=function(t,e,r){var s;if("resource"===(null==t?void 0:t.type))return function(t,e,r){const s=Object(o.b)(e,r);return{type:String,read:(t,e,r)=>{const n=Object(O.g)(t,e,r);return s.type===String?n:"function"==typeof s.type?new s.type({url:n}):void 0},write:{writer(e,o,l,u){if(!u||!u.resources)return"string"==typeof e?void(o[l]=Object(O.h)(e,u)):void(o[l]=e.write({},u));const b=function(t){return null==t?null:"string"==typeof t?t:t.url}(e),p=Object(O.h)(b,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},O.a.NO),j=s.type!==String&&(!Object(n.a)(this)||u&&u.origin&&this.originIdOf(r)>Object(a.e)(u.origin)),d={object:this,propertyName:r,value:e,targetUrl:p,dest:o,targetPropertyName:l,context:u,params:t};u&&u.portalItem&&p&&!Object(i.u)(p)?j?function(t){var e;const{context:r,targetUrl:n,params:s,value:o,dest:a,targetPropertyName:l}=t;if(!r.portalItem)return;const u=r.portalItem.resourceFromPath(n),b=g(o,n,r),p=c(b),j=Object(i.p)(u.path),O=null!=(e=null==s?void 0:s.compress)&&e;p===j?(r.resources&&f({...t,resource:u,content:b,compress:O,updates:r.resources.toUpdate}),a[l]=n):y(t)}(d):function({context:t,targetUrl:e,dest:r,targetPropertyName:n}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(e),compress:!1}),r[n]=e)}(d):u&&u.portalItem&&(null==p||null!=Object(O.e)(p)||Object(i.v)(p)||j)?y(d):o[l]=p}}}}(t,e,r);switch(null!=(s=null==t?void 0:t.type)?s:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:e}=O.b;return{read:t,write:e}}}}(t,e,s);for(const t of r){const r=Object(l.c)(e,t,s);for(const t in u)r[t]=u[t]}}}function y(t){var e,n,o;const{targetUrl:a,params:l,value:u,context:b,dest:p,targetPropertyName:j}=t;if(!b.portalItem)return;const d=Object(O.f)(a),y=null!=(e=null==d?void 0:d.filename)?e:Object(s.a)(),h=null!=(n=null==l?void 0:l.prefix)?n:null==d?void 0:d.prefix,v=g(u,a,b),m=Object(i.B)(h,y),I=`${m}.${c(v)}`,w=b.portalItem.resourceFromPath(I);Object(i.v)(a)&&b.resources&&b.resources.pendingOperations.push(async function(t){const e=(await Promise.resolve().then(r.bind(null,134))).default,{data:n}=await e(t,{responseType:"blob"});return n}(a).then((t=>{w.path=`${m}.${c(t)}`,p[j]=w.itemRelativeUrl})).catch((()=>{})));const x=null!=(o=null==l?void 0:l.compress)&&o;b.resources&&f({...t,resource:w,content:v,compress:x,updates:b.resources.toAdd}),p[j]=w.itemRelativeUrl}function f({object:t,propertyName:e,updates:r,resource:n,content:i,compress:s}){r.push({resource:n,content:i,compress:s,finish:r=>{!function(t,e,r){"string"==typeof t[e]?t[e]=r.url:t[e].url=r.url}(t,e,r)}})}function g(t,e,r){return"string"==typeof t?{url:e}:new Blob([JSON.stringify(t.toJSON(r))],{type:"application/json"})}},1231:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return s}));var n=r(2);function i(t,e){return s(t)===s(e)}function s(t){if(Object(n.k)(t))return null;const e=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${e}-${r}`}const o={json:{write:{writer:function(t,e){var r;Object(n.k)(t)||null==(null==(r=t.layer)?void 0:r.objectIdField)||null==t.attributes||(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(t){if(null!=t.layerId&&null!=t.objectId)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}}}}}},1300:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(0),i=r(1231),s=r(28),o=r(137),a=r(27),l=r(2),c=r(1),u=(r(17),r(12),r(10)),b=r(1114),p=r(62),j=r(727);let O=class extends(Object(a.b)(Object(o.b)(s.a))){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return Object(l.g)(this.position,t.position)&&Object(l.g)(this.elevationInfo,t.elevationInfo)&&Object(i.a)(this.feature,t.feature)}};Object(n.a)([Object(c.b)({type:p.a}),Object(b.a)()],O.prototype,"position",void 0),Object(n.a)([Object(c.b)({type:j.a}),Object(b.a)()],O.prototype,"elevationInfo",void 0),Object(n.a)([Object(c.b)(i.b)],O.prototype,"feature",void 0),O=Object(n.a)([Object(u.a)("esri.analysis.LineOfSightAnalysisObserver")],O);const d=O},1301:function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var n=r(0),i=r(1231),s=r(137),o=r(27),a=r(2),l=r(1),c=(r(17),r(12),r(10)),u=r(1114),b=r(62),p=r(727);let j=class extends(Object(o.b)(s.a)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return Object(a.g)(this.position,t.position)&&Object(a.g)(this.elevationInfo,t.elevationInfo)&&Object(i.a)(this.feature,t.feature)}};Object(n.a)([Object(l.b)({type:b.a}),Object(u.a)()],j.prototype,"position",void 0),Object(n.a)([Object(l.b)({type:p.a}),Object(u.a)()],j.prototype,"elevationInfo",void 0),Object(n.a)([Object(l.b)(i.b)],j.prototype,"feature",void 0),j=Object(n.a)([Object(c.a)("esri.analysis.LineOfSightAnalysisTarget")],j);const O=j},1382:function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));var n=r(0),i=r(28),s=r(137),o=r(509),a=r(27),l=r(2),c=r(1),u=(r(17),r(12),r(10));let b=0,p=class extends(Object(a.b)(Object(s.b)(Object(o.b)(i.a)))){constructor(t){super(t),this.id=`${Date.now().toString(16)}-analysis-${b++}`,this.title=null}get parent(){return this._get("parent")}set parent(t){const e=this.parent;if(Object(l.l)(e))switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}get isEditable(){return this.requiredPropertiesForEditing.every(l.l)}};Object(n.a)([Object(c.b)({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),Object(n.a)([Object(c.b)({type:String})],p.prototype,"title",void 0),Object(n.a)([Object(c.b)({constructOnly:!0})],p.prototype,"type",void 0),Object(n.a)([Object(c.b)({clonable:!1,value:null})],p.prototype,"parent",null),Object(n.a)([Object(c.b)({readOnly:!0})],p.prototype,"isEditable",null),Object(n.a)([Object(c.b)({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",void 0),p=Object(n.a)([Object(u.a)("esri.analysis.Analysis")],p);const j=p},1424:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return x}));var n=r(0),i=r(1382),s=r(1300),o=r(1301),a=r(59),l=r(339),c=r(2),u=r(13),b=r(1),p=(r(17),r(12),r(10)),j=r(40),O=r(39),d=r(127);const y=a.a.ofType(o.a);let f=class extends i.a{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(Object(u.f)((()=>this._computeExtent()),(t=>{(Object(c.k)(t)||Object(c.k)(t.pending))&&this._set("extent",Object(c.l)(t)?t.extent:null)}),u.e))}get targets(){return this._get("targets")||new y}set targets(t){this._set("targets",Object(l.b)(t,this.targets,y))}get spatialReference(){return Object(c.l)(this.observer)&&Object(c.l)(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[Object(c.b)(this.observer,(t=>t.position))]}async waitComputeExtent(){const t=this._computeExtent();return Object(c.l)(t)?Object(c.t)(t.pending):null}_computeExtent(){const t=this.spatialReference;if(Object(c.k)(this.observer)||Object(c.k)(this.observer.position)||Object(c.k)(t))return null;const e=t=>"absolute-height"===Object(d.i)(t.position,t.elevationInfo),r=this.observer.position,n=Object(O.s)(r.x,r.y,r.z,r.x,r.y,r.z);for(const s of this.targets)if(Object(c.l)(s.position)){const e=Object(j.s)(s.position,t);if(Object(c.l)(e.pending))return{pending:e.pending,extent:null};if(Object(c.l)(e.geometry)){const{x:t,y:r,z:i}=e.geometry;Object(O.q)(n,[t,r,i])}}const i=Object(O.E)(n,t);return e(this.observer)&&this.targets.every(e)||(i.zmin=null,i.zmax=null),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};Object(n.a)([Object(b.b)({type:["line-of-sight"]})],f.prototype,"type",void 0),Object(n.a)([Object(b.b)({type:s.a,json:{read:!0,write:!0}})],f.prototype,"observer",void 0),Object(n.a)([Object(b.b)({cast:l.a,type:y,nonNullable:!0,json:{read:!0,write:!0}})],f.prototype,"targets",null),Object(n.a)([Object(b.b)({value:null,readOnly:!0})],f.prototype,"extent",void 0),Object(n.a)([Object(b.b)({readOnly:!0})],f.prototype,"spatialReference",null),Object(n.a)([Object(b.b)({readOnly:!0})],f.prototype,"requiredPropertiesForEditing",null),f=Object(n.a)([Object(p.a)("esri.analysis.LineOfSightAnalysis")],f);const g=f;var h=r(721),v=r(423),m=r(722);const I=a.a.ofType(o.a);let w=class extends(Object(m.a)(Object(h.a)(v.a))){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new g,this.opacity=1}initialize(){this.addHandles(Object(u.f)((()=>this.analysis),((t,e)=>{Object(c.l)(e)&&e.parent===this&&(e.parent=null),Object(c.l)(t)&&(t.parent=this)}),u.e))}async load(){return Object(c.l)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return Object(c.b)(this.analysis,(t=>t.observer))}set observer(t){Object(c.b)(this.analysis,(e=>e.observer=t))}get targets(){return Object(c.l)(this.analysis)?this.analysis.targets:new a.a}set targets(t){var e;Object(l.b)(t,null==(e=this.analysis)?void 0:e.targets)}get fullExtent(){return Object(c.l)(this.analysis)?this.analysis.extent:null}get spatialReference(){return Object(c.l)(this.analysis)?Object(c.t)(this.analysis.spatialReference):null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new g)}};Object(n.a)([Object(b.b)({json:{read:!1},readOnly:!0})],w.prototype,"type",void 0),Object(n.a)([Object(b.b)({type:["LineOfSightLayer"]})],w.prototype,"operationalLayerType",void 0),Object(n.a)([Object(b.b)({type:s.a,json:{read:!0,write:{ignoreOrigin:!0}}})],w.prototype,"observer",null),Object(n.a)([Object(b.b)({type:I,json:{read:!0,write:{ignoreOrigin:!0}}})],w.prototype,"targets",null),Object(n.a)([Object(b.b)({nonNullable:!0,json:{read:!1,write:!1}})],w.prototype,"analysis",void 0),Object(n.a)([Object(b.b)({readOnly:!0})],w.prototype,"fullExtent",null),Object(n.a)([Object(b.b)({readOnly:!0})],w.prototype,"spatialReference",null),Object(n.a)([Object(b.b)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],w.prototype,"opacity",void 0),Object(n.a)([Object(b.b)({type:["show","hide"]})],w.prototype,"listMode",void 0),w=Object(n.a)([Object(p.a)("esri.layers.LineOfSightLayer")],w);const x=w}}]);
//# sourceMappingURL=66.f0b4fc23.chunk.js.map