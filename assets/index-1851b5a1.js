(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Pn="150",ks=0,Vn=1,Gs=2,ss=1,Hs=2,$i=3,Qt=0,gt=1,Zt=2,Kt=0,Ii=1,jn=2,Xn=3,qn=4,Ws=5,Di=100,Vs=101,js=102,Yn=103,Zn=104,Xs=200,qs=201,Ys=202,Zs=203,os=204,ls=205,Js=206,Ks=207,Qs=208,$s=209,eo=210,to=0,io=1,ro=2,wn=3,no=4,ao=5,so=6,oo=7,cs=0,lo=1,co=2,Wt=0,ho=1,uo=2,po=3,mo=4,fo=5,hs=300,Oi=301,Ui=302,Tn=303,En=304,Ir=306,Cn=1e3,Ct=1001,An=1002,nt=1003,Jn=1004,jr=1005,Mt=1006,go=1007,nr=1008,mi=1009,_o=1010,vo=1011,us=1012,xo=1013,ci=1014,hi=1015,ar=1016,Mo=1017,So=1018,Ni=1020,bo=1021,At=1023,yo=1024,wo=1025,ui=1026,Fi=1027,To=1028,Eo=1029,Co=1030,Ao=1031,Lo=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,Kn=35840,Qn=35841,$n=35842,ea=35843,Ro=36196,ta=37492,ia=37496,ra=37808,na=37809,aa=37810,sa=37811,oa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,pa=37818,ma=37819,fa=37820,ga=37821,Jr=36492,Do=36283,_a=36284,va=36285,xa=36286,fi=3e3,ze=3001,Po=3200,Io=3201,ds=0,No=1,It="srgb",Nr="srgb-linear",ps="display-p3",Kr=7680,zo=519,Ma=35044,Sa="300 es",Ln=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ba=1234567;const ir=Math.PI/180,Pr=180/Math.PI;function Gi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[a&255]+Je[a>>8&255]+Je[a>>16&255]+Je[a>>24&255]+"-"+Je[e&255]+Je[e>>8&255]+"-"+Je[e>>16&15|64]+Je[e>>24&255]+"-"+Je[t&63|128]+Je[t>>8&255]+"-"+Je[t>>16&255]+Je[t>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function lt(a,e,t){return Math.max(e,Math.min(t,a))}function In(a,e){return(a%e+e)%e}function Oo(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function Uo(a,e,t){return a!==e?(t-a)/(e-a):0}function rr(a,e,t){return(1-t)*a+t*e}function Fo(a,e,t,i){return rr(a,e,1-Math.exp(-t*i))}function Bo(a,e=1){return e-Math.abs(In(a,e*2)-e)}function ko(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Go(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Ho(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Wo(a,e){return a+Math.random()*(e-a)}function Vo(a){return a*(.5-Math.random())}function jo(a){a!==void 0&&(ba=a);let e=ba+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xo(a){return a*ir}function qo(a){return a*Pr}function Rn(a){return(a&a-1)===0&&a!==0}function Yo(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ms(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Zo(a,e,t,i,r){const n=Math.cos,o=Math.sin,s=n(t/2),c=o(t/2),l=n((e+i)/2),h=o((e+i)/2),d=n((e-i)/2),u=o((e-i)/2),f=n((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":a.set(s*h,c*d,c*u,s*l);break;case"YZY":a.set(c*u,s*h,c*d,s*l);break;case"ZXZ":a.set(c*d,c*u,s*h,s*l);break;case"XZX":a.set(s*h,c*_,c*f,s*l);break;case"YXY":a.set(c*f,s*h,c*_,s*l);break;case"ZYZ":a.set(c*_,c*f,s*h,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ot(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Jo={DEG2RAD:ir,RAD2DEG:Pr,generateUUID:Gi,clamp:lt,euclideanModulo:In,mapLinear:Oo,inverseLerp:Uo,lerp:rr,damp:Fo,pingpong:Bo,smoothstep:ko,smootherstep:Go,randInt:Ho,randFloat:Wo,randFloatSpread:Vo,seededRandom:jo,degToRad:Xo,radToDeg:qo,isPowerOfTwo:Rn,ceilPowerOfTwo:Yo,floorPowerOfTwo:ms,setQuaternionFromProperEuler:Zo,normalize:ot,denormalize:er};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,s,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=n,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],m=r[0],p=r[3],S=r[6],y=r[1],v=r[4],w=r[7],E=r[2],A=r[5],N=r[8];return n[0]=o*m+s*y+c*E,n[3]=o*p+s*v+c*A,n[6]=o*S+s*w+c*N,n[1]=l*m+h*y+d*E,n[4]=l*p+h*v+d*A,n[7]=l*S+h*w+d*N,n[2]=u*m+f*y+_*E,n[5]=u*p+f*v+_*A,n[8]=u*S+f*w+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*s*l-i*n*h+i*s*c+r*n*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],h=e[8],d=h*o-s*l,u=s*c-h*n,f=l*n-o*c,_=t*d+i*u+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=d*m,e[1]=(r*l-h*i)*m,e[2]=(s*i-r*o)*m,e[3]=u*m,e[4]=(h*t-r*c)*m,e[5]=(r*n-s*t)*m,e[6]=f*m,e[7]=(i*c-l*t)*m,e[8]=(o*t-i*n)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,s){const c=Math.cos(n),l=Math.sin(n);return this.set(i*c,i*l,-i*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new at;function fs(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function sr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,s){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const u=n[o+0],f=n[o+1],_=n[o+2],m=n[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=u,e[t+1]=f,e[t+2]=_,e[t+3]=m;return}if(d!==m||c!==u||l!==f||h!==_){let p=1-s;const S=c*u+l*f+h*_+d*m,y=S>=0?1:-1,v=1-S*S;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,S*y);p=Math.sin(p*A)/E,s=Math.sin(s*A)/E}const w=s*y;if(c=c*p+u*w,l=l*p+f*w,h=h*p+_*w,d=d*p+m*w,p===1-s){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,n,o){const s=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=n[o],u=n[o+1],f=n[o+2],_=n[o+3];return e[t]=s*_+h*d+c*f-l*u,e[t+1]=c*_+h*u+l*d-s*f,e[t+2]=l*_+h*f+s*u-c*d,e[t+3]=h*_-s*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(i/2),h=s(r/2),d=s(n/2),u=c(i/2),f=c(r/2),_=c(n/2);switch(o){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],s=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+s+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(n-l)*f,this._z=(o-r)*f}else if(i>s&&i>d){const f=2*Math.sqrt(1+i-s-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(n+l)/f}else if(s>d){const f=2*Math.sqrt(1+s-i-d);this._w=(n-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-s);this._w=(o-r)/f,this._x=(n+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,s=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*s+r*l-n*c,this._y=r*h+o*c+n*s-i*l,this._z=n*h+o*l+i*c-r*s,this._w=o*h-i*s-r*c-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const c=1-s*s;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,s),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=n*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,s=e.z,c=e.w,l=c*t+o*r-s*i,h=c*i+s*t-n*r,d=c*r+n*i-o*t,u=-n*t-o*i-s*r;return this.x=l*c+u*-n+h*-s-d*-o,this.y=h*c+u*-o+d*-n-l*-s,this.z=d*c+u*-s+l*-o-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-n*s,this.y=n*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new R,ya=new lr;function zi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function en(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Ko=new at().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Qo=new at().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Jt=new R;function $o(a){return a.convertSRGBToLinear(),Jt.set(a.r,a.g,a.b).applyMatrix3(Qo),a.setRGB(Jt.x,Jt.y,Jt.z)}function el(a){return Jt.set(a.r,a.g,a.b).applyMatrix3(Ko),a.setRGB(Jt.x,Jt.y,Jt.z).convertLinearToSRGB()}const tl={[Nr]:a=>a,[It]:a=>a.convertSRGBToLinear(),[ps]:$o},il={[Nr]:a=>a,[It]:a=>a.convertLinearToSRGB(),[ps]:el},it={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Nr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=tl[e],r=il[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let vi;class gs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=sr("canvas")),vi.width=e.width,vi.height=e.height;const i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=zi(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _s{constructor(e=null){this.isSource=!0,this.uuid=Gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?n.push(tn(r[o].image)):n.push(tn(r[o]))}else n=tn(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function tn(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?gs.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rl=0;class ct extends ki{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,i=Ct,r=Ct,n=Mt,o=nr,s=At,c=mi,l=ct.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=Gi(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case An:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case An:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=hs;ct.DEFAULT_ANISOTROPY=1;class Oe{constructor(e=0,t=0,i=0,r=1){Oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,s=o[0],c=o[4],l=o[8],h=o[1],d=o[5],u=o[9],f=o[2],_=o[6],m=o[10];if(Math.abs(c-h)<.01&&Math.abs(l-f)<.01&&Math.abs(u-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+f)<.1&&Math.abs(u+_)<.1&&Math.abs(s+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(s+1)/2,y=(d+1)/2,v=(m+1)/2,w=(c+h)/4,E=(l+f)/4,A=(u+_)/4;return S>y&&S>v?S<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(S),r=w/i,n=E/i):y>v?y<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(y),i=w/r,n=A/r):v<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(v),i=E/n,r=A/n),this.set(i,r,n,t),this}let p=Math.sqrt((_-u)*(_-u)+(l-f)*(l-f)+(h-c)*(h-c));return Math.abs(p)<.001&&(p=1),this.x=(_-u)/p,this.y=(l-f)/p,this.z=(h-c)/p,this.w=Math.acos((s+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends ki{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new ct(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _s(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl extends ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],d=e[c+1],u=e[c+2];h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>n&&(n=h),d>o&&(o=d),u>s&&(s=u)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),d=e.getY(c),u=e.getZ(c);h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>n&&(n=h),d>o&&(o=d),u>s&&(s=u)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,s=n.count;o<s;o++)ri.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else i.boundingBox===null&&i.computeBoundingBox(),rn.copy(i.boundingBox),rn.applyMatrix4(e.matrixWorld),this.union(rn);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),ur.subVectors(this.max,ji),xi.subVectors(e.a,ji),Mi.subVectors(e.b,ji),Si.subVectors(e.c,ji),jt.subVectors(Mi,xi),Xt.subVectors(Si,Mi),ni.subVectors(xi,Si);let t=[0,-jt.z,jt.y,0,-Xt.z,Xt.y,0,-ni.z,ni.y,jt.z,0,-jt.x,Xt.z,0,-Xt.x,ni.z,0,-ni.x,-jt.y,jt.x,0,-Xt.y,Xt.x,0,-ni.y,ni.x,0];return!nn(t,xi,Mi,Si,ur)||(t=[1,0,0,0,1,0,0,0,1],!nn(t,xi,Mi,Si,ur))?!1:(dr.crossVectors(jt,Xt),t=[dr.x,dr.y,dr.z],nn(t,xi,Mi,Si,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ut[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ut[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ut[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ut[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ut[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ut[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ut[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ut[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ut),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ut=[new R,new R,new R,new R,new R,new R,new R,new R],ri=new R,rn=new cr,xi=new R,Mi=new R,Si=new R,jt=new R,Xt=new R,ni=new R,ji=new R,ur=new R,dr=new R,ai=new R;function nn(a,e,t,i,r){for(let n=0,o=a.length-3;n<=o;n+=3){ai.fromArray(a,n);const s=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),c=e.dot(ai),l=t.dot(ai),h=i.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>s)return!1}return!0}const al=new cr,Xi=new R,an=new R;class Nn{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):al.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(an.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(an)),this.expandByPoint(Xi.copy(e.center).sub(an))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ft=new R,sn=new R,pr=new R,qt=new R,on=new R,mr=new R,ln=new R;class sl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ft)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ft.copy(this.origin).addScaledVector(this.direction,t),Ft.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sn.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),qt.copy(this.origin).sub(sn);const n=e.distanceTo(t)*.5,o=-this.direction.dot(pr),s=qt.dot(this.direction),c=-qt.dot(pr),l=qt.lengthSq(),h=Math.abs(1-o*o);let d,u,f,_;if(h>0)if(d=o*c-s,u=o*s-c,_=n*h,d>=0)if(u>=-_)if(u<=_){const m=1/h;d*=m,u*=m,f=d*(d+o*u+2*s)+u*(o*d+u+2*c)+l}else u=n,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*c)+l;else u=-n,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*n+s)),u=d>0?-n:Math.min(Math.max(-n,-c),n),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-n,-c),n),f=u*(u+2*c)+l):(d=Math.max(0,-(o*n+s)),u=d>0?n:Math.min(Math.max(-n,-c),n),f=-d*d+u*(u+2*c)+l);else u=o>0?-n:n,d=Math.max(0,-(o*u+s)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sn).addScaledVector(pr,u),f}intersectSphere(e,t){Ft.subVectors(e.center,this.origin);const i=Ft.dot(this.direction),r=Ft.dot(Ft)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,s,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(n=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(s=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ft)!==null}intersectTriangle(e,t,i,r,n){on.subVectors(t,e),mr.subVectors(i,e),ln.crossVectors(on,mr);let o=this.direction.dot(ln),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;qt.subVectors(this.origin,e);const c=s*this.direction.dot(mr.crossVectors(qt,mr));if(c<0)return null;const l=s*this.direction.dot(on.cross(qt));if(l<0||c+l>o)return null;const h=-s*qt.dot(ln);return h<0?null:this.at(h/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,s,c,l,h,d,u,f,_,m,p){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=r,S[1]=n,S[5]=o,S[9]=s,S[13]=c,S[2]=l,S[6]=h,S[10]=d,S[14]=u,S[3]=f,S[7]=_,S[11]=m,S[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),n=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const u=o*h,f=o*d,_=s*h,m=s*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=u-m*l,t[9]=-s*c,t[2]=m-u*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,_=l*h,m=l*d;t[0]=u+m*s,t[4]=_*s-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-s,t[2]=f*s-_,t[6]=m+u*s,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,_=l*h,m=l*d;t[0]=u-m*s,t[4]=-o*d,t[8]=_+f*s,t[1]=f+_*s,t[5]=o*h,t[9]=m-u*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,_=s*h,m=s*d;t[0]=c*h,t[4]=_*l-f,t[8]=u*l+m,t[1]=c*d,t[5]=m*l+u,t[9]=f*l-_,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,_=s*c,m=s*l;t[0]=c*h,t[4]=m-u*d,t[8]=_*d+f,t[1]=d,t[5]=o*h,t[9]=-s*h,t[2]=-l*h,t[6]=f*d+_,t[10]=u-m*d}else if(e.order==="XZY"){const u=o*c,f=o*l,_=s*c,m=s*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+m,t[5]=o*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=s*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ol,e,ll)}lookAt(e,t,i){const r=this.elements;return pt.subVectors(e,t),pt.lengthSq()===0&&(pt.z=1),pt.normalize(),Yt.crossVectors(i,pt),Yt.lengthSq()===0&&(Math.abs(i.z)===1?pt.x+=1e-4:pt.z+=1e-4,pt.normalize(),Yt.crossVectors(i,pt)),Yt.normalize(),fr.crossVectors(pt,Yt),r[0]=Yt.x,r[4]=fr.x,r[8]=pt.x,r[1]=Yt.y,r[5]=fr.y,r[9]=pt.y,r[2]=Yt.z,r[6]=fr.z,r[10]=pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],m=i[6],p=i[10],S=i[14],y=i[3],v=i[7],w=i[11],E=i[15],A=r[0],N=r[4],M=r[8],T=r[12],D=r[1],q=r[5],Y=r[9],O=r[13],I=r[2],H=r[6],J=r[10],Q=r[14],W=r[3],Z=r[7],K=r[11],de=r[15];return n[0]=o*A+s*D+c*I+l*W,n[4]=o*N+s*q+c*H+l*Z,n[8]=o*M+s*Y+c*J+l*K,n[12]=o*T+s*O+c*Q+l*de,n[1]=h*A+d*D+u*I+f*W,n[5]=h*N+d*q+u*H+f*Z,n[9]=h*M+d*Y+u*J+f*K,n[13]=h*T+d*O+u*Q+f*de,n[2]=_*A+m*D+p*I+S*W,n[6]=_*N+m*q+p*H+S*Z,n[10]=_*M+m*Y+p*J+S*K,n[14]=_*T+m*O+p*Q+S*de,n[3]=y*A+v*D+w*I+E*W,n[7]=y*N+v*q+w*H+E*Z,n[11]=y*M+v*Y+w*J+E*K,n[15]=y*T+v*O+w*Q+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],s=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],m=e[7],p=e[11],S=e[15];return _*(+n*c*d-r*l*d-n*s*u+i*l*u+r*s*f-i*c*f)+m*(+t*c*f-t*l*u+n*o*u-r*o*f+r*l*h-n*c*h)+p*(+t*l*d-t*s*f-n*o*d+i*o*f+n*s*h-i*l*h)+S*(-r*s*h-t*c*d+t*s*u+r*o*d-i*o*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],m=e[13],p=e[14],S=e[15],y=d*p*l-m*u*l+m*c*f-s*p*f-d*c*S+s*u*S,v=_*u*l-h*p*l-_*c*f+o*p*f+h*c*S-o*u*S,w=h*m*l-_*d*l+_*s*f-o*m*f-h*s*S+o*d*S,E=_*d*c-h*m*c-_*s*u+o*m*u+h*s*p-o*d*p,A=t*y+i*v+r*w+n*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/A;return e[0]=y*N,e[1]=(m*u*n-d*p*n-m*r*f+i*p*f+d*r*S-i*u*S)*N,e[2]=(s*p*n-m*c*n+m*r*l-i*p*l-s*r*S+i*c*S)*N,e[3]=(d*c*n-s*u*n-d*r*l+i*u*l+s*r*f-i*c*f)*N,e[4]=v*N,e[5]=(h*p*n-_*u*n+_*r*f-t*p*f-h*r*S+t*u*S)*N,e[6]=(_*c*n-o*p*n-_*r*l+t*p*l+o*r*S-t*c*S)*N,e[7]=(o*u*n-h*c*n+h*r*l-t*u*l-o*r*f+t*c*f)*N,e[8]=w*N,e[9]=(_*d*n-h*m*n-_*i*f+t*m*f+h*i*S-t*d*S)*N,e[10]=(o*m*n-_*s*n+_*i*l-t*m*l-o*i*S+t*s*S)*N,e[11]=(h*s*n-o*d*n-h*i*l+t*d*l+o*i*f-t*s*f)*N,e[12]=E*N,e[13]=(h*m*r-_*d*r+_*i*u-t*m*u-h*i*p+t*d*p)*N,e[14]=(_*s*r-o*m*r-_*i*c+t*m*c+o*i*p-t*s*p)*N,e[15]=(o*d*r-h*s*r+h*i*c-t*d*c-o*i*u+t*s*u)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,s=e.y,c=e.z,l=n*o,h=n*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,h*s+i,h*c-r*o,0,l*c-r*s,h*c+r*o,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,s=t._z,c=t._w,l=n+n,h=o+o,d=s+s,u=n*l,f=n*h,_=n*d,m=o*h,p=o*d,S=s*d,y=c*l,v=c*h,w=c*d,E=i.x,A=i.y,N=i.z;return r[0]=(1-(m+S))*E,r[1]=(f+w)*E,r[2]=(_-v)*E,r[3]=0,r[4]=(f-w)*A,r[5]=(1-(u+S))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(_+v)*N,r[9]=(p-y)*N,r[10]=(1-(u+m))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),s=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],wt.copy(this);const c=1/n,l=1/o,h=1/s;return wt.elements[0]*=c,wt.elements[1]*=c,wt.elements[2]*=c,wt.elements[4]*=l,wt.elements[5]*=l,wt.elements[6]*=l,wt.elements[8]*=h,wt.elements[9]*=h,wt.elements[10]*=h,t.setFromRotationMatrix(wt),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,r,n,o){const s=this.elements,c=2*n/(t-e),l=2*n/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r),u=-(o+n)/(o-n),f=-2*o*n/(o-n);return s[0]=c,s[4]=0,s[8]=h,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,n,o){const s=this.elements,c=1/(t-e),l=1/(i-r),h=1/(o-n),d=(t+e)*c,u=(i+r)*l,f=(o+n)*h;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new R,wt=new We,ol=new R(0,0,0),ll=new R(1,1,1),Yt=new R,fr=new R,pt=new R,wa=new We,Ta=new lr;class zr{constructor(e=0,t=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],s=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class xs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cl=0;const Ea=new R,yi=new lr,Bt=new We,gr=new R,qi=new R,hl=new R,ul=new lr,Ca=new R(1,0,0),Aa=new R(0,1,0),La=new R(0,0,1),dl={type:"added"},Ra={type:"removed"};class ht extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new R,t=new zr,i=new lr,r=new R(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new at}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ea.copy(e).applyQuaternion(this.quaternion),this.position.add(Ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gr.copy(e):gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bt.lookAt(qi,gr,this.up):Bt.lookAt(gr,qi,this.up),this.quaternion.setFromRotationMatrix(Bt),r&&(Bt.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(Bt),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ra)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ra)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,hl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,ul,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++){const s=r[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];n(e.shapes,d)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(n(e.materials,this.material[c]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(n(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const c=[];for(const l in s){const h=s[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new R(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tt=new R,kt=new R,cn=new R,Gt=new R,wi=new R,Ti=new R,Da=new R,hn=new R,un=new R,dn=new R;class Ht{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tt.subVectors(e,t),r.cross(Tt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Tt.subVectors(r,t),kt.subVectors(i,t),cn.subVectors(e,t);const o=Tt.dot(Tt),s=Tt.dot(kt),c=Tt.dot(cn),l=kt.dot(kt),h=kt.dot(cn),d=o*l-s*s;if(d===0)return n.set(-2,-1,-1);const u=1/d,f=(l*c-s*h)*u,_=(o*h-s*c)*u;return n.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gt),Gt.x>=0&&Gt.y>=0&&Gt.x+Gt.y<=1}static getUV(e,t,i,r,n,o,s,c){return this.getBarycoord(e,t,i,r,Gt),c.set(0,0),c.addScaledVector(n,Gt.x),c.addScaledVector(o,Gt.y),c.addScaledVector(s,Gt.z),c}static isFrontFacing(e,t,i,r){return Tt.subVectors(i,t),kt.subVectors(e,t),Tt.cross(kt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tt.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),Tt.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Ht.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,s;wi.subVectors(r,i),Ti.subVectors(n,i),hn.subVectors(e,i);const c=wi.dot(hn),l=Ti.dot(hn);if(c<=0&&l<=0)return t.copy(i);un.subVectors(e,r);const h=wi.dot(un),d=Ti.dot(un);if(h>=0&&d<=h)return t.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(wi,o);dn.subVectors(e,n);const f=wi.dot(dn),_=Ti.dot(dn);if(_>=0&&f<=_)return t.copy(n);const m=f*l-c*_;if(m<=0&&l>=0&&_<=0)return s=l/(l-_),t.copy(i).addScaledVector(Ti,s);const p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Da.subVectors(n,r),s=(d-h)/(d-h+(f-_)),t.copy(r).addScaledVector(Da,s);const S=1/(p+m+u);return o=m*S,s=u*S,t.copy(i).addScaledVector(wi,o).addScaledVector(Ti,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pl=0;class hr extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Ii,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=os,this.blendDst=ls,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Qt&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const o=[];for(const s in n){const c=n[s];delete c.metadata,o.push(c)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ms={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={h:0,s:0,l:0},_r={h:0,s:0,l:0};function pn(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=In(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=pn(o,n,e+1/3),this.g=pn(o,n,e),this.b=pn(o,n,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,it.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,it.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(n[1])/360,l=parseFloat(n[2])/100,h=parseFloat(n[3])/100;return i(n[4]),this.setHSL(c,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,it.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,it.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Ms[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return it.fromWorkingColorSpace(Ke.copy(this),e),lt(Ke.r*255,0,255)<<16^lt(Ke.g*255,0,255)<<8^lt(Ke.b*255,0,255)<<0}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ke.copy(this),t);const i=Ke.r,r=Ke.g,n=Ke.b,o=Math.max(i,r,n),s=Math.min(i,r,n);let c,l;const h=(s+o)/2;if(s===o)c=0,l=0;else{const d=o-s;switch(l=h<=.5?d/(o+s):d/(2-o-s),o){case i:c=(r-n)/d+(r<n?6:0);break;case r:c=(n-i)/d+2;break;case n:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ke.copy(this),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=It){it.fromWorkingColorSpace(Ke.copy(this),e);const t=Ke.r,i=Ke.g,r=Ke.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=i,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(_r);const i=rr(Et.h,_r.h,t),r=rr(Et.s,_r.s,t),n=rr(Et.l,_r.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Ie;Ie.NAMES=Ms;class zn extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const He=new R,vr=new De;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ss extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bs extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ml=0;const xt=new We,mn=new ht,Ei=new R,mt=new cr,Yi=new cr,Ye=new R;class Vt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fs(e)?bs:Ss)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new at().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,i){return xt.makeTranslation(e,t,i),this.applyMatrix4(xt),this}scale(e,t,i){return xt.makeScale(e,t,i),this.applyMatrix4(xt),this}lookAt(e){return mn.lookAt(e),mn.updateMatrix(),this.applyMatrix4(mn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];mt.setFromBufferAttribute(n),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,mt.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,mt.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(mt.min),this.boundingBox.expandByPoint(mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(mt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Yi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(mt.min,Yi.min),mt.expandByPoint(Ye),Ye.addVectors(mt.max,Yi.max),mt.expandByPoint(Ye)):(mt.expandByPoint(Yi.min),mt.expandByPoint(Yi.max))}mt.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)Ye.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(Ye));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],c=this.morphTargetsRelative;for(let l=0,h=s.count;l<h;l++)Ye.fromBufferAttribute(s,l),c&&(Ei.fromBufferAttribute(e,l),Ye.add(Ei)),r=Math.max(r,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<s;D++)l[D]=new R,h[D]=new R;const d=new R,u=new R,f=new R,_=new De,m=new De,p=new De,S=new R,y=new R;function v(D,q,Y){d.fromArray(r,D*3),u.fromArray(r,q*3),f.fromArray(r,Y*3),_.fromArray(o,D*2),m.fromArray(o,q*2),p.fromArray(o,Y*2),u.sub(d),f.sub(d),m.sub(_),p.sub(_);const O=1/(m.x*p.y-p.x*m.y);isFinite(O)&&(S.copy(u).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(O),y.copy(f).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(O),l[D].add(S),l[q].add(S),l[Y].add(S),h[D].add(y),h[q].add(y),h[Y].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let D=0,q=w.length;D<q;++D){const Y=w[D],O=Y.start,I=Y.count;for(let H=O,J=O+I;H<J;H+=3)v(i[H+0],i[H+1],i[H+2])}const E=new R,A=new R,N=new R,M=new R;function T(D){N.fromArray(n,D*3),M.copy(N);const q=l[D];E.copy(q),E.sub(N.multiplyScalar(N.dot(q))).normalize(),A.crossVectors(M,q);const Y=A.dot(h[D])<0?-1:1;c[D*4]=E.x,c[D*4+1]=E.y,c[D*4+2]=E.z,c[D*4+3]=Y}for(let D=0,q=w.length;D<q;++D){const Y=w[D],O=Y.start,I=Y.count;for(let H=O,J=O+I;H<J;H+=3)T(i[H+0]),T(i[H+1]),T(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const r=new R,n=new R,o=new R,s=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const _=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,_),n.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),h.subVectors(o,n),d.subVectors(r,n),h.cross(d),s.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),s.add(h),c.add(h),l.add(h),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,n),d.subVectors(r,n),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ye.fromBufferAttribute(e,t),Ye.normalize(),e.setXYZ(t,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function e(s,c){const l=s.array,h=s.itemSize,d=s.normalized,u=new l.constructor(c.length*h);let f=0,_=0;for(let m=0,p=c.length;m<p;m++){s.isInterleavedBufferAttribute?f=c[m]*s.data.stride+s.offset:f=c[m]*h;for(let S=0;S<h;S++)u[_++]=l[f++]}return new zt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,i);t.setAttribute(s,l)}const n=this.morphAttributes;for(const s in n){const c=[],l=n[s];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const n=e.morphAttributes;for(const l in n){const h=[],d=n[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new We,Pt=new sl,xr=new Nn,Ia=new R,Zi=new R,Ji=new R,Ki=new R,fn=new R,Mr=new R,Sr=new De,br=new De,yr=new De,gn=new R,wr=new R;class St extends ht{constructor(e=new Vt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(n&&s){Mr.set(0,0,0);for(let c=0,l=n.length;c<l;c++){const h=s[c],d=n[c];h!==0&&(fn.fromBufferAttribute(d,e),o?Mr.addScaledVector(fn,h):Mr.addScaledVector(fn.sub(t),h))}t.add(Mr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(n),Pt.copy(e.ray).recast(e.near),xr.containsPoint(Pt.origin)===!1&&(Pt.intersectSphere(xr,Ia)===null||Pt.origin.distanceToSquared(Ia)>(e.far-e.near)**2))||(Pa.copy(n).invert(),Pt.copy(e.ray).applyMatrix4(Pa),i.boundingBox!==null&&Pt.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,c=i.attributes.position,l=i.attributes.uv,h=i.attributes.uv2,d=i.groups,u=i.drawRange;if(s!==null)if(Array.isArray(r))for(let f=0,_=d.length;f<_;f++){const m=d[f],p=r[m.materialIndex],S=Math.max(m.start,u.start),y=Math.min(s.count,Math.min(m.start+m.count,u.start+u.count));for(let v=S,w=y;v<w;v+=3){const E=s.getX(v),A=s.getX(v+1),N=s.getX(v+2);o=Tr(this,p,e,Pt,l,h,E,A,N),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,u.start),_=Math.min(s.count,u.start+u.count);for(let m=f,p=_;m<p;m+=3){const S=s.getX(m),y=s.getX(m+1),v=s.getX(m+2);o=Tr(this,r,e,Pt,l,h,S,y,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let f=0,_=d.length;f<_;f++){const m=d[f],p=r[m.materialIndex],S=Math.max(m.start,u.start),y=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let v=S,w=y;v<w;v+=3){const E=v,A=v+1,N=v+2;o=Tr(this,p,e,Pt,l,h,E,A,N),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=f,p=_;m<p;m+=3){const S=m,y=m+1,v=m+2;o=Tr(this,r,e,Pt,l,h,S,y,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function fl(a,e,t,i,r,n,o,s){let c;if(e.side===gt?c=i.intersectTriangle(o,n,r,!0,s):c=i.intersectTriangle(r,n,o,e.side===Qt,s),c===null)return null;wr.copy(s),wr.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:a}}function Tr(a,e,t,i,r,n,o,s,c){a.getVertexPosition(o,Zi),a.getVertexPosition(s,Ji),a.getVertexPosition(c,Ki);const l=fl(a,e,t,i,Zi,Ji,Ki,gn);if(l){r&&(Sr.fromBufferAttribute(r,o),br.fromBufferAttribute(r,s),yr.fromBufferAttribute(r,c),l.uv=Ht.getUV(gn,Zi,Ji,Ki,Sr,br,yr,new De)),n&&(Sr.fromBufferAttribute(n,o),br.fromBufferAttribute(n,s),yr.fromBufferAttribute(n,c),l.uv2=Ht.getUV(gn,Zi,Ji,Ki,Sr,br,yr,new De));const h={a:o,b:s,c,normal:new R,materialIndex:0};Ht.getNormal(Zi,Ji,Ki,h.normal),l.face=h}return l}class Hi extends Vt{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const s=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,i,t,e,o,n,0),_("z","y","x",1,-1,i,t,-e,o,n,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,n,4),_("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function _(m,p,S,y,v,w,E,A,N,M,T){const D=w/N,q=E/M,Y=w/2,O=E/2,I=A/2,H=N+1,J=M+1;let Q=0,W=0;const Z=new R;for(let K=0;K<J;K++){const de=K*q-O;for(let U=0;U<H;U++){const j=U*D-Y;Z[m]=j*y,Z[p]=de*v,Z[S]=I,l.push(Z.x,Z.y,Z.z),Z[m]=0,Z[p]=0,Z[S]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(U/N),d.push(1-K/M),Q+=1}}for(let K=0;K<M;K++)for(let de=0;de<N;de++){const U=u+de+H*K,j=u+de+H*(K+1),ie=u+(de+1)+H*(K+1),z=u+(de+1)+H*K;c.push(U,j,z),c.push(j,ie,z),W+=6}s.addGroup(f,W,T),f+=W,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rt(a){const e={};for(let t=0;t<a.length;t++){const i=Bi(a[t]);for(const r in i)e[r]=i[r]}return e}function gl(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ys(a){return a.getRenderTarget()===null&&a.outputEncoding===ze?It:Nr}const _l={clone:Bi,merge:rt};var vl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vl,this.fragmentShader=xl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=gl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ws extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ft extends ws{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;n+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Ai=1;class Ml extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new ft(Ci,Ai,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new ft(Ci,Ai,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const o=new ft(Ci,Ai,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new ft(Ci,Ai,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new ft(Ci,Ai,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new ft(Ci,Ai,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,s,c,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Wt,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class Ts extends ct{constructor(e,t,i,r,n,o,s,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,i,r,n,o,s,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sl extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ts(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),n=new _i({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gt,blending:Kt});n.uniforms.tEquirect.value=t;const o=new St(r,n),s=t.minFilter;return t.minFilter===nr&&(t.minFilter=Mt),new Ml(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const _n=new R,bl=new R,yl=new at;class si{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_n.subVectors(i,t).cross(bl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_n),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yl.getNormalMatrix(e),r=this.coplanarPoint(_n).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Nn,Er=new R;class On{constructor(e=new si,t=new si,i=new si,r=new si,n=new si,o=new si){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],s=i[3],c=i[4],l=i[5],h=i[6],d=i[7],u=i[8],f=i[9],_=i[10],m=i[11],p=i[12],S=i[13],y=i[14],v=i[15];return t[0].setComponents(s-r,d-c,m-u,v-p).normalize(),t[1].setComponents(s+r,d+c,m+u,v+p).normalize(),t[2].setComponents(s+n,d+l,m+f,v+S).normalize(),t[3].setComponents(s-n,d-l,m-f,v-S).normalize(),t[4].setComponents(s-o,d-h,m-_,v-y).normalize(),t[5].setComponents(s+o,d+h,m+_,v+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Es(){let a=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function wl(a,e){const t=e.isWebGL2,i=new WeakMap;function r(l,h){const d=l.array,u=l.usage,f=a.createBuffer();a.bindBuffer(h,f),a.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function n(l,h,d){const u=h.array,f=h.updateRange;a.bindBuffer(d,l),f.count===-1?a.bufferSubData(d,0,u):(t?a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(a.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=i.get(l);(!u||u.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d===void 0?i.set(l,r(l,h)):d.version<l.version&&(n(d.buffer,l,h),d.version=l.version)}return{get:o,remove:s,update:c}}class Un extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),l=s+1,h=c+1,d=e/s,u=t/c,f=[],_=[],m=[],p=[];for(let S=0;S<h;S++){const y=S*u-o;for(let v=0;v<l;v++){const w=v*d-n;_.push(w,-y,0),m.push(0,0,1),p.push(v/s),p.push(1-S/c)}}for(let S=0;S<c;S++)for(let y=0;y<s;y++){const v=y+l*S,w=y+l*(S+1),E=y+1+l*(S+1),A=y+1+l*S;f.push(v,w,A),f.push(w,E,A)}this.setIndex(f),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(m,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,El=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Al=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ll=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dl="vec3 transformed = vec3( position );",Pl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Il=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Nl=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,zl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vl=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,jl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Xl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ql=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ql=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$l=`#ifdef USE_ENVMAP
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
#endif`,ec=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tc=`#ifdef USE_ENVMAP
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
#endif`,ic=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rc=`#ifdef USE_ENVMAP
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
#endif`,nc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ac=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lc=`#ifdef USE_GRADIENTMAP
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
}`,cc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,mc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,fc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_c=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mc=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Sc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ec=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ac=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ic=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zc=`#ifdef USE_MORPHNORMALS
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
#endif`,Oc=`#ifdef USE_MORPHTARGETS
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
#endif`,Uc=`#ifdef USE_MORPHTARGETS
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
#endif`,Fc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Bc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Vc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Jc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$c=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,th=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ah=`float getShadowMask() {
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
}`,sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ch=`#ifdef USE_SKINNING
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
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,fh=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_h=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,bh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wh=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eh=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Rh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Ph=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Hh=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,jh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Xh=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Yh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,Qh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,eu=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tu=`uniform float rotation;
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
}`,iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:Tl,alphamap_pars_fragment:El,alphatest_fragment:Cl,alphatest_pars_fragment:Al,aomap_fragment:Ll,aomap_pars_fragment:Rl,begin_vertex:Dl,beginnormal_vertex:Pl,bsdfs:Il,iridescence_fragment:Nl,bumpmap_pars_fragment:zl,clipping_planes_fragment:Ol,clipping_planes_pars_fragment:Ul,clipping_planes_pars_vertex:Fl,clipping_planes_vertex:Bl,color_fragment:kl,color_pars_fragment:Gl,color_pars_vertex:Hl,color_vertex:Wl,common:Vl,cube_uv_reflection_fragment:jl,defaultnormal_vertex:Xl,displacementmap_pars_vertex:ql,displacementmap_vertex:Yl,emissivemap_fragment:Zl,emissivemap_pars_fragment:Jl,encodings_fragment:Kl,encodings_pars_fragment:Ql,envmap_fragment:$l,envmap_common_pars_fragment:ec,envmap_pars_fragment:tc,envmap_pars_vertex:ic,envmap_physical_pars_fragment:mc,envmap_vertex:rc,fog_vertex:nc,fog_pars_vertex:ac,fog_fragment:sc,fog_pars_fragment:oc,gradientmap_pars_fragment:lc,lightmap_fragment:cc,lightmap_pars_fragment:hc,lights_lambert_fragment:uc,lights_lambert_pars_fragment:dc,lights_pars_begin:pc,lights_toon_fragment:fc,lights_toon_pars_fragment:gc,lights_phong_fragment:_c,lights_phong_pars_fragment:vc,lights_physical_fragment:xc,lights_physical_pars_fragment:Mc,lights_fragment_begin:Sc,lights_fragment_maps:bc,lights_fragment_end:yc,logdepthbuf_fragment:wc,logdepthbuf_pars_fragment:Tc,logdepthbuf_pars_vertex:Ec,logdepthbuf_vertex:Cc,map_fragment:Ac,map_pars_fragment:Lc,map_particle_fragment:Rc,map_particle_pars_fragment:Dc,metalnessmap_fragment:Pc,metalnessmap_pars_fragment:Ic,morphcolor_vertex:Nc,morphnormal_vertex:zc,morphtarget_pars_vertex:Oc,morphtarget_vertex:Uc,normal_fragment_begin:Fc,normal_fragment_maps:Bc,normal_pars_fragment:kc,normal_pars_vertex:Gc,normal_vertex:Hc,normalmap_pars_fragment:Wc,clearcoat_normal_fragment_begin:Vc,clearcoat_normal_fragment_maps:jc,clearcoat_pars_fragment:Xc,iridescence_pars_fragment:qc,output_fragment:Yc,packing:Zc,premultiplied_alpha_fragment:Jc,project_vertex:Kc,dithering_fragment:Qc,dithering_pars_fragment:$c,roughnessmap_fragment:eh,roughnessmap_pars_fragment:th,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:nh,shadowmask_pars_fragment:ah,skinbase_vertex:sh,skinning_pars_vertex:oh,skinning_vertex:lh,skinnormal_vertex:ch,specularmap_fragment:hh,specularmap_pars_fragment:uh,tonemapping_fragment:dh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:fh,uv_pars_fragment:gh,uv_pars_vertex:_h,uv_vertex:vh,uv2_pars_fragment:xh,uv2_pars_vertex:Mh,uv2_vertex:Sh,worldpos_vertex:bh,background_vert:yh,background_frag:wh,backgroundCube_vert:Th,backgroundCube_frag:Eh,cube_vert:Ch,cube_frag:Ah,depth_vert:Lh,depth_frag:Rh,distanceRGBA_vert:Dh,distanceRGBA_frag:Ph,equirect_vert:Ih,equirect_frag:Nh,linedashed_vert:zh,linedashed_frag:Oh,meshbasic_vert:Uh,meshbasic_frag:Fh,meshlambert_vert:Bh,meshlambert_frag:kh,meshmatcap_vert:Gh,meshmatcap_frag:Hh,meshnormal_vert:Wh,meshnormal_frag:Vh,meshphong_vert:jh,meshphong_frag:Xh,meshphysical_vert:qh,meshphysical_frag:Yh,meshtoon_vert:Zh,meshtoon_frag:Jh,points_vert:Kh,points_frag:Qh,shadow_vert:$h,shadow_frag:eu,sprite_vert:tu,sprite_frag:iu},te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new at},uv2Transform:{value:new at},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new at}}},Nt={basic:{uniforms:rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:rt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:rt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:rt([te.points,te.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:rt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:rt([te.common,te.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:rt([te.sprite,te.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:rt([te.common,te.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:rt([te.lights,te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Nt.physical={uniforms:rt([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Cr={r:0,b:0,g:0};function ru(a,e,t,i,r,n,o){const s=new Ie(0);let c=n===!0?0:1,l,h,d=null,u=0,f=null;function _(p,S){let y=!1,v=S.isScene===!0?S.background:null;v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v));const w=a.xr,E=w.getSession&&w.getSession();E&&E.environmentBlendMode==="additive"&&(v=null),v===null?m(s,c):v&&v.isColor&&(m(v,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ir)?(h===void 0&&(h=new St(new Hi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Bi(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=v.encoding!==ze,(d!==v||u!==v.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new St(new Un(2,2),new _i({name:"BackgroundMaterial",uniforms:Bi(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=v.encoding!==ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,S){p.getRGB(Cr,ys(a)),i.buffers.color.setClear(Cr.r,Cr.g,Cr.b,S,o)}return{getClearColor:function(){return s},setClearColor:function(p,S=1){s.set(p),c=S,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(s,c)},render:_}}function nu(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},c=p(null);let l=c,h=!1;function d(I,H,J,Q,W){let Z=!1;if(o){const K=m(Q,J,H);l!==K&&(l=K,f(l.object)),Z=S(I,Q,J,W),Z&&y(I,Q,J,W)}else{const K=H.wireframe===!0;(l.geometry!==Q.id||l.program!==J.id||l.wireframe!==K)&&(l.geometry=Q.id,l.program=J.id,l.wireframe=K,Z=!0)}W!==null&&t.update(W,34963),(Z||h)&&(h=!1,M(I,H,J,Q),W!==null&&a.bindBuffer(34963,t.get(W).buffer))}function u(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function f(I){return i.isWebGL2?a.bindVertexArray(I):n.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?a.deleteVertexArray(I):n.deleteVertexArrayOES(I)}function m(I,H,J){const Q=J.wireframe===!0;let W=s[I.id];W===void 0&&(W={},s[I.id]=W);let Z=W[H.id];Z===void 0&&(Z={},W[H.id]=Z);let K=Z[Q];return K===void 0&&(K=p(u()),Z[Q]=K),K}function p(I){const H=[],J=[],Q=[];for(let W=0;W<r;W++)H[W]=0,J[W]=0,Q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:Q,object:I,attributes:{},index:null}}function S(I,H,J,Q){const W=l.attributes,Z=H.attributes;let K=0;const de=J.getAttributes();for(const U in de)if(de[U].location>=0){const j=W[U];let ie=Z[U];if(ie===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;K++}return l.attributesNum!==K||l.index!==Q}function y(I,H,J,Q){const W={},Z=H.attributes;let K=0;const de=J.getAttributes();for(const U in de)if(de[U].location>=0){let j=Z[U];j===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),W[U]=ie,K++}l.attributes=W,l.attributesNum=K,l.index=Q}function v(){const I=l.newAttributes;for(let H=0,J=I.length;H<J;H++)I[H]=0}function w(I){E(I,0)}function E(I,H){const J=l.newAttributes,Q=l.enabledAttributes,W=l.attributeDivisors;J[I]=1,Q[I]===0&&(a.enableVertexAttribArray(I),Q[I]=1),W[I]!==H&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),W[I]=H)}function A(){const I=l.newAttributes,H=l.enabledAttributes;for(let J=0,Q=H.length;J<Q;J++)H[J]!==I[J]&&(a.disableVertexAttribArray(J),H[J]=0)}function N(I,H,J,Q,W,Z){i.isWebGL2===!0&&(J===5124||J===5125)?a.vertexAttribIPointer(I,H,J,W,Z):a.vertexAttribPointer(I,H,J,Q,W,Z)}function M(I,H,J,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=Q.attributes,Z=J.getAttributes(),K=H.defaultAttributeValues;for(const de in Z){const U=Z[de];if(U.location>=0){let j=W[de];if(j===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const ie=j.normalized,z=j.itemSize,oe=t.get(j);if(oe===void 0)continue;const se=oe.buffer,le=oe.type,ce=oe.bytesPerElement;if(j.isInterleavedBufferAttribute){const ge=j.data,Te=ge.stride,ye=j.offset;if(ge.isInstancedInterleavedBuffer){for(let Re=0;Re<U.locationSize;Re++)E(U.location+Re,ge.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Re=0;Re<U.locationSize;Re++)w(U.location+Re);a.bindBuffer(34962,se);for(let Re=0;Re<U.locationSize;Re++)N(U.location+Re,z/U.locationSize,le,ie,Te*ce,(ye+z/U.locationSize*Re)*ce)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<U.locationSize;ge++)E(U.location+ge,j.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<U.locationSize;ge++)w(U.location+ge);a.bindBuffer(34962,se);for(let ge=0;ge<U.locationSize;ge++)N(U.location+ge,z/U.locationSize,le,ie,z*ce,z/U.locationSize*ge*ce)}}else if(K!==void 0){const ie=K[de];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(U.location,ie);break;case 3:a.vertexAttrib3fv(U.location,ie);break;case 4:a.vertexAttrib4fv(U.location,ie);break;default:a.vertexAttrib1fv(U.location,ie)}}}}A()}function T(){Y();for(const I in s){const H=s[I];for(const J in H){const Q=H[J];for(const W in Q)_(Q[W].object),delete Q[W];delete H[J]}delete s[I]}}function D(I){if(s[I.id]===void 0)return;const H=s[I.id];for(const J in H){const Q=H[J];for(const W in Q)_(Q[W].object),delete Q[W];delete H[J]}delete s[I.id]}function q(I){for(const H in s){const J=s[H];if(J[I.id]===void 0)continue;const Q=J[I.id];for(const W in Q)_(Q[W].object),delete Q[W];delete J[I.id]}}function Y(){O(),h=!0,l!==c&&(l=c,f(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:w,disableUnusedAttributes:A}}function au(a,e,t,i){const r=i.isWebGL2;let n;function o(l){n=l}function s(l,h){a.drawArrays(n,l,h),t.update(h,n,1)}function c(l,h,d){if(d===0)return;let u,f;if(r)u=a,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](n,l,h,d),t.update(h,n,d)}this.setMode=o,this.render=s,this.renderInstances=c}function su(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(N){if(N==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=n(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),f=a.getParameter(3379),_=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),S=a.getParameter(36348),y=a.getParameter(36349),v=u>0,w=o||e.has("OES_texture_float"),E=v&&w,A=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:E,maxSamples:A}}function ou(a){const e=this;let t=null,i=0,r=!1,n=!1;const o=new si,s=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,S=a.get(d);if(!r||_===null||_.length===0||n&&!p)n?h(null):l();else{const y=n?0:i,v=y*4;let w=S.clippingState||null;c.value=w,w=h(_,u,v,f);for(let E=0;E!==v;++E)w[E]=t[E];S.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,_){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=c.value,_!==!0||p===null){const S=f+m*4,y=u.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<S)&&(p=new Float32Array(S));for(let v=0,w=f;v!==m;++v,w+=4)o.copy(d[v]).applyMatrix4(y,s),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function lu(a){let e=new WeakMap;function t(o,s){return s===Tn?o.mapping=Oi:s===En&&(o.mapping=Ui),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Tn||s===En)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class cu extends ws{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,o=n+l*this.view.width,s-=h*this.view.offsetY,c=s-h*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,Na=[.125,.215,.35,.446,.526,.582],li=20,vn=new cu,za=new Ie;let xn=null;const oi=(1+Math.sqrt(5))/2,Ri=1/oi,Oa=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,oi,Ri),new R(0,oi,-Ri),new R(Ri,0,oi),new R(-Ri,0,oi),new R(oi,Ri,0),new R(-oi,Ri,0)];class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xn=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xn),e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:ar,format:At,encoding:fi,depthBuffer:!1},r=Fa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hu(n)),this._blurMaterial=uu(n,e,t)}return r}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,vn)}_sceneToCubeUV(e,t,i,r){const n=new ft(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(za),c.toneMapping=Wt,c.autoClear=!1;const d=new zn({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),u=new St(new Hi,d);let f=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,f=!0):(d.color.copy(za),f=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(n.up.set(0,o[m],0),n.lookAt(s[m],0,0)):p===1?(n.up.set(0,0,o[m]),n.lookAt(0,s[m],0)):(n.up.set(0,o[m],0),n.lookAt(0,0,s[m]));const S=this._cubeSize;Ar(r,p*S,m>2?S:0,S,S),c.setRenderTarget(r),f&&c.render(u,n),c.render(e,n)}u.geometry.dispose(),u.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Oi||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const c=this._cubeSize;Ar(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,vn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oa[(r-1)%Oa.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new St(this._lodPlanes[r],l),u=l.uniforms,f=this._sizeLods[i]-1,_=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*li-1),m=n/_,p=isFinite(n)?1+Math.floor(h*m):li;p>li&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const S=[];let y=0;for(let N=0;N<li;++N){const M=N/m,T=Math.exp(-M*M/2);S.push(T),N===0?y+=T:N<p&&(y+=2*T)}for(let N=0;N<S.length;N++)S[N]=S[N]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=S,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-i;const w=this._sizeLods[r],E=3*w*(r>v-Pi?r-v+Pi:0),A=4*(this._cubeSize-w);Ar(t,E,A,3*w,2*w),c.setRenderTarget(t),c.render(d,vn)}}function hu(a){const e=[],t=[],i=[];let r=a;const n=a-Pi+1+Na.length;for(let o=0;o<n;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>a-Pi?c=Na[o-a+Pi-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,m=3,p=2,S=1,y=new Float32Array(m*_*f),v=new Float32Array(p*_*f),w=new Float32Array(S*_*f);for(let A=0;A<f;A++){const N=A%3*2/3-1,M=A>2?0:-1,T=[N,M,0,N+2/3,M,0,N+2/3,M+1,0,N,M,0,N+2/3,M+1,0,N,M+1,0];y.set(T,m*_*A),v.set(u,p*_*A);const D=[A,A,A,A,A,A];w.set(D,S*_*A)}const E=new Vt;E.setAttribute("position",new zt(y,m)),E.setAttribute("uv",new zt(v,p)),E.setAttribute("faceIndex",new zt(w,S)),e.push(E),r>Pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fa(a,e,t){const i=new gi(a,e,t);return i.texture.mapping=Ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function uu(a,e,t){const i=new Float32Array(li),r=new R(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fn(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Ba(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fn(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function ka(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Fn(){return`

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
	`}function du(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===Tn||c===En,h=c===Oi||c===Ui;if(l||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new Ua(a)),d=l?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(l&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ua(a));const u=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",n),u.texture}else return null}}}return s}function r(s){let c=0;const l=6;for(let h=0;h<l;h++)s[h]!==void 0&&c++;return c===l}function n(s){const c=s.target;c.removeEventListener("dispose",n);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pu(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mu(a,e,t,i){const r={},n=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const f=n.get(u);f&&(e.remove(f),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)e.update(u[_],34962);const f=d.morphAttributes;for(const _ in f){const m=f[_];for(let p=0,S=m.length;p<S;p++)e.update(m[p],34962)}}function l(d){const u=[],f=d.index,_=d.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let v=0,w=y.length;v<w;v+=3){const E=y[v+0],A=y[v+1],N=y[v+2];u.push(E,A,A,N,N,E)}}else{const y=_.array;m=_.version;for(let v=0,w=y.length/3-1;v<w;v+=3){const E=v+0,A=v+1,N=v+2;u.push(E,A,A,N,N,E)}}const p=new(fs(u)?bs:Ss)(u,1);p.version=m;const S=n.get(d);S&&e.remove(S),n.set(d,p)}function h(d){const u=n.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return n.get(d)}return{get:s,update:c,getWireframeAttribute:h}}function fu(a,e,t,i){const r=i.isWebGL2;let n;function o(u){n=u}let s,c;function l(u){s=u.type,c=u.bytesPerElement}function h(u,f){a.drawElements(n,f,s,u*c),t.update(f,n,1)}function d(u,f,_){if(_===0)return;let m,p;if(r)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](n,f,s,u*c,_),t.update(f,n,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function gu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _u(a,e){return a[0]-e[0]}function vu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function xu(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new Oe,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0;let m=n.get(h);if(m===void 0||m.count!==_){let y=function(){O.dispose(),n.delete(h),h.removeEventListener("dispose",y)};m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let T=0;v===!0&&(T=1),w===!0&&(T=2),E===!0&&(T=3);let D=h.attributes.position.count*T,q=1;D>e.maxTextureSize&&(q=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const Y=new Float32Array(D*q*4*_),O=new vs(Y,D,q,_);O.type=hi,O.needsUpdate=!0;const I=T*4;for(let H=0;H<_;H++){const J=A[H],Q=N[H],W=M[H],Z=D*q*4*H;for(let K=0;K<J.count;K++){const de=K*I;v===!0&&(o.fromBufferAttribute(J,K),Y[Z+de+0]=o.x,Y[Z+de+1]=o.y,Y[Z+de+2]=o.z,Y[Z+de+3]=0),w===!0&&(o.fromBufferAttribute(Q,K),Y[Z+de+4]=o.x,Y[Z+de+5]=o.y,Y[Z+de+6]=o.z,Y[Z+de+7]=0),E===!0&&(o.fromBufferAttribute(W,K),Y[Z+de+8]=o.x,Y[Z+de+9]=o.y,Y[Z+de+10]=o.z,Y[Z+de+11]=W.itemSize===4?o.w:1)}}m={count:_,texture:O,size:new De(D,q)},n.set(h,m),h.addEventListener("dispose",y)}let p=0;for(let y=0;y<u.length;y++)p+=u[y];const S=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(a,"morphTargetBaseInfluence",S),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const f=u===void 0?0:u.length;let _=i[h.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<f;v++){const w=_[v];w[0]=v,w[1]=u[v]}_.sort(vu);for(let v=0;v<8;v++)v<f&&_[v][1]?(s[v][0]=_[v][0],s[v][1]=_[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(_u);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const w=s[v],E=w[0],A=w[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+v)!==m[E]&&h.setAttribute("morphTarget"+v,m[E]),p&&h.getAttribute("morphNormal"+v)!==p[E]&&h.setAttribute("morphNormal"+v,p[E]),r[v]=A,S+=A):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const y=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(a,"morphTargetBaseInfluence",y),d.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:c}}function Mu(a,e,t,i){let r=new WeakMap;function n(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);return r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:o}}const Cs=new ct,As=new vs,Ls=new nl,Rs=new Ts,Ga=[],Ha=[],Wa=new Float32Array(16),Va=new Float32Array(9),ja=new Float32Array(4);function Wi(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=Ga[r];if(n===void 0&&(n=new Float32Array(r),Ga[r]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(n,s)}return n}function Ve(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function je(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Or(a,e){let t=Ha[e];t===void 0&&(t=new Int32Array(e),Ha[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Su(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function bu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ve(t,e))return;a.uniform2fv(this.addr,e),je(t,e)}}function yu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ve(t,e))return;a.uniform3fv(this.addr,e),je(t,e)}}function wu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ve(t,e))return;a.uniform4fv(this.addr,e),je(t,e)}}function Tu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ve(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if(Ve(t,i))return;ja.set(i),a.uniformMatrix2fv(this.addr,!1,ja),je(t,i)}}function Eu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ve(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if(Ve(t,i))return;Va.set(i),a.uniformMatrix3fv(this.addr,!1,Va),je(t,i)}}function Cu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ve(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if(Ve(t,i))return;Wa.set(i),a.uniformMatrix4fv(this.addr,!1,Wa),je(t,i)}}function Au(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Lu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ve(t,e))return;a.uniform2iv(this.addr,e),je(t,e)}}function Ru(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ve(t,e))return;a.uniform3iv(this.addr,e),je(t,e)}}function Du(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ve(t,e))return;a.uniform4iv(this.addr,e),je(t,e)}}function Pu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Iu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ve(t,e))return;a.uniform2uiv(this.addr,e),je(t,e)}}function Nu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ve(t,e))return;a.uniform3uiv(this.addr,e),je(t,e)}}function zu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ve(t,e))return;a.uniform4uiv(this.addr,e),je(t,e)}}function Ou(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Cs,r)}function Uu(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ls,r)}function Fu(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rs,r)}function Bu(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||As,r)}function ku(a){switch(a){case 5126:return Su;case 35664:return bu;case 35665:return yu;case 35666:return wu;case 35674:return Tu;case 35675:return Eu;case 35676:return Cu;case 5124:case 35670:return Au;case 35667:case 35671:return Lu;case 35668:case 35672:return Ru;case 35669:case 35673:return Du;case 5125:return Pu;case 36294:return Iu;case 36295:return Nu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ou;case 35679:case 36299:case 36307:return Uu;case 35680:case 36300:case 36308:case 36293:return Fu;case 36289:case 36303:case 36311:case 36292:return Bu}}function Gu(a,e){a.uniform1fv(this.addr,e)}function Hu(a,e){const t=Wi(e,this.size,2);a.uniform2fv(this.addr,t)}function Wu(a,e){const t=Wi(e,this.size,3);a.uniform3fv(this.addr,t)}function Vu(a,e){const t=Wi(e,this.size,4);a.uniform4fv(this.addr,t)}function ju(a,e){const t=Wi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Xu(a,e){const t=Wi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function qu(a,e){const t=Wi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Yu(a,e){a.uniform1iv(this.addr,e)}function Zu(a,e){a.uniform2iv(this.addr,e)}function Ju(a,e){a.uniform3iv(this.addr,e)}function Ku(a,e){a.uniform4iv(this.addr,e)}function Qu(a,e){a.uniform1uiv(this.addr,e)}function $u(a,e){a.uniform2uiv(this.addr,e)}function ed(a,e){a.uniform3uiv(this.addr,e)}function td(a,e){a.uniform4uiv(this.addr,e)}function id(a,e,t){const i=this.cache,r=e.length,n=Or(t,r);Ve(i,n)||(a.uniform1iv(this.addr,n),je(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cs,n[o])}function rd(a,e,t){const i=this.cache,r=e.length,n=Or(t,r);Ve(i,n)||(a.uniform1iv(this.addr,n),je(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ls,n[o])}function nd(a,e,t){const i=this.cache,r=e.length,n=Or(t,r);Ve(i,n)||(a.uniform1iv(this.addr,n),je(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rs,n[o])}function ad(a,e,t){const i=this.cache,r=e.length,n=Or(t,r);Ve(i,n)||(a.uniform1iv(this.addr,n),je(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||As,n[o])}function sd(a){switch(a){case 5126:return Gu;case 35664:return Hu;case 35665:return Wu;case 35666:return Vu;case 35674:return ju;case 35675:return Xu;case 35676:return qu;case 5124:case 35670:return Yu;case 35667:case 35671:return Zu;case 35668:case 35672:return Ju;case 35669:case 35673:return Ku;case 5125:return Qu;case 36294:return $u;case 36295:return ed;case 36296:return td;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return nd;case 36289:case 36303:case 36311:case 36292:return ad}}class od{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ku(t.type)}}class ld{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=sd(t.type)}}class cd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const s=r[n];s.setValue(e,t[s.id],i)}}}const Mn=/(\w+)(\])?(\[|\.)?/g;function Xa(a,e){a.seq.push(e),a.map[e.id]=e}function hd(a,e,t){const i=a.name,r=i.length;for(Mn.lastIndex=0;;){const n=Mn.exec(i),o=Mn.lastIndex;let s=n[1];const c=n[2]==="]",l=n[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Xa(t,l===void 0?new od(s,a,e):new ld(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new cd(s),Xa(t,h)),t=h}}}class Rr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);hd(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const s=t[n],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qa(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let ud=0;function dd(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function pd(a){switch(a){case fi:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ya(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+dd(a.getShaderSource(e),o)}else return r}function md(a,e){const t=pd(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fd(a,e){let t;switch(e){case ho:t="Linear";break;case uo:t="Reinhard";break;case po:t="OptimizedCineon";break;case mo:t="ACESFilmic";break;case fo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gd(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function _d(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vd(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),o=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[o]={type:n.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function tr(a){return a!==""}function Za(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ja(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dn(a){return a.replace(xd,Md)}function Md(a,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Dn(t)}const Sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(a){return a.replace(Sd,bd)}function bd(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Qa(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yd(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ss?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Hs?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function wd(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Oi:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Td(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Ed(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case cs:e="ENVMAP_BLENDING_MULTIPLY";break;case lo:e="ENVMAP_BLENDING_MIX";break;case co:e="ENVMAP_BLENDING_ADD";break}return e}function Cd(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ad(a,e,t,i){const r=a.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=yd(t),l=wd(t),h=Td(t),d=Ed(t),u=Cd(t),f=t.isWebGL2?"":gd(t),_=_d(n),m=r.createProgram();let p,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(tr).join(`
`),p.length>0&&(p+=`
`),S=[f,_].filter(tr).join(`
`),S.length>0&&(S+=`
`)):(p=[Qa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),S=[f,Qa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wt?"#define TONE_MAPPING":"",t.toneMapping!==Wt?Se.tonemapping_pars_fragment:"",t.toneMapping!==Wt?fd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,md("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=Dn(o),o=Za(o,t),o=Ja(o,t),s=Dn(s),s=Za(s,t),s=Ja(s,t),o=Ka(o),s=Ka(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["#define varying in",t.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const v=y+p+o,w=y+S+s,E=qa(r,35633,v),A=qa(r,35632,w);if(r.attachShader(m,E),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),a.debug.checkShaderErrors){const T=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(E).trim(),q=r.getShaderInfoLog(A).trim();let Y=!0,O=!0;if(r.getProgramParameter(m,35714)===!1){Y=!1;const I=Ya(r,E,"vertex"),H=Ya(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+I+`
`+H)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:Y,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:q,prefix:S}})}r.deleteShader(E),r.deleteShader(A);let N;this.getUniforms=function(){return N===void 0&&(N=new Rr(r,m)),N};let M;return this.getAttributes=function(){return M===void 0&&(M=vd(r,m)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=ud++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}let Ld=0;class Rd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dd(e),t.set(e,i)),i}}class Dd{constructor(e){this.id=Ld++,this.code=e,this.usedTimes=0}}function Pd(a,e,t,i,r,n,o){const s=new xs,c=new Rd,l=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,T,D,q,Y){const O=q.fog,I=Y.geometry,H=M.isMeshStandardMaterial?q.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),Q=J&&J.mapping===Ir?J.image.height:null,W=_[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=Z!==void 0?Z.length:0;let de=0;I.morphAttributes.position!==void 0&&(de=1),I.morphAttributes.normal!==void 0&&(de=2),I.morphAttributes.color!==void 0&&(de=3);let U,j,ie,z;if(W){const ge=Nt[W];U=ge.vertexShader,j=ge.fragmentShader}else U=M.vertexShader,j=M.fragmentShader,c.update(M),ie=c.getVertexShaderID(M),z=c.getFragmentShaderID(M);const oe=a.getRenderTarget(),se=M.alphaTest>0,le=M.clearcoat>0,ce=M.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:M.type,vertexShader:U,fragmentShader:j,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:u,outputEncoding:oe===null?a.outputEncoding:oe.isXRRenderTarget===!0?oe.texture.encoding:fi,map:!!M.map,matcap:!!M.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===No,tangentSpaceNormalMap:M.normalMapType===ds,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ze,clearcoat:le,clearcoatMap:le&&!!M.clearcoatMap,clearcoatRoughnessMap:le&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:le&&!!M.clearcoatNormalMap,iridescence:ce,iridescenceMap:ce&&!!M.iridescenceMap,iridescenceThicknessMap:ce&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Ii,alphaMap:!!M.alphaMap,alphaTest:se,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!I.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Wt,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===gt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(T,M),y(T,M),T.push(a.outputEncoding)),T.push(M.customProgramCacheKey),T.join()}function S(M,T){M.push(T.precision),M.push(T.outputEncoding),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.combine),M.push(T.vertexUvs),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),M.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.specularIntensityMap&&s.enable(15),T.specularColorMap&&s.enable(16),T.transmission&&s.enable(17),T.transmissionMap&&s.enable(18),T.thicknessMap&&s.enable(19),T.sheen&&s.enable(20),T.sheenColorMap&&s.enable(21),T.sheenRoughnessMap&&s.enable(22),T.decodeVideoTexture&&s.enable(23),T.opaque&&s.enable(24),M.push(s.mask)}function v(M){const T=_[M.type];let D;if(T){const q=Nt[T];D=_l.clone(q.uniforms)}else D=M.uniforms;return D}function w(M,T){let D;for(let q=0,Y=l.length;q<Y;q++){const O=l[q];if(O.cacheKey===T){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Ad(a,T,M,n),l.push(D)),D}function E(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:N}}function Id(){let a=new WeakMap;function e(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function t(n){a.delete(n)}function i(n,o,s){a.get(n)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Nd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function $a(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function es(){const a=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(d,u,f,_,m,p){let S=a[e];return S===void 0?(S={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},a[e]=S):(S.id=d.id,S.object=d,S.geometry=u,S.material=f,S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function s(d,u,f,_,m,p){const S=o(d,u,f,_,m,p);f.transmission>0?i.push(S):f.transparent===!0?r.push(S):t.push(S)}function c(d,u,f,_,m,p){const S=o(d,u,f,_,m,p);f.transmission>0?i.unshift(S):f.transparent===!0?r.unshift(S):t.unshift(S)}function l(d,u){t.length>1&&t.sort(d||Nd),i.length>1&&i.sort(u||$a),r.length>1&&r.sort(u||$a)}function h(){for(let d=e,u=a.length;d<u;d++){const f=a[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:s,unshift:c,finish:h,sort:l}}function zd(){let a=new WeakMap;function e(i,r){const n=a.get(i);let o;return n===void 0?(o=new es,a.set(i,[o])):r>=n.length?(o=new es,n.push(o)):o=n[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Od(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ie};break;case"SpotLight":t={position:new R,direction:new R,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new R,halfWidth:new R,halfHeight:new R};break}return a[e.id]=t,t}}}function Ud(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Fd=0;function Bd(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function kd(a,e){const t=new Od,i=Ud(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new R);const n=new R,o=new We,s=new We;function c(h,d){let u=0,f=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let m=0,p=0,S=0,y=0,v=0,w=0,E=0,A=0,N=0,M=0;h.sort(Bd);const T=d===!0?Math.PI:1;for(let q=0,Y=h.length;q<Y;q++){const O=h[q],I=O.color,H=O.intensity,J=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=I.r*H*T,f+=I.g*H*T,_+=I.b*H*T;else if(O.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(O.sh.coefficients[W],H);else if(O.isDirectionalLight){const W=t.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){const Z=O.shadow,K=i.get(O);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[m]=K,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=O.shadow.matrix,w++}r.directional[m]=W,m++}else if(O.isSpotLight){const W=t.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(I).multiplyScalar(H*T),W.distance=J,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,r.spot[S]=W;const Z=O.shadow;if(O.map&&(r.spotLightMap[N]=O.map,N++,Z.updateMatrices(O),O.castShadow&&M++),r.spotLightMatrix[S]=Z.matrix,O.castShadow){const K=i.get(O);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[S]=K,r.spotShadowMap[S]=Q,A++}S++}else if(O.isRectAreaLight){const W=t.get(O);W.color.copy(I).multiplyScalar(H),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=W,y++}else if(O.isPointLight){const W=t.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity*T),W.distance=O.distance,W.decay=O.decay,O.castShadow){const Z=O.shadow,K=i.get(O);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=O.shadow.matrix,E++}r.point[p]=W,p++}else if(O.isHemisphereLight){const W=t.get(O);W.skyColor.copy(O.color).multiplyScalar(H*T),W.groundColor.copy(O.groundColor).multiplyScalar(H*T),r.hemi[v]=W,v++}}y>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=_;const D=r.hash;(D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==y||D.hemiLength!==v||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==N)&&(r.directional.length=m,r.spot.length=S,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+N-M,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=M,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=y,D.hemiLength=v,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=N,r.version=Fd++)}function l(h,d){let u=0,f=0,_=0,m=0,p=0;const S=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const w=h[y];if(w.isDirectionalLight){const E=r.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(S),u++}else if(w.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(S),_++}else if(w.isRectAreaLight){const E=r.rectArea[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(S),s.identity(),o.copy(w.matrixWorld),o.premultiply(S),s.extractRotation(o),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),m++}else if(w.isPointLight){const E=r.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(S),f++}else if(w.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(S),p++}}}return{setup:c,setupView:l,state:r}}function ts(a,e){const t=new kd(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Gd(a,e){let t=new WeakMap;function i(n,o=0){const s=t.get(n);let c;return s===void 0?(c=new ts(a,e),t.set(n,[c])):o>=s.length?(c=new ts(a,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Hd extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Po,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wd extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jd=`uniform sampler2D shadow_pass;
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
}`;function Xd(a,e,t){let i=new On;const r=new De,n=new De,o=new Oe,s=new Hd({depthPacking:Io}),c=new Wd,l={},h=t.maxTextureSize,d={[Qt]:gt,[gt]:Qt,[Zt]:Zt},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Vd,fragmentShader:jd}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new St(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss,this.render=function(w,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const N=a.getRenderTarget(),M=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),D=a.state;D.setBlending(Kt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let q=0,Y=w.length;q<Y;q++){const O=w[q],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const H=I.getFrameExtents();if(r.multiply(H),n.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/H.x),r.x=n.x*H.x,I.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/H.y),r.y=n.y*H.y,I.mapSize.y=n.y)),I.map===null){const Q=this.type!==$i?{minFilter:nt,magFilter:nt}:{};I.map=new gi(r.x,r.y,Q),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();const J=I.getViewportCount();for(let Q=0;Q<J;Q++){const W=I.getViewport(Q);o.set(n.x*W.x,n.y*W.y,n.x*W.z,n.y*W.w),D.viewport(o),I.updateMatrices(O,Q),i=I.getFrustum(),v(E,A,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===$i&&S(I,A),I.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(N,M,T)};function S(w,E){const A=e.update(m);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(E,null,A,u,m,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(E,null,A,f,m,null)}function y(w,E,A,N,M,T){let D=null;const q=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(q!==void 0)D=q;else if(D=A.isPointLight===!0?c:s,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Y=D.uuid,O=E.uuid;let I=l[Y];I===void 0&&(I={},l[Y]=I);let H=I[O];H===void 0&&(H=D.clone(),I[O]=H),D=H}return D.visible=E.visible,D.wireframe=E.wireframe,T===$i?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:d[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=N,D.farDistance=M),D}function v(w,E,A,N,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===$i)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const D=e.update(w),q=w.material;if(Array.isArray(q)){const Y=D.groups;for(let O=0,I=Y.length;O<I;O++){const H=Y[O],J=q[H.materialIndex];if(J&&J.visible){const Q=y(w,J,N,A.near,A.far,M);a.renderBufferDirect(A,null,D,Q,w,H)}}}else if(q.visible){const Y=y(w,q,N,A.near,A.far,M);a.renderBufferDirect(A,null,D,Y,w,null)}}const T=w.children;for(let D=0,q=T.length;D<q;D++)v(T[D],E,A,N,M)}}function qd(a,e,t){const i=t.isWebGL2;function r(){let C=!1;const k=new Oe;let X=null;const re=new Oe(0,0,0,0);return{setMask:function(pe){X!==pe&&!C&&(a.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){C=pe},setClear:function(pe,Ne,qe,et,Rt){Rt===!0&&(pe*=et,Ne*=et,qe*=et),k.set(pe,Ne,qe,et),re.equals(k)===!1&&(a.clearColor(pe,Ne,qe,et),re.copy(k))},reset:function(){C=!1,X=null,re.set(-1,0,0,0)}}}function n(){let C=!1,k=null,X=null,re=null;return{setTest:function(pe){pe?se(2929):le(2929)},setMask:function(pe){k!==pe&&!C&&(a.depthMask(pe),k=pe)},setFunc:function(pe){if(X!==pe){switch(pe){case to:a.depthFunc(512);break;case io:a.depthFunc(519);break;case ro:a.depthFunc(513);break;case wn:a.depthFunc(515);break;case no:a.depthFunc(514);break;case ao:a.depthFunc(518);break;case so:a.depthFunc(516);break;case oo:a.depthFunc(517);break;default:a.depthFunc(515)}X=pe}},setLocked:function(pe){C=pe},setClear:function(pe){re!==pe&&(a.clearDepth(pe),re=pe)},reset:function(){C=!1,k=null,X=null,re=null}}}function o(){let C=!1,k=null,X=null,re=null,pe=null,Ne=null,qe=null,et=null,Rt=null;return{setTest:function(ke){C||(ke?se(2960):le(2960))},setMask:function(ke){k!==ke&&!C&&(a.stencilMask(ke),k=ke)},setFunc:function(ke,vt,Dt){(X!==ke||re!==vt||pe!==Dt)&&(a.stencilFunc(ke,vt,Dt),X=ke,re=vt,pe=Dt)},setOp:function(ke,vt,Dt){(Ne!==ke||qe!==vt||et!==Dt)&&(a.stencilOp(ke,vt,Dt),Ne=ke,qe=vt,et=Dt)},setLocked:function(ke){C=ke},setClear:function(ke){Rt!==ke&&(a.clearStencil(ke),Rt=ke)},reset:function(){C=!1,k=null,X=null,re=null,pe=null,Ne=null,qe=null,et=null,Rt=null}}}const s=new r,c=new n,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},_=new WeakMap,m=[],p=null,S=!1,y=null,v=null,w=null,E=null,A=null,N=null,M=null,T=!1,D=null,q=null,Y=null,O=null,I=null;const H=a.getParameter(35661);let J=!1,Q=0;const W=a.getParameter(7938);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=Q>=2);let Z=null,K={};const de=a.getParameter(3088),U=a.getParameter(2978),j=new Oe().fromArray(de),ie=new Oe().fromArray(U);function z(C,k,X){const re=new Uint8Array(4),pe=a.createTexture();a.bindTexture(C,pe),a.texParameteri(C,10241,9728),a.texParameteri(C,10240,9728);for(let Ne=0;Ne<X;Ne++)a.texImage2D(k+Ne,0,6408,1,1,0,6408,5121,re);return pe}const oe={};oe[3553]=z(3553,3553,1),oe[34067]=z(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),se(2929),c.setFunc(wn),st(!1),$e(Vn),se(2884),Qe(Kt);function se(C){u[C]!==!0&&(a.enable(C),u[C]=!0)}function le(C){u[C]!==!1&&(a.disable(C),u[C]=!1)}function ce(C,k){return f[C]!==k?(a.bindFramebuffer(C,k),f[C]=k,i&&(C===36009&&(f[36160]=k),C===36160&&(f[36009]=k)),!0):!1}function ge(C,k){let X=m,re=!1;if(C)if(X=_.get(k),X===void 0&&(X=[],_.set(k,X)),C.isWebGLMultipleRenderTargets){const pe=C.texture;if(X.length!==pe.length||X[0]!==36064){for(let Ne=0,qe=pe.length;Ne<qe;Ne++)X[Ne]=36064+Ne;X.length=pe.length,re=!0}}else X[0]!==36064&&(X[0]=36064,re=!0);else X[0]!==1029&&(X[0]=1029,re=!0);re&&(t.isWebGL2?a.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Te(C){return p!==C?(a.useProgram(C),p=C,!0):!1}const ye={[Di]:32774,[Vs]:32778,[js]:32779};if(i)ye[Yn]=32775,ye[Zn]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ye[Yn]=C.MIN_EXT,ye[Zn]=C.MAX_EXT)}const Re={[Xs]:0,[qs]:1,[Ys]:768,[os]:770,[eo]:776,[Qs]:774,[Js]:772,[Zs]:769,[ls]:771,[$s]:775,[Ks]:773};function Qe(C,k,X,re,pe,Ne,qe,et){if(C===Kt){S===!0&&(le(3042),S=!1);return}if(S===!1&&(se(3042),S=!0),C!==Ws){if(C!==y||et!==T){if((v!==Di||A!==Di)&&(a.blendEquation(32774),v=Di,A=Di),et)switch(C){case Ii:a.blendFuncSeparate(1,771,1,771);break;case jn:a.blendFunc(1,1);break;case Xn:a.blendFuncSeparate(0,769,0,1);break;case qn:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ii:a.blendFuncSeparate(770,771,1,771);break;case jn:a.blendFunc(770,1);break;case Xn:a.blendFuncSeparate(0,769,0,1);break;case qn:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,E=null,N=null,M=null,y=C,T=et}return}pe=pe||k,Ne=Ne||X,qe=qe||re,(k!==v||pe!==A)&&(a.blendEquationSeparate(ye[k],ye[pe]),v=k,A=pe),(X!==w||re!==E||Ne!==N||qe!==M)&&(a.blendFuncSeparate(Re[X],Re[re],Re[Ne],Re[qe]),w=X,E=re,N=Ne,M=qe),y=C,T=!1}function bt(C,k){C.side===Zt?le(2884):se(2884);let X=C.side===gt;k&&(X=!X),st(X),C.blending===Ii&&C.transparent===!1?Qe(Kt):Qe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),s.setMask(C.colorWrite);const re=C.stencilWrite;l.setTest(re),re&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?se(32926):le(32926)}function st(C){D!==C&&(C?a.frontFace(2304):a.frontFace(2305),D=C)}function $e(C){C!==ks?(se(2884),C!==q&&(C===Vn?a.cullFace(1029):C===Gs?a.cullFace(1028):a.cullFace(1032))):le(2884),q=C}function Be(C){C!==Y&&(J&&a.lineWidth(C),Y=C)}function Ue(C,k,X){C?(se(32823),(O!==k||I!==X)&&(a.polygonOffset(k,X),O=k,I=X)):le(32823)}function Lt(C){C?se(3089):le(3089)}function yt(C){C===void 0&&(C=33984+H-1),Z!==C&&(a.activeTexture(C),Z=C)}function b(C,k,X){X===void 0&&(Z===null?X=33984+H-1:X=Z);let re=K[X];re===void 0&&(re={type:void 0,texture:void 0},K[X]=re),(re.type!==C||re.texture!==k)&&(Z!==X&&(a.activeTexture(X),Z=X),a.bindTexture(C,k||oe[C]),re.type=C,re.texture=k)}function g(){const C=K[Z];C!==void 0&&C.type!==void 0&&(a.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function B(){try{a.compressedTexImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{a.texSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{a.texStorage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{a.texStorage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{a.texImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{a.texImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(C){j.equals(C)===!1&&(a.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function me(C){ie.equals(C)===!1&&(a.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Ae(C,k){let X=d.get(k);X===void 0&&(X=new WeakMap,d.set(k,X));let re=X.get(C);re===void 0&&(re=a.getUniformBlockIndex(k,C.name),X.set(C,re))}function Fe(C,k){const X=d.get(k).get(C);h.get(k)!==X&&(a.uniformBlockBinding(k,X,C.__bindingPointIndex),h.set(k,X))}function Xe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},Z=null,K={},f={},_=new WeakMap,m=[],p=null,S=!1,y=null,v=null,w=null,E=null,A=null,N=null,M=null,T=!1,D=null,q=null,Y=null,O=null,I=null,j.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:se,disable:le,bindFramebuffer:ce,drawBuffers:ge,useProgram:Te,setBlending:Qe,setMaterial:bt,setFlipSided:st,setCullFace:$e,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:Lt,activeTexture:yt,bindTexture:b,unbindTexture:g,compressedTexImage2D:B,compressedTexImage3D:$,texImage2D:he,texImage3D:xe,updateUBOMapping:Ae,uniformBlockBinding:Fe,texStorage2D:V,texStorage3D:ve,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:fe,compressedTexSubImage3D:ae,scissor:_e,viewport:me,reset:Xe}}function Yd(a,e,t,i,r,n,o){const s=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const p=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,g){return S?new OffscreenCanvas(b,g):sr("canvas")}function v(b,g,B,$){let ee=1;if((b.width>$||b.height>$)&&(ee=$/Math.max(b.width,b.height)),ee<1||g===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=g?ms:Math.floor,fe=ne(ee*b.width),ae=ne(ee*b.height);m===void 0&&(m=y(fe,ae));const V=B?y(fe,ae):m;return V.width=fe,V.height=ae,V.getContext("2d").drawImage(b,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+ae+")."),V}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function w(b){return Rn(b.width)&&Rn(b.height)}function E(b){return s?!1:b.wrapS!==Ct||b.wrapT!==Ct||b.minFilter!==nt&&b.minFilter!==Mt}function A(b,g){return b.generateMipmaps&&g&&b.minFilter!==nt&&b.minFilter!==Mt}function N(b){a.generateMipmap(b)}function M(b,g,B,$,ee=!1){if(s===!1)return g;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=g;return g===6403&&(B===5126&&(ne=33326),B===5131&&(ne=33325),B===5121&&(ne=33321)),g===33319&&(B===5126&&(ne=33328),B===5131&&(ne=33327),B===5121&&(ne=33323)),g===6408&&(B===5126&&(ne=34836),B===5131&&(ne=34842),B===5121&&(ne=$===ze&&ee===!1?35907:32856),B===32819&&(ne=32854),B===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function T(b,g,B){return A(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==nt&&b.minFilter!==Mt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function D(b){return b===nt||b===Jn||b===jr?9728:9729}function q(b){const g=b.target;g.removeEventListener("dispose",q),O(g),g.isVideoTexture&&_.delete(g)}function Y(b){const g=b.target;g.removeEventListener("dispose",Y),H(g)}function O(b){const g=i.get(b);if(g.__webglInit===void 0)return;const B=b.source,$=p.get(B);if($){const ee=$[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(b),Object.keys($).length===0&&p.delete(B)}i.remove(b)}function I(b){const g=i.get(b);a.deleteTexture(g.__webglTexture);const B=b.source,$=p.get(B);delete $[g.__cacheKey],o.memory.textures--}function H(b){const g=b.texture,B=i.get(b),$=i.get(g);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(B.__webglFramebuffer[ee]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ne=g.length;ee<ne;ee++){const fe=i.get(g[ee]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(g[ee])}i.remove(g),i.remove(b)}let J=0;function Q(){J=0}function W(){const b=J;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),J+=1,b}function Z(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.encoding),g.join()}function K(b,g){const B=i.get(b);if(b.isVideoTexture&&Lt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(B,b,g);return}}t.bindTexture(3553,B.__webglTexture,33984+g)}function de(b,g){const B=i.get(b);if(b.version>0&&B.__version!==b.version){le(B,b,g);return}t.bindTexture(35866,B.__webglTexture,33984+g)}function U(b,g){const B=i.get(b);if(b.version>0&&B.__version!==b.version){le(B,b,g);return}t.bindTexture(32879,B.__webglTexture,33984+g)}function j(b,g){const B=i.get(b);if(b.version>0&&B.__version!==b.version){ce(B,b,g);return}t.bindTexture(34067,B.__webglTexture,33984+g)}const ie={[Cn]:10497,[Ct]:33071,[An]:33648},z={[nt]:9728,[Jn]:9984,[jr]:9986,[Mt]:9729,[go]:9985,[nr]:9987};function oe(b,g,B){if(B?(a.texParameteri(b,10242,ie[g.wrapS]),a.texParameteri(b,10243,ie[g.wrapT]),(b===32879||b===35866)&&a.texParameteri(b,32882,ie[g.wrapR]),a.texParameteri(b,10240,z[g.magFilter]),a.texParameteri(b,10241,z[g.minFilter])):(a.texParameteri(b,10242,33071),a.texParameteri(b,10243,33071),(b===32879||b===35866)&&a.texParameteri(b,32882,33071),(g.wrapS!==Ct||g.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,10240,D(g.magFilter)),a.texParameteri(b,10241,D(g.minFilter)),g.minFilter!==nt&&g.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===nt||g.minFilter!==jr&&g.minFilter!==nr||g.type===hi&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(a.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function se(b,g){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",q));const $=g.source;let ee=p.get($);ee===void 0&&(ee={},p.set($,ee));const ne=Z(g);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[ne].usedTimes++;const fe=ee[b.__cacheKey];fe!==void 0&&(ee[b.__cacheKey].usedTimes--,fe.usedTimes===0&&I(g)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return B}function le(b,g,B){let $=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=35866),g.isData3DTexture&&($=32879);const ee=se(b,g),ne=g.source;t.bindTexture($,b.__webglTexture,33984+B);const fe=i.get(ne);if(ne.version!==fe.__version||ee===!0){t.activeTexture(33984+B),a.pixelStorei(37440,g.flipY),a.pixelStorei(37441,g.premultiplyAlpha),a.pixelStorei(3317,g.unpackAlignment),a.pixelStorei(37443,0);const ae=E(g)&&w(g.image)===!1;let V=v(g.image,ae,!1,h);V=yt(g,V);const ve=w(V)||s,he=n.convert(g.format,g.encoding);let xe=n.convert(g.type),_e=M(g.internalFormat,he,xe,g.encoding,g.isVideoTexture);oe($,g,ve);let me;const Ae=g.mipmaps,Fe=s&&g.isVideoTexture!==!0,Xe=fe.__version===void 0||ee===!0,C=T(g,V,ve);if(g.isDepthTexture)_e=6402,s?g.type===hi?_e=36012:g.type===ci?_e=33190:g.type===Ni?_e=35056:_e=33189:g.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ui&&_e===6402&&g.type!==us&&g.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ci,xe=n.convert(g.type)),g.format===Fi&&_e===6402&&(_e=34041,g.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ni,xe=n.convert(g.type))),Xe&&(Fe?t.texStorage2D(3553,1,_e,V.width,V.height):t.texImage2D(3553,0,_e,V.width,V.height,0,he,xe,null));else if(g.isDataTexture)if(Ae.length>0&&ve){Fe&&Xe&&t.texStorage2D(3553,C,_e,Ae[0].width,Ae[0].height);for(let k=0,X=Ae.length;k<X;k++)me=Ae[k],Fe?t.texSubImage2D(3553,k,0,0,me.width,me.height,he,xe,me.data):t.texImage2D(3553,k,_e,me.width,me.height,0,he,xe,me.data);g.generateMipmaps=!1}else Fe?(Xe&&t.texStorage2D(3553,C,_e,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,he,xe,V.data)):t.texImage2D(3553,0,_e,V.width,V.height,0,he,xe,V.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Fe&&Xe&&t.texStorage3D(35866,C,_e,Ae[0].width,Ae[0].height,V.depth);for(let k=0,X=Ae.length;k<X;k++)me=Ae[k],g.format!==At?he!==null?Fe?t.compressedTexSubImage3D(35866,k,0,0,0,me.width,me.height,V.depth,he,me.data,0,0):t.compressedTexImage3D(35866,k,_e,me.width,me.height,V.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,k,0,0,0,me.width,me.height,V.depth,he,xe,me.data):t.texImage3D(35866,k,_e,me.width,me.height,V.depth,0,he,xe,me.data)}else{Fe&&Xe&&t.texStorage2D(3553,C,_e,Ae[0].width,Ae[0].height);for(let k=0,X=Ae.length;k<X;k++)me=Ae[k],g.format!==At?he!==null?Fe?t.compressedTexSubImage2D(3553,k,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(3553,k,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,k,0,0,me.width,me.height,he,xe,me.data):t.texImage2D(3553,k,_e,me.width,me.height,0,he,xe,me.data)}else if(g.isDataArrayTexture)Fe?(Xe&&t.texStorage3D(35866,C,_e,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,he,xe,V.data)):t.texImage3D(35866,0,_e,V.width,V.height,V.depth,0,he,xe,V.data);else if(g.isData3DTexture)Fe?(Xe&&t.texStorage3D(32879,C,_e,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,he,xe,V.data)):t.texImage3D(32879,0,_e,V.width,V.height,V.depth,0,he,xe,V.data);else if(g.isFramebufferTexture){if(Xe)if(Fe)t.texStorage2D(3553,C,_e,V.width,V.height);else{let k=V.width,X=V.height;for(let re=0;re<C;re++)t.texImage2D(3553,re,_e,k,X,0,he,xe,null),k>>=1,X>>=1}}else if(Ae.length>0&&ve){Fe&&Xe&&t.texStorage2D(3553,C,_e,Ae[0].width,Ae[0].height);for(let k=0,X=Ae.length;k<X;k++)me=Ae[k],Fe?t.texSubImage2D(3553,k,0,0,he,xe,me):t.texImage2D(3553,k,_e,he,xe,me);g.generateMipmaps=!1}else Fe?(Xe&&t.texStorage2D(3553,C,_e,V.width,V.height),t.texSubImage2D(3553,0,0,0,he,xe,V)):t.texImage2D(3553,0,_e,he,xe,V);A(g,ve)&&N($),fe.__version=ne.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ce(b,g,B){if(g.image.length!==6)return;const $=se(b,g),ee=g.source;t.bindTexture(34067,b.__webglTexture,33984+B);const ne=i.get(ee);if(ee.version!==ne.__version||$===!0){t.activeTexture(33984+B),a.pixelStorei(37440,g.flipY),a.pixelStorei(37441,g.premultiplyAlpha),a.pixelStorei(3317,g.unpackAlignment),a.pixelStorei(37443,0);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,V=[];for(let k=0;k<6;k++)!fe&&!ae?V[k]=v(g.image[k],!1,!0,l):V[k]=ae?g.image[k].image:g.image[k],V[k]=yt(g,V[k]);const ve=V[0],he=w(ve)||s,xe=n.convert(g.format,g.encoding),_e=n.convert(g.type),me=M(g.internalFormat,xe,_e,g.encoding),Ae=s&&g.isVideoTexture!==!0,Fe=ne.__version===void 0||$===!0;let Xe=T(g,ve,he);oe(34067,g,he);let C;if(fe){Ae&&Fe&&t.texStorage2D(34067,Xe,me,ve.width,ve.height);for(let k=0;k<6;k++){C=V[k].mipmaps;for(let X=0;X<C.length;X++){const re=C[X];g.format!==At?xe!==null?Ae?t.compressedTexSubImage2D(34069+k,X,0,0,re.width,re.height,xe,re.data):t.compressedTexImage2D(34069+k,X,me,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+k,X,0,0,re.width,re.height,xe,_e,re.data):t.texImage2D(34069+k,X,me,re.width,re.height,0,xe,_e,re.data)}}}else{C=g.mipmaps,Ae&&Fe&&(C.length>0&&Xe++,t.texStorage2D(34067,Xe,me,V[0].width,V[0].height));for(let k=0;k<6;k++)if(ae){Ae?t.texSubImage2D(34069+k,0,0,0,V[k].width,V[k].height,xe,_e,V[k].data):t.texImage2D(34069+k,0,me,V[k].width,V[k].height,0,xe,_e,V[k].data);for(let X=0;X<C.length;X++){const re=C[X].image[k].image;Ae?t.texSubImage2D(34069+k,X+1,0,0,re.width,re.height,xe,_e,re.data):t.texImage2D(34069+k,X+1,me,re.width,re.height,0,xe,_e,re.data)}}else{Ae?t.texSubImage2D(34069+k,0,0,0,xe,_e,V[k]):t.texImage2D(34069+k,0,me,xe,_e,V[k]);for(let X=0;X<C.length;X++){const re=C[X];Ae?t.texSubImage2D(34069+k,X+1,0,0,xe,_e,re.image[k]):t.texImage2D(34069+k,X+1,me,xe,_e,re.image[k])}}}A(g,he)&&N(34067),ne.__version=ee.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ge(b,g,B,$,ee){const ne=n.convert(B.format,B.encoding),fe=n.convert(B.type),ae=M(B.internalFormat,ne,fe,B.encoding);i.get(g).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ae,g.width,g.height,g.depth,0,ne,fe,null):t.texImage2D(ee,0,ae,g.width,g.height,0,ne,fe,null)),t.bindFramebuffer(36160,b),Ue(g)?u.framebufferTexture2DMultisampleEXT(36160,$,ee,i.get(B).__webglTexture,0,Be(g)):(ee===3553||ee>=34069&&ee<=34074)&&a.framebufferTexture2D(36160,$,ee,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(b,g,B){if(a.bindRenderbuffer(36161,b),g.depthBuffer&&!g.stencilBuffer){let $=33189;if(B||Ue(g)){const ee=g.depthTexture;ee&&ee.isDepthTexture&&(ee.type===hi?$=36012:ee.type===ci&&($=33190));const ne=Be(g);Ue(g)?u.renderbufferStorageMultisampleEXT(36161,ne,$,g.width,g.height):a.renderbufferStorageMultisample(36161,ne,$,g.width,g.height)}else a.renderbufferStorage(36161,$,g.width,g.height);a.framebufferRenderbuffer(36160,36096,36161,b)}else if(g.depthBuffer&&g.stencilBuffer){const $=Be(g);B&&Ue(g)===!1?a.renderbufferStorageMultisample(36161,$,35056,g.width,g.height):Ue(g)?u.renderbufferStorageMultisampleEXT(36161,$,35056,g.width,g.height):a.renderbufferStorage(36161,34041,g.width,g.height),a.framebufferRenderbuffer(36160,33306,36161,b)}else{const $=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ee=0;ee<$.length;ee++){const ne=$[ee],fe=n.convert(ne.format,ne.encoding),ae=n.convert(ne.type),V=M(ne.internalFormat,fe,ae,ne.encoding),ve=Be(g);B&&Ue(g)===!1?a.renderbufferStorageMultisample(36161,ve,V,g.width,g.height):Ue(g)?u.renderbufferStorageMultisampleEXT(36161,ve,V,g.width,g.height):a.renderbufferStorage(36161,V,g.width,g.height)}}a.bindRenderbuffer(36161,null)}function ye(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const B=i.get(g.depthTexture).__webglTexture,$=Be(g);if(g.depthTexture.format===ui)Ue(g)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,$):a.framebufferTexture2D(36160,36096,3553,B,0);else if(g.depthTexture.format===Fi)Ue(g)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,$):a.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function Re(b){const g=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ye(g.__webglFramebuffer,b)}else if(B){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]=a.createRenderbuffer(),Te(g.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=a.createRenderbuffer(),Te(g.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Qe(b,g,B){const $=i.get(b);g!==void 0&&ge($.__webglFramebuffer,b,b.texture,36064,3553),B!==void 0&&Re(b)}function bt(b){const g=b.texture,B=i.get(b),$=i.get(g);b.addEventListener("dispose",Y),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=g.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,fe=w(b)||s;if(ee){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)B.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),ne)if(r.drawBuffers){const ae=b.texture;for(let V=0,ve=ae.length;V<ve;V++){const he=i.get(ae[V]);he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&Ue(b)===!1){const ae=ne?g:[g];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let V=0;V<ae.length;V++){const ve=ae[V];B.__webglColorRenderbuffer[V]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[V]);const he=n.convert(ve.format,ve.encoding),xe=n.convert(ve.type),_e=M(ve.internalFormat,he,xe,ve.encoding,b.isXRRenderTarget===!0),me=Be(b);a.renderbufferStorageMultisample(36161,me,_e,b.width,b.height),a.framebufferRenderbuffer(36160,36064+V,36161,B.__webglColorRenderbuffer[V])}a.bindRenderbuffer(36161,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,$.__webglTexture),oe(34067,g,fe);for(let ae=0;ae<6;ae++)ge(B.__webglFramebuffer[ae],b,g,36064,34069+ae);A(g,fe)&&N(34067),t.unbindTexture()}else if(ne){const ae=b.texture;for(let V=0,ve=ae.length;V<ve;V++){const he=ae[V],xe=i.get(he);t.bindTexture(3553,xe.__webglTexture),oe(3553,he,fe),ge(B.__webglFramebuffer,b,he,36064+V,3553),A(he,fe)&&N(3553)}t.unbindTexture()}else{let ae=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?ae=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,$.__webglTexture),oe(ae,g,fe),ge(B.__webglFramebuffer,b,g,36064,ae),A(g,fe)&&N(ae),t.unbindTexture()}b.depthBuffer&&Re(b)}function st(b){const g=w(b)||s,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0,ee=B.length;$<ee;$++){const ne=B[$];if(A(ne,g)){const fe=b.isWebGLCubeRenderTarget?34067:3553,ae=i.get(ne).__webglTexture;t.bindTexture(fe,ae),N(fe),t.unbindTexture()}}}function $e(b){if(s&&b.samples>0&&Ue(b)===!1){const g=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,$=b.height;let ee=16384;const ne=[],fe=b.stencilBuffer?33306:36096,ae=i.get(b),V=b.isWebGLMultipleRenderTargets===!0;if(V)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){ne.push(36064+ve),b.depthBuffer&&ne.push(fe);const he=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(he===!1&&(b.depthBuffer&&(ee|=256),b.stencilBuffer&&(ee|=1024)),V&&a.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[ve]),he===!0&&(a.invalidateFramebuffer(36008,[fe]),a.invalidateFramebuffer(36009,[fe])),V){const xe=i.get(g[ve]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,xe,0)}a.blitFramebuffer(0,0,B,$,0,0,B,$,ee,9728),f&&a.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ve,36161,ae.__webglColorRenderbuffer[ve]);const he=i.get(g[ve]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ve,3553,he,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function Be(b){return Math.min(d,b.samples)}function Ue(b){const g=i.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Lt(b){const g=o.render.frame;_.get(b)!==g&&(_.set(b,g),b.update())}function yt(b,g){const B=b.encoding,$=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ln||B!==fi&&(B===ze?s===!1?e.has("EXT_sRGB")===!0&&$===At?(b.format=Ln,b.minFilter=Mt,b.generateMipmaps=!1):g=gs.sRGBToLinear(g):($!==At||ee!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),g}this.allocateTextureUnit=W,this.resetTextureUnits=Q,this.setTexture2D=K,this.setTexture2DArray=de,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=Qe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ue}function Zd(a,e,t){const i=t.isWebGL2;function r(n,o=null){let s;if(n===mi)return 5121;if(n===Mo)return 32819;if(n===So)return 32820;if(n===_o)return 5120;if(n===vo)return 5122;if(n===us)return 5123;if(n===xo)return 5124;if(n===ci)return 5125;if(n===hi)return 5126;if(n===ar)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===bo)return 6406;if(n===At)return 6408;if(n===yo)return 6409;if(n===wo)return 6410;if(n===ui)return 6402;if(n===Fi)return 34041;if(n===Ln)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===To)return 6403;if(n===Eo)return 36244;if(n===Co)return 33319;if(n===Ao)return 33320;if(n===Lo)return 36249;if(n===Xr||n===qr||n===Yr||n===Zr)if(o===ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kn||n===Qn||n===$n||n===ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$n)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ta||n===ia)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ta)return o===ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===na||n===aa||n===sa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===pa||n===ma||n===fa||n===ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ra)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jr)return o===ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(n===Do||n===_a||n===va||n===xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[n]!==void 0?a[n]:null}return{convert:r}}class Jd extends ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kd={type:"move"};class Sn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i),S=this._getHandJoint(l,m);p!==null&&(S.matrix.fromArray(p.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=p.radius),S.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qd extends ct{constructor(e,t,i,r,n,o,s,c,l,h){if(h=h!==void 0?h:ui,h!==ui&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ui&&(i=ci),i===void 0&&h===Fi&&(i=Ni),super(null,r,n,o,s,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:nt,this.minFilter=c!==void 0?c:nt,this.flipY=!1,this.generateMipmaps=!1}}class $d extends ki{constructor(e,t){super();const i=this;let r=null,n=1,o=null,s="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null;const m=t.getContextAttributes();let p=null,S=null;const y=[],v=[],w=new Set,E=new Map,A=new ft;A.layers.enable(1),A.viewport=new Oe;const N=new ft;N.layers.enable(2),N.viewport=new Oe;const M=[A,N],T=new Jd;T.layers.enable(1),T.layers.enable(2);let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let j=y[U];return j===void 0&&(j=new Sn,y[U]=j),j.getTargetRaySpace()},this.getControllerGrip=function(U){let j=y[U];return j===void 0&&(j=new Sn,y[U]=j),j.getGripSpace()},this.getHand=function(U){let j=y[U];return j===void 0&&(j=new Sn,y[U]=j),j.getHandSpace()};function Y(U){const j=v.indexOf(U.inputSource);if(j===-1)return;const ie=y[j];ie!==void 0&&ie.dispatchEvent({type:U.type,data:U.inputSource})}function O(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",I);for(let U=0;U<y.length;U++){const j=v[U];j!==null&&(v[U]=null,y[U].disconnect(j))}D=null,q=null,e.setRenderTarget(p),f=null,u=null,d=null,r=null,S=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){n=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",O),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:f}),S=new gi(f.framebufferWidth,f.framebufferHeight,{format:At,type:mi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let j=null,ie=null,z=null;m.depth&&(z=m.stencil?35056:33190,j=m.stencil?Fi:ui,ie=m.stencil?Ni:ci);const oe={colorFormat:32856,depthFormat:z,scaleFactor:n};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(oe),r.updateRenderState({layers:[u]}),S=new gi(u.textureWidth,u.textureHeight,{format:At,type:mi,depthTexture:new Qd(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const se=e.properties.get(S);se.__ignoreDepthValues=u.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(U){for(let j=0;j<U.removed.length;j++){const ie=U.removed[j],z=v.indexOf(ie);z>=0&&(v[z]=null,y[z].disconnect(ie))}for(let j=0;j<U.added.length;j++){const ie=U.added[j];let z=v.indexOf(ie);if(z===-1){for(let se=0;se<y.length;se++)if(se>=v.length){v.push(ie),z=se;break}else if(v[se]===null){v[se]=ie,z=se;break}if(z===-1)break}const oe=y[z];oe&&oe.connect(ie)}}const H=new R,J=new R;function Q(U,j,ie){H.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(ie.matrixWorld);const z=H.distanceTo(J),oe=j.projectionMatrix.elements,se=ie.projectionMatrix.elements,le=oe[14]/(oe[10]-1),ce=oe[14]/(oe[10]+1),ge=(oe[9]+1)/oe[5],Te=(oe[9]-1)/oe[5],ye=(oe[8]-1)/oe[0],Re=(se[8]+1)/se[0],Qe=le*ye,bt=le*Re,st=z/(-ye+Re),$e=st*-ye;j.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX($e),U.translateZ(st),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Be=le+st,Ue=ce+st,Lt=Qe-$e,yt=bt+(z-$e),b=ge*ce/Ue*Be,g=Te*ce/Ue*Be;U.projectionMatrix.makePerspective(Lt,yt,b,g,Be,Ue)}function W(U,j){j===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(j.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;T.near=N.near=A.near=U.near,T.far=N.far=A.far=U.far,(D!==T.near||q!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,q=T.far);const j=U.parent,ie=T.cameras;W(T,j);for(let oe=0;oe<ie.length;oe++)W(ie[oe],j);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),U.matrix.copy(T.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const z=U.children;for(let oe=0,se=z.length;oe<se;oe++)z[oe].updateMatrixWorld(!0);ie.length===2?Q(T,A,N):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(U){c=U,u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return w};let Z=null;function K(U,j){if(h=j.getViewerPose(l||o),_=j,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let z=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,z=!0);for(let oe=0;oe<ie.length;oe++){const se=ie[oe];let le=null;if(f!==null)le=f.getViewport(se);else{const ge=d.getViewSubImage(u,se);le=ge.viewport,oe===0&&(e.setRenderTargetTextures(S,ge.colorTexture,u.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(S))}let ce=M[oe];ce===void 0&&(ce=new ft,ce.layers.enable(oe),ce.viewport=new Oe,M[oe]=ce),ce.matrix.fromArray(se.transform.matrix),ce.projectionMatrix.fromArray(se.projectionMatrix),ce.viewport.set(le.x,le.y,le.width,le.height),oe===0&&T.matrix.copy(ce.matrix),z===!0&&T.cameras.push(ce)}}for(let ie=0;ie<y.length;ie++){const z=v[ie],oe=y[ie];z!==null&&oe!==void 0&&oe.update(z,j,l||o)}if(Z&&Z(U,j),j.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ie=null;for(const z of w)j.detectedPlanes.has(z)||(ie===null&&(ie=[]),ie.push(z));if(ie!==null)for(const z of ie)w.delete(z),E.delete(z),i.dispatchEvent({type:"planeremoved",data:z});for(const z of j.detectedPlanes)if(!w.has(z))w.add(z),E.set(z,j.lastChangedTime),i.dispatchEvent({type:"planeadded",data:z});else{const oe=E.get(z);z.lastChangedTime>oe&&(E.set(z,z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:z}))}}_=null}const de=new Es;de.setAnimationLoop(K),this.setAnimationLoop=function(U){Z=U},this.dispose=function(){}}}function ep(a,e){function t(m,p){p.color.getRGB(m.fogColor.value,ys(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(n(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?s(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===gt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===gt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function n(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function s(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===gt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function tp(a,e,t,i){let r={},n={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function c(y,v){const w=v.program;i.uniformBlockBinding(y,w)}function l(y,v){let w=r[y.id];w===void 0&&(_(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",p));const E=v.program;i.updateUBOMapping(y,E);const A=e.render.frame;n[y.id]!==A&&(u(y),n[y.id]=A)}function h(y){const v=d();y.__bindingPointIndex=v;const w=a.createBuffer(),E=y.__size,A=y.usage;return a.bindBuffer(35345,w),a.bufferData(35345,E,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,v,w),w}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const v=r[y.id],w=y.uniforms,E=y.__cache;a.bindBuffer(35345,v);for(let A=0,N=w.length;A<N;A++){const M=w[A];if(f(M,A,E)===!0){const T=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let q=0;for(let Y=0;Y<D.length;Y++){const O=D[Y],I=m(O);typeof O=="number"?(M.__data[0]=O,a.bufferSubData(35345,T+q,M.__data)):O.isMatrix3?(M.__data[0]=O.elements[0],M.__data[1]=O.elements[1],M.__data[2]=O.elements[2],M.__data[3]=O.elements[0],M.__data[4]=O.elements[3],M.__data[5]=O.elements[4],M.__data[6]=O.elements[5],M.__data[7]=O.elements[0],M.__data[8]=O.elements[6],M.__data[9]=O.elements[7],M.__data[10]=O.elements[8],M.__data[11]=O.elements[0]):(O.toArray(M.__data,q),q+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,T,M.__data)}}a.bindBuffer(35345,null)}function f(y,v,w){const E=y.value;if(w[v]===void 0){if(typeof E=="number")w[v]=E;else{const A=Array.isArray(E)?E:[E],N=[];for(let M=0;M<A.length;M++)N.push(A[M].clone());w[v]=N}return!0}else if(typeof E=="number"){if(w[v]!==E)return w[v]=E,!0}else{const A=Array.isArray(w[v])?w[v]:[w[v]],N=Array.isArray(E)?E:[E];for(let M=0;M<A.length;M++){const T=A[M];if(T.equals(N[M])===!1)return T.copy(N[M]),!0}}return!1}function _(y){const v=y.uniforms;let w=0;const E=16;let A=0;for(let N=0,M=v.length;N<M;N++){const T=v[N],D={boundary:0,storage:0},q=Array.isArray(T.value)?T.value:[T.value];for(let Y=0,O=q.length;Y<O;Y++){const I=q[Y],H=m(I);D.boundary+=H.boundary,D.storage+=H.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,N>0){A=w%E;const Y=E-A;A!==0&&Y-D.boundary<0&&(w+=E-A,T.__offset=w)}w+=D.storage}return A=w%E,A>0&&(w+=E-A),y.__size=w,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),a.deleteBuffer(r[v.id]),delete r[v.id],delete n[v.id]}function S(){for(const y in r)a.deleteBuffer(r[y]);o=[],r={},n={}}return{bind:c,update:l,dispose:S}}function ip(){const a=sr("canvas");return a.style.display="block",a}function Bn(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:ip(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,n=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.useLegacyLights=!0,this.toneMapping=Wt,this.toneMappingExposure=1;const m=this;let p=!1,S=0,y=0,v=null,w=-1,E=null;const A=new Oe,N=new Oe;let M=null,T=e.width,D=e.height,q=1,Y=null,O=null;const I=new Oe(0,0,T,D),H=new Oe(0,0,T,D);let J=!1;const Q=new On;let W=!1,Z=!1,K=null;const de=new We,U=new R,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return v===null?q:1}let z=t;function oe(x,P){for(let F=0;F<x.length;F++){const L=x[F],G=e.getContext(L,P);if(G!==null)return G}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pn}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",me,!1),z===null){const P=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&P.shift(),z=oe(P,x),z===null)throw oe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let se,le,ce,ge,Te,ye,Re,Qe,bt,st,$e,Be,Ue,Lt,yt,b,g,B,$,ee,ne,fe,ae,V;function ve(){se=new pu(z),le=new su(z,se,a),se.init(le),fe=new Zd(z,se,le),ce=new qd(z,se,le),ge=new gu,Te=new Id,ye=new Yd(z,se,ce,Te,le,fe,ge),Re=new lu(m),Qe=new du(m),bt=new wl(z,le),ae=new nu(z,se,bt,le),st=new mu(z,bt,ge,ae),$e=new Mu(z,st,bt,ge),$=new xu(z,le,ye),b=new ou(Te),Be=new Pd(m,Re,Qe,se,le,ae,b),Ue=new ep(m,Te),Lt=new zd,yt=new Gd(se,le),B=new ru(m,Re,Qe,ce,$e,h,o),g=new Xd(m,$e,le),V=new tp(z,ge,le,ce),ee=new au(z,se,ge,le),ne=new fu(z,se,ge,le),ge.programs=Be.programs,m.capabilities=le,m.extensions=se,m.properties=Te,m.renderLists=Lt,m.shadowMap=g,m.state=ce,m.info=ge}ve();const he=new $d(m,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const x=se.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=se.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(T,D,!1))},this.getSize=function(x){return x.set(T,D)},this.setSize=function(x,P,F=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=x,D=P,e.width=Math.floor(x*q),e.height=Math.floor(P*q),F===!0&&(e.style.width=x+"px",e.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(T*q,D*q).floor()},this.setDrawingBufferSize=function(x,P,F){T=x,D=P,q=F,e.width=Math.floor(x*F),e.height=Math.floor(P*F),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(I)},this.setViewport=function(x,P,F,L){x.isVector4?I.set(x.x,x.y,x.z,x.w):I.set(x,P,F,L),ce.viewport(A.copy(I).multiplyScalar(q).floor())},this.getScissor=function(x){return x.copy(H)},this.setScissor=function(x,P,F,L){x.isVector4?H.set(x.x,x.y,x.z,x.w):H.set(x,P,F,L),ce.scissor(N.copy(H).multiplyScalar(q).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(x){ce.setScissorTest(J=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){O=x},this.getClearColor=function(x){return x.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(x=!0,P=!0,F=!0){let L=0;x&&(L|=16384),P&&(L|=256),F&&(L|=1024),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Lt.dispose(),yt.dispose(),Te.dispose(),Re.dispose(),Qe.dispose(),$e.dispose(),ae.dispose(),V.dispose(),Be.dispose(),he.dispose(),he.removeEventListener("sessionstart",X),he.removeEventListener("sessionend",re),K&&(K.dispose(),K=null),pe.stop()};function xe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const x=ge.autoReset,P=g.enabled,F=g.autoUpdate,L=g.needsUpdate,G=g.type;ve(),ge.autoReset=x,g.enabled=P,g.autoUpdate=F,g.needsUpdate=L,g.type=G}function me(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ae(x){const P=x.target;P.removeEventListener("dispose",Ae),Fe(P)}function Fe(x){Xe(x),Te.remove(x)}function Xe(x){const P=Te.get(x).programs;P!==void 0&&(P.forEach(function(F){Be.releaseProgram(F)}),x.isShaderMaterial&&Be.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,F,L,G,ue){P===null&&(P=j);const Me=G.isMesh&&G.matrixWorld.determinant()<0,be=Os(x,P,F,L,G);ce.setMaterial(L,Me);let we=F.index,Pe=1;L.wireframe===!0&&(we=st.getWireframeAttribute(F),Pe=2);const Le=F.drawRange,Ee=F.attributes.position;let Ze=Le.start*Pe,ut=(Le.start+Le.count)*Pe;ue!==null&&(Ze=Math.max(Ze,ue.start*Pe),ut=Math.min(ut,(ue.start+ue.count)*Pe)),we!==null?(Ze=Math.max(Ze,0),ut=Math.min(ut,we.count)):Ee!=null&&(Ze=Math.max(Ze,0),ut=Math.min(ut,Ee.count));const Ot=ut-Ze;if(Ot<0||Ot===1/0)return;ae.setup(G,L,be,F,we);let ei,Ge=ee;if(we!==null&&(ei=bt.get(we),Ge=ne,Ge.setIndex(ei)),G.isMesh)L.wireframe===!0?(ce.setLineWidth(L.wireframeLinewidth*ie()),Ge.setMode(1)):Ge.setMode(4);else if(G.isLine){let Ce=L.linewidth;Ce===void 0&&(Ce=1),ce.setLineWidth(Ce*ie()),G.isLineSegments?Ge.setMode(1):G.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else G.isPoints?Ge.setMode(0):G.isSprite&&Ge.setMode(4);if(G.isInstancedMesh)Ge.renderInstances(Ze,Ot,G.count);else if(F.isInstancedBufferGeometry){const Ce=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,kr=Math.min(F.instanceCount,Ce);Ge.renderInstances(Ze,Ot,kr)}else Ge.render(Ze,Ot)},this.compile=function(x,P){function F(L,G,ue){L.transparent===!0&&L.side===Zt&&L.forceSinglePass===!1?(L.side=gt,L.needsUpdate=!0,vt(L,G,ue),L.side=Qt,L.needsUpdate=!0,vt(L,G,ue),L.side=Zt):vt(L,G,ue)}u=yt.get(x),u.init(),_.push(u),x.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights(m.useLegacyLights),x.traverse(function(L){const G=L.material;if(G)if(Array.isArray(G))for(let ue=0;ue<G.length;ue++){const Me=G[ue];F(Me,x,L)}else F(G,x,L)}),_.pop(),u=null};let C=null;function k(x){C&&C(x)}function X(){pe.stop()}function re(){pe.start()}const pe=new Es;pe.setAnimationLoop(k),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(x){C=x,he.setAnimationLoop(x),x===null?pe.stop():pe.start()},he.addEventListener("sessionstart",X),he.addEventListener("sessionend",re),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(P),P=he.getCamera()),x.isScene===!0&&x.onBeforeRender(m,x,P,v),u=yt.get(x,_.length),u.init(),_.push(u),de.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Q.setFromProjectionMatrix(de),Z=this.localClippingEnabled,W=b.init(this.clippingPlanes,Z),d=Lt.get(x,f.length),d.init(),f.push(d),Ne(x,P,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(Y,O),W===!0&&b.beginShadows();const F=u.state.shadowsArray;if(g.render(F,x,P),W===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(d,x),u.setupLights(m.useLegacyLights),P.isArrayCamera){const L=P.cameras;for(let G=0,ue=L.length;G<ue;G++){const Me=L[G];qe(d,x,Me,Me.viewport)}}else qe(d,x,P);v!==null&&(ye.updateMultisampleRenderTarget(v),ye.updateRenderTargetMipmap(v)),x.isScene===!0&&x.onAfterRender(m,x,P),ae.resetDefaultState(),w=-1,E=null,_.pop(),_.length>0?u=_[_.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Ne(x,P,F,L){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Q.intersectsSprite(x)){L&&U.setFromMatrixPosition(x.matrixWorld).applyMatrix4(de);const ue=$e.update(x),Me=x.material;Me.visible&&d.push(x,ue,Me,F,U.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==ge.render.frame&&(x.skeleton.update(),x.skeleton.frame=ge.render.frame),!x.frustumCulled||Q.intersectsObject(x))){L&&U.setFromMatrixPosition(x.matrixWorld).applyMatrix4(de);const ue=$e.update(x),Me=x.material;if(Array.isArray(Me)){const be=ue.groups;for(let we=0,Pe=be.length;we<Pe;we++){const Le=be[we],Ee=Me[Le.materialIndex];Ee&&Ee.visible&&d.push(x,ue,Ee,F,U.z,Le)}}else Me.visible&&d.push(x,ue,Me,F,U.z,null)}}const G=x.children;for(let ue=0,Me=G.length;ue<Me;ue++)Ne(G[ue],P,F,L)}function qe(x,P,F,L){const G=x.opaque,ue=x.transmissive,Me=x.transparent;u.setupLightsView(F),W===!0&&b.setGlobalState(m.clippingPlanes,F),ue.length>0&&et(G,P,F),L&&ce.viewport(A.copy(L)),G.length>0&&Rt(G,P,F),ue.length>0&&Rt(ue,P,F),Me.length>0&&Rt(Me,P,F),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function et(x,P,F){const L=le.isWebGL2;K===null&&(K=new gi(1024,1024,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?ar:mi,minFilter:nr,samples:L&&n===!0?4:0}));const G=m.getRenderTarget();m.setRenderTarget(K),m.clear();const ue=m.toneMapping;m.toneMapping=Wt,Rt(x,P,F),m.toneMapping=ue,ye.updateMultisampleRenderTarget(K),ye.updateRenderTargetMipmap(K),m.setRenderTarget(G)}function Rt(x,P,F){const L=P.isScene===!0?P.overrideMaterial:null;for(let G=0,ue=x.length;G<ue;G++){const Me=x[G],be=Me.object,we=Me.geometry,Pe=L===null?Me.material:L,Le=Me.group;be.layers.test(F.layers)&&ke(be,P,F,we,Pe,Le)}}function ke(x,P,F,L,G,ue){x.onBeforeRender(m,P,F,L,G,ue),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(m,P,F,L,x,ue),G.transparent===!0&&G.side===Zt&&G.forceSinglePass===!1?(G.side=gt,G.needsUpdate=!0,m.renderBufferDirect(F,P,L,G,x,ue),G.side=Qt,G.needsUpdate=!0,m.renderBufferDirect(F,P,L,G,x,ue),G.side=Zt):m.renderBufferDirect(F,P,L,G,x,ue),x.onAfterRender(m,P,F,L,G,ue)}function vt(x,P,F){P.isScene!==!0&&(P=j);const L=Te.get(x),G=u.state.lights,ue=u.state.shadowsArray,Me=G.state.version,be=Be.getParameters(x,G.state,ue,P,F),we=Be.getProgramCacheKey(be);let Pe=L.programs;L.environment=x.isMeshStandardMaterial?P.environment:null,L.fog=P.fog,L.envMap=(x.isMeshStandardMaterial?Qe:Re).get(x.envMap||L.environment),Pe===void 0&&(x.addEventListener("dispose",Ae),Pe=new Map,L.programs=Pe);let Le=Pe.get(we);if(Le!==void 0){if(L.currentProgram===Le&&L.lightsStateVersion===Me)return Dt(x,be),Le}else be.uniforms=Be.getUniforms(x),x.onBuild(F,be,m),x.onBeforeCompile(be,m),Le=Be.acquireProgram(be,we),Pe.set(we,Le),L.uniforms=be.uniforms;const Ee=L.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=b.uniform),Dt(x,be),L.needsLights=Fs(x),L.lightsStateVersion=Me,L.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.directionalShadowMap.value=G.state.directionalShadowMap,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotShadowMap.value=G.state.spotShadowMap,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMap.value=G.state.pointShadowMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix);const Ze=Le.getUniforms(),ut=Rr.seqWithValue(Ze.seq,Ee);return L.currentProgram=Le,L.uniformsList=ut,Le}function Dt(x,P){const F=Te.get(x);F.outputEncoding=P.outputEncoding,F.instancing=P.instancing,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Os(x,P,F,L,G){P.isScene!==!0&&(P=j),ye.resetTextureUnits();const ue=P.fog,Me=L.isMeshStandardMaterial?P.environment:null,be=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:fi,we=(L.isMeshStandardMaterial?Qe:Re).get(L.envMap||Me),Pe=L.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Le=!!L.normalMap&&!!F.attributes.tangent,Ee=!!F.morphAttributes.position,Ze=!!F.morphAttributes.normal,ut=!!F.morphAttributes.color,Ot=L.toneMapped?m.toneMapping:Wt,ei=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ge=ei!==void 0?ei.length:0,Ce=Te.get(L),kr=u.state.lights;if(W===!0&&(Z===!0||x!==E)){const dt=x===E&&L.id===w;b.setState(L,x,dt)}let Gr=!1;L.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==kr.state.version||Ce.outputEncoding!==be||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==we||L.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==b.numPlanes||Ce.numIntersection!==b.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Le||Ce.morphTargets!==Ee||Ce.morphNormals!==Ze||Ce.morphColors!==ut||Ce.toneMapping!==Ot||le.isWebGL2===!0&&Ce.morphTargetsCount!==Ge)&&(Gr=!0):(Gr=!0,Ce.__version=L.version);let ti=Ce.currentProgram;Gr===!0&&(ti=vt(L,P,G));let Hn=!1,Vi=!1,Hr=!1;const tt=ti.getUniforms(),ii=Ce.uniforms;if(ce.useProgram(ti.program)&&(Hn=!0,Vi=!0,Hr=!0),L.id!==w&&(w=L.id,Vi=!0),Hn||E!==x){if(tt.setValue(z,"projectionMatrix",x.projectionMatrix),le.logarithmicDepthBuffer&&tt.setValue(z,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),E!==x&&(E=x,Vi=!0,Hr=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const dt=tt.map.cameraPosition;dt!==void 0&&dt.setValue(z,U.setFromMatrixPosition(x.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&tt.setValue(z,"isOrthographic",x.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||G.isSkinnedMesh)&&tt.setValue(z,"viewMatrix",x.matrixWorldInverse)}if(G.isSkinnedMesh){tt.setOptional(z,G,"bindMatrix"),tt.setOptional(z,G,"bindMatrixInverse");const dt=G.skeleton;dt&&(le.floatVertexTextures?(dt.boneTexture===null&&dt.computeBoneTexture(),tt.setValue(z,"boneTexture",dt.boneTexture,ye),tt.setValue(z,"boneTextureSize",dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wr=F.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&le.isWebGL2===!0)&&$.update(G,F,ti),(Vi||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,tt.setValue(z,"receiveShadow",G.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(ii.envMap.value=we,ii.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Vi&&(tt.setValue(z,"toneMappingExposure",m.toneMappingExposure),Ce.needsLights&&Us(ii,Hr),ue&&L.fog===!0&&Ue.refreshFogUniforms(ii,ue),Ue.refreshMaterialUniforms(ii,L,q,D,K),Rr.upload(z,Ce.uniformsList,ii,ye)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Rr.upload(z,Ce.uniformsList,ii,ye),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&tt.setValue(z,"center",G.center),tt.setValue(z,"modelViewMatrix",G.modelViewMatrix),tt.setValue(z,"normalMatrix",G.normalMatrix),tt.setValue(z,"modelMatrix",G.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const dt=L.uniformsGroups;for(let Vr=0,Bs=dt.length;Vr<Bs;Vr++)if(le.isWebGL2){const Wn=dt[Vr];V.update(Wn,ti),V.bind(Wn,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Us(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Fs(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(x,P,F){Te.get(x.texture).__webglTexture=P,Te.get(x.depthTexture).__webglTexture=F;const L=Te.get(x);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=F===void 0,L.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const F=Te.get(x);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,F=0){v=x,S=P,y=F;let L=!0,G=null,ue=!1,Me=!1;if(x){const be=Te.get(x);be.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),L=!1):be.__webglFramebuffer===void 0?ye.setupRenderTarget(x):be.__hasExternalTextures&&ye.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);const we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const Pe=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(G=Pe[P],ue=!0):le.isWebGL2&&x.samples>0&&ye.useMultisampledRTT(x)===!1?G=Te.get(x).__webglMultisampledFramebuffer:G=Pe,A.copy(x.viewport),N.copy(x.scissor),M=x.scissorTest}else A.copy(I).multiplyScalar(q).floor(),N.copy(H).multiplyScalar(q).floor(),M=J;if(ce.bindFramebuffer(36160,G)&&le.drawBuffers&&L&&ce.drawBuffers(x,G),ce.viewport(A),ce.scissor(N),ce.setScissorTest(M),ue){const be=Te.get(x.texture);z.framebufferTexture2D(36160,36064,34069+P,be.__webglTexture,F)}else if(Me){const be=Te.get(x.texture),we=P||0;z.framebufferTextureLayer(36160,36064,be.__webglTexture,F||0,we)}w=-1},this.readRenderTargetPixels=function(x,P,F,L,G,ue,Me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){ce.bindFramebuffer(36160,be);try{const we=x.texture,Pe=we.format,Le=we.type;if(Pe!==At&&fe.convert(Pe)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=Le===ar&&(se.has("EXT_color_buffer_half_float")||le.isWebGL2&&se.has("EXT_color_buffer_float"));if(Le!==mi&&fe.convert(Le)!==z.getParameter(35738)&&!(Le===hi&&(le.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-L&&F>=0&&F<=x.height-G&&z.readPixels(P,F,L,G,fe.convert(Pe),fe.convert(Le),ue)}finally{const we=v!==null?Te.get(v).__webglFramebuffer:null;ce.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(x,P,F=0){const L=Math.pow(2,-F),G=Math.floor(P.image.width*L),ue=Math.floor(P.image.height*L);ye.setTexture2D(P,0),z.copyTexSubImage2D(3553,F,0,0,x.x,x.y,G,ue),ce.unbindTexture()},this.copyTextureToTexture=function(x,P,F,L=0){const G=P.image.width,ue=P.image.height,Me=fe.convert(F.format),be=fe.convert(F.type);ye.setTexture2D(F,0),z.pixelStorei(37440,F.flipY),z.pixelStorei(37441,F.premultiplyAlpha),z.pixelStorei(3317,F.unpackAlignment),P.isDataTexture?z.texSubImage2D(3553,L,x.x,x.y,G,ue,Me,be,P.image.data):P.isCompressedTexture?z.compressedTexSubImage2D(3553,L,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,Me,P.mipmaps[0].data):z.texSubImage2D(3553,L,x.x,x.y,Me,be,P.image),L===0&&F.generateMipmaps&&z.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(x,P,F,L,G=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=x.max.x-x.min.x+1,Me=x.max.y-x.min.y+1,be=x.max.z-x.min.z+1,we=fe.convert(L.format),Pe=fe.convert(L.type);let Le;if(L.isData3DTexture)ye.setTexture3D(L,0),Le=32879;else if(L.isDataArrayTexture)ye.setTexture2DArray(L,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,L.flipY),z.pixelStorei(37441,L.premultiplyAlpha),z.pixelStorei(3317,L.unpackAlignment);const Ee=z.getParameter(3314),Ze=z.getParameter(32878),ut=z.getParameter(3316),Ot=z.getParameter(3315),ei=z.getParameter(32877),Ge=F.isCompressedTexture?F.mipmaps[0]:F.image;z.pixelStorei(3314,Ge.width),z.pixelStorei(32878,Ge.height),z.pixelStorei(3316,x.min.x),z.pixelStorei(3315,x.min.y),z.pixelStorei(32877,x.min.z),F.isDataTexture||F.isData3DTexture?z.texSubImage3D(Le,G,P.x,P.y,P.z,ue,Me,be,we,Pe,Ge.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Le,G,P.x,P.y,P.z,ue,Me,be,we,Ge.data)):z.texSubImage3D(Le,G,P.x,P.y,P.z,ue,Me,be,we,Pe,Ge),z.pixelStorei(3314,Ee),z.pixelStorei(32878,Ze),z.pixelStorei(3316,ut),z.pixelStorei(3315,Ot),z.pixelStorei(32877,ei),G===0&&L.generateMipmaps&&z.generateMipmap(Le),ce.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?ye.setTextureCube(x,0):x.isData3DTexture?ye.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ye.setTexture2DArray(x,0):ye.setTexture2D(x,0),ce.unbindTexture()},this.resetState=function(){S=0,y=0,v=null,ce.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Bn.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class rp extends Bn{}rp.prototype.isWebGL1Renderer=!0;class np extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ur extends Vt{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+s,Math.PI);let l=0;const h=[],d=new R,u=new R,f=[],_=[],m=[],p=[];for(let S=0;S<=i;S++){const y=[],v=S/i;let w=0;S==0&&o==0?w=.5/t:S==i&&c==Math.PI&&(w=-.5/t);for(let E=0;E<=t;E++){const A=E/t;d.x=-e*Math.cos(r+A*n)*Math.sin(o+v*s),d.y=e*Math.cos(o+v*s),d.z=e*Math.sin(r+A*n)*Math.sin(o+v*s),_.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),p.push(A+w,1-v),y.push(l++)}h.push(y)}for(let S=0;S<i;S++)for(let y=0;y<t;y++){const v=h[S][y+1],w=h[S][y],E=h[S+1][y],A=h[S+1][y+1];(S!==0||o>0)&&f.push(v,w,A),(S!==i-1||c<Math.PI)&&f.push(w,E,A)}this.setIndex(f),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(m,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kn extends Vt{constructor(e=1,t=.4,i=12,r=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n},i=Math.floor(i),r=Math.floor(r);const o=[],s=[],c=[],l=[],h=new R,d=new R,u=new R;for(let f=0;f<=i;f++)for(let _=0;_<=r;_++){const m=_/r*n,p=f/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(m),d.y=(e+t*Math.cos(p))*Math.sin(m),d.z=t*Math.sin(p),s.push(d.x,d.y,d.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(_/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=r;_++){const m=(r+1)*f+_-1,p=(r+1)*(f-1)+_-1,S=(r+1)*(f-1)+_,y=(r+1)*f+_;o.push(m,p,y),o.push(p,S,y)}this.setIndex(o),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gn extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const is={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class ap{constructor(e,t,i){const r=this;let n=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,n===!1&&r.onStart!==void 0&&r.onStart(h,o,s),n=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,s),o===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const sp=new ap;class Ds{constructor(e){this.manager=e!==void 0?e:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class op extends Ds{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=is.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const s=sr("img");function c(){h(),is.add(e,this),t&&t(this),n.manager.itemEnd(e)}function l(d){h(),r&&r(d),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(e),s.src=e,s}}class Fr extends Ds{constructor(e){super(e)}load(e,t,i,r){const n=new ct,o=new op(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Ps extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const bn=new We,rs=new R,ns=new R;class lp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new On,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rs.setFromMatrixPosition(e.matrixWorld),t.position.copy(rs),ns.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ns),t.updateMatrixWorld(),bn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const as=new We,Qi=new R,yn=new R;class cp extends lp{constructor(){super(new ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qi),yn.copy(i.position),yn.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yn),i.updateMatrixWorld(),r.makeTranslation(-Qi.x,-Qi.y,-Qi.z),as.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(as)}}class hp extends Ps{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class up extends Ps{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pn);const $t=new np,di=new ft(75,window.innerWidth/window.innerHeight,.1,1e3),Br=new Bn({canvas:document.querySelector("#bg")});Br.setPixelRatio(window.devicePixelRatio);Br.setSize(window.innerWidth,window.innerHeight);di.position.setZ(30);di.position.setZ(-3);Br.render($t,di);const dp=new Fr().load("img/pngwing.com.png"),pp=new kn(10,3,16,100),mp=new Gn({map:dp}),Dr=new St(pp,mp);$t.add(Dr);const Is=new hp(16777215);Is.position.set(5,5,5);const fp=new up(16777215);$t.add(Is,fp);function gp(){const a=new Ur(.25,24,24),e=new Gn({color:16777215}),t=new St(a,e),[i,r,n]=Array(3).fill().map(()=>Jo.randFloatSpread(100));t.position.set(i,r,n),$t.add(t)}Array(200).fill().forEach(gp);const _p=new Fr().load("img/bg.jpg");$t.background=_p;const vp=new Fr().load("img/bill.jpg"),or=new St(new Hi(3,3,3),new zn({map:vp}));$t.add(or);const xp=new Fr().load("img/billmoon.jpeg"),pi=new St(new Ur(3,32,32),new Gn({map:xp}));$t.add(pi);pi.position.z=30;pi.position.setX(-10);or.position.z=-5;or.position.x=2;function Ns(){const a=document.body.getBoundingClientRect().top;pi.rotation.x+=.05,pi.rotation.y+=.075,pi.rotation.z+=.05,or.rotation.y+=.01,or.rotation.z+=.01,di.position.z=a*-.01,di.position.x=a*-2e-4,di.position.y=a*-2e-4}document.body.onscroll=Ns;Ns();function zs(){requestAnimationFrame(zs),Dr.rotation.x+=.01,Dr.rotation.y+=.005,Dr.rotation.z+=.01,pi.rotation.x+=.005,Br.render($t,di)}zs();
