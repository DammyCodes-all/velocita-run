(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))A(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&A(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function A(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jr="160",Dc=0,Eo=1,Ic=2,Ml=1,Sl=2,OA=3,oi=0,Ke=1,TA=2,HA=0,$i=1,kA=2,Mo=3,So=4,Uc=5,_i=100,Lc=101,Nc=102,yo=103,bo=104,Fc=200,Vc=201,Oc=202,qc=203,Fr=204,Vr=205,Hc=206,Qc=207,kc=208,zc=209,Gc=210,Wc=211,Kc=212,Yc=213,Xc=214,Jc=0,jc=1,Zc=2,gs=3,$c=4,th=5,eh=6,Ah=7,yl=0,ih=1,nh=2,ni=0,sh=1,rh=2,oh=3,bl=4,ah=5,lh=6,Tl=300,An=301,nn=302,Or=303,qr=304,Ts=306,sn=1e3,vA=1001,Hr=1002,Ge=1003,To=1004,qs=1005,lA=1006,ch=1007,Dn=1008,si=1009,hh=1010,uh=1011,Zr=1012,Cl=1013,Ai=1014,ii=1015,QA=1016,Bl=1017,Rl=1018,Ei=1020,dh=1021,_A=1023,fh=1024,ph=1025,Mi=1026,rn=1027,mh=1028,Pl=1029,gh=1030,Dl=1031,Il=1033,Hs=33776,Qs=33777,ks=33778,zs=33779,Co=35840,Bo=35841,Ro=35842,Po=35843,Ul=36196,Do=37492,Io=37496,Uo=37808,Lo=37809,No=37810,Fo=37811,Vo=37812,Oo=37813,qo=37814,Ho=37815,Qo=37816,ko=37817,zo=37818,Go=37819,Wo=37820,Ko=37821,Gs=36492,Yo=36494,Xo=36495,vh=36283,Jo=36284,jo=36285,Zo=36286,Ll=3e3,Si=3001,_h=3200,xh=3201,Nl=0,wh=1,cA="",pe="srgb",zA="srgb-linear",$r="display-p3",Cs="display-p3-linear",vs="linear",le="srgb",_s="rec709",xs="p3",Ci=7680,$o=519,Eh=512,Mh=513,Sh=514,Fl=515,yh=516,bh=517,Th=518,Ch=519,ta=35044,ai=35048,ea="300 es",Qr=1035,qA=2e3,ws=2001;class cn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[t]===void 0&&(A[t]=[]),A[t].indexOf(e)===-1&&A[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const A=this._listeners;return A[t]!==void 0&&A[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const A=this._listeners[t.type];if(A!==void 0){t.target=this;const i=A.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,kr=180/Math.PI;function In(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[A&255]+Le[A>>8&255]+Le[A>>16&255]+Le[A>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function Bh(n,t){return(n%t+t)%t}function Ks(n,t,e){return(1-e)*n+e*t}function Aa(n){return(n&n-1)===0&&n!==0}function zr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,A=this.y,i=t.elements;return this.x=i[0]*e+i[3]*A+i[6],this.y=i[1]*e+i[4]*A+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(t,Math.min(e,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(De(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y;return e*e+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const A=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*A-r*i+t.x,this.y=s*i+r*A+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,A,i,s,r,o,a,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,A,i,s,r,o,a,l)}set(t,e,A,i,s,r,o,a,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=e,c[4]=s,c[5]=a,c[6]=A,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],this}extractBasis(t,e,A){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,s=this.elements,r=A[0],o=A[3],a=A[6],l=A[1],c=A[4],h=A[7],u=A[2],f=A[5],m=A[8],v=i[0],p=i[3],d=i[6],g=i[1],_=i[4],E=i[7],R=i[2],b=i[5],T=i[8];return s[0]=r*v+o*g+a*R,s[3]=r*p+o*_+a*b,s[6]=r*d+o*E+a*T,s[1]=l*v+c*g+h*R,s[4]=l*p+c*_+h*b,s[7]=l*d+c*E+h*T,s[2]=u*v+f*g+m*R,s[5]=u*p+f*_+m*b,s[8]=u*d+f*E+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],c=t[8];return e*r*c-e*o*l-A*s*c+A*o*a+i*s*l-i*r*a}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],c=t[8],h=c*r-o*l,u=o*a-c*s,f=l*s-r*a,m=e*h+A*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=h*v,t[1]=(i*l-c*A)*v,t[2]=(o*A-i*r)*v,t[3]=u*v,t[4]=(c*e-i*a)*v,t[5]=(i*s-o*e)*v,t[6]=f*v,t[7]=(A*a-l*e)*v,t[8]=(r*e-A*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,A,i,s,r,o){const a=Math.cos(s),l=Math.sin(s);return this.set(A*a,A*l,-A*(a*r+l*o)+r+t,-i*l,i*a,-i*(-l*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,A,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<9;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<9;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new kt;function Vl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rh(){const n=Es("canvas");return n.style.display="block",n}const ia={};function Bn(n){n in ia||(ia[n]=!0,console.warn(n))}const na=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sa=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vn={[zA]:{transfer:vs,primaries:_s,toReference:n=>n,fromReference:n=>n},[pe]:{transfer:le,primaries:_s,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cs]:{transfer:vs,primaries:xs,toReference:n=>n.applyMatrix3(sa),fromReference:n=>n.applyMatrix3(na)},[$r]:{transfer:le,primaries:xs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sa),fromReference:n=>n.applyMatrix3(na).convertLinearToSRGB()}},Ph=new Set([zA,Cs]),ie={enabled:!0,_workingColorSpace:zA,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ph.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const A=Vn[t].toReference,i=Vn[e].fromReference;return i(A(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Vn[n].primaries},getTransfer:function(n){return n===cA?vs:Vn[n].transfer}};function tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class Ol{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Es("canvas")),Bi.width=t.width,Bi.height=t.height;const A=Bi.getContext("2d");t instanceof ImageData?A.putImageData(t,0,0):A.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const A=e.getContext("2d");A.drawImage(t,0,0,t.width,t.height);const i=A.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=tn(s[r]/255)*255;return A.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let A=0;A<e.length;A++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[A]=Math.floor(tn(e[A]/255)*255):e[A]=tn(e[A]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dh=0;class ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=In(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Js(i[r].image)):s.push(Js(i[r]))}else s=Js(i);A.url=s}return e||(t.images[this.uuid]=A),A}}function Js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class Je extends cn{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,A=vA,i=vA,s=lA,r=Dn,o=_A,a=si,l=Je.DEFAULT_ANISOTROPY,c=cA){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=In(),this.name="",this.source=new ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Si?pe:cA),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const A={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),e||(t.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sn:t.x=t.x-Math.floor(t.x);break;case vA:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sn:t.y=t.y-Math.floor(t.y);break;case vA:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Si:Ll}set encoding(t){Bn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Si?pe:cA}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Tl;Je.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,A=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=A,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,A,i){return this.x=t,this.y=e,this.z=A,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*A+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*A+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*A+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*A+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,A,i,s;const a=t.elements,l=a[0],c=a[4],h=a[8],u=a[1],f=a[5],m=a[9],v=a[2],p=a[6],d=a[10];if(Math.abs(c-u)<.01&&Math.abs(h-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+v)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,E=(f+1)/2,R=(d+1)/2,b=(c+u)/4,T=(h+v)/4,V=(m+p)/4;return _>E&&_>R?_<.01?(A=0,i=.707106781,s=.707106781):(A=Math.sqrt(_),i=b/A,s=T/A):E>R?E<.01?(A=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),A=b/i,s=V/i):R<.01?(A=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),A=T/s,i=V/s),this.set(A,i,s,e),this}let g=Math.sqrt((p-m)*(p-m)+(h-v)*(h-v)+(u-c)*(u-c));return Math.abs(g)<.001&&(g=1),this.x=(p-m)/g,this.y=(h-v)/g,this.z=(u-c)/g,this.w=Math.acos((l+f+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(t,Math.min(e,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this.w=t.w+(e.w-t.w)*A,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends cn{constructor(t=1,e=1,A={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};A.encoding!==void 0&&(Bn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),A.colorSpace=A.encoding===Si?pe:cA),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lA,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},A),this.texture=new Je(i,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=A.generateMipmaps,this.texture.internalFormat=A.internalFormat,this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.depthTexture=A.depthTexture,this.samples=A.samples}setSize(t,e,A=1){(this.width!==t||this.height!==e||this.depth!==A)&&(this.width=t,this.height=e,this.depth=A,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=A,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ql(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class EA extends Uh{constructor(t=1,e=1,A={}){super(t,e,A),this.isWebGLRenderTarget=!0}}class Hl extends Je{constructor(t=null,e=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends Je{constructor(t=null,e=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MA{constructor(t=0,e=0,A=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=A,this._w=i}static slerpFlat(t,e,A,i,s,r,o){let a=A[i+0],l=A[i+1],c=A[i+2],h=A[i+3];const u=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(o===0){t[e+0]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(h!==v||a!==u||l!==f||c!==m){let p=1-o;const d=a*u+l*f+c*m+h*v,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const R=Math.sqrt(_),b=Math.atan2(R,d*g);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R}const E=o*g;if(a=a*p+u*E,l=l*p+f*E,c=c*p+m*E,h=h*p+v*E,p===1-o){const R=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=R,l*=R,c*=R,h*=R}}t[e]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,A,i,s,r){const o=A[i],a=A[i+1],l=A[i+2],c=A[i+3],h=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return t[e]=o*m+c*h+a*f-l*u,t[e+1]=a*m+c*u+l*h-o*f,t[e+2]=l*m+c*f+o*u-a*h,t[e+3]=c*m-o*h-a*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,A,i){return this._x=t,this._y=e,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const A=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,a=Math.sin,l=o(A/2),c=o(i/2),h=o(s/2),u=a(A/2),f=a(i/2),m=a(s/2);switch(r){case"XYZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"YXZ":this._x=u*c*h+l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"ZXY":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h-u*f*m;break;case"ZYX":this._x=u*c*h-l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h+u*f*m;break;case"YZX":this._x=u*c*h+l*f*m,this._y=l*f*h+u*c*m,this._z=l*c*m-u*f*h,this._w=l*c*h-u*f*m;break;case"XZY":this._x=u*c*h-l*f*m,this._y=l*f*h-u*c*m,this._z=l*c*m+u*f*h,this._w=l*c*h+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const A=e/2,i=Math.sin(A);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,A=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10],u=A+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-a)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(A>o&&A>h){const f=2*Math.sqrt(1+A-o-h);this._w=(c-a)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-A-h);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(a+c)/f}else{const f=2*Math.sqrt(1+h-A-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let A=t.dot(e)+1;return A<Number.EPSILON?(A=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=A):(this._x=0,this._y=-t.z,this._z=t.y,this._w=A)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=A),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const A=this.angleTo(t);if(A===0)return this;const i=Math.min(1,e/A);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const A=t._x,i=t._y,s=t._z,r=t._w,o=e._x,a=e._y,l=e._z,c=e._w;return this._x=A*c+r*o+i*l-s*a,this._y=i*c+r*a+s*o-A*l,this._z=s*c+r*l+A*a-i*o,this._w=r*c-A*o-i*a-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const A=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+A*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=A,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*A+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=r*h+this._w*u,this._x=A*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,A){return this.copy(t).slerp(e,A)}random(){const t=Math.random(),e=Math.sqrt(1-t),A=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),A*Math.sin(s),A*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,A=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=A}set(t,e,A){return A===void 0&&(A=this.z),this.x=t,this.y=e,this.z=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ra.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,A=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*A+s[6]*i,this.y=s[1]*e+s[4]*A+s[7]*i,this.z=s[2]*e+s[5]*A+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*A+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*A+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*A+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*A+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,A=this.y,i=this.z,s=t.x,r=t.y,o=t.z,a=t.w,l=2*(r*i-o*A),c=2*(o*e-s*i),h=2*(s*A-r*e);return this.x=e+a*l+r*h-o*c,this.y=A+a*c+o*l-s*h,this.z=i+a*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,A=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*A+s[8]*i,this.y=s[1]*e+s[5]*A+s[9]*i,this.z=s[2]*e+s[6]*A+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(t,Math.min(e,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const A=t.x,i=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=i*a-s*o,this.y=s*r-A*a,this.z=A*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const A=t.dot(this)/e;return this.copy(t).multiplyScalar(A)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(De(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y,i=this.z-t.z;return e*e+A*A+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,A){const i=Math.sin(e)*t;return this.x=i*Math.sin(A),this.y=Math.cos(e)*t,this.z=i*Math.cos(A),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,A){return this.x=t*Math.sin(e),this.y=A,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),A=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=A,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,A=Math.sqrt(1-t**2);return this.x=A*Math.cos(e),this.y=A*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new C,ra=new MA;class yi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e+=3)this.expandByPoint(uA.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,A=t.count;e<A;e++)this.expandByPoint(uA.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const A=uA.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(A),this.max.copy(t).add(A),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const A=t.geometry;if(A!==void 0){const s=A.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,uA):uA.fromBufferAttribute(s,r),uA.applyMatrix4(t.matrixWorld),this.expandByPoint(uA);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),On.copy(A.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,uA),uA.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,A;return t.normal.x>0?(e=t.normal.x*this.min.x,A=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,A=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,A+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,A+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,A+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,A+=t.normal.z*this.min.z),e<=-t.constant&&A>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_n),qn.subVectors(this.max,_n),Ri.subVectors(t.a,_n),Pi.subVectors(t.b,_n),Di.subVectors(t.c,_n),KA.subVectors(Pi,Ri),YA.subVectors(Di,Pi),di.subVectors(Ri,Di);let e=[0,-KA.z,KA.y,0,-YA.z,YA.y,0,-di.z,di.y,KA.z,0,-KA.x,YA.z,0,-YA.x,di.z,0,-di.x,-KA.y,KA.x,0,-YA.y,YA.x,0,-di.y,di.x,0];return!Zs(e,Ri,Pi,Di,qn)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,Ri,Pi,Di,qn))?!1:(Hn.crossVectors(KA,YA),e=[Hn.x,Hn.y,Hn.z],Zs(e,Ri,Pi,Di,qn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,uA).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(uA).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(IA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),IA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),IA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),IA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),IA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),IA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),IA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),IA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(IA),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const IA=[new C,new C,new C,new C,new C,new C,new C,new C],uA=new C,On=new yi,Ri=new C,Pi=new C,Di=new C,KA=new C,YA=new C,di=new C,_n=new C,qn=new C,Hn=new C,fi=new C;function Zs(n,t,e,A,i){for(let s=0,r=n.length-3;s<=r;s+=3){fi.fromArray(n,s);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),a=t.dot(fi),l=e.dot(fi),c=A.dot(fi);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return!1}return!0}const Nh=new yi,xn=new C,$s=new C;class hn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const A=this.center;e!==void 0?A.copy(e):Nh.setFromPoints(t).getCenter(A);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,A.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const A=this.center.distanceToSquared(t);return e.copy(t),A>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xn.subVectors(t,this.center);const e=xn.lengthSq();if(e>this.radius*this.radius){const A=Math.sqrt(e),i=(A-this.radius)*.5;this.center.addScaledVector(xn,i/A),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xn.copy(t.center).add($s)),this.expandByPoint(xn.copy(t.center).sub($s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const UA=new C,tr=new C,Qn=new C,XA=new C,er=new C,kn=new C,Ar=new C;class Ql{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,UA)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const A=e.dot(this.direction);return A<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=UA.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(UA.copy(this.origin).addScaledVector(this.direction,e),UA.distanceToSquared(t))}distanceSqToSegment(t,e,A,i){tr.copy(t).add(e).multiplyScalar(.5),Qn.copy(e).sub(t).normalize(),XA.copy(this.origin).sub(tr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Qn),o=XA.dot(this.direction),a=-XA.dot(Qn),l=XA.lengthSq(),c=Math.abs(1-r*r);let h,u,f,m;if(c>0)if(h=r*a-o,u=r*o-a,m=s*c,h>=0)if(u>=-m)if(u<=m){const v=1/c;h*=v,u*=v,f=h*(h+r*u+2*o)+u*(r*h+u+2*a)+l}else u=s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*a)+l;else u=-s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*a)+l;else u<=-m?(h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-a),s),f=-h*h+u*(u+2*a)+l):u<=m?(h=0,u=Math.min(Math.max(-s,-a),s),f=u*(u+2*a)+l):(h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-a),s),f=-h*h+u*(u+2*a)+l);else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),f=-h*h+u*(u+2*a)+l;return A&&A.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(tr).addScaledVector(Qn,u),f}intersectSphere(t,e){UA.subVectors(t.center,this.origin);const A=UA.dot(this.direction),i=UA.dot(UA)-A*A,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=A-r,a=A+r;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(t.normal)+t.constant)/e;return A>=0?A:null}intersectPlane(t,e){const A=this.distanceToPlane(t);return A===null?null:this.at(A,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let A,i,s,r,o,a;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(A=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(A=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(s=(t.min.y-u.y)*c,r=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,r=(t.min.y-u.y)*c),A>r||s>i||((s>A||isNaN(A))&&(A=s),(r<i||isNaN(i))&&(i=r),h>=0?(o=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h),A>a||o>i)||((o>A||A!==A)&&(A=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(A>=0?A:i,e)}intersectsBox(t){return this.intersectBox(t,UA)!==null}intersectTriangle(t,e,A,i,s){er.subVectors(e,t),kn.subVectors(A,t),Ar.crossVectors(er,kn);let r=this.direction.dot(Ar),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;XA.subVectors(this.origin,t);const a=o*this.direction.dot(kn.crossVectors(XA,kn));if(a<0)return null;const l=o*this.direction.dot(er.cross(XA));if(l<0||a+l>r)return null;const c=-o*XA.dot(Ar);return c<0?null:this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,A,i,s,r,o,a,l,c,h,u,f,m,v,p){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,A,i,s,r,o,a,l,c,h,u,f,m,v,p)}set(t,e,A,i,s,r,o,a,l,c,h,u,f,m,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=A,d[12]=i,d[1]=s,d[5]=r,d[9]=o,d[13]=a,d[2]=l,d[6]=c,d[10]=h,d[14]=u,d[3]=f,d[7]=m,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],e[9]=A[9],e[10]=A[10],e[11]=A[11],e[12]=A[12],e[13]=A[13],e[14]=A[14],e[15]=A[15],this}copyPosition(t){const e=this.elements,A=t.elements;return e[12]=A[12],e[13]=A[13],e[14]=A[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,A){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(t,e,A){return this.set(t.x,e.x,A.x,0,t.y,e.y,A.y,0,t.z,e.z,A.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,A=t.elements,i=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),r=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=A[0]*i,e[1]=A[1]*i,e[2]=A[2]*i,e[3]=0,e[4]=A[4]*s,e[5]=A[5]*s,e[6]=A[6]*s,e[7]=0,e[8]=A[8]*r,e[9]=A[9]*r,e[10]=A[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,A=t.x,i=t.y,s=t.z,r=Math.cos(A),o=Math.sin(A),a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*c,f=r*h,m=o*c,v=o*h;e[0]=a*c,e[4]=-a*h,e[8]=l,e[1]=f+m*l,e[5]=u-v*l,e[9]=-o*a,e[2]=v-u*l,e[6]=m+f*l,e[10]=r*a}else if(t.order==="YXZ"){const u=a*c,f=a*h,m=l*c,v=l*h;e[0]=u+v*o,e[4]=m*o-f,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-o,e[2]=f*o-m,e[6]=v+u*o,e[10]=r*a}else if(t.order==="ZXY"){const u=a*c,f=a*h,m=l*c,v=l*h;e[0]=u-v*o,e[4]=-r*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=r*c,e[9]=v-u*o,e[2]=-r*l,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){const u=r*c,f=r*h,m=o*c,v=o*h;e[0]=a*c,e[4]=m*l-f,e[8]=u*l+v,e[1]=a*h,e[5]=v*l+u,e[9]=f*l-m,e[2]=-l,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){const u=r*a,f=r*l,m=o*a,v=o*l;e[0]=a*c,e[4]=v-u*h,e[8]=m*h+f,e[1]=h,e[5]=r*c,e[9]=-o*c,e[2]=-l*c,e[6]=f*h+m,e[10]=u-v*h}else if(t.order==="XZY"){const u=r*a,f=r*l,m=o*a,v=o*l;e[0]=a*c,e[4]=-h,e[8]=l*c,e[1]=u*h+v,e[5]=r*c,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*c,e[10]=v*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fh,t,Vh)}lookAt(t,e,A){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),JA.crossVectors(A,Ze),JA.lengthSq()===0&&(Math.abs(A.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),JA.crossVectors(A,Ze)),JA.normalize(),zn.crossVectors(Ze,JA),i[0]=JA.x,i[4]=zn.x,i[8]=Ze.x,i[1]=JA.y,i[5]=zn.y,i[9]=Ze.y,i[2]=JA.z,i[6]=zn.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,s=this.elements,r=A[0],o=A[4],a=A[8],l=A[12],c=A[1],h=A[5],u=A[9],f=A[13],m=A[2],v=A[6],p=A[10],d=A[14],g=A[3],_=A[7],E=A[11],R=A[15],b=i[0],T=i[4],V=i[8],w=i[12],S=i[1],q=i[5],H=i[9],j=i[13],P=i[2],L=i[6],Q=i[10],z=i[14],G=i[3],W=i[7],K=i[11],et=i[15];return s[0]=r*b+o*S+a*P+l*G,s[4]=r*T+o*q+a*L+l*W,s[8]=r*V+o*H+a*Q+l*K,s[12]=r*w+o*j+a*z+l*et,s[1]=c*b+h*S+u*P+f*G,s[5]=c*T+h*q+u*L+f*W,s[9]=c*V+h*H+u*Q+f*K,s[13]=c*w+h*j+u*z+f*et,s[2]=m*b+v*S+p*P+d*G,s[6]=m*T+v*q+p*L+d*W,s[10]=m*V+v*H+p*Q+d*K,s[14]=m*w+v*j+p*z+d*et,s[3]=g*b+_*S+E*P+R*G,s[7]=g*T+_*q+E*L+R*W,s[11]=g*V+_*H+E*Q+R*K,s[15]=g*w+_*j+E*z+R*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],l=t[13],c=t[2],h=t[6],u=t[10],f=t[14],m=t[3],v=t[7],p=t[11],d=t[15];return m*(+s*a*h-i*l*h-s*o*u+A*l*u+i*o*f-A*a*f)+v*(+e*a*f-e*l*u+s*r*u-i*r*f+i*l*c-s*a*c)+p*(+e*l*h-e*o*f-s*r*h+A*r*f+s*o*c-A*l*c)+d*(-i*o*c-e*a*h+e*o*u+i*r*h-A*r*u+A*a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,A){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=A),this}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],c=t[8],h=t[9],u=t[10],f=t[11],m=t[12],v=t[13],p=t[14],d=t[15],g=h*p*l-v*u*l+v*a*f-o*p*f-h*a*d+o*u*d,_=m*u*l-c*p*l-m*a*f+r*p*f+c*a*d-r*u*d,E=c*v*l-m*h*l+m*o*f-r*v*f-c*o*d+r*h*d,R=m*h*a-c*v*a-m*o*u+r*v*u+c*o*p-r*h*p,b=e*g+A*_+i*E+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(v*u*s-h*p*s-v*i*f+A*p*f+h*i*d-A*u*d)*T,t[2]=(o*p*s-v*a*s+v*i*l-A*p*l-o*i*d+A*a*d)*T,t[3]=(h*a*s-o*u*s-h*i*l+A*u*l+o*i*f-A*a*f)*T,t[4]=_*T,t[5]=(c*p*s-m*u*s+m*i*f-e*p*f-c*i*d+e*u*d)*T,t[6]=(m*a*s-r*p*s-m*i*l+e*p*l+r*i*d-e*a*d)*T,t[7]=(r*u*s-c*a*s+c*i*l-e*u*l-r*i*f+e*a*f)*T,t[8]=E*T,t[9]=(m*h*s-c*v*s-m*A*f+e*v*f+c*A*d-e*h*d)*T,t[10]=(r*v*s-m*o*s+m*A*l-e*v*l-r*A*d+e*o*d)*T,t[11]=(c*o*s-r*h*s-c*A*l+e*h*l+r*A*f-e*o*f)*T,t[12]=R*T,t[13]=(c*v*i-m*h*i+m*A*u-e*v*u-c*A*p+e*h*p)*T,t[14]=(m*o*i-r*v*i-m*A*a+e*v*a+r*A*p-e*o*p)*T,t[15]=(r*h*i-c*o*i+c*A*a-e*h*a-r*A*u+e*o*u)*T,this}scale(t){const e=this.elements,A=t.x,i=t.y,s=t.z;return e[0]*=A,e[4]*=i,e[8]*=s,e[1]*=A,e[5]*=i,e[9]*=s,e[2]*=A,e[6]*=i,e[10]*=s,e[3]*=A,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],A=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,A,i))}makeTranslation(t,e,A){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,A,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),A=Math.sin(t);return this.set(1,0,0,0,0,e,-A,0,0,A,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,0,A,0,0,1,0,0,-A,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,0,A,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const A=Math.cos(e),i=Math.sin(e),s=1-A,r=t.x,o=t.y,a=t.z,l=s*r,c=s*o;return this.set(l*r+A,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+A,c*a-i*r,0,l*a-i*o,c*a+i*r,s*a*a+A,0,0,0,0,1),this}makeScale(t,e,A){return this.set(t,0,0,0,0,e,0,0,0,0,A,0,0,0,0,1),this}makeShear(t,e,A,i,s,r){return this.set(1,A,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,A){const i=this.elements,s=e._x,r=e._y,o=e._z,a=e._w,l=s+s,c=r+r,h=o+o,u=s*l,f=s*c,m=s*h,v=r*c,p=r*h,d=o*h,g=a*l,_=a*c,E=a*h,R=A.x,b=A.y,T=A.z;return i[0]=(1-(v+d))*R,i[1]=(f+E)*R,i[2]=(m-_)*R,i[3]=0,i[4]=(f-E)*b,i[5]=(1-(u+d))*b,i[6]=(p+g)*b,i[7]=0,i[8]=(m+_)*T,i[9]=(p-g)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,A){const i=this.elements;let s=Ii.set(i[0],i[1],i[2]).length();const r=Ii.set(i[4],i[5],i[6]).length(),o=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],dA.copy(this);const l=1/s,c=1/r,h=1/o;return dA.elements[0]*=l,dA.elements[1]*=l,dA.elements[2]*=l,dA.elements[4]*=c,dA.elements[5]*=c,dA.elements[6]*=c,dA.elements[8]*=h,dA.elements[9]*=h,dA.elements[10]*=h,e.setFromRotationMatrix(dA),A.x=s,A.y=r,A.z=o,this}makePerspective(t,e,A,i,s,r,o=qA){const a=this.elements,l=2*s/(e-t),c=2*s/(A-i),h=(e+t)/(e-t),u=(A+i)/(A-i);let f,m;if(o===qA)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===ws)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,A,i,s,r,o=qA){const a=this.elements,l=1/(e-t),c=1/(A-i),h=1/(r-s),u=(e+t)*l,f=(A+i)*c;let m,v;if(o===qA)m=(r+s)*h,v=-2*h;else if(o===ws)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=v,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<16;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<16;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t[e+9]=A[9],t[e+10]=A[10],t[e+11]=A[11],t[e+12]=A[12],t[e+13]=A[13],t[e+14]=A[14],t[e+15]=A[15],t}}const Ii=new C,dA=new Gt,Fh=new C(0,0,0),Vh=new C(1,1,1),JA=new C,zn=new C,Ze=new C,oa=new Gt,aa=new MA;class bi{constructor(t=0,e=0,A=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=A,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,A,i=this._order){return this._x=t,this._y=e,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,A=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],c=i[9],h=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-De(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,A===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,A){return oa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oa,e,A)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return aa.setFromEuler(this),this.setFromQuaternion(aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oh=0;const la=new C,Ui=new MA,LA=new Gt,Gn=new C,wn=new C,qh=new C,Hh=new MA,ca=new C(1,0,0),ha=new C(0,1,0),ua=new C(0,0,1),Qh={type:"added"},kh={type:"removed"};class Re extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new C,e=new bi,A=new MA,i=new C(1,1,1);function s(){A.setFromEuler(e,!1)}function r(){e.setFromQuaternion(A,void 0,!1)}e._onChange(s),A._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new kt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(ha,t)}rotateZ(t){return this.rotateOnAxis(ua,t)}translateOnAxis(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(ha,t)}translateZ(t){return this.translateOnAxis(ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(LA.copy(this.matrixWorld).invert())}lookAt(t,e,A){t.isVector3?Gn.copy(t):Gn.set(t,e,A);const i=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?LA.lookAt(wn,Gn,this.up):LA.lookAt(Gn,wn,this.up),this.quaternion.setFromRotationMatrix(LA),i&&(LA.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(LA),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),LA.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),LA.multiply(t.parent.matrixWorld)),t.applyMatrix4(LA),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let A=0,i=this.children.length;A<i;A++){const r=this.children[A].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,A=[]){this[t]===e&&A.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,A);return A}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,t,qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,Hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let A=0,i=e.length;A<i;A++){const s=e[A];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const A=this.parent;if(t===!0&&A!==null&&A.matrixWorldAutoUpdate===!0&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",A={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const h=a[l];s(t.shapes,h)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){const o=r(t.geometries),a=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),u=r(t.skeletons),f=r(t.animations),m=r(t.nodes);o.length>0&&(A.geometries=o),a.length>0&&(A.materials=a),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),h.length>0&&(A.shapes=h),u.length>0&&(A.skeletons=u),f.length>0&&(A.animations=f),m.length>0&&(A.nodes=m)}return A.object=i,A;function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let A=0;A<t.children.length;A++){const i=t.children[A];this.add(i.clone())}return this}}Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fA=new C,NA=new C,ir=new C,FA=new C,Li=new C,Ni=new C,da=new C,nr=new C,sr=new C,rr=new C;let Wn=!1;class gA{constructor(t=new C,e=new C,A=new C){this.a=t,this.b=e,this.c=A}static getNormal(t,e,A,i){i.subVectors(A,e),fA.subVectors(t,e),i.cross(fA);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,A,i,s){fA.subVectors(i,e),NA.subVectors(A,e),ir.subVectors(t,e);const r=fA.dot(fA),o=fA.dot(NA),a=fA.dot(ir),l=NA.dot(NA),c=NA.dot(ir),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(l*a-o*c)*u,m=(r*c-o*a)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,A,i){return this.getBarycoord(t,e,A,i,FA)===null?!1:FA.x>=0&&FA.y>=0&&FA.x+FA.y<=1}static getUV(t,e,A,i,s,r,o,a){return Wn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wn=!0),this.getInterpolation(t,e,A,i,s,r,o,a)}static getInterpolation(t,e,A,i,s,r,o,a){return this.getBarycoord(t,e,A,i,FA)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,FA.x),a.addScaledVector(r,FA.y),a.addScaledVector(o,FA.z),a)}static isFrontFacing(t,e,A,i){return fA.subVectors(A,e),NA.subVectors(t,e),fA.cross(NA).dot(i)<0}set(t,e,A){return this.a.copy(t),this.b.copy(e),this.c.copy(A),this}setFromPointsAndIndices(t,e,A,i){return this.a.copy(t[e]),this.b.copy(t[A]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,A,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,A),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fA.subVectors(this.c,this.b),NA.subVectors(this.a,this.b),fA.cross(NA).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gA.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gA.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,A,i,s){return Wn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wn=!0),gA.getInterpolation(t,this.a,this.b,this.c,e,A,i,s)}getInterpolation(t,e,A,i,s){return gA.getInterpolation(t,this.a,this.b,this.c,e,A,i,s)}containsPoint(t){return gA.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gA.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const A=this.a,i=this.b,s=this.c;let r,o;Li.subVectors(i,A),Ni.subVectors(s,A),nr.subVectors(t,A);const a=Li.dot(nr),l=Ni.dot(nr);if(a<=0&&l<=0)return e.copy(A);sr.subVectors(t,i);const c=Li.dot(sr),h=Ni.dot(sr);if(c>=0&&h<=c)return e.copy(i);const u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return r=a/(a-c),e.copy(A).addScaledVector(Li,r);rr.subVectors(t,s);const f=Li.dot(rr),m=Ni.dot(rr);if(m>=0&&f<=m)return e.copy(s);const v=f*l-a*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(A).addScaledVector(Ni,o);const p=c*m-f*h;if(p<=0&&h-c>=0&&f-m>=0)return da.subVectors(s,i),o=(h-c)/(h-c+(f-m)),e.copy(i).addScaledVector(da,o);const d=1/(p+v+u);return r=v*d,o=u*d,e.copy(A).addScaledVector(Li,r).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jA={h:0,s:0,l:0},Kn={h:0,s:0,l:0};function or(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class rt{constructor(t,e,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,A)}set(t,e,A){if(e===void 0&&A===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,A);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,A,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=A,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,A,i=ie.workingColorSpace){if(t=Bh(t,1),e=De(e,0,1),A=De(A,0,1),e===0)this.r=this.g=this.b=A;else{const s=A<=.5?A*(1+e):A+e-A*e,r=2*A-s;this.r=or(r,s,t+1/3),this.g=or(r,s,t),this.b=or(r,s,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function A(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return A(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return A(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return A(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const A=zl[t.toLowerCase()];return A!==void 0?this.setHex(A,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return ie.fromWorkingColorSpace(Ne.copy(this),t),Math.round(De(Ne.r*255,0,255))*65536+Math.round(De(Ne.g*255,0,255))*256+Math.round(De(Ne.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ne.copy(this),e);const A=Ne.r,i=Ne.g,s=Ne.b,r=Math.max(A,i,s),o=Math.min(A,i,s);let a,l;const c=(o+r)/2;if(o===r)a=0,l=0;else{const h=r-o;switch(l=c<=.5?h/(r+o):h/(2-r-o),r){case A:a=(i-s)/h+(i<s?6:0);break;case i:a=(s-A)/h+2;break;case s:a=(A-i)/h+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=pe){ie.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,A=Ne.g,i=Ne.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(t,e,A){return this.getHSL(jA),this.setHSL(jA.h+t,jA.s+e,jA.l+A)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,A){return this.r=t.r+(e.r-t.r)*A,this.g=t.g+(e.g-t.g)*A,this.b=t.b+(e.b-t.b)*A,this}lerpHSL(t,e){this.getHSL(jA),t.getHSL(Kn);const A=Ks(jA.h,Kn.h,e),i=Ks(jA.s,Kn.s,e),s=Ks(jA.l,Kn.l,e);return this.setHSL(A,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,A=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*A+s[6]*i,this.g=s[1]*e+s[4]*A+s[7]*i,this.b=s[2]*e+s[5]*A+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new rt;rt.NAMES=zl;let zh=0;class un extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=In(),this.name="",this.type="Material",this.blending=$i,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Vr,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const A={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(t).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(t).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(t).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(t).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(t).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(A.blending=this.blending),this.side!==oi&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==Fr&&(A.blendSrc=this.blendSrc),this.blendDst!==Vr&&(A.blendDst=this.blendDst),this.blendEquation!==_i&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(A.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(A.textures=s),r.length>0&&(A.images=r)}return A}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let A=null;if(e!==null){const i=e.length;A=new Array(i);for(let s=0;s!==i;++s)A[s]=e[s].clone()}return this.clippingPlanes=A,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class GA extends un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new C,Yn=new st;class ne{constructor(t,e,A=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=A,this.usage=ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,A){t*=this.itemSize,A*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[A+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,A=this.count;e<A;e++)Yn.fromBufferAttribute(this,e),Yn.applyMatrix3(t),this.setXY(e,Yn.x,Yn.y);else if(this.itemSize===3)for(let e=0,A=this.count;e<A;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,A=this.count;e<A;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,A=this.count;e<A;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,A=this.count;e<A;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let A=this.array[t*this.itemSize+e];return this.normalized&&(A=vn(A,this.array)),A}setComponent(t,e,A){return this.normalized&&(A=Ye(A,this.array)),this.array[t*this.itemSize+e]=A,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,A){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),A=Ye(A,this.array)),this.array[t+0]=e,this.array[t+1]=A,this}setXYZ(t,e,A,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),A=Ye(A,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this}setXYZW(t,e,A,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),A=Ye(A,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ta&&(t.usage=this.usage),t}}class Gl extends ne{constructor(t,e,A){super(new Uint16Array(t),e,A)}}class Wl extends ne{constructor(t,e,A){super(new Uint32Array(t),e,A)}}class ue extends ne{constructor(t,e,A){super(new Float32Array(t),e,A)}}let Gh=0;const oA=new Gt,ar=new Re,Fi=new C,$e=new yi,En=new yi,Be=new C;class Pe extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vl(t)?Wl:Gl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,A=0){this.groups.push({start:t,count:e,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const s=new kt().getNormalMatrix(t);A.applyNormalMatrix(s),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oA.makeRotationFromQuaternion(t),this.applyMatrix4(oA),this}rotateX(t){return oA.makeRotationX(t),this.applyMatrix4(oA),this}rotateY(t){return oA.makeRotationY(t),this.applyMatrix4(oA),this}rotateZ(t){return oA.makeRotationZ(t),this.applyMatrix4(oA),this}translate(t,e,A){return oA.makeTranslation(t,e,A),this.applyMatrix4(oA),this}scale(t,e,A){return oA.makeScale(t,e,A),this.applyMatrix4(oA),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let A=0,i=t.length;A<i;A++){const s=t[A];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let A=0,i=e.length;A<i;A++){const s=e[A];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const A=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors($e.min,En.min),$e.expandByPoint(Be),Be.addVectors($e.max,En.max),$e.expandByPoint(Be)):($e.expandByPoint(En.min),$e.expandByPoint(En.max))}$e.getCenter(A);let i=0;for(let s=0,r=t.count;s<r;s++)Be.fromBufferAttribute(t,s),i=Math.max(i,A.distanceToSquared(Be));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)Be.fromBufferAttribute(o,l),a&&(Fi.fromBufferAttribute(t,l),Be.add(Fi)),i=Math.max(i,A.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],c=[];for(let S=0;S<o;S++)l[S]=new C,c[S]=new C;const h=new C,u=new C,f=new C,m=new st,v=new st,p=new st,d=new C,g=new C;function _(S,q,H){h.fromArray(i,S*3),u.fromArray(i,q*3),f.fromArray(i,H*3),m.fromArray(r,S*2),v.fromArray(r,q*2),p.fromArray(r,H*2),u.sub(h),f.sub(h),v.sub(m),p.sub(m);const j=1/(v.x*p.y-p.x*v.y);isFinite(j)&&(d.copy(u).multiplyScalar(p.y).addScaledVector(f,-v.y).multiplyScalar(j),g.copy(f).multiplyScalar(v.x).addScaledVector(u,-p.x).multiplyScalar(j),l[S].add(d),l[q].add(d),l[H].add(d),c[S].add(g),c[q].add(g),c[H].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:A.length}]);for(let S=0,q=E.length;S<q;++S){const H=E[S],j=H.start,P=H.count;for(let L=j,Q=j+P;L<Q;L+=3)_(A[L+0],A[L+1],A[L+2])}const R=new C,b=new C,T=new C,V=new C;function w(S){T.fromArray(s,S*3),V.copy(T);const q=l[S];R.copy(q),R.sub(T.multiplyScalar(T.dot(q))).normalize(),b.crossVectors(V,q);const j=b.dot(c[S])<0?-1:1;a[S*4]=R.x,a[S*4+1]=R.y,a[S*4+2]=R.z,a[S*4+3]=j}for(let S=0,q=E.length;S<q;++S){const H=E[S],j=H.start,P=H.count;for(let L=j,Q=j+P;L<Q;L+=3)w(A[L+0]),w(A[L+1]),w(A[L+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",A);else for(let u=0,f=A.count;u<f;u++)A.setXYZ(u,0,0,0);const i=new C,s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,p),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(A,m),a.fromBufferAttribute(A,v),l.fromBufferAttribute(A,p),o.add(c),a.add(c),l.add(c),A.setXYZ(m,o.x,o.y,o.z),A.setXYZ(v,a.x,a.y,a.z),A.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),A.setXYZ(u+0,c.x,c.y,c.z),A.setXYZ(u+1,c.x,c.y,c.z),A.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,A=t.count;e<A;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,a){const l=o.array,c=o.itemSize,h=o.normalized,u=new l.constructor(a.length*c);let f=0,m=0;for(let v=0,p=a.length;v<p;v++){o.isInterleavedBufferAttribute?f=a[v]*o.data.stride+o.offset:f=a[v]*c;for(let d=0;d<c;d++)u[m++]=l[f++]}return new ne(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,A=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=t(a,A);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const a=[],l=s[o];for(let c=0,h=l.length;c<h;c++){const u=l[c],f=t(u,A);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const A=this.attributes;for(const a in A){const l=A[a];t.data.attributes[a]=l.toJSON(t.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];c.push(f.toJSON(t.data))}c.length>0&&(i[a]=c,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const A=t.index;A!==null&&this.setIndex(A.clone(e));const i=t.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],h=s[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,c=r.length;l<c;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fa=new Gt,pi=new Ql,Xn=new hn,pa=new C,Vi=new C,Oi=new C,qi=new C,lr=new C,Jn=new C,jn=new st,Zn=new st,$n=new st,ma=new C,ga=new C,va=new C,ts=new C,es=new C;class tt extends Re{constructor(t=new Pe,e=new GA){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const A=this.geometry,i=A.attributes.position,s=A.morphAttributes.position,r=A.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Jn.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const c=o[a],h=s[a];c!==0&&(lr.fromBufferAttribute(h,t),r?Jn.addScaledVector(lr,c):Jn.addScaledVector(lr.sub(e),c))}e.add(Jn)}return e}raycast(t,e){const A=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),Xn.copy(A.boundingSphere),Xn.applyMatrix4(s),pi.copy(t.ray).recast(t.near),!(Xn.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Xn,pa)===null||pi.origin.distanceToSquared(pa)>(t.far-t.near)**2))&&(fa.copy(s).invert(),pi.copy(t.ray).applyMatrix4(fa),!(A.boundingBox!==null&&pi.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,A){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=u.length;m<v;m++){const p=u[m],d=r[p.materialIndex],g=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let E=g,R=_;E<R;E+=3){const b=o.getX(E),T=o.getX(E+1),V=o.getX(E+2);i=As(this,d,t,A,l,c,h,b,T,V),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=m,d=v;p<d;p+=3){const g=o.getX(p),_=o.getX(p+1),E=o.getX(p+2);i=As(this,r,t,A,l,c,h,g,_,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let m=0,v=u.length;m<v;m++){const p=u[m],d=r[p.materialIndex],g=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=g,R=_;E<R;E+=3){const b=E,T=E+1,V=E+2;i=As(this,d,t,A,l,c,h,b,T,V),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,d=v;p<d;p+=3){const g=p,_=p+1,E=p+2;i=As(this,r,t,A,l,c,h,g,_,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Wh(n,t,e,A,i,s,r,o){let a;if(t.side===Ke?a=A.intersectTriangle(r,s,i,!0,o):a=A.intersectTriangle(i,s,r,t.side===oi,o),a===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:n}}function As(n,t,e,A,i,s,r,o,a,l){n.getVertexPosition(o,Vi),n.getVertexPosition(a,Oi),n.getVertexPosition(l,qi);const c=Wh(n,t,e,A,Vi,Oi,qi,ts);if(c){i&&(jn.fromBufferAttribute(i,o),Zn.fromBufferAttribute(i,a),$n.fromBufferAttribute(i,l),c.uv=gA.getInterpolation(ts,Vi,Oi,qi,jn,Zn,$n,new st)),s&&(jn.fromBufferAttribute(s,o),Zn.fromBufferAttribute(s,a),$n.fromBufferAttribute(s,l),c.uv1=gA.getInterpolation(ts,Vi,Oi,qi,jn,Zn,$n,new st),c.uv2=c.uv1),r&&(ma.fromBufferAttribute(r,o),ga.fromBufferAttribute(r,a),va.fromBufferAttribute(r,l),c.normal=gA.getInterpolation(ts,Vi,Oi,qi,ma,ga,va,new C),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:a,c:l,normal:new C,materialIndex:0};gA.getNormal(Vi,Oi,qi,h.normal),c.face=h}return c}class ce extends Pe{constructor(t=1,e=1,A=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:A,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],l=[],c=[],h=[];let u=0,f=0;m("z","y","x",-1,-1,A,e,t,r,s,0),m("z","y","x",1,-1,A,e,-t,r,s,1),m("x","z","y",1,1,t,A,e,i,r,2),m("x","z","y",1,-1,t,A,-e,i,r,3),m("x","y","z",1,-1,t,e,A,i,s,4),m("x","y","z",-1,-1,t,e,-A,i,s,5),this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2));function m(v,p,d,g,_,E,R,b,T,V,w){const S=E/T,q=R/V,H=E/2,j=R/2,P=b/2,L=T+1,Q=V+1;let z=0,G=0;const W=new C;for(let K=0;K<Q;K++){const et=K*q-j;for(let At=0;At<L;At++){const k=At*S-H;W[v]=k*g,W[p]=et*_,W[d]=P,l.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[d]=b>0?1:-1,c.push(W.x,W.y,W.z),h.push(At/T),h.push(1-K/V),z+=1}}for(let K=0;K<V;K++)for(let et=0;et<T;et++){const At=u+et+L*K,k=u+et+L*(K+1),Y=u+(et+1)+L*(K+1),ct=u+(et+1)+L*K;a.push(At,k,ct),a.push(k,Y,ct),G+=6}o.addGroup(f,G,w),f+=G,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function on(n){const t={};for(const e in n){t[e]={};for(const A in n[e]){const i=n[e][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][A]=null):t[e][A]=i.clone():Array.isArray(i)?t[e][A]=i.slice():t[e][A]=i}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const A=on(n[e]);for(const i in A)t[i]=A[i]}return t}function Kh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kl(n){return n.getRenderTarget()===null?n.outputColorSpace:ie.workingColorSpace}const Ms={clone:on,merge:ze};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=on(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(e.extensions=A),e}}class Yl extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=qA}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class AA extends Yl{constructor(t=50,e=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,A,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,A=2*e,i=this.aspect*A,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/a,e-=r.offsetY*A/l,i*=r.width/a,A*=r.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-A,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Qi=1;class Jh extends Re{constructor(t,e,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new AA(Hi,Qi,t,e);i.layers=this.layers,this.add(i);const s=new AA(Hi,Qi,t,e);s.layers=this.layers,this.add(s);const r=new AA(Hi,Qi,t,e);r.layers=this.layers,this.add(r);const o=new AA(Hi,Qi,t,e);o.layers=this.layers,this.add(o);const a=new AA(Hi,Qi,t,e);a.layers=this.layers,this.add(a);const l=new AA(Hi,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[A,i,s,r,o,a]=e;for(const l of e)this.remove(l);if(t===qA)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===ws)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,t.setRenderTarget(A,0,i),t.render(e,s),t.setRenderTarget(A,1,i),t.render(e,r),t.setRenderTarget(A,2,i),t.render(e,o),t.setRenderTarget(A,3,i),t.render(e,a),t.setRenderTarget(A,4,i),t.render(e,l),A.texture.generateMipmaps=v,t.setRenderTarget(A,5,i),t.render(e,c),t.setRenderTarget(h,u,f),t.xr.enabled=m,A.texture.needsPMREMUpdate=!0}}class Xl extends Je{constructor(t,e,A,i,s,r,o,a,l,c){t=t!==void 0?t:[],e=e!==void 0?e:An,super(t,e,A,i,s,r,o,a,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends EA{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const A={width:t,height:t,depth:1},i=[A,A,A,A,A,A];e.encoding!==void 0&&(Bn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Si?pe:cA),this.texture=new Xl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:lA}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ce(5,5,5),s=new We({name:"CubemapFromEquirect",uniforms:on(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:Ke,blending:HA});s.uniforms.tEquirect.value=e;const r=new tt(i,s),o=e.minFilter;return e.minFilter===Dn&&(e.minFilter=lA),new Jh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,A,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,A,i);t.setRenderTarget(s)}}const cr=new C,Zh=new C,$h=new kt;class gi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,A,i){return this.normal.set(t,e,A),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,A){const i=cr.subVectors(A,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const A=t.delta(cr),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(A,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),A=this.distanceToPoint(t.end);return e<0&&A>0||A<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const A=e||$h.getNormalMatrix(t),i=this.coplanarPoint(cr).applyMatrix4(t),s=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new hn,is=new C;class to{constructor(t=new gi,e=new gi,A=new gi,i=new gi,s=new gi,r=new gi){this.planes=[t,e,A,i,s,r]}set(t,e,A,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(A),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let A=0;A<6;A++)e[A].copy(t.planes[A]);return this}setFromProjectionMatrix(t,e=qA){const A=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],m=i[9],v=i[10],p=i[11],d=i[12],g=i[13],_=i[14],E=i[15];if(A[0].setComponents(a-s,u-l,p-f,E-d).normalize(),A[1].setComponents(a+s,u+l,p+f,E+d).normalize(),A[2].setComponents(a+r,u+c,p+m,E+g).normalize(),A[3].setComponents(a-r,u-c,p-m,E-g).normalize(),A[4].setComponents(a-o,u-h,p-v,E-_).normalize(),e===qA)A[5].setComponents(a+o,u+h,p+v,E+_).normalize();else if(e===ws)A[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,A=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(A)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let A=0;A<6;A++){const i=e[A];if(is.x=i.normal.x>0?t.max.x:t.min.x,is.y=i.normal.y>0?t.max.y:t.min.y,is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let A=0;A<6;A++)if(e[A].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jl(){let n=null,t=!1,e=null,A=null;function i(s,r){e(s,r),A=n.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(A=n.requestAnimationFrame(i),t=!0)},stop:function(){n.cancelAnimationFrame(A),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function tu(n,t){const e=t.isWebGL2,A=new WeakMap;function i(l,c){const h=l.array,u=l.usage,f=h.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,h,u),l.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,c,h){const u=c.array,f=c._updateRange,m=c.updateRanges;if(n.bindBuffer(h,l),f.count===-1&&m.length===0&&n.bufferSubData(h,0,u),m.length!==0){for(let v=0,p=m.length;v<p;v++){const d=m[v];e?n.bufferSubData(h,d.start*u.BYTES_PER_ELEMENT,u,d.start,d.count):n.bufferSubData(h,d.start*u.BYTES_PER_ELEMENT,u.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):n.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),A.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=A.get(l);c&&(n.deleteBuffer(c.buffer),A.delete(l))}function a(l,c){if(l.isGLBufferAttribute){const u=A.get(l);(!u||u.version<l.version)&&A.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=A.get(l);if(h===void 0)A.set(l,i(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,c),h.version=l.version}}return{get:r,remove:o,update:a}}class BA extends Pe{constructor(t=1,e=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:A,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(A),a=Math.floor(i),l=o+1,c=a+1,h=t/o,u=e/a,f=[],m=[],v=[],p=[];for(let d=0;d<c;d++){const g=d*u-r;for(let _=0;_<l;_++){const E=_*h-s;m.push(E,-g,0),v.push(0,0,1),p.push(_/o),p.push(1-d/a)}}for(let d=0;d<a;d++)for(let g=0;g<o;g++){const _=g+l*d,E=g+l*(d+1),R=g+1+l*(d+1),b=g+1+l*d;f.push(_,E,b),f.push(E,R,b)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new BA(t.width,t.height,t.widthSegments,t.heightSegments)}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,md=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,If=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:eu,alphahash_pars_fragment:Au,alphamap_fragment:iu,alphamap_pars_fragment:nu,alphatest_fragment:su,alphatest_pars_fragment:ru,aomap_fragment:ou,aomap_pars_fragment:au,batching_pars_vertex:lu,batching_vertex:cu,begin_vertex:hu,beginnormal_vertex:uu,bsdfs:du,iridescence_fragment:fu,bumpmap_pars_fragment:pu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:gu,clipping_planes_pars_vertex:vu,clipping_planes_vertex:_u,color_fragment:xu,color_pars_fragment:wu,color_pars_vertex:Eu,color_vertex:Mu,common:Su,cube_uv_reflection_fragment:yu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Tu,displacementmap_vertex:Cu,emissivemap_fragment:Bu,emissivemap_pars_fragment:Ru,colorspace_fragment:Pu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Lu,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:Yu,envmap_vertex:Fu,fog_vertex:Vu,fog_pars_vertex:Ou,fog_fragment:qu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Qu,lightmap_fragment:ku,lightmap_pars_fragment:zu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Wu,lights_pars_begin:Ku,lights_toon_fragment:Xu,lights_toon_pars_fragment:Ju,lights_phong_fragment:ju,lights_phong_pars_fragment:Zu,lights_physical_fragment:$u,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:Ad,lights_fragment_end:id,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:od,map_fragment:ad,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphcolor_vertex:fd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:gd,normal_fragment_begin:vd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:wd,normal_vertex:Ed,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Td,opaque_fragment:Cd,packing:Bd,premultiplied_alpha_fragment:Rd,project_vertex:Pd,dithering_fragment:Dd,dithering_pars_fragment:Id,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Fd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Od,skinbase_vertex:qd,skinning_pars_vertex:Hd,skinning_vertex:Qd,skinnormal_vertex:kd,specularmap_fragment:zd,specularmap_pars_fragment:Gd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Kd,transmission_fragment:Yd,transmission_pars_fragment:Xd,uv_pars_fragment:Jd,uv_pars_vertex:jd,uv_vertex:Zd,worldpos_vertex:$d,background_vert:tf,background_frag:ef,backgroundCube_vert:Af,backgroundCube_frag:nf,cube_vert:sf,cube_frag:rf,depth_vert:of,depth_frag:af,distanceRGBA_vert:lf,distanceRGBA_frag:cf,equirect_vert:hf,equirect_frag:uf,linedashed_vert:df,linedashed_frag:ff,meshbasic_vert:pf,meshbasic_frag:mf,meshlambert_vert:gf,meshlambert_frag:vf,meshmatcap_vert:_f,meshmatcap_frag:xf,meshnormal_vert:wf,meshnormal_frag:Ef,meshphong_vert:Mf,meshphong_frag:Sf,meshphysical_vert:yf,meshphysical_frag:bf,meshtoon_vert:Tf,meshtoon_frag:Cf,points_vert:Bf,points_frag:Rf,shadow_vert:Pf,shadow_frag:Df,sprite_vert:If,sprite_frag:Uf},nt={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},yA={basic:{uniforms:ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ze([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ze([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ze([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ze([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ze([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ze([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ze([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ze([nt.lights,nt.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};yA.physical={uniforms:ze([yA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ns={r:0,b:0,g:0};function Lf(n,t,e,A,i,s,r){const o=new rt(0);let a=s===!0?0:1,l,c,h=null,u=0,f=null;function m(p,d){let g=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,a):_&&_.isColor&&(v(_,1),g=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?A.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,r),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ts)?(c===void 0&&(c=new tt(new ce(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:on(yA.backgroundCube.uniforms),vertexShader:yA.backgroundCube.vertexShader,fragmentShader:yA.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ie.getTransfer(_.colorSpace)!==le,(h!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new tt(new BA(2,2),new We({name:"BackgroundMaterial",uniforms:on(yA.background.uniforms),vertexShader:yA.background.vertexShader,fragmentShader:yA.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){p.getRGB(ns,Kl(n)),A.buffers.color.setClear(ns.r,ns.g,ns.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,v(o,a)},render:m}}function Nf(n,t,e,A){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=A.isWebGL2?null:t.get("OES_vertex_array_object"),r=A.isWebGL2||s!==null,o={},a=p(null);let l=a,c=!1;function h(P,L,Q,z,G){let W=!1;if(r){const K=v(z,Q,L);l!==K&&(l=K,f(l.object)),W=d(P,z,Q,G),W&&g(P,z,Q,G)}else{const K=L.wireframe===!0;(l.geometry!==z.id||l.program!==Q.id||l.wireframe!==K)&&(l.geometry=z.id,l.program=Q.id,l.wireframe=K,W=!0)}G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||c)&&(c=!1,V(P,L,Q,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function u(){return A.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(P){return A.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function m(P){return A.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,L,Q){const z=Q.wireframe===!0;let G=o[P.id];G===void 0&&(G={},o[P.id]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let K=W[z];return K===void 0&&(K=p(u()),W[z]=K),K}function p(P){const L=[],Q=[],z=[];for(let G=0;G<i;G++)L[G]=0,Q[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Q,attributeDivisors:z,object:P,attributes:{},index:null}}function d(P,L,Q,z){const G=l.attributes,W=L.attributes;let K=0;const et=Q.getAttributes();for(const At in et)if(et[At].location>=0){const Y=G[At];let ct=W[At];if(ct===void 0&&(At==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),At==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),Y===void 0||Y.attribute!==ct||ct&&Y.data!==ct.data)return!0;K++}return l.attributesNum!==K||l.index!==z}function g(P,L,Q,z){const G={},W=L.attributes;let K=0;const et=Q.getAttributes();for(const At in et)if(et[At].location>=0){let Y=W[At];Y===void 0&&(At==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),At==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const ct={};ct.attribute=Y,Y&&Y.data&&(ct.data=Y.data),G[At]=ct,K++}l.attributes=G,l.attributesNum=K,l.index=z}function _(){const P=l.newAttributes;for(let L=0,Q=P.length;L<Q;L++)P[L]=0}function E(P){R(P,0)}function R(P,L){const Q=l.newAttributes,z=l.enabledAttributes,G=l.attributeDivisors;Q[P]=1,z[P]===0&&(n.enableVertexAttribArray(P),z[P]=1),G[P]!==L&&((A.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[A.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),G[P]=L)}function b(){const P=l.newAttributes,L=l.enabledAttributes;for(let Q=0,z=L.length;Q<z;Q++)L[Q]!==P[Q]&&(n.disableVertexAttribArray(Q),L[Q]=0)}function T(P,L,Q,z,G,W,K){K===!0?n.vertexAttribIPointer(P,L,Q,G,W):n.vertexAttribPointer(P,L,Q,z,G,W)}function V(P,L,Q,z){if(A.isWebGL2===!1&&(P.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const G=z.attributes,W=Q.getAttributes(),K=L.defaultAttributeValues;for(const et in W){const At=W[et];if(At.location>=0){let k=G[et];if(k===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const Y=k.normalized,ct=k.itemSize,_t=e.get(k);if(_t===void 0)continue;const vt=_t.buffer,Dt=_t.type,Ut=_t.bytesPerElement,yt=A.isWebGL2===!0&&(Dt===n.INT||Dt===n.UNSIGNED_INT||k.gpuType===Cl);if(k.isInterleavedBufferAttribute){const Yt=k.data,I=Yt.stride,Oe=k.offset;if(Yt.isInstancedInterleavedBuffer){for(let wt=0;wt<At.locationSize;wt++)R(At.location+wt,Yt.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Yt.meshPerAttribute*Yt.count)}else for(let wt=0;wt<At.locationSize;wt++)E(At.location+wt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let wt=0;wt<At.locationSize;wt++)T(At.location+wt,ct/At.locationSize,Dt,Y,I*Ut,(Oe+ct/At.locationSize*wt)*Ut,yt)}else{if(k.isInstancedBufferAttribute){for(let Yt=0;Yt<At.locationSize;Yt++)R(At.location+Yt,k.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Yt=0;Yt<At.locationSize;Yt++)E(At.location+Yt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Yt=0;Yt<At.locationSize;Yt++)T(At.location+Yt,ct/At.locationSize,Dt,Y,ct*Ut,ct/At.locationSize*Yt*Ut,yt)}}else if(K!==void 0){const Y=K[et];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(At.location,Y);break;case 3:n.vertexAttrib3fv(At.location,Y);break;case 4:n.vertexAttrib4fv(At.location,Y);break;default:n.vertexAttrib1fv(At.location,Y)}}}}b()}function w(){H();for(const P in o){const L=o[P];for(const Q in L){const z=L[Q];for(const G in z)m(z[G].object),delete z[G];delete L[Q]}delete o[P]}}function S(P){if(o[P.id]===void 0)return;const L=o[P.id];for(const Q in L){const z=L[Q];for(const G in z)m(z[G].object),delete z[G];delete L[Q]}delete o[P.id]}function q(P){for(const L in o){const Q=o[L];if(Q[P.id]===void 0)continue;const z=Q[P.id];for(const G in z)m(z[G].object),delete z[G];delete Q[P.id]}}function H(){j(),c=!0,l!==a&&(l=a,f(l.object))}function j(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:H,resetDefaultState:j,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:E,disableUnusedAttributes:b}}function Ff(n,t,e,A){const i=A.isWebGL2;let s;function r(c){s=c}function o(c,h){n.drawArrays(s,c,h),e.update(h,s,1)}function a(c,h,u){if(u===0)return;let f,m;if(i)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,u),e.update(h,s,u)}function l(c,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(c[m],h[m]);else{f.multiDrawArraysWEBGL(s,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];e.update(m,s,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=l}function Vf(n,t,e){let A;function i(){if(A!==void 0)return A;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");A=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,E=r||t.has("OES_texture_float"),R=_&&E,b=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:b}}function Of(n){const t=this;let e=null,A=0,i=!1,s=!1;const r=new gi,o=new kt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||A!==0||i;return i=u,A=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=c(h,u,0)},this.setState=function(h,u,f){const m=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!i||m===null||m.length===0||s&&!p)s?c(null):l();else{const g=s?0:A,_=g*4;let E=d.clippingState||null;a.value=E,E=c(m,u,_,f);for(let R=0;R!==_;++R)E[R]=e[R];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function l(){a.value!==e&&(a.value=e,a.needsUpdate=A>0),t.numPlanes=A,t.numIntersection=0}function c(h,u,f,m){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=a.value,m!==!0||p===null){const d=f+v*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,E=f;_!==v;++_,E+=4)r.copy(h[_]).applyMatrix4(g,o),r.normal.toArray(p,E),p[E+3]=r.constant}a.value=p,a.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function qf(n){let t=new WeakMap;function e(r,o){return o===Or?r.mapping=An:o===qr&&(r.mapping=nn),r}function A(r){if(r&&r.isTexture){const o=r.mapping;if(o===Or||o===qr)if(t.has(r)){const a=t.get(r).texture;return e(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new jh(a.height/2);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function s(){t=new WeakMap}return{get:A,dispose:s}}class eo extends Yl{constructor(t=-1,e=1,A=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=A,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,A,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=A-t,r=A+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,_a=[.125,.215,.35,.446,.526,.582],xi=20,hr=new eo,xa=new rt;let ur=null,dr=0,fr=0;const vi=(1+Math.sqrt(5))/2,ki=1/vi,wa=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,vi,ki),new C(0,vi,-ki),new C(ki,0,vi),new C(-ki,0,vi),new C(vi,ki,0),new C(-vi,ki,0)];class Gr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,A=.1,i=100){ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,A,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ur,dr,fr),t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===An||t.mapping===nn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel();const A=e||this._allocateTargets();return this._textureToCubeUV(t,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,A={magFilter:lA,minFilter:lA,generateMipmaps:!1,type:QA,format:_A,colorSpace:zA,depthBuffer:!1},i=Ea(t,e,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(t,e,A);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hf(s)),this._blurMaterial=Qf(s,t,e)}return i}_compileMaterial(t){const e=new tt(this._lodPlanes[0],t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,A,i){const o=new AA(90,1,e,A),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(xa),c.toneMapping=ni,c.autoClear=!1;const f=new GA({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),m=new tt(new ce,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(xa),v=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(o.up.set(0,a[d],0),o.lookAt(l[d],0,0)):g===1?(o.up.set(0,0,a[d]),o.lookAt(0,l[d],0)):(o.up.set(0,a[d],0),o.lookAt(0,0,l[d]));const _=this._cubeSize;ss(i,g*_,d>2?_:0,_,_),c.setRenderTarget(i),v&&c.render(m,o),c.render(t,o)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=u,c.autoClear=h,t.background=p}_textureToCubeUV(t,e){const A=this._renderer,i=t.mapping===An||t.mapping===nn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const a=this._cubeSize;ss(e,0,0,3*a,2*a),A.setRenderTarget(e),A.render(r,hr)}_applyPMREM(t){const e=this._renderer,A=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=wa[(i-1)%wa.length];this._blur(t,i-1,i,s,r)}e.autoClear=A}_blur(t,e,A,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,A,i,"latitudinal",s),this._halfBlur(r,t,A,A,i,"longitudinal",s)}_halfBlur(t,e,A,i,s,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new tt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[A]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),v=s/m,p=isFinite(s)?1+Math.floor(c*v):xi;p>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const d=[];let g=0;for(let T=0;T<xi;++T){const V=T/v,w=Math.exp(-V*V/2);d.push(w),T===0?g+=w:T<p&&(g+=2*w)}for(let T=0;T<d.length;T++)d[T]=d[T]/g;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-A;const E=this._sizeLods[i],R=3*E*(i>_-ji?i-_+ji:0),b=4*(this._cubeSize-E);ss(e,R,b,3*E,2*E),a.setRenderTarget(e),a.render(h,hr)}}function Hf(n){const t=[],e=[],A=[];let i=n;const s=n-ji+1+_a.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let a=1/o;r>n-ji?a=_a[r-n+ji-1]:r===0&&(a=0),A.push(a);const l=1/(o-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,m=6,v=3,p=2,d=1,g=new Float32Array(v*m*f),_=new Float32Array(p*m*f),E=new Float32Array(d*m*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,V=b>2?0:-1,w=[T,V,0,T+2/3,V,0,T+2/3,V+1,0,T,V,0,T+2/3,V+1,0,T,V+1,0];g.set(w,v*m*b),_.set(u,p*m*b);const S=[b,b,b,b,b,b];E.set(S,d*m*b)}const R=new Pe;R.setAttribute("position",new ne(g,v)),R.setAttribute("uv",new ne(_,p)),R.setAttribute("faceIndex",new ne(E,d)),t.push(R),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:A}}function Ea(n,t,e){const A=new EA(n,t,e);return A.texture.mapping=Ts,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function ss(n,t,e,A,i){n.viewport.set(t,e,A,i),n.scissor.set(t,e,A,i)}function Qf(n,t,e){const A=new Float32Array(xi),i=new C(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:HA,depthTest:!1,depthWrite:!1})}function Ma(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:HA,depthTest:!1,depthWrite:!1})}function Sa(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:HA,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kf(n){let t=new WeakMap,e=null;function A(o){if(o&&o.isTexture){const a=o.mapping,l=a===Or||a===qr,c=a===An||a===nn;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Gr(n)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||c&&h&&i(h)){e===null&&(e=new Gr(n));const u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let a=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&a++;return a===l}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:A,dispose:r}}function zf(n){const t={};function e(A){if(t[A]!==void 0)return t[A];let i;switch(A){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(A)}return t[A]=i,i}return{has:function(A){return e(A)!==null},init:function(A){A.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(A){const i=e(A);return i===null&&console.warn("THREE.WebGLRenderer: "+A+" extension not supported."),i}}}function Gf(n,t,e,A){const i={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const v=u.morphAttributes[m];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),A.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function a(h){const u=h.attributes;for(const m in u)t.update(u[m],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const v=f[m];for(let p=0,d=v.length;p<d;p++)t.update(v[p],n.ARRAY_BUFFER)}}function l(h){const u=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const g=f.array;v=f.version;for(let _=0,E=g.length;_<E;_+=3){const R=g[_+0],b=g[_+1],T=g[_+2];u.push(R,b,b,T,T,R)}}else if(m!==void 0){const g=m.array;v=m.version;for(let _=0,E=g.length/3-1;_<E;_+=3){const R=_+0,b=_+1,T=_+2;u.push(R,b,b,T,T,R)}}else return;const p=new(Vl(u)?Wl:Gl)(u,1);p.version=v;const d=s.get(h);d&&t.remove(d),s.set(h,p)}function c(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:a,getWireframeAttribute:c}}function Wf(n,t,e,A){const i=A.isWebGL2;let s;function r(f){s=f}let o,a;function l(f){o=f.type,a=f.bytesPerElement}function c(f,m){n.drawElements(s,m,o,f*a),e.update(m,s,1)}function h(f,m,v){if(v===0)return;let p,d;if(i)p=n,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,f*a,v),e.update(m,s,v)}function u(f,m,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(f[d]/a,m[d]);else{p.multiDrawElementsWEBGL(s,m,0,o,f,0,v);let d=0;for(let g=0;g<v;g++)d+=m[g];e.update(d,s,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function Kf(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function A(s,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:A}}function Yf(n,t){return n[0]-t[0]}function Xf(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Jf(n,t,e){const A={},i=new Float32Array(8),s=new WeakMap,r=new he,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,c,h){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=m!==void 0?m.length:0;let p=s.get(c);if(p===void 0||p.count!==v){let L=function(){j.dispose(),s.delete(c),c.removeEventListener("dispose",L)};var f=L;p!==void 0&&p.texture.dispose();const _=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,R=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],V=c.morphAttributes.color||[];let w=0;_===!0&&(w=1),E===!0&&(w=2),R===!0&&(w=3);let S=c.attributes.position.count*w,q=1;S>t.maxTextureSize&&(q=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const H=new Float32Array(S*q*4*v),j=new Hl(H,S,q,v);j.type=ii,j.needsUpdate=!0;const P=w*4;for(let Q=0;Q<v;Q++){const z=b[Q],G=T[Q],W=V[Q],K=S*q*4*Q;for(let et=0;et<z.count;et++){const At=et*P;_===!0&&(r.fromBufferAttribute(z,et),H[K+At+0]=r.x,H[K+At+1]=r.y,H[K+At+2]=r.z,H[K+At+3]=0),E===!0&&(r.fromBufferAttribute(G,et),H[K+At+4]=r.x,H[K+At+5]=r.y,H[K+At+6]=r.z,H[K+At+7]=0),R===!0&&(r.fromBufferAttribute(W,et),H[K+At+8]=r.x,H[K+At+9]=r.y,H[K+At+10]=r.z,H[K+At+11]=W.itemSize===4?r.w:1)}}p={count:v,texture:j,size:new st(S,q)},s.set(c,p),c.addEventListener("dispose",L)}let d=0;for(let _=0;_<u.length;_++)d+=u[_];const g=c.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",u),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const m=u===void 0?0:u.length;let v=A[c.id];if(v===void 0||v.length!==m){v=[];for(let E=0;E<m;E++)v[E]=[E,0];A[c.id]=v}for(let E=0;E<m;E++){const R=v[E];R[0]=E,R[1]=u[E]}v.sort(Xf);for(let E=0;E<8;E++)E<m&&v[E][1]?(o[E][0]=v[E][0],o[E][1]=v[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Yf);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let g=0;for(let E=0;E<8;E++){const R=o[E],b=R[0],T=R[1];b!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+E)!==p[b]&&c.setAttribute("morphTarget"+E,p[b]),d&&c.getAttribute("morphNormal"+E)!==d[b]&&c.setAttribute("morphNormal"+E,d[b]),i[E]=T,g+=T):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),d&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),i[E]=0)}const _=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:a}}function jf(n,t,e,A){let i=new WeakMap;function s(a){const l=A.render.frame,c=a.geometry,h=t.get(a,c);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),i.get(a)!==l&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),i.set(a,l))),a.isSkinnedMesh){const u=a.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function r(){i=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}class jl extends Je{constructor(t,e,A,i,s,r,o,a,l,c){if(c=c!==void 0?c:Mi,c!==Mi&&c!==rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");A===void 0&&c===Mi&&(A=Ai),A===void 0&&c===rn&&(A=Ei),super(null,i,s,r,o,a,c,A,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=a!==void 0?a:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zl=new Je,$l=new jl(1,1);$l.compareFunction=Fl;const tc=new Hl,ec=new Lh,Ac=new Xl,ya=[],ba=[],Ta=new Float32Array(16),Ca=new Float32Array(9),Ba=new Float32Array(4);function dn(n,t,e){const A=n[0];if(A<=0||A>0)return n;const i=t*e;let s=ya[i];if(s===void 0&&(s=new Float32Array(i),ya[i]=s),t!==0){A.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(s,o)}return s}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,A=n.length;e<A;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,A=t.length;e<A;e++)n[e]=t[e]}function Bs(n,t){let e=ba[t];e===void 0&&(e=new Int32Array(t),ba[t]=e);for(let A=0;A!==t;++A)e[A]=n.allocateTextureUnit();return e}function Zf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $f(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function ep(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function Ap(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ye(e,A))return;Ba.set(A),n.uniformMatrix2fv(this.addr,!1,Ba),be(e,A)}}function ip(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ye(e,A))return;Ca.set(A),n.uniformMatrix3fv(this.addr,!1,Ca),be(e,A)}}function np(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ye(e,A))return;Ta.set(A),n.uniformMatrix4fv(this.addr,!1,Ta),be(e,A)}}function sp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function lp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function up(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function dp(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);const s=this.type===n.SAMPLER_2D_SHADOW?$l:Zl;e.setTexture2D(t||s,i)}function fp(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture3D(t||ec,i)}function pp(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTextureCube(t||Ac,i)}function mp(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture2DArray(t||tc,i)}function gp(n){switch(n){case 5126:return Zf;case 35664:return $f;case 35665:return tp;case 35666:return ep;case 35674:return Ap;case 35675:return ip;case 35676:return np;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function vp(n,t){n.uniform1fv(this.addr,t)}function _p(n,t){const e=dn(t,this.size,2);n.uniform2fv(this.addr,e)}function xp(n,t){const e=dn(t,this.size,3);n.uniform3fv(this.addr,e)}function wp(n,t){const e=dn(t,this.size,4);n.uniform4fv(this.addr,e)}function Ep(n,t){const e=dn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Mp(n,t){const e=dn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Sp(n,t){const e=dn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function yp(n,t){n.uniform1iv(this.addr,t)}function bp(n,t){n.uniform2iv(this.addr,t)}function Tp(n,t){n.uniform3iv(this.addr,t)}function Cp(n,t){n.uniform4iv(this.addr,t)}function Bp(n,t){n.uniform1uiv(this.addr,t)}function Rp(n,t){n.uniform2uiv(this.addr,t)}function Pp(n,t){n.uniform3uiv(this.addr,t)}function Dp(n,t){n.uniform4uiv(this.addr,t)}function Ip(n,t,e){const A=this.cache,i=t.length,s=Bs(e,i);ye(A,s)||(n.uniform1iv(this.addr,s),be(A,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Zl,s[r])}function Up(n,t,e){const A=this.cache,i=t.length,s=Bs(e,i);ye(A,s)||(n.uniform1iv(this.addr,s),be(A,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||ec,s[r])}function Lp(n,t,e){const A=this.cache,i=t.length,s=Bs(e,i);ye(A,s)||(n.uniform1iv(this.addr,s),be(A,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Ac,s[r])}function Np(n,t,e){const A=this.cache,i=t.length,s=Bs(e,i);ye(A,s)||(n.uniform1iv(this.addr,s),be(A,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||tc,s[r])}function Fp(n){switch(n){case 5126:return vp;case 35664:return _p;case 35665:return xp;case 35666:return wp;case 35674:return Ep;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return Tp;case 35669:case 35673:return Cp;case 5125:return Bp;case 36294:return Rp;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Np}}class Vp{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Op{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}}class qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,A){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],A)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Ra(n,t){n.seq.push(t),n.map[t.id]=t}function Hp(n,t,e){const A=n.name,i=A.length;for(pr.lastIndex=0;;){const s=pr.exec(A),r=pr.lastIndex;let o=s[1];const a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===i){Ra(e,l===void 0?new Vp(o,n,t):new Op(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new qp(o),Ra(e,h)),e=h}}}class ps{constructor(t,e){this.seq=[],this.map={};const A=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Hp(s,r,this)}}setValue(t,e,A,i){const s=this.map[e];s!==void 0&&s.setValue(t,A,i)}setOptional(t,e,A){const i=e[A];i!==void 0&&this.setValue(t,A,i)}static upload(t,e,A,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],a=A[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}}static seqWithValue(t,e){const A=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&A.push(r)}return A}}function Pa(n,t,e){const A=n.createShader(t);return n.shaderSource(A,e),n.compileShader(A),A}const Qp=37297;let kp=0;function zp(n,t){const e=n.split(`
`),A=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;A.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return A.join(`
`)}function Gp(n){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(n);let A;switch(t===e?A="":t===xs&&e===_s?A="LinearDisplayP3ToLinearSRGB":t===_s&&e===xs&&(A="LinearSRGBToLinearDisplayP3"),n){case zA:case Cs:return[A,"LinearTransferOETF"];case pe:case $r:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[A,"LinearTransferOETF"]}}function Da(n,t,e){const A=n.getShaderParameter(t,n.COMPILE_STATUS),i=n.getShaderInfoLog(t).trim();if(A&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+zp(n.getShaderSource(t),r)}else return i}function Wp(n,t){const e=Gp(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kp(n,t){let e;switch(t){case sh:e="Linear";break;case rh:e="Reinhard";break;case oh:e="OptimizedCineon";break;case bl:e="ACESFilmic";break;case lh:e="AgX";break;case ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Xp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)}function Jp(n){const t=[];for(const e in n){const A=n[e];A!==!1&&t.push("#define "+e+" "+A)}return t.join(`
`)}function jp(n,t){const e={},A=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const s=n.getActiveAttrib(t,i),r=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Zi(n){return n!==""}function Ia(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ua(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(n){return n.replace(Zp,tm)}const $p=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tm(n,t){let e=Nt[t];if(e===void 0){const A=$p.get(t);if(A!==void 0)e=Nt[A],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,A);else throw new Error("Can not resolve #include <"+t+">")}return Wr(e)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(n){return n.replace(em,Am)}function Am(n,t,e,A){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Na(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function im(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===OA&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case An:case nn:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nn:t="ENVMAP_MODE_REFRACTION";break}return t}function rm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case nh:t="ENVMAP_BLENDING_ADD";break}return t}function om(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,A=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:A,maxMip:e}}function am(n,t,e,A){const i=n.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const a=im(e),l=nm(e),c=sm(e),h=rm(e),u=om(e),f=e.isWebGL2?"":Yp(e),m=Xp(e),v=Jp(s),p=i.createProgram();let d,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zi).join(`
`),d.length>0&&(d+=`
`),g=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zi).join(`
`),g.length>0&&(g+=`
`)):(d=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),g=[f,Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Nt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Wp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),r=Wr(r),r=Ia(r,e),r=Ua(r,e),o=Wr(o),o=Ia(o,e),o=Ua(o,e),r=La(r),o=La(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=_+d+r,R=_+g+o,b=Pa(i,i.VERTEX_SHADER,E),T=Pa(i,i.FRAGMENT_SHADER,R);i.attachShader(p,b),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function V(H){if(n.debug.checkShaderErrors){const j=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(T).trim();let Q=!0,z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,p,b,T);else{const G=Da(i,b,"vertex"),W=Da(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+G+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||L==="")&&(z=!1);z&&(H.diagnostics={runnable:Q,programLog:j,vertexShader:{log:P,prefix:d},fragmentShader:{log:L,prefix:g}})}i.deleteShader(b),i.deleteShader(T),w=new ps(i,p),S=jp(i,p)}let w;this.getUniforms=function(){return w===void 0&&V(this),w};let S;this.getAttributes=function(){return S===void 0&&V(this),S};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=i.getProgramParameter(p,Qp)),q},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,A=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(A),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const A of e)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let A=e.get(t);return A===void 0&&(A=new Set,e.set(t,A)),A}_getShaderStage(t){const e=this.shaderCache;let A=e.get(t);return A===void 0&&(A=new hm(t),e.set(t,A)),A}}class hm{constructor(t){this.id=lm++,this.code=t,this.usedTimes=0}}function um(n,t,e,A,i,s,r){const o=new kl,a=new cm,l=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function p(w,S,q,H,j){const P=H.fog,L=j.geometry,Q=w.isMeshStandardMaterial?H.environment:null,z=(w.isMeshStandardMaterial?e:t).get(w.envMap||Q),G=z&&z.mapping===Ts?z.image.height:null,W=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=K!==void 0?K.length:0;let At=0;L.morphAttributes.position!==void 0&&(At=1),L.morphAttributes.normal!==void 0&&(At=2),L.morphAttributes.color!==void 0&&(At=3);let k,Y,ct,_t;if(W){const qe=yA[W];k=qe.vertexShader,Y=qe.fragmentShader}else k=w.vertexShader,Y=w.fragmentShader,a.update(w),ct=a.getVertexShaderID(w),_t=a.getFragmentShaderID(w);const vt=n.getRenderTarget(),Dt=j.isInstancedMesh===!0,Ut=j.isBatchedMesh===!0,yt=!!w.map,Yt=!!w.matcap,I=!!z,Oe=!!w.aoMap,wt=!!w.lightMap,Bt=!!w.bumpMap,pt=!!w.normalMap,de=!!w.displacementMap,Ft=!!w.emissiveMap,y=!!w.metalnessMap,x=!!w.roughnessMap,N=w.anisotropy>0,Z=w.clearcoat>0,J=w.iridescence>0,$=w.sheen>0,mt=w.transmission>0,lt=N&&!!w.anisotropyMap,ut=Z&&!!w.clearcoatMap,St=Z&&!!w.clearcoatNormalMap,Vt=Z&&!!w.clearcoatRoughnessMap,X=J&&!!w.iridescenceMap,Ae=J&&!!w.iridescenceThicknessMap,zt=$&&!!w.sheenColorMap,Ct=$&&!!w.sheenRoughnessMap,xt=!!w.specularMap,dt=!!w.specularColorMap,Lt=!!w.specularIntensityMap,ee=mt&&!!w.transmissionMap,me=mt&&!!w.thicknessMap,qt=!!w.gradientMap,it=!!w.alphaMap,B=w.alphaTest>0,ot=!!w.alphaHash,at=!!w.extensions,bt=!!L.attributes.uv1,Et=!!L.attributes.uv2,se=!!L.attributes.uv3;let re=ni;return w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(re=n.toneMapping),{isWebGL2:c,shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:k,fragmentShader:Y,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ut,instancing:Dt,instancingColor:Dt&&j.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:vt===null?n.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:zA,map:yt,matcap:Yt,envMap:I,envMapMode:I&&z.mapping,envMapCubeUVHeight:G,aoMap:Oe,lightMap:wt,bumpMap:Bt,normalMap:pt,displacementMap:u&&de,emissiveMap:Ft,normalMapObjectSpace:pt&&w.normalMapType===wh,normalMapTangentSpace:pt&&w.normalMapType===Nl,metalnessMap:y,roughnessMap:x,anisotropy:N,anisotropyMap:lt,clearcoat:Z,clearcoatMap:ut,clearcoatNormalMap:St,clearcoatRoughnessMap:Vt,iridescence:J,iridescenceMap:X,iridescenceThicknessMap:Ae,sheen:$,sheenColorMap:zt,sheenRoughnessMap:Ct,specularMap:xt,specularColorMap:dt,specularIntensityMap:Lt,transmission:mt,transmissionMap:ee,thicknessMap:me,gradientMap:qt,opaque:w.transparent===!1&&w.blending===$i,alphaMap:it,alphaTest:B,alphaHash:ot,combine:w.combine,mapUv:yt&&v(w.map.channel),aoMapUv:Oe&&v(w.aoMap.channel),lightMapUv:wt&&v(w.lightMap.channel),bumpMapUv:Bt&&v(w.bumpMap.channel),normalMapUv:pt&&v(w.normalMap.channel),displacementMapUv:de&&v(w.displacementMap.channel),emissiveMapUv:Ft&&v(w.emissiveMap.channel),metalnessMapUv:y&&v(w.metalnessMap.channel),roughnessMapUv:x&&v(w.roughnessMap.channel),anisotropyMapUv:lt&&v(w.anisotropyMap.channel),clearcoatMapUv:ut&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:St&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&v(w.sheenRoughnessMap.channel),specularMapUv:xt&&v(w.specularMap.channel),specularColorMapUv:dt&&v(w.specularColorMap.channel),specularIntensityMapUv:Lt&&v(w.specularIntensityMap.channel),transmissionMapUv:ee&&v(w.transmissionMap.channel),thicknessMapUv:me&&v(w.thicknessMap.channel),alphaMapUv:it&&v(w.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pt||N),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:Et,vertexUv3s:se,pointsUvs:j.isPoints===!0&&!!L.attributes.uv&&(yt||it),fog:!!P,useFog:w.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:At,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:yt&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===TA,flipSided:w.side===Ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:at&&w.extensions.derivatives===!0,extensionFragDepth:at&&w.extensions.fragDepth===!0,extensionDrawBuffers:at&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&w.extensions.clipCullDistance&&A.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||A.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||A.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||A.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const q in w.defines)S.push(q),S.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(g(S,w),_(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function E(w){const S=m[w.type];let q;if(S){const H=yA[S];q=Ms.clone(H.uniforms)}else q=w.uniforms;return q}function R(w,S){let q;for(let H=0,j=l.length;H<j;H++){const P=l[H];if(P.cacheKey===S){q=P,++q.usedTimes;break}}return q===void 0&&(q=new am(n,S,w,s),l.push(q)),q}function b(w){if(--w.usedTimes===0){const S=l.indexOf(w);l[S]=l[l.length-1],l.pop(),w.destroy()}}function T(w){a.remove(w)}function V(){a.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:R,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:V}}function dm(){let n=new WeakMap;function t(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function e(s){n.delete(s)}function A(s,r,o){n.get(s)[r]=o}function i(){n=new WeakMap}return{get:t,remove:e,update:A,dispose:i}}function fm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fa(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Va(){const n=[];let t=0;const e=[],A=[],i=[];function s(){t=0,e.length=0,A.length=0,i.length=0}function r(h,u,f,m,v,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:u,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=f,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=v,d.group=p),t++,d}function o(h,u,f,m,v,p){const d=r(h,u,f,m,v,p);f.transmission>0?A.push(d):f.transparent===!0?i.push(d):e.push(d)}function a(h,u,f,m,v,p){const d=r(h,u,f,m,v,p);f.transmission>0?A.unshift(d):f.transparent===!0?i.unshift(d):e.unshift(d)}function l(h,u){e.length>1&&e.sort(h||fm),A.length>1&&A.sort(u||Fa),i.length>1&&i.sort(u||Fa)}function c(){for(let h=t,u=n.length;h<u;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:A,transparent:i,init:s,push:o,unshift:a,finish:c,sort:l}}function pm(){let n=new WeakMap;function t(A,i){const s=n.get(A);let r;return s===void 0?(r=new Va,n.set(A,[r])):i>=s.length?(r=new Va,s.push(r)):r=s[i],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function mm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new rt};break;case"SpotLight":e={position:new C,direction:new C,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function gm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let vm=0;function _m(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xm(n,t){const e=new mm,A=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new Gt,o=new Gt;function a(c,h){let u=0,f=0,m=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,p=0,d=0,g=0,_=0,E=0,R=0,b=0,T=0,V=0,w=0;c.sort(_m);const S=h===!0?Math.PI:1;for(let H=0,j=c.length;H<j;H++){const P=c[H],L=P.color,Q=P.intensity,z=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*Q*S,f+=L.g*Q*S,m+=L.b*Q*S;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],Q);w++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const K=P.shadow,et=A.get(P);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,i.directionalShadow[v]=et,i.directionalShadowMap[v]=G,i.directionalShadowMatrix[v]=P.shadow.matrix,E++}i.directional[v]=W,v++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(L).multiplyScalar(Q*S),W.distance=z,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[d]=W;const K=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&V++),i.spotLightMatrix[d]=K.matrix,P.castShadow){const et=A.get(P);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,i.spotShadow[d]=et,i.spotShadowMap[d]=G,b++}d++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(L).multiplyScalar(Q),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*S),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,et=A.get(P);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=G,i.pointShadowMatrix[p]=P.shadow.matrix,R++}i.point[p]=W,p++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(Q*S),W.groundColor.copy(P.groundColor).multiplyScalar(Q*S),i.hemi[_]=W,_++}}g>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const q=i.hash;(q.directionalLength!==v||q.pointLength!==p||q.spotLength!==d||q.rectAreaLength!==g||q.hemiLength!==_||q.numDirectionalShadows!==E||q.numPointShadows!==R||q.numSpotShadows!==b||q.numSpotMaps!==T||q.numLightProbes!==w)&&(i.directional.length=v,i.spot.length=d,i.rectArea.length=g,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+T-V,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=w,q.directionalLength=v,q.pointLength=p,q.spotLength=d,q.rectAreaLength=g,q.hemiLength=_,q.numDirectionalShadows=E,q.numPointShadows=R,q.numSpotShadows=b,q.numSpotMaps=T,q.numLightProbes=w,i.version=vm++)}function l(c,h){let u=0,f=0,m=0,v=0,p=0;const d=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const E=c[g];if(E.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),u++}else if(E.isSpotLight){const R=i.spot[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),m++}else if(E.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),o.identity(),r.copy(E.matrixWorld),r.premultiply(d),o.extractRotation(r),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),f++}else if(E.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:i}}function Oa(n,t){const e=new xm(n,t),A=[],i=[];function s(){A.length=0,i.length=0}function r(h){A.push(h)}function o(h){i.push(h)}function a(h){e.setup(A,h)}function l(h){e.setupView(A,h)}return{init:s,state:{lightsArray:A,shadowsArray:i,lights:e},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wm(n,t){let e=new WeakMap;function A(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Oa(n,t),e.set(s,[a])):r>=o.length?(a=new Oa(n,t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:A,dispose:i}}class Em extends un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mm extends un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bm(n,t,e){let A=new to;const i=new st,s=new st,r=new he,o=new Em({depthPacking:xh}),a=new Mm,l={},c=e.maxTextureSize,h={[oi]:Ke,[Ke]:oi,[TA]:TA},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Sm,fragmentShader:ym}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Pe;m.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let d=this.type;this.render=function(b,T,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),H=n.state;H.setBlending(HA),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=d!==OA&&this.type===OA,P=d===OA&&this.type!==OA;for(let L=0,Q=b.length;L<Q;L++){const z=b[L],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const W=G.getFrameExtents();if(i.multiply(W),s.copy(G.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/W.x),i.x=s.x*W.x,G.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/W.y),i.y=s.y*W.y,G.mapSize.y=s.y)),G.map===null||j===!0||P===!0){const et=this.type!==OA?{minFilter:Ge,magFilter:Ge}:{};G.map!==null&&G.map.dispose(),G.map=new EA(i.x,i.y,et),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const K=G.getViewportCount();for(let et=0;et<K;et++){const At=G.getViewport(et);r.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),H.viewport(r),G.updateMatrices(z,et),A=G.getFrustum(),E(T,V,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===OA&&g(G,V),G.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(w,S,q)};function g(b,T){const V=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new EA(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,V,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,V,f,v,null)}function _(b,T,V,w){let S=null;const q=V.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0)S=q;else if(S=V.isPointLight===!0?a:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=S.uuid,j=T.uuid;let P=l[H];P===void 0&&(P={},l[H]=P);let L=P[j];L===void 0&&(L=S.clone(),P[j]=L,T.addEventListener("dispose",R)),S=L}if(S.visible=T.visible,S.wireframe=T.wireframe,w===OA?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=V}return S}function E(b,T,V,w,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===OA)&&(!b.frustumCulled||A.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld);const j=t.update(b),P=b.material;if(Array.isArray(P)){const L=j.groups;for(let Q=0,z=L.length;Q<z;Q++){const G=L[Q],W=P[G.materialIndex];if(W&&W.visible){const K=_(b,W,w,S);b.onBeforeShadow(n,b,T,V,j,K,G),n.renderBufferDirect(V,null,j,K,b,G),b.onAfterShadow(n,b,T,V,j,K,G)}}}else if(P.visible){const L=_(b,P,w,S);b.onBeforeShadow(n,b,T,V,j,L,null),n.renderBufferDirect(V,null,j,L,b,null),b.onAfterShadow(n,b,T,V,j,L,null)}}const H=b.children;for(let j=0,P=H.length;j<P;j++)E(H[j],T,V,w,S)}function R(b){b.target.removeEventListener("dispose",R);for(const V in l){const w=l[V],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Tm(n,t,e){const A=e.isWebGL2;function i(){let B=!1;const ot=new he;let at=null;const bt=new he(0,0,0,0);return{setMask:function(Et){at!==Et&&!B&&(n.colorMask(Et,Et,Et,Et),at=Et)},setLocked:function(Et){B=Et},setClear:function(Et,se,re,Te,qe){qe===!0&&(Et*=Te,se*=Te,re*=Te),ot.set(Et,se,re,Te),bt.equals(ot)===!1&&(n.clearColor(Et,se,re,Te),bt.copy(ot))},reset:function(){B=!1,at=null,bt.set(-1,0,0,0)}}}function s(){let B=!1,ot=null,at=null,bt=null;return{setTest:function(Et){Et?Ut(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(Et){ot!==Et&&!B&&(n.depthMask(Et),ot=Et)},setFunc:function(Et){if(at!==Et){switch(Et){case Jc:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case Zc:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case $c:n.depthFunc(n.EQUAL);break;case th:n.depthFunc(n.GEQUAL);break;case eh:n.depthFunc(n.GREATER);break;case Ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=Et}},setLocked:function(Et){B=Et},setClear:function(Et){bt!==Et&&(n.clearDepth(Et),bt=Et)},reset:function(){B=!1,ot=null,at=null,bt=null}}}function r(){let B=!1,ot=null,at=null,bt=null,Et=null,se=null,re=null,Te=null,qe=null;return{setTest:function(oe){B||(oe?Ut(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(oe){ot!==oe&&!B&&(n.stencilMask(oe),ot=oe)},setFunc:function(oe,He,SA){(at!==oe||bt!==He||Et!==SA)&&(n.stencilFunc(oe,He,SA),at=oe,bt=He,Et=SA)},setOp:function(oe,He,SA){(se!==oe||re!==He||Te!==SA)&&(n.stencilOp(oe,He,SA),se=oe,re=He,Te=SA)},setLocked:function(oe){B=oe},setClear:function(oe){qe!==oe&&(n.clearStencil(oe),qe=oe)},reset:function(){B=!1,ot=null,at=null,bt=null,Et=null,se=null,re=null,Te=null,qe=null}}}const o=new i,a=new s,l=new r,c=new WeakMap,h=new WeakMap;let u={},f={},m=new WeakMap,v=[],p=null,d=!1,g=null,_=null,E=null,R=null,b=null,T=null,V=null,w=new rt(0,0,0),S=0,q=!1,H=null,j=null,P=null,L=null,Q=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=W>=2);let et=null,At={};const k=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ct=new he().fromArray(k),_t=new he().fromArray(Y);function vt(B,ot,at,bt){const Et=new Uint8Array(4),se=n.createTexture();n.bindTexture(B,se),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<at;re++)A&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(ot,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(ot+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return se}const Dt={};Dt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),A&&(Dt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Ut(n.DEPTH_TEST),a.setFunc(gs),Ft(!1),y(Eo),Ut(n.CULL_FACE),pt(HA);function Ut(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function yt(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Yt(B,ot){return f[B]!==ot?(n.bindFramebuffer(B,ot),f[B]=ot,A&&(B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ot),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ot)),!0):!1}function I(B,ot){let at=v,bt=!1;if(B)if(at=m.get(ot),at===void 0&&(at=[],m.set(ot,at)),B.isWebGLMultipleRenderTargets){const Et=B.texture;if(at.length!==Et.length||at[0]!==n.COLOR_ATTACHMENT0){for(let se=0,re=Et.length;se<re;se++)at[se]=n.COLOR_ATTACHMENT0+se;at.length=Et.length,bt=!0}}else at[0]!==n.COLOR_ATTACHMENT0&&(at[0]=n.COLOR_ATTACHMENT0,bt=!0);else at[0]!==n.BACK&&(at[0]=n.BACK,bt=!0);bt&&(e.isWebGL2?n.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Oe(B){return p!==B?(n.useProgram(B),p=B,!0):!1}const wt={[_i]:n.FUNC_ADD,[Lc]:n.FUNC_SUBTRACT,[Nc]:n.FUNC_REVERSE_SUBTRACT};if(A)wt[yo]=n.MIN,wt[bo]=n.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(wt[yo]=B.MIN_EXT,wt[bo]=B.MAX_EXT)}const Bt={[Fc]:n.ZERO,[Vc]:n.ONE,[Oc]:n.SRC_COLOR,[Fr]:n.SRC_ALPHA,[Gc]:n.SRC_ALPHA_SATURATE,[kc]:n.DST_COLOR,[Hc]:n.DST_ALPHA,[qc]:n.ONE_MINUS_SRC_COLOR,[Vr]:n.ONE_MINUS_SRC_ALPHA,[zc]:n.ONE_MINUS_DST_COLOR,[Qc]:n.ONE_MINUS_DST_ALPHA,[Wc]:n.CONSTANT_COLOR,[Kc]:n.ONE_MINUS_CONSTANT_COLOR,[Yc]:n.CONSTANT_ALPHA,[Xc]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(B,ot,at,bt,Et,se,re,Te,qe,oe){if(B===HA){d===!0&&(yt(n.BLEND),d=!1);return}if(d===!1&&(Ut(n.BLEND),d=!0),B!==Uc){if(B!==g||oe!==q){if((_!==_i||b!==_i)&&(n.blendEquation(n.FUNC_ADD),_=_i,b=_i),oe)switch(B){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kA:n.blendFunc(n.ONE,n.ONE);break;case Mo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case So:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kA:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case So:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,R=null,T=null,V=null,w.set(0,0,0),S=0,g=B,q=oe}return}Et=Et||ot,se=se||at,re=re||bt,(ot!==_||Et!==b)&&(n.blendEquationSeparate(wt[ot],wt[Et]),_=ot,b=Et),(at!==E||bt!==R||se!==T||re!==V)&&(n.blendFuncSeparate(Bt[at],Bt[bt],Bt[se],Bt[re]),E=at,R=bt,T=se,V=re),(Te.equals(w)===!1||qe!==S)&&(n.blendColor(Te.r,Te.g,Te.b,qe),w.copy(Te),S=qe),g=B,q=!1}function de(B,ot){B.side===TA?yt(n.CULL_FACE):Ut(n.CULL_FACE);let at=B.side===Ke;ot&&(at=!at),Ft(at),B.blending===$i&&B.transparent===!1?pt(HA):pt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),o.setMask(B.colorWrite);const bt=B.stencilWrite;l.setTest(bt),bt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),N(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ut(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(B){H!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),H=B)}function y(B){B!==Dc?(Ut(n.CULL_FACE),B!==j&&(B===Eo?n.cullFace(n.BACK):B===Ic?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),j=B}function x(B){B!==P&&(G&&n.lineWidth(B),P=B)}function N(B,ot,at){B?(Ut(n.POLYGON_OFFSET_FILL),(L!==ot||Q!==at)&&(n.polygonOffset(ot,at),L=ot,Q=at)):yt(n.POLYGON_OFFSET_FILL)}function Z(B){B?Ut(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function J(B){B===void 0&&(B=n.TEXTURE0+z-1),et!==B&&(n.activeTexture(B),et=B)}function $(B,ot,at){at===void 0&&(et===null?at=n.TEXTURE0+z-1:at=et);let bt=At[at];bt===void 0&&(bt={type:void 0,texture:void 0},At[at]=bt),(bt.type!==B||bt.texture!==ot)&&(et!==at&&(n.activeTexture(at),et=at),n.bindTexture(B,ot||Dt[B]),bt.type=B,bt.texture=ot)}function mt(){const B=At[et];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function lt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){ct.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ct.copy(B))}function ee(B){_t.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),_t.copy(B))}function me(B,ot){let at=h.get(ot);at===void 0&&(at=new WeakMap,h.set(ot,at));let bt=at.get(B);bt===void 0&&(bt=n.getUniformBlockIndex(ot,B.name),at.set(B,bt))}function qt(B,ot){const bt=h.get(ot).get(B);c.get(ot)!==bt&&(n.uniformBlockBinding(ot,bt,B.__bindingPointIndex),c.set(ot,bt))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),A===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,At={},f={},m=new WeakMap,v=[],p=null,d=!1,g=null,_=null,E=null,R=null,b=null,T=null,V=null,w=new rt(0,0,0),S=0,q=!1,H=null,j=null,P=null,L=null,Q=null,ct.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:Ut,disable:yt,bindFramebuffer:Yt,drawBuffers:I,useProgram:Oe,setBlending:pt,setMaterial:de,setFlipSided:Ft,setCullFace:y,setLineWidth:x,setPolygonOffset:N,setScissorTest:Z,activeTexture:J,bindTexture:$,unbindTexture:mt,compressedTexImage2D:lt,compressedTexImage3D:ut,texImage2D:xt,texImage3D:dt,updateUBOMapping:me,uniformBlockBinding:qt,texStorage2D:zt,texStorage3D:Ct,texSubImage2D:St,texSubImage3D:Vt,compressedTexSubImage2D:X,compressedTexSubImage3D:Ae,scissor:Lt,viewport:ee,reset:it}}function Cm(n,t,e,A,i,s,r){const o=i.isWebGL2,a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(y,x){return f?new OffscreenCanvas(y,x):Es("canvas")}function v(y,x,N,Z){let J=1;if((y.width>Z||y.height>Z)&&(J=Z/Math.max(y.width,y.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const $=x?zr:Math.floor,mt=$(J*y.width),lt=$(J*y.height);h===void 0&&(h=m(mt,lt));const ut=N?m(mt,lt):h;return ut.width=mt,ut.height=lt,ut.getContext("2d").drawImage(y,0,0,mt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+mt+"x"+lt+")."),ut}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Aa(y.width)&&Aa(y.height)}function d(y){return o?!1:y.wrapS!==vA||y.wrapT!==vA||y.minFilter!==Ge&&y.minFilter!==lA}function g(y,x){return y.generateMipmaps&&x&&y.minFilter!==Ge&&y.minFilter!==lA}function _(y){n.generateMipmap(y)}function E(y,x,N,Z,J=!1){if(o===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=x;if(x===n.RED&&(N===n.FLOAT&&($=n.R32F),N===n.HALF_FLOAT&&($=n.R16F),N===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&($=n.R8UI),N===n.UNSIGNED_SHORT&&($=n.R16UI),N===n.UNSIGNED_INT&&($=n.R32UI),N===n.BYTE&&($=n.R8I),N===n.SHORT&&($=n.R16I),N===n.INT&&($=n.R32I)),x===n.RG&&(N===n.FLOAT&&($=n.RG32F),N===n.HALF_FLOAT&&($=n.RG16F),N===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RGBA){const mt=J?vs:ie.getTransfer(Z);N===n.FLOAT&&($=n.RGBA32F),N===n.HALF_FLOAT&&($=n.RGBA16F),N===n.UNSIGNED_BYTE&&($=mt===le?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function R(y,x,N){return g(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Ge&&y.minFilter!==lA?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function b(y){return y===Ge||y===To||y===qs?n.NEAREST:n.LINEAR}function T(y){const x=y.target;x.removeEventListener("dispose",T),w(x),x.isVideoTexture&&c.delete(x)}function V(y){const x=y.target;x.removeEventListener("dispose",V),q(x)}function w(y){const x=A.get(y);if(x.__webglInit===void 0)return;const N=y.source,Z=u.get(N);if(Z){const J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(y),Object.keys(Z).length===0&&u.delete(N)}A.remove(y)}function S(y){const x=A.get(y);n.deleteTexture(x.__webglTexture);const N=y.source,Z=u.get(N);delete Z[x.__cacheKey],r.memory.textures--}function q(y){const x=y.texture,N=A.get(y),Z=A.get(x);if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),r.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(N.__webglFramebuffer[J]))for(let $=0;$<N.__webglFramebuffer[J].length;$++)n.deleteFramebuffer(N.__webglFramebuffer[J][$]);else n.deleteFramebuffer(N.__webglFramebuffer[J]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[J])}else{if(Array.isArray(N.__webglFramebuffer))for(let J=0;J<N.__webglFramebuffer.length;J++)n.deleteFramebuffer(N.__webglFramebuffer[J]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let J=0,$=x.length;J<$;J++){const mt=A.get(x[J]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),r.memory.textures--),A.remove(x[J])}A.remove(x),A.remove(y)}let H=0;function j(){H=0}function P(){const y=H;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),H+=1,y}function L(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function Q(y,x){const N=A.get(y);if(y.isVideoTexture&&de(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(N,y,x);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function z(y,x){const N=A.get(y);if(y.version>0&&N.__version!==y.version){ct(N,y,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function G(y,x){const N=A.get(y);if(y.version>0&&N.__version!==y.version){ct(N,y,x);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function W(y,x){const N=A.get(y);if(y.version>0&&N.__version!==y.version){_t(N,y,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const K={[sn]:n.REPEAT,[vA]:n.CLAMP_TO_EDGE,[Hr]:n.MIRRORED_REPEAT},et={[Ge]:n.NEAREST,[To]:n.NEAREST_MIPMAP_NEAREST,[qs]:n.NEAREST_MIPMAP_LINEAR,[lA]:n.LINEAR,[ch]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},At={[Eh]:n.NEVER,[Ch]:n.ALWAYS,[Mh]:n.LESS,[Fl]:n.LEQUAL,[Sh]:n.EQUAL,[Th]:n.GEQUAL,[yh]:n.GREATER,[bh]:n.NOTEQUAL};function k(y,x,N){if(N?(n.texParameteri(y,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,K[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,et[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,et[x.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==vA||x.wrapT!==vA)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,b(x.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==Ge&&x.minFilter!==lA&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ge||x.minFilter!==qs&&x.minFilter!==Dn||x.type===ii&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===QA&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||A.get(x).__currentAnisotropy)&&(n.texParameterf(y,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),A.get(x).__currentAnisotropy=x.anisotropy)}}function Y(y,x){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",T));const Z=x.source;let J=u.get(Z);J===void 0&&(J={},u.set(Z,J));const $=L(x);if($!==y.__cacheKey){J[$]===void 0&&(J[$]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,N=!0),J[$].usedTimes++;const mt=J[y.__cacheKey];mt!==void 0&&(J[y.__cacheKey].usedTimes--,mt.usedTimes===0&&S(x)),y.__cacheKey=$,y.__webglTexture=J[$].texture}return N}function ct(y,x,N){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);const J=Y(y,x),$=x.source;e.bindTexture(Z,y.__webglTexture,n.TEXTURE0+N);const mt=A.get($);if($.version!==mt.__version||J===!0){e.activeTexture(n.TEXTURE0+N);const lt=ie.getPrimaries(ie.workingColorSpace),ut=x.colorSpace===cA?null:ie.getPrimaries(x.colorSpace),St=x.colorSpace===cA||lt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Vt=d(x)&&p(x.image)===!1;let X=v(x.image,Vt,!1,i.maxTextureSize);X=Ft(x,X);const Ae=p(X)||o,zt=s.convert(x.format,x.colorSpace);let Ct=s.convert(x.type),xt=E(x.internalFormat,zt,Ct,x.colorSpace,x.isVideoTexture);k(Z,x,Ae);let dt;const Lt=x.mipmaps,ee=o&&x.isVideoTexture!==!0&&xt!==Ul,me=mt.__version===void 0||J===!0,qt=R(x,X,Ae);if(x.isDepthTexture)xt=n.DEPTH_COMPONENT,o?x.type===ii?xt=n.DEPTH_COMPONENT32F:x.type===Ai?xt=n.DEPTH_COMPONENT24:x.type===Ei?xt=n.DEPTH24_STENCIL8:xt=n.DEPTH_COMPONENT16:x.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Mi&&xt===n.DEPTH_COMPONENT&&x.type!==Zr&&x.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ai,Ct=s.convert(x.type)),x.format===rn&&xt===n.DEPTH_COMPONENT&&(xt=n.DEPTH_STENCIL,x.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ei,Ct=s.convert(x.type))),me&&(ee?e.texStorage2D(n.TEXTURE_2D,1,xt,X.width,X.height):e.texImage2D(n.TEXTURE_2D,0,xt,X.width,X.height,0,zt,Ct,null));else if(x.isDataTexture)if(Lt.length>0&&Ae){ee&&me&&e.texStorage2D(n.TEXTURE_2D,qt,xt,Lt[0].width,Lt[0].height);for(let it=0,B=Lt.length;it<B;it++)dt=Lt[it],ee?e.texSubImage2D(n.TEXTURE_2D,it,0,0,dt.width,dt.height,zt,Ct,dt.data):e.texImage2D(n.TEXTURE_2D,it,xt,dt.width,dt.height,0,zt,Ct,dt.data);x.generateMipmaps=!1}else ee?(me&&e.texStorage2D(n.TEXTURE_2D,qt,xt,X.width,X.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,zt,Ct,X.data)):e.texImage2D(n.TEXTURE_2D,0,xt,X.width,X.height,0,zt,Ct,X.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ee&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,xt,Lt[0].width,Lt[0].height,X.depth);for(let it=0,B=Lt.length;it<B;it++)dt=Lt[it],x.format!==_A?zt!==null?ee?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,X.depth,zt,dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,xt,dt.width,dt.height,X.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,X.depth,zt,Ct,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,xt,dt.width,dt.height,X.depth,0,zt,Ct,dt.data)}else{ee&&me&&e.texStorage2D(n.TEXTURE_2D,qt,xt,Lt[0].width,Lt[0].height);for(let it=0,B=Lt.length;it<B;it++)dt=Lt[it],x.format!==_A?zt!==null?ee?e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,dt.width,dt.height,zt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,it,xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(n.TEXTURE_2D,it,0,0,dt.width,dt.height,zt,Ct,dt.data):e.texImage2D(n.TEXTURE_2D,it,xt,dt.width,dt.height,0,zt,Ct,dt.data)}else if(x.isDataArrayTexture)ee?(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,xt,X.width,X.height,X.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,zt,Ct,X.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,X.width,X.height,X.depth,0,zt,Ct,X.data);else if(x.isData3DTexture)ee?(me&&e.texStorage3D(n.TEXTURE_3D,qt,xt,X.width,X.height,X.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,zt,Ct,X.data)):e.texImage3D(n.TEXTURE_3D,0,xt,X.width,X.height,X.depth,0,zt,Ct,X.data);else if(x.isFramebufferTexture){if(me)if(ee)e.texStorage2D(n.TEXTURE_2D,qt,xt,X.width,X.height);else{let it=X.width,B=X.height;for(let ot=0;ot<qt;ot++)e.texImage2D(n.TEXTURE_2D,ot,xt,it,B,0,zt,Ct,null),it>>=1,B>>=1}}else if(Lt.length>0&&Ae){ee&&me&&e.texStorage2D(n.TEXTURE_2D,qt,xt,Lt[0].width,Lt[0].height);for(let it=0,B=Lt.length;it<B;it++)dt=Lt[it],ee?e.texSubImage2D(n.TEXTURE_2D,it,0,0,zt,Ct,dt):e.texImage2D(n.TEXTURE_2D,it,xt,zt,Ct,dt);x.generateMipmaps=!1}else ee?(me&&e.texStorage2D(n.TEXTURE_2D,qt,xt,X.width,X.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,zt,Ct,X)):e.texImage2D(n.TEXTURE_2D,0,xt,zt,Ct,X);g(x,Ae)&&_(Z),mt.__version=$.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function _t(y,x,N){if(x.image.length!==6)return;const Z=Y(y,x),J=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const $=A.get(J);if(J.version!==$.__version||Z===!0){e.activeTexture(n.TEXTURE0+N);const mt=ie.getPrimaries(ie.workingColorSpace),lt=x.colorSpace===cA?null:ie.getPrimaries(x.colorSpace),ut=x.colorSpace===cA||mt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,Vt=x.image[0]&&x.image[0].isDataTexture,X=[];for(let it=0;it<6;it++)!St&&!Vt?X[it]=v(x.image[it],!1,!0,i.maxCubemapSize):X[it]=Vt?x.image[it].image:x.image[it],X[it]=Ft(x,X[it]);const Ae=X[0],zt=p(Ae)||o,Ct=s.convert(x.format,x.colorSpace),xt=s.convert(x.type),dt=E(x.internalFormat,Ct,xt,x.colorSpace),Lt=o&&x.isVideoTexture!==!0,ee=$.__version===void 0||Z===!0;let me=R(x,Ae,zt);k(n.TEXTURE_CUBE_MAP,x,zt);let qt;if(St){Lt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,me,dt,Ae.width,Ae.height);for(let it=0;it<6;it++){qt=X[it].mipmaps;for(let B=0;B<qt.length;B++){const ot=qt[B];x.format!==_A?Ct!==null?Lt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B,0,0,ot.width,ot.height,Ct,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B,0,0,ot.width,ot.height,Ct,xt,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B,dt,ot.width,ot.height,0,Ct,xt,ot.data)}}}else{qt=x.mipmaps,Lt&&ee&&(qt.length>0&&me++,e.texStorage2D(n.TEXTURE_CUBE_MAP,me,dt,X[0].width,X[0].height));for(let it=0;it<6;it++)if(Vt){Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,X[it].width,X[it].height,Ct,xt,X[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,X[it].width,X[it].height,0,Ct,xt,X[it].data);for(let B=0;B<qt.length;B++){const at=qt[B].image[it].image;Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B+1,0,0,at.width,at.height,Ct,xt,at.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B+1,dt,at.width,at.height,0,Ct,xt,at.data)}}else{Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct,xt,X[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,dt,Ct,xt,X[it]);for(let B=0;B<qt.length;B++){const ot=qt[B];Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B+1,0,0,Ct,xt,ot.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,B+1,dt,Ct,xt,ot.image[it])}}}g(x,zt)&&_(n.TEXTURE_CUBE_MAP),$.__version=J.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function vt(y,x,N,Z,J,$){const mt=s.convert(N.format,N.colorSpace),lt=s.convert(N.type),ut=E(N.internalFormat,mt,lt,N.colorSpace);if(!A.get(x).__hasExternalTextures){const Vt=Math.max(1,x.width>>$),X=Math.max(1,x.height>>$);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,$,ut,Vt,X,x.depth,0,mt,lt,null):e.texImage2D(J,$,ut,Vt,X,0,mt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),pt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,A.get(N).__webglTexture,0,Bt(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,A.get(N).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(y,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let Z=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||pt(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===ii?Z=n.DEPTH_COMPONENT32F:J.type===Ai&&(Z=n.DEPTH_COMPONENT24));const $=Bt(x);pt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,Z,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Z,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const Z=Bt(x);N&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,x.width,x.height):pt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<Z.length;J++){const $=Z[J],mt=s.convert($.format,$.colorSpace),lt=s.convert($.type),ut=E($.internalFormat,mt,lt,$.colorSpace),St=Bt(x);N&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ut,x.width,x.height):pt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!A.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const Z=A.get(x.depthTexture).__webglTexture,J=Bt(x);if(x.depthTexture.format===Mi)pt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(x.depthTexture.format===rn)pt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function yt(y){const x=A.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,y)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=n.createRenderbuffer(),Dt(x.__webglDepthbuffer[Z],y,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Dt(x.__webglDepthbuffer,y,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(y,x,N){const Z=A.get(y);x!==void 0&&vt(Z.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&yt(y)}function I(y){const x=y.texture,N=A.get(y),Z=A.get(x);y.addEventListener("dispose",V),y.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,r.memory.textures++);const J=y.isWebGLCubeRenderTarget===!0,$=y.isWebGLMultipleRenderTargets===!0,mt=p(y)||o;if(J){N.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(o&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[lt]=[];for(let ut=0;ut<x.mipmaps.length;ut++)N.__webglFramebuffer[lt][ut]=n.createFramebuffer()}else N.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)N.__webglFramebuffer[lt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if($)if(i.drawBuffers){const lt=y.texture;for(let ut=0,St=lt.length;ut<St;ut++){const Vt=A.get(lt[ut]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&pt(y)===!1){const lt=$?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ut=0;ut<lt.length;ut++){const St=lt[ut];N.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ut]);const Vt=s.convert(St.format,St.colorSpace),X=s.convert(St.type),Ae=E(St.internalFormat,Vt,X,St.colorSpace,y.isXRRenderTarget===!0),zt=Bt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Ae,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,N.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),k(n.TEXTURE_CUBE_MAP,x,mt);for(let lt=0;lt<6;lt++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)vt(N.__webglFramebuffer[lt][ut],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else vt(N.__webglFramebuffer[lt],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(x,mt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){const lt=y.texture;for(let ut=0,St=lt.length;ut<St;ut++){const Vt=lt[ut],X=A.get(Vt);e.bindTexture(n.TEXTURE_2D,X.__webglTexture),k(n.TEXTURE_2D,Vt,mt),vt(N.__webglFramebuffer,y,Vt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),g(Vt,mt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?lt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,Z.__webglTexture),k(lt,x,mt),o&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)vt(N.__webglFramebuffer[ut],y,x,n.COLOR_ATTACHMENT0,lt,ut);else vt(N.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,lt,0);g(x,mt)&&_(lt),e.unbindTexture()}y.depthBuffer&&yt(y)}function Oe(y){const x=p(y)||o,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0,J=N.length;Z<J;Z++){const $=N[Z];if(g($,x)){const mt=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,lt=A.get($).__webglTexture;e.bindTexture(mt,lt),_(mt),e.unbindTexture()}}}function wt(y){if(o&&y.samples>0&&pt(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,Z=y.height;let J=n.COLOR_BUFFER_BIT;const $=[],mt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=A.get(y),ut=y.isWebGLMultipleRenderTargets===!0;if(ut)for(let St=0;St<x.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let St=0;St<x.length;St++){$.push(n.COLOR_ATTACHMENT0+St),y.depthBuffer&&$.push(mt);const Vt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Vt===!1&&(y.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[St]),Vt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[mt])),ut){const X=A.get(x[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,N,Z,0,0,N,Z,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<x.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,lt.__webglColorRenderbuffer[St]);const Vt=A.get(x[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Bt(y){return Math.min(i.maxSamples,y.samples)}function pt(y){const x=A.get(y);return o&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(y){const x=r.render.frame;c.get(y)!==x&&(c.set(y,x),y.update())}function Ft(y,x){const N=y.colorSpace,Z=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Qr||N!==zA&&N!==cA&&(ie.getTransfer(N)===le?o===!1?t.has("EXT_sRGB")===!0&&Z===_A?(y.format=Qr,y.minFilter=lA,y.generateMipmaps=!1):x=Ol.sRGBToLinear(x):(Z!==_A||J!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=pt}function Bm(n,t,e){const A=e.isWebGL2;function i(s,r=cA){let o;const a=ie.getTransfer(r);if(s===si)return n.UNSIGNED_BYTE;if(s===Bl)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===hh)return n.BYTE;if(s===uh)return n.SHORT;if(s===Zr)return n.UNSIGNED_SHORT;if(s===Cl)return n.INT;if(s===Ai)return n.UNSIGNED_INT;if(s===ii)return n.FLOAT;if(s===QA)return A?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===dh)return n.ALPHA;if(s===_A)return n.RGBA;if(s===fh)return n.LUMINANCE;if(s===ph)return n.LUMINANCE_ALPHA;if(s===Mi)return n.DEPTH_COMPONENT;if(s===rn)return n.DEPTH_STENCIL;if(s===Qr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===mh)return n.RED;if(s===Pl)return n.RED_INTEGER;if(s===gh)return n.RG;if(s===Dl)return n.RG_INTEGER;if(s===Il)return n.RGBA_INTEGER;if(s===Hs||s===Qs||s===ks||s===zs)if(a===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ks)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Co||s===Bo||s===Ro||s===Po)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Co)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Po)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ul)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Do||s===Io)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Do)return a===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Io)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Uo||s===Lo||s===No||s===Fo||s===Vo||s===Oo||s===qo||s===Ho||s===Qo||s===ko||s===zo||s===Go||s===Wo||s===Ko)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Uo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===No)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Oo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ho)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Go)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wo)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ko)return a===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gs||s===Yo||s===Xo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Gs)return a===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vh||s===Jo||s===jo||s===Zo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Gs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?A?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:i}}class Rm extends AA{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const A of t.hand.values())this._getHandJoint(e,A)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,A){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,A),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,A),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,A),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const A=new jt;A.matrixAutoUpdate=!1,A.visible=!1,t.joints[e.jointName]=A,t.add(A)}return t.joints[e.jointName]}}class Dm extends cn{constructor(t,e){super();const A=this;let i=null,s=1,r=null,o="local-floor",a=1,l=null,c=null,h=null,u=null,f=null,m=null;const v=e.getContextAttributes();let p=null,d=null;const g=[],_=[],E=new st;let R=null;const b=new AA;b.layers.enable(1),b.viewport=new he;const T=new AA;T.layers.enable(2),T.viewport=new he;const V=[b,T],w=new Rm;w.layers.enable(1),w.layers.enable(2);let S=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=g[k];return Y===void 0&&(Y=new mr,g[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=g[k];return Y===void 0&&(Y=new mr,g[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=g[k];return Y===void 0&&(Y=new mr,g[k]=Y),Y.getHandSpace()};function H(k){const Y=_.indexOf(k.inputSource);if(Y===-1)return;const ct=g[Y];ct!==void 0&&(ct.update(k.inputSource,k.frame,l||r),ct.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",P);for(let k=0;k<g.length;k++){const Y=_[k];Y!==null&&(_[k]=null,g[k].disconnect(Y))}S=null,q=null,t.setRenderTarget(p),f=null,u=null,h=null,i=null,d=null,At.stop(),A.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",j),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new EA(f.framebufferWidth,f.framebufferHeight,{format:_A,type:si,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,ct=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=v.stencil?rn:Mi,ct=v.stencil?Ei:Ai);const vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),d=new EA(u.textureWidth,u.textureHeight,{format:_A,type:si,depthTexture:new jl(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Dt=t.properties.get(d);Dt.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),At.setContext(i),At.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(k){for(let Y=0;Y<k.removed.length;Y++){const ct=k.removed[Y],_t=_.indexOf(ct);_t>=0&&(_[_t]=null,g[_t].disconnect(ct))}for(let Y=0;Y<k.added.length;Y++){const ct=k.added[Y];let _t=_.indexOf(ct);if(_t===-1){for(let Dt=0;Dt<g.length;Dt++)if(Dt>=_.length){_.push(ct),_t=Dt;break}else if(_[Dt]===null){_[Dt]=ct,_t=Dt;break}if(_t===-1)break}const vt=g[_t];vt&&vt.connect(ct)}}const L=new C,Q=new C;function z(k,Y,ct){L.setFromMatrixPosition(Y.matrixWorld),Q.setFromMatrixPosition(ct.matrixWorld);const _t=L.distanceTo(Q),vt=Y.projectionMatrix.elements,Dt=ct.projectionMatrix.elements,Ut=vt[14]/(vt[10]-1),yt=vt[14]/(vt[10]+1),Yt=(vt[9]+1)/vt[5],I=(vt[9]-1)/vt[5],Oe=(vt[8]-1)/vt[0],wt=(Dt[8]+1)/Dt[0],Bt=Ut*Oe,pt=Ut*wt,de=_t/(-Oe+wt),Ft=de*-Oe;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ft),k.translateZ(de),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const y=Ut+de,x=yt+de,N=Bt-Ft,Z=pt+(_t-Ft),J=Yt*yt/x*y,$=I*yt/x*y;k.projectionMatrix.makePerspective(N,Z,J,$,y,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function G(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;w.near=T.near=b.near=k.near,w.far=T.far=b.far=k.far,(S!==w.near||q!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,q=w.far);const Y=k.parent,ct=w.cameras;G(w,Y);for(let _t=0;_t<ct.length;_t++)G(ct[_t],Y);ct.length===2?z(w,b,T):w.projectionMatrix.copy(b.projectionMatrix),W(k,w,Y)};function W(k,Y,ct){ct===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(ct.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=kr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return a},this.setFoveation=function(k){a=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let K=null;function et(k,Y){if(c=Y.getViewerPose(l||r),m=Y,c!==null){const ct=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let _t=!1;ct.length!==w.cameras.length&&(w.cameras.length=0,_t=!0);for(let vt=0;vt<ct.length;vt++){const Dt=ct[vt];let Ut=null;if(f!==null)Ut=f.getViewport(Dt);else{const Yt=h.getViewSubImage(u,Dt);Ut=Yt.viewport,vt===0&&(t.setRenderTargetTextures(d,Yt.colorTexture,u.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(d))}let yt=V[vt];yt===void 0&&(yt=new AA,yt.layers.enable(vt),yt.viewport=new he,V[vt]=yt),yt.matrix.fromArray(Dt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Dt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),vt===0&&(w.matrix.copy(yt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),_t===!0&&w.cameras.push(yt)}}for(let ct=0;ct<g.length;ct++){const _t=_[ct],vt=g[ct];_t!==null&&vt!==void 0&&vt.update(_t,Y,l||r)}K&&K(k,Y),Y.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:Y}),m=null}const At=new Jl;At.setAnimationLoop(et),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Im(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function A(p,d){d.color.getRGB(p.fogColor.value,Kl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,g,_,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&f(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ke&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ke&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=t.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=_*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const g=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function Um(n,t,e,A){let i={},s={},r=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function a(g,_){const E=_.program;A.uniformBlockBinding(g,E)}function l(g,_){let E=i[g.id];E===void 0&&(m(g),E=c(g),i[g.id]=E,g.addEventListener("dispose",p));const R=_.program;A.updateUBOMapping(g,R);const b=t.render.frame;s[g.id]!==b&&(u(g),s[g.id]=b)}function c(g){const _=h();g.__bindingPointIndex=_;const E=n.createBuffer(),R=g.__size,b=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function h(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const _=i[g.id],E=g.uniforms,R=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,T=E.length;b<T;b++){const V=Array.isArray(E[b])?E[b]:[E[b]];for(let w=0,S=V.length;w<S;w++){const q=V[w];if(f(q,b,w,R)===!0){const H=q.__offset,j=Array.isArray(q.value)?q.value:[q.value];let P=0;for(let L=0;L<j.length;L++){const Q=j[L],z=v(Q);typeof Q=="number"||typeof Q=="boolean"?(q.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,H+P,q.__data)):Q.isMatrix3?(q.__data[0]=Q.elements[0],q.__data[1]=Q.elements[1],q.__data[2]=Q.elements[2],q.__data[3]=0,q.__data[4]=Q.elements[3],q.__data[5]=Q.elements[4],q.__data[6]=Q.elements[5],q.__data[7]=0,q.__data[8]=Q.elements[6],q.__data[9]=Q.elements[7],q.__data[10]=Q.elements[8],q.__data[11]=0):(Q.toArray(q.__data,P),P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(g,_,E,R){const b=g.value,T=_+"_"+E;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const V=R[T];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return R[T]=b,!0}else if(V.equals(b)===!1)return V.copy(b),!0}return!1}function m(g){const _=g.uniforms;let E=0;const R=16;for(let T=0,V=_.length;T<V;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,q=w.length;S<q;S++){const H=w[S],j=Array.isArray(H.value)?H.value:[H.value];for(let P=0,L=j.length;P<L;P++){const Q=j[P],z=v(Q),G=E%R;G!==0&&R-G<z.boundary&&(E+=R-G),H.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=z.storage}}}const b=E%R;return b>0&&(E+=R-b),g.__size=E,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const E=r.indexOf(_.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function d(){for(const g in i)n.deleteBuffer(i[g]);r=[],i={},s={}}return{bind:a,update:l,dispose:d}}class ic{constructor(t={}){const{canvas:e=Rh(),context:A=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;A!==null?u=A.getContextAttributes().alpha:u=r;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const _=this;let E=!1,R=0,b=0,T=null,V=-1,w=null;const S=new he,q=new he;let H=null;const j=new rt(0);let P=0,L=e.width,Q=e.height,z=1,G=null,W=null;const K=new he(0,0,L,Q),et=new he(0,0,L,Q);let At=!1;const k=new to;let Y=!1,ct=!1,_t=null;const vt=new Gt,Dt=new st,Ut=new C,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Yt(){return T===null?z:1}let I=A;function Oe(M,D){for(let F=0;F<M.length;F++){const O=M[F],U=e.getContext(O,D);if(U!==null)return U}return null}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jr}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),I=Oe(D,M),I===null)throw Oe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let wt,Bt,pt,de,Ft,y,x,N,Z,J,$,mt,lt,ut,St,Vt,X,Ae,zt,Ct,xt,dt,Lt,ee;function me(){wt=new zf(I),Bt=new Vf(I,wt,t),wt.init(Bt),dt=new Bm(I,wt,Bt),pt=new Tm(I,wt,Bt),de=new Kf(I),Ft=new dm,y=new Cm(I,wt,pt,Ft,Bt,dt,de),x=new qf(_),N=new kf(_),Z=new tu(I,Bt),Lt=new Nf(I,wt,Z,Bt),J=new Gf(I,Z,de,Lt),$=new jf(I,J,Z,de),zt=new Jf(I,Bt,y),Vt=new Of(Ft),mt=new um(_,x,N,wt,Bt,Lt,Vt),lt=new Im(_,Ft),ut=new pm,St=new wm(wt,Bt),Ae=new Lf(_,x,N,pt,$,u,a),X=new bm(_,$,Bt),ee=new Um(I,de,Bt,pt),Ct=new Ff(I,wt,de,Bt),xt=new Wf(I,wt,de,Bt),de.programs=mt.programs,_.capabilities=Bt,_.extensions=wt,_.properties=Ft,_.renderLists=ut,_.shadowMap=X,_.state=pt,_.info=de}me();const qt=new Dm(_,I);this.xr=qt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=wt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=wt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(L,Q,!1))},this.getSize=function(M){return M.set(L,Q)},this.setSize=function(M,D,F=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,Q=D,e.width=Math.floor(M*z),e.height=Math.floor(D*z),F===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(L*z,Q*z).floor()},this.setDrawingBufferSize=function(M,D,F){L=M,Q=D,z=F,e.width=Math.floor(M*F),e.height=Math.floor(D*F),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,D,F,O){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,D,F,O),pt.viewport(S.copy(K).multiplyScalar(z).floor())},this.getScissor=function(M){return M.copy(et)},this.setScissor=function(M,D,F,O){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,D,F,O),pt.scissor(q.copy(et).multiplyScalar(z).floor())},this.getScissorTest=function(){return At},this.setScissorTest=function(M){pt.setScissorTest(At=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,D=!0,F=!0){let O=0;if(M){let U=!1;if(T!==null){const ht=T.texture.format;U=ht===Il||ht===Dl||ht===Pl}if(U){const ht=T.texture.type,gt=ht===si||ht===Ai||ht===Zr||ht===Ei||ht===Bl||ht===Rl,Mt=Ae.getClearColor(),Tt=Ae.getClearAlpha(),Ot=Mt.r,Rt=Mt.g,It=Mt.b;gt?(f[0]=Ot,f[1]=Rt,f[2]=It,f[3]=Tt,I.clearBufferuiv(I.COLOR,0,f)):(m[0]=Ot,m[1]=Rt,m[2]=It,m[3]=Tt,I.clearBufferiv(I.COLOR,0,m))}else O|=I.COLOR_BUFFER_BIT}D&&(O|=I.DEPTH_BUFFER_BIT),F&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),St.dispose(),Ft.dispose(),x.dispose(),N.dispose(),$.dispose(),Lt.dispose(),ee.dispose(),mt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",qe),qt.removeEventListener("sessionend",oe),_t&&(_t.dispose(),_t=null),He.stop()};function it(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=de.autoReset,D=X.enabled,F=X.autoUpdate,O=X.needsUpdate,U=X.type;me(),de.autoReset=M,X.enabled=D,X.autoUpdate=F,X.needsUpdate=O,X.type=U}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function at(M){const D=M.target;D.removeEventListener("dispose",at),bt(D)}function bt(M){Et(M),Ft.remove(M)}function Et(M){const D=Ft.get(M).programs;D!==void 0&&(D.forEach(function(F){mt.releaseProgram(F)}),M.isShaderMaterial&&mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,F,O,U,ht){D===null&&(D=yt);const gt=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Cc(M,D,F,O,U);pt.setMaterial(O,gt);let Tt=F.index,Ot=1;if(O.wireframe===!0){if(Tt=J.getWireframeAttribute(F),Tt===void 0)return;Ot=2}const Rt=F.drawRange,It=F.attributes.position;let ve=Rt.start*Ot,je=(Rt.start+Rt.count)*Ot;ht!==null&&(ve=Math.max(ve,ht.start*Ot),je=Math.min(je,(ht.start+ht.count)*Ot)),Tt!==null?(ve=Math.max(ve,0),je=Math.min(je,Tt.count)):It!=null&&(ve=Math.max(ve,0),je=Math.min(je,It.count));const Ce=je-ve;if(Ce<0||Ce===1/0)return;Lt.setup(U,O,Mt,F,Tt);let DA,fe=Ct;if(Tt!==null&&(DA=Z.get(Tt),fe=xt,fe.setIndex(DA)),U.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*Yt()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(U.isLine){let Ht=O.linewidth;Ht===void 0&&(Ht=1),pt.setLineWidth(Ht*Yt()),U.isLineSegments?fe.setMode(I.LINES):U.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else U.isPoints?fe.setMode(I.POINTS):U.isSprite&&fe.setMode(I.TRIANGLES);if(U.isBatchedMesh)fe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)fe.renderInstances(ve,Ce,U.count);else if(F.isInstancedBufferGeometry){const Ht=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ns=Math.min(F.instanceCount,Ht);fe.renderInstances(ve,Ce,Ns)}else fe.render(ve,Ce)};function se(M,D,F){M.transparent===!0&&M.side===TA&&M.forceSinglePass===!1?(M.side=Ke,M.needsUpdate=!0,Fn(M,D,F),M.side=oi,M.needsUpdate=!0,Fn(M,D,F),M.side=TA):Fn(M,D,F)}this.compile=function(M,D,F=null){F===null&&(F=M),p=St.get(F),p.init(),g.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==F&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(_._useLegacyLights);const O=new Set;return M.traverse(function(U){const ht=U.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const Mt=ht[gt];se(Mt,F,U),O.add(Mt)}else se(ht,F,U),O.add(ht)}),g.pop(),p=null,O},this.compileAsync=function(M,D,F=null){const O=this.compile(M,D,F);return new Promise(U=>{function ht(){if(O.forEach(function(gt){Ft.get(gt).currentProgram.isReady()&&O.delete(gt)}),O.size===0){U(M);return}setTimeout(ht,10)}wt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let re=null;function Te(M){re&&re(M)}function qe(){He.stop()}function oe(){He.start()}const He=new Jl;He.setAnimationLoop(Te),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(M){re=M,qt.setAnimationLoop(M),M===null?He.stop():He.start()},qt.addEventListener("sessionstart",qe),qt.addEventListener("sessionend",oe),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(D),D=qt.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,D,T),p=St.get(M,g.length),p.init(),g.push(p),vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),k.setFromProjectionMatrix(vt),ct=this.localClippingEnabled,Y=Vt.init(this.clippingPlanes,ct),v=ut.get(M,d.length),v.init(),d.push(v),SA(M,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(G,W),this.info.render.frame++,Y===!0&&Vt.beginShadows();const F=p.state.shadowsArray;if(X.render(F,M,D),Y===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(v,M),p.setupLights(_._useLegacyLights),D.isArrayCamera){const O=D.cameras;for(let U=0,ht=O.length;U<ht;U++){const gt=O[U];mo(v,M,gt,gt.viewport)}}else mo(v,M,D);T!==null&&(y.updateMultisampleRenderTarget(T),y.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(_,M,D),Lt.resetDefaultState(),V=-1,w=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function SA(M,D,F,O){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){O&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(vt);const gt=$.update(M),Mt=M.material;Mt.visible&&v.push(M,gt,Mt,F,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){const gt=$.update(M),Mt=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ut.copy(gt.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(vt)),Array.isArray(Mt)){const Tt=gt.groups;for(let Ot=0,Rt=Tt.length;Ot<Rt;Ot++){const It=Tt[Ot],ve=Mt[It.materialIndex];ve&&ve.visible&&v.push(M,gt,ve,F,Ut.z,It)}}else Mt.visible&&v.push(M,gt,Mt,F,Ut.z,null)}}const ht=M.children;for(let gt=0,Mt=ht.length;gt<Mt;gt++)SA(ht[gt],D,F,O)}function mo(M,D,F,O){const U=M.opaque,ht=M.transmissive,gt=M.transparent;p.setupLightsView(F),Y===!0&&Vt.setGlobalState(_.clippingPlanes,F),ht.length>0&&Tc(U,ht,D,F),O&&pt.viewport(S.copy(O)),U.length>0&&Nn(U,D,F),ht.length>0&&Nn(ht,D,F),gt.length>0&&Nn(gt,D,F),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Tc(M,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ht=Bt.isWebGL2;_t===null&&(_t=new EA(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?QA:si,minFilter:Dn,samples:ht?4:0})),_.getDrawingBufferSize(Dt),ht?_t.setSize(Dt.x,Dt.y):_t.setSize(zr(Dt.x),zr(Dt.y));const gt=_.getRenderTarget();_.setRenderTarget(_t),_.getClearColor(j),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Mt=_.toneMapping;_.toneMapping=ni,Nn(M,F,O),y.updateMultisampleRenderTarget(_t),y.updateRenderTargetMipmap(_t);let Tt=!1;for(let Ot=0,Rt=D.length;Ot<Rt;Ot++){const It=D[Ot],ve=It.object,je=It.geometry,Ce=It.material,DA=It.group;if(Ce.side===TA&&ve.layers.test(O.layers)){const fe=Ce.side;Ce.side=Ke,Ce.needsUpdate=!0,go(ve,F,O,je,Ce,DA),Ce.side=fe,Ce.needsUpdate=!0,Tt=!0}}Tt===!0&&(y.updateMultisampleRenderTarget(_t),y.updateRenderTargetMipmap(_t)),_.setRenderTarget(gt),_.setClearColor(j,P),_.toneMapping=Mt}function Nn(M,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ht=M.length;U<ht;U++){const gt=M[U],Mt=gt.object,Tt=gt.geometry,Ot=O===null?gt.material:O,Rt=gt.group;Mt.layers.test(F.layers)&&go(Mt,D,F,Tt,Ot,Rt)}}function go(M,D,F,O,U,ht){M.onBeforeRender(_,D,F,O,U,ht),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,D,F,O,M,ht),U.transparent===!0&&U.side===TA&&U.forceSinglePass===!1?(U.side=Ke,U.needsUpdate=!0,_.renderBufferDirect(F,D,O,U,M,ht),U.side=oi,U.needsUpdate=!0,_.renderBufferDirect(F,D,O,U,M,ht),U.side=TA):_.renderBufferDirect(F,D,O,U,M,ht),M.onAfterRender(_,D,F,O,U,ht)}function Fn(M,D,F){D.isScene!==!0&&(D=yt);const O=Ft.get(M),U=p.state.lights,ht=p.state.shadowsArray,gt=U.state.version,Mt=mt.getParameters(M,U.state,ht,D,F),Tt=mt.getProgramCacheKey(Mt);let Ot=O.programs;O.environment=M.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(M.isMeshStandardMaterial?N:x).get(M.envMap||O.environment),Ot===void 0&&(M.addEventListener("dispose",at),Ot=new Map,O.programs=Ot);let Rt=Ot.get(Tt);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===gt)return _o(M,Mt),Rt}else Mt.uniforms=mt.getUniforms(M),M.onBuild(F,Mt,_),M.onBeforeCompile(Mt,_),Rt=mt.acquireProgram(Mt,Tt),Ot.set(Tt,Rt),O.uniforms=Mt.uniforms;const It=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=Vt.uniform),_o(M,Mt),O.needsLights=Rc(M),O.lightsStateVersion=gt,O.needsLights&&(It.ambientLightColor.value=U.state.ambient,It.lightProbe.value=U.state.probe,It.directionalLights.value=U.state.directional,It.directionalLightShadows.value=U.state.directionalShadow,It.spotLights.value=U.state.spot,It.spotLightShadows.value=U.state.spotShadow,It.rectAreaLights.value=U.state.rectArea,It.ltc_1.value=U.state.rectAreaLTC1,It.ltc_2.value=U.state.rectAreaLTC2,It.pointLights.value=U.state.point,It.pointLightShadows.value=U.state.pointShadow,It.hemisphereLights.value=U.state.hemi,It.directionalShadowMap.value=U.state.directionalShadowMap,It.directionalShadowMatrix.value=U.state.directionalShadowMatrix,It.spotShadowMap.value=U.state.spotShadowMap,It.spotLightMatrix.value=U.state.spotLightMatrix,It.spotLightMap.value=U.state.spotLightMap,It.pointShadowMap.value=U.state.pointShadowMap,It.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Rt,O.uniformsList=null,Rt}function vo(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=ps.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function _o(M,D){const F=Ft.get(M);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Cc(M,D,F,O,U){D.isScene!==!0&&(D=yt),y.resetTextureUnits();const ht=D.fog,gt=O.isMeshStandardMaterial?D.environment:null,Mt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zA,Tt=(O.isMeshStandardMaterial?N:x).get(O.envMap||gt),Ot=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),It=!!F.morphAttributes.position,ve=!!F.morphAttributes.normal,je=!!F.morphAttributes.color;let Ce=ni;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ce=_.toneMapping);const DA=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=DA!==void 0?DA.length:0,Ht=Ft.get(O),Ns=p.state.lights;if(Y===!0&&(ct===!0||M!==w)){const rA=M===w&&O.id===V;Vt.setState(O,M,rA)}let ge=!1;O.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ns.state.version||Ht.outputColorSpace!==Mt||U.isBatchedMesh&&Ht.batching===!1||!U.isBatchedMesh&&Ht.batching===!0||U.isInstancedMesh&&Ht.instancing===!1||!U.isInstancedMesh&&Ht.instancing===!0||U.isSkinnedMesh&&Ht.skinning===!1||!U.isSkinnedMesh&&Ht.skinning===!0||U.isInstancedMesh&&Ht.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ht.instancingColor===!1&&U.instanceColor!==null||Ht.envMap!==Tt||O.fog===!0&&Ht.fog!==ht||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Vt.numPlanes||Ht.numIntersection!==Vt.numIntersection)||Ht.vertexAlphas!==Ot||Ht.vertexTangents!==Rt||Ht.morphTargets!==It||Ht.morphNormals!==ve||Ht.morphColors!==je||Ht.toneMapping!==Ce||Bt.isWebGL2===!0&&Ht.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Ht.__version=O.version);let hi=Ht.currentProgram;ge===!0&&(hi=Fn(O,D,U));let xo=!1,gn=!1,Fs=!1;const Ue=hi.getUniforms(),ui=Ht.uniforms;if(pt.useProgram(hi.program)&&(xo=!0,gn=!0,Fs=!0),O.id!==V&&(V=O.id,gn=!0),xo||w!==M){Ue.setValue(I,"projectionMatrix",M.projectionMatrix),Ue.setValue(I,"viewMatrix",M.matrixWorldInverse);const rA=Ue.map.cameraPosition;rA!==void 0&&rA.setValue(I,Ut.setFromMatrixPosition(M.matrixWorld)),Bt.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,gn=!0,Fs=!0)}if(U.isSkinnedMesh){Ue.setOptional(I,U,"bindMatrix"),Ue.setOptional(I,U,"bindMatrixInverse");const rA=U.skeleton;rA&&(Bt.floatVertexTextures?(rA.boneTexture===null&&rA.computeBoneTexture(),Ue.setValue(I,"boneTexture",rA.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Ue.setOptional(I,U,"batchingTexture"),Ue.setValue(I,"batchingTexture",U._matricesTexture,y));const Vs=F.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&Bt.isWebGL2===!0)&&zt.update(U,F,hi),(gn||Ht.receiveShadow!==U.receiveShadow)&&(Ht.receiveShadow=U.receiveShadow,Ue.setValue(I,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ui.envMap.value=Tt,ui.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),gn&&(Ue.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&Bc(ui,Fs),ht&&O.fog===!0&&lt.refreshFogUniforms(ui,ht),lt.refreshMaterialUniforms(ui,O,z,Q,_t),ps.upload(I,vo(Ht),ui,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ps.upload(I,vo(Ht),ui,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ue.setValue(I,"center",U.center),Ue.setValue(I,"modelViewMatrix",U.modelViewMatrix),Ue.setValue(I,"normalMatrix",U.normalMatrix),Ue.setValue(I,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const rA=O.uniformsGroups;for(let Os=0,Pc=rA.length;Os<Pc;Os++)if(Bt.isWebGL2){const wo=rA[Os];ee.update(wo,hi),ee.bind(wo,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Bc(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Rc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,F){Ft.get(M.texture).__webglTexture=D,Ft.get(M.depthTexture).__webglTexture=F;const O=Ft.get(M);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const F=Ft.get(M);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,F=0){T=M,R=D,b=F;let O=!0,U=null,ht=!1,gt=!1;if(M){const Tt=Ft.get(M);Tt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(I.FRAMEBUFFER,null),O=!1):Tt.__webglFramebuffer===void 0?y.setupRenderTarget(M):Tt.__hasExternalTextures&&y.rebindTextures(M,Ft.get(M.texture).__webglTexture,Ft.get(M.depthTexture).__webglTexture);const Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(gt=!0);const Rt=Ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?U=Rt[D][F]:U=Rt[D],ht=!0):Bt.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?U=Ft.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?U=Rt[F]:U=Rt,S.copy(M.viewport),q.copy(M.scissor),H=M.scissorTest}else S.copy(K).multiplyScalar(z).floor(),q.copy(et).multiplyScalar(z).floor(),H=At;if(pt.bindFramebuffer(I.FRAMEBUFFER,U)&&Bt.drawBuffers&&O&&pt.drawBuffers(M,U),pt.viewport(S),pt.scissor(q),pt.setScissorTest(H),ht){const Tt=Ft.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,F)}else if(gt){const Tt=Ft.get(M.texture),Ot=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,F||0,Ot)}V=-1},this.readRenderTargetPixels=function(M,D,F,O,U,ht,gt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){pt.bindFramebuffer(I.FRAMEBUFFER,Mt);try{const Tt=M.texture,Ot=Tt.format,Rt=Tt.type;if(Ot!==_A&&dt.convert(Ot)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Rt===QA&&(wt.has("EXT_color_buffer_half_float")||Bt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Rt!==si&&dt.convert(Rt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===ii&&(Bt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-O&&F>=0&&F<=M.height-U&&I.readPixels(D,F,O,U,dt.convert(Ot),dt.convert(Rt),ht)}finally{const Tt=T!==null?Ft.get(T).__webglFramebuffer:null;pt.bindFramebuffer(I.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,D,F=0){const O=Math.pow(2,-F),U=Math.floor(D.image.width*O),ht=Math.floor(D.image.height*O);y.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,M.x,M.y,U,ht),pt.unbindTexture()},this.copyTextureToTexture=function(M,D,F,O=0){const U=D.image.width,ht=D.image.height,gt=dt.convert(F.format),Mt=dt.convert(F.type);y.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,M.x,M.y,U,ht,gt,Mt,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,gt,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,O,M.x,M.y,gt,Mt,D.image),O===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,F,O,U=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=M.max.x-M.min.x+1,gt=M.max.y-M.min.y+1,Mt=M.max.z-M.min.z+1,Tt=dt.convert(O.format),Ot=dt.convert(O.type);let Rt;if(O.isData3DTexture)y.setTexture3D(O,0),Rt=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)y.setTexture2DArray(O,0),Rt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const It=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),Ce=I.getParameter(I.UNPACK_SKIP_ROWS),DA=I.getParameter(I.UNPACK_SKIP_IMAGES),fe=F.isCompressedTexture?F.mipmaps[U]:F.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?I.texSubImage3D(Rt,U,D.x,D.y,D.z,ht,gt,Mt,Tt,Ot,fe.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Rt,U,D.x,D.y,D.z,ht,gt,Mt,Tt,fe.data)):I.texSubImage3D(Rt,U,D.x,D.y,D.z,ht,gt,Mt,Tt,Ot,fe),I.pixelStorei(I.UNPACK_ROW_LENGTH,It),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,DA),U===0&&O.generateMipmaps&&I.generateMipmap(Rt),pt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),pt.unbindTexture()},this.resetState=function(){R=0,b=0,T=null,pt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$r?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Cs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Si:Ll}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Si?pe:zA}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Lm extends ic{}Lm.prototype.isWebGL1Renderer=!0;class io{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new io(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nc extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class qa extends ne{constructor(t,e,A,i=1){super(t,e,A),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zi=new Gt,Ha=new Gt,rs=[],Qa=new yi,Nm=new Gt,Mn=new tt,Sn=new hn;class li extends tt{constructor(t,e,A){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qa(new Float32Array(A*16),16),this.instanceColor=null,this.count=A,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<A;i++)this.setMatrixAt(i,Nm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let A=0;A<e;A++)this.getMatrixAt(A,zi),Qa.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(Qa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let A=0;A<e;A++)this.getMatrixAt(A,zi),Sn.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(Sn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const A=this.matrixWorld,i=this.count;if(Mn.geometry=this.geometry,Mn.material=this.material,Mn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sn.copy(this.boundingSphere),Sn.applyMatrix4(A),t.ray.intersectsSphere(Sn)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zi),Ha.multiplyMatrices(A,zi),Mn.matrixWorld=Ha,Mn.raycast(t,rs);for(let r=0,o=rs.length;r<o;r++){const a=rs[r];a.instanceId=s,a.object=this,e.push(a)}rs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class sc extends un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ka=new Gt,Kr=new Ql,os=new hn,as=new C;class rc extends Re{constructor(t=new Pe,e=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),os.copy(A.boundingSphere),os.applyMatrix4(i),os.radius+=s,t.ray.intersectsSphere(os)===!1)return;ka.copy(i).invert(),Kr.copy(t.ray).applyMatrix4(ka);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=A.index,h=A.attributes.position;if(l!==null){const u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=u,v=f;m<v;m++){const p=l.getX(m);as.fromBufferAttribute(h,p),za(as,p,a,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=u,v=f;m<v;m++)as.fromBufferAttribute(h,m),za(as,m,a,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function za(n,t,e,A,i,s,r){const o=Kr.distanceSqToPoint(n);if(o<e){const a=new C;Kr.closestPointToPoint(n,a),a.applyMatrix4(A);const l=i.ray.origin.distanceTo(a);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:t,face:null,object:r})}}class fn extends Je{constructor(t,e,A,i,s,r,o,a,l){super(t,e,A,i,s,r,o,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class RA{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const A=this.getUtoTmapping(t);return this.getPoint(A,e)}getPoints(t=5){const e=[];for(let A=0;A<=t;A++)e.push(this.getPoint(A/t));return e}getSpacedPoints(t=5){const e=[];for(let A=0;A<=t;A++)e.push(this.getPointAt(A/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let A,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)A=this.getPoint(r/t),s+=A.distanceTo(i),e.push(s),i=A;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const A=this.getLengths();let i=0;const s=A.length;let r;e?r=e:r=t*A[s-1];let o=0,a=s-1,l;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),l=A[i]-r,l<0)o=i+1;else if(l>0)a=i-1;else{a=i;break}if(i=a,A[i]===r)return i/(s-1);const c=A[i],u=A[i+1]-c,f=(r-c)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),a=e||(r.isVector2?new st:new C);return a.copy(o).sub(r).normalize(),a}getTangentAt(t,e){const A=this.getUtoTmapping(t);return this.getTangent(A,e)}computeFrenetFrames(t,e){const A=new C,i=[],s=[],r=[],o=new C,a=new Gt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new C)}s[0]=new C,r[0]=new C;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=l&&(l=c,A.set(1,0,0)),h<=l&&(l=h,A.set(0,1,0)),u<=l&&A.set(0,0,1),o.crossVectors(i[0],A).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(De(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(a.makeRotationAxis(o,m))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(De(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(a.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class no extends RA{constructor(t=0,e=0,A=1,i=1,s=0,r=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=A,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=a}getPoint(t,e){const A=e||new st,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,f=l-this.aY;a=u*c-f*h+this.aX,l=u*h+f*c+this.aY}return A.set(a,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fm extends no{constructor(t,e,A,i,s,r){super(t,e,A,A,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function so(){let n=0,t=0,e=0,A=0;function i(s,r,o,a){n=s,t=o,e=-3*s+3*r-2*o-a,A=2*s-2*r+o+a}return{initCatmullRom:function(s,r,o,a,l){i(r,o,l*(o-s),l*(a-r))},initNonuniformCatmullRom:function(s,r,o,a,l,c,h){let u=(r-s)/l-(o-s)/(l+c)+(o-r)/c,f=(o-r)/c-(a-r)/(c+h)+(a-o)/h;u*=c,f*=c,i(r,o,u,f)},calc:function(s){const r=s*s,o=r*s;return n+t*s+e*r+A*o}}}const ls=new C,gr=new so,vr=new so,_r=new so;class Vm extends RA{constructor(t=[],e=!1,A="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=A,this.tension=i}getPoint(t,e=new C){const A=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),a=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:a===0&&o===s-1&&(o=s-2,a=1);let l,c;this.closed||o>0?l=i[(o-1)%s]:(ls.subVectors(i[0],i[1]).add(i[0]),l=ls);const h=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?c=i[(o+2)%s]:(ls.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=ls),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(c),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),gr.initNonuniformCatmullRom(l.x,h.x,u.x,c.x,m,v,p),vr.initNonuniformCatmullRom(l.y,h.y,u.y,c.y,m,v,p),_r.initNonuniformCatmullRom(l.z,h.z,u.z,c.z,m,v,p)}else this.curveType==="catmullrom"&&(gr.initCatmullRom(l.x,h.x,u.x,c.x,this.tension),vr.initCatmullRom(l.y,h.y,u.y,c.y,this.tension),_r.initCatmullRom(l.z,h.z,u.z,c.z,this.tension));return A.set(gr.calc(a),vr.calc(a),_r.calc(a)),A}copy(t){super.copy(t),this.points=[];for(let e=0,A=t.points.length;e<A;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,A=this.points.length;e<A;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,A=t.points.length;e<A;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ga(n,t,e,A,i){const s=(A-t)*.5,r=(i-e)*.5,o=n*n,a=n*o;return(2*e-2*A+s+r)*a+(-3*e+3*A-2*s-r)*o+s*n+e}function Om(n,t){const e=1-n;return e*e*t}function qm(n,t){return 2*(1-n)*n*t}function Hm(n,t){return n*n*t}function Rn(n,t,e,A){return Om(n,t)+qm(n,e)+Hm(n,A)}function Qm(n,t){const e=1-n;return e*e*e*t}function km(n,t){const e=1-n;return 3*e*e*n*t}function zm(n,t){return 3*(1-n)*n*n*t}function Gm(n,t){return n*n*n*t}function Pn(n,t,e,A,i){return Qm(n,t)+km(n,e)+zm(n,A)+Gm(n,i)}class oc extends RA{constructor(t=new st,e=new st,A=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=A,this.v3=i}getPoint(t,e=new st){const A=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return A.set(Pn(t,i.x,s.x,r.x,o.x),Pn(t,i.y,s.y,r.y,o.y)),A}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wm extends RA{constructor(t=new C,e=new C,A=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=A,this.v3=i}getPoint(t,e=new C){const A=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return A.set(Pn(t,i.x,s.x,r.x,o.x),Pn(t,i.y,s.y,r.y,o.y),Pn(t,i.z,s.z,r.z,o.z)),A}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ac extends RA{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const A=e;return t===1?A.copy(this.v2):(A.copy(this.v2).sub(this.v1),A.multiplyScalar(t).add(this.v1)),A}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Km extends RA{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const A=e;return t===1?A.copy(this.v2):(A.copy(this.v2).sub(this.v1),A.multiplyScalar(t).add(this.v1)),A}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends RA{constructor(t=new st,e=new st,A=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=A}getPoint(t,e=new st){const A=e,i=this.v0,s=this.v1,r=this.v2;return A.set(Rn(t,i.x,s.x,r.x),Rn(t,i.y,s.y,r.y)),A}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends RA{constructor(t=new C,e=new C,A=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=A}getPoint(t,e=new C){const A=e,i=this.v0,s=this.v1,r=this.v2;return A.set(Rn(t,i.x,s.x,r.x),Rn(t,i.y,s.y,r.y),Rn(t,i.z,s.z,r.z)),A}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cc extends RA{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const A=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,a=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return A.set(Ga(o,a.x,l.x,c.x,h.x),Ga(o,a.y,l.y,c.y,h.y)),A}copy(t){super.copy(t),this.points=[];for(let e=0,A=t.points.length;e<A;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,A=this.points.length;e<A;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,A=t.points.length;e<A;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var Wa=Object.freeze({__proto__:null,ArcCurve:Fm,CatmullRomCurve3:Vm,CubicBezierCurve:oc,CubicBezierCurve3:Wm,EllipseCurve:no,LineCurve:ac,LineCurve3:Km,QuadraticBezierCurve:lc,QuadraticBezierCurve3:Ym,SplineCurve:cc});class Xm extends RA{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const A=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wa[A](e,t))}return this}getPoint(t,e){const A=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=A){const r=i[s]-A,o=this.curves[s],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let A=0,i=this.curves.length;A<i;A++)e+=this.curves[A].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let A=0;A<=t;A++)e.push(this.getPoint(A/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let A;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,a=r.getPoints(o);for(let l=0;l<a.length;l++){const c=a[l];A&&A.equals(c)||(e.push(c),A=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,A=t.curves.length;e<A;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,A=this.curves.length;e<A;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,A=t.curves.length;e<A;e++){const i=t.curves[e];this.curves.push(new Wa[i.type]().fromJSON(i))}return this}}class Jm extends Xm{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,A=t.length;e<A;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const A=new ac(this.currentPoint.clone(),new st(t,e));return this.curves.push(A),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,A,i){const s=new lc(this.currentPoint.clone(),new st(t,e),new st(A,i));return this.curves.push(s),this.currentPoint.set(A,i),this}bezierCurveTo(t,e,A,i,s,r){const o=new oc(this.currentPoint.clone(),new st(t,e),new st(A,i),new st(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),A=new cc(e);return this.curves.push(A),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,A,i,s,r){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,A,i,s,r),this}absarc(t,e,A,i,s,r){return this.absellipse(t,e,A,A,i,s,r),this}ellipse(t,e,A,i,s,r,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,A,i,s,r,o,a),this}absellipse(t,e,A,i,s,r,o,a){const l=new no(t,e,A,i,s,r,o,a);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends Pe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,A=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:A,phiLength:i},e=Math.floor(e),i=De(i,0,Math.PI*2);const s=[],r=[],o=[],a=[],l=[],c=1/e,h=new C,u=new st,f=new C,m=new C,v=new C;let p=0,d=0;for(let g=0;g<=t.length-1;g++)switch(g){case 0:p=t[g+1].x-t[g].x,d=t[g+1].y-t[g].y,f.x=d*1,f.y=-p,f.z=d*0,v.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case t.length-1:a.push(v.x,v.y,v.z);break;default:p=t[g+1].x-t[g].x,d=t[g+1].y-t[g].y,f.x=d*1,f.y=-p,f.z=d*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),a.push(f.x,f.y,f.z),v.copy(m)}for(let g=0;g<=e;g++){const _=A+g*c*i,E=Math.sin(_),R=Math.cos(_);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*E,h.y=t[b].y,h.z=t[b].x*R,r.push(h.x,h.y,h.z),u.x=g/e,u.y=b/(t.length-1),o.push(u.x,u.y);const T=a[3*b+0]*E,V=a[3*b+1],w=a[3*b+0]*R;l.push(T,V,w)}}for(let g=0;g<e;g++)for(let _=0;_<t.length-1;_++){const E=_+g*t.length,R=E,b=E+t.length,T=E+t.length+1,V=E+1;s.push(R,b,V),s.push(T,V,b)}this.setIndex(s),this.setAttribute("position",new ue(r,3)),this.setAttribute("uv",new ue(o,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.points,t.segments,t.phiStart,t.phiLength)}}class oo extends ro{constructor(t=1,e=1,A=4,i=8){const s=new Jm;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(A),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:A,radialSegments:i}}static fromJSON(t){return new oo(t.radius,t.length,t.capSegments,t.radialSegments)}}class xA extends Pe{constructor(t=1,e=1,A=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:A,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};const l=this;i=Math.floor(i),s=Math.floor(s);const c=[],h=[],u=[],f=[];let m=0;const v=[],p=A/2;let d=0;g(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function g(){const E=new C,R=new C;let b=0;const T=(e-t)/A;for(let V=0;V<=s;V++){const w=[],S=V/s,q=S*(e-t)+t;for(let H=0;H<=i;H++){const j=H/i,P=j*a+o,L=Math.sin(P),Q=Math.cos(P);R.x=q*L,R.y=-S*A+p,R.z=q*Q,h.push(R.x,R.y,R.z),E.set(L,T,Q).normalize(),u.push(E.x,E.y,E.z),f.push(j,1-S),w.push(m++)}v.push(w)}for(let V=0;V<i;V++)for(let w=0;w<s;w++){const S=v[w][V],q=v[w+1][V],H=v[w+1][V+1],j=v[w][V+1];c.push(S,q,j),c.push(q,H,j),b+=6}l.addGroup(d,b,0),d+=b}function _(E){const R=m,b=new st,T=new C;let V=0;const w=E===!0?t:e,S=E===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,p*S,0),u.push(0,S,0),f.push(.5,.5),m++;const q=m;for(let H=0;H<=i;H++){const P=H/i*a+o,L=Math.cos(P),Q=Math.sin(P);T.x=w*Q,T.y=p*S,T.z=w*L,h.push(T.x,T.y,T.z),u.push(0,S,0),b.x=L*.5+.5,b.y=Q*.5*S+.5,f.push(b.x,b.y),m++}for(let H=0;H<i;H++){const j=R+H,P=q+H;E===!0?c.push(P,P+1,j):c.push(P+1,P,j),V+=3}l.addGroup(d,V,E===!0?1:2),d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xA(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Pe{constructor(t=[],e=[],A=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:A,detail:i};const s=[],r=[];o(i),l(A),c(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const _=new C,E=new C,R=new C;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],E),f(e[b+2],R),a(_,E,R,g)}function a(g,_,E,R){const b=R+1,T=[];for(let V=0;V<=b;V++){T[V]=[];const w=g.clone().lerp(E,V/b),S=_.clone().lerp(E,V/b),q=b-V;for(let H=0;H<=q;H++)H===0&&V===b?T[V][H]=w:T[V][H]=w.clone().lerp(S,H/q)}for(let V=0;V<b;V++)for(let w=0;w<2*(b-V)-1;w++){const S=Math.floor(w/2);w%2===0?(u(T[V][S+1]),u(T[V+1][S]),u(T[V][S])):(u(T[V][S+1]),u(T[V+1][S+1]),u(T[V+1][S]))}}function l(g){const _=new C;for(let E=0;E<s.length;E+=3)_.x=s[E+0],_.y=s[E+1],_.z=s[E+2],_.normalize().multiplyScalar(g),s[E+0]=_.x,s[E+1]=_.y,s[E+2]=_.z}function c(){const g=new C;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const E=p(g)/2/Math.PI+.5,R=d(g)/Math.PI+.5;r.push(E,1-R)}m(),h()}function h(){for(let g=0;g<r.length;g+=6){const _=r[g+0],E=r[g+2],R=r[g+4],b=Math.max(_,E,R),T=Math.min(_,E,R);b>.9&&T<.1&&(_<.2&&(r[g+0]+=1),E<.2&&(r[g+2]+=1),R<.2&&(r[g+4]+=1))}}function u(g){s.push(g.x,g.y,g.z)}function f(g,_){const E=g*3;_.x=t[E+0],_.y=t[E+1],_.z=t[E+2]}function m(){const g=new C,_=new C,E=new C,R=new C,b=new st,T=new st,V=new st;for(let w=0,S=0;w<s.length;w+=9,S+=6){g.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),E.set(s[w+6],s[w+7],s[w+8]),b.set(r[S+0],r[S+1]),T.set(r[S+2],r[S+3]),V.set(r[S+4],r[S+5]),R.copy(g).add(_).add(E).divideScalar(3);const q=p(R);v(b,S+0,g,q),v(T,S+2,_,q),v(V,S+4,E,q)}}function v(g,_,E,R){R<0&&g.x===1&&(r[_]=g.x-1),E.x===0&&E.z===0&&(r[_]=R/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class ao extends Rs{constructor(t=1,e=0){const A=(1+Math.sqrt(5))/2,i=[-1,A,0,1,A,0,-1,-A,0,1,-A,0,0,-1,A,0,1,A,0,-1,-A,0,1,-A,A,0,-1,A,0,1,-A,0,-1,-A,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ao(t.radius,t.detail)}}class lo extends Rs{constructor(t=1,e=0){const A=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(A,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lo(t.radius,t.detail)}}class ri extends Pe{constructor(t=1,e=32,A=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:A,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),A=Math.max(2,Math.floor(A));const a=Math.min(r+o,Math.PI);let l=0;const c=[],h=new C,u=new C,f=[],m=[],v=[],p=[];for(let d=0;d<=A;d++){const g=[],_=d/A;let E=0;d===0&&r===0?E=.5/e:d===A&&a===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){const b=R/e;h.x=-t*Math.cos(i+b*s)*Math.sin(r+_*o),h.y=t*Math.cos(r+_*o),h.z=t*Math.sin(i+b*s)*Math.sin(r+_*o),m.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),p.push(b+E,1-_),g.push(l++)}c.push(g)}for(let d=0;d<A;d++)for(let g=0;g<e;g++){const _=c[d][g+1],E=c[d][g],R=c[d+1][g],b=c[d+1][g+1];(d!==0||r>0)&&f.push(_,E,b),(d!==A-1||a<Math.PI)&&f.push(E,R,b)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Un extends Pe{constructor(t=1,e=.4,A=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:A,tubularSegments:i,arc:s},A=Math.floor(A),i=Math.floor(i);const r=[],o=[],a=[],l=[],c=new C,h=new C,u=new C;for(let f=0;f<=A;f++)for(let m=0;m<=i;m++){const v=m/i*s,p=f/A*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),u.subVectors(h,c).normalize(),a.push(u.x,u.y,u.z),l.push(m/i),l.push(f/A)}for(let f=1;f<=A;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,p=(i+1)*(f-1)+m-1,d=(i+1)*(f-1)+m,g=(i+1)*f+m;r.push(v,p,g),r.push(p,d,g)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ae extends un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ps extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class jm extends Ps{constructor(t,e,A){super(t,A),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xr=new Gt,Ka=new C,Ya=new C;class hc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,A=this.matrix;Ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ka),Ya.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ya),e.updateMatrixWorld(),xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xa=new Gt,yn=new C,wr=new C;class Zm extends hc{constructor(){super(new AA(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const A=this.camera,i=this.matrix,s=t.distance||A.far;s!==A.far&&(A.far=s,A.updateProjectionMatrix()),yn.setFromMatrixPosition(t.matrixWorld),A.position.copy(yn),wr.copy(A.position),wr.add(this._cubeDirections[e]),A.up.copy(this._cubeUps[e]),A.lookAt(wr),A.updateMatrixWorld(),i.makeTranslation(-yn.x,-yn.y,-yn.z),Xa.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}class Ja extends Ps{constructor(t,e,A=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=A,this.decay=i,this.shadow=new Zm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $m extends hc{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Er extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new $m}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tg extends Ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class eg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ja();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ja(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);const bn=1/120,Ag=.25;class ig{constructor(t,e){this.update=t,this.render=e,this.running=!1,this.lastTime=0,this.elapsed=0,this.frameCount=0,this.accumulator=0,this._rafId=null,this._tick=this._tick.bind(this),this.fps=60,this._fpsAccum=0,this._fpsFrames=0,this._visibilityHandler=()=>{document.visibilityState==="visible"&&(this.lastTime=performance.now())}}start(){this.running||(this.running=!0,this.lastTime=performance.now(),document.addEventListener("visibilitychange",this._visibilityHandler),this._rafId=requestAnimationFrame(this._tick))}stop(){this.running=!1,this._rafId!==null&&cancelAnimationFrame(this._rafId),this._rafId=null,document.removeEventListener("visibilitychange",this._visibilityHandler)}_tick(t){if(!this.running)return;this._rafId=requestAnimationFrame(this._tick);let e=(t-this.lastTime)/1e3;this.lastTime=t,e>Ag&&(e=bn),e<0&&(e=0),this._fpsAccum+=e,this._fpsFrames++,this._fpsAccum>=.5&&(this.fps=this._fpsFrames/this._fpsAccum,this._fpsAccum=0,this._fpsFrames=0),this.accumulator+=e,this.elapsed+=e;let A=0;const i=8;for(;this.accumulator>=bn&&A<i;)this.update(bn),this.accumulator-=bn,A++;A>=i&&(this.accumulator=0);const s=this.accumulator/bn;this.render(s,e),this.frameCount++}resync(){this.lastTime=performance.now(),this.accumulator=0}}class ng{constructor(){this.channels=new Map,this.muted=!1}on(t,e){let A=this.channels.get(t);return A||(A=new Set,this.channels.set(t,A)),A.add(e),()=>this.off(t,e)}once(t,e){const A=this.on(t,(...i)=>{A(),e(...i)});return A}off(t,e){const A=this.channels.get(t);A&&(A.delete(e),A.size===0&&this.channels.delete(t))}emit(t,e){if(this.muted)return;const A=this.channels.get(t);if(A)for(const i of[...A])try{i(e)}catch(s){console.error(`[EventBus] handler for "${t}" threw:`,s)}}mute(){this.muted=!0}unmute(){this.muted=!1}clear(){this.channels.clear()}}const Jt=Object.freeze({STATE_CHANGE:"state:change",RUN_START:"run:start",RUN_END:"run:end",RUN_RESET:"run:reset",PAUSE:"game:pause",RESUME:"game:resume",LANE_CHANGE:"player:laneChange",JUMP:"player:jump",DOUBLE_JUMP:"player:doubleJump",LAND:"player:land",SLIDE_START:"player:slideStart",SLIDE_END:"player:slideEnd",COIN_COLLECTED:"coin:collected",POWERUP_COLLECTED:"powerup:collected",POWERUP_ENDED:"powerup:ended",NEAR_MISS:"player:nearMiss",CRASH:"player:crash",SHIELD_BREAK:"player:shieldBreak",REVIVE:"game:revive",REVIVE_FAILED:"game:reviveFailed",SECTION_CHANGE:"world:sectionChange",SPEED_CHANGE:"world:speedChange",DIFFICULTY_CHANGE:"world:difficultyChange",SCORE_CHANGE:"score:change",MULTIPLIER_CHANGE:"score:multiplierChange",MISSION_COMPLETE:"mission:complete",MISSION_FAILED:"mission:failed",MISSION_PROGRESS:"mission:progress",UNLOCK:"progression:unlock",TOAST:"ui:toast",COUNTDOWN:"ui:countdown",SHAKE:"fx:shake",HITSTOP:"fx:hitstop",FLASH:"fx:flash"}),Pt=Object.freeze({LOADING:"loading",MENU:"menu",CHARACTER_SELECT:"characterSelect",MISSIONS:"missions",SETTINGS:"settings",COUNTDOWN:"countdown",PLAYING:"playing",PAUSED:"paused",CRASHED:"crashed",GAME_OVER:"gameOver",REVIVE:"revive"}),uc=Object.freeze({[Pt.LOADING]:{world:!1,hud:!1,input:!1,overlay:!0},[Pt.MENU]:{world:!0,hud:!1,input:!1,overlay:!0},[Pt.CHARACTER_SELECT]:{world:!0,hud:!1,input:!1,overlay:!0},[Pt.MISSIONS]:{world:!0,hud:!1,input:!1,overlay:!0},[Pt.SETTINGS]:{world:!0,hud:!1,input:!1,overlay:!0},[Pt.COUNTDOWN]:{world:!0,hud:!0,input:!1,overlay:!1},[Pt.PLAYING]:{world:!0,hud:!0,input:!0,overlay:!1},[Pt.PAUSED]:{world:!0,hud:!0,input:!1,overlay:!0},[Pt.CRASHED]:{world:!0,hud:!0,input:!1,overlay:!0},[Pt.GAME_OVER]:{world:!0,hud:!1,input:!1,overlay:!0},[Pt.REVIVE]:{world:!0,hud:!0,input:!1,overlay:!0}});function ms(n){return uc[n]??{world:!1,hud:!1,input:!1,overlay:!0}}const sg=new Set([Pt.COUNTDOWN,Pt.PLAYING,Pt.REVIVE]),rg=new Set([Pt.PLAYING]);class og{constructor(t){this.bus=t,this.current=Pt.LOADING,this.history=[Pt.LOADING],this.listeners=new Set}get current_(){return this.current}transitionTo(t,e={}){if(t===this.current)return!1;if(!uc[t])return console.warn(`[StateMachine] unknown state "${t}"`),!1;const A=this.current;this.current=t,this.history.push(t),this.history.length>24&&this.history.shift(),this.bus.emit("state:change",{from:A,to:t,meta:e});for(const i of this.listeners)i(t,A,e);return!0}is(...t){return t.includes(this.current)}get isLive(){return sg.has(this.current)}get acceptsInput(){return ms(this.current).input}get canPause(){return rg.has(this.current)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}}const ag={left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],jump:["ArrowUp","Space","KeyW"],slide:["ArrowDown","KeyS"],pause:["Escape","KeyP"],confirm:["Enter","Space"]},lg=.16,Mr={OUT:.3,DEADZONE:.06};class cg{constructor(t=document.body){this.bindings={...ag},this.target=t,this.enabled=!0,this.held=new Set,this.buffer=new Map,this.released=new Map,this.consumed=new Set,this.pointer={active:!1,startX:0,startY:0,x:0,y:0,time:0},this.touchEnabled=!1,this.now=0,this.pointerX=0,this.pointerInside=!1,this.mouseSteering=!0,this.steerArmed=!1,this.steerLane=1,this.steerChanged=!1,this._bindKeyboard(),this._bindTouch(),this._bindMouse()}_bindKeyboard(){this._onKeyDown=t=>{if(t.ctrlKey||t.metaKey||t.altKey)return;const e=this._actionForCode(t.code);e&&((t.code==="Space"||t.code.startsWith("Arrow"))&&t.preventDefault(),!this.held.has(t.code)&&(this.held.add(t.code),this._press(e)))},this._onKeyUp=t=>{const e=this._actionForCode(t.code);this.held.delete(t.code),e&&this.released.set(e,this.now)},this._onBlur=()=>this.clear(),window.addEventListener("keydown",this._onKeyDown,{passive:!1}),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur)}_bindTouch(){const t={passive:!1};this._onPointerDown=e=>{e.pointerType!=="mouse"&&(this.touchEnabled=!0,document.body.classList.add("has-touch"),this.pointer={active:!0,startX:e.clientX,startY:e.clientY,x:e.clientX,y:e.clientY,time:performance.now()})},this._onPointerUp=e=>{if(!this.pointer.active)return;const A=e.clientX-this.pointer.startX,i=e.clientY-this.pointer.startY,s=performance.now()-this.pointer.time,r=28;if(this.pointer.active=!1,Math.hypot(A,i)<r&&s<300){this._press("jump"),this.released.set("jump",this.now);return}Math.abs(A)>Math.abs(i)?(this._press(A>0?"right":"left"),this.released.set(A>0?"right":"left",this.now)):(this._press(i<0?"jump":"slide"),this.released.set(i<0?"jump":"slide",this.now))},this.target.addEventListener("pointerdown",this._onPointerDown,t),this.target.addEventListener("pointerup",this._onPointerUp,t),this.target.addEventListener("pointercancel",()=>{this.pointer.active=!1})}_actionForCode(t){for(const[e,A]of Object.entries(this.bindings))if(A.includes(t))return e;return null}_press(t){this.enabled&&this.buffer.set(t,this.now)}update(t,e){this.now=e;for(const[A,i]of this.buffer)e-i>lg&&this.buffer.delete(A);this.consumed.clear()}consume(t){return this.buffer.has(t)?(this.buffer.delete(t),!0):!1}pressed(t){return this.buffer.has(t)}isHeld(t){for(const e of this.bindings[t]||[])if(this.held.has(e))return!0;return!1}_bindMouse(){this._onMouseMove=t=>{this.pointerX=t.clientX/window.innerWidth*2-1,this.pointerInside=!0,this.mouseSteering&&(this.steerArmed=!0)},this._onMouseLeave=()=>{this.pointerInside=!1},this._onMouseDown=t=>{if(t.pointerType==="touch"||!this.enabled||!this.mouseSteering||t.target.closest("button, input, a, label, .panel, .menu, .overlay"))return;const e=t.clientX/window.innerWidth*2-1;e<-.35?(this._press("left"),this.released.set("left",this.now)):e>.35?(this._press("right"),this.released.set("right",this.now)):(this._press("jump"),this.released.set("jump",this.now))},window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseleave",this._onMouseLeave),this.target.addEventListener("mousedown",this._onMouseDown)}updateSteering(t=3){if(this.steerChanged=!1,!this.mouseSteering||!this.steerArmed||!this.pointerInside)return this.steerLane;const e=this.pointerX;if(Math.abs(e)<Mr.DEADZONE)return this.steerLane;const i=(r=>r-(t-1)/2)(this.steerLane);let s=this.steerLane;return e>i+Mr.OUT&&this.steerLane<t-1?s=this.steerLane+1:e<i-Mr.OUT&&this.steerLane>0&&(s=this.steerLane-1),s!==this.steerLane&&(this.steerLane=s,this.steerChanged=!0),this.steerLane}resetSteering(){this.steerLane=1,this.steerChanged=!1,this.steerArmed=!1}get steeringActive(){return this.mouseSteering&&this.pointerInside}inject(t){this._press(t)}clear(){this.held.clear(),this.buffer.clear(),this.released.clear(),this.pointer.active=!1,this.resetSteering()}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseleave",this._onMouseLeave),this.target.removeEventListener("pointerdown",this._onPointerDown),this.target.removeEventListener("pointerup",this._onPointerUp),this.target.removeEventListener("mousedown",this._onMouseDown)}}const an=(n,t,e)=>n<t?t:n>e?e:n,we=n=>an(n,0,1),Wt=(n,t,e)=>n+(t-n)*e;function Xe(n,t,e,A){return Wt(n,t,1-Math.pow(e,A))}const hg=n=>1-Math.pow(1-we(n),3),co=(n,t)=>n+Math.random()*(t-n),bA=(n,t)=>Math.floor(co(n,t+1)),Ss=n=>n[Math.floor(Math.random()*n.length)];function tA(n){return Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Sr(n){return n>=1e3?`${(n/1e3).toFixed(2)} km`:`${Math.floor(n)} m`}const Za="velocita-run:v1";class ug{constructor(){this.available=this.probe(),this.data=this.load()}probe(){try{const t="__velocita_probe__";return window.localStorage.setItem(t,"1"),window.localStorage.removeItem(t),!0}catch{return!1}}defaults(){return{version:1,bestScore:0,bestDistance:0,totalRuns:0,totalCoins:0,coinsBank:0,lastCharacter:"nova",unlockedCharacters:["nova"],unlockedPowerUps:["magnet","shield","multiply","boost"],upgrades:{magnet:0,shield:0,multiply:0,boost:0},missions:null,settings:{quality:"auto",music:.6,sfx:.8,screenShake:1,fogOfWar:!0,showFps:!1,invertLane:!1,mouseSteering:!0},seenTutorial:!1}}load(){const t=this.defaults();if(!this.available)return t;try{const e=window.localStorage.getItem(Za);if(!e)return t;const A=JSON.parse(e);return{...t,...A,settings:{...t.settings,...A.settings||{}},upgrades:{...t.upgrades,...A.upgrades||{}}}}catch(e){return console.warn("[Storage] could not read save data, starting fresh.",e),t}}save(){if(this.available)try{window.localStorage.setItem(Za,JSON.stringify(this.data))}catch(t){console.warn("[Storage] save failed.",t)}}update(t){return t(this.data),this.save(),this.data}reset(){this.data=this.defaults(),this.save()}}const Kt=new ug;class dg{constructor(){this.values={...Kt.data.settings}}get(t){return this.values[t]}set(t,e){return this.values[t]=e,Kt.update(A=>{A.settings[t]=e}),e}setVolume(t,e){return this.set(t,an(e,0,1))}reset(){this.values={...Kt.defaults().settings},Kt.update(t=>{t.settings={...this.values}})}}const xe=new dg,Me=Object.freeze({LANE_COUNT:3,LANE_WIDTH:2.4,DECK_HALF_WIDTH:4.6,TILE_LENGTH:24,TILES_AHEAD:9,TILES_BEHIND:2,DECK_Y:0}),Ve=Object.freeze({START:9.5,MAX:30,RAMP_DISTANCE:2600,BOOST_MULTIPLIER:1.45}),eA=Object.freeze({LANE_CHANGE_TIME:.19,JUMP_VELOCITY:8.1,GRAVITY:-22,COYOTE_TIME:.11,SLIDE_DURATION:.62,SLIDE_HEIGHT:.72,STAND_HEIGHT:1.62,HITBOX_HALF_WIDTH:.42,HITBOX_DEPTH:.55,SPAWN_INVULNERABILITY:2.4}),ZA=Object.freeze({PER_METRE:10,COIN_VALUE:10,NEAR_MISS:25,MULTIPLIER_STEP:300,MULTIPLIER_MAX:8}),Qe=Object.freeze({FOV:62,OFFSET_X:0,OFFSET_Y:3.35,OFFSET_Z:7.4,POSITION_DAMPING:.0016,LOOK_DAMPING:8e-4,LOOK_AHEAD:7.5,LOOK_HEIGHT:1.15,LANE_FOLLOW:.42,NEAR:.1,FAR:420}),iA=Object.freeze({magnet:{id:"magnet",name:"Lodestone",blurb:"Draws in nearby quids",duration:9,color:5890303,cssColor:"#59e0ff",icon:"magnet"},shield:{id:"shield",name:"Aegis Shell",blurb:"Absorbs one impact",duration:0,color:16765286,cssColor:"#ffd166",icon:"shield"},multiply:{id:"multiply",name:"Overdrive Lens",blurb:"Doubles score value",duration:10,color:16740312,cssColor:"#ff6fd8",icon:"multiply"},boost:{id:"boost",name:"Thruster Cell",blurb:"Surge forward, smash through",duration:4.5,color:8257435,cssColor:"#7dff9b",icon:"boost"}}),dc=Object.freeze(Object.keys(iA)),fc=Object.freeze({magnet:{maxLevel:4,baseCost:120,step:140,label:"Lodestone Radius"},shield:{maxLevel:3,baseCost:180,step:200,label:"Aegis Durability"},multiply:{maxLevel:4,baseCost:200,step:220,label:"Overdrive Duration"},boost:{maxLevel:3,baseCost:160,step:190,label:"Thruster Surge"}}),ei=Object.freeze([{id:"harbour",name:"Ferry Basin",palette:{fog:2901079,sky:1318956,accent:16752453,secondary:5232328,ground:5397607,rail:7174277},fogDensity:.011,hazard:["crate","pallet","crate"],width:1},{id:"nightmarket",name:"Kessel Night Market",palette:{fog:3812176,sky:1905960,accent:16736162,secondary:9169407,ground:5786979,rail:7824522},fogDensity:.014,hazard:["stall","sign","crate"],width:1},{id:"spine",name:"Cargo Spine",palette:{fog:2439498,sky:1121574,accent:3135141,secondary:10149119,ground:4872035,rail:6582910},fogDensity:.01,hazard:["container","forklift","container"],width:2},{id:"sluice",name:"Storm Sluice",palette:{fog:1979976,sky:924967,accent:4831231,secondary:13234431,ground:4148825,rail:5794424},fogDensity:.021,hazard:["sluice","puddle","barrier"],width:1},{id:"dawn",name:"Dawn Overpass",palette:{fog:5721973,sky:3813714,accent:16763275,secondary:11122687,ground:6513519,rail:8553103},fogDensity:.008,hazard:["barrier","pallet","crate"],width:1}]),Gi=Object.freeze({TIERS:[0,700,1600,2800,4400],EXTRA_ROW_CHANCE:[0,.05,.14,.25,.36],COIN_DENSITY:[1,1.15,1.35,1.6,1.85],COIN_CHANCE:.94}),$A=Object.freeze({low:{shadows:!1,shadowMapSize:512,pixelRatioCap:1,fogFar:180,particleBudget:120,propDensity:.5,buildingLayers:1,anisotropy:1},medium:{shadows:!0,shadowMapSize:1024,pixelRatioCap:1.5,fogFar:260,particleBudget:260,propDensity:.75,buildingLayers:2,anisotropy:4},high:{shadows:!0,shadowMapSize:2048,pixelRatioCap:2,fogFar:340,particleBudget:480,propDensity:1,buildingLayers:3,anisotropy:8}}),pc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ln{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fg=new eo(-1,1,1,-1,0,1);class pg extends Pe{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const mg=new pg;class mc{constructor(t){this._mesh=new tt(mg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class gc extends Ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new mc(this.material)}render(t,e,A){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=A.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $a extends Ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,A){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(A),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class gg extends Ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class vg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const A=t.getSize(new st);this._width=A.width,this._height=A.height,e=new EA(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:QA}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gc(pc),this.copyPass.material.blending=HA,this.clock=new eg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let A=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,A),r.needsSwap){if(A){const o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$a!==void 0&&(r instanceof $a?A=!0:r instanceof gg&&(A=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const A=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(A,i),this.renderTarget2.setSize(A,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(A,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _g extends Ln{constructor(t,e,A=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=A,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(t,e,A){const i=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:A),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const xg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ln extends Ln{constructor(t,e,A,i){super(),this.strength=e!==void 0?e:1,this.radius=A,this.threshold=i,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new EA(s,r,{type:QA}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new EA(s,r,{type:QA});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new EA(s,r,{type:QA});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const o=xg;this.highPassUniforms=Ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=pc;this.copyUniforms=Ms.clone(c.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:kA,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new GA,this.fsQuad=new mc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let A=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(A,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(A,i),this.renderTargetsVertical[s].setSize(A,i),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/A,1/i),A=Math.round(A/2),i=Math.round(i/2)}render(t,e,A,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=A.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=A.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=ln.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[a]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=ln.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[a]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(A),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let A=0;A<t;A++)e.push(.39894*Math.exp(-.5*A*A/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ln.BlurDirectionX=new st(1,0);ln.BlurDirectionY=new st(0,1);const wg={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1.05},uAberration:{value:.0012},uSpeedBlur:{value:0},uGrain:{value:.035},uScanline:{value:0},uSaturation:{value:1.12},uContrast:{value:1.05},uLift:{value:new C(.012,.02,.035)},uGain:{value:new C(1.02,1,.98)},uFlash:{value:0},uFlashColor:{value:new rt(1,1,1)},uDesaturate:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;

    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uSpeedBlur;
    uniform float uGrain;
    uniform float uScanline;
    uniform float uSaturation;
    uniform float uContrast;
    uniform vec3  uLift;
    uniform vec3  uGain;
    uniform float uFlash;
    uniform vec3  uFlashColor;
    uniform float uDesaturate;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(443.897, 441.423));
      p += dot(p, p + 19.19);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r = length(centered);

      // --- Chromatic aberration, stronger toward the edges -------------
      float ab = uAberration * (1.0 + r * 2.4);
      vec3 color;
      color.r = texture2D(tDiffuse, uv + centered * ab).r;
      color.g = texture2D(tDiffuse, uv).g;
      color.b = texture2D(tDiffuse, uv - centered * ab).b;

      // --- Radial speed blur -------------------------------------------
      // Samples march toward the screen centre, so the world streaks
      // outward from the vanishing point. Scaled by uSpeedBlur so it
      // only appears when the player is genuinely moving fast.
      if (uSpeedBlur > 0.001) {
        vec3 blurred = vec3(0.0);
        float total = 0.0;
        const int SAMPLES = 6;
        for (int i = 0; i < SAMPLES; i++) {
          float t = float(i) / float(SAMPLES - 1);
          float scale = 1.0 - t * uSpeedBlur * 0.06 * smoothstep(0.08, 0.6, r);
          vec2 sampleUv = centered * scale + 0.5;
          float wgt = 1.0 - t * 0.55;
          blurred += texture2D(tDiffuse, sampleUv).rgb * wgt;
          total += wgt;
        }
        color = mix(color, blurred / total, clamp(uSpeedBlur, 0.0, 1.0) * 0.85);
      }

      // --- Lift / gain grade --------------------------------------------
      color = color * uGain + uLift;

      // --- Saturation / contrast ----------------------------------------
      float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color = mix(vec3(lum), color, uSaturation);
      color = (color - 0.5) * uContrast + 0.5;

      // Desaturate on death, driven back to full colour on revive.
      color = mix(color, vec3(lum), uDesaturate);

      // --- Vignette ------------------------------------------------------
      // Gentle by design. The UI already draws a CSS vignette layer, so a
      // strong one here compounds and crushes the deck into black.
      float vig = smoothstep(1.05, 0.28, r * uVignette);
      color *= mix(1.0, vig, 0.42);

      // --- Scanlines (used in the tunnel sector) -------------------------
      if (uScanline > 0.001) {
        float scan = sin(uv.y * 900.0) * 0.5 + 0.5;
        color *= 1.0 - scan * uScanline * 0.12;
      }

      // --- Grain ---------------------------------------------------------
      float g = hash(uv * 900.0 + fract(uTime) * 100.0) - 0.5;
      color += g * uGrain;

      // --- Damage / pickup flash ------------------------------------------
      color = mix(color, uFlashColor, uFlash);

      gl_FragColor = vec4(max(color, 0.0), 1.0);
    }
  `};class Eg{constructor(t,e,A,i){this.renderer=t,this.scene=e,this.camera=A,this.enabled=!0,this.composer=new vg(t),this.composer.addPass(new _g(e,A));const s=t.getSize(new st);this.bloom=new ln(s,.55,.68,.68),this.composer.addPass(this.bloom),this.grade=new gc(wg),this.grade.renderToScreen=!0,this.composer.addPass(this.grade),this.u=this.grade.uniforms,this.flashAmount=0,this.flashDecay=3.2,this.aberrationBase=i.shadows?.0011:6e-4,this.speedBlur=0,this.targetSpeedBlur=0,this.desaturate=0,this.targetDesaturate=0,this.scanline=0,this.targetScanline=0,this.shakeAmount=0,this.applyQuality(i)}applyQuality(t){this.quality=t,this.bloom.enabled=t.particleBudget>150,this.bloom.strength=t.particleBudget>150?.55:0,this.u.uGrain.value=t.particleBudget>150?.035:.015,this.u.uAberration.value=this.aberrationBase,this.fitToRenderer()}setSize(t,e){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e),this.bloom.setSize(t,e),this.u.uTime.value=performance.now()*.001}fitToRenderer(){const t=this.renderer.getSize(new st);this.setSize(t.x,t.y)}flash(t=16777215,e=.6,A=3.2){this.u.uFlashColor.value.setHex(t),this.flashAmount=Math.max(this.flashAmount,e),this.flashDecay=A}punchAberration(t=.006){this.u.uAberration.value=Math.min(.02,this.u.uAberration.value+t)}update(t,e,A){const i=this.u;i.uTime.value=A,this.flashAmount=Math.max(0,this.flashAmount-this.flashDecay*e),i.uFlash.value=this.flashAmount,this.targetSpeedBlur=we((t-.45)/.55),this.speedBlur=Xe(this.speedBlur,this.targetSpeedBlur,.02,e),i.uSpeedBlur.value=this.speedBlur,i.uAberration.value=Xe(i.uAberration.value,this.aberrationBase,.02,e),this.desaturate=Xe(this.desaturate,this.targetDesaturate,.05,e),i.uDesaturate.value=this.desaturate,this.scanline=Xe(this.scanline,this.targetScanline,.08,e),i.uScanline.value=this.scanline,this.bloom.enabled&&(this.bloom.strength=Wt(.5,.68,t))}setDesaturate(t){this.targetDesaturate=we(t)}setScanline(t){this.targetScanline=we(t)}render(t){this.composer.render(t)}dispose(){this.composer.dispose()}}const nA=new Map;function pn(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function Ds(n,{repeat:t=[1,1],srgb:e=!0,aniso:A=4}={}){const i=new fn(n);return i.wrapS=i.wrapT=sn,i.repeat.set(t[0],t[1]),e&&(i.colorSpace=pe),i.anisotropy=A,i}function Is(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Mg(n,t,e,A,i,{density:s=2200,minA:r=.02,maxA:o=.09,tint:a=16777215}={}){n.fillStyle=A,n.fillRect(0,0,t,e);for(let l=0;l<s;l++){const c=i()*t,h=i()*e,u=6+i()*52,f=r+i()*(o-r);n.globalAlpha=f,n.fillStyle=`#${a.toString(16).padStart(6,"0")}`,n.beginPath(),n.arc(c,h,u,0,Math.PI*2),n.fill()}n.globalAlpha=1}function ho(n,t,e,A,i=14){const s=n.getImageData(0,0,t,e),r=s.data;for(let o=0;o<r.length;o+=4){const a=(A()-.5)*i;r[o]=Math.max(0,Math.min(255,r[o]+a)),r[o+1]=Math.max(0,Math.min(255,r[o+1]+a)),r[o+2]=Math.max(0,Math.min(255,r[o+2]+a))}n.putImageData(s,0,0)}function Sg(n="#3b4149",t=7,e=512){const A=`deck-${n}-${t}`;if(nA.has(A))return nA.get(A);const i=pn(e,e),s=i.getContext("2d"),r=Is(t);Mg(s,e,e,n,r,{density:260,minA:.03,maxA:.11});for(let a=0;a<5200;a++){const l=r()*e,c=r()*e,h=.4+r()*1.7,u=r()>.5;s.globalAlpha=.05+r()*.16,s.fillStyle=u?"#ffffff":"#000000",s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}s.globalAlpha=1,s.strokeStyle="rgba(0,0,0,0.30)",s.lineWidth=3;for(let a=0;a<=2;a++){const l=a*e/2;s.beginPath(),s.moveTo(l,0),s.lineTo(l,e),s.moveTo(0,l),s.lineTo(e,l),s.stroke()}s.strokeStyle="rgba(255,255,255,0.05)",s.lineWidth=1;for(let a=0;a<=2;a++){const l=a*e/2+2;s.beginPath(),s.moveTo(l,0),s.lineTo(l,e),s.moveTo(0,l),s.lineTo(e,l),s.stroke()}for(let a=0;a<26;a++){const l=r()*e,c=r()*e,h=24+r()*90,u=s.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(10,20,30,0.30)"),u.addColorStop(1,"rgba(10,20,30,0)"),s.fillStyle=u,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}ho(s,e,e,r,12);const o=Ds(i,{repeat:[1,1]});return nA.set(A,o),o}function yg(n="#2a3038",t=11,e=512){const A=`wet-${n}-${t}`;if(nA.has(A))return nA.get(A);const i=pn(e,e),s=i.getContext("2d"),r=Is(t);s.fillStyle=n,s.fillRect(0,0,e,e);for(let a=0;a<90;a++){const l=r()*e,c=3+r()*26,h=r()*e,u=40+r()*300,f=s.createLinearGradient(0,h,0,h+u);f.addColorStop(0,"rgba(20,40,55,0.0)"),f.addColorStop(.3,`rgba(20,45,62,${.1+r()*.18})`),f.addColorStop(1,"rgba(20,40,55,0)"),s.fillStyle=f,s.fillRect(l,h,c,u)}for(let a=0;a<16;a++){const l=r()*e,c=r()*e,h=20+r()*70,u=h*(.3+r()*.4),f=s.createRadialGradient(l,c,0,l,c,h);f.addColorStop(0,"rgba(120,190,215,0.20)"),f.addColorStop(.7,"rgba(60,110,140,0.10)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.save(),s.translate(l,c),s.scale(1,u/h),s.translate(-l,-c),s.fillStyle=f,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill(),s.restore()}ho(s,e,e,r,9);const o=Ds(i,{repeat:[1,1]});return nA.set(A,o),o}function vc(n="#ff9f45",t="#20252b",e=3,A=256){const i=`hazard-${n}-${t}`;if(nA.has(i))return nA.get(i);const s=pn(A,A/4),r=s.getContext("2d"),o=A/4;r.fillStyle=t,r.fillRect(0,0,A,o),r.fillStyle=n;const a=A/8;for(let h=-o;h<A+o;h+=a*2)r.beginPath(),r.moveTo(h,o),r.lineTo(h+a,o),r.lineTo(h+a+o,0),r.lineTo(h+o,0),r.closePath(),r.fill();const l=Is(e);r.globalAlpha=.25;for(let h=0;h<160;h++){r.fillStyle=l()>.5?"#000":"#fff";const u=l()*A,f=l()*o;r.fillRect(u,f,1+l()*12,1+l()*2)}r.globalAlpha=1;const c=Ds(s,{repeat:[1,1]});return nA.set(i,c),c}function _c(n="#3a5a6b",t=9,e=256){const A=`corr-${n}-${t}`;if(nA.has(A))return nA.get(A);const i=pn(e,e),s=i.getContext("2d"),r=Is(t);s.fillStyle=n,s.fillRect(0,0,e,e);const o=16,a=e/o;for(let c=0;c<o;c++){const h=c*a,u=s.createLinearGradient(h,0,h+a,0);u.addColorStop(0,"rgba(0,0,0,0.34)"),u.addColorStop(.35,"rgba(255,255,255,0.14)"),u.addColorStop(.6,"rgba(255,255,255,0.05)"),u.addColorStop(1,"rgba(0,0,0,0.30)"),s.fillStyle=u,s.fillRect(h,0,a,e)}for(let c=0;c<34;c++){const h=r()*e,u=e*(.62+r()*.38),f=4+r()*26,m=s.createRadialGradient(h,u,0,h,u,f);m.addColorStop(0,`rgba(150,80,40,${.14+r()*.24})`),m.addColorStop(1,"rgba(150,80,40,0)"),s.fillStyle=m,s.beginPath(),s.arc(h,u,f,0,Math.PI*2),s.fill()}ho(s,e,e,r,10);const l=Ds(i,{repeat:[1,1]});return nA.set(A,l),l}let Tn=null;function Us(){if(Tn)return Tn;const n=128,t=pn(n,n),e=t.getContext("2d"),A=e.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return A.addColorStop(0,"rgba(255,255,255,1)"),A.addColorStop(.28,"rgba(255,255,255,0.60)"),A.addColorStop(.62,"rgba(255,255,255,0.16)"),A.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=A,e.fillRect(0,0,n,n),Tn=new fn(t),Tn.colorSpace=pe,Tn}let Cn=null;function bg(){if(Cn)return Cn;const n=16,t=64,e=pn(n,t),A=e.getContext("2d"),i=A.createLinearGradient(0,0,0,t);return i.addColorStop(0,"rgba(200,230,255,0)"),i.addColorStop(.5,"rgba(210,235,255,0.85)"),i.addColorStop(1,"rgba(200,230,255,0)"),A.fillStyle=i,A.fillRect(n*.35,0,n*.3,t),Cn=new fn(e),Cn.colorSpace=pe,Cn}function Tg(n){const t=n.capabilities.getMaxAnisotropy();for(const e of nA.values())e.isCanvasTexture&&(e.anisotropy=Math.min(8,t),e.needsUpdate=!0)}class Cg{constructor(t,e=null,A=0,i=1/0){this.factory=t,this.reset=e,this.max=i,this.available=[],this.active=new Set,this.created=0;for(let s=0;s<A;s++)this.available.push(this._make())}_make(){return this.created++,this.factory()}get(){const t=this.available.pop()??this._make();return this.active.add(t),this.reset&&this.reset(t),t}release(t){this.active.delete(t)&&(this.active.size<0||this.active.size+this.available.size>=this.max||this.available.push(t))}releaseAll(){for(const t of this.active)this.reset&&this.reset(t),this.available.push(t);this.active.clear()}get activeCount(){return this.active.size}get availableCount(){return this.available.length}}class xc extends Cg{constructor(t,e={}){const A=i=>{i.visible=!0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.userData.pooled=!0,i.parent&&i.parent.remove(i)};super(t,A,e.prewarm??0,e.max??1/0)}acquireInto(t){const e=this.get();return t.add(e),e}release(t){t.parent&&t.parent.remove(t),super.release(t)}}const yr=new Map;function mn(n,t){return yr.has(n)||yr.set(n,t()),yr.get(n)}const Xt={concrete:3883337,concreteDark:2764598,steel:7042948,steelDark:4542041,amber:16752453,amberDeep:15234602,teal:5232328,mint:8257435,hotPink:16736162,sky:9169407,tarpBlue:3108766,tarpGreen:3046747,tarpRust:10379066,wood:9071172};function wc(n=Xt.concrete,t=.92){return mn(`concrete-${n}-${t}`,()=>new ae({color:n,roughness:t,metalness:.05}))}function sA(n=Xt.steel,t=.42,e=.75){return mn(`metal-${n}-${t}-${e}`,()=>new ae({color:n,roughness:t,metalness:e}))}function PA(n,t=1.6,e=1){return mn(`emissive-${n}-${t}-${e}`,()=>new ae({color:0,emissive:n,emissiveIntensity:t,roughness:1,metalness:0,transparent:e<1,opacity:e,toneMapped:!1}))}const hA=new Map;function Zt(n,t,e){const A=`box-${n}-${t}-${e}`;return hA.has(A)||hA.set(A,new ce(n,t,e)),hA.get(A)}function uo(n,t,e,A=10){const i=`cyl-${n}-${t}-${e}-${A}`;return hA.has(i)||hA.set(i,new xA(n,t,e,A)),hA.get(i)}function Ls(n,t=10){const e=`sph-${n}-${t}`;return hA.has(e)||hA.set(e,new ri(n,t,Math.max(6,t>>1))),hA.get(e)}function Bg(n,t,e=8,A=14){const i=`torus-${n}-${t}-${e}-${A}`;return hA.has(i)||hA.set(i,new Un(n,t,e,A)),hA.get(i)}const br=new Map;function Ec(n,t={}){var m;const{bg:e="#12161c",fg:A="#ff9f45",width:i=512,height:s=128,font:r='700 74px "Rajdhani", "Segoe UI", system-ui, sans-serif',accentBar:o=!0,letterSpacing:a="6px"}=t,l=`${n}|${e}|${A}|${i}|${s}|${r}|${o}`;if(br.has(l))return br.get(l);const c=document.createElement("canvas");c.width=i,c.height=s;const h=c.getContext("2d");h.fillStyle=e,h.fillRect(0,0,i,s),o&&(h.fillStyle=A,h.globalAlpha=.18,h.fillRect(0,s-10,i,10),h.globalAlpha=1,h.fillRect(0,0,6,s)),h.font=r,h.textAlign="center",h.textBaseline="middle",h.fillStyle=A,h.letterSpacing=a;let u=parseInt(((m=r.match(/(\d+)px/))==null?void 0:m[1])??"74",10);for(;h.measureText(n).width>i-60&&u>12;)u-=4,h.font=r.replace(/\d+px/,`${u}px`);h.shadowColor=A,h.shadowBlur=18,h.fillText(n,i/2,s/2),h.shadowBlur=0;const f=new fn(c);return f.colorSpace=pe,f.anisotropy=4,br.set(l,f),f}function wA(n,t=!1){const e=n[0].index!==null,A=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),s={},r={},o=n[0].morphTargetsRelative,a=new Pe;let l=0;for(let c=0;c<n.length;++c){const h=n[c];let u=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!A.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),u++}if(u!==A.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;a.addGroup(l,f,c),l+=f}}if(e){let c=0;const h=[];for(let u=0;u<n.length;++u){const f=n[u].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+c);c+=n[u].attributes.position.count}a.setIndex(h)}for(const c in s){const h=tl(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;a.setAttribute(c,h)}for(const c in r){const h=r[c][0].length;if(h===0)break;a.morphAttributes=a.morphAttributes||{},a.morphAttributes[c]=[];for(let u=0;u<h;++u){const f=[];for(let v=0;v<r[c].length;++v)f.push(r[c][v][u]);const m=tl(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;a.morphAttributes[c].push(m)}}return a}function tl(n){let t,e,A,i=-1,s=0;for(let l=0;l<n.length;++l){const c=n[l];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(A===void 0&&(A=c.normalized),A!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=c.gpuType),i!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.array.length}const r=new t(s);let o=0;for(let l=0;l<n.length;++l)r.set(n[l].array,o),o+=n[l].array.length;const a=new ne(r,e,A);return i!==void 0&&(a.gpuType=i),a}const el=new Gt,Al=new Gt;function Rg(n,t={}){const e=t.isDynamic??(()=>!1);n.updateMatrixWorld(!0),Al.copy(n.matrixWorld).invert();const A=new Map,i=[];n.traverse(s=>{if(!s.isMesh||e(s)||s.children.length>0)return;const r=s.geometry.clone();el.multiplyMatrices(Al,s.matrixWorld),r.applyMatrix4(el);for(const a of Object.keys(r.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&r.deleteAttribute(a);if(!r.attributes.uv){const a=r.attributes.position.count;r.setAttribute("uv",new ne(new Float32Array(a*2),2))}if(r.index===null){const a=r.attributes.position.count,l=new Uint32Array(a);for(let c=0;c<a;c++)l[c]=c;r.setIndex(new ne(l,1))}r.clearGroups();const o=Pg(s.material);A.has(o)||A.set(o,{material:s.material,geos:[]}),A.get(o).geos.push(r),i.push(s)});for(const s of i)s.parent&&s.parent.remove(s);for(const{material:s,geos:r}of A.values()){if(r.length===0)continue;let o=null;try{o=r.length===1?r[0]:wA(r,!1)}catch(a){console.warn("[GeoUtils] merge failed, falling back to separate meshes.",a),o=null}if(o){if(r.length>1)for(const l of r)l.dispose();const a=new tt(o,s);a.castShadow=!0,a.receiveShadow=!0,n.add(a)}else for(const a of r)n.add(new tt(a,s))}return n}function Pg(n){return Array.isArray(n)?n.map(t=>t.uuid).join("|"):n.uuid}const Tr=new Map;function Dg(n){if(Tr.has(n))return Tr.get(n);const t=new ae({color:n,map:_c("#ffffff",41),roughness:.72,metalness:.28});return Tr.set(n,t),t}function Ti(n){return n.userData.dynamic=!0,n.material=n.material.clone(),n}const te=Object.freeze({CRATE:"crate",CONTAINER:"container",BARRIER:"barrier",STALL:"stall",SLUICE:"sluice",FORKLIFT:"forklift",PALLET:"pallet",SIGN:"sign",SIGNPOST:"signpost"}),WA=16756782,ci=16734794;function Ie(n,t,e,A,i,s,r,o=WA,a=1.6){const l=Ti(new tt(Zt(t,e,A),PA(o,a)));return l.position.set(i,s,r),l.userData.baseEmissive=a,l.userData.pulse=!1,n.add(l),l}function Ig(n){const t=new jt,e=Math.random,A=(n==null?void 0:n.accent)??Xt.amber,i=new tt(Zt(1.6,1.3,1.6),wc(e()>.5?Xt.wood:Xt.tarpRust,.9));i.position.y=.65,i.castShadow=i.receiveShadow=!0,t.add(i);const s=sA(Xt.steelDark,.6,.6);for(const a of[-1,1])for(const l of[-1,1]){const c=new tt(Zt(.12,1.3,.12),s);c.position.set(a*.76,.65,l*.76),t.add(c)}const r=new tt(Zt(1.7,.1,1.7),sA(Xt.steel,.5,.7));r.position.y=1.3,t.add(r),Ie(t,1.66,.1,1.66,0,1.12,0),Ie(t,.1,1.24,.1,-.79,.66,-.79,ci,1.1),Ie(t,.1,1.24,.1,.79,.66,.79,ci,1.1);const o=Ti(new tt(Ls(.11,8),PA(A,2.2)));return o.position.y=1.42,t.add(o),t.userData.collide={halfW:.85,halfH:1.35,halfD:.85,top:1.35},t}function Ug(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.teal,A=[Xt.tarpBlue,Xt.tarpGreen,Xt.tarpRust,Xt.concreteDark],i=A[Math.floor(Math.random()*A.length)],s=new tt(Zt(2.1,2.3,4.4),Dg(i));s.position.y=1.15,s.castShadow=s.receiveShadow=!0,t.add(s);const r=sA(Xt.steelDark,.5,.6);for(const c of[-1,1])for(let h=-1;h<=1;h++){const u=new tt(Zt(.14,2.3,.14),r);u.position.set(c*1.02,1.15,h*1.9),t.add(u)}const o=sA(Xt.steel,.45,.7);for(const c of[-1,1])for(const h of[0,1])for(const u of[-1,1]){const f=new tt(Zt(.2,.2,.2),o);f.position.set(c*.98,h===0?.1:2.2,u*2.12),t.add(f)}const a=new tt(Zt(2.12,.24,.06),new ae({map:vc("#ff9f45","#14181d"),roughness:.4,metalness:.1,emissive:e,emissiveIntensity:.12}));a.position.set(0,1.9,-2.22),t.add(a);for(const c of[-1,1])Ie(t,.09,2.2,.09,-1.06,1.15,c*2.1,WA,1.3),Ie(t,.09,2.2,.09,1.06,1.15,c*2.1,WA,1.3);Ie(t,1.9,.12,.1,0,2.24,-2.21,ci,1.7),Ie(t,1.9,.12,.1,0,.12,-2.21,ci,1.7);const l=Ti(new tt(Ls(.11,8),PA(e,2.6)));return l.position.set(0,2.45,0),t.add(l),t.userData.collide={halfW:1.05,halfH:1.15,halfD:2.2,top:2.3},t}function Lg(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.amber,A=new tt(Zt(2.1,.28,.24),new ae({map:vc("#f5f0e6","#20242a"),roughness:.55,metalness:.2}));A.position.y=.72,A.castShadow=!0,t.add(A);const i=sA(Xt.steel,.4,.8);for(const r of[-.95,.95]){const o=new tt(Zt(.14,.75,.14),i);o.position.set(r,.37,0),t.add(o);const a=new tt(Zt(.4,.08,.4),i);a.position.set(r,.04,0),t.add(a)}const s=Ti(new tt(Ls(.09,8),PA(e,2.4)));s.position.set(0,.92,0),t.add(s),Ie(t,2.1,.3,.26,0,.72,0,WA,1.9);for(const r of[-.95,.95])Ie(t,.16,.7,.16,r,.38,0,WA,1.4);return t.userData.collide={halfW:1.05,halfH:.4,halfD:.16,top:.9},t.userData.requireJump=!0,t}function Ng(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.hotPink,A=mn(`stall-canopy-${e}`,()=>new ae({color:e,roughness:.8,side:TA})),i=new tt(Zt(2,.9,1.4),sA(Xt.steelDark,.6,.4));i.position.y=.45,i.castShadow=i.receiveShadow=!0,t.add(i);const s=new tt(Zt(2.2,.1,1.7),A);s.position.y=2.1,t.add(s);for(const a of[-.9,.9]){const l=new tt(Zt(2.2,.24,.06),A);l.position.set(0,1.94,a),t.add(l)}const r=sA(Xt.steel,.4,.8);for(const a of[-.95,.95])for(const l of[-.75,.75]){const c=new tt(uo(.05,.05,2.1,6),r);c.position.set(a,1.05,l),t.add(c)}const o=Ti(new tt(Zt(2,.06,.06),PA(e,2.8)));return o.position.set(0,2,-.8),t.add(o),Ie(t,2.02,.11,1.42,0,.9,0,ci,1.7),Ie(t,2.02,.09,.09,0,.94,-.72,WA,1.6),t.userData.collide={halfW:1,halfH:1.05,halfD:.75,top:2.1},t}function Fg(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.sky,A=new tt(Zt(2.2,.08,1),sA(Xt.steelDark,.5,.7));A.position.y=.04,t.add(A);for(let s=-3;s<=3;s++){const r=new tt(Zt(.08,.02,.9),PA(662052,.4));r.position.set(s*.28,.09,0),t.add(r)}const i=new ae({color:e,transparent:!0,opacity:.4,emissive:e,emissiveIntensity:.8,roughness:.1,depthWrite:!1});for(let s=-2;s<=2;s++){const r=Ti(new tt(uo(.06,.14,2.2,6),i));r.position.set(s*.4,1.1,0),r.userData.isJet=!0,t.add(r)}for(const s of[-1,1])Ie(t,.12,.14,1.02,s*1.08,.1,0,WA,1.7);return Ie(t,2.2,.08,.1,0,.13,-.5,ci,1.4),t.userData.collide={halfW:1.1,halfH:1.1,halfD:.5,top:2.2},t}function Vg(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.mint,A=new tt(Zt(1.5,.9,2.6),mn("fork-body",()=>new ae({color:Xt.amberDeep,roughness:.6,metalness:.3})));A.position.y=.55,A.castShadow=A.receiveShadow=!0,t.add(A);const i=sA(Xt.steel,.4,.8),s=new tt(Zt(1.4,.08,1.4),i);s.position.set(0,2,-.3),t.add(s);for(const a of[-.65,.65])for(const l of[-.9,.3]){const c=new tt(Zt(.08,1.1,.08),i);c.position.set(a,1.5,l),t.add(c)}const r=new tt(Zt(.9,1.6,.12),i);r.position.set(0,1,-1.35),t.add(r);for(const a of[-.3,.3]){const l=new tt(Zt(.12,.06,.9),i);l.position.set(a,.3,-1.75),t.add(l)}const o=Ti(new tt(Ls(.1,8),PA(e,2.4)));o.position.set(0,2.15,-.3),t.add(o),Ie(t,1.5,.11,.09,0,1.02,-1.32,ci,1.8);for(const a of[-.3,.3])Ie(t,.13,.08,.92,a,.32,-1.78,WA,1.5);return t.userData.collide={halfW:.8,halfH:1.05,halfD:1.4,top:2.05},t}function Og(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.amber,A=Zt(1.8,.1,.3),i=wc(Xt.wood,.9);for(let o=-2;o<=2;o++){const a=new tt(A,i);a.position.set(0,.34,o*.42),a.castShadow=!0,t.add(a)}const s=Zt(.16,.24,1.7);for(const o of[-.75,.75]){const a=new tt(s,i);a.position.set(o,.16,0),t.add(a)}const r=new tt(Zt(.4,.02,1.7),PA(e,1.2));r.position.set(0,.4,0),t.add(r);for(const o of[-.92,.92])Ie(t,.09,.16,1.8,o,.3,0,WA,1.5);return Ie(t,1.84,.1,.1,0,.4,-.88,ci,1.6),t.userData.collide={halfW:.9,halfH:.25,halfD:.85,top:.45},t.userData.requireJump=!0,t}function qg(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.amber,A=Qg,i=["ARTERIAL","SECTOR 7","MIND GAP","CLEAR","SLOW","BAY 12"][Math.floor(Math.random()*6)],s=new tt(Zt(2.6,.62,.08),new ae({map:Ec(i,{fg:`#${e.toString(16).padStart(6,"0")}`}),emissive:e,emissiveIntensity:.55,roughness:.6}));s.position.y=A+.31,s.castShadow=!0,t.add(s);const r=sA(Xt.steelDark,.5,.6);for(const l of[-.36,.36]){const c=new tt(Zt(2.8,.08,.12),r);c.position.set(0,A+.31+l,0),t.add(c)}for(const l of[-.8,.8]){const c=new tt(Zt(.34,.05,.16),PA(16773328,2.4));c.position.set(l,A-.03,-.12),t.add(c)}const o=sA(Xt.steel,.4,.8);for(const l of[-1.72,1.72]){const c=new tt(Zt(.16,A,.16),o);c.position.set(l,A/2,0),t.add(c)}const a=new tt(Zt(3.6,.14,.14),o);return a.position.set(0,A+.95,0),t.add(a),t.userData.collide={halfW:1.3,halfH:.31,halfD:.12,top:A+.62},t.userData.requireSlide=!0,t.userData.clearance=A,t}function Hg(n){const t=new jt,e=(n==null?void 0:n.accent)??Xt.teal,A=new tt(uo(.05,.06,2.6,6),sA(Xt.steelDark,.5,.6));A.position.y=1.3,t.add(A);const i=new tt(Zt(.8,.5,.04),new ae({map:Ec("BAY 7",{fg:`#${e.toString(16).padStart(6,"0")}`,width:256,height:160}),emissive:e,emissiveIntensity:.4,roughness:.6}));return i.position.y=2.5,t.add(i),t.userData.decorative=!0,t.userData.collide=null,t}const il={[te.CRATE]:Ig,[te.CONTAINER]:Ug,[te.BARRIER]:Lg,[te.STALL]:Ng,[te.SLUICE]:Fg,[te.FORKLIFT]:Vg,[te.PALLET]:Og,[te.SIGN]:qg,[te.SIGNPOST]:Hg},Qg=1.12;class kg{constructor(t=null){this.parent=t,this.pools=new Map;const e=Object.keys(il);for(const A of e)this.pools.set(A,new xc(()=>Rg(il[A](null),{isDynamic:i=>i.userData.dynamic===!0}),{prewarm:6,max:40}))}spawn(t,e){const A=this.pools.get(t);if(!A)return console.warn(`[ObstacleFactory] unknown kind "${t}"`),null;const i=A.acquireInto(e);return i.userData.kind=t,i.userData.collide=i.userData.collide??null,i}release(t){const e=this.pools.get(t.userData.kind);e==null||e.release(t)}releaseAll(){for(const t of this.pools.values())t.releaseAll()}get totalCount(){let t=0;for(const e of this.pools.values())t+=e.created;return t}}let Wi=null;function zg(){if(Wi)return Wi;const n=128,t=document.createElement("canvas");t.width=t.height=n;const e=t.getContext("2d"),A=e.createRadialGradient(n*.4,n*.35,4,n/2,n/2,n/2);A.addColorStop(0,"#ffe9a8"),A.addColorStop(.55,"#ffc94d"),A.addColorStop(1,"#c98a1e"),e.fillStyle=A,e.fillRect(0,0,n,n),e.strokeStyle="rgba(255,255,255,0.22)";for(let i=16;i<n/2;i+=7)e.lineWidth=1,e.beginPath(),e.arc(n/2,n/2,i,0,Math.PI*2),e.stroke();e.strokeStyle="rgba(120,72,10,0.85)",e.lineWidth=9,e.lineCap="round",e.lineJoin="round";for(let i=0;i<2;i++){const s=n/2-12+i*20;e.beginPath(),e.moveTo(s-14,n/2-20),e.lineTo(s+8,n/2),e.lineTo(s-14,n/2+20),e.stroke()}e.strokeStyle="rgba(255,246,214,0.75)",e.lineWidth=4;for(let i=0;i<2;i++){const s=n/2-12+i*20-2;e.beginPath(),e.moveTo(s-14,n/2-22),e.lineTo(s+6,n/2-2),e.lineTo(s-14,n/2+18),e.stroke()}return Wi=new fn(t),Wi.colorSpace=pe,Wi.anisotropy=4,Wi}let cs=null;function Gg(){if(cs)return cs;const n=new xA(.36,.36,.08,8,1);n.rotateX(Math.PI/2);const t=new Un(.36,.045,6,8),e=t.clone();e.translate(0,0,.042);const A=t.clone();A.translate(0,0,-.042);const i=[n,e,A];for(const s of i)if(s.clearGroups(),!s.attributes.uv){const r=s.attributes.position.count;s.setAttribute("uv",new ne(new Float32Array(r*2),2))}cs=wA(i,!1);for(const s of i)s.dispose();return cs}const Wg=()=>mn("quid",()=>new ae({color:16765562,map:zg(),roughness:.28,metalness:.85,emissive:16753953,emissiveIntensity:.85}));class Kg{constructor(t,e=180){this.capacity=e,this.slots=[],this.count=0,this.geometry=Gg(),this.mesh=new li(this.geometry,Wg(),e),this.mesh.instanceMatrix.setUsage(ai),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,t.add(this.mesh),this.glowMaterial=new GA({map:Us(),color:16760929,transparent:!0,blending:kA,depthWrite:!1,opacity:.7,toneMapped:!1}),this.glow=new li(new BA(1.35,1.35),this.glowMaterial,e),this.glow.instanceMatrix.setUsage(ai),this.glow.frustumCulled=!1,this.glow.renderOrder=2,t.add(this.glow),this._matrix=new Gt,this._pos=new C,this._quat=new MA,this._scale=new C(1,1,1),this._euler=new bi,this._billboard=new MA,this.collectedTotal=0}add(t,e,A){return this.count>=this.capacity?!1:(this.slots.push({x:t,y:e,z:A,spin:Math.random()*Math.PI*2,spinSpeed:1.6+Math.random()*1.1,phase:Math.random()*Math.PI*2,bobAmp:.09+Math.random()*.07,bobRate:1.6+Math.random()*.9,pull:0}),this.count++,!0)}removeAt(t){const e=this.count-1;t!==e&&(this.slots[t]=this.slots[e]),this.slots.pop(),this.count--}cullBehind(t=16){for(let e=this.count-1;e>=0;e--)this.slots[e].z>t&&this.removeAt(e)}update(t,e,A,i,s,r=0){this.cullBehind(),this._billboard.copy(A.quaternion);for(let o=0;o<this.count;o++){const a=this.slots[o];if(a.z+=r,i){const u=i.x-a.x,f=i.y-a.y,m=i.z-a.z,v=u*u+f*f+m*m;if(v<s*s){const p=Math.sqrt(v)||1e-4,d=1-p/s,g=9*d*d+2.5;a.x+=u/p*g*t,a.y+=f/p*g*t,a.z+=m/p*g*t,a.pull=Math.min(1,a.pull+t*4)}}else a.pull>0&&(a.pull=Math.max(0,a.pull-t*2.5));a.spin+=a.spinSpeed*t;const l=Math.sin(e*a.bobRate+a.phase)*a.bobAmp;this._pos.set(a.x,a.y+l,a.z),this._euler.set(0,0,a.spin),this._quat.setFromEuler(this._euler);const c=1+a.pull*.18;this._scale.set(c,c,c),this._matrix.compose(this._pos,this._quat,this._scale),this.mesh.setMatrixAt(o,this._matrix);const h=(.9+a.pull*.5)*c;this._scale.set(h,h,h),this._matrix.compose(this._pos,this._billboard,this._scale),this.glow.setMatrixAt(o,this._matrix)}this.mesh.count=this.count,this.glow.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.glow.instanceMatrix.needsUpdate=!0}clear(){this.slots.length=0,this.count=0,this.mesh.count=0,this.glow.count=0,this.mesh.instanceMatrix.needsUpdate=!0,this.glow.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.glow.removeFromParent(),this.mesh.dispose(),this.glow.dispose(),this.glowMaterial.dispose()}}function Yg(n){const t=iA[n],e=new jt,A=t.color,i=new tt(new lo(.3,0),PA(A,2.8));i.userData.dynamic=!0,i.userData.spinRate=1.6,e.add(i);const s=new tt(new ao(.44,0),new GA({color:A,wireframe:!0,transparent:!0,opacity:.72,toneMapped:!1}));s.userData.dynamic=!0,s.userData.spinRate=-1.1,e.add(s);const r=sA(Xt.steel,.3,.9);for(const a of["x","y"]){const l=new tt(Bg(.52,.028,6,18),r);a==="x"?l.rotation.y=Math.PI/2:l.rotation.x=Math.PI/2,l.userData.dynamic=!0,l.userData.spinRate=a==="x"?2.4:-1.8,e.add(l)}const o=new tt(new BA(2.1,2.1),new GA({map:Us(),color:A,transparent:!0,blending:kA,depthWrite:!1,opacity:.5,toneMapped:!1}));return o.userData.dynamic=!0,o.userData.billboard=!0,e.add(o),e.userData.powerId=n,e.userData.radius=.72,e.userData.parts=e.children,e}class Xg{constructor(t){this.parent=t,this.pools=new Map;for(const e of Object.keys(iA))this.pools.set(e,new xc(()=>Yg(e),{prewarm:2,max:8}));this.live=[]}spawn(t,e,A,i){const s=this.pools.get(t);if(!s)return null;const r=s.acquireInto(this.parent);return r.position.set(e,A,i),this.live.push({obj:r,powerId:t}),r}update(t,e){for(const A of this.live){const{obj:i}=A;i.rotation.y+=t*.9,i.position.y+=Math.sin(performance.now()*.002+i.id)*t*.25;for(const s of i.userData.parts)s.userData.billboard?(s.quaternion.copy(e.quaternion),s.quaternion.premultiply(i.quaternion.clone().invert())):s.userData.spinRate&&(s.rotation.y+=t*s.userData.spinRate,s.rotation.x+=t*s.userData.spinRate*.4)}}releaseAt(t){var i;const e=this.live[t];if(!e)return;const A=this.live.length-1;t!==A&&(this.live[t]=this.live[A]),this.live.pop(),(i=this.pools.get(e.powerId))==null||i.release(e.obj)}clear(){for(let t=this.live.length-1;t>=0;t--)this.releaseAt(t)}}function Mc(n,t){const e=n.attributes.position.count,A=new Float32Array(e*3),i=new rt(t);for(let s=0;s<e;s++)A[s*3]=i.r,A[s*3+1]=i.g,A[s*3+2]=i.b;return n.setAttribute("color",new ne(A,3)),n}function Jg(n,t,e){const A=n.attributes.uv;for(let i=0;i<A.count;i++)A.setXY(i,A.getX(i)*t,A.getY(i)*e);return A.needsUpdate=!0,n}const Cr=new Gt;function pA(n,t,e,A,i,s,r,o,a=0){const l=new ce(t,e,A);return Cr.makeRotationY(a),Cr.setPosition(i,s,r),l.applyMatrix4(Cr),Mc(l,o),n.push(l),l}function nl(n,t,e,A,i,s,r,o,a,l=0,c=0){const h=new xA(t,e,A,i),u=new Gt().makeRotationFromEuler(new bi(l,0,c));return u.setPosition(s,r,o),h.applyMatrix4(u),Mc(h,a),n.push(h),h}function sl(n,t,e,A,i,s){const r=new BA(t,e);return r.rotateX(-Math.PI/2),r.translate(A,i,s),n.push(r),r}function jg(n,t=1){const e=Me.TILE_LENGTH,A=Me.DECK_HALF_WIDTH,i=new BA(A*2,e,1,6);i.rotateX(-Math.PI/2),Jg(i,2.5,5);{const g=i.attributes.position;for(let _=0;_<g.count;_++){const E=g.getX(_);g.setZ(_,-Math.pow(E/A,2)*.06)}g.needsUpdate=!0,i.computeVertexNormals()}const s=[],r=new rt(n.rail).multiplyScalar(.85),o=n.rail,a=new rt(n.rail).multiplyScalar(.55);for(const g of[-1,1])pA(s,.42,.38,e,g*(A-.1),.19,0,r),pA(s,.12,.12,e,g*(A-.3),.42,0,o);for(const g of[-3.6,-1.2,1.2,3.6])pA(s,.1,.09,e,g,.045,0,o);const l=7;for(let g=0;g<l;g++){const _=-e/2+e/l*(g+.5);pA(s,A*2+.5,.34,.34,0,-.42,_,a)}for(const g of[-1,1])pA(s,.26,.5,e,g*(A-.5),-.36,0,a);for(let g=0;g<2;g++){const _=-e/2+e/2*(g+.5)-e/4;for(const E of[-1,1])nl(s,.3,.36,2.4,8,E*(A-.6),-1.9,_,a)}for(let g=0;g<4;g++){const _=-e/2+e/4*(g+.5);for(const E of[-1,1])pA(s,.3,.06,1.1,E*(A-.75),.04,_,a)}for(let g=0;g<2;g++){const _=-e/2+e/2*g-e/4+(t%2?2:-2),E=g%2===0?-1:1;nl(s,.07,.1,3.4,6,E*(A+.35),1.7,_,o),pA(s,1.2,.09,.09,E*(A-.25),3.35,_,o),pA(s,.62,.14,.3,E*(A-.75),3.26,_,a)}const c=[],h=new rt(n.accent).multiplyScalar(.9);for(const g of[-1,1])for(let _=0;_<12;_++){const E=-e/2+1+_*2;pA(c,.16,.02,1.1,g*(A-.62),.012,E,h)}const u=[];for(const g of[-3.6,-1.2,1.2,3.6])for(let _=0;_<6;_++){const E=-e/2+1.6+_*4;pA(u,.2,.035,3.1,g,.022,E,16777215)}for(const g of[-1,1])pA(u,.2,.04,e-1,g*(A-.44),.018,0,16777215);const f=[];for(const g of[-1,1])for(let _=0;_<4;_++){const E=-e/2+3+_*6;sl(f,2.6,6.4,g*(A-1.1),.008,E)}for(const g of[-2.4,0,2.4])for(let _=0;_<3;_++)sl(f,2,7,g,.006,-e/2+4+_*8);const m=wA(s,!1),v=wA(c,!1),p=wA(u,!1),d=wA(f,!1);for(const g of s)g.dispose();for(const g of c)g.dispose();for(const g of u)g.dispose();for(const g of f)g.dispose();return{deck:i,structure:m,markings:v,lane:p,glow:d}}function Zg(n,t){const e=Sg(`#${n.ground.toString(16).padStart(6,"0")}`,t);e.wrapS=e.wrapT=sn;const A=yg(`#${n.ground.toString(16).padStart(6,"0")}`,t+3),i=new ae({map:e,roughnessMap:null,roughness:.52,metalness:.24,envMapIntensity:1.4});i.userData.wetTexture=A;const s=new ae({vertexColors:!0,roughness:.58,metalness:.68,envMapIntensity:1.1}),r=new ae({vertexColors:!0,roughness:.45,metalness:.1,emissive:new rt(n.accent),emissiveIntensity:.5}),o=new ae({color:0,emissive:new rt(n.accent),emissiveIntensity:1.05,roughness:1,metalness:0}),a=new GA({map:Us(),color:new rt(n.accent),transparent:!0,opacity:.3,depthWrite:!1,blending:kA,toneMapped:!1});return{deck:i,structure:s,markings:r,lane:o,glow:a}}class $g{constructor(t,e,A,i){this.sector=e,this.capacity=i;const s=jg(e.palette,A),r=Zg(e.palette,A);this.meshes=[];const o=[{geo:s.deck,mat:r.deck,shadow:"receive"},{geo:s.structure,mat:r.structure,shadow:"both"},{geo:s.markings,mat:r.markings,shadow:"none"},{geo:s.lane,mat:r.lane,shadow:"none"},{geo:s.glow,mat:r.glow,shadow:"none",additive:!0}];for(const a of o){const l=new li(a.geo,a.mat,i);l.instanceMatrix.setUsage(ai),l.frustumCulled=!1,l.castShadow=a.shadow==="both",l.receiveShadow=a.shadow!=="none",a.additive&&(l.renderOrder=1),t.add(l),this.meshes.push(l)}this.tileZ=[];for(let a=0;a<i;a++)this.tileZ.push(-(a+.5)*Me.TILE_LENGTH);this._matrix=new Gt,this.refresh()}advance(t){const e=Me.TILE_LENGTH,A=Me.TILES_BEHIND*e;let i=1/0;for(let s=0;s<this.tileZ.length;s++)this.tileZ[s]+=t,this.tileZ[s]<i&&(i=this.tileZ[s]);for(let s=0;s<this.tileZ.length;s++)this.tileZ[s]>A&&(this.tileZ[s]=i-e,i=this.tileZ[s]);this.refresh()}refresh(){const t=this.tileZ.length;this._matrix.makeTranslation(0,0,0);for(const e of this.meshes){for(let A=0;A<t;A++)this._matrix.elements[14]=this.tileZ[A],e.setMatrixAt(A,this._matrix);e.count=t,e.instanceMatrix.needsUpdate=!0}}dispose(){for(const t of this.meshes)t.removeFromParent(),t.geometry.dispose(),t.material.dispose();this.meshes.length=0}}class t0{constructor(t,e){this.scene=t,this.sectors=e,this.capacity=Me.TILES_AHEAD+Me.TILES_BEHIND,this.ribbons=new Map,e.forEach((A,i)=>{const s=new $g(t,A,i*13+1,this.capacity);s.group=s.meshes,this.ribbons.set(A.id,s),s.meshes.forEach(r=>r.visible=!1)}),this.activeSector=null,this.activeRibbon=null,this.totalScrolled=0}setSector(t){if(this.activeSector===t)return;const e=this.ribbons.get(t);if(e){if(this.activeRibbon)for(const A of this.activeRibbon.meshes)A.visible=!1;e.tileZ.length=0;for(let A=0;A<this.capacity;A++)e.tileZ.push(-(A+.5)*Me.TILE_LENGTH);e.refresh();for(const A of e.meshes)A.visible=!0;this.activeRibbon=e,this.activeSector=t}}update(t){var e;this.totalScrolled+=t,(e=this.activeRibbon)==null||e.advance(t)}dispose(){for(const t of this.ribbons.values())t.dispose();this.ribbons.clear()}}const e0={range:1.2},A0={block:{pos:"q8oAAFU1VTUAAKvKVTUAAFU1q8oAAKvKq8qqQqvKVTWqQqvKq8qqQlU1VTWqQlU1",nrm:"AIEAAIEAAIEAAIEAAACBAACBAH8AAH8A",col:"9c2d9c2d9c2d9c2d/ePE/ePE/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAEAAAADAAAAAQAAAAQAAAAFAAAABQAAAAYAAAAHAAAABgAAAAUAAAAEAAAABwAAAAEAAAAFAAAAAQAAAAcAAAACAAAABwAAAAAAAAACAAAAAAAAAAcAAAAGAAAAAAAAAAQAAAADAAAABAAAAAAAAAAGAAAA",gidx:"",v:8,bb:[-.5,0,-.5,.5,.625,.5]},corner:{pos:"AAAAAFU1q8qqQlU1q8oAAFU1AACqQlU1VTWqQqvKVTWqQgAAq8qqQqvKVTUAAKvKq8oAAKvKVTUAAAAA",nrm:"AAB/AAB/AAB/AAB/AH8AAH8AAH8AAACBAACBWgBa",col:"9c2d/ePE9c2d/ePE/ePE/ePE/ePE9c2d9c2d9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAMAAAAFAAAAAwAAAAQAAAAGAAAAAwAAAAYAAAABAAAABgAAAAcAAAAIAAAABwAAAAYAAAAEAAAAAwAAAAkAAAAFAAAACQAAAAMAAAAAAAAAAAAAAAcAAAAJAAAABwAAAAAAAAAIAAAACAAAAAAAAAACAAAAAgAAAAYAAAAIAAAABgAAAAIAAAABAAAABQAAAAcAAAAEAAAABwAAAAUAAAAJAAAA",gidx:"",v:10,bb:[-.5,0,-.5,.5,.625,.5]},"corner-bottom":{pos:"AAAAAFU1VTUAAAAAVTWqQlU1q8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKq8qqQlU1q8oAAFU1",nrm:"TsFOTsFOTsFOAACBAACBAACBAACBAAB/AAB/",col:"9c2d9c2d/ePE/ePE9c2d9c2d/ePE/ePE9c2d",idx:"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABAAAAAMAAAAGAAAAAAAAAAcAAAAIAAAABwAAAAAAAAACAAAACAAAAAMAAAAFAAAAAwAAAAgAAAAHAAAAAgAAAAQAAAAGAAAABAAAAAIAAAABAAAAAAAAAAQAAAABAAAABAAAAAAAAAAFAAAABQAAAAAAAAAIAAAABgAAAAcAAAACAAAABwAAAAYAAAADAAAAAgAAAAEAAAAAAAAABQAAAAQAAAADAAAABgAAAAMAAAAEAAAACAAAAAcAAAAAAAAAAgAAAAAAAAAHAAAABQAAAAMAAAAIAAAABwAAAAgAAAADAAAABgAAAAQAAAACAAAAAQAAAAIAAAAEAAAAAQAAAAQAAAAAAAAABQAAAAAAAAAEAAAACAAAAAAAAAAFAAAAAgAAAAcAAAAGAAAAAwAAAAYAAAAHAAAA",gidx:"",v:9,bb:[-.5,0,-.5,.5,.625,.5]},"corner-top":{pos:"AACqQlU1VTUAAFU1VTWqQgAAq8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKq8qqQlU1q8oAAFU1",nrm:"Tj9OTj9OTj9OAACBAACBAACBAACBAH8AAIEA",col:"/ePE9c2d/ePE/ePE9c2d9c2d/ePE/ePE9c2d",idx:"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABAAAAAMAAAAGAAAABgAAAAAAAAACAAAAAAAAAAYAAAADAAAAAAAAAAMAAAAHAAAACAAAAAQAAAABAAAABAAAAAgAAAAFAAAAAQAAAAcAAAAIAAAABwAAAAEAAAAAAAAAAgAAAAQAAAAGAAAABAAAAAIAAAABAAAACAAAAAMAAAAFAAAAAwAAAAgAAAAHAAAA",gidx:"",v:9,bb:[-.5,0,-.5,.5,.625,.5]},"corner-window":{pos:"AAAAAFU1q8qqQlU1q8oAAFU1AACqQlU1q8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKVTWqQgAAVTUAAAAA4g6ZNXMm6R6ZNVcHcyaZNeIOVweZNeke6R4RDVcHcyYRDeIO4g4RDXMmVwcRDeke",nrm:"AAB/AAB/AAB/AAB/AACBAACBAACBAACBAH8AfwAAAIEAAIEAAIEAAIEApgBapgBaAH8AAH8A",col:"9c2d/ePE9c2d/ePE/ePE9c2d9c2d/ePE/ePE9c2d+ty4+ty4+ty4+ty49s+i9s+i9s+i9s+i",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAgAAAAQAAAAGAAAABAAAAAIAAAABAAAABwAAAAMAAAAIAAAAAwAAAAcAAAAEAAAAAwAAAAQAAAABAAAACAAAAAUAAAAHAAAABQAAAAgAAAAJAAAAAAAAAAUAAAAJAAAABQAAAAAAAAAGAAAABgAAAAAAAAACAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAADAAAAA4AAAAPAAAADgAAAAwAAAALAAAADgAAABAAAAAPAAAAEAAAAA4AAAARAAAADQAAABAAAAARAAAAEAAAAA0AAAAKAAAAAAAAAA8AAAAQAAAAAAAAABAAAAAKAAAACQAAAA8AAAAAAAAAAAAAAAoAAAADAAAADwAAAAkAAAAMAAAADAAAAAMAAAAKAAAACAAAAAwAAAAJAAAADAAAAAgAAAADAAAA",gidx:"DQAAAA4AAAALAAAADgAAAA0AAAARAAAA",v:18,bb:[-.5,0,-.5,.5,.625,.5]},"corner-window-middle":{pos:"cyaqQuIO6R4AAFcHcyYAAOIO6R6qQlcHVTWqQqvKVTWqQgAAq8qqQqvKVweqQukeAACqQlU1q8qqQlU14g6qQnMmVTUAAKvKVTUAAAAAAAAAAFU1VwcAAOke4g4AAHMmq8oAAKvKq8oAAFU1",nrm:"pgBapgBapgBapgBaAH8AAH8AAH8AAH8AAH8AAH8AAH8AfwAAfwAAAIEAAIEAAIEAAIEAAIEA",col:"/ePE9c2d9c2d/ePE/ePE/ePE/ePE/ePE/ePE/ePE/ePE9c2d9c2d9c2d9c2d9c2d9c2d9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAAAAAAFAAAAAAAAAAQAAAADAAAAAwAAAAQAAAAGAAAAAwAAAAYAAAAHAAAABwAAAAYAAAAIAAAACAAAAAYAAAAJAAAACAAAAAoAAAAHAAAABQAAAAsAAAAEAAAACwAAAAUAAAAMAAAADQAAAA4AAAAPAAAAEAAAAA4AAAANAAAAEAAAAA0AAAARAAAAEAAAAAEAAAAOAAAACwAAAAEAAAAQAAAACwAAAAIAAAABAAAAAgAAAAsAAAAMAAAACgAAAA0AAAAPAAAADQAAAAoAAAAIAAAABgAAAAsAAAAQAAAACwAAAAYAAAAEAAAAAAAAAAwAAAAFAAAADAAAAAAAAAACAAAADQAAAAkAAAARAAAACQAAAA0AAAAIAAAAEQAAAAYAAAAQAAAABgAAABEAAAAJAAAABwAAAA8AAAAOAAAADwAAAAcAAAAKAAAA",gidx:"BwAAAAEAAAADAAAAAQAAAAcAAAAOAAAA",v:18,bb:[-.5,0,-.5,.5,.625,.5]},"corner-window-narrow":{pos:"GCRVNT0RjRwAALIJGCQAAD0RjRxVNbIJVTWqQgAAVTUAAKvKVTWqQqvKVTUAAAAAAAAAAFU1sgkAAI0cPREAABgkq8oAAKvKq8oAAFU1AACqQlU1PRFVNRgkq8qqQlU1sglVNY0cq8qqQqvK",nrm:"pgBapgBapgBapgBafwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAWgBaWgBaAAB/WgCmAH8A",col:"+ty49c2d9c2d+ty4/ePE9c2d/ePE9c2d9c2d9c2d9c2d9c2d9c2d/ePE+ty4/ePE+ty4/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAkAAAAKAAAACwAAAAkAAAAIAAAACwAAAAgAAAAMAAAACwAAAAEAAAAJAAAABQAAAAEAAAALAAAABQAAAAIAAAABAAAAAgAAAAUAAAAHAAAACgAAAA0AAAAIAAAADgAAAA0AAAAKAAAAAAAAAA0AAAAOAAAAAAAAAAQAAAANAAAABAAAAAAAAAAHAAAAAgAAAAcAAAAAAAAACAAAAA8AAAAMAAAADwAAAAgAAAANAAAAEAAAAAoAAAAJAAAACgAAABAAAAAOAAAADgAAAAMAAAAAAAAAAwAAAA4AAAAQAAAABgAAAA0AAAAEAAAADQAAAAYAAAARAAAADQAAABEAAAAPAAAADAAAABEAAAALAAAAEQAAAAwAAAAPAAAAEQAAAAUAAAALAAAABQAAABEAAAAGAAAA",gidx:"EAAAAAEAAAADAAAAAQAAABAAAAAJAAAA",v:18,bb:[-.5,0,-.5,.5,.625,.5]},"corner-window-sill":{pos:"VTWqQqvKAACqQlU1VTWqQgAAq8qqQqvKq8qqQlU1AAAAAFU1q8oAAFU1VweZNeke4g4RDXMmVwcRDeke4g6ZNXMm6R5mBlcH6R4RDVcHVwdmBuke4g5mBnMmcyZmBuIObBZmBnMmcyZmBmwWcyYRDeIObBYRDXMmcyYRDWwWVTUAAKvKVTUAAAAAq8oAAKvKcyaZNeIO6R6ZNVcH",nrm:"AH8AAH8AAH8AAH8AAH8AAAB/AAB/WgCmWgCmWgCmWgCmWgBaWgBaWgBaAH8AAH8AAH8AAH8AAH8AAH8AAH8AAIEAAIEAAIEAWgBapgBa",col:"/ePE/ePE/ePE/ePE/ePE9c2d9c2d+ty49s+i9s+i+ty49s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9c2d9c2d9c2d+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAQAAAAMAAAAEAAAABQAAAAQAAAAGAAAABAAAAAUAAAABAAAABwAAAAgAAAAJAAAACAAAAAcAAAAKAAAACwAAAAwAAAANAAAACQAAAA0AAAAMAAAADQAAAA4AAAALAAAADwAAAAsAAAAOAAAADgAAABAAAAAPAAAAEQAAAA8AAAAQAAAAEgAAABMAAAAUAAAAEwAAABIAAAAMAAAAEwAAAAwAAAAJAAAAEwAAAAkAAAAIAAAAFAAAABMAAAASAAAADAAAABIAAAATAAAACQAAAAwAAAATAAAACAAAAAkAAAATAAAABQAAABUAAAAWAAAAFQAAAAUAAAAXAAAAFwAAAAUAAAAGAAAABgAAAAMAAAAXAAAAAwAAAAYAAAAEAAAAAwAAABUAAAAXAAAAFQAAAAMAAAAAAAAADwAAABgAAAASAAAADwAAABYAAAAYAAAAAgAAABgAAAAWAAAAFgAAAA8AAAAFAAAABQAAAA8AAAAOAAAAGAAAAAIAAAABAAAABQAAAA4AAAABAAAAGAAAAAEAAAAKAAAACAAAAAEAAAAOAAAACgAAAAEAAAAIAAAACwAAAA8AAAAMAAAAEgAAAAwAAAAPAAAAEwAAABEAAAAUAAAAEQAAABMAAAAQAAAAFAAAABEAAAATAAAAEAAAABMAAAARAAAAAgAAABUAAAAAAAAAFQAAAAIAAAAWAAAAGAAAAAwAAAASAAAADAAAABgAAAAZAAAAEAAAAA8AAAARAAAADwAAABAAAAAOAAAADgAAAA0AAAAIAAAACQAAAAgAAAANAAAACgAAABkAAAAYAAAAGQAAAAoAAAAHAAAAFAAAAA8AAAASAAAADwAAABQAAAARAAAAEgAAAA8AAAAUAAAAEQAAABQAAAAPAAAAEwAAAA4AAAAQAAAADgAAABMAAAAIAAAAEAAAAA4AAAATAAAACAAAABMAAAAOAAAADQAAAAwAAAALAAAADAAAAA0AAAAJAAAADgAAAAsAAAAPAAAACwAAAA4AAAANAAAADAAAAA8AAAALAAAADwAAAAwAAAASAAAACAAAAA0AAAAOAAAADQAAAAgAAAAJAAAA",gidx:"BwAAAAwAAAAZAAAADAAAAAcAAAAJAAAA",v:26,bb:[-.5,0,-.5,.5,.625,.5]},"corner-window-top-round":{pos:"dRvaLMoK6R4AAFcH6R4RIVcHVwcAAOkeIBO7MSATygraLHUbVwcRIekeAAAAAFU14g4AAHMmq8oAAKvKq8oAAFU1VTUAAKvKcyYAAOIOVTUAAAAAq8qqQqvKq8qqQlU1AACqQlU14g4RIXMmVTWqQqvKcyYRIeIOVTWqQgAAqhq7MaoaACPaLFUSVRLaLAAj",nrm:"WgBaWgBaWgBaWgBaWgBaWgBaWgBaAIEAAIEAAIEAAIEAAIEAAIEAAIEAgQAAgQAAAAB/WgCmAACBpgBafwAAAIEAwaZAQKbB",col:"q8vycZzdn8HucZzdq8vyq8vyn8Hu9c2d9c2d9c2d9c2d9c2d9c2d9c2d/ePE/ePE/ePE+NWs/ePE+NWs/ePE+ty4+dq1+dq1",idx:"BwAAAAMAAAAIAAAACQAAAAMAAAAHAAAACQAAAAcAAAAKAAAACQAAAAEAAAADAAAACwAAAAEAAAAJAAAACwAAAAwAAAABAAAADAAAAAsAAAANAAAACgAAAA4AAAAJAAAADgAAAAoAAAAPAAAABwAAAA8AAAAKAAAADwAAAAcAAAAQAAAAAwAAABEAAAAIAAAAEQAAAAMAAAAGAAAADgAAAAsAAAAJAAAACwAAAA4AAAASAAAAEwAAAAEAAAAMAAAAAQAAABMAAAACAAAAFAAAAAsAAAASAAAACwAAABQAAAANAAAAEgAAABAAAAAUAAAAEAAAABIAAAAOAAAAEAAAAA4AAAAPAAAAFQAAAAAAAAAWAAAAAAAAABUAAAAEAAAAFwAAAAQAAAAVAAAABAAAABcAAAAFAAAABQAAABEAAAAGAAAAEQAAAAUAAAAXAAAACAAAABAAAAAHAAAAEQAAABAAAAAIAAAAFwAAABAAAAARAAAAFQAAABAAAAAXAAAAFgAAABAAAAAVAAAAFgAAABQAAAAQAAAAFAAAABYAAAANAAAADQAAABYAAAATAAAADAAAAA0AAAATAAAAFgAAAAIAAAATAAAAAgAAABYAAAAAAAAA",gidx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAwAAAAAAAAAEAAAAAwAAAAQAAAAFAAAAAwAAAAUAAAAGAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.5]},"corner-window-top-square":{pos:"AAAAAFU1q8qqQlU1q8oAAFU1AACqQlU1cyaZNeIO6R4AAFcHcyYAAOIO6R6ZNVcHVwcAAOke4g4AAHMmq8oAAKvKVTUAAKvKVTUAAAAAVTWqQqvKVTWqQgAAq8qqQqvKVweZNeke4g6ZNXMm",nrm:"AAB/AAB/AAB/AAB/pgBapgBapgBapgBaAIEAAIEAAIEAAIEAAIEAAH8AAH8AAH8AWgCmWgCm",col:"9c2d/ePE9c2d/ePE+ty49c2d9c2d+ty49c2d9c2d9c2d9c2d9c2d/ePE/ePE/ePE+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAAAAAAgAAAAJAAAACgAAAAgAAAAAAAAACgAAAAAAAAACAAAACgAAAAUAAAAIAAAACwAAAAUAAAAKAAAACwAAAAYAAAAFAAAABgAAAAsAAAAMAAAADQAAAAMAAAAOAAAAAwAAAA0AAAAPAAAAAwAAAA8AAAABAAAAEAAAAAkAAAAIAAAACQAAABAAAAARAAAAEQAAAAcAAAAEAAAABwAAABEAAAAQAAAAAgAAAA8AAAAKAAAADwAAAAIAAAABAAAADwAAAAsAAAAKAAAACwAAAA8AAAANAAAAEQAAAAAAAAAJAAAAAAAAABEAAAADAAAABAAAAAMAAAARAAAABAAAAA4AAAADAAAADgAAAAQAAAAMAAAABgAAAAwAAAAEAAAADgAAAAsAAAANAAAACwAAAA4AAAAMAAAA",gidx:"EAAAAAUAAAAHAAAABQAAABAAAAAIAAAA",v:18,bb:[-.5,0,-.5,.5,.625,.5]},window:{pos:"VTWqQlU1VTUAAKvKVTWqQqvKVTUAAFU1Ve9VNVU1qxBVNaoqqxBVNVU1Ve9VNaoqq8oAAFU1q8oAAKvKqxDNDKoqVe/NDFU1qxDNDFU1Ve/NDKoqq8qqQqvKq8qqQlU1",nrm:"fwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAH8AAH8AAH8AAH8AgQAAgQAA",col:"/ePE9c2d/ePE9c2d+ty4+ty4+ty4+ty49c2d9c2d9s+i9s+i9s+i9s+i/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAEAAAADAAAAAQAAAAgAAAAJAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAABAAAAA0AAAAHAAAADQAAAAQAAAALAAAACAAAAA4AAAAJAAAADgAAAAgAAAAPAAAAAgAAAA8AAAAAAAAADwAAAAIAAAAOAAAADgAAAAEAAAAJAAAAAQAAAA4AAAACAAAADAAAAAUAAAAKAAAABQAAAAwAAAAGAAAADAAAAAAAAAAGAAAABgAAAAAAAAAEAAAADAAAAAMAAAAAAAAADwAAAAQAAAAAAAAAAwAAAAwAAAAIAAAADwAAAAsAAAAEAAAACAAAAAsAAAAPAAAACwAAAAgAAAAMAAAA",gidx:"BQAAAA0AAAAKAAAADQAAAAUAAAAHAAAA",v:16,bb:[-.5,0,-.5,.5,.625,.5]},"window-wide":{pos:"ANhVNVU1ANjNDKoqANhVNaoqANjNDFU1q8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKACjNDFU1AChVNaoqACjNDKoqAChVNVU1q8oAAFU1VTUAAFU1q8qqQlU1VTWqQlU1",nrm:"fwAAfwAAfwAAfwAAAACBAACBAACBAACBgQAAgQAAgQAAgQAAAIEAAIEAgQAAfwAA",col:"+ty49s+i+ty49s+i/ePE9c2d9c2d/ePE9s+i+ty49s+i+ty49c2d9c2d/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAACgAAAAMAAAAIAAAAAwAAAAoAAAABAAAADAAAAAUAAAANAAAABQAAAAwAAAAGAAAADAAAAAQAAAAGAAAABAAAAAwAAAAOAAAADwAAAAUAAAAHAAAABQAAAA8AAAANAAAAAAAAAAkAAAALAAAACQAAAAAAAAACAAAABwAAAA4AAAAPAAAADgAAAAcAAAAEAAAACAAAAA8AAAALAAAACwAAAA8AAAAAAAAACAAAAA0AAAAPAAAADgAAAAAAAAAPAAAADQAAAAgAAAAMAAAADgAAAAMAAAAAAAAADAAAAAMAAAAOAAAAAwAAAAwAAAAIAAAA",gidx:"CQAAAAEAAAAKAAAAAQAAAAkAAAACAAAA",v:16,bb:[-.5,0,-.5,.5,.625,.5]},"window-sill":{pos:"q8oAAFU1VTUAAKvKVTUAAFU1q8oAAKvKVTWqQqvKq8qqQlU1VTWqQlU1q8qqQqvKVQtmBqo6Ve9mBlU1qxBmBlU1q/RmBqo6qxDNDFU1qxBVNaoqqxDNDKoqqxBVNVU1Ve9VNVU1Ve9VNaoqVQvNDKo6Ve/NDKoqq/TNDKo6Ve/NDFU1",nrm:"AIEAAIEAAIEAAIEAAH8AAH8AAH8AAH8AAIEAAIEAAIEAAIEAgQAAgQAAgQAAgQAAAIEAAIEAAH8AAH8AAH8AAH8A",col:"9c2d9c2d9c2d9c2d/ePE/ePE/ePE/ePE9s+i9s+i9s+i9s+i9s+i+ty49s+i+ty4+ty4+ty49s+i9s+i9s+i9s+i",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAAAAAAcAAAADAAAABwAAAAAAAAAFAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAABwAAAAEAAAADAAAAAQAAAAcAAAAEAAAAEAAAAA0AAAAPAAAADQAAABAAAAARAAAADgAAABIAAAAMAAAAEgAAAA4AAAATAAAAEgAAABMAAAAUAAAAFAAAABMAAAAVAAAAEAAAABMAAAARAAAAEwAAABAAAAAVAAAACAAAABQAAAALAAAAFAAAAAgAAAASAAAABgAAAAEAAAAEAAAAAQAAAAYAAAACAAAAFAAAAAkAAAALAAAACQAAABQAAAAVAAAAEgAAAAoAAAAMAAAACgAAABIAAAAIAAAABQAAAAkAAAAVAAAABQAAABUAAAAQAAAAAAAAAAkAAAAFAAAABQAAABAAAAAGAAAACQAAAAAAAAAKAAAAAgAAAAoAAAAAAAAACgAAAAIAAAAGAAAADwAAAAYAAAAQAAAACgAAAAYAAAAMAAAADAAAAAYAAAAPAAAA",gidx:"DQAAABMAAAAOAAAAEwAAAA0AAAARAAAA",v:22,bb:[-.5,0,-.5,.5,.625,.55]},"window-wide-sill":{pos:"qiJmBgA4ANhmBqoyAChmBqoyVt1mBgA4Vt3NDAA4qiLNDAA4VTWqQqoyVTUAAADIVTWqQgDIVTUAAKoyq8oAAKoyq8oAAADIANhVNaoyAChVNQAoAChVNaoyANhVNQAoACjNDAAoACjNDKoyANjNDAAoANjNDKoyq8qqQgDIq8qqQqoy",nrm:"AIEAAIEAAIEAAIEAzwB1MQB1fwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAH8AAH8AAH8AAH8AgQAAgQAA",col:"9s+i9s+i9s+i9s+i9s+i9s+i/ePE9c2d/ePE9c2d9c2d9c2d+ty4+ty4+ty4+ty49s+i9s+i9s+i9s+i/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAAAAAAQAAAADAAAABAAAAAAAAAAFAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAcAAAAJAAAABwAAAAoAAAALAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAAEAAAAAUAAAARAAAABQAAABAAAAASAAAABQAAABIAAAAEAAAABAAAABIAAAATAAAADAAAABIAAAAPAAAAEgAAAAwAAAATAAAACgAAABQAAAALAAAAFAAAAAoAAAAVAAAAFAAAAAcAAAALAAAABwAAABQAAAAIAAAAEQAAAA0AAAAQAAAADQAAABEAAAAOAAAACAAAABUAAAAGAAAAFQAAAAgAAAAUAAAABQAAAAIAAAARAAAAAgAAAAUAAAAAAAAAAwAAABMAAAABAAAAEwAAAAMAAAAEAAAAFQAAAAEAAAATAAAAFQAAABMAAAAMAAAACgAAAAEAAAAVAAAAFQAAAAwAAAAGAAAAAQAAAAoAAAACAAAACQAAAAIAAAAKAAAAAgAAAAkAAAAGAAAADgAAAAYAAAAMAAAAAgAAAAYAAAARAAAAEQAAAAYAAAAOAAAA",gidx:"DQAAABIAAAAQAAAAEgAAAA0AAAAPAAAA",v:22,bb:[-.5,0,-.525,.5,.625,.525]},"window-left":{pos:"ANhVNVU1VflVNaoqVflVNVU1ANhVNaoqVTWqQlU1VTUAAKvKVTWqQqvKVTUAAFU1q8qqQlU1q8qqQqvKVfnNDKoqANjNDFU1VfnNDFU1ANjNDKoqq8oAAKvKq8oAAFU1",nrm:"AIEAAIEAAIEAAIEAfwAAfwAAfwAAfwAAAH8AAH8AAH8AAH8AAH8AAH8AAACBAIEA",col:"+ty4+ty4+ty4+ty4/ePE9c2d/ePE9c2d/ePE/ePE9s+i9s+i9s+i9s+i9c2d9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAABgAAAAgAAAAEAAAACAAAAAYAAAAJAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAACQAAAAUAAAAOAAAABQAAAAkAAAAGAAAADAAAAAEAAAAKAAAAAQAAAAwAAAACAAAADwAAAAUAAAAHAAAABQAAAA8AAAAOAAAADwAAAAkAAAAOAAAACQAAAA8AAAAIAAAAAAAAAA0AAAADAAAADQAAAAAAAAALAAAADAAAAAQAAAACAAAAAgAAAAQAAAAAAAAADAAAAAcAAAAEAAAACAAAAAAAAAAEAAAABwAAAAwAAAAPAAAACAAAAAsAAAAAAAAADwAAAAsAAAAIAAAACwAAAA8AAAAMAAAA",gidx:"AQAAAA0AAAAKAAAADQAAAAEAAAADAAAA",v:16,bb:[-.5,0,-.5,.5,.625,.5]},"window-right":{pos:"qwZVNVU1AChVNaoqAChVNVU1qwZVNaoqq8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKqwbNDKoqqwbNDFU1q8oAAFU1q8qqQlU1VTWqQlU1VTUAAFU1ACjNDKoqACjNDFU1",nrm:"AIEAAIEAAIEAAIEAAACBAACBAACBAACBfwAAfwAAgQAAgQAAfwAAfwAAAH8AAH8A",col:"+ty4+ty4+ty4+ty4/ePE9c2d9c2d/ePE9s+i9s+i9c2d/ePE/ePE9c2d9s+i9s+i",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAAAAAAgAAAADAAAACAAAAAAAAAAJAAAACgAAAAQAAAAGAAAABAAAAAoAAAALAAAADAAAAAUAAAAHAAAABQAAAAwAAAANAAAACgAAAAUAAAANAAAABQAAAAoAAAAGAAAADgAAAAkAAAAPAAAACQAAAA4AAAAIAAAABwAAAAsAAAAMAAAACwAAAAcAAAAEAAAADwAAAAEAAAAOAAAAAQAAAA8AAAACAAAADwAAAAwAAAACAAAAAgAAAAwAAAAAAAAADwAAAA0AAAAMAAAACwAAAAAAAAAMAAAADQAAAA8AAAAKAAAACwAAAAkAAAAAAAAACgAAAAkAAAALAAAACQAAAAoAAAAPAAAA",gidx:"AQAAAAgAAAAOAAAACAAAAAEAAAADAAAA",v:16,bb:[-.5,0,-.5,.5,.625,.5]},"window-left-sill":{pos:"VflVNaoqANjNDKoqVfnNDKoqANhVNaoqq8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKq8oAAFU1VTUAAFU1ANhVNVU1VflVNVU1APRmBqo6ANhmBlU1VflmBlU1Vt1mBqo6VTWqQlU1Vt3NDKo6APTNDKo6q8qqQlU1VfnNDFU1ANjNDFU1",nrm:"AAB/AAB/AAB/AAB/AACBAACBAACBAACBAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAfwAAzwB1MQB1AH8AAH8AAH8A",col:"t9T2ganjganjt9T2/ePE9c2d9c2d/ePE9c2d9c2d+ty4+ty49s+i9s+i9s+i9s+i/ePE9s+i9s+i/ePE9s+i9s+i",idx:"BAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAUAAAAJAAAABQAAAAgAAAAGAAAACgAAAAAAAAALAAAAAAAAAAoAAAADAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAAEAAAAAUAAAAHAAAABQAAABAAAAAJAAAADAAAABEAAAAPAAAAEQAAAAwAAAASAAAABwAAABMAAAAQAAAAEwAAAAcAAAAEAAAAAgAAABIAAAAUAAAAEgAAAAIAAAABAAAAEgAAAAEAAAARAAAAEQAAAAEAAAAVAAAAFAAAAAAAAAACAAAAAAAAABQAAAALAAAACgAAAAEAAAADAAAAAQAAAAoAAAAVAAAACAAAAAQAAAAGAAAABAAAAAgAAAATAAAAEgAAAA4AAAAUAAAADgAAABIAAAAMAAAADwAAABUAAAANAAAAFQAAAA8AAAARAAAAFAAAABAAAAALAAAACwAAABAAAAAKAAAADgAAABAAAAAUAAAADgAAAAkAAAAQAAAACQAAAA4AAAAIAAAADQAAAAgAAAAOAAAAEwAAAAoAAAAQAAAACAAAAA0AAAATAAAAEwAAABUAAAAKAAAAEwAAAA0AAAAVAAAA",gidx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAA",v:22,bb:[-.5,0,-.5,.5,.625,.55]},"window-right-sill":{pos:"qwZVNVU1AChVNaoqAChVNVU1qwZVNaoqqwZmBqoqqwZmBlU1AChmBqoqAChmBlU1qiJmBqo6AAxmBqo6q8oAAFU1VTUAAKvKVTUAAFU1q8oAAKvKq8qqQqvKVTWqQqvKqwbNDKoqqwbNDFU1ACjNDKoqqiLNDKo6ACjNDFU1AAzNDKo6VTWqQlU1q8qqQlU1",nrm:"AIEAAIEAAIEAAIEAAH8AAH8AAH8AAH8AAH8AAH8AAIEAAIEAAIEAAIEAAACBAACBfwAAfwAAAH8AAH8AAH8AAH8AfwAAAH8A",col:"+ty4+ty4+ty4+ty49s+i9s+i9s+i9s+i9s+i9s+i9c2d9c2d9c2d9c2d/ePE/ePE9s+i9s+i9s+i9s+i9s+i9s+i/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABwAAAAYAAAAFAAAABwAAAAUAAAAIAAAACQAAAAgAAAAFAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAADgAAAAsAAAANAAAACwAAAA4AAAAPAAAAAAAAABAAAAADAAAAEAAAAAAAAAARAAAAEgAAABMAAAAUAAAAEwAAABIAAAAQAAAAEwAAABAAAAAVAAAAFQAAABAAAAARAAAAFAAAABMAAAASAAAAEAAAABIAAAATAAAAFQAAABAAAAATAAAAEQAAABAAAAAVAAAABAAAABAAAAAFAAAAEQAAAAUAAAAQAAAAEgAAAAYAAAAUAAAABwAAABQAAAAGAAAACAAAABUAAAAJAAAAFQAAAAgAAAATAAAACQAAABUAAAAIAAAAEwAAAAgAAAAVAAAAFgAAAAsAAAAPAAAACwAAABYAAAAMAAAAFAAAAAEAAAASAAAAAQAAABQAAAACAAAABAAAAAYAAAAQAAAAEgAAABAAAAAGAAAADwAAABcAAAAWAAAAFwAAAA8AAAAOAAAACgAAAA4AAAANAAAADgAAAAoAAAAXAAAACAAAAAUAAAAHAAAABQAAAAgAAAAJAAAAEwAAAAcAAAAUAAAABwAAABMAAAAIAAAAFAAAAAcAAAATAAAACAAAABMAAAAHAAAAFQAAAAUAAAAJAAAABQAAABUAAAARAAAACQAAAAUAAAAVAAAAEQAAABUAAAAFAAAAFwAAAAUAAAARAAAAFwAAABEAAAAAAAAACgAAAAUAAAAXAAAAFwAAAAAAAAAWAAAABQAAAAoAAAAHAAAADAAAAAcAAAAKAAAABwAAAAwAAAAWAAAAAgAAABYAAAAAAAAABwAAABYAAAAUAAAAFAAAABYAAAACAAAABQAAAAYAAAAHAAAABgAAAAUAAAAEAAAABQAAABAAAAAEAAAAEAAAAAUAAAARAAAAFAAAAAYAAAASAAAABgAAABQAAAAHAAAAEAAAAAYAAAAEAAAABgAAABAAAAASAAAA",gidx:"AQAAABAAAAASAAAAEAAAAAEAAAADAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.55]},windows:{pos:"VTWqQqvKq8qqQlU1VTWqQlU1q8qqQqvKq8oAAFU1q8oAAKvKVTUAAKvKVTUAAFU1ACjNDKoqqwbNDFU1ACjNDFU1qwbNDKoqVfnNDKoqANjNDFU1VfnNDFU1ANjNDKoqAChVNaoqAChVNVU1qwZVNVU1qwZVNaoqANhVNVU1ANhVNaoqVflVNaoqVflVNVU1",nrm:"AH8AAH8AAH8AAH8AgQAAgQAAfwAAfwAAAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AgQAAgQAAfwAAfwAAfwAAfwAAgQAAgQAA",col:"/ePE/ePE/ePE/ePE9c2d9c2d9c2d9c2d9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i+ty4+ty4+ty4+ty4+ty4+ty4+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAMAAAAFAAAAAwAAAAQAAAABAAAAAgAAAAYAAAAAAAAABgAAAAIAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAABAAAAAYAAAAHAAAABgAAAAQAAAAFAAAACgAAABAAAAAIAAAAEAAAAAoAAAARAAAAEgAAAAsAAAATAAAACwAAABIAAAAJAAAAEgAAABAAAAARAAAAEAAAABIAAAATAAAAAwAAAAYAAAAFAAAABgAAAAMAAAAAAAAAFAAAAA8AAAAVAAAADwAAABQAAAANAAAADgAAABYAAAAMAAAAFgAAAA4AAAAXAAAAFAAAABYAAAAXAAAAFgAAABQAAAAVAAAACgAAAAIAAAARAAAAEQAAAAIAAAASAAAACgAAAAcAAAACAAAABwAAAAoAAAAEAAAACQAAAAQAAAAKAAAADQAAAAQAAAAJAAAABAAAAA0AAAABAAAADQAAAAkAAAAOAAAAEgAAAA4AAAAJAAAAAQAAAA0AAAAUAAAAAQAAABQAAAACAAAADgAAABIAAAAXAAAAEgAAAAIAAAAXAAAAFwAAAAIAAAAUAAAA",gidx:"EAAAAAsAAAAIAAAACwAAABAAAAATAAAAFgAAAA8AAAAMAAAADwAAABYAAAAVAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.5]},"windows-sills":{pos:"AChVNaoqqwbNDKoqACjNDKoqqwZVNaoqVflVNaoqANjNDKoqVfnNDKoqANhVNaoqVfnNDFU1VflVNVU1qwZVNVU1qwbNDFU1ANhVNVU1ANjNDFU1q8oAAFU1VTUAAKvKVTUAAFU1q8oAAKvKAChVNVU1VTWqQlU1VTWqQqvKqiJmBqo6qwZmBlU1AChmBlU1AAxmBqo6APRmBqo6ANhmBlU1VflmBlU1Vt1mBqo6qiLNDKo6AAzNDKo6q8qqQlU1q8qqQqvKAPTNDKo6Vt3NDKo6ACjNDFU1",nrm:"AAB/AAB/AAB/AAB/AAB/AAB/AAB/AAB/gQAAgQAAfwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAMQB1zwB1AH8AAH8AMQB1zwB1gQAA",col:"t9T2ganjganjt9T2t9T2ganjganjt9T29s+i+ty4+ty49s+i+ty49s+i9c2d9c2d9c2d9c2d+ty4/ePE/ePE9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i/ePE/ePE9s+i9s+i9s+i",idx:"CAAAAAQAAAAGAAAABAAAAAgAAAAJAAAACgAAAAEAAAADAAAAAQAAAAoAAAALAAAADAAAAAUAAAAHAAAABQAAAAwAAAANAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAACgAAAAAAAAASAAAAAAAAAAoAAAADAAAAEwAAAA8AAAAUAAAADwAAABMAAAAQAAAAFQAAABYAAAAXAAAAFgAAABUAAAAYAAAAGQAAABoAAAAbAAAAGgAAABkAAAAcAAAAHQAAABgAAAAVAAAAGAAAAB0AAAAeAAAAFAAAAB8AAAATAAAAHwAAABQAAAAgAAAAIQAAABwAAAAZAAAAHAAAACEAAAAiAAAAIwAAAAAAAAACAAAAAAAAACMAAAASAAAAIAAAAA8AAAARAAAADwAAACAAAAAUAAAADgAAACAAAAARAAAAIAAAAA4AAAAfAAAADAAAAAQAAAAJAAAABAAAAAwAAAAHAAAABgAAACEAAAAIAAAAIQAAAAYAAAAFAAAAIQAAAAUAAAAiAAAAIgAAAAUAAAANAAAAHQAAABcAAAAjAAAAFwAAAB0AAAAVAAAAHgAAABYAAAAYAAAAFgAAAB4AAAALAAAAIQAAABsAAAAIAAAAGwAAACEAAAAZAAAAAgAAAB0AAAAjAAAAHQAAAAIAAAABAAAAHQAAAAEAAAAeAAAAHgAAAAEAAAALAAAAIgAAABoAAAAcAAAAGgAAACIAAAANAAAAHwAAABoAAAANAAAAHwAAAA0AAAAMAAAAHwAAAAwAAAATAAAADgAAABoAAAAfAAAACQAAABMAAAAMAAAAGgAAAA4AAAAXAAAAEAAAABcAAAAOAAAAFwAAABAAAAATAAAAGgAAABcAAAAWAAAAGgAAABYAAAAbAAAACwAAABsAAAAWAAAAGwAAAAsAAAAIAAAAFwAAABMAAAAjAAAAIwAAABMAAAASAAAACAAAAAsAAAAKAAAACAAAAAoAAAAJAAAAEgAAABMAAAAKAAAACgAAABMAAAAJAAAA",gidx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAA",v:36,bb:[-.5,0,-.5,.5,.625,.55]},"windows-round":{pos:"VTWqQlU1VTUAAKvKVTWqQqvKVTUAAFU1q8qqQqvKq8oAAKvKANgRIVU1ANjNDKoqANgRIaoqANjNDFU1qwYRIVU1qwbNDKoqqwYRIaoqqwbNDFU1VfnNDKoqVfnNDFU1q8oAAFU1ACjNDKoqACjNDFU1VfkRIaoqVfkRIVU1ACgRIaoqACgRIVU1HiPaLKoqHiPaLFU1VRe7MVU1VRe7MaoqdPTaLKoqdPTaLFU1q8qqQlU14tzaLFU1q+i7Maoqq+i7MVU14tzaLKoqjAvaLFU1jAvaLKoq",nrm:"fwAAfwAAfwAAfwAAAACBAACBfwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAAH8AAH8AAIEAAH8AAH8AgQAAgQAAgQAAgQAApqYApqYAAIEAAIEApqYApqYAAH8AWqYAAIEAAIEAWqYAWqYAWqYA",col:"/ePE9c2d/ePE9c2d/ePE9c2d+NWs9s+i+NWs9s+i+NWs9s+i+NWs9s+i9s+i9s+i9c2d9s+i9s+i+NWs+NWs+NWs+NWs+dq1+dq1+ty4+ty4+dq1+dq1/ePE+dq1+ty4+ty4+dq1+dq1+dq1",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAEAAAAFAAAAAQAAAAQAAAACAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAADgAAAAkAAAAPAAAACQAAAA4AAAAHAAAAEAAAAAEAAAADAAAAAQAAABAAAAAFAAAAEQAAAA0AAAASAAAADQAAABEAAAALAAAADwAAABMAAAAOAAAAEwAAAA8AAAAUAAAAEgAAABUAAAARAAAAFQAAABIAAAAWAAAAFgAAABcAAAAVAAAAFwAAABYAAAAYAAAAGQAAABcAAAAYAAAAFwAAABkAAAAaAAAAFAAAABsAAAATAAAAGwAAABQAAAAcAAAAAgAAAB0AAAAAAAAAHQAAAAIAAAAEAAAAEAAAAAQAAAAFAAAABAAAABAAAAAdAAAAHgAAAB8AAAAgAAAAHwAAAB4AAAAhAAAAIgAAAAwAAAAjAAAADAAAACIAAAAKAAAAIAAAABsAAAAcAAAAGwAAACAAAAAfAAAAIgAAABoAAAAZAAAAGgAAACIAAAAjAAAAHgAAAAgAAAAhAAAACAAAAB4AAAAGAAAAHQAAAAkAAAAGAAAAHQAAAAYAAAAeAAAAHQAAAB4AAAAgAAAAHQAAACAAAAAZAAAAHAAAABkAAAAgAAAAHAAAACIAAAAZAAAAHAAAAAoAAAAiAAAAFAAAAAoAAAAcAAAADwAAAAoAAAAUAAAACgAAAA8AAAANAAAACQAAAA0AAAAPAAAAEAAAAAkAAAAdAAAACQAAABAAAAANAAAAHQAAABkAAAAAAAAADQAAABAAAAASAAAAAwAAABIAAAAQAAAAEgAAAAMAAAAAAAAAGAAAAAAAAAAZAAAAEgAAAAAAAAAWAAAAFgAAAAAAAAAYAAAA",gidx:"FQAAAAsAAAARAAAACwAAABUAAAAMAAAADAAAABUAAAAXAAAADAAAABcAAAAjAAAAIwAAABcAAAAaAAAAEwAAAAcAAAAOAAAABwAAABMAAAAIAAAACAAAABMAAAAbAAAACAAAABsAAAAhAAAAIQAAABsAAAAfAAAA",v:36,bb:[-.5,0,-.5,.5,.625,.5]},"windows-sills-round":{pos:"jAvaLKoyVRe7MQAoVRe7MaoyjAvaLAAoqwYRIQAoqwYRIaoy4tzaLKoyANgRIQAo4tzaLAAoANgRIaoyq+i7MaoydPTaLAAodPTaLKoyq+i7MQAoACjNDAAoqiLNDAA4ACjNDKoyqwbNDAAoAAzNDAA4qwbNDKoyAPRmBgA4ANhmBqoyVflmBqoyVt1mBgA4AAxmBgA4qiJmBgA4qwZmBqoyAChmBqoyAPTNDAA4Vt3NDAA4ANjNDAAoANjNDKoyVTWqQgDIq8qqQqoyVTWqQqoyq8qqQgDIVfnNDKoyVfkRIQAoVfnNDAAoVfkRIaoyq8oAAKoyq8oAAADIVTUAAADIVTUAAKoyACgRIQAoACgRIaoyHiPaLAAoHiPaLKoy",nrm:"WqYAAIEAAIEAWqYAdc8Adc8AWqYAdc8AWqYAdc8AAIEApqYApqYAAIEAAH8AAH8AAH8AAH8AAH8AAH8AAIEAAIEAAIEAAIEAzwB1MQB1AIEAAIEAMQB1zwB1fwAAfwAAAH8AAH8AAH8AAH8AgQAAgQAAgQAAgQAAgQAAgQAAfwAAfwAAgQAAgQAApqYApqYA",col:"+dq1+ty4+ty4+dq1+NWs+NWs+dq1+NWs+dq1+NWs+ty4+dq1+dq1+ty49s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i/ePE/ePE/ePE/ePE9s+i+NWs9s+i+NWs9c2d9c2d9c2d9c2d+NWs+NWs+dq1+dq1",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAAAAAAQAAAADAAAABAAAAAAAAAAFAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAADwAAABEAAAASAAAAEgAAABEAAAATAAAAFAAAABUAAAAWAAAAFQAAABQAAAAXAAAADwAAABgAAAAZAAAAGAAAAA8AAAASAAAAGQAAABoAAAAbAAAAGgAAABkAAAAYAAAAHAAAABcAAAAUAAAAFwAAABwAAAAdAAAACQAAAB4AAAAHAAAAHgAAAAkAAAAfAAAAIAAAACEAAAAiAAAAIQAAACAAAAAjAAAAJAAAACUAAAAmAAAAJQAAACQAAAAnAAAAKAAAACMAAAApAAAAIwAAACgAAAAhAAAAIgAAACoAAAAgAAAAKgAAACIAAAArAAAABQAAABEAAAAEAAAAEQAAAAUAAAATAAAAIwAAACoAAAApAAAAKgAAACMAAAAgAAAAKAAAACoAAAArAAAAKgAAACgAAAApAAAAEAAAACwAAAAOAAAALAAAABAAAAAtAAAALQAAAC4AAAAsAAAALgAAAC0AAAAvAAAAJwAAAAsAAAAlAAAACwAAACcAAAAMAAAABgAAAA0AAAAKAAAADQAAAAYAAAAIAAAAAgAAAC4AAAAvAAAALgAAAAIAAAABAAAADwAAABsAAAAQAAAAGwAAAA8AAAAZAAAAEgAAABoAAAAYAAAAGgAAABIAAAATAAAAFwAAAB8AAAAVAAAAHwAAABcAAAAdAAAAHAAAABYAAAAkAAAAFgAAABwAAAAUAAAAJgAAABwAAAAkAAAAHAAAACYAAAAeAAAAHAAAAB4AAAAdAAAAHQAAAB4AAAAfAAAAIQAAAAkAAAAGAAAAIQAAAB8AAAAJAAAAIQAAAAYAAAAKAAAAIQAAABUAAAAfAAAAIQAAAAoAAAACAAAADAAAAAIAAAAKAAAAKAAAABUAAAAhAAAAIQAAAAIAAAAiAAAAFQAAACgAAAAWAAAADAAAAAAAAAACAAAALwAAACIAAAACAAAADAAAAAUAAAAAAAAAJwAAAAUAAAAMAAAALQAAACIAAAAvAAAAEAAAACIAAAAtAAAAJAAAAAUAAAAnAAAAJAAAABMAAAAFAAAAJAAAABoAAAATAAAAFgAAABoAAAAkAAAAGwAAACIAAAAQAAAAGgAAABYAAAAbAAAAKAAAABsAAAAWAAAAGwAAACsAAAAiAAAAKwAAABsAAAAoAAAA",gidx:"JQAAAB4AAAAmAAAAHgAAACUAAAAHAAAABwAAACUAAAALAAAABwAAAAsAAAAIAAAACAAAAAsAAAANAAAALAAAABEAAAAOAAAAEQAAACwAAAAEAAAABAAAACwAAAAuAAAABAAAAC4AAAADAAAAAwAAAC4AAAABAAAA",v:48,bb:[-.5,0,-.525,.5,.625,.525]},"windows-high-middle":{pos:"q8qqQlU1ANgAAFU1ANiqQlU1q8oAAFU1q8oAAKvKq8qqQqvKVfmqQlU1qwYAAFU1qwaqQlU1VfkAAFU1VTWqQqvKVTUAAKvKANiqQqoqANgAAKoqVfkAAKoqVfmqQqoqqwaqQqoqACiqQqoqVTWqQlU1ACiqQlU1VTUAAFU1ACgAAFU1qwYAAKoqACgAAKoq",nrm:"AAB/AAB/AAB/AAB/gQAAgQAAAAB/AAB/AAB/AAB/AACBAACBfwAAfwAAgQAAgQAAAH8AAH8AAH8AAH8AAAB/AAB/fwAAgQAA",col:"/ePE9c2d/ePE9c2d9c2d/ePE/ePE9c2d/ePE9c2d/ePE9c2d/ePE9c2d9c2d/ePE/ePE/ePE/ePE/ePE9c2d9c2d9c2d9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAAAAAAQAAAADAAAABAAAAAAAAAAFAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAABAAAAAoAAAALAAAACgAAAAQAAAAFAAAADAAAAAEAAAANAAAAAQAAAAwAAAACAAAABgAAAA4AAAAJAAAADgAAAAYAAAAPAAAACAAAAA8AAAAGAAAADwAAAAgAAAAQAAAADwAAABAAAAAMAAAABQAAAAwAAAAQAAAAAAAAAAwAAAAFAAAADAAAAAAAAAACAAAAEAAAAAoAAAAFAAAAEQAAAAoAAAAQAAAAEQAAABIAAAAKAAAAEgAAABEAAAATAAAAEwAAABQAAAASAAAAFAAAABMAAAAVAAAAEAAAAAcAAAAWAAAABwAAABAAAAAIAAAAEwAAABcAAAAVAAAAFwAAABMAAAARAAAACgAAABQAAAALAAAAFAAAAAoAAAASAAAABAAAAAEAAAADAAAAAQAAAAQAAAANAAAADQAAAAQAAAAOAAAADgAAAAQAAAAWAAAACwAAABYAAAAEAAAABwAAAA4AAAAWAAAADgAAAAcAAAAJAAAACwAAABcAAAAWAAAAFAAAABcAAAALAAAAFwAAABQAAAAVAAAA",gidx:"EAAAABcAAAARAAAAFwAAABAAAAAWAAAADAAAAA4AAAAPAAAADgAAAAwAAAANAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.5]},"windows-high-top-round":{pos:"VTWqQlU1VTUAAKvKVTWqQqvKVTUAAFU1qwYRIVU1qwYAAKoqqwYRIaoqqwYAAFU1VfkAAFU1VfkAAKoqq8oAAKvKANgAAKoqACgAAKoqq8oAAFU1ANgAAFU1ACgAAFU1q8qqQqvKq8qqQlU14tzaLFU1ANgRIaoq4tzaLKoqANgRIVU1VfkRIVU1dPTaLKoqVfkRIaoqdPTaLFU1ACgRIaoqACgRIVU1jAvaLFU1VRe7MaoqVRe7MVU1jAvaLKoqq+i7MVU1HiPaLFU1HiPaLKoqq+i7Maoq",nrm:"fwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAgQAAgQAAWqYAdc8AWqYAdc8Ai88ApqYAi88ApqYAgQAAgQAAWqYAAIEAAIEAWqYAAAB/AAB/pqYAAIEA",col:"/ePE9c2d/ePE9c2d+NWs9c2d+NWs9c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d/ePE/ePE+dq1+NWs+dq1+NWs+NWs+dq1+NWs+dq1+NWs+NWs+dq1+ty4+ty4+dq1+ty4+dq1+dq1+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAUAAAAHAAAACQAAAAUAAAAIAAAACgAAAAUAAAAJAAAACgAAAAkAAAALAAAACgAAAAwAAAAFAAAACgAAAAsAAAANAAAADQAAAAsAAAAOAAAAAQAAAAwAAAAKAAAAAQAAAA8AAAAMAAAADwAAAAEAAAADAAAADQAAABAAAAAKAAAAEAAAAA0AAAARAAAAEAAAAAEAAAAKAAAAAQAAABAAAAACAAAAEgAAABMAAAAUAAAAEwAAABIAAAAVAAAAFgAAABcAAAAYAAAAFwAAABYAAAAZAAAAAgAAABEAAAAAAAAAEQAAAAIAAAAQAAAADwAAABoAAAAMAAAAGgAAAA8AAAAbAAAAHAAAAB0AAAAeAAAAHQAAABwAAAAfAAAAFQAAAAsAAAATAAAACwAAABUAAAAOAAAABwAAABYAAAAIAAAAFgAAAAcAAAAEAAAAFgAAAAQAAAAZAAAAGQAAAAQAAAAcAAAAGQAAABwAAAAeAAAAGQAAAB4AAAAgAAAAEQAAACAAAAAeAAAAEQAAABIAAAAgAAAAEQAAABUAAAASAAAAEQAAAA4AAAAVAAAADgAAABEAAAANAAAAEQAAAB4AAAAAAAAAIQAAAAAAAAAeAAAAGwAAAAAAAAAhAAAADwAAAAAAAAAbAAAAAAAAAA8AAAADAAAAGwAAACIAAAAaAAAAIgAAABsAAAAhAAAAIAAAABcAAAAZAAAAFwAAACAAAAAjAAAAHgAAACIAAAAhAAAAIgAAAB4AAAAdAAAAEgAAACMAAAAgAAAAIwAAABIAAAAUAAAACAAAABgAAAAJAAAAGAAAAAgAAAAWAAAAHAAAAAYAAAAfAAAABgAAABwAAAAEAAAA",gidx:"GgAAAAUAAAAMAAAABQAAABoAAAAGAAAABgAAABoAAAAiAAAABgAAACIAAAAfAAAAHwAAACIAAAAdAAAAGAAAAAsAAAAJAAAACwAAABgAAAATAAAAEwAAABgAAAAXAAAAEwAAABcAAAAUAAAAFAAAABcAAAAjAAAA",v:36,bb:[-.5,0,-.5,.5,.625,.5]},"windows-high-top-square":{pos:"VTWqQqvKq8qqQlU1VTWqQlU1q8qqQqvKq8oAAFU1q8oAAKvKqwZVNVU1qwYAAKoqqwZVNaoqqwYAAFU1VfkAAFU1VfkAAKoqANgAAKoqACgAAKoqANgAAFU1VTUAAKvKACgAAFU1VTUAAFU1AChVNaoqAChVNVU1ANhVNVU1VflVNaoqVflVNVU1ANhVNaoq",nrm:"AH8AAH8AAH8AAH8AgQAAgQAAfwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEA",col:"/ePE/ePE/ePE/ePE9c2d9c2d+ty49c2d+ty49c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d+ty4+ty4+ty4+ty4+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAMAAAAFAAAAAwAAAAQAAAABAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAcAAAAJAAAACwAAAAcAAAAKAAAABQAAAAcAAAALAAAABQAAAAsAAAAMAAAABQAAAA0AAAAHAAAABQAAAAwAAAAEAAAABAAAAAwAAAAOAAAADwAAAA0AAAAFAAAADwAAABAAAAANAAAAEAAAAA8AAAARAAAABgAAABIAAAATAAAAEgAAAAYAAAAIAAAAFAAAABUAAAAWAAAAFQAAABQAAAAXAAAAFAAAAAwAAAAXAAAADAAAABQAAAAOAAAACgAAABUAAAALAAAAFQAAAAoAAAAWAAAAEAAAABIAAAANAAAAEgAAABAAAAATAAAAAwAAAA8AAAAFAAAADwAAAAMAAAAAAAAAAgAAAA8AAAAAAAAADwAAAAIAAAARAAAAAgAAABAAAAARAAAAEAAAAAIAAAATAAAAEwAAAAIAAAAGAAAABgAAAAIAAAAWAAAACgAAAAYAAAAWAAAABgAAAAoAAAAJAAAAFgAAAAIAAAAUAAAAAQAAABQAAAACAAAABAAAABQAAAABAAAAFAAAAAQAAAAOAAAA",gidx:"FQAAAAwAAAALAAAADAAAABUAAAAXAAAAEgAAAAcAAAANAAAABwAAABIAAAAIAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.5]},"window-large":{pos:"ACgAAFU1AChVNaoqACgAAKoqAChVNVU1q8qqQqvKVTUAAKvKq8oAAKvKVTWqQqvKVTWqQlU1VTUAAFU1ANhVNVU1q8qqQlU1q8oAAFU1ANgAAFU1ANgAAKoqANhVNaoq",nrm:"gQAAgQAAgQAAgQAAAACBAACBAACBAACBAAB/AAB/AAB/AAB/AAB/AAB/AIEAAIEA",col:"9c2d+ty49c2d+ty4/ePE9c2d9c2d/ePE/ePE9c2d+ty4/ePE9c2d9c2d9c2d+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAAAAAAJAAAAAAAAAAgAAAADAAAAAwAAAAgAAAAKAAAACwAAAAoAAAAIAAAADAAAAAoAAAALAAAACgAAAAwAAAANAAAADAAAAAQAAAAGAAAABAAAAAwAAAALAAAADAAAAA4AAAANAAAABgAAAA4AAAAMAAAABgAAAAIAAAAOAAAABQAAAAIAAAAGAAAABQAAAAAAAAACAAAAAAAAAAUAAAAJAAAACgAAAAEAAAADAAAAAQAAAAoAAAAPAAAACgAAAA4AAAAPAAAADgAAAAoAAAANAAAABwAAAAsAAAAIAAAACwAAAAcAAAAEAAAACAAAAAUAAAAHAAAABQAAAAgAAAAJAAAA",gidx:"AQAAAA4AAAACAAAADgAAAAEAAAAPAAAA",v:16,bb:[-.5,0,-.5,.5,.625,.5]},"window-large-left":{pos:"ANhVNVU1ANgAAKoqANhVNaoqANgAAFU1VTWqQlU1VTUAAKvKVTWqQqvKVTVVNaoqVTVVNVU1VTUAAKoqq8oAAFU1q8qqQqvKq8oAAKvKq8qqQlU1",nrm:"fwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAgQAAgQAAgQAAgQAA",col:"+ty49c2d+ty49c2d/ePE9c2d/ePE+ty4+ty49c2d9c2d/ePE9c2d/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAABwAAAAQAAAAIAAAACQAAAAUAAAAHAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAACgAAAAEAAAADAAAADAAAAAEAAAAKAAAABQAAAAEAAAAMAAAAAQAAAAUAAAAJAAAAAAAAAAcAAAAIAAAABwAAAAAAAAACAAAABgAAAA0AAAAEAAAADQAAAAYAAAALAAAACwAAAAUAAAAMAAAABQAAAAsAAAAGAAAABAAAAAAAAAAIAAAADQAAAAAAAAAEAAAACgAAAAAAAAANAAAAAAAAAAoAAAADAAAA",gidx:"BwAAAAEAAAAJAAAAAQAAAAcAAAACAAAA",v:14,bb:[-.5,0,-.5,.5,.625,.5]},"window-large-middle":{pos:"VTWqQqvKq8qqQlU1VTWqQlU1q8qqQqvKq8oAAKoqq8oAAKvKq8pVNaoqq8pVNVU1VTUAAKvKVTUAAKoqVTVVNaoqVTVVNVU1",nrm:"AH8AAH8AAH8AAH8AgQAAgQAAgQAAgQAAAIEAAIEAfwAAfwAA",col:"/ePE/ePE/ePE/ePE9c2d9c2d+ty4+ty49c2d9c2d+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAMAAAAFAAAAAwAAAAQAAAAGAAAAAwAAAAYAAAABAAAAAQAAAAYAAAAHAAAABAAAAAgAAAAJAAAACAAAAAQAAAAFAAAAAwAAAAgAAAAFAAAACAAAAAMAAAAAAAAAAgAAAAgAAAAAAAAACAAAAAIAAAAKAAAACgAAAAIAAAALAAAACQAAAAgAAAAKAAAABwAAAAoAAAALAAAACgAAAAcAAAAGAAAAAgAAAAcAAAALAAAABwAAAAIAAAABAAAA",gidx:"CgAAAAQAAAAJAAAABAAAAAoAAAAGAAAA",v:12,bb:[-.5,0,-.5,.5,.625,.5]},"window-large-right":{pos:"VTWqQlU1VTUAAKvKVTWqQqvKVTUAAFU1ACgAAFU1ACgAAKoqq8oAAKvKq8oAAKoqq8pVNVU1AChVNaoqAChVNVU1q8pVNaoqq8qqQqvKq8qqQlU1",nrm:"fwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAgQAAgQAA",col:"/ePE9c2d/ePE9c2d9c2d9c2d9c2d9c2d+ty4+ty4+ty4+ty4/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAEAAAADAAAAAQAAAAQAAAAFAAAAAQAAAAUAAAAGAAAABgAAAAUAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAABwAAAAwAAAAGAAAADAAAAAcAAAALAAAADAAAAAsAAAANAAAADQAAAAsAAAAIAAAABAAAAAkAAAAFAAAACQAAAAQAAAAKAAAAAgAAAA0AAAAAAAAADQAAAAIAAAAMAAAAAAAAAAQAAAADAAAABAAAAAAAAAAKAAAACgAAAAAAAAAIAAAACAAAAAAAAAANAAAADAAAAAEAAAAGAAAAAQAAAAwAAAACAAAA",gidx:"CQAAAAcAAAAFAAAABwAAAAkAAAALAAAA",v:14,bb:[-.5,0,-.5,.5,.625,.5]},"window-balcony":{pos:"VTWqQlUtACgAAFUtVTUAAFUtACgzE1UtAChVNVUtANhVNVUtq8qqQlUtANgzE1Utq8oAAFUtANgAAFUt2CQAAFU9ACgAAC06q8oAAKvCKNsAAFU9VTUAAKvCANgAAC06sSFmBlUdT95mBgY3sSFmBgY3T95mBlUdAChVNaoiANhVNaoiq8qqQqvCVTWqQqvC2CQzE1U9KNszE1U9ACgzEy06sSEzE6oiACgzE6oisSEGL6oiT94GL6oiANgzE6oiT94zE6oiT94zEwY3sSEzEwY3ANgzEy06sSEGL1UdT94GL1Ud",nrm:"AAB/AAB/AAB/AAB/AAB/AAB/AAB/AAB/AAB/AAB/AIEAAIEAAIEAAIEAAIEAAIEAAH8AAH8AAH8AAH8AAIEAAIEAAACBAACBMQB1zwB1dQAxAAB/AAB/AAB/AAB/AAB/AAB/AACBAACBAH8AgQAAfwAA",col:"/ePE9c2d9c2d9s+i+ty4+ty4/ePE9s+i9c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d9s+i9s+i9s+i9s+i+ty4+ty4/ePE/ePE9s+i9s+i9s+i9s+i9s+i+ty4+ty49s+i9s+i9s+i9s+i9s+i+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAwAAAAAAAAAEAAAABAAAAAAAAAAFAAAABgAAAAUAAAAAAAAABgAAAAcAAAAFAAAACAAAAAcAAAAGAAAABwAAAAgAAAAJAAAACgAAAAEAAAALAAAADAAAAAEAAAAKAAAADAAAAAoAAAANAAAADgAAAAEAAAAMAAAAAQAAAA4AAAACAAAADAAAAA0AAAAJAAAACQAAAA0AAAAPAAAADAAAAAkAAAAIAAAAEAAAABEAAAASAAAAEQAAABAAAAATAAAABQAAABQAAAAEAAAAFAAAAAUAAAAVAAAAFgAAAA4AAAAMAAAADgAAABYAAAAXAAAAGAAAAA0AAAAKAAAADQAAABgAAAAZAAAAGgAAAAEAAAADAAAAAQAAABoAAAALAAAAFAAAABsAAAAcAAAAGwAAABQAAAAdAAAAHQAAABQAAAAeAAAAFQAAAB4AAAAUAAAAHwAAAB4AAAAVAAAAHgAAAB8AAAAgAAAAIQAAABIAAAARAAAAEgAAACEAAAAiAAAAAAAAAA4AAAAXAAAADgAAAAAAAAACAAAAAwAAABgAAAAaAAAAGAAAAAMAAAAcAAAAGAAAABwAAAAbAAAAGAAAABsAAAAiAAAAIgAAABkAAAAYAAAAGQAAACIAAAAhAAAAGQAAACEAAAAgAAAAGQAAACAAAAAfAAAAGQAAAB8AAAAHAAAAGQAAAAcAAAAjAAAAEAAAAB0AAAAkAAAAHQAAABAAAAAbAAAAGwAAABAAAAASAAAAGwAAABIAAAAiAAAADwAAAAcAAAAJAAAABwAAAA8AAAAjAAAABQAAAB8AAAAVAAAAHwAAAAUAAAAHAAAAAwAAABQAAAAcAAAAFAAAAAMAAAAEAAAAHgAAABMAAAAlAAAAEwAAAB4AAAAgAAAAEwAAACAAAAARAAAAEQAAACAAAAAhAAAAGQAAAA8AAAANAAAADwAAABkAAAAjAAAAHgAAACQAAAAdAAAAJAAAAB4AAAAlAAAAFwAAAAYAAAAAAAAABgAAABcAAAAWAAAAGAAAAAsAAAAaAAAACwAAABgAAAAKAAAACAAAABYAAAAMAAAAFgAAAAgAAAAGAAAA",gidx:"JAAAABMAAAAQAAAAEwAAACQAAAAlAAAA",v:38,bb:[-.5,0,-.575,.5,.625,.575]},"window-awnings":{pos:"VflVNdMjANjNDNMjVfnNDNMjANhVNdMjAChVNdMjqwbNDNMjACjNDNMjqwZVNdMjVfloL34uANhVNX4uVflVNX4uANhoL34uVfkAKH4uANgAKH4uqwYAKCw8qwZoL34uqwYAKH4uqwZVNX4uqwZtMSo4ANgAKCw8ANhtMSo4AChoL34uAChVNX4uACgAKH4uVfkAKCw8ACgAKCw8AChtMSo4VfltMSo4APTNDNMzVt1mBtMzAPRmBtMzVt3NDNMzVTWqQtTDq8qqQn4uVTWqQn4uq8qqQtTDqiLNDNMzACjNDH4uAAzNDNMzqwbNDH4uVfnNDH4uVTUAANTDq8oAANTDq8oAAH4uAAxmBtMzqiJmBtMzANjNDH4uqwZmBn4uAChmBn4uVTUAAH4uANhmBn4uVflmBn4u",nrm:"AAB/AAB/AAB/AAB/AAB/AAB/AAB/AAB/AACBAACBAACBAACBAACBAACBgQAAgQAAgQAAgQAAgQAAgQAAgQAAAACBAACBAACBAIEAAIEAfwAAfwAAMQB1zwB1MQB1zwB1AH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AgQAAAACBAACBgQAAzwB1MQB1fwAAAIEAAIEAfwAAAIEAAIEA",col:"t9T2ganjganjt9T2t9T2ganjganjt9T2SrOATriCTriCSrOAQat7Qat7Qat7SrOAQat7TriCSrOAQat7SrOASrOATriCQat7Qat7Qat7SrOASrOA9s+i9s+i9s+i9s+i/ePE/ePE/ePE/ePE9s+i9s+i9s+i9s+i9s+i9c2d9c2d9c2d9s+i9s+i9s+i9s+i9s+i9c2d9s+i9s+i",idx:"HAAAAB0AAAAeAAAAHQAAABwAAAAfAAAACQAAAAAAAAAKAAAAAAAAAAkAAAADAAAAIAAAACEAAAAiAAAAIQAAACAAAAAjAAAABgAAACQAAAAlAAAAJAAAAAYAAAAFAAAAJAAAAAUAAAAmAAAAJgAAAAUAAAAnAAAAKAAAAAAAAAACAAAAAAAAACgAAAAKAAAACgAAACgAAAAMAAAACgAAAAwAAAAIAAAAIwAAACkAAAAqAAAAKQAAACMAAAAgAAAAKwAAACMAAAAqAAAAIwAAACsAAAAhAAAAJAAAACwAAAAtAAAALAAAACQAAAAmAAAACQAAAAEAAAADAAAAAQAAAAkAAAAuAAAALgAAAAkAAAALAAAALgAAAAsAAAANAAAALQAAAC8AAAAwAAAALwAAAC0AAAAsAAAAJQAAAAQAAAAGAAAABAAAACUAAAAWAAAAFgAAACUAAAAXAAAAFgAAABcAAAAVAAAAEQAAAAUAAAAHAAAABQAAABEAAAAnAAAAJwAAABEAAAAPAAAAJwAAAA8AAAAQAAAAEQAAAAQAAAAWAAAABAAAABEAAAAHAAAAIgAAACkAAAAgAAAAKQAAACIAAAAxAAAAHgAAADIAAAAzAAAAMgAAAB4AAAAdAAAAKwAAACkAAAAxAAAAKQAAACsAAAAqAAAAHwAAADIAAAAdAAAAMgAAAB8AAAAuAAAAHAAAADMAAAAoAAAAMwAAABwAAAAeAAAAJAAAADAAAAAlAAAAMAAAACQAAAAtAAAAAgAAABwAAAAoAAAAHAAAAAIAAAABAAAAHAAAAAEAAAAfAAAAHwAAAAEAAAAuAAAALAAAACcAAAAvAAAAJwAAACwAAAAmAAAAIQAAAA0AAAALAAAAIQAAAC4AAAANAAAAIQAAAAsAAAAJAAAAIQAAAAkAAAAiAAAACgAAACIAAAAJAAAAIQAAADIAAAAuAAAAKwAAADIAAAAhAAAAMgAAACsAAAAvAAAAMgAAAC8AAAAzAAAAJwAAADMAAAAvAAAAMwAAACcAAAAoAAAAKAAAACcAAAAQAAAAKAAAABAAAAAMAAAADAAAABAAAAAPAAAADAAAAA8AAAAIAAAALwAAACsAAAAwAAAAMQAAADAAAAArAAAAMAAAADEAAAAiAAAACAAAAA8AAAARAAAACAAAABEAAAAKAAAAEQAAACIAAAAKAAAAMAAAACIAAAAlAAAAFgAAACIAAAARAAAAJQAAACIAAAAXAAAAFQAAACIAAAAWAAAAFwAAACIAAAAVAAAA",gidx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAADAAAAAsAAAAIAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAAEQAAAA4AAAASAAAAEwAAAAsAAAANAAAACwAAABMAAAAJAAAACQAAABMAAAAUAAAAFQAAABEAAAAWAAAAEQAAABUAAAAPAAAAFwAAAA8AAAAVAAAADwAAABcAAAAQAAAAEwAAAAwAAAAYAAAADAAAABMAAAANAAAADgAAABcAAAAZAAAAFwAAAA4AAAAQAAAAGgAAABUAAAAWAAAAFQAAABoAAAAXAAAAFwAAABoAAAAZAAAAGwAAAAgAAAAKAAAACAAAABsAAAAMAAAADAAAABsAAAAYAAAACgAAABQAAAAbAAAAFAAAAAoAAAAJAAAAGQAAABIAAAAOAAAAEgAAABkAAAAaAAAAGAAAABQAAAATAAAAFAAAABgAAAAbAAAAFgAAABIAAAAaAAAAEgAAABYAAAARAAAA",v:52,bb:[-.5,0,-.5641,.5,.625,.5641]},"window-door-window":{pos:"VStVCFU1VStVNaoqVStVCKoqVStVNVU1VTWqQqvKq8qqQlU1VTWqQlU1q8qqQqvKVRdVCFU1VRdVCKoqq+hVCKoqq9RVCFU1q+hVCFU1q9RVCKoqq9RVNVU1q9RVNaoqVQ0AAFU1VQ1VNaoqVQ0AAKoqVQ1VNVU1q+hVNaoqq+hVNVU1VTUAAKvKq8oAAKvKVRdVNVU1VRdVNaoqq/JVNVU1q/JVNaoqq8oAAFU1q/IAAKoqq/IAAFU1VTUAAFU1",nrm:"gQAAgQAAgQAAgQAAAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AfwAAfwAAgQAAgQAAgQAAgQAAAIEAAIEAAACBAACBAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEA",col:"9s+i+ty49s+i+ty4/ePE/ePE/ePE/ePE9s+i9s+i9s+i9s+i9s+i9s+i+ty4+ty49c2d+ty49c2d+ty4+ty4+ty49c2d9c2d+ty4+ty4+ty4+ty49c2d9c2d9c2d9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAgAAAAgAAAAAAAAACAAAAAIAAAAJAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAADgAAAA0AAAAPAAAADQAAAA4AAAALAAAAEAAAABEAAAASAAAAEQAAABAAAAATAAAADgAAABQAAAAVAAAAFAAAAA4AAAAPAAAABwAAABYAAAAXAAAAFgAAAAcAAAAEAAAAGAAAAAEAAAADAAAAAQAAABgAAAAZAAAAGAAAAAkAAAAZAAAACQAAABgAAAAIAAAAGgAAABEAAAATAAAAEQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAFwAAAB0AAAAcAAAAFwAAABIAAAAdAAAAFgAAABIAAAAXAAAAFgAAABAAAAASAAAAEAAAABYAAAAfAAAAHAAAAAcAAAAXAAAABwAAABwAAAAFAAAADAAAABQAAAAKAAAAFAAAAAwAAAAVAAAAGgAAAB0AAAAbAAAAHQAAABoAAAAeAAAABgAAABYAAAAEAAAAFgAAAAYAAAAfAAAAAAAAAAYAAAADAAAAAwAAAAYAAAAYAAAAAAAAAB8AAAAGAAAAHwAAAAAAAAAQAAAAEAAAAAAAAAAIAAAACAAAABMAAAAQAAAAEwAAAAgAAAAYAAAAGAAAAAYAAAATAAAAEwAAAAYAAAAaAAAAGgAAAAYAAAAVAAAAFQAAAAYAAAAOAAAABQAAAA4AAAAGAAAABQAAAAsAAAAOAAAAHAAAAAsAAAAFAAAADAAAABoAAAAVAAAACwAAABwAAAAMAAAADAAAAB4AAAAaAAAAHgAAAAwAAAAcAAAA",gidx:"FAAAAA0AAAAKAAAADQAAABQAAAAPAAAAEQAAAB0AAAASAAAAHQAAABEAAAAbAAAAAgAAABkAAAAJAAAAGQAAAAIAAAABAAAA",v:32,bb:[-.5,0,-.5,.5,.625,.5]},"window-door-window-round":{pos:"q8oAAKvKVTWqQqvKVTUAAKvKq8qqQqvKq/JVNVU1VQ1VNaoqVQ1VNVU1q/JVNaoqq/IAAKoqq/IAAFU1VQ0AAFU1VQ0AAKoqq8qqQlU1VTWqQlU1mddnMlU1q95VNaoqq95VNVU1mddnMqoqq+hVK1U1veVnMqoqq+hVK6oqveVnMlU1q9RVK1U1q9RVCKoqq9RVK6oqq9RVCFU1VStVCKoqVRdVCFU1VStVCFU1VRdVCKoqQxpnMlU1VRdVK6oqQxpnMqoqVRdVK1U1VStVK6oqVStVK1U1VSFVNVU1ZyhnMqoqZyhnMlU1VSFVNaoqVTUAAFU1q+hVCKoqq+hVCFU1q8oAAFU1",nrm:"AACBAACBAACBAACBAIEAAIEAAIEAAIEAfwAAfwAAgQAAgQAAAH8AAH8AWqYAAIEAAIEAWqYAi88ApqYAi88ApqYAfwAAfwAAfwAAfwAAAH8AAH8AAH8AAH8AWqYAdc8AWqYAdc8AgQAAgQAAAIEApqYApqYAAIEAfwAAAH8AAH8AgQAA",col:"9c2d/ePE9c2d/ePE+ty4+ty4+ty4+ty49c2d9c2d9c2d9c2d/ePE/ePE+ty4+ty4+ty4+ty4+dix+ty4+dix+ty4+dix9s+i+dix9s+i9s+i9s+i9s+i9s+i+ty4+dix+ty4+dix+dix+dix+ty4+ty4+ty4+ty49c2d9s+i9s+i9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAABAAAAAgAAAAHAAAACAAAAAQAAAAJAAAACgAAAAUAAAALAAAABQAAAAoAAAAGAAAAAQAAAAwAAAANAAAADAAAAAEAAAADAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAAEgAAABMAAAAUAAAAEwAAABIAAAAVAAAAFgAAABcAAAAYAAAAFwAAABYAAAAZAAAAEAAAABMAAAAVAAAAEwAAABAAAAAPAAAAGgAAABsAAAAcAAAAGwAAABoAAAAdAAAAHgAAAB8AAAAgAAAAHwAAAB4AAAAhAAAAHAAAACIAAAAaAAAAIgAAABwAAAAjAAAAJAAAACUAAAAmAAAAJQAAACQAAAAnAAAADQAAAAIAAAABAAAAAgAAAA0AAAAoAAAAKQAAABkAAAAqAAAAGQAAACkAAAAXAAAAKgAAABQAAAApAAAAFAAAACoAAAASAAAAHgAAACcAAAAkAAAAJwAAAB4AAAAgAAAAIwAAACUAAAAiAAAAJQAAACMAAAAmAAAAIQAAAB0AAAAfAAAAHQAAACEAAAAbAAAAKwAAAAMAAAAAAAAAAwAAACsAAAAMAAAADgAAABgAAAARAAAAGAAAAA4AAAAWAAAAKwAAAAgAAAAJAAAAAAAAAAgAAAArAAAAAAAAAAsAAAAIAAAAAgAAAAsAAAAAAAAAAgAAAAoAAAALAAAACgAAAAIAAAAoAAAABgAAACEAAAAeAAAABgAAAB4AAAAkAAAAJAAAAA0AAAAGAAAAJgAAAA0AAAAkAAAAIwAAAA0AAAAmAAAABgAAABsAAAAhAAAAHAAAAA0AAAAjAAAAGwAAAAYAAAAKAAAACgAAABwAAAAbAAAAKAAAABwAAAAKAAAAHAAAACgAAAANAAAABgAAAA0AAAAEAAAABAAAAA0AAAAQAAAADAAAABAAAAANAAAAFQAAAAQAAAAQAAAAEgAAAAQAAAAVAAAADAAAAA4AAAAQAAAADAAAABYAAAAOAAAADAAAABkAAAAWAAAAKwAAABkAAAAMAAAAKgAAAAQAAAASAAAAGQAAACsAAAAqAAAAKgAAAAkAAAAEAAAACQAAACoAAAArAAAA",gidx:"FAAAABcAAAApAAAAFwAAABQAAAAYAAAAGAAAABQAAAATAAAAGAAAABMAAAARAAAAEQAAABMAAAAPAAAABQAAAAgAAAALAAAACAAAAAUAAAAHAAAAGgAAAB8AAAAdAAAAHwAAABoAAAAiAAAAHwAAACIAAAAlAAAAHwAAACUAAAAgAAAAIAAAACUAAAAnAAAA",v:44,bb:[-.5,0,-.5,.5,.625,.5]},door:{pos:"VQ0AAFU1VQ1VNaoqVQ0AAKoqVQ1VNVU1VTWqQqvKq8qqQlU1VTWqQlU1q8qqQqvKq8oAAFU1q8oAAKvKq/IAAKoqq/IAAFU1VTUAAKvKVTUAAFU1q/JVNVU1q/JVNaoq",nrm:"gQAAgQAAgQAAgQAAAH8AAH8AAH8AAH8AgQAAgQAAAIEAAIEAAIEAAIEAfwAAfwAA",col:"9c2d+ty49c2d+ty4/ePE/ePE/ePE/ePE9c2d9c2d9c2d9c2d9c2d9c2d+ty4+ty4",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAcAAAAJAAAABwAAAAgAAAAFAAAACAAAAAoAAAALAAAACQAAAAoAAAAIAAAACQAAAAIAAAAKAAAADAAAAAIAAAAJAAAADAAAAAAAAAACAAAAAAAAAAwAAAANAAAADgAAAAoAAAAPAAAACgAAAA4AAAALAAAABgAAAAAAAAANAAAAAAAAAAYAAAADAAAAAwAAAAYAAAAOAAAABQAAAA4AAAAGAAAACAAAAA4AAAAFAAAADgAAAAgAAAALAAAABwAAAAwAAAAJAAAADAAAAAcAAAAEAAAADgAAAAEAAAADAAAAAQAAAA4AAAAPAAAABgAAAAwAAAAEAAAADAAAAAYAAAANAAAA",gidx:"AQAAAAoAAAACAAAACgAAAAEAAAAPAAAA",v:16,bb:[-.5,0,-.5,.5,.625,.5]},"door-window":{pos:"ANhVNVU1q/JVNaoqq/JVNVU1ANhVNaoqq/IAAFU1q/IAAKoqVTWqQlU1VTUAAKvKVTWqQqvKVTUAAFU1AABVNVU1AChVNaoqAChVNVU1AABVNaoqANgAAKoqANgAAFU1ACgAAFU1ACgAAKoqq8qqQlU1q8qqQqvKq8oAAKvKq8oAAFU1AAAAAKoqAAAAAFU1",nrm:"AIEAAIEAAIEAAIEAgQAAgQAAfwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAfwAAfwAAgQAAgQAAAH8AAH8AAACBgQAAfwAAfwAA",col:"+ty4+ty4+ty4+ty49c2d9c2d/ePE9c2d/ePE9c2d+ty4+ty4+ty4+ty49c2d9c2d9c2d9c2d/ePE/ePE9c2d9c2d9c2d9c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAEAAAAFAAAAAQAAAAQAAAACAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAAAAAAAA4AAAADAAAADgAAAAAAAAAPAAAAEAAAAAsAAAARAAAACwAAABAAAAAMAAAACAAAABIAAAAGAAAAEgAAAAgAAAATAAAAEwAAAAcAAAAUAAAABwAAABMAAAAIAAAAFQAAABMAAAAUAAAAEwAAABUAAAASAAAACgAAABYAAAANAAAAFgAAAAoAAAAXAAAABAAAABYAAAAXAAAABQAAABYAAAAEAAAAFAAAABYAAAAFAAAAFAAAAAUAAAAOAAAAFAAAABEAAAAWAAAAFAAAAA4AAAAVAAAAFQAAAA4AAAAPAAAABwAAABEAAAAUAAAABwAAABAAAAARAAAAEAAAAAcAAAAJAAAABgAAABAAAAAJAAAAEAAAAAYAAAAMAAAADAAAAAYAAAAKAAAACgAAAAYAAAACAAAABAAAAAoAAAACAAAACgAAAAQAAAAXAAAAAgAAAAYAAAAAAAAAEgAAAAAAAAAGAAAAFQAAAAAAAAASAAAAAAAAABUAAAAPAAAA",gidx:"CwAAABYAAAARAAAAFgAAAAsAAAANAAAAAQAAAA4AAAAFAAAADgAAAAEAAAADAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.5]},"door-window-narrow":{pos:"VStVCKoqVRdVCFU1VStVCFU1VRdVCKoqVStVNaoqVStVNVU1q8oAAFU1q/IAAKoqq/IAAFU1q8oAAKvKVQ0AAKoqVTUAAKvKVQ0AAFU1VTUAAFU1q8qqQqvKVTWqQqvKq8qqQlU1q/JVNVU1VQ1VNaoqVQ1VNVU1q/JVNaoqVRdVNVU1VRdVNaoqVTWqQlU1",nrm:"AH8AAH8AAH8AAH8AgQAAgQAAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAACBAACBgQAAAIEAAIEAAIEAAIEAfwAAfwAAAH8A",col:"9s+i9s+i9s+i9s+i+ty4+ty49c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d/ePE/ePE/ePE+ty4+ty4+ty4+ty4+ty4+ty4/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAgAAAAQAAAAAAAAABAAAAAIAAAAFAAAABgAAAAcAAAAIAAAACQAAAAcAAAAGAAAACQAAAAoAAAAHAAAACwAAAAoAAAAJAAAACwAAAAwAAAAKAAAADAAAAAsAAAANAAAADgAAAAsAAAAJAAAACwAAAA4AAAAPAAAABgAAAA4AAAAJAAAADgAAAAYAAAAQAAAAEQAAABIAAAATAAAAEgAAABEAAAAUAAAADAAAABIAAAAKAAAAEgAAAAwAAAATAAAAFQAAAAMAAAAWAAAAAwAAABUAAAABAAAADwAAABAAAAAXAAAAEAAAAA8AAAAOAAAAFQAAAAQAAAAFAAAABAAAABUAAAAWAAAAEQAAAAYAAAAIAAAABgAAABEAAAAQAAAAEAAAABEAAAAXAAAAEwAAABcAAAARAAAAFQAAABcAAAATAAAAEwAAAAEAAAAVAAAABQAAABcAAAAVAAAAAQAAABMAAAAMAAAAAgAAABcAAAAFAAAADAAAAAIAAAABAAAAAgAAAA0AAAAXAAAADQAAAAIAAAAMAAAAFwAAAAsAAAAPAAAACwAAABcAAAANAAAAEQAAAAcAAAAUAAAABwAAABEAAAAIAAAA",gidx:"EgAAAAcAAAAKAAAABwAAABIAAAAUAAAAAAAAABYAAAADAAAAFgAAAAAAAAAEAAAA",v:24,bb:[-.5,0,-.5,.5,.625,.5]},"edges-door":{pos:"q/JVNVU1q/IAAKoqq/JVNaoqq/IAAFU1VuUAAFU1q8oAAKvKq8oAAKoaVQ0AAKoqqhoAAFU1VQ0AAFU1VTUAAKvKVTUAAKoaVQ1VNVU1qhqqQlU1VuWqQlU1q8qqQqvKq8qqQqoaVQ1VNaoqVTWqQqvKVTWqQqoa",nrm:"fwAAfwAAfwAAfwAAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAAAB/AAB/AAB/gQAAgQAAAIEAAH8AAH8A",col:"+ty49c2d+ty49c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d9c2d+ty4/ePE/ePE/ePE/ePE+ty4/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAEAAAADAAAABQAAAAEAAAAEAAAABQAAAAQAAAAGAAAABQAAAAcAAAABAAAABQAAAAgAAAAHAAAABwAAAAgAAAAJAAAACgAAAAgAAAAFAAAACAAAAAoAAAALAAAACAAAAAwAAAAJAAAADAAAAAgAAAANAAAADAAAAA0AAAAAAAAADgAAAAAAAAANAAAABAAAAAAAAAAOAAAAAAAAAAQAAAADAAAABgAAAA8AAAAFAAAADwAAAAYAAAAQAAAADgAAAAYAAAAEAAAABgAAAA4AAAAQAAAAAAAAABEAAAAMAAAAEQAAAAAAAAACAAAAEgAAAA0AAAATAAAADQAAABIAAAAPAAAADQAAAA8AAAAOAAAADgAAAA8AAAAQAAAADQAAAAsAAAATAAAACwAAAA0AAAAIAAAACQAAABEAAAAHAAAAEQAAAAkAAAAMAAAAEwAAAAoAAAASAAAACgAAABMAAAALAAAADwAAAAoAAAAFAAAACgAAAA8AAAASAAAA",gidx:"EQAAAAEAAAAHAAAAAQAAABEAAAACAAAA",v:20,bb:[-.5,0,-.5,.5,.625,.5]},"roof-flat-top":{pos:"VTUAAKo6qjoAAKvKqjoAAFU1VTUAAFbFq8oAAKo6q8oAAFbFVsUAAFU1VsUAAKvKVTWqFlbFqjqqFqvKVTWqFqo6qjqqFlU1q8qqFqo6q8qqFlbFVsWqFlU1VsWqFqvK",nrm:"AIEAAIEAAIEAAIEAAIEAAIEAAIEAAIEAMQCLdQDPMQB1dQAxAH8AAH8AAH8AAH8A",col:"yoRcyoRcyoRcyoRcyoRcyoRcyoRcyoRc7biS7biS7biS7biS7biS7biS7biS7biS",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAwAAAAAAAAAEAAAAAwAAAAQAAAAFAAAABQAAAAQAAAAGAAAABQAAAAYAAAAHAAAACAAAAAEAAAADAAAAAQAAAAgAAAAJAAAACgAAAAIAAAALAAAAAgAAAAoAAAAAAAAACQAAAAoAAAALAAAACgAAAAkAAAAIAAAACgAAAAgAAAAMAAAADAAAAAgAAAANAAAADAAAAA0AAAAOAAAADgAAAA0AAAAPAAAACgAAAAQAAAAAAAAABAAAAAoAAAAMAAAABgAAAA8AAAAHAAAADwAAAAYAAAAOAAAABQAAAAgAAAADAAAACAAAAAUAAAANAAAADAAAAAYAAAAEAAAABgAAAAwAAAAOAAAACwAAAAEAAAAJAAAAAQAAAAsAAAACAAAABwAAAA0AAAAFAAAADQAAAAcAAAAPAAAA",gidx:"",v:16,bb:[-.55,0,-.55,.55,.2125,.55]},"roof-flat-center":{pos:"q8oAAFU1q8pVC6vKq8oAAKvKq8pVC1U1VTVVC1U1VTUAAFU1VTUAAKvKVTVVC6vK",nrm:"gQAAgQAAgQAAgQAAAAB/AAB/AIEAfwAA",col:"9c2d/ePE9c2d/ePE/ePE9c2d9c2d/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAAAAAAFAAAAAAAAAAQAAAADAAAAAAAAAAYAAAAFAAAABgAAAAAAAAACAAAABAAAAAYAAAAHAAAABgAAAAQAAAAFAAAAAQAAAAYAAAACAAAABgAAAAEAAAAHAAAABwAAAAMAAAAEAAAAAwAAAAcAAAABAAAA",gidx:"",v:8,bb:[-.5,0,-.5,.5,.1062,.5]},"roof-flat-corner":{pos:"AABVC1U1VTUAAAAAVTVVCwAAAAAAAFU1q8pVC6vKVTUAAKvKq8oAAKvKVTVVC6vKq8oAAFU1q8pVC1U1",nrm:"WgBaWgBaWgBaWgBaAACBAACBAACBAACBgQAAgQAA",col:"/ePE9c2d/ePE9c2d/ePE9c2d9c2d/ePE9c2d/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAQAAAAGAAAABAAAAAgAAAAJAAAAAwAAAAUAAAABAAAABQAAAAMAAAAGAAAABgAAAAMAAAAIAAAAAgAAAAUAAAAHAAAABQAAAAIAAAABAAAAAwAAAAkAAAAIAAAACQAAAAMAAAAAAAAABwAAAAAAAAACAAAAAAAAAAcAAAAEAAAAAAAAAAQAAAAJAAAA",gidx:"",v:10,bb:[-.5,0,-.5,.5,.1062,.5]},"roof-flat-corner-high":{pos:"VTWqFgAAVTUAAKvKVTWqFqvKVTUAAAAAAAAAAFU1q8qqFlU1q8oAAFU1AACqFlU1q8qqFqvKq8oAAKvK",nrm:"fwAAfwAAfwAAfwAAAAB/AAB/AAB/AAB/gQAAgQAA",col:"7biSyoRc7biSyoRcyoRc7biSyoRc7biS7biSyoRc",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAABgAAAAgAAAAJAAAACAAAAAYAAAAFAAAABAAAAAEAAAADAAAAAQAAAAQAAAAJAAAACQAAAAQAAAAGAAAACAAAAAEAAAAJAAAAAQAAAAgAAAACAAAABwAAAAMAAAAAAAAAAwAAAAcAAAAEAAAAAgAAAAcAAAAAAAAABwAAAAIAAAAIAAAABwAAAAgAAAAFAAAA",gidx:"",v:10,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-border-straight":{pos:"q8oAAFU1q8qqFqvKq8oAAKvKq8qqFlU1AChVC1U1VTWqFlU1ACiqFlU1VTUAAFU1ANhVC1U1ANiqFlU1VTUAAKvKVTWqFqvKACiqFqvKAChVC6vKANiqFqvKANhVC6vK",nrm:"gQAAgQAAgQAAgQAAAAB/AAB/AAB/AAB/AAB/AAB/fwAAfwAAgQAAgQAAAH8AAACB",col:"9c2d/ePE9c2d/ePE+NWs/ePE/ePE9c2d+NWs/ePE9c2d/ePE/ePE+NWs/ePE+NWs",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABAAAAAcAAAAFAAAABwAAAAQAAAAAAAAACAAAAAAAAAAEAAAAAAAAAAgAAAADAAAAAwAAAAgAAAAJAAAABQAAAAoAAAALAAAACgAAAAUAAAAHAAAABAAAAAwAAAANAAAADAAAAAQAAAAGAAAADgAAAAMAAAAJAAAAAwAAAA4AAAABAAAAAAAAAAoAAAAHAAAACgAAAAAAAAACAAAADwAAAAEAAAAOAAAADwAAAAIAAAABAAAAAgAAAA8AAAAKAAAADQAAAAoAAAAPAAAACgAAAA0AAAALAAAACwAAAA0AAAAMAAAACQAAAA8AAAAOAAAADwAAAAkAAAAIAAAACwAAAAYAAAAFAAAABgAAAAsAAAAMAAAADQAAAAgAAAAEAAAACAAAAA0AAAAPAAAA",gidx:"",v:16,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-border-side":{pos:"q8oAAFU1q8pVC6vKq8oAAKvKq8pVCwAoq8qqFgAoq8qqFlU1VTUAAKvKVTUAAFU1VTWqFlU1VTVVC6vKVTVVCwAoVTWqFgAo",nrm:"gQAAgQAAgQAAgQAAgQAAgQAAAIEAAIEAAAB/AACBAACBAACB",col:"9c2d+NWs9c2d+NWs/ePE/ePE9c2d9c2d/ePE+NWs+NWs/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAwAAAAAAAAAEAAAABAAAAAAAAAAFAAAAAAAAAAYAAAAHAAAABgAAAAAAAAACAAAACAAAAAAAAAAHAAAAAAAAAAgAAAAFAAAAAQAAAAYAAAACAAAABgAAAAEAAAAJAAAABAAAAAoAAAADAAAACgAAAAQAAAALAAAACwAAAAUAAAAIAAAABQAAAAsAAAAEAAAACAAAAAoAAAALAAAABwAAAAoAAAAIAAAABgAAAAoAAAAHAAAACgAAAAYAAAAJAAAACQAAAAMAAAAKAAAAAwAAAAkAAAABAAAA",gidx:"",v:12,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-border-end":{pos:"q8oAAFU1q8qqFqvKq8oAAKvKq8qqFlU1ANiqFgAoAChVCwAoANhVCwAoACiqFgAoVTUAAKvKVTUAAFU1ANhVC6vKANiqFqvKAChVC6vKVTWqFqvKACiqFqvKVTWqFlU1",nrm:"gQAAgQAAgQAAgQAAAACBAACBAACBAACBAIEAAIEAfwAAfwAAAACBAACBAACBAAB/",col:"9c2d/ePE9c2d/ePE/ePE+NWs+NWs/ePE9c2d9c2d+NWs/ePE+NWs/ePE/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAAAAAAgAAAAJAAAACAAAAAAAAAACAAAABAAAAAoAAAALAAAACgAAAAQAAAAGAAAACgAAAAEAAAALAAAACgAAAAIAAAABAAAAAgAAAAoAAAAIAAAADAAAAAgAAAAKAAAACAAAAAwAAAANAAAADQAAAAwAAAAOAAAADwAAAAAAAAAJAAAAAAAAAA8AAAADAAAADgAAAAcAAAANAAAABwAAAA8AAAANAAAADwAAAAcAAAADAAAAAwAAAAcAAAAEAAAAAwAAAAQAAAALAAAAAwAAAAsAAAABAAAABQAAAA4AAAAMAAAADgAAAAUAAAAHAAAADwAAAAgAAAANAAAACAAAAA8AAAAJAAAADAAAAAYAAAAFAAAABgAAAAwAAAAKAAAA",gidx:"",v:16,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-border-corner":{pos:"VTWqFlU1q8oAAFU1VTUAAFU1q8qqFlU1q8pVCwAoACiqFgAoAChVCwAoq8qqFgAoVTUAAKvKq8oAAKvKq8pVC6vKAChVC6vKVTWqFqvKACiqFqvK",nrm:"AAB/AAB/AAB/AAB/AACBAACBAACBAACBAIEAAIEAAACBAACBAACBAACB",col:"/ePE9c2d9c2d/ePE+NWs/ePE+NWs/ePE9c2d9c2d+NWs+NWs/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAQAAAAgAAAACAAAACAAAAAEAAAAJAAAACgAAAAgAAAAJAAAACAAAAAoAAAALAAAACAAAAAsAAAAMAAAADAAAAAsAAAANAAAAAAAAAAgAAAAMAAAACAAAAAAAAAACAAAADQAAAAUAAAAMAAAABQAAAAAAAAAMAAAAAAAAAAUAAAADAAAAAwAAAAUAAAAHAAAABgAAAA0AAAALAAAADQAAAAYAAAAFAAAAAQAAAAoAAAAJAAAACgAAAAEAAAAEAAAABAAAAAEAAAAHAAAABwAAAAEAAAADAAAACwAAAAQAAAAGAAAABAAAAAsAAAAKAAAA",gidx:"",v:14,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-border-center":{pos:"q8qqFqvKVTUAAKvKq8oAAKvKVTWqFqvKVTWqFlU1VTUAAFU1q8oAAFU1q8qqFlU1ANiqFgAoANhVCwDYANiqFgDYANhVCwAoACiqFgDYAChVCwDYAChVCwAoACiqFgAo",nrm:"AACBAACBAACBAACBfwAAfwAAgQAAgQAAfwAAfwAAfwAAfwAAAAB/AAB/gQAAgQAA",col:"/ePE9c2d9c2d/ePE/ePE9c2d9c2d/ePE/ePE+NWs/ePE+NWs/ePE+NWs+NWs/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAEAAAADAAAAAQAAAAQAAAAFAAAABgAAAAAAAAACAAAAAAAAAAYAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAABgAAAAEAAAAFAAAAAQAAAAYAAAACAAAADAAAAAkAAAANAAAACQAAAAwAAAAKAAAADgAAAAwAAAANAAAADAAAAA4AAAAPAAAACAAAAA4AAAALAAAADgAAAAgAAAAPAAAABAAAAAYAAAAFAAAABgAAAAQAAAAHAAAABwAAAA8AAAAIAAAABwAAAAgAAAAKAAAABAAAAA8AAAAHAAAACgAAAAAAAAAHAAAADwAAAAQAAAADAAAADAAAAAAAAAAKAAAAAwAAAAwAAAAPAAAADAAAAAMAAAAAAAAADQAAAAsAAAAOAAAACwAAAA0AAAAJAAAA",gidx:"",v:16,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-detail-a":{pos:"q8pVC6vKq8pVC1bRVtFVC6vKq8pVC6ouq8pVC1U1VtFVC1U1qi5VC1U1VTVVC1U1VTVVC6ouqi5VC6vKVTVVC1bRVTVVC6vKq8oAAFU1q8oAAKvKVTUAAFU1VTUAAKvKqi6qFlU1VtGqFlU1qi6qFqvKVTWqFlbRVTWqFqouq8qqFqouVtGqFqvKq8qqFlbR",nrm:"AH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AgQAAgQAAAAB/AACBAAB/AAB/WgCmWgCmfwAApgBaAACBgQAA",col:"3J533J533J533J533J533J533J533J533J533J533J533J53yoRcyoRcyoRcyoRc/ePE/ePE/ePE/ePE/ePE/ePE/ePE/ePE",idx:"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAAAAAAANAAAAAAAAAAwAAAABAAAAAQAAAAwAAAADAAAAAwAAAAwAAAAEAAAABwAAAAwAAAAOAAAADAAAAAcAAAAGAAAABgAAAAQAAAAMAAAABAAAAAYAAAAFAAAAAAAAAA8AAAANAAAADwAAAAAAAAACAAAADwAAAAIAAAAJAAAACwAAAA8AAAAJAAAADAAAAA8AAAAOAAAADwAAAAwAAAANAAAACgAAAA8AAAALAAAADwAAAAoAAAAOAAAADgAAAAoAAAAIAAAADgAAAAgAAAAHAAAAEAAAAAUAAAAGAAAABQAAABAAAAARAAAAEgAAAAoAAAAJAAAACgAAABIAAAATAAAAFAAAAAoAAAATAAAACgAAABQAAAAIAAAAEQAAAAMAAAAFAAAAAwAAABEAAAAVAAAAAgAAABIAAAAJAAAAEgAAAAIAAAAWAAAAAwAAABcAAAABAAAAFwAAAAMAAAAVAAAAEAAAAAgAAAAUAAAACAAAABAAAAAGAAAAAQAAABYAAAACAAAAFgAAAAEAAAAXAAAAEwAAABAAAAAUAAAAEAAAABMAAAASAAAAEAAAABIAAAARAAAAEQAAABIAAAAWAAAAEQAAABYAAAAVAAAAFQAAABYAAAAXAAAACgAAAAYAAAAIAAAABgAAAAoAAAAJAAAABgAAAAkAAAAFAAAABQAAAAkAAAACAAAABQAAAAIAAAADAAAAAwAAAAIAAAABAAAA",gidx:"",v:24,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-detail-b":{pos:"MzOrBc3MzcyrBTMzMzOrBTMzzcyrBc3MMzMAEc3MzcwAETMzMzMAETMzzcwAEc3MVTWqFlU1q8oAEVU1VTUAEVU1q8qqFlU1q8qqFqvKq8oAEavKq8oAAFU1q8qrBavKq8oAAKvKq8qrBVU1VTUAAKvKVTUAAFU1VTUAEavKVTWqFqvKVTWrBVU1VTWrBavK",nrm:"AH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAAB/AAB/AAB/AAB/gQAAgQAAgQAAgQAAgQAAgQAAAIEAAIEAfwAAfwAAAAB/fwAA",col:"z8/hz8/hz8/hz8/h6enx6enx6enx6enx7biS5q2H5q2H7biS7biS5q2HyoRc1JJryoRc1JJryoRcyoRc5q2H7biS1JJr1JJr",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAACQAAAAwAAAANAAAADAAAAAkAAAALAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAADgAAABIAAAATAAAAEgAAAA4AAAAQAAAACAAAABQAAAAVAAAAFAAAAAgAAAAKAAAAFgAAAA4AAAATAAAADgAAABYAAAARAAAAFgAAABIAAAAXAAAAEgAAABYAAAATAAAAFQAAAAsAAAAIAAAACwAAABUAAAAMAAAADwAAABIAAAAQAAAAEgAAAA8AAAAXAAAADAAAABQAAAANAAAAFAAAAAwAAAAVAAAABgAAAAkAAAAFAAAABQAAAAkAAAAHAAAABgAAAAoAAAAJAAAADQAAAAcAAAAJAAAACgAAAAYAAAAUAAAADQAAAAQAAAAHAAAAFAAAAAQAAAANAAAABAAAABQAAAAGAAAAEQAAAAIAAAABAAAAEQAAAAEAAAADAAAAFgAAAAIAAAARAAAAAwAAAA8AAAARAAAAAgAAABYAAAAXAAAAAAAAAA8AAAADAAAAFwAAAAAAAAACAAAAAAAAABcAAAAPAAAAAQAAAAcAAAADAAAABwAAAAEAAAAFAAAABgAAAAAAAAAEAAAAAAAAAAYAAAACAAAABgAAAAEAAAACAAAAAQAAAAYAAAAFAAAABwAAAAAAAAADAAAAAAAAAAcAAAAEAAAA",gidx:"",v:24,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-detail-c":{pos:"vMtVC7zLVTUAAKvKq8oAAKvKRDRVC7zLq8qqFlU1q8qqFqvKvMtVC0Q0VTWqFlU1VTWqFqvKRDRVC0Q0q8oAAFU1VTUAAFU1",nrm:"AAyCAAyCAAyCAAyCgvQAgvQAgvQAfvQAfvQAfvQAAIEAAIEA",col:"3J53yoRcyoRc3J537biS7biS3J537biS7biS3J53yoRcyoRc",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAAAAAAQAAAAFAAAABAAAAAAAAAAGAAAABQAAAAQAAAAAAAAABgAAAAAAAAAEAAAABwAAAAMAAAAIAAAAAwAAAAcAAAAJAAAACAAAAAMAAAAHAAAACQAAAAcAAAADAAAABwAAAAYAAAAJAAAABgAAAAcAAAAEAAAACQAAAAYAAAAHAAAABAAAAAcAAAAGAAAACgAAAAEAAAALAAAAAQAAAAoAAAACAAAAAAAAAAgAAAADAAAACAAAAAAAAAAFAAAAAwAAAAgAAAAAAAAABQAAAAAAAAAIAAAACgAAAAAAAAACAAAAAAAAAAoAAAAGAAAABgAAAAMAAAAJAAAAAwAAAAYAAAAAAAAACQAAAAMAAAAGAAAAAAAAAAYAAAADAAAACAAAAAQAAAAHAAAABAAAAAgAAAAFAAAABwAAAAQAAAAIAAAABQAAAAgAAAAEAAAACQAAAAoAAAALAAAACgAAAAkAAAAGAAAAAwAAAAsAAAABAAAACwAAAAMAAAAJAAAA",gidx:"",v:12,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-detail-d":{pos:"VTVVC1U1q8oAAFU1VTUAAFU1q8pVC1U1q8pVC6vKq8oAAKvKVTUAAKvKVTVVC6vKVTWqFlU1q8qqFlU1q8qqFqvKVTWqFqvK",nrm:"AAB/AAB/AAB/AAB/gQAAgQAAAIEAAACBAACBAACBfwAAAAB/",col:"+NWsyoRcyoRc+NWs+NWsyoRcyoRc+NWs/ePE/ePE/ePE/ePE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAQAAAAQAAAAFAAAABAAAAAEAAAADAAAAAQAAAAYAAAACAAAABgAAAAEAAAAFAAAABAAAAAYAAAAFAAAABgAAAAQAAAAHAAAAAAAAAAYAAAAHAAAABgAAAAAAAAACAAAAAgAAAAEAAAAAAAAAAwAAAAAAAAABAAAAAAAAAAMAAAAIAAAACQAAAAgAAAADAAAABQAAAAQAAAABAAAAAwAAAAEAAAAEAAAABAAAAAoAAAADAAAACQAAAAMAAAAKAAAAAgAAAAYAAAABAAAABQAAAAEAAAAGAAAAAwAAAAcAAAAAAAAABwAAAAMAAAAEAAAAAAAAAAcAAAADAAAABAAAAAMAAAAHAAAAAwAAAAoAAAAEAAAACgAAAAMAAAAJAAAABQAAAAYAAAAEAAAABwAAAAQAAAAGAAAABwAAAAsAAAAEAAAACgAAAAQAAAALAAAACwAAAAkAAAAIAAAACQAAAAsAAAAKAAAACAAAAAkAAAALAAAACgAAAAsAAAAJAAAACAAAAAcAAAALAAAABwAAAAgAAAAAAAAACwAAAAcAAAAIAAAAAAAAAAgAAAAHAAAABwAAAAYAAAAAAAAAAgAAAAAAAAAGAAAACAAAAAMAAAAAAAAAAwAAAAgAAAAJAAAABAAAAAsAAAAHAAAACwAAAAQAAAAKAAAA",gidx:"",v:12,bb:[-.5,0,-.5,.5,.2125,.5]},"roof-flat-awning-a":{pos:"q8oAAFU1q8qqFqvKq8oAAKvKq8qqFlU1VTUAAFU1VTUAAKvKVTWqFlU1VTWqFqvKq8rvAhFBq8oAACI+q8q8ExFBq8qqFiI+VTWqFiI+VTUAACI+VTXvAhFBVTW8ExFB",nrm:"gQAAgQAAgQAAgQAAAIEAAIEAAH8AAH8AgQAAgQAAgQAAgQAAAH8AAIEAfwAAfwAA",col:"yoRc7biSyoRc7biSyoRcyoRc7biS7biSKJFvH4lrUryEWsSIWsSIH4lrKJFvUryE",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAgAAAAQAAAAAAAAABAAAAAIAAAAFAAAABgAAAAEAAAADAAAAAQAAAAYAAAAHAAAABwAAAAQAAAAFAAAABAAAAAcAAAAGAAAAAgAAAAcAAAAFAAAABwAAAAIAAAABAAAA",gidx:"CAAAAAAAAAAJAAAAAAAAAAgAAAADAAAAAwAAAAgAAAAKAAAAAwAAAAoAAAALAAAADAAAAAMAAAALAAAAAwAAAAwAAAAGAAAACQAAAAQAAAANAAAABAAAAAkAAAAAAAAABgAAAA0AAAAEAAAADQAAAAYAAAAOAAAADgAAAAYAAAAPAAAADwAAAAYAAAAMAAAACgAAAA4AAAAPAAAADgAAAAoAAAAIAAAADwAAAAsAAAAKAAAACwAAAA8AAAAMAAAACAAAAA0AAAAOAAAADQAAAAgAAAAJAAAA",v:16,bb:[-.5,0,-.5,.5,.2125,.61]},"roof-flat-awning-b":{pos:"q8oAAFVNVTUAAFU1VTUAAFVNq8oAAFU1VTUAEVVHVTWqFlU1q8oAEVVHq8qqFlU1q8oAAKvKVTUAAKvKq8qqFqvKVTWqFqvK",nrm:"AIEAAIEAAIEAAIEAfwAAfwAAAFtYAHkmAIEAAIEAgQAAAACB",col:"H4lrH4lrH4lrH4lrSrOAWsSISrOAWsSIyoRcyoRc7biS7biS",idx:"CAAAAAEAAAADAAAAAQAAAAgAAAAJAAAAAwAAAAoAAAAIAAAACgAAAAMAAAAHAAAACAAAAAsAAAAJAAAACwAAAAgAAAAKAAAACwAAAAEAAAAJAAAAAQAAAAsAAAAFAAAABQAAAAoAAAAHAAAACgAAAAUAAAALAAAA",gidx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAQAAAAQAAAACAAAABAAAAAEAAAAFAAAABAAAAAAAAAACAAAAAAAAAAQAAAAGAAAABQAAAAYAAAAEAAAABgAAAAUAAAAHAAAABgAAAAMAAAAAAAAAAwAAAAYAAAAHAAAA",v:12,bb:[-.5,0,-.5,.5,.2125,.725]},"roof-flat-awning-c":{pos:"ACAAAFVNVTUAAFU1VTUAAFVNACAAAFU1VTWqFlU1VTUHEE1GACAHEE1GACCqFlU1q8oAAFU1AOAAAFVNq8oAAFVNAOAAAFU1AOAHEE1Gq8qqFlU1q8oHEE1GAOCqFlU1VfUAAFU1qwoAAFVNVfUAAFVNqwoAAFU1qwoHEE1GVfWqFlU1VfUHEE1GqwqqFlU1VTWqFqvKq8qqFqvKq8oAAKvKVTUAAKvK",nrm:"AIEAAIEAAIEAAIEAfwAAfwAAAFxYAHYuAIEAAIEAAIEAAIEAAFxYAHYuAFxYAHYuAIEAAIEAAIEAAIEAAFxYAHYuAFxYAHYuAH8AAH8AgQAAAACB",col:"tmVFtmVFtmVFtmVF6JBm24Rd24Rd6JBmtmVFtmVFtmVFtmVF24Rd6JBm24Rd6JBmtmVFtmVFtmVFtmVF24Rd6JBm24Rd6JBm7biS7biSyoRcyoRc",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAIAAAABAAAAAgAAAAQAAAAFAAAABAAAAAYAAAAFAAAABgAAAAQAAAAHAAAABQAAAAAAAAACAAAAAAAAAAUAAAAGAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAACgAAAA0AAAAIAAAADQAAAAoAAAAOAAAADgAAAAkAAAAMAAAACQAAAA4AAAAKAAAAEAAAABEAAAASAAAAEQAAABAAAAATAAAAFAAAABUAAAAWAAAAFQAAABQAAAAXAAAAFAAAABIAAAARAAAAEgAAABQAAAAWAAAAGAAAAAcAAAAEAAAABwAAABgAAAAXAAAAFwAAABgAAAAVAAAAFQAAABgAAAAPAAAAGQAAAA8AAAAYAAAADwAAABkAAAANAAAACAAAABkAAAAaAAAAGQAAAAgAAAANAAAAGgAAABgAAAAbAAAAGAAAABoAAAAZAAAAGAAAAAEAAAAbAAAAAQAAABgAAAAEAAAAGgAAAAsAAAAIAAAACwAAABoAAAAQAAAAEAAAABoAAAATAAAAEwAAABoAAAADAAAAGwAAAAMAAAAaAAAAAwAAABsAAAABAAAA",gidx:"AQAAAAIAAAAEAAAABQAAAAQAAAACAAAAEwAAAAAAAAARAAAAAAAAABMAAAADAAAABgAAABcAAAAUAAAAFwAAAAYAAAAHAAAABgAAABEAAAAAAAAAEQAAAAYAAAAUAAAACAAAAA0AAAAKAAAADgAAAAoAAAANAAAACwAAABIAAAAJAAAAEgAAAAsAAAAQAAAAFgAAAA8AAAAMAAAADwAAABYAAAAVAAAAFgAAAAkAAAASAAAACQAAABYAAAAMAAAA",v:28,bb:[-.5,0,-.5,.5,.2125,.725]},"detail-ac-a":{pos:"zQxVC80MM/MAAM0MzQwAAM0MM/NVC80MzQwAADPzM/MAADPzM/NVCzPzzQxVCzPzq/6rCKv+VQGrCFUBVQGrCKv+q/6rCFUBAABVC64HkvpVC24FUvhVCwAAbgVVC24FrgdVCwAAkvpVC5L6AABVC1L4bgVVC5L6UvgABgAAkvoABm4FbgUABpL6rgcABgAAbgUABm4FAAAABq4HkvoABpL6qwIABlX9AAAABlL4qwIABqsCVf0ABlX9Vf0ABqsC",nrm:"AAB/AAB/AAB/AAB/AIEAAIEAAACBAACBAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AfwAAWgCmpgBagQAApgCmAACBWgBaAH8AAH8AAH8AAH8AAH8A",col:"+/v9w8PZw8PZ+/v9w8PZw8PZ+/v9+/v96enx6enx6enx6enx+/v9+/v9+/v9+/v9+/v9+/v9+/v9+/v9Pj5FPj5FPj5FPj5FPj5FPj5FPj5FPj5FPj5FPj5FPj5FPj5F",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAAAQAAAAQAAAACAAAABAAAAAEAAAAFAAAABgAAAAQAAAAFAAAABAAAAAYAAAAHAAAAAAAAAAQAAAAHAAAABAAAAAAAAAACAAAAAQAAAAYAAAAFAAAABgAAAAEAAAADAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAAAwAAAAwAAAANAAAAAwAAAA0AAAAOAAAAAAAAAAwAAAADAAAADAAAAAAAAAAPAAAADwAAAAAAAAAQAAAADgAAAAYAAAADAAAAEQAAAAYAAAAOAAAAEgAAAAYAAAARAAAAEAAAAAAAAAAHAAAAEgAAAAcAAAAGAAAABwAAABMAAAAQAAAAEwAAAAcAAAASAAAADQAAABQAAAAOAAAAFAAAAA0AAAAVAAAAFgAAABAAAAATAAAAEAAAABYAAAAXAAAADAAAABgAAAAZAAAAGAAAAAwAAAAPAAAADgAAABoAAAARAAAAGgAAAA4AAAAUAAAAFgAAABgAAAAXAAAAGAAAABYAAAAbAAAAGwAAABYAAAAcAAAAHQAAABgAAAAbAAAAGwAAABwAAAAeAAAAGAAAAB0AAAAZAAAAHgAAABwAAAAaAAAAGQAAAB0AAAAfAAAAHgAAABoAAAAfAAAAGQAAAB8AAAAVAAAAFQAAAB8AAAAaAAAAFQAAABoAAAAUAAAAHwAAAAgAAAAeAAAACAAAAB8AAAALAAAAHAAAABEAAAAaAAAAEQAAABwAAAASAAAACAAAABsAAAAeAAAAGwAAAAgAAAAKAAAADQAAABkAAAAVAAAAGQAAAA0AAAAMAAAAFwAAAA8AAAAQAAAADwAAABcAAAAYAAAACgAAAB0AAAAbAAAAHQAAAAoAAAAJAAAAHQAAAAsAAAAfAAAACwAAAB0AAAAJAAAAFgAAABIAAAAcAAAAEgAAABYAAAATAAAA",gidx:"",v:32,bb:[-.12,0,-.12,.12,.1062,.12]},"detail-ac-b":{pos:"tPQZEAAAdPKrClUFdPKrCgAAtPQZEFUFzfhVCasCePdVDQAAePcACAAAzfgADKsCkP88BVUF0AGrCgAAkP88BQAA0AGrClUFePtVCasCzfwACAAAIvr9AgAAtPQ8BVUFIvr9AlUFtPQ8BQAAzfxVDQAAePsADKsCIvpZElUFkP8ZEAAAkP8ZEFUFIvpZEgAAiBBVFav6eO9VFVUFiBBVFVUFeO9VFav6iBAAAKv6eO8AAKv6iBAAAFUFeO8AAFUFIvoAAAAIzfRV/QAIIvpV/QAIzfQAAAAIIvpV/av6zfRV/av6zfQAAKv6IvoAAKv6MwsAAAAI3gVV/QAIMwtV/QAI3gUAAAAIMwtV/av63gVV/av63gUAAKv6MwsAAKv6",nrm:"WqYAfwAAfwAAWqYAt7dJt0lJt7dJt0lJploAgQAAploAgQAASbdJSbdJAH8AWloAAH8AWloASUlJSUlJAIEApqYApqYAAIEAAH8AAH8AAH8AAH8AAACBAACBfwAAAIEAAAB/AAB/AAB/AAB/AIEAAIEAAH8AAH8AAAB/AAB/AAB/AAB/AIEAAIEAAH8AAH8A",col:"QkJLPj5FPj5FQkJLPDxDQEBIPDxDPj5FOjpAPj5FOjpAPj5FPDxDPDxDODg9OjpAODg9OjpAQEBIPj5FQkJLQkJLQkJLQkJL+/v9+/v9+/v9+/v9w8PZw8PZw8PZw8PZ+/v9w8PZw8PZ+/v9w8PZw8PZ+/v9+/v9+/v9w8PZw8PZ+/v9w8PZw8PZ+/v9+/v9",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAACAAAAAkAAAAKAAAACQAAAAgAAAALAAAADAAAAAYAAAANAAAABgAAAAwAAAAEAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAAEgAAAAwAAAANAAAADAAAABIAAAATAAAACgAAABAAAAAIAAAAEAAAAAoAAAAOAAAAFAAAABUAAAAWAAAAFQAAABQAAAAXAAAACwAAABUAAAAJAAAAFQAAAAsAAAAWAAAAAgAAAA8AAAARAAAADwAAAAIAAAABAAAABQAAABMAAAASAAAAEwAAAAUAAAAHAAAAAwAAABcAAAAUAAAAFwAAAAMAAAAAAAAACgAAABEAAAAOAAAAEQAAAAoAAAANAAAADQAAAAoAAAAJAAAABgAAABEAAAANAAAADQAAAAkAAAASAAAAEQAAAAYAAAACAAAAEgAAAAkAAAAVAAAAAgAAAAYAAAAFAAAAEgAAABUAAAAFAAAAAgAAAAUAAAAAAAAABQAAABUAAAAAAAAAAAAAABUAAAAXAAAAGAAAABkAAAAaAAAAGQAAABgAAAAbAAAAGwAAABwAAAAdAAAAHAAAABsAAAAYAAAAGAAAAB4AAAAcAAAAHgAAABgAAAAaAAAAEwAAAAQAAAAMAAAABAAAABMAAAAHAAAAHwAAABwAAAAeAAAAHAAAAB8AAAAdAAAAHwAAABsAAAAdAAAAGwAAAB8AAAAZAAAAGQAAAAEAAAADAAAAGQAAAAMAAAAUAAAAHwAAAAEAAAAZAAAAAQAAAB8AAAAPAAAADwAAAB8AAAAQAAAAHgAAABAAAAAfAAAAEAAAAB4AAAAIAAAAGQAAABQAAAAaAAAACAAAAB4AAAAaAAAAFgAAABoAAAAUAAAACAAAABoAAAALAAAACwAAABoAAAAWAAAAIAAAACEAAAAiAAAAIQAAACAAAAAjAAAAIQAAACQAAAAiAAAAJAAAACEAAAAlAAAAJgAAACAAAAAnAAAAIAAAACYAAAAjAAAAIQAAACYAAAAlAAAAJgAAACEAAAAjAAAAJgAAACQAAAAlAAAAJAAAACYAAAAnAAAAJwAAACIAAAAkAAAAIgAAACcAAAAgAAAAKAAAACkAAAAqAAAAKQAAACgAAAArAAAAKQAAACwAAAAqAAAALAAAACkAAAAtAAAALgAAACgAAAAvAAAAKAAAAC4AAAArAAAAKQAAAC4AAAAtAAAALgAAACkAAAArAAAALgAAACwAAAAtAAAALAAAAC4AAAAvAAAALwAAACoAAAAsAAAAKgAAAC8AAAAoAAAA",gidx:"",v:48,bb:[-.155,-.025,-.05,.155,.2,.075]},"steps-narrow":{pos:"q/JVC6o6q/IAAFVFq/JVC1VFq/IAAFU1q/KqFlU1q/KqFqo6q8qqFqvKVTUAAKvKq8oAAKvKVTWqFqvKq8oAAFU1q8qqFlU1AAgAAKpKAPhVC6pKAPgAAKpKAAhVC6pKVQ2qFqo6VQ0AAFU1VQ2qFlU1VQ1VC6o6VQ0AAFVFVQ1VC1VFVTWqFlU1VTUAAFU1AAiqFgBAAPhVCwBAAAhVCwBAAPiqFgBAq/L/S1U1q/KqFqoqq/L/S6oqq8pVWavKq8pVWVU1VTVVWVU1VQ3/S1U1VQ3/S6oqVTVVWavKVQ2qFqoq",nrm:"gQAAgQAAgQAAgQAAgQAAgQAAAACBAACBAACBAACBgQAAgQAAMQB1zwB1zwB1MQB1fwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAMQB1zwB1MQB1zwB1fwAAfwAAfwAAgQAAgQAAAAB/AAB/AIEAfwAAgQAA",col:"3J53yoRc3J53yoRc7biS7biS7biSyoRcyoRc7biSyoRc7biSyoRc3J53yoRc3J537biSyoRc7biS3J53yoRc3J537biSyoRc7biS3J533J537biS+ty49c2d+ty4/ePE/ePE/ePE+ty4+ty4/ePE9c2d",idx:"AAAAAAEAAAACAAAAAAAAAAMAAAABAAAAAwAAAAAAAAAEAAAABQAAAAQAAAAAAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAYAAAAIAAAABgAAAAoAAAALAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAAEAAAABEAAAASAAAAEQAAABAAAAATAAAAEQAAABMAAAAUAAAAFAAAABMAAAAVAAAAFgAAAAcAAAAJAAAABwAAABYAAAAXAAAADAAAABEAAAAUAAAACAAAABEAAAAMAAAABwAAABEAAAAIAAAAEQAAAAcAAAAXAAAACAAAAAwAAAADAAAACAAAAAMAAAAKAAAAAwAAAAwAAAAOAAAAAQAAAAMAAAAOAAAAFgAAABEAAAAXAAAAEQAAABYAAAASAAAAGAAAABkAAAAaAAAAGQAAABgAAAAbAAAABAAAAAoAAAADAAAACgAAAAQAAAALAAAACQAAABIAAAAWAAAAEgAAAAkAAAAGAAAAEgAAAAYAAAAYAAAAGAAAABAAAAASAAAAGAAAAAYAAAAbAAAAGwAAAAYAAAAEAAAAGwAAAAQAAAAFAAAABAAAAAYAAAALAAAAEwAAAA8AAAAVAAAADwAAABMAAAAaAAAADwAAABoAAAANAAAADQAAABoAAAAZAAAADQAAABkAAAAAAAAADQAAAAAAAAACAAAADgAAAAIAAAABAAAAAgAAAA4AAAANAAAADwAAABQAAAAVAAAAFAAAAA8AAAAMAAAAGAAAABMAAAAQAAAAEwAAABgAAAAaAAAAGQAAAAUAAAAAAAAABQAAABkAAAAbAAAAHAAAAB0AAAAeAAAAHQAAABwAAAAEAAAACwAAAB8AAAAGAAAAHwAAAAsAAAAgAAAAIQAAABIAAAAWAAAAEgAAACEAAAAiAAAAIgAAACEAAAAcAAAAIAAAABwAAAAhAAAACwAAABwAAAAgAAAAHAAAAAsAAAAEAAAAHAAAACMAAAAiAAAAIwAAABwAAAAeAAAAIQAAAAkAAAAkAAAACQAAACEAAAAWAAAAJAAAACAAAAAhAAAAIAAAACQAAAAfAAAABgAAACQAAAAJAAAAJAAAAAYAAAAfAAAAEgAAACMAAAAlAAAAIwAAABIAAAAiAAAA",gidx:"IwAAAB0AAAAlAAAAHQAAACMAAAAeAAAA",v:38,bb:[-.5,0,-.5,.5,.8375,.7]},"steps-wide":{pos:"q8qqFgDAVTUAAADAq8oAAADAVTWqFgDAq8oAAKoqq8qqFqoqVTWqFqoqqiIAAKoqVTUAAKoqqiJVC6oqABhVC6oqABiqFqoqqiJVC6o6qiIAAKo6qxKqFlU1Ve1VC1U1qxJVC1U1Ve2qFlU1Vt0AAKo6Vt1VC6oqVt0AAKoqVt1VC6o6AOhVCwAwAOiqFqoqAOhVC6oqAOiqFgAwABiqFgAwABhVCwAwVR0AAABAq+JVCwBAq+IAAABAVR1VCwBAVTVVWaoqVTVVWQDAVQ2qFqoqVQ3/S6oqq/L/S6oqq8pVWaoqq/KqFqoqq8pVWQDAq/KqFgAgq/L/SwAgVQ3/SwAgVQ2qFgAg",nrm:"AACBAACBAACBAACBgQAAgQAAAAB/AAB/AAB/AAB/AAB/AAB/dQAxdQAxMQB1zwB1MQB1zwB1iwAxgQAAgQAAiwAxiwAxgQAAgQAAiwAxdQAxdQAxMQB1zwB1zwB1MQB1fwAAfwAAAAB/AAB/AAB/AAB/AAB/AH8AfwAAfwAAgQAAgQAA",col:"7biSyoRcyoRc7biSyoRc7biS7biSyoRcyoRc3J533J537biS3J53yoRc7biS3J533J537biSyoRc3J53yoRc3J533J537biS3J537biS7biS3J53yoRc3J53yoRc3J53/ePE/ePE9c2d+ty4+ty4/ePE9c2d/ePE9c2d+ty4+ty49c2d",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAAAAAACAAAAAAAAAAQAAAAFAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACQAAAAYAAAAKAAAACgAAAAYAAAALAAAADAAAAAcAAAAJAAAABwAAAAwAAAANAAAADgAAAA8AAAAQAAAADwAAAA4AAAARAAAAEgAAABMAAAAUAAAAEwAAABIAAAAVAAAAFgAAABcAAAAYAAAAFwAAABYAAAAZAAAAGgAAAAoAAAALAAAACgAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHQAAABwAAAAfAAAAEwAAAAQAAAAUAAAABAAAABMAAAAFAAAABQAAABMAAAAYAAAABQAAABgAAAAXAAAABgAAAAEAAAADAAAAAQAAAAYAAAAIAAAAHAAAAAcAAAANAAAAAgAAAAcAAAAcAAAAAgAAABwAAAAeAAAAAQAAAAcAAAACAAAABwAAAAEAAAAIAAAAAgAAAB4AAAAUAAAAFAAAAB4AAAASAAAAAgAAABQAAAAEAAAACQAAAB8AAAAMAAAAHwAAAAkAAAAKAAAAHwAAAAoAAAAbAAAAEAAAAB8AAAAbAAAAHwAAABAAAAAdAAAAHQAAABAAAAAPAAAAHQAAAA8AAAAWAAAAHQAAABYAAAAYAAAAHQAAABgAAAATAAAAHQAAABMAAAAVAAAAAwAAAAsAAAAGAAAACwAAAAMAAAAAAAAACwAAAAAAAAAOAAAADgAAABoAAAALAAAADgAAAAAAAAARAAAAEQAAAAAAAAAXAAAAEQAAABcAAAAZAAAAFwAAAAAAAAAFAAAAHgAAABUAAAASAAAAFQAAAB4AAAAdAAAAFgAAABEAAAAZAAAAEQAAABYAAAAPAAAADgAAABsAAAAaAAAAGwAAAA4AAAAQAAAAHwAAAA0AAAAMAAAADQAAAB8AAAAcAAAAIAAAAAMAAAAhAAAAAwAAACAAAAAGAAAAIAAAACIAAAAGAAAAIgAAACAAAAAjAAAAIwAAACAAAAAkAAAAJQAAACQAAAAgAAAABQAAACQAAAAlAAAAJAAAAAUAAAAmAAAAIQAAACUAAAAgAAAAJQAAACEAAAAnAAAABQAAACcAAAAAAAAAJwAAAAUAAAAlAAAAJAAAACgAAAApAAAAKAAAACQAAAAmAAAAAAAAACEAAAADAAAAIQAAAAAAAAAnAAAAIgAAACoAAAArAAAAKgAAACIAAAAjAAAAJAAAACoAAAAjAAAAKgAAACQAAAApAAAA",gidx:"KgAAACgAAAArAAAAKAAAACoAAAApAAAA",v:44,bb:[-.5,0,-.6,.5,.8375,.6]},"steps-narrow-windows":{pos:"q/L/S1U1q/KqFqoqq/L/S6oqq/KqFlU1q8qqFlU1q8pVWavKq8qqFqvKq8pVWVU1VQ3/S6oqVQ3/S1U1VTVVWVU1VTWqFqvKVTVVWavKVTWqFlU1VQ2qFlU1VQ2qFqoqq+gAH6oqq9QAH1U1q+gAH1U1q9QAH6oqVSsAH6oqVRcAH1U1VSsAH1U1VRcAH6oqq+j/S6oqq+j/S1U1q9T/S1U1q9T/S6oqVRf/S6oqVRf/S1U1VSv/S6oqVSv/S1U1q/JVC6o6q/IAAFVFq/JVC1VFq/IAAFU1q/KqFqo6VTUAAKvKq8oAAKvKq8oAAFU1AAgAAKpKAPhVC6pKAPgAAKpKAAhVC6pKVQ2qFqo6VQ0AAFU1VQ1VC6o6VQ0AAFVFVQ1VC1VFVTUAAFU1AAiqFgBAAPhVCwBAAAhVCwBAAPiqFgBA",nrm:"fwAAfwAAfwAAfwAAgQAAgQAAgQAAgQAAAIEAAIEAfwAAfwAAfwAAfwAAgQAAgQAAAH8AAH8AAH8AAH8AAH8AAH8AAH8AAH8AgQAAgQAAAIEAAIEAfwAAfwAAgQAAgQAAgQAAgQAAgQAAgQAAgQAAAACBAACBgQAAMQB1zwB1zwB1MQB1fwAAfwAAfwAAfwAAfwAAfwAAMQB1zwB1MQB1zwB1",col:"+ty49c2d+ty49c2d9c2d/ePE9c2d/ePE+ty4+ty4/ePE9c2d/ePE9c2d9c2d9c2d9s+i9s+i9s+i9s+i9s+i9s+i9s+i9s+i+ty4+ty4+ty4+ty4+ty4+ty4+ty4+ty43J53yoRc3J53yoRc7biSyoRcyoRcyoRcyoRc3J53yoRc3J537biSyoRc3J53yoRc3J53yoRc7biS3J533J537biS",idx:"AAAAAAEAAAACAAAAAQAAAAAAAAADAAAABAAAAAUAAAAGAAAABQAAAAQAAAAHAAAAAAAAAAgAAAAJAAAACAAAAAAAAAACAAAACgAAAAsAAAAMAAAACwAAAAoAAAANAAAADAAAAAcAAAAKAAAABwAAAAwAAAAFAAAABgAAAAwAAAALAAAADAAAAAYAAAAFAAAADgAAAAgAAAAPAAAACAAAAA4AAAAJAAAAEAAAABEAAAASAAAAEQAAABAAAAATAAAAFAAAABUAAAAWAAAAFQAAABQAAAAXAAAAEgAAABgAAAAQAAAAGAAAABIAAAAZAAAAGgAAABgAAAAZAAAAGAAAABoAAAAbAAAAHAAAABUAAAAXAAAAFQAAABwAAAAdAAAAFgAAAB4AAAAUAAAAHgAAABYAAAAfAAAAHQAAAB4AAAAfAAAAHgAAAB0AAAAcAAAAGgAAABMAAAAbAAAAEwAAABoAAAARAAAAAwAAABIAAAAEAAAAEgAAAAMAAAAAAAAAEQAAAAQAAAASAAAABAAAABEAAAAHAAAABwAAABEAAAAaAAAABwAAABoAAAAKAAAAEgAAAAAAAAAZAAAAGQAAAAoAAAAaAAAAAAAAAAoAAAAZAAAACQAAAAoAAAAAAAAAHQAAAAoAAAAJAAAACQAAABUAAAAdAAAAHwAAAAoAAAAdAAAAFQAAAAkAAAAOAAAAFgAAAAoAAAAfAAAADgAAABYAAAAVAAAAFgAAAA0AAAAKAAAADQAAABYAAAAOAAAAIAAAACEAAAAiAAAAIAAAACMAAAAhAAAAIwAAACAAAAADAAAAJAAAAAMAAAAgAAAABgAAACUAAAAmAAAAJQAAAAYAAAALAAAAJwAAAAYAAAAmAAAABgAAACcAAAAEAAAAKAAAACkAAAAqAAAAKQAAACgAAAArAAAALAAAAC0AAAAOAAAALQAAACwAAAAuAAAALQAAAC4AAAAvAAAALwAAAC4AAAAwAAAADQAAACUAAAALAAAAJQAAAA0AAAAxAAAAKAAAAC0AAAAvAAAAJgAAAC0AAAAoAAAAJQAAAC0AAAAmAAAALQAAACUAAAAxAAAAJgAAACgAAAAjAAAAJgAAACMAAAAnAAAAIwAAACgAAAAqAAAAIQAAACMAAAAqAAAADQAAAC0AAAAxAAAALQAAAA0AAAAOAAAAMgAAADMAAAA0AAAAMwAAADIAAAA1AAAAAwAAACcAAAAjAAAAJwAAAAMAAAAEAAAACwAAAA4AAAANAAAADgAAAAsAAAAGAAAADgAAAAYAAAAyAAAAMgAAACwAAAAOAAAAMgAAAAYAAAA1AAAANQAAAAYAAAADAAAANQAAAAMAAAAkAAAAAwAAAAYAAAAEAAAALgAAACsAAAAwAAAAKwAAAC4AAAA0AAAAKwAAADQAAAApAAAAKQAAADQAAAAzAAAAKQAAADMAAAAgAAAAKQAAACAAAAAiAAAAKgAAACIAAAAhAAAAIgAAACoAAAApAAAAKwAAAC8AAAAwAAAALwAAACsAAAAoAAAAMgAAAC4AAAAsAAAALgAAADIAAAA0AAAAMwAAACQAAAAgAAAAJAAAADMAAAA1AAAA",gidx:"CAAAAAEAAAAPAAAAAQAAAAgAAAACAAAAGAAAABMAAAAQAAAAEwAAABgAAAAbAAAAFAAAABwAAAAXAAAAHAAAABQAAAAeAAAA",v:54,bb:[-.5,0,-.5,.5,.8375,.7]},"steps-narrow-windows-round":{pos:"q/JVCwAwq/IAAKo6q/JVC6o6q/IAAKoqq/KqFqoqq/KqFgAwq8qqFgDAVTUAAADAq8oAAADAVTWqFgDAq8oAAKoqq8qqFqoqAAgAAABAAPhVCwBAAPgAAABAAAhVCwBAVQ2qFgAwVQ0AAKoqVQ2qFqoqVQ1VCwAwVQ0AAKo6VQ1VC6o6VTWqFqoqVTUAAKoqAAiqFlU1APhVC1U1AAhVC1U1APiqFlU1q/L/S6oqq/KqFgAgq/L/SwAgq8pVWQDAq8pVWaoqVQ3/SwAgVQ3/S6oqVTVVWaoqVTVVWQDAVQ2qFgAgq+gAH6oqq+j/QQAgq+gAHwAgq+j/Qaoqq9QAH6oqq9QAHwAgq9T/Qaoqq9T/QQAgmdcSSaoqq97/SwAgq97/S6oqmdcSSQAgveUSSQAgveUSSaoqVSsAHwAgVRcAH6oqVSsAH6oqVRcAHwAgVSv/QQAgVSv/QaoqQxoSSaoqVRf/QQAgQxoSSQAgVRf/QaoqVSH/SwAgVSH/S6oqZygSSQAgZygSSaoq",nrm:"gQAAgQAAgQAAgQAAgQAAgQAAAACBAACBAACBAACBgQAAgQAAMQB1zwB1zwB1MQB1fwAAfwAAfwAAfwAAfwAAfwAAfwAAfwAAMQB1zwB1MQB1zwB1fwAAfwAAfwAAgQAAgQAAAIEAAIEAfwAAfwAAgQAAgQAAgQAAgQAAgQAAAH8AAH8AfwAAfwAAWqYAAIEAAIEAWqYApqYApqYAAH8AAH8AAH8AAH8AgQAAgQAAWqYAdc8AWqYAdc8AAIEAAIEApqYApqYA",col:"3J53yoRc3J53yoRc7biS7biS7biSyoRcyoRc7biSyoRc7biSyoRc3J53yoRc3J537biSyoRc7biS3J53yoRc3J537biSyoRc7biS3J533J537biS+ty49c2d+ty4/ePE/ePE+ty4+ty4/ePE/ePE9c2d9s+i+dix9s+i+dix9s+i9s+i+dix+dix+ty4+ty4+ty4+ty4+ty4+ty49s+i9s+i9s+i9s+i+dix+dix+ty4+dix+ty4+dix+ty4+ty4+ty4+ty4",idx:"AAAAAAEAAAACAAAAAAAAAAMAAAABAAAAAwAAAAAAAAAEAAAABQAAAAQAAAAAAAAABgAAAAcAAAAIAAAABwAAAAYAAAAJAAAACgAAAAYAAAAIAAAABgAAAAoAAAALAAAADAAAAA0AAAAOAAAADQAAAAwAAAAPAAAAEAAAABEAAAASAAAAEQAAABAAAAATAAAAEQAAABMAAAAUAAAAFAAAABMAAAAVAAAAFgAAAAcAAAAJAAAABwAAABYAAAAXAAAADAAAABEAAAAUAAAACAAAABEAAAAMAAAABwAAABEAAAAIAAAAEQAAAAcAAAAXAAAACAAAAAwAAAADAAAACAAAAAMAAAAKAAAAAwAAAAwAAAAOAAAAAQAAAAMAAAAOAAAAFgAAABEAAAAXAAAAEQAAABYAAAASAAAAGAAAABkAAAAaAAAAGQAAABgAAAAbAAAABAAAAAoAAAADAAAACgAAAAQAAAALAAAACQAAABIAAAAWAAAAEgAAAAkAAAAGAAAAEgAAAAYAAAAYAAAAGAAAABAAAAASAAAAGAAAAAYAAAAbAAAAGwAAAAYAAAAEAAAAGwAAAAQAAAAFAAAABAAAAAYAAAALAAAAEwAAAA8AAAAVAAAADwAAABMAAAAaAAAADwAAABoAAAANAAAADQAAABoAAAAZAAAADQAAABkAAAAAAAAADQAAAAAAAAACAAAADgAAAAIAAAABAAAAAgAAAA4AAAANAAAADwAAABQAAAAVAAAAFAAAAA8AAAAMAAAAGAAAABMAAAAQAAAAEwAAABgAAAAaAAAAGQAAAAUAAAAAAAAABQAAABkAAAAbAAAAHAAAAB0AAAAeAAAAHQAAABwAAAAEAAAACwAAAB8AAAAGAAAAHwAAAAsAAAAgAAAAHAAAACEAAAAiAAAAIQAAABwAAAAeAAAAIwAAAAkAAAAkAAAACQAAACMAAAAWAAAAJAAAACAAAAAjAAAAIAAAACQAAAAfAAAABgAAACQAAAAJAAAAJAAAAAYAAAAfAAAAEgAAACEAAAAlAAAAIQAAABIAAAAiAAAAJgAAACcAAAAoAAAAJwAAACYAAAApAAAAKAAAACoAAAAmAAAAKgAAACgAAAArAAAALAAAACsAAAAtAAAAKwAAACwAAAAqAAAALgAAAC8AAAAwAAAALwAAAC4AAAAxAAAALgAAAC0AAAAxAAAALQAAAC4AAAAsAAAAMAAAADIAAAAzAAAAMgAAADAAAAAvAAAAKQAAADIAAAAnAAAAMgAAACkAAAAzAAAANAAAADUAAAA2AAAANQAAADQAAAA3AAAANgAAADgAAAA0AAAAOAAAADYAAAA5AAAAOgAAADsAAAA8AAAAOwAAADoAAAA9AAAAPQAAADcAAAA7AAAANwAAAD0AAAA1AAAAOgAAAD4AAAA/AAAAPgAAADoAAAA8AAAAPwAAAEAAAABBAAAAQAAAAD8AAAA+AAAAOQAAAEAAAAA4AAAAQAAAADkAAABBAAAABAAAACYAAAALAAAAJgAAAAQAAAAcAAAAKgAAAAsAAAAmAAAAJgAAABwAAAApAAAACwAAACoAAAAgAAAAKQAAABwAAAAzAAAAIAAAACoAAAAsAAAAIAAAACwAAAAuAAAAIAAAAC4AAAAwAAAAMwAAABwAAAAwAAAAIAAAADAAAAAjAAAAHAAAACMAAAAwAAAAIgAAACMAAAAcAAAAPwAAACMAAAAiAAAAIgAAADoAAAA/AAAAIgAAAD0AAAA6AAAAIgAAADUAAAA9AAAANQAAACIAAAASAAAAQQAAACMAAAA/AAAAOQAAACMAAABBAAAAEgAAADYAAAA1AAAANgAAACMAAAA5AAAAFgAAADYAAAASAAAANgAAABYAAAAjAAAA",gidx:"IQAAAB0AAAAlAAAAHQAAACEAAAAeAAAAJwAAACsAAAAoAAAAKwAAACcAAAAtAAAALQAAACcAAAAyAAAALQAAADIAAAAxAAAAMQAAADIAAAAvAAAANAAAADsAAAA3AAAAOwAAADQAAAA4AAAAOwAAADgAAABAAAAAOwAAAEAAAAA8AAAAPAAAAEAAAAA+AAAA",v:66,bb:[-.5,0,-.6,.5,.8375,.6]}},fo={quant:e0,pieces:A0},rl=1,po=.625,i0=32767/fo.quant.range,Br=new Gt,ol=new MA,al=new C,ll=new C,hs=new rt,n0=new C(0,1,0),s0=(()=>{const n=new Float32Array(256);for(let t=0;t<256;t++){const e=t/255;n[t]=e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}return n})();function us(n,t){const e=atob(n),A=new Uint8Array(e.length);for(let i=0;i<e.length;i++)A[i]=e.charCodeAt(i);return new t(A.buffer)}function cl(n,t){const e=fo.pieces[n];if(!e)return null;const A=t?e.gidx:e.idx;if(!A)return null;const i=us(A,Uint32Array);if(i.length===0)return null;const s=us(e.pos,Int16Array),r=us(e.nrm,Int8Array),o=e.v,a=new Float32Array(o*3),l=new Float32Array(o*3);for(let f=0;f<a.length;f++)a[f]=s[f]/i0;for(let f=0;f<l.length;f++)l[f]=r[f]/127;const c=new Pe;c.setAttribute("position",new ne(a,3)),c.setAttribute("normal",new ne(l,3));const h=us(e.col,Uint8Array),u=new Float32Array(h.length);for(let f=0;f<h.length;f++)u[f]=s0[h[f]];return c.setAttribute("color",new ne(u,3)),c.setIndex(new ne(i,1)),c}const ys=new Map;function r0(n){let t=ys.get(n);return t||(t={solid:cl(n,!1),glass:cl(n,!0),bb:fo.pieces[n].bb},ys.set(n,t)),t}function _e(n,t,e,A,i,s=0){const r=r0(t);if(r){if(ol.setFromAxisAngle(n0,s*Math.PI/2),al.set(e*rl,A*po,i*rl),ll.set(1,1,1),Br.compose(al,ol,ll),r.solid){const o=r.solid.clone();o.applyMatrix4(Br),n.solid.push(o)}if(r.glass){const o=r.glass.clone();o.applyMatrix4(Br),n.glass.push(o)}}}function o0(n,t,e,A,i){const r=i/1;for(let o=0;o<1;o++){const l=new xA(.05,.06,r,3);l.translate(t,e+(o+.5)*r,A),hs.setHex(7042692).convertSRGBToLinear();const c=new Float32Array(l.attributes.position.count*3);for(let h=0;h<c.length;h+=3)c[h]=hs.r,c[h+1]=hs.g,c[h+2]=hs.b;l.setAttribute("color",new ne(c,3)),l.deleteAttribute("uv"),n.solid.push(l)}}const wi=["block","corner"],bs=["window","window-wide","window-sill","window-left","window-right","window-large","window-balcony","window-awnings"],a0=["windows","windows-sills","windows-high-middle","window-large-left","window-large-middle","window-large-right"],Sc=["corner-window","corner-window-middle","corner-window-narrow"],l0=["corner-window-top-round","corner-window-top-square"],c0=["corner","corner-bottom","corner-top"],Yr=["door","door-window","edges-door","door-window-narrow"],hl=["roof-flat-top","roof-flat-center","roof-flat-corner","roof-flat-corner-high"],yc=["roof-flat-detail-a","roof-flat-detail-b","roof-flat-detail-c","roof-flat-detail-d"],Xr=["detail-ac-a","detail-ac-b"],$t=n=>n[Math.random()*n.length|0],aA=n=>Math.random()<n;function h0(n,t){const e=Math.max(n,t),A=1.6+Math.random()*2.4,i=Math.round(e*A/po);return Math.max(4,Math.min(22,i))}const ke={plusZ:0,plusX:1,minusZ:2,minusX:3};function ul(){const n={solid:[],glass:[]},t=1+(Math.random()*3|0),e=2+(Math.random()*2|0),A=1+(Math.random()*2|0),i=(t-1)/2,s=(e-1)/2;for(let l=0;l<A;l++)for(let c=0;c<t;c++)for(let h=0;h<e;h++){const u=c-i,f=h-s,m=h===0,v=c===0||c===t-1,p=!m&&!v;let d,g=ke.plusZ;if(p)d="block";else if(l===0&&m){const _=Math.random();_<.3?(d=$t(Yr),g=ke.minusZ):_<.68?(d=$t(["window-awnings","window-large","window-balcony","window-wide"]),g=ke.minusZ):_<.84?(d=$t(["window-sill","windows","window"]),g=ke.minusZ):d=$t(wi)}else l===0?(d=aA(.3)?$t(bs):$t(wi),wi.includes(d)||(g=v?ke.plusX:ke.plusZ)):m&&v?(d=$t(Sc),g=c===0?ke.minusX:ke.plusX):m?(d=$t(["window-sill","window-left-sill","window-right-sill","window-balcony","window-wide-sill","windows-sills"]),g=ke.minusZ):v?(d=aA(.45)?$t(bs):$t(wi),wi.includes(d)||(g=c===0?ke.minusX:ke.plusX)):d="block";_e(n,d,u,l,f,g)}const r=A;_e(n,"roof-flat-border-straight",0,r,-s-.5,ke.minusZ),_e(n,"roof-flat-border-straight",0,r,s+.5,ke.plusZ),_e(n,"roof-flat-border-side",-i-.5,r,0,ke.minusX),_e(n,"roof-flat-border-side",i+.5,r,0,ke.plusX);for(let l=0;l<t;l++)for(let c=0;c<e;c++)_e(n,"roof-flat-center",l-i,r,c-s);if(aA(.65)&&_e(n,$t(Xr),(Math.random()-.5)*t,r+.18,(Math.random()-.5)*e),aA(.35)&&_e(n,$t(yc),(Math.random()-.5)*t,r,(Math.random()-.5)*e),n.solid.length===0&&n.glass.length===0)return null;const o=wA(n.solid,!1),a=n.glass.length?wA(n.glass,!1):null;for(const l of n.solid)l.dispose();for(const l of n.glass)l.dispose();return o&&o.computeBoundingBox(),{solid:o,glass:a}}function dl(){const n={solid:[],glass:[]},t=$t([{cols:1,rows:1},{cols:2,rows:1},{cols:2,rows:2},{cols:3,rows:2},{cols:1,rows:2},{cols:3,rows:3}]),e=$t(["slab","setback","tapered","podium","spire"]);let A=h0(t.cols,t.rows);const i=e==="setback"?A*(.5+Math.random()*.3):1/0,s=e==="tapered",r=e==="podium"&&(t.cols>1||t.rows>1)?2+(Math.random()*3|0):0,o=d=>{let g=t.cols,_=t.rows;if(d>=i&&(g=Math.max(1,t.cols-1),_=Math.max(1,t.rows-1)),s){const E=(d-A*.45)/(A*.55),R=E>0?Math.floor(E*t.cols*.7):0;g=Math.max(1,t.cols-R),_=Math.max(1,t.rows-R)}return{cols:g,rows:_}};for(let d=0;d<A;d++){const g=d,{cols:_,rows:E}=o(d),R=d<r,b=R?t.cols:_,T=R?t.rows:E,V=e==="slab"?.12:s?.28:.2;for(let w=0;w<b;w++)for(let S=0;S<T;S++){const q=w-(b-1)/2,H=S-(T-1)/2,j=w===0||w===b-1,P=S===0||S===T-1,L=j&&P,Q=!j&&!P;let z;const G=0;if(Q)z="block";else if(L)d===0?z=$t(Yr):d===A-1?z=$t(l0):aA(.18)?z=$t(c0):z=$t(Sc);else if(d===0)z=aA(.5)?$t(Yr):aA(.5)?$t(bs):$t(wi);else if(aA(V))z=$t(wi);else{const W=d>A*.55&&aA(.45);z=$t(W?a0:bs)}_e(n,z,q,g,H,G)}}const a=A,l=o(A-1),c=l.cols,h=l.rows,u=(c-1)/2,f=(h-1)/2,m=e==="spire"?"spire":$t(["flat","cap","parapet","parapet"]);if(m==="flat")for(let d=0;d<c;d++)for(let g=0;g<h;g++)_e(n,$t(hl),d-u,a,g-f);else if(m==="cap"){const d=Math.max(1,c-1),g=Math.max(1,h-1);for(let _=0;_<c;_++)for(let E=0;E<h;E++)_e(n,"roof-flat-border-straight",_-u,a,E-f);for(let _=0;_<d;_++)for(let E=0;E<g;E++)_e(n,$t(hl),_-(d-1)/2,a+.35,E-(g-1)/2);aA(.6)&&_e(n,$t(Xr),(Math.random()-.5)*d,a+.5,(Math.random()-.5)*g)}else if(m==="parapet"){_e(n,"roof-flat-border-straight",0,a,-f-.5),_e(n,"roof-flat-border-straight",0,a,f+.5,2),_e(n,"roof-flat-border-side",-u-.5,a,0,1),_e(n,"roof-flat-border-side",u+.5,a,0,1);for(let d=0;d<c;d++)for(let g=0;g<h;g++)_e(n,"roof-flat-center",d-u,a,g-f);aA(.7)&&_e(n,$t(Xr),(Math.random()-.5)*c,a+.18,(Math.random()-.5)*h),aA(.4)&&_e(n,$t(yc),(Math.random()-.5)*c,a,(Math.random()-.5)*h)}else{const d=2+Math.random()*5;_e(n,"roof-flat-top",0,a,0),o0(n,0,a*po+.15,0,d)}if(n.solid.length===0&&n.glass.length===0)return null;const v=wA(n.solid,!1),p=n.glass.length?wA(n.glass,!1):null;for(const d of n.solid)d.dispose();for(const d of n.glass)d.dispose();return v&&v.computeBoundingBox(),{solid:v,glass:p}}function u0(n=6){const t=[];for(let e=0;e<n*3&&t.length<n;e++){const A=dl();A&&t.push(A)}for(;t.length<n;)t.push(dl());return t}function d0(n=6){const t=[];for(let e=0;e<n*3&&t.length<n;e++){const A=ul();A&&t.push(A)}for(;t.length<n;)t.push(ul());return t}function f0(){for(const n of ys.values())n.solid&&n.solid.dispose(),n.glass&&n.glass.dispose();ys.clear()}const Rr=new Gt,CA=new rt,p0={x:0,y:1,z:0};function bc(n,t){const e=n.attributes.position.count,A=new Float32Array(e*3);CA.set(t);for(let i=0;i<e;i++)A[i*3]=CA.r,A[i*3+1]=CA.g,A[i*3+2]=CA.b;return n.setAttribute("color",new ne(A,3)),n}function Se(n,t,e,A,i,s,r,o,a=0){const l=new ce(t,e,A);return Rr.makeRotationY(a),Rr.setPosition(i,s,r),l.applyMatrix4(Rr),bc(l,o),n.push(l),l}function Pr(n,t,e,A,i,s,r,o,a,l=[0,0,0]){const c=new xA(t,e,A,i),h=new Gt().makeRotationFromEuler(new bi(l[0],l[1],l[2]));return h.setPosition(s,r,o),c.applyMatrix4(h),bc(c,a),n.push(c),c}function Ki(n){const t=wA(n,!1);for(const e of n)e.dispose();return t}const Yi=4477277,VA=6516861,Dr=9082788,m0={gantry:()=>{const n=[];for(const t of[-1,1])Se(n,1.2,22,1.2,t*9,11,0,VA),Se(n,1,16,1,t*9,8,7,VA);return Se(n,22,1.6,2.2,0,22.5,0,Dr),Se(n,26,1,1.4,0,24.5,5.5,VA),Se(n,2.4,2,2.4,0,21.4,5.5,Yi),Ki(n)},shophouse:()=>{const n=[];Se(n,11,14,9,0,7,0,7036022),Se(n,11.6,.7,9.6,0,13.6,0,5458270);for(let t=0;t<3;t++)Se(n,11.6,.35,2.2,0,3+t*3.6,-5.2,Dr);return Ki(n)},silos:()=>{const n=[];for(let t=-1;t<=1;t++)Pr(n,2.4,2.4,15,12,t*5.4,7.5,0,Dr),Pr(n,.1,2.5,2.2,12,t*5.4,16,0,VA);Se(n,16,1.4,2,0,15.5,3.2,VA);for(let t=-1;t<=1;t++)Se(n,.5,5,.5,t*5.4,17.5,3.2,Yi);return Ki(n)},bulkhead:()=>{const n=[];Se(n,34,1.8,2.4,0,15,0,VA),Se(n,34,1,1.2,0,13.2,0,Yi);for(const t of[-1,1])Se(n,2.4,15,2.4,t*15.5,7.5,0,VA),Pr(n,1.6,1.6,3,10,t*15.5,2.5,0,Yi);return Ki(n)},pylon:()=>{const n=[];Se(n,2,20,2,0,10,0,7105660),Se(n,18,1.6,1.8,0,19.5,0,7105660);for(const t of[-1,1])Se(n,1.2,8,1.2,t*7,15.5,0,Yi);return Ki(n)},billboard:()=>{const n=[];return Se(n,1,14,1,-5,7,0,VA),Se(n,1,14,1,5,7,0,VA),Se(n,13,6.5,.5,0,13,0,Yi),Ki(n)}};class g0{constructor(t,e=42,A=7){this.count=e,this.group=new jt,this.group.position.y=-9,t.add(this.group);const i=new ae({vertexColors:!0,roughness:.88,metalness:.06,color:new rt(9214374)}),s=new ae({vertexColors:!0,emissive:new rt(16767400),emissiveIntensity:1.15,roughness:.32,metalness:.2});this.materials=[i,s];const r=u0(A);this.variants=[],this.capacity=[],this.entries=[],r.forEach((o,a)=>{const l=Math.max(2,Math.ceil(e/r.length)),c=new li(o.solid,i,l);c.instanceMatrix.setUsage(ai),c.frustumCulled=!1,c.castShadow=!1,c.receiveShadow=!1,this.group.add(c);let h=null;o.glass&&(h=new li(o.glass,s,l),h.instanceMatrix.setUsage(ai),h.frustumCulled=!1,h.castShadow=!1,h.receiveShadow=!1,this.group.add(h)),this.variants.push({wall:c,glass:h}),this.capacity.push(l)}),this._matrix=new Gt,this._quat=new MA,this._scale=new C,this._pos=new C,this._placeCursor=0;for(let o=0;o<e;o++)this.entries.push(this._makeEntry());this.refresh()}_makeEntry(){const t=Math.random()*this.variants.length|0,e=Math.random()<.5?-1:1,A=Math.floor(this._placeCursor);this._placeCursor+=.28+Math.random()*.85;const i=A%3===2,s=e*(58+Math.random()*82+A*5),r=i?1.15+Math.random()*.7:1.6+Math.random()*1.6;return{meshIndex:t,x:s,y:0,z:-30-Math.random()*420,scale:r,rotY:Math.random()*Math.PI*2,tint:.6+Math.random()*.55}}update(t){const e=t*.25,A=60;for(const i of this.entries)if(i.z+=e,i.z>A){const s=this._makeEntry();i.meshIndex=s.meshIndex,i.x=s.x,i.scale=s.scale,i.rotY=s.rotY,i.tint=s.tint,i.z=-460-Math.random()*40}this.refresh()}refresh(){const t=this.variants.map(()=>0);for(const e of this.entries){const A=e.meshIndex,i=t[A];if(i>=this.capacity[A])continue;t[A]++,this._pos.set(e.x,e.y,e.z),this._quat.setFromAxisAngle({x:0,y:1,z:0},e.rotY),this._scale.setScalar(e.scale),this._matrix.compose(this._pos,this._quat,this._scale);const{wall:s,glass:r}=this.variants[A];s.setMatrixAt(i,this._matrix),r&&r.setMatrixAt(i,this._matrix),CA.setScalar(e.tint),s.setColorAt(i,CA),r&&r.setColorAt(i,CA)}for(let e=0;e<this.variants.length;e++){const{wall:A,glass:i}=this.variants[e];A.count=t[e],A.instanceMatrix.needsUpdate=!0,A.instanceColor&&(A.instanceColor.needsUpdate=!0),i&&(i.count=t[e],i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0))}}setVisible(t){this.group.visible=t}dispose(){for(const{wall:t,glass:e}of this.variants)t.removeFromParent(),t.geometry.dispose(),e&&(e.removeFromParent(),e.geometry.dispose());for(const t of this.materials)t.dispose();this.group.removeFromParent(),f0()}}const v0=Me.DECK_HALF_WIDTH+4,_0=15,x0=34;class w0{constructor(t,e=6,A=6){this.group=new jt,t.add(this.group);const i=new ae({vertexColors:!0,roughness:.82,metalness:.08,color:new rt(11845577)}),s=new ae({vertexColors:!0,emissive:new rt(16765600),emissiveIntensity:1.35,roughness:.28,metalness:.25});this.materials=[i,s];const r=d0(A);this.variants=[],this.entries=[],r.forEach(o=>{o.solid.computeBoundingBox();const a=o.solid.boundingBox,l=-a.min.z,c=a.max.x-a.min.x,h=new li(o.solid,i,e*2);h.instanceMatrix.setUsage(ai),h.frustumCulled=!1,h.castShadow=!1,h.receiveShadow=!1,this.group.add(h);let u=null;o.glass&&(u=new li(o.glass,s,e*2),u.instanceMatrix.setUsage(ai),u.frustumCulled=!1,u.castShadow=!1,u.receiveShadow=!1,this.group.add(u)),this.variants.push({wall:h,glass:u,depth:l,width:c})}),this.capacity=e*2;for(let o=-1;o<=1;o+=2)for(let a=0;a<e;a++)this.entries.push({variant:Math.random()*this.variants.length|0,side:o,z:-(a*_0)-Math.random()*6,scale:3.5+Math.random()*.7,tint:.82+Math.random()*.3});this._matrix=new Gt,this._quat=new MA,this._pos=new C,this._scale=new C,this.refresh()}update(t){for(const e of this.entries)e.z+=t,e.z>x0&&(e.variant=Math.random()*this.variants.length|0,e.scale=3.5+Math.random()*.7,e.tint=.82+Math.random()*.3,e.z=-260-Math.random()*40);this.refresh()}refresh(){const t=this.variants.map(()=>0);for(const e of this.entries){const A=e.variant,i=t[A];if(i>=this.capacity)continue;t[A]++;const{wall:s,glass:r,depth:o}=this.variants[A],a=v0+o*e.scale;this._pos.set(e.side*a,0,e.z),this._quat.setFromAxisAngle(p0,e.side>0?Math.PI/2:-Math.PI/2),this._scale.setScalar(e.scale),this._matrix.compose(this._pos,this._quat,this._scale),s.setMatrixAt(i,this._matrix),r&&r.setMatrixAt(i,this._matrix),CA.setScalar(e.tint),s.setColorAt(i,CA),r&&r.setColorAt(i,CA)}for(let e=0;e<this.variants.length;e++){const{wall:A,glass:i}=this.variants[e];A.count=t[e],A.instanceMatrix.needsUpdate=!0,A.instanceColor&&(A.instanceColor.needsUpdate=!0),i&&(i.count=t[e],i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0))}}setVisible(t){this.group.visible=t}dispose(){for(const{wall:t,glass:e}of this.variants)t.removeFromParent(),t.geometry.dispose(),e&&(e.removeFromParent(),e.geometry.dispose());for(const t of this.materials)t.dispose();this.group.removeFromParent()}}const E0={gantry:{mode:"straddle"},bulkhead:{mode:"straddle"},silos:{mode:"side"},shophouse:{mode:"side"},pylon:{mode:"side"},billboard:{mode:"side"}},fl=Me.DECK_HALF_WIDTH+7.5;class M0{constructor(t,e){this.parent=t,this.props=new Map,this.active=null;const A=_c("#3a4a55",23);A.wrapS=A.wrapT=sn;const i=[...new Set(Object.values(Ji).flat())];for(const s of i){const r=m0[s];if(!r)continue;const o=r(),a=new ae({vertexColors:!0,map:A,roughness:.8,metalness:.25}),l=6,c=new li(o,a,l);c.instanceMatrix.setUsage(ai),c.frustumCulled=!1,c.castShadow=!1,c.receiveShadow=!1,c.visible=!1,t.add(c),o.computeBoundingBox();const h=o.boundingBox,u=E0[s]??{mode:"side"},f=Math.max(Math.abs(h.min.x),Math.abs(h.max.x)),m=fl+f,v=[];for(let p=0;p<l;p++)v.push(this._makeEntry(p,l,u,m,s));this.props.set(s,{mesh:c,entries:v,capacity:l,layout:u})}this._matrix=new Gt,this._quat=new MA,this._scale=new C(1,1,1),this._pos=new C,this._axisY=new C(0,1,0)}_makeEntry(t,e,A,i,s){const r={z:0,rotY:0,scale:1,x:0};if(A.mode==="straddle")r.x=(t%3-1)*.5,r.rotY=0,r.scale=.9+t%2*.12;else{const o=t%2===0?-1:1;r.x=o*(i+(t>1?6:0)),r.rotY=Math.random()<.5?0:Math.PI*2,r.scale=.85+Math.random()*.4}return r.z=-(t*(420/e))-Math.random()*30,r}setSector(t){if(this.active===t)return;if(this.active){const A=this.props.get(this.active);A&&(A.mesh.visible=!1)}this.active=t;const e=Ji[t]??Ir(t);for(const A of e){const i=this.props.get(A);if(!i)continue;const s=i.mesh.geometry.boundingBox,r=Math.max(Math.abs(s.min.x),Math.abs(s.max.x)),o=fl+r;i.entries.forEach((a,l)=>{const c=this._makeEntry(l,i.capacity,i.layout,o,A);a.x=c.x,a.rotY=c.rotY,a.scale=c.scale,a.z=-(l*(420/i.capacity))-Math.random()*40}),i.mesh.visible=!0}this.refresh()}update(t){const e=Ji[this.active]??Ir(this.active);for(const A of e){const i=this.props.get(A);if(!i||!i.mesh.visible)continue;const s=40;for(const r of i.entries)r.z+=t,r.z>s&&(r.z=-420-Math.random()*40)}this.refresh()}refresh(){const t=Ji[this.active]??Ir(this.active);for(const e of t){const A=this.props.get(e);!A||!A.mesh.visible||(A.entries.forEach((i,s)=>{this._pos.set(i.x,0,i.z),this._quat.setFromAxisAngle(this._axisY,i.rotY),this._scale.setScalar(i.scale),this._matrix.compose(this._pos,this._quat,this._scale),A.mesh.setMatrixAt(s,this._matrix)}),A.mesh.count=A.entries.length,A.mesh.instanceMatrix.needsUpdate=!0)}}setVisible(t){for(const[e,A]of this.props)A.mesh.visible=t&&(Ji[this.active]??[]).includes(e)}dispose(){for(const t of this.props.values())t.mesh.removeFromParent(),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.props.clear()}}const Ji={harbour:["gantry"],nightmarket:["shophouse"],spine:["silos"],sluice:["bulkhead"],dawn:["pylon","billboard"]};function Ir(n){return Ji[n]??["pylon"]}const S0=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,y0=`
  precision highp float;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uBottom;
  uniform vec3 uGlowColor;
  uniform float uGlowStrength;
  uniform float uGlowHeight;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uSunEdge;
  uniform float uSunSize;
  uniform float uSunIntensity;
  uniform float uTime;
  varying vec3 vWorldPosition;

  void main() {
    vec3 dir = normalize(vWorldPosition);
    float h = dir.y;

    // Three-stop vertical gradient: ground bounce -> horizon -> zenith.
    vec3 color = mix(uBottom, uHorizon, smoothstep(-0.45, 0.0, h));
    color = mix(color, uTop, smoothstep(0.0, 0.62, h));

    // --- Sun at the vanishing point -------------------------------------
    // Without a discrete light source the eye has nothing to travel toward.
    // The disc sits just above the horizon straight down the track, so the
    // corridor of deck and rails leads the player's eye into the glow.
    //
    // Three soft layers. A hard-edged disc reads as a flat yellow rectangle
    // pasted on the sky; what sells a real sun is the broad scattered halo and
    // the fact that the light gets *redder* as it spreads through atmosphere.
    float sunDist = distance(dir, normalize(uSunDir));

    float halo = exp(-sunDist * 3.1) * 0.42;
    float mid = exp(-sunDist * 8.5) * 0.5;
    vec3 midTint = mix(uSunColor, uSunEdge, smoothstep(0.0, 0.3, sunDist));

    color += uSunEdge * halo * uSunIntensity * 0.55;
    color += midTint * mid * uSunIntensity * 0.75;

    // The disc. Kept modest so bloom carries the glow instead of clipping a
    // white hole in the sky.
    float disc = smoothstep(uSunSize, uSunSize * 0.35, sunDist);
    color += mix(uSunColor, vec3(1.0), 0.35) * disc * uSunIntensity * 1.05;

    // Haze eats the sun near the horizon, softening the terminator.
    float hazeFade = smoothstep(-0.03, 0.06, h);
    color = mix(color, uHorizon, (1.0 - hazeFade) * 0.32);

    // Horizontal light shafts fanning from the sun.
    float azim = atan(dir.x, dir.z);
    float shafts = sin(azim * 14.0 + uTime * 0.15) * 0.5 + 0.5;
    shafts *= exp(-sunDist * 3.0) * smoothstep(0.22, 0.0, abs(h - 0.02));
    color += uSunEdge * shafts * uSunIntensity * 0.2;

    // City glow bloom sitting on the horizon.
    float band = exp(-pow((h - uGlowHeight) * 5.2, 2.0));
    float front = smoothstep(-0.4, 0.9, -dir.z);
    color += uGlowColor * band * uGlowStrength * (0.45 + front * 0.85);

    // Subtle banded haze so the sky isn't a flat ramp.
    float haze = sin(h * 26.0 + uTime * 0.05) * 0.006;
    color += haze;

    gl_FragColor = vec4(color, 1.0);
  }
`,b0=300;class T0{constructor(t,e){this.scene=t,this.renderer=e,this.skyMaterial=new We({vertexShader:S0,fragmentShader:y0,side:Ke,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new rt(659480)},uHorizon:{value:new rt(1780536)},uBottom:{value:new rt(461584)},uGlowColor:{value:new rt(16752453)},uGlowStrength:{value:.35},uGlowHeight:{value:-.02},uSunDir:{value:new C(0,.055,-1).normalize()},uSunColor:{value:new rt(16756838)},uSunEdge:{value:new rt(14176271)},uSunSize:{value:.048},uSunIntensity:{value:1},uTime:{value:0}}}),this.sky=new tt(new ri(1,24,16),this.skyMaterial),this.sky.scale.setScalar(b0),this.sky.renderOrder=-1e3,this.sky.frustumCulled=!1,t.add(this.sky),this.hemi=new jm(11061480,4867128,2.3),t.add(this.hemi),this.key=new Er(15266559,2.5),this.key.position.set(-6,14,8),t.add(this.key),t.add(this.key.target),this.fill=new Er(16760968,1.15),this.fill.position.set(9,3,-6),t.add(this.fill),this.rim=new Er(10479359,1.5),this.rim.position.set(2,5,-12),t.add(this.rim),this.ambient=new tg(7109260,.95),t.add(this.ambient),this.bounce=new Ja(16767408,8,22,2),this.bounce.position.set(0,1.2,4),t.add(this.bounce),this.heroRim=new Ja(16752453,14,16,2),this.heroRim.position.set(-2.2,2.4,-4.2),t.add(this.heroRim),this.fog=new io(1714744,.013),t.fog=this.fog,this.groundMaterial=new ae({color:2901079,roughness:.95,metalness:0}),this.ground=new tt(new BA(1400,1400),this.groundMaterial),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=-9,this.ground.renderOrder=-900,this.ground.frustumCulled=!1,t.add(this.ground),this.rain=null,this.targetRainAmount=0,this.rainAmount=0,this.targets={top:new rt(659480),horizon:new rt(1780536),bottom:new rt(461584),fog:new rt(1714744),key:new rt(14477557),glow:new rt(16752453),glowStrength:.35,fogDensity:.013,exposure:1.24,ground:new rt(2901079).multiplyScalar(.62),sun:new rt(16756838),sunEdge:new rt(14176271),sunIntensity:.9,sunSize:.048},this.current={top:this.targets.top.clone(),horizon:this.targets.horizon.clone(),bottom:this.targets.bottom.clone(),fog:this.targets.fog.clone(),key:this.targets.key.clone(),glow:this.targets.glow.clone(),glowStrength:.35,fogDensity:.013,exposure:1.24,ground:this.targets.ground.clone(),sun:this.targets.sun.clone(),sunEdge:this.targets.sunEdge.clone(),sunIntensity:.9,sunSize:.048},this._buildEnvironment()}_buildEnvironment(){const t=new nc,e=new tt(new ri(50,16,12),this.skyMaterial.clone());t.add(e);const A=new Gr(this.renderer);A.compileEquirectangularShader();const i=A.fromScene(t,.04);this.envMap=i.texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=1.35,e.geometry.dispose(),e.material.dispose(),A.dispose()}refreshEnvironment(){const t=this.scene.environment;this._buildEnvironment(),t&&t!==this.envMap&&t.dispose()}applySector(t,e=0){const A=t.palette,i=s=>new rt(s);this.targets.top=i(A.sky).multiplyScalar(.85),this.targets.bottom=i(A.sky).multiplyScalar(.5),this.targets.horizon=i(A.fog).multiplyScalar(1.15),this.targets.fog=i(A.fog),this.targets.glow=i(A.accent),this.targets.glowStrength=.3+Math.min(.45,A.accent===A.secondary?.1:.32),this.targets.fogDensity=t.fogDensity,this.targets.ground=new rt(A.fog).multiplyScalar(.62),this.targets.sun=new rt(A.accent).lerp(new rt(16777215),.42),this.targets.sunEdge=new rt(A.accent).lerp(new rt(14176271),.55).multiplyScalar(.85),this.targets.sunIntensity=t.id==="sluice"?.5:t.id==="nightmarket"?.7:.9,this.targets.sunSize=t.id==="dawn"?.068:.048,this.targets.exposure=t.id==="sluice"?1.14:1.24,this.targetRainAmount=e}update(t,e,A,i=0){const s=this.current,r=this.targets,o=.06;s.top.lerp(r.top,1-Math.pow(o,t*6)),s.horizon.lerp(r.horizon,1-Math.pow(o,t*6)),s.bottom.lerp(r.bottom,1-Math.pow(o,t*6)),s.fog.lerp(r.fog,1-Math.pow(o,t*6)),s.key.lerp(r.key,1-Math.pow(o,t*6)),s.glow.lerp(r.glow,1-Math.pow(o,t*6)),s.glowStrength=Wt(s.glowStrength,r.glowStrength,1-Math.pow(o,t*6)),s.fogDensity=Wt(s.fogDensity,r.fogDensity,1-Math.pow(o,t*6)),s.exposure=Wt(s.exposure,r.exposure,1-Math.pow(o,t*6)),s.ground.lerp(r.ground,1-Math.pow(o,t*6)),s.sun.lerp(r.sun,1-Math.pow(o,t*6)),s.sunEdge.lerp(r.sunEdge,1-Math.pow(o,t*6)),s.sunIntensity=Wt(s.sunIntensity,r.sunIntensity,1-Math.pow(o,t*6)),s.sunSize=Wt(s.sunSize,r.sunSize,1-Math.pow(o,t*6));const a=this.skyMaterial.uniforms;a.uTop.value.copy(s.top),a.uHorizon.value.copy(s.horizon),a.uBottom.value.copy(s.bottom),a.uGlowColor.value.copy(s.glow),a.uGlowStrength.value=s.glowStrength,a.uSunColor.value.copy(s.sun),a.uSunEdge.value.copy(s.sunEdge),a.uSunIntensity.value=s.sunIntensity,a.uSunSize.value=s.sunSize,a.uTime.value=e,this.fog.color.copy(s.fog),this.fog.density=s.fogDensity,this.groundMaterial.color.copy(s.ground),this.renderer.toneMappingExposure=s.exposure,this.sky.position.copy(A.position),this.ground.position.x=A.position.x,this.ground.position.z=A.position.z,this.key.position.set(A.position.x-6,16,A.position.z+8),this.key.target.position.set(A.position.x,0,A.position.z-10),this.fill.position.set(A.position.x+9,4,A.position.z-6),this.rim.position.set(A.position.x+2,6,A.position.z-14);const l=i??0;this.heroRim.position.set(l-2.2,2.4,-4.2),this.updateRain(t)}_buildRain(){const e=new Float32Array(7500),A=new Float32Array(2500);for(let r=0;r<2500;r++)e[r*3]=(Math.random()-.5)*44,e[r*3+1]=Math.random()*22,e[r*3+2]=(Math.random()-.5)*70,A[r]=14+Math.random()*12;const i=new Pe;i.setAttribute("position",new ne(e,3)),this.rainSpeeds=A,this.rainPositions=e,this.rainCount=2500;const s=new sc({map:bg(),size:.5,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1,blending:kA,color:12376304});this.rain=new rc(i,s),this.rain.frustumCulled=!1,this.rain.visible=!1,this.scene.add(this.rain)}updateRain(t){if(this.rainAmount=Xe(this.rainAmount,this.targetRainAmount,.05,t),this.rainAmount<.01){this.rain&&(this.rain.visible=!1);return}this.rain||this._buildRain(),this.rain.visible=!0,this.rain.material.opacity=this.rainAmount*.55;const e=this.rainPositions,A=this.rainSpeeds,i=4;for(let s=0;s<this.rainCount;s++){const r=s*3;e[r+1]-=A[s]*t,e[r]+=i*t,e[r+1]<-2&&(e[r+1]=22,e[r]=(Math.random()-.5)*44,e[r+2]=(Math.random()-.5)*70),e[r]>22&&(e[r]-=44)}this.rain.geometry.attributes.position.needsUpdate=!0}setShadowQuality(t,e){if(this.key.castShadow=t,t){this.key.shadow.mapSize.set(e,e);const A=this.key.shadow.camera;A.left=-16,A.right=16,A.top=20,A.bottom=-8,A.near=1,A.far=60,A.updateProjectionMatrix(),this.key.shadow.bias=-.0012,this.key.shadow.normalBias=.02}}dispose(){var t,e,A;this.sky.geometry.dispose(),this.skyMaterial.dispose(),this.ground.geometry.dispose(),this.groundMaterial.dispose(),(t=this.envMap)==null||t.dispose(),(e=this.rain)==null||e.geometry.dispose(),(A=this.rain)==null||A.material.dispose()}}const ti=[0,1,2],C0=new Set([te.CRATE,te.CONTAINER,te.STALL,te.FORKLIFT]),Ur=[{id:"single-blocker",weight:1,build(){return[{kind:Ss([te.CRATE,te.FORKLIFT]),lane:bA(0,2)}]}},{id:"double-blocker",weight:.9,build(){const n=bA(0,2),t=[te.CRATE,te.FORKLIFT,te.CONTAINER];return ti.filter(e=>e!==n).map(e=>({kind:Ss(t),lane:e}))}},{id:"jump-wall",weight:.85,build(){return ti.map(n=>({kind:te.BARRIER,lane:n}))}},{id:"slide-gate",weight:.7,build(){return ti.map(n=>({kind:te.SIGN,lane:n}))}},{id:"jump-then-slide",weight:.55,build(){return[...ti.map(n=>({kind:te.BARRIER,lane:n,dz:0})),...ti.map(n=>({kind:te.SIGN,lane:n,dz:7}))]}},{id:"slalom",weight:.6,build(){return[0,1,2].sort(()=>Math.random()-.5).map((t,e)=>({kind:te.CRATE,lane:t,dz:e*3.6}))}},{id:"container-corridor",weight:.5,build(){const n=bA(0,2);return ti.filter(t=>t!==n).map(t=>({kind:te.CONTAINER,lane:t}))}},{id:"pallet-hop",weight:.55,build(){const n=bA(0,2);return[0,1,2].map(t=>({kind:te.PALLET,lane:n,dz:t*5.5}))}},{id:"stall-pair",weight:.45,build(){const n=bA(0,2);return ti.filter(t=>t!==n).map(t=>({kind:te.STALL,lane:t}))}},{id:"jet-strip",weight:.4,build(){const n=bA(0,2);return ti.filter(t=>t!==n).map(t=>({kind:te.SLUICE,lane:t}))}}],B0=[{id:"streak",build(n,t,e){return Array.from({length:e},(A,i)=>({lane:n,z:t-i*1.9,y:.95}))}},{id:"arc",build(n,t,e){return Array.from({length:e},(A,i)=>{const s=i/Math.max(1,e-1);return{lane:n,z:t-i*2.2,y:.95+Math.sin(s*Math.PI)*1.5}})}},{id:"low-arc",build(n,t,e){return Array.from({length:e},(A,i)=>{const s=i/Math.max(1,e-1);return{lane:n,z:t-i*2.2,y:.95+Math.sin(s*Math.PI)*.65}})}},{id:"zigzag",build(n,t,e){const A=[n,(n+1)%3,(n+2)%3];return Array.from({length:e},(i,s)=>({lane:A[s%3],z:t-s*2.2,y:.95}))}},{id:"tower",build(n,t,e){return Array.from({length:e},(A,i)=>({lane:n,z:t,y:1+i*.85}))}}];function pl(n,t){const e=R0(.95,.55,t),A=n*e;return Math.max(26,A+co(0,10))}function R0(n,t,e){return n+(t-n)*e}class P0{constructor({obstacles:t,coins:e,pickups:A,bus:i}){this.obstacles=t,this.coins=e,this.pickups=A,this.bus=i,this.live=[],this.livePowerups=[],this.cursor=-55,this.distance=0,this.sinceLastPowerup=0,this.lastSectorId=null,this.sectorIndex=0,this.sectorHistory=[]}reset(){this.clear(),this.cursor=-55,this.distance=0,this.sinceLastPowerup=0,this.sectorHistory.length=0,this.lastSectorId=null,this.sectorIndex=0}clear(){for(const t of this.live)this.obstacles.release(t.obj);this.live.length=0,this.pickups.clear(),this.coins.clear(),this.livePowerups.length=0}get tier(){const t=this.distance;let e=0;for(let A=0;A<Gi.TIERS.length;A++)t>=Gi.TIERS[A]&&(e=A);return e}get difficulty01(){return we(this.tier/(Gi.TIERS.length-1))}update(t,e,A){this.distance+=t;for(const i of this.live)i.z+=t,i.obj.position.z=i.z;for(const i of this.livePowerups)i.z+=t,i.obj.position.z=i.z;for(this._cull(24),this.cursor+=t;this.cursor>-260;)this._generateRow(e,A)}_cull(t){for(let e=this.live.length-1;e>=0;e--)this.live[e].z>t&&(this.obstacles.release(this.live[e].obj),this.live.splice(e,1));for(let e=this.livePowerups.length-1;e>=0;e--)this.livePowerups[e].z>t&&this.pickups.releaseAt(e)}_isFair(t){const e=new Map;for(const A of t){const i=A.dz??0;e.has(i)||e.set(i,[]),e.get(i).push(A)}for(const[,A]of e)if(new Set(A.filter(s=>C0.has(s.kind)).map(s=>s.lane)).size>=Me.LANE_COUNT)return!1;return!0}_generateRow(t,e){const A=this.cursor,i=this.tier,s=this.difficulty01,r=Ur.map(h=>{let u=h.weight;return(h.id==="jump-wall"||h.id==="slide-gate"||h.id==="jump-then-slide")&&(u*=.6+s*.9),(h.id==="container-corridor"||h.id==="stall-pair")&&(u*=.4+s),h.id==="single-blocker"&&(u*=1.4-s*.8),Math.max(.05,u)});let o=ml(Ur,r),a=o.build(),l=0;for(;!this._isFair(a)&&l++<6;)a=o.build();if(this._isFair(a)||(a=[{kind:te.CRATE,lane:bA(0,2)}]),Math.random()<Gi.EXTRA_ROW_CHANCE[i]){const h=ml(Ur,r).build();for(const u of h)a.push({...u,dz:(u.dz??0)+3.5})}for(const h of a){const u=this.obstacles.spawn(h.kind,this.obstacles.parent);if(!u)continue;const f=(h.lane-1)*Me.LANE_WIDTH,m=A-(h.dz??0);u.position.set(f,0,m),this.live.push({obj:u,z:m,kind:h.kind,lane:h.lane,collide:u.userData.collide,passed:!1,bob:Math.random()*Math.PI*2})}if(Math.random()<.5){const h=Math.random()<.5?-1:1,u=this.obstacles.spawn(te.SIGNPOST,this.obstacles.parent);u&&(u.position.set(h*(Me.DECK_HALF_WIDTH+.6),0,A-co(2,14)),u.rotation.y=h>0?-Math.PI/2:Math.PI/2,this.live.push({obj:u,z:u.position.z,kind:te.SIGNPOST,lane:-1,collide:null,passed:!0,decorative:!0}))}const c=Gi.COIN_DENSITY[i];if(Math.random()<Gi.COIN_CHANCE*c){const h=Ss(B0),u=bA(0,2),f=Math.min(15,Math.round(8+s*5)),m=h.build(u,A-3,f);for(const v of m)this.coins.add((v.lane-1)*Me.LANE_WIDTH,v.y,v.z)}if(this.sinceLastPowerup+=pl(t,s),this.sinceLastPowerup>170){this.sinceLastPowerup=0;const h=Ss(dc),u=bA(0,2),f=Math.random()<.4?1.35:1,m=this.pickups.spawn(h,(u-1)*Me.LANE_WIDTH,f,A-6);m&&this.livePowerups.push({obj:m,z:m.position.z,x:m.position.x,y:m.position.y,powerId:h})}this.cursor-=pl(t,s)}rollSector(t,e=null){if(e!==null)return this.sectorIndex=e%t.length,this.lastSectorId=t[this.sectorIndex].id,t[this.sectorIndex];let A=this.sectorIndex,i=0;for(;i++<8&&(A===this.sectorIndex||this.sectorHistory[this.sectorHistory.length-1]===t[A].id);)A=bA(0,t.length-1);this.sectorIndex=A;const s=t[A];return this.sectorHistory.push(s.id),this.sectorHistory.length>4&&this.sectorHistory.shift(),this.lastSectorId=s.id,s}get sectorInterval(){const t=this.distance;return t<500?260:t<1500?320:t<3200?380:440}}function ml(n,t){let e=0;for(const i of t)e+=i;let A=Math.random()*e;for(let i=0;i<n.length;i++)if(A-=t[i],A<=0)return n[i];return n[n.length-1]}class D0{constructor({scene:t,renderer:e,camera:A,bus:i,quality:s}){this.scene=t,this.renderer=e,this.camera=A,this.bus=i,this.quality=s,this.root=new jt,this.obstacleRoot=new jt,this.pickupRoot=new jt,this.effectRoot=new jt,t.add(this.root),this.root.add(this.obstacleRoot,this.pickupRoot,this.effectRoot),this.atmosphere=new T0(t,e),this.atmosphere.setShadowQuality(s.shadows,s.shadowMapSize),this.track=new t0(t,ei),this.skyline=new g0(t,Math.round(30*s.propDensity+8),s.buildingLayers+2),this.street=new w0(t,Math.max(3,Math.round(6*s.propDensity)),5),this.props=new M0(t,ei),this.obstacles=new kg(this.obstacleRoot),this.coins=new Kg(this.pickupRoot,200),this.pickups=new Xg(this.pickupRoot),this.generator=new P0({obstacles:this.obstacles,coins:this.coins,pickups:this.pickups,bus:i}),this.sector=ei[0],this.distanceSinceSector=0,this.totalDistance=0,this.paused=!1,this.setSector(ei[0],!0)}setSector(t,e=!1){t&&(this.sector=t,this.track.setSector(t.id),this.props.setSector(t.id),this.atmosphere.applySector(t,t.id==="sluice"?1:t.id==="nightmarket"?.28:.1),e&&(this.atmosphere.current.exposure=this.atmosphere.targets.exposure),this.bus.emit(Jt.SECTION_CHANGE,{sector:t}))}reset(t=0){this.generator.reset(),this.generator.sectorIndex=t,this.totalDistance=0,this.distanceSinceSector=0,this.setSector(ei[t],!0)}update(t,e,A){if(this.paused)return;const i=e*t;this.totalDistance+=i,this.playerX=this.playerX??0,this.track.update(i),this.skyline.update(i),this.street.update(i),this.props.update(i),this.generator.update(i,e,this.sector),this.generator.distance=this.totalDistance,this.distanceSinceSector+=i,this.distanceSinceSector>=this.generator.sectorInterval&&(this.distanceSinceSector=0,this.setSector(this.generator.rollSector(ei)));const s=this.magnetActive;this.coins.update(t,performance.now()*.001,A,s?this.magnetOrigin:null,this.magnetRadius??6,i),this.pickups.update(t,A),this._animateObstacles(t),this.atmosphere.update(t,performance.now()*.001,A,this.playerX??0)}_animateObstacles(t){const e=performance.now()*.001;for(const A of this.generator.live){const i=A.obj;if(!i.userData.hasJets)for(const s of i.children){if(!s.userData.dynamic)continue;const r=s.material;if((r==null?void 0:r.emissiveIntensity)===void 0)continue;if(s.userData.isJet){const a=.8+Math.sin(e*9+s.position.x*3)*.22;s.scale.y=a,s.scale.x=s.scale.z=.9+a*.15;continue}const o=s.userData.baseEmissive;o!==void 0?r.emissiveIntensity=o:s.userData.pulse!==!1&&(r.emissiveIntensity=1.6+Math.sin(e*4+A.bob)*.8)}}}setMagnet(t,e,A){this.magnetActive=t,this.magnetOrigin=e,this.magnetRadius=A}setPaused(t){this.paused=t}obstaclesNear(t,e){const A=[];for(const i of this.generator.live)i.collide&&i.z>t&&i.z<e&&A.push(i);return A}dispose(){this.generator.clear(),this.track.dispose(),this.skyline.dispose(),this.street.dispose(),this.props.dispose(),this.atmosphere.dispose(),this.coins.dispose(),this.root.removeFromParent()}}const Fe={torsoH:.62,torsoW:.42,hipH:.26,thigh:.42,shin:.44,armUpper:.34,armLower:.32,headR:.19},Jr=[{id:"vela",name:"Vela Okonjo",role:"Courier, Arterial Line",blurb:"Runs the deck for a living. Knows every gap in Sector 7 by feel.",accessory:"goggles",palette:{jacket:16742959,jacketDark:13914650,trim:16765286,trousers:2896960,boots:1777446,skin:9067067,hair:1709330,bag:3753558}},{id:"reyes",name:'Reyes "Tacho" Mora',role:"Transit Engineer",blurb:"Maintains the guideway. Has the clearance, not the patience.",accessory:"hardhat",palette:{jacket:3123616,jacketDark:1931892,trim:16765286,trousers:3752526,boots:2237996,skin:13208931,hair:2760472,bag:4543071}},{id:"sable",name:"Sable",role:"Rooftop Courier",blurb:"Never touches the ground if she can help it. Long coat, bad habit.",accessory:"coat",palette:{jacket:12864470,jacketDark:9055136,trim:16769162,trousers:2367280,boots:1512480,skin:7292464,hair:2957117,bag:3813194}},{id:"brook",name:"Brook",role:"Salvage Runner",blurb:"Fishes dropped cargo off the deck before the crews do.",accessory:"mask",palette:{jacket:7043724,jacketDark:4674399,trim:9169407,trousers:3357509,boots:1974824,skin:6109992,hair:2038294,bag:4015955}}];function gl(n){return Jr.find(t=>t.id===n)??Jr[0]}function mA(n,t=.72,e=.04){return new ae({color:n,roughness:t,metalness:e})}function ds(n,t,e){const A=new oo(n,t,4,10),i=new tt(A,e);return i.castShadow=!0,i}class vl{constructor(t){this.character=t;const e=t.palette;this.materials={jacket:mA(e.jacket,.78),jacketDark:mA(e.jacketDark,.82),trim:mA(e.trim,.5,.2),trousers:mA(e.trousers,.85),boots:mA(e.boots,.7,.1),skin:mA(e.skin,.62),hair:mA(e.hair,.9),bag:mA(e.bag,.8),visor:new ae({color:9169407,emissive:2779776,emissiveIntensity:.7,roughness:.15,metalness:.6})},this.root=new jt,this.build(),this.phase=0,this.bankTarget=0,this.bank=0,this.tailVelocity=new C,this.tailLag=new C,this.blinkTimer=1.5+Math.random()*3,this.blink=0,this.footPhase=0,this.lastFootDown=[!1,!1]}build(){const t=this.materials;this.hips=new jt,this.hips.position.y=.92,this.root.add(this.hips);const e=new tt(new ce(Fe.torsoW*.92,Fe.hipH,.26),t.trousers);e.castShadow=!0,this.hips.add(e);const A=new tt(new ce(.44,.07,.29),t.trim);A.position.y=.13,this.hips.add(A),this.torso=new jt,this.torso.position.y=Fe.hipH/2,this.hips.add(this.torso);const i=new tt(new ce(Fe.torsoW,Fe.torsoH,.27),t.jacket);i.castShadow=!0,this.torso.add(i);const s=new tt(new ce(.46,.1,.3),t.jacketDark);s.position.y=-.62/2+.02,this.torso.add(s);const r=new tt(new ce(.36,.1,.24),t.jacketDark);r.position.y=Fe.torsoH/2-.02,this.torso.add(r);const o=new tt(new ce(.09,.5,.02),t.trim);o.position.set(0,.02,-.14),this.torso.add(o);for(const v of[-1,1]){const p=new tt(new ce(.13,.14,.26),t.jacketDark);p.position.set(v*(Fe.torsoW/2+.02),.24,0),this.torso.add(p)}this.neck=new jt,this.neck.position.y=Fe.torsoH/2+.05,this.torso.add(this.neck),this.head=new jt,this.neck.add(this.head);const a=new tt(new ri(Fe.headR,14,12),t.skin);a.scale.set(1,1.08,.95),a.castShadow=!0,this.head.add(a);const l=new tt(new ce(.2,.12,.18),t.skin);l.position.set(0,-.12,-.04),this.head.add(l);const c=new tt(new ri(.198,12,10,0,Math.PI*2,0,Math.PI*.62),t.hair);c.position.y=.02,c.castShadow=!0,this.head.add(c),this.eyes=[];for(const v of[-1,1]){const p=new tt(new ce(.045,.035,.02),t.visor);p.position.set(v*.07,.01,-.175),this.head.add(p),this.eyes.push(p)}this.addAccessory(),this.armL=this.buildArm(-1),this.armR=this.buildArm(1),this.legL=this.buildLeg(-1),this.legR=this.buildLeg(1);const h=new tt(new ce(.34,.3,.14),t.bag);h.position.set(.02,.05,.22),h.castShadow=!0,this.torso.add(h);const u=new tt(new ce(.35,.12,.15),t.jacketDark);u.position.set(.02,.16,.23),this.torso.add(u);const f=new tt(new ce(.06,.5,.02),t.jacketDark);f.position.set(-.06,.02,-.145),f.rotation.z=.42,this.torso.add(f),this.buildTail();const m=I0();this.contactShadow=new tt(new BA(1.5,1.5),new GA({map:m,transparent:!0,opacity:.85,depthWrite:!1,color:0})),this.contactShadow.rotation.x=-Math.PI/2,this.contactShadow.renderOrder=1,this.root.add(this.contactShadow),this.lightPool=new tt(new BA(2.6,2.6),new GA({map:m,color:16752453,transparent:!0,opacity:.22,depthWrite:!1,blending:kA,toneMapped:!1})),this.lightPool.rotation.x=-Math.PI/2,this.lightPool.renderOrder=0,this.root.add(this.lightPool)}addAccessory(){const t=this.materials;switch(this.character.accessory){case"goggles":{const e=new tt(new Un(.2,.022,6,14),t.trim);e.rotation.y=Math.PI/2,e.position.y=.08,this.head.add(e);for(const A of[-1,1]){const i=new tt(new xA(.062,.062,.05,10),t.visor);i.rotation.z=Math.PI/2,i.position.set(A*.08,.09,-.11),this.head.add(i)}break}case"hardhat":{const e=new tt(new ri(.215,12,8,0,Math.PI*2,0,Math.PI*.5),mA(16761395,.5,.1));e.position.y=.05,e.castShadow=!0,this.head.add(e);const A=new tt(new xA(.235,.235,.022,14),mA(16761395,.5,.1));A.position.y=.05,this.head.add(A);const i=new tt(new xA(.035,.035,.03,8),new ae({color:16773824,emissive:16765286,emissiveIntensity:1.4}));i.rotation.x=Math.PI/2,i.position.set(0,.06,-.21),this.head.add(i);break}case"mask":{const e=new tt(new ce(.26,.14,.06),mA(2764856,.8));e.position.set(0,-.06,-.15),this.head.add(e);const A=new tt(new xA(.05,.05,.06,8),new ae({color:2764856,emissive:9169407,emissiveIntensity:.35}));A.rotation.x=Math.PI/2,A.position.set(0,-.09,-.2),this.head.add(A);break}case"coat":{const e=new tt(new ce(.42,.62,.1),this.materials.jacketDark);e.position.set(0,-.34,.15),e.castShadow=!0,this.torso.add(e),this.coatPanel=e;break}}}buildTail(){const t=new jt;t.position.set(.16,.34,.1),this.torso.add(t);for(let e=0;e<3;e++){const A=new tt(new ce(.075-e*.012,.17,.03),e%2===0?this.materials.trim:this.materials.jacketDark);A.position.y=-.1-e*.16,A.castShadow=!0,t.add(A)}this.tail=t}buildArm(t){const e=this.materials,A=new jt;A.position.set(t*(Fe.torsoW/2+.04),.24,0),this.torso.add(A);const i=ds(.058,Fe.armUpper,e.jacket);i.position.y=-.34/2-.03,A.add(i);const s=new jt;s.position.y=-.34-.03,A.add(s);const r=ds(.05,Fe.armLower,e.jacketDark);r.position.y=-.32/2-.02,s.add(r);const o=new tt(new ce(.09,.1,.07),e.skin);return o.position.y=-.32-.06,s.add(o),{shoulder:A,elbow:s}}buildLeg(t){const e=this.materials,A=new jt;A.position.set(t*.11,-.26/2,0),this.hips.add(A);const i=ds(.072,Fe.thigh,e.trousers);i.position.y=-.42/2-.04,A.add(i);const s=new jt;s.position.y=-.42-.06,A.add(s);const r=ds(.062,Fe.shin,e.trousers);r.position.y=-.44/2-.04,s.add(r);const o=new tt(new ce(.13,.09,.26),e.boots);return o.position.set(0,-.44-.09,-.06),o.castShadow=!0,s.add(o),{hip:A,knee:s,foot:o}}resetPose(){this.phase=0,this.footPhase=0,this.lastFoot=[!1,!1],this.bank=0,this.bankTarget=0,this.blink=0,this.blinkTimer=1.5+Math.random()*3,this.idleTime=0,this.root.rotation.set(0,0,0),this.root.position.set(0,0,0),this.root.scale.set(1,1,1),this.hips.position.set(0,.92,0),this.hips.rotation.set(0,0,0),this.torso.position.set(0,Fe.hipH/2,0),this.torso.rotation.set(0,0,0),this.torso.scale.set(1,1,1),this.neck.rotation.set(0,0,0),this.head.rotation.set(0,0,0);for(const t of[this.legL,this.legR])t.hip.rotation.set(0,0,0),t.knee.rotation.set(0,0,0),t.foot.rotation.set(0,0,0);for(const t of[this.armL,this.armR])t.shoulder.rotation.set(0,0,0),t.elbow.rotation.set(0,0,0);for(const t of this.eyes)t.scale.y=1;this.tail&&this.tail.rotation.set(0,0,0),this.coatPanel&&(this.coatPanel.rotation.set(0,0,0),this.coatPanel.scale.set(1,1,1)),this.contactShadow.material.opacity=.85,this.contactShadow.scale.set(1.15,1.15,1),this.contactShadow.position.set(0,.02,0),this.lightPool.material.opacity=.22,this.lightPool.scale.set(1,1,1),this.lightPool.position.set(0,.015,0)}update(t,e){const{speed:A,airborne:i,sliding:s,laneChange:r}=e,o=this.materials,a=1.5+A*.32;this.phase+=t*a*2.6;const l=1-Math.max(i,s);this.footPhase=this.phase;const c=.85+we((A-10)/22)*.35,h=(p,d)=>{const g=this.phase+d,_=Math.sin(g)*c;p.hip.rotation.x=_;const E=Math.max(0,-Math.sin(g+.85))*1.75+.12;p.knee.rotation.x=E,p.hip.rotation.z=p===this.legL?-.02:.02,p.foot.rotation.x=-_*.35-E*.45};l>.01&&(h(this.legL,0),h(this.legR,Math.PI));const u=(p,d)=>{const g=this.phase+d,_=Math.sin(g)*.78;p.shoulder.rotation.x=_,p.elbow.rotation.x=-.55-Math.max(0,Math.sin(g+1.2))*.75,p.shoulder.rotation.z=p===this.armL?-.2:.2};if(l>.01&&(u(this.armL,Math.PI),u(this.armR,0)),i>.01){const p=i;this.legL.hip.rotation.x=Wt(this.legL.hip.rotation.x,-1.05,p),this.legL.knee.rotation.x=Wt(this.legL.knee.rotation.x,1.5,p),this.legR.hip.rotation.x=Wt(this.legR.hip.rotation.x,.45,p),this.legR.knee.rotation.x=Wt(this.legR.knee.rotation.x,.9,p),this.armL.shoulder.rotation.x=Wt(this.armL.shoulder.rotation.x,-1.7,p),this.armR.shoulder.rotation.x=Wt(this.armR.shoulder.rotation.x,-1.35,p),this.armL.elbow.rotation.x=Wt(this.armL.elbow.rotation.x,-.5,p),this.armR.elbow.rotation.x=Wt(this.armR.elbow.rotation.x,-.7,p),this.armL.shoulder.rotation.z=Wt(this.armL.shoulder.rotation.z,-.5,p),this.armR.shoulder.rotation.z=Wt(this.armR.shoulder.rotation.z,.5,p)}if(s>.01){const p=s;this.legL.hip.rotation.x=Wt(this.legL.hip.rotation.x,-1.35,p),this.legL.knee.rotation.x=Wt(this.legL.knee.rotation.x,.25,p),this.legR.hip.rotation.x=Wt(this.legR.hip.rotation.x,.5,p),this.legR.knee.rotation.x=Wt(this.legR.knee.rotation.x,1.9,p),this.armL.shoulder.rotation.x=Wt(this.armL.shoulder.rotation.x,1.4,p),this.armR.shoulder.rotation.x=Wt(this.armR.shoulder.rotation.x,1.1,p),this.armL.elbow.rotation.x=Wt(this.armL.elbow.rotation.x,-.3,p),this.armR.elbow.rotation.x=Wt(this.armR.elbow.rotation.x,-.3,p)}const f=Math.abs(Math.sin(this.phase))*.075*l,m=-.16-we((A-10)/22)*.2;if(this.hips.position.y=.92+f-s*.52+i*.06,this.hips.rotation.x=Wt(m,-.1,s)+i*.12,this.torso.rotation.y=Math.sin(this.phase)*.1*l,this.torso.rotation.x=-.05*l+s*.42,this.bankTarget=-r*.55,this.bank=Xe(this.bank,this.bankTarget,5e-4,t),this.root.rotation.z=this.bank,this.root.rotation.y=this.bank*.35,this.hips.rotation.z=s*-.18,this.neck.rotation.x=-this.hips.rotation.x*.6-this.torso.rotation.x*.5,this.head.rotation.y=-this.torso.rotation.y*.8+this.bank*.3,this.updateTail(t,A),this.coatPanel){const p=we((A-12)/18);this.coatPanel.rotation.x=.12+p*.5,this.coatPanel.scale.z=1+p*.4}if(A<.5){this.idleTime=(this.idleTime??0)+t;const p=Math.sin(this.idleTime*1.9)*.028;if(this.torso.scale.setScalar(1+p*.5),this.torso.position.y=Fe.hipH/2+p*.3,this.armL.shoulder.rotation.x=Math.sin(this.idleTime*1.9)*.06-.05,this.armR.shoulder.rotation.x=-Math.sin(this.idleTime*1.9)*.06-.05,this.armL.elbow.rotation.x=-.3,this.armR.elbow.rotation.x=-.3,this.legL.hip.rotation.x=0,this.legR.hip.rotation.x=0,this.legL.knee.rotation.x=.06,this.legR.knee.rotation.x=.06,this.blinkTimer-=t,this.blinkTimer<=0&&(this.blink=.12,this.blinkTimer=1.8+Math.random()*3.4),this.blink>0){this.blink-=t;for(const d of this.eyes)d.scale.y=.15}else for(const d of this.eyes)d.scale.y=1}else{this.torso.scale.setScalar(1);for(const p of this.eyes)p.scale.y=1}const v=e.boost??0;o.trim.emissive=o.trim.emissive??new rt,o.trim.emissiveIntensity=v*2.4,o.jacket.emissiveIntensity=v*.5}updateTail(t,e){if(!this.tail)return;const A=-.35-we((e-12)/18)*.5;this.tail.rotation.x=Xe(this.tail.rotation.x,A,8e-4,t),this.tail.rotation.z=Xe(this.tail.rotation.z,this.bank*1.6,.001,t);const i=Math.sin(this.phase*2)*(.06+we((e-10)/20)*.16);this.tail.rotation.y=i}updateContactShadow(t,e){const A=we(1-t/2.6);this.contactShadow.position.y=-e+.02,this.contactShadow.material.opacity=.85*A*A;const i=1.15+t*.2;this.contactShadow.scale.setScalar(i),this.lightPool.position.y=-e+.015,this.lightPool.material.opacity=.3*(.3+A*.7),this.lightPool.scale.setScalar(1.1+t*.32)}dispose(){this.root.traverse(t=>{t.isMesh&&t.geometry.dispose()});for(const t of Object.values(this.materials))t.dispose();this.contactShadow.material.dispose(),this.contactShadow.geometry.dispose(),this.lightPool.material.dispose(),this.lightPool.geometry.dispose()}}let fs=null;function I0(){if(fs)return fs;const n=64,t=document.createElement("canvas");t.width=t.height=n;const e=t.getContext("2d"),A=e.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return A.addColorStop(0,"rgba(255,255,255,0.9)"),A.addColorStop(.55,"rgba(255,255,255,0.4)"),A.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=A,e.fillRect(0,0,n,n),fs=new fn(t),fs}class U0{constructor({scene:t,bus:e,world:A,input:i}){this.scene=t,this.bus=e,this.world=A,this.input=i,this.root=new jt,t.add(this.root),this.rig=new vl(gl("vela")),this.root.add(this.rig.root),this.lane=1,this.targetLane=1,this.laneX=0,this.laneT=1,this.laneFromX=0,this.laneToX=0,this.lateralVelocity=0,this.y=0,this.vy=0,this.grounded=!0,this.airborneTime=0,this.lastGroundedTime=0,this.sliding=!1,this.slideTime=0,this.slideBlend=0,this.speed=Ve.START,this.baseSpeed=Ve.START,this.alive=!0,this.invulnerable=0,this.boostActive=!1,this.coinCombo=0,this.nearMissCooldown=0,this.onCoin=null,this.onPowerup=null,this._box=new C,this._footstepTimer=0,this.lastFoot=0}setCharacter(t){const e=gl(t);this.rig.character.id!==e.id&&(this.root.remove(this.rig.root),this.rig.dispose(),this.rig=new vl(e),this.root.add(this.rig.root),this.applyPowerupVisuals())}reset(t=Ve.START){this.lane=1,this.targetLane=1,this.laneX=0,this.laneT=1,this.laneFromX=0,this.laneToX=0,this.lateralVelocity=0,this.y=0,this.vy=0,this.grounded=!0,this.airborneTime=0,this.lastGroundedTime=0,this.sliding=!1,this.slideTime=0,this.slideBlend=0,this.speed=t,this.baseSpeed=t,this.alive=!0,this.invulnerable=eA.SPAWN_INVULNERABILITY,this.boostActive=!1,this.coinCombo=0,this.nearMissCooldown=0,this.root.visible=!0,this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.rig.resetPose(),this.applyPowerupVisuals()}setIdle(t){this.idle=t,this.speed=t?0:this.speed}handleInput(t){if(!t||!this.alive)return;const e=xe.get("invertLane");this.input.consume("left")&&this.moveLane(e?1:-1),this.input.consume("right")&&this.moveLane(e?-1:1),this.input.consume("jump")&&this.jump(),this.input.consume("slide")&&this.slide();const A=this.input.updateSteering(Me.LANE_COUNT);this.input.steerChanged&&A!==this.targetLane&&this.moveLane(A-this.targetLane)}moveLane(t){const e=an(this.targetLane+t,0,Me.LANE_COUNT-1);e!==this.targetLane&&(this.targetLane=e,this.laneFromX=this.laneX,this.laneToX=(e-1)*Me.LANE_WIDTH,this.laneT=0,this.bus.emit(Jt.LANE_CHANGE,{lane:e,dir:t}))}jump(){(this.grounded||this.lastGroundedTime<eA.COYOTE_TIME)&&(this.vy=eA.JUMP_VELOCITY,this.grounded=!1,this.airborneTime=0,this.sliding&&this.endSlide(),this.bus.emit(Jt.JUMP,{}))}slide(){if(this.sliding){this.slideTime<eA.SLIDE_DURATION&&(this.slideTime=eA.SLIDE_DURATION*.75);return}if(!this.grounded){this.vy=Math.min(this.vy,-6),this.pendingSlide=!0;return}this.startSlide()}startSlide(){this.sliding=!0,this.slideTime=eA.SLIDE_DURATION,this.pendingSlide=!1,this.bus.emit(Jt.SLIDE_START,{})}endSlide(){this.sliding&&(this.sliding=!1,this.slideTime=0,this.bus.emit(Jt.SLIDE_END,{}))}update(t,e){if(this.invulnerable>0&&(this.invulnerable-=t),this.nearMissCooldown>0&&(this.nearMissCooldown-=t),this.baseSpeed=Xe(this.baseSpeed,e,.4,t),this.speed=this.baseSpeed*(this.boostActive?Ve.BOOST_MULTIPLIER:1),this.laneT<1){const A=this.laneX;this.laneT=Math.min(1,this.laneT+t/eA.LANE_CHANGE_TIME),this.laneX=Wt(this.laneFromX,this.laneToX,hg(this.laneT)),this.laneT>=1&&(this.lane=this.targetLane),this.lateralVelocity=t>0?(this.laneX-A)/t:0}else this.lateralVelocity=Xe(this.lateralVelocity,0,.001,t);if(this.grounded?this.lastGroundedTime+=t:(this.vy+=eA.GRAVITY*t,this.y+=this.vy*t,this.airborneTime+=t,this.y<=0&&(this.y=0,this.vy=0,this.grounded=!0,this.lastGroundedTime=0,this.bus.emit(Jt.LAND,{hard:this.airborneTime>.4}),this.pendingSlide&&this.startSlide())),this.sliding&&(this.slideTime-=t,this.slideTime<=0&&this.endSlide()),this.slideBlend=Xe(this.slideBlend,this.sliding?1:0,2e-4,t),this.root.position.set(this.laneX,this.y,0),this.rig.update(t,{speed:this.speed,airborne:this.grounded?0:we(Math.abs(this.vy)/9+.35),sliding:this.slideBlend,laneChange:an(this.lateralVelocity*.42,-1.4,1.4),boost:this.boostActive?1:0}),this.rig.updateContactShadow(this.y,this.y),this.grounded&&!this.sliding&&this.speed>1){const A=Math.sin(this.rig.phase)>0?1:0;A!==this.lastFoot&&(this.lastFoot=A,this.bus.emit("player:footstep",{speed:this.speed}))}}get collider(){const t=this.slideBlend>.5?eA.SLIDE_HEIGHT:eA.STAND_HEIGHT,e=eA.HITBOX_HALF_WIDTH*Wt(1,1.12,this.slideBlend);return this._box.set(this.laneX,this.y+t/2,0),{x:this.laneX,y:this.y,height:t,halfWidth:e,halfDepth:eA.HITBOX_DEPTH,sliding:this.slideBlend>.5,airborne:!this.grounded}}checkCollisions(t){if(this.invulnerable>0)return null;const e=this.collider,A=e.y+e.height,i=e.y;for(const s of t){const r=s.collide;if(!r)continue;const o=(s.lane-1)*Me.LANE_WIDTH,a=r.halfW*.86,l=r.halfD;if(Math.abs(s.z-0)>=l+e.halfDepth||Math.abs(o-e.x)>=a+e.halfWidth)continue;const c=s.obj.userData;if(c.requireSlide){const h=c.clearance??1;if(i>=h-.04)continue;if(A>h)return s;continue}if(c.requireJump){if(i>=r.top-.04)continue;return s}if(i<r.top-.04&&A>.04)return s}return null}checkNearMiss(t){if(this.nearMissCooldown>0||!t.collide||t.passed||t.z<-1.5)return!1;const e=(t.lane-1)*Me.LANE_WIDTH,A=Math.abs(e-this.laneX),i=t.collide.halfW+eA.HITBOX_HALF_WIDTH+.45;return A<i&&A>.01?(this.nearMissCooldown=.35,!0):!1}applyPowerupVisuals(t){if(t===void 0)return;const e=this.rig.materials;e.trim.emissiveIntensity=t.shield?2.2:0,e.jacket.emissiveIntensity=t.boost?.5:0}setBoost(t){this.boostActive=t}setVisible(t){this.root.visible=t}dispose(){this.rig.dispose(),this.root.removeFromParent()}}class L0{constructor(t,e){this.camera=t,this.bus=e,this.baseFov=Qe.FOV,this.fov=Qe.FOV,this.targetFov=Qe.FOV,this.position=new C(0,Qe.OFFSET_Y,Qe.OFFSET_Z),this.lookTarget=new C(0,Qe.LOOK_HEIGHT,-Qe.LOOK_AHEAD),this.currentLook=this.lookTarget.clone(),this.shakeAmount=0,this.shakeDecay=5.5,this.shakeScale=1,this.shakeTime=0,this.dip=0,this.dipVelocity=0,this.roll=0,this.kickZ=0,this.kickVelocity=0,this._offset=new C,this._desired=new C,this._noise=new C,this._tmp=new C,this.snapNextFrame=!0}snap(){this.snapNextFrame=!0}shake(t,e=5.5){this.shakeAmount=Math.max(this.shakeAmount,t*this.shakeScale),this.shakeDecay=e}addDip(t){this.dipVelocity-=t}addKick(t){this.kickVelocity+=t}setShakeScale(t){this.shakeScale=t}update(t,e){const{laneX:A,laneVelocity:i,playerY:s,speed:r,speed01:o,boost:a=0,slideBlend:l=0,airborne:c=0}=e,h=Wt(0,13,we(o));this.targetFov=this.baseFov+h+a*9,this.fov=Xe(this.fov,this.targetFov,.02,t),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix());const u=A*Qe.LANE_FOLLOW,f=Qe.OFFSET_Y+s*.42-l*.5-a*.15,m=Qe.OFFSET_Z+o*.9+a*1.5;if(this._desired.set(u+Qe.OFFSET_X,f,m),this.snapNextFrame)this.position.copy(this._desired),this.snapNextFrame=!1;else{const _=1-Math.pow(Qe.POSITION_DAMPING,t*60);this.position.x=Wt(this.position.x,this._desired.x,_),this.position.y=Wt(this.position.y,this._desired.y,_),this.position.z=Wt(this.position.z,this._desired.z,_)}const v=62,p=13;this.dipVelocity+=(-this.dip*v-this.dipVelocity*p)*t,this.dip+=this.dipVelocity*t,this.dip=an(this.dip,-1.2,.6),this.kickVelocity+=(-this.kickZ*70-this.kickVelocity*15)*t,this.kickZ+=this.kickVelocity*t;const d=an(-i*.05,-.09,.09);this.roll=Xe(this.roll,d,8e-4,t),this.shakeAmount=Math.max(0,this.shakeAmount-this.shakeDecay*this.shakeAmount*t-.02*t),this.shakeTime+=t*34;const g=this.shakeAmount*this.shakeAmount;if(this._noise.set(Math.sin(this.shakeTime*1.13)*g*.42,Math.sin(this.shakeTime*1.61+1.3)*g*.36,Math.sin(this.shakeTime*.91+2.1)*g*.2),this.camera.position.set(this.position.x+this._noise.x,this.position.y+this.dip+this._noise.y,this.position.z+this.kickZ+this._noise.z),this.lookTarget.set(A*.75,Qe.LOOK_HEIGHT+s*.75+l*-.35,-Qe.LOOK_AHEAD-o*2.5),this.snapNextFrame===!1){const _=1-Math.pow(Qe.LOOK_DAMPING,t*60);this.currentLook.x=Wt(this.currentLook.x,this.lookTarget.x,_),this.currentLook.y=Wt(this.currentLook.y,this.lookTarget.y,_),this.currentLook.z=Wt(this.currentLook.z,this.lookTarget.z,_)}this.camera.lookAt(this.currentLook),Math.abs(this.roll)>5e-4&&(this.camera.rotation.z+=this.roll)}menuOrbit(t,e,A=0){const s=e*.22;this.camera.position.set(A+Math.sin(s)*6.2,2.4+Math.sin(e*.4)*.35,Math.cos(s)*6.2),this.camera.lookAt(A,1,0),Math.abs(this.camera.fov-52)>.05&&(this.camera.fov=Xe(this.camera.fov,52,.02,t),this.camera.updateProjectionMatrix()),this.currentLook.set(A,1,0)}reset(){this.shakeAmount=0,this.dip=0,this.dipVelocity=0,this.kickZ=0,this.kickVelocity=0,this.roll=0,this.fov=this.baseFov,this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix(),this.snapNextFrame=!0}}class N0{constructor(t,e=420){this.scene=t,this.budget=e,this.count=0,this.cursor=0,this.positions=new Float32Array(e*3),this.sizes=new Float32Array(e),this.colors=new Float32Array(e*3),this.alphas=new Float32Array(e),this.velocities=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.baseSize=new Float32Array(e),this.gravity=new Float32Array(e),this.drag=new Float32Array(e),this.scrollRate=new Float32Array(e),this.active=new Uint8Array(e);const A=new Pe;A.setAttribute("position",new ne(this.positions,3)),A.setAttribute("aSize",new ne(this.sizes,1)),A.setAttribute("aColor",new ne(this.colors,3)),A.setAttribute("aAlpha",new ne(this.alphas,1)),A.setDrawRange(0,e),this.geometry=A,this.material=new We({transparent:!0,depthWrite:!1,blending:kA,uniforms:{map:{value:Us()},pixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float pixelRatio;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * pixelRatio * (280.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D map;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(map, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
        }
      `}),this.points=new rc(A,this.material),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this._color=new rt;for(let i=0;i<e;i++)this.positions[i*3+1]=-999}setBudget(t){this.activeBudget=Math.min(t,this.budget)}emit(t){const{x:e=0,y:A=1,z:i=0,count:s=12,color:r=16777215,velocity:o={x:0,y:0,z:0},speed:a=3,spread:l=1,size:c=.3,life:h=.6,gravity:u=-9,drag:f=.02,scrollRate:m=0}=t;this._color.set(r);const v=this.activeBudget??this.budget;for(let p=0;p<s;p++){this.count>=v&&this.count>0&&(this.cursor=this.cursor%v);const d=this.cursor;this.cursor=(this.cursor+1)%v,this.count=Math.max(this.count,d+1);const g=d*3;this.positions[g]=e,this.positions[g+1]=A,this.positions[g+2]=i;const _=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1),R=a*(.4+Math.random()*l);this.velocities[g]=o.x+Math.sin(E)*Math.cos(_)*R,this.velocities[g+1]=o.y+Math.cos(E)*R,this.velocities[g+2]=o.z+Math.sin(E)*Math.sin(_)*R,this.colors[g]=this._color.r,this.colors[g+1]=this._color.g,this.colors[g+2]=this._color.b;const b=h*(.6+Math.random()*.7);this.life[d]=b,this.maxLife[d]=b,this.baseSize[d]=c*(.6+Math.random()*.8),this.sizes[d]=this.baseSize[d],this.alphas[d]=1,this.gravity[d]=u,this.drag[d]=f,this.scrollRate[d]=m,this.active[d]=1}}update(t,e=0){let A=!1;for(let i=0;i<this.budget;i++){if(!this.active[i])continue;A=!0;const s=i*3;if(this.life[i]-=t,this.life[i]<=0){this.active[i]=0,this.positions[s+1]=-999,this.alphas[i]=0;continue}const r=Math.max(0,1-this.drag[i]*t*60);this.velocities[s]*=r,this.velocities[s+1]=this.velocities[s+1]*r+this.gravity[i]*t,this.velocities[s+2]*=r,this.positions[s]+=this.velocities[s]*t,this.positions[s+1]+=this.velocities[s+1]*t,this.positions[s+2]+=this.velocities[s+2]*t+this.scrollRate[i]*t;const o=this.life[i]/this.maxLife[i];this.alphas[i]=o*o,this.sizes[i]=this.baseSize[i]*(.3+o*.7),this.positions[s+1]<.05&&this.velocities[s+1]<0&&(this.positions[s+1]=.05,this.velocities[s+1]*=-.35,this.velocities[s]*=.7,this.velocities[s+2]*=.7)}this.points.visible=A,A&&(this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0)}clear(){for(let t=0;t<this.budget;t++)this.active[t]=0,this.positions[t*3+1]=-999,this.alphas[t]=0;this.count=0,this.points.visible=!1,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0}dispose(){this.points.removeFromParent(),this.geometry.dispose(),this.material.dispose()}coinBurst(t,e,A){this.emit({x:t,y:e,z:A,count:10,color:16765286,speed:3.2,spread:1,size:.24,life:.45,gravity:-6,drag:.06}),this.emit({x:t,y:e,z:A,count:4,color:16777215,speed:5,size:.14,life:.28,gravity:-2})}powerupBurst(t,e,A,i){this.emit({x:t,y:e,z:A,count:26,color:i,speed:5.5,spread:1.2,size:.34,life:.75,gravity:-3,drag:.03}),this.emit({x:t,y:e,z:A,count:12,color:16777215,speed:8,size:.2,life:.4,gravity:0,drag:.02})}crashBurst(t,e,A){this.emit({x:t,y:e,z:A,count:34,color:16739146,speed:8,spread:1.5,size:.4,life:.8,gravity:-14,drag:.02}),this.emit({x:t,y:e,z:A,count:16,color:16765286,speed:6,size:.28,life:.6,gravity:-10})}dustPuff(t,e,A,i=8){this.emit({x:t,y:e,z:A,count:i,color:10134961,speed:1.6,spread:1,size:.4,life:.5,gravity:1.2,drag:.08,scrollRate:6})}boostTrail(t,e,A,i=8257435){this.emit({x:t,y:e,z:A,count:3,color:i,speed:1.2,spread:.6,size:.35,life:.35,gravity:1.5,drag:.05,scrollRate:14})}magnetPull(t,e,A){this.emit({x:t,y:e,z:A,count:1,color:5890303,speed:.6,size:.18,life:.3,gravity:0,drag:.02})}shieldBreak(t,e,A){this.emit({x:t,y:e,z:A,count:30,color:16765286,speed:7,size:.3,life:.6,gravity:-6,drag:.03})}}class F0{constructor(t){this.bus=t,this.active=new Map,this.reset()}reset(){this.active.clear(),this.shieldCharges=0,this.magnetRadius=6}level(t){var e;return((e=Kt.data.upgrades)==null?void 0:e[t])??0}durationFor(t){const e=iA[t].duration;return e?t==="multiply"?e+this.level(t)*1.5:t==="boost"?e+this.level(t)*.6:e:0}costFor(t){const e=fc[t],A=this.level(t);return A>=e.maxLevel?null:e.baseCost+A*e.step}purchase(t){const e=this.costFor(t);return e===null?{ok:!1,reason:"maxed"}:Kt.data.coinsBank<e?{ok:!1,reason:"poor"}:(Kt.update(A=>{A.coinsBank-=e,A.upgrades[t]=this.level(t)+1}),{ok:!0})}activate(t,e={}){if(!iA[t])return;const A=iA[t];if(t==="shield")this.shieldCharges=1+Math.floor(this.level(t)/1.5),this.active.set("shield",{timeLeft:1/0,duration:1/0,stacks:this.shieldCharges});else{const i=this.durationFor(t),s=this.active.get(t);this.active.set(t,{timeLeft:i,duration:i,stacks:s?s.stacks+1:1})}t==="magnet"&&(this.magnetRadius=5.5+this.level(t)*1.4),this.bus.emit(Jt.POWERUP_COLLECTED,{id:t,def:A,duration:this.durationFor(t)})}has(t){return this.active.has(t)}fractionFor(t){const e=this.active.get(t);return!e||e.duration===1/0?e?1:0:we(e.timeLeft/e.duration)}consumeShield(){return this.active.has("shield")?(this.shieldCharges-=1,this.shieldCharges<=0&&(this.active.delete("shield"),this.bus.emit(Jt.POWERUP_ENDED,{id:"shield"})),!0):!1}consumeBoost(){return this.active.has("boost")?(this.active.delete("boost"),this.bus.emit(Jt.POWERUP_ENDED,{id:"boost"}),!0):!1}update(t){for(const[e,A]of[...this.active])A.duration!==1/0&&(A.timeLeft-=t,A.timeLeft<=0&&(this.active.delete(e),this.bus.emit(Jt.POWERUP_ENDED,{id:e})))}get scoreMultiplier(){if(!this.active.has("multiply"))return 1;const t=this.active.get("multiply").stacks;return Math.min(4,2+(t-1)*.5)}snapshot(){const t=[];for(const[e,A]of this.active)t.push({id:e,fraction:A.duration===1/0?1:we(A.timeLeft/A.duration),stacks:A.stacks,infinite:A.duration===1/0});return t}}class V0{constructor(t,e){this.particles=t,this.scene=e,this.reset()}reset(){this.particles.clear(),this._speedLineCooldown=0}coinBurst(t,e,A){this.particles.coinBurst(t,e,A)}powerupBurst(t,e,A,i){this.particles.powerupBurst(t,e,A,i)}crashBurst(t,e,A){this.particles.crashBurst(t,e,A)}shieldBreak(t,e,A){this.particles.shieldBreak(t,e,A)}boostTrail(t,e,A){this.particles.boostTrail(t,e,A)}dustPuff(t,e,A,i=6){this.particles.dustPuff(t,e,A,i)}burst(t,e,A,i,s){this.particles.emit({x:t,y:e,z:A,count:s,color:i,speed:6,size:.3,life:.6,gravity:-8})}speedLines(){if(!(this._speedLineCooldown>0)){this._speedLineCooldown=.1;for(let t=0;t<3;t++)this.particles.emit({x:(Math.random()-.5)*8,y:.5+Math.random()*2,z:-6,count:1,color:16777215,speed:2,size:.2,life:.25,gravity:0,scrollRate:26})}}update(t,e){this._speedLineCooldown-=t,this.particles.update(t,e)}}class O0{constructor(t){this.bus=t,this.reset()}reset(){this.score=0,this.coins=0,this.distance=0,this.multiplier=1,this.multiplierProgress=0,this.nearMisses=0,this.powerupsCollected=0,this.obstaclesDodged=0,this.displayScore=0,this.newBest=!1,this._coinStreak=0}update(t,e,A){this.distance+=e;const i=e*ZA.PER_METRE*this.multiplier*((A==null?void 0:A.scoreMultiplier)??1);return this.score+=i,this.multiplierProgress+=e,this.multiplierProgress>=ZA.MULTIPLIER_STEP&&this.multiplier<ZA.MULTIPLIER_MAX&&(this.multiplierProgress-=ZA.MULTIPLIER_STEP,this.multiplier=Math.min(ZA.MULTIPLIER_MAX,this.multiplier+1),this.bus.emit(Jt.MULTIPLIER_CHANGE,{multiplier:this.multiplier})),i}addCoins(t){return this.coins+=t,this._coinStreak+=1,t*ZA.COIN_VALUE*this.multiplier}addNearMiss(){this.nearMisses+=1;const t=ZA.NEAR_MISS*this.multiplier;return this.score+=t,t}addPowerup(){this.powerupsCollected+=1}addDodge(){this.obstaclesDodged+=1}breakStreak(){if(this.multiplier<=1)return this.multiplierProgress=0,0;const t=this.multiplier;return this.multiplier=1,this.multiplierProgress=0,this.bus.emit(Jt.MULTIPLIER_CHANGE,{multiplier:1,lost:t}),t}updateDisplay(t){const e=this.score-this.displayScore;if(Math.abs(e)<1){this.displayScore=this.score;return}const A=e>200?6:2.4;this.displayScore=Math.min(this.score,this.displayScore+e*A*t)}finalize(){const t=Math.floor(this.score),e=Kt.data;return this.newBest=t>e.bestScore,Kt.update(A=>{A.bestScore=Math.max(A.bestScore,t),A.bestDistance=Math.max(A.bestDistance,Math.floor(this.distance)),A.totalRuns+=1,A.totalCoins+=this.coins,A.coinsBank+=this.coins}),{score:t,coins:this.coins,distance:Math.floor(this.distance),bestScore:Kt.data.bestScore,bestDistance:Kt.data.bestDistance,newBest:this.newBest,nearMisses:this.nearMisses,powerups:this.powerupsCollected}}get multiplierProgress01(){return we(this.multiplierProgress/ZA.MULTIPLIER_STEP)}}const q0=[{id:"coins",name:"Toll Take",blurb:"Collect {target} quids",metric:"coins",targets:[40,75,120,180],reward:90},{id:"distance",name:"Long Haul",blurb:"Run {target} metres",metric:"distance",targets:[800,1400,2200,3200],reward:110},{id:"dodges",name:"Clean Sweep",blurb:"Pass {target} obstacles without hitting one",metric:"dodges",targets:[30,60,100,160],reward:100},{id:"powerups",name:"Salvage Run",blurb:"Collect {target} overdrive cells",metric:"powerups",targets:[3,6,10,16],reward:130},{id:"nearmiss",name:"Close Shave",blurb:"Near-miss {target} obstacles",metric:"nearMisses",targets:[8,18,32,55],reward:120},{id:"combo",name:"Streak Keeper",blurb:"Reach a x{multiplier} multiplier",metric:"multiplier",targets:[4,5,6,7],reward:150}],H0=6;class en{constructor(t){this.bus=t,Kt.data.missions||Kt.update(e=>{e.missions=this.roll(3)})}get missions(){return Kt.data.missions}roll(t=3){const e=[...q0],A=[];for(let i=e.length-1;i>0;i--){const s=Math.floor(Math.random()*(i+1));[e[i],e[s]]=[e[s],e[i]]}for(let i=0;i<t;i++){const s=e[i%e.length],r=Math.min(s.targets.length-1,Kt.data.totalRuns%s.targets.length);A.push({templateId:s.id,name:s.name,blurb:s.blurb,metric:s.metric,target:s.targets[r],progress:0,reward:s.reward+r*40,runsLeft:H0,completed:!1})}return A}static metricValue(t,e){switch(t){case"coins":return e.coins;case"distance":return Math.floor(e.distance);case"dodges":return e.obstaclesDodged;case"powerups":return e.powerupsCollected;case"nearMisses":return e.nearMisses;case"multiplier":return e.multiplier;default:return 0}}sync(t){const e=this.missions;let A=!1;for(const i of e){if(i.completed)continue;const s=en.metricValue(i.metric,t);s>i.progress&&(i.progress=s,A=!0),i.progress>=i.target&&(i.completed=!0,A=!0,Kt.update(r=>{r.coinsBank+=i.reward}),this.bus.emit(Jt.MISSION_COMPLETE,{mission:i}))}A&&Kt.save()}onRunComplete(){const t=this.missions;let e=!1;for(let A=0;A<t.length;A++)if(t[A].completed||t[A].runsLeft<=1){const i=this.roll(1)[0];t[A]=i,e=!0}else t[A].runsLeft-=1;e&&this.bus.emit(Jt.TOAST,{text:"New missions available",icon:"target"}),Kt.update(A=>{A.missions=t})}static progressOf(t){return we(t.progress/t.target)}static allComplete(){return this.missions.every(t=>t.completed)}}const Lr=146.83,Nr=[0,3,5,7,10,12,15,14];class Q0{constructor(){this.ctx=null,this.ready=!1,this.enabled=!0,this.musicVolume=xe.get("music"),this.sfxVolume=xe.get("sfx"),this.coinStreak=0,this.lastCoinTime=0,this.musicTimer=null,this.nextNoteTime=0,this.step=0,this.musicIntensity=0,this._noiseBuffer=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}try{this.ctx=new t}catch(e){console.warn("[Audio] could not create AudioContext",e),this.enabled=!1;return}this.master=this.ctx.createGain(),this.master.gain.value=.9,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-14,this.compressor.knee.value=22,this.compressor.ratio.value=8,this.compressor.attack.value=.003,this.compressor.release.value=.22,this.master.connect(this.compressor),this.compressor.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.sfxVolume,this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.master),this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this._makeImpulse(1.6,2.6),this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.value=.16,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this._buildNoise(),this.ready=!0,this._syncVolumes()}_makeImpulse(t,e){const A=this.ctx.sampleRate,i=Math.floor(A*t),s=this.ctx.createBuffer(2,i,A);for(let r=0;r<2;r++){const o=s.getChannelData(r);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/i,e)}return s}_buildNoise(){const t=this.ctx.sampleRate,e=t*2,A=this.ctx.createBuffer(1,e,t),i=A.getChannelData(0);for(let s=0;s<e;s++)i[s]=Math.random()*2-1;this._noiseBuffer=A}_syncVolumes(){if(!this.ready)return;const t=xe.get("sfx"),e=xe.get("music");this.sfxVolume=t,this.musicVolume=e,this.sfxBus.gain.value=t,this.musicBus&&(this.musicBus.gain.value=this._musicOn?e*.5:0)}setVolumes(){this._syncVolumes()}get time(){return this.ctx?this.ctx.currentTime:0}tone({freq:t=440,type:e="sine",duration:A=.2,attack:i=.005,gain:s=.3,detune:r=0,slideTo:o=null,slideTime:a=null,destination:l=null,reverb:c=!1}){if(!this.ready)return;const h=this.ctx.currentTime,u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type=e,u.frequency.setValueAtTime(t,h),u.detune.value=r,o!==null&&u.frequency.exponentialRampToValueAtTime(Math.max(1,o),h+(a??A)),f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(s,h+i),f.gain.exponentialRampToValueAtTime(1e-4,h+A),u.connect(f),f.connect(l??this.sfxBus),c&&f.connect(this.reverb),u.start(h),u.stop(h+A+.02)}noise({duration:t=.2,gain:e=.3,filterType:A="bandpass",frequency:i=1200,q:s=1,sweepTo:r=null,attack:o=.004,destination:a=null}){if(!this.ready)return;const l=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this._noiseBuffer,c.loop=!0;const h=this.ctx.createBiquadFilter();h.type=A,h.frequency.setValueAtTime(i,l),h.Q.value=s,r!==null&&h.frequency.exponentialRampToValueAtTime(Math.max(20,r),l+t);const u=this.ctx.createGain();u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(e,l+o),u.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(u),u.connect(a??this.sfxBus),c.start(l),c.stop(l+t+.02)}playCoin(t=0){if(!this.ready)return;const e=this.time;e-this.lastCoinTime>1.1&&(this.coinStreak=0),this.lastCoinTime=e,this.coinStreak=Math.min(this.coinStreak+1,14);const A=[0,2,4,7,9,12,14,16][Math.min(this.coinStreak-1,7)],i=880*Math.pow(2,A/12);this.tone({freq:i,type:"triangle",duration:.16,gain:.18,attack:.002}),this.tone({freq:i*2,type:"sine",duration:.1,gain:.09,attack:.001,reverb:!0}),this.coinStreak>=6&&this.tone({freq:i*3,type:"sine",duration:.08,gain:.05})}playJump(){this.tone({freq:260,slideTo:620,type:"sawtooth",duration:.16,gain:.1}),this.noise({duration:.14,gain:.06,frequency:900,sweepTo:2600,q:.7})}playLand(){this.noise({duration:.16,gain:.14,filterType:"lowpass",frequency:700,sweepTo:140}),this.tone({freq:130,slideTo:70,type:"sine",duration:.14,gain:.16})}playSlide(){this.noise({duration:.55,gain:.09,frequency:3200,sweepTo:900,q:2.2})}playLaneChange(){this.noise({duration:.12,gain:.055,frequency:1500,sweepTo:3400,q:1.4})}playPowerup(){if(!this.ready)return;const t=523.25;[0,4,7,12,16].forEach((e,A)=>{setTimeout(()=>{this.tone({freq:t*Math.pow(2,e/12),type:"triangle",duration:.3,gain:.14,reverb:!0})},A*55)})}playCrash(){this.noise({duration:.5,gain:.4,filterType:"lowpass",frequency:2400,sweepTo:90,q:.6}),this.tone({freq:180,slideTo:42,type:"square",duration:.42,gain:.22}),this.tone({freq:90,slideTo:30,type:"sawtooth",duration:.6,gain:.14})}playShieldBreak(){this.noise({duration:.34,gain:.26,frequency:4200,sweepTo:700,q:1.6}),this.tone({freq:900,slideTo:260,type:"triangle",duration:.3,gain:.16})}playNearMiss(){this.noise({duration:.22,gain:.075,frequency:600,sweepTo:2800,q:3})}playFootstep(t=10){this.noise({duration:.07,gain:.05,filterType:"lowpass",frequency:500+Math.random()*300,q:1})}playUiHover(){this.tone({freq:620,type:"sine",duration:.05,gain:.05})}playUiClick(){this.tone({freq:480,slideTo:720,type:"triangle",duration:.09,gain:.1})}playUiBack(){this.tone({freq:420,slideTo:260,type:"triangle",duration:.1,gain:.08})}playCountdown(t=!1){this.tone({freq:t?880:520,type:"square",duration:t?.3:.14,gain:.14})}playMission(){[0,5,9,12].forEach((e,A)=>{setTimeout(()=>{this.tone({freq:659.25*Math.pow(2,e/12),type:"sine",duration:.4,gain:.12,reverb:!0})},A*90)})}playRevive(){[0,7,12,19].forEach((e,A)=>{setTimeout(()=>{this.tone({freq:392*Math.pow(2,e/12),type:"triangle",duration:.5,gain:.13,reverb:!0})},A*80)})}startMusic(){!this.ready||this.musicTimer||(this._musicOn=!0,this.nextNoteTime=this.ctx.currentTime+.1,this.step=0,this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime),this.musicBus.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.musicBus.gain.linearRampToValueAtTime(this.musicVolume*.5,this.ctx.currentTime+1.5),this.musicTimer=setInterval(()=>this._scheduleMusic(),40))}stopMusic(t=.6){if(this.ready){if(this._musicOn=!1,this.musicBus){const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setValueAtTime(this.musicBus.gain.value,e),this.musicBus.gain.linearRampToValueAtTime(1e-4,e+t)}this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null)}}setMusicIntensity(t){this.musicIntensity=we(t)}_scheduleMusic(){if(!this.ready||!this._musicOn)return;const e=60/(128+this.musicIntensity*34)/4,A=.12;for(;this.nextNoteTime<this.ctx.currentTime+A;)this._playStep(this.step,this.nextNoteTime,e),this.nextNoteTime+=e,this.step++}_playStep(t,e,A){const i=this.musicBus,s=t%16,r=this.musicIntensity;if(s===0||s===6||s===10){const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(140,e),o.frequency.exponentialRampToValueAtTime(42,e+.12),a.gain.setValueAtTime(.9,e),a.gain.exponentialRampToValueAtTime(.001,e+.18),o.connect(a),a.connect(i),o.start(e),o.stop(e+.2)}if(s%2===1){const o=this.ctx.createBufferSource();o.buffer=this._noiseBuffer;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const l=this.ctx.createGain();l.gain.setValueAtTime(.11+r*.06,e),l.gain.exponentialRampToValueAtTime(.001,e+.05),o.connect(a),a.connect(l),l.connect(i),o.start(e),o.stop(e+.06)}if(s===0||s===3||s===6||s===8||s===11||s===14){const o=Nr[[0,0,4,2,0,3][Math.floor(s/3)]??0],a=Lr*Math.pow(2,o/12),l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(320+r*900,e),c.Q.value=6;const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.32,e+.012),h.gain.exponentialRampToValueAtTime(.001,e+A*1.8),l.type="sawtooth",l.frequency.value=a,l.connect(c),c.connect(h),h.connect(i),l.start(e),l.stop(e+A*2)}if(r>.12&&s%2===0){const o=t/2%Nr.length,a=Nr[o],l=Lr*4*Math.pow(2,a/12),c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="triangle",c.frequency.value=l,h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.055+r*.05,e+.01),h.gain.exponentialRampToValueAtTime(.001,e+A*1.4),c.connect(h),h.connect(i),h.connect(this.reverb),c.start(e),c.stop(e+A*1.5)}s===0&&t%32===0&&[0,3,7].forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sawtooth",l.frequency.value=Lr*2*Math.pow(2,o/12),l.detune.value=(a-1)*6;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(500+r*1400,e),c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.05,e+.4),c.gain.exponentialRampToValueAtTime(.001,e+A*14),l.connect(h),h.connect(c),c.connect(i),c.connect(this.reverb),l.start(e),l.stop(e+A*15)})}startWind(){if(!this.ready||this._windSource)return;const t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=500,e.Q.value=.6;const A=this.ctx.createGain();A.gain.value=0,t.connect(e),e.connect(A),A.connect(this.sfxBus),t.start(),this._windSource=t,this._windGain=A,this._windFilter=e}setWind(t){if(!this._windGain)return;const e=this.ctx.currentTime;this._windGain.gain.setTargetAtTime(t*.09,e,.15),this._windFilter.frequency.setTargetAtTime(340+t*900,e,.2)}stopWind(){if(this._windSource){try{this._windSource.stop()}catch{}this._windSource=null,this._windGain=null,this._windFilter=null}}dispose(){var t;this.stopMusic(.1),this.stopWind(),(t=this.ctx)==null||t.close(),this.ctx=null,this.ready=!1}}const Qt=new Q0,ft=n=>document.getElementById(n);class k0{constructor({bus:t,powerups:e,missions:A,getCharacter:i}){this.bus=t,this.powerups=e,this.missions=A,this.getCharacter=i,this.currentScreen="loading",this.cache={},this.pendingRevive=null,this._toastTimers=new Set,this.collectElements(),this.bindEvents(),this.buildStaticUI()}collectElements(){this.el={loadingFill:ft("loading-fill"),loadingStatus:ft("loading-status"),startGate:ft("btn-start-gate"),menuBestScore:ft("menu-best-score"),menuBestDistance:ft("menu-best-distance"),menuCoins:ft("menu-coins"),menuTagline:ft("menu-tagline"),hud:ft("hud"),hudScore:ft("hud-score"),hudDistance:ft("hud-distance"),hudSector:ft("hud-sector"),hudCoins:ft("hud-coins"),hudMultiplier:ft("hud-multiplier"),hudMultiplierValue:ft("hud-multiplier-value"),hudMultiplierFill:ft("hud-multiplier-fill"),hudPowerups:ft("hud-powerups"),hudMission:ft("hud-mission"),streakPop:ft("streak-pop"),countdown:ft("countdown"),countdownNum:ft("countdown-num"),countdownHint:ft("countdown-hint"),pauseStats:ft("pause-stats"),reviveTimer:ft("revive-timer"),reviveCost:ft("revive-cost"),finalScore:ft("final-score"),finalCoins:ft("final-coins"),finalDistance:ft("final-distance"),finalBest:ft("final-best"),finalSpeed:ft("final-speed"),finalNearMiss:ft("final-nearmiss"),finalPowerups:ft("final-powerups"),gameoverBanner:ft("gameover-banner"),gameoverMissions:ft("gameover-missions"),rosterGrid:ft("roster-grid"),missionList:ft("mission-list"),upgradeList:ft("upgrade-list"),upgradesBank:ft("upgrades-bank-value"),toasts:ft("toasts"),fxVignette:ft("fx-vignette"),fxDamage:ft("fx-damage"),fxSpeedlines:ft("fx-speedlines"),perf:ft("perf"),screens:{loading:ft("screen-loading"),menu:ft("screen-menu"),characterSelect:ft("screen-characters"),missions:ft("screen-missions"),settings:ft("screen-settings"),upgrades:ft("screen-upgrades"),paused:ft("screen-pause"),revive:ft("screen-revive"),gameOver:ft("screen-gameover")}}}bindEvents(){const t=(e,A,i)=>{const s=ft(e);s&&s.addEventListener(A,i)};t("btn-start-gate","click",()=>this.bus.emit("ui:startGame")),t("btn-play","click",()=>this.bus.emit("ui:startGame")),t("btn-characters","click",()=>this.showScreen("characterSelect")),t("btn-missions","click",()=>{this.refreshMissions(),this.showScreen("missions")}),t("btn-settings","click",()=>this.showScreen("settings")),t("btn-characters-back","click",()=>this.showScreen("menu")),t("btn-missions-back","click",()=>this.showScreen("menu")),t("btn-settings-back","click",()=>this.showScreen("menu")),t("btn-upgrades-back","click",()=>this.bus.emit("ui:closeUpgrades")),t("btn-hud-pause","click",()=>this.bus.emit("ui:pause")),t("btn-resume","click",()=>this.bus.emit("ui:resume")),t("btn-pause-restart","click",()=>this.bus.emit("ui:restart")),t("btn-pause-quit","click",()=>this.bus.emit("ui:quit")),t("btn-pause-loadout","click",()=>this.bus.emit("ui:openUpgrades","paused")),t("btn-loadout","click",()=>this.bus.emit("ui:openUpgrades","gameOver")),t("btn-again","click",()=>this.bus.emit("ui:restart")),t("btn-home","click",()=>this.bus.emit("ui:quit")),t("btn-revive","click",()=>this.bus.emit("ui:revive")),t("btn-revive-giveup","click",()=>this.bus.emit("ui:endRun")),t("btn-reset-data","click",()=>{confirm("Reset all progress, unlocks and high scores? This cannot be undone.")&&(Kt.reset(),this.bus.emit("ui:dataReset"))}),this.bindSegmented("set-quality","quality",e=>{this.bus.emit("ui:qualityChange",e)}),this.bindSlider("set-music","music",e=>{this.bus.emit("ui:audioChange"),this.setLabel("val-music",`${Math.round(e*100)}%`)}),this.bindSlider("set-sfx","sfx",e=>{this.bus.emit("ui:audioChange"),this.setLabel("val-sfx",`${Math.round(e*100)}%`)}),this.bindSlider("set-shake","screenShake",e=>{this.setLabel("val-shake",`${Math.round(e*100)}%`)}),this.bindToggle("set-fps","showFps",e=>{this.el.perf.hidden=!e}),this.bindToggle("set-mouse","mouseSteering",e=>{this.bus.emit("ui:steeringChange",e)}),this.bindToggle("set-invert","invertLane",()=>{}),this.bus.on(Jt.TOAST,e=>this.toast(e.text,e.icon,e.color)),this.bus.on(Jt.MULTIPLIER_CHANGE,({multiplier:e,lost:A})=>{this.pulseMultiplier(e),A&&this.toast(`Streak broken — was ×${A}`,"⚠","#ff5b5b")}),this.bus.on(Jt.MISSION_COMPLETE,({mission:e})=>{this.toast(`${e.name} complete! +${e.reward} quids`,"◎","#7dff9b"),this.refreshMissions()}),this.bus.on(Jt.SECTION_CHANGE,({sector:e})=>{this.setText(this.el.hudSector,e.name.toUpperCase())})}bindSegmented(t,e,A){const i=ft(t);i&&(i.addEventListener("click",s=>{const r=s.target.closest(".segmented__option");if(!r)return;const o=r.dataset.value;xe.set(e,o),this.syncSegmented(t,o),A(o)}),this.syncSegmented(t,xe.get(e)))}syncSegmented(t,e){const A=ft(t);if(A)for(const i of A.querySelectorAll(".segmented__option"))i.classList.toggle("segmented__option--active",i.dataset.value===e)}bindSlider(t,e,A){const i=ft(t);if(!i)return;const s=xe.get(e);i.value=Math.round(s*100),this.syncSliderFill(i),i.addEventListener("input",()=>{const r=Number(i.value)/100;xe.setVolume(e,r),this.syncSliderFill(i),A(r)})}syncSliderFill(t){const e=Number(t.value);t.style.setProperty("--fill",`${e}%`)}bindToggle(t,e,A){const i=ft(t);if(!i)return;const s=()=>{const r=xe.get(e);i.setAttribute("aria-checked",String(!!r))};i.addEventListener("click",()=>{const r=!xe.get(e);xe.set(e,r),s(),A(r)}),s()}showScreen(t){this.currentScreen=t;for(const[e,A]of Object.entries(this.el.screens))A&&A.classList.toggle("screen--active",e===t)}hideAllScreens(){this.showScreen(null)}showCountdown(t){if(this.el.countdown.classList.toggle("countdown--active",t),!t)return;const e=this.el.countdownHint;e.style.animation="none",e.offsetHeight,e.style.animation=""}setCountdownText(t,e=!1){if(this.cache.countdownText===t)return;this.cache.countdownText=t;const A=this.el.countdownNum;A.textContent=t,A.classList.toggle("go",e),A.classList.remove("tick"),A.offsetWidth,A.classList.add("tick")}showHud(t){this.el.hud.classList.toggle("hud--active",t)}buildStaticUI(){this.refreshMenuStats(),this.buildRoster(),this.refreshMissions(),this.refreshUpgrades(),this.setLabel("val-music",`${Math.round(xe.get("music")*100)}%`),this.setLabel("val-sfx",`${Math.round(xe.get("sfx")*100)}%`),this.setLabel("val-shake",`${Math.round(xe.get("screenShake")*100)}%`)}refreshMenuStats(){this.setText(this.el.menuBestScore,tA(Kt.data.bestScore)),this.setText(this.el.menuBestDistance,Sr(Kt.data.bestDistance)),this.setText(this.el.menuCoins,tA(Kt.data.coinsBank))}setSectorName(t){this.setText(this.el.menuTagline,t)}buildRoster(){const t=this.el.rosterGrid;if(!t)return;t.innerHTML="";const e=this.getCharacter(),A={vela:0,reyes:300,sable:900,brook:2200};for(const i of Jr){const s=A[i.id]??99999,r=Kt.data.coinsBank>=s,o=document.createElement("button");o.className="charcard",o.style.setProperty("--card-accent",`#${i.palette.jacket.toString(16).padStart(6,"0")}`),i.id===e&&o.classList.add("charcard--selected"),r||o.classList.add("charcard--locked");const a=document.createElement("div");a.className="charcard__avatar",a.innerHTML=this.avatarSvg(i);const l=document.createElement("span");l.className="charcard__name",l.textContent=i.name;const c=document.createElement("span");c.className="charcard__role",c.textContent=i.role;const h=document.createElement("span");if(h.className="charcard__blurb",h.textContent=r?i.blurb:`Earn ${tA(s-Kt.data.coinsBank)} more quids to unlock`,o.append(a,l,c,h),!r){const u=document.createElement("span");u.className="charcard__lock",u.textContent="🔒",o.append(u)}o.addEventListener("click",()=>{if(!r){this.toast(`${i.name} is locked`,"🔒");return}this.bus.emit("ui:selectCharacter",i.id),this.buildRoster(),xl()}),t.append(o)}}avatarSvg(t){const e=t.palette,A=l=>`#${l.toString(16).padStart(6,"0")}`,i=A(e.jacket),s=A(e.jacketDark),r=A(e.skin),o=A(e.hair),a=t.accessory==="goggles"?`<circle cx="78" cy="42" r="8" fill="none" stroke="${A(e.trim)}" stroke-width="4"/><circle cx="102" cy="42" r="8" fill="none" stroke="${A(e.trim)}" stroke-width="4"/>`:t.accessory==="hardhat"?'<path d="M62 38 a28 22 0 0 1 56 0 z" fill="#ffc233"/><rect x="58" y="36" width="64" height="6" rx="3" fill="#ffc233"/>':t.accessory==="mask"?'<rect x="68" y="46" width="44" height="20" rx="6" fill="#2a3038"/>':"";return`<svg viewBox="0 0 160 130" width="100%" height="100%" aria-hidden="true">
      <defs>
        <linearGradient id="g-${t.id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${i}" stop-opacity="0.35"/>
          <stop offset="1" stop-color="${i}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="160" height="130" fill="url(#g-${t.id})"/>
      <path d="M50 130 v-22 a30 30 0 0 1 60 0 v22 z" fill="${i}"/>
      <path d="M62 130 v-20 a18 18 0 0 1 36 0 v20 z" fill="${s}" opacity="0.7"/>
      <rect x="66" y="26" width="28" height="24" rx="9" fill="${r}"/>
      <circle cx="80" cy="30" r="17" fill="${r}"/>
      <path d="M63 30 a17 17 0 0 1 34 0 l0 -6 a17 17 0 0 0 -34 0 z" fill="${o}"/>
      <circle cx="73" cy="42" r="2.6" fill="#1b1f26"/>
      <circle cx="87" cy="42" r="2.6" fill="#1b1f26"/>
      ${a}
      <rect x="96" y="86" width="26" height="20" rx="5" fill="${A(e.bag)}"/>
    </svg>`}refreshMissions(){const t=this.el.missionList;if(!t)return;t.innerHTML="";for(const s of this.missions.missions){const r=en.progressOf(s),o=document.createElement("div");o.className="mission"+(s.completed?" mission--complete":""),o.innerHTML=`
        <div class="mission__top">
          <span class="mission__name">${s.name}</span>
          <span class="mission__reward">+${s.reward} ◈</span>
        </div>
        <div class="mission__blurb">${s.blurb.replace("{target}",s.target).replace("{multiplier}",s.target)}</div>
        <div class="mission__bar"><span style="width:${r*100}%"></span></div>
        <div class="mission__foot">
          <span>${tA(Math.min(s.progress,s.target))} / ${tA(s.target)}</span>
          <span>${s.completed?"Complete":`${s.runsLeft} runs left`}</span>
        </div>`,t.append(o)}const e=this.missions.missions.filter(s=>s.completed).length,A=ft("mission-stat-total");A&&(A.textContent=String(e));const i=ft("mission-stat-runs");i&&(i.textContent=String(Kt.data.totalRuns)),this.refreshHudMissions()}refreshUpgrades(){const t=this.el.upgradeList;if(!t)return;t.innerHTML="";for(const A of dc){const i=iA[A],s=fc[A],r=this.powerups.level(A),o=this.powerups.costFor(A),a=o===null,l=document.createElement("div");l.className="upgrade",l.style.setProperty("--up-accent",i.cssColor);const c=Array.from({length:s.maxLevel},(u,f)=>`<span class="upgrade__pip ${f<r?"upgrade__pip--on":""}"></span>`).join("");l.innerHTML=`
        <div class="upgrade__icon" style="color:${i.cssColor}">${_l[A]}</div>
        <div class="upgrade__body">
          <div class="upgrade__name">${s.label}</div>
          <div class="upgrade__desc">${i.blurb} · Level ${r}/${s.maxLevel}</div>
          <div class="upgrade__pips">${c}</div>
        </div>
        <button class="btn ${a?"btn--muted":"btn--ghost"} btn--small" ${a?"disabled":""}>
          ${a?"MAX":`${o} ◈`}
        </button>`,l.querySelector("button").addEventListener("click",()=>{const u=this.powerups.purchase(A);u.ok?(xl(),this.toast(`${s.label} upgraded`,"↑",i.cssColor),this.refreshUpgrades(),this.refreshMenuStats()):(z0(),this.toast(u.reason==="maxed"?"Already at maximum":"Not enough quids","✕","#ff5b5b"))}),t.append(l)}const e=this.el.upgradesBank;e&&(e.textContent=tA(Kt.data.coinsBank))}updateHud(t,e,A){const i=Math.floor(t.displayScore);this.cache.score!==i&&(this.cache.score=i,this.el.hudScore.textContent=tA(i));const s=Math.floor(t.distance);this.cache.distance!==s&&(this.cache.distance=s,this.el.hudDistance.textContent=String(s));const r=t.coins;this.cache.coins!==r&&(this.cache.coins=r,this.el.hudCoins.textContent=tA(r),this.bump(this.el.hudCoins.parentElement,"hud-coins--bump"));const o=t.multiplier;this.cache.multiplier!==o&&(this.cache.multiplier=o,this.el.hudMultiplierValue.textContent=String(o),this.el.hudMultiplier.classList.toggle("multiplier--hot",o>=4));const a=t.multiplierProgress01;Math.abs((this.cache.multFill??-1)-a)>.01&&(this.cache.multFill=a,this.el.hudMultiplierFill.style.width=`${a*100}%`),this.updateHudPowerups(e),this.refreshHudMissions(t);const l=A>.55;this.cache.speedLines!==l&&(this.cache.speedLines=l,this.el.fxSpeedlines.classList.toggle("fx-speedlines--on",l))}updateHudPowerups(t){var s;const e=t.snapshot(),A=e.map(r=>`${r.id}${Math.round(r.fraction*20)}`).join("|");if(this.cache.powerupsKey===A)return;const i=((s=this.cache.powerupsKey)==null?void 0:s.split("|").map(r=>r.split(/(?=\d)/)[0]).join("|"))!==A.split("|").map(r=>r.split(/(?=\d)/)[0]).join("|");if(this.cache.powerupsKey=A,i||!this.el.hudPowerups.childElementCount){this.el.hudPowerups.innerHTML="";for(const r of e){const o=iA[r.id],a=document.createElement("div");a.className="pu",a.style.setProperty("--pu-accent",o.cssColor),a.innerHTML=`
          <div class="pu__icon">
            ${_l[r.id]}
            <span class="pu__ring"></span>
          </div>`,a.dataset.id=r.id,this.el.hudPowerups.append(a)}}[...this.el.hudPowerups.children].forEach((r,o)=>{const a=e[o];if(!a)return;const l=r.querySelector(".pu__ring");l&&(l.style.width=`${a.fraction*100}%`),r.classList.toggle("pu--expiring",!a.infinite&&a.fraction<.25)})}refreshHudMissions(t){var r;const A=this.missions.missions.slice(0,2),i=A.map(o=>`${o.templateId}${en.progressOf(o)}`).join("|");if(this.cache.hudMissionKey===i)return;const s=((r=this.cache.hudMissionKey)==null?void 0:r.split("|").map(o=>o.slice(0,4)).join())!==i.split("|").map(o=>o.slice(0,4)).join();if(this.cache.hudMissionKey=i,s||!this.el.hudMission.childElementCount){this.el.hudMission.innerHTML="";for(const o of A){const a=document.createElement("div");a.className="mmini",a.innerHTML=`
          <span class="mmini__name"></span>
          <span class="mmini__count"></span>
          <span class="mmini__bar"><span></span></span>`,this.el.hudMission.append(a)}}[...this.el.hudMission.children].forEach((o,a)=>{const l=A[a];if(!l)return;const c=en.progressOf(l);o.classList.toggle("mmini--complete",l.completed),o.querySelector(".mmini__name").textContent=l.completed?`${l.name}`:l.name,o.querySelector(".mmini__count").textContent=l.completed?"✓":`${Math.floor(Math.min(l.progress,l.target))}/${l.target}`,o.querySelector(".mmini__bar span").style.width=`${c*100}%`})}pulseMultiplier(){const t=this.el.hudMultiplier;t.classList.remove("multiplier--pulse"),t.offsetWidth,t.classList.add("multiplier--pulse")}showStreak(t){const e=this.el.streakPop;e.textContent!==t&&(e.textContent=t),e.classList.remove("streak-pop--show"),e.offsetWidth,e.classList.add("streak-pop--show")}showPauseStats(t){const e=[{label:"Score",value:tA(Math.floor(t.displayScore))},{label:"Quids",value:tA(t.coins)},{label:"Distance",value:Sr(t.distance)}];this.el.pauseStats.innerHTML=e.map(A=>`<div class="pstat"><span class="pstat__label">${A.label}</span><span class="pstat__value">${A.value}</span></div>`).join("")}showGameOver(t,e){this.setText(this.el.finalScore,tA(t.score)),this.setText(this.el.finalCoins,tA(t.coins)),this.setText(this.el.finalDistance,Sr(t.distance)),this.setText(this.el.finalBest,tA(t.bestScore)),this.setText(this.el.finalSpeed,`${Math.round(t.topSpeed*3.6)} km/h`),this.setText(this.el.finalNearMiss,String(t.nearMisses)),this.setText(this.el.finalPowerups,String(t.powerups)),this.el.gameoverBanner.classList.toggle("gameover__banner--show",!!t.newBest),this.el.gameoverMissions.innerHTML=e.map(A=>`<div class="mres"><span class="mres__icon">◎</span><span>${A.name}</span><span class="mres__reward">+${A.reward} ◈</span></div>`).join(""),this.refreshMenuStats(),this.buildRoster()}updateReviveTimer(t,e){this.cache.reviveTimer!==t&&(this.cache.reviveTimer=t,this.el.reviveTimer.textContent=t.toFixed(1)),this.cache.reviveCost!==e&&(this.cache.reviveCost=e,this.el.reviveCost.textContent=e)}flashDamage(){const t=this.el.fxDamage;t.classList.remove("fx-damage--hit"),t.offsetWidth,t.classList.add("fx-damage--hit"),clearTimeout(this._damageTimer),this._damageTimer=setTimeout(()=>{t.classList.remove("fx-damage--hit")},260)}setVignette(t){this.cache.vignette!==t&&(this.cache.vignette=t,this.el.fxVignette.style.opacity=String(t))}toast(t,e="✦",A=null){for(;this.el.toasts.childElementCount>=3;)this.el.toasts.firstElementChild.remove();const i=document.createElement("div");i.className="toast",A&&i.style.setProperty("--toast-accent",A),i.innerHTML=`<span class="toast__icon">${e}</span><span></span>`,i.lastElementChild.textContent=t,this.el.toasts.append(i);const s=setTimeout(()=>{i.classList.add("toast--leaving");const r=setTimeout(()=>i.remove(),280);this._toastTimers.add(r)},2200);this._toastTimers.add(s)}setLoadingProgress(t,e){this.el.loadingFill.style.width=`${we(t)*100}%`,e&&(this.el.loadingStatus.textContent=e)}showStartGate(){this.el.startGate.hidden=!1,this.el.loadingStatus.textContent="Ready"}setText(t,e){if(!t)return;const A=String(e);t.textContent!==A&&(t.textContent=A)}setLabel(t,e){this.setText(ft(t),e)}bump(t,e){t&&(t.classList.remove(e),t.offsetWidth,t.classList.add(e))}setPerf(t){this.el.perf.hidden||(this.el.perf.textContent=t)}}const _l={magnet:"🧲",shield:"🛡",multiply:"✕",boost:"⚡"},xl=()=>Qt.playUiClick(),z0=()=>Qt.playUiBack(),wl=5,Xi=250,G0=2.6;class W0{constructor(){this.bus=new ng,this.state=new og(this.bus),this.quality=this.detectQuality(),this.clock={elapsed:0},this.hitstop=0,this.timeScale=1,this.topSpeed=Ve.START,this.completedMissions=[],this._running=!1,this._rafHandle=null}async boot(){return this.setupRenderer(),this.setupScene(),this.input=new cg(document.body),this.score=new O0(this.bus),this.powerups=new F0(this.bus),this.missions=new en(this.bus),this.ui=new k0({bus:this.bus,powerups:this.powerups,missions:this.missions,getCharacter:()=>Kt.data.lastCharacter}),await this.pretendLoad(),this.world=new D0({scene:this.scene,renderer:this.renderer,camera:this.camera,bus:this.bus,quality:this.quality}),this.particles=new N0(this.scene,this.quality.particleBudget),this.effects=new V0(this.particles,this.scene),this.player=new U0({scene:this.scene,bus:this.bus,world:this.world,input:this.input}),this.player.setCharacter(Kt.data.lastCharacter),this.cameraRig=new L0(this.camera,this.bus),this.cameraRig.setShakeScale(xe.get("screenShake")),Tg(this.renderer),this.bindGameplayEvents(),this.bindUICallbacks(),this.bindStateChanges(),this.setupMenuScene(),this.loop=new ig(t=>this.update(t),(t,e)=>this.render(t,e)),this.ui.showScreen("loading"),this.loop.start(),await El(),this.ui.showStartGate(),this}async pretendLoad(){const t=[[.15,"Pouring the deck…"],[.4,"Lighting the skyline…"],[.65,"Loading freight…"],[.85,"Waking the couriers…"],[1,"Ready"]];for(const[e,A]of t)this.ui.setLoadingProgress(e,A),await El(),await Y0(90)}setupRenderer(){const t=document.getElementById("stage");this.renderer=new ic({canvas:t,antialias:this.quality.particleBudget>150,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=this.quality.shadows,this.renderer.shadowMap.type=Sl,this.renderer.toneMapping=bl,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=pe,this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),window.addEventListener("orientationchange",this._onResize)}setupScene(){this.scene=new nc,this.camera=new AA(62,window.innerWidth/window.innerHeight,.1,420),this.camera.position.set(0,3.4,7.4),this.postfx=new Eg(this.renderer,this.scene,this.camera,this.quality)}detectQuality(){const t=xe.get("quality");if(t!=="auto")return $A[t]??$A.medium;const e=navigator.hardwareConcurrency??4,A=navigator.deviceMemory??4;return/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||e<=4||A<=4?$A.medium:e>=8&&A>=8?$A.high:$A.medium}monitorPerformance(t){if(xe.get("quality")!=="auto"||this._qualityLocked||(this._fpsSamples=this._fpsSamples??[],this._fpsSamples.push(t),this._fpsSamples.length>90&&this._fpsSamples.shift(),this._fpsSamples.length<60))return;this._fpsSamples.reduce((A,i)=>A+i,0)/this._fpsSamples.length<42&&this.quality!==$A.low&&(this.setQuality("low"),this._qualityLocked=!0,this.ui.toast("Graphics stepped down to keep it smooth","⚙"))}setQuality(t){const e=$A[t]??$A.medium;this.quality=e,this.renderer.shadowMap.enabled=e.shadows,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelRatioCap)),this.world.atmosphere.setShadowQuality(e.shadows,e.shadowMapSize),this.postfx.applyQuality(e),this.particles&&this.particles.setBudget(e.particleBudget),this.resize()}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.postfx.setSize(t,e)}bindGameplayEvents(){const t=this.bus;t.on(Jt.LANE_CHANGE,()=>Qt.playLaneChange()),t.on(Jt.JUMP,()=>{Qt.playJump(),this.effects.dustPuff(this.player.laneX,.05,0,6)}),t.on(Jt.LAND,({hard:e})=>{Qt.playLand(),this.effects.dustPuff(this.player.laneX,.04,0,e?12:6),this.cameraRig.addDip(e?.34:.18),e&&this.cameraRig.shake(.1,7)}),t.on(Jt.SLIDE_START,()=>{Qt.playSlide(),this.effects.dustPuff(this.player.laneX,.08,.4,10)}),t.on(Jt.NEAR_MISS,()=>{this.score.addNearMiss(),Qt.playNearMiss(),this.ui.showStreak("NEAR MISS"),this.cameraRig.shake(.06,9),this.postfx.punchAberration(.0025),this.effects.speedLines()}),t.on(Jt.CRASH,()=>this.handleCrash()),t.on(Jt.SHIELD_BREAK,({record:e})=>this.handleShieldBreak(e)),t.on(Jt.MULTIPLIER_CHANGE,()=>{this.ui.pulseMultiplier(),Qt.playUiClick()})}bindUICallbacks(){const t=this.bus;t.on("ui:startGame",()=>{Qt.init(),Qt.startMusic(),Qt.startWind(),this.startRun()}),t.on("ui:pause",()=>this.pause()),t.on("ui:resume",()=>this.resume()),t.on("ui:restart",()=>this.startRun()),t.on("ui:quit",()=>this.toMenu()),t.on("ui:endRun",()=>this.endRun()),t.on("ui:revive",()=>this.attemptRevive()),t.on("ui:openUpgrades",e=>{this.ui.refreshUpgrades(),this.ui.showScreen("upgrades"),this._upgradesReturn=e}),t.on("ui:closeUpgrades",()=>{const e=this._upgradesReturn??"menu";e==="paused"?this.ui.showScreen("paused"):e==="gameOver"?this.ui.showScreen("gameOver"):this.ui.showScreen("menu")}),t.on("ui:selectCharacter",e=>{Kt.update(A=>{A.lastCharacter=e}),this.player.setCharacter(e),Qt.playUiClick()}),t.on("ui:qualityChange",e=>{e==="auto"?(this._qualityLocked=!1,this._fpsSamples=[],this.setQuality("medium")):this.setQuality(e)}),t.on("ui:audioChange",()=>{Qt.init(),Qt.setVolumes()}),t.on("ui:steeringChange",e=>{this.input.mouseSteering=e,e||this.input.resetSteering(),this.ui.toast(e?"Mouse steering on":"Mouse steering off","🖱")}),t.on("ui:dataReset",()=>{this.missions.roll(3),Kt.update(e=>{e.missions=this.missions.roll(3)}),this.ui.buildStaticUI(),this.player.setCharacter(Kt.data.lastCharacter),this.toMenu()})}bindStateChanges(){this.state.subscribe((t,e)=>{var i,s,r,o;const A=ms(t);this.ui.showHud(A.hud),t===Pt.MENU&&((i=this.world)==null||i.setPaused(!0),(s=this.particles)==null||s.clear(),this.setupMenuScene()),t===Pt.PAUSED&&((r=this.world)==null||r.setPaused(!0),this.ui.showPauseStats(this.score),Qt.setWind(0)),t===Pt.PLAYING&&((o=this.world)==null||o.setPaused(!1),this.loop.resync())})}setupMenuScene(){this.world.setSector(ei[1],!0),this.world.generator.reset();for(let t=0;t<14;t++)this.world.generator._generateRow(12,ei[1]);this.player.setIdle(!0),this.player.root.position.set(0,0,0),this.cameraRig.snap()}startRun(){Qt.init(),Qt.startMusic(),this.completedMissions=[],this.score.reset(),this.powerups.reset(),this.world.reset(0),this.world.setPaused(!1),this.particles.clear(),this.effects.reset(),this.player.reset(Ve.START),this.player.setIdle(!1),this.topSpeed=Ve.START,this.timeScale=1,this.hitstop=0,this._crashHandled=!1,this._canRevive=!1,this._reviveCountdown=0,this.reviveTime=0,this.cameraRig.reset(),this.postfx.setDesaturate(0),this.postfx.setScanline(0),this.ui.setVignette(0),this.ui.cache={};for(let t=0;t<10;t++)this.world.generator._generateRow(Ve.START,this.world.sector);this.countdown=G0,this.state.transitionTo(Pt.COUNTDOWN),this.ui.hideAllScreens(),this.ui.showCountdown(!0),this.input.mouseSteering=xe.get("mouseSteering"),this.input.resetSteering(),this.input.clear(),this.loop.resync()}pause(){this.state.canPause&&(this.state.transitionTo(Pt.PAUSED),this.ui.showScreen("paused"),Qt.playUiBack())}resume(){this.state.is(Pt.PAUSED)&&(this.state.transitionTo(Pt.PLAYING),this.ui.showScreen("playing"),this.loop.resync(),Qt.playUiClick())}toMenu(){Qt.stopMusic(),Qt.stopWind(),this.state.transitionTo(Pt.MENU),this.ui.showScreen("menu"),this.ui.refreshMenuStats(),this.ui.buildRoster(),this.setupMenuScene()}endRun(){const t=this.score.finalize();t.topSpeed=this.topSpeed,this.missions.onRunComplete(),this.completedMissions=this.missions.missions.filter(e=>e.completed),this.ui.showGameOver(t,this.completedMissions),this.state.transitionTo(Pt.GAME_OVER),this.ui.showScreen("gameOver"),this.world.setPaused(!0),Qt.stopMusic(),Qt.setWind(0),this.postfx.setDesaturate(.5)}offerRevive(){this.reviveTime=wl,this.state.transitionTo(Pt.REVIVE),this.ui.showScreen("revive"),this.ui.updateReviveTimer(wl,Xi)}attemptRevive(){if(Kt.data.coinsBank<Xi){this.ui.toast(`Need ${Xi} quid bank to recover`,"✕","#ff5b5b"),Qt.playUiBack();return}Kt.update(t=>{t.coinsBank-=Xi}),this.clearPathAhead(),this.player.reset(this.player.baseSpeed*.85),this.player.invulnerable=2.2,this.cameraRig.reset(),this.postfx.setDesaturate(0),this.state.transitionTo(Pt.PLAYING),this.ui.showScreen("playing"),this.loop.resync(),Qt.playRevive(),this.ui.toast("Recovered — go!","↺","#7dff9b")}clearPathAhead(){for(let t=this.world.generator.live.length-1;t>=0;t--){const e=this.world.generator.live[t];e.z>-18&&(this.world.obstacles.release(e.obj),this.world.generator.live.splice(t,1),this.effects.burst(e.obj.position.x,1.2,e.z,iA.shield.color,10))}for(let t=this.world.generator.livePowerups.length-1;t>=0;t--)this.world.generator.livePowerups[t].z>-18&&(this.world.pickups.releaseAt(t),this.world.generator.livePowerups.splice(t,1))}handleCrash(){const t=this._crashRecord;if(this.powerups.has("shield")){this.powerups.consumeShield(),this.bus.emit(Jt.SHIELD_BREAK,{record:t}),this.handleShieldBreak(t);return}if(this.powerups.has("boost")){this.powerups.consumeBoost(),this.player.setBoost(!1),this.smashThrough(t);return}this.endCrash(t)}handleShieldBreak(t){const e=this.player.laneX;this.effects.shieldBreak(e,1,0),this.cameraRig.shake(.5,4.5),this.cameraRig.addKick(.6),this.postfx.flash(iA.shield.color,.4),this.postfx.punchAberration(.008),Qt.playShieldBreak(),this.ui.flashDamage(),this.score.breakStreak(),this.player.invulnerable=1,t&&this.destroyRecord(t)}smashThrough(t){const e=this.player.laneX;this.effects.crashBurst(e,1.1,0),this.cameraRig.shake(.62,3.6),this.cameraRig.addKick(1.1),this.cameraRig.addDip(.3),this.postfx.flash(iA.boost.color,.55),this.postfx.punchAberration(.012),Qt.playCrash(),this.ui.flashDamage(),this.score.breakStreak(),this.player.invulnerable=.8;let A=0;for(let i=this.world.generator.live.length-1;i>=0;i--){const s=this.world.generator.live[i];Math.abs(s.lane-this.player.lane)<=0&&s.z>-14&&A<6&&(this.effects.burst(s.obj.position.x,1.2,s.z,8257435,14),this.destroyRecord(s,i),A++)}this.ui.showStreak("SMASH!"),this.score.addNearMiss()}endCrash(t){this.player.alive=!1,this.score.breakStreak();const e=this.player.laneX;this.effects.crashBurst(e,1,0),this.cameraRig.shake(.85,3.2),this.cameraRig.addDip(.55),this.cameraRig.addKick(1.4),this.postfx.flash(16735067,.55,2.2),this.postfx.punchAberration(.02),this.postfx.setDesaturate(.8),this.postfx.setScanline(0),this.ui.flashDamage(),this.ui.setVignette(.5),Qt.playCrash(),Qt.stopMusic(),Qt.setWind(0),this.hitstop=.65,this.timeScale=.28,this.state.transitionTo(Pt.CRASHED),t&&this.destroyRecord(t);const A=Kt.data.coinsBank>=Xi;this._reviveCountdown=0,this._canRevive=A,this._crashHandled=!0}destroyRecord(t,e=-1){const A=e>=0?e:this.world.generator.live.indexOf(t);A<0||(this.world.obstacles.release(this.world.generator.live[A].obj),this.world.generator.live.splice(A,1))}update(t){this.input.update(t,this.clock.elapsed);let e=t;switch(this.hitstop>0&&(this.hitstop-=t,e=t*this.timeScale),this.clock.elapsed+=e,this.input.consume("pause")&&(this.state.is(Pt.PAUSED)?this.resume():this.pause()),this.state.is(Pt.PLAYING)&&this.input.consume("confirm"),ms(this.state.current),this.state.current){case Pt.MENU:case Pt.CHARACTER_SELECT:case Pt.MISSIONS:case Pt.SETTINGS:case Pt.UPGRADES:this.updateMenu(e);break;case Pt.COUNTDOWN:this.updateCountdown(t,e);break;case Pt.PLAYING:this.updatePlaying(e);break;case Pt.CRASHED:this.updateCrashed(e);break;case Pt.REVIVE:this.updateRevive(e);break}}updateMenu(t){this.world.setPaused(!1),this.world.update(t*.22,6,this.camera),this.player.rig.update(t,{speed:0,airborne:0,sliding:0,laneChange:0,boost:0}),this.particles.update(t,0),Qt.setMusicIntensity(.05)}updateCountdown(t,e){this.countdown-=t;const A=Math.ceil(this.countdown);A>0?(this.ui.setCountdownText(String(A),!1),A!==this._lastCount&&(this._lastCount=A,Qt.playCountdown(!1))):this.countdown>-.5&&(this.ui.setCountdownText("RUN",!0),this._lastCount!==0&&(this._lastCount=0,Qt.playCountdown(!0))),this.world.update(e*.15,Ve.START,this.camera),this.player.update(e,Ve.START*.15),this.updateCamera(e,0),this.particles.update(e,0),this.countdown<=-.35&&(this.ui.showCountdown(!1),this._lastCount=null,this.state.transitionTo(Pt.PLAYING),this.ui.showScreen("playing"))}updatePlaying(t){this.player.handleInput(!0);const e=this.currentTargetSpeed();this.player.update(t,e),this.world.playerX=this.player.laneX,this.world.update(t,this.player.speed,this.camera),this.powerups.update(t),this.player.setBoost(this.powerups.has("boost")),this.world.setMagnet(this.powerups.has("magnet"),{x:this.player.laneX,y:this.player.y+.9,z:0},this.powerups.magnetRadius);const A=this.player.speed*t;this.score.update(t,A,this.powerups),this.score.updateDisplay(t),this.missions.sync(this.score),this.topSpeed=Math.max(this.topSpeed,this.player.speed),this.collectCoins(t),this.checkPowerups(),this.checkCollisions(t);const i=this.speed01();Qt.setMusicIntensity(i),Qt.setWind(i*(this.powerups.has("boost")?1.4:1)),this.player.grounded&&this.player.speed>6&&Math.random()<t*14&&this.effects.dustPuff(this.player.laneX,.03,.4,2),this.powerups.has("boost")&&this.effects.boostTrail(this.player.laneX,1,.5),this.player.sliding&&this.player.grounded&&this.effects.dustPuff(this.player.laneX,.08,.6,1),this.updateCamera(t,i),this.particles.update(t,this.player.speed*t),this.ui.setVignette(this.speed01()*.22)}updateCrashed(t){this._reviveCountdown+=t,this.world.update(t*.3,this.player.speed*.3,this.camera),this.player.rig.update(t,{speed:0,airborne:1,sliding:0,laneChange:0,boost:0}),this.player.root.rotation.z=Math.min(Math.PI/2,this.player.root.rotation.z+t*4),this.player.root.position.y=Math.max(-.4,this.player.root.position.y-t*1.5),this.particles.update(t,0),this.updateCamera(t,0),this._reviveCountdown>1.4&&(this._reviveCountdown=-100,this._canRevive?this.offerRevive():(this.timeScale=1,this.endRun()))}updateRevive(t){this.reviveTime-=t,this.ui.updateReviveTimer(Math.max(0,this.reviveTime),Xi),Math.random()<t*30&&this.effects.burst(this.player.laneX+(Math.random()-.5)*4,Math.random()*3,-Math.random()*12,iA.shield.color,2),this.world.update(t*.1,2,this.camera),this.particles.update(t,0),this.updateCamera(t,0),this.reviveTime<=0&&(this.timeScale=1,this.bus.emit(Jt.REVIVE_FAILED),this.endRun())}collectCoins(t){const e=this.world.coins,A=this.player.laneX,i=this.player.y+.85,s=1;for(let r=e.count-1;r>=0;r--){const o=e.slots[r],a=o.z-0;if(a<-2.5||a>2.5)continue;const l=o.x-A,c=o.y-i;if(l*l+c*c+a*a<s*s){const u=this.score.addCoins(1);this.effects.coinBurst(o.x,o.y,o.z),Qt.playCoin(),this.bus.emit(Jt.COIN_COLLECTED,{value:u,streak:this.score._coinStreak}),e.removeAt(r),this.ui.bump(this.ui.el.hudCoins.parentElement,"hud-coins--bump")}}}checkPowerups(){const t=this.world.generator.livePowerups,e=this.player.laneX,A=this.player.y+.9;for(let i=t.length-1;i>=0;i--){const s=t[i],r=s.z-0;if(r<-1.5||r>1.5)continue;const o=s.x-e,a=s.y-A;if(o*o+a*a+r*r<1.6){this.powerups.activate(s.powerId),this.score.addPowerup();const l=iA[s.powerId];this.effects.powerupBurst(s.x,s.y,s.z,l.color),Qt.playPowerup(),this.ui.toast(`${l.name} — ${l.blurb}`,K0[s.powerId]??"✦",l.cssColor),this.cameraRig.shake(.12,7),this.postfx.flash(l.color,.28),this.world.pickups.releaseAt(i),t.splice(i,1)}}}checkCollisions(t){const e=this.world.obstaclesNear(-14,6),A=this.player.checkCollisions(e);if(A){this._crashRecord=A,this.bus.emit(Jt.CRASH,{record:A}),this._crashRecord=null;return}for(const i of e)i.passed||i.decorative||i.z>.4&&(i.passed=!0,this.score.addDodge(),this.player.checkNearMiss(i)&&this.bus.emit(Jt.NEAR_MISS,{record:i}))}updateCamera(t,e){const A=this.player;this.cameraRig.update(t,{laneX:A.laneX,laneVelocity:A.lateralVelocity,playerY:A.y,speed:A.speed,speed01:e,boost:this.powerups.has("boost")?1:0,slideBlend:A.slideBlend,airborne:A.grounded?0:1})}currentTargetSpeed(){const t=we(this.score.distance/Ve.RAMP_DISTANCE);return Wt(Ve.START,Ve.MAX,t)}speed01(){return we((this.player.speed-Ve.START)/(Ve.MAX-Ve.START))}render(t,e){const A=this.state.is(Pt.PLAYING)?this.speed01():0;if(this.postfx.enabled?(this.postfx.update(A,e,this.clock.elapsed),this.postfx.render(e)):this.renderer.render(this.scene,this.camera),ms(this.state.current).hud&&this.ui.updateHud(this.score,this.powerups,this.world.generator.difficulty01),xe.get("showFps")){const i=this.renderer.info;this.ui.setPerf(`${this.loop.fps.toFixed(0)} fps  q:${xe.get("quality")}
draws:${i.render.calls}  tris:${(i.render.triangles/1e3).toFixed(0)}k
geo:${i.memory.geometries}  tex:${i.memory.textures}`)}this.monitorPerformance(this.loop.fps)}dispose(){var t,e,A,i,s,r,o;(t=this.loop)==null||t.stop(),window.removeEventListener("resize",this._onResize),window.removeEventListener("orientationchange",this._onResize),(e=this.input)==null||e.dispose(),(A=this.player)==null||A.dispose(),(i=this.particles)==null||i.dispose(),(s=this.world)==null||s.dispose(),(r=this.postfx)==null||r.dispose(),Qt.dispose(),(o=this.renderer)==null||o.dispose()}}const K0={magnet:"🧲",shield:"🛡",multiply:"✕",boost:"⚡"};function El(){return new Promise(n=>requestAnimationFrame(()=>n()))}function Y0(n){return new Promise(t=>setTimeout(t,n))}async function X0(){const n=new W0;window.__game=n,await n.boot()}X0().catch(n=>{console.error("[VELOCITA] failed to start:",n);const t=document.getElementById("loading-status");t&&(t.textContent="Failed to start — see console for details.",t.style.color="#ff5b5b")});
