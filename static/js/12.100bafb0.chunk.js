(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[12],{1493:function(e,t,i){"use strict";i.r(t),i.d(t,"ElevationQuery",(function(){return v})),i.d(t,"GeometryDescriptor",(function(){return w})),i.d(t,"getFinestLodIndex",(function(){return E}));var n=i(157),s=i(16),l=i(2),o=i(23),a=i(68),r=i(354),c=i(62),u=i(250),h=i(40),p=i(37),f=i(985),m=i(994);class d{constructor(e,t=null){if(this.tile=e,this.zmin=0,this.zmax=0,Object(l.l)(t)&&Object(l.l)(e)){const i=e.extent;this._samplerData=new m.a(t,i),this.zmin=t.minValue,this.zmax=t.maxValue}}sample(e,t){if(Object(l.k)(this._samplerData))return;const{safeWidth:i,width:n,pixelData:s,noDataValue:o,dx:a,dy:r,y1:c,x0:u}=this._samplerData,h=y(r*(c-t),0,i),p=y(a*(e-u),0,i),f=Math.floor(h),m=Math.floor(p),d=f*n+m,T=d+n,v=s[d],w=s[T],g=s[d+1],x=s[T+1];if(v!==o&&w!==o&&g!==o&&x!==o){const e=p-m,t=v+(g-v)*e;return t+(w+(x-w)*e-t)*(h-f)}}}function y(e,t,i){return e<t?t:e>i?i:e}var T=i(911);class v{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.a("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=w.fromGeometry(t);let l=!1;i&&i.returnSampleInfo||(l=!0);const o={...R,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],n,o),r=await this._queryAllContinue(e,a,o);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new s.a("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof w)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new s.a("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...R,...i},l=new _(e,t.spatialReference,n),o=n.signal;return await e.load({signal:o}),await this._createGeometryDescriptor(l,t,o),await this._selectTiles(l,o),await this._populateElevationTiles(l,o),this._sampleGeometryWithElevation(l),this._createQueryResult(l,o)}async createSampler(e,t,i){if(!e)throw new s.a("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.a("elevation-query:invalid-extent","Invalid or undefined extent");const n={...R,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.a("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.a("elevation-query:invalid-extent","Invalid or undefined extent");const n={...R,...i,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,l,n)}async _createSampler(e,t,i,n){const s=i.signal;await e.load({signal:s});const l=t.spatialReference,o=e.tileInfo.spatialReference;l.equals(o)||(await Object(h.g)([{source:l,dest:o}],{signal:s}),t=Object(h.m)(t,o));const a=new b(e,t,i,n);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new f.a(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>Object(p.t)(e.extent))),l=await this._createSampler(e[e.length-1],t,n,s);if(0===l.samplers.length)return i;const o=i.samplers.concat(l.samplers),a=new f.a(o,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)}async _queryAllContinue(e,t,i){const n=e.pop(),s=t.geometry.coordinates,o=t.sampleInfo;Object(l.c)(o);const a=[],r=[];for(let l=0;l<s.length;l++){const t=o[l];t.demResolution>=0?t.source||(t.source=n):e.length&&(a.push(s[l]),r.push(l))}if(!e.length||0===a.length)return t;const c=t.geometry.clone(a),u=await this.query(e[e.length-1],c,i),h=u.sampleInfo;if(!h)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{s[e].z=u.geometry.coordinates[t].z,o[e].demResolution=h[t].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i=await e.geometry.project(e.outSpatialReference,t);Object(l.c)(i);const n={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),n}async _createGeometryDescriptor(e,t,i){let n;const l=e.layer.tileInfo.spatialReference;if(t instanceof w?n=await t.project(l,i):(await Object(h.g)([{source:t.spatialReference,dest:l}],{signal:i}),n=Object(h.m)(t,l)),!n)throw new s.a("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=w.fromGeometry(n)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new s.a("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(Object(l.k)(e.layer.fullExtent))return;const t=new d(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,s=e.y;(n<i.xmin||n>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/Object(a.f)(e.spatialReference);let n=e.lods[0],s=0;for(let l=1;l<e.lods.length;l++){const t=e.lods[l];Math.abs(t.resolution-i)<Math.abs(n.resolution-i)&&(n=t,s=l)}return s}async _selectTilesFinestContiguous(e,t){const i=E(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const l=n.tilemapCache,a=e.getTilesToFetch();try{if(l)await Object(o.u)(Promise.all(a.map((e=>l.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s.a("elevation-query:has-unavailable-tiles")}catch(r){Object(o.p)(r),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),n={},s=e.options.cache,a=e.options.noDataValue,r=i.map((async i=>{if(null==i.id)return;const o=`${e.layer.uid}:${i.id}:${a}`,r=Object(l.l)(s)?s.get(o):null,c=Object(l.l)(r)?r:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:a,signal:t});Object(l.l)(s)&&s.put(o,c),n[i.id]=new d(i,c)}));await Object(o.u)(Object(o.g)(r),t),e.populateElevationTiles(n)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),l={},a=s.map((async e=>{const s=new T.a(null,0,0,0,Object(p.m)()),a=await Object(n.e)(i.fetchAvailabilityUpsample(e.level,e.row,e.col,s,{signal:t}));!1!==a.ok?null!=e.id&&(l[e.id]=s):Object(o.p)(a.error)}));await Object(o.u)(Promise.all(a),t),e.remapTiles(l)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},s=e=>{null!=e.id&&(e.id in n?n[e.id]++:(n[e.id]=1,i++))},l=e=>{if(null==e.id)return;const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(s,l);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(l(n),t.upsampleTile(n)&&(o=!0),s(n))}),l),o););}_selectTilesAutoFinest(e){const t=E(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t()})),n&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);Object(l.l)(e)?n=e:t.elevationTile=null}t.z=n}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=Object(a.f)(t.spatialReference);return e.geometry.coordinates.map((n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}}))}}class w{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new w;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await Object(h.g)([{source:this.spatialReference,dest:e}],{signal:t});const i=new r.a({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=Object(h.m)(i,e);if(!n)return null;const s=this.coordinates.map(((e,t)=>{const i=e.clone(),s=n.points[t];return i.x=s[0],i.y=s[1],i})),l=this.clone(s);return l.spatialReference=e,l}static fromGeometry(e){const t=new w;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof w)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[new g(i.x,i.y,i.z,i.m)]:n?[new g(i.x,i.y,i.z)]:s?[new g(i.x,i.y,null,i.m)]:[new g(i.x,i.y)],t._exporter=(t,i)=>e.hasM?new c.a(t[0].x,t[0].y,t[0].z,t[0].m,i):new c.a(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map((e=>new g(e[0],e[1],e[2],e[3]))):n?i.points.map((e=>new g(e[0],e[1],e[2]))):s?i.points.map((e=>new g(e[0],e[1],null,e[2]))):i.points.map((e=>new g(e[0],e[1]))),t._exporter=(t,i)=>e.hasM?new r.a({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new r.a(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,n=[],s=[],{hasZ:l,hasM:o}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,l&&o)for(const t of e)n.push(new g(t[0],t[1],t[2],t[3]));else if(l)for(const t of e)n.push(new g(t[0],t[1],t[2]));else if(o)for(const t of e)n.push(new g(t[0],t[1],null,t[2]));else for(const t of e)n.push(new g(t[0],t[1]));t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=s.map((e=>n.slice(e[0],e[1])));return new u.a({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class g{constructor(e,t,i=null,n=null,s=null,l=null){this.x=e,this.y=t,this.z=i,this.m=n,this.tile=s,this.elevationTile=l}clone(){return new g(this.x,this.y,this.z,this.m)}}class x{constructor(e,t){this.layer=e,this.options=t}}class _ extends x{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>{e.tile=null}));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const i of this.geometry.coordinates){var t;!i.elevationTile&&(null==(t=i.tile)?void 0:t.id)&&(i.elevationTile=e[i.tile.id])}}remapTiles(e){for(const i of this.geometry.coordinates){var t;const n=null==(t=i.tile)?void 0:t.id;i.tile=n?e[n]:null}}getTilesToFetch(){const e={},t=[];for(const n of this.geometry.coordinates){var i;const s=n.tile;if(!s)continue;const l=null==(i=n.tile)?void 0:i.id;n.elevationTile||!l||e[l]||(e[l]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))}}class b extends x{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(Object(l.k)(i))return-1;for(let n=t.lods.length-1;n>=0;n--){const s=t.lods[n],l=s.resolution*t.size[0],o=s.resolution*t.size[1];if(Math.ceil(i.width/l)*Math.ceil(i.height/o)<=e)return n}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach((i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this._candidateTiles.push(i)})),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const l of e){const e=l.id;e&&!i[e]?(i[e]=l,n.push(l)):t&&t(l)}const s=n.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let n=0;n<i;n++){const i=s[n].extent;if(i&&e.extent&&Object(p.g)(i,e.extent))return t&&t(e),!1}return!0}))}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(Object(l.k)(t))return;const i=this.layer.tileInfo,n=i.lods[e],s=i.tileAt(n.level,t.xmin,t.ymin),o=s.extent;if(Object(l.k)(o))return;const a=n.resolution*i.size[0],r=n.resolution*i.size[1],c=Math.ceil((t.xmax-o[0])/a),u=Math.ceil((t.ymax-o[1])/r);for(let l=0;l<u;l++)for(let e=0;e<c;e++){const t=new T.a(null,s.level,s.row-l,s.col+e);i.updateTileInfo(t),this._tileIsMasked(t)||this._candidateTiles.push(t)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&Object(p.g)(t,e.extent)))}}function E(e,t=0){let i=e.lods.length-1;if(t>0){const n=t/Object(a.f)(e.spatialReference),s=e.lods.findIndex((e=>e.resolution<n));0===s?i=0:s>0&&(i=s-1)}return i}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);
//# sourceMappingURL=12.100bafb0.chunk.js.map