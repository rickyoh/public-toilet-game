(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="170",Td=0,dc=1,Ad=2,Ul=1,bu=2,Dn=3,Bn=0,Dt=1,pn=2,ri=0,is=1,fc=2,pc=3,mc=4,Rd=5,Si=100,Cd=101,Id=102,Ld=103,Pd=104,Dd=200,Nd=201,kd=202,Ud=203,Fa=204,Oa=205,Fd=206,Od=207,Bd=208,zd=209,Hd=210,Vd=211,Gd=212,Wd=213,Xd=214,Ba=0,za=1,Ha=2,ls=3,Va=4,Ga=5,Wa=6,Xa=7,Mu=0,qd=1,jd=2,oi=0,$d=1,Yd=2,Kd=3,Su=4,Zd=5,Jd=6,Qd=7,gc="attached",ef="detached",wu=300,cs=301,hs=302,qa=303,ja=304,uo=306,us=1e3,ti=1001,ro=1002,Nt=1003,Eu=1004,Gs=1005,Ht=1006,Yr=1007,Un=1008,zn=1009,Tu=1010,Au=1011,Zs=1012,Fl=1013,Ti=1014,ln=1015,nr=1016,Ol=1017,Bl=1018,ds=1020,Ru=35902,Cu=1021,Iu=1022,$t=1023,Lu=1024,Pu=1025,ss=1026,fs=1027,zl=1028,Hl=1029,Du=1030,Vl=1031,Gl=1033,Kr=33776,Zr=33777,Jr=33778,Qr=33779,$a=35840,Ya=35841,Ka=35842,Za=35843,Ja=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,eo=36492,ml=36494,gl=36495,Nu=36283,_l=36284,vl=36285,xl=36286,ku=2200,Uu=2201,tf=2202,Js=2300,Qs=2301,Mo=2302,Qi=2400,es=2401,oo=2402,Wl=2500,nf=2501,sf=0,Fu=1,yl=2,rf=3200,of=3201,Ou=0,af=1,ei="",St="srgb",kt="srgb-linear",fo="linear",tt="srgb",Ii=7680,_c=519,lf=512,cf=513,hf=514,Bu=515,uf=516,df=517,ff=518,pf=519,bl=35044,vc="300 es",Fn=2e3,ao=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const qs=Math.PI/180,ps=180/Math.PI;function cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[s&255]+Tt[s>>8&255]+Tt[s>>16&255]+Tt[s>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Xl(s,e){return(s%e+e)%e}function mf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gf(s,e,t){return s!==e?(t-s)/(e-s):0}function js(s,e,t){return(1-t)*s+t*e}function _f(s,e,t,n){return js(s,e,1-Math.exp(-t*n))}function vf(s,e=1){return e-Math.abs(Xl(s,e*2)-e)}function xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mf(s,e){return s+Math.random()*(e-s)}function Sf(s){return s*(.5-Math.random())}function wf(s){s!==void 0&&(xc=s);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(s){return s*qs}function Tf(s){return s*ps}function Af(s){return(s&s-1)===0&&s!==0}function Rf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function If(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:qs,RAD2DEG:ps,generateUUID:cn,clamp:Ct,euclideanModulo:Xl,mapLinear:mf,inverseLerp:gf,lerp:js,damp:_f,pingpong:vf,smoothstep:xf,smootherstep:yf,randInt:bf,randFloat:Mf,randFloatSpread:Sf,seededRandom:wf,degToRad:Ef,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:If,normalize:et,denormalize:rn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],k=i[2],A=i[5],R=i[8];return r[0]=o*_+a*M+l*k,r[3]=o*m+a*S+l*A,r[6]=o*p+a*x+l*R,r[1]=c*_+h*M+u*k,r[4]=c*m+h*S+u*A,r[7]=c*p+h*x+u*R,r[2]=d*_+f*M+g*k,r[5]=d*m+f*S+g*A,r[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Ne;function zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lf(){const s=er("canvas");return s.style.display="block",s}const yc={};function Ws(s){s in yc||(yc[s]=!0,console.warn(s))}function Pf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Df(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ze={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const bc=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],Sc=[.3127,.329],wc=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[kt]:{primaries:bc,whitePoint:Sc,transfer:fo,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:bc,whitePoint:Sc,transfer:tt,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});let Li;class kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=er("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uf=0;class Hu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wo(i[o].image)):r.push(wo(i[o]))}else r=wo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ff=0;class yt extends Ri{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=ti,i=ti,r=Ht,o=Un,a=$t,l=zn,c=yt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=cn(),this.name="",this.source=new Hu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=wu;yt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,k=(p+1)/2,A=(h+d)/4,R=(u+_)/4,N=(g+m)/4;return S>x&&S>k?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=R/n):x>k?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=N/i):k<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(k),n=R/r,i=N/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Of extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vu extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const k=Math.sqrt(S),A=Math.atan2(k,p*M);m=Math.sin(m*A)/k,a=Math.sin(a*A)/k}const x=a*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new T,Tc=new Yt;class Hn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),ar.subVectors(this.max,Rs),Pi.subVectors(e.a,Rs),Di.subVectors(e.b,Rs),Ni.subVectors(e.c,Rs),Wn.subVectors(Di,Pi),Xn.subVectors(Ni,Di),ci.subVectors(Pi,Ni);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ci.z,ci.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ci.z,0,-ci.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ci.y,ci.x,0];return!To(t,Pi,Di,Ni,ar)||(t=[1,0,0,0,1,0,0,0,1],!To(t,Pi,Di,Ni,ar))?!1:(lr.crossVectors(Wn,Xn),t=[lr.x,lr.y,lr.z],To(t,Pi,Di,Ni,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new T,new T,new T,new T,new T,new T,new T,new T],en=new T,or=new Hn,Pi=new T,Di=new T,Ni=new T,Wn=new T,Xn=new T,ci=new T,Rs=new T,ar=new T,lr=new T,hi=new T;function To(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hi.fromArray(s,r);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zf=new Hn,Cs=new T,Ao=new T;class xn{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Ao)),this.expandByPoint(Cs.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new T,Ro=new T,cr=new T,qn=new T,Co=new T,hr=new T,Io=new T;class po{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ro.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ro);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=qn.dot(this.direction),l=-qn.dot(cr),c=qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ro).addScaledVector(cr,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){Co.subVectors(t,e),hr.subVectors(n,e),Io.crossVectors(Co,hr);let o=this.direction.dot(Io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(qn,hr));if(l<0)return null;const c=a*this.direction.dot(Co.cross(qn));if(c<0||l+c>o)return null;const h=-a*qn.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Vf)}lookAt(e,t,n){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),jn.crossVectors(n,Bt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),jn.crossVectors(n,Bt)),jn.normalize(),ur.crossVectors(Bt,jn),i[0]=jn.x,i[4]=ur.x,i[8]=Bt.x,i[1]=jn.y,i[5]=ur.y,i[9]=Bt.y,i[2]=jn.z,i[6]=ur.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],k=n[15],A=i[0],R=i[4],N=i[8],w=i[12],b=i[1],C=i[5],W=i[9],B=i[13],V=i[2],K=i[6],G=i[10],Q=i[14],H=i[3],ie=i[7],he=i[11],be=i[15];return r[0]=o*A+a*b+l*V+c*H,r[4]=o*R+a*C+l*K+c*ie,r[8]=o*N+a*W+l*G+c*he,r[12]=o*w+a*B+l*Q+c*be,r[1]=h*A+u*b+d*V+f*H,r[5]=h*R+u*C+d*K+f*ie,r[9]=h*N+u*W+d*G+f*he,r[13]=h*w+u*B+d*Q+f*be,r[2]=g*A+_*b+m*V+p*H,r[6]=g*R+_*C+m*K+p*ie,r[10]=g*N+_*W+m*G+p*he,r[14]=g*w+_*B+m*Q+p*be,r[3]=M*A+S*b+x*V+k*H,r[7]=M*R+S*C+x*K+k*ie,r[11]=M*N+S*W+x*G+k*he,r[15]=M*w+S*B+x*Q+k*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,k=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=t*M+n*S+i*x+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=M*R,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=S*R,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=k*R,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=l*c,S=l*h,x=l*u,k=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*k,i[1]=(f+x)*k,i[2]=(g-S)*k,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+S)*R,i[9]=(m-M)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ki.set(i[0],i[1],i[2]).length();const o=ki.set(i[4],i[5],i[6]).length(),a=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/r,h=1/o,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Fn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Fn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===Fn)g=(o+r)*u,_=-2*u;else if(a===ao)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new T,tn=new Le,Hf=new T(0,0,0),Vf=new T(1,1,1),jn=new T,ur=new T,Bt=new T,Ac=new Le,Rc=new Yt;class vn{constructor(e=0,t=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gf=0;const Cc=new T,Ui=new Yt,Tn=new Le,dr=new T,Is=new T,Wf=new T,Xf=new Yt,Ic=new T(1,0,0),Lc=new T(0,1,0),Pc=new T(0,0,1),Dc={type:"added"},qf={type:"removed"},Fi={type:"childadded",child:null},Lo={type:"childremoved",child:null};class ht extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new T,t=new vn,n=new Yt,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ne}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Is,dr,this.up):Tn.lookAt(dr,Is,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new T(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new T,An=new T,Po=new T,Rn=new T,Oi=new T,Bi=new T,Nc=new T,Do=new T,No=new T,ko=new T,Uo=new Ye,Fo=new Ye,Oo=new Ye;class on{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),An.subVectors(n,t),Po.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(An),l=nn.dot(Po),c=An.dot(An),h=An.dot(Po),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Uo.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,n),Oo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Uo,r.x),o.addScaledVector(Fo,r.y),o.addScaledVector(Oo,r.z),o}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),An.subVectors(e,t),nn.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),nn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Oi.subVectors(i,n),Bi.subVectors(r,n),Do.subVectors(e,n);const l=Oi.dot(Do),c=Bi.dot(Do);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,i);const h=Oi.dot(No),u=Bi.dot(No);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Oi,o);ko.subVectors(e,r);const f=Oi.dot(ko),g=Bi.dot(ko);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Nc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Oi,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Bo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=Xl(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bo(o,r,e+1/3),this.g=Bo(o,r,e),this.b=Bo(o,r,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ze.fromWorkingColorSpace(At.copy(this),e),Math.round(Ct(At.r*255,0,255))*65536+Math.round(Ct(At.g*255,0,255))*256+Math.round(Ct(At.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,r=At.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=St){ze.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(fr);const n=js($n.h,fr.h,t),i=js($n.s,fr.s,t),r=js($n.l,fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Te;Te.NAMES=Wu;let jf=0;class _n extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=cn(),this.name="",this.blending=is,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends _n{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new T,pr=new He;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class Xu extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qu extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $f=0;const Xt=new Le,zo=new ht,zi=new T,zt=new Hn,Ls=new Hn,xt=new T;class Ft extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?qu:Xu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(zt.min,Ls.min),zt.expandByPoint(xt),xt.addVectors(zt.max,Ls.max),zt.expandByPoint(xt)):(zt.expandByPoint(Ls.min),zt.expandByPoint(Ls.max))}zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xt.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(e,c),xt.add(zi)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new T,l[N]=new T;const c=new T,h=new T,u=new T,d=new He,f=new He,g=new He,_=new T,m=new T;function p(N,w,b){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[N].add(_),a[w].add(_),a[b].add(_),l[N].add(m),l[w].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,w=M.length;N<w;++N){const b=M[N],C=b.start,W=b.count;for(let B=C,V=C+W;B<V;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new T,x=new T,k=new T,A=new T;function R(N){k.fromBufferAttribute(i,N),A.copy(k);const w=a[N];S.copy(w),S.sub(k.multiplyScalar(k.dot(w))).normalize(),x.crossVectors(A,w);const C=x.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,C)}for(let N=0,w=M.length;N<w;++N){const b=M[N],C=b.start,W=b.count;for(let B=C,V=C+W;B<V;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new Le,ui=new po,mr=new xn,Uc=new T,gr=new T,_r=new T,vr=new T,Ho=new T,xr=new T,Fc=new T,yr=new T;class nt extends ht{constructor(e=new Ft,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ho.fromBufferAttribute(u,e),o?xr.addScaledVector(Ho,h):xr.addScaledVector(Ho.sub(t),h))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(mr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(mr,Uc)===null||ui.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(kc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(kc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,k=S;x<k;x+=3){const A=a.getX(x),R=a.getX(x+1),N=a.getX(x+2);i=br(this,p,e,n,c,h,u,A,R,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=br(this,o,e,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,k=S;x<k;x+=3){const A=x,R=x+1,N=x+2;i=br(this,p,e,n,c,h,u,A,R,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,x=m+2;i=br(this,o,e,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Yf(s,e,t,n,i,r,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bn,a),l===null)return null;yr.copy(a),yr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:s}}function br(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,gr),s.getVertexPosition(l,_r),s.getVertexPosition(c,vr);const h=Yf(s,e,t,n,gr,_r,vr,Fc);if(h){const u=new T;on.getBarycoord(Fc,gr,_r,vr,u),i&&(h.uv=on.getInterpolatedAttribute(i,a,l,c,u,new He)),r&&(h.uv1=on.getInterpolatedAttribute(r,a,l,c,u,new He)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new T,materialIndex:0};on.getNormal(gr,_r,vr,d.normal),h.face=d,h.barycoord=u}return h}class bs extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,p,M,S,x,k,A,R,N,w){const b=x/R,C=k/N,W=x/2,B=k/2,V=A/2,K=R+1,G=N+1;let Q=0,H=0;const ie=new T;for(let he=0;he<G;he++){const be=he*C-B;for(let Fe=0;Fe<K;Fe++){const it=Fe*b-W;ie[_]=it*M,ie[m]=be*S,ie[p]=V,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Fe/R),u.push(1-he/N),Q+=1}}for(let he=0;he<N;he++)for(let be=0;be<R;be++){const Fe=d+be+K*he,it=d+be+K*(he+1),q=d+(be+1)+K*(he+1),ee=d+(be+1)+K*he;l.push(Fe,it,ee),l.push(it,q,ee),H+=6}a.addGroup(f,H,w),f+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=ms(s[t]);for(const i in n)e[i]=n[i]}return e}function Kf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ju(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Zf={clone:ms,merge:Lt};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends _n{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $u extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new T,Oc=new He,Bc=new He;class Pt extends $u{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class ep extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(Hi,Vi,e,t);i.layers=this.layers,this.add(i);const r=new Pt(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Pt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Pt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const l=new Pt(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Pt(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yu extends yt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tp extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bs(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:ri});r.uniforms.tEquirect.value=t;const o=new nt(i,r),a=t.minFilter;return t.minFilter===Un&&(t.minFilter=Ht),new ep(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Vo=new T,np=new T,ip=new Ne;class bi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vo.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ip.getNormalMatrix(e),i=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new xn,Mr=new T;class ql{constructor(e=new bi,t=new bi,n=new bi,i=new bi,r=new bi,o=new bi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+M).normalize(),n[3].setComponents(l-o,d-h,m-g,x-M).normalize(),n[4].setComponents(l-a,d-u,m-_,x-S).normalize(),t===Fn)n[5].setComponents(l+a,d+u,m+_,x+S).normalize();else if(t===ao)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Mr.x=i.normal.x>0?e.max.x:e.min.x,Mr.y=i.normal.y>0?e.max.y:e.min.y,Mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ku(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sp(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class mo extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,x=M+c*(p+1),k=M+1+c*(p+1),A=M+1+c*p;f.push(S,x,A),f.push(x,k,A)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,sm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dg=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,fg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yg=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,bg=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mg=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Sg=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Eg=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Ag=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Rg=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Cg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ig=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Lg=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Pg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Dg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,kg=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Fg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ue={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Lp,displacementmap_vertex:Pp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Np,colorspace_fragment:kp,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Yp,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:bm,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:wm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Lm,opaque_fragment:Pm,packing:Dm,premultiplied_alpha_fragment:Nm,project_vertex:km,dithering_fragment:Um,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:jm,specularmap_fragment:$m,specularmap_pars_fragment:Ym,tonemapping_fragment:Km,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:_g,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:bg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:wg,meshnormal_frag:Eg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Ig,meshtoon_frag:Lg,points_vert:Pg,points_frag:Dg,shadow_vert:Ng,shadow_frag:kg,sprite_vert:Ug,sprite_frag:Fg},te={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},fn={basic:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Lt([te.points,te.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Lt([te.common,te.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Lt([te.sprite,te.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Lt([te.common,te.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Lt([te.lights,te.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};fn.physical={uniforms:Lt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Sr={r:0,b:0,g:0},fi=new vn,Og=new Le;function Bg(s,e,t,n,i,r,o){const a=new Te(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function _(M){let S=!1;const x=g(M);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===uo)?(h===void 0&&(h=new nt(new bs(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:ms(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fi.copy(S.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(fi)),h.material.toneMapped=ze.getTransfer(x.colorSpace)!==tt,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nt(new mo(2,2),new ai({name:"BackgroundMaterial",uniforms:ms(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ze.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(Sr,ju(s)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function zg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,C,W,B,V){let K=!1;const G=u(B,W,C);r!==G&&(r=G,c(r.object)),K=f(b,B,W,V),K&&g(b,B,W,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(b,C,W,B),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,C,W){const B=W.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let K=V[C.id];K===void 0&&(K={},V[C.id]=K);let G=K[B];return G===void 0&&(G=d(l()),K[B]=G),G}function d(b){const C=[],W=[],B=[];for(let V=0;V<t;V++)C[V]=0,W[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,C,W,B){const V=r.attributes,K=C.attributes;let G=0;const Q=W.getAttributes();for(const H in Q)if(Q[H].location>=0){const he=V[H];let be=K[H];if(be===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(b,C,W,B){const V={},K=C.attributes;let G=0;const Q=W.getAttributes();for(const H in Q)if(Q[H].location>=0){let he=K[H];he===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));const be={};be.attribute=he,he&&he.data&&(be.data=he.data),V[H]=be,G++}r.attributes=V,r.attributesNum=G,r.index=B}function _(){const b=r.newAttributes;for(let C=0,W=b.length;C<W;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){const W=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;W[b]=1,B[b]===0&&(s.enableVertexAttribArray(b),B[b]=1),V[b]!==C&&(s.vertexAttribDivisor(b,C),V[b]=C)}function M(){const b=r.newAttributes,C=r.enabledAttributes;for(let W=0,B=C.length;W<B;W++)C[W]!==b[W]&&(s.disableVertexAttribArray(W),C[W]=0)}function S(b,C,W,B,V,K,G){G===!0?s.vertexAttribIPointer(b,C,W,V,K):s.vertexAttribPointer(b,C,W,B,V,K)}function x(b,C,W,B){_();const V=B.attributes,K=W.getAttributes(),G=C.defaultAttributeValues;for(const Q in K){const H=K[Q];if(H.location>=0){let ie=V[Q];if(ie===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){const he=ie.normalized,be=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const it=Fe.buffer,q=Fe.type,ee=Fe.bytesPerElement,_e=q===s.INT||q===s.UNSIGNED_INT||ie.gpuType===Fl;if(ie.isInterleavedBufferAttribute){const se=ie.data,Ee=se.stride,Ie=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe,se.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,it);for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,be/H.locationSize,q,he,Ee*ee,(Ie+be/H.locationSize*Oe)*ee,_e)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);s.bindBuffer(s.ARRAY_BUFFER,it);for(let se=0;se<H.locationSize;se++)S(H.location+se,be/H.locationSize,q,he,be*ee,be/H.locationSize*se*ee,_e)}}else if(G!==void 0){const he=G[Q];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(H.location,he);break;case 3:s.vertexAttrib3fv(H.location,he);break;case 4:s.vertexAttrib4fv(H.location,he);break;default:s.vertexAttrib1fv(H.location,he)}}}}M()}function k(){N();for(const b in n){const C=n[b];for(const W in C){const B=C[W];for(const V in B)h(B[V].object),delete B[V];delete C[W]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const W in C){const B=C[W];for(const V in B)h(B[V].object),delete B[V];delete C[W]}delete n[b.id]}function R(b){for(const C in n){const W=n[C];if(W[b.id]===void 0)continue;const B=W[b.id];for(const V in B)h(B[V].object),delete B[V];delete W[b.id]}}function N(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Hg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==$t&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ln&&!N)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:k,maxSamples:A}}function Gg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bi,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let k=0;k!==S;++k)x[k]=t[k];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wg(s){let e=new WeakMap;function t(o,a){return a===qa?o.mapping=cs:a===ja&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qa||a===ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tp(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jl extends $u{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,zc=[.125,.215,.35,.446,.526,.582],wi=20,Go=new jl,Hc=new Te;let Wo=null,Xo=0,qo=0,jo=!1;const Mi=(1+Math.sqrt(5))/2,Gi=1/Mi,Vc=[new T(-Mi,Gi,0),new T(Mi,Gi,0),new T(-Gi,0,Mi),new T(Gi,0,Mi),new T(0,Mi,-Gi),new T(0,Mi,Gi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=jo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:nr,format:$t,colorSpace:kt,depthBuffer:!1},i=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,e,t)}return i}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,n,i){const a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hc),h.toneMapping=oi,h.autoClear=!1;const f=new mn({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new nt(new bs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Hc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;wr(i,M*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===cs||e.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vc[(i-r-1)%Vc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let M=0;for(let R=0;R<wi;++R){const N=R/_,w=Math.exp(-N*N/2);p.push(w),R===0?M+=w:R<m&&(M+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],k=3*x*(i>S-ts?i-S+ts:0),A=4*(this._cubeSize-x);wr(t,k,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Go)}}function Xg(s){const e=[],t=[],n=[];let i=s;const r=s-ts+1+zc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ts?l=zc[o-s+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,N=A>2?0:-1,w=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];M.set(w,_*g*A),S.set(d,m*g*A);const b=[A,A,A,A,A,A];x.set(b,p*g*A)}const k=new Ft;k.setAttribute("position",new bt(M,_)),k.setAttribute("uv",new bt(S,m)),k.setAttribute("faceIndex",new bt(x,p)),e.push(k),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(s,e,t){const n=new Ai(s,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qg(s,e,t){const n=new Float32Array(wi),i=new T(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wc(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xc(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function jg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qa||l===ja,h=l===cs||l===hs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ml(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ml(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $g(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yg(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){const k=M[S+0],A=M[S+1],R=M[S+2];d.push(k,A,A,R,R,k)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const k=S+0,A=S+1,R=S+2;d.push(k,A,A,R,R,k)}}else return;const m=new(zu(d)?qu:Xu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jg(s,e,t){const n=new WeakMap,i=new Ye;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,k=1;x>e.maxTextureSize&&(k=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*k*4*u),R=new Vu(A,x,k,u);R.type=ln,R.needsUpdate=!0;const N=S*4;for(let b=0;b<u;b++){const C=m[b],W=p[b],B=M[b],V=x*k*4*b;for(let K=0;K<C.count;K++){const G=K*N;f===!0&&(i.fromBufferAttribute(C,K),A[V+G+0]=i.x,A[V+G+1]=i.y,A[V+G+2]=i.z,A[V+G+3]=0),g===!0&&(i.fromBufferAttribute(W,K),A[V+G+4]=i.x,A[V+G+5]=i.y,A[V+G+6]=i.z,A[V+G+7]=0),_===!0&&(i.fromBufferAttribute(B,K),A[V+G+8]=i.x,A[V+G+9]=i.y,A[V+G+10]=i.z,A[V+G+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new He(x,k)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Qg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Zu extends yt{constructor(e,t,n,i,r,o,a,l,c,h=ss){if(h!==ss&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ti),n===void 0&&h===fs&&(n=ds),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ju=new yt,qc=new Zu(1,1),Qu=new Vu,ed=new Bf,td=new Yu,jc=[],$c=[],Yc=new Float32Array(16),Kc=new Float32Array(9),Zc=new Float32Array(4);function Ms(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=jc[i];if(r===void 0&&(r=new Float32Array(i),jc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function go(s,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function e0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function s0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Zc.set(n),s.uniformMatrix2fv(this.addr,!1,Zc),vt(t,n)}}function r0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Kc.set(n),s.uniformMatrix3fv(this.addr,!1,Kc),vt(t,n)}}function o0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Yc.set(n),s.uniformMatrix4fv(this.addr,!1,Yc),vt(t,n)}}function a0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function l0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function c0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function h0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function u0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function m0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=Bu,r=qc):r=Ju,t.setTexture2D(e||r,i)}function g0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ed,i)}function _0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||td,i)}function v0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qu,i)}function x0(s){switch(s){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function y0(s,e){s.uniform1fv(this.addr,e)}function b0(s,e){const t=Ms(e,this.size,2);s.uniform2fv(this.addr,t)}function M0(s,e){const t=Ms(e,this.size,3);s.uniform3fv(this.addr,t)}function S0(s,e){const t=Ms(e,this.size,4);s.uniform4fv(this.addr,t)}function w0(s,e){const t=Ms(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E0(s,e){const t=Ms(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function T0(s,e){const t=Ms(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function A0(s,e){s.uniform1iv(this.addr,e)}function R0(s,e){s.uniform2iv(this.addr,e)}function C0(s,e){s.uniform3iv(this.addr,e)}function I0(s,e){s.uniform4iv(this.addr,e)}function L0(s,e){s.uniform1uiv(this.addr,e)}function P0(s,e){s.uniform2uiv(this.addr,e)}function D0(s,e){s.uniform3uiv(this.addr,e)}function N0(s,e){s.uniform4uiv(this.addr,e)}function k0(s,e,t){const n=this.cache,i=e.length,r=go(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ju,r[o])}function U0(s,e,t){const n=this.cache,i=e.length,r=go(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ed,r[o])}function F0(s,e,t){const n=this.cache,i=e.length,r=go(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||td,r[o])}function O0(s,e,t){const n=this.cache,i=e.length,r=go(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qu,r[o])}function B0(s){switch(s){case 5126:return y0;case 35664:return b0;case 35665:return M0;case 35666:return S0;case 35674:return w0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return R0;case 35668:case 35672:return C0;case 35669:case 35673:return I0;case 5125:return L0;case 36294:return P0;case 36295:return D0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Jc(s,e){s.seq.push(e),s.map[e.id]=e}function G0(s,e,t){const n=s.name,i=n.length;for($o.lastIndex=0;;){const r=$o.exec(n),o=$o.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jc(t,c===void 0?new z0(a,s,e):new H0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new V0(a),Jc(t,u)),t=u}}}class to{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);G0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const W0=37297;let X0=0;function q0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const eh=new Ne;function j0(s){ze._getMatrix(eh,ze.workingColorSpace,s);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(s)){case fo:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function th(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+q0(s.getShaderSource(e),o)}else return i}function $0(s,e){const t=j0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Y0(s,e){let t;switch(e){case $d:t="Linear";break;case Yd:t="Reinhard";break;case Kd:t="Cineon";break;case Su:t="ACESFilmic";break;case Jd:t="AgX";break;case Qd:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new T;function K0(){ze.getLuminanceCoefficients(Er);const s=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function J0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xs(s){return s!==""}function nh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(s){return s.replace(e_,n_)}const t_=new Map;function n_(s,e){let t=Ue[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(s){return s.replace(i_,s_)}function s_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function o_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case hs:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function l_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function c_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=r_(t),c=o_(t),h=a_(t),u=l_(t),d=c_(t),f=Z0(t),g=J0(r),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==oi?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,$0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Sl(o),o=nh(o,t),o=ih(o,t),a=Sl(a),a=nh(a,t),a=ih(a,t),o=sh(o),a=sh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,x=M+p+a,k=Qc(i,i.VERTEX_SHADER,S),A=Qc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,k),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(C){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(k).trim(),V=i.getShaderInfoLog(A).trim();let K=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,k,A);else{const Q=th(i,k,"vertex"),H=th(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+Q+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||V==="")&&(G=!1);G&&(C.diagnostics={runnable:K,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(k),i.deleteShader(A),N=new to(i,_),w=Q0(i,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,W0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=A,this}let u_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f_(e),t.set(e,n)),n}}class f_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function p_(s,e,t,n,i,r,o){const a=new Gu,l=new d_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,C,W,B){const V=W.fog,K=B.geometry,G=w.isMeshStandardMaterial?W.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),H=Q&&Q.mapping===uo?Q.image.height:null,ie=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,be=he!==void 0?he.length:0;let Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let it,q,ee,_e;if(ie){const Qe=fn[ie];it=Qe.vertexShader,q=Qe.fragmentShader}else it=w.vertexShader,q=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),_e=l.getFragmentShaderID(w);const se=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,ut=!!w.map,qe=!!w.matcap,ft=!!Q,D=!!w.aoMap,Gt=!!w.lightMap,Ve=!!w.bumpMap,Ge=!!w.normalMap,Se=!!w.displacementMap,at=!!w.emissiveMap,Me=!!w.metalnessMap,E=!!w.roughnessMap,v=w.anisotropy>0,U=w.clearcoat>0,j=w.dispersion>0,Y=w.iridescence>0,X=w.sheen>0,ve=w.transmission>0,re=v&&!!w.anisotropyMap,ue=U&&!!w.clearcoatMap,je=U&&!!w.clearcoatNormalMap,Z=U&&!!w.clearcoatRoughnessMap,de=Y&&!!w.iridescenceMap,we=Y&&!!w.iridescenceThicknessMap,Re=X&&!!w.sheenColorMap,fe=X&&!!w.sheenRoughnessMap,We=!!w.specularMap,ke=!!w.specularColorMap,st=!!w.specularIntensityMap,I=ve&&!!w.transmissionMap,ne=ve&&!!w.thicknessMap,z=!!w.gradientMap,$=!!w.alphaMap,ce=w.alphaTest>0,oe=!!w.alphaHash,Pe=!!w.extensions;let dt=oi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Et={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:q,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:kt,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:qe,envMap:ft,envMapMode:ft&&Q.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Gt,bumpMap:Ve,normalMap:Ge,displacementMap:d&&Se,emissiveMap:at,normalMapObjectSpace:Ge&&w.normalMapType===af,normalMapTangentSpace:Ge&&w.normalMapType===Ou,metalnessMap:Me,roughnessMap:E,anisotropy:v,anisotropyMap:re,clearcoat:U,clearcoatMap:ue,clearcoatNormalMap:je,clearcoatRoughnessMap:Z,dispersion:j,iridescence:Y,iridescenceMap:de,iridescenceThicknessMap:we,sheen:X,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:We,specularColorMap:ke,specularIntensityMap:st,transmission:ve,transmissionMap:I,thicknessMap:ne,gradientMap:z,opaque:w.transparent===!1&&w.blending===is&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:oe,combine:w.combine,mapUv:ut&&_(w.map.channel),aoMapUv:D&&_(w.aoMap.channel),lightMapUv:Gt&&_(w.lightMap.channel),bumpMapUv:Ve&&_(w.bumpMap.channel),normalMapUv:Ge&&_(w.normalMap.channel),displacementMapUv:Se&&_(w.displacementMap.channel),emissiveMapUv:at&&_(w.emissiveMap.channel),metalnessMapUv:Me&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:re&&_(w.anisotropyMap.channel),clearcoatMapUv:ue&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(w.sheenRoughnessMap.channel),specularMapUv:We&&_(w.specularMap.channel),specularColorMapUv:ke&&_(w.specularColorMap.channel),specularIntensityMapUv:st&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:ne&&_(w.thicknessMap.channel),alphaMapUv:$&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ge||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(ut||$),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&ze.getTransfer(w.map.colorSpace)===tt,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&ze.getTransfer(w.emissiveMap.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pn,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)b.push(C),b.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(b,w),S(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const b=g[w.type];let C;if(b){const W=fn[b];C=Zf.clone(W.uniforms)}else C=w.uniforms;return C}function k(w,b){let C;for(let W=0,B=h.length;W<B;W++){const V=h[W];if(V.cacheKey===b){C=V,++C.usedTimes;break}}return C===void 0&&(C=new h_(s,b,w,r),h.push(C)),C}function A(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:k,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:N}}function m_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function g_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function oh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ah(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||g_),n.length>1&&n.sort(d||oh),i.length>1&&i.sort(d||oh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function __(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ah,s.set(n,[o])):i>=r.length?(o=new ah,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function v_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Te};break;case"SpotLight":t={position:new T,direction:new T,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function x_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let y_=0;function b_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function M_(s){const e=new v_,t=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new Le,o=new Le;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,k=0,A=0,R=0;c.sort(b_);for(let w=0,b=c.length;w<b;w++){const C=c[w],W=C.color,B=C.intensity,V=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*B,u+=W.g*B,d+=W.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,H=t.get(C);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(W).multiplyScalar(B),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const Q=C.shadow;if(C.map&&(n.spotLightMap[k]=C.map,k++,Q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,x++}_++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(W).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Q=C.shadow,H=t.get(C);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==x||N.numSpotMaps!==k||N.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=x,N.numSpotMaps=k,N.numLightProbes=R,n.version=y_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function lh(s){const e=new M_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function S_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new lh(s),e.set(i,[a])):r>=o.length?(a=new lh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class w_ extends _n{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends _n{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`;function R_(s,e,t){let n=new ql;const i=new He,r=new He,o=new Ye,a=new w_({depthPacking:of}),l=new E_,c={},h=t.maxTextureSize,u={[Bn]:Dt,[Dt]:Bn,[pn]:pn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let p=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),W=s.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=p!==Dn&&this.type===Dn,V=p===Dn&&this.type!==Dn;for(let K=0,G=A.length;K<G;K++){const Q=A[K],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ie=H.getFrameExtents();if(i.multiply(ie),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||B===!0||V===!0){const be=this.type!==Dn?{minFilter:Nt,magFilter:Nt}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(i.x,i.y,be),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const he=H.getViewportCount();for(let be=0;be<he;be++){const Fe=H.getViewport(be);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),W.viewport(o),H.updateMatrices(Q,be),n=H.getFrustum(),x(R,N,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&M(H,N),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,C)};function M(A,R){const N=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,N,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,N,f,_,null)}function S(A,R,N,w){let b=null;const C=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)b=C;else if(b=N.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=b.uuid,B=R.uuid;let V=c[W];V===void 0&&(V={},c[W]=V);let K=V[B];K===void 0&&(K=b.clone(),V[B]=K,R.addEventListener("dispose",k)),b=K}if(b.visible=R.visible,b.wireframe=R.wireframe,w===Dn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=s.properties.get(b);W.light=N}return b}function x(A,R,N,w,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const B=e.update(A),V=A.material;if(Array.isArray(V)){const K=B.groups;for(let G=0,Q=K.length;G<Q;G++){const H=K[G],ie=V[H.materialIndex];if(ie&&ie.visible){const he=S(A,ie,w,b);A.onBeforeShadow(s,A,R,N,B,he,H),s.renderBufferDirect(N,null,B,he,A,H),A.onAfterShadow(s,A,R,N,B,he,H)}}}else if(V.visible){const K=S(A,V,w,b);A.onBeforeShadow(s,A,R,N,B,K,null),s.renderBufferDirect(N,null,B,K,A,null),A.onAfterShadow(s,A,R,N,B,K,null)}}const W=A.children;for(let B=0,V=W.length;B<V;B++)x(W[B],R,N,w,b)}function k(A){A.target.removeEventListener("dispose",k);for(const N in c){const w=c[N],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const C_={[Ba]:za,[Ha]:Wa,[Va]:Xa,[ls]:Ga,[za]:Ba,[Wa]:Ha,[Xa]:Va,[Ga]:ls};function I_(s,e){function t(){let I=!1;const ne=new Ye;let z=null;const $=new Ye(0,0,0,0);return{setMask:function(ce){z!==ce&&!I&&(s.colorMask(ce,ce,ce,ce),z=ce)},setLocked:function(ce){I=ce},setClear:function(ce,oe,Pe,dt,Et){Et===!0&&(ce*=dt,oe*=dt,Pe*=dt),ne.set(ce,oe,Pe,dt),$.equals(ne)===!1&&(s.clearColor(ce,oe,Pe,dt),$.copy(ne))},reset:function(){I=!1,z=null,$.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,z=null,$=null,ce=null;return{setReversed:function(oe){if(ne!==oe){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const dt=ce;ce=null,this.setClear(dt)}ne=oe},getReversed:function(){return ne},setTest:function(oe){oe?se(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(oe){z!==oe&&!I&&(s.depthMask(oe),z=oe)},setFunc:function(oe){if(ne&&(oe=C_[oe]),$!==oe){switch(oe){case Ba:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case Ha:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Ga:s.depthFunc(s.GEQUAL);break;case Wa:s.depthFunc(s.GREATER);break;case Xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=oe}},setLocked:function(oe){I=oe},setClear:function(oe){ce!==oe&&(ne&&(oe=1-oe),s.clearDepth(oe),ce=oe)},reset:function(){I=!1,z=null,$=null,ce=null,ne=!1}}}function i(){let I=!1,ne=null,z=null,$=null,ce=null,oe=null,Pe=null,dt=null,Et=null;return{setTest:function(Qe){I||(Qe?se(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Qe){ne!==Qe&&!I&&(s.stencilMask(Qe),ne=Qe)},setFunc:function(Qe,Jt,Mn){(z!==Qe||$!==Jt||ce!==Mn)&&(s.stencilFunc(Qe,Jt,Mn),z=Qe,$=Jt,ce=Mn)},setOp:function(Qe,Jt,Mn){(oe!==Qe||Pe!==Jt||dt!==Mn)&&(s.stencilOp(Qe,Jt,Mn),oe=Qe,Pe=Jt,dt=Mn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Et!==Qe&&(s.clearStencil(Qe),Et=Qe)},reset:function(){I=!1,ne=null,z=null,$=null,ce=null,oe=null,Pe=null,dt=null,Et=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,k=null,A=null,R=new Te(0,0,0),N=0,w=!1,b=null,C=null,W=null,B=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Q>=2);let ie=null,he={};const be=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),it=new Ye().fromArray(be),q=new Ye().fromArray(Fe);function ee(I,ne,z,$){const ce=new Uint8Array(4),oe=s.createTexture();s.bindTexture(I,oe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<z;Pe++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ne+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return oe}const _e={};_e[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(ls),Ve(!1),Ge(dc),se(s.CULL_FACE),D(ri);function se(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ee(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ie(I,ne){return u[I]!==ne?(s.bindFramebuffer(I,ne),u[I]=ne,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Oe(I,ne){let z=f,$=!1;if(I){z=d.get(ne),z===void 0&&(z=[],d.set(ne,z));const ce=I.textures;if(z.length!==ce.length||z[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Pe=ce.length;oe<Pe;oe++)z[oe]=s.COLOR_ATTACHMENT0+oe;z.length=ce.length,$=!0}}else z[0]!==s.BACK&&(z[0]=s.BACK,$=!0);$&&s.drawBuffers(z)}function ut(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const qe={[Si]:s.FUNC_ADD,[Cd]:s.FUNC_SUBTRACT,[Id]:s.FUNC_REVERSE_SUBTRACT};qe[Ld]=s.MIN,qe[Pd]=s.MAX;const ft={[Dd]:s.ZERO,[Nd]:s.ONE,[kd]:s.SRC_COLOR,[Fa]:s.SRC_ALPHA,[Hd]:s.SRC_ALPHA_SATURATE,[Bd]:s.DST_COLOR,[Fd]:s.DST_ALPHA,[Ud]:s.ONE_MINUS_SRC_COLOR,[Oa]:s.ONE_MINUS_SRC_ALPHA,[zd]:s.ONE_MINUS_DST_COLOR,[Od]:s.ONE_MINUS_DST_ALPHA,[Vd]:s.CONSTANT_COLOR,[Gd]:s.ONE_MINUS_CONSTANT_COLOR,[Wd]:s.CONSTANT_ALPHA,[Xd]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,ne,z,$,ce,oe,Pe,dt,Et,Qe){if(I===ri){_===!0&&(Ee(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),I!==Rd){if(I!==m||Qe!==w){if((p!==Si||x!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,x=Si),Qe)switch(I){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fc:s.blendFunc(s.ONE,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,k=null,A=null,R.set(0,0,0),N=0,m=I,w=Qe}return}ce=ce||ne,oe=oe||z,Pe=Pe||$,(ne!==p||ce!==x)&&(s.blendEquationSeparate(qe[ne],qe[ce]),p=ne,x=ce),(z!==M||$!==S||oe!==k||Pe!==A)&&(s.blendFuncSeparate(ft[z],ft[$],ft[oe],ft[Pe]),M=z,S=$,k=oe,A=Pe),(dt.equals(R)===!1||Et!==N)&&(s.blendColor(dt.r,dt.g,dt.b,Et),R.copy(dt),N=Et),m=I,w=!1}function Gt(I,ne){I.side===pn?Ee(s.CULL_FACE):se(s.CULL_FACE);let z=I.side===Dt;ne&&(z=!z),Ve(z),I.blending===is&&I.transparent===!1?D(ri):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const $=I.stencilWrite;a.setTest($),$&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){b!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),b=I)}function Ge(I){I!==Td?(se(s.CULL_FACE),I!==C&&(I===dc?s.cullFace(s.BACK):I===Ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),C=I}function Se(I){I!==W&&(G&&s.lineWidth(I),W=I)}function at(I,ne,z){I?(se(s.POLYGON_OFFSET_FILL),(B!==ne||V!==z)&&(s.polygonOffset(ne,z),B=ne,V=z)):Ee(s.POLYGON_OFFSET_FILL)}function Me(I){I?se(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function E(I){I===void 0&&(I=s.TEXTURE0+K-1),ie!==I&&(s.activeTexture(I),ie=I)}function v(I,ne,z){z===void 0&&(ie===null?z=s.TEXTURE0+K-1:z=ie);let $=he[z];$===void 0&&($={type:void 0,texture:void 0},he[z]=$),($.type!==I||$.texture!==ne)&&(ie!==z&&(s.activeTexture(z),ie=z),s.bindTexture(I,ne||_e[I]),$.type=I,$.texture=ne)}function U(){const I=he[ie];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){it.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),it.copy(I))}function fe(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function We(I,ne){let z=c.get(ne);z===void 0&&(z=new WeakMap,c.set(ne,z));let $=z.get(I);$===void 0&&($=s.getUniformBlockIndex(ne,I.name),z.set(I,$))}function ke(I,ne){const $=c.get(ne).get(I);l.get(ne)!==$&&(s.uniformBlockBinding(ne,$,I.__bindingPointIndex),l.set(ne,$))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ie=null,he={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,k=null,A=null,R=new Te(0,0,0),N=0,w=!1,b=null,C=null,W=null,B=null,V=null,it.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Ee,bindFramebuffer:Ie,drawBuffers:Oe,useProgram:ut,setBlending:D,setMaterial:Gt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Se,setPolygonOffset:at,setScissorTest:Me,activeTexture:E,bindTexture:v,unbindTexture:U,compressedTexImage2D:j,compressedTexImage3D:Y,texImage2D:de,texImage3D:we,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:je,texStorage3D:Z,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Re,viewport:fe,reset:st}}function ch(s,e,t,n){const i=L_(n);switch(t){case Cu:return s*e;case Lu:return s*e;case Pu:return s*e*2;case zl:return s*e/i.components*i.byteLength;case Hl:return s*e/i.components*i.byteLength;case Du:return s*e*2/i.components*i.byteLength;case Vl:return s*e*2/i.components*i.byteLength;case Iu:return s*e*3/i.components*i.byteLength;case $t:return s*e*4/i.components*i.byteLength;case Gl:return s*e*4/i.components*i.byteLength;case Kr:case Zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:case Za:return Math.max(s,16)*Math.max(e,8)/4;case $a:case Ka:return Math.max(s,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case eo:case ml:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nu:case _l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L_(s){switch(s){case zn:case Tu:return{byteLength:1,components:1};case Zs:case Au:case nr:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case Ti:case Fl:case ln:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function P_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):er("canvas")}function _(E,v,U){let j=1;const Y=Me(E);if((Y.width>U||Y.height>U)&&(j=U/Math.max(Y.width,Y.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(j*Y.width),ve=Math.floor(j*Y.height);u===void 0&&(u=g(X,ve));const re=v?g(X,ve):u;return re.width=X,re.height=ve,re.getContext("2d").drawImage(E,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+ve+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,v,U,j,Y=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===s.RED&&(U===s.FLOAT&&(X=s.R32F),U===s.HALF_FLOAT&&(X=s.R16F),U===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(X=s.R8UI),U===s.UNSIGNED_SHORT&&(X=s.R16UI),U===s.UNSIGNED_INT&&(X=s.R32UI),U===s.BYTE&&(X=s.R8I),U===s.SHORT&&(X=s.R16I),U===s.INT&&(X=s.R32I)),v===s.RG&&(U===s.FLOAT&&(X=s.RG32F),U===s.HALF_FLOAT&&(X=s.RG16F),U===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(X=s.RG8UI),U===s.UNSIGNED_SHORT&&(X=s.RG16UI),U===s.UNSIGNED_INT&&(X=s.RG32UI),U===s.BYTE&&(X=s.RG8I),U===s.SHORT&&(X=s.RG16I),U===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(X=s.RGB8UI),U===s.UNSIGNED_SHORT&&(X=s.RGB16UI),U===s.UNSIGNED_INT&&(X=s.RGB32UI),U===s.BYTE&&(X=s.RGB8I),U===s.SHORT&&(X=s.RGB16I),U===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),U===s.UNSIGNED_INT&&(X=s.RGBA32UI),U===s.BYTE&&(X=s.RGBA8I),U===s.SHORT&&(X=s.RGBA16I),U===s.INT&&(X=s.RGBA32I)),v===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),v===s.RGBA){const ve=Y?fo:ze.getTransfer(j);U===s.FLOAT&&(X=s.RGBA32F),U===s.HALF_FLOAT&&(X=s.RGBA16F),U===s.UNSIGNED_BYTE&&(X=ve===tt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(E,v){let U;return E?v===null||v===Ti||v===ds?U=s.DEPTH24_STENCIL8:v===ln?U=s.DEPTH32F_STENCIL8:v===Zs&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ti||v===ds?U=s.DEPTH_COMPONENT24:v===ln?U=s.DEPTH_COMPONENT32F:v===Zs&&(U=s.DEPTH_COMPONENT16),U}function k(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Ht?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),N(v),v.isVideoTexture&&h.delete(v)}function R(E){const v=E.target;v.removeEventListener("dispose",R),b(v)}function N(E){const v=n.get(E);if(v.__webglInit===void 0)return;const U=E.source,j=d.get(U);if(j){const Y=j[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&w(E),Object.keys(j).length===0&&d.delete(U)}n.remove(E)}function w(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const U=E.source,j=d.get(U);delete j[v.__cacheKey],o.memory.textures--}function b(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Y=0;Y<v.__webglFramebuffer[j].length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[j][Y]);else s.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)s.deleteFramebuffer(v.__webglFramebuffer[j]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=E.textures;for(let j=0,Y=U.length;j<Y;j++){const X=n.get(U[j]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(U[j])}n.remove(E)}let C=0;function W(){C=0}function B(){const E=C;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),C+=1,E}function V(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function K(E,v){const U=n.get(E);if(E.isVideoTexture&&Se(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,E,v);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+v)}function G(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){q(U,E,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+v)}function Q(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){q(U,E,v);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+v)}function H(E,v){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ee(U,E,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+v)}const ie={[us]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[ro]:s.MIRRORED_REPEAT},he={[Nt]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[Yr]:s.LINEAR_MIPMAP_NEAREST,[Un]:s.LINEAR_MIPMAP_LINEAR},be={[lf]:s.NEVER,[pf]:s.ALWAYS,[cf]:s.LESS,[Bu]:s.LEQUAL,[hf]:s.EQUAL,[ff]:s.GEQUAL,[uf]:s.GREATER,[df]:s.NOTEQUAL};function Fe(E,v){if(v.type===ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ht||v.magFilter===Yr||v.magFilter===Gs||v.magFilter===Un||v.minFilter===Ht||v.minFilter===Yr||v.minFilter===Gs||v.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ie[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ie[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ie[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,he[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==Gs&&v.minFilter!==Un||v.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const j=v.source;let Y=d.get(j);Y===void 0&&(Y={},d.set(j,Y));const X=V(v);if(X!==E.__cacheKey){Y[X]===void 0&&(Y[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[X].usedTimes++;const ve=Y[E.__cacheKey];ve!==void 0&&(Y[E.__cacheKey].usedTimes--,ve.usedTimes===0&&w(v)),E.__cacheKey=X,E.__webglTexture=Y[X].texture}return U}function q(E,v,U){let j=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=s.TEXTURE_3D);const Y=it(E,v),X=v.source;t.bindTexture(j,E.__webglTexture,s.TEXTURE0+U);const ve=n.get(X);if(X.version!==ve.__version||Y===!0){t.activeTexture(s.TEXTURE0+U);const re=ze.getPrimaries(ze.workingColorSpace),ue=v.colorSpace===ei?null:ze.getPrimaries(v.colorSpace),je=v.colorSpace===ei||re===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Z=_(v.image,!1,i.maxTextureSize);Z=at(v,Z);const de=r.convert(v.format,v.colorSpace),we=r.convert(v.type);let Re=S(v.internalFormat,de,we,v.colorSpace,v.isVideoTexture);Fe(j,v);let fe;const We=v.mipmaps,ke=v.isVideoTexture!==!0,st=ve.__version===void 0||Y===!0,I=X.dataReady,ne=k(v,Z);if(v.isDepthTexture)Re=x(v.format===fs,v.type),st&&(ke?t.texStorage2D(s.TEXTURE_2D,1,Re,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Re,Z.width,Z.height,0,de,we,null));else if(v.isDataTexture)if(We.length>0){ke&&st&&t.texStorage2D(s.TEXTURE_2D,ne,Re,We[0].width,We[0].height);for(let z=0,$=We.length;z<$;z++)fe=We[z],ke?I&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,fe.width,fe.height,de,we,fe.data):t.texImage2D(s.TEXTURE_2D,z,Re,fe.width,fe.height,0,de,we,fe.data);v.generateMipmaps=!1}else ke?(st&&t.texStorage2D(s.TEXTURE_2D,ne,Re,Z.width,Z.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,de,we,Z.data)):t.texImage2D(s.TEXTURE_2D,0,Re,Z.width,Z.height,0,de,we,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Re,We[0].width,We[0].height,Z.depth);for(let z=0,$=We.length;z<$;z++)if(fe=We[z],v.format!==$t)if(de!==null)if(ke){if(I)if(v.layerUpdates.size>0){const ce=ch(fe.width,fe.height,v.format,v.type);for(const oe of v.layerUpdates){const Pe=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,oe,fe.width,fe.height,1,de,Pe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,Z.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,Re,fe.width,fe.height,Z.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,Z.depth,de,we,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,Re,fe.width,fe.height,Z.depth,0,de,we,fe.data)}else{ke&&st&&t.texStorage2D(s.TEXTURE_2D,ne,Re,We[0].width,We[0].height);for(let z=0,$=We.length;z<$;z++)fe=We[z],v.format!==$t?de!==null?ke?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,z,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,fe.width,fe.height,de,we,fe.data):t.texImage2D(s.TEXTURE_2D,z,Re,fe.width,fe.height,0,de,we,fe.data)}else if(v.isDataArrayTexture)if(ke){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Re,Z.width,Z.height,Z.depth),I)if(v.layerUpdates.size>0){const z=ch(Z.width,Z.height,v.format,v.type);for(const $ of v.layerUpdates){const ce=Z.data.subarray($*z/Z.data.BYTES_PER_ELEMENT,($+1)*z/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,Z.width,Z.height,1,de,we,ce)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,de,we,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,Z.width,Z.height,Z.depth,0,de,we,Z.data);else if(v.isData3DTexture)ke?(st&&t.texStorage3D(s.TEXTURE_3D,ne,Re,Z.width,Z.height,Z.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,de,we,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Re,Z.width,Z.height,Z.depth,0,de,we,Z.data);else if(v.isFramebufferTexture){if(st)if(ke)t.texStorage2D(s.TEXTURE_2D,ne,Re,Z.width,Z.height);else{let z=Z.width,$=Z.height;for(let ce=0;ce<ne;ce++)t.texImage2D(s.TEXTURE_2D,ce,Re,z,$,0,de,we,null),z>>=1,$>>=1}}else if(We.length>0){if(ke&&st){const z=Me(We[0]);t.texStorage2D(s.TEXTURE_2D,ne,Re,z.width,z.height)}for(let z=0,$=We.length;z<$;z++)fe=We[z],ke?I&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,de,we,fe):t.texImage2D(s.TEXTURE_2D,z,Re,de,we,fe);v.generateMipmaps=!1}else if(ke){if(st){const z=Me(Z);t.texStorage2D(s.TEXTURE_2D,ne,Re,z.width,z.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,we,Z)}else t.texImage2D(s.TEXTURE_2D,0,Re,de,we,Z);m(v)&&p(j),ve.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ee(E,v,U){if(v.image.length!==6)return;const j=it(E,v),Y=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);const X=n.get(Y);if(Y.version!==X.__version||j===!0){t.activeTexture(s.TEXTURE0+U);const ve=ze.getPrimaries(ze.workingColorSpace),re=v.colorSpace===ei?null:ze.getPrimaries(v.colorSpace),ue=v.colorSpace===ei||ve===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const je=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!je&&!Z?de[$]=_(v.image[$],!0,i.maxCubemapSize):de[$]=Z?v.image[$].image:v.image[$],de[$]=at(v,de[$]);const we=de[0],Re=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),We=S(v.internalFormat,Re,fe,v.colorSpace),ke=v.isVideoTexture!==!0,st=X.__version===void 0||j===!0,I=Y.dataReady;let ne=k(v,we);Fe(s.TEXTURE_CUBE_MAP,v);let z;if(je){ke&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,We,we.width,we.height);for(let $=0;$<6;$++){z=de[$].mipmaps;for(let ce=0;ce<z.length;ce++){const oe=z[ce];v.format!==$t?Re!==null?ke?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,oe.width,oe.height,Re,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,We,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,0,0,oe.width,oe.height,Re,fe,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce,We,oe.width,oe.height,0,Re,fe,oe.data)}}}else{if(z=v.mipmaps,ke&&st){z.length>0&&ne++;const $=Me(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,We,$.width,$.height)}for(let $=0;$<6;$++)if(Z){ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,Re,fe,de[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,de[$].width,de[$].height,0,Re,fe,de[$].data);for(let ce=0;ce<z.length;ce++){const Pe=z[ce].image[$].image;ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Pe.width,Pe.height,Re,fe,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,We,Pe.width,Pe.height,0,Re,fe,Pe.data)}}else{ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re,fe,de[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,Re,fe,de[$]);for(let ce=0;ce<z.length;ce++){const oe=z[ce];ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,0,0,Re,fe,oe.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ce+1,We,Re,fe,oe.image[$])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,U,j,Y,X){const ve=r.convert(U.format,U.colorSpace),re=r.convert(U.type),ue=S(U.internalFormat,ve,re,U.colorSpace),je=n.get(v),Z=n.get(U);if(Z.__renderTarget=v,!je.__hasExternalTextures){const de=Math.max(1,v.width>>X),we=Math.max(1,v.height>>X);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,X,ue,de,we,v.depth,0,ve,re,null):t.texImage2D(Y,X,ue,de,we,0,ve,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Ge(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Y,Z.__webglTexture,0,Ve(v)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Y,Z.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(E,v,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const j=v.depthTexture,Y=j&&j.isDepthTexture?j.type:null,X=x(v.stencilBuffer,Y),ve=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Ve(v);Ge(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,X,v.width,v.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,E)}else{const j=v.textures;for(let Y=0;Y<j.length;Y++){const X=j[Y],ve=r.convert(X.format,X.colorSpace),re=r.convert(X.type),ue=S(X.internalFormat,ve,re,X.colorSpace),je=Ve(v);U&&Ge(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,ue,v.width,v.height):Ge(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,ue,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ue,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const Y=j.__webglTexture,X=Ve(v);if(v.depthTexture.format===ss)Ge(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(v.depthTexture.format===fs)Ge(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const v=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Y)};j.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=j}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ee(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=s.createRenderbuffer(),se(v.__webglDepthbuffer[j],E,!1);else{const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,X)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),se(v.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Y)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(E,v,U){const j=n.get(E);v!==void 0&&_e(j.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ie(E)}function ut(E){const v=E.texture,U=n.get(E),j=n.get(v);E.addEventListener("dispose",R);const Y=E.textures,X=E.isWebGLCubeRenderTarget===!0,ve=Y.length>1;if(ve||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=v.version,o.memory.textures++),X){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let ue=0;ue<v.mipmaps.length;ue++)U.__webglFramebuffer[re][ue]=s.createFramebuffer()}else U.__webglFramebuffer[re]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)U.__webglFramebuffer[re]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ve)for(let re=0,ue=Y.length;re<ue;re++){const je=n.get(Y[re]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Ge(E)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){const ue=Y[re];U.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[re]);const je=r.convert(ue.format,ue.colorSpace),Z=r.convert(ue.type),de=S(ue.internalFormat,je,Z,ue.colorSpace,E.isXRRenderTarget===!0),we=Ve(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,U.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),se(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(U.__webglFramebuffer[re][ue],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else _e(U.__webglFramebuffer[re],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,ue=Y.length;re<ue;re++){const je=Y[re],Z=n.get(je);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),Fe(s.TEXTURE_2D,je),_e(U.__webglFramebuffer,E,je,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),m(je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),Fe(re,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(U.__webglFramebuffer[ue],E,v,s.COLOR_ATTACHMENT0,re,ue);else _e(U.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}E.depthBuffer&&Ie(E)}function qe(E){const v=E.textures;for(let U=0,j=v.length;U<j;U++){const Y=v[U];if(m(Y)){const X=M(E),ve=n.get(Y).__webglTexture;t.bindTexture(X,ve),p(X),t.unbindTexture()}}}const ft=[],D=[];function Gt(E){if(E.samples>0){if(Ge(E)===!1){const v=E.textures,U=E.width,j=E.height;let Y=s.COLOR_BUFFER_BIT;const X=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(E),re=v.length>1;if(re)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const je=n.get(v[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,U,j,0,0,U,j,Y,s.NEAREST),l===!0&&(ft.length=0,D.length=0,ft.push(s.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ft.push(X),D.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const je=n.get(v[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ve(E){return Math.min(i.maxSamples,E.samples)}function Ge(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Se(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function at(E,v){const U=E.colorSpace,j=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==kt&&U!==ei&&(ze.getTransfer(U)===tt?(j!==$t||Y!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function D_(s,e){function t(n,i=ei){let r;const o=ze.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===Ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return s.BYTE;if(n===Au)return s.SHORT;if(n===Zs)return s.UNSIGNED_SHORT;if(n===Fl)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===nr)return s.HALF_FLOAT;if(n===Cu)return s.ALPHA;if(n===Iu)return s.RGB;if(n===$t)return s.RGBA;if(n===Lu)return s.LUMINANCE;if(n===Pu)return s.LUMINANCE_ALPHA;if(n===ss)return s.DEPTH_COMPONENT;if(n===fs)return s.DEPTH_STENCIL;if(n===zl)return s.RED;if(n===Hl)return s.RED_INTEGER;if(n===Du)return s.RG;if(n===Vl)return s.RG_INTEGER;if(n===Gl)return s.RGBA_INTEGER;if(n===Kr||n===Zr||n===Jr||n===Qr)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ya||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Qa)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===_l||n===vl||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class N_ extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ni extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:U_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Ri{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new O_,m=t.getContextAttributes();let p=null,M=null;const S=[],x=[],k=new He;let A=null;const R=new Pt;R.viewport=new Ye;const N=new Pt;N.viewport=new Ye;const w=[R,N],b=new N_;let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=S[q];return ee===void 0&&(ee=new Yo,S[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=S[q];return ee===void 0&&(ee=new Yo,S[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=S[q];return ee===void 0&&(ee=new Yo,S[q]=ee),ee.getHandSpace()};function B(q){const ee=x.indexOf(q.inputSource);if(ee===-1)return;const _e=S[ee];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let q=0;q<S.length;q++){const ee=x[q];ee!==null&&(x[q]=null,S[q].disconnect(ee))}C=null,W=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ai(f.framebufferWidth,f.framebufferHeight,{format:$t,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,_e=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?fs:ss,_e=m.stencil?ds:Ti);const Ee={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ai(d.textureWidth,d.textureHeight,{format:$t,type:zn,depthTexture:new Zu(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let ee=0;ee<q.removed.length;ee++){const _e=q.removed[ee],se=x.indexOf(_e);se>=0&&(x[se]=null,S[se].disconnect(_e))}for(let ee=0;ee<q.added.length;ee++){const _e=q.added[ee];let se=x.indexOf(_e);if(se===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=x.length){x.push(_e),se=Ie;break}else if(x[Ie]===null){x[Ie]=_e,se=Ie;break}if(se===-1)break}const Ee=S[se];Ee&&Ee.connect(_e)}}const G=new T,Q=new T;function H(q,ee,_e){G.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const se=G.distanceTo(Q),Ee=ee.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),ut=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],ft=(Ee[9]-1)/Ee[5],D=(Ee[8]-1)/Ee[0],Gt=(Ie[8]+1)/Ie[0],Ve=Oe*D,Ge=Oe*Gt,Se=se/(-D+Gt),at=Se*-D;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Me=Oe+Se,E=ut+Se,v=Ve-at,U=Ge+(se-at),j=qe*ut/E*Me,Y=ft*ut/E*Me;q.projectionMatrix.makePerspective(v,U,j,Y,Me,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,_e=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),b.near=N.near=R.near=ee,b.far=N.far=R.far=_e,(C!==b.near||W!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,W=b.far),R.layers.mask=q.layers.mask|2,N.layers.mask=q.layers.mask|4,b.layers.mask=R.layers.mask|N.layers.mask;const se=q.parent,Ee=b.cameras;ie(b,se);for(let Ie=0;Ie<Ee.length;Ie++)ie(Ee[Ie],se);Ee.length===2?H(b,R,N):b.projectionMatrix.copy(R.projectionMatrix),he(q,b,se)};function he(q,ee,_e){_e===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let be=null;function Fe(q,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let se=!1;_e.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let Ie=0;Ie<_e.length;Ie++){const Oe=_e[Ie];let ut=null;if(f!==null)ut=f.getViewport(Oe);else{const ft=u.getViewSubImage(d,Oe);ut=ft.viewport,Ie===0&&(e.setRenderTargetTextures(M,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(M))}let qe=w[Ie];qe===void 0&&(qe=new Pt,qe.layers.enable(Ie),qe.viewport=new Ye,w[Ie]=qe),qe.matrix.fromArray(Oe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Oe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ut.x,ut.y,ut.width,ut.height),Ie===0&&(b.matrix.copy(qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(qe)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ie=u.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,i.renderState)}}for(let _e=0;_e<S.length;_e++){const se=x[_e],Ee=S[_e];se!==null&&Ee!==void 0&&Ee.update(se,ee,c||o)}be&&be(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const it=new Ku;it.setAnimationLoop(Fe),this.setAnimationLoop=function(q){be=q},this.dispose=function(){}}}const pi=new vn,z_=new Le;function H_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,pi.copy(x),pi.x*=-1,pi.y*=-1,pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(pi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function V_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const k=S.program;n.updateUBOMapping(M,k);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const S=u();M.__bindingPointIndex=S;const x=s.createBuffer(),k=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,k,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],x=M.uniforms,k=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,R=x.length;A<R;A++){const N=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,b=N.length;w<b;w++){const C=N[w];if(f(C,A,w,k)===!0){const W=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let K=0;K<B.length;K++){const G=B[K],Q=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,W+V,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,x,k){const A=M.value,R=S+"_"+x;if(k[R]===void 0)return typeof A=="number"||typeof A=="boolean"?k[R]=A:k[R]=A.clone(),!0;{const N=k[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return k[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(M){const S=M.uniforms;let x=0;const k=16;for(let R=0,N=S.length;R<N;R++){const w=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,C=w.length;b<C;b++){const W=w[b],B=Array.isArray(W.value)?W.value:[W.value];for(let V=0,K=B.length;V<K;V++){const G=B[V],Q=_(G),H=x%k,ie=H%Q.boundary,he=H+ie;x+=ie,he!==0&&k-he<Q.storage&&(x+=k-he),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=Q.storage}}}const A=x%k;return A>0&&(x+=k-A),M.__size=x,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class G_{constructor(e={}){const{canvas:t=Lf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let k=!1,A=0,R=0,N=null,w=-1,b=null;const C=new Ye,W=new Ye;let B=null;const V=new Te(0);let K=0,G=t.width,Q=t.height,H=1,ie=null,he=null;const be=new Ye(0,0,G,Q),Fe=new Ye(0,0,G,Q);let it=!1;const q=new ql;let ee=!1,_e=!1;const se=new Le,Ee=new Le,Ie=new T,Oe=new Ye,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ft(){return N===null?H:1}let D=n;function Gt(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),D===null){const L="webgl2";if(D=Gt(L,y),D===null)throw Gt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ve,Ge,Se,at,Me,E,v,U,j,Y,X,ve,re,ue,je,Z,de,we,Re,fe,We,ke,st,I;function ne(){Ve=new $g(D),Ve.init(),ke=new D_(D,Ve),Ge=new Vg(D,Ve,e,ke),Se=new I_(D,Ve),Ge.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),at=new Zg(D),Me=new m_,E=new P_(D,Ve,Se,Me,Ge,ke,at),v=new Wg(x),U=new jg(x),j=new sp(D),st=new zg(D,j),Y=new Yg(D,j,at,st),X=new Qg(D,Y,j,at),Re=new Jg(D,Ge,E),Z=new Gg(Me),ve=new p_(x,v,U,Ve,Ge,st,Z),re=new H_(x,Me),ue=new __,je=new S_(Ve),we=new Bg(x,v,U,Se,X,f,l),de=new R_(x,X,Ge),I=new V_(D,at,Ge,Se),fe=new Hg(D,Ve,at),We=new Kg(D,Ve,at),at.programs=ve.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=Me,x.renderLists=ue,x.shadowMap=de,x.state=Se,x.info=at}ne();const z=new B_(x,D);this.xr=z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(G,Q,!1))},this.getSize=function(y){return y.set(G,Q)},this.setSize=function(y,L,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,Q=L,t.width=Math.floor(y*H),t.height=Math.floor(L*H),F===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(G*H,Q*H).floor()},this.setDrawingBufferSize=function(y,L,F){G=y,Q=L,H=F,t.width=Math.floor(y*F),t.height=Math.floor(L*F),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,L,F,O){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,L,F,O),Se.viewport(C.copy(be).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,L,F,O){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,L,F,O),Se.scissor(W.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(y){Se.setScissorTest(it=y)},this.setOpaqueSort=function(y){ie=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(y=!0,L=!0,F=!0){let O=0;if(y){let P=!1;if(N!==null){const J=N.texture.format;P=J===Gl||J===Vl||J===Hl}if(P){const J=N.texture.type,ae=J===zn||J===Ti||J===Zs||J===ds||J===Ol||J===Bl,pe=we.getClearColor(),me=we.getClearAlpha(),Ce=pe.r,De=pe.g,ge=pe.b;ae?(g[0]=Ce,g[1]=De,g[2]=ge,g[3]=me,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ce,_[1]=De,_[2]=ge,_[3]=me,D.clearBufferiv(D.COLOR,0,_))}else O|=D.COLOR_BUFFER_BIT}L&&(O|=D.DEPTH_BUFFER_BIT),F&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),je.dispose(),Me.dispose(),v.dispose(),U.dispose(),X.dispose(),st.dispose(),I.dispose(),ve.dispose(),z.dispose(),z.removeEventListener("sessionstart",sc),z.removeEventListener("sessionend",rc),li.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const y=at.autoReset,L=de.enabled,F=de.autoUpdate,O=de.needsUpdate,P=de.type;ne(),at.autoReset=y,de.enabled=L,de.autoUpdate=F,de.needsUpdate=O,de.type=P}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pe(y){const L=y.target;L.removeEventListener("dispose",Pe),dt(L)}function dt(y){Et(y),Me.remove(y)}function Et(y){const L=Me.get(y).programs;L!==void 0&&(L.forEach(function(F){ve.releaseProgram(F)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,F,O,P,J){L===null&&(L=ut);const ae=P.isMesh&&P.matrixWorld.determinant()<0,pe=Sd(y,L,F,O,P);Se.setMaterial(O,ae);let me=F.index,Ce=1;if(O.wireframe===!0){if(me=Y.getWireframeAttribute(F),me===void 0)return;Ce=2}const De=F.drawRange,ge=F.attributes.position;let $e=De.start*Ce,rt=(De.start+De.count)*Ce;J!==null&&($e=Math.max($e,J.start*Ce),rt=Math.min(rt,(J.start+J.count)*Ce)),me!==null?($e=Math.max($e,0),rt=Math.min(rt,me.count)):ge!=null&&($e=Math.max($e,0),rt=Math.min(rt,ge.count));const lt=rt-$e;if(lt<0||lt===1/0)return;st.setup(P,O,pe,F,me);let Ut,Ke=fe;if(me!==null&&(Ut=j.get(me),Ke=We,Ke.setIndex(Ut)),P.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*ft()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(P.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),Se.setLineWidth(xe*ft()),P.isLineSegments?Ke.setMode(D.LINES):P.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else P.isPoints?Ke.setMode(D.POINTS):P.isSprite&&Ke.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ke.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const xe=P._multiDrawStarts,Sn=P._multiDrawCounts,Ze=P._multiDrawCount,Qt=me?j.get(me).bytesPerElement:1,Ci=Me.get(O).currentProgram.getUniforms();for(let Ot=0;Ot<Ze;Ot++)Ci.setValue(D,"_gl_DrawID",Ot),Ke.render(xe[Ot]/Qt,Sn[Ot])}else if(P.isInstancedMesh)Ke.renderInstances($e,lt,P.count);else if(F.isInstancedBufferGeometry){const xe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Sn=Math.min(F.instanceCount,xe);Ke.renderInstances($e,lt,Sn)}else Ke.render($e,lt)};function Qe(y,L,F){y.transparent===!0&&y.side===pn&&y.forceSinglePass===!1?(y.side=Dt,y.needsUpdate=!0,rr(y,L,F),y.side=Bn,y.needsUpdate=!0,rr(y,L,F),y.side=pn):rr(y,L,F)}this.compile=function(y,L,F=null){F===null&&(F=y),p=je.get(F),p.init(L),S.push(p),F.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),y!==F&&y.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();const O=new Set;return y.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const J=P.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){const pe=J[ae];Qe(pe,F,P),O.add(pe)}else Qe(J,F,P),O.add(J)}),S.pop(),p=null,O},this.compileAsync=function(y,L,F=null){const O=this.compile(y,L,F);return new Promise(P=>{function J(){if(O.forEach(function(ae){Me.get(ae).currentProgram.isReady()&&O.delete(ae)}),O.size===0){P(y);return}setTimeout(J,10)}Ve.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Jt=null;function Mn(y){Jt&&Jt(y)}function sc(){li.stop()}function rc(){li.start()}const li=new Ku;li.setAnimationLoop(Mn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){Jt=y,z.setAnimationLoop(y),y===null?li.stop():li.start()},z.addEventListener("sessionstart",sc),z.addEventListener("sessionend",rc),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,N),p=je.get(y,S.length),p.init(L),S.push(p),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Ee),_e=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,_e),m=ue.get(y,M.length),m.init(),M.push(m),z.enabled===!0&&z.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&bo(J,L,-1/0,x.sortObjects)}bo(y,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,he),qe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,qe&&we.addToRenderList(m,y),this.info.render.frame++,ee===!0&&Z.beginShadows();const F=p.state.shadowsArray;de.render(F,y,L),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,P=m.transmissive;if(p.setupLights(),L.isArrayCamera){const J=L.cameras;if(P.length>0)for(let ae=0,pe=J.length;ae<pe;ae++){const me=J[ae];ac(O,P,y,me)}qe&&we.render(y);for(let ae=0,pe=J.length;ae<pe;ae++){const me=J[ae];oc(m,y,me,me.viewport)}}else P.length>0&&ac(O,P,y,L),qe&&we.render(y),oc(m,y,L);N!==null&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(x,y,L),st.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&Z.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function bo(y,L,F,O){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){O&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ee);const ae=X.update(y),pe=y.material;pe.visible&&m.push(y,ae,pe,F,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const ae=X.update(y),pe=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Oe.copy(ae.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Ee)),Array.isArray(pe)){const me=ae.groups;for(let Ce=0,De=me.length;Ce<De;Ce++){const ge=me[Ce],$e=pe[ge.materialIndex];$e&&$e.visible&&m.push(y,ae,$e,F,Oe.z,ge)}}else pe.visible&&m.push(y,ae,pe,F,Oe.z,null)}}const J=y.children;for(let ae=0,pe=J.length;ae<pe;ae++)bo(J[ae],L,F,O)}function oc(y,L,F,O){const P=y.opaque,J=y.transmissive,ae=y.transparent;p.setupLightsView(F),ee===!0&&Z.setGlobalState(x.clippingPlanes,F),O&&Se.viewport(C.copy(O)),P.length>0&&sr(P,L,F),J.length>0&&sr(J,L,F),ae.length>0&&sr(ae,L,F),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ac(y,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Ai(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?nr:zn,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const J=p.state.transmissionRenderTarget[O.id],ae=O.viewport||C;J.setSize(ae.z,ae.w);const pe=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(V),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),qe&&we.render(F);const me=x.toneMapping;x.toneMapping=oi;const Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),ee===!0&&Z.setGlobalState(x.clippingPlanes,O),sr(y,F,O),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ge=0,$e=L.length;ge<$e;ge++){const rt=L[ge],lt=rt.object,Ut=rt.geometry,Ke=rt.material,xe=rt.group;if(Ke.side===pn&&lt.layers.test(O.layers)){const Sn=Ke.side;Ke.side=Dt,Ke.needsUpdate=!0,lc(lt,F,O,Ut,Ke,xe),Ke.side=Sn,Ke.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}x.setRenderTarget(pe),x.setClearColor(V,K),Ce!==void 0&&(O.viewport=Ce),x.toneMapping=me}function sr(y,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let P=0,J=y.length;P<J;P++){const ae=y[P],pe=ae.object,me=ae.geometry,Ce=O===null?ae.material:O,De=ae.group;pe.layers.test(F.layers)&&lc(pe,L,F,me,Ce,De)}}function lc(y,L,F,O,P,J){y.onBeforeRender(x,L,F,O,P,J),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),P.onBeforeRender(x,L,F,O,y,J),P.transparent===!0&&P.side===pn&&P.forceSinglePass===!1?(P.side=Dt,P.needsUpdate=!0,x.renderBufferDirect(F,L,O,P,y,J),P.side=Bn,P.needsUpdate=!0,x.renderBufferDirect(F,L,O,P,y,J),P.side=pn):x.renderBufferDirect(F,L,O,P,y,J),y.onAfterRender(x,L,F,O,P,J)}function rr(y,L,F){L.isScene!==!0&&(L=ut);const O=Me.get(y),P=p.state.lights,J=p.state.shadowsArray,ae=P.state.version,pe=ve.getParameters(y,P.state,J,L,F),me=ve.getProgramCacheKey(pe);let Ce=O.programs;O.environment=y.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(y.isMeshStandardMaterial?U:v).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",Pe),Ce=new Map,O.programs=Ce);let De=Ce.get(me);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===ae)return hc(y,pe),De}else pe.uniforms=ve.getUniforms(y),y.onBeforeCompile(pe,x),De=ve.acquireProgram(pe,me),Ce.set(me,De),O.uniforms=pe.uniforms;const ge=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ge.clippingPlanes=Z.uniform),hc(y,pe),O.needsLights=Ed(y),O.lightsStateVersion=ae,O.needsLights&&(ge.ambientLightColor.value=P.state.ambient,ge.lightProbe.value=P.state.probe,ge.directionalLights.value=P.state.directional,ge.directionalLightShadows.value=P.state.directionalShadow,ge.spotLights.value=P.state.spot,ge.spotLightShadows.value=P.state.spotShadow,ge.rectAreaLights.value=P.state.rectArea,ge.ltc_1.value=P.state.rectAreaLTC1,ge.ltc_2.value=P.state.rectAreaLTC2,ge.pointLights.value=P.state.point,ge.pointLightShadows.value=P.state.pointShadow,ge.hemisphereLights.value=P.state.hemi,ge.directionalShadowMap.value=P.state.directionalShadowMap,ge.directionalShadowMatrix.value=P.state.directionalShadowMatrix,ge.spotShadowMap.value=P.state.spotShadowMap,ge.spotLightMatrix.value=P.state.spotLightMatrix,ge.spotLightMap.value=P.state.spotLightMap,ge.pointShadowMap.value=P.state.pointShadowMap,ge.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function cc(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=to.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function hc(y,L){const F=Me.get(y);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Sd(y,L,F,O,P){L.isScene!==!0&&(L=ut),E.resetTextureUnits();const J=L.fog,ae=O.isMeshStandardMaterial?L.environment:null,pe=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:kt,me=(O.isMeshStandardMaterial?U:v).get(O.envMap||ae),Ce=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ge=!!F.morphAttributes.position,$e=!!F.morphAttributes.normal,rt=!!F.morphAttributes.color;let lt=oi;O.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(lt=x.toneMapping);const Ut=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ke=Ut!==void 0?Ut.length:0,xe=Me.get(O),Sn=p.state.lights;if(ee===!0&&(_e===!0||y!==b)){const Wt=y===b&&O.id===w;Z.setState(O,y,Wt)}let Ze=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Sn.state.version||xe.outputColorSpace!==pe||P.isBatchedMesh&&xe.batching===!1||!P.isBatchedMesh&&xe.batching===!0||P.isBatchedMesh&&xe.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xe.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xe.instancing===!1||!P.isInstancedMesh&&xe.instancing===!0||P.isSkinnedMesh&&xe.skinning===!1||!P.isSkinnedMesh&&xe.skinning===!0||P.isInstancedMesh&&xe.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xe.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xe.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xe.instancingMorph===!1&&P.morphTexture!==null||xe.envMap!==me||O.fog===!0&&xe.fog!==J||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Z.numPlanes||xe.numIntersection!==Z.numIntersection)||xe.vertexAlphas!==Ce||xe.vertexTangents!==De||xe.morphTargets!==ge||xe.morphNormals!==$e||xe.morphColors!==rt||xe.toneMapping!==lt||xe.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,xe.__version=O.version);let Qt=xe.currentProgram;Ze===!0&&(Qt=rr(O,L,P));let Ci=!1,Ot=!1,Ts=!1;const ct=Qt.getUniforms(),hn=xe.uniforms;if(Se.useProgram(Qt.program)&&(Ci=!0,Ot=!0,Ts=!0),O.id!==w&&(w=O.id,Ot=!0),Ci||b!==y){Se.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),Df(se),Nf(se),ct.setValue(D,"projectionMatrix",se)):ct.setValue(D,"projectionMatrix",y.projectionMatrix),ct.setValue(D,"viewMatrix",y.matrixWorldInverse);const Vn=ct.map.cameraPosition;Vn!==void 0&&Vn.setValue(D,Ie.setFromMatrixPosition(y.matrixWorld)),Ge.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ct.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Ot=!0,Ts=!0)}if(P.isSkinnedMesh){ct.setOptional(D,P,"bindMatrix"),ct.setOptional(D,P,"bindMatrixInverse");const Wt=P.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(D,"boneTexture",Wt.boneTexture,E))}P.isBatchedMesh&&(ct.setOptional(D,P,"batchingTexture"),ct.setValue(D,"batchingTexture",P._matricesTexture,E),ct.setOptional(D,P,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",P._indirectTexture,E),ct.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",P._colorsTexture,E));const As=F.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Re.update(P,F,Qt),(Ot||xe.receiveShadow!==P.receiveShadow)&&(xe.receiveShadow=P.receiveShadow,ct.setValue(D,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(hn.envMap.value=me,hn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(hn.envMapIntensity.value=L.environmentIntensity),Ot&&(ct.setValue(D,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&wd(hn,Ts),J&&O.fog===!0&&re.refreshFogUniforms(hn,J),re.refreshMaterialUniforms(hn,O,H,Q,p.state.transmissionRenderTarget[y.id]),to.upload(D,cc(xe),hn,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(to.upload(D,cc(xe),hn,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ct.setValue(D,"center",P.center),ct.setValue(D,"modelViewMatrix",P.modelViewMatrix),ct.setValue(D,"normalMatrix",P.normalMatrix),ct.setValue(D,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Wt=O.uniformsGroups;for(let Vn=0,Gn=Wt.length;Vn<Gn;Vn++){const uc=Wt[Vn];I.update(uc,Qt),I.bind(uc,Qt)}}return Qt}function wd(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Ed(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,L,F){Me.get(y.texture).__webglTexture=L,Me.get(y.depthTexture).__webglTexture=F;const O=Me.get(y);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const F=Me.get(y);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,F=0){N=y,A=L,R=F;let O=!0,P=null,J=!1,ae=!1;if(y){const me=Me.get(y);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(me.__hasExternalTextures)E.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ge=y.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(y.width!==ge.image.width||y.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ae=!0);const De=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[L])?P=De[L][F]:P=De[L],J=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?P=Me.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?P=De[F]:P=De,C.copy(y.viewport),W.copy(y.scissor),B=y.scissorTest}else C.copy(be).multiplyScalar(H).floor(),W.copy(Fe).multiplyScalar(H).floor(),B=it;if(Se.bindFramebuffer(D.FRAMEBUFFER,P)&&O&&Se.drawBuffers(y,P),Se.viewport(C),Se.scissor(W),Se.setScissorTest(B),J){const me=Me.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,F)}else if(ae){const me=Me.get(y.texture),Ce=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.__webglTexture,F||0,Ce)}w=-1},this.readRenderTargetPixels=function(y,L,F,O,P,J,ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){Se.bindFramebuffer(D.FRAMEBUFFER,pe);try{const me=y.texture,Ce=me.format,De=me.type;if(!Ge.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-O&&F>=0&&F<=y.height-P&&D.readPixels(L,F,O,P,ke.convert(Ce),ke.convert(De),J)}finally{const me=N!==null?Me.get(N).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,L,F,O,P,J,ae){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){const me=y.texture,Ce=me.format,De=me.type;if(!Ge.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-O&&F>=0&&F<=y.height-P){Se.bindFramebuffer(D.FRAMEBUFFER,pe);const ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ge),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(L,F,O,P,ke.convert(Ce),ke.convert(De),0);const $e=N!==null?Me.get(N).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,$e);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Pf(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(ge),D.deleteSync(rt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,F=0){y.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const O=Math.pow(2,-F),P=Math.floor(y.image.width*O),J=Math.floor(y.image.height*O),ae=L!==null?L.x:0,pe=L!==null?L.y:0;E.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ae,pe,P,J),Se.unbindTexture()},this.copyTextureToTexture=function(y,L,F=null,O=null,P=0){y.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1],L=arguments[2],P=arguments[3]||0,F=null);let J,ae,pe,me,Ce,De,ge,$e,rt;const lt=y.isCompressedTexture?y.mipmaps[P]:y.image;F!==null?(J=F.max.x-F.min.x,ae=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,me=F.min.x,Ce=F.min.y,De=F.isBox3?F.min.z:0):(J=lt.width,ae=lt.height,pe=lt.depth||1,me=0,Ce=0,De=0),O!==null?(ge=O.x,$e=O.y,rt=O.z):(ge=0,$e=0,rt=0);const Ut=ke.convert(L.format),Ke=ke.convert(L.type);let xe;L.isData3DTexture?(E.setTexture3D(L,0),xe=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),xe=D.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),xe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Sn=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ci=D.getParameter(D.UNPACK_SKIP_ROWS),Ot=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De);const Ts=y.isDataArrayTexture||y.isData3DTexture,ct=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const hn=Me.get(y),As=Me.get(L),Wt=Me.get(hn.__renderTarget),Vn=Me.get(As.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Gn=0;Gn<pe;Gn++)Ts&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(y).__webglTexture,P,De+Gn),y.isDepthTexture?(ct&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,P,rt+Gn),D.blitFramebuffer(me,Ce,J,ae,ge,$e,J,ae,D.DEPTH_BUFFER_BIT,D.NEAREST)):ct?D.copyTexSubImage3D(xe,P,ge,$e,rt+Gn,me,Ce,J,ae):D.copyTexSubImage2D(xe,P,ge,$e,rt+Gn,me,Ce,J,ae);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(xe,P,ge,$e,rt,J,ae,pe,Ut,Ke,lt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,P,ge,$e,rt,J,ae,pe,Ut,lt.data):D.texSubImage3D(xe,P,ge,$e,rt,J,ae,pe,Ut,Ke,lt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,P,ge,$e,J,ae,Ut,Ke,lt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,P,ge,$e,lt.width,lt.height,Ut,lt.data):D.texSubImage2D(D.TEXTURE_2D,P,ge,$e,J,ae,Ut,Ke,lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ci),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot),P===0&&L.generateMipmaps&&D.generateMipmap(xe),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,L,F=null,O=null,P=0){return y.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,y=arguments[2],L=arguments[3],P=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,F,O,P)},this.initRenderTarget=function(y){Me.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){A=0,R=0,N=null,Se.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class nd extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new T;class Yl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hh=new T,uh=new Ye,dh=new Ye,X_=new T,fh=new Le,Tr=new T,Ko=new xn,ph=new Le,Zo=new po;class id extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingBox.expandByPoint(Tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingSphere.expandByPoint(Tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(i),e.ray.intersectsSphere(Ko)!==!1&&(ph.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(ph),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;uh.fromBufferAttribute(i.attributes.skinIndex,e),dh.fromBufferAttribute(i.attributes.skinWeight,e),hh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=dh.getComponent(r);if(o!==0){const a=uh.getComponent(r);fh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(X_.copy(hh).applyMatrix4(fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sd extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rd extends yt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Nt,h=Nt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new Le,q_=new Le;class _o{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:q_;mh.multiplyMatrices(a,t[r]),mh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _o(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rd(t,e,e,$t,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sd),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wl extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new Le,gh=new Le,Ar=[],_h=new Hn,j_=new Le,Ps=new nt,Ds=new xn;class $_ extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,j_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),_h.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(_h)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Ds.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wi),gh.multiplyMatrices(n,Wi),Ps.matrixWorld=gh,Ps.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const l=Ar[o];l.instanceId=r,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rd(new Float32Array(i*this.count),i,this.count,zl,ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Kl extends _n{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lo=new T,co=new T,vh=new Le,Ns=new po,Rr=new xn,Jo=new T,xh=new T;class Zl extends ht{constructor(e=new Ft,t=new Kl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)lo.fromBufferAttribute(t,i-1),co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;vh.copy(i).invert(),Ns.copy(e.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),M=h.getX(_+1),S=Cr(this,e,Ns,l,p,M);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Cr(this,e,Ns,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Cr(this,e,Ns,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Cr(this,e,Ns,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(lo.fromBufferAttribute(o,i),co.fromBufferAttribute(o,r),t.distanceSqToSegment(lo,co,Jo,xh)>n)return;Jo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Jo);if(!(l<e.near||l>e.far))return{distance:l,point:xh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const yh=new T,bh=new T;class od extends Zl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yh.distanceTo(bh);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y_ extends Zl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ad extends _n{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mh=new Le,El=new po,Ir=new xn,Lr=new T;class K_ extends ht{constructor(e=new Ft,t=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Mh.copy(i).invert(),El.copy(e.ray).applyMatrix4(Mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Lr.fromBufferAttribute(u,m),Sh(Lr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Lr.fromBufferAttribute(u,g),Sh(Lr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sh(s,e,t,n,i,r,o){const a=El.distanceSqToPoint(s);if(a<t){const l=new T;El.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ho extends Ft{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new T,g=new He;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,x=M+n+1,k=M+n+2,A=M+1;a.push(S,x,A),a.push(x,k,A)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gs extends _n{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yn extends gs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function J_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ld(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Q_ extends ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qi,endingEnd:Qi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case es:r=e,a=2*t-n;break;case oo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case es:o=e,l=2*n-t;break;case oo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let k=0;k!==a;++k)r[k]=p*o[h+k]+M*o[c+k]+S*o[l+k]+x*o[u+k];return r}}class cd extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class ev extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ev(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Q_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Z_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Qs;class Ss extends bn{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Js;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class hd extends bn{}hd.prototype.ValueTypeName="color";class _s extends bn{}_s.prototype.ValueTypeName="number";class tv extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Yt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class vs extends bn{InterpolantFactoryMethodLinear(e){return new tv(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends bn{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Js;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends bn{}xs.prototype.ValueTypeName="vector";class Tl{constructor(e="",t=-1,n=[],i=Wl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=J_(l);l=wh(l,1,h),c=wh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new _s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];ld(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new _s(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(xs,f+".position",d,"pos",i),n(vs,f+".quaternion",d,"rot",i),n(xs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return hd;case"quaternion":return vs;case"bool":case"boolean":return Ss;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nv(s.type);if(s.times===void 0){const t=[],n=[];ld(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class sv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const rv=new sv;class Es{constructor(e){this.manager=e!==void 0?e:rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class ov extends Error{constructor(e,t){super(e),this.response=t}}class ud extends Es{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Cn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:S,value:x})=>{if(S)p.close();else{_+=x.byteLength;const k=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,R=h.length;A<R;A++){const N=h[A];N.onProgress&&N.onProgress(k)}p.enqueue(x),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new ov(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ii.add(e,c);const h=Cn[e];delete Cn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Cn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class av extends Es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ii.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=er("img");function l(){h(),ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class lv extends Es{constructor(e){super(e)}load(e,t,n,i){const r=new yt,o=new av(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class vo extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cv extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qo=new Le,Eh=new T,Th=new T;class Jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hv extends Jl{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uv extends vo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ah=new Le,ks=new T,ea=new T;class dv extends Jl{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),ea.copy(n.position),ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ea),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}}class Ql extends vo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fv extends Jl{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dd extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $s{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pv extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ii.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(e,l),r.manager.itemStart(e)}}class mv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rh(){return performance.now()}class gv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,o,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const ec="\\[\\]\\.:\\/",_v=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",vv="[^"+ec.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",tc),yv=/(WCOD+)?/.source.replace("WCOD",vv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),Mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),Sv=new RegExp("^"+xv+yv+bv+Mv+"$"),wv=["material","materials","bones","map"];class Ev{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(e){const t=Sv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);wv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=Ev;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Qi,endingEnd:Qi};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case nf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Wl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===tf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ku){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=es,i.endingEnd=es):(e?i.endingStart=this.zeroSlopeAtStart?es:Qi:i.endingStart=oo,t?i.endingEnd=this.zeroSlopeAtEnd?es:Qi:i.endingEnd=oo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Av=new Float32Array(1);class Ch extends Ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new gv(Je.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new cd(new Float32Array(2),new Float32Array(2),1,Av),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Tl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Tv(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Tl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);function Rv(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ft;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Ih(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Ih(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ih(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new bt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Lh(s,e){if(e===sf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yl||e===Fu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===yl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Cv extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new $v(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=$s.extractUrlBase(e);o=$s.resolveURL(c,this.path)}else o=$s.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ud(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fd){try{o[Be.KHR_BINARY_GLTF]=new Yv(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Be.KHR_MATERIALS_UNLIT:o[u]=new Pv;break;case Be.KHR_DRACO_MESH_COMPRESSION:o[u]=new Kv(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:o[u]=new Zv;break;case Be.KHR_MESH_QUANTIZATION:o[u]=new Jv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Iv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Lv{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],kt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new dd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ql(h),c.distance=u;break;case"spot":c=new uv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Nn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Pv{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}}class Dv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Nv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}}class kv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Uv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Fv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ov{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Bv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],kt),Promise.all(r)}}class zv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Hv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}}class Vv{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Gv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Wv{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Xv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jv{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class $v{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==jt.TRIANGLES&&c.mode!==jt.TRIANGLE_STRIP&&c.mode!==jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Le,m=new T,p=new Yt,M=new T(1,1,1),S=new $_(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,_.compose(m,p,M));for(const x in l)if(x==="_COLOR_0"){const k=l[x];S.instanceColor=new wl(k.array,k.itemSize,k.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const fd="glTF",Us=12,Ph={JSON:1313821514,BIN:5130562};class Yv{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Us,r=new DataView(e,Us);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ph.JSON){const c=new Uint8Array(e,Us+o,a);this.content=n.decode(c)}else if(l===Ph.BIN){const c=Us+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Kv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Al[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Al[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=os[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,kt,d)})})}}class Zv{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Jv{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class pd extends ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,S=p-d+u;for(let x=0;x!==a;x++){const k=o[_+x+a],A=o[_+x+l]*h,R=o[g+x+a],N=o[g+x]*h;r[x]=M*k+S*A+m*R+p*N}return r}}const Qv=new Yt;class ex extends pd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Qv.fromArray(r).normalize().toArray(r),r}}const jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dh={9728:Nt,9729:Ht,9984:Eu,9985:Yr,9986:Gs,9987:Un},Nh={33071:ti,33648:ro,10497:us},ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tx={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Js},na={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Nn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ix(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function sx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rx(s){let e;const t=s.extensions&&s.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ia(t.attributes):e=s.indices+":"+ia(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ia(s.targets[n]);return e}function ia(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Rl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ox(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ax=new Le;class lx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Iv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new lv(this.options.manager):this.textureLoader=new pv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ud(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mi(r,a,i),Nn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load($s.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ta[i.type],a=os[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new bt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ta[i.type],c=os[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(M);S||(_=new c(a,p*f,i.count*f/h),S=new W_(_,f/h),t.cache.add(M,S)),m=new Yl(S,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new bt(_,l,g);if(i.sparse!==void 0){const p=ta.SCALAR,M=os[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,k=new M(o[1],S,i.sparse.count*p),A=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,N=k.length;R<N;R++){const w=k[R];if(m.setX(w,A[R*l]),l>=2&&m.setY(w,A[R*l+1]),l>=3&&m.setZ(w,A[R*l+2]),l>=4&&m.setW(w,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Dh[d.magFilter]||Ht,h.minFilter=Dh[d.minFilter]||Un,h.wrapS=Nh[d.wrapS]||us,h.wrapT=Nh[d.wrapT]||us,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new yt(_);m.needsUpdate=!0,d(m)}),t.load($s.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Nn(u,o),u.userData.mimeType=o.mimeType||ox(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ad,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Kl,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){const u=i[Be.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);const h=r.alphaMode||na.OPAQUE;if(h===na.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===na.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==mn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mn){const u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&o!==mn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Nn(u,r),t.associations.set(u,{materials:e}),r.extensions&&mi(i,u,r),u})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return kh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=rx(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=kh(new Ft,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?nx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const M=c[f];if(m.mode===jt.TRIANGLES||m.mode===jt.TRIANGLE_STRIP||m.mode===jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new id(_,M):new nt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===jt.TRIANGLE_STRIP?p.geometry=Lh(p.geometry,Fu):m.mode===jt.TRIANGLE_FAN&&(p.geometry=Lh(p.geometry,yl));else if(m.mode===jt.LINES)p=new od(_,M);else if(m.mode===jt.LINE_STRIP)p=new Zl(_,M);else if(m.mode===jt.LINE_LOOP)p=new Y_(_,M);else if(m.mode===jt.POINTS)p=new K_(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Nn(p,r),m.extensions&&mi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&mi(i,u[0],r),u[0];const d=new ni;r.extensions&&mi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(Vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Nn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Le;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _o(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,S=d.length;M<S;M++){const x=d[M],k=f[M],A=g[M],R=_[M],N=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=n._createAnimationTracks(x,k,A,R,N);if(w)for(let b=0;b<w.length;b++)p.push(w[b])}return new Tl(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ax)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new sd:c.length>1?h=new ni:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Nn(h,r),r.extensions&&mi(n,h,r),r.matrix!==void 0){const u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ni;n.name&&(r.name=i.createUniqueName(n.name)),Nn(r,n),n.extensions&&mi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof _n||d instanceof yt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Kn[r.path]===Kn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Kn[r.path]){case Kn.weights:c=_s;break;case Kn.rotation:c=vs;break;case Kn.position:case Kn.scale:c=xs;break;default:switch(n.itemSize){case 1:c=_s;break;case 2:case 3:default:c=xs;break}break}const h=i.interpolation!==void 0?tx[i.interpolation]:Qs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Kn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vs?ex:pd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cx(s,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),a.normalized){const h=Rl(os[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new T,l=new T;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Rl(os[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function kh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Al[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ze.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),Nn(s,e),cx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ix(s,e.targets,t):s})}function sa(s){return s.traverse(e=>{const t=e;if(!t.isMesh)return;const n=t.material;t.castShadow=!n.transparent,t.receiveShadow=!0,n.transparent&&(n.depthWrite=!1),n.map&&(n.map.anisotropy=8)}),s}function hx(s){const e=a=>a.isSkinnedMesh,t=[];s.traverse(a=>{const l=a.children.length>0&&a.children.every(e),c=e(a)&&!a.parent.children.every(e);(l||c)&&t.push(a)});const n=new Map,i=a=>e(a)?[a]:a.children;for(const a of t){const l=i(a);n.set(a.name,{geometry:Rv(l.map(c=>c.geometry)),runs:l.map(c=>{const h=c.material;return{material:h.name,color:h.color,count:c.geometry.getAttribute("position").count}})})}const r=i(t[0])[0],o={root:s,mount:t[0].parent.name,bones:r.skeleton.bones.map(a=>a.name),inverses:r.skeleton.boneInverses,bindMatrix:r.bindMatrix.clone(),skins:n,material:new gs({vertexColors:!0,roughness:.85})};for(const a of t)a.removeFromParent();return o}class Ys{constructor(e,t,n,i){this.loader=e,this.props=t,this.rig=n,this.clips=i}levels=new Map;static url(e){return`./models/${e}.glb`}static async load(){const e=new Cv,[t,n]=await Promise.all(["props","character"].map(o=>e.loadAsync(Ys.url(o))));for(const o of n.animations)o.tracks=o.tracks.filter(a=>!a.name.endsWith(".scale"));const i=new Map(n.animations.map(o=>[o.name,o])),r=hx(n.scene);return sa(r.root),new Ys(e,sa(t.scene),r,i)}level(e){let t=this.levels.get(e);return t||(t=this.loader.loadAsync(Ys.url(`level_${e}`)).then(n=>sa(n.scene)),this.levels.set(e,t)),t}}const ux=["mop","plunger","brush","rag","roll","sign","phone","cane","stick","clipboard","cig","bag","bottle"],dx={sleeves:"shirt",forearms:"skin",shins:"pants",hands:"skin"},Uh=["position","normal","skinIndex","skinWeight"],ra=new Map;class ys{constructor(e,t){this.assets=e;const{rig:n}=e;this.root=n.root.clone();const i=n.bones.map(o=>this.root.getObjectByName(o));this.skeleton=new _o(i,n.inverses),this.mixer=new Ch(this.root);for(const o of ux){const a=this.root.getObjectByName(`tool_${o}`);a.visible=!1,this.tools.set(o,a)}const r=this.root.getObjectByName(n.mount);for(const o of["body",...t.wear])this.skins.push(this.skin(o,t.colors));if(r.add(...this.skins),t.build){const{width:o,height:a,depth:l=o,head:c}=t.build;this.root.scale.set(o,a,l),this.root.getObjectByName("head").scale.setScalar(c),this.headScale=c}}root;skeleton;mixer;actions=new Map;current="";get clip(){return this.current}tools=new Map;skins=[];headScale=1;painted=[];skin(e,t){const{rig:n}=this.assets,i=n.skins.get(e);if(!i)throw new Error(`character.glb has no skin named ${e}`);const r=new Float32Array(i.geometry.getAttribute("position").count*3),o=new Te;let a=0;for(const h of i.runs){const u=h.material,d=t[u]??t[dx[u]??u],f=d===void 0?h.color:o.setHex(d);for(let g=0;g<h.count;g++,a+=3)r.set([f.r,f.g,f.b],a)}const l=new Ft;for(const h of Uh)l.setAttribute(h,i.geometry.getAttribute(h));l.setIndex(i.geometry.index),l.setAttribute("color",new bt(r,3)),this.painted.push(l);const c=new id(l,n.material);return c.name=e,c.bind(this.skeleton,n.bindMatrix),c.castShadow=c.receiveShadow=!0,c.frustumCulled=!1,c}dress(e){const t=this.skins[0].parent;t.remove(...this.skins);for(const n of this.painted)n.dispose();this.painted.length=0,this.skins=["body",...e.wear].map(n=>this.skin(n,e.colors)),t.add(...this.skins)}play(e,{speed:t=1,once:n=!1,fade:i=.16}={}){if(e===this.current&&!n){this.actions.get(e).timeScale=t;return}let r=this.actions.get(e);if(!r){const a=this.assets.clips.get(e);if(!a)throw new Error(`character.glb has no clip named ${e}`);r=this.mixer.clipAction(a),this.actions.set(e,r)}const o=this.actions.get(this.current);r.reset(),r.timeScale=t,r.setLoop(n?ku:Uu,1/0),r.clampWhenFinished=n,o&&o!==r&&r.crossFadeFrom(o,i,!1),r.play(),this.current=e}extent(e){const t=o=>`${o}|${e}|${this.headScale}`;this.skins.some(o=>!ra.has(t(o.name)))&&this.measure(e,t);const n={side:0,front:0,back:0,round:0};for(const o of this.skins){const a=ra.get(t(o.name));n.side=Math.max(n.side,a.side),n.front=Math.max(n.front,a.front),n.back=Math.max(n.back,a.back),n.round=Math.max(n.round,a.round)}const{x:i,z:r}=this.root.scale;return{side:n.side*i,front:n.front*r,back:n.back*r,round:n.round*Math.max(i,r)}}measure(e,t){const n=this.assets.clips.get(e);if(!n)throw new Error(`character.glb has no clip named ${e}`);const i=new Ch(this.root);i.clipAction(n).play();const r=this.root.scale.clone();this.root.scale.setScalar(1);const o=new Le,a=new T,l=this.skins.map(()=>({side:0,front:0,back:0,round:0})),c=Math.max(2,Math.ceil(n.duration/.08));for(let h=0;h<c;h++)i.setTime(n.duration*h/c),this.root.updateMatrixWorld(!0),o.copy(this.root.matrixWorld).invert(),this.skins.forEach((u,d)=>{const f=l[d],{count:g}=u.geometry.getAttribute("position");for(let _=0;_<g;_++)u.getVertexPosition(_,a).applyMatrix4(u.matrixWorld).applyMatrix4(o),f.side=Math.max(f.side,Math.abs(a.x)),f.front=Math.max(f.front,a.z),f.back=Math.max(f.back,-a.z),f.round=Math.max(f.round,Math.hypot(a.x,a.z))});i.stopAllAction(),i.uncacheRoot(this.root),this.root.scale.copy(r),this.skins.forEach((h,u)=>ra.set(t(h.name),l[u]))}hold(e){for(const[t,n]of this.tools)n.visible=t===e}update(e){this.mixer.update(e)}dispose(){this.mixer.stopAllAction(),this.root.removeFromParent(),this.skeleton.dispose();for(const e of this.painted){for(const t of Uh)e.deleteAttribute(t);e.setIndex(null),e.dispose()}}}class fx extends nd{constructor(){super();const e=new bs;e.deleteAttribute("uv");const t=new gs({side:Dt}),n=new gs,i=new Ql(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new nt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new nt(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new nt(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new nt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new nt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new nt(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new nt(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new nt(e,Xi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new nt(e,Xi(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new nt(e,Xi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new nt(e,Xi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new nt(e,Xi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new nt(e,Xi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Xi(s){const e=new mn;return e.color.setScalar(s),e}const px=4,mx=7;class gx{constructor(e,t){this.el=e,this.screen=t,e.innerHTML=`
      <div class="panel shift">
        <div>
          <div class="clock" data-ref="clock"></div>
          <div class="night" data-ref="shift"></div>
        </div>
        <div class="hygiene" data-ref="hygiene">
          <div class="caption">Hygiene <span class="note" data-ref="hygieneNote"></span></div>
          <div class="meter"><div class="fill" data-ref="hygieneFill"></div></div>
        </div>
        <div class="hygiene nerves" data-ref="nerves" title="A smoke by the ashtray outside settles them">
          <div class="caption">Nerves <span class="face"></span></div>
          <div class="meter"><div class="fill" data-ref="nervesFill"></div></div>
        </div>
      </div>
      <div class="panel score">
        <div class="stat" title="Patrons served"><span>😊</span><b data-ref="served"></b></div>
        <div class="stat" title="Made this shift, on top of the wage"><span>💰</span><b data-ref="tips"></b></div>
        <div class="stat" title="Waiting outside"><span>🚶</span><b data-ref="queue"></b></div>
        <div class="strikes" data-ref="strikes" title="Complaints"></div>
      </div>
      <div class="banner" data-ref="banner"></div>
      <div class="hint" data-ref="hint"></div>
      <div class="panel hand"><span class="caption">In hand</span><b data-ref="hand"></b></div>
      <div class="prompt" data-ref="prompt"></div>`;const n=i=>e.querySelector(`[data-ref="${i}"]`);this.clock=n("clock"),this.shift=n("shift"),this.served=n("served"),this.tips=n("tips"),this.strikes=n("strikes"),this.hygiene=n("hygiene"),this.hygieneFill=n("hygieneFill"),this.hygieneNote=n("hygieneNote"),this.nerves=n("nerves"),this.nervesFill=n("nervesFill"),this.queue=n("queue"),this.prompt=n("prompt"),this.hand=n("hand"),this.banner=n("banner"),this.hint=n("hint")}clock;shift;served;tips;strikes;hygiene;hygieneFill;hygieneNote;nerves;nervesFill;queue;prompt;hand;banner;hint;lastStrikes="";bannerTimer=0;hintTimer=0;dismiss=()=>{};touch=!1;update(e){this.clock.textContent=e.clock,this.shift.textContent=e.shift,this.served.textContent=String(e.served),this.tips.textContent=`$${e.tips}`,this.queue.textContent=String(e.queue),this.hygieneFill.style.width=`${e.hygiene}%`,this.hygieneNote.textContent!==e.hygieneNote&&(this.hygieneNote.textContent=e.hygieneNote),this.hygiene.dataset.level=e.hygieneLevel,this.nervesFill.style.width=`${e.stress}%`,this.nerves.dataset.level=e.stress<60?"good":e.stress<85?"poor":"bad";const t=`${e.strikes}/${e.maxStrikes}`;if(t!==this.lastStrikes){const n=e.strikes>Number(this.lastStrikes.split("/")[0]);this.lastStrikes=t,this.strikes.innerHTML=Array.from({length:e.maxStrikes},(i,r)=>`<i class="${r<e.strikes?"on":""}"></i>`).join(""),n&&(this.strikes.classList.remove("shake"),this.strikes.offsetWidth,this.strikes.classList.add("shake"))}this.hand.innerHTML!==e.hand&&(this.hand.innerHTML=e.hand),this.prompt.innerHTML=e.prompt,this.prompt.classList.toggle("show",e.prompt!=="")}set visible(e){this.el.classList.toggle("show",e)}announce(e){this.banner.textContent=e,this.banner.classList.add("show"),window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>this.banner.classList.remove("show"),px*1e3)}advise(e){this.hint.textContent=`💡 ${e}`,this.hint.classList.add("show"),window.clearTimeout(this.hintTimer),this.hintTimer=window.setTimeout(()=>this.hint.classList.remove("show"),mx*1e3)}showSplash(e){const t=()=>{this.close(),e()};this.open(`<div class="splash">
         <div class="neon">
           <div class="zh">公廁</div>
           <h1>Public Toilet</h1>
         </div>
         <p class="strap">Lan Kwai Fong, the night shift. Somebody has to.</p>
         <p class="go">${this.touch?"Tap to start":"Click or press any key"}</p>
         <p class="sound">🎵 Sound on &nbsp;·&nbsp; ${this.touch?"pause to turn it off":"<kbd>M</kbd> mutes"}</p>
       </div>`,n=>{/^(Shift|Control|Alt|Meta|Tab|CapsLock|F\d+)$/.test(n.key)||t()}),this.screen.querySelector(".splash").addEventListener("click",t)}showMenu(e,t,n,i,r){const o=h=>{this.close(),n(h)},a=e.flatMap(h=>h.open?h.items:[]),l=(h,u)=>{const d=a.indexOf(h)+1;return`
        <button type="button" class="shift-card" data-id="${h.id}" ${u?"disabled":""}>
          ${u?'<span class="num">🔒</span>':d<=9?`<span class="num">${d}</span>`:""}
          <span class="zh">${h.zh}</span>
          <b>${h.name}</b>
          <span class="where">${h.where}</span>
          <span class="blurb">${h.blurb}</span>
          <span class="best">${h.best}</span>
        </button>`},c=e.map(h=>`
        <section class="venue ${h.open?"":"locked"}">
          <header>
            <span class="zh">${h.zh}</span>
            <div class="name"><b>${h.title}</b><span>${h.blurb}</span></div>
            <div class="terms"><b>${h.pay}</b><span>${h.stars}</span></div>
          </header>
          ${h.open?"":`<p class="wanted">🔒 They'll take you on with ${h.wanted.map(u=>`<span class="${u.have>=u.need?"met":""}">${u.what} <b>${Math.min(u.have,u.need)}/${u.need}</b></span>`).join("")}</p>`}
          <div class="shifts">${h.items.map(u=>l(u,!h.open)).join("")}</div>
        </section>`);this.open(`<div class="menu">
         <div class="masthead">
           <div class="zh">公廁</div>
           <div>
             <h1>Public Toilet</h1>
             <p class="tag">Start on the street in Lan Kwai Fong. Earn your way up to a better class of toilet.</p>
           </div>
           <button type="button" class="cupboard" data-shop>🧰 Supply cupboard<small>$${t} in the bank</small></button>
         </div>
         ${r?`<button type="button" class="continue" data-resume><span>▶ Carry on where you left off</span><b>${r.label}</b></button>`:""}
         ${c.join("")}
         <p class="how">
           ${this.touch?"Left thumb anywhere to walk &nbsp;·&nbsp; hold <kbd>A</kbd> to work &nbsp;·&nbsp; tap <kbd>B</kbd> to take a tool or put one down &nbsp;·&nbsp; ⏸ pause":`<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> walk &nbsp;·&nbsp; <kbd>E</kbd> or right click to take a tool
           &nbsp;·&nbsp; hold <kbd>Space</kbd> or the left button to use it &nbsp;·&nbsp; <kbd>Esc</kbd> pause &nbsp;·&nbsp; <kbd>M</kbd> mute`}
           <br />🧹 mop for the floor &nbsp; 🪥 brush for toilets &nbsp; 🧽 rag for basins and urinals &nbsp; 🪠 plunger
           for blockages &nbsp; 🧻 rolls for empty holders
           <br />Nobody will use a blocked or filthy fixture, so the queue backs up. Too many complaints and the
           inspector shuts you down.
         </p>
       </div>`,h=>{const u=a[Number(h.key)-1];u&&o(u.id)});for(const h of this.screen.querySelectorAll(".shift-card"))h.addEventListener("click",()=>o(h.dataset.id));this.screen.querySelector("[data-shop]").addEventListener("click",()=>{this.close(),i()}),this.screen.querySelector("[data-resume]")?.addEventListener("click",()=>{this.close(),r.run()})}showShop(e,t,n,i){const r=()=>{this.close(),i()},o=l=>`
        <button type="button" class="upgrade ${l.owned?"owned":""}" data-id="${l.id}"
                ${l.owned||l.locked||l.cost>t?"disabled":""}>
          <span class="icon">${l.icon}</span>
          <span class="what"><b>${l.name}</b><span>${l.locked&&!l.owned?`🔒 ${l.locked}`:l.blurb}</span></span>
          <span class="cost">${l.owned?"✓ yours":`$${l.cost}`}</span>
        </button>`,a=(l,c)=>{const h=e.filter(u=>u.kind===c);return`<h2>${l} <small>${h.filter(u=>u.owned).length} of ${h.length}</small></h2>
              <div class="upgrades">${h.map(o).join("")}</div>`};this.open(`<div class="menu shop">
         <div class="masthead">
           <div class="zh">🧰</div>
           <div>
             <h1>Supply cupboard</h1>
             <p class="tag">In the bank: <b>$${t}</b>. What you buy, you keep, and a better class of toilet wants to see it.</p>
           </div>
         </div>
         ${a("Gear","gear")}
         ${a("Helpers","helper")}
         <div class="actions"><button type="button" data-done>Done</button></div>
       </div>`,l=>{(l.code==="Enter"||l.code==="Escape")&&r()});for(const l of this.screen.querySelectorAll(".upgrade"))l.addEventListener("click",()=>n(l.dataset.id));this.screen.querySelector("[data-done]").addEventListener("click",r)}showCard(e,t){const n=i=>{this.close(),i.run()};this.open(`<div class="card">
         <h1>${e.title}</h1>
         <p class="tag">${e.subtitle}</p>
         <table class="tally">${e.lines.map(([i,r])=>`<tr><td>${i}</td><td>${r}</td></tr>`).join("")}</table>
         <div class="actions">${t.map((i,r)=>`<button type="button" class="${r?"quiet":""}">${i.label}</button>`).join("")}</div>
       </div>`,i=>{i.code==="Enter"&&n(t[0])}),this.screen.querySelectorAll("button").forEach((i,r)=>i.addEventListener("click",()=>n(t[r])))}open(e,t){this.close(),this.screen.innerHTML=e,this.screen.classList.add("show");const n=i=>{i.repeat||t(i)};addEventListener("keydown",n),this.dismiss=()=>removeEventListener("keydown",n)}close(){this.dismiss(),this.dismiss=()=>{},this.screen.classList.remove("show")}}class _x{constructor(e,t,n,i){this.anchor=e,this.height=t,this.el.className=`label ${n}`,this.el.innerHTML=i}el=document.createElement("div");life=1/0;age=0;rise=0;removed=!1;set html(e){this.el.innerHTML!==e&&(this.el.innerHTML=e)}remove(){this.removed=!0,this.el.remove()}}class vx{constructor(e,t){this.el=e,this.camera=t}labels=new Set;point=new T;add(e,t,n,i){const r=new _x(e,t,n,i);return this.labels.add(r),this.el.append(r.el),r}pop(e,t,n,i="",r=1.4){const o=this.add(e,t,`pop ${i}`,n);return o.life=r,o.rise=.5,o.el.style.animationDuration=`${r}s`,o}clear(){for(const e of this.labels)e.remove();this.labels.clear()}update(e){const t=this.el.clientWidth,n=this.el.clientHeight;for(const i of this.labels){if(i.age+=e,i.removed||i.age>i.life){i.remove(),this.labels.delete(i);continue}this.point.copy(i.anchor),this.point.y+=i.height+i.rise*i.age,this.point.project(this.camera);const r=(this.point.x*.5+.5)*t,o=(-this.point.y*.5+.5)*n;i.el.style.transform=`translate(-50%, -50%) translate(${r.toFixed(1)}px, ${o.toFixed(1)}px)`}}}const gi={radius:46,dead:.16,full:.72},Fh=54,oa=s=>s.pointerType!=="mouse";class xx{constructor(e,t,n){this.el=e,this.input=t,e.innerHTML=`
      <div class="pad" data-ref="pad"></div>
      <div class="stick" data-ref="stick"><i data-ref="knob"></i></div>
      <button type="button" class="tb pause" data-ref="pause" aria-label="Pause">⏸</button>
      <button type="button" class="tb swap" data-ref="swap" aria-label="Swap with the tool belt"><span></span><b>⇄</b></button>
      <button type="button" class="tb take" data-ref="take" aria-label="Take, or put down"><span></span><b>B</b></button>
      <button type="button" class="tb use" data-ref="use" aria-label="Use: hold"><span></span><b>A</b></button>`;const i=a=>e.querySelector(`[data-ref="${a}"]`);this.stick=i("stick"),this.knob=i("knob"),this.use=i("use"),this.take=i("take"),this.swap=i("swap"),this.coarse&&(t.touch=!0);const r=i("pad");r.addEventListener("pointerdown",a=>{if(!(!oa(a)||this.steering!==null)){a.preventDefault(),this.steering=a.pointerId,this.origin.x=Math.max(Fh,a.clientX),this.origin.y=Math.min(innerHeight-Fh,a.clientY),this.stick.style.translate=`${this.origin.x}px ${this.origin.y}px`,this.stick.classList.add("on");try{r.setPointerCapture(a.pointerId)}catch{}this.lean(a)}}),r.addEventListener("pointermove",a=>{a.pointerId===this.steering&&this.lean(a)});const o=a=>{a.pointerId===this.steering&&(this.steering=null,this.stick.classList.remove("on"),this.knob.style.translate="",t.steer(null))};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),this.button(this.use,"Space"),this.button(this.take,"KeyE"),this.button(this.swap,"KeyQ"),i("pause").addEventListener("click",n),addEventListener("pointerdown",a=>{oa(a)&&t.fingered()},!0)}stick;knob;use;take;swap;steering=null;origin={x:0,y:0};shown={live:!1,use:"?",take:"?",swap:"?"};coarse=matchMedia("(pointer: coarse)").matches;button(e,t){let n=null;e.addEventListener("pointerdown",r=>{if(!(!oa(r)||n!==null)){r.preventDefault(),n=r.pointerId,e.classList.add("down"),this.input.press(t);try{e.setPointerCapture(r.pointerId)}catch{}}});const i=r=>{r.pointerId===n&&(n=null,e.classList.remove("down"),this.input.release(t))};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("contextmenu",r=>r.preventDefault())}lean(e){const t=e.clientX-this.origin.x,n=e.clientY-this.origin.y,i=Math.hypot(t,n),r=Math.min(1,i/gi.radius),o=r<=gi.dead?0:Math.min(1,(r-gi.dead)/(gi.full-gi.dead)),[a,l]=i>0?[t/i,n/i]:[0,0];this.knob.style.translate=`${a*r*gi.radius}px ${l*r*gi.radius}px`,this.input.steer({x:a*o,z:l*o})}update(e){const{el:t,shown:n}=this;t.classList.toggle("on",this.input.touch),document.body.classList.toggle("thumbs",this.input.touch),e.live!==n.live&&(t.classList.toggle("live",e.live),!e.live&&this.steering!==null&&(this.steering=null,this.stick.classList.remove("on"),this.input.steer(null)));const i=(r,o,a)=>{o!==a&&(r.querySelector("span").textContent=o??"",r.classList.toggle("idle",!o),r.classList.toggle("none",o===null))};i(this.use,e.use,n.use),i(this.take,e.take,n.take),i(this.swap,e.swap,n.swap),this.shown={...e}}}const no={holds:10,bagFrom:.7,sunk:.42};class yx{constructor(e,t,n,i,r){this.name=e,this.pos=t,this.room=n,this.stand=i,this.heap=r,this.rest=r.position.y,this.refresh()}fill=0;work=0;holds=no.holds;user=null;rest;get share(){return this.fill/this.holds}get full(){return this.fill>=this.holds}get ready(){return this.share>=no.bagFrom}get free(){return!this.user||this.user.gone}add(){return this.full?!1:(this.fill++,this.refresh(),!0)}restore(e){this.fill=Math.min(e,this.holds),this.refresh()}empty(){this.fill=this.work=0,this.user=null,this.refresh()}refresh(){this.heap.visible=this.fill>0,this.heap.position.y=this.rest-(1-this.share)*no.sunk}}function ye(s,e){return s+Math.random()*(e-s)}function le(s){return s[Math.floor(Math.random()*s.length)]}function xo(s,e){return Math.atan2(Math.sin(e-s),Math.cos(e-s))}const bx=[16769220,16176051,1578e4,15054991,14263418,13012579,10119751,8016438],Mx=[2760988,1710622,1710622,1710622,4863014,8015658,12161882,14245260,5935065,9425258],nc=[10263708,13224393,15132390,7827562],wt=[15228277,5941734,15909198,8111739,11765995,15896379,5164484,16748459],ic=[16053488,3092280,9279918,7041116,13217191,2508371,10727818,13935475],Sx=[3885667,3092280,7041116,9279918,6049149,2508371,13217191,4865845],wx=[3026483,16053488,11547708,7032634,4161478],Ex=[11547708,3092280,7032634,15909198,15765424,5219946],Rt=16053488,ot=2829104,gn=3095125,Oh=3092280,Tx=15226189,Ax=["hair_a","hair_a","hair_a","hair_c","hair_d","hair_g","hair_h","hair_j","hair_k","hair_k","flat_top",null],Rx=["hair_b","hair_b","hair_c","hair_e","hair_e","hair_f","hair_f","hair_i","hair_g"],kn=["cap_b","beanie","hard_hat","chef_hat","helmet","bandana","cone","witch_hat","party_hat","horns","cat_ears","bunny_ears","antennae"],md=["hair_c","hair_g","hair_h","hair_j","hair_k","flat_top"],Cl=["glasses","sunglasses","beard","moustache","lips"],Ae=s=>Math.random()<s,Zt=(...s)=>le(s);function Mt(s,e,t){for(const n of kn)s.wear.delete(n);s.wear.add(e),s.hair&&md.includes(s.hair)&&(s.hair="hair_a"),t!==void 0&&(s.accents.hat=t)}function Dr(s,e){for(const t of[...kn,...Cl])s.wear.delete(t);s.wear.add(e),s.hair=null}function Ei(s,e,t=Ae(.5)?"bare":"tights"){s.wear.add("skirt"),s.accents.skirt=e,s.legs=t}function si(s,e){s.wear.add("jacket"),s.accents.jacket=e}const Bh=(s,e)=>{Ae(.3)&&s.wear.add("logo"),e==="f"?(Ae(.5)?Ei(s,le([...wt,ot,Rt])):Ae(.3)&&(s.legs="shorts"),Ae(.4)&&s.wear.add("bag"),Ae(.15)&&Mt(s,Zt("cap_b","beanie"),le(wt))):(Ae(.25)&&(s.legs="shorts"),Ae(.18)&&Mt(s,Zt("cap_b","beanie"),le([...wt,ot])),Ae(.12)&&s.wear.add("backpack"))},Il=(s,e)=>{s.shirt=le([Rt,Rt,13623538,15914716]),s.sleeves="long",s.pants=le([gn,ot,4868690]),s.shoes=ot,Ae(.55)&&si(s,le([gn,ot,4868690,7035466])),Ae(.4)&&s.wear.add("glasses"),e==="f"?(s.hair=Zt("hair_b","hair_c","hair_e"),Ae(.5)&&Ei(s,s.pants,"tights"),Ae(.6)&&s.wear.add("bag")):(s.hair=Zt("hair_a","hair_k","hair_d"),Ae(.7)&&s.wear.add("tie"))},zh=(s,e)=>{s.shirt=le(wt),Ae(.25)&&s.wear.add("sunglasses"),e==="f"?(Ei(s,s.shirt,Ae(.7)?"bare":"tights"),s.sleeves=le(["none","none","short"]),Ae(.6)&&s.wear.add("bag")):(s.hair=Zt("hair_j","hair_h","hair_k","hair_a","hair_g"),s.sleeves=le(["none","short","short"]),s.pants=le([ot,3885667,Rt]),Ae(.3)&&s.wear.add("logo"))},Hh=s=>{s.wear.add("backpack"),s.wear.add("logo"),s.legs=Ae(.7)?"shorts":"long",s.sleeves="short",Ae(.55)&&Mt(s,"cap_b",le(wt)),Ae(.25)&&s.wear.add("sunglasses")},Cx=s=>{s.hair=Zt("hair_d","hair_d","flat_top","hair_a",null),s.hairColor=le([...nc,1710622]),s.shirt=le(ic),s.sleeves="short",s.legs=Ae(.6)?"shorts":"long",s.build.width*=ye(1.05,1.18),Ae(.5)&&s.wear.add("moustache"),Ae(.35)&&s.wear.add("glasses")},Ix=s=>{s.hair=Zt("hair_c","hair_g","hair_b"),s.hairColor=le([1710622,4863014,...nc]),s.shirt=le([...ic,14248570,11765995]),s.sleeves="long",Ae(.5)&&si(s,le([14248570,8111739,11765995,13217191])),Ae(.7)&&s.wear.add("bag"),Ae(.3)&&s.wear.add("glasses"),s.build.width*=ye(1,1.12)},Lx=s=>{Mt(s,"hard_hat"),s.wear.add("vest"),s.shirt=le([9279918,7041116,gn]),s.sleeves=le(["short","long"]),s.pants=le([gn,4865845]),s.shoes=7032634},Px=s=>{Mt(s,"chef_hat"),s.wear.add("apron"),s.accents.apron=Rt,s.shirt=Rt,s.sleeves="long",s.pants=4868690},Vh=s=>{const e=le([5164484,15765424,15896379,8111739]);Mt(s,"helmet",e),s.wear.add("box_bag"),s.accents.bag=e,s.shirt=e,s.sleeves="long",s.legs="long"},Gh=s=>{s.wear.add("stripes"),s.shirt=le(wt),s.accents.stripe=le([Rt,ot,15909198]),s.sleeves="short",s.legs="shorts",Ae(.3)&&Mt(s,Zt("cap_b","bandana"),le(wt))},Dx={m:[[40,Bh],[16,Il],[12,zh],[8,Hh],[9,Cx],[3,Lx],[2,Px],[4,Vh],[6,Gh]],f:[[38,Bh],[15,Il],[22,zh],[8,Hh],[9,Ix],[3,Vh],[5,Gh]]};function Nx(s){let e=Math.random()*s.reduce((t,[n])=>t+n,0);for(const[t,n]of s)if(e-=t,e<=0)return n;return s[s.length-1][1]}const Ll={witch:(s,e)=>{Mt(s,"witch_hat"),s.shirt=4008533,s.sleeves="long",e==="f"?Ei(s,ot,"tights"):s.pants=ot},devil:s=>{Mt(s,"horns"),s.wear.add("tail_devil"),s.skin=14042429,s.shirt=s.pants=ot},cat:s=>{Mt(s,"cat_ears"),s.wear.add("tail_cat"),s.shirt=s.pants=ot,s.sleeves="long",s.legs="long",s.wear.delete("skirt")},pumpkin:s=>{Dr(s,"pumpkin"),s.shirt=le([5219946,ot,15761451])},ghost:s=>Dr(s,"ghost"),skeleton:s=>{Dr(s,"skull"),s.wear.add("ribs");for(const e of["skirt","jacket","logo","stripes","tie"])s.wear.delete(e);s.shirt=s.pants=s.shoes=ot,s.accents.hands=15722970,s.sleeves="long",s.legs="long"},vampire:s=>{for(const e of kn)s.wear.delete(e);s.hair="hair_k",s.hairColor=1710622,s.skin=15328496,s.wear.add("cape"),s.wear.add("bowtie"),s.accents.cape=2367532,s.accents.tie=11547708,s.shirt=Rt,s.sleeves="long",s.pants=ot,s.legs="long"},zombie:s=>{s.skin=9420666,s.accents.cheek=6262613,s.shirt=le([8028010,9075306,6978186]),s.wear.delete("lips")},mummy:s=>{Dr(s,"bandages");for(const e of["skirt","jacket","logo","stripes","tie","bag"])s.wear.delete(e);s.skin=s.shirt=s.pants=s.shoes=15327951,s.sleeves="long",s.legs="long"},monster:s=>{for(const e of kn)s.wear.delete(e);s.hair="flat_top",s.hairColor=1710622,s.skin=9420666,s.wear.add("bolts"),si(s,3816002),s.pants=ot},angel:(s,e)=>{for(const t of kn)s.wear.delete(t);s.wear.add("halo"),s.wear.add("wings"),s.shirt=Rt,s.sleeves="long",e==="f"?Ei(s,Rt,"bare"):s.pants=Rt},superhero:s=>{const[e,t]=le([[3104680,13124922],[13124922,15909198],[2829104,15909198],[5219946,11765995]]);for(const n of Cl)s.wear.delete(n);for(const n of["cape","eye_mask","logo"])s.wear.add(n);s.wear.delete("skirt"),s.shirt=s.pants=e,s.accents.cape=s.accents.logo=t,s.sleeves="long",s.legs="long"},pirate:s=>{Mt(s,"bandana",le([13124922,ot])),s.wear.delete("glasses"),s.wear.delete("sunglasses"),s.wear.add("eye_patch"),s.wear.add("stripes"),s.shirt=Rt,s.accents.stripe=le([13124922,gn]),s.pants=ot},clown:s=>{for(const e of kn)s.wear.delete(e);s.hair="hair_g",s.hairColor=le([15228277,5941734,8111739,15896379,11765995]),s.skin=16249322,s.accents.cheek=15228277,s.wear.add("clown_nose"),s.wear.add("bowtie"),s.accents.tie=le(wt),s.shirt=le(wt),s.pants=le(wt)},bunny:s=>{Mt(s,"bunny_ears"),s.shirt=le([Rt,16748459])},alien:s=>{Mt(s,"antennae"),s.hair=null,s.skin=8116367,s.accents.cheek=5219946,s.shirt=s.pants=12568524,s.sleeves="long",s.legs="long",s.wear.delete("skirt")},slasher:s=>{for(const e of Cl)s.wear.delete(e);s.wear.add("hockey_mask"),si(s,4869946),s.pants=4865845},rugby:s=>{s.wear.add("stripes"),s.shirt=le(wt),s.accents.stripe=le([Rt,ot,15909198]),s.sleeves="short",Ae(.4)&&Mt(s,"cap_b",s.shirt)},party:s=>{Mt(s,"party_hat"),Ae(.5)&&s.wear.add("bowtie"),Ae(.4)&&si(s,le([ot,gn,8007498])),Ae(.3)&&s.wear.add("sunglasses")},raincoat:s=>{for(const e of kn)s.wear.delete(e);s.hair&&md.includes(s.hair)&&(s.hair="hair_a"),s.wear.add("raincoat"),s.accents.coat=le([15909424,15909424,5941734,15228277,14673641,5219946])},formal:(s,e)=>{for(const t of kn)s.wear.delete(t);if(e==="f"){const t=le([ot,gn,8007498,2050624,13214282,11680328]);Ei(s,t,"tights"),s.shirt=t;return}si(s,le([ot,ot,gn,3816004])),s.shirt=Rt,s.pants=ot,s.sleeves="long",s.wear.add(Ae(.5)?"bowtie":"tie")},shopper:s=>{s.wear.delete("bag"),s.wear.add("shopping"),s.accents.bag=le(wt)},cone:s=>Mt(s,"cone")},kx=["witch","devil","cat","pumpkin","ghost","skeleton","vampire","zombie","mummy","monster","angel","superhero","pirate","clown","bunny","alien","slasher"];function gd(s){return{hair:le(s==="f"?Rx:Ax),wear:new Set,skin:le(bx),hairColor:le(Mx),shirt:le([...wt,...ic]),pants:le(Sx),shoes:le(wx),sleeves:le(["short","short","long","none"]),legs:"long",accents:{bag:le(Ex),tie:le([11547708,3104680,ot]),logo:le([Rt,ot,...wt])},build:{width:ye(.92,1.1),height:ye(.94,1.06)*(s==="m"?1.02:.98),head:ye(.95,1.06)}}}function _d(s){const e=[...s.wear];s.hair&&e.push(s.hair);const t=s.wear.has("jacket")?s.accents.jacket??gn:s.shirt,n=s.wear.has("jacket");return{wear:e,build:s.build,colors:{skin:s.skin,hands:s.skin,hair:s.hairColor,shirt:s.shirt,sleeves:s.sleeves==="none"&&!n?s.skin:t,forearms:s.sleeves==="long"||n?t:s.skin,pants:s.legs==="bare"?s.skin:s.legs==="tights"?Oh:s.pants,shins:s.legs==="long"?s.pants:s.legs==="tights"?Oh:s.skin,shoes:s.shoes,...s.accents}}}function vd(s,e,t,n,i=!1){const r=gd(s);if(i?(Il(r,s),si(r,le([gn,ot,4868690])),r.wear.add("tie")):Nx(Dx[s])(r,s),s==="m"&&Ae(.22)&&r.wear.add(Ae(.5)?"beard":"moustache"),s==="f"&&Ae(.45)&&r.wear.add("lips"),!r.wear.has("sunglasses")&&Ae(.15)&&r.wear.add("glasses"),e==="large")r.wear.add("belly"),r.build.width=ye(1.32,1.5);else if(e==="elderly"){r.hair=s==="f"?Zt("hair_c","hair_g","hair_b"):Zt("hair_d","hair_d","flat_top",null),r.hairColor=le(nc);for(const o of kn)r.wear.delete(o);r.sleeves="long",r.legs=r.wear.has("skirt")?"tights":"long",r.build.height=ye(.88,.95),Ae(.5)&&r.wear.add("glasses"),Ae(.5)&&si(r,le([13217191,9279918,10727818,14248570]))}else e==="blind"?(r.wear.delete("glasses"),r.wear.add("sunglasses")):e==="wheelchair"&&(r.wear.add("wheelchair"),r.wear.delete("backpack"),r.wear.delete("box_bag"));if(!i&&n&&Ae(n.share)?Ll[le(n.of)](r,s):t&&Ae(.05)&&Ll.cone(r),e==="wheelchair")for(const o of["raincoat","ghost","cape","wings","tail_devil","tail_cat"])r.wear.delete(o);return t&&(r.accents.cheek??=Tx),_d(r)}function Ux(s){const e=Ae(.5)?"f":"m",t=gd(e);return t.hair=e==="f"?Zt("hair_i","hair_b","hair_e"):Zt("hair_a","hair_j","hair_g"),t.shirt=le(wt),t.legs=Ae(.5)?"shorts":"long",e==="f"&&Ae(.5)&&Ei(t,le(wt),"bare"),Ae(.25)&&Mt(t,"cap_b",le(wt)),s&&Ae(s.share)&&Ll[le(s.of)](t,e),t.build={width:ye(.58,.66),height:ye(.56,.64),head:1.28},_d(t)}const as=[{id:"street",grade:1,name:"Lan Kwai Fong",zh:"蘭桂坊",blurb:"Street toilets for the bar crowd. Nobody tips down here: the contractor pays a wage, and the rest is what you find.",needs:null,pay:{wage:70,perStar:15,docked:2,tips:null},standard:{poor:45,foul:20}},{id:"mall",grade:2,name:"Harbour Mall",zh:"海港商場",blurb:"Bigger, brighter, and open all day. Shoppers expect it spotless, and now and then one leaves a coin in the dish.",needs:{stars:5,gear:3,helpers:1},pay:{wage:110,perStar:25,docked:3,tips:{share:.3,most:2}},standard:{poor:55,foul:30}},{id:"hotel",grade:3,name:"The Grand Jade Hotel",zh:"翠玉大酒店",blurb:"Marble, brass, and guests who notice everything. They tip like it, too.",needs:{stars:4,gear:6,helpers:2},pay:{wage:160,perStar:40,docked:5,tips:{share:.45,most:4}},standard:{poor:60,foul:35}}],Fx={spawnEvery:[4.1,3.6,3,2.5,2.1,1.8,1.5,1.4,1.4,1.8,2.5],drunkShare:[.03,.05,.1,.18,.28,.4,.48,.5,.48,.4,.3],messiness:[.8,.85,.9,1,1.05,1.1,1.15,1.15,1.15,1.1,1.05]},ns=[{id:"tuesday",name:"Quiet Tuesday",zh:"平日",blurb:"A weeknight to learn the ropes. Mop, scrub, restock, repeat. Even a Tuesday has its rush.",venue:"street",level:"split",inspector:!1,seconds:300,spawnEvery:[5,4.7,4.4,3.9,3.3,3,2.8,2.8,3,3.6,4.4],drunkShare:[0,.02,.04,.06,.1,.14,.18,.2,.18,.12,.08],messiness:[.8,.8,.85,.85,.9,.9,.95,.95,.95,.9,.9],women:.5},{id:"friday",name:"Friday Night",zh:"星期五",blurb:"The bars fill up, then empty into your toilet. Peaks around 2 AM.",venue:"street",level:"split",seconds:420,...Fx,women:.45,glass:.15},{id:"ladies",name:"Ladies' Night",zh:"女士之夜",blurb:"Six stalls, no urinals, and a queue that never ends. Watch the paper.",venue:"street",level:"womens",seconds:420,spawnEvery:[3.9,3.3,2.8,2.3,1.9,1.5,1.3,1.2,1.3,1.7,2.3],drunkShare:[.03,.06,.1,.16,.24,.32,.4,.42,.4,.32,.25],messiness:[.85,.9,.95,1,1.05,1.1,1.15,1.15,1.15,1.1,1.05],women:1},{id:"sevens",name:"Rugby Sevens",zh:"七人欖球",blurb:"The South Stand has been drinking since noon. Puddles, bottles and worse.",venue:"street",level:"mens",seconds:420,spawnEvery:[3.3,3,2.6,2.3,2,1.7,1.5,1.4,1.5,1.8,2.2],drunkShare:[.25,.3,.35,.45,.5,.55,.6,.6,.55,.5,.45],messiness:[.9,.95,1,1.05,1.1,1.15,1.2,1.2,1.2,1.15,1.1],women:0,costumes:{share:.65,of:["rugby","rugby","rugby","rugby","superhero","clown","bunny","pirate","cone"]},kinds:{family:.01,elderly:.02},surges:[{at:.3,count:16,banner:"🏉 Full time! The stadium empties out"}],glass:.4},{id:"halloween",name:"Halloween",zh:"萬聖節",blurb:"Everyone is in costume and nobody is sober. The crowd doubles at midnight.",venue:"street",level:"split",seconds:420,spawnEvery:[4.1,3.6,3.1,2.7,2.3,1.9,1.7,1.6,1.6,2,2.5],drunkShare:[.05,.1,.18,.28,.38,.48,.55,.55,.5,.42,.35],messiness:[.85,.9,.95,1,1.05,1.1,1.15,1.15,1.15,1.1,1.05],women:.5,costumes:{share:.85,of:kx},kinds:{family:.1},surges:[{at:.5,count:10,banner:"🎃 Midnight on Halloween"}],glass:.25,roaches:1.5},{id:"typhoon",name:"Typhoon No. 8",zh:"八號風球",blurb:"One small shared room for everybody sheltering from the storm. The roof leaks and everyone is dripping.",venue:"street",level:"coed",seconds:360,spawnEvery:[5,4.4,4.4,3.9,3.9,3.3,3.3,3.3,3.6,3.9,4.4],drunkShare:[.02,.04,.06,.08,.1,.12,.14,.14,.12,.1,.08],messiness:[.8,.85,.9,.9,.95,.95,1,1,1,.95,.9],women:.5,leakEvery:5.5,trackWater:.55,rain:!0,roaches:2,costumes:{share:.7,of:["raincoat"]}},{id:"nye",name:"New Year's Eve",zh:"除夕倒數",blurb:"Dead quiet while they count down. Then the whole street needs to go at once.",venue:"street",level:"split",seconds:420,spawnEvery:[4.4,4.1,3.9,3.6,3.3,2,1.8,1.7,1.8,2.2,2.6],drunkShare:[.1,.15,.2,.3,.4,.5,.5,.5,.48,.45,.4],messiness:[.85,.9,.9,.95,1,1.1,1.15,1.15,1.15,1.1,1.05],women:.5,costumes:{share:.55,of:["party","party","party","cone"]},kinds:{family:.01},surges:[{at:.5,count:14,banner:"🎆 Happy New Year! Everybody out of the bars"}],glass:.35},{id:"sale",name:"Saturday Sale",zh:"週末大減價",blurb:"Doors open at ten and half of Kowloon comes through. Families, grandparents, and nobody in a hurry to leave.",venue:"mall",level:"mall",startHour:10,seconds:420,spawnEvery:[3.4,2.8,2.3,2,1.8,1.7,1.7,1.8,2,2.4,3],drunkShare:[0,0,0,0,.01,.02,.02,.03,.04,.05,.05],messiness:[.6,.6,.65,.7,.75,.8,.8,.8,.8,.75,.7],women:.58,costumes:{share:.5,of:["shopper"]},kinds:{family:.14,elderly:.1,wheelchair:.04}},{id:"fair",name:"New Year Fair",zh:"年宵市場",blurb:"Peach blossom and lion dancers in the atrium. Every time the drums stop, everybody remembers they need to go.",venue:"mall",level:"mall",startHour:11,seconds:420,spawnEvery:[3,2.6,2.2,1.9,1.7,1.6,1.6,1.7,1.9,2.2,2.8],drunkShare:[0,0,.01,.02,.03,.04,.05,.06,.06,.06,.06],messiness:[.65,.7,.7,.75,.8,.85,.85,.85,.85,.8,.75],women:.55,costumes:{share:.4,of:["shopper"]},kinds:{family:.18,elderly:.12},surges:[{at:.3,count:14,banner:"🦁 The lion dance finishes"},{at:.65,count:14,banner:"🥁 The drums stop again"}]},{id:"banquet",name:"Wedding Banquet",zh:"婚宴",blurb:"Twelve courses, forty tables, and a rush for the door between each. Dressed to the nines, and tipping to match.",venue:"hotel",level:"hotel",startHour:18,seconds:420,spawnEvery:[3.6,3.2,2.8,2.4,2.1,1.9,1.8,1.8,2,2.4,3],drunkShare:[0,.02,.05,.08,.12,.18,.24,.3,.32,.3,.25],messiness:[.55,.6,.6,.65,.7,.75,.8,.85,.85,.8,.75],women:.52,costumes:{share:.9,of:["formal"]},kinds:{family:.06,elderly:.12},surges:[{at:.25,count:12,banner:"🥂 The speeches are over"},{at:.55,count:14,banner:"🍰 The cake is cut"},{at:.8,count:12,banner:"🍻 Yum seng!"}],glass:.15,vips:2},{id:"gala",name:"Charity Gala",zh:"慈善晚宴",blurb:"The great and the good, and the champagne is free. One of them sits on the board of the hotel.",venue:"hotel",level:"hotel",startHour:19,seconds:420,spawnEvery:[3.2,2.8,2.4,2.1,1.9,1.7,1.6,1.6,1.8,2.2,2.8],drunkShare:[.02,.05,.08,.12,.18,.25,.3,.35,.35,.32,.28],messiness:[.6,.6,.65,.7,.75,.8,.85,.9,.9,.85,.8],women:.5,costumes:{share:.95,of:["formal"]},kinds:{family:.01,elderly:.14},surges:[{at:.45,count:16,banner:"🔨 The auction ends"}],glass:.2,vips:3}],aa=s=>as.find(e=>e.id===s.venue),Wh="public-toilet.career",Pl=[{id:"mop",icon:"🧹",name:"Microfibre mop",blurb:"Mop a third faster",cost:40,kind:"gear"},{id:"brush",icon:"🧽",name:"Bleach and a stiff brush",blurb:"Scrub a third faster",cost:40,kind:"gear"},{id:"belt",icon:"🧻",name:"Roll belt",blurb:"Carry four loo rolls, not two",cost:50,kind:"gear"},{id:"plunger",icon:"🪠",name:"Industrial plunger",blurb:"Unclog in half the time",cost:60,kind:"gear"},{id:"traps",icon:"🪳",name:"Roach traps",blurb:"Cockroaches turn up half as often",cost:60,kind:"gear"},{id:"jumbo",icon:"🧻",name:"Jumbo rolls",blurb:"A roll lasts half as long again",cost:70,kind:"gear"},{id:"shoes",icon:"👟",name:"Non-slip trainers",blurb:"Walk 15% faster, and hardly ever slip",cost:80,kind:"gear"},{id:"tissues",icon:"🤧",name:"Tissue packets by the door",blurb:"Caught short of paper, they buy a packet for $2 instead of grumbling",cost:90,kind:"gear"},{id:"freshener",icon:"🌸",name:"Air freshener",blurb:"A mess puts people off less as they walk in",cost:90,kind:"gear"},{id:"holster",icon:"🧰",name:"Tool belt",blurb:"Carry a second tool; Q swaps to it",cost:120,kind:"gear"},{id:"friend",icon:"🤝",name:"A friend at the FEHD",blurb:"One more complaint before they call the inspector",cost:150,kind:"gear"},{id:"jar",icon:"💰",name:"A proper tip dish",blurb:"Every tip is a dollar bigger",cost:100,kind:"gear",from:2},{id:"gum",icon:"🍬",name:"Nicotine gum",blurb:"Your nerves fray a quarter slower",cost:160,kind:"gear",from:2},{id:"bigbins",icon:"🗑️",name:"Bigger bins",blurb:"Bins hold half as much again before they want emptying",cost:140,kind:"gear",from:2},{id:"trainee",icon:"🧑‍🔧",name:"A nephew on work experience",blurb:"Mops up spills by himself, in his own time",cost:220,kind:"helper"},{id:"handyman",icon:"🔧",name:"Uncle Fai, odd-job man",blurb:"Unblocks toilets, hangs loo rolls, takes the rubbish out",cost:300,kind:"helper"},{id:"attendant",icon:"🧼",name:"Auntie Mei, attendant",blurb:"Scrubs toilets, basins and urinals, and swabs out the stalls",cost:340,kind:"helper"},{id:"doorman",icon:"🕶️",name:"Ah Keung, on the door",blurb:"Breaks up scuffles, wakes sleepers, sees drunks off the premises",cost:420,kind:"helper",from:2}];class Ox{bank=0;owned=new Set;bests={};seen=new Set;constructor(){try{const e=JSON.parse(localStorage.getItem(Wh)??"{}");this.bank=e.bank??0,this.owned=new Set(e.owned),this.bests=e.bests??{},this.seen=new Set(e.seen)}catch{}}save(){const e={bank:this.bank,owned:[...this.owned],bests:this.bests,seen:[...this.seen]};try{localStorage.setItem(Wh,JSON.stringify(e))}catch{}}count(e){return Pl.filter(t=>t.kind===e&&this.owned.has(t.id)).length}stars(e){return ns.filter(t=>t.venue===e).reduce((t,n)=>t+(this.bests[n.id]?.stars??0),0)}standing(e){if(!e.needs)return[];const t=as.find(n=>n.grade===e.grade-1);return[{what:`★ at ${t.name}`,have:this.stars(t.id),need:e.needs.stars},{what:"🧰 gear",have:this.count("gear"),need:e.needs.gear},{what:"🧑‍🔧 helpers",have:this.count("helper"),need:e.needs.helpers}]}offered(e){return this.standing(e).every(t=>t.have>=t.need)}get grade(){return Math.max(...as.filter(e=>this.offered(e)).map(e=>e.grade))}has(e){return this.owned.has(e)}buy(e){return this.owned.has(e.id)||this.bank<e.cost?!1:(this.bank-=e.cost,this.owned.add(e.id),this.save(),!0)}finish(e,t,n,i,r,o){this.bank+=r;const a=this.bests[e]??={nights:0,served:0};n&&(a.nights=Math.max(a.nights,t)),a.served=Math.max(a.served,i),a.stars=Math.max(a.stars??0,o),this.save()}best(e){return this.bests[e]}firstTime(e){return this.seen.has(e)?!1:(this.seen.add(e),this.save(),!0)}}const Dl="public-toilet.shift",xd=1;function Bx(){try{const s=JSON.parse(localStorage.getItem(Dl)??"null");return s&&s.v===xd&&typeof s.scenario=="string"?s:null}catch{return null}}function Nr(s){try{s?localStorage.setItem(Dl,JSON.stringify({v:xd,...s})):localStorage.removeItem(Dl)}catch{}}const zx=19,Hx=10,Vx=.45,Xh={large:.08,elderly:.06,family:.05,wheelchair:.03,blind:.02},Gx=["family","elderly"],Wx=15;function la(s,e){const t=Math.min(.9999,Math.max(0,e))*(s.length-1),n=Math.floor(t);return s[n]+(s[n+1]-s[n])*(t-n)}function yd(s,e){const t=Math.floor(Math.min(1,e)*Hx*60/10)*10,n=((s.startHour??zx)+Math.floor(t/60))%24,i=String(t%60).padStart(2,"0");return`${n%12===0?12:n%12}:${i} ${n>=12?"PM":"AM"}`}class Xx{constructor(e){this.game=e}elapsed=0;nextIn=2;surgesFired=0;pouring=0;inspectAt=1/0;warned=!1;vipsAt=[];reset(){this.elapsed=0,this.nextIn=2,this.surgesFired=0,this.pouring=0,this.inspectAt=this.game.scenario.inspector===!1?1/0:ye(.3,.75),this.warned=!1,this.vipsAt=Array.from({length:this.game.scenario.vips??0},()=>ye(.2,.85)).sort((e,t)=>e-t)}cancelInspection(){this.inspectAt=1/0}get progress(){return Math.min(1,this.elapsed/this.game.scenario.seconds)}get messiness(){return la(this.game.scenario.messiness,this.progress)}get clock(){return yd(this.game.scenario,this.progress)}save(){const{elapsed:e,surgesFired:t,inspectAt:n,warned:i,vipsAt:r}=this;return{elapsed:e,surgesFired:t,inspectAt:Number.isFinite(n)?n:null,warned:i,vipsAt:[...r]}}restore(e){this.elapsed=e.elapsed,this.surgesFired=e.surgesFired,this.inspectAt=e.inspectAt??1/0,this.warned=e.warned,this.vipsAt=[...e.vipsAt]}refill(e){this.pouring+=e,this.nextIn=Math.min(this.nextIn,1)}update(e){const{game:t}=this,{scenario:n}=t;if(this.elapsed+=e,this.elapsed>=n.seconds){t.end(!0);return}!this.warned&&this.progress>=this.inspectAt-Wx/n.seconds&&(this.warned=!0,t.announce("📋 Word is the inspector is on the way"),t.hint("inspector")),this.progress>=this.inspectAt&&(this.inspectAt=1/0,t.inspect()),this.vipsAt.length&&this.progress>=this.vipsAt[0]&&(this.vipsAt.shift(),t.vip());const i=n.surges?.[this.surgesFired];i&&this.progress>=i.at&&(this.surgesFired++,this.pouring+=i.count,this.nextIn=0,t.announce(i.banner)),this.nextIn-=e,!(this.nextIn>0)&&(this.pouring>0?(this.pouring--,this.nextIn=Vx):this.nextIn=la(n.spawnEvery,this.progress)*ye(.6,1.4)/(1+.15*(t.night-1)),this.arrive())}arrive(){const{game:e}=this,{scenario:t}=e,n=["m","f"].filter(h=>e.level.lineFor(h)),i=Math.random()<t.women?"f":"m",r=n.includes(i)?i:le(n),o=this.kind(),a=o==="regular"&&Math.random()<la(t.drunkShare,this.progress),l=Math.random(),c=o!=="regular"?l<.7?"pee":"poo":a&&l<.28?"puke":l<.7?"pee":l<.93?"poo":"wash";e.spawnPatron(c,a,r,o)}kind(){const e=Math.min(1.6,Math.max(.15,1.6-2.4*this.progress));let t=Math.random();for(const n of Object.keys(Xh)){const i=this.game.scenario.kinds?.[n]??Xh[n];if(t-=i*(Gx.includes(n)?e:1),t<0)return n}return"regular"}}const an={wallGap:{urinal:.52,sink:.62},stallFront:.75,inside:.35,insideAccess:.7},qx=3,ca=7;class jx{constructor(e,t,n,i,r,o,a,l,c){if(this.name=e,this.kind=t,this.room=n,this.use=i,this.approach=r,this.clean=o,this.park=a,this.doorway=l,this.parts=c,c.door){const{open:h,slide:u}=c.door.userData;this.slides=u!==void 0,this.doorShut=c.door.position.x,this.doorOpen=this.doorAngle=u??Vt.degToRad(h??90)}this.refresh()}dirt=0;clogged=!1;paper=0;reservedBy=null;occupied=!1;taken=!1;asleep=!1;heldOpen=!1;janitorBusy=!1;smoky=!1;hogged=!1;attendedBy=null;soughtBy=null;work=0;doorOpen=0;doorAngle=0;slides=!1;doorShut=0;leakIn=0;leaks=0;get isStall(){return this.kind==="squat"||this.kind==="sit"||this.kind==="access"}get free(){return!this.reservedBy&&!this.clogged&&this.dirt<2&&!this.janitorBusy&&!this.attendedBy}get job(){return this.clogged?"plunge":this.dirt>0?"scrub":null}get needsPaper(){return this.isStall&&this.paper<=0}get filth(){return this.dirt*1.5+(this.clogged?3:0)}soil(e=1){this.dirt=Math.min(2,this.dirt+e),this.refresh()}clog(){this.kind==="urinal"||this.clogged||(this.clogged=!0,this.work=0,this.leakIn=ca*.6,this.leaks=0,this.refresh())}reset(e){this.dirt=0,this.clogged=!1,this.paper=e,this.reservedBy=this.attendedBy=this.soughtBy=null,this.smoky=this.hogged=!1,this.occupied=this.taken=this.heldOpen=this.asleep=this.janitorBusy=!1,this.work=0,this.refresh()}restore(e,t,n){this.dirt=e,this.clogged=t,this.paper=n,this.leakIn=ca,this.leaks=0,this.refresh()}refresh(){this.parts.grime&&(this.parts.grime.visible=this.dirt>0),this.parts.water&&(this.parts.water.visible=this.clogged),this.parts.paper&&(this.parts.paper.visible=this.paper>0)}update(e){if(this.parts.door){const t=this.occupied&&!this.heldOpen?0:this.doorOpen;this.doorAngle+=(t-this.doorAngle)*Math.min(1,e*9),this.slides?this.parts.door.position.x=this.doorShut+this.doorAngle:this.parts.door.rotation.y=this.doorAngle,this.parts.door2&&(this.parts.door2.rotation.y=-this.doorAngle)}return!this.clogged||this.leaks>=qx||(this.leakIn-=e,this.leakIn>0)?!1:(this.leakIn=ca,this.leaks++,!0)}}const In=.1,$x=16,Yx=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];class Kx{constructor(e,t,n){this.bounds=t,this.cols=Math.ceil((t.maxX-t.minX)/In),this.rows=Math.ceil((t.maxZ-t.minZ)/In);const i=this.cols*this.rows;this.blocked=new Uint8Array(i),this.cost=new Float32Array(i),this.from=new Int32Array(i),this.stamp=new Uint32Array(i);for(const r of e){const[o,a]=this.cellAt(r.minX-n,r.minZ-n),[l,c]=this.cellAt(r.maxX+n,r.maxZ+n);for(let h=Math.max(0,a);h<=Math.min(this.rows-1,c);h++)for(let u=Math.max(0,o);u<=Math.min(this.cols-1,l);u++){const d=t.minX+(u+.5)*In,f=t.minZ+(h+.5)*In,g=Math.max(r.minX-d,0,d-r.maxX),_=Math.max(r.minZ-f,0,f-r.maxZ);g*g+_*_<n*n&&(this.blocked[h*this.cols+u]=1)}}}cols;rows;blocked;cost;from;stamp;search=0;cellAt(e,t){return[Math.floor((e-this.bounds.minX)/In),Math.floor((t-this.bounds.minZ)/In)]}centre(e){const t=e%this.cols,n=(e-t)/this.cols;return new T(this.bounds.minX+(t+.5)*In,0,this.bounds.minZ+(n+.5)*In)}open(e,t){return e>=0&&t>=0&&e<this.cols&&t<this.rows&&!this.blocked[t*this.cols+e]}clear(e){return this.open(...this.cellAt(e.x,e.z))}nearestOpen(e){const[t,n]=this.cellAt(e.x,e.z);for(let i=0;i<=$x;i++){let r=-1,o=1/0;for(let a=n-i;a<=n+i;a++)for(let l=t-i;l<=t+i;l++){if(Math.max(Math.abs(l-t),Math.abs(a-n))!==i||!this.open(l,a))continue;const c=(l-t)**2+(a-n)**2;c<o&&([r,o]=[a*this.cols+l,c])}if(r!==-1)return r}return-1}sightline(e,t){const n=Math.ceil(e.distanceTo(t)/(In*.5));for(let i=0;i<=n;i++){const r=n===0?0:i/n;if(!this.open(...this.cellAt(e.x+(t.x-e.x)*r,e.z+(t.z-e.z)*r)))return!1}return!0}route(e,t){const n=this.nearestOpen(e),i=this.nearestOpen(t);if(n===-1||i===-1)return null;const r=this.astar(n,i);if(!r)return null;const o=[e,...r.map(c=>this.centre(c)),t],a=[];let l=o[0];for(let c=1;c<o.length-1;c++)this.sightline(l,o[c+1])||(a.push(o[c]),l=o[c]);return a.push(t.clone()),a}astar(e,t){const{cols:n,cost:i,from:r,stamp:o}=this,a=++this.search,l=t%n,c=(t-l)/n,h=g=>{const _=Math.abs(g%n-l),m=Math.abs(Math.floor(g/n)-c);return Math.max(_,m)+(Math.SQRT2-1)*Math.min(_,m)},u=[],d=(g,_)=>{let m=u.length;for(u.push(g,_);m>0;){const p=(m/2-1>>1)*2;if(u[p]<=u[m])break;[u[p],u[m],u[p+1],u[m+1]]=[u[m],u[p],u[m+1],u[p+1]],m=p}},f=()=>{const g=u[1],_=u.pop(),m=u.pop();if(u.length>0){u[0]=m,u[1]=_;for(let p=0;;){const M=p*2+2,S=M+2;let x=p;if(M<u.length&&u[M]<u[x]&&(x=M),S<u.length&&u[S]<u[x]&&(x=S),x===p)break;[u[x],u[p],u[x+1],u[p+1]]=[u[p],u[x],u[p+1],u[x+1]],p=x}}return g};for(o[e]=a,i[e]=0,r[e]=-1,d(h(e),e);u.length>0;){const g=f();if(g===t){const p=[];for(let M=g;M!==-1;M=r[M])p.push(M);return p.reverse()}const _=g%n,m=(g-_)/n;for(const[p,M,S]of Yx){if(!this.open(_+p,m+M)||p!==0&&M!==0&&!(this.open(_+p,m)&&this.open(_,m+M)))continue;const x=(m+M)*n+_+p,k=i[g]+S;o[x]===a&&i[x]<=k||(o[x]=a,i[x]=k,r[x]=g,d(k+h(x),x))}}return null}}const Zx=11,Jx=new T(0,0,1),Qx=/^col_(wall|divider|partition|screen|stall_\d+_(panel|leaf))/,ha={least:.4,most:.8,step:.05,spare:.03},ey=.8,ua={back:.85,room:.45},kr=.15;function ty(s){const e=s.getWorldPosition(new T),t=Jx.clone().applyQuaternion(s.getWorldQuaternion(new Yt));return e.y=0,{pos:e,heading:Math.atan2(t.x,t.z)}}function Xe(s,e){return new T(s.pos.x+Math.sin(s.heading)*e,0,s.pos.z+Math.cos(s.heading)*e)}class qh{constructor(e){this.root=e,e.updateMatrixWorld(!0),e.traverse(a=>{if(a.name.startsWith("col_")||a.name.startsWith("staff_")){const l=a.getWorldPosition(new T),{x:c,z:h}=a.scale,u={minX:l.x-c,maxX:l.x+c,minZ:l.z-h,maxZ:l.z+h};if(a.name.startsWith("staff_")){this.staffOnly.push(u);return}this.colliders.push(u),this.walls.set(a.name,u);const d=Qx.test(a.name);d&&this.structure.push(u),this.volumes.push({name:a.name,box:u,top:l.y+a.scale.y,structure:d})}else a.children.length===0&&!a.isMesh&&(this.spots.set(a.name,ty(a)),this.notes.set(a.name,a.userData),this.points.set(a.name,a.getWorldPosition(new T)))}),this.colliders.sort((a,l)=>Number(this.structure.includes(a))-Number(this.structure.includes(l)));const t=a=>this.walls.get(`col_wall_${a}`);this.interior={minX:t("left").maxX,maxX:t("right").minX,minZ:t("back").maxZ,maxZ:t("front_1").minZ};const n=this.walls.get("col_road");this.outdoors=n!==void 0,this.solid=this.colliders.filter(a=>a!==n),this.bounds={minX:-19,maxX:19,minZ:this.interior.minZ-.4,maxZ:7.25};for(const a of["mop","rag","brush","plunger"])this.homes.set(a,e.getObjectByName(`home_${a}`));this.smoke=this.spot("smoke_spot");const i=[...this.walls].find(([a])=>a.startsWith("col_ashtray"))?.[1];this.ashtray=i?new T((i.minX+i.maxX)/2,0,(i.minZ+i.maxZ)/2):this.smoke.pos.clone();for(const a of["a","b"]){const l=e.getObjectByName(`gate_staff_${a}`);l&&this.gate.push(l)}for(let a=1;e.getObjectByName(`fan_${a}`);a++)this.fans.push(e.getObjectByName(`fan_${a}`));for(const a of this.spots.keys()){const l=/^queue_([a-z]+)_0$/.exec(a);l&&this.lines.set(l[1],this.line(l[1]))}for(const a of this.lines.values()){const l=new Map;for(const{pos:c}of a.slots){const h=Math.round(c.z*10),u=l.get(h)??{minX:c.x,maxX:c.x,minZ:c.z-kr,maxZ:c.z+kr};u.minX=Math.min(u.minX,c.x-kr),u.maxX=Math.max(u.maxX,c.x+kr),l.set(h,u)}this.queueRows.push(...l.values())}for(const a of["urinal","stall","sink"])for(let l=1;e.getObjectByName(`${a}_${l}`);l++)this.fixtures.push(this.fixture(`${a}_${l}`));for(let a=1;this.spots.has(`bin_${a}`);a++)this.bins.push(this.bin(`bin_${a}`));this.loiter=this.run("loiter");const r=this.spots.get("dumpster");this.dumpster=r?{pos:r.pos,use:this.spot("dumpster_use"),drop:this.dropBy(this.spot("dumpster_use").pos)}:null;const o=this.dumpster?Math.abs(this.dumpster.use.pos.x)+ey:0;this.edge=Math.max(Zx,this.interior.maxX+1,1-this.interior.minX,o)}colliders=[];volumes=[];queueRows=[];staffOnly=[];fixtures=[];bins=[];dumpster;lines=new Map;interior;structure=[];solid;bounds;navs=new Map;homes=new Map;gate=[];fans=[];loiter;edge;outdoors;notes=new Map;smoke;ashtray;spots=new Map;points=new Map;walls=new Map;spot(e){const t=this.spots.get(e);if(!t)throw new Error(`level has no marker named ${e}`);return t}colour(e){return this.notes.get(e)?.color}point(e){const t=this.points.get(e);if(!t)throw new Error(`level has no marker named ${e}`);return t}run(e){const t=[];for(let n=0;this.spots.has(`${e}_${n}`);n++)t.push(this.spot(`${e}_${n}`));return t}get tubes(){const e=[];for(let t=1;this.points.has(`tube_${t}`);t++)e.push(this.point(`tube_${t}`));return e}line(e){return{id:e,slots:this.run(`queue_${e}`),spawn:this.spot(`spawn_${e}`),despawn:this.spot(`despawn_${e}`),enter:this.run(`enter_${e}`).map(t=>t.pos),exit:this.run(`exit_${e}`).map(t=>t.pos)}}lineFor(e){return this.lines.get(e==="f"?"w":"m")??this.lines.get("all")}fixture(e){const t=d=>this.root.getObjectByName(`${e}_${d}`)??null,n=this.spot(`${e}_use`),{kind:i,room:r}=t("use").userData,o=this.spots.get(`${e}_front`)??{pos:Xe(n,-.9),heading:n.heading},a=this.spots.get(`${e}_clean`)??n,l=this.root.getObjectByName(e),c=l.userData.width,h=l.getWorldPosition(new T),u=c?{minX:h.x-c/2,maxX:h.x+c/2,minZ:h.z-.06,maxZ:h.z+.06}:null;return new jx(e,i,r,n,o,a,this.spots.get(`${e}_park`)??null,u,{grime:t("grime"),water:t("water"),door:t("door"),door2:t("door_b"),paper:t("paper")})}dropBy(e){for(const t of[0,.3,.6,.9,1.2])for(let n=0;n<8;n++){const i=Xe({pos:e,heading:n*Math.PI/4},t);if(this.open(i,ua.room)&&this.nav.clear(i))return i}return e}bin(e){const t=this.spot(e);let n=null;for(const r of[0,Math.PI,Math.PI/2,-Math.PI/2]){const o=Xe({pos:t.pos,heading:t.heading+r},ua.back);if(!(!this.open(o,ua.room)||!this.nav.clear(o))){n={pos:o,heading:t.heading+r+Math.PI};break}}const i=[...this.fixtures].sort((r,o)=>r.use.pos.distanceToSquared(t.pos)-o.use.pos.distanceToSquared(t.pos))[0];return new yx(e,t.pos,i.room,n,this.root.getObjectByName(`${e}_heap`))}resolve(e,t,n=[]){for(let i=0;i<2;i++)for(const r of[this.colliders,n])for(const o of r)jh(e,t,o)}keepOut(e,t,n){for(let i=0;i<2;i++)for(const r of n)jh(e,t,r)}keepOffSolid(e,t){this.keepOut(e,t,this.solid)}open(e,t){return this.solid.every(n=>{const i=Math.max(n.minX-e.x,0,e.x-n.maxX),r=Math.max(n.minZ-e.z,0,e.z-n.maxZ);return i*i+r*r>=t*t})}landing(e,t,n){for(const i of[0,.8,-.8,1.6,-1.6,2.4,-2.4,Math.PI]){const r=t+i;let o=!0;for(let a=0;o&&a<n.back;a+=n.side){const l=Xe({pos:e,heading:r},-Math.min(a,n.back-n.side));o=this.open(l,n.side+.04)}if(o&&this.open(Xe({pos:e,heading:r},n.front-n.side),n.side))return r}return null}navFor(e,t=!1){const{least:n,most:i,step:r,spare:o}=ha,a=Vt.clamp(Math.ceil((e+o)/r-1e-6)*r,n,i),l=Math.round(a*100)*2+Number(t);let c=this.navs.get(l);return c||(c=new Kx([...this.solid,...t?[]:this.staffOnly,...this.queueRows],this.bounds,a),this.navs.set(l,c)),c}get nav(){return this.navFor(ha.least)}route(e,t,n,i=!1){const{least:r,most:o,step:a,spare:l}=ha;for(let c=Math.min(n,o-l);c>r-a;c-=a){const h=this.navFor(c,i).route(e,t);if(h)return h}return[t.clone()]}}function jh(s,e,t){const n=Vt.clamp(s.x,t.minX,t.maxX),i=Vt.clamp(s.z,t.minZ,t.maxZ),r=s.x-n,o=s.z-i,a=r*r+o*o;if(a>=e*e)return;if(a>1e-9){const c=Math.sqrt(a);s.x=n+r/c*e,s.z=i+o/c*e;return}const l=[s.x-t.minX,t.maxX-s.x,s.z-t.minZ,t.maxZ-s.z];switch(l.indexOf(Math.min(...l))){case 0:s.x=t.minX-e;break;case 1:s.x=t.maxX+e;break;case 2:s.z=t.minZ-e;break;default:s.z=t.maxZ+e}}const ny=9,iy=.6,Ur=.03,da={near:1,passing:.8,arriving:2.5},sy=.1;class yo{constructor(e,t,n){this.game=e,this.body=t,this.speed=n,this.node.add(t.root)}node=new ni;gone=!1;engaged=!1;girth=.42;personal=.38;routine;heading=new T;sinceStep=9;heldBack=0;yielding=!1;get pos(){return this.node.position}staff=!1;get moving(){return this.sinceStep<2}get give(){return this.engaged?0:this.moving?1:sy}get label(){return"walker"}bodies(){return[{name:this.label,pos:this.pos,radius:this.personal,give:this.give,wish:this.moving?this.heading:null,kin:this}]}update(e){this.sinceStep++,this.yielding=!1,this.routine.next(e),this.body.update(this.yielding?e*.2:e)}dispose(){this.body.dispose(),this.node.removeFromParent()}stepped(e){}*follow(e,t,n=Ur){this.stride();for(const[i,r]of e.entries()){const o=i===e.length-1?da.arriving:da.passing;let a=1/0,l=0;for(;;){const c=r.x-this.pos.x,h=r.z-this.pos.z,u=Math.hypot(c,h);if(u<(i===e.length-1?n:Ur))break;const d=yield;if(u<a-.01)[a,l]=[u,0];else if(!this.engaged&&(l+=d)>o){if(u<da.near)break;if(!t)return!1}this.step(c,h,u,d)}}return!0}*face(e){this.rest();for(let t=0;t<.3;){const n=yield;t+=n,this.turn(e,n*2)}}*walk(e,t,n=Ur){yield*this.follow(e,!0,n),t!==void 0&&(yield*this.face(t))}*go(e,t,n=Ur){for(;!(yield*this.follow(this.game.level.route(this.pos,e,this.girth,this.staff),!1,n)););t!==void 0&&(yield*this.face(t))}*pause(e){for(let t=0;t<e;t+=yield);}step(e,t,n,i){if(!this.engaged&&this.game.inTheWay(this,e/n,t/n)){if(this.heldBack+=i,this.heldBack<iy){this.yielding=!0,this.turn(Math.atan2(e,t),i);return}}else this.heldBack=Math.max(0,this.heldBack-2*i);const r=Math.min(n,this.speed*i);this.pos.x+=e/n*r,this.pos.z+=t/n*r,this.heading.set(e/n,0,t/n),this.sinceStep=0,this.engaged||this.game.level.keepOffSolid(this.pos,this.girth),this.turn(Math.atan2(e,t),i),this.stepped(i)}turn(e,t){this.node.rotation.y+=xo(this.node.rotation.y,e)*Math.min(1,t*ny)}emote(e,t=1.8){this.game.overlay.pop(this.pos,t,e,"emote",1.6)}}const ry=["trainee","handyman","attendant","doorman"],oy=1.32,$h=14846266,ay={trainee:{look:{wear:["cap_b","apron","hair_a"],colors:{hat:$h,apron:$h,shirt:16053488,shoes:3947588}},tool:"mop",speed:1.7,slower:2.2},handyman:{look:{wear:["flat_top","vest","moustache"],colors:{shirt:5996454,pants:3817290,shoes:2829104}},tool:"plunger",speed:1.5,slower:1.9},doorman:{look:{wear:["flat_top","jacket","sunglasses"],colors:{jacket:1842208,shirt:1842208,pants:1842208,shoes:1842208}},tool:null,speed:1.7,slower:1.25},attendant:{look:{wear:["hair_b","apron","glasses"],colors:{apron:15312573,shirt:16053488,pants:4867160,shoes:16053488}},tool:"brush",speed:1.45,slower:1.9}},ly=1.5,Fr={ties:1.2,heaves:.8,near:.6,waits:4},cy=5,Fs={aside:.7,calms:1.6,rouses:1.8,knocks:1.6,reach:.62},hy=[2.5,5.5],fa=.78,uy=8,dy=.04;class fy extends yo{constructor(e,t,n){const i=ay[t],r=new ys(e.assets,i.look);super(e,r,i.speed),this.role=t,this.def=i,this.staff=!0;const o=i.tool?"tote_":"";this.girth=Math.max(r.extent(`${o}walk`).round,r.extent(`${o}idle`).round);const a=e.level.spot("janitor_start");this.node.position.copy(a.pos),this.node.position.x-=1+n*.95,e.level.keepOffSolid(this.node.position,this.girth),this.node.rotation.y=a.heading,this.routine=this.shift()}job=null;def;carrying=null;skipped=new Map;clock=0;get label(){return this.role}update(e){this.clock+=e,super.update(e)}*shift(){for(;;){const e=this.find();if(!e){this.rest(),yield*this.pause(1);continue}"spill"in e?(this.job=e.spill,yield*this.go(e.stand),yield*this.mop(e.spill),this.job=null):"bin"in e?yield*this.takeOut(e.bin):"scuffle"in e?yield*this.breakUp(e.scuffle):"drunk"in e?yield*this.rouse(e.drunk):"sleeper"in e?yield*this.knock(e.sleeper):yield*this.attend(e.fixture,e.job),this.rest(),yield*this.pause(ye(...hy))}}find(){const{game:e}=this;if(this.role==="trainee")return this.spill();if(this.role==="doorman")return this.trouble();const t=l=>!l.occupied&&!l.taken&&!l.attendedBy&&!l.soughtBy&&!l.janitorBusy&&!l.asleep,n=[...e.level.fixtures].sort((l,c)=>l.use.pos.distanceToSquared(this.pos)-c.use.pos.distanceToSquared(this.pos))[0]?.room,i=l=>this.role==="attendant"?l.dirt>0?"scrub":e.messesIn(l).length?"swab":null:l.clogged?"plunge":l.needsPaper?"paper":null;let r=null,o=1/0;for(const l of e.level.fixtures){const c=t(l)?i(l):null;if(!c)continue;const h=l.clogged||l.dirt>=2?.4:1,u=l.approach.pos.distanceTo(this.pos)*h*(l.room===n?1:ly);u<o&&([r,o]=[{fixture:l,job:c},u])}if(r||this.role!=="handyman"||!e.level.dumpster)return r;const[a]=e.level.bins.filter(l=>l.ready&&l.stand&&l.free).sort((l,c)=>l.pos.distanceToSquared(this.pos)-c.pos.distanceToSquared(this.pos));return a?{bin:a}:null}trouble(){const{game:e}=this,t=o=>[...o].sort((a,l)=>a.pos.distanceToSquared(this.pos)-l.pos.distanceToSquared(this.pos))[0],n=t(e.scuffles);if(n)return{scuffle:n};const i=t(e.sprawled.filter(o=>!o.dragged&&!o.thrownOut&&!o.roused));if(i)return{drunk:i};const r=e.level.fixtures.find(o=>(o.asleep||o.smoky)&&!o.janitorBusy);return r?{sleeper:r}:null}near(e,t){const{level:n}=this.game,i=Math.atan2(this.pos.x-e.x,this.pos.z-e.z);for(const r of[0,.8,-.8,1.6,-1.6,2.4,-2.4,Math.PI]){const o=Xe({pos:e,heading:i+r},t);if(n.open(o,this.girth+.05)&&n.navFor(this.girth,!0).clear(o))return o}return null}*breakUp(e){const{game:t}=this,n=this.near(e.pos,Fs.aside+.3);if(n&&(yield*this.go(n,Math.atan2(e.pos.x-n.x,e.pos.z-n.z)),!!t.scuffles.includes(e))){this.body.hold(null),this.body.play("calm");for(let i=0;i<Fs.calms*this.def.slower&&t.scuffles.includes(e);i+=yield);t.scuffles.includes(e)&&t.calm(e)}}*rouse(e){const{game:t}=this,n=()=>t.sprawled.includes(e)&&!e.dragged&&!e.thrownOut,i=this.near(e.pos,Fs.reach+.25);if(i&&(yield*this.go(i,Math.atan2(e.pos.x-i.x,e.pos.z-i.z)),!!n())){this.body.hold(null),this.body.play("drag_idle");for(let r=0;r<Fs.rouses*this.def.slower&&n();r+=yield);n()&&(e.roused=!0)}}*knock(e){const{approach:t}=e;yield*this.go(t.pos,t.heading);const n=()=>e.asleep||e.smoky;if(!(!n()||this.pos.distanceTo(t.pos)>.5)){this.engaged=!0,yield*this.walk([Xe(t,Math.max(0,an.stallFront-this.body.extent("knock").front-.05))],t.heading),this.body.hold(null),this.body.play("knock");for(let i=0;i<Fs.knocks*this.def.slower&&n();i+=yield);e.asleep=e.smoky=!1,this.rest(),yield*this.walk([t.pos]),this.engaged=!1}}spill(){const{game:e}=this,{level:t}=e,n=e.messes.filter(i=>i.def.clip==="mop"&&!e.beingCleaned(i)&&!((this.skipped.get(i)??0)>this.clock)).filter(i=>!t.fixtures.some(r=>r.doorway&&i.pos.z<r.doorway.maxZ&&i.pos.x>r.doorway.minX&&i.pos.x<r.doorway.maxX)).sort((i,r)=>i.pos.distanceToSquared(this.pos)-r.pos.distanceToSquared(this.pos));for(const i of n.slice(0,4)){const r=Math.atan2(this.pos.x-i.pos.x,this.pos.z-i.pos.z);for(const o of[0,.8,-.8,1.6,-1.6,2.4,-2.4,Math.PI]){const a=new T(i.pos.x+Math.sin(r+o)*fa,0,i.pos.z+Math.cos(r+o)*fa);if(t.open(a,this.girth+.05)&&t.nav.clear(a))return{spill:i,stand:a}}this.skipped.set(i,this.clock+uy)}return null}*mop(e){const{game:t}=this;this.body.hold("mop"),this.body.play("mop");const n=()=>t.messes.includes(e)&&e.pos.distanceTo(this.pos)<fa+.35;for(let i=0;n();){const r=yield;i+=r,this.turn(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z),r),!(i<e.seconds*this.def.slower)&&t.removeMess(e,!0)}}*attend(e,t){const{game:n}=this,{approach:i,clean:r}=e,o=()=>t==="plunge"?e.clogged:t==="paper"?e.needsPaper:t==="swab"?n.messesIn(e).length>0:e.dirt>0;e.soughtBy=this,yield*this.go(i.pos,i.heading),e.soughtBy=null;const a=e.occupied||e.taken||e.janitorBusy||e.attendedBy!==null;if(!o()||a||this.pos.distanceTo(i.pos)>.5)return;e.attendedBy=this;const l=e.isStall,[c,h]=t==="paper"?["carry_idle","roll"]:t==="plunge"?[l?"plunge":"plunge_high","plunger"]:t==="swab"?["wipe_low","rag"]:l?["scrub","brush"]:["wipe_high","rag"],d=t==="paper"?1:(t==="plunge"?3:t==="swab"?Math.min(cy,n.messesIn(e).reduce((g,_)=>g+_.seconds*.5,0)):.3+1.3*e.dirt)*this.def.slower,f=l?[i.pos,Xe(i,an.stallFront+(e.kind==="access"?an.insideAccess:an.inside)),r.pos]:[i.pos,Xe(r,-Math.max(0,this.body.extent(c).front+dy-an.wallGap[e.kind]))];this.engaged=!0,yield*this.walk(f,r.heading),this.body.hold(h),this.body.play(c);for(let g=0;g<d&&o();g+=yield);if(t==="plunge"?e.clogged=!1:t==="paper"?e.paper=n.paperPerRoll:t==="scrub"&&(e.dirt=0),l&&(t==="swab"||t==="scrub"))for(const g of n.messesIn(e))n.removeMess(g,!0);e.work=0,e.refresh(),n.celebrate(e.use.pos,t==="paper"?"🧻":"✨",!0),this.rest(),yield*this.pause(.25),yield*this.walk(f.slice(0,-1).reverse()),this.engaged=!1,e.attendedBy=null}*takeOut(e){const{game:t}=this,{dumpster:n}=t.level,i=e.stand;yield*this.go(i.pos,i.heading);for(let r=0;!e.free&&r<Fr.waits;r+=yield);!n||!e.ready||!e.free||this.pos.distanceTo(i.pos)>Fr.near||(e.user=this,this.body.hold(null),this.body.play("wipe_high"),yield*this.pause(Fr.ties*this.def.slower),e.user===this&&(e.user=null),e.ready&&(e.empty(),this.carrying="bag",yield*this.go(n.drop,Math.atan2(n.pos.x-n.drop.x,n.pos.z-n.drop.z)),this.body.hold("bag"),this.body.play("carry_idle"),yield*this.pause(Fr.heaves*this.def.slower),this.carrying=null,t.celebrate(n.pos,"✨",!0)))}stride(){const e=this.carrying??this.def.tool;this.body.hold(e),this.body.play(e?"tote_walk":"walk",{speed:this.speed/oy})}rest(){const e=this.carrying??this.def.tool;this.body.hold(e),this.body.play(e?"tote_idle":"idle")}}const Yh={tools:"Press E, or right click, by a tool to take it: mop for the floor, brush for toilets, rag for basins and urinals, plunger for blockages.",puddle:"Take the mop from the bucket and hold Space, or the left mouse button, beside a puddle. Anyone who walks through one leaves less happy.",rag:"A rag only smears a spill smaller. The mop is the tool for the floor.",sign:"People slip on puddles. Stand the yellow wet-floor sign nearby (E to carry it) and they step round.",slip:"Somebody slipped! A puddle with the wet-floor sign near it is safe until you can mop it.",vomit:"Sick takes longer to mop than a puddle. Drunks who can't get in will be sick outside instead.",litter:"Hold Space over litter to pick it up. Any tool, or none, will do.",glass:"Broken glass. Sweep it up with the mop before somebody treads in it.",roach:"Cockroaches come out when the place is filthy. Chase one down and hold Space to stamp on it.",dirty:"A dirty fixture still gets used, but people grumble. Its badge shows the tool: 🪥 brush for a toilet, 🧽 rag for a basin or urinal.",filthy:"A red ring means out of action: nobody will use it until you deal with it, and the queue backs up.",clog:"🪠 A blocked toilet leaks across the floor until you plunge it. The plunger stands under the rack.",paper:"🧻 Out of paper. Take rolls from the shelf, then hang one in the stall.",restless:"Patrons kept waiting get restless, then desperate. An accident in the queue is a complaint.","wants♿":"♿ Wheelchair users can only use the accessible stall. Keep it in working order.","wants🚽":"🚽 Some patrons can't squat, and are waiting for a sit-down toilet.","wants🚼":"🚼 A parent with a small child wants the accessible stall, or failing that a sit-down toilet.",prints:"Footprints: somebody walked through a puddle and took it with them. The wet-floor sign stops that too.",asleep:"💤 Somebody has passed out in a stall, and nobody else can use it. Hold Space at the door to bang on it.",poor:"The hygiene meter is in the yellow: the state of the place is putting people off, and unhappy visits become complaints.",foul:"🤢 The hygiene meter is in the red: everybody who walks in will complain until you get it back out.",reckoning:"🚨 That's too many complaints. The health inspector is on the way: if the place isn't clean when they look, they shut it and you're fired.",slipped:"💫 You went over on a puddle. Walk round them, mop them, or stand the wet-floor sign by them; non-slip trainers help too.",scuffle:"🥊 Tempers fray in a long queue. Get out there and hold Space beside the two of them to break it up, or it ends in a complaint.",cash:"🪙 Somebody has dropped some money. Hold Space over it and it is yours.",wage:"💵 Nobody tips at a street toilet. You are on a wage, with a bonus for each star and a little docked for each complaint.",scrap:"♻️ The scrap man pays a dollar for every can and cup you pick up. It adds up.",tissues:"🤧 No paper in there, so they bought a packet from your tray. Hang a roll when you can all the same.",tipping:"💰 A better class of patron tips, if they leave happy. They are also harder to please: the hygiene meter turns sooner here.",bin:"🗑️ A bin is nearly full. Hold Space beside it to bag the rubbish, then carry the bag to the big bin outside.",binfull:"🗑️ That bin is overflowing, so what people throw away is landing on the floor. Bag it and take it out.",bagged:"🗑️ Take the bag out to the big bin outside (the arrow shows where) and hold Space to throw it in. E puts it down.",bag:"A bag of rubbish left lying about is no better than a full bin. Hold Space to pick it up again.",rat:"🐀 A rat from behind the big bin has been at the bag you left on the floor, and now it is litter. Take rubbish straight out, or walk up to the rat: it runs from you.",spew:"🤮 Projectile. It goes in a line, over the floor and over anybody standing in it. A queue that moves and a place that does not stink set fewer of them off.",outcold:"😵 He is out cold on the floor. Nobody likes stepping over him, and nobody can use what he is lying in front of. Hold Space at his feet to take him by the ankles, and drag him outside.",dragging:"Walk him out of the door and press E to leave him on the pavement to sleep it off. Things fall out of pockets on the way.",potty:"🙈 A child who cannot wait gets held over the nearest basin, or the bin. Keep the queue moving and the stalls in order, and they will wait for a stall.",vip:"⭐ Somebody important goes straight to the front and notices everything. Pleased, they leave something worth having; displeased, it counts three times over.",smoky:"🚬 Somebody is smoking in a stall. Bang on the door (hold Space at it) before the smoke sets the sprinklers off.",selfie:"🤳 Somebody has finished at the basin and is taking pictures of themselves. Hold Space behind them to move them along.",sparkling:"✨ The place is sparkling. People who walk into that are in a better mood for it, and tip better where they tip at all.",smoke:"Your nerves are shot, and frayed nerves make for slow hands. Step outside to the ashtray and hold Space for a smoke.",inspector:"📋 The inspector looks the place over. Clean earns a reprieve; filthy costs two complaints."},py=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"],pa=["Space","Enter","MouseLeft"],Kh={0:"MouseLeft",2:"MouseRight"},ma={KeyE:"MouseRight"},my=800,Zh=s=>s.target instanceof Element&&s.target.closest("#screen")!==null;class gy{mouse=!1;touch=!1;down=new Set;fresh=new Set;stick=null;lastTouch=-1/0;constructor(){addEventListener("keydown",e=>{(py.includes(e.code)||pa.includes(e.code))&&e.preventDefault(),e.repeat||this.fresh.add(e.code),this.down.add(e.code),(pa.includes(e.code)||e.code in ma)&&(this.mouse=this.touch=!1)}),addEventListener("keyup",e=>this.down.delete(e.code)),addEventListener("mousedown",e=>{const t=Kh[e.button];!t||Zh(e)||performance.now()-this.lastTouch<my||(e.preventDefault(),this.fresh.add(t),this.down.add(t),this.mouse=!0,this.touch=!1)}),addEventListener("mouseup",e=>this.down.delete(Kh[e.button])),addEventListener("contextmenu",e=>{Zh(e)||e.preventDefault()}),addEventListener("blur",()=>{this.down.clear(),this.stick=null})}press(e){this.fresh.add(e),this.down.add(e),this.fingered()}release(e){this.down.delete(e),this.lastTouch=performance.now()}steer(e){this.stick=e,this.fingered()}fingered(){this.touch=!0,this.mouse=!1,this.lastTouch=performance.now()}axis(e,t){return Number(e.some(n=>this.down.has(n)))-Number(t.some(n=>this.down.has(n)))}get moveX(){return this.stick?this.stick.x:this.axis(["KeyD","ArrowRight"],["KeyA","ArrowLeft"])}get moveZ(){return this.stick?this.stick.z:this.axis(["KeyS","ArrowDown"],["KeyW","ArrowUp"])}get action(){return pa.some(e=>this.down.has(e))}pressed(e){return this.fresh.has(e)||e in ma&&this.fresh.has(ma[e])}endFrame(){this.fresh.clear()}}const _y=1.32,ga=3095125,vy=3,xy=2.6,Or=.35;class yy extends yo{constructor(e,t){const n=new ys(e.assets,{wear:["cap_b","jacket","tie","glasses"],colors:{hat:ga,jacket:ga,pants:ga,shirt:16053488,tie:2829104,shoes:2829104}});super(e,n,1.5),this.line=t,this.girth=Math.max(n.extent("walk").round,n.extent("inspect").round),this.node.position.copy(t.spawn.pos),this.node.rotation.y=t.spawn.heading,this.routine=this.visit()}judged=!1;get label(){return"inspector"}again(){this.judged=this.gone=!1,this.routine=this.rounds()}*visit(){const{line:e}=this;yield*this.go(e.enter[0],void 0,Or),yield*this.walk(e.enter.slice(1),void 0,Or),yield*this.rounds()}*rounds(){const{game:e,line:t}=this,n=e.level.fixtures.filter(o=>o.room===t.id).sort(()=>Math.random()-.5);let i=0,r=0;for(let o=0;o<vy;o++){const a=n.findIndex(h=>!h.reservedBy&&!h.taken&&!h.attendedBy),[l]=n.splice(Math.max(0,a),1);if(!l)break;yield*this.go(l.approach.pos,l.approach.heading),yield*this.pause(xy);const{hygiene:c}=e;this.emote(c>=70?"🙂":c>=40?"🤨":"😤"),i+=c,r++}e.verdict(r?i/r:e.hygiene,this),this.judged=!0,yield*this.go(t.exit[0],void 0,Or),yield*this.walk([t.exit[1]],void 0,Or);for(const o of[...t.exit.slice(2),t.despawn.pos])yield*this.go(o);this.gone=!0}stride(){this.body.hold(null),this.body.play("walk",{speed:this.speed/_y})}rest(){this.body.hold("clipboard"),this.body.play("inspect")}}const gt={mop:{icon:"🧹",name:"mop",mesh:"mop",carry:"tote"},rag:{icon:"🧽",name:"rag",mesh:"rag",carry:"tote"},brush:{icon:"🪥",name:"toilet brush",mesh:"brush",carry:"tote"},plunger:{icon:"🪠",name:"plunger",mesh:"plunger",carry:"tote"},rolls:{icon:"🧻",name:"loo rolls",mesh:"roll",carry:"carry"},sign:{icon:"⚠️",name:"wet-floor sign",mesh:"sign",carry:"carry"},bag:{icon:"🗑️",name:"bag of rubbish",mesh:"bag",carry:"tote"}},io={spill:"mop",glass:"mop",toilet:"brush",basin:"rag",clog:"plunger",paper:"rolls",litter:null,roach:null,knock:null,calm:null,find:null,bin:null,lift:null,dump:"bag",drag:null,shoo:null},by={spill:{mop:1,rag:3.5},glass:{mop:1},toilet:{brush:1,rag:2.5},basin:{rag:1,brush:1.6},clog:{plunger:1},paper:{rolls:1},litter:{},roach:{},knock:{},calm:{},find:{},bin:{},lift:{},dump:{bag:1},drag:{},shoo:{}};function Jh(s){return s.kind==="cash"?"find":s.kind==="bag"?"lift":s.kind==="litter"||s.kind==="roach"||s.kind==="glass"?s.kind:"spill"}function Qh(s,e){return e==="knock"||e==="shoo"?e:e==="plunge"?"clog":e==="paper"?"paper":s.isStall?"toilet":"basin"}function eu(s,e){return io[s]===null?1:(e&&by[s][e])??null}const tu=3.1,My=1.32,Sy=["idle","walk","tote_idle","tote_walk","carry_idle","carry_walk"],Os=.03,wy=.3,nu=.3,Ey=.38,Ty=.4,Ay=.02,sn={base:.1,perQueuer:.025,perFilth:.01,most:.6,jolt:5,frayed:65,slowHands:.6,slowFeet:.2,onGum:.75},_a={reach:1.3,relief:13,puffEvery:1.4},Br={chance:.3,inTrainers:.06,seconds:1.9,jolt:8},va={room:.36,every:.45},Ry=an.wallGap,qi={mess:1.25,fixture:1.05,stall:1.35,pickup:1.1},Cy=.6,Iy={mop:.78,pickup:.42,stomp:.3,wipe_low:.46},Ly=an.stallFront,Py=1.6,Dy=1.1,xa={reach:1.7,seconds:1.6,aside:.62},ji={reach:1.15,seconds:1,back:.55,dumpFrom:1.2,heave:.7},qt={reach:1.3,grab:.5,arm:.62,girth:.3,pace:.7,stride:.75,length:.9},Ny=12,ky=.1,Uy=1,Fy=10,Oy=.25,iu=.5,By=.35,ya=[{wear:["cap","apron"],colors:{hands:15765424,shirt:14479337,shoes:5217943}},{wear:["cap_b","logo"],colors:{hands:15765424,hat:2902652,shirt:2902652,logo:15912778,pants:3817290,shoes:2829104}},{wear:["hair_a","waistcoat","bowtie"],colors:{hands:16777215,hair:2760988,shirt:16053488,forearms:16053488,tie:8003371,pants:2368554,shoes:1842208}}],zy=["mop","rag","brush","plunger","rolls"];class Hy{constructor(e){this.game=e,this.body=new ys(e.assets,ya[0]),this.radius=Math.max(...Sy.map(t=>this.body.extent(t).round))+Os,this.reset()}body;tool=null;stowed=null;dragging=null;trailing=new T;rolls=0;target=null;pickup=null;working=!1;progress=0;heading=0;radius;stress=0;smoking=!1;handWork=0;busyWith=null;lastJob=null;lastAtFixture=!1;sinceWork=1/0;puffIn=0;down=0;underfoot=null;jostled=0;lastOnFloor=new T;moving=!1;wish=new T;get pos(){return this.body.root.position}get atFixture(){return this.lastAtFixture&&this.sinceWork<nu}get strain(){return 1+sn.slowHands*this.frayed}get frayed(){return Vt.clamp((this.stress-sn.frayed)/(100-sn.frayed),0,1)}get bySmokeSpot(){return this.pos.distanceTo(this.game.level.smoke.pos)<_a.reach}crowdBodies(){const e=this.down>0,t=[{name:"janitor",pos:this.pos,radius:Ey,give:e?0:Ay,wish:this.moving?this.wish:null,kin:this}];if(!e)return t;const n=this.body.extent("slip").back;for(let i=va.every;i<n;i+=va.every){const r=Xe({pos:this.pos,heading:this.heading},-i);t.push({name:"janitor (down)",pos:r,radius:va.room,give:0,wish:null,kin:this})}return t}tread(){const{game:e}=this,t=e.puddleAt(this.pos);if(t===this.underfoot||(this.underfoot=t,!t||Math.random()>=(e.career.has("shoes")?Br.inTrainers:Br.chance)))return;const n=e.level.landing(this.pos,this.heading,this.body.extent("slip"));n!==null&&(this.heading=n,this.down=Br.seconds,this.stress=Math.min(100,this.stress+Br.jolt),this.body.hold(null),this.body.play("slip",{once:!0}),e.overlay.pop(this.pos,1.8,"💫","emote",1.6),e.sfx.complaint(),e.hint("slipped"))}stayOnFloor(){this.game.level.open(this.pos,ky)?this.lastOnFloor.copy(this.pos):this.pos.copy(this.lastOnFloor)}shoved(e){this.game.level.resolve(this.pos,this.radius,e),this.stayOnFloor(),this.jostled=Ty}fray(e,t,n){if(this.smoking)return;const i=this.game.career.has("gum")?sn.onGum:1,r=Math.min(sn.most,sn.base+sn.perQueuer*t+sn.perFilth*n)*i;this.stress=Math.min(100,this.stress+r*e)}uniform(e){this.body.dress(ya[Math.min(e,ya.length)-1])}jolt(){this.stress=Math.min(100,this.stress+sn.jolt)}reset(){const e=this.game.level.spot("janitor_start");this.pos.copy(e.pos),this.lastOnFloor.copy(e.pos),this.heading=this.body.root.rotation.y=e.heading,this.tool=this.stowed=this.target=this.pickup=null,this.dragging=null,this.rolls=0,this.stress=0,this.down=0,this.underfoot=null,this.working=this.smoking=!1,this.sinceWork=1/0,this.release(),this.body.hold(null),this.body.play("idle")}update(e,t){if(this.down>0){this.down-=e,this.working=this.smoking=this.moving=!1,this.target=this.pickup=null,this.progress=0,this.release(),this.body.root.rotation.y=this.heading,this.body.update(e);return}if(this.dragging){this.haul(e,t);return}this.pickup=this.findPickup(),t.pressed("KeyE")&&this.interact(),t.pressed("KeyQ")&&this.swap(),this.working&&t.action&&this.stillNeeded(this.target)||(this.target=this.findTarget(),this.handWork=0);const n=this.target&&this.pace(this.target);this.smoking=!1,t.action&&this.target&&n?this.work(this.target,n*this.strain,e):t.action&&this.bySmokeSpot?this.smoke(e):this.roam(e,t),this.body.root.rotation.y=this.heading,this.body.update(e)}pace(e){return eu(this.jobKind(e),this.tool)}jobKind(e){return e.type==="scuffle"?"calm":e.type==="bin"?"bin":e.type==="dumpster"?"dump":e.type==="drunk"?"drag":e.type==="mess"?Jh(e.mess):Qh(e.fixture,e.job)}get maxRolls(){return this.game.career.has("belt")?4:2}findPickup(){const{game:e}=this;let t=null,n=1/0;for(const i of[...zy,"sign"]){const r=e.whereIs(i);if(!r||i===this.stowed||i===this.tool&&!(i==="rolls"&&this.rolls<this.maxRolls))continue;const o=r.x-this.pos.x,a=r.z-this.pos.z,l=Math.hypot(o,a);if(l>qi.pickup)continue;const c=l>.05?(o*Math.sin(this.heading)+a*Math.cos(this.heading))/l:1,h=l+Cy*(1-c);h<n&&([t,n]=[i,h])}return t}interact(){this.pickup?this.take(this.pickup):(this.tool==="sign"||this.tool==="bag")&&this.putBack(this.tool)}makeWayFor(e){const t=this.tool;if(!t||t===e)return;const n=i=>i!=="sign"&&i!=="bag";this.game.career.has("holster")&&!this.stowed&&n(t)&&e!=="sign"?this.stowed=t:this.putBack(t)}take(e){const{game:t}=this;this.makeWayFor(e),this.tool=e,e==="rolls"&&(this.rolls=this.maxRolls),t.setOut(e,!0),t.sfx.grab()}putBack(e){e==="sign"?this.game.standSign(this.pos,this.heading):e==="bag"?this.game.dropBag(this.pos):this.game.setOut(e,!1),e==="rolls"&&(this.rolls=0),this.tool===e&&(this.tool=null)}swap(){!this.game.career.has("holster")||this.tool==="sign"||this.tool==="bag"||([this.tool,this.stowed]=[this.stowed,this.tool],this.game.sfx.grab())}findTarget(){const{game:e}=this;let t=null,n=1/0;const i=(l,c,h,u=0)=>{if(c>=h)return;const d=c+u+(this.pace(l)===null?Fy:0);d<n&&([t,n]=[l,d])},r=l=>l.distanceTo(this.pos);for(const l of e.messes)l.kind==="bag"&&this.tool==="bag"||i({type:"mess",mess:l},r(l.pos),qi.mess+.25*(l.size-1));const{bins:o,dumpster:a}=e.level;if(this.tool!=="bag")for(const l of o)l.ready&&i({type:"bin",bin:l},r(l.pos),ji.reach);this.tool==="bag"&&a&&i({type:"dumpster"},r(a.use.pos),ji.dumpFrom,-.3);for(const l of e.sprawled)!l.dragged&&!l.thrownOut&&i({type:"drunk",patron:l},Math.min(r(l.pos),r(this.atTheFeetOf(l))),qt.reach,-.2);for(const l of e.scuffles)i({type:"scuffle",scuffle:l},r(l.pos),xa.reach,-1);for(const l of e.level.fixtures){if(l.hogged){i({type:"fixture",fixture:l,job:"shoo"},r(l.approach.pos),qi.stall,-.15);continue}if(l.asleep||l.smoky){i({type:"fixture",fixture:l,job:"knock"},r(l.approach.pos),qi.stall,-.15);continue}if(l.occupied||l.taken||l.attendedBy)continue;const c=[l.job,l.needsPaper?"paper":null].filter(d=>d!==null),h=c.find(d=>eu(Qh(l,d),this.tool))??c[0];if(!h)continue;const u=l.isStall?Math.min(r(l.clean.pos),r(l.approach.pos)):r(l.clean.pos);i({type:"fixture",fixture:l,job:h},u,l.isStall?qi.stall:qi.fixture,-.15)}return t}stillNeeded(e){return e?e.type==="mess"?this.game.messes.includes(e.mess):e.type==="scuffle"?this.game.scuffles.includes(e.scuffle):e.type==="bin"?e.bin.ready&&this.tool!=="bag":e.type==="dumpster"?this.tool==="bag":e.type==="drunk"?this.game.sprawled.includes(e.patron)&&!e.patron.dragged&&!e.patron.thrownOut:e.job==="knock"?e.fixture.asleep||e.fixture.smoky:e.job==="shoo"?e.fixture.hogged:e.fixture.occupied||e.fixture.taken||e.fixture.attendedBy?!1:e.job==="paper"?e.fixture.needsPaper:e.fixture.job===e.job:!1}jobFor(e,t){const{career:n,level:i}=this.game;if(e.type==="scuffle"){const{a:h,b:u,pos:d}=e.scuffle,f=Math.atan2(u.pos.x-h.pos.x,u.pos.z-h.pos.z),g=S=>Xe({pos:d,heading:f+S*Math.PI/2},xa.aside),_=S=>{const x=S.clone();return i.resolve(x,this.radius),x.distanceTo(S)},[m,p]=[g(1),g(-1)].sort((S,x)=>S.distanceTo(this.pos)-x.distanceTo(this.pos)),M=_(m)<.1||_(m)<=_(p)?m:p;return{clip:"calm",mesh:null,seconds:xa.seconds,stand:M,face:Math.atan2(d.x-M.x,d.z-M.z)}}if(e.type==="bin"){const{pos:h}=e.bin,u=h.x-this.pos.x,d=h.z-this.pos.z,f=Math.hypot(u,d)||1,g=new T(h.x-u/f*ji.back,0,h.z-d/f*ji.back);return{clip:"wipe_high",mesh:null,seconds:ji.seconds,stand:g,face:Math.atan2(u,d)}}if(e.type==="dumpster"){const{pos:h,use:u}=i.dumpster;return{clip:"carry_idle",mesh:"bag",seconds:ji.heave,stand:u.pos,face:Math.atan2(h.x-u.pos.x,h.z-u.pos.z)}}if(e.type==="drunk"){const h=this.atTheFeetOf(e.patron);return{clip:"drag_idle",mesh:null,seconds:qt.grab,stand:h,face:e.patron.node.rotation.y+Math.PI}}if(e.type==="mess"){const{mess:h}=e,u=Jh(h),d=u==="litter"||u==="find"||u==="lift"?"pickup":u==="roach"?"stomp":this.tool==="rag"?"wipe_low":"mop",f=d==="mop"?"mop":d==="wipe_low"?"rag":null,g=h.pos.x-this.pos.x,_=h.pos.z-this.pos.z,m=Math.hypot(g,_),p=h.seconds*t*(d==="mop"&&n.has("mop")?.65:1);if(m<Oy)return{clip:d,mesh:f,seconds:p,stand:this.pos.clone(),face:this.heading};const M=Iy[d],S=new T(h.pos.x-g/m*M,0,h.pos.z-_/m*M);return{clip:d,mesh:f,seconds:p,stand:S,face:Math.atan2(g,_)}}const{fixture:r,job:o}=e,a=r.clean.heading,l=h=>{if(r.isStall)return{clip:h,stand:r.clean.pos,face:a};const u=Ry[r.kind],d=Math.max(0,this.body.extent(h).front+Os-u);return{clip:h,stand:Xe(r.clean,-d),face:a}};if(o==="shoo")return{clip:"calm",mesh:null,seconds:Dy,stand:r.approach.pos,face:r.approach.heading};if(o==="knock"){const h=Xe(r.approach,Ly-this.body.extent("knock").front-.05);return{clip:"knock",mesh:null,seconds:Py,stand:h,face:r.approach.heading}}if(o==="plunge")return{mesh:"plunger",seconds:3*(n.has("plunger")?.5:1),...l(r.isStall?"plunge":"plunge_high")};if(o==="paper")return{mesh:"roll",seconds:.6,...l("carry_idle")};const c=(.3+1.3*r.dirt)*t*(n.has("brush")?.65:1);return this.tool==="brush"?{mesh:"brush",seconds:c,...l("scrub")}:{mesh:"rag",seconds:c,...l(r.isStall?"wipe_low":"wipe_high")}}keepClear(e,t){const{level:n,blockers:i}=this.game,r=this.body.extent(e.clip),o=Math.max(this.radius,r.side+Os);t?n.keepOut(this.pos,o,n.structure):n.resolve(this.pos,o,i);const a=Math.max(wy,r.side+Os),l=r.front+Os-a;if(l<=0)return;const c=Xe({pos:this.pos,heading:e.face},l),h=c.clone();n.keepOut(c,a,t?n.structure:n.colliders),this.pos.add(c.sub(h))}work(e,t,n){const i=this.jobFor(e,t);this.working=!0,this.release(),e.type==="fixture"&&(this.busyWith=e.fixture,e.fixture.janitorBusy=!0),(this.jostled-=n)<=0&&this.pos.lerp(i.stand,1-Math.exp(-10*n));const r=e.type==="fixture"||e.type==="bin"||e.type==="dumpster";this.keepClear(i,r),[this.lastJob,this.lastAtFixture,this.sinceWork]=[i,r,0],this.moving=!1,this.turn(i.face,n),this.body.hold(i.mesh),this.body.play(i.clip);const o=e.type==="mess"?e.mess:e.type==="scuffle"?e.scuffle:e.type==="bin"?e.bin:e.type==="fixture"&&e.job!=="paper"?e.fixture:null,a=o?o.work+=n:this.handWork+=n;this.progress=Math.min(1,a/i.seconds),a>=i.seconds&&this.finish(e)}finish(e){const{game:t}=this;if(e.type==="scuffle")t.calm(e.scuffle);else if(e.type==="bin")e.bin.empty(),this.makeWayFor("bag"),this.tool="bag",t.bagged(e.bin);else if(e.type==="dumpster")this.tool=null,t.dumped();else if(e.type==="drunk")this.makeWayFor(null),this.tool=null,this.dragging=e.patron,e.patron.dragged=e.patron.engaged=!0,this.trailing.copy(Xe({pos:e.patron.pos,heading:e.patron.node.rotation.y},-.9)),t.hint("dragging");else if(e.type==="mess"&&e.mess.kind==="bag")t.removeMess(e.mess,!0),this.makeWayFor("bag"),this.tool="bag";else if(e.type==="mess"){const{mess:n}=e;if(this.tool==="rag"&&n.def.pools&&n.size-iu>By)n.size-=iu,n.work=0,t.hint("rag");else{const i=n.kind==="litter"&&/can|cup/.test(n.object.name);n.kind==="cash"?t.earn(n.value,"found",n.pos):i&&t.earn(Uy,"scrap",n.pos),t.removeMess(n,n.kind==="cash"||i)}}else{const{fixture:n,job:i}=e;i==="knock"?n.asleep=n.smoky=!1:i==="shoo"?n.hogged=!1:i==="plunge"?n.clogged=!1:i==="scrub"?n.dirt=0:(n.paper=t.paperPerRoll,--this.rolls===0&&(this.tool=null)),n.work=0,n.refresh(),t.celebrate(n.use.pos,i==="paper"?"🧻":i==="knock"?"👊":i==="shoo"?"👋":"✨")}this.target=null,this.working=!1,this.handWork=0,this.release()}atTheFeetOf(e){return Xe({pos:e.pos,heading:e.node.rotation.y},qt.arm)}haul(e,t){const{game:n}=this,i=this.dragging;if(this.working=this.smoking=!1,this.progress=0,this.target=this.pickup=null,this.release(),t.pressed("KeyE")||!n.sprawled.includes(i)){this.letGo(),this.body.play("idle"),this.body.update(e);return}const r=t.moveX,o=t.moveZ,a=this.moving=r!==0||o!==0,l=tu*qt.pace*(1-sn.slowFeet*this.frayed)*Math.min(1,Math.hypot(r,o));if(a){const M=Math.hypot(r,o);this.wish.set(r/M,0,o/M),this.pos.x+=this.wish.x*l*e,this.pos.z+=this.wish.z*l*e}const{edge:c}=n.level;this.pos.x=Vt.clamp(this.pos.x,-c,c),n.level.resolve(this.pos,this.radius,n.blockers),this.stayOnFloor();const h=i.pos,u=this.pos.x-h.x,d=this.pos.z-h.z,f=Math.hypot(u,d)||1;f>qt.arm&&(h.x=this.pos.x-u/f*qt.arm,h.z=this.pos.z-d/f*qt.arm,n.level.resolve(h,qt.girth,n.blockers));const g=this.trailing,_=g.x-h.x,m=g.z-h.z,p=Math.hypot(_,m)||1;g.set(h.x+_/p*qt.length,0,h.z+m/p*qt.length),n.level.keepOut(g,qt.girth,n.level.structure),i.node.rotation.y=Math.atan2(h.x-g.x,h.z-g.z),this.turn(Math.atan2(h.x-this.pos.x,h.z-this.pos.z),e),this.body.hold(null),a?this.body.play("drag_walk",{speed:l/qt.stride}):this.body.play("drag_idle"),this.body.root.rotation.y=this.heading,this.body.update(e)}letGo(){const e=this.dragging;this.dragging=null,e&&(e.dragged=e.engaged=!1,this.game.outside(e.pos)&&this.game.threwOut(e))}splattered(){this.stress=Math.min(100,this.stress+Ny),this.game.overlay.pop(this.pos,1.9,"🤮","emote bad",1.6)}smoke(e){const{game:t}=this,n=t.level.smoke;this.smoking=this.working=!0,this.moving=!1,this.release(),this.pos.lerp(n.pos,1-Math.exp(-8*e)),t.level.resolve(this.pos,this.radius,t.blockers),this.turn(n.heading,e),this.body.hold("cig"),this.body.play("smoke"),this.stress=Math.max(0,this.stress-_a.relief*e),this.progress=1-this.stress/100,(this.puffIn-=e)<=0&&(this.puffIn=_a.puffEvery,t.overlay.pop(this.pos,1.7,"💨","emote",1.4))}roam(e,t){this.sinceWork+=e,this.working=!1,this.progress=0,this.release();const n=t.moveX,i=t.moveZ,r=this.moving=n!==0||i!==0,o=this.lastJob!==null&&this.sinceWork<nu,a=Math.min(1,Math.hypot(n,i)),l=tu*(this.game.career.has("shoes")?1.15:1)*(1-sn.slowFeet*this.frayed)*a;if(r){const d=Math.hypot(n,i);this.wish.set(n/d,0,i/d),this.pos.x+=this.wish.x*l*e,this.pos.z+=this.wish.z*l*e,o||this.turn(Math.atan2(n,i),e)}const{edge:c}=this.game.level;if(this.pos.x=Vt.clamp(this.pos.x,-c,c),this.game.level.resolve(this.pos,this.radius,this.game.blockers),this.stayOnFloor(),o&&this.keepClear(this.lastJob,this.lastAtFixture),r&&this.tread(),this.down>0)return;const h=this.tool&&gt[this.tool];this.body.hold(h?h.mesh:null);const u=h?`${h.carry}_`:"";r?this.body.play(`${u}walk`,{speed:Math.min(2.1,l/My)}):this.body.play(`${u}idle`)}turn(e,t){this.heading+=xo(this.heading,e)*Math.min(1,t*14)}release(){this.busyWith&&(this.busyWith.janitorBusy=!1),this.busyWith=null}}const bd={pee:{props:["puddle_pee"],clip:"mop",seconds:1.3,filth:2,verb:"mop up the puddle",dread:7,reach:.3,pools:!0},water:{props:["puddle_water"],clip:"mop",seconds:1.1,filth:1,verb:"mop up the water",dread:7,reach:.3,pools:!0},vomit:{props:["vomit"],clip:"mop",seconds:2.4,filth:4,verb:"mop up the sick",dread:7,reach:.3,pools:!0},litter:{props:["litter_tissue","litter_can","litter_cup"],clip:"pickup",seconds:.55,filth:1,verb:"pick up litter",dread:0,reach:0,pools:!1},glass:{props:["broken_bottle"],clip:"mop",seconds:1.6,filth:2,verb:"sweep up the glass",dread:10,reach:.3,pools:!1},prints:{props:["prints_water"],clip:"mop",seconds:.45,filth:.2,verb:"mop up the footprints",dread:0,reach:0,pools:!1},cash:{props:["coins","wallet"],clip:"pickup",seconds:.4,filth:0,verb:"pocket it",dread:0,reach:0,pools:!1},bag:{props:["bin_bag"],clip:"pickup",seconds:.4,filth:2,verb:"pick the bag up",dread:4,reach:.4,pools:!1},roach:{props:["roach"],clip:"stomp",seconds:.35,filth:2,verb:"squash it",dread:8,reach:.9,pools:!1}},Vy=1.7;class Gy{constructor(e,t){this.kind=e,this.object=t,t.scale.setScalar(.01)}size=1;value=0;work=0;age=0;noticed=new WeakSet;heading=Math.random()*Math.PI*2;dither=0;shown=0;get pos(){return this.object.position}get def(){return bd[this.kind]}get seconds(){return this.def.seconds*this.size}get filth(){return this.def.filth*this.size}grow(){this.size=Math.min(Vy,this.size+.3)}update(e){this.age+=e,this.shown+=(this.size-this.shown)*Math.min(1,e*6),this.object.scale.setScalar(this.shown)}}const so=1.32,Wy=.52,Ln={regular:{speed:[1.5,1.9],walk:"walk",idle:"idle",stride:so,tool:null,wants:null,slips:.08},large:{speed:[1.05,1.3],walk:"walk",idle:"idle",stride:so,tool:null,wants:"🚽",slips:.12},family:{speed:[1,1.25],walk:"walk",idle:"idle",stride:so,tool:null,wants:"🚼",slips:.08},elderly:{speed:[.7,.9],walk:"old_walk",idle:"old_idle",stride:.43,tool:"stick",wants:"🚽",slips:.2},blind:{speed:[.8,1],walk:"cane_walk",idle:"cane_idle",stride:.79,tool:"cane",wants:"♿",slips:.25},wheelchair:{speed:[1.2,1.5],walk:"wheel_roll",idle:"wheel_idle",stride:1.3,tool:null,wants:"♿",slips:0}},Xy=.3,qy=2.2,jy=25,$y=9,su=new T(.4,0,-.1),Yy=new T(0,0,-.45),Ky=.6,Zy=.1,Jy=.31,Qy=.24,ba={room:.36,every:.45},Ma=.05,eb=1.7,Sa={squat:.65,sit:.6,access:.6},tb=an.wallGap,tr=an.stallFront,ru=tr+an.inside,nb=tr+an.insideAccess,zr=.35,ou=.3,ib=tr+.12,Hr=.04,wa={chance:.14,seconds:50,snoreEvery:2.6},Ea={sets:[1,2],every:.95},Ta={strain:.35,perSecond:.006,drunk:3},Vr={towel:.35,empties:.1,near:.5,seconds:.6},$i={share:.5,atTheSmell:.3,range:3,splatter:30,windUp:.42,after:1.05},Bs={share:.5,seconds:45,snoreEvery:2.6,onThePavement:[1.5,3],falls:.45},un={shameless:.25,basin:.4,bin:.65,binAtOnce:.15,seconds:[4,6],ahead:.31,back:.08,overBasin:.72,overBin:.67,fromBin:.52},Aa={after:40,perSecond:.3,most:16},Gr={share:.05,fuse:11,puffEvery:1.1,caught:6},Wr={share:.07,seconds:16,flashEvery:2.3,huff:6},au=.1,Ra={share:.1,seconds:[6,10],drops:.3},lu={drunk:.004,falling:.6},sb=2,Ca=.35,rb=1.2,ob=.18;class ab extends yo{constructor(e,t,n,i,r,o,a=!1){const l=a?{share:1,of:["formal"]}:e.scenario.costumes,c=n&&i==="m"&&t==="puke"&&Math.random()<Bs.share,h=new ys(e.assets,vd(i,r,n,l,c));super(e,h,n?ye(.95,1.2):ye(...Ln[r].speed)),this.need=t,this.drunk=n,this.sex=i,this.kind=r,this.line=o,this.vip=a,r==="family"&&(this.child=new ys(e.assets,Ux(l)),this.child.root.position.copy(su),this.node.add(this.child.root));const u=h.extent(n?"drunk_walk":Ln[r].walk),d=h.extent(Ln[r].idle);this.girth=Math.max(u.round,d.round)+(n?Ma:0),this.personal=Math.max(u.side,d.side,(u.front+u.back)/2)+(n?Ma:0),this.node.position.copy(o.spawn.pos),this.node.position.z+=ye(-.4,.4),this.node.rotation.y=o.spawn.heading,this.sloppiness=n?2.2:r==="family"?1.5:1,this.lightweight=c,this.lights=!n&&!a&&r==="regular"&&Math.random()<Gr.share,this.snaps=!a&&r==="regular"&&Math.random()<Wr.share,a&&(this.star=e.overlay.add(this.pos,2.15,"badge show","⭐")),this.patience=t==="puke"?ye(35,50):r==="family"?ye(85,115):ye(120,170),this.routine=this.life()}mood=100;fixture=null;grievance=null;used=!1;inLine=!1;sloppiness;lightweight;flat=!1;dragged=!1;thrownOut=!1;roused=!1;lights;snaps;star=null;seenBy=new WeakSet;improvising=!1;shameless=Math.random()<un.shameless;pottyBin=null;pottied=!1;child=null;scrolls=Math.random()<.4;patience;waited=0;warned=0;nagIn=4;sway=Math.random()*10;weave=0;down=0;walking=!1;scuffle=null;inPlace=!1;childSeated=!1;childAt=new T;tracking=null;route=[];routeTo=null;options(){const e=["squat","sit"],t=["sit"],n=this.sex==="m"&&this.need==="pee"?[["urinal"]]:[];switch(this.kind){case"wheelchair":return this.game.level.fixtures.some(r=>r.kind==="access"&&r.room===this.line.id)?[["access"]]:[t];case"blind":return[["access"],...n,e];case"family":return this.improvising?[["access"],t,["squat"],["sink"]]:[["access"],t,["squat"]];case"large":return[...n,t];case"elderly":return[...n,t,["access"]];case"regular":switch(this.need){case"pee":return[...n,e];case"poo":return[e];case"puke":return[e,["sink"]];case"wash":return[["sink"]]}}}get label(){return this.flat?`${this.kind} (out cold)`:this.kind+(this.engaged?" (at a fixture)":this.scuffle?" (scuffling)":this.moving?"":" (standing)")}get give(){return this.down>0||this.flat?0:super.give}bodies(){const e=super.bodies(),t={give:0,wish:null,kin:this};if(this.child&&!this.childSeated&&e.push({name:"child",pos:this.childAt,radius:Qy,...t}),this.down>0||this.flat){const n=this.body.extent(this.flat?"out_cold":"slip").back;for(let i=ba.every;i<n;i+=ba.every){const r=Xe({pos:this.pos,heading:this.node.rotation.y},-i);e.push({name:`${this.kind} (down)`,pos:r,radius:ba.room,...t})}}if(this.dragged)for(const n of e)n.kin=this.game.janitor;return e}tread(e){if(this.kind==="wheelchair"||this.tracking)return;const[t,n]=Ea.sets;this.tracking={prop:`prints_${e}`,sets:t+Math.floor(Math.random()*(n-t+1)),metres:Ea.every*.6}}get slips(){return this.drunk?Xy:Ln[this.kind].slips}slip(){if(this.down>0||this.engaged||this.flat)return!1;const e=this.game.level.landing(this.pos,this.node.rotation.y,this.body.extent("slip"));return e===null?!1:(this.node.rotation.y=e,this.down=qy,this.mood-=jy,this.body.hold(null),this.body.play("slip",{once:!0}),this.child?.play("idle"),this.emote("💫"),(this.kind==="elderly"||this.kind==="blind")&&(this.grievance="🤕"),Math.random()<lu.falling&&this.game.dropCash(this.pos),!0)}splattered(){this.mood-=$i.splatter,this.emote("🤮")}update(e){if(this.tick(e),this.child){if(!this.childSeated){const t=this.walking?Yy:su,n=this.child.root.position.lerp(t,1-Math.exp(-6*e)),i=Math.sin(this.node.rotation.y),r=Math.cos(this.node.rotation.y),o=new T(this.pos.x+n.x*r+n.z*i,0,this.pos.z-n.x*i+n.z*r);this.game.level.keepOffSolid(o,Jy),this.childAt.copy(o);const a=o.x-this.pos.x,l=o.z-this.pos.z;n.set(a*r-l*i,0,a*i+l*r)}this.child.update(e)}}tick(e){if(this.down>0){this.down-=e,this.down<=0&&(this.walking?this.stride():this.rest()),this.body.update(e);return}this.drunk&&(this.sway+=e,this.weave+=((this.engaged||this.flat?0:Ma)-this.weave)*Math.min(1,e*6),this.body.root.position.x=Math.sin(this.sway*2.3)*this.weave),super.update(e)}dispose(){this.star?.remove(),this.child?.dispose(),super.dispose()}*life(){const{game:e,line:t}=this;if(e.queueFor(t).length>=t.slots.length){yield*this.go(t.despawn.pos),this.gone=!0;return}if(!(yield*this.queueUp())){yield*this.go(t.despawn.pos),e.settle(this),this.gone=!0;return}const{fixture:n}=this;if(yield*this.go(t.enter[0],void 0,zr),yield*this.walk(t.enter.slice(1),void 0,zr),e.firstImpression(this),Math.random()<(e.scenario.trackWater??0)&&e.spawnMess("water",this.pos,.4),this.pottyBin?yield*this.pottyAt(this.pottyBin):this.drunk&&this.need==="puke"&&e.hygiene<e.venue.standard.poor&&Math.random()<$i.atTheSmell?(n.reservedBy=null,this.fixture=null,yield*this.spew(),this.used=!0):yield*this.visit(n),this.lightweight&&this.used&&(yield*this.collapse())){e.settle(this),yield*this.go(t.despawn.pos),this.gone=!0;return}const r=!this.pottied&&this.need!=="wash"&&this.kind!=="wheelchair"&&Math.random()<(this.drunk?.45:.8)&&(yield*this.washHands());(r?Math.random()<Vr.towel:Math.random()<Vr.empties*e.messiness)&&(yield*this.binIt(r?"litter_tissue":le(["litter_can","litter_cup"]))),yield*this.go(t.exit[0],void 0,zr),yield*this.walk([t.exit[1]],void 0,zr),e.settle(this),this.kind==="regular"&&!this.drunk&&Math.random()<Ra.share&&(yield*this.smokeOutside());for(const o of[...t.exit.slice(2),t.despawn.pos])yield*this.go(o);this.gone=!0}*visit(e){const{game:t}=this;if(yield*this.waitAt(e),this.child&&e.kind==="sink"){yield*this.pottyAt(e),e.reservedBy=null,this.fixture=null;return}e.dirt>0&&(this.mood-=20,this.emote("😖"),yield*this.act("disgust",.7,!0)),this.engaged=e.taken=!0;const[n,i]=this.usage(e),[r,o]=this.wayIn(e,n);yield*this.walk([e.approach.pos,...r],o);const a=e.isStall&&!this.child&&this.need!=="puke";e.heldOpen=e.isStall&&!a,e.occupied=!0,a&&(this.rest(),yield*this.pause(Ca)),this.child?yield*this.helpChild(e,n,i):yield*this.act(n,i),a&&this.drunk&&n==="sit"&&Math.random()<wa.chance*t.messiness&&(yield*this.passOut(e)),a&&this.lights&&(yield*this.lightUp(e)),e.isStall&&this.need!=="puke"&&(e.paper>0?e.paper--:t.career.has("tissues")?t.earn(sb,"tissues",this.pos):this.mood-=10),t.afterUse(this,e,this.need),this.rest(),yield*this.pause(Ca*.7),e.occupied=e.heldOpen=!1,this.used=!0,a&&(yield*this.pause(Ca)),yield*this.walk([...r.slice(0,-1).reverse(),e.approach.pos]),this.engaged=e.taken=!1,e.reservedBy=null,this.fixture=null}*pottyAt(e){const t=this.child,n="kind"in e?e:null;if(n){this.engaged=n.taken=!0;const[[i],r]=this.wayIn(n,"hold_out");yield*this.walk([n.approach.pos,Xe({pos:i,heading:r},-.08)],r),n.occupied=!0}else{const i=e,r=i.stand;yield*this.go(r.pos,r.heading),this.engaged=!0;const o=r.pos.distanceTo(i.pos)-un.fromBin;yield*this.walk([Xe(r,Math.max(0,o))],r.heading)}if(this.childSeated=!0,t.root.position.set(0,n?un.overBasin:un.overBin,un.ahead+(n?un.back:0)),t.root.rotation.y=Math.PI,t.play("squat"),this.walking=!1,this.body.hold(null),this.body.play("hold_out",{fade:.05}),this.emote("🙈"),yield*this.pause(ye(...un.seconds)),this.game.pottied(this,e),t.root.rotation.y=0,t.play("idle"),this.childSeated=!1,this.pottied=this.used=!0,this.body.play(Ln[this.kind].idle,{fade:.02}),this.rest(),yield*this.pause(.3),n)n.occupied=!1,yield*this.walk([n.approach.pos]),n.taken=!1;else{const i=e;yield*this.walk([i.stand.pos]),i.user===this&&(i.user=null)}this.engaged=!1}*lightUp(e){const{game:t}=this;e.smoky=!0,t.hint("smoky");let n=.4;for(let i=0;e.smoky&&i<Gr.fuse;){const r=yield;i+=r,!((n-=r)>0)&&(n=Gr.puffEvery,t.overlay.pop(e.use.pos,2,"💨","emote",1.6))}e.smoky?(e.smoky=!1,t.sprinklers(e)):(this.mood-=Gr.caught,this.emote("😳"))}*selfie(e){const{game:t}=this;e.hogged=!0,t.hint("selfie"),this.walking=!1,this.body.hold("phone"),this.body.play("phone");let n=.8;for(let i=0;e.hogged&&i<Wr.seconds;){const r=yield;i+=r,!((n-=r)>0)&&(n=Wr.flashEvery,t.overlay.pop(this.pos,1.9,"📸","emote",1.2))}e.hogged||(this.mood-=Wr.huff,this.emote("🙄")),e.hogged=!1,this.body.hold(null)}*spew(){const{game:e}=this,t=i=>{let r=0;for(let o=.6;o<=$i.range&&e.level.open(Xe({pos:this.pos,heading:i},o),.25);o+=.4)r=o;return r},[n]=[0,Math.PI/2,-Math.PI/2,Math.PI].map(i=>this.node.rotation.y+i).sort((i,r)=>t(r)-t(i));yield*this.walk([],n),this.walking=!1,this.body.hold(null),this.body.play("spew",{once:!0}),this.emote("🤮"),yield*this.pause($i.windUp),e.spew(this,t(n)),yield*this.pause($i.after)}*collapse(){const{game:e}=this,t=this.body.extent("out_cold"),n=e.level.landing(this.pos,this.node.rotation.y,{side:t.side+au,front:t.front,back:t.back+au});if(n===null)return!1;this.node.rotation.y=n,this.flat=!0,this.walking=!1,this.body.hold(null),this.body.play("slip",{once:!0}),this.emote("😵"),e.sprawl(this),yield*this.pause(Bs.falls),this.body.play("out_cold");let i=1.2;const r=a=>{(i-=a)>0||(i=Bs.snoreEvery,e.overlay.pop(this.pos,1,"💤","emote",1.8))};for(let a=0;!this.thrownOut&&!this.roused&&a<Bs.seconds;){const l=yield;this.dragged||(a+=l),r(l)}const o=this.thrownOut;if(o)for(let a=ye(...Bs.onThePavement);a>0;){const l=yield;a-=l,r(l)}return e.cameRound(this),this.flat=this.dragged=this.engaged=!1,this.emote("😵‍💫"),this.rest(),yield*this.pause(.6),o}*queueUp(){const e=this.game.queueFor(this.line),{wants:t}=Ln[this.kind];for(this.vip?e.unshift(this):e.push(this);;){const n=yield;if(this.fixture)break;if(this.scuffle){const u=this.scuffle.against(this);this.inLine=!1,this.turn(Math.atan2(u.pos.x-this.pos.x,u.pos.z-this.pos.z),n*2),this.body.hold(null),this.body.play("shove"),(this.nagIn-=n)<=0&&(this.nagIn=1.7,this.emote("💢"));continue}this.waited+=n;const i=e.indexOf(this),r=this.line.slots[i],o=r.pos.x-this.pos.x,a=r.pos.z-this.pos.z,l=Math.hypot(o,a);this.inLine=l<.4;const c=this.waited/this.patience;if(this.child&&(this.shameless||c>un.basin)&&(this.improvising=!0),this.child&&c>(this.shameless?un.binAtOnce:un.bin)&&this.inLine){const u=this.game.binFor(this);if(u){u.user=this,this.pottyBin=u,e.splice(e.indexOf(this),1);break}}if(l>rb){(this.routeTo!==r||this.route.length===0)&&(this.route=this.game.level.route(this.pos,r.pos,this.girth),this.routeTo=r);const u=f=>Math.hypot(f.x-this.pos.x,f.z-this.pos.z);for(;this.route.length>1&&u(this.route[0])<.15;)this.route.shift();const[d]=this.route;this.stride(),this.step(d.x-this.pos.x,d.z-this.pos.z,u(d)||1,n)}else if(l>(this.inPlace?ob:.05))this.inPlace=!1,this.stride(),this.step(o,a,l,n);else{if(this.inPlace=!0,c>Ta.strain&&i>0&&Math.random()<n*Ta.perSecond*(this.drunk?Ta.drunk:1)&&this.game.brawl(this,e[i-1]),this.turn(r.heading,n),this.kind==="regular"){const u=this.scrolls&&c<.55;this.body.play(c>.8?"desperate":c>.55?"impatient":u?"phone":"idle"),this.body.hold(u?"phone":null)}else this.rest();t&&i<3&&(this.nagIn-=n)<=0&&(this.nagIn=$y,this.emote(t),this.game.hint(`wants${t}`))}const h=c>.85?2:c>.55?1:0;if(h>this.warned&&(this.warned=h,this.emote((this.need==="puke"?["🤢","🤮"]:["😣","😫"])[h-1]),this.game.hint("restless")),this.waited>this.patience)return e.splice(e.indexOf(this),1),yield*this.giveUp(),!1}return this.mood-=Math.min(Aa.most,Math.max(0,this.waited-Aa.after)*Aa.perSecond),!0}*giveUp(){if(this.need==="puke"&&Math.random()<$i.share)yield*this.spew();else if(this.need==="puke"){const e=this.body.extent("vomit"),t=[0,Math.PI/2,-Math.PI/2,Math.PI].map(n=>this.node.rotation.y+n).find(n=>this.game.level.open(Xe({pos:this.pos,heading:n},e.front-e.side),e.side+Hr));t!==void 0&&(yield*this.walk([],t)),yield*this.act("vomit",1.2),this.game.spawnMess("vomit",Xe({pos:this.pos,heading:this.node.rotation.y},.45),.1),this.emote("🤮"),yield*this.act("vomit",1)}else this.need==="pee"?(this.game.spawnMess("pee",this.pos,.1),this.complain(this.child?"😭":"💦"),yield*this.act("disgust",1,!0)):this.need==="poo"&&this.complain(this.child?"😭":"😡")}*passOut(e){const{game:t}=this;e.asleep=!0,this.body.play("doze"),t.hint("asleep");let n=0;for(let i=0;e.asleep&&i<wa.seconds;){const r=yield;i+=r,!((n-=r)>0)&&(n=wa.snoreEvery,t.overlay.pop(e.use.pos,2,"💤","emote",1.8))}e.asleep=!1,this.emote("😵")}*smokeOutside(){const{game:e}=this,t=e.takeSmokingSpot(this);if(!t)return;const{ashtray:n}=e.level;yield*this.go(t,Math.atan2(n.x-t.x,n.z-t.z)),this.body.hold("cig"),this.body.play("smoke"),yield*this.pause(ye(...Ra.seconds)),Math.random()<Ra.drops&&e.spawnMess("litter",this.pos,.3),this.body.hold(null),e.leaveSmokingSpot(this)}*helpChild(e,t,n){const i=this.child;this.childSeated=!0,this.node.updateMatrixWorld(),i.root.position.copy(this.node.worldToLocal(e.use.pos.clone())),i.root.position.y=t==="sit"?Zy:0,i.root.rotation.y=e.use.heading-this.node.rotation.y,i.play(t),this.body.play("idle"),yield*this.pause(n*1.3),i.root.rotation.y=0,i.play("idle"),this.childSeated=!1}*waitAt(e){const{approach:t}=e;for(;;){this.pos.distanceTo(t.pos)>ou&&(yield*this.go(t.pos,t.heading));const n=e.janitorBusy||e.attendedBy!==null||this.game.janitorIn(e);if(!n&&this.pos.distanceTo(t.pos)<=ou)return;this.rest();const i=yield;n&&(this.mood-=i*2)}}wayIn(e,t){const{use:n,approach:i}=e,r=this.body.extent(this.kind==="wheelchair"?"wheel_idle":t);if(!e.isStall){const l=tb[e.kind]??.6;return[[Xe(n,-Math.max(0,r.front+Hr-l))],n.heading]}const o=Xe(i,e.kind==="access"?nb:ru);if(this.child)return[[Xe(i,ib)],i.heading];if(this.need==="puke"){const l=Math.max(r.front+Hr,Sa[e.kind]+.45),c=eb-l;return c<ru-tr+.05?[[Xe(i,Math.max(.1,tr+c))],i.heading]:[[o,Xe(n,l-Sa[e.kind])],n.heading+Math.PI]}if(this.kind==="wheelchair"&&e.park)return[[o,e.park.pos],e.park.heading];const a=this.body.extent(Ln[this.kind].walk).round;return[[o,Xe(n,Math.max(0,a+Hr-Sa[e.kind]))],n.heading]}*washHands(){const e=this.game.claim(this,[["sink"]]);if(!e)return this.mood-=5,!1;yield*this.waitAt(e),this.engaged=e.taken=!0;const[t,n]=this.wayIn(e,"wash");return yield*this.walk([e.approach.pos,...t],n),e.occupied=!0,yield*this.act("wash",ye(1.8,2.6)),this.snaps&&(yield*this.selfie(e)),e.occupied=!1,this.game.afterUse(this,e,"wash"),yield*this.walk([e.approach.pos]),this.engaged=e.taken=!1,e.reservedBy=null,!0}*binIt(e){if(this.kind==="wheelchair"||this.kind==="blind"||this.child)return;const t=this.game.binFor(this);t?.stand&&(t.user=this,yield*this.go(t.stand.pos,t.stand.heading),this.pos.distanceTo(t.stand.pos)<Vr.near&&(yield*this.act("wash",Vr.seconds),this.game.binned(t,this,e),this.rest()),t.user===this&&(t.user=null))}usage(e){return this.need==="puke"?["vomit",ye(3.5,5)]:e.kind==="sink"?["wash",ye(2,3)]:e.kind==="urinal"?["pee",ye(3,4.5)]:[e.kind==="squat"?"squat":"sit",this.need==="poo"?ye(7,11):ye(3.5,5)]}*act(e,t,n=!1){this.kind==="wheelchair"&&([e,n]=["wheel_idle",!1]),this.walking=!1,this.body.hold(null),this.body.play(e,{once:n}),this.child?.play("idle"),yield*this.pause(t)}stride(){if(this.walking=!0,this.down>0)return;const e=Ln[this.kind];this.body.hold(e.tool);const t=this.drunk&&!this.engaged;this.body.play(t?"drunk_walk":e.walk,{speed:this.speed/(t?Wy:e.stride)}),this.child?.play("walk",{speed:this.speed/(so*Ky)})}rest(){if(this.walking=!1,this.down>0)return;const e=Ln[this.kind];this.body.hold(e.tool),this.body.play(e.idle),this.child?.play("idle")}stepped(e){const{game:t,tracking:n}=this;t.stepRoundSign(this.pos),t.notice(this),n&&!this.engaged&&(n.metres-=this.speed*e)<=0&&(t.spawnMess("prints",this.pos,0,{prop:n.prop,heading:this.node.rotation.y}),n.metres=Ea.every,--n.sets===0&&(this.tracking=null)),this.drunk&&Math.random()<e*lu.drunk&&t.dropCash(this.pos),this.drunk&&Math.random()<e*.01&&t.spawnMess(Math.random()<(t.scenario.glass??.1)?"glass":"litter",this.pos,.25)}emote(e){super.emote(e,this.kind==="wheelchair"?1.6:1.8)}complain(e){this.grievance=e,this.emote(e)}}const _i={slow:1/42,fast:1/57,patience:2.5,comfort:14,settle:3,stall:.25,regret:20};class lb{lite;rungs;rung=0;best=0;average=1/60;slowFor=0;fastFor=0;settling=0;sinceClimb=1/0;frames=0;renderer;sun;resized=()=>{};constructor(){const e=new URLSearchParams(location.search).get("gfx");this.lite=e?e==="lite":matchMedia("(pointer: coarse)").matches;const t=Math.min(devicePixelRatio,this.lite?1.5:2);this.rungs=[];for(let n=t;n>1.001;n-=.25)this.rungs.push({ratio:n,shadows:"every"});this.rungs.push({ratio:1,shadows:"every"},{ratio:1,shadows:"alternate"},{ratio:1,shadows:"none"})}get antialias(){return!this.lite}get shadowType(){return this.lite?Ul:bu}get shadowSize(){return this.lite?1024:2048}get tubes(){return this.lite?2:4}get label(){const{ratio:e,shadows:t}=this.rungs[this.rung],n=t==="every"?"":t==="alternate"?", lighter shadows":", no shadows";return`${this.lite?"light":"full"} · ×${e.toFixed(2).replace(/\.?0+$/,"")}${n}`}attach(e,t,n){this.renderer=e,this.sun=t,this.resized=n,this.apply()}apply(){const{ratio:e,shadows:t}=this.rungs[this.rung],{renderer:n}=this;n.getPixelRatio()!==e&&(n.setPixelRatio(e),this.resized()),this.sun.castShadow=t!=="none",n.shadowMap.autoUpdate=t==="every",n.shadowMap.needsUpdate=!0,this.settling=_i.settle,this.slowFor=this.fastFor=0}frame(e,t){if(this.frames++,this.rungs[this.rung].shadows==="alternate"&&this.frames%2===0&&(this.renderer.shadowMap.needsUpdate=!0),!t||document.hidden||e>_i.stall){this.slowFor=this.fastFor=0;return}if(this.average+=(e-this.average)*.08,this.sinceClimb+=e,!((this.settling-=e)>0))if(this.average>_i.slow){if(this.fastFor=0,(this.slowFor+=e)<_i.patience||this.rung===this.rungs.length-1)return;this.sinceClimb<_i.regret&&(this.best=this.rung+1),this.rung++,this.apply()}else if(this.average<_i.fast){if(this.slowFor=0,(this.fastFor+=e)<_i.comfort||this.rung<=this.best)return;this.rung--,this.sinceClimb=0,this.apply()}else this.slowFor=this.fastFor=0}}const Ia=500,Yi={minX:-15,maxX:15,minZ:3.4,maxZ:13,top:9},Ki=new T(-3.5,-16,.8),La=.035;class cb{object;positions=new Float32Array(Ia*6);constructor(){for(let n=0;n<Ia;n++)this.place(n,Math.random()*Yi.top);const e=new Ft;e.setAttribute("position",new bt(this.positions,3));const t=new Kl({color:11125992,transparent:!0,opacity:.45});this.object=new od(e,t),this.object.frustumCulled=!1,this.object.visible=!1}place(e,t){const n=Vt.lerp(Yi.minX,Yi.maxX,Math.random()),i=Vt.lerp(Yi.minZ,Yi.maxZ,Math.random());this.positions.set([n,t,i,n-Ki.x*La,t-Ki.y*La,i-Ki.z*La],e*6)}update(e){if(!this.object.visible)return;const t=this.positions;for(let n=0;n<Ia;n++){const i=n*6;if(t[i+1]<0){this.place(n,Yi.top);continue}for(const r of[i,i+3])t[r]+=Ki.x*e,t[r+1]+=Ki.y*e,t[r+2]+=Ki.z*e}this.object.geometry.attributes.position.needsUpdate=!0}}const pt={most:2,out:[12,30],stops:[2,4],sniff:[.7,1.9],run:2.6,bolt:4.8,fear:2.4,girth:.16,range:3.2,nose:5,gnaws:4.5,spills:3,seen:1.3,dread:9,shy:[3,6],size:1.4};class hb{constructor(e,t,n,i){this.game=e,this.object=t,this.home=n,this.wait=i,this.tail=t.getObjectByName("rat_tail")??null,t.position.copy(n),t.visible=!1,t.scale.setScalar(.01)}state="hiding";wait;bag=null;path=[];stops=0;shy=0;shown=0;clock=ye(0,10);heading=0;tail;frightened=new WeakSet;get pos(){return this.object.position}get out(){return this.state!=="hiding"}update(e){const{game:t}=this;this.clock+=e;const n=this.smells();this.state==="hiding"?(this.wait-=e,this.shy-=e,(this.wait<=0||n&&this.shy<=0)&&this.emerge(n)):(this.pos.distanceTo(t.janitor.pos)<pt.fear&&this.state!=="bolting"?this.bolt():this.state==="running"&&n&&!this.bag&&this.make(n),this[this.state](e),this.startle()),this.pose(e)}smells(){return this.bag||this.state==="bolting"?null:this.game.messes.find(e=>e.kind==="bag"&&e.age>=pt.nose&&!this.game.rats.some(t=>t.bag===e))??null}emerge(e){this.pos.copy(this.home),this.object.visible=!0,this.stops=Math.round(ye(...pt.stops)),e?this.make(e):this.forage()}make(e){this.bag=e,this.run(e.pos)}forage(){const{game:e,home:t}=this,{level:n}=e,i=e.messes.filter(o=>o.kind==="litter"&&e.outside(o.pos)&&o.pos.distanceTo(t)<pt.range*2);let r=i.length?i[Math.floor(Math.random()*i.length)].pos.clone():null;for(let o=0;!r&&o<8;o++){const a=new T(t.x+ye(-3.2,pt.range),0,t.z+ye(-.2,pt.range*.8));e.outside(a)&&n.open(a,pt.girth+.1)&&n.nav.clear(a)&&(r=a)}r?this.run(r):this.goHome()}run(e){this.path=this.game.level.route(this.pos,e,pt.girth),this.state="running"}goHome(){this.bag=null,this.stops=0,this.run(this.home)}bolt(){this.goHome(),this.state="bolting"}scurry(e,t){let n=t*e;for(;n>0&&this.path.length;){const i=this.path[0],r=i.x-this.pos.x,o=i.z-this.pos.z,a=Math.hypot(r,o);if(a<=n){this.pos.set(i.x,0,i.z),this.path.shift(),n-=a;continue}this.pos.x+=r/a*n,this.pos.z+=o/a*n,this.heading=Math.atan2(r,o),n=0}return this.path.length===0}running(e){if(!this.scurry(e,pt.run))return;if(this.stops===0&&!this.bag)return this.hide();const{bag:t}=this;if(t&&this.game.messes.includes(t)&&t.pos.distanceTo(this.pos)<.5){this.state="gnawing",this.wait=pt.gnaws;return}this.bag=null,this.state="sniffing",this.wait=ye(...pt.sniff)}bolting(e){this.scurry(e,pt.bolt)&&(this.hide(),this.shy=ye(...pt.shy))}sniffing(e){(this.wait-=e)>0||(--this.stops>0?this.forage():this.goHome())}gnawing(e){const{bag:t,game:n}=this;if(!t||!n.messes.includes(t))return this.goHome();(this.wait-=e)>0||(n.tearOpen(t),this.goHome())}hide(){this.state="hiding",this.bag=null,this.wait=ye(...pt.out)}startle(){const{game:e,pos:t}=this,{minX:n,maxX:i,maxZ:r}=e.level.interior;if(!(t.z>r||t.x<n||t.x>i))for(const o of e.visitors)o.kind==="blind"||this.frightened.has(o)||o.pos.distanceTo(this.pos)>pt.seen||(this.frightened.add(o),o.mood-=pt.dread,o.emote("😱"))}pose(e){const{object:t}=this,n=this.state==="running"||this.state==="bolting";this.shown+=((this.out?1:0)-this.shown)*Math.min(1,e*12),t.scale.setScalar(Math.max(.01,this.shown*pt.size)),!this.out&&this.shown<.05&&(t.visible=!1),t.rotation.y+=xo(t.rotation.y,this.heading)*Math.min(1,e*14),t.position.y=n?Math.abs(Math.sin(this.clock*24))*.018:0,t.rotation.x=this.state==="gnawing"?Math.sin(this.clock*22)*.1:this.state==="sniffing"?Math.sin(this.clock*9)*.06:0,this.tail&&(this.tail.rotation.y=Math.sin(this.clock*(n?16:3))*(n?.45:.25))}dispose(){this.object.removeFromParent()}}const ub=1.32,Ks={first:[4,12],next:[10,30],until:.93,cheers:[9,26]},cu=[{clip:"swig",tool:"bottle"},{clip:"swig",tool:"bottle"},{clip:"smoke",tool:"cig"},{clip:"swig",tool:"bottle"}],db=["🍻","😂","🎶","🥴","🍺"];class fb extends yo{constructor(e,t,n,i,r,o){const a=Math.random()<.5?"f":"m",l=new ys(e.assets,vd(a,"regular",!1,e.scenario.costumes));super(e,l,ye(1.1,1.35)),this.spot=t,this.way=n,this.from=i,this.delay=r,this.habit=cu[o%cu.length],this.girth=Math.max(l.extent("walk").round,l.extent(this.habit.clip).round),this.node.position.copy(i),this.node.visible=!1,this.pace=ye(.8,1.15),this.routine=this.night()}settled=!1;habit;pace;get label(){return"reveller"}*night(){const{game:e,spot:t,way:n}=this;yield*this.pause(this.delay),this.node.visible=!0,yield*this.go(new T(t.pos.x,0,n.z)),this.engaged=!0,yield*this.walk([t.pos],t.heading),this.settled=!0;let i=ye(...Ks.cheers);for(;e.progress<Ks.until;){const r=yield;(i-=r)>0||(i=ye(...Ks.cheers),this.emote(le(db)))}this.settled=!1,yield*this.walk([new T(t.pos.x,0,n.z)]),this.engaged=!1,yield*this.go(this.from),this.gone=!0}stride(){this.body.hold(null),this.body.play("walk",{speed:this.speed/ub})}rest(){this.body.hold(this.habit.tool),this.body.play(this.habit.clip,{speed:this.pace})}}class pb{constructor(e,t){this.a=e,this.b=t,this.update(0)}age=0;work=0;pos=new T;label=null;update(e){this.age+=e,this.pos.copy(this.a.pos).lerp(this.b.pos,.5)}against(e){return e===this.a?this.b:this.a}}const Xr=[{bass:38,keys:[53,57,60,64]},{bass:43,keys:[53,57,59,62]},{bass:48,keys:[52,55,59,62]},{bass:45,keys:[52,55,57,60]}],hu=[76,0,0,74,0,0,72,0,0,0,69,0,72,0,0,0],uu=[0,0,74,0,76,0,79,0,0,0,76,0,0,0,0,0],du=[81,0,0,79,0,0,76,0,74,0,0,0,76,0,0,0],qr=[0,0,72,0,74,0,0,72,0,0,69,0,67,0,0,0],fu=[0,0,0,0,0,0,0,0,79,0,76,0,74,0,72,0],Pa=[hu,uu,du,qr,hu,uu,fu,qr,null,null,null,null,du,qr,fu,qr],jr={menu:78,calm:92,frantic:132},mb=.16,gb=.5,_b=.25,vb=40,xb=.05,dn=s=>440*2**((s-69)/12);class yb{constructor(e,t){this.ctx=e,this.bus=e.createGain(),this.bus.gain.value=0,this.bus.connect(t),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const n=this.noise.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1}heat=0;mood=null;bus;noise;timer=0;step=0;next=0;warmth=0;play(e){if(e===this.mood)return;const{ctx:t}=this;this.mood=e,this.bus.gain.cancelScheduledValues(t.currentTime),this.bus.gain.setTargetAtTime(e?gb:0,t.currentTime,.3),e&&(this.step=0,this.warmth=0,this.next=Math.max(this.next,t.currentTime+.1),this.timer||(this.timer=window.setInterval(this.tick,vb)))}tick=()=>{const{ctx:e}=this;if(!this.mood){window.clearInterval(this.timer),this.timer=0;return}for(this.next<e.currentTime&&(this.next=e.currentTime+.05);this.next<e.currentTime+_b;){this.warmth+=(this.heat-this.warmth)*xb;const n=60/(this.mood==="menu"?jr.menu:jr.calm+(jr.frantic-jr.calm)*this.warmth)/4,i=this.step%2?n*mb*(1-this.warmth):0;this.mood==="menu"?this.lull(this.step,this.next+i,n):this.groove(this.step,this.next+i,n),this.next+=n,this.step=(this.step+1)%(16*Pa.length)}};lull(e,t,n){const i=Math.floor(e/16),r=e%16,o=Xr[i%Xr.length];if(r===0){for(const l of o.keys)this.voice(dn(l),t,n*15,"sine",.045,.5);this.voice(dn(o.bass),t,n*12,"triangle",.12,.05)}r%4===2&&this.voice(dn(o.keys[(r>>2)%4]+12),t,n*5,"triangle",.035);const a=i%8<4?0:Pa[i]?.[r]??0;a&&this.voice(dn(a-12),t,n*5,"sine",.09,.02)}groove(e,t,n){const i=Math.floor(e/16),r=e%16,o=Xr[i%Xr.length],a=this.warmth;if(r===0||r===6||r===10||a>.5&&r===14)for(const c of o.keys)this.voice(dn(c),t,n*2.4,"triangle",.05);r===0&&this.voice(dn(o.bass),t,n*3.5,"triangle",.2),(r===6||r===8)&&this.voice(dn(o.bass+(r===6?12:0)),t,n*1.8,"triangle",.16),r===14&&this.voice(dn(o.bass+7),t,n*1.6,"triangle",.14);const l=Pa[i]?.[r]??0;l&&(this.voice(dn(l),t,n*2.8,"triangle",.1),this.voice(dn(l+12),t,n*1.5,"sine",.025)),(r===0||r===8||a>.5&&r===11)&&this.kick(t),(r===4||r===12)&&this.burst(t,.13,"bandpass",1900,.16+.08*a),(r%2===0||a>.55)&&this.burst(t,.035,"highpass",7e3,r%4===0?.07:.04+.03*a)}voice(e,t,n,i,r,o=.008){const{ctx:a}=this,l=a.createOscillator(),c=a.createGain();l.type=i,l.frequency.value=e,c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(r,t+o),c.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(n,o+.05)),l.connect(c).connect(this.bus),l.start(t),l.stop(t+Math.max(n,o+.05)+.05)}kick(e){const{ctx:t}=this,n=t.createOscillator(),i=t.createGain();n.frequency.setValueAtTime(130,e),n.frequency.exponentialRampToValueAtTime(45,e+.12),i.gain.setValueAtTime(.45,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.17),n.connect(i).connect(this.bus),n.start(e),n.stop(e+.2)}burst(e,t,n,i,r){const{ctx:o}=this,a=o.createBufferSource();a.buffer=this.noise;const l=o.createBiquadFilter();l.type=n,l.frequency.value=i;const c=o.createGain();c.gain.setValueAtTime(r,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(l).connect(c).connect(this.bus),a.start(e,Math.random()*.5,t+.02)}}const bb=.55,Mb=3;class Sb{ctx=null;master=null;fx=null;tillAt=0;muted=!1;tune=null;wanted=null;constructor(){addEventListener("keydown",e=>{e.code==="KeyM"&&!e.repeat&&this.toggle()})}toggle(){this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:.3)}unlock(){if(!this.ctx){this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.3,this.master.connect(this.ctx.destination),this.fx=this.ctx.createGain(),this.fx.gain.value=bb,this.fx.connect(this.master),this.tune=new yb(this.ctx,this.master),this.tune.play(this.wanted);const{ctx:e}=this;document.addEventListener("visibilitychange",()=>void(document.hidden?e.suspend():e.resume()))}this.ctx.resume()}music(e){this.wanted=e,this.tune?.play(e)}set heat(e){this.tune&&(this.tune.heat=e)}tone(e,t,n,i="sine",r=1,o=e){if(!this.ctx||!this.fx)return;const a=this.ctx.currentTime+t,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=i,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(o,a+n),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(r,a+.01),c.gain.exponentialRampToValueAtTime(.001,a+n),l.connect(c).connect(this.fx),l.start(a),l.stop(a+n+.02)}hiss(e,t,n,i){if(!this.ctx||!this.fx)return;const{ctx:r}=this,o=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),a=o.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=Math.random()*2-1;const l=r.createBufferSource();l.buffer=o;const c=r.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(t,r.currentTime),c.frequency.exponentialRampToValueAtTime(n,r.currentTime+e);const h=r.createGain();h.gain.setValueAtTime(i,r.currentTime),h.gain.exponentialRampToValueAtTime(.001,r.currentTime+e),l.connect(c).connect(h).connect(this.fx),l.start()}clean(){this.tone(659,0,.14,"sine",.3),this.tone(988,.07,.22,"sine",.3)}tip(){!this.ctx||this.ctx.currentTime<this.tillAt||(this.tillAt=this.ctx.currentTime+Mb,this.tone(1319,0,.2,"sine",.22))}complaint(){this.tone(160,0,.4,"sawtooth",.4,80)}flush(){this.hiss(.9,1400,300,.14)}splat(){this.tone(220,0,.14,"sine",.35,90)}grab(){this.tone(520,0,.07,"triangle",.35,780)}}const wb=10,Eb=60,pu={most:10,apart:.55},Tb=34,Ab=75,Rb=30,Cb=3,mu={urinal:.11,squat:.15,sit:.12,access:.12,sink:.05},Ib={urinal:1.75,squat:2,sit:2,access:2,sink:1.85},Lb=4,Zn={bright:26,every:[9,22],lasts:[.2,.55],dips:.5,fan:9},Jn={filth:14,most:4,every:18,stroll:.9,bolt:1.7,fear:1.7},vi={radius:2.3,body:.42},Pb=.45,gu={reach:1.25,open:1.75},xi={passes:3,sidestep:.6,aside:.35,lookAhead:.15,tolerated:.2},Zi={seconds:14,lull:55,spreads:3,sours:1,bruises:25},Da=[[0,3352655,1.1],[.2,1315103,.9],[.84,1315103,.9],[1,5981806,1.15]],Db=8,Qn={pass:70,fail:40,bonus:10,penalty:2,reprieve:60,patience:75},Nb=12,kb=2,$r={most:4,wallets:.15,coins:[2,5],wallet:[10,18]},Ub={tips:"💰 Tips",found:"🪙 Found on the floor",scrap:"♻️ Scrap cans and cups",tissues:"🤧 Tissue packets sold",vip:"⭐ From somebody important",bonus:"📋 Inspection bonus"},zs={shows:8.4,follows:.8,eases:3,keeps:7.7},Na={filth:2,annoys:4,badge:1.3},yi={gobs:7,every:.05,mouth:1.1,arc:.3,width:.45,splash:.6},Pn={filth:3,seenFrom:1.4,dread:5,outBy:.9,drops:.6,blocks:.75,every:.45,length:.95},Hs={clogs:.15,puddles:.7,fills:3,seenFrom:3,appals:6},Fb=1.8,ka={fussy:60,complaints:3,tip:[15,25]},Ji={from:90,cheers:6,tips:1,after:.2},_u={puddles:6,dampens:8},Ob=18,Nl="🤢",Md="😠",Bb={"💦":"couldn't hold it","😡":"gave up queueing","😭":"a child couldn't wait","🤕":"slipped and fell","🥊":"a fight in the queue","📋":"failed inspection",[Nl]:"the place was filthy",[Md]:"miserable visit"},zb={coed:"共用 One shared room",mens:"男 Men's",womens:"女 Women's",split:"男女 Men's + Women's",mall:"男女 Men's + Women's, larger",hotel:"男女 Men's + Women's, larger still"},Hb=new Te,vu=s=>"★".repeat(s)+"☆".repeat(3-s),xu={spill:"mop it up",glass:"sweep up the glass",litter:"pick up the litter",roach:"stamp on it",toilet:"scrub it clean",basin:"wipe it clean",clog:"unclog it",paper:"hang a fresh roll",knock:"bang on the door",calm:"break it up",find:"pocket it",bin:"bag the rubbish",lift:"pick the bag up",dump:"throw the bag in",drag:"take him by the ankles",shoo:"move them along"},Vb={spill:"🧹",glass:"🧹",litter:"🤏",roach:"🥾",toilet:"🪥",basin:"🧽",clog:"🪠",paper:"🧻",knock:"👊",calm:"🕊️",find:"🪙",bin:"🗑️",lift:"🗑️",dump:"🗑️",drag:"🥴",shoo:"👋"},Ua=10;class Gb{constructor(e,t,n,i){this.assets=t,this.renderer=new G_({canvas:e,antialias:this.quality.antialias}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.quality.shadowType,this.renderer.toneMapping=Su,this.glows=this.light(),this.scene.add(this.rain.object),this.overlay=new vx(i.overlay,this.camera),this.hud=new gx(i.hud,i.screen),this.touch=new xx(i.touch,this.input,()=>{this.playing&&this.pause(!this.paused)}),this.hud.touch=this.touch.coarse,this.levels.set(this.scenario.level,new qh(n)),this.useLevel(this.levels.get(this.scenario.level)),this.quality.attach(this.renderer,this.sun,this.resize),this.janitor=new Hy(this),this.scene.add(this.janitor.body.root),this.dial=this.overlay.add(this.janitor.pos,1.9,"dial",""),this.pointer=this.overlay.add(this.pointerAt,1.55,"pointer",""),this.ring=new nt(new ho(.46,.54,48),new mn({color:16774064,transparent:!0,opacity:.85,depthTest:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=10,this.scene.add(this.ring),this.sign=t.props.getObjectByName("wet_sign").clone();const r=new nt(new ho(vi.radius-.04,vi.radius,64),new mn({color:15909424,transparent:!0,opacity:.35}));r.rotation.x=-Math.PI/2,r.position.y=.02,this.sign.add(r),this.scene.add(this.sign),this.standSignAtStart(),addEventListener("resize",this.resize),addEventListener("keydown",o=>{(o.code==="Escape"||o.code==="KeyP")&&!o.repeat&&this.playing&&this.pause(!this.paused)}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.playing&&this.pause(!0)}),addEventListener("pagehide",()=>this.keep()),matchMedia("(orientation: portrait)").addEventListener("change",o=>{o.matches&&this.touch.coarse&&this.playing&&!this.paused&&this.pause(!0)}),this.splash(),this.frame()}scene=new nd;camera=new Pt(Rb,1,1,100);overlay;sfx=new Sb;career=new Ox;messes=[];scuffles=[];level;scenario=ns[0];blockers=[];night=1;speed=1;renderer;quality=new lb;hud;input=new gy;touch;keepIn=Ua;tubeBright=Zn.bright;director=new Xx(this);janitor;inspector=null;helpers=[];bodies=[];levels=new Map;queues=new Map;patrons=[];badges=new Map;binBadges=new Map;sprawled=[];rats=[];revellers=[];jets=[];tubes=[];glows;rain=new cb;sign;quietUntil=0;smokingSpots=new Map;sky;sun;ring;dial;pointer;pointerAt=new T;timer=new mv;playing=!1;paused=!1;served=0;income=new Map;cameraHome=new T;pan=0;strikes=0;cleaned=0;grievances=new Map;roachIn=Jn.every;leakIn=0;gateAngle=0;gateWay=1;hints=[];reckoning=!1;reckoningFor=0;hintIn=0;stutterIn=ye(...Zn.every);stuttering=0;light(){const{scene:e}=this;e.background=new Te(1315103),e.environment=new Ml(this.renderer).fromScene(new fx,.04).texture,e.environmentIntensity=.3,this.sky=new cv(11122943,2760752,.55),e.add(this.sky);const t=new dd(16773596,1.25);t.position.set(3,16,9),t.castShadow=!0,t.shadow.mapSize.set(this.quality.shadowSize,this.quality.shadowSize),t.shadow.bias=-4e-4,t.shadow.normalBias=.03,t.shadow.radius=3;const n=t.shadow.camera;n.left=-17,n.right=17,n.top=11,n.bottom=-11,n.near=1,n.far=45,e.add(t),this.sun=t;const i=(r,o)=>{const a=new Ql(r,o,14,2);return e.add(a),a};for(let r=0;r<Lb;r++)this.tubes.push(i(15925238,Zn.bright));return[i(16727450,40),i(4063110,40)]}resize=()=>{this.renderer.setSize(innerWidth,innerHeight),this.camera.aspect=innerWidth/innerHeight;const e=Math.max(1,16/9/this.camera.aspect),t=this.level.point("camera_target");this.camera.position.copy(t).addScaledVector(this.level.point("camera").clone().sub(t),e),this.camera.lookAt(t),this.camera.updateProjectionMatrix(),this.cameraHome.copy(this.camera.position),this.pan=0};useLevel(e){if(e===this.level)return;this.level?.root.removeFromParent();for(const i of[...this.badges.values(),...this.binBadges.values()])i.remove();this.badges.clear(),this.binBadges.clear(),this.level=e,this.scene.add(e.root);for(const i of e.fixtures)this.badges.set(i,this.overlay.add(i.use.pos,Ib[i.kind],"badge",""));for(const i of e.bins)this.binBadges.set(i,this.overlay.add(i.pos,Na.badge,"badge",""));this.queues=new Map([...e.lines.keys()].map(i=>[i,[]]));const t=e.tubes,n=Math.min(t.length,this.quality.tubes);this.tubeBright=Zn.bright*(t.length/n)**.8,this.tubes.forEach((i,r)=>{i.visible=r<n,i.visible&&(n===t.length?i.position.copy(t[r]):i.position.lerpVectors(t[0],t[t.length-1],(r+.5)/n),i.intensity=this.tubeBright)}),this.tubes.forEach((i,r)=>i.color.set(e.colour(`tube_${r+1}`)??"#f2fff6"));for(const[i,r,o]of[[this.glows[0],"glow_pink","#ff3d9a"],[this.glows[1],"glow_green","#3dff86"]])i.position.copy(e.point(r)),i.color.set(e.colour(r)??o),i.intensity=e.outdoors?40:22;this.smokingSpots.clear();for(const[i,r]of[[0,-.9],[.7,-.65],[-.7,-.65],[.95,.1],[-.95,.1]]){const o=new T(e.ashtray.x+i,0,e.ashtray.z+r);e.open(o,.55)&&e.nav.clear(o)&&o.distanceTo(e.smoke.pos)>.95&&this.smokingSpots.set(o,null)}this.resize()}splash(){this.hud.visible=!1,this.hud.showSplash(()=>{this.sfx.unlock(),this.touch.coarse&&this.fill(),this.menu()})}fill(){const e=document.documentElement,t=()=>screen.orientation.lock?.("landscape");try{e.requestFullscreen?.({navigationUI:"hide"}).then(t).catch(()=>{})}catch{}}menu(){this.hud.visible=!1,this.sfx.music("menu");const{career:e}=this,t=Bx(),n=t&&ns.find(r=>r.id===t.scenario),i=t&&n&&e.offered(aa(n))?{label:`${n.name} · ${(n.startHour??19)<17?"Day":"Night"} ${t.night}${t.room?` · ${yd(n,t.room.director.elapsed/n.seconds)}`:""}`,run:()=>void this.play(n,t)}:void 0;this.hud.showMenu(as.map(r=>{const o=ns.filter(c=>c.venue===r.id),{wage:a,tips:l}=r.pay;return{title:`Class ${r.grade} · ${r.name}`,zh:r.zh,blurb:r.blurb,pay:`$${a} a shift${l?", and tips":", no tips"}`,stars:`${e.stars(r.id)} / ${o.length*3} ★`,open:e.offered(r),wanted:e.standing(r),items:o.map(c=>{const h=e.best(c.id),u=(c.startHour??19)<17?"day":"night";return{id:c.id,name:c.name,zh:c.zh,blurb:c.blurb,where:zb[c.level],best:h?.nights?`${vu(h.stars??1)} · survived ${u} ${h.nights}`:h?`Best: ${h.served} served`:""}})}}),e.bank,r=>void this.play(ns.find(o=>o.id===r)),()=>this.shop(()=>this.menu()),i)}shop(e){const{career:t}=this;this.hud.showShop(Pl.map(n=>({...n,owned:t.has(n.id),locked:(n.from??1)>t.grade?`From ${as.find(i=>i.grade===n.from).name} up`:""})),t.bank,n=>{t.buy(Pl.find(i=>i.id===n))&&this.sfx.tip(),this.shop(e)},e)}async play(e,t){let n=this.levels.get(e.level);n||(n=new qh(await this.assets.level(e.level)),this.levels.set(e.level,n)),this.clear(),this.scenario=e,this.night=t?.night??1,this.janitor.uniform(aa(e).grade),this.useLevel(n),this.begin(),t?.room?this.restore(t.room):Nr({scenario:e.id,night:this.night})}keep(){if(!this.playing||this.reckoning)return;const{director:e,janitor:t,level:n,sign:i}=this;Nr({scenario:this.scenario.id,night:this.night,room:{director:e.save(),served:this.served,strikes:this.strikes,cleaned:this.cleaned,income:[...this.income],grievances:[...this.grievances],janitor:{x:t.pos.x,z:t.pos.z,heading:t.heading,tool:t.tool,stowed:t.stowed,rolls:t.rolls,stress:t.stress},sign:i.visible?{x:i.position.x,z:i.position.z,heading:i.rotation.y}:null,fixtures:n.fixtures.map(({name:r,dirt:o,clogged:a,paper:l})=>({name:r,dirt:o,clogged:a,paper:l})),bins:n.bins.map(r=>r.fill),messes:this.messes.filter(r=>r.kind!=="roach").map(r=>({kind:r.kind,prop:r.object.name,x:r.pos.x,z:r.pos.z,size:r.size,value:r.value})),waiting:this.patrons.filter(r=>!r.used&&!r.gone).length}})}restore(e){const{director:t,janitor:n,level:i}=this;t.restore(e.director),this.served=e.served,this.strikes=e.strikes,this.cleaned=e.cleaned,this.income=new Map(e.income),this.grievances=new Map(e.grievances);for(const d of e.fixtures)i.fixtures.find(g=>g.name===d.name)?.restore(d.dirt,d.clogged,d.paper);e.bins.forEach((d,f)=>i.bins[f]?.restore(d));for(const d of e.messes){const f=this.spawnMess(d.kind,new T(d.x,0,d.z),0,{prop:d.prop,quiet:!0});f&&(f.size=d.size,f.value=d.value)}const{x:r,z:o,heading:a,tool:l,stowed:c,rolls:h,stress:u}=e.janitor;n.pos.set(r,0,o),n.heading=a,n.tool=l,n.stowed=c,n.rolls=h,n.stress=u;for(const d of[l,c])d&&this.setOut(d,!0);e.sign&&l!=="sign"&&(this.sign.position.set(e.sign.x,0,e.sign.z),this.sign.rotation.y=e.sign.heading,this.sign.visible=!0),t.refill(e.waiting)}clear(){for(const e of this.patrons)e.dispose();this.patrons.length=0;for(const e of this.queues.values())e.length=0;for(const e of this.messes)e.object.removeFromParent();this.messes.length=0,this.inspector?.dispose(),this.inspector=null;for(const e of this.helpers)e.dispose();this.helpers.length=0;for(const e of this.scuffles)e.label?.remove();this.scuffles.length=0;for(const e of this.jets)e.object.removeFromParent();this.jets.length=0,this.sprawled.length=0;for(const e of this.rats)e.dispose();this.rats.length=0;for(const e of this.revellers)e.dispose();this.revellers.length=0,this.quietUntil=0;for(const e of this.smokingSpots.keys())this.smokingSpots.set(e,null)}brawl(e,t){const n=r=>r.inLine&&!r.scuffle&&(r.kind==="regular"||r.kind==="large");if(this.director.elapsed<this.quietUntil||!n(e)||!n(t)||e.line!==t.line||e.pos.distanceTo(t.pos)>1.3||this.scuffles.some(r=>r.a.line===e.line))return;const i=new pb(e,t);e.scuffle=t.scuffle=i,i.label=this.overlay.add(i.pos,2.15,"badge show urgent","🥊"),this.scuffles.push(i),this.sfx.complaint(),this.hint("scuffle")}calm(e){this.celebrate(e.pos,"🕊️"),this.disperse(e)}disperse(e){e.label?.remove(),e.a.scuffle=e.b.scuffle=null,this.scuffles.splice(this.scuffles.indexOf(e),1),this.quietUntil=this.director.elapsed+Zi.lull}simmer(e){for(const t of[...this.scuffles]){t.update(e);for(const n of this.queueFor(t.a.line))n.pos.distanceTo(t.pos)<Zi.spreads&&(n.mood-=Zi.sours*e);if(!(t.age<Zi.seconds)&&(t.a.mood-=Zi.bruises,t.b.mood-=Zi.bruises,this.overlay.pop(t.pos,1.9,"💢","emote bad",1.8),this.disperse(t),this.strike("🥊"),!this.playing))return}}takeSmokingSpot(e){for(const[t,n]of this.smokingSpots)if(!n)return this.smokingSpots.set(t,e),t;return null}leaveSmokingSpot(e){for(const[t,n]of this.smokingSpots)n===e&&this.smokingSpots.set(t,null)}tint(e){if(!this.level.outdoors){this.scene.background.setHex(1775906),this.sky.intensity=.6,this.sun.intensity=1.3;return}const t=Da.findIndex(([a])=>a>=e),[n,i]=[Da[Math.max(0,t-1)],Da[Math.max(0,t)]],r=i[0]>n[0]?(e-n[0])/(i[0]-n[0]):0;this.scene.background.setHex(n[1]).lerp(Hb.setHex(i[1]),r);const o=n[2]+(i[2]-n[2])*r;this.sky.intensity=.55*o,this.sun.intensity=1.25*o}get progress(){return this.director.progress}get visitors(){return this.patrons}streetLife(){const{level:e,scenario:t}=this;if(!e.outdoors)return;if(e.dumpster){const{pos:r,use:o}=e.dumpster,l=[.82,-.82].map(c=>new T(r.x+c,0,r.z-.05)).find(c=>e.open(c,pt.girth))??o.pos.clone();for(let c=0;c<pt.most;c++){const h=this.assets.props.getObjectByName("rat").clone();this.scene.add(h),this.rats.push(new hb(this,h,l,ye(...pt.out)*(c+1)))}}if(t.rain||e.loiter.length===0)return;const n=[...e.lines.values()].map(r=>r.spawn.pos).reduce((r,o)=>o.x>r.x?o:r);let i=ye(...Ks.first);e.loiter.forEach((r,o)=>{const a=new fb(this,r,e.point("loiter_way"),n.clone(),i,o);i+=ye(...Ks.next),this.revellers.push(a),this.scene.add(a.node)})}tearOpen(e){const t=this.messes.indexOf(e);if(t!==-1){this.messes.splice(t,1),e.object.removeFromParent();for(let n=0;n<pt.spills;n++)this.spawnMess("litter",e.pos,.45);this.overlay.pop(e.pos.clone(),.6,"🐀","emote",1.6),this.hint("rat")}}hire(){for(const e of ry){if(!this.career.has(e)||this.helpers.some(n=>n.role===e))continue;const t=new fy(this,e,this.helpers.length);this.helpers.push(t),this.scene.add(t.node)}}begin(){this.sfx.unlock(),this.clear();for(const e of this.level.fixtures)e.reset(this.paperPerRoll);for(const e of this.level.bins)e.holds=Math.round(no.holds*(this.career.has("bigbins")?1.5:1)),e.empty();for(const e of this.level.homes.values())e.visible=!0;this.standSignAtStart(),this.janitor.reset(),this.hire(),this.streetLife(),this.director.reset(),this.served=this.strikes=this.cleaned=0,this.income.clear(),this.reckoning=!1,this.grievances.clear(),this.roachIn=Jn.every,this.keepIn=Ua,this.leakIn=this.scenario.leakEvery??0,this.rain.object.visible=!!this.scenario.rain,this.hud.visible=!0,this.paused=!1,this.playing=!0,this.sfx.music("shift"),this.sfx.heat=0,this.hint("tools"),this.venue.pay.tips||this.hint("wage")}end(e){if(!this.playing)return;this.playing=!1,this.sfx.music("menu");const{scenario:t,night:n,career:i}=this,r=e?1+ +(this.strikes<=this.maxStrikes/2)+ +(this.strikes<=2):0,{wage:o,perStar:a,docked:l}=this.venue.pay,c=e?o:Math.round(o*this.director.progress*.5),h=e?a*r:0,u=e?Math.min(c+h,l*this.strikes):0,d=c+h-u+this.takings,f=i.grade;i.finish(t.id,n,e,this.served,d,r),Nr({scenario:t.id,night:e?n+1:n});const g=as.find(M=>M.grade===i.grade&&M.grade>f),_=[...this.grievances].sort((M,S)=>S[1]-M[1]).map(([M,S])=>[`${M} ${Bb[M]}`,`× ${S}`]),m={title:e?"Shift over!":"You're fired",subtitle:e?`${t.name}, ${this.shiftWord.toLowerCase()} ${n}. ${this.level.outdoors?"The sun is coming up and the floor is (mostly) dry.":"The last of them has gone, and the floor is (mostly) dry."}`:`${this.strikes} complaints by ${this.director.clock}. The health inspector shuts the toilet, and you with it.`,lines:[...e?[["Rating",vu(r)]]:[],["😊 Patrons served",String(this.served)],["✨ Messes cleaned",String(this.cleaned)],["💢 Complaints",`${this.strikes} / ${this.maxStrikes}`],..._,["💵 Wage",`$${c}`],...h?[["⭐ Bonus for the stars",`$${h}`]]:[],...u?[["💢 Docked for complaints",`−$${u}`]]:[],...[...this.income].map(([M,S])=>[Ub[M]??M,`$${S}`]),["🏦 Banked",`$${d} (now $${i.bank})`],...g?[["🎉 A better class of toilet",`${g.name} wants you`]]:[]]},p=()=>this.hud.showCard(m,[{label:e?`${this.shiftWord} ${n+1}, busier`:"Try again",run:()=>{e&&this.night++,this.begin()}},{label:"Supply cupboard",run:()=>this.shop(p)},{label:"Change shift",run:()=>this.menu()}]);p()}pause(e){if(this.paused=e,!e){this.hud.close();return}this.keep(),this.hud.showCard({title:"Paused",subtitle:`${this.scenario.name}, ${this.director.clock}.${this.reckoning?"":" It is kept: close the page and it will be here to carry on."}`,lines:[["🖥️ Graphics",this.quality.label]]},[{label:"Carry on",run:()=>this.pause(!1)},{label:this.sfx.muted?"🔇 Sound is off":"🔊 Sound is on",run:()=>{this.sfx.toggle(),this.pause(!0)}},{label:"Give up this shift",run:()=>{this.paused=this.playing=!1,Nr(null),this.clear(),this.menu()}}])}get shiftWord(){return(this.scenario.startHour??19)<17?"Day":"Night"}get venue(){return aa(this.scenario)}get takings(){let e=0;for(const t of this.income.values())e+=t;return e}earn(e,t,n){this.income.set(t,(this.income.get(t)??0)+e),n&&this.overlay.pop(n,1.9,`+$${e}`,"tip",1.6),this.sfx.tip(),this.hint(t==="tips"?"tipping":t)}dropCash(e){if(this.messes.filter(i=>i.kind==="cash").length>=$r.most)return;const t=Math.random()<$r.wallets,n=this.spawnMess("cash",e,.3,{prop:t?"wallet":"coins"});n&&(n.value=Math.round(ye(...t?$r.wallet:$r.coins)))}get maxStrikes(){return wb+(this.career.has("friend")?1:0)}get paperPerRoll(){return this.career.has("jumbo")?15:10}announce(e){this.hud.announce(e)}hint(e){Yh[e]&&this.career.firstTime(e)&&this.hints.push(Yh[e])}spawnPatron(e,t,n,i="regular",r=!1){const o=this.level.lineFor(n);if(!o)return;const a=new ab(this,e,t,n,i,o,r);this.patrons.push(a),this.scene.add(a.node)}vip(){const e=["m","f"].filter(t=>this.level.lineFor(t));this.spawnPatron(le(["pee","pee","poo"]),!1,le(e),"regular",!0),this.announce("⭐ Somebody important is on their way in"),this.hint("vip")}sprinklers(e){this.announce("🚨 Smoke alarm! The sprinklers have gone off");const t=this.level.fixtures.filter(n=>n.room===e.room);for(let n=0;n<_u.puddles;n++)this.spawnMess("water",le(t).approach.pos,.9);for(const n of this.patrons)n.line.id===e.room&&!this.outside(n.pos)&&(n.mood-=_u.dampens);this.sfx.flush()}queueFor(e){return this.queues.get(e.id)}janitorIn(e){const t=e.doorway;if(!t)return!1;const{pos:n}=this.janitor;return n.x>t.minX&&n.x<t.maxX&&n.z<t.maxZ+.4}claim(e,t){const n=i=>i.room===e.line.id&&i.free&&!(e.need==="poo"&&i.needsPaper&&!this.career.has("tissues"))&&!this.underSomebody(i);for(const i of t){const r=this.level.fixtures.filter(l=>i.includes(l.kind)&&n(l));if(r.length===0)continue;const o=Math.min(...r.map(l=>l.dirt)),a=le(r.filter(l=>l.dirt===o));return a.reservedBy=e,a}return null}admit(){for(const e of this.queues.values())for(const t of[...e]){if(!t.inLine)continue;const n=this.claim(t,t.options());n&&(t.fixture=n,e.splice(e.indexOf(t),1))}}get messiness(){return this.director.messiness}afterUse(e,t,n){const i=o=>Math.random()<Math.min(.95,o*e.sloppiness*this.director.messiness),r=t.isStall?t.clean.pos:t.use.pos;n==="puke"?(t.soil(2),i(.1)&&t.clog(),i(.16)&&this.spawnMess("vomit",r)):n==="wash"?(i(mu.sink)&&t.soil(),i(.06)&&this.spawnMess("water",r),i(.02)&&t.clog()):(i(mu[t.kind])&&t.soil(),n==="pee"&&i(t.kind==="urinal"?.08:.04)&&this.spawnMess("pee",r),n==="poo"&&i(.045)&&t.clog()),i(.028)&&this.spawnMess("litter",r,.5),t.kind!=="sink"&&this.sfx.flush(),t.refresh()}spew(e,t){const n=e.node.rotation.y,i={pos:e.pos,heading:n},r=Math.max(1,t),o=Xe(i,.3).setY(yi.mouth);for(let l=0;l<yi.gobs;l++){const c=this.assets.props.getObjectByName("spew").clone();c.rotation.y=n,c.visible=!1,this.scene.add(c);const h=Xe(i,.7+(r-.7)*(l+1)/yi.gobs).setY(.05);this.jets.push({object:c,from:o.clone(),to:h,age:-l*yi.every,seconds:.3+.04*l})}for(let l=.9;l<=r+.01;l+=.8){const c=this.messes.length,h=this.spawnMess("vomit",Xe(i,l),.12);h&&this.messes.length>c&&(h.size=yi.splash)}const a=l=>{const c=l.x-e.pos.x,h=l.z-e.pos.z,u=c*Math.sin(n)+h*Math.cos(n),d=Math.abs(c*Math.cos(n)-h*Math.sin(n));return u>.35&&u<r+.3&&d<yi.width};for(const l of this.patrons)l!==e&&a(l.pos)&&l.splattered();a(this.janitor.pos)&&this.janitor.splattered(),this.hint("spew")}fly(e){for(const t of this.jets){t.age+=e;const n=t.age/t.seconds;t.object.visible=n>=0&&n<1,t.object.visible&&(t.object.position.lerpVectors(t.from,t.to,n),t.object.position.y+=yi.arc*Math.sin(Math.PI*n))}if(this.jets.some(t=>t.age>=t.seconds)){for(const t of this.jets)t.age>=t.seconds&&t.object.removeFromParent();this.jets=this.jets.filter(t=>t.age<t.seconds)}}underSomebody(e){return this.sprawled.some(t=>{for(let n=0;n<=Pn.length;n+=Pn.every){const i=Xe({pos:t.pos,heading:t.node.rotation.y},-n);if(i.distanceTo(e.use.pos)<Pn.blocks||i.distanceTo(e.approach.pos)<Pn.blocks)return!0}return!1})}sprawl(e){this.sprawled.push(e),this.hint("outcold")}cameRound(e){const t=this.sprawled.indexOf(e);t>=0&&this.sprawled.splice(t,1),this.janitor.dragging===e&&this.janitor.letGo()}outside(e){return e.z>this.level.interior.maxZ+Pn.outBy}threwOut(e){e.thrownOut=!0,this.celebrate(e.pos,"🚪"),Math.random()<Pn.drops&&this.dropCash(this.janitor.pos)}wayOut(e){const[t]=[...this.level.lines.values()].map(n=>n.exit[1]).sort((n,i)=>n.distanceToSquared(e)-i.distanceToSquared(e));return new T(t.x,0,t.z+1.4)}pottied(e,t){if("kind"in t)t.soil(),Math.random()<Hs.clogs&&t.clog(),t.refresh(),Math.random()<Hs.puddles&&this.spawnMess("pee",t.use.pos,.25);else{for(let n=0;n<Hs.fills;n++)t.add();this.spawnMess("pee",t.stand?.pos??t.pos,.25)}for(const n of this.patrons)n===e||n.pos.distanceTo(e.pos)>Hs.seenFrom||(n.mood-=Hs.appals,Math.random()<.4&&n.emote("😳"));this.hint("potty")}messesIn(e){const t=e.doorway;return t?this.messes.filter(n=>n.kind!=="cash"&&n.kind!=="bag"&&n.kind!=="roach"&&n.pos.x>t.minX&&n.pos.x<t.maxX&&n.pos.z<t.maxZ&&n.pos.z>t.minZ-Fb):[]}binFor(e){return this.level.bins.find(t=>t.stand&&t.free&&(t.room===e.line.id||t.room==="all"))??null}binned(e,t,n){if(e.add()){e.ready&&this.hint("bin");return}this.spawnMess("litter",e.stand?.pos??e.pos,.3,{prop:n}),t.mood-=Na.annoys,this.hint("binfull")}bagged(e){this.celebrate(e.pos,"🗑️"),this.hint("bagged")}dumped(){this.celebrate(this.level.dumpster.pos,"✨")}dropBag(e){return this.spawnMess("bag",e,0)!==null}notice(e){for(const t of this.sprawled)t===e||t.seenBy.has(e)||t.pos.distanceTo(e.pos)>Pn.seenFrom||(t.seenBy.add(e),e.mood-=Pn.dread);for(const t of this.messes){const{dread:n,reach:i,pools:r}=t.def;if(n===0||t.noticed.has(e)||t.kind==="roach"&&e.kind==="blind"||t.pos.distanceToSquared(e.pos)>(i*t.size)**2)continue;t.noticed.add(e);const o=r&&this.sign.visible&&this.sign.position.distanceTo(t.pos)<vi.radius;e.mood-=o?n/2:n,t.kind==="roach"&&e.emote("😱"),r&&!o&&e.tread(t.kind),r&&!o&&Math.random()<e.slips&&e.slip()&&this.hint("slip")}}settle(e){const t=e.grievance??(e.used&&e.mood<(e.vip?ka.fussy:Tb)?Md:null);if(t)this.overlay.pop(e.pos,1.9,"💢","emote bad",1.8),this.strike(t,e.vip?ka.complaints:1),e.vip&&this.announce("⭐ Somebody important was not impressed");else if(e.used){if(this.served++,e.vip){this.earn(Math.round(ye(...ka.tip)),"vip",e.pos),this.announce("⭐ Somebody important was impressed");return}if(e.mood<Ab)return;const{tips:n}=this.venue.pay;if(!n||Math.random()>n.share)return;const i=this.hygiene>=Ji.from?Ji.tips:0;this.earn(1+Math.floor(Math.random()*n.most)+(this.career.has("jar")?1:0)+i,"tips",e.pos)}}strike(e,t=1){this.strikes+=t,this.grievances.set(e,(this.grievances.get(e)??0)+t),this.sfx.complaint(),this.janitor.jolt(),this.strikes>=this.maxStrikes&&this.summon()}summon(){this.reckoning||(this.reckoning=!0,this.reckoningFor=0,this.director.cancelInspection(),this.announce(`🚨 ${this.strikes} complaints! Somebody has called the health inspector`),this.hint("reckoning"),this.inspector?.judged?this.inspector.again():this.inspect())}firstImpression(e){const{hygiene:t}=this,{poor:n,foul:i}=this.venue.standard;e.kind!=="blind"&&(e.mood-=Math.min(20,this.filth)*(this.career.has("freshener")?.6:1)),t>=Ji.from?(e.mood+=Ji.cheers,this.director.progress>Ji.after&&this.hint("sparkling")):t<i?(e.grievance??=Nl,e.emote(Nl),this.hint("foul")):t<n&&(e.mood-=Nb,this.hint("poor"))}inspect(){this.inspector||(this.inspector=new yy(this,le([...this.level.lines.values()])),this.scene.add(this.inspector.node))}verdict(e,t){if(this.reckoning){if(e<Qn.reprieve){t.emote("⛔"),this.end(!1);return}this.reckoning=!1,this.strikes=Math.floor(this.maxStrikes/2),t.emote("✅"),this.sfx.tip(),this.announce("📋 The inspector finds the place in order and throws out half the complaints");return}if(e>=Qn.pass){const n=this.strikes>0;n&&this.strikes--,this.earn(Qn.bonus,"bonus"),t.emote("✅"),this.sfx.tip(),this.announce(`📋 Inspection passed! $${Qn.bonus} bonus${n?" and a complaint struck off":""}`)}else e>=Qn.fail?(t.emote("🤨"),this.announce("📋 The inspector frowns, writes something down, and leaves it at that")):(t.emote("❌"),this.announce(`📋 Inspection failed: ${Qn.penalty} complaints`),this.strike("📋",Qn.penalty),this.reckoning&&this.verdict(e,t))}whereIs(e){if(e==="sign")return this.sign.visible?this.sign.position:null;if(e==="bag")return null;if(e==="rolls")return Xe(this.level.spot("supply_use"),.5);const t=this.level.homes.get(e);return t.visible?t.getWorldPosition(new T).setY(0):null}setOut(e,t){e==="sign"?this.sign.visible=!t:e!=="rolls"&&e!=="bag"&&(this.level.homes.get(e).visible=!t)}standSign(e,t){this.sign.position.copy(Xe({pos:e,heading:t},.55)),this.level.resolve(this.sign.position,.25),this.sign.rotation.y=t,this.sign.visible=!0,this.sfx.grab()}standSignAtStart(){const e=this.level.spot("sign_start");this.sign.position.copy(e.pos),this.sign.rotation.y=e.heading,this.sign.visible=!0}stepRoundSign(e){if(!this.sign.visible)return;const t=e.x-this.sign.position.x,n=e.z-this.sign.position.z,i=Math.hypot(t,n);i>=vi.body||i===0||(e.x=this.sign.position.x+t/i*vi.body,e.z=this.sign.position.z+n/i*vi.body)}spawnMess(e,t,n=.3,i={}){const r=new T(t.x+ye(-n,n),0,t.z+ye(-n,n));if(e==="prints"){const u=this.messes.filter(d=>d.kind==="prints");if(u.length>=pu.most||u.some(d=>d.pos.distanceTo(r)<pu.apart))return null}if(Math.abs(r.x)>this.level.edge-1)return null;this.level.resolve(r,Pb);const{pools:o,props:a}=bd[e],l=o&&this.messes.find(u=>u.kind===e&&u.pos.distanceTo(r)<.6);if(l)return l.grow(),l;if(this.messes.length>=Eb)return null;const c=this.assets.props.getObjectByName(i.prop??le(a)).clone();c.position.copy(r),c.rotation.y=i.heading??ye(0,Math.PI*2),this.scene.add(c);const h=new Gy(e,c);return this.messes.push(h),i.quiet||(e!=="prints"&&e!=="cash"&&this.sfx.splat(),this.hint(e==="pee"||e==="water"?"puddle":e),o&&this.messes.filter(u=>u.def.pools).length>1&&this.hint("sign")),h}removeMess(e,t=!1){this.messes.splice(this.messes.indexOf(e),1),e.object.removeFromParent(),this.celebrate(e.pos,e.kind==="roach"?"💥":"✨",t)}celebrate(e,t,n=!1){this.cleaned++,this.overlay.pop(e.clone(),.6,t,"sparkle",.9),n||this.sfx.clean()}get filth(){let e=0;for(const t of this.messes)e+=t.filth*(t.pos.z<Cb?1:.5);for(const t of this.level.fixtures)e+=t.filth;for(const t of this.level.bins)t.full&&(e+=Na.filth);for(const t of this.sprawled)this.outside(t.pos)||(e+=Pn.filth);return e}get hygiene(){return Math.max(0,Math.round(100-this.filth*kb))}crowd(){const e=[],t=new Map,n=this.inspector?[this.inspector,...this.helpers]:this.helpers,i=this.revellers.filter(a=>a.node.visible);for(const a of[...this.patrons,...n,...i]){const[l,...c]=a.bodies();t.set(l,a),e.push(l,...c)}const[r,...o]=this.janitor.crowdBodies();return e.push(...o,r),{bodies:e,walkers:t}}separate(){const{bodies:e,walkers:t}=this.crowd(),n=new Set,i=e[e.length-1],r=new T;for(let o=0;o<xi.passes;o++){for(let a=0;a<e.length;a++){const l=e[a];for(let c=a+1;c<e.length;c++){const h=e[c],u=l.give+h.give;if(l.kin===h.kin||u===0)continue;let d=l.pos.x-h.pos.x,f=l.pos.z-h.pos.z;const g=l.radius+h.radius,_=Math.hypot(d,f);if(_>=g)continue;_<1e-4?[d,f]=[1,0]:[d,f]=[d/_,f/_];const m=g-_;for(const[p,M,S,x,k]of[[l,h,l.give/u,d,f],[h,l,h.give/u,-d,-f]]){if(S===0)continue;let A=x,R=k;if(p.wish){let N=k,w=-x;N*p.wish.x+w*p.wish.z<0&&([N,w]=[-N,-w]),A+=N*xi.sidestep,R+=w*xi.sidestep}else if(M.wish){const N=x*M.wish.x+k*M.wish.z,w=x-N*M.wish.x,b=k-N*M.wish.z,C=Math.hypot(w,b);[A,R]=C<.2?[M.wish.z,-M.wish.x]:[w/C,b/C];const W=t.get(p)?.girth??this.janitor.radius,B=V=>this.level.open(r.set(p.pos.x+A*V*xi.aside,0,p.pos.z+R*V*xi.aside),W);!B(1)&&B(-1)&&([A,R]=[-A,-R])}p.pos.x+=A*m*S,p.pos.z+=R*m*S,n.add(p)}}}for(const a of n){const l=t.get(a);l?this.level.keepOffSolid(a.pos,l.girth):a===i&&this.janitor.shoved(this.blockers)}}}inTheWay(e,t,n){const{pos:i,personal:r}=e;for(const o of this.bodies){if(o.kin===e)continue;const a=o.pos.x-i.x,l=o.pos.z-i.z,c=a*t+l*n,h=r+o.radius;if(!(c<=0||c>h+xi.lookAhead)&&!(Math.abs(a*n-l*t)>h*.8)&&!(o.wish&&o.wish.x*t+o.wish.z*n<-.3))return!0}return!1}puddleAt(e){for(const t of this.messes){const{pools:n,reach:i}=t.def;if(!(!n||t.pos.distanceToSquared(e)>(i*t.size)**2)&&!(this.sign.visible&&this.sign.position.distanceTo(t.pos)<vi.radius))return t}return null}beingCleaned(e){const{working:t,target:n}=this.janitor;return t&&n?.type==="mess"&&n.mess===e}crowding(){const{bodies:e}=this.crowd(),t=[];for(let n=0;n<e.length;n++)for(let i=n+1;i<e.length;i++){const[r,o]=[e[n],e[i]];if(r.kin===o.kin)continue;const a=r.radius+o.radius-Math.hypot(r.pos.x-o.pos.x,r.pos.z-o.pos.z);a>xi.tolerated&&t.push(`${[r.name,o.name].sort().join(" + ")} ${(a*100).toFixed(0)}cm at ${r.pos.x.toFixed(1)}, ${r.pos.z.toFixed(1)}`)}return t}swingGate(e){const[t,n]=this.level.gate;if(!t||!n)return;const{pos:i}=this.janitor,r=(t.position.z+n.position.z)/2,o=[i,...this.helpers.map(l=>l.pos)].find(l=>Math.hypot(l.x-t.position.x,l.z-r)<gu.reach),a=o!==void 0;o&&Math.abs(this.gateAngle)<.05&&(this.gateWay=o.x<t.position.x?-1:1),this.gateAngle+=((a?this.gateWay*gu.open:0)-this.gateAngle)*Math.min(1,e*10),t.rotation.y=this.gateAngle,n.rotation.y=-this.gateAngle}hazards(e){const{scenario:t,level:n}=this,i=this.messes.filter(c=>c.kind==="roach");this.filth>=Jn.filth&&i.length<Jn.most&&(this.roachIn-=e*(t.roaches??1)*(this.career.has("traps")?.5:1),this.roachIn<=0&&(this.roachIn=Jn.every,this.spawnMess("roach",le(n.fixtures).approach.pos,.3)));for(const c of i)this.scurry(c,e);for(const c of this.rats)c.update(e);if(!t.leakEvery||(this.leakIn-=e,this.leakIn>0))return;this.leakIn=t.leakEvery*ye(.6,1.4);const{minX:r,maxX:o,minZ:a,maxZ:l}=n.interior;this.spawnMess("water",new T(ye(r+.6,o-.6),0,ye(a+2.2,l-.4)),0),Math.random()<.35&&this.spawnMess("litter",le([...n.lines.values()]).enter[1],1.5)}scurry(e,t){const{janitor:n}=this;if(n.working&&n.target?.type==="mess"&&n.target.mess===e)return;const{pos:i}=e,r=i.distanceTo(n.pos)<Jn.fear;e.dither-=t,e.dither<=0&&(e.dither=ye(.3,1.2),e.heading=r?Math.atan2(i.x-n.pos.x,i.z-n.pos.z)+ye(-.6,.6):ye(0,Math.PI*2));const o=i.clone(),a=r?Jn.bolt:Jn.stroll;i.x+=Math.sin(e.heading)*a*t,i.z+=Math.cos(e.heading)*a*t;const{minX:l,maxX:c,minZ:h,maxZ:u}=this.level.interior;i.x=Vt.clamp(i.x,l+.15,c-.15),i.z=Vt.clamp(i.z,h+.15,u-.15),this.level.resolve(i,.12),o.distanceTo(i)<a*t*.5&&(e.dither=0),e.object.rotation.y+=xo(e.object.rotation.y,e.heading)*Math.min(1,t*12)}frame=()=>{requestAnimationFrame(this.frame);const e=this.timer.getDelta(),t=Math.min(e,.05),n=t*this.speed,i=this.playing&&!this.paused;this.quality.frame(e,i),i?(this.update(n),this.showHints(t),(this.keepIn-=t)<=0&&(this.keepIn=Ua,this.keep())):this.paused||this.janitor.body.update(n),this.input.endFrame(),this.rain.update(i?n:0),this.present(t),this.overlay.update(this.paused?0:n),this.renderer.render(this.scene,this.camera)};update(e){this.bodies=this.crowd().bodies,this.director.update(e),this.admit();for(const n of this.patrons)n.update(e);if(this.simmer(e),!this.playing)return;this.patrons=this.patrons.filter(n=>(n.gone&&n.dispose(),!n.gone)),this.inspector&&(this.inspector.update(e),this.inspector.gone&&(this.inspector.dispose(),this.inspector=null));for(const n of this.helpers)n.update(e);for(const n of this.revellers)n.update(e);if(this.revellers=this.revellers.filter(n=>(n.gone&&n.dispose(),!n.gone)),this.reckoning&&this.inspector&&(this.reckoningFor+=e)>Qn.patience&&(this.verdict(this.hygiene,this.inspector),!this.playing))return;this.blockers=this.level.fixtures.flatMap(n=>n.occupied&&n.doorway?[n.doorway]:[]),this.janitor.update(e,this.input),this.separate(),this.swingGate(e);let t=0;for(const n of this.queues.values())t+=n.length;this.janitor.fray(e,t,this.filth),this.sfx.heat=this.reckoning?1:Math.min(1,Math.max(this.janitor.stress/100,t/Ob)),this.janitor.stress>=70&&this.hint("smoke");for(const n of this.level.fixtures){n.update(e)&&this.spawnMess("water",n.approach.pos,.45);const i=n.occupied?n.doorway:null,{pos:r}=this.janitor;i&&r.z<i.minZ&&r.x>i.minX&&r.x<i.maxX&&r.copy(n.approach.pos),n.clogged?this.hint("clog"):n.dirt>0&&this.hint(n.dirt>1?"filthy":"dirty"),n.needsPaper&&this.hint("paper")}this.hazards(e),this.fly(e);for(const n of this.messes)n.update(e)}showHints(e){this.hintIn-=e,!(this.hintIn>0||this.hints.length===0)&&(this.hud.advise(this.hints.shift()),this.hintIn=Db)}hum(e){for(const n of this.level.fans)n.rotateZ(Zn.fan*e);const t=this.tubes[Math.min(this.level.tubes.length,this.quality.tubes)-1];if(t){if(!this.level.outdoors){t.intensity=this.tubeBright;return}this.stuttering>0?(this.stuttering-=e,t.intensity=this.tubeBright*(this.stuttering>0&&Math.random()<.5?Zn.dips:1)):(this.stutterIn-=e)<=0&&(this.stutterIn=ye(...Zn.every),this.stuttering=ye(...Zn.lasts))}}present(e=1/60){const{janitor:t}=this;this.hum(e);const n=this.playing?t.target:null,i=this.playing&&!n?t.pickup:null,r=n?.type==="mess"?n.mess.pos:n?.type==="fixture"?n.fixture.clean.pos:n?.type==="scuffle"?n.scuffle.pos:n?.type==="drunk"?n.patron.pos:n?.type==="bin"?n.bin.pos:n?.type==="dumpster"?this.level.dumpster.pos:i&&this.whereIs(i);if(this.ring.visible=!!r,r){const _=n?.type==="mess"?.75+.25*n.mess.size:i?.6:1;this.ring.position.set(r.x,.03,r.z),this.ring.scale.setScalar(_*(1+.06*Math.sin(performance.now()/140)))}const o=n&&t.pace(n)===null?io[t.jobKind(n)]:null,a=this.playing&&t.tool==="bag"&&n?.type!=="dumpster"?this.level.dumpster:null,l=this.playing&&t.dragging&&!this.outside(t.dragging.pos)?this.wayOut(t.pos):null,c=l??(a?a.pos:o?this.whereIs(o):null);c&&this.pointerAt.copy(c),this.pointer.html=l?"🚪<i>▼</i>":a?`${gt.bag.icon}<i>▼</i>`:o?`${gt[o].icon}<i>▼</i>`:"",this.pointer.el.classList.toggle("show",!!c),this.dial.el.style.setProperty("--p",t.progress.toFixed(3)),this.dial.el.classList.toggle("show",this.playing&&t.working);for(const[_,m]of this.badges){const p=_.dirt>0?gt[_.isStall?"brush":"rag"].icon:"",M=_.asleep?"💤":_.smoky?"🚬":_.hogged?"🤳":(_.clogged?gt.plunger.icon:"")+p+(_.needsPaper?gt.rolls.icon:"");m.html=M,m.el.classList.toggle("show",M!=="");const S=_.asleep||_.smoky||_.hogged;m.el.classList.toggle("urgent",_.asleep||_.smoky||_.clogged||_.dirt>=2),m.el.classList.toggle("dim",_.occupied&&!S)}for(const[_,m]of this.binBadges)m.html=_.ready?gt.bag.icon:"",m.el.classList.toggle("show",_.ready),m.el.classList.toggle("urgent",_.full);let h=0;for(const _ of this.queues.values())h+=_.length;this.tint(this.playing?this.director.progress:0);const{interior:u}=this.level,d=Math.max(0,(u.maxX-u.minX)/2-zs.shows);let f=this.playing?Vt.clamp(t.pos.x*zs.follows,-d,d):0;const g=this.playing?t.pos.x-f:0;Math.abs(g)>zs.keeps&&(f+=g-Math.sign(g)*zs.keeps),this.pan+=(f-this.pan)*Math.min(1,zs.eases*e),this.camera.position.x=this.cameraHome.x+this.pan,this.hud.update({clock:this.director.clock,shift:`${this.scenario.name} · ${this.shiftWord} ${this.night}`,served:this.served,tips:this.takings,strikes:this.strikes,maxStrikes:this.maxStrikes,hygiene:this.hygiene,hygieneLevel:this.hygiene<this.venue.standard.foul?"bad":this.hygiene<this.venue.standard.poor?"poor":"good",hygieneNote:this.reckoning?"🚨 inspector called":this.hygiene<this.venue.standard.foul?"🤢 complaints!":this.hygiene<this.venue.standard.poor?"putting people off":this.hygiene>=Ji.from?"✨ sparkling":"",stress:this.janitor.stress,queue:h,hand:this.inHand(),prompt:this.playing?this.prompt():""}),this.touch.update(this.thumbs())}thumbs(){const{janitor:e}=this,t=this.playing&&!this.paused,n=this.career.has("holster");if(!t||e.down>0)return{live:t,use:"",take:"",swap:n?"":null};const{target:i,pickup:r,tool:o,stowed:a}=e;let l="";if(i&&e.pace(i)){const u=e.jobKind(i);l=io[u]&&o?gt[o].icon:Vb[u]}else e.bySmokeSpot&&(l="🚬");const c=e.dragging?"✋":r?gt[r].icon:o==="sign"||o==="bag"?"⬇️":"";return{live:t,use:l,take:c,swap:n?o!=="sign"&&o!=="bag"&&(o!==null||a!==null)?a?gt[a].icon:"🧰":"":null}}inHand(){const{tool:e,stowed:t,rolls:n}=this.janitor;if(this.janitor.dragging)return"🥴 a drunk, by the ankles";const r=e?(a=>`${gt[a].icon} ${gt[a].name}${a==="rolls"?` × ${n}`:""}`)(e):'<span class="empty">empty hands</span>',o=t?` <small>belt: ${gt[t].icon}</small>`:"";return r+o}prompt(){const{janitor:e}=this;if(e.working||e.down>0)return"";const{target:t,pickup:n,tool:i}=e,[r,o]=this.input.touch?["<kbd>A</kbd>","<kbd>B</kbd>"]:this.input.mouse?["<kbd>Left click</kbd>","<kbd>Right click</kbd>"]:["<kbd>Space</kbd>","<kbd>E</kbd>"];if(e.dragging)return this.outside(e.dragging.pos)?`Press ${o} to leave him to sleep it off`:`Drag him out of the door &nbsp;·&nbsp; ${o} lets go`;const a=e.bySmokeSpot&&!(t&&e.pace(t))?`Hold ${r} for a smoke 🚬`:"";if(a&&!n)return a;const l=n?`${o} to take the ${gt[n].name} ${gt[n].icon}`:"";if(t){const c=e.jobKind(t),h=e.pace(t),u=io[c];if(h===null){const d=`Needs the ${gt[u].name} ${gt[u].icon}`;return l?`${d} &nbsp;·&nbsp; ${l}`:d}if(h>1){const d=c==="spill"?"dab at it":xu[c];return`Hold ${r} to ${d} <small>slow with the ${gt[i].name}: this wants the ${gt[u].name} ${gt[u].icon}</small>`}return`Hold ${r} to ${xu[c]}`}return l?`Press ${l}`:i==="sign"?`Press ${o} to stand the sign here`:""}clipping(){const n=new T,i=[],r=(a,l,c)=>{l.updateMatrixWorld(!0);const h=l.getWorldPosition(n).clone(),u=this.level.volumes.filter(({name:g,box:_,structure:m})=>g!=="col_road"&&!(c&&!m)&&h.x>_.minX-2&&h.x<_.maxX+2&&h.z>_.minZ-2&&h.z<_.maxZ+2);if(u.length===0)return;let d=0,f="";if(l.traverse(g=>{const _=g;if(!_.isSkinnedMesh)return;const{count:m}=_.geometry.attributes.position;for(let p=0;p<m;p++){_.getVertexPosition(p,n).applyMatrix4(_.matrixWorld);for(const{name:M,box:S,top:x}of u){const k=Math.min(n.x-S.minX,S.maxX-n.x,n.z-S.minZ,S.maxZ-n.z,x-n.y);k>Math.max(.02,d)&&([d,f]=[k,M])}}}),f){const g=l.getWorldPosition(n);i.push(`${a} ${(d*100).toFixed(0)}cm into ${f} at ${g.x.toFixed(2)}, ${g.z.toFixed(2)}`)}};for(const a of this.patrons)r(`${a.kind}${a.drunk?" (drunk)":""} ${a.body.clip}`,a.node,a.engaged);this.inspector&&r("inspector",this.inspector.node,this.inspector.engaged);for(const a of this.helpers)r(`${a.role} ${a.body.clip}`,a.node,a.engaged);for(const a of this.revellers)a.node.visible&&r(`reveller ${a.body.clip}`,a.node,a.engaged);const{janitor:o}=this;return r(`janitor ${o.body.clip}`,o.body.root,o.atFixture),i}}const Vs=s=>document.getElementById(s),yu=await Ys.load();new Gb(Vs("game"),yu,await yu.level(ns[0].level),{hud:Vs("hud"),overlay:Vs("overlay"),screen:Vs("screen"),touch:Vs("touch")});
