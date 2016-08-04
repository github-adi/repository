-My build of DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad++ (HTML Editor):
https://sdk.streamrail.com/player/sr.ads.js
-Via Node.js:
if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<
10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(f
unction(t){return e[t]});if("0123456789"!==r.join(""))return!1;var i={};return"a
bcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrs
t"===Object.keys(Object.assign({},i)).join("")}catch(o){return!1}}var i=Object.p
rototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=r()?Ob
ject.assign:function(t,e){for(var r,a,s=n(t),c=1;c<arguments.length;c++){r=Objec
t(arguments[c]);for(var l in r)i.call(r,l)&&(s[l]=r[l]);if(Object.getOwnProperty
Symbols){a=Object.getOwnPropertySymbols(r);for(var u=0;u<a.length;u++)o.call(r,a
[u])&&(s[a[u]]=r[a[u]])}}return s}},function(t,e){function n(){this.xtag.dispatc
hProgressEvents(),this.xtag.player.loadData()}Object.defineProperty(e,"__esModul
e",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e){function n()
{this.xtag.dispatchProgressEvents(),this.xtag.player.loadMetadata()}Object.defin
eProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},func
tion(t,e,n){function r(){var t=this;this.xtag.stopProgressEvents(),this.xtag._pr
ogressIntervalHandler=setInterval(function(){t.xtag.dispatchMediaEvents([i.PROGR
ESS])},100)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var
i=n(17);t.exports=e["default"]},function(t,e){function n(){clearInterval(this.xt
ag._progressIntervalHandler),this.xtag._progressIntervalHandler=null}Object.defi
neProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},fun
ction(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}}function i(){v
ar t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];(0,a["default"])
(this,"sr-video--no-poster"),this.xtag.player&&this.xtag.player.play(t)}Object.d
efineProperty(e,"__esModule",{value:!0}),e["default"]=i;var o=n(68),a=r(o);t.exp
orts=e["default"]},function(t,e,n){function r(){var t=void 0;return t=this.xtag.
player?this.xtag.player.load():(0,i.resolve)()}Object.defineProperty(e,"__esModu
le",{value:!0}),e["default"]=r;var i=n(41);t.exports=e["default"]},function(t,e)
{function n(){this.xtag.player&&(this.xtag.player.dispose(),this.xtag.player=nul
l,this.xtag.Player=null)}Object.defineProperty(e,"__esModule",{value:!0}),e["def
ault"]=n,t.exports=e["default"]},function(t,e,n){function r(){var t=this,e=argum
ents.length<=0||void 0===arguments[0]?[]:arguments[0],n=!(arguments.length<=1||v
oid 0===arguments[1])&&arguments[1];(n||this.xtag._wasInserted)&&e.forEach(funct
ion(e){var n=new CustomEvent(e);t.dispatchEvent(n),(0,i.log)("Dispatched "+e,"sr
-video::tag",t.xtag._logColor)})}Object.defineProperty(e,"__esModule",{value:!0}
),e["default"]=r;var i=n(50);t.exports=e["default"]},function(t,e){function n(){
....... }return e},b._applyFilters=function(){if(this.filters&&0!=this.filters.l
ength&&this.cacheCanvas)for(var t=this.filters.length,e=this.cacheCanvas.getCont
ext("2d"),n=this.cacheCanvas.width,r=this.cacheCanvas.height,i=0;i<t;i++)this.fi
lters[i].applyFilter(e,0,0,n,r)},b._getFilterBounds=function(t){var e,n=this.fil
ters,r=this._rectangle.setValues(0,0,0,0);if(!n||!(e=n.length))return r;for(var
i=0;i<e;i++){var o=this.filters[i];o.getBounds&&o.getBounds(r)}return r},b._getB
ounds=function(t,e){return this._transformBounds(this.getBounds(),t,e)},b._trans
formBounds=function(t,e,n){if(!t)return t;var r=t.x,i=t.y,o=t.width,a=t.height,s
=this._props.matrix;s=n?s.identity():this.getMatrix(s),(r||i)&&s.appendTransform
(0,0,1,1,0,0,0,-r,-i),e&&s.prependMatrix(e);var c=o*s.a,l=o*s.b,u=a*s.c,d=a*s.d,
f=s.tx,p=s.ty,h=f,v=f,y=p,g=p;return(r=c+f)<h?h=r:r>v&&(v=r),(r=c+u+f)<h?h=r:r>v
&&(v=r),(r=u+f)<h?h=r:r>v&&(v=r),(i=l+p)<y?y=i:i>g&&(g=i),(i=l+d+p)<y?y=i:i>g&&(
g=i),(i=d+p)<y?y=i:i>g&&(g=i),t.setValues(h,y,v-h,g-y)},b._hasMouseEventListener
=function(){for(var t=i._MOUSE_EVENTS,e=0,n=t.length;e<n;e++)if(this.hasEventLis
tener(t[e]))return!0;return!!this.cursor},e["default"]=(0,A["default"])(i,"Event
Dispatcher"),t.exports=e["default"]},function(t,e){function n(){throw"UID cannot
 be instantiated"}Object.defineProperty(e,"__esModule",{value:!0}),n._nextID=0,n
.get=function(){return n._nextID++},e["default"]=n,t.exports=e["default"]},funct
ion(t,e){function n(t,e,n,r){this.setValues(t,e,n,r)}Object.defineProperty(e,"__
esModule",{value:!0});var r=n.prototype;r.setValues=function(t,e,n,r){return thi
s.x=t||0,this.y=e||0,this.width=n||0,this.height=r||0,this},r.extend=function(t,
e,n,r){return n=n||0,r=r||0,t+n>this.x+this.width&&(this.width=t+n-this.x),e+r>t
his.y+this.height&&(this.height=e+r-this.y),t<this.x&&(this.width+=this.x-t,this
.x=t),e<this.y&&(this.height+=this.y-e,this.y=e),this},r.pad=function(t,e,n,r){r
eturn this.x-=e,this.y-=t,this.width+=e+r,this.height+=t+n,this},r.copy=function
(t){return this.setValues(t.x,t.y,t.width,t.height)},r.contains=function(t,e,n,r
){return n=n||0,r=r||0,t>=this.x&&t+n<=this.x+this.width&&e>=this.y&&e+r<=this.y
+this.height},r.union=function(t){return this.clone().extend(t.x,t.y,t.width,t.h
eight)},r.intersection=function(t){var e=t.x,r=t.y,i=e+t.width,o=r+t.height;retu
rn this.x>e&&(e=this.x),this.y>r&&(r=this.y),this.x+this.width<i&&(i=this.x+this
.width),this.y+this.height<o&&(o=this.y+this.height),i<=e||o<=r?null:new n(e,r,i
-e,o-r)},r.intersects=function(t){return t.x<=this.x+this.width&&this.x<=t.x+t.w
idth&&t.y<=this.y+this.height&&this.y<=t.y+t.height},r.isEmpty=function(){return
 this.width<=0||this.height<=0},r.clone=function(){return new n(this.x,this.y,th
is.width,this.height)},r.toString=function(){return"[Rectangle (x="+this.x+" y="
+this.y+" width="+this.width+" height="+this.height+")]"},e["default"]=n,t.expor
ts=e["default"]},function(t,e,n){function r(t){return t&&t.__esModule?t:{"defaul
t":t}}function i(t,e,n,r,i){this.setValues(t,e,n,r,i)}Object.defineProperty(e,"_
_esModule",{value:!0});var o=n(89),a=r(o),s=i.prototype;s.setValues=function(t,e
,n,r,i){return this.visible=null==t||!!t,this.alpha=null==e?1:e,this.shadow=n,th
is.compositeOperation=n,this.matrix=i||this.matrix&&this.matrix.identity()||new
a["default"],this},s.append=function(t,e,n,r,i){return this.alpha*=e,this.shadow
=n||this.shadow,this.compositeOperation=r||this.compositeOperation,this.visible=
this.visible&&t,i&&this.matrix.appendMatrix(i),this},s.prepend=function(t,e,n,r,
i){return this.alpha*=e,this.shadow=this.shadow||n,this.compositeOperation=this.
compositeOperation||r,this.visible=this.visible&&t,i&&this.matrix.prependMatrix(
i),this},s.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=t
his.compositeOperation=null,this.matrix.identity(),this},s.clone=function(){retu
rn new i(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix
.clone())},e["default"]=i,t.exports=e["default"]},function(t,e){function n(t,e,n
,r,i,o){this.setValues(t,e,n,r,i,o)}Object.defineProperty(e,"__esModule",{value:
!0});var r=n.prototype;n.DEG_TO_RAD=Math.PI/180,n.identity=null,r.setValues=func
tion(t,e,n,r,i,o){return this.a=null==t?1:t,this.b=e||0,this.c=n||0,this.d=null=
=r?1:r,this.tx=i||0,this.ty=o||0,this},r.append=function(t,e,n,r,i,o){var a=this
.a,s=this.b,c=this.c,l=this.d;return 1==t&&0==e&&0==n&&1==r||(this.a=a*t+c*e,thi
s.b=s*t+l*e,this.c=a*n+c*r,this.d=s*n+l*r),this.tx=a*i+c*o+this.tx,this.ty=s*i+l
*o+this.ty,this},r.prepend=function(t,e,n,r,i,o){var a=this.a,s=this.c,c=this.tx
;return this.a=t*a+n*this.b,this.b=e*a+r*this.b,this.c=t*s+n*this.d,this.d=e*s+r
*this.d,this.tx=t*c+n*this.ty+i,this.ty=e*c+r*this.ty+o,this},r.appendMatrix=fun
ction(t){return this.append(t.a,t.b,t.c,t.d,t.tx,t.ty)},r.prependMatrix=function
(t){return this.prepend(t.a,t.b,t.c,t.d,t.tx,t.ty)},r.appendTransform=function(t
,e,r,i,o,a,s,c,l){if(o%360)var u=o*n.DEG_TO_RAD,d=Math.cos(u),f=Math.sin(u);else
 d=1,f=0;return a||s?(a*=n.DEG_TO_RAD,s*=n.DEG_TO_RAD,this.append(Math.cos(s),Ma
th.sin(s),-Math.sin(a),Math.cos(a),t,e),this.append(d*r,f*r,-f*i,d*i,0,0)):this.
append(d*r,f*r,-f*i,d*i,t,e),(c||l)&&(this.tx-=c*this.a+l*this.c,this.ty-=c*this
.b+l*this.d),this},r.prependTransform=function(t,e,r,i,o,a,s,c,l){if(o%360)var u
=o*n.DEG_TO_RAD,d=Math.cos(u),f=Math.sin(u);else d=1,f=0;return(c||l)&&(this.tx-
=c,this.ty-=l),a||s?(a*=n.DEG_TO_RAD,s*=n.DEG_TO_RAD,this.prepend(d*r,f*r,-f*i,d
*i,0,0),this.prepend(Math.cos(s),Math.sin(s),-Math.sin(a),Math.cos(a),t,e)):this
.prepend(d*r,f*r,-f*i,d*i,t,e),this},r.rotate=function(t){t*=n.DEG_TO_RAD;var e=
Math.cos(t),r=Math.sin(t),i=this.a,o=this.b;return this.a=i*e+this.c*r,this.b=o*
e+this.d*r,this.c=-i*r+this.c*e,this.d=-o*r+this.d*e,this},r.skew=function(t,e){
return t*=n.DEG_TO_RAD,e*=n.DEG_TO_RAD,this.append(Math.cos(e),Math.sin(e),-Math
.sin(t),Math.cos(t),0,0),this},r.scale=function(t,e){return this.a*=t,this.b*=t,
this.c*=e,this.d*=e,this},r.translate=function(t,e){return this.tx+=this.a*t+thi
s.c*e,this.ty+=this.b*t+this.d*e,this},r.identity=function(){return this.a=this.
d=1,this.b=this.c=this.tx=this.ty=0,this},r.invert=function(){var t=this.a,e=thi
s.b,n=this.c,r=this.d,i=this.tx,o=t*r-e*n;return this.a=r/o,this.b=-e/o,this.c=-
n/o,this.d=t/o,this.tx=(n*this.ty-r*i)/o,this.ty=-(t*this.ty-e*i)/o,this},r.isId
entity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===t
his.c&&1===this.d},r.equals=function(t){return this.tx===t.tx&&this.ty===t.ty&&t
his.a===t.a&&this.b===t.b&&this.c===t.c&&this.d===t.d},r.transformPoint=function
(t,e,n){return n=n||{},n.x=t*this.a+e*this.c+this.tx,n.y=t*this.b+e*this.d+this.
ty,n},r.decompose=function(t){null==t&&(t={}),t.x=this.tx,t.y=this.ty,t.scaleX=M
ath.sqrt(this.a*this.a+this.b*this.b),t.scaleY=Math.sqrt(this.c*this.c+this.d*th
is.d);var e=Math.atan2(-this.c,this.d),r=Math.atan2(this.b,this.a),i=Math.abs(1-
e/r);return i<1e-5?(t.rotation=r/n.DEG_TO_RAD,this.a<0&&this.d>=0&&(t.rotation+=
t.rotation<=0?180:-180),t.skewX=t.skewY=0):(t.skewX=e/n.DEG_TO_RAD,t.skewY=r/n.D
EG_TO_RAD),t},r.copy=function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty
)},r.clone=function(){return new n(this.a,this.b,this.c,this.d,this.tx,this.ty)}
,r.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+"
d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},n.identity=new n,e["default"]=n,t
.exports=e["default"]},function(t,e){function n(t,e){this.setValues(t,e)}Object.
defineProperty(e,"__esModule",{value:!0});var r=n.prototype;r.setValues=function
(t,e){return this.x=t||0,this.y=e||0,this},r.copy=function(t){return this.x=t.x,
this.y=t.y,this},r.clone=function(){return new n(this.x,this.y)},r.toString=func
tion(){return"[Point (x="+this.x+" y="+this.y+")]"},e["default"]=n,t.exports=e["
default"]},function(t,e){function n(t,e){"use strict";var n=t.prototype,r=Object
.getPrototypeOf&&Object.getPrototypeOf(n)||n.__proto__;if(r){n[(e+="_")+"constru
ctor"]=r.constructor;for(var i in r)n.hasOwnProperty(i)&&"function"==typeof r[i]
&&(n[e+i]=r[i])}return t}Object.defineProperty(e,"__esModule",{value:!0}),e["def
ault"]=n,t.exports=e["default"]},function(t,e){function n(t,e){"use strict";func
tion n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n}Obj
ect.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["defaul
t"]},function(t,e){function n(t,e){for(var n=0,r=t.length;n<r;n++)if(e===t[n])re
turn n;return-1}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,
t.exports=e["default"]},function(t,e,n){function r(t){return t&&t.__esModule?t:{
"default":t}}function i(t,e,n,r,i,o,a,s,c,l,u){this.Event_constructor(t,e,n),thi
s.stageX=r,this.stageY=i,this.rawX=null==c?r:c,this.rawY=null==l?i:l,this.native
Event=o,this.pointerID=a,this.primary=!!s,this.relatedTarget=u}Object.defineProp
erty(e,"__esModule",{value:!0});var o=n(91),a=r(o),s=n(92),c=r(s),l=n(82),u=r(l)
,d=(0,c["default"])(i,u["default"]);d._get_localX=function(){return this.current
Target.globalToLocal(this.rawX,this.rawY).x},d._get_localY=function(){return thi
s.currentTarget.globalToLocal(this.rawX,this.rawY).y},d._get_isTouch=function(){
return this.pointerID!==-1};try{Object.defineProperties(d,{localX:{get:d._get_lo
calX},localY:{get:d._get_localY},isTouch:{get:d._get_isTouch}})}catch(f){}d.clon
e=function(){return new i(this.type,this.bubbles,this.cancelable,this.stageX,thi
s.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},d.to
String=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+"
stageY="+this.stageY+")]"},e["default"]=(0,a["default"])(i,"Event"),t.exports=e[
"default"]},function(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}
}function i(t){this.EventDispatcher_constructor(),this.complete=!0,this.framerat
e=0,this._animations=null,this._frames=null,this._images=null,this._data=null,th
is._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._r
egX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(t)}Object.defi
neProperty(e,"__esModule",{value:!0});var o=n(81),a=r(o),s=n(87),c=r(s),l=n(91),
u=r(l),d=n(92),f=r(d),p=(0,f["default"])(i,a["default"]);p.getAnimations=functio
n(){return this._animations.slice()};try{Object.defineProperties(p,{animations:{
get:p.getAnimations}})}catch(h){}p.getNumFrames=function(t){if(null==t)return th
is._frames?this._frames.length:this._numFrames||0;var e=this._data[t];return nul
l==e?0:e.frames.length},p.getAnimation=function(t){return this._data[t]},p.getFr
ame=function(t){var e;return this._frames&&(e=this._frames[t])?e:null},p.getFram
eBounds=function(t,e){var n=this.getFrame(t);return n?(e||new c["default"]).setV
alues(-n.regX,-n.regY,n.rect.width,n.rect.height):null},p.toString=function(){re
turn"[SpriteSheet]"},p.clone=function(){throw"SpriteSheet cannot be cloned."},p.
_parseData=function(t){var e,n,r,i;if(null!=t){if(this.framerate=t.framerate||0,
t.images&&(n=t.images.length)>0)for(i=this._images=[],e=0;e<n;e++){var o=t.image
s[e];if("string"==typeof o){var a=o;o=document.createElement("img"),o.src=a}i.pu
sh(o),o.getContext||o.complete||(this._loadCount++,this.complete=!1,function(t){
o.onload=function(){t._handleImageLoad()}}(this))}if(null==t.frames);else if(t.f
rames instanceof Array)for(this._frames=[],i=t.frames,e=0,n=i.length;e<n;e++){va
r s=i[e];this._frames.push({image:this._images[s[4]?s[4]:0],rect:new c["default"
](s[0],s[1],s[2],s[3]),regX:s[5]||0,regY:s[6]||0})}else r=t.frames,this._frameWi
dth=r.width,this._frameHeight=r.height,this._regX=r.regX||0,this._regY=r.regY||0
,this._spacing=r.spacing||0,this._margin=r.margin||0,this._numFrames=r.count,0==
this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(r=t.anima
tions)){this._data={};var l;for(l in r){var u={name:l},d=r[l];if("number"==typeo
f d)i=u.frames=[d];else if(d instanceof Array)if(1==d.length)u.frames=[d[0]];els
e for(u.speed=d[3],u.next=d[2],i=u.frames=[],e=d[0];e<=d[1];e++)i.push(e);else{u
.speed=d.speed,u.next=d.next;var f=d.frames;i=u.frames="number"==typeof f?[f]:f.
slice(0)}u.next!==!0&&void 0!==u.next||(u.next=l),(u.next===!1||i.length<2&&u.ne
xt==l)&&(u.next=null),u.speed||(u.speed=1),this._animations.push(l),this._data[l
]=u}}}},p._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFram
es(),this.complete=!0,this.dispatchEvent("complete"))},p._calculateFrames=functi
on(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var t=this._numFrame
s||1e5,e=0,n=this._frameWidth,r=this._frameHeight,i=this._spacing,o=this._margin
;t:for(var a=0,s=this._images;a<s.length;a++)for(var l=s[a],u=l.width,d=l.height
,f=o;f<=d-o-r;){for(var p=o;p<=u-o-n;){if(e>=t)break t;e++,this._frames.push({im
age:l,rect:new c["default"](p,f,n,r),regX:this._regX,regY:this._regY}),p+=n+i}f+
=r+i}this._numFrames=e}},e["default"]=(0,u["default"])(i,"EventDispatcher"),t.ex
ports=e["default"]},function(t,e,n){function r(t){return t&&t.__esModule?t:{"def
ault":t}}function i(t,e){this.DisplayObject_constructor(),this.currentFrame=0,th
is.currentAnimation=null,this.paused=!0,this.spriteSheet=t,this.currentAnimation
Frame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skip
Advance=!1,null!=e&&this.gotoAndPlay(e)}Object.defineProperty(e,"__esModule",{va
lue:!0});var o=n(91),a=r(o),s=n(92),c=r(s),l=n(85),u=r(l),d=n(82),f=r(d),p=(0,c[
"default"])(i,u["default"]);p.initialize=i,p.isVisible=function(){var t=this.cac
heCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this
.scaleX&&0!=this.scaleY&&t)},p.draw=function(t,e){if(this.DisplayObject_draw(t,e
))return!0;this._normalizeFrame();var n=this.spriteSheet.getFrame(0|this._curren
tFrame);if(!n)return!1;var r=n.rect;return r.width&&r.height&&t.drawImage(n.imag
e,r.x,r.y,r.width,r.height,-n.regX,-n.regY,r.width,r.height),!0},p.play=function
(){this.paused=!1},p.stop=function(){this.paused=!0},p.gotoAndPlay=function(t){t
his.paused=!1,this._skipAdvance=!0,this._goto(t)},p.gotoAndStop=function(t){this
.paused=!0,this._goto(t)},p.advance=function(t){var e=this.framerate||this.sprit
eSheet.framerate,n=e&&null!=t?t/(1e3/e):1;this._normalizeFrame(n)},p.getBounds=f
unction(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds
(this.currentFrame,this._rectangle)},p.clone=function(){return this._cloneProps(
new i(this.spriteSheet))},p.toString=function(){return"[Sprite (name="+this.name
+")]"},p._cloneProps=function(t){return this.DisplayObject__cloneProps(t),t.curr
entFrame=this.currentFrame,t.currentAnimation=this.currentAnimation,t.paused=thi
s.paused,t.currentAnimationFrame=this.currentAnimationFrame,t.framerate=this.fra
merate,t._animation=this._animation,t._currentFrame=this._currentFrame,t._skipAd
vance=this._skipAdvance,t},p._tick=function(t){this.paused||(this._skipAdvance||
this.advance(t&&t.delta),this._skipAdvance=!1),this.DisplayObject__tick(t)},p._n
ormalizeFrame=function(t){t=t||0;var e,n=this._animation,r=this.paused,i=this._c
urrentFrame;if(n){var o=n.speed||1,a=this.currentAnimationFrame;if(e=n.frames.le
ngth,a+t*o>=e){var s=n.next;if(this._dispatchAnimationEnd(n,i,r,s,e-1))return;if
(s)return this._goto(s,t-(e-a)/o);this.paused=!0,a=n.frames.length-1}else a+=t*o
;this.currentAnimationFrame=a,this._currentFrame=n.frames[0|a]}else if(i=this._c
urrentFrame+=t,e=this.spriteSheet.getNumFrames(),i>=e&&e>0&&!this._dispatchAnima
tionEnd(n,i,r,e-1)&&(this._currentFrame-=e)>=e)return this._normalizeFrame();i=0
|this._currentFrame,this.currentFrame!=i&&(this.currentFrame=i,this.dispatchEven
t("change"))},p._dispatchAnimationEnd=function(t,e,n,r,i){var o=t?t.name:null;if
(this.hasEventListener("animationend")){var a=new f["default"]("animationend");a
.name=o,a.next=r,this.dispatchEvent(a)}var s=this._animation!=t||this._currentFr
ame!=e;return s||n||!this.paused||(this.currentAnimationFrame=i,s=!0),s},p._goto
=function(t,e){if(this.currentAnimationFrame=0,isNaN(t)){var n=this.spriteSheet.
getAnimation(t);n&&(this._animation=n,this.currentAnimation=t,this._normalizeFra
me(e))}else this.currentAnimation=this._animation=null,this._currentFrame=t,this
._normalizeFrame()},e["default"]=(0,a["default"])(i,"DisplayObject"),t.exports=e
["default"]},function(t,e){"use strict";function n(t){if(null===t||void 0===t)th
row new TypeError("Object.assign cannot be called with null or undefined");retur
n Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");
if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<
10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(f
unction(t){return e[t]});if("0123456789"!==r.join(""))return!1;var i={};return"a
bcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrs
t"===Object.keys(Object.assign({},i)).join("")}catch(o){return!1}}var i=Object.p
rototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=r()?Ob
ject.assign:function(t,e){for(var r,a,s=n(t),c=1;c<arguments.length;c++){r=Objec
t(arguments[c]);for(var l in r)i.call(r,l)&&(s[l]=r[l]);if(Object.getOwnProperty
Symbols){a=Object.getOwnPropertySymbols(r);for(var u=0;u<a.length;u++)o.call(r,a
[u])&&(s[a[u]]=r[a[u]])}}return s}},function(t,e){function n(){this.xtag.dispatc
hProgressEvents(),this.xtag.player.loadData()}Object.defineProperty(e,"__esModul
e",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e){function n()
{this.xtag.dispatchProgressEvents(),this.xtag.player.loadMetadata()}Object.defin
eProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},func
tion(t,e,n){function r(){var t=this;this.xtag.stopProgressEvents(),this.xtag._pr
ogressIntervalHandler=setInterval(function(){t.xtag.dispatchMediaEvents([i.PROGR
ESS])},100)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var
i=n(17);t.exports=e["default"]},function(t,e){function n(){clearInterval(this.xt
ag._progressIntervalHandler),this.xtag._progressIntervalHandler=null}Object.defi
neProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},fun
ction(t,e,n){function r(t){return t&&t.__esModule?t:{"default":t}}function i(){v
ar t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];(0,a["default"])
(this,"sr-video--no-poster"),this.xtag.player&&this.xtag.player.play(t)}Object.d
efineProperty(e,"__esModule",{value:!0}),e["default"]=i;var o=n(68),a=r(o);t.exp
orts=e["default"]},function(t,e,n){function r(){var t=void 0;return t=this.xtag.
player?this.xtag.player.load():(0,i.resolve)()}Object.defineProperty(e,"__esModu
le",{value:!0}),e["default"]=r;var i=n(41);t.exports=e["default"]},function(t,e)
{function n(){this.xtag.player&&(this.xtag.player.dispose(),this.xtag.player=nul
l,this.xtag.Player=null)}Object.defineProperty(e,"__esModule",{value:!0}),e["def
ault"]=n,t.exports=e["default"]},function(t,e,n){function r(){var t=this,e=argum
ents.length<=0||void 0===arguments[0]?[]:arguments[0],n=!(arguments.length<=1||v
oid 0===arguments[1])&&arguments[1];(n||this.xtag._wasInserted)&&e.forEach(funct
ion(e){var n=new CustomEvent(e);t.dispatchEvent(n),(0,i.log)("Dispatched "+e,"sr
-video::tag",t.xtag._logColor)})}Object.defineProperty(e,"__esModule",{value:!0}
),e["default"]=r;var i=n(50);t.exports=e["default"]},function(t,e){function n(){
window.addEventListener("resize",this.xtag.onResize)}Object.defineProperty(e,"__
esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e){funct
ion n(){window.removeEventListener("resize",this.xtag.onResize)}Object.definePro
perty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},function
(t,e,n){function r(){this.xtag.player&&this.xtag.player.resize(),this.xtag.dispa
tchMediaEvents([i.RESIZE])}Object.defineProperty(e,"__esModule",{value:!0}),e["d
efault"]=r;var i=n(17);t.exports=e["default"]},function(t,e){Object.defineProper
ty(e,"__esModule",{value:!0});e.NETWORK_EMPTY=window.HTMLMediaElement.NETWORK_EM
PTY||0,e.NETWORK_IDLE=window.HTMLMediaElement.NETWORK_IDLE||1,e.NETWORK_LOADING=
window.HTMLMediaElement.NETWORK_LOADING||2,e.NETWORK_NO_SOURCE=window.HTMLMediaE
lement.NETWORK_NO_SOURCE||3},function(t,e){Object.defineProperty(e,"__esModule",
{value:!0});e.CREATED="created",e.INSERTED="inserted",e.REMOVED="removed",e.ATTR
IBUTECHANGES="attributechanges"},function(t,e){function n(t,e){t&&(t.classList?t
.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.spli
t(" ").join("|")+"(\\b|$)","gi")," "))}Object.defineProperty(e,"__esModule",{val
ue:!0}),e["default"]=n,t.exports=e["default"]},function(t,e){function n(t,e){r&&
Object.defineProperty(t,"tagName",{get:function(){return e}})}Object.definePrope
rty(e,"__esModule",{value:!0}),e["default"]=n;var r=!1,i=document.createElement(
"div");try{Object.defineProperty(i,"tagName",{get:function(){return"VIDEO"}}),r=
"VIDEO"===i.tagName}catch(o){r=!1}t.exports=e["default"]},function(t,e,n){functi
on r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModu
le",{value:!0});var i=n(114),o=r(i),a=n(115),s=r(a),c=n(116),l=r(c),u=n(117),d=r
(u),f=n(119),p=r(f);e["default"]={play:o["default"],pause:s["default"],load:l["d
efault"],canPlayType:d["default"],canPlaySrc:p["default"]},t.exports=e["default"
]},function(t,e,n){function r(){var t=this,e=arguments.length<=0||void 0===argum
ents[0]?{}:arguments[0];if
