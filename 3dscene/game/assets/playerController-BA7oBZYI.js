(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Or="184",Os={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lf=0,Sh=1,Nf=2,zo=1,Uf=2,Tr=3,Ln=0,Qe=1,on=2,ui=0,ks=1,Mh=2,bh=3,Th=4,Ff=5,Qi=100,Bf=101,Of=102,kf=103,zf=104,Vf=200,Hf=201,Gf=202,Wf=203,Tl=204,El=205,Xf=206,qf=207,jf=208,Yf=209,Kf=210,Zf=211,Jf=212,$f=213,Qf=214,Al=0,wl=1,Cl=2,Hs=3,Rl=4,Pl=5,Il=6,Dl=7,Td=0,tp=1,ep=2,Kn=0,Ed=1,Ad=2,wd=3,Cd=4,Rd=5,Pd=6,Id=7,Eh="attached",np="detached",Dd=300,Ni=301,Gs=302,ya=303,va=304,ra=306,Ws=1e3,mn=1001,Ko=1002,Ne=1003,Ld=1004,Er=1005,Se=1006,Vo=1007,Yn=1008,PM=1008,pn=1009,Nd=1010,Ud=1011,Ir=1012,Lc=1013,Nn=1014,an=1015,fi=1016,Nc=1017,Uc=1018,Dr=1020,Fd=35902,Bd=35899,Od=1021,kd=1022,ln=1023,pi=1026,es=1027,Fc=1028,oa=1029,is=1030,Bc=1031,Oc=1033,Ho=33776,Go=33777,Wo=33778,Xo=33779,Ll=35840,Nl=35841,Ul=35842,Fl=35843,Bl=36196,Ol=37492,kl=37496,zl=37488,Vl=37489,Zo=37490,Hl=37491,Gl=37808,Wl=37809,Xl=37810,ql=37811,jl=37812,Yl=37813,Kl=37814,Zl=37815,Jl=37816,$l=37817,Ql=37818,tc=37819,ec=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,Jo=36285,lc=36286,Rn=2200,Lr=2201,ip=2202,Nr=2300,Ur=2301,Sa=2302,Ah=2303,Us=2400,Fs=2401,$o=2402,kc=2500,sp=2501,rp=0,zd=1,cc=2,op=3200,hc=0,ap=1,Ii="",we="srgb",cn="srgb-linear",Qo="linear",Jt="srgb",as=7680,wh=519,lp=512,cp=513,hp=514,zc=515,up=516,dp=517,Vc=518,fp=519,uc=35044,IM=35048,Ch="300 es",Pn=2e3,Fr=2001;function pp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gp(){const s=Br("canvas");return s.style.display="block",s}const Rh={};function ta(...s){const t="THREE."+s.shift();console.log(t,...s)}function Vd(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function mt(...s){s=Vd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ct(...s){s=Vd(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function dc(...s){const t=s.join(" ");t in Rh||(Rh[t]=!0,mt(...s))}function _p(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const xp={[Al]:wl,[Cl]:Il,[Rl]:Dl,[Hs]:Pl,[wl]:Al,[Il]:Cl,[Dl]:Rl,[Pl]:Hs};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const wr=Math.PI/180,Xs=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Lt(s,t,e){return Math.max(t,Math.min(e,s))}function Hc(s,t){return(s%t+t)%t}function yp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vp(s,t,e){return s!==t?(e-s)/(t-s):0}function Cr(s,t,e){return(1-e)*s+e*t}function Sp(s,t,e,n){return Cr(s,t,1-Math.exp(-e*n))}function Mp(s,t=1){return t-Math.abs(Hc(s,t*2)-t)}function bp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ep(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ap(s,t){return s+Math.random()*(t-s)}function wp(s){return s*(.5-Math.random())}function Cp(s){s!==void 0&&(Ph=s);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rp(s){return s*wr}function Pp(s){return s*Xs}function Ip(s){return(s&s-1)===0&&s!==0}function Dp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Np(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $t(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jn={DEG2RAD:wr,RAD2DEG:Xs,generateUUID:Dn,clamp:Lt,euclideanModulo:Hc,mapLinear:yp,inverseLerp:vp,lerp:Cr,damp:Sp,pingpong:Mp,smoothstep:bp,smootherstep:Tp,randInt:Ep,randFloat:Ap,randFloatSpread:wp,seededRandom:Cp,degToRad:Rp,radToDeg:Pp,isPowerOfTwo:Ip,ceilPowerOfTwo:Dp,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Np,normalize:$t,denormalize:Cn},lh=class lh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let bt=lh;class me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const x=Math.acos(g),S=Math.sin(x);p=Math.sin(p*x)/S,a=Math.sin(a*x)/S,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Lt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ch=class ch{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;let C=ch;const Ma=new C,Ih=new me,hh=class hh{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],S=i[4],y=i[7],T=i[2],M=i[5],w=i[8];return r[0]=o*_+a*x+l*T,r[3]=o*g+a*S+l*M,r[6]=o*p+a*y+l*w,r[1]=c*_+h*x+d*T,r[4]=c*g+h*S+d*M,r[7]=c*p+h*y+d*w,r[2]=u*_+f*x+m*T,r[5]=u*g+f*S+m*M,r[8]=u*p+f*y+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let Ft=hh;const ba=new Ft,Dh=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){const s={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Jt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Jt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return dc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return dc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[cn]:{primaries:t,whitePoint:n,transfer:Qo,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const Gt=Up();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class Fp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ls===void 0&&(ls=Br("canvas")),ls.width=t.width,ls.height=t.height;const i=ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bp=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ta(i[o].image)):r.push(Ta(i[o]))}else r=Ta(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let Op=0;const Ea=new C;class Ue extends gi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=mn,i=mn,r=Se,o=Yn,a=ln,l=pn,c=Ue.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Dn(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){mt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){mt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Dd;Ue.DEFAULT_ANISOTROPY=1;const uh=class uh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(f+1)/2,T=(p+1)/2,M=(h+u)/4,w=(d+_)/4,v=(m+g)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=M/n,r=w/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=v/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=v/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this.w=Lt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this.w=Lt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;let ae=uh;class kp extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Ue(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends kp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wc extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends bn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Wc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Hd extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LM extends bn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Hd(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const sa=class sa{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Vp)}lookAt(t,e,n){const i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Si.crossVectors(n,dn),Si.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Si.crossVectors(n,dn)),Si.normalize(),Gr.crossVectors(dn,Si),i[0]=Si.x,i[4]=Gr.x,i[8]=dn.x,i[1]=Si.y,i[5]=Gr.y,i[9]=dn.y,i[2]=Si.z,i[6]=Gr.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],S=n[7],y=n[11],T=n[15],M=i[0],w=i[4],v=i[8],A=i[12],R=i[1],P=i[5],D=i[9],N=i[13],F=i[2],L=i[6],k=i[10],V=i[14],Z=i[3],Q=i[7],lt=i[11],_t=i[15];return r[0]=o*M+a*R+l*F+c*Z,r[4]=o*w+a*P+l*L+c*Q,r[8]=o*v+a*D+l*k+c*lt,r[12]=o*A+a*N+l*V+c*_t,r[1]=h*M+d*R+u*F+f*Z,r[5]=h*w+d*P+u*L+f*Q,r[9]=h*v+d*D+u*k+f*lt,r[13]=h*A+d*N+u*V+f*_t,r[2]=m*M+_*R+g*F+p*Z,r[6]=m*w+_*P+g*L+p*Q,r[10]=m*v+_*D+g*k+p*lt,r[14]=m*A+_*N+g*V+p*_t,r[3]=x*M+S*R+y*F+T*Z,r[7]=x*w+S*P+y*L+T*Q,r[11]=x*v+S*D+y*k+T*lt,r[15]=x*A+S*N+y*V+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],x=l*f-c*u,S=a*f-c*d,y=a*u-l*d,T=o*f-c*h,M=o*u-l*h,w=o*d-a*h;return e*(_*x-g*S+p*y)-n*(m*x-g*T+p*M)+i*(m*S-_*T+p*w)-r*(m*y-_*M+g*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=e*a-n*o,S=e*l-i*o,y=e*c-r*o,T=n*l-i*a,M=n*c-r*a,w=i*c-r*l,v=h*_-d*m,A=h*g-u*m,R=h*p-f*m,P=d*g-u*_,D=d*p-f*_,N=u*p-f*g,F=x*N-S*D+y*P+T*R-M*A+w*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return t[0]=(a*N-l*D+c*P)*L,t[1]=(i*D-n*N-r*P)*L,t[2]=(_*w-g*M+p*T)*L,t[3]=(u*M-d*w-f*T)*L,t[4]=(l*R-o*N-c*A)*L,t[5]=(e*N-i*R+r*A)*L,t[6]=(g*y-m*w-p*S)*L,t[7]=(h*w-u*y+f*S)*L,t[8]=(o*D-a*R+c*v)*L,t[9]=(n*R-e*D-r*v)*L,t[10]=(m*M-_*y+p*x)*L,t[11]=(d*y-h*M-f*x)*L,t[12]=(a*A-o*P-l*v)*L,t[13]=(e*P-n*A+i*v)*L,t[14]=(_*S-m*T-g*x)*L,t[15]=(h*T-d*S+u*x)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,_=o*h,g=o*d,p=a*d,x=l*c,S=l*h,y=l*d,T=n.x,M=n.y,w=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+y)*T,i[2]=(m-S)*T,i[3]=0,i[4]=(f-y)*M,i[5]=(1-(u+p))*M,i[6]=(g+x)*M,i[7]=0,i[8]=(m+S)*w,i[9]=(g-x)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=cs.set(i[0],i[1],i[2]).length();const a=cs.set(i[4],i[5],i[6]).length(),l=cs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Tn.copy(this);const c=1/o,h=1/a,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Pn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Pn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Pn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Fr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sa.prototype.isMatrix4=!0;let Tt=sa;const cs=new C,Tn=new Tt,zp=new C(0,0,0),Vp=new C(1,1,1),Si=new C,Gr=new C,dn=new C,Nh=new Tt,Uh=new me;class Jn{constructor(t=0,e=0,n=0,i=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hp=0;const Fh=new C,hs=new me,ei=new Tt,Wr=new C,sr=new C,Gp=new C,Wp=new me,Bh=new C(1,0,0),Oh=new C(0,1,0),kh=new C(0,0,1),zh={type:"added"},Xp={type:"removed"},us={type:"childadded",child:null},Aa={type:"childremoved",child:null};class he extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new C,e=new Jn,n=new me,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ft}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(sr,Wr,this.up):ei.lookAt(Wr,sr,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(ei),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ct("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),us.child=t,this.dispatchEvent(us),us.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new C(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class In extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qp={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=Hc(t,1),e=Lt(e,0,1),n=Lt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return Gt.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&mt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:mt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);mt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):mt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Gt.workingToColorSpace(qe.copy(this),t),Math.round(Lt(qe.r*255,0,255))*65536+Math.round(Lt(qe.g*255,0,255))*256+Math.round(Lt(qe.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=we){Gt.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Xr);const n=Cr(Mi.h,Xr.h,e),i=Cr(Mi.s,Xr.s,e),r=Cr(Mi.l,Xr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Dt;Dt.NAMES=Gd;class NM extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const En=new C,ni=new C,Ra=new C,ii=new C,ds=new C,fs=new C,Vh=new C,Pa=new C,Ia=new C,Da=new C,La=new ae,Na=new ae,Ua=new ae;class Ge{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){En.subVectors(i,e),ni.subVectors(n,e),Ra.subVectors(t,e);const o=En.dot(En),a=En.dot(ni),l=En.dot(Ra),c=ni.dot(ni),h=ni.dot(Ra),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return La.setScalar(0),Na.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Na,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),ni.subVectors(t,e),En.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),En.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ds.subVectors(i,n),fs.subVectors(r,n),Pa.subVectors(t,n);const l=ds.dot(Pa),c=fs.dot(Pa);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,i);const h=ds.dot(Ia),d=fs.dot(Ia);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);Da.subVectors(t,r);const f=ds.dot(Da),m=fs.dot(Da);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(fs,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Vh.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Vh,a);const p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ie{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),jr.subVectors(this.max,rr),ps.subVectors(t.a,rr),ms.subVectors(t.b,rr),gs.subVectors(t.c,rr),bi.subVectors(ms,ps),Ti.subVectors(gs,ms),Oi.subVectors(ps,gs);let e=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Oi.z,Oi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Oi.z,0,-Oi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Oi.y,Oi.x,0];return!Fa(e,ps,ms,gs,jr)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,ps,ms,gs,jr))?!1:(Yr.crossVectors(bi,Ti),e=[Yr.x,Yr.y,Yr.z],Fa(e,ps,ms,gs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,qr=new ie,ps=new C,ms=new C,gs=new C,bi=new C,Ti=new C,Oi=new C,rr=new C,jr=new C,Yr=new C,ki=new C;function Fa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ki.fromArray(s,r);const a=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ci=jp();function jp(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Yp(s){Math.abs(s)>65504&&mt("DataUtils.toHalfFloat(): Value out of range."),s=Lt(s,-65504,65504),ci.floatView[0]=s;const t=ci.uint32View[0],e=t>>23&511;return ci.baseTable[e]+((t&8388607)>>ci.shiftTable[e])}function Kp(s){const t=s>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[t]+(s&1023)]+ci.exponentTable[t],ci.floatView[0]}class UM{static toHalfFloat(t){return Yp(t)}static fromHalfFloat(t){return Kp(t)}}const Ae=new C,Kr=new bt;let Zp=0;class ue extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Wd extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xd extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Jp=new ie,or=new C,Ba=new C;class tn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Ba)),this.expandByPoint(or.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $p=0;const _n=new Tt,Oa=new he,_s=new C,fn=new ie,ar=new ie,ke=new C;class xe extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?Xd:Wd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ie);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(fn.min,ar.min),fn.expandByPoint(ke),ke.addVectors(fn.max,ar.max),fn.expandByPoint(ke)):(fn.expandByPoint(ar.min),fn.expandByPoint(ar.max))}fn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),ke.add(_s)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new C,l[v]=new C;const c=new C,h=new C,d=new C,u=new bt,f=new bt,m=new bt,_=new C,g=new C;function p(v,A,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[v].add(_),a[A].add(_),a[R].add(_),l[v].add(g),l[A].add(g),l[R].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let v=0,A=x.length;v<A;++v){const R=x[v],P=R.start,D=R.count;for(let N=P,F=P+D;N<F;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new C,y=new C,T=new C,M=new C;function w(v){T.fromBufferAttribute(i,v),M.copy(T);const A=a[v];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(M,A);const P=y.dot(l[v])<0?-1:1;o.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,A=x.length;v<A;++v){const R=x[v],P=R.start,D=R.count;for(let N=P,F=P+D;N<F;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new ue(u,h,d)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new C;class aa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Qp=0;class Zn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=ks,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=El,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){mt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){mt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ri=new C,ka=new C,Zr=new C,Ei=new C,za=new C,Jr=new C,Va=new C;class Fi{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ka.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(ka);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=Ei.dot(this.direction),l=-Ei.dot(Zr),c=Ei.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ka).addScaledVector(Zr,u),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,r){za.subVectors(e,t),Jr.subVectors(n,t),Va.crossVectors(za,Jr);let o=this.direction.dot(Va),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const l=a*this.direction.dot(Jr.crossVectors(Ei,Jr));if(l<0)return null;const c=a*this.direction.dot(za.cross(Ei));if(c<0||l+c>o)return null;const h=-a*Ei.dot(Va);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hh=new Tt,zi=new Fi,$r=new tn,Gh=new C,Qr=new C,to=new C,eo=new C,Ha=new C,no=new C,Wh=new C,io=new C;class fe extends he{constructor(t=new xe,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ha.fromBufferAttribute(d,t),o?no.addScaledVector(Ha,h):no.addScaledVector(Ha.sub(e),h))}e.add(no)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!($r.containsPoint(zi.origin)===!1&&(zi.intersectSphere($r,Gh)===null||zi.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,T=S;y<T;y+=3){const M=a.getX(y),w=a.getX(y+1),v=a.getX(y+2);i=so(this,p,t,n,c,h,d,M,w,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);i=so(this,o,t,n,c,h,d,x,S,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,T=S;y<T;y+=3){const M=y,w=y+1,v=y+2;i=so(this,p,t,n,c,h,d,M,w,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,S=g+1,y=g+2;i=so(this,o,t,n,c,h,d,x,S,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function tm(s,t,e,n,i,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ln,a),l===null)return null;io.copy(a),io.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(io);return c<e.near||c>e.far?null:{distance:c,point:io.clone(),object:s}}function so(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Qr),s.getVertexPosition(l,to),s.getVertexPosition(c,eo);const h=tm(s,t,e,n,Qr,to,eo,Wh);if(h){const d=new C;Ge.getBarycoord(Wh,Qr,to,eo,d),i&&(h.uv=Ge.getInterpolatedAttribute(i,a,l,c,d,new bt)),r&&(h.uv1=Ge.getInterpolatedAttribute(r,a,l,c,d,new bt)),o&&(h.normal=Ge.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};Ge.getNormal(Qr,to,eo,u.normal),h.face=u,h.barycoord=d}return h}const lr=new ae,Xh=new ae,qh=new ae,em=new ae,jh=new Tt,ro=new C,Ga=new tn,Yh=new Tt,Wa=new Fi;class nm extends fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Tt,this.bindMatrixInverse=new Tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ie),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ro),this.boundingBox.expandByPoint(ro)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ro),this.boundingSphere.expandByPoint(ro)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),t.ray.intersectsSphere(Ga)!==!1&&(Yh.copy(i).invert(),Wa.copy(t.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Wa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===np?this.bindMatrixInverse.copy(this.bindMatrix).invert():mt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Xh.fromBufferAttribute(i.attributes.skinIndex,t),qh.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(lr.copy(e),e.set(0,0,0,0)):(lr.set(...e,1),e.set(0,0,0)),lr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=qh.getComponent(r);if(o!==0){const a=Xh.getComponent(r);jh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(em.copy(lr).applyMatrix4(jh),o)}}return e.isVector4&&(e.w=lr.w),e.applyMatrix4(this.bindMatrixInverse)}}class jd extends he{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ns extends Ue{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ne,h=Ne,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kh=new Tt,im=new Tt;class qc{constructor(t=[],e=[]){this.uuid=Dn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){mt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Tt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Tt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:im;Kh.multiplyMatrices(a,e[r]),Kh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ns(e,t,t,ln,an);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(mt("Skeleton: No bone found with UUID:",r),o=new jd),this.bones.push(o),this.boneInverses.push(new Tt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class fc extends ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new Tt,Zh=new Tt,oo=[],Jh=new ie,sm=new Tt,cr=new fe,hr=new tn;class rm extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ie),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Jh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Jh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),hr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),Zh.multiplyMatrices(n,xs),cr.matrixWorld=Zh,cr.raycast(t,oo);for(let o=0,a=oo.length;o<a;o++){const l=oo[o];l.instanceId=r,l.object=this,e.push(l)}oo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(i*this.count),i,this.count,Fc,an));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new C,om=new C,am=new Ft;class Xn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xa.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||am.getNormalMatrix(t),i=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new tn,lm=new bt(.5,.5),ao=new C;class kr{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],x=r[12],S=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,p-m,T-x).normalize(),i[1].setComponents(c+o,f+h,p+m,T+x).normalize(),i[2].setComponents(c+a,f+d,p+_,T+S).normalize(),i[3].setComponents(c-a,f-d,p-_,T-S).normalize(),n)i[4].setComponents(l,u,g,y).normalize(),i[5].setComponents(c-l,f-u,p-g,T-y).normalize();else if(i[4].setComponents(c-l,f-u,p-g,T-y).normalize(),e===Pn)i[5].setComponents(c+l,f+u,p+g,T+y).normalize();else if(e===Fr)i[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);const e=lm.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ao.x=i.normal.x>0?t.max.x:t.min.x,ao.y=i.normal.y>0?t.max.y:t.min.y,ao.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const zn=new Tt,Vn=new kr;class jc{constructor(){this.coordinateSystem=Pn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(zn,i.coordinateSystem,i.reversedDepth),Vn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(zn,i.coordinateSystem,i.reversedDepth),Vn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(zn,i.coordinateSystem,i.reversedDepth),Vn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(zn,i.coordinateSystem,i.reversedDepth),Vn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(zn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Vn.setFromProjectionMatrix(zn,i.coordinateSystem,i.reversedDepth),Vn.containsPoint(t))return!0}return!1}clone(){return new jc}}function qa(s,t){return s-t}function cm(s,t){return s.z-t.z}function hm(s,t){return t.z-s.z}class um{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const nn=new Tt,dm=new Dt(1,1,1),$h=new kr,fm=new jc,lo=new ie,Hi=new tn,ur=new C,Qh=new C,pm=new C,ja=new um,je=new fe,co=[];function mm(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Gi(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class gm extends fe{constructor(t,e,n=e*2,i){super(new xe,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new ns(e,t,t,ln,an);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new ns(e,t,t,oa,Nn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new ns(e,t,t,ln,an);n.colorSpace=Gt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new ue(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ue(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ie);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,nn),this.getBoundingBoxAt(r,lo).applyMatrix4(nn),t.union(lo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,nn),this.getBoundingSphereAt(r,Hi).applyMatrix4(nn),t.union(Hi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(qa),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;nn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(dm.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(qa),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);mm(d,u,l);const f=d.itemSize;for(let m=d.count,_=c;m<_;m++){const g=l+m;for(let p=0;p<f;p++)u.setComponent(g,p,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,d=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,m=f.array,_=t-d;for(let g=h;g<h+u;g++)m[g]=m[g]+_;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const m=u[f],{array:_,itemSize:g}=m;_.copyWithin(t*g,h*g,(h+d)*g),m.addUpdateRange(t*g,d*g),m.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new ie,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(ur.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new tn;this.getBoundingBoxAt(t,lo),lo.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;o&&(d=o.getX(d)),ur.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared(ur))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(qa);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);Gi(this._multiDrawCounts,i),Gi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Gi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Gi(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Gi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new xe,this._initializeGeometry(r));const o=this.geometry;r.index&&Gi(r.index.array,o.index.array);for(const a in r.attributes)Gi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;je.material=this.material,je.geometry.index=o.index,je.geometry.attributes=o.attributes,je.geometry.boundingBox===null&&(je.geometry.boundingBox=new ie),je.geometry.boundingSphere===null&&(je.geometry.boundingSphere=new tn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];je.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,je.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,je.geometry.boundingBox),this.getBoundingSphereAt(c,je.geometry.boundingSphere),je.raycast(t,co);for(let d=0,u=co.length;d<u;d++){const f=co[d];f.object=this,f.batchId=a,e.push(f)}co.length=0}je.material=null,je.geometry.index=null,je.geometry.attributes={},je.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex();let a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,a=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,m=this._indirectTexture,_=m.image.data,g=n.isArrayCamera?fm:$h;f&&!n.isArrayCamera&&(nn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),$h.setFromProjectionMatrix(nn,n.coordinateSystem,n.reversedDepth));let p=0;if(this.sortObjects){nn.copy(this.matrixWorld).invert(),ur.setFromMatrixPosition(n.matrixWorld).applyMatrix4(nn),Qh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(nn);for(let y=0,T=c.length;y<T;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,nn),this.getBoundingSphereAt(M,Hi).applyMatrix4(nn);let w=!1;if(f&&(w=!g.intersectsSphere(Hi,n)),!w){const v=u[M],A=pm.subVectors(Hi.center,ur).dot(Qh);ja.push(v.start,v.count,A,y)}}const x=ja.list,S=this.customSort;S===null?x.sort(r.transparent?hm:cm):S.call(this,x,n);for(let y=0,T=x.length;y<T;y++){const M=x[y];h[p]=M.start*a*l,d[p]=M.count*l,_[p]=M.index,p++}ja.reset()}else for(let x=0,S=c.length;x<S;x++)if(c[x].visible&&c[x].active){const y=c[x].geometryIndex;let T=!1;if(f&&(this.getMatrixAt(x,nn),this.getBoundingSphereAt(y,Hi).applyMatrix4(nn),T=!g.intersectsSphere(Hi,n)),!T){const M=u[y];h[p]=M.start*a*l,d[p]=M.count*l,_[p]=x,p++}}m.needsUpdate=!0,this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class zr extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ea=new C,na=new C,tu=new Tt,dr=new Fi,ho=new tn,Ya=new C,eu=new C;class Qs extends he{constructor(t=new xe,e=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ea.fromBufferAttribute(e,i-1),na.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ea.distanceTo(na);t.setAttribute("lineDistance",new Fe(n,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;tu.copy(i).invert(),dr.copy(t.ray).applyMatrix4(tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),S=uo(this,t,dr,l,p,x,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=uo(this,t,dr,l,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=uo(this,t,dr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=uo(this,t,dr,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(ea.fromBufferAttribute(a,i),na.fromBufferAttribute(a,r),e.distanceSqToSegment(ea,na,Ya,eu)>n)return;Ya.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ya);if(!(c<t.near||c>t.far))return{distance:c,point:eu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const nu=new C,iu=new C;class la extends Qs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)nu.fromBufferAttribute(e,i),iu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nu.distanceTo(iu);t.setAttribute("lineDistance",new Fe(n,1))}else mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yc extends Qs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Yd extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const su=new Tt,pc=new Fi,fo=new tn,po=new C;class Kc extends he{constructor(t=new xe,e=new Yd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;su.copy(i).invert(),pc.copy(t.ray).applyMatrix4(su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){const g=c.getX(m);po.fromBufferAttribute(d,g),ru(po,g,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)po.fromBufferAttribute(d,m),ru(po,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ru(s,t,e,n,i,r,o){const a=pc.distanceSqToPoint(s);if(a<e){const l=new C;pc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Kd extends Ue{constructor(t,e,n,i,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class FM extends Kd{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=mn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends Kd{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Ni),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Zd extends Ue{constructor(t=[],e=Ni,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qs extends Ue{constructor(t,e,n=Nn,i,r,o,a=Ne,l=Ne,c,h=pi,d=1){if(h!==pi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class _m extends qs{constructor(t,e=Nn,n=Ni,i,r,o=Ne,a=Ne,l,c=pi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jd extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ss extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function m(_,g,p,x,S,y,T,M,w,v,A){const R=y/w,P=T/v,D=y/2,N=T/2,F=M/2,L=w+1,k=v+1;let V=0,Z=0;const Q=new C;for(let lt=0;lt<k;lt++){const _t=lt*P-N;for(let st=0;st<L;st++){const It=st*R-D;Q[_]=It*x,Q[g]=_t*S,Q[p]=F,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[p]=M>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(st/w),d.push(1-lt/v),V+=1}}for(let lt=0;lt<v;lt++)for(let _t=0;_t<w;_t++){const st=u+_t+L*lt,It=u+_t+L*(lt+1),zt=u+(_t+1)+L*(lt+1),Mt=u+(_t+1)+L*lt;l.push(st,It,Mt),l.push(It,zt,Mt),Z+=6}a.addGroup(f,Z,A),f+=Z,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $d extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $d(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ca extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-o;for(let S=0;S<c;S++){const y=S*d-r;m.push(y,-x,0),_.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const S=x+c*p,y=x+c*(p+1),T=x+1+c*(p+1),M=x+1+c*p;f.push(S,y,M),f.push(y,T,M)}this.setIndex(f),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zc extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],S=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const M=T/e;d.x=-t*Math.cos(i+M*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(i+M*r)*Math.sin(o+S*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(M+y,1-S),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const S=h[p][x+1],y=h[p][x],T=h[p+1][x],M=h[p+1][x+1];(p!==0||o>0)&&f.push(S,y,M),(p!==n-1||l<Math.PI)&&f.push(y,T,M)}this.setIndex(f),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function js(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(ou(i))i.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ou(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=js(s[e]);for(const i in n)t[i]=n[i]}return t}function ou(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const ym={clone:js,merge:Je};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mm extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ha extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qn extends ha{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bm extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function mo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Em(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function au(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function tf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class tr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Am extends tr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fs:r=t,a=2*e-n;break;case $o:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fs:o=t,l=2*n-e;break;case $o:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,S=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+x*o[c+T]+S*o[l+T]+y*o[d+T];return r}}class ef extends tr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}}class wm extends tr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Cm extends tr{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const _=(n-e)/(i-e),g=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*g+o[l+p]*_;return r}const f=a*2,m=t-1;for(let _=0;_!==a;++_){const g=o[c+_],p=o[l+_],x=m*f+_*2,S=u[x],y=u[x+1],T=t*f+_*2,M=d[T],w=d[T+1];let v=(n-e)/(i-e),A,R,P,D,N;for(let F=0;F<8;F++){A=v*v,R=A*v,P=1-v,D=P*P,N=D*P;const k=N*e+3*D*v*S+3*P*A*M+R*i-n;if(Math.abs(k)<1e-10)break;const V=3*D*(S-e)+6*P*v*(M-S)+3*A*(i-M);if(Math.abs(V)<1e-10)break;v=v-k/V,v=Math.max(0,Math.min(1,v))}r[_]=N*g+3*D*v*y+3*P*A*w+R*p}return r}}class Bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mo(e,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mo(t.times,Array),values:mo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ef(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Am(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Cm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case Ur:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break;case Ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return mt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ct("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ct("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ct("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&mp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ur;class er extends Bn{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Nr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends Bn{constructor(t,e,n,i){super(t,e,n,i)}}nf.prototype.ValueTypeName="color";class Ys extends Bn{constructor(t,e,n,i){super(t,e,n,i)}}Ys.prototype.ValueTypeName="number";class Rm extends tr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)me.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ks extends Bn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Rm(this.times,this.values,this.getValueSize(),t)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Bn{constructor(t,e,n){super(t,e,n)}}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Nr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends Bn{constructor(t,e,n,i){super(t,e,n,i)}}Zs.prototype.ValueTypeName="vector";class mc{constructor(t="",e=-1,n=[],i=kc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Im(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Em(l);l=au(l,1,h),c=au(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ys(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(mt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Ct("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,_){if(f.length!==0){const g=[],p=[];tf(f,g,p,m),g.length!==0&&_.push(new d(u,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const S=u[m];g.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new Ys(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+e[d].name+"]";n(Zs,f+".position",u,"pos",i),n(Ks,f+".quaternion",u,"rot",i),n(Zs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Pm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return nf;case"quaternion":return Ks;case"bool":case"boolean":return er;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Im(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Pm(s.type);if(s.times===void 0){const e=[],n=[];tf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const hi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(lu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!lu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function lu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Dm{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Lm=new Dm;class _i{constructor(t){this.manager=t!==void 0?t:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}_i.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class Nm extends Error{constructor(t,e){super(t),this.response=e}}class Js extends _i{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=hi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(oi[t]!==void 0){oi[t].push({onLoad:e,onProgress:n,onError:i});return}oi[t]=[],oi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&mt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=oi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){d.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,w=h.length;M<w;M++){const v=h[M];v.onProgress&&v.onProgress(T)}p.enqueue(y),x()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Nm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{hi.add(`file:${t}`,c);const h=oi[t];delete oi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=oi[t];if(h===void 0)throw this.manager.itemError(t),c;delete oi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ys=new WeakMap;class Um extends _i{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=hi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=ys.get(o);d===void 0&&(d=[],ys.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=Br("img");function l(){h(),e&&e(this);const d=ys.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ys.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),hi.remove(`image:${t}`);const u=ys.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}ys.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hi.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class OM extends _i{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new ns,a=new Js(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ct(h);return}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:mn,o.wrapT=c.wrapT!==void 0?c.wrapT:mn,o.magFilter=c.magFilter!==void 0?c.magFilter:Se,o.minFilter=c.minFilter!==void 0?c.minFilter:Se,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Yn),c.mipmapCount===1&&(o.minFilter=Se),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class Fm extends _i{constructor(t){super(t)}load(t,e,n,i){const r=new Ue,o=new Um(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ua extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ka=new Tt,cu=new C,hu=new C;class Jc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hu),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Fr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const go=new C,_o=new me,Hn=new C;class sf extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,_o,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(go,_o,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new C,uu=new bt,du=new bt;class rn extends sf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,uu,du),e.subVectors(du,uu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Bm extends Jc{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Om extends ua{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class km extends Jc{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class zm extends ua{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new km}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class da extends sf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vm extends Jc{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hm extends ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new Vm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class kM extends ua{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class zM extends xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Za=new WeakMap;class Gm extends _i{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&mt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&mt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=hi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Za.has(o)===!0?(i&&i(Za.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){hi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t)}).catch(function(c){i&&i(c),Za.set(l,c),hi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});hi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let xo;class rf{static getContext(){return xo===void 0&&(xo=new(window.AudioContext||window.webkitAudioContext)),xo}static setContext(t){xo=t}}class VM extends _i{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Js(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=rf.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Ct(l),r.manager.itemError(t)}}}const vs=-90,Ss=1;class Wm extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(vs,Ss,t,e);i.layers=this.layers,this.add(i);const r=new rn(vs,Ss,t,e);r.layers=this.layers,this.add(r);const o=new rn(vs,Ss,t,e);o.layers=this.layers,this.add(o);const a=new rn(vs,Ss,t,e);a.layers=this.layers,this.add(a);const l=new rn(vs,Ss,t,e);l.layers=this.layers,this.add(l);const c=new rn(vs,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xm extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=jm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function jm(){this._document.hidden===!1&&this.reset()}const Wi=new C,Ja=new me,Ym=new C,Xi=new C,qi=new C;class HM extends he{constructor(){super(),this.type="AudioListener",this.context=rf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new qm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Wi,Ja,Ym),Xi.set(0,0,-1).applyQuaternion(Ja),qi.set(0,1,0).applyQuaternion(Ja),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Wi.x,n),e.positionY.linearRampToValueAtTime(Wi.y,n),e.positionZ.linearRampToValueAtTime(Wi.z,n),e.forwardX.linearRampToValueAtTime(Xi.x,n),e.forwardY.linearRampToValueAtTime(Xi.y,n),e.forwardZ.linearRampToValueAtTime(Xi.z,n),e.upX.linearRampToValueAtTime(qi.x,n),e.upY.linearRampToValueAtTime(qi.y,n),e.upZ.linearRampToValueAtTime(qi.z,n)}else e.setPosition(Wi.x,Wi.y,Wi.z),e.setOrientation(Xi.x,Xi.y,Xi.z,qi.x,qi.y,qi.z)}}class Km extends he{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){mt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(mt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){mt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(mt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const ji=new C,fu=new me,Zm=new C,Yi=new C;class GM extends Km{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ji,fu,Zm),Yi.set(0,0,1).applyQuaternion(fu);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ji.x,n),e.positionY.linearRampToValueAtTime(ji.y,n),e.positionZ.linearRampToValueAtTime(ji.z,n),e.orientationX.linearRampToValueAtTime(Yi.x,n),e.orientationY.linearRampToValueAtTime(Yi.y,n),e.orientationZ.linearRampToValueAtTime(Yi.z,n)}else e.setPosition(ji.x,ji.y,ji.z),e.setOrientation(Yi.x,Yi.y,Yi.z)}}class Jm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){me.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;me.multiplyQuaternionsFlat(t,o,t,e,t,n),me.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const $c="\\[\\]\\.:\\/",$m=new RegExp("["+$c+"]","g"),Qc="[^"+$c+"]",Qm="[^"+$c.replace("\\.","")+"]",tg=/((?:WC+[\/:])*)/.source.replace("WC",Qc),eg=/(WCOD+)?/.source.replace("WCOD",Qm),ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),sg=new RegExp("^"+tg+eg+ng+ig+"$"),rg=["material","materials","bones","map"];class og{constructor(t,e,n){const i=n||Zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Zt{constructor(t,e,n){this.path=e,this.parsedPath=n||Zt.parseTrackName(e),this.node=Zt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Zt.Composite(t,e,n):new Zt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($m,"")}static parseTrackName(t){const e=sg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Zt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){mt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;Ct("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Zt.Composite=og;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ag{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:Us,endingEnd:Us};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings&&Object.assign(l,h.settings),h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lr,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case sp:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case kc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===ip;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Rn){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Fs,i.endingEnd=Fs):(t?i.endingStart=this.zeroSlopeAtStart?Fs:Us:i.endingStart=$o,e?i.endingEnd=this.zeroSlopeAtEnd?Fs:Us:i.endingEnd=$o)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const lg=new Float32Array(1);class of extends gi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[d]=m;else{if(m=o[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;m=new Jm(Zt.create(n,f,_),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[d]=m}a[d].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new ef(new Float32Array(2),new Float32Array(2),1,lg),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?mc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new ag(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?mc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const pu=new Tt;class gc{constructor(t,e,n=0,i=1/0){this.ray=new Fi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ct("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(t,e=!0,n=[]){return _c(t,this,n,e),n.sort(mu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)_c(t[i],this,n,e);return n.sort(mu),n}}function mu(s,t){return s.distance-t.distance}function _c(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)_c(r[o],t,e,!0)}}class cg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,mt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class gu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Lt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=class dh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};dh.prototype.isMatrix2=!0;let _u=dh;const xu=new bt;class WM{constructor(t=new bt(1/0,1/0),e=new bt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xu.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xu).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yu=new C,yo=new C,Ms=new C,bs=new C,$a=new C,hg=new C,ug=new C;class Un{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){yu.subVectors(t,this.start),yo.subVectors(this.end,this.start);const n=yo.dot(yo);if(n===0)return 0;let r=yo.dot(yu)/n;return e&&(r=Lt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=hg,n=ug){const i=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,h=t.end;Ms.subVectors(c,a),bs.subVectors(h,l),$a.subVectors(a,l);const d=Ms.dot(Ms),u=bs.dot(bs),f=bs.dot($a);if(d<=i&&u<=i)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,o=f/u,o=Lt(o,0,1);else{const m=Ms.dot($a);if(u<=i)o=0,r=Lt(-m/d,0,1);else{const _=Ms.dot(bs),g=d*u-_*_;g!==0?r=Lt((_*f-m*u)/g,0,1):r=0,o=(_*r+f)/u,o<0?(o=0,r=Lt(-m/d,0,1)):o>1&&(o=1,r=Lt((_-m)/d,0,1))}}return e.copy(a).addScaledVector(Ms,r),n.copy(l).addScaledVector(bs,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const wi=new C,vo=new Tt,Qa=new Tt;class XM extends la{constructor(t){const e=af(t),n=new xe,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Fe(i,3)),n.setAttribute("color",new Fe(r,3));const o=new zr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new Dt(255),l=new Dt(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Qa.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(vo.multiplyMatrices(Qa,a.matrixWorld),wi.setFromMatrixPosition(vo),i.setXYZ(o,wi.x,wi.y,wi.z),vo.multiplyMatrices(Qa,a.parent.matrixWorld),wi.setFromMatrixPosition(vo),i.setXYZ(o+1,wi.x,wi.y,wi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function af(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...af(s.children[e]));return t}class dg extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){mt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function fg(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function pg(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function mg(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function xc(s,t,e,n){const i=gg(n);switch(e){case Od:return s*t;case Fc:return s*t/i.components*i.byteLength;case oa:return s*t/i.components*i.byteLength;case is:return s*t*2/i.components*i.byteLength;case Bc:return s*t*2/i.components*i.byteLength;case kd:return s*t*3/i.components*i.byteLength;case ln:return s*t*4/i.components*i.byteLength;case Oc:return s*t*4/i.components*i.byteLength;case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(s,16)*Math.max(t,8)/4;case Ll:case Ul:return Math.max(s,8)*Math.max(t,8)/2;case Bl:case Ol:case zl:case Vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kl:case Zo:case Hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ic:case sc:case rc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case oc:case ac:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jo:case lc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(s){switch(s){case pn:case Nd:return{byteLength:1,components:1};case Ir:case Ud:case fi:return{byteLength:2,components:1};case Nc:case Uc:return{byteLength:2,components:4};case Nn:case Lc:case an:return{byteLength:4,components:1};case Fd:case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class qM{static contain(t,e){return fg(t,e)}static cover(t,e){return pg(t,e)}static fill(t){return mg(t)}static getByteLength(t,e,n,i){return xc(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);function lf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function _g(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
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
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
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
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
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
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,i0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,F0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,k0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z0=`#define PHONG
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
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,H0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,W0=`#define TOON
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
}`,X0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,q0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,K0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Z0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:xg,alphahash_pars_fragment:yg,alphamap_fragment:vg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:bg,aomap_fragment:Tg,aomap_pars_fragment:Eg,batching_pars_vertex:Ag,batching_vertex:wg,begin_vertex:Cg,beginnormal_vertex:Rg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Bg,color_pars_fragment:Og,color_pars_vertex:kg,color_vertex:zg,common:Vg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:jg,colorspace_fragment:Yg,colorspace_pars_fragment:Kg,envmap_fragment:Zg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:$g,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:x_,lights_fragment_end:y_,lightprobes_pars_fragment:v_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:T_,map_fragment:E_,map_pars_fragment:A_,map_particle_fragment:w_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:P_,morphinstance_vertex:I_,morphcolor_vertex:D_,morphnormal_vertex:L_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:F_,normal_fragment_maps:B_,normal_pars_fragment:O_,normal_pars_vertex:k_,normal_vertex:z_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:j_,premultiplied_alpha_fragment:Y_,project_vertex:K_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:e0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:o0,skinnormal_vertex:a0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:_0,background_vert:x0,background_frag:y0,backgroundCube_vert:v0,backgroundCube_frag:S0,cube_vert:M0,cube_frag:b0,depth_vert:T0,depth_frag:E0,distance_vert:A0,distance_frag:w0,equirect_vert:C0,equirect_frag:R0,linedashed_vert:P0,linedashed_frag:I0,meshbasic_vert:D0,meshbasic_frag:L0,meshlambert_vert:N0,meshlambert_frag:U0,meshmatcap_vert:F0,meshmatcap_frag:B0,meshnormal_vert:O0,meshnormal_frag:k0,meshphong_vert:z0,meshphong_frag:V0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:j0,shadow_vert:Y0,shadow_frag:K0,sprite_vert:Z0,sprite_frag:J0},ht={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},qn={basic:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Je([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Je([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Je([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Je([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Je([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Je([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Je([ht.common,ht.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Je([ht.lights,ht.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};qn.physical={uniforms:Je([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const So={r:0,b:0,g:0},$0=new Tt,cf=new Ft;cf.set(-1,0,0,0,1,0,0,0,1);function Q0(s,t,e,n,i,r){const o=new Dt(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const y=x.backgroundBlurriness>0;S=t.get(S,y)}return S}function m(x){let S=!1;const y=f(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,S){const y=f(S);y&&(y.isCubeTexture||y.mapping===ra)?(c===void 0&&(c=new fe(new ss(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:js(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cf),c.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Jt,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new fe(new ca(2,2),new $n({name:"BackgroundMaterial",uniforms:js(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(So,Qd(s)),e.buffers.color.setClear(So.r,So.g,So.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:_,dispose:p}}function tx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(P,D,N,F,L){let k=!1;const V=d(P,F,N,D);r!==V&&(r=V,c(r.object)),k=f(P,F,N,L),k&&m(P,F,N,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(P,D,N,F),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,D,N,F){const L=F.wireframe===!0;let k=n[D.id];k===void 0&&(k={},n[D.id]=k);const V=P.isInstancedMesh===!0?P.id:0;let Z=k[V];Z===void 0&&(Z={},k[V]=Z);let Q=Z[N.id];Q===void 0&&(Q={},Z[N.id]=Q);let lt=Q[L];return lt===void 0&&(lt=u(l()),Q[L]=lt),lt}function u(P){const D=[],N=[],F=[];for(let L=0;L<e;L++)D[L]=0,N[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,D,N,F){const L=r.attributes,k=D.attributes;let V=0;const Z=N.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const _t=L[Q];let st=k[Q];if(st===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(st=P.instanceColor)),_t===void 0||_t.attribute!==st||st&&_t.data!==st.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function m(P,D,N,F){const L={},k=D.attributes;let V=0;const Z=N.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let _t=k[Q];_t===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor));const st={};st.attribute=_t,_t&&_t.data&&(st.data=_t.data),L[Q]=st,V++}r.attributes=L,r.attributesNum=V,r.index=F}function _(){const P=r.newAttributes;for(let D=0,N=P.length;D<N;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){const N=r.newAttributes,F=r.enabledAttributes,L=r.attributeDivisors;N[P]=1,F[P]===0&&(s.enableVertexAttribArray(P),F[P]=1),L[P]!==D&&(s.vertexAttribDivisor(P,D),L[P]=D)}function x(){const P=r.newAttributes,D=r.enabledAttributes;for(let N=0,F=D.length;N<F;N++)D[N]!==P[N]&&(s.disableVertexAttribArray(N),D[N]=0)}function S(P,D,N,F,L,k,V){V===!0?s.vertexAttribIPointer(P,D,N,L,k):s.vertexAttribPointer(P,D,N,F,L,k)}function y(P,D,N,F){_();const L=F.attributes,k=N.getAttributes(),V=D.defaultAttributeValues;for(const Z in k){const Q=k[Z];if(Q.location>=0){let lt=L[Z];if(lt===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),lt!==void 0){const _t=lt.normalized,st=lt.itemSize,It=t.get(lt);if(It===void 0)continue;const zt=It.buffer,Mt=It.type,j=It.bytesPerElement,ut=Mt===s.INT||Mt===s.UNSIGNED_INT||lt.gpuType===Lc;if(lt.isInterleavedBufferAttribute){const it=lt.data,Rt=it.stride,Nt=lt.offset;if(it.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Q.locationSize;Pt++)p(Q.location+Pt,it.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Pt=0;Pt<Q.locationSize;Pt++)g(Q.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let Pt=0;Pt<Q.locationSize;Pt++)S(Q.location+Pt,st/Q.locationSize,Mt,_t,Rt*j,(Nt+st/Q.locationSize*Pt)*j,ut)}else{if(lt.isInstancedBufferAttribute){for(let it=0;it<Q.locationSize;it++)p(Q.location+it,lt.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let it=0;it<Q.locationSize;it++)g(Q.location+it);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let it=0;it<Q.locationSize;it++)S(Q.location+it,st/Q.locationSize,Mt,_t,st*j,st/Q.locationSize*it*j,ut)}}else if(V!==void 0){const _t=V[Z];if(_t!==void 0)switch(_t.length){case 2:s.vertexAttrib2fv(Q.location,_t);break;case 3:s.vertexAttrib3fv(Q.location,_t);break;case 4:s.vertexAttrib4fv(Q.location,_t);break;default:s.vertexAttrib1fv(Q.location,_t)}}}}x()}function T(){A();for(const P in n){const D=n[P];for(const N in D){const F=D[N];for(const L in F){const k=F[L];for(const V in k)h(k[V].object),delete k[V];delete F[L]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const N in D){const F=D[N];for(const L in F){const k=F[L];for(const V in k)h(k[V].object),delete k[V];delete F[L]}}delete n[P.id]}function w(P){for(const D in n){const N=n[D];for(const F in N){const L=N[F];if(L[P.id]===void 0)continue;const k=L[P.id];for(const V in k)h(k[V].object),delete k[V];delete L[P.id]}}}function v(P){for(const D in n){const N=n[D],F=P.isInstancedMesh===!0?P.id:0,L=N[F];if(L!==void 0){for(const k in L){const V=L[k];for(const Z in V)h(V[Z].object),delete V[Z];delete L[k]}delete N[F],Object.keys(N).length===0&&delete n[D]}}}function A(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function ex(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==ln&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const v=w===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==pn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==an&&!v)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(mt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:M}}function ix(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Xn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,S=x*4;let y=p.clippingState||null;l.value=y,y=h(m,u,S,f);for(let T=0;T!==S;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const Di=4,vu=[.125,.215,.35,.446,.526,.582],ts=20,sx=256,fr=new da,Su=new Dt;let tl=null,el=0,nl=0,il=!1;const rx=new C;class Mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=rx}=r;tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),this._renderer.xr.enabled=il,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:fi,format:ln,colorSpace:cn,depthBuffer:!1},i=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ox(r)),this._blurMaterial=lx(r,t,e),this._ggxMaterial=ax(r,t,e)}return i}_compileMaterial(t){const e=new fe(new xe,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,i,r){const l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Su),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new ss,new Sn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Su),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const T=this._cubeSize;Ts(i,y*T,S>2?T:0,T,T),d.setRenderTarget(i),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ni||t.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Di?n-m+Di:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Ts(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(a,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ts(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(a,fr)}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ts;g>ts&&mt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);const p=[];let x=0;for(let w=0;w<ts;++w){const v=w/_,A=Math.exp(-v*v/2);p.push(A),w===0?x+=A:w<g&&(x+=2*A)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=m,u.mipInt.value=S-n;const y=this._sizeLods[i],T=3*y*(i>S-Di?i-S+Di:0),M=4*(this._cubeSize-y);Ts(e,T,M,3*y,2*y),l.setRenderTarget(e),l.render(d,fr)}}function ox(s){const t=[],e=[],n=[];let i=s;const r=s-Di+1+vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Di?l=vu[o-s+Di-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),S=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let M=0;M<f;M++){const w=M%3*2/3-1,v=M>2?0:-1,A=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];x.set(A,_*m*M),S.set(u,g*m*M);const R=[M,M,M,M,M,M];y.set(R,p*m*M)}const T=new xe;T.setAttribute("position",new ue(x,_)),T.setAttribute("uv",new ue(S,g)),T.setAttribute("faceIndex",new ue(y,p)),n.push(new fe(T,null)),i>Di&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function bu(s,t,e){const n=new bn(s,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ax(s,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function lx(s,t,e){const n=new Float32Array(ts),i=new C(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Tu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Eu(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}class hf extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zd(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ss(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ui});r.uniforms.tEquirect.value=e;const o=new fe(i,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Se),new Wm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function cx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ya||f===va)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new hf(m.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,m=f===ya||f===va,_=f===Ni||f===Gs;if(m||_){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Mu(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Mu(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===ya?u.mapping=Ni:f===va&&(u.mapping=Gs),u}function l(u){let f=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function hx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&dc("WebGLRenderer: "+n+" extension not supported."),i}}}function ux(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let S=0,y=x.length;S<y;S+=3){const T=x[S+0],M=x[S+1],w=x[S+2];u.push(T,M,M,w,w,T)}}else{const x=m.array;_=m.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const T=S+0,M=S+1,w=S+2;u.push(T,M,M,w,w,T)}}const g=new(m.count>=65535?Xd:Wd)(u,1);g.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function dx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ct("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function px(s,t,e){const n=new WeakMap,i=new ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let A=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const M=new Float32Array(y*T*4*d),w=new Wc(M,y,T,d);w.type=an,w.needsUpdate=!0;const v=S*4;for(let R=0;R<d;R++){const P=g[R],D=p[R],N=x[R],F=y*T*4*R;for(let L=0;L<P.count;L++){const k=L*v;f===!0&&(i.fromBufferAttribute(P,L),M[F+k+0]=i.x,M[F+k+1]=i.y,M[F+k+2]=i.z,M[F+k+3]=0),m===!0&&(i.fromBufferAttribute(D,L),M[F+k+4]=i.x,M[F+k+5]=i.y,M[F+k+6]=i.z,M[F+k+7]=0),_===!0&&(i.fromBufferAttribute(N,L),M[F+k+8]=i.x,M[F+k+9]=i.y,M[F+k+10]=i.z,M[F+k+11]=N.itemSize===4?i.w:1)}}u={count:d,texture:w,size:new bt(y,T)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function mx(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const gx={[Ed]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[wd]:"CINEON_TONE_MAPPING",[Cd]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function _x(s,t,e,n,i){const r=new bn(t,e,{type:s,depthBuffer:n,stencilBuffer:i,depthTexture:n?new qs(t,e):void 0}),o=new bn(t,e,{type:fi,depthBuffer:!1,stencilBuffer:!1}),a=new xe;a.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const l=new Mm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new fe(a,l),h=new da(-1,1,1,-1,0,1);let d=null,u=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(x,S){r.setSize(x,S),o.setSize(x,S);for(let y=0;y<g.length;y++){const T=g[y];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const S=r.width,y=r.height;for(let T=0;T<g.length;T++){const M=g[T];M.setSize&&M.setSize(S,y)}},this.begin=function(x,S){if(f||x.toneMapping===Kn&&g.length===0)return!1;if(_=S,S!==null){const y=S.width,T=S.height;(r.width!==y||r.height!==T)&&this.setSize(y,T)}return p===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=Kn,!0},this.hasRenderPass=function(){return p},this.end=function(x,S){x.toneMapping=m,f=!0;let y=r,T=o;for(let M=0;M<g.length;M++){const w=g[M];if(w.enabled!==!1&&(w.render(x,T,y,S),w.needsSwap!==!1)){const v=y;y=T,T=v}}if(d!==x.outputColorSpace||u!==x.toneMapping){d=x.outputColorSpace,u=x.toneMapping,l.defines={},Gt.getTransfer(d)===Jt&&(l.defines.SRGB_TRANSFER="");const M=gx[u];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const uf=new Ue,yc=new qs(1,1),df=new Wc,ff=new Hd,pf=new Zd,Au=[],wu=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function ir(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Au[i];if(r===void 0&&(r=new Float32Array(i),Au[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function pa(s,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function xx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function vx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function Sx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function Mx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Pu.set(n),s.uniformMatrix2fv(this.addr,!1,Pu),Oe(e,n)}}function bx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Ru.set(n),s.uniformMatrix3fv(this.addr,!1,Ru),Oe(e,n)}}function Tx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Cu.set(n),s.uniformMatrix4fv(this.addr,!1,Cu),Oe(e,n)}}function Ex(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ax(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function wx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function Cx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function Rx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Px(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function Ix(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function Dx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function Lx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yc.compareFunction=e.isReversedDepthBuffer()?Vc:zc,r=yc):r=uf,e.setTexture2D(t||r,i)}function Nx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ff,i)}function Ux(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pf,i)}function Fx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||df,i)}function Bx(s){switch(s){case 5126:return xx;case 35664:return yx;case 35665:return vx;case 35666:return Sx;case 35674:return Mx;case 35675:return bx;case 35676:return Tx;case 5124:case 35670:return Ex;case 35667:case 35671:return Ax;case 35668:case 35672:return wx;case 35669:case 35673:return Cx;case 5125:return Rx;case 36294:return Px;case 36295:return Ix;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Fx}}function Ox(s,t){s.uniform1fv(this.addr,t)}function kx(s,t){const e=ir(t,this.size,2);s.uniform2fv(this.addr,e)}function zx(s,t){const e=ir(t,this.size,3);s.uniform3fv(this.addr,e)}function Vx(s,t){const e=ir(t,this.size,4);s.uniform4fv(this.addr,e)}function Hx(s,t){const e=ir(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Gx(s,t){const e=ir(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wx(s,t){const e=ir(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xx(s,t){s.uniform1iv(this.addr,t)}function qx(s,t){s.uniform2iv(this.addr,t)}function jx(s,t){s.uniform3iv(this.addr,t)}function Yx(s,t){s.uniform4iv(this.addr,t)}function Kx(s,t){s.uniform1uiv(this.addr,t)}function Zx(s,t){s.uniform2uiv(this.addr,t)}function Jx(s,t){s.uniform3uiv(this.addr,t)}function $x(s,t){s.uniform4uiv(this.addr,t)}function Qx(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=yc:o=uf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function ty(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ff,r[o])}function ey(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pf,r[o])}function ny(s,t,e){const n=this.cache,i=t.length,r=pa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||df,r[o])}function iy(s){switch(s){case 5126:return Ox;case 35664:return kx;case 35665:return zx;case 35666:return Vx;case 35674:return Hx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return jx;case 35669:case 35673:return Yx;case 5125:return Kx;case 36294:return Zx;case 36295:return Jx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}class sy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}}class ry{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iy(e.type)}}class oy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Iu(s,t){s.seq.push(t),s.map[t.id]=t}function ay(s,t,e){const n=s.name,i=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),o=sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Iu(e,c===void 0?new sy(a,s,t):new ry(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new oy(a),Iu(e,d)),e=d}}}class qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ay(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Du(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ly=37297;let cy=0;function hy(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lu=new Ft;function uy(s){Gt._getMatrix(Lu,Gt.workingColorSpace,s);const t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(s)){case Qo:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hy(s.getShaderSource(t),a)}else return r}function dy(s,t){const e=uy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fy={[Ed]:"Linear",[Ad]:"Reinhard",[wd]:"Cineon",[Cd]:"ACESFilmic",[Pd]:"AgX",[Id]:"Neutral",[Rd]:"Custom"};function py(s,t){const e=fy[t];return e===void 0?(mt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new C;function my(){Gt.getLuminanceCoefficients(Mo);const s=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function _y(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xy(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ar(s){return s!==""}function Uu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(s){return s.replace(yy,Sy)}const vy=new Map;function Sy(s,t){let e=Vt[t];if(e===void 0){const n=vy.get(t);if(n!==void 0)e=Vt[n],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}const My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(s){return s.replace(My,by)}function by(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ou(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Ty={[zo]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Ey(s){return Ty[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ay={[Ni]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function wy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ay[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cy={[Gs]:"ENVMAP_MODE_REFRACTION"};function Ry(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Cy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Py={[Td]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function Iy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Py[s.combine]||"ENVMAP_BLENDING_NONE"}function Dy(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ly(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ey(e),c=wy(e),h=Ry(e),d=Iy(e),u=Dy(e),f=gy(e),m=_y(r),_=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(g=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,dy("linearToOutputTexel",e.outputColorSpace),my(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=vc(o),o=Uu(o,e),o=Fu(o,e),a=vc(a),a=Uu(a,e),a=Fu(a,e),o=Bu(o),a=Bu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+g+o,y=x+p+a,T=Du(i,i.VERTEX_SHADER,S),M=Du(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,M),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(T)||"",F=i.getShaderInfoLog(M)||"",L=D.trim(),k=N.trim(),V=F.trim();let Z=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,M);else{const lt=Nu(i,T,"vertex"),_t=Nu(i,M,"fragment");Ct("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+lt+`
`+_t)}else L!==""?mt("WebGLProgram: Program Info Log:",L):(k===""||V==="")&&(Q=!1);Q&&(P.diagnostics={runnable:Z,programLog:L,vertexShader:{log:k,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(T),i.deleteShader(M),v=new qo(i,_),A=xy(i,_)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,ly)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=M,this}let Ny=0;class Uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fy(t),e.set(t,n)),n}}class Fy{constructor(t){this.id=Ny++,this.code=t,this.usedTimes=0}}function By(s){return s===is||s===Zo||s===Jo}function Oy(s,t,e,n,i,r){const o=new Xc,a=new Uy,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,A,R,P,D,N){const F=P.fog,L=D.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=t.get(v.envMap||k,V),Q=Z&&Z.mapping===ra?Z.image.height:null,lt=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&mt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const _t=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,st=_t!==void 0?_t.length:0;let It=0;L.morphAttributes.position!==void 0&&(It=1),L.morphAttributes.normal!==void 0&&(It=2),L.morphAttributes.color!==void 0&&(It=3);let zt,Mt,j,ut;if(lt){const Bt=qn[lt];zt=Bt.vertexShader,Mt=Bt.fragmentShader}else zt=v.vertexShader,Mt=v.fragmentShader,a.update(v),j=a.getVertexShaderID(v),ut=a.getFragmentShaderID(v);const it=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Nt=D.isInstancedMesh===!0,Pt=D.isBatchedMesh===!0,se=!!v.map,qt=!!v.matcap,Qt=!!Z,de=!!v.aoMap,Xt=!!v.lightMap,Re=!!v.bumpMap,ge=!!v.normalMap,hn=!!v.displacementMap,B=!!v.emissiveMap,Pe=!!v.metalnessMap,jt=!!v.roughnessMap,le=v.anisotropy>0,ct=v.clearcoat>0,ye=v.dispersion>0,I=v.iridescence>0,b=v.sheen>0,z=v.transmission>0,Y=le&&!!v.anisotropyMap,$=ct&&!!v.clearcoatMap,tt=ct&&!!v.clearcoatNormalMap,at=ct&&!!v.clearcoatRoughnessMap,X=I&&!!v.iridescenceMap,K=I&&!!v.iridescenceThicknessMap,pt=b&&!!v.sheenColorMap,yt=b&&!!v.sheenRoughnessMap,rt=!!v.specularMap,et=!!v.specularColorMap,Ut=!!v.specularIntensityMap,kt=z&&!!v.transmissionMap,Kt=z&&!!v.thicknessMap,U=!!v.gradientMap,nt=!!v.alphaMap,q=v.alphaTest>0,gt=!!v.alphaHash,ot=!!v.extensions;let J=Kn;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(J=s.toneMapping);const Et={shaderID:lt,shaderType:v.type,shaderName:v.name,vertexShader:zt,fragmentShader:Mt,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Pt,batchingColor:Pt&&D._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&D.instanceColor!==null,instancingMorph:Nt&&D.morphTexture!==null,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:se,matcap:qt,envMap:Qt,envMapMode:Qt&&Z.mapping,envMapCubeUVHeight:Q,aoMap:de,lightMap:Xt,bumpMap:Re,normalMap:ge,displacementMap:hn,emissiveMap:B,normalMapObjectSpace:ge&&v.normalMapType===ap,normalMapTangentSpace:ge&&v.normalMapType===hc,packedNormalMap:ge&&v.normalMapType===hc&&By(v.normalMap.format),metalnessMap:Pe,roughnessMap:jt,anisotropy:le,anisotropyMap:Y,clearcoat:ct,clearcoatMap:$,clearcoatNormalMap:tt,clearcoatRoughnessMap:at,dispersion:ye,iridescence:I,iridescenceMap:X,iridescenceThicknessMap:K,sheen:b,sheenColorMap:pt,sheenRoughnessMap:yt,specularMap:rt,specularColorMap:et,specularIntensityMap:Ut,transmission:z,transmissionMap:kt,thicknessMap:Kt,gradientMap:U,opaque:v.transparent===!1&&v.blending===ks&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:q,alphaHash:gt,combine:v.combine,mapUv:se&&m(v.map.channel),aoMapUv:de&&m(v.aoMap.channel),lightMapUv:Xt&&m(v.lightMap.channel),bumpMapUv:Re&&m(v.bumpMap.channel),normalMapUv:ge&&m(v.normalMap.channel),displacementMapUv:hn&&m(v.displacementMap.channel),emissiveMapUv:B&&m(v.emissiveMap.channel),metalnessMapUv:Pe&&m(v.metalnessMap.channel),roughnessMapUv:jt&&m(v.roughnessMap.channel),anisotropyMapUv:Y&&m(v.anisotropyMap.channel),clearcoatMapUv:$&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(v.sheenRoughnessMap.channel),specularMapUv:rt&&m(v.specularMap.channel),specularColorMapUv:et&&m(v.specularColorMap.channel),specularIntensityMapUv:Ut&&m(v.specularIntensityMap.channel),transmissionMapUv:kt&&m(v.transmissionMap.channel),thicknessMapUv:Kt&&m(v.thicknessMap.channel),alphaMapUv:nt&&m(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ge||le),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(se||nt),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:It,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:J,decodeVideoTexture:se&&v.map.isVideoTexture===!0&&Gt.getTransfer(v.map.colorSpace)===Jt,decodeVideoTextureEmissive:B&&v.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(v.emissiveMap.colorSpace)===Jt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ot&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&v.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function g(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)A.push(R),A.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(A,v),x(A,v),A.push(s.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function S(v){const A=f[v.type];let R;if(A){const P=qn[A];R=ym.clone(P.uniforms)}else R=v.uniforms;return R}function y(v,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new Ly(s,A,v,i),c.push(R),h.set(A,R)),R}function T(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:w}}function ky(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function zy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ku(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function zu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,g,p){let x=s[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=m,x.materialVariant=o(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=g,x.group=p),t++,x}function l(u,f,m,_,g,p){const x=a(u,f,m,_,g,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function c(u,f,m,_,g,p){const x=a(u,f,m,_,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||zy),n.length>1&&n.sort(f||ku),i.length>1&&i.sort(f||ku)}function d(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Vy(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new zu,s.set(n,[o])):i>=r.length?(o=new zu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Hy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Dt};break;case"SpotLight":e={position:new C,direction:new C,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Gy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Wy=0;function Xy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qy(s){const t=new Hy,e=Gy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Tt,o=new Tt;function a(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,S=0,y=0,T=0,M=0,w=0;c.sort(Xy);for(let A=0,R=c.length;A<R;A++){const P=c[A],D=P.color,N=P.intensity,F=P.distance;let L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===is?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*N,d+=D.g*N,u+=D.b*N;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],N);w++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,Z=e.get(P);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(N),k.distance=F,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const V=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,V.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[_]=V.matrix,P.castShadow){const Z=e.get(P);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=L,y++}_++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(D).multiplyScalar(N),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const V=P.shadow,Z=e.get(P);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=P.shadow.matrix,S++}n.point[m]=k,m++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(N),k.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=k,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==f||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==S||v.numSpotShadows!==y||v.numSpotMaps!==T||v.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,v.directionalLength=f,v.pointLength=m,v.spotLength=_,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=S,v.numSpotShadows=y,v.numSpotMaps=T,v.numLightProbes=w,n.version=Wy++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Vu(s){const t=new qy(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function jy(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Vu(s),t.set(i,[a])):r>=o.length?(a=new Vu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zy=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Jy=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Hu=new Tt,pr=new C,rl=new C;function $y(s,t,e){let n=new kr;const i=new bt,r=new bt,o=new ae,a=new bm,l=new Tm,c={},h=e.maxTextureSize,d={[Ln]:Qe,[Qe]:Ln,[on]:on},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Yy,fragmentShader:Ky}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new xe;m.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let p=this.type;this.render=function(M,w,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Uf&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zo);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ui),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==this.type;N&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(L=>L.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,L=M.length;F<L;F++){const k=M[F],V=k.shadow;if(V===void 0){mt("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();i.multiply(Z),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,V.mapSize.y=r.y));const Q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Tr){if(k.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bn(i.x,i.y,{format:is,type:fi,minFilter:Se,magFilter:Se,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new qs(i.x,i.y,an),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=pi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ne,V.map.depthTexture.magFilter=Ne}else k.isPointLight?(V.map=new hf(i.x),V.map.depthTexture=new _m(i.x,Nn)):(V.map=new bn(i.x,i.y),V.map.depthTexture=new qs(i.x,i.y,Nn)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=pi,this.type===zo?(V.map.depthTexture.compareFunction=Q?Vc:zc,V.map.depthTexture.minFilter=Se,V.map.depthTexture.magFilter=Se):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ne,V.map.depthTexture.magFilter=Ne);V.camera.updateProjectionMatrix()}const lt=V.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<lt;_t++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,_t),s.clear();else{_t===0&&(s.setRenderTarget(V.map),s.clear());const st=V.getViewport(_t);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),D.viewport(o)}if(k.isPointLight){const st=V.camera,It=V.matrix,zt=k.distance||st.far;zt!==st.far&&(st.far=zt,st.updateProjectionMatrix()),pr.setFromMatrixPosition(k.matrixWorld),st.position.copy(pr),rl.copy(st.position),rl.add(Zy[_t]),st.up.copy(Jy[_t]),st.lookAt(rl),st.updateMatrixWorld(),It.makeTranslation(-pr.x,-pr.y,-pr.z),Hu.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Hu,st.coordinateSystem,st.reversedDepth)}else V.updateMatrices(k);n=V.getFrustum(),y(w,v,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===Tr&&x(V,v),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(A,R,P)};function x(M,w){const v=t.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bn(i.x,i.y,{format:is,type:fi})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,v,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,v,f,_,null)}function S(M,w,v,A){let R=null;const P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=R.uuid,N=w.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let L=F[N];L===void 0&&(L=R.clone(),F[N]=L,w.addEventListener("dispose",T)),R=L}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Tr?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:d[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=s.properties.get(R);D.light=v}return R}function y(M,w,v,A,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Tr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const N=t.update(M),F=M.material;if(Array.isArray(F)){const L=N.groups;for(let k=0,V=L.length;k<V;k++){const Z=L[k],Q=F[Z.materialIndex];if(Q&&Q.visible){const lt=S(M,Q,A,R);M.onBeforeShadow(s,M,w,v,N,lt,Z),s.renderBufferDirect(v,null,N,lt,M,Z),M.onAfterShadow(s,M,w,v,N,lt,Z)}}}else if(F.visible){const L=S(M,F,A,R);M.onBeforeShadow(s,M,w,v,N,L,null),s.renderBufferDirect(v,null,N,L,M,null),M.onAfterShadow(s,M,w,v,N,L,null)}}const D=M.children;for(let N=0,F=D.length;N<F;N++)y(D[N],w,v,A,R)}function T(M){M.target.removeEventListener("dispose",T);for(const v in c){const A=c[v],R=M.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function Qy(s,t){function e(){let U=!1;const nt=new ae;let q=null;const gt=new ae(0,0,0,0);return{setMask:function(ot){q!==ot&&!U&&(s.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){U=ot},setClear:function(ot,J,Et,Bt,Me){Me===!0&&(ot*=Bt,J*=Bt,Et*=Bt),nt.set(ot,J,Et,Bt),gt.equals(nt)===!1&&(s.clearColor(ot,J,Et,Bt),gt.copy(nt))},reset:function(){U=!1,q=null,gt.set(-1,0,0,0)}}}function n(){let U=!1,nt=!1,q=null,gt=null,ot=null;return{setReversed:function(J){if(nt!==J){const Et=t.get("EXT_clip_control");J?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),nt=J;const Bt=ot;ot=null,this.setClear(Bt)}},getReversed:function(){return nt},setTest:function(J){J?it(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(J){q!==J&&!U&&(s.depthMask(J),q=J)},setFunc:function(J){if(nt&&(J=xp[J]),gt!==J){switch(J){case Al:s.depthFunc(s.NEVER);break;case wl:s.depthFunc(s.ALWAYS);break;case Cl:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Rl:s.depthFunc(s.EQUAL);break;case Pl:s.depthFunc(s.GEQUAL);break;case Il:s.depthFunc(s.GREATER);break;case Dl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=J}},setLocked:function(J){U=J},setClear:function(J){ot!==J&&(ot=J,nt&&(J=1-J),s.clearDepth(J))},reset:function(){U=!1,q=null,gt=null,ot=null,nt=!1}}}function i(){let U=!1,nt=null,q=null,gt=null,ot=null,J=null,Et=null,Bt=null,Me=null;return{setTest:function(te){U||(te?it(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(te){nt!==te&&!U&&(s.stencilMask(te),nt=te)},setFunc:function(te,ti,On){(q!==te||gt!==ti||ot!==On)&&(s.stencilFunc(te,ti,On),q=te,gt=ti,ot=On)},setOp:function(te,ti,On){(J!==te||Et!==ti||Bt!==On)&&(s.stencilOp(te,ti,On),J=te,Et=ti,Bt=On)},setLocked:function(te){U=te},setClear:function(te){Me!==te&&(s.clearStencil(te),Me=te)},reset:function(){U=!1,nt=null,q=null,gt=null,ot=null,J=null,Et=null,Bt=null,Me=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,x=null,S=null,y=null,T=null,M=null,w=null,v=new Dt(0,0,0),A=0,R=!1,P=null,D=null,N=null,F=null,L=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=Z>=2);let lt=null,_t={};const st=s.getParameter(s.SCISSOR_BOX),It=s.getParameter(s.VIEWPORT),zt=new ae().fromArray(st),Mt=new ae().fromArray(It);function j(U,nt,q,gt){const ot=new Uint8Array(4),J=s.createTexture();s.bindTexture(U,J),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<q;Et++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(nt+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return J}const ut={};ut[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(Hs),Re(!1),ge(Sh),it(s.CULL_FACE),de(ui);function it(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Rt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Nt(U,nt){return u[U]!==nt?(s.bindFramebuffer(U,nt),u[U]=nt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Pt(U,nt){let q=m,gt=!1;if(U){q=f.get(nt),q===void 0&&(q=[],f.set(nt,q));const ot=U.textures;if(q.length!==ot.length||q[0]!==s.COLOR_ATTACHMENT0){for(let J=0,Et=ot.length;J<Et;J++)q[J]=s.COLOR_ATTACHMENT0+J;q.length=ot.length,gt=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,gt=!0);gt&&s.drawBuffers(q)}function se(U){return _!==U?(s.useProgram(U),_=U,!0):!1}const qt={[Qi]:s.FUNC_ADD,[Bf]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};qt[kf]=s.MIN,qt[zf]=s.MAX;const Qt={[Vf]:s.ZERO,[Hf]:s.ONE,[Gf]:s.SRC_COLOR,[Tl]:s.SRC_ALPHA,[Kf]:s.SRC_ALPHA_SATURATE,[jf]:s.DST_COLOR,[Xf]:s.DST_ALPHA,[Wf]:s.ONE_MINUS_SRC_COLOR,[El]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[qf]:s.ONE_MINUS_DST_ALPHA,[Zf]:s.CONSTANT_COLOR,[Jf]:s.ONE_MINUS_CONSTANT_COLOR,[$f]:s.CONSTANT_ALPHA,[Qf]:s.ONE_MINUS_CONSTANT_ALPHA};function de(U,nt,q,gt,ot,J,Et,Bt,Me,te){if(U===ui){g===!0&&(Rt(s.BLEND),g=!1);return}if(g===!1&&(it(s.BLEND),g=!0),U!==Ff){if(U!==p||te!==R){if((x!==Qi||T!==Qi)&&(s.blendEquation(s.FUNC_ADD),x=Qi,T=Qi),te)switch(U){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mh:s.blendFunc(s.ONE,s.ONE);break;case bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Th:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",U);break}else switch(U){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bh:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",U);break}S=null,y=null,M=null,w=null,v.set(0,0,0),A=0,p=U,R=te}return}ot=ot||nt,J=J||q,Et=Et||gt,(nt!==x||ot!==T)&&(s.blendEquationSeparate(qt[nt],qt[ot]),x=nt,T=ot),(q!==S||gt!==y||J!==M||Et!==w)&&(s.blendFuncSeparate(Qt[q],Qt[gt],Qt[J],Qt[Et]),S=q,y=gt,M=J,w=Et),(Bt.equals(v)===!1||Me!==A)&&(s.blendColor(Bt.r,Bt.g,Bt.b,Me),v.copy(Bt),A=Me),p=U,R=!1}function Xt(U,nt){U.side===on?Rt(s.CULL_FACE):it(s.CULL_FACE);let q=U.side===Qe;nt&&(q=!q),Re(q),U.blending===ks&&U.transparent===!1?de(ui):de(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const gt=U.stencilWrite;a.setTest(gt),gt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),B(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function ge(U){U!==Lf?(it(s.CULL_FACE),U!==D&&(U===Sh?s.cullFace(s.BACK):U===Nf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),D=U}function hn(U){U!==N&&(V&&s.lineWidth(U),N=U)}function B(U,nt,q){U?(it(s.POLYGON_OFFSET_FILL),(F!==nt||L!==q)&&(F=nt,L=q,o.getReversed()&&(nt=-nt),s.polygonOffset(nt,q))):Rt(s.POLYGON_OFFSET_FILL)}function Pe(U){U?it(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function jt(U){U===void 0&&(U=s.TEXTURE0+k-1),lt!==U&&(s.activeTexture(U),lt=U)}function le(U,nt,q){q===void 0&&(lt===null?q=s.TEXTURE0+k-1:q=lt);let gt=_t[q];gt===void 0&&(gt={type:void 0,texture:void 0},_t[q]=gt),(gt.type!==U||gt.texture!==nt)&&(lt!==q&&(s.activeTexture(q),lt=q),s.bindTexture(U,nt||ut[U]),gt.type=U,gt.texture=nt)}function ct(){const U=_t[lt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ye(){try{s.compressedTexImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function b(){try{s.texSubImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function z(){try{s.texSubImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function tt(){try{s.texStorage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function at(){try{s.texStorage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function X(){try{s.texImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function K(){try{s.texImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function pt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function yt(U,nt){d[U]!==nt&&(s.pixelStorei(U,nt),d[U]=nt)}function rt(U){zt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function et(U){Mt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function Ut(U,nt){let q=c.get(nt);q===void 0&&(q=new WeakMap,c.set(nt,q));let gt=q.get(U);gt===void 0&&(gt=s.getUniformBlockIndex(nt,U.name),q.set(U,gt))}function kt(U,nt){const gt=c.get(nt).get(U);l.get(nt)!==gt&&(s.uniformBlockBinding(nt,gt,U.__bindingPointIndex),l.set(nt,gt))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},lt=null,_t={},u={},f=new WeakMap,m=[],_=null,g=!1,p=null,x=null,S=null,y=null,T=null,M=null,w=null,v=new Dt(0,0,0),A=0,R=!1,P=null,D=null,N=null,F=null,L=null,zt.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Rt,bindFramebuffer:Nt,drawBuffers:Pt,useProgram:se,setBlending:de,setMaterial:Xt,setFlipSided:Re,setCullFace:ge,setLineWidth:hn,setPolygonOffset:B,setScissorTest:Pe,activeTexture:jt,bindTexture:le,unbindTexture:ct,compressedTexImage2D:ye,compressedTexImage3D:I,texImage2D:X,texImage3D:K,pixelStorei:yt,getParameter:pt,updateUBOMapping:Ut,uniformBlockBinding:kt,texStorage2D:tt,texStorage3D:at,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:$,scissor:rt,viewport:et,reset:Kt}}function tv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return m?new OffscreenCanvas(I,b):Br("canvas")}function g(I,b,z){let Y=1;const $=ye(I);if(($.width>z||$.height>z)&&(Y=z/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const tt=Math.floor(Y*$.width),at=Math.floor(Y*$.height);u===void 0&&(u=_(tt,at));const X=b?_(tt,at):u;return X.width=tt,X.height=at,X.getContext("2d").drawImage(I,0,0,tt,at),mt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+tt+"x"+at+")."),X}else return"data"in I&&mt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function p(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,b,z,Y,$,tt=!1){if(I!==null){if(s[I]!==void 0)return s[I];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at;Y&&(at=t.get("EXT_texture_norm16"),at||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===s.RED&&(z===s.FLOAT&&(X=s.R32F),z===s.HALF_FLOAT&&(X=s.R16F),z===s.UNSIGNED_BYTE&&(X=s.R8),z===s.UNSIGNED_SHORT&&at&&(X=at.R16_EXT),z===s.SHORT&&at&&(X=at.R16_SNORM_EXT)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.R8UI),z===s.UNSIGNED_SHORT&&(X=s.R16UI),z===s.UNSIGNED_INT&&(X=s.R32UI),z===s.BYTE&&(X=s.R8I),z===s.SHORT&&(X=s.R16I),z===s.INT&&(X=s.R32I)),b===s.RG&&(z===s.FLOAT&&(X=s.RG32F),z===s.HALF_FLOAT&&(X=s.RG16F),z===s.UNSIGNED_BYTE&&(X=s.RG8),z===s.UNSIGNED_SHORT&&at&&(X=at.RG16_EXT),z===s.SHORT&&at&&(X=at.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RG8UI),z===s.UNSIGNED_SHORT&&(X=s.RG16UI),z===s.UNSIGNED_INT&&(X=s.RG32UI),z===s.BYTE&&(X=s.RG8I),z===s.SHORT&&(X=s.RG16I),z===s.INT&&(X=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RGB8UI),z===s.UNSIGNED_SHORT&&(X=s.RGB16UI),z===s.UNSIGNED_INT&&(X=s.RGB32UI),z===s.BYTE&&(X=s.RGB8I),z===s.SHORT&&(X=s.RGB16I),z===s.INT&&(X=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),z===s.UNSIGNED_INT&&(X=s.RGBA32UI),z===s.BYTE&&(X=s.RGBA8I),z===s.SHORT&&(X=s.RGBA16I),z===s.INT&&(X=s.RGBA32I)),b===s.RGB&&(z===s.UNSIGNED_SHORT&&at&&(X=at.RGB16_EXT),z===s.SHORT&&at&&(X=at.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),b===s.RGBA){const K=tt?Qo:Gt.getTransfer($);z===s.FLOAT&&(X=s.RGBA32F),z===s.HALF_FLOAT&&(X=s.RGBA16F),z===s.UNSIGNED_BYTE&&(X=K===Jt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&at&&(X=at.RGBA16_EXT),z===s.SHORT&&at&&(X=at.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function T(I,b){let z;return I?b===null||b===Nn||b===Dr?z=s.DEPTH24_STENCIL8:b===an?z=s.DEPTH32F_STENCIL8:b===Ir&&(z=s.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Nn||b===Dr?z=s.DEPTH_COMPONENT24:b===an?z=s.DEPTH_COMPONENT32F:b===Ir&&(z=s.DEPTH_COMPONENT16),z}function M(I,b){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ne&&I.minFilter!==Se?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function w(I){const b=I.target;b.removeEventListener("dispose",w),A(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function v(I){const b=I.target;b.removeEventListener("dispose",v),P(b)}function A(I){const b=n.get(I);if(b.__webglInit===void 0)return;const z=I.source,Y=f.get(z);if(Y){const $=Y[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(I),Object.keys(Y).length===0&&f.delete(z)}n.remove(I)}function R(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const z=I.source,Y=f.get(z);delete Y[b.__cacheKey],o.memory.textures--}function P(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let $=0;$<b.__webglFramebuffer[Y].length;$++)s.deleteFramebuffer(b.__webglFramebuffer[Y][$]);else s.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)s.deleteFramebuffer(b.__webglFramebuffer[Y]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=I.textures;for(let Y=0,$=z.length;Y<$;Y++){const tt=n.get(z[Y]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(I)}let D=0;function N(){D=0}function F(){return D}function L(I){D=I}function k(){const I=D;return I>=i.maxTextures&&mt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function V(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function Z(I,b){const z=n.get(I);if(I.isVideoTexture&&le(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const Y=I.image;if(Y===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(z,I,b);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function Q(I,b){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Rt(z,I,b);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function lt(I,b){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Rt(z,I,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function _t(I,b){const z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){Nt(z,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const st={[Ws]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Ko]:s.MIRRORED_REPEAT},It={[Ne]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[Se]:s.LINEAR,[Vo]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},zt={[lp]:s.NEVER,[fp]:s.ALWAYS,[cp]:s.LESS,[zc]:s.LEQUAL,[hp]:s.EQUAL,[Vc]:s.GEQUAL,[up]:s.GREATER,[dp]:s.NOTEQUAL};function Mt(I,b){if(b.type===an&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Se||b.magFilter===Vo||b.magFilter===Er||b.magFilter===Yn||b.minFilter===Se||b.minFilter===Vo||b.minFilter===Er||b.minFilter===Yn)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,st[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,It[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,It[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ne||b.minFilter!==Er&&b.minFilter!==Yn||b.type===an&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function j(I,b){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",w));const Y=b.source;let $=f.get(Y);$===void 0&&($={},f.set(Y,$));const tt=V(b);if(tt!==I.__cacheKey){$[tt]===void 0&&($[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[tt].usedTimes++;const at=$[I.__cacheKey];at!==void 0&&($[I.__cacheKey].usedTimes--,at.usedTimes===0&&R(b)),I.__cacheKey=tt,I.__webglTexture=$[tt].texture}return z}function ut(I,b,z){return Math.floor(Math.floor(I/z)/b)}function it(I,b,z,Y){const tt=I.updateRanges;if(tt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,z,Y,b.data);else{tt.sort((yt,rt)=>yt.start-rt.start);let at=0;for(let yt=1;yt<tt.length;yt++){const rt=tt[at],et=tt[yt],Ut=rt.start+rt.count,kt=ut(et.start,b.width,4),Kt=ut(rt.start,b.width,4);et.start<=Ut+1&&kt===Kt&&ut(et.start+et.count-1,b.width,4)===kt?rt.count=Math.max(rt.count,et.start+et.count-rt.start):(++at,tt[at]=et)}tt.length=at+1;const X=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),pt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let yt=0,rt=tt.length;yt<rt;yt++){const et=tt[yt],Ut=Math.floor(et.start/4),kt=Math.ceil(et.count/4),Kt=Ut%b.width,U=Math.floor(Ut/b.width),nt=kt,q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Kt,U,nt,q,z,Y,b.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,pt)}}function Rt(I,b,z){let Y=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=s.TEXTURE_3D);const $=j(I,b),tt=b.source;e.bindTexture(Y,I.__webglTexture,s.TEXTURE0+z);const at=n.get(tt);if(tt.version!==at.__version||$===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const q=Gt.getPrimaries(Gt.workingColorSpace),gt=b.colorSpace===Ii?null:Gt.getPrimaries(b.colorSpace),ot=b.colorSpace===Ii||q===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let K=g(b.image,!1,i.maxTextureSize);K=ct(b,K);const pt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type);let rt=y(b.internalFormat,pt,yt,b.normalized,b.colorSpace,b.isVideoTexture);Mt(Y,b);let et;const Ut=b.mipmaps,kt=b.isVideoTexture!==!0,Kt=at.__version===void 0||$===!0,U=tt.dataReady,nt=M(b,K);if(b.isDepthTexture)rt=T(b.format===es,b.type),Kt&&(kt?e.texStorage2D(s.TEXTURE_2D,1,rt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,rt,K.width,K.height,0,pt,yt,null));else if(b.isDataTexture)if(Ut.length>0){kt&&Kt&&e.texStorage2D(s.TEXTURE_2D,nt,rt,Ut[0].width,Ut[0].height);for(let q=0,gt=Ut.length;q<gt;q++)et=Ut[q],kt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,et.width,et.height,pt,yt,et.data):e.texImage2D(s.TEXTURE_2D,q,rt,et.width,et.height,0,pt,yt,et.data);b.generateMipmaps=!1}else kt?(Kt&&e.texStorage2D(s.TEXTURE_2D,nt,rt,K.width,K.height),U&&it(b,K,pt,yt)):e.texImage2D(s.TEXTURE_2D,0,rt,K.width,K.height,0,pt,yt,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,rt,Ut[0].width,Ut[0].height,K.depth);for(let q=0,gt=Ut.length;q<gt;q++)if(et=Ut[q],b.format!==ln)if(pt!==null)if(kt){if(U)if(b.layerUpdates.size>0){const ot=xc(et.width,et.height,b.format,b.type);for(const J of b.layerUpdates){const Et=et.data.subarray(J*ot/et.data.BYTES_PER_ELEMENT,(J+1)*ot/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,J,et.width,et.height,1,pt,Et)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,et.width,et.height,K.depth,pt,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,rt,et.width,et.height,K.depth,0,et.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,et.width,et.height,K.depth,pt,yt,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,rt,et.width,et.height,K.depth,0,pt,yt,et.data)}else{kt&&Kt&&e.texStorage2D(s.TEXTURE_2D,nt,rt,Ut[0].width,Ut[0].height);for(let q=0,gt=Ut.length;q<gt;q++)et=Ut[q],b.format!==ln?pt!==null?kt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,et.width,et.height,pt,et.data):e.compressedTexImage2D(s.TEXTURE_2D,q,rt,et.width,et.height,0,et.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,et.width,et.height,pt,yt,et.data):e.texImage2D(s.TEXTURE_2D,q,rt,et.width,et.height,0,pt,yt,et.data)}else if(b.isDataArrayTexture)if(kt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,rt,K.width,K.height,K.depth),U)if(b.layerUpdates.size>0){const q=xc(K.width,K.height,b.format,b.type);for(const gt of b.layerUpdates){const ot=K.data.subarray(gt*q/K.data.BYTES_PER_ELEMENT,(gt+1)*q/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,K.width,K.height,1,pt,yt,ot)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,pt,yt,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,K.width,K.height,K.depth,0,pt,yt,K.data);else if(b.isData3DTexture)kt?(Kt&&e.texStorage3D(s.TEXTURE_3D,nt,rt,K.width,K.height,K.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,pt,yt,K.data)):e.texImage3D(s.TEXTURE_3D,0,rt,K.width,K.height,K.depth,0,pt,yt,K.data);else if(b.isFramebufferTexture){if(Kt)if(kt)e.texStorage2D(s.TEXTURE_2D,nt,rt,K.width,K.height);else{let q=K.width,gt=K.height;for(let ot=0;ot<nt;ot++)e.texImage2D(s.TEXTURE_2D,ot,rt,q,gt,0,pt,yt,null),q>>=1,gt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const q=s.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),d.add(b),q.onpaint=Bt=>{const Me=Bt.changedElements;for(const te of d)Me.includes(te.image)&&(te.needsUpdate=!0)},q.requestPaint();return}const gt=0,ot=s.RGBA,J=s.RGBA,Et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,gt,ot,J,Et,K),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(kt&&Kt){const q=ye(Ut[0]);e.texStorage2D(s.TEXTURE_2D,nt,rt,q.width,q.height)}for(let q=0,gt=Ut.length;q<gt;q++)et=Ut[q],kt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,pt,yt,et):e.texImage2D(s.TEXTURE_2D,q,rt,pt,yt,et);b.generateMipmaps=!1}else if(kt){if(Kt){const q=ye(K);e.texStorage2D(s.TEXTURE_2D,nt,rt,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,yt,K)}else e.texImage2D(s.TEXTURE_2D,0,rt,pt,yt,K);p(b)&&x(Y),at.__version=tt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Nt(I,b,z){if(b.image.length!==6)return;const Y=j(I,b),$=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);const tt=n.get($);if($.version!==tt.__version||Y===!0){e.activeTexture(s.TEXTURE0+z);const at=Gt.getPrimaries(Gt.workingColorSpace),X=b.colorSpace===Ii?null:Gt.getPrimaries(b.colorSpace),K=b.colorSpace===Ii||at===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const pt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,rt=[];for(let J=0;J<6;J++)!pt&&!yt?rt[J]=g(b.image[J],!0,i.maxCubemapSize):rt[J]=yt?b.image[J].image:b.image[J],rt[J]=ct(b,rt[J]);const et=rt[0],Ut=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Kt=y(b.internalFormat,Ut,kt,b.normalized,b.colorSpace),U=b.isVideoTexture!==!0,nt=tt.__version===void 0||Y===!0,q=$.dataReady;let gt=M(b,et);Mt(s.TEXTURE_CUBE_MAP,b);let ot;if(pt){U&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Kt,et.width,et.height);for(let J=0;J<6;J++){ot=rt[J].mipmaps;for(let Et=0;Et<ot.length;Et++){const Bt=ot[Et];b.format!==ln?Ut!==null?U?q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,0,0,Bt.width,Bt.height,Ut,Bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,Kt,Bt.width,Bt.height,0,Bt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,0,0,Bt.width,Bt.height,Ut,kt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,Kt,Bt.width,Bt.height,0,Ut,kt,Bt.data)}}}else{if(ot=b.mipmaps,U&&nt){ot.length>0&&gt++;const J=ye(rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Kt,J.width,J.height)}for(let J=0;J<6;J++)if(yt){U?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,rt[J].width,rt[J].height,Ut,kt,rt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Kt,rt[J].width,rt[J].height,0,Ut,kt,rt[J].data);for(let Et=0;Et<ot.length;Et++){const Me=ot[Et].image[J].image;U?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,0,0,Me.width,Me.height,Ut,kt,Me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,Kt,Me.width,Me.height,0,Ut,kt,Me.data)}}else{U?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ut,kt,rt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Kt,Ut,kt,rt[J]);for(let Et=0;Et<ot.length;Et++){const Bt=ot[Et];U?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,0,0,Ut,kt,Bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,Kt,Ut,kt,Bt.image[J])}}}p(b)&&x(s.TEXTURE_CUBE_MAP),tt.__version=$.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Pt(I,b,z,Y,$,tt){const at=r.convert(z.format,z.colorSpace),X=r.convert(z.type),K=y(z.internalFormat,at,X,z.normalized,z.colorSpace),pt=n.get(b),yt=n.get(z);if(yt.__renderTarget=b,!pt.__hasExternalTextures){const rt=Math.max(1,b.width>>tt),et=Math.max(1,b.height>>tt);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,tt,K,rt,et,b.depth,0,at,X,null):e.texImage2D($,tt,K,rt,et,0,at,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),jt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,$,yt.__webglTexture,0,Pe(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,$,yt.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function se(I,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const Y=b.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,tt=T(b.stencilBuffer,$),at=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe(b),tt,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe(b),tt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,tt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,I)}else{const Y=b.textures;for(let $=0;$<Y.length;$++){const tt=Y[$],at=r.convert(tt.format,tt.colorSpace),X=r.convert(tt.type),K=y(tt.internalFormat,at,X,tt.normalized,tt.colorSpace);jt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe(b),K,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe(b),K,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,K,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(I,b,z){const Y=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,b.depthTexture);const pt=r.convert(b.depthTexture.format),yt=r.convert(b.depthTexture.type);let rt;b.depthTexture.format===pi?rt=s.DEPTH_COMPONENT24:b.depthTexture.format===es&&(rt=s.DEPTH24_STENCIL8);for(let et=0;et<6;et++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,rt,b.width,b.height,0,pt,yt,null)}}else Z(b.depthTexture,0);const tt=$.__webglTexture,at=Pe(b),X=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,K=b.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===pi)jt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,X,tt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,K,X,tt,0);else if(b.depthTexture.format===es)jt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,X,tt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,K,X,tt,0);else throw new Error("Unknown depthTexture format")}function Qt(I){const b=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=Y}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)qt(b.__webglFramebuffer[Y],I,Y);else{const Y=I.texture.mipmaps;Y&&Y.length>0?qt(b.__webglFramebuffer[0],I,0):qt(b.__webglFramebuffer,I,0)}else if(z){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=s.createRenderbuffer(),se(b.__webglDepthbuffer[Y],I,!1);else{const $=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,tt)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),se(b.__webglDepthbuffer,I,!1);else{const $=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,tt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function de(I,b,z){const Y=n.get(I);b!==void 0&&Pt(Y.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Qt(I)}function Xt(I){const b=I.texture,z=n.get(I),Y=n.get(b);I.addEventListener("dispose",v);const $=I.textures,tt=I.isWebGLCubeRenderTarget===!0,at=$.length>1;if(at||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,o.memory.textures++),tt){z.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[X]=[];for(let K=0;K<b.mipmaps.length;K++)z.__webglFramebuffer[X][K]=s.createFramebuffer()}else z.__webglFramebuffer[X]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)z.__webglFramebuffer[X]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(at)for(let X=0,K=$.length;X<K;X++){const pt=n.get($[X]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&jt(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){const K=$[X];z.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[X]);const pt=r.convert(K.format,K.colorSpace),yt=r.convert(K.type),rt=y(K.internalFormat,pt,yt,K.normalized,K.colorSpace,I.isXRRenderTarget===!0),et=Pe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,rt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,z.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),se(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)Pt(z.__webglFramebuffer[X][K],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Pt(z.__webglFramebuffer[X],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(b)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let X=0,K=$.length;X<K;X++){const pt=$[X],yt=n.get(pt);let rt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,yt.__webglTexture),Mt(rt,pt),Pt(z.__webglFramebuffer,I,pt,s.COLOR_ATTACHMENT0+X,rt,0),p(pt)&&x(rt)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(X=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,Y.__webglTexture),Mt(X,b),b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)Pt(z.__webglFramebuffer[K],I,b,s.COLOR_ATTACHMENT0,X,K);else Pt(z.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,X,0);p(b)&&x(X),e.unbindTexture()}I.depthBuffer&&Qt(I)}function Re(I){const b=I.textures;for(let z=0,Y=b.length;z<Y;z++){const $=b[z];if(p($)){const tt=S(I),at=n.get($).__webglTexture;e.bindTexture(tt,at),x(tt),e.unbindTexture()}}}const ge=[],hn=[];function B(I){if(I.samples>0){if(jt(I)===!1){const b=I.textures,z=I.width,Y=I.height;let $=s.COLOR_BUFFER_BIT;const tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(I),X=b.length>1;if(X)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const K=I.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[pt]);const yt=n.get(b[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,$,s.NEAREST),l===!0&&(ge.length=0,hn.length=0,ge.push(s.COLOR_ATTACHMENT0+pt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ge.push(tt),hn.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,hn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,at.__webglColorRenderbuffer[pt]);const yt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Pe(I){return Math.min(i.maxSamples,I.samples)}function jt(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(I){const b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function ct(I,b){const z=I.colorSpace,Y=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==cn&&z!==Ii&&(Gt.getTransfer(z)===Jt?(Y!==ln||$!==pn)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",z)),b}function ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.getTextureUnits=F,this.setTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=lt,this.setTextureCube=_t,this.rebindTextures=de,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ev(s,t){function e(n,i=Ii){let r;const o=Gt.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===Nc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nd)return s.BYTE;if(n===Ud)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===Lc)return s.INT;if(n===Nn)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===fi)return s.HALF_FLOAT;if(n===Od)return s.ALPHA;if(n===kd)return s.RGB;if(n===ln)return s.RGBA;if(n===pi)return s.DEPTH_COMPONENT;if(n===es)return s.DEPTH_STENCIL;if(n===Fc)return s.RED;if(n===oa)return s.RED_INTEGER;if(n===is)return s.RG;if(n===Bc)return s.RG_INTEGER;if(n===Oc)return s.RGBA_INTEGER;if(n===Ho||n===Go||n===Wo||n===Xo)if(o===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Nl||n===Ul||n===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Ol||n===kl||n===zl||n===Vl||n===Zo||n===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===Ol)return o===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return r.COMPRESSED_R11_EAC;if(n===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return r.COMPRESSED_RG11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===jl||n===Yl||n===Kl||n===Zl||n===Jl||n===$l||n===Ql||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ic)return o===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===ac||n===Jo||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`;class sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Jd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rv extends gi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new sv,p={},x=e.getContextAttributes();let S=null,y=null;const T=[],M=[],w=new bt;let v=null;const A=new rn;A.viewport=new ae;const R=new rn;R.viewport=new ae;const P=[A,R],D=new Xm;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=T[j];return ut===void 0&&(ut=new wa,T[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=T[j];return ut===void 0&&(ut=new wa,T[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=T[j];return ut===void 0&&(ut=new wa,T[j]=ut),ut.getHandSpace()};function L(j){const ut=M.indexOf(j.inputSource);if(ut===-1)return;const it=T[ut];it!==void 0&&(it.update(j.inputSource,j.frame,c||o),it.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",V);for(let j=0;j<T.length;j++){const ut=M[j];ut!==null&&(M[j]=null,T[j].disconnect(ut))}N=null,F=null,g.reset();for(const j in p)delete p[j];t.setRenderTarget(S),f=null,u=null,d=null,i=null,y=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Rt=null,Nt=null;x.depth&&(Nt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=x.stencil?es:pi,Rt=x.stencil?Dr:Nn);const Pt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new bn(u.textureWidth,u.textureHeight,{format:ln,type:pn,depthTexture:new qs(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const it={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(j){for(let ut=0;ut<j.removed.length;ut++){const it=j.removed[ut],Rt=M.indexOf(it);Rt>=0&&(M[Rt]=null,T[Rt].disconnect(it))}for(let ut=0;ut<j.added.length;ut++){const it=j.added[ut];let Rt=M.indexOf(it);if(Rt===-1){for(let Pt=0;Pt<T.length;Pt++)if(Pt>=M.length){M.push(it),Rt=Pt;break}else if(M[Pt]===null){M[Pt]=it,Rt=Pt;break}if(Rt===-1)break}const Nt=T[Rt];Nt&&Nt.connect(it)}}const Z=new C,Q=new C;function lt(j,ut,it){Z.setFromMatrixPosition(ut.matrixWorld),Q.setFromMatrixPosition(it.matrixWorld);const Rt=Z.distanceTo(Q),Nt=ut.projectionMatrix.elements,Pt=it.projectionMatrix.elements,se=Nt[14]/(Nt[10]-1),qt=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],de=(Nt[9]-1)/Nt[5],Xt=(Nt[8]-1)/Nt[0],Re=(Pt[8]+1)/Pt[0],ge=se*Xt,hn=se*Re,B=Rt/(-Xt+Re),Pe=B*-Xt;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pe),j.translateZ(B),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const jt=se+B,le=qt+B,ct=ge-Pe,ye=hn+(Rt-Pe),I=Qt*qt/le*jt,b=de*qt/le*jt;j.projectionMatrix.makePerspective(ct,ye,I,b,jt,le),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _t(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ut=j.near,it=j.far;g.texture!==null&&(g.depthNear>0&&(ut=g.depthNear),g.depthFar>0&&(it=g.depthFar)),D.near=R.near=A.near=ut,D.far=R.far=A.far=it,(N!==D.near||F!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,F=D.far),D.layers.mask=j.layers.mask|6,A.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Rt=j.parent,Nt=D.cameras;_t(D,Rt);for(let Pt=0;Pt<Nt.length;Pt++)_t(Nt[Pt],Rt);Nt.length===2?lt(D,A,R):D.projectionMatrix.copy(A.projectionMatrix),st(j,D,Rt)};function st(j,ut,it){it===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(it.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(j){return p[j]};let It=null;function zt(j,ut){if(h=ut.getViewerPose(c||o),m=ut,h!==null){const it=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Rt=!1;it.length!==D.cameras.length&&(D.cameras.length=0,Rt=!0);for(let qt=0;qt<it.length;qt++){const Qt=it[qt];let de=null;if(f!==null)de=f.getViewport(Qt);else{const Re=d.getViewSubImage(u,Qt);de=Re.viewport,qt===0&&(t.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(y))}let Xt=P[qt];Xt===void 0&&(Xt=new rn,Xt.layers.enable(qt),Xt.viewport=new ae,P[qt]=Xt),Xt.matrix.fromArray(Qt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Qt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),qt===0&&(D.matrix.copy(Xt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Rt===!0&&D.cameras.push(Xt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const qt=d.getDepthInformation(it[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,i.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let qt=0;qt<it.length;qt++){const Qt=it[qt].camera;if(Qt){let de=p[Qt];de||(de=new Jd,p[Qt]=de);const Xt=d.getCameraImage(Qt);de.sourceTexture=Xt}}}}for(let it=0;it<T.length;it++){const Rt=M[it],Nt=T[it];Rt!==null&&Nt!==void 0&&Nt.update(Rt,ut,c||o)}It&&It(j,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}const Mt=new lf;Mt.setAnimationLoop(zt),this.setAnimationLoop=function(j){It=j},this.dispose=function(){}}}const ov=new Tt,mf=new Ft;mf.set(-1,0,0,0,1,0,0,0,1);function av(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qd(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),S=x.envMap,y=x.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=i[x.id];y===void 0&&(m(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));const T=S.program;n.updateUBOMapping(x,T);const M=t.render.frame;r[x.id]!==M&&(u(x),r[x.id]=M)}function h(x){const S=d();x.__bindingPointIndex=S;const y=s.createBuffer(),T=x.__size,M=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=i[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let M=0,w=y.length;M<w;M++){const v=Array.isArray(y[M])?y[M]:[y[M]];for(let A=0,R=v.length;A<R;A++){const P=v[A];if(f(P,M,A,T)===!0){const D=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let L=0;L<N.length;L++){const k=N[L],V=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,D+F,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):ArrayBuffer.isView(k)?P.__data.set(new k.constructor(k.buffer,k.byteOffset,P.__data.length)):(k.toArray(P.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,y,T){const M=x.value,w=S+"_"+y;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{const v=T[w];if(typeof M=="number"||typeof M=="boolean"){if(v!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(v.equals(M)===!1)return v.copy(M),!0}}return!1}function m(x){const S=x.uniforms;let y=0;const T=16;for(let w=0,v=S.length;w<v;w++){const A=Array.isArray(S[w])?S[w]:[S[w]];for(let R=0,P=A.length;R<P;R++){const D=A[R],N=Array.isArray(D.value)?D.value:[D.value];for(let F=0,L=N.length;F<L;F++){const k=N[F],V=_(k),Z=y%T,Q=Z%V.boundary,lt=Z+Q;y+=Q,lt!==0&&T-lt<V.storage&&(y+=T-lt),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=V.storage}}}const M=y%T;return M>0&&(y+=T-M),x.__size=y,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",x),S}function g(x){const S=x.target;S.removeEventListener("dispose",g);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}const cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function hv(){return Gn===null&&(Gn=new ns(cv,16,16,is,fi),Gn.name="DFG_LUT",Gn.minFilter=Se,Gn.magFilter=Se,Gn.wrapS=mn,Gn.wrapT=mn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class jM{constructor(t={}){const{canvas:e=gp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,g=new Set([Oc,Bc,oa]),p=new Set([pn,Nn,Ir,Dr,Nc,Uc]),x=new Uint32Array(4),S=new Int32Array(4),y=new C;let T=null,M=null;const w=[],v=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null;this._outputColorSpace=we;let N=0,F=0,L=null,k=-1,V=null;const Z=new ae,Q=new ae;let lt=null;const _t=new Dt(0);let st=0,It=e.width,zt=e.height,Mt=1,j=null,ut=null;const it=new ae(0,0,It,zt),Rt=new ae(0,0,It,zt);let Nt=!1;const Pt=new kr;let se=!1,qt=!1;const Qt=new Tt,de=new C,Xt=new ae,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function hn(){return L===null?Mt:1}let B=n;function Pe(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Or}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),B===null){const O="webgl2";if(B=Pe(O,E),B===null)throw Pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ct("WebGLRenderer: "+E.message),E}let jt,le,ct,ye,I,b,z,Y,$,tt,at,X,K,pt,yt,rt,et,Ut,kt,Kt,U,nt,q;function gt(){jt=new hx(B),jt.init(),U=new ev(B,jt),le=new nx(B,jt,t,U),ct=new Qy(B,jt),le.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),ye=new fx(B),I=new ky,b=new tv(B,jt,ct,I,le,U,ye),z=new cx(R),Y=new _g(B),nt=new tx(B,Y),$=new ux(B,Y,ye,nt),tt=new mx(B,$,Y,nt,ye),Ut=new px(B,le,b),yt=new ix(I),at=new Oy(R,z,jt,le,nt,yt),X=new av(R,I),K=new Vy,pt=new jy(jt),et=new Q0(R,z,ct,tt,m,l),rt=new $y(R,tt,le),q=new lv(B,ye,le,ct),kt=new ex(B,jt,ye),Kt=new dx(B,jt,ye),ye.programs=at.programs,R.capabilities=le,R.extensions=jt,R.properties=I,R.renderLists=K,R.shadowMap=rt,R.state=ct,R.info=ye}gt(),_!==pn&&(A=new _x(_,e.width,e.height,i,r));const ot=new rv(R,B);this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(E){E!==void 0&&(Mt=E,this.setSize(It,zt,!1))},this.getSize=function(E){return E.set(It,zt)},this.setSize=function(E,O,W=!0){if(ot.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}It=E,zt=O,e.width=Math.floor(E*Mt),e.height=Math.floor(O*Mt),W===!0&&(e.style.width=E+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(It*Mt,zt*Mt).floor()},this.setDrawingBufferSize=function(E,O,W){It=E,zt=O,Mt=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===pn){Ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,O,W,H){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,O,W,H),ct.viewport(Z.copy(it).multiplyScalar(Mt).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,O,W,H){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,O,W,H),ct.scissor(Q.copy(Rt).multiplyScalar(Mt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){ct.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let H=0;if(E){let G=!1;if(L!==null){const ft=L.texture.format;G=g.has(ft)}if(G){const ft=L.texture.type,vt=p.has(ft),dt=et.getClearColor(),St=et.getClearAlpha(),At=dt.r,Ot=dt.g,Ht=dt.b;vt?(x[0]=At,x[1]=Ot,x[2]=Ht,x[3]=St,B.clearBufferuiv(B.COLOR,0,x)):(S[0]=At,S[1]=Ot,S[2]=Ht,S[3]=St,B.clearBufferiv(B.COLOR,0,S))}else H|=B.COLOR_BUFFER_BIT}O&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),et.dispose(),K.dispose(),pt.dispose(),I.dispose(),z.dispose(),tt.dispose(),nt.dispose(),q.dispose(),at.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",fh),ot.removeEventListener("sessionend",ph),Bi.stop()};function J(E){E.preventDefault(),ta("WebGLRenderer: Context Lost."),P=!0}function Et(){ta("WebGLRenderer: Context Restored."),P=!1;const E=ye.autoReset,O=rt.enabled,W=rt.autoUpdate,H=rt.needsUpdate,G=rt.type;gt(),ye.autoReset=E,rt.enabled=O,rt.autoUpdate=W,rt.needsUpdate=H,rt.type=G}function Bt(E){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Me(E){const O=E.target;O.removeEventListener("dispose",Me),te(O)}function te(E){ti(E),I.remove(E)}function ti(E){const O=I.get(E).programs;O!==void 0&&(O.forEach(function(W){at.releaseProgram(W)}),E.isShaderMaterial&&at.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,H,G,ft){O===null&&(O=Re);const vt=G.isMesh&&G.matrixWorld.determinant()<0,dt=wf(E,O,W,H,G);ct.setMaterial(H,vt);let St=W.index,At=1;if(H.wireframe===!0){if(St=$.getWireframeAttribute(W),St===void 0)return;At=2}const Ot=W.drawRange,Ht=W.attributes.position;let wt=Ot.start*At,ee=(Ot.start+Ot.count)*At;ft!==null&&(wt=Math.max(wt,ft.start*At),ee=Math.min(ee,(ft.start+ft.count)*At)),St!==null?(wt=Math.max(wt,0),ee=Math.min(ee,St.count)):Ht!=null&&(wt=Math.max(wt,0),ee=Math.min(ee,Ht.count));const be=ee-wt;if(be<0||be===1/0)return;nt.setup(G,H,dt,W,St);let ve,re=kt;if(St!==null&&(ve=Y.get(St),re=Kt,re.setIndex(ve)),G.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*hn()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(G.isLine){let We=H.linewidth;We===void 0&&(We=1),ct.setLineWidth(We*hn()),G.isLineSegments?re.setMode(B.LINES):G.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else G.isPoints?re.setMode(B.POINTS):G.isSprite&&re.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const We=G._multiDrawStarts,xt=G._multiDrawCounts,un=G._multiDrawCount,Yt=St?Y.get(St).bytesPerElement:1,gn=I.get(H).currentProgram.getUniforms();for(let kn=0;kn<un;kn++)gn.setValue(B,"_gl_DrawID",kn),re.render(We[kn]/Yt,xt[kn])}else if(G.isInstancedMesh)re.renderInstances(wt,be,G.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,We);re.renderInstances(wt,be,xt)}else re.render(wt,be)};function On(E,O,W){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=Qe,E.needsUpdate=!0,Hr(E,O,W),E.side=Ln,E.needsUpdate=!0,Hr(E,O,W),E.side=on):Hr(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),M=pt.get(W),M.init(O),v.push(M),W.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){const dt=ft[vt];On(dt,W,G),H.add(dt)}else On(ft,W,G),H.add(ft)}),M=v.pop(),H},this.compileAsync=function(E,O,W=null){const H=this.compile(E,O,W);return new Promise(G=>{function ft(){if(H.forEach(function(vt){I.get(vt).currentProgram.isReady()&&H.delete(vt)}),H.size===0){G(E);return}setTimeout(ft,10)}jt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let _a=null;function Ef(E){_a&&_a(E)}function fh(){Bi.stop()}function ph(){Bi.start()}const Bi=new lf;Bi.setAnimationLoop(Ef),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){_a=E,ot.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},ot.addEventListener("sessionstart",fh),ot.addEventListener("sessionend",ph),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,O);const W=ot.enabled===!0&&ot.isPresenting===!0,H=A!==null&&(L===null||W)&&A.begin(R,L);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,L),M=pt.get(E,v.length),M.init(O),M.state.textureUnits=b.getTextureUnits(),v.push(M),Qt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pt.setFromProjectionMatrix(Qt,Pn,O.reversedDepth),qt=this.localClippingEnabled,se=yt.init(this.clippingPlanes,qt),T=K.get(E,w.length),T.init(),w.push(T),ot.enabled===!0&&ot.isPresenting===!0){const vt=R.xr.getDepthSensingMesh();vt!==null&&xa(vt,O,-1/0,R.sortObjects)}xa(E,O,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(j,ut),ge=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ge&&et.addToRenderList(T,E),this.info.render.frame++,se===!0&&yt.beginShadows();const G=M.state.shadowsArray;if(rt.render(G,E,O),se===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const vt=T.opaque,dt=T.transmissive;if(M.setupLights(),O.isArrayCamera){const St=O.cameras;if(dt.length>0)for(let At=0,Ot=St.length;At<Ot;At++){const Ht=St[At];gh(vt,dt,E,Ht)}ge&&et.render(E);for(let At=0,Ot=St.length;At<Ot;At++){const Ht=St[At];mh(T,E,Ht,Ht.viewport)}}else dt.length>0&&gh(vt,dt,E,O),ge&&et.render(E),mh(T,E,O)}L!==null&&F===0&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),H&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),nt.resetDefaultState(),k=-1,V=null,v.pop(),v.length>0?(M=v[v.length-1],b.setTextureUnits(M.state.textureUnits),se===!0&&yt.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,D!==null&&D.renderEnd()};function xa(E,O,W,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pt.intersectsSprite(E)){H&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Qt);const vt=tt.update(E),dt=E.material;dt.visible&&T.push(E,vt,dt,W,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pt.intersectsObject(E))){const vt=tt.update(E),dt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Xt.copy(vt.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4(Qt)),Array.isArray(dt)){const St=vt.groups;for(let At=0,Ot=St.length;At<Ot;At++){const Ht=St[At],wt=dt[Ht.materialIndex];wt&&wt.visible&&T.push(E,vt,wt,W,Xt.z,Ht)}}else dt.visible&&T.push(E,vt,dt,W,Xt.z,null)}}const ft=E.children;for(let vt=0,dt=ft.length;vt<dt;vt++)xa(ft[vt],O,W,H)}function mh(E,O,W,H){const{opaque:G,transmissive:ft,transparent:vt}=E;M.setupLightsView(W),se===!0&&yt.setGlobalState(R.clippingPlanes,W),H&&ct.viewport(Z.copy(H)),G.length>0&&Vr(G,O,W),ft.length>0&&Vr(ft,O,W),vt.length>0&&Vr(vt,O,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function gh(E,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){const wt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:wt?fi:pn,minFilter:Yn,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const ft=M.state.transmissionRenderTarget[H.id],vt=H.viewport||Z;ft.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);const dt=R.getRenderTarget(),St=R.getActiveCubeFace(),At=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(_t),st=R.getClearAlpha(),st<1&&R.setClearColor(16777215,.5),R.clear(),ge&&et.render(W);const Ot=R.toneMapping;R.toneMapping=Kn;const Ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),se===!0&&yt.setGlobalState(R.clippingPlanes,H),Vr(E,W,H),b.updateMultisampleRenderTarget(ft),b.updateRenderTargetMipmap(ft),jt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ee=0,be=O.length;ee<be;ee++){const ve=O[ee],{object:re,geometry:We,material:xt,group:un}=ve;if(xt.side===on&&re.layers.test(H.layers)){const Yt=xt.side;xt.side=Qe,xt.needsUpdate=!0,_h(re,W,H,We,xt,un),xt.side=Yt,xt.needsUpdate=!0,wt=!0}}wt===!0&&(b.updateMultisampleRenderTarget(ft),b.updateRenderTargetMipmap(ft))}R.setRenderTarget(dt,St,At),R.setClearColor(_t,st),Ht!==void 0&&(H.viewport=Ht),R.toneMapping=Ot}function Vr(E,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ft=E.length;G<ft;G++){const vt=E[G],{object:dt,geometry:St,group:At}=vt;let Ot=vt.material;Ot.allowOverride===!0&&H!==null&&(Ot=H),dt.layers.test(W.layers)&&_h(dt,O,W,St,Ot,At)}}function _h(E,O,W,H,G,ft){E.onBeforeRender(R,O,W,H,G,ft),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(R,O,W,H,E,ft),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=Qe,G.needsUpdate=!0,R.renderBufferDirect(W,O,H,G,E,ft),G.side=Ln,G.needsUpdate=!0,R.renderBufferDirect(W,O,H,G,E,ft),G.side=on):R.renderBufferDirect(W,O,H,G,E,ft),E.onAfterRender(R,O,W,H,G,ft)}function Hr(E,O,W){O.isScene!==!0&&(O=Re);const H=I.get(E),G=M.state.lights,ft=M.state.shadowsArray,vt=G.state.version,dt=at.getParameters(E,G.state,ft,O,W,M.state.lightProbeGridArray),St=at.getProgramCacheKey(dt);let At=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Ot=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=z.get(E.envMap||H.environment,Ot),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,At===void 0&&(E.addEventListener("dispose",Me),At=new Map,H.programs=At);let Ht=At.get(St);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===vt)return yh(E,dt),Ht}else dt.uniforms=at.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,W,dt),E.onBeforeCompile(dt,R),Ht=at.acquireProgram(dt,St),At.set(St,Ht),H.uniforms=dt.uniforms;const wt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=yt.uniform),yh(E,dt),H.needsLights=Rf(E),H.lightsStateVersion=vt,H.needsLights&&(wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=Ht,H.uniformsList=null,Ht}function xh(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=qo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function yh(E,O){const W=I.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Af(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let W=0,H=E.length;W<H;W++){const G=E[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function wf(E,O,W,H,G){O.isScene!==!0&&(O=Re),b.resetTextureUnits();const ft=O.fog,vt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,dt=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gt.workingColorSpace,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=z.get(H.envMap||vt,St),Ot=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,be=!!W.morphAttributes.color;let ve=Kn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=R.toneMapping);const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,We=re!==void 0?re.length:0,xt=I.get(H),un=M.state.lights;if(se===!0&&(qt===!0||E!==V)){const ce=E===V&&H.id===k;yt.setState(H,E,ce)}let Yt=!1;H.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==un.state.version||xt.outputColorSpace!==dt||G.isBatchedMesh&&xt.batching===!1||!G.isBatchedMesh&&xt.batching===!0||G.isBatchedMesh&&xt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xt.instancing===!1||!G.isInstancedMesh&&xt.instancing===!0||G.isSkinnedMesh&&xt.skinning===!1||!G.isSkinnedMesh&&xt.skinning===!0||G.isInstancedMesh&&xt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xt.instancingMorph===!1&&G.morphTexture!==null||xt.envMap!==At||H.fog===!0&&xt.fog!==ft||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==yt.numPlanes||xt.numIntersection!==yt.numIntersection)||xt.vertexAlphas!==Ot||xt.vertexTangents!==Ht||xt.morphTargets!==wt||xt.morphNormals!==ee||xt.morphColors!==be||xt.toneMapping!==ve||xt.morphTargetsCount!==We||!!xt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,xt.__version=H.version);let gn=xt.currentProgram;Yt===!0&&(gn=Hr(H,O,G),D&&H.isNodeMaterial&&D.onUpdateProgram(H,gn,xt));let kn=!1,xi=!1,rs=!1;const oe=gn.getUniforms(),Te=xt.uniforms;if(ct.useProgram(gn.program)&&(kn=!0,xi=!0,rs=!0),H.id!==k&&(k=H.id,xi=!0),xt.needsLights){const ce=Af(M.state.lightProbeGridArray,G);xt.lightProbeGrid!==ce&&(xt.lightProbeGrid=ce,xi=!0)}if(kn||V!==E){ct.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),oe.setValue(B,"projectionMatrix",E.projectionMatrix),oe.setValue(B,"viewMatrix",E.matrixWorldInverse);const vi=oe.map.cameraPosition;vi!==void 0&&vi.setValue(B,de.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,xi=!0,rs=!0)}if(xt.needsLights&&(un.state.directionalShadowMap.length>0&&oe.setValue(B,"directionalShadowMap",un.state.directionalShadowMap,b),un.state.spotShadowMap.length>0&&oe.setValue(B,"spotShadowMap",un.state.spotShadowMap,b),un.state.pointShadowMap.length>0&&oe.setValue(B,"pointShadowMap",un.state.pointShadowMap,b)),G.isSkinnedMesh){oe.setOptional(B,G,"bindMatrix"),oe.setOptional(B,G,"bindMatrixInverse");const ce=G.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),oe.setValue(B,"boneTexture",ce.boneTexture,b))}G.isBatchedMesh&&(oe.setOptional(B,G,"batchingTexture"),oe.setValue(B,"batchingTexture",G._matricesTexture,b),oe.setOptional(B,G,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",G._indirectTexture,b),oe.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",G._colorsTexture,b));const yi=W.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Ut.update(G,W,gn),(xi||xt.receiveShadow!==G.receiveShadow)&&(xt.receiveShadow=G.receiveShadow,oe.setValue(B,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Te.envMapIntensity.value=O.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=hv()),xi){if(oe.setValue(B,"toneMappingExposure",R.toneMappingExposure),xt.needsLights&&Cf(Te,rs),ft&&H.fog===!0&&X.refreshFogUniforms(Te,ft),X.refreshMaterialUniforms(Te,H,Mt,zt,M.state.transmissionRenderTarget[E.id]),xt.needsLights&&xt.lightProbeGrid){const ce=xt.lightProbeGrid;Te.probesSH.value=ce.texture,Te.probesMin.value.copy(ce.boundingBox.min),Te.probesMax.value.copy(ce.boundingBox.max),Te.probesResolution.value.copy(ce.resolution)}qo.upload(B,xh(xt),Te,b)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qo.upload(B,xh(xt),Te,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(B,"center",G.center),oe.setValue(B,"modelViewMatrix",G.modelViewMatrix),oe.setValue(B,"normalMatrix",G.normalMatrix),oe.setValue(B,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ce=H.uniformsGroups;for(let vi=0,os=ce.length;vi<os;vi++){const vh=ce[vi];q.update(vh,gn),q.bind(vh,gn)}}return gn}function Cf(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,O,W){const H=I.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),I.get(E.texture).__webglTexture=O,I.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const W=I.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Pf=B.createFramebuffer();this.setRenderTarget=function(E,O=0,W=0){L=E,N=O,F=W;let H=null,G=!1,ft=!1;if(E){const dt=I.get(E);if(dt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(B.FRAMEBUFFER,dt.__webglFramebuffer),Z.copy(E.viewport),Q.copy(E.scissor),lt=E.scissorTest,ct.viewport(Z),ct.scissor(Q),ct.setScissorTest(lt),k=-1;return}else if(dt.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(dt.__hasExternalTextures)b.rebindTextures(E,I.get(E.texture).__webglTexture,I.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ot=E.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&I.has(Ot)&&(E.width!==Ot.image.width||E.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const St=E.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ft=!0);const At=I.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(At[O])?H=At[O][W]:H=At[O],G=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?H=I.get(E).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[W]:H=At,Z.copy(E.viewport),Q.copy(E.scissor),lt=E.scissorTest}else Z.copy(it).multiplyScalar(Mt).floor(),Q.copy(Rt).multiplyScalar(Mt).floor(),lt=Nt;if(W!==0&&(H=Pf),ct.bindFramebuffer(B.FRAMEBUFFER,H)&&ct.drawBuffers(E,H),ct.viewport(Z),ct.scissor(Q),ct.setScissorTest(lt),G){const dt=I.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,W)}else if(ft){const dt=O;for(let St=0;St<E.textures.length;St++){const At=I.get(E.textures[St]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+St,At.__webglTexture,W,dt)}}else if(E!==null&&W!==0){const dt=I.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,W)}k=-1},this.readRenderTargetPixels=function(E,O,W,H,G,ft,vt,dt=0){if(!(E&&E.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){ct.bindFramebuffer(B.FRAMEBUFFER,St);try{const At=E.textures[dt],Ot=At.format,Ht=At.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt),!le.textureFormatReadable(Ot)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Ht)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&W>=0&&W<=E.height-G&&B.readPixels(O,W,H,G,U.convert(Ot),U.convert(Ht),ft)}finally{const At=L!==null?I.get(L).__webglFramebuffer:null;ct.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,H,G,ft,vt,dt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(O>=0&&O<=E.width-H&&W>=0&&W<=E.height-G){ct.bindFramebuffer(B.FRAMEBUFFER,St);const At=E.textures[dt],Ot=At.format,Ht=At.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt),!le.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,wt),B.bufferData(B.PIXEL_PACK_BUFFER,ft.byteLength,B.STREAM_READ),B.readPixels(O,W,H,G,U.convert(Ot),U.convert(Ht),0);const ee=L!==null?I.get(L).__webglFramebuffer:null;ct.bindFramebuffer(B.FRAMEBUFFER,ee);const be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _p(B,be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,wt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ft),B.deleteBuffer(wt),B.deleteSync(be),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,W=0){const H=Math.pow(2,-W),G=Math.floor(E.image.width*H),ft=Math.floor(E.image.height*H),vt=O!==null?O.x:0,dt=O!==null?O.y:0;b.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,vt,dt,G,ft),ct.unbindTexture()};const If=B.createFramebuffer(),Df=B.createFramebuffer();this.copyTextureToTexture=function(E,O,W=null,H=null,G=0,ft=0){let vt,dt,St,At,Ot,Ht,wt,ee,be;const ve=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(W!==null)vt=W.max.x-W.min.x,dt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,At=W.min.x,Ot=W.min.y,Ht=W.isBox3?W.min.z:0;else{const Te=Math.pow(2,-G);vt=Math.floor(ve.width*Te),dt=Math.floor(ve.height*Te),E.isDataArrayTexture?St=ve.depth:E.isData3DTexture?St=Math.floor(ve.depth*Te):St=1,At=0,Ot=0,Ht=0}H!==null?(wt=H.x,ee=H.y,be=H.z):(wt=0,ee=0,be=0);const re=U.convert(O.format),We=U.convert(O.type);let xt;O.isData3DTexture?(b.setTexture3D(O,0),xt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(b.setTexture2DArray(O,0),xt=B.TEXTURE_2D_ARRAY):(b.setTexture2D(O,0),xt=B.TEXTURE_2D),ct.activeTexture(B.TEXTURE0),ct.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),ct.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ct.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const un=ct.getParameter(B.UNPACK_ROW_LENGTH),Yt=ct.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=ct.getParameter(B.UNPACK_SKIP_PIXELS),kn=ct.getParameter(B.UNPACK_SKIP_ROWS),xi=ct.getParameter(B.UNPACK_SKIP_IMAGES);ct.pixelStorei(B.UNPACK_ROW_LENGTH,ve.width),ct.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve.height),ct.pixelStorei(B.UNPACK_SKIP_PIXELS,At),ct.pixelStorei(B.UNPACK_SKIP_ROWS,Ot),ct.pixelStorei(B.UNPACK_SKIP_IMAGES,Ht);const rs=E.isDataArrayTexture||E.isData3DTexture,oe=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Te=I.get(E),yi=I.get(O),ce=I.get(Te.__renderTarget),vi=I.get(yi.__renderTarget);ct.bindFramebuffer(B.READ_FRAMEBUFFER,ce.__webglFramebuffer),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let os=0;os<St;os++)rs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(E).__webglTexture,G,Ht+os),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(O).__webglTexture,ft,be+os)),B.blitFramebuffer(At,Ot,vt,dt,wt,ee,vt,dt,B.DEPTH_BUFFER_BIT,B.NEAREST);ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||I.has(E)){const Te=I.get(E),yi=I.get(O);ct.bindFramebuffer(B.READ_FRAMEBUFFER,If),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,Df);for(let ce=0;ce<St;ce++)rs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.__webglTexture,G,Ht+ce):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,G),oe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yi.__webglTexture,ft,be+ce):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yi.__webglTexture,ft),G!==0?B.blitFramebuffer(At,Ot,vt,dt,wt,ee,vt,dt,B.COLOR_BUFFER_BIT,B.NEAREST):oe?B.copyTexSubImage3D(xt,ft,wt,ee,be+ce,At,Ot,vt,dt):B.copyTexSubImage2D(xt,ft,wt,ee,At,Ot,vt,dt);ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(xt,ft,wt,ee,be,vt,dt,St,re,We,ve.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(xt,ft,wt,ee,be,vt,dt,St,re,ve.data):B.texSubImage3D(xt,ft,wt,ee,be,vt,dt,St,re,We,ve):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ft,wt,ee,vt,dt,re,We,ve.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ft,wt,ee,ve.width,ve.height,re,ve.data):B.texSubImage2D(B.TEXTURE_2D,ft,wt,ee,vt,dt,re,We,ve);ct.pixelStorei(B.UNPACK_ROW_LENGTH,un),ct.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Yt),ct.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),ct.pixelStorei(B.UNPACK_SKIP_ROWS,kn),ct.pixelStorei(B.UNPACK_SKIP_IMAGES,xi),ft===0&&O.generateMipmaps&&B.generateMipmap(xt),ct.unbindTexture()},this.initRenderTarget=function(E){I.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){N=0,F=0,L=null,ct.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}const Gu={type:"change"},th={type:"start"},gf={type:"end"},bo=new Fi,Wu=new Xn,uv=Math.cos(70*jn.DEG2RAD),Ie=new C,sn=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6;class YM extends dg{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new me,this._lastTargetPosition=new C,this._quat=new me().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gu,this._sphericalDelta=new gu,this._scale=1,this._panOffset=new C,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new C,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fv.bind(this),this._onPointerDown=dv.bind(this),this._onPointerUp=pv.bind(this),this._onContextMenu=Sv.bind(this),this._onMouseWheel=_v.bind(this),this._onKeyDown=xv.bind(this),this._onTouchStart=yv.bind(this),this._onTouchMove=vv.bind(this),this._onMouseDown=mv.bind(this),this._onMouseMove=gv.bind(this),this._interceptControlDown=Mv.bind(this),this._interceptControlUp=bv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gu),this.update(),this.state=ne.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bo.origin.copy(this.object.position),bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bo.direction))<uv?this.object.lookAt(this.target):(Wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),bo.intersectPlane(Wu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ie.copy(i).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dv(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function pv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gf),this.state=ne.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ne.DOLLY;break;case Os.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}break;case Os.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(th)}function gv(s){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _v(s){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(s.preventDefault(),this.dispatchEvent(th),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(gf))}function xv(s){this.enabled!==!1&&this._handleKeyDown(s)}function yv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ne.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ne.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(th)}function vv(s){switch(this._trackPointer(s),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ne.NONE}}function Sv(s){this.enabled!==!1&&s.preventDefault()}function Mv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mr=new C;function xn(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;mr.copy(t),mr[n]=0,mr.normalize();const c=.5*o/(o+a),h=1-mr.angleTo(s)/l;return Math.sign(mr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class eh extends ss{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new C,g=.5/o;for(let p=0,x=0;p<d.length;p+=3,x+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[x+0]=xn(_,c,"z","y",r,n),f[x+1]=1-xn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[x+0]=1-xn(_,c,"z","y",r,n),f[x+1]=1-xn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[x+0]=1-xn(_,c,"x","z",r,t),f[x+1]=xn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-xn(_,c,"x","z",r,t),f[x+1]=1-xn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-xn(_,c,"x","y",r,t),f[x+1]=1-xn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[x+0]=xn(_,c,"x","y",r,t),f[x+1]=1-xn(_,c,"y","x",r,e);break}}static fromJSON(t){return new eh(t.width,t.height,t.depth,t.segments,t.radius)}}function Xu(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=qu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);const m=qu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function qu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ue(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function KM(s){let t=0;for(const n in s.attributes){const i=s.getAttribute(n);t+=i.count*i.itemSize*i.array.BYTES_PER_ELEMENT}const e=s.getIndex();return t+=e?e.count*e.itemSize*e.array.BYTES_PER_ELEMENT:0,t}function ju(s,t){if(t===rp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===cc||t===zd){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===cc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const al=new WeakMap;class Tv extends _i{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,i){const r=new Js(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,o=>{this.parse(o,e,i)},n,i)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,we,n).catch(n)}decodeDracoFile(t,e,n,i,r=cn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const n=JSON.stringify(e);if(al.has(t)){const l=al.get(t);if(l.key===n)return l.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:e,buffer:t},[t])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),al.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new xe;t.index&&e.setIndex(new ue(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:l}=t.attributes[n];let c;if(o===a)c=new ue(r,o);else{const h=new qd(r,a);c=new aa(h,o,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),e.setAttribute(i,c)}return e}_assignVertexColorSpace(t,e){if(e!==we)return;const n=new Dt;for(let i=0,r=t.count;i<r;i++)n.fromBufferAttribute(t,i),Gt.colorSpaceToWorking(n,we),t.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new Js(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(t,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const i=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const r=Ev.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Ev(){let s,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,t=new Promise(function(h){s.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;t.then(h=>{const d=h.draco,u=new d.Decoder;try{const f=e(d,u,new Int8Array(l),c),m=f.attributes.map(_=>_.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(u)}});break}};function e(o,a,l,c){const h=c.attributeIDs,d=c.attributeTypes;let u,f;const m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)u=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,u);else if(m===o.POINT_CLOUD)u=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const g in h){const p=self[d[g]];let x,S;if(c.useUniqueIDs)S=h[g],x=a.GetAttributeByUniqueId(u,S);else{if(S=a.GetAttributeId(u,o[h[g]]),S===-1)continue;x=a.GetAttribute(u,S)}const y=i(o,a,u,g,p,x);g==="color"&&(y.vertexColorSpace=c.vertexColorSpace),_.attributes.push(y)}return m===o.TRIANGULAR_MESH&&(_.index=n(o,a,u)),o.destroy(u),_}function n(o,a,l){const h=l.num_faces()*3,d=h*4,u=o._malloc(d);a.GetTrianglesUInt32Array(l,d,u);const f=new Uint32Array(o.HEAPF32.buffer,u,h).slice();return o._free(u),{array:f,itemSize:1}}function i(o,a,l,c,h,d){const u=l.num_points(),f=d.num_components(),m=r(o,h),_=f*h.BYTES_PER_ELEMENT,g=Math.ceil(_/4)*4,p=g/h.BYTES_PER_ELEMENT,x=u*_,S=u*g,y=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,d,m,x,y);const T=new h(o.HEAPF32.buffer,y,x/h.BYTES_PER_ELEMENT);let M;if(_===g)M=T.slice();else{M=new h(S/h.BYTES_PER_ELEMENT);let w=0;for(let v=0,A=T.length;v<A;v++){for(let R=0;R<f;R++)M[w+R]=T[v*f+R];w+=p}}return o._free(y),{name:c,count:u,itemSize:f,array:M,stride:p}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Av(s){const t=new Map,e=new Map,n=s.clone();return _f(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function _f(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)_f(s.children[n],t.children[n],e)}class wv extends _i{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Dv(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Gv(e)}),this.register(function(e){return new Wv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new Ov(e)}),this.register(function(e){return new Iv(e)}),this.register(function(e){return new kv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new Rv(e)}),this.register(function(e){return new Yu(e,Wt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Yu(e,Wt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Xv(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Rr.extractUrlBase(t);o=Rr.resolveURL(c,this.path)}else o=Rr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Js(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===xf){try{o[Wt.KHR_BINARY_GLTF]=new qv(t)}catch(d){i&&i(d);return}r=JSON.parse(o[Wt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rS(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Wt.KHR_MATERIALS_UNLIT:o[d]=new Pv;break;case Wt.KHR_DRACO_MESH_COMPRESSION:o[d]=new jv(r,this.dracoLoader);break;case Wt.KHR_TEXTURE_TRANSFORM:o[d]=new Yv;break;case Wt.KHR_MESH_QUANTIZATION:o[d]=new Kv;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Cv(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Ee(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const Wt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Rv{constructor(t){this.parser=t,this.name=Wt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Dt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],cn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hm(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zm(h),c.distance=d;break;case"spot":c=new Om(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Pv{constructor(){this.name=Wt.KHR_MATERIALS_UNLIT}getMaterialType(){return Sn}extendParams(t,e,n){const i=[];t.color=new Dt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],cn),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,we))}return Promise.all(i)}}class Iv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Dv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new bt(r,r)}return Promise.all(i)}}class Lv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Nv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Uv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],cn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,we)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Fv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Bv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(r[0],r[1],r[2],cn),Promise.all(i)}}class Ov{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_IOR}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class kv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(r[0],r[1],r[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,we)),Promise.all(i)}}class zv{constructor(t){this.parser=t,this.name=Wt.EXT_MATERIALS_BUMP}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Vv{constructor(t){this.parser=t,this.name=Wt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ee(this.parser,t,this.name)!==null?Qn:null}extendMaterialParams(t,e){const n=Ee(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Hv{constructor(t){this.parser=t,this.name=Wt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Gv{constructor(t){this.parser=t,this.name=Wt.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class Wv{constructor(t){this.parser=t,this.name=Wt.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class Yu{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Xv{constructor(t){this.name=Wt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const m of d){const _=new Tt,g=new C,p=new me,x=new C(1,1,1),S=new rm(m.geometry,m.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,_.compose(g,p,x));for(const y in l)if(y==="_COLOR_0"){const T=l[y];S.instanceColor=new fc(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);he.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const xf="glTF",gr=12,Ku={JSON:1313821514,BIN:5130562};class qv{constructor(t){this.name=Wt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gr,r=new DataView(t,gr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ku.JSON){const c=new Uint8Array(t,gr+o,a);this.content=n.decode(c)}else if(l===Ku.BIN){const c=gr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Wt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Sc[h]||h.toLowerCase();a[d]=o[h]}for(const h in t.attributes){const d=Sc[h]||h.toLowerCase();if(o[h]!==void 0){const u=n.accessors[t.attributes[h]],f=Vs[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}d(f)},a,c,cn,u)})})}}class Yv{constructor(){this.name=Wt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Kv{constructor(){this.name=Wt.KHR_MESH_QUANTIZATION}}class yf extends tr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,d=(n-e)/h,u=d*d,f=u*d,m=t*c,_=m-c,g=-2*f+3*u,p=f-u,x=1-g,S=p-u+d;for(let y=0;y!==a;y++){const T=o[_+y+a],M=o[_+y+l]*h,w=o[m+y+a],v=o[m+y]*h;r[y]=x*T+S*M+g*w+p*v}return r}}const Zv=new me;class Jv extends yf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Zv.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zu={9728:Ne,9729:Se,9984:Ld,9985:Vo,9986:Er,9987:Yn},Ju={33071:mn,33648:Ko,10497:Ws},ll={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$v={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Nr},cl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ha({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),s.DefaultMaterial}function Ki(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Wn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function tS(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c];if(n){const u=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){const u=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function eS(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nS(s){let t;const e=s.extensions&&s.extensions[Wt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+hl(e.attributes):t=s.indices+":"+hl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+hl(s.targets[n]);return t}function hl(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Mc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sS=new Tt;class rS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Cv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Fm(this.options.manager):this.textureLoader=new Gm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ki(r,a,i),Wn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Wt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Rr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=ll[i.type],a=Vs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ue(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ll[i.type],c=Vs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==d){const p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=e.cache.get(x);S||(_=new c(a,p*f,i.count*f/h),S=new qd(_,f/h),e.cache.add(x,S)),g=new aa(S,l,u%f/h,m)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),g=new ue(_,l,m);if(i.sparse!==void 0){const p=ll.SCALAR,x=Vs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new x(o[1],S,i.sparse.count*p),M=new c(o[2],y,i.sparse.count*l);a!==null&&(g=new ue(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,v=T.length;w<v;w++){const A=T[w];if(g.setX(A,M[w*l]),l>=2&&g.setY(A,M[w*l+1]),l>=3&&g.setZ(A,M[w*l+2]),l>=4&&g.setW(A,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zu[u.magFilter]||Se,h.minFilter=Zu[u.minFilter]||Yn,h.wrapS=Ju[u.wrapS]||Ws,h.wrapT=Ju[u.wrapT]||Ws,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ne&&h.minFilter!==Se,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let m=u;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Ue(_);g.needsUpdate=!0,u(g)}),e.load(Rr.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Wn(d,o),d.userData.mimeType=o.mimeType||iS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Wt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Wt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Wt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Yd,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zr,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ha}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[Wt.KHR_MATERIALS_UNLIT]){const d=i[Wt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,e))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new Dt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],cn),a.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",d.baseColorTexture,we)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=on);const h=r.alphaMode||cl.OPAQUE;if(h===cl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Sn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new bt(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Sn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Sn){const d=r.emissiveFactor;a.emissive=new Dt().setRGB(d[0],d[1],d[2],cn)}return r.emissiveTexture!==void 0&&o!==Sn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,we)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Wn(d,r),e.associations.set(d,{materials:t}),r.extensions&&Ki(i,d,r),d})}createUniqueName(t){const e=Zt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Wt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return $u(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=nS(c),d=i[h];if(d)o.push(d.promise);else{let u;c.extensions&&c.extensions[Wt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=$u(new xe,c,e),i[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Qv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const x=c[f];if(g.mode===vn.TRIANGLES||g.mode===vn.TRIANGLE_STRIP||g.mode===vn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new nm(_,x):new fe(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===vn.TRIANGLE_STRIP?p.geometry=ju(p.geometry,zd):g.mode===vn.TRIANGLE_FAN&&(p.geometry=ju(p.geometry,cc));else if(g.mode===vn.LINES)p=new la(_,x);else if(g.mode===vn.LINE_STRIP)p=new Qs(_,x);else if(g.mode===vn.LINE_LOOP)p=new Yc(_,x);else if(g.mode===vn.POINTS)p=new Kc(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&eS(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Wn(p,r),g.extensions&&Ki(i,p,g),e.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)e.associations.set(d[f],{meshes:t,primitives:f});if(d.length===1)return r.extensions&&Ki(i,d[0],r),d[0];const u=new In;r.extensions&&Ki(i,u,r),e.associations.set(u,{meshes:t});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new rn(jn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new da(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Wn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const u=new Tt;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new qc(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],_=d[3],g=d[4],p=[];for(let S=0,y=u.length;S<y;S++){const T=u[S],M=f[S],w=m[S],v=_[S],A=g[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const R=n._createAnimationTracks(T,M,w,v,A);if(R)for(let P=0;P<R.length;P++)p.push(R[P])}const x=new mc(r,void 0,p);return Wn(x,i),x})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,sS)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,m=d[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new jd:c.length>1?h=new In:c.length===1?h=c[0]:h=new he,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Wn(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){const d=new Tt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new In;n.name&&(r.name=i.createUniqueName(n.name)),Wn(r,n),n.extensions&&Ki(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(Av(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof Zn||u instanceof Ue)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ci[r.path]===Ci.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ci[r.path]){case Ci.weights:h=Ys;break;case Ci.rotation:h=Ks;break;case Ci.translation:case Ci.scale:h=Zs;break;default:n.itemSize===1?h=Ys:h=Zs;break}const d=i.interpolation!==void 0?$v[i.interpolation]:Ur,u=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const _=new h(l[f]+"."+Ci[r.path],e.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Mc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ks?Jv:yf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function oS(s,t,e){const n=t.attributes,i=new ie;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=Mc(Vs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=e.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const _=Mc(Vs[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $u(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Sc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Gt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gt.workingColorSpace}" not supported.`),Wn(s,t),oS(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?tS(s,t.targets,e):s})}const vf=0,aS=1,lS=2,Qu=2,ul=1.25,td=1,Ye=32,De=Ye/4,Sf=65535,jo=Math.pow(2,-24),nh=Symbol("SKIP_GENERATION"),Mf={strategy:vf,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[nh]:!1};function _e(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function ed(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function nd(s,t){t.set(s)}function id(s,t,e){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function To(s,t,e){for(let n=0;n<3;n++){const i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function _r(s){const t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}function Le(s,t){return t[s+15]===Sf}function Ke(s,t){return t[s+6]}function $e(s,t){return t[s+14]}function ze(s){return s+De}function Ve(s,t){const e=t[s+6];return s+e*De}function ih(s,t){return t[s+7]}function dl(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,d=1/0,u=1/0,f=1/0,m=-1/0,_=-1/0,g=-1/0;const p=s.offset||0;for(let x=(t-p)*6,S=(t+e-p)*6;x<S;x+=6){const y=s[x+0],T=s[x+1],M=y-T,w=y+T;M<r&&(r=M),w>l&&(l=w),y<d&&(d=y),y>m&&(m=y);const v=s[x+2],A=s[x+3],R=v-A,P=v+A;R<o&&(o=R),P>c&&(c=P),v<u&&(u=v),v>_&&(_=v);const D=s[x+4],N=s[x+5],F=D-N,L=D+N;F<a&&(a=F),L>h&&(h=L),D<f&&(f=D),D>g&&(g=D)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,i[0]=d,i[1]=u,i[2]=f,i[3]=m,i[4]=_,i[5]=g}const ai=32,cS=(s,t)=>s.candidate-t.candidate,Ri=new Array(ai).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Eo=new Float32Array(6);function hS(s,t,e,n,i,r){let o=-1,a=0;if(r===vf)o=ed(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===aS)o=ed(s),o!==-1&&(a=uS(e,n,i,o));else if(r===lS){const l=_r(s);let c=ul*i;const h=e.offset||0,d=(n-h)*6,u=(n+i-h)*6;for(let f=0;f<3;f++){const m=t[f],p=(t[f+3]-m)/ai;if(i<ai/4){const x=[...Ri];x.length=i;let S=0;for(let T=d;T<u;T+=6,S++){const M=x[S];M.candidate=e[T+2*f],M.count=0;const{bounds:w,leftCacheBounds:v,rightCacheBounds:A}=M;for(let R=0;R<3;R++)A[R]=1/0,A[R+3]=-1/0,v[R]=1/0,v[R+3]=-1/0,w[R]=1/0,w[R+3]=-1/0;To(T,e,w)}x.sort(cS);let y=i;for(let T=0;T<y;T++){const M=x[T];for(;T+1<y&&x[T+1].candidate===M.candidate;)x.splice(T+1,1),y--}for(let T=d;T<u;T+=6){const M=e[T+2*f];for(let w=0;w<y;w++){const v=x[w];M>=v.candidate?To(T,e,v.rightCacheBounds):(To(T,e,v.leftCacheBounds),v.count++)}}for(let T=0;T<y;T++){const M=x[T],w=M.count,v=i-M.count,A=M.leftCacheBounds,R=M.rightCacheBounds;let P=0;w!==0&&(P=_r(A)/l);let D=0;v!==0&&(D=_r(R)/l);const N=td+ul*(P*w+D*v);N<c&&(o=f,c=N,a=M.candidate)}}else{for(let y=0;y<ai;y++){const T=Ri[y];T.count=0,T.candidate=m+p+y*p;const M=T.bounds;for(let w=0;w<3;w++)M[w]=1/0,M[w+3]=-1/0}for(let y=d;y<u;y+=6){let w=~~((e[y+2*f]-m)/p);w>=ai&&(w=ai-1);const v=Ri[w];v.count++,To(y,e,v.bounds)}const x=Ri[ai-1];nd(x.bounds,x.rightCacheBounds);for(let y=ai-2;y>=0;y--){const T=Ri[y],M=Ri[y+1];id(T.bounds,M.rightCacheBounds,T.rightCacheBounds)}let S=0;for(let y=0;y<ai-1;y++){const T=Ri[y],M=T.count,w=T.bounds,A=Ri[y+1].rightCacheBounds;M!==0&&(S===0?nd(w,Eo):id(w,Eo,Eo)),S+=M;let R=0,P=0;S!==0&&(R=_r(Eo)/l);const D=i-S;D!==0&&(P=_r(A)/l);const N=td+ul*(R*S+P*D);N<c&&(o=f,c=N,a=T.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function uS(s,t,e,n){let i=0;const r=s.offset;for(let o=t,a=t+e;o<a;o++)i+=s[(o-r)*6+n*2];return i/e}class fl{constructor(){this.boundingData=new Float32Array(6)}}function dS(s,t,e,n,i,r){let o=n,a=n+i-1;const l=r.pos,c=r.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+c]<l;)o++;for(;o<=a&&e[(a-h)*6+c]>=l;)a--;if(o<a){for(let d=0;d<t;d++){let u=s[o*t+d];s[o*t+d]=s[a*t+d],s[a*t+d]=u}for(let d=0;d<6;d++){const u=o-h,f=a-h,m=e[u*6+d];e[u*6+d]=e[f*6+d],e[f*6+d]=m}o++,a--}else return o}}let bf,Yo,bc,Tf;const fS=Math.pow(2,32);function Tc(s){return"count"in s?1:1+Tc(s.left)+Tc(s.right)}function pS(s,t,e){return bf=new Float32Array(e),Yo=new Uint32Array(e),bc=new Uint16Array(e),Tf=new Uint8Array(e),Ec(s,t)}function Ec(s,t){const e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)bf[e+o]=r[o];if(i)return t.buffer?(Tf.set(new Uint8Array(t.buffer),s),s+t.buffer.byteLength):(Yo[e+6]=t.offset,bc[n+14]=t.count,bc[n+15]=Sf,s+Ye);{const{left:o,right:a,splitAxis:l}=t,c=s+Ye;let h=Ec(c,o);const d=s/Ye,f=h/Ye-d;if(f>fS)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Yo[e+6]=f,Yo[e+7]=l,Ec(h,a)}}function mS(s,t,e,n,i,r){const{maxDepth:o,verbose:a,maxLeafSize:l,strategy:c,onProgress:h}=i,d=s.primitiveBuffer,u=s.primitiveBufferStride,f=new Float32Array(6);let m=!1;const _=new fl;return dl(t,e,n,_.boundingData,f),p(_,e,n,f),_;function g(x){h&&h((x-r.offset)/r.count)}function p(x,S,y,T=null,M=0){if(!m&&M>=o&&(m=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),y<=l||M>=o)return g(S+y),x.offset=S,x.count=y,x;const w=hS(x.boundingData,T,t,S,y,c);if(w.axis===-1)return g(S+y),x.offset=S,x.count=y,x;const v=dS(d,u,t,S,y,w);if(v===S||v===S+y)g(S+y),x.offset=S,x.count=y;else{x.splitAxis=w.axis;const A=new fl,R=S,P=v-S;x.left=A,dl(t,R,P,A.boundingData,f),p(A,R,P,f,M+1);const D=new fl,N=v,F=y-P;x.right=D,dl(t,N,F,D.boundingData,f),p(D,N,F,f,M+1)}return x}}function gS(s,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=s.getRootRanges(t.range),i=n[0],r=n[n.length-1],o={offset:i.offset,count:r.offset+r.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,s.computePrimitiveBounds(o.offset,o.count,a),s._roots=n.map(l=>{const c=mS(s,a,l.offset,l.count,t,o),h=Tc(c),d=new e(Ye*h);return pS(0,c,d),d})}class sh{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class _S{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const pe=new _S;let Li,Bs;const Es=[],Ao=new sh(()=>new ie);function xS(s,t,e,n,i,r){Li=Ao.getPrimitive(),Bs=Ao.getPrimitive(),Es.push(Li,Bs),pe.setBuffer(s._roots[t]);const o=Ac(0,s.geometry,e,n,i,r);pe.clearBuffer(),Ao.releasePrimitive(Li),Ao.releasePrimitive(Bs),Es.pop(),Es.pop();const a=Es.length;return a>0&&(Bs=Es[a-1],Li=Es[a-2]),o}function Ac(s,t,e,n,i=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=pe;let h=s*2;if(Le(h,l)){const u=Ke(s,c),f=$e(h,l);return _e(s,a,Li),n(u,f,!1,o,r+s/De,Li)}else{let R=function(D){const{uint16Array:N,uint32Array:F}=pe;let L=D*2;for(;!Le(L,N);)D=ze(D),L=D*2;return Ke(D,F)},P=function(D){const{uint16Array:N,uint32Array:F}=pe;let L=D*2;for(;!Le(L,N);)D=Ve(D,F),L=D*2;return Ke(D,F)+$e(L,N)};const u=ze(s),f=Ve(s,c);let m=u,_=f,g,p,x,S;if(i&&(x=Li,S=Bs,_e(m,a,x),_e(_,a,S),g=i(x),p=i(S),p<g)){m=f,_=u;const D=g;g=p,p=D,x=S}x||(x=Li,_e(m,a,x));const y=Le(m*2,l),T=e(x,y,g,o+1,r+m/De);let M;if(T===Qu){const D=R(m),F=P(m)-D;M=n(D,F,!0,o+1,r+m/De,x)}else M=T&&Ac(m,t,e,n,i,r,o+1);if(M)return!0;S=Bs,_e(_,a,S);const w=Le(_*2,l),v=e(S,w,p,o+1,r+_/De);let A;if(v===Qu){const D=R(_),F=P(_)-D;A=n(D,F,!0,o+1,r+_/De,S)}else A=v&&Ac(_,t,e,n,i,r,o+1);return!!A}}const Pr=new pe.constructor,ia=new pe.constructor,Pi=new sh(()=>new ie),As=new ie,ws=new ie,pl=new ie,ml=new ie;let gl=!1;function yS(s,t,e,n){if(gl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");gl=!0;const i=s._roots,r=t._roots;let o,a=0,l=0;const c=new Tt().copy(e).invert();for(let h=0,d=i.length;h<d;h++){Pr.setBuffer(i[h]),l=0;const u=Pi.getPrimitive();_e(0,Pr.float32Array,u),u.applyMatrix4(c);for(let f=0,m=r.length;f<m&&(ia.setBuffer(r[f]),o=wn(0,0,e,c,n,a,l,0,0,u),ia.clearBuffer(),l+=r[f].byteLength/Ye,!o);f++);if(Pi.releasePrimitive(u),Pr.clearBuffer(),a+=i[h].byteLength/Ye,o)break}return gl=!1,o}function wn(s,t,e,n,i,r=0,o=0,a=0,l=0,c=null,h=!1){let d,u;h?(d=ia,u=Pr):(d=Pr,u=ia);const f=d.float32Array,m=d.uint32Array,_=d.uint16Array,g=u.float32Array,p=u.uint32Array,x=u.uint16Array,S=s*2,y=t*2,T=Le(S,_),M=Le(y,x);let w=!1;if(M&&T)h?w=i(Ke(t,p),$e(t*2,x),Ke(s,m),$e(s*2,_),l,o+t/De,a,r+s/De):w=i(Ke(s,m),$e(s*2,_),Ke(t,p),$e(t*2,x),a,r+s/De,l,o+t/De);else if(M){const v=Pi.getPrimitive();_e(t,g,v),v.applyMatrix4(e);const A=ze(s),R=Ve(s,m);_e(A,f,As),_e(R,f,ws);const P=v.intersectsBox(As),D=v.intersectsBox(ws);w=P&&wn(t,A,n,e,i,o,r,l,a+1,v,!h)||D&&wn(t,R,n,e,i,o,r,l,a+1,v,!h),Pi.releasePrimitive(v)}else{const v=ze(t),A=Ve(t,p);_e(v,g,pl),_e(A,g,ml);const R=c.intersectsBox(pl),P=c.intersectsBox(ml);if(R&&P)w=wn(s,v,e,n,i,r,o,a,l+1,c,h)||wn(s,A,e,n,i,r,o,a,l+1,c,h);else if(R)if(T)w=wn(s,v,e,n,i,r,o,a,l+1,c,h);else{const D=Pi.getPrimitive();D.copy(pl).applyMatrix4(e);const N=ze(s),F=Ve(s,m);_e(N,f,As),_e(F,f,ws);const L=D.intersectsBox(As),k=D.intersectsBox(ws);w=L&&wn(v,N,n,e,i,o,r,l,a+1,D,!h)||k&&wn(v,F,n,e,i,o,r,l,a+1,D,!h),Pi.releasePrimitive(D)}else if(P)if(T)w=wn(s,A,e,n,i,r,o,a,l+1,c,h);else{const D=Pi.getPrimitive();D.copy(ml).applyMatrix4(e);const N=ze(s),F=Ve(s,m);_e(N,f,As),_e(F,f,ws);const L=D.intersectsBox(As),k=D.intersectsBox(ws);w=L&&wn(A,N,n,e,i,o,r,l,a+1,D,!h)||k&&wn(A,F,n,e,i,o,r,l,a+1,D,!h),Pi.releasePrimitive(D)}}return w}const sd=new ie,Cs=new Float32Array(6);class vS{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Mf,...t},gS(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let d=t,u=t+e;d<u;d++){this.writePrimitiveBounds(d,Cs,0);const[f,m,_,g,p,x]=Cs;f<r&&(r=f),g>l&&(l=g),m<o&&(o=m),p>c&&(c=p),_<a&&(a=_),x>h&&(h=x)}return n[i+0]=r,n[i+1]=o,n[i+2]=a,n[i+3]=l,n[i+4]=c,n[i+5]=h,n}computePrimitiveBounds(t,e,n){const i=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,Cs,0);const[a,l,c,h,d,u]=Cs,f=(a+h)/2,m=(l+d)/2,_=(c+u)/2,g=(h-a)/2,p=(d-l)/2,x=(u-c)/2,S=(r-i)*6;n[S+0]=f,n[S+1]=g+(Math.abs(f)+g)*jo,n[S+2]=m,n[S+3]=p+(Math.abs(m)+p)*jo,n[S+4]=_,n[S+5]=x+(Math.abs(_)+x)*jo}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{const n=this._roots;for(let i=0;i<n.length;i++){const r=n[i],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/Ye;for(let c=0;c<l;c++){const h=De*c,d=2*h;Le(d,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,h=Le(c,r);if(h){const d=i[a+6],u=r[c+14];t(l,h,new Float32Array(n,a*4,6),d,u)}else{const d=ze(a),u=Ve(a,i),f=ih(a,i);t(l,h,new Float32Array(n,a*4,6),f)||(o(d,l+1),o(u,l+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const i=t[e],r=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),l=i.byteLength/Ye;for(let c=l-1;c>=0;c--){const h=c*De,d=h*2;if(Le(d,o)){const f=Ke(h,r),m=$e(d,o);this.writePrimitiveRangeBounds(f,m,Cs,0),a.set(Cs,h)}else{const f=ze(h),m=Ve(h,r);for(let _=0;_<3;_++){const g=a[f+_],p=a[f+_+3],x=a[m+_],S=a[m+_+3];a[h+_]=g<x?g:x,a[h+_+3]=p>S?p:S}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{_e(0,new Float32Array(n),sd),t.union(sd)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(i&&r){const d=i;i=(u,f,m,_,g)=>d(u,f,m,_,g)?!0:a(u,f,this,r,m,_,o)}else i||(r?i=(d,u,f,m)=>a(d,u,this,r,f,m,o):i=(d,u,f)=>f);let l=!1,c=0;const h=this._roots;for(let d=0,u=h.length;d<u;d++){const f=h[d];if(l=xS(this,d,n,i,e,c),l)break;c+=f.byteLength/Ye}return l}bvhcast(t,e,n){let{intersectsRanges:i}=n;return yS(this,t,e,i)}}function SS(){return typeof SharedArrayBuffer<"u"}function rh(s){return s.index?s.index.count:s.attributes.position.count}function ma(s){return rh(s)/3}function MS(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function bS(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=MS(e,n);s.setIndex(new ue(i,1));for(let r=0;r<e;r++)i[r]=r}}function TS(s,t,e){const n=rh(s)/e,i=t||s.drawRange,r=i.start/e,o=(i.start+i.count)/e,a=Math.max(0,r),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function ES(s,t){return s.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function rd(s,t,e){const n=TS(s,t,e),i=ES(s,e);if(!i.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,l=rh(s)/e,c=[];for(const u of i){const{offset:f,count:m}=u,_=f,g=isFinite(m)?m:l-f,p=f+g;_<a&&p>o&&(c.push({pos:Math.max(o,_),isStart:!0}),c.push({pos:Math.min(a,p),isStart:!1}))}c.sort((u,f)=>u.pos!==f.pos?u.pos-f.pos:u.type==="end"?-1:1);let h=0,d=null;for(const u of c){const f=u.pos;h!==0&&f!==d&&r.push({offset:d,count:f-d}),h+=u.isStart?1:-1,d=f}return r}function AS(s,t){const e=s[s.length-1],n=e.offset+e.count>2**16,i=s.reduce((c,h)=>c+h.count,0),r=n?4:2,o=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(o):new Uint16Array(o);let l=0;for(let c=0;c<s.length;c++){const{offset:h,count:d}=s[c];for(let u=0;u<d;u++)a[l+u]=h+u;l+=d}return a}class wS extends vS{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!SS())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Mf,...e},e[nh]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const i=rd(e,t.range,n),r=AS(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else bS(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ie))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:rd(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class mi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}mi.prototype.setFromBox=(function(){const s=new C;return function(e,n){const i=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){s.x=i.x*l+r.x*(1-l),s.y=i.y*c+r.y*(1-c),s.z=i.z*h+r.z*(1-h);const d=e.dot(s);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();const CS=(function(){const s=new C,t=new C,e=new C;return function(i,r,o){const a=i.start,l=s,c=r.start,h=t;e.subVectors(a,c),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);const d=e.dot(h),u=h.dot(l),f=h.dot(h),m=e.dot(l),g=l.dot(l)*f-u*u;let p,x;g!==0?p=(d*u-m*f)/g:p=0,x=(d+p*u)/f,o.x=p,o.y=x}})(),oh=(function(){const s=new bt,t=new C,e=new C;return function(i,r,o,a){CS(i,r,s);let l=s.x,c=s.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=i.start:h=i.end;let d;c<0?d=r.start:d=r.end;const u=t,f=e;if(i.closestPointToPoint(d,!0,t),r.closestPointToPoint(h,!0,e),u.distanceToSquared(d)<=f.distanceToSquared(h)){o.copy(u),a.copy(d);return}else{o.copy(h),a.copy(f);return}}}})(),RS=(function(){const s=new C,t=new C,e=new Xn,n=new Un;return function(r,o){const{radius:a,center:l}=r,{a:c,b:h,c:d}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,s).distanceTo(l)<=a||(n.start=c,n.end=d,n.closestPointToPoint(l,!0,s).distanceTo(l)<=a)||(n.start=h,n.end=d,n.closestPointToPoint(l,!0,s).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const p=_.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}})(),PS=["x","y","z"],li=1e-15,od=li*li;function yn(s){return Math.abs(s)<li}class Fn extends Ge{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new mi),this.points=[this.a,this.b,this.c],this.plane=new Xn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Un,this.needsUpdate=!0}intersectsSphere(t){return RS(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=r[1],h=o[1];c.subVectors(t,e),h.setFromPoints(c,i);const d=r[2],u=o[2];d.subVectors(e,n),u.setFromPoints(d,i);const f=r[3],m=o[3];f.subVectors(n,t),m.setFromPoints(f,i);const _=c.length(),g=d.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<li?g<li||p<li?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):g<li?p<li?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<li&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Fn.prototype.closestPointToSegment=(function(){const s=new C,t=new C,e=new Un;return function(i,r=null,o=null){const{start:a,end:l}=i,c=this.points;let h,d=1/0;for(let u=0;u<3;u++){const f=(u+1)%3;e.start.copy(c[u]),e.end.copy(c[f]),oh(e,i,s,t),h=s.distanceToSquared(t),h<d&&(d=h,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),h=a.distanceToSquared(s),h<d&&(d=h,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(l,s),h=l.distanceToSquared(s),h<d&&(d=h,r&&r.copy(s),o&&o.copy(l)),Math.sqrt(d)}})();Fn.prototype.intersectsTriangle=(function(){const s=new Fn,t=new mi,e=new mi,n=new C,i=new C,r=new C,o=new C,a=new Un,l=new Un,c=new C,h=new bt,d=new bt;function u(S,y,T,M){const w=n;!S.isDegenerateIntoPoint&&!S.isDegenerateIntoSegment?w.copy(S.plane.normal):w.copy(y.plane.normal);const v=S.satBounds,A=S.satAxes;for(let D=1;D<4;D++){const N=v[D],F=A[D];if(t.setFromPoints(F,y.points),N.isSeparated(t)||(o.copy(w).cross(F),t.setFromPoints(o,S.points),e.setFromPoints(o,y.points),t.isSeparated(e)))return!1}const R=y.satBounds,P=y.satAxes;for(let D=1;D<4;D++){const N=R[D],F=P[D];if(t.setFromPoints(F,S.points),N.isSeparated(t)||(o.crossVectors(w,F),t.setFromPoints(o,S.points),e.setFromPoints(o,y.points),t.isSeparated(e)))return!1}return T&&(M||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),T.start.set(0,0,0),T.end.set(0,0,0)),!0}function f(S,y,T,M,w,v,A,R,P,D,N){let F=A/(A-R);D.x=M+(w-M)*F,N.start.subVectors(y,S).multiplyScalar(F).add(S),F=A/(A-P),D.y=M+(v-M)*F,N.end.subVectors(T,S).multiplyScalar(F).add(S)}function m(S,y,T,M,w,v,A,R,P,D,N){if(w>0)f(S.c,S.a,S.b,M,y,T,P,A,R,D,N);else if(v>0)f(S.b,S.a,S.c,T,y,M,R,A,P,D,N);else if(R*P>0||A!=0)f(S.a,S.b,S.c,y,T,M,A,R,P,D,N);else if(R!=0)f(S.b,S.a,S.c,T,y,M,R,A,P,D,N);else if(P!=0)f(S.c,S.a,S.b,M,y,T,P,A,R,D,N);else return!0;return!1}function _(S,y,T,M){const w=y.degenerateSegment,v=S.plane.distanceToPoint(w.start),A=S.plane.distanceToPoint(w.end);return yn(v)?yn(A)?u(S,y,T,M):(T&&(T.start.copy(w.start),T.end.copy(w.start)),S.containsPoint(w.start)):yn(A)?(T&&(T.start.copy(w.end),T.end.copy(w.end)),S.containsPoint(w.end)):S.plane.intersectLine(w,n)!=null?(T&&(T.start.copy(n),T.end.copy(n)),S.containsPoint(n)):!1}function g(S,y,T){const M=y.a;return yn(S.plane.distanceToPoint(M))&&S.containsPoint(M)?(T&&(T.start.copy(M),T.end.copy(M)),!0):!1}function p(S,y,T){const M=S.degenerateSegment,w=y.a;return M.closestPointToPoint(w,!0,n),w.distanceToSquared(n)<od?(T&&(T.start.copy(w),T.end.copy(w)),!0):!1}function x(S,y,T,M){if(S.isDegenerateIntoSegment)if(y.isDegenerateIntoSegment){const w=S.degenerateSegment,v=y.degenerateSegment,A=i,R=r;w.delta(A),v.delta(R);const P=n.subVectors(v.start,w.start),D=A.x*R.y-A.y*R.x;if(yn(D))return!1;const N=(P.x*R.y-P.y*R.x)/D,F=-(A.x*P.y-A.y*P.x)/D;if(N<0||N>1||F<0||F>1)return!1;const L=w.start.z+A.z*N,k=v.start.z+R.z*F;return yn(L-k)?(T&&(T.start.copy(w.start).addScaledVector(A,N),T.end.copy(w.start).addScaledVector(A,N)),!0):!1}else return y.isDegenerateIntoPoint?p(S,y,T):_(y,S,T,M);else{if(S.isDegenerateIntoPoint)return y.isDegenerateIntoPoint?y.a.distanceToSquared(S.a)<od?(T&&(T.start.copy(S.a),T.end.copy(S.a)),!0):!1:y.isDegenerateIntoSegment?p(y,S,T):g(y,S,T);if(y.isDegenerateIntoPoint)return g(S,y,T);if(y.isDegenerateIntoSegment)return _(S,y,T,M)}}return function(y,T=null,M=!1){this.needsUpdate&&this.update(),y.isExtendedTriangle?y.needsUpdate&&y.update():(s.copy(y),s.update(),y=s);const w=x(this,y,T,M);if(w!==void 0)return w;const v=this.plane,A=y.plane;let R=A.distanceToPoint(this.a),P=A.distanceToPoint(this.b),D=A.distanceToPoint(this.c);yn(R)&&(R=0),yn(P)&&(P=0),yn(D)&&(D=0);const N=R*P,F=R*D;if(N>0&&F>0)return!1;let L=v.distanceToPoint(y.a),k=v.distanceToPoint(y.b),V=v.distanceToPoint(y.c);yn(L)&&(L=0),yn(k)&&(k=0),yn(V)&&(V=0);const Z=L*k,Q=L*V;if(Z>0&&Q>0)return!1;i.copy(v.normal),r.copy(A.normal);const lt=i.cross(r);let _t=0,st=Math.abs(lt.x);const It=Math.abs(lt.y);It>st&&(st=It,_t=1),Math.abs(lt.z)>st&&(_t=2);const Mt=PS[_t],j=this.a[Mt],ut=this.b[Mt],it=this.c[Mt],Rt=y.a[Mt],Nt=y.b[Mt],Pt=y.c[Mt];if(m(this,j,ut,it,N,F,R,P,D,h,a))return u(this,y,T,M);if(m(y,Rt,Nt,Pt,Z,Q,L,k,V,d,l))return u(this,y,T,M);if(h.y<h.x){const se=h.y;h.y=h.x,h.x=se,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(d.y<d.x){const se=d.y;d.y=d.x,d.x=se,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<d.x||d.y<h.x?!1:(T&&(d.x>h.x?T.start.copy(l.start):T.start.copy(a.start),d.y<h.y?T.end.copy(l.end):T.end.copy(a.end)),!0)}})();Fn.prototype.distanceToPoint=(function(){const s=new C;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Fn.prototype.distanceToTriangle=(function(){const s=new C,t=new C,e=["a","b","c"],n=new Un,i=new Un;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let d=0;d<3;d++){let u;const f=e[d],m=o[f];this.closestPointToPoint(m,s),u=m.distanceToSquared(s),u<h&&(h=u,a&&a.copy(s),l&&l.copy(m));const _=this[f];o.closestPointToPoint(_,s),u=_.distanceToSquared(s),u<h&&(h=u,a&&a.copy(_),l&&l.copy(s))}for(let d=0;d<3;d++){const u=e[d],f=e[(d+1)%3];n.set(this[u],this[f]);for(let m=0;m<3;m++){const _=e[m],g=e[(m+1)%3];i.set(o[_],o[g]),oh(n,i,s,t);const p=s.distanceToSquared(t);p<h&&(h=p,a&&a.copy(s),l&&l.copy(t))}}return Math.sqrt(h)}})();class en{constructor(t,e,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new Tt,this.invMatrix=new Tt,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new mi),this.alignedSatBounds=new Array(3).fill().map(()=>new mi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}en.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){const u=1*c|2*h|4*d,f=i[u];f.x=c?n.x:e.x,f.y=h?n.y:e.y,f.z=d?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const h=o[c],d=r[c],u=1<<c,f=i[u];h.subVectors(a,f),d.setFromPoints(h,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();en.prototype.intersectsBox=(function(){const s=new mi;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const c=o[l],h=r[l];if(s.setFromBox(c,e),h.isSeparated(s))return!1}return!0}})();en.prototype.intersectsTriangle=(function(){const s=new Fn,t=new Array(3),e=new mi,n=new mi,i=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let u=0;u<3;u++){const f=a[u],m=l[u];if(e.setFromPoints(m,t),f.isSeparated(e))return!1}const c=o.satBounds,h=o.satAxes,d=this.points;for(let u=0;u<3;u++){const f=c[u],m=h[u];if(e.setFromPoints(m,d),f.isSeparated(e))return!1}for(let u=0;u<3;u++){const f=l[u];for(let m=0;m<4;m++){const _=h[m];if(i.crossVectors(f,_),e.setFromPoints(i,t),n.setFromPoints(i,d),e.isSeparated(n))return!1}}return!0}})();en.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();en.prototype.distanceToPoint=(function(){const s=new C;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();en.prototype.distanceToBox=(function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new Un),e=new Array(12).fill().map(()=>new Un),n=new C,i=new C;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const h=a*a,d=o.min,u=o.max,f=this.points;let m=1/0;for(let g=0;g<8;g++){const p=f[g];i.copy(p).clamp(d,u);const x=p.distanceToSquared(i);if(x<m&&(m=x,l&&l.copy(p),c&&c.copy(i),x<h))return Math.sqrt(x)}let _=0;for(let g=0;g<3;g++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const S=(g+1)%3,y=(g+2)%3,T=p<<S|x<<y,M=1<<g|p<<S|x<<y,w=f[T],v=f[M];t[_].set(w,v);const R=s[g],P=s[S],D=s[y],N=e[_],F=N.start,L=N.end;F[R]=d[R],F[P]=p?d[P]:u[P],F[D]=x?d[D]:u[P],L[R]=u[R],L[P]=p?d[P]:u[P],L[D]=x?d[D]:u[P],_++}for(let g=0;g<=1;g++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){i.x=g?u.x:d.x,i.y=p?u.y:d.y,i.z=x?u.z:d.z,this.closestPointToPoint(i,n);const S=i.distanceToSquared(n);if(S<m&&(m=S,l&&l.copy(n),c&&c.copy(i),S<h))return Math.sqrt(S)}for(let g=0;g<12;g++){const p=t[g];for(let x=0;x<12;x++){const S=e[x];oh(p,S,n,i);const y=n.distanceToSquared(i);if(y<m&&(m=y,l&&l.copy(n),c&&c.copy(i),y<h))return Math.sqrt(y)}}return Math.sqrt(m)}})();class IS extends sh{constructor(){super(()=>new Fn)}}const Mn=new IS,xr=new C,_l=new C;function DS(s,t,e={},n=0,i=1/0){const r=n*n,o=i*i;let a=1/0,l=null;if(s.shapecast({boundsTraverseOrder:h=>(xr.copy(t).clamp(h.min,h.max),xr.distanceToSquared(t)),intersectsBounds:(h,d,u)=>u<a&&u<o,intersectsTriangle:(h,d)=>{h.closestPointToPoint(t,xr);const u=t.distanceToSquared(xr);return u<a&&(_l.copy(xr),a=u,l=d),u<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(_l):e.point=_l.clone(),e.distance=c,e.faceIndex=l,e}const wo=parseInt(Or)>=169,LS=parseInt(Or)<=161,Zi=new C,Ji=new C,$i=new C,Co=new bt,Ro=new bt,Po=new bt,ad=new C,ld=new C,cd=new C,yr=new C;function NS(s,t,e,n,i,r,o,a){let l;if(r===Qe?l=s.intersectTriangle(n,e,t,!0,i):l=s.intersectTriangle(t,e,n,r!==on,i),l===null)return null;const c=s.origin.distanceTo(i);return c<o||c>a?null:{distance:c,point:i.clone()}}function hd(s,t,e,n,i,r,o,a,l,c,h){Zi.fromBufferAttribute(t,r),Ji.fromBufferAttribute(t,o),$i.fromBufferAttribute(t,a);const d=NS(s,Zi,Ji,$i,yr,l,c,h);if(d){if(n){Co.fromBufferAttribute(n,r),Ro.fromBufferAttribute(n,o),Po.fromBufferAttribute(n,a),d.uv=new bt;const f=Ge.getInterpolation(yr,Zi,Ji,$i,Co,Ro,Po,d.uv);wo||(d.uv=f)}if(i){Co.fromBufferAttribute(i,r),Ro.fromBufferAttribute(i,o),Po.fromBufferAttribute(i,a),d.uv1=new bt;const f=Ge.getInterpolation(yr,Zi,Ji,$i,Co,Ro,Po,d.uv1);wo||(d.uv1=f),LS&&(d.uv2=d.uv1)}if(e){ad.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,o),cd.fromBufferAttribute(e,a),d.normal=new C;const f=Ge.getInterpolation(yr,Zi,Ji,$i,ad,ld,cd,d.normal);d.normal.dot(s.direction)>0&&d.normal.multiplyScalar(-1),wo||(d.normal=f)}const u={a:r,b:o,c:a,normal:new C,materialIndex:0};if(Ge.getNormal(Zi,Ji,$i,u.normal),d.face=u,d.faceIndex=r,wo){const f=new C;Ge.getBarycoord(yr,Zi,Ji,$i,f),d.barycoord=f}}return d}function ud(s){return s&&s.isMaterial?s.side:s}function ga(s,t,e,n,i,r,o){const a=n*3;let l=a+0,c=a+1,h=a+2;const{index:d,groups:u}=s;s.index&&(l=d.getX(l),c=d.getX(c),h=d.getX(h));const{position:f,normal:m,uv:_,uv1:g}=s.attributes;if(Array.isArray(t)){const p=n*3;for(let x=0,S=u.length;x<S;x++){const{start:y,count:T,materialIndex:M}=u[x];if(p>=y&&p<y+T){const w=ud(t[M]),v=hd(e,f,m,_,g,l,c,h,w,r,o);if(v)if(v.faceIndex=n,v.face.materialIndex=M,i)i.push(v);else return v}}}else{const p=ud(t),x=hd(e,f,m,_,g,l,c,h,p,r,o);if(x)if(x.faceIndex=n,x.face.materialIndex=0,i)i.push(x);else return x}return null}function Ce(s,t,e,n){const i=s.a,r=s.b,o=s.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function US(s,t,e,n,i,r,o,a){const{geometry:l,_indirectBuffer:c}=s;for(let h=n,d=n+i;h<d;h++)ga(l,t,e,h,r,o,a)}function FS(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:l}=s;let c=1/0,h=null;for(let d=n,u=n+i;d<u;d++){let f;f=ga(a,t,e,d,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function BS(s,t,e,n,i,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=s,d=t+s;h<d;h++){let u;if(u=h,Ce(o,u*3,l,c),o.needsUpdate=!0,n(o,u,i,r))return!0}return!1}function OS(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,f,m=!1){const _=u*2;if(Le(_,a)){const g=Ke(u,o),p=$e(_,a);let x=1/0,S=1/0,y=1/0,T=-1/0,M=-1/0,w=-1/0;for(let v=3*g,A=3*(g+p);v<A;v++){let R=n[v];const P=i.getX(R),D=i.getY(R),N=i.getZ(R);P<x&&(x=P),P>T&&(T=P),D<S&&(S=D),D>M&&(M=D),N<y&&(y=N),N>w&&(w=N)}return l[u+0]!==x||l[u+1]!==S||l[u+2]!==y||l[u+3]!==T||l[u+4]!==M||l[u+5]!==w?(l[u+0]=x,l[u+1]=S,l[u+2]=y,l[u+3]=T,l[u+4]=M,l[u+5]=w,!0):!1}else{const g=ze(u),p=Ve(u,o);let x=m,S=!1,y=!1;if(t){if(!x){const R=g/De+f/Ye,P=p/De+f/Ye;S=t.has(R),y=t.has(P),x=!S&&!y}}else S=!0,y=!0;const T=x||S,M=x||y;let w=!1;T&&(w=d(g,f,x));let v=!1;M&&(v=d(p,f,x));const A=w||v;if(A)for(let R=0;R<3;R++){const P=g+R,D=p+R,N=l[P],F=l[P+3],L=l[D],k=l[D+3];l[u+R]=N<L?N:L,l[u+R+3]=F>k?F:k}return A}}}function Ui(s,t,e,n,i){let r,o,a,l,c,h;const d=1/e.direction.x,u=1/e.direction.y,f=1/e.direction.z,m=e.origin.x,_=e.origin.y,g=e.origin.z;let p=t[s],x=t[s+3],S=t[s+1],y=t[s+3+1],T=t[s+2],M=t[s+3+2];return d>=0?(r=(p-m)*d,o=(x-m)*d):(r=(x-m)*d,o=(p-m)*d),u>=0?(a=(S-_)*u,l=(y-_)*u):(a=(y-_)*u,l=(S-_)*u),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),f>=0?(c=(T-g)*f,h=(M-g)*f):(c=(M-g)*f,h=(T-g)*f),r>h||c>o)?!1:((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),r<=i&&o>=n)}function kS(s,t,e,n,i,r,o,a){const{geometry:l,_indirectBuffer:c}=s;for(let h=n,d=n+i;h<d;h++){let u=c?c[h]:h;ga(l,t,e,u,r,o,a)}}function zS(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:l}=s;let c=1/0,h=null;for(let d=n,u=n+i;d<u;d++){let f;f=ga(a,t,e,l?l[d]:d,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function VS(s,t,e,n,i,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=s,d=t+s;h<d;h++){let u;if(u=e.resolveTriangleIndex(h),Ce(o,u*3,l,c),o.needsUpdate=!0,n(o,u,i,r))return!0}return!1}function HS(s,t,e,n,i,r,o){pe.setBuffer(s._roots[t]),wc(0,s,e,n,i,r,o),pe.clearBuffer()}function wc(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=pe,h=s*2;if(Le(h,l)){const u=Ke(s,c),f=$e(h,l);US(t,e,n,u,f,i,r,o)}else{const u=ze(s);Ui(u,a,n,r,o)&&wc(u,t,e,n,i,r,o);const f=Ve(s,c);Ui(f,a,n,r,o)&&wc(f,t,e,n,i,r,o)}}const GS=["x","y","z"];function WS(s,t,e,n,i,r){pe.setBuffer(s._roots[t]);const o=Cc(0,s,e,n,i,r);return pe.clearBuffer(),o}function Cc(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:l}=pe;let c=s*2;if(Le(c,a)){const d=Ke(s,l),u=$e(c,a);return FS(t,e,n,d,u,i,r)}else{const d=ih(s,l),u=GS[d],m=n.direction[u]>=0;let _,g;m?(_=ze(s),g=Ve(s,l)):(_=Ve(s,l),g=ze(s));const x=Ui(_,o,n,i,r)?Cc(_,t,e,n,i,r):null;if(x){const T=x.point[u];if(m?T<=o[g+d]:T>=o[g+d+3])return x}const y=Ui(g,o,n,i,r)?Cc(g,t,e,n,i,r):null;return x&&y?x.distance<=y.distance?x:y:x||y||null}}const Io=new ie,Rs=new Fn,Ps=new Fn,vr=new Tt,dd=new en,Do=new en;function XS(s,t,e,n){pe.setBuffer(s._roots[t]);const i=Rc(0,s,e,n);return pe.clearBuffer(),i}function Rc(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=pe;let l=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),dd.set(e.boundingBox.min,e.boundingBox.max,n),i=dd),Le(l,o)){const h=t.geometry,d=h.index,u=h.attributes.position,f=e.index,m=e.attributes.position,_=Ke(s,a),g=$e(l,o);if(vr.copy(n).invert(),e.boundsTree)return _e(s,r,Do),Do.matrix.copy(vr),Do.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Do.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let S=_*3,y=(g+_)*3;S<y;S+=3)if(Ce(Ps,S,d,u),Ps.needsUpdate=!0,x.intersectsTriangle(Ps))return!0;return!1}});{const p=ma(e);for(let x=_*3,S=(g+_)*3;x<S;x+=3){Ce(Rs,x,d,u),Rs.a.applyMatrix4(vr),Rs.b.applyMatrix4(vr),Rs.c.applyMatrix4(vr),Rs.needsUpdate=!0;for(let y=0,T=p*3;y<T;y+=3)if(Ce(Ps,y,f,m),Ps.needsUpdate=!0,Rs.intersectsTriangle(Ps))return!0}}}else{const h=ze(s),d=Ve(s,a);return _e(h,r,Io),!!(i.intersectsBox(Io)&&Rc(h,t,e,n,i)||(_e(d,r,Io),i.intersectsBox(Io)&&Rc(d,t,e,n,i)))}}const Lo=new Tt,xl=new en,Sr=new en,qS=new C,jS=new C,YS=new C,KS=new C;function ZS(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),xl.set(t.boundingBox.min,t.boundingBox.max,e),xl.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,u=Mn.getPrimitive(),f=Mn.getPrimitive();let m=qS,_=jS,g=null,p=null;i&&(g=YS,p=KS);let x=1/0,S=null,y=null;return Lo.copy(e).invert(),Sr.matrix.copy(Lo),s.shapecast({boundsTraverseOrder:T=>xl.distanceToBox(T),intersectsBounds:(T,M,w)=>w<x&&w<o?(M&&(Sr.min.copy(T.min),Sr.max.copy(T.max),Sr.needsUpdate=!0),!0):!1,intersectsRange:(T,M)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:v=>Sr.distanceToBox(v),intersectsBounds:(v,A,R)=>R<x&&R<o,intersectsRange:(v,A)=>{for(let R=v,P=v+A;R<P;R++){Ce(f,3*R,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let D=T,N=T+M;D<N;D++){Ce(u,3*D,c,l),u.needsUpdate=!0;const F=u.distanceToTriangle(f,m,g);if(F<x&&(_.copy(m),p&&p.copy(g),x=F,S=D,y=R),F<r)return!0}}}});{const w=ma(t);for(let v=0,A=w;v<A;v++){Ce(f,3*v,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let R=T,P=T+M;R<P;R++){Ce(u,3*R,c,l),u.needsUpdate=!0;const D=u.distanceToTriangle(f,m,g);if(D<x&&(_.copy(m),p&&p.copy(g),x=D,S=R,y=v),D<r)return!0}}}}}),Mn.releasePrimitive(u),Mn.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=S,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Lo),_.applyMatrix4(Lo),i.distance=_.sub(i.point).length(),i.faceIndex=y),n)}function JS(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,l,c=0;const h=s._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,f,m=!1){const _=u*2;if(Le(_,a)){const g=Ke(u,o),p=$e(_,a);let x=1/0,S=1/0,y=1/0,T=-1/0,M=-1/0,w=-1/0;for(let v=g,A=g+p;v<A;v++){const R=3*s.resolveTriangleIndex(v);for(let P=0;P<3;P++){let D=R+P;D=n?n[D]:D;const N=i.getX(D),F=i.getY(D),L=i.getZ(D);N<x&&(x=N),N>T&&(T=N),F<S&&(S=F),F>M&&(M=F),L<y&&(y=L),L>w&&(w=L)}}return l[u+0]!==x||l[u+1]!==S||l[u+2]!==y||l[u+3]!==T||l[u+4]!==M||l[u+5]!==w?(l[u+0]=x,l[u+1]=S,l[u+2]=y,l[u+3]=T,l[u+4]=M,l[u+5]=w,!0):!1}else{const g=ze(u),p=Ve(u,o);let x=m,S=!1,y=!1;if(t){if(!x){const R=g/De+f/Ye,P=p/De+f/Ye;S=t.has(R),y=t.has(P),x=!S&&!y}}else S=!0,y=!0;const T=x||S,M=x||y;let w=!1;T&&(w=d(g,f,x));let v=!1;M&&(v=d(p,f,x));const A=w||v;if(A)for(let R=0;R<3;R++){const P=g+R,D=p+R,N=l[P],F=l[P+3],L=l[D],k=l[D+3];l[u+R]=N<L?N:L,l[u+R+3]=F>k?F:k}return A}}}function $S(s,t,e,n,i,r,o){pe.setBuffer(s._roots[t]),Pc(0,s,e,n,i,r,o),pe.clearBuffer()}function Pc(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=pe,h=s*2;if(Le(h,l)){const u=Ke(s,c),f=$e(h,l);kS(t,e,n,u,f,i,r,o)}else{const u=ze(s);Ui(u,a,n,r,o)&&Pc(u,t,e,n,i,r,o);const f=Ve(s,c);Ui(f,a,n,r,o)&&Pc(f,t,e,n,i,r,o)}}const QS=["x","y","z"];function tM(s,t,e,n,i,r){pe.setBuffer(s._roots[t]);const o=Ic(0,s,e,n,i,r);return pe.clearBuffer(),o}function Ic(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:l}=pe;let c=s*2;if(Le(c,a)){const d=Ke(s,l),u=$e(c,a);return zS(t,e,n,d,u,i,r)}else{const d=ih(s,l),u=QS[d],m=n.direction[u]>=0;let _,g;m?(_=ze(s),g=Ve(s,l)):(_=Ve(s,l),g=ze(s));const x=Ui(_,o,n,i,r)?Ic(_,t,e,n,i,r):null;if(x){const T=x.point[u];if(m?T<=o[g+d]:T>=o[g+d+3])return x}const y=Ui(g,o,n,i,r)?Ic(g,t,e,n,i,r):null;return x&&y?x.distance<=y.distance?x:y:x||y||null}}const No=new ie,Is=new Fn,Ds=new Fn,Mr=new Tt,fd=new en,Uo=new en;function eM(s,t,e,n){pe.setBuffer(s._roots[t]);const i=Dc(0,s,e,n);return pe.clearBuffer(),i}function Dc(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=pe;let l=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),fd.set(e.boundingBox.min,e.boundingBox.max,n),i=fd),Le(l,o)){const h=t.geometry,d=h.index,u=h.attributes.position,f=e.index,m=e.attributes.position,_=Ke(s,a),g=$e(l,o);if(Mr.copy(n).invert(),e.boundsTree)return _e(s,r,Uo),Uo.matrix.copy(Mr),Uo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Uo.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let S=_,y=g+_;S<y;S++)if(Ce(Ds,3*t.resolveTriangleIndex(S),d,u),Ds.needsUpdate=!0,x.intersectsTriangle(Ds))return!0;return!1}});{const p=ma(e);for(let x=_,S=g+_;x<S;x++){const y=t.resolveTriangleIndex(x);Ce(Is,3*y,d,u),Is.a.applyMatrix4(Mr),Is.b.applyMatrix4(Mr),Is.c.applyMatrix4(Mr),Is.needsUpdate=!0;for(let T=0,M=p*3;T<M;T+=3)if(Ce(Ds,T,f,m),Ds.needsUpdate=!0,Is.intersectsTriangle(Ds))return!0}}}else{const h=ze(s),d=Ve(s,a);return _e(h,r,No),!!(i.intersectsBox(No)&&Dc(h,t,e,n,i)||(_e(d,r,No),i.intersectsBox(No)&&Dc(d,t,e,n,i)))}}const Fo=new Tt,yl=new en,br=new en,nM=new C,iM=new C,sM=new C,rM=new C;function oM(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),yl.set(t.boundingBox.min,t.boundingBox.max,e),yl.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,u=Mn.getPrimitive(),f=Mn.getPrimitive();let m=nM,_=iM,g=null,p=null;i&&(g=sM,p=rM);let x=1/0,S=null,y=null;return Fo.copy(e).invert(),br.matrix.copy(Fo),s.shapecast({boundsTraverseOrder:T=>yl.distanceToBox(T),intersectsBounds:(T,M,w)=>w<x&&w<o?(M&&(br.min.copy(T.min),br.max.copy(T.max),br.needsUpdate=!0),!0):!1,intersectsRange:(T,M)=>{if(t.boundsTree){const w=t.boundsTree;return w.shapecast({boundsTraverseOrder:v=>br.distanceToBox(v),intersectsBounds:(v,A,R)=>R<x&&R<o,intersectsRange:(v,A)=>{for(let R=v,P=v+A;R<P;R++){const D=w.resolveTriangleIndex(R);Ce(f,3*D,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let N=T,F=T+M;N<F;N++){const L=s.resolveTriangleIndex(N);Ce(u,3*L,c,l),u.needsUpdate=!0;const k=u.distanceToTriangle(f,m,g);if(k<x&&(_.copy(m),p&&p.copy(g),x=k,S=N,y=R),k<r)return!0}}}})}else{const w=ma(t);for(let v=0,A=w;v<A;v++){Ce(f,3*v,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let R=T,P=T+M;R<P;R++){const D=s.resolveTriangleIndex(R);Ce(u,3*D,c,l),u.needsUpdate=!0;const N=u.distanceToTriangle(f,m,g);if(N<x&&(_.copy(m),p&&p.copy(g),x=N,S=R,y=v),N<r)return!0}}}}}),Mn.releasePrimitive(u),Mn.releasePrimitive(f),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=S,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Fo),_.applyMatrix4(Fo),i.distance=_.sub(i.point).length(),i.faceIndex=y),n)}function pd(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}const Bo=new en,Oo=new Fi,md=new C,gd=new Tt,_d=new C,vl=["getX","getY","getZ"];class $s extends wS{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const a=new $s(e,{...n,[nh]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const c=e.getIndex();if(c===null){const h=new ue(t.index,1,!1);e.setIndex(h)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){const d=c[h],u=new Uint32Array(d),f=new Uint16Array(d);for(let m=0,_=d.byteLength/Ye;m<_;m++){const g=De*m,p=2*g;Le(p,f)||(u[g+6]=u[g+6]/De-m)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=(r?r[t]:t)*3;let h=c+0,d=c+1,u=c+2;a&&(h=a[h],d=a[d],u=a[u]);for(let f=0;f<3;f++){const m=o[vl[f]](h),_=o[vl[f]](d),g=o[vl[f]](u);let p=m;_<p&&(p=_),g<p&&(p=g);let x=m;_>x&&(x=_),g>x&&(x=g),e[n+f]=p,e[n+f+3]=x}return e}computePrimitiveBounds(t,e,n){const i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=o.array,h=o.offset||0;let d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);const u=["getX","getY","getZ"],f=n.offset;for(let m=t,_=t+e;m<_;m++){const p=(r?r[m]:m)*3,x=(m-f)*6;let S=p+0,y=p+1,T=p+2;a&&(S=a[S],y=a[y],T=a[T]),l||(S=S*d+h,y=y*d+h,T=T*d+h);for(let M=0;M<3;M++){let w,v,A;l?(w=o[u[M]](S),v=o[u[M]](y),A=o[u[M]](T)):(w=c[S+M],v=c[y+M],A=c[T+M]);let R=w;v<R&&(R=v),A<R&&(R=A);let P=w;v>P&&(P=v),A>P&&(P=A);const D=(P-R)/2,N=M*2;n[x+N+0]=R+D,n[x+N+1]=D+(Math.abs(R)+D)*jo}}return n}raycastObject3D(t,e,n=[]){const{material:i}=t;if(i===void 0)return;gd.copy(t.matrixWorld).invert(),Oo.copy(e.ray).applyMatrix4(gd),_d.setFromMatrixScale(t.matrixWorld),md.copy(Oo.direction).multiply(_d);const r=md.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let l=this.raycastFirst(Oo,i,o,a);l=pd(l,t,e),l&&n.push(l)}else{const l=this.raycast(Oo,i,o,a);for(let c=0,h=l.length;c<h;c++){const d=pd(l[c],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?JS:OS)(this,t)}raycast(t,e=Ln,n=0,i=1/0){const r=this._roots,o=[],a=this.indirect?$S:HS;for(let l=0,c=r.length;l<c;l++)a(this,l,e,t,o,n,i);return o}raycastFirst(t,e=Ln,n=0,i=1/0){const r=this._roots;let o=null;const a=this.indirect?tM:WS;for(let l=0,c=r.length;l<c;l++){const h=a(this,l,e,t,n,i);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1;const i=this._roots,r=this.indirect?eM:XS;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=Mn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?VS:BS});return Mn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=Mn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{const _=this.resolveTriangleIndex(m);Ce(o,_*3,a,l)}:m=>{Ce(o,m*3,a,l)},h=Mn.getPrimitive(),d=t.geometry.index,u=t.geometry.attributes.position,f=t.indirect?m=>{const _=t.resolveTriangleIndex(m);Ce(h,_*3,d,u)}:m=>{Ce(h,m*3,d,u)};if(r){if(!(t instanceof $s))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const m=(_,g,p,x,S,y,T,M)=>{for(let w=p,v=p+x;w<v;w++){f(w),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let A=_,R=_+g;A<R;A++)if(c(A),o.needsUpdate=!0,r(o,h,A,w,S,y,T,M))return!0}return!1};if(i){const _=i;i=function(g,p,x,S,y,T,M,w){return _(g,p,x,S,y,T,M,w)?!0:m(g,p,x,S,y,T,M,w)}}else i=m}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return Bo.set(t.min,t.max,e),Bo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Bo.intersectsBox(n),intersectsTriangle:n=>Bo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?oM:ZS)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return DS(this,t,e,n,i)}}const xd=new ie,yd=new Tt,Sl=new C;class aM extends he{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}getVertexPosition(...t){return fe.prototype.getVertexPosition.call(this,...t)}constructor(t,e,n=10,i=0){super(),this.material=e,this.geometry=new xe,this.name="BVHRootHelper",this.depth=n,this.displayParents=!1,this.bvh=t,this.displayEdges=!0,this._group=i}raycast(){}update(){const t=this.bvh;this.geometry.dispose(),this.visible=!1,t&&(this.geometry=this.getGeometry(t),this.visible=!0)}getGeometry(t){const e=this._group;let n=null;if(e!==-1)n=this.getBVHBoundPositions(t,e);else{const o=t._roots.map((c,h)=>this.getBVHBoundPositions(t,h)),a=o.reduce((c,h)=>c+h.length,0);n=new Float32Array(a);let l=0;o.forEach(c=>{n.set(c,l),l+=c.length})}const i=this.getBVHBoundIndices(n),r=new xe;return r.setIndex(new ue(i,1,!1)),r.setAttribute("position",new ue(n,3,!1)),r}getBVHBoundIndices(t){const e=t.length/24;let n,i;this.displayEdges?i=new Uint8Array([0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]):i=new Uint8Array([0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),t.length>65535?n=new Uint32Array(i.length*e):n=new Uint16Array(i.length*e);const r=i.length;for(let o=0;o<e;o++){const a=o*8,l=o*r;for(let c=0;c<r;c++)n[l+c]=a+i[c]}return n}getBVHBoundPositions(t,e=0,n=null){const i=this.depth-1,r=this.displayParents;let o=0;t.traverse((c,h)=>{if(c>=i||h)return o++,!0;r&&o++},e);let a=0;const l=new Float32Array(24*o);return t.traverse((c,h,d)=>{const u=c>=i||h;if(u||r){_e(0,d,xd);const{min:f,max:m}=xd;for(let _=-1;_<=1;_+=2){const g=_<0?f.x:m.x;for(let p=-1;p<=1;p+=2){const x=p<0?f.y:m.y;for(let S=-1;S<=1;S+=2){const y=S<0?f.z:m.z;Sl.set(g,x,y),n&&Sl.applyMatrix4(n),Sl.toArray(l,a),a+=3}}}return u}},e),l}}class ah extends In{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(t){this.edgeMaterial.opacity=t,this.meshMaterial.opacity=t}get objectIndex(){return console.warn('BVHHelper: "objectIndex" has been renamed "instanceId".'),this.instanceId}set objectIndex(t){console.warn('BVHHelper: "objectIndex" has been renamed "instanceId".'),this.instanceId=t}constructor(t=null,e=null,n=10){t instanceof $s&&(n=e||10,e=t,t=null),typeof e=="number"&&(n=e,e=null),super(),this.name="BVHHelper",this.depth=n,this.mesh=t,this.bvh=e,this.displayParents=!1,this.displayEdges=!0,this.instanceId=0,this._roots=[];const i=new zr({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),r=new Sn({color:65416,transparent:!0,opacity:.3,depthWrite:!1});r.color=i.color,this.edgeMaterial=i,this.meshMaterial=r,this.update()}update(){const t=this.mesh,e=this.instanceId;let n=this.bvh||t.boundsTree||t.geometry&&t.geometry.boundsTree||null;if(t&&t.isBatchedMesh&&t.boundsTrees&&!n&&e>=0){const r=t._drawInfo[e];r&&(n=t.boundsTrees[r.geometryIndex]||n)}const i=n?n._roots.length:0;for(;this._roots.length>i;){const r=this._roots.pop();r.geometry.dispose(),this.remove(r)}for(let r=0;r<i;r++){const{depth:o,edgeMaterial:a,meshMaterial:l,displayParents:c,displayEdges:h}=this;if(r>=this._roots.length){const u=new aM(n,a,o,r);this.add(u),this._roots.push(u)}const d=this._roots[r];d.bvh=n,d.depth=o,d.displayParents=c,d.displayEdges=h,d.material=h?a:l,d.update()}}updateMatrixWorld(...t){const e=this.mesh,n=this.parent,i=this.instanceId;e!==null&&(e.updateWorldMatrix(!0,!1),n?this.matrix.copy(n.matrixWorld).invert().multiply(e.matrixWorld):this.matrix.copy(e.matrixWorld),(e.isInstancedMesh||e.isBatchedMesh)&&i>=0&&(e.getMatrixAt(i,yd),this.matrix.multiply(yd)),this.matrix.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(...t)}copy(t){this.depth=t.depth,this.mesh=t.mesh,this.bvh=t.bvh,this.opacity=t.opacity,this.color.copy(t.color)}clone(){return new ah().copy(this)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();const t=this.children;for(let e=0,n=t.length;e<n;e++)t[e].geometry.dispose()}}const Ls={Mesh:fe.prototype.raycast,Line:Qs.prototype.raycast,LineSegments:la.prototype.raycast,LineLoop:Yc.prototype.raycast,Points:Kc.prototype.raycast,BatchedMesh:gm.prototype.raycast},He=new fe,ko=[];function lM(s,t){if(this.isBatchedMesh)cM.call(this,s,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,s,t);else{let n;if(this instanceof fe)n=Ls.Mesh;else if(this instanceof la)n=Ls.LineSegments;else if(this instanceof Yc)n=Ls.LineLoop;else if(this instanceof Qs)n=Ls.Line;else if(this instanceof Kc)n=Ls.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,s,t)}}}function cM(s,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,r=this.matrixWorld;He.material=this.material,He.geometry=this.geometry;const o=He.geometry.boundsTree,a=He.geometry.drawRange;He.geometry.boundingSphere===null&&(He.geometry.boundingSphere=new tn);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const h=n[l].geometryIndex;if(He.geometry.boundsTree=e[h],this.getMatrixAt(l,He.matrixWorld).premultiply(r),!He.geometry.boundsTree){this.getBoundingBoxAt(h,He.geometry.boundingBox),this.getBoundingSphereAt(h,He.geometry.boundingSphere);const d=i[h];He.geometry.setDrawRange(d.start,d.count)}He.raycast(s,ko);for(let d=0,u=ko.length;d<u;d++){const f=ko[d];f.object=this,f.batchId=l,t.push(f)}ko.length=0}He.geometry.boundsTree=o,He.geometry.drawRange=a,He.material=null,He.geometry=null}else Ls.BatchedMesh.call(this,s,t)}const hM="/3dscene/game/assets/break-DIHavPXx.png",uM="/3dscene/game/assets/fly-D71dHlOE.png",vd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAPAUlEQVR4AeydC3rbuA6FnbuxO11Z25V1ZmUe/AmZkWXLliU+APL0E6o3CR7wF0jZSf530T8pIAU2FRAgm9LohBS4XASIeoEUeKKAAHkijk5JAQGiPiAFnihQEZAnteqUFAiigAAJEii52UcBAdJHd9UaRAEBEiRQcrOPAgKkj+6qNYgCMQEJIq7cjK+AAIkfQ7WgogICpKK4Kjq+AgIkfgzVgooKCJCK4qro+AoIkFUMtSsFlgoIkKUa2n6qwPV6/SvZH1tjtrpZOIb9sqO/nhYW5KQACRKonm7S2c3+mA/Z/rJtzFY3C8ewn3b0p93DEhoWAWKR1PJYAevdZIyrnaXD0/Ft8+2Fe4ElJCgC5O14j39DAiNni1IN/galVIEtyhEgLVT+qiPE/wYHcwfgOJoxXrWTbEL5r65zcV6AuAiDDycSHDzpazv0OXRL9dWu61T5AuSUfOPcnDprCziWopFNamWqZT2HtwXIYenGubETHFlA18MtAZLDNOna4OAJ3jpz3KhtPriFRIDchCrqzim/PXRO5iS8HDjVkBo3C5AaqgYp057cnjpl1yy2FTIBsqXMHMdddUpnwH72AAHyKUOb/6wDMJS4sTY139divnjKHtlBV8DilABBhYpmHREg+AIfX9lgvH9jdj4vfBWDCXNFb26K/v/NnpMdE6OlBi9bLUBeSnTsAgs0HT7DsCfoPD0BCWvxdN/j0+VyrPln7kKHM/cXvVeAFJXzcjEwPjOGFfvT7Egn5B4+QKsGiflYrWxr89mF9p8to9j9AqSYlBfgoOORNUoEGUisL19LlFWwlfWLska7abMAKRRvCypw/CxU3LKYGkMul/OPZaO9bAuQApGoCEf2jmwCgHl/9LUyyGARrpE51hIBCcO39fEj+y464BHHW9+jDLJQ3DIBE+zPt0+2zdAGs80ra45/2uKWPO9YHqq5jX9X+zdTNqmp58uypwfEOhudjo5/NbV4QpMNeMJms8MXtjn+aXYPC9Dk6y+N/5FNzkDyd2N/w1Y3NSDWy+lkRzs50GC9gn8Wkl5+h6p3SkAMDLLGUTA8BRhIaIcnn0r44ibDTQcIcFgE6VQ9n/7mQrEF2K1ZV7Lh3kL/2Xthj+s+Pj7OAlLM7akAsV4EFMBRTEBHBZFN9kLipgM+0M+Vb1MBYsFgkm2rYZddkHh6Qj+IhKvsNg0glj14upJBHsRkqENAwhu2V2119aReRMCVX9MAYgEYPXtYE78X4AASHgrfB1cbv1f7HnZ/e8tuUwCSsoeHDtDaB7LJQ0hSR3T1tG4tzp767gHZc1e8a2bKHuvobEJiF3rKImSPhzCbn92W4QGZOHssOxWQMORi6PV9PGURL5C4zGbDA/LdG7QBHEBy85Q2SNjv3TnJHr19eNhDZgBEP/twG3qyCVB8HzVIfthOrw4KHDf+mC9ulhkA4cnpRnAnjtxBYn71GGq5hsM0uTQFhAplbhS4gcSyyN9mH+Zdq0ziHg7TYgpAWgUcPaMZkNxkWIOE4VbtbBICDoKpDIIKc9vdK3CDhDlBDUh4WP1I5YdQXYCECFNVJ/k28E0WoTY6sRlDrhKgZDCAg22qCGEzAFIiwCGCecLJuyySyzJIfpllUN7REhC4Higw9nOxYdajABJGcKeOPswiS18NEkDBgIV5CgYAS+MYMNjlH6y5PiQYue3DA/Lx9cM3oYOUg1V5vZlF1vWiaTIAWBpvwobSenhAUnB5yqVNrTYUuJuHbFw31eEpAOFpN1VUDzb2er0KkpV2UwCS2sz4OG1qtaHA7mHWxv3DHZ4GkJRFDgy1hou5GvSGAtMAgiYGCR+ADTWJpF0FTUOslZhTAULbDRKGWoIEMWQvFZgOEBRJkGi4hRiypwpMCQiKGCQMtwQJYsg2FZgWEBQBEjM+GQYUjMPtTDW5V2BqQHJ0DJL8afDssGhuljtFWguQJEReLWGx7dmAcfVbDXNMeq4FyAv1DZJlduENGEMx7MWdOj2CAgLkjSgaLHwZ7xEwGpq8oWOkSwXIiWgtgOGr3cvhWHdgDjYrqt8Hm/v6NgHyWqPdVxgwObusgdldRs8LzX8BsgqAAFkJUnLXOlwGxjY/lhmmZDUqq6ICAqSiuOuiPz4+PAOj7LEOmO0LEBOh17IExnzo3UH1iteCsF4EyFqRfvtROmg/hTrULEA6iL5RZe/fIdw7g23I0vewAOmr/7L2rj+LYcM9AbKMRtoWIEkIraTAIwUEyCNVGh9z8MsSlD02Yi5ANoRpfLjr8Mra6uQFgXnibBEgzgIid3wpIEB8xUPeOFNAgPgIiF7x+ojDnRcC5E6SLge6zkH0inc75gJkWxudGUmBg20RIAeFK3WbXvGWUrJOOQKkjq7vlNp1eGWO6hWvibC1CJAtZXRcCpgCAsRE6LzoDVbnADyrXoA8U6fNua5DLL3Beh7kPYA8L0FnpcDACgiQjsHVG6yO4u+sOiwgdK5kv2y9tK5Dlp2658t6+6o3WDkSG+tQgBgI/LniP7a+Wnv+JOPPhi3t8zzXmPEb3O0yLVLgmAIhALGO/gmGNREo3nnq/rR7WQSKiaflfQU6A/LaYevddO53wVgX7BUUveJdR8rZvmtAEhwMn0rJBigAV6q8s+W8kw3P1nV3v17x3klyd8AtIBXgyI33Bkn2S2uHCrgEpCIcOQTdIbE2ds0eJoR+Dt1EeLW4A8Q6DkOgksOqLQ2AhLnN1vnax3sDole8OyLsDhDzuQwcVtCOhbdjxuS1d2fd4aou6aGAK0Csp5I9eujAZyet69YbrB6RfrNOV4CY7z07DUOulpB0zVp6g2W9bcfiBhDLHnQYbIfb1S5pDUm1hqjgMgq4AcSa0xsOc+FzAZKqk/f0MPisrNN/eoO1U3hPgOx0ucllTyfvBTzo/TDQG6ydQfQESM/5x5ZcxSbvZI1kZKeWb+q22qbjOxTwBMgOd7tcwpDr8OR9AQVgYL2zRxcRo1YqQPZF7m1IVmB4g0JzkH1xvwiQnULZZbsgMTD44a2rXe82W+gVr0Vn5yJAdgqVLgMSOn7a/VoZFEzqma8Axpn5xVeB+t+NAp4A+e1GleeOAIMxcWWNAQzmbRi11QoNr7aUeXDcEyAP3HN9CCiwKGBkMfWKNyuxY+0GkDQu1tNtR9B0STsF3ACSmhxlmJXcDbny+HmTWyFdAZKyiFuxYjv27T3zpl/fe9p4qoArQJKnP9Jaq3oK8DYu2typnhpPSnYHSMoimos8CVqhU3odvUNId4Dgs0FCFhEkiFHPGGopi7zQ1yUg+CxIUKG68Zq6eiWRK3ALCKIKElSoa/aJ53lI6rrYtXTXgKBMgkSvfxGjjmmo9URX94Dgu0HCa0lBghh1TBP2DV1DAILvggQVqhlZhIdQtQqiFhwGEAQWJKhQzfTZyANpQwGC/wkSXgOzKyurgLuhVtnmvV9aOEBookHyt9mHbeuzEhOh4MJQS5+NLAQNCUj23yAhk2jyngUps1YWWegYGhDaYZAwuRQkiFHGyCJoWqa04KWEBwT9BQkqFDVN2JOcQwBCWxIkDLnYlZ1XYPSh1i6FhgGE1hokTNqBhDWHZMcVYKg1/YR9KEDoC0BiJkgQ47xN/z2t4QDJfSJBosl7FuTg+nq9Tj1hHxYQ+oNBQnAFCWIct6kn7EMDQp8QJKhw2qadsB8D5LTebQtIkDAvaVvxOLUxYScbj9OinS2ZAhC0MEgifD2Ft2+AjOG2J5syi0wDSO5pBgqdz9O8BCh+m18sP+w/QOYYlt12sbYJ+3RvtaYDhJ5mnZDhQm9IAAAgMPzBtaX19m/pS95mqDXVZyNTAkK0O0KyBINt3Lkz849zHiGZaqjlDpC7nlLxgHVCntytOiEdnmyBsf2yZcm/Xde+LKzcBWQRdCtXouOSpgaEuNAJzfjZkhqg0Llv5hfU+abV8OtNF+4un+azkekByaE3SH6ZlQIFMMgU2KmnrflEWVh21ct6iqGWAFl1N+uQS1DeeXrTiTGgwNhelX5s13zizduxm+vdxVBr+Am7ANnoQNYpAQUjq9BBgQWj4y+NcwCRjXMbpZ46TN2nCqhw8/BZZCZADvcPg4XPJoAFyyDkNedqQfHts/nAUK16Pd8V7tsgi+DXvqsDXiVAYgXNZRaxDxCHHWoJkECAWBYhg7iEJJCMb7kqQN6Sq//FBonHIQ1DrSGziADp3+ePeMCLgSP31bxnyO9pCZAiXaZtIZZFGGphbSt+UZvNRTxmtxdePz8tQJ7r4/msy7mIQTLUUEuAeEbgiW8pi7iE5Inb4U4JkHAh+89hg4QhjbehFhN2/PrP0cBbAiRw8JLryiJJiBorAVJD1ZJlvijLsggZBHtxZdvTNhcZ4q2WAGnbb2rV5jGLMNQKP2EXILW6bMNyUxbxCEn4LzMKkIYduWZVBgkTY29DrfBZRIDU7LXty1YWKay5ACksaM/iLIuQQbBdbjS6KHQWESCNekmragwSj9/TatX84vUIkOKSuijQGyRhJ+sCxEV/LuuEZRGGWVjZgicsTYCMG3SPE/ZwaguQcCHb53DKIr0gWTsZ9gNDAbIO5UD7BomXz0bCDvcEyEBAbDTFSxbZcM/3YQHiOz6nvbMswtMbO13WiQL+OXFv11sFSFf5m1WuLHJQagFyULhIt6Us0g0Sq5+5UCHJ2hYjQNrq3a221El7DLW6gVlCbAFSQsU4ZTTvrAnMOAqtPBUgK0FG3rXOSgbBWjWzOZClGyZASivqvDyDhO9ptYCEX+oddu6RwyhAshJzrVs82VvUUTZqD0oTIA9EGf2QZREyCJmkVlP50xDUUav8ZuUKkGZS+6qoEiRAMQwcREyAoMKkBiRm/AWtEsMh5hxDwUG3ECCoMLkZJPzlrKOg5KxRc8jWLUICpJv0/ipegUJWofOvHeUYxnkyBsb++roh9ksBMoQYasSXAgkUsgqd33ZvFo5hnB8WjC8lLhcBkpXQWgo8UECAPBBFh6RAVkCAZCW0lgIPFBAgD0TRISmQFQgASHZVaynQXgEB0l5z1RhIAQESKFhytb0CAqS95qoxkAICJFCw5Gp7BeYGpL3eqjGYAgIkWMDkblsFBEhbvVVbMAUESLCAyd22CgiQtnqrtmAKCJBKAVOxYyjwLwAAAP//SHVxOQAAAAZJREFUAwC7wCXN4JhaXwAAAABJRU5ErkJggg==",dM="/3dscene/game/assets/vehicle-D-kI2HaL.png",fM="/3dscene/game/assets/view-DEoCKGng.png";class pM{constructor(t,e,n,i){this.pointerId=null,this.center={x:0,y:0},this.onPointerDown=o=>{if(this.pointerId!==null)return;this.pointerId=o.pointerId;const a=this.baseEl.parentElement.getBoundingClientRect();this.center={x:a.left+a.width/2,y:a.top+a.height/2},this.baseEl.parentElement.setPointerCapture(o.pointerId),o.preventDefault(),this.updateStick(o.clientX,o.clientY)},this.onPointerMove=o=>{o.pointerId===this.pointerId&&(o.preventDefault(),this.updateStick(o.clientX,o.clientY))},this.onPointerUp=o=>{o.pointerId===this.pointerId&&(this.pointerId=null,this.stickEl.style.transform="translate(-50%, -50%)",this.onEnd())},this.radius=e/2,this.onMove=n,this.onEnd=i,this.baseEl=document.createElement("div"),Object.assign(this.baseEl.style,{position:"absolute",left:"50%",bottom:"50%",transform:"translate(-50%, 50%)",width:`${e}px`,height:`${e}px`,borderRadius:"50%",border:"2px solid rgba(0,0,0,0.5)",backgroundColor:"rgba(0,0,0,0.2)",boxSizing:"border-box",pointerEvents:"none"}),t.appendChild(this.baseEl);const r=e*.2;this.stickEl=document.createElement("div"),Object.assign(this.stickEl.style,{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:`${r}px`,height:`${r}px`,borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.7)",pointerEvents:"none"}),this.baseEl.appendChild(this.stickEl),t.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),t.addEventListener("pointermove",this.onPointerMove,{passive:!1}),t.addEventListener("pointerup",this.onPointerUp,{passive:!1}),t.addEventListener("pointercancel",this.onPointerUp,{passive:!1})}updateStick(t,e){const n=t-this.center.x,i=e-this.center.y,r=Math.sqrt(n*n+i*i),o=Math.min(r,this.radius),a=Math.atan2(i,n),l=Math.cos(a)*o,c=Math.sin(a)*o;this.stickEl.style.transform=`translate(calc(-50% + ${l}px), calc(-50% + ${c}px))`;const h=r>0?o/this.radius/r:0;this.onMove({vector:{x:n*h,y:-i*h},distance:o})}destroy(){const t=this.baseEl.parentElement;t&&(t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp)),this.baseEl.remove()}}class mM{constructor(t,e){this.joystick=null,this.prevJoyState={dirX:0,dirY:0,shift:!1},this.joystickZoneEl=null,this.lookAreaEl=null,this.jumpBtnEl=null,this.flyBtnEl=null,this.viewBtnEl=null,this.vehicleBtnEl=null,this.lookPointerId=null,this.isLookDown=!1,this.lastTouchX=0,this.lastTouchY=0,this.onPointerDown=n=>{n.pointerType==="touch"&&(this.isLookDown=!0,this.lookPointerId=n.pointerId,this.lastTouchX=n.clientX,this.lastTouchY=n.clientY,this.lookAreaEl?.setPointerCapture?.(n.pointerId),n.preventDefault())},this.onPointerMove=n=>{if(!this.isLookDown||n.pointerId!==this.lookPointerId)return;const i=n.clientX-this.lastTouchX,r=n.clientY-this.lastTouchY;this.lastTouchX=n.clientX,this.lastTouchY=n.clientY,this.setInput({lookDeltaX:i,lookDeltaY:r}),n.preventDefault()},this.onPointerUp=n=>{n.pointerId===this.lookPointerId&&(this.isLookDown=!1,this.lookPointerId=null,this.lookAreaEl?.releasePointerCapture?.(n.pointerId))},this.setInput=t,this.controls=e}async init(t){const e=t?.joystick??!0,n=t?.jump??!0,i=t?.fly??!0,r=t?.view??!0,o=t?.vehicle??!0;this.controls.maxPolarAngle=Math.PI*(300/360),this.controls.touches={ONE:null,TWO:null};const a=120,l=document.body;e&&(this.joystickZoneEl=document.createElement("div"),this.joystickZoneEl.id="joy-zone",Object.assign(this.joystickZoneEl.style,{position:"absolute",left:"16px",bottom:"16px",width:`${a+40}px`,height:`${a+40}px`,touchAction:"none",zIndex:"999",pointerEvents:"auto",WebkitUserSelect:"none",userSelect:"none"}),l.appendChild(this.joystickZoneEl),this.blockTouch(this.joystickZoneEl),this.joystick=new pM(this.joystickZoneEl,a,c=>{const h=c.vector?.x??0,d=c.vector?.y??0,u=c.distance??0,f=.2,m=h>f?1:h<-f?-1:0,_=d>f?1:d<-f?-1:0,g=u>=a/2,p=this.prevJoyState;m===p.dirX&&_===p.dirY&&g===p.shift||(this.prevJoyState={dirX:m,dirY:_,shift:g},this.setInput({moveX:m,moveY:_,shift:g}))},()=>{const c=this.prevJoyState;(c.dirX!==0||c.dirY!==0||c.shift)&&(this.prevJoyState={dirX:0,dirY:0,shift:!1},this.setInput({moveX:0,moveY:0,shift:!1}))})),this.lookAreaEl=document.createElement("div"),Object.assign(this.lookAreaEl.style,{position:"absolute",right:"0",bottom:"0",width:"50%",height:"100%",zIndex:"998",touchAction:"none",WebkitUserSelect:"none",userSelect:"none"}),l.appendChild(this.lookAreaEl),this.blockTouch(this.lookAreaEl),this.lookAreaEl.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),this.lookAreaEl.addEventListener("pointermove",this.onPointerMove,{passive:!1}),this.lookAreaEl.addEventListener("pointerup",this.onPointerUp,{passive:!1}),this.lookAreaEl.addEventListener("pointercancel",this.onPointerUp,{passive:!1}),n&&(this.jumpBtnEl=this.createBtn(l,14,14,vd),this.jumpBtnEl.addEventListener("touchstart",c=>{c.preventDefault(),this.setInput({jump:!0})},{passive:!1}),this.jumpBtnEl.addEventListener("touchend",c=>{c.preventDefault(),this.setInput({jump:!1})},{passive:!1}),this.jumpBtnEl.addEventListener("touchcancel",c=>{c.preventDefault(),this.setInput({jump:!1})},{passive:!1})),i&&(this.flyBtnEl=this.createBtn(l,14,94,uM),this.flyBtnEl.addEventListener("touchstart",c=>{c.preventDefault(),this.setInput({toggleFly:!0})},{passive:!1})),r&&(this.viewBtnEl=this.createBtn(l,14,214,fM),this.viewBtnEl.addEventListener("touchstart",c=>{c.preventDefault(),this.setInput({toggleView:!0})},{passive:!1})),o&&(this.vehicleBtnEl=this.createBtn(l,114,134,dM),this.vehicleBtnEl.style.display="none",this.vehicleBtnEl.addEventListener("touchstart",c=>{c.preventDefault(),this.setInput({toggleVehicle:!0})},{passive:!1}))}destroy(){try{this.joystick?.destroy(),this.joystick=null,this.lookAreaEl&&(this.lookAreaEl.removeEventListener("pointerdown",this.onPointerDown),this.lookAreaEl.removeEventListener("pointermove",this.onPointerMove),this.lookAreaEl.removeEventListener("pointerup",this.onPointerUp),this.lookAreaEl.removeEventListener("pointercancel",this.onPointerUp)),[this.joystickZoneEl,this.lookAreaEl,this.jumpBtnEl,this.flyBtnEl,this.viewBtnEl,this.vehicleBtnEl].forEach(t=>t?.parentElement?.removeChild(t)),this.joystickZoneEl=this.lookAreaEl=this.jumpBtnEl=this.flyBtnEl=this.viewBtnEl=this.vehicleBtnEl=null}catch(t){console.warn("销毁移动端控制时出错：",t)}}syncVehicleBtn(t){this.vehicleBtnEl&&(this.vehicleBtnEl.style.display=t?"block":"none")}syncControllerModeBtn(t){!this.flyBtnEl||!this.jumpBtnEl||(t===0?(this.flyBtnEl.style.display="block",this.jumpBtnEl.style.backgroundImage=`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("${vd}")`):(this.flyBtnEl.style.display="none",this.jumpBtnEl.style.backgroundImage=`url(${hM})`))}blockTouch(t){["touchstart","touchmove","touchend","touchcancel"].forEach(e=>{t.addEventListener(e,n=>n.preventDefault(),{passive:!1})})}createBtn(t,e,n,i){const r=document.createElement("button");return Object.assign(r.style,{position:"absolute",right:`${e}px`,bottom:`${n}px`,width:"56px",height:"56px",zIndex:"1000",borderRadius:"50%",border:"2px solid black",padding:"20px",opacity:"0.95",touchAction:"none",fontSize:"14px",userSelect:"none",overflow:"hidden",boxSizing:"border-box",backgroundColor:"transparent",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"center center, center center",backgroundSize:"80% 80%, 100% 100%",backgroundImage:`url("${i}"),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`}),t.appendChild(r),["touchstart","touchend","touchcancel"].forEach(o=>{r.addEventListener(o,a=>a.preventDefault(),{passive:!1})}),r}}class gM{constructor(t){this.sets=new Map,this.currentLocomotionSet=null,this.recheckTimer=null,this.clips=[],this.hasThreePartJump=!1,this.isOverrideAnimationPlaying=!1,this.overrideInputSnapshot=null,this.ctrl=t}playByName(t,e=.18){if(!this.actions)return;const n=this.actions.get(t);if(!n||this.state===n)return;const i=this.state;if(n.reset(),n.setEffectiveWeight(1),t==="enterCar"||t==="exitCar"){const r=n.getClip().duration,o=this.ctrl.vehicle.active?.enterVehicleTime??1.5;n.setEffectiveTimeScale(r/o),n.setLoop(Rn,1),n.clampWhenFinished=!0}n.play(),i&&i!==n&&i.fadeOut(e),n.fadeIn(e),this.state=n,this.ctrl.onAnimationChange?.(t,n)}register(t,e,n){if(!this.mixer||!this.actions)return;const i=this.clips.find(a=>a.name===e);if(!i){console.warn(`找不到 "${e}" 动画`);return}const r=this.mixer.clipAction(i),o=n?.duration?i.duration/n.duration:n?.timeScale??1;r.setLoop(n?.loop===!1?Rn:Lr,1/0),r.clampWhenFinished=n?.clampWhenFinished??!1,r.setEffectiveTimeScale(o),r.enabled=!0,r.setEffectiveWeight(0),this.actions.set(t,r),n?.onFinished&&this.mixer.addEventListener("finished",a=>{a.action===r&&n.onFinished()})}registerLocomotionSet(t,e){if(!this.mixer)return;const n=new Map;for(const[i,r]of Object.entries(e)){const o=this.clips.find(l=>l.name===r);if(!o){console.warn(`registerLocomotionSet: 找不到 "${r}"`);continue}const a=this.mixer.clipAction(o);i==="jumping"?(a.setLoop(Rn,1),a.clampWhenFinished=!0,a.setEffectiveTimeScale(1.2)):(a.setLoop(Lr,1/0),a.setEffectiveTimeScale(1)),a.enabled=!0,a.setEffectiveWeight(0),n.set(i,a)}this.sets.set(t,n)}switchLocomotionSet(t,e=.18){if(!this.actions)return;const n=this.sets.get(t);if(!n){console.warn(`switchLocomotionSet: 未找到集合 "${t}"`);return}this.currentLocomotionSet=t;for(const[i,r]of n.entries()){const o=this.actions.get(i);o!==r&&(o&&o.fadeOut(e),this.actions.set(i,r),this.state===o&&(r.reset(),r.setEffectiveWeight(1),r.fadeIn(e),r.play(),this.state=r,this.ctrl.onAnimationChange?.(i,r)))}}play(t,e){if(!this.actions)return;const n=this.actions.get(t);if(!n){console.warn(`playAnimation: "${t}" 未注册`);return}if(n.loop===Rn){this.isOverrideAnimationPlaying=!0,this.overrideInputSnapshot={...this.ctrl.input};const r=o=>{o.action===n&&(this.isOverrideAnimationPlaying&&this.overrideInputSnapshot&&(this.isOverrideAnimationPlaying=!1,this.overrideInputSnapshot=null),this.mixer.removeEventListener("finished",r))};this.mixer.addEventListener("finished",r)}e?.force&&n.reset();const i=e?.returnToPrev?this.state:null;if(this.playByName(t,e?.fade??.18),e?.returnToPrev&&i&&this.mixer){const r=this.actions.get(t);e?.fade;const o=a=>{a.action===r&&this.state===r&&(this.mixer.removeEventListener("finished",o),this.state.stop(),i.reset(),i.setEffectiveWeight(1),i.play(),this.state=i,this.ctrl.onAnimationChange?.(i.getClip().name,i))};this.mixer.addEventListener("finished",o)}}startJump(t=!1){this.hasThreePartJump?this.playByName(t?"jumpLoop":"jumpStart"):this.playByName("jumping")}onBecomeAirborne(){if(!this.hasThreePartJump)return;const t=this.state,e=this.actions;t===e?.get("jumpStart")||t===e?.get("jumpLoop")||t===e?.get("jumpEnd")||this.playByName("jumpLoop")}onLand(){if(!this.hasThreePartJump)return;const t=this.state,e=this.actions;(t===e?.get("jumpStart")||t===e?.get("jumpLoop"))&&this.playByName("jumpEnd")}isJumping(){const t=this.state,e=this.actions;return e?t===e.get("jumping")||t===e.get("jumpStart")||t===e.get("jumpLoop")||t===e.get("jumpEnd"):!1}getCurrentName(){return this.state?.getClip()?.name??null}updateMixers(t){this.mixer?.update(t);for(const e of this.ctrl.vehicle.list)e.vehicleMixer?.update(t)}setAnimationByPressed(){if(this.isOverrideAnimationPlaying){const c=this.ctrl.input,h=this.overrideInputSnapshot;let d=!1;if(h){for(const u in h)if(h[u]!==c[u]){d=!0;break}}if(d)this.isOverrideAnimationPlaying=!1,this.overrideInputSnapshot=null;else return}this.ctrl.cam.maxDist=this.ctrl.cam.originMaxDist;const t=this.ctrl.vehicle;if(t.isMovingToBoarding||t.isBoardingAnim||t.isExitAnim){const{fwd:c,bkd:h,lft:d,rgt:u}=this.ctrl.input;if(!c&&!h&&!d&&!u)return}t.cancelBoarding(),t.isExitAnim&&(t.isExitAnim=!1,t.exitDoorClosed=!1),t.isBoardingAnim&&(t.isBoardingAnim=!1,t.doorClosed=!1),t.doorTimer&&(clearTimeout(t.doorTimer),t.doorTimer=null);const{fwd:e,bkd:n,lft:i,rgt:r,shift:o,space:a,ctrlKey:l}=this.ctrl.input;if(this.ctrl.isFlying){if(e){o?(this.playByName("flying"),this.ctrl.cam.enableSpringCamera||(this.ctrl.cam.maxDist=this.ctrl.cam.originMaxDist*2)):this.playByName("flyHoverForward");return}if(n){this.playByName("flyHoverBack");return}if(i){this.playByName("flyHoverLeft");return}if(r){this.playByName("flyHoverRight");return}if(a){this.playByName("flyHoverUp");return}if(l){this.playByName("flyHoverDown");return}this.playByName("flyidle");return}if(this.ctrl.playerIsOnGround){if(this.hasThreePartJump&&this.state===this.actions?.get("jumpEnd"))return;if(!e&&!n&&!i&&!r){this.playByName("idle");return}if(e){this.playByName(o?"running":"walking");return}if(!this.ctrl.isFirstPerson&&(i||r||n)){this.playByName(o?"running":"walking");return}if(i){this.playByName("left_walking");return}if(r){this.playByName("right_walking");return}if(n){this.playByName("walking_backward");return}}}}class _M{constructor(t){this.collisionLerp=.18,this.epsilon=35,this.minDist=100,this.maxDist=440,this.originMaxDist=440,this.sensitivity=5,this.mouseMode=1,this.zoomEnabled=!1,this.lookAtHeightRatio=.8,this.lookAtPoint=new C,this.enableSpringCamera=!1,this.springCameraTime=.15,this._springVelocity=new C,this._springResult=new C,this.raycaster=new gc(new C,new C),this.centerRay=new gc,this.centerMouse=new bt,this.playerToCam=new C,this.ctrl=t,this.raycaster.firstHitOnly=!0}applySpringToTarget(t){const e=this.getLookAtPoint();if(!this.enableSpringCamera)return e;const n=this.ctrl.controls.target,i=this._springVelocity,r=this._springResult,a=2/Math.max(1e-4,this.springCameraTime),l=a*t,c=1/(1+l+.48*l*l+.235*l*l*l),h=["x","y","z"];for(const d of h){const u=n[d]-e[d],f=(i[d]+a*u)*t;i[d]=(i[d]-a*f)*c;let m=e[d]+(u+f)*c;e[d]-n[d]>0==m>e[d]&&(m=e[d],i[d]=0),r[d]=m}return r}getLookAtPoint(){const t=this.ctrl.playerCapsule.capsuleInfo,e=t.radius,n=-t.segment.end.y+2*e,i=this.ctrl.playerCapsule.position.y+e-n*(1-this.lookAtHeightRatio);return this.lookAtPoint.copy(this.ctrl.playerCapsule.position).setY(i)}setOverShoulder(t){if(!t||this.ctrl.controllerMode===1){this.ctrl.camera.clearViewOffset();return}const e=window.innerWidth,n=window.innerHeight;this.ctrl.camera.setViewOffset(e,n,e*.2,0,e,n)}changeView(){if(this.ctrl.onBeforeViewChange?.(this.ctrl.isFirstPerson),this.ctrl.isFirstPerson=!this.ctrl.isFirstPerson,this.ctrl.isFirstPerson){const t=new C(0,0,1).applyQuaternion(this.ctrl.playerCapsule.quaternion),e=new C(t.x,0,t.z).normalize();if(e.lengthSq()>.001){const n=Math.atan2(e.x,e.z);this.ctrl.playerCapsule.rotation.set(0,n,0)}this.setFirstPerson(),this.setOverShoulder(!1)}else{this.ctrl.controls.enabled=!0,this.ctrl.scene.attach(this.ctrl.camera);const t=new C(0,0,-1).applyQuaternion(this.ctrl.playerCapsule.quaternion),e=Math.atan2(t.z,t.x),n=this.ctrl.playerModelConfig.scale,i=new C(Math.cos(e)*400*n,200*n,Math.sin(e)*400*n);this.ctrl.controls.target.copy(this.getLookAtPoint()),this.ctrl.camera.position.copy(this.ctrl.controls.target).add(i.normalize().multiplyScalar(this.maxDist)),this.ctrl.controls.enableZoom=this.zoomEnabled,this.setOverShoulder(this.ctrl.enableOverShoulderView)}this.setPointerLock(),this.ctrl.onViewChange?.(this.ctrl.isFirstPerson)}setFirstPerson(t=0){this.ctrl.controls.enabled=!1;const e=this.ctrl.playerModelConfig.scale,n=this.ctrl.playerModelConfig.firstPersonCameraOffset;if(this.ctrl.playerModelHead){const[i,r,o]=n??[0,10,20];this.ctrl.playerModelHead.attach(this.ctrl.camera),this.ctrl.camera.position.set(i,r,o)}else{const[i,r,o]=n??[0,40,30];this.ctrl.playerCapsule.attach(this.ctrl.camera),this.ctrl.camera.position.set(i*e,r*e,o*e)}this.ctrl.camera.rotation.set(jn.clamp(t,-1.1,1.4),Math.PI,0),this.ctrl.controls.enableZoom=!1}setPointerLock(){document.body.requestPointerLock&&((this.mouseMode===0||this.mouseMode===1||this.mouseMode===5)&&!this.ctrl.isFirstPerson||this.ctrl.isFirstPerson?document.body.requestPointerLock():document.exitPointerLock())}setCamPos(){requestAnimationFrame(()=>{if(this.ctrl.isFirstPerson)this.setFirstPerson();else{const t=new C(0,0,-1).applyQuaternion(this.ctrl.playerCapsule.quaternion),e=Math.atan2(t.z,t.x),n=this.ctrl.playerModelConfig.scale,i=new C(Math.cos(e)*400*n,200*n,Math.sin(e)*400*n);this.ctrl.controls.target.copy(this.getLookAtPoint()),this.ctrl.camera.position.copy(this.ctrl.controls.target).add(i.normalize().multiplyScalar(this.maxDist)),this.ctrl.controls.enableZoom=this.zoomEnabled}this.ctrl.camera.updateProjectionMatrix()})}initControls(){this.ctrl.controls.enableZoom=this.zoomEnabled,this.ctrl.controls.rotateSpeed=this.sensitivity*.05,this.ctrl.controls.maxPolarAngle=Math.PI*(300/360),this.ctrl.controls.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},this.ctrl.controls.minDistance=this.minDist}resetControls(){this.ctrl.controls&&(this.ctrl.controls.enabled=!0,this.ctrl.controls.enablePan=!0,this.ctrl.controls.maxPolarAngle=Math.PI/2,this.ctrl.controls.rotateSpeed=1,this.ctrl.controls.enableZoom=!0,this.ctrl.controls.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2})}setToward(t,e,n){if(this.ctrl.onTowardChange?.(t,e,n),!this.ctrl.enableToward||this.ctrl.controllerMode===0&&this.ctrl.isFirstPerson&&this.ctrl.vehicle.isMovingToBoarding)return;const i=this.sensitivity;if(this.ctrl.controllerMode===0)this.ctrl.isFirstPerson?(this.ctrl.playerCapsule.rotateY(-t*n*i),this.ctrl.camera.rotation.x=jn.clamp(this.ctrl.camera.rotation.x+-e*n*i,-Math.PI*(60/180),Math.PI*(80/180))):this.orbit(this.getLookAtPoint(),-t*n*i,-e*n*i);else{const r=this.ctrl.vehicle.active;if(!r)return;this.ctrl.isFirstPerson?(this.ctrl.camera.rotation.y=jn.clamp(this.ctrl.camera.rotation.y+-t*n*i,Math.PI*(3/4),Math.PI*(5/4)),this.ctrl.camera.rotation.x=jn.clamp(this.ctrl.camera.rotation.x+-e*n*i,0,Math.PI*(1/3))):this.orbit(r.vehicleGroup.position,-t*n*i,-e*n*i)}}orbit(t,e,n){const i=this.ctrl.camera.position.distanceTo(t),r=this.ctrl.camera.position.clone().sub(t);let o=Math.atan2(r.x,r.z)+e,a=Math.acos(jn.clamp(r.y/i,-1,1))+n;a=Math.max(.1,Math.min(Math.PI-.1,a)),this.ctrl.camera.position.set(t.x+i*Math.sin(a)*Math.sin(o),t.y+i*Math.cos(a),t.z+i*Math.sin(a)*Math.cos(o)),this.ctrl.camera.lookAt(t)}updateWithRaycast(t,e,n){this.playerToCam.subVectors(this.ctrl.camera.position,t);const i=this.playerToCam.clone().normalize();this.raycaster.set(t,i),this.raycaster.far=e;const r=this.raycaster.intersectObject(this.ctrl.collider,!1);if(r.length>0){const o=Math.max(r[0].distance-this.epsilon,this.minDist);this.ctrl.camera.position.lerp(t.clone().add(i.multiplyScalar(o)),this.collisionLerp)}else{this.raycaster.far=n;const o=this.raycaster.intersectObject(this.ctrl.collider,!1),a=o.length>0?Math.min(n,o[0].distance-this.epsilon):n;this.ctrl.camera.position.lerp(t.clone().add(i.multiplyScalar(a)),this.collisionLerp)}}getCenterHit(){this.ctrl.camera.updateMatrixWorld(),this.centerRay.setFromCamera(this.centerMouse,this.ctrl.camera),this.centerRay.layers.set(1),this.centerRay.layers.enable(2);const t=this.ctrl.collider?[this.ctrl.collider,...this.ctrl.scene.children]:this.ctrl.scene.children,e=this.centerRay.intersectObjects(t,!0);return e.sort((i,r)=>i.distance-r.distance),e[0]?e[0]:{distance:1e3,point:this.centerRay.ray.at(1e3,new C),object:this.ctrl.camera,uv:null,normal:null,face:null,faceIndex:null,instanceId:void 0}}}class xM{constructor(t){this.fwd=!1,this.bkd=!1,this.lft=!1,this.rgt=!1,this.space=!1,this.ctrlKey=!1,this.shift=!1,this.boundKeydown=async e=>this.onKeydown(e),this.boundKeyup=e=>this.onKeyup(e),this.boundMouseMove=e=>this.onMouseMove(e),this.boundMouseClick=()=>this.ctrl.cam.setPointerLock(),this.boundBlur=()=>this.resetKeys(),this.ctrl=t}setInput(t){const e=this.ctrl;if(typeof t.moveX=="number"&&(this.lft=t.moveX===-1,this.rgt=t.moveX===1,e.animation.setAnimationByPressed()),typeof t.moveY=="number"&&(this.fwd=t.moveY===1,this.bkd=t.moveY===-1,e.animation.setAnimationByPressed()),typeof t.lookDeltaX=="number"&&typeof t.lookDeltaY=="number"&&e.cam.setToward(t.lookDeltaX,t.lookDeltaY,.002),typeof t.jump=="boolean")if(t.jump){if(e.vehicle.cancelBoarding(),this.space=!0,e.controllerMode===1)return;if(e.isFlying){e.animation.setAnimationByPressed();return}if(!e.playerIsOnGround)return;e.animation.startJump(),e.playerVelocity.y=e.jumpHeight,e.setOnGround(!1)}else this.space=!1,e.isFlying&&e.animation.setAnimationByPressed();typeof t.shift=="boolean"&&(this.shift=t.shift,e.animation.setAnimationByPressed()),t.toggleView&&e.cam.changeView(),t.toggleFly&&e.playerFlyEnabled&&e.controllerMode===0&&(e.isFlying=!e.isFlying,e.isFlying&&e.playerVelocity.set(0,0,0),e.animation.setAnimationByPressed(),!e.isFlying&&!e.playerIsOnGround&&e.animation.startJump(!0)),t.toggleVehicle&&(e.controllerMode===0?e.vehicle.enter():e.vehicle.exit())}bindEvents(){this.ctrl.isupdate=!0,this.ctrl.cam.setPointerLock(),window.addEventListener("keydown",this.boundKeydown),window.addEventListener("keyup",this.boundKeyup),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("click",this.boundMouseClick),window.addEventListener("blur",this.boundBlur)}unbindEvents(){this.ctrl.isupdate=!1,document.exitPointerLock(),window.removeEventListener("keydown",this.boundKeydown),window.removeEventListener("keyup",this.boundKeyup),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("click",this.boundMouseClick),window.removeEventListener("blur",this.boundBlur)}resetKeys(){const t=this.ctrl;this.fwd=!1,this.bkd=!1,this.lft=!1,this.rgt=!1,this.space=!1,this.ctrlKey=!1,this.shift=!1,t.controls.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},t.animation.setAnimationByPressed()}onKeydown(t){const e=this.ctrl;switch(t.ctrlKey&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)&&t.preventDefault(),t.code){case"KeyW":case"ArrowUp":this.fwd=!0,e.animation.setAnimationByPressed();break;case"KeyS":case"ArrowDown":this.bkd=!0,e.animation.setAnimationByPressed();break;case"KeyD":case"ArrowRight":this.rgt=!0,e.animation.setAnimationByPressed();break;case"KeyA":case"ArrowLeft":this.lft=!0,e.animation.setAnimationByPressed();break;case"KeyV":e.cam.changeView();break;case"KeyF":e.controllerMode===0&&e.playerFlyEnabled&&(e.isFlying=!e.isFlying,e.isFlying&&e.playerVelocity.set(0,0,0),e.animation.setAnimationByPressed(),!e.isFlying&&!e.playerIsOnGround&&e.animation.startJump(!0));break;case"KeyE":if(e.isFlying)return;e.controllerMode===0?e.vehicle.enter():e.vehicle.exit();break;case"ShiftLeft":case"ShiftRight":this.shift=!0,e.animation.setAnimationByPressed(),e.controls.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0};break;case"Space":if(e.vehicle.cancelBoarding(),this.space=!0,e.controllerMode===1)return;if(e.isFlying){e.animation.setAnimationByPressed();return}if(!e.playerIsOnGround||e.animation.isJumping())return;e.animation.startJump(),e.playerVelocity.y=e.jumpHeight,e.setOnGround(!1);break;case"ControlLeft":this.ctrlKey=!0,e.isFlying&&e.animation.setAnimationByPressed();break}}onKeyup(t){const e=this.ctrl;switch(t.code){case"KeyW":case"ArrowUp":this.fwd=!1,e.animation.setAnimationByPressed();break;case"KeyS":case"ArrowDown":this.bkd=!1,e.animation.setAnimationByPressed();break;case"KeyD":case"ArrowRight":this.rgt=!1,e.animation.setAnimationByPressed();break;case"KeyA":case"ArrowLeft":this.lft=!1,e.animation.setAnimationByPressed();break;case"ShiftLeft":case"ShiftRight":this.shift=!1,e.animation.setAnimationByPressed(),e.controls.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2};break;case"Space":this.space=!1,e.isFlying&&e.animation.setAnimationByPressed();break;case"ControlLeft":this.ctrlKey=!1,e.isFlying&&e.animation.setAnimationByPressed();break}}onMouseMove(t){document.pointerLockElement===document.body&&this.ctrl.cam.setToward(t.movementX,t.movementY,1e-4)}}const yM="modulepreload",vM=function(s){return"/3dscene/game/"+s},Sd={},SM=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(e.map(c=>{if(c=vM(c),c in Sd)return;Sd[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":yM,h||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),h)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};class Ml{constructor(t){this.g=1/0,this.h=0,this.f=1/0,this.parent=null,this.position=t.clone()}equals(t){return this.position.distanceTo(t.position)<.01}}class MM{constructor(){this.elements=[]}enqueue(t,e){this.elements.push({priority:e,item:t}),this.elements.sort((n,i)=>n.priority-i.priority)}dequeue(){return this.elements.shift()?.item}isEmpty(){return this.elements.length===0}contains(t,e){return this.elements.some(n=>e(n.item,t))}update(t,e,n){const i=this.elements.findIndex(r=>n(r.item,t));i!==-1&&(this.elements[i].priority=e,this.elements.sort((r,o)=>r.priority-o.priority))}}class bM{constructor(t,e={}){this.debugLines=[],this.debugPoints=[],this.obstacleChecker=t,this.config={debugEnabled:!1,scale:1,...e}}heuristic(t,e){return t.distanceTo(e)}findPath(t,e){if(!this.obstacleChecker.isBlocked(t,e))return[e];const n=this.obstacleChecker.getNavigationNodes(t,e),i=[new Ml(t),new Ml(e),...n.map(h=>new Ml(h))];if(i.length<2)return console.warn("导航节点不足，返回直线路径"),[e];const r=i[0],o=i[1];r.g=0,r.h=this.heuristic(r.position,o.position),r.f=r.h;const a=new MM,l=new Set,c=(h,d)=>h.equals(d);for(a.enqueue(r,r.f);!a.isEmpty();){const h=a.dequeue();if(!h)break;if(h.equals(o)){const d=this.reconstructPath(h);return this.config.debugEnabled&&this.visualizePath([t,...d]),d}l.add(h);for(const d of i){if(l.has(d)||this.obstacleChecker.isBlocked(h.position,d.position))continue;const u=h.g+h.position.distanceTo(d.position);u<d.g&&(d.parent=h,d.g=u,d.h=this.heuristic(d.position,o.position),d.f=d.g+d.h,a.contains(d,c)?a.update(d,d.f,c):a.enqueue(d,d.f))}}return console.warn("A* 未找到路径，使用直线路径"),[e]}reconstructPath(t){const e=[];let n=t;for(;n!==null;)e.unshift(n.position.clone()),n=n.parent;return e.length>0&&e.shift(),this.smoothPath(e)}smoothPath(t){if(t.length<=2)return t;const e=[t[0]];let n=0;for(;n<t.length-1;){let i=n+1;for(let r=t.length-1;r>n+1;r--)if(!this.obstacleChecker.isBlocked(t[n],t[r])){i=r;break}e.push(t[i]),n=i}return e}visualizePath(t){if(!this.config.scene||!this.config.debugEnabled)return;this.clearVisualization();const e=this.config.scale||1;if(t.length>1){const n=new xe().setFromPoints(t.map(r=>r.clone())),i=new Qs(n,new zr({color:65280,linewidth:3}));this.config.scene.add(i),this.debugLines.push(i)}t.forEach((n,i)=>{const r=new fe(new Zc(20*e),new Sn({color:i===t.length-1?16711680:65280}));r.position.copy(n),this.config.scene.add(r),this.debugPoints.push(r)})}clearVisualization(){this.config.scene&&(this.debugLines.forEach(t=>{this.config.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.debugLines=[],this.debugPoints.forEach(t=>{this.config.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.debugPoints=[])}updateConfig(t){this.config={...this.config,...t}}dispose(){this.clearVisualization()}}function TM(s,t,e,n){if(!s||!t)return{vehicle:null,updateWheelVisuals:()=>{}};const i=s.createVehicleController(t),r=new C(0,-1,0);n.forEach((d,u)=>{i.addWheel(d.position,r,d.axleCs,d.suspensionRestLength,d.radius),i.setWheelChassisConnectionPointCs(u,d.position),i.setWheelDirectionCs(u,r),i.setWheelAxleCs(u,d.axleCs),i.setWheelSuspensionRestLength(u,d.suspensionRestLength),i.setWheelRadius(u,d.radius),i.setWheelMaxSuspensionTravel(u,d.suspensionRestLength),i.setWheelSuspensionStiffness(u,250),i.setWheelSuspensionCompression(u,6),i.setWheelSuspensionRelaxation(u,6),i.setWheelMaxSuspensionForce(u,1e4),i.setWheelBrake(u,0),i.setWheelSteering(u,0),i.setWheelEngineForce(u,0),i.setWheelFrictionSlip(u,20),i.setWheelSideFrictionStiffness(u,2)});const o=new C(0,1,0),a=new me,l=new me;function c(){for(const[d,u]of e.entries())if(u)try{const f=i.wheelAxleCs(d)??new C(1,0,0),m=i.wheelChassisConnectionPointCs(d)?.y??0,_=i.wheelSuspensionLength(d)??0,g=i.wheelSteering(d)??0,p=i.wheelRotation(d)??0;u.position.y=m-_,a.setFromAxisAngle(o,g),l.setFromAxisAngle(f,p),u.quaternion.copy(a).multiply(l)}catch{}}function h(){try{s.removeVehicleController(i)}catch{}}return{vehicle:i,updateWheelVisuals:c,destroy:h}}function bl(s){const t=new ie().setFromObject(s),e=new C,n=new C;return t.getCenter(e),t.getSize(n),{bbox:t,center:e,size:n}}function EM(s,t,e,n){return{isBlocked(i,r){const o=s.position,a=s.quaternion,l=new C,c=new C;t.getCenter(l),t.getSize(c),l.applyQuaternion(a).add(o);const h=c.clone().multiplyScalar(.5*e),d=[];for(let p=-1;p<=1;p+=2)for(let x=-1;x<=1;x+=2)for(let S=-1;S<=1;S+=2)d.push(new C(h.x*p,h.y*x,h.z*S).applyQuaternion(a).add(l));const u=new ie;d.forEach(p=>u.expandByPoint(p)),u.expandByScalar(100*n);const f=new C().subVectors(r,i),m=f.length(),g=new Fi(i,f.normalize()).intersectBox(u,new C);return g!==null&&i.distanceTo(g)<m},getNavigationNodes(i,r){const o=[],a=s.position,l=s.quaternion,c=new C;t.getSize(c);const h=new C(0,0,1).applyQuaternion(l),d=new C(1,0,0).applyQuaternion(l),u=c.z/2*e,f=c.x/2*e,m=i.y;for(const _ of[300*n,500*n])o.push(a.clone().add(h.clone().multiplyScalar(u+_)).add(d.clone().multiplyScalar(-f-_)).setY(m)),o.push(a.clone().add(h.clone().multiplyScalar(u+_)).add(d.clone().multiplyScalar(f+_)).setY(m)),o.push(a.clone().add(h.clone().multiplyScalar(-u-_)).add(d.clone().multiplyScalar(-f-_)).setY(m)),o.push(a.clone().add(h.clone().multiplyScalar(-u-_)).add(d.clone().multiplyScalar(f+_)).setY(m));return o}}}async function AM(s,t){const{loader:e,scene:n,world:i,RAPIER:r,vehicleParams:o,vehicleLength:a,playerScale:l}=t,c=s.scale??1,h=s.chassisRatio??.2,d=s.suspensionRestLengthRatio??.2,u=s.speedMultiplier??1;o.power.accelerateForce=50*c,o.power.brakeForce=200*c,o.power.maxSpeed=1e4*c,o.followVehicleDirection=s.followVehicleDirection??!0;const f=await e.loadAsync(s.url),{size:m}=bl(f.scene),_=a/Math.max(m.x,m.y,m.z),g=new of(f.scene),p=new Map,S=(f.animations??[]).find(st=>st.name===(s.animations?.openDoorAnim??""));if(S){const st=g.clipAction(S);st.setLoop(Rn,1),st.clampWhenFinished=!0,st.setEffectiveTimeScale(S.duration),st.enabled=!0,st.setEffectiveWeight(0),p.set("openDoor",st)}const y=[];for(const st of s.wheelsNames){let It=!1;f.scene.traverse(zt=>{zt.name===st&&!It&&(y.push(zt),It=!0)}),It||console.warn(`未找到轮子: ${st}`)}const T=new In;n.add(T),f.scene.scale.multiplyScalar(_*c),f.scene.rotateY(o.model.rotation);const{size:M,bbox:w,center:v}=bl(f.scene);f.scene.position.set(-v.x,-v.y,-v.z),T.add(f.scene),T.updateMatrixWorld(!0);let A=0,R=0,P=0,D=0,N=!1;const F=[];for(const st of y){const It=new C,zt=new me,Mt=new C;if(st.getWorldPosition(It),st.getWorldQuaternion(zt),st.getWorldScale(Mt),!N){const{size:j}=bl(st);A=Number((Math.max(j.x,j.y,j.z)/2).toFixed(2)),R=Number(Math.min(j.x,j.y,j.z).toFixed(2)),P=Number((A*2*d).toFixed(2)),D=Number((A*2*h).toFixed(2)),N=!0}F.push({axleCs:new C(0,0,-1),position:It,quaternion:zt,scale:Mt,radius:A,width:R,suspensionRestLength:P,object:st})}T.remove(f.scene),n.remove(T);const L=new In;n.add(L),L.add(f.scene),L.updateMatrixWorld(!0);const k=[];for(let st=0;st<F.length;st++){const It=F[st],zt=new In;zt.position.copy(L.worldToLocal(It.position.clone()));const Mt=It.object;Mt.parent?.remove(Mt),Mt.position.set(0,0,0),Mt.quaternion.copy(It.quaternion),Mt.scale.copy(It.scale),Mt.updateMatrixWorld(),zt.add(Mt),L.add(zt),k.push(zt)}const V=M.clone().multiplyScalar(.5);V.y-=D/2,f.scene.position.y-=D/2,V.x*=.95,V.z*=.95;const Z=i.createRigidBody(r.RigidBodyDesc.dynamic().setTranslation(s.position.x,s.position.y,s.position.z).setLinearDamping(o.chassis.linearDamping).setAngularDamping(o.chassis.angularDamping).setCanSleep(!0).setAdditionalMass(10));i.createCollider(r.ColliderDesc.cuboid(V.x,V.y,V.z),Z);const Q=new fe(new ss(V.x*2,V.y*2,V.z*2),new Sn({color:16777215,wireframe:!0,transparent:!0,opacity:.3}));o.debug.showPhysicsBox&&L.add(Q),L.position.copy(s.position),L.updateMatrixWorld(!0);const{vehicle:lt,updateWheelVisuals:_t}=TM(i,Z,k,F);return{vehicleGroup:L,chassisBody:Z,vehicleController:lt,updateWheelVisuals:_t,vehicleMixer:g,vehicleActions:p,vehiclIsOpenDoor:!1,vehicleBBox:w.clone(),pathPlanner:new bM(EM(L,w,c,l),{debugEnabled:!1,scene:n,scale:l}),scale:c,boardingPoint:s.boardingPoint,seatOffset:s.seatOffset??new C,enterVehicleTime:1.5,chassisRatio:h,suspensionRestLengthRatio:d,size:{l:Math.max(M.x,M.z),w:Math.min(M.x,M.z),h:M.y},speedMultiplier:u,physicsBoxMesh:Q}}class wM{constructor(t){this.list=[],this.active=null,this.maxCount=6,this.RAPIER=null,this.world=null,this.params={debug:{showPhysicsBox:!1},chassis:{linearDamping:.5,angularDamping:.5},model:{rotation:-Math.PI/2},power:{accelerateForce:50,brakeForce:200,maxSpeed:1e4},steering:{maxSteerAngle:Math.PI/4,steerSpeed:.5,steerReturnSpeed:1},followVehicleDirection:!0},this.steerQuat=new me,this.rotQuat=new me,this.camBehindDir=new C(0,0,1),this.isMovingToBoarding=!1,this.waypoints=[],this.waypointIdx=0,this.targetDir=null,this.moveSpeed=300,this.rotSpeed=10,this.boardingPoint=null,this.isBoardingAnim=!1,this.doorClosed=!1,this.isExitAnim=!1,this.exitDoorClosed=!1,this.doorTimer=null,this.flip180=new me().setFromAxisAngle(new C(0,1,0),Math.PI),this.ctrl=t}async initRapier(){if(this.RAPIER)return;this.RAPIER=await SM(()=>import("./rapier.es-DJGqeYTL.js"),[]),await this.RAPIER.init(),this.world=new this.RAPIER.World(new this.RAPIER.Vector3(0,-9.81,0)),this.world.maxCcdSubsteps=2;const t=(n,i,r)=>{const a=(r.index?r.clone().toNonIndexed():r.clone()).attributes.position,l=a.count,c=new Float32Array(l*3),h=new C;for(let f=0;f<l;f++)h.fromBufferAttribute(a,f),c[f*3]=h.x,c[f*3+1]=h.y,c[f*3+2]=h.z;const d=l>65535?new Uint32Array(l):new Uint16Array(l);for(let f=0;f<l;f++)d[f]=f;const u=i.createRigidBody(n.RigidBodyDesc.fixed());i.createCollider(n.ColliderDesc.trimesh(c,d).setRestitution(0).setFriction(.8),u)};for(const n of this.ctrl.collected)t(this.RAPIER,this.world,n);const e=this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed());e.userData={outOfBounds:!0}}async load(t){try{if(!this.ctrl.playerModelConfig.enterCarAnim)return console.warn("未配置上车动画，不执行车辆相关逻辑");if(await this.initRapier(),!this.world)return;const e=await AM(t,{loader:this.ctrl.loader,scene:this.ctrl.scene,world:this.world,RAPIER:this.RAPIER,vehicleParams:this.params,vehicleLength:this.maxCount,playerScale:this.ctrl.playerModelConfig.scale});this.list.push(e),this.ctrl.addDynamicCollider(e.vehicleGroup),this.setTransition()}catch(e){console.error("加载车辆模型失败:",e)}}openDoor(t=!0){const e=this.active;if(!e?.vehicleActions)return;const n=e.vehicleActions.get("openDoor");if(!n)return;const i=n.getClip().duration;n.reset(),n.setEffectiveWeight(1),t?(n.setEffectiveTimeScale(i*2),n.time=0,e.vehiclIsOpenDoor=!0):(n.setEffectiveTimeScale(-i*2),n.time=i,e.vehiclIsOpenDoor=!1),n.setLoop(Rn,1),n.clampWhenFinished=!0,n.play()}enter(){if(!this.list.length||this.isMovingToBoarding)return;let t=null,e=1/0,n=null;for(const o of this.list){const a=o.boardingPoint.clone().multiplyScalar(o.scale),l=o.vehicleGroup.localToWorld(a),c=this.ctrl.playerCapsule.position.distanceTo(l);c<800*this.ctrl.playerModelConfig.scale&&c<e&&(e=c,t=o,n=l)}if(!t||!n)return;this.active=t;const i=t,r=i.chassisBody.linvel();Math.sqrt(r.x**2+r.z**2)>.1||(this.boardingPoint=n,this.waypoints=i.pathPlanner.findPath(this.ctrl.playerCapsule.position.clone(),n),this.waypointIdx=0,this.targetDir=new C(0,0,1).applyQuaternion(i.vehicleGroup.quaternion).normalize(),this.isMovingToBoarding=!0,this.ctrl.animation.playByName("walking"))}updateMoveTo(t){const e=this.ctrl;if(!this.isMovingToBoarding||!this.targetDir||!this.waypoints.length)return;if(this.waypointIdx>=this.waypoints.length){this.finalizeBoarding(t);return}const n=this.waypoints[this.waypointIdx],i=e.playerCapsule.position.clone(),o=this.waypointIdx===this.waypoints.length-1?0:10*e.playerModelConfig.scale,a=new bt(n.x-i.x,n.z-i.z).length();if(a>o){const l=new C(n.x-i.x,0,n.z-i.z).normalize();e.playerCapsule.position.add(l.clone().multiplyScalar(Math.min(this.moveSpeed*e.playerModelConfig.scale*t,a))),e.targetMat.lookAt(e.playerCapsule.position,e.playerCapsule.position.clone().add(l),e.playerCapsule.up),e.targetQuat.setFromRotationMatrix(e.targetMat).multiply(this.flip180),e.playerCapsule.quaternion.slerp(e.targetQuat,Math.min(1,this.rotSpeed*t))}else this.waypointIdx++}finalizeBoarding(t){const e=this.ctrl,n=this.active;if(!this.targetDir||!n||!this.isMovingToBoarding)return;if(new C(0,0,-1).applyQuaternion(e.playerCapsule.quaternion).normalize().angleTo(this.targetDir)>.01){const r=e.playerCapsule.position.clone().add(this.targetDir);e.targetMat.lookAt(e.playerCapsule.position,r,e.playerCapsule.up),e.targetQuat.setFromRotationMatrix(e.targetMat),e.playerCapsule.quaternion.slerp(e.targetQuat,Math.min(1,this.rotSpeed*t))}else this.waypoints=[],this.waypointIdx=0,this.targetDir=null,n.pathPlanner?.clearVisualization(),e.animation.playByName("enterCar"),this.isBoardingAnim=!0,this.doorClosed=!1,n.vehiclIsOpenDoor||this.openDoor(),e.playerCapsule.rotation.copy(n.vehicleGroup.rotation),e.playerCapsule.quaternion.multiply(this.flip180)}onEnterAnimFinished(){const t=this.ctrl,e=this.active;if(!e||!this.isMovingToBoarding)return;t.playerCapsule.updateMatrixWorld(!0);const n=this.boardingPoint.y-t.playerCapsule.position.y;t.controllerMode=1,t.mobileControls?.syncControllerModeBtn(1),t.cam.setOverShoulder(!1),e.vehicleGroup.attach(t.playerCapsule),t.playerCapsule.position.add(e.seatOffset.clone().multiplyScalar(e.scale).add(new C(0,n,0))),this.isMovingToBoarding=!1,t.syncDebugVisibility(),t.onVehicleEnter?.(e)}exit(){const t=this.ctrl,e=this.active;if(!e)return;this.isMovingToBoarding=!1,this.waypoints=[],this.waypointIdx=0,this.targetDir=null;const n=e.chassisBody.linvel();Math.sqrt(n.x**2+n.z**2)<.1?(t.animation.playByName("exitCar"),this.isExitAnim=!0,this.exitDoorClosed=!1):t.animation.playByName("idle"),this.openDoor(!0),t.controllerMode=0,t.mobileControls?.syncControllerModeBtn(0),t.cam.setOverShoulder(t.enableOverShoulderView),t.scene.attach(t.playerCapsule),t.isFirstPerson&&t.cam.setFirstPerson(),t.syncDebugVisibility(),this.setTransition()}cancelBoarding(){this.isMovingToBoarding=!1,this.waypoints=[],this.waypointIdx=0,this.targetDir=null}updateVehicle(t){const e=this.ctrl,n=this.active;if(!n||!this.world)return;const{vehicleController:i,chassisBody:r,vehicleGroup:o}=n,a=r.rotation(),l=new me(a.x,a.y,a.z,a.w),c=new C(1,0,0).applyQuaternion(l),h=Math.asin(c.y),d=h<-.05&&e.input.fwd?-Math.sin(h)*10:1,u=this.params.power.accelerateForce*n.speedMultiplier,f=this.params.power.maxSpeed*n.speedMultiplier,m=(Number(e.input.fwd)-Number(e.input.bkd))*u*d;for(let M=0;M<4;M++)i.setWheelEngineForce(M,m);const _=Number(e.input.space)*this.params.power.brakeForce*t;for(let M=0;M<4;M++)i.setWheelBrake(M,_);const g=i.wheelSteering(0)||0,p=Number(e.input.lft)-Number(e.input.rgt),x=p===0?this.params.steering.steerReturnSpeed:this.params.steering.steerSpeed,S=jn.lerp(g,this.params.steering.maxSteerAngle*p,1-Math.pow(1-x,t));i.setWheelSteering(0,S),i.setWheelSteering(1,S);const y=(e.input.rgt||e.input.lft)&&e.input.shift?.5:2;if(i.setWheelSideFrictionStiffness(2,y),i.setWheelSideFrictionStiffness(3,y),this.updateInertia(t),!e.isFirstPerson){const M=o.position.clone();e.camera.position.sub(e.controls.target),e.controls.target.copy(M),e.camera.position.add(M),e.controls.update();const w=r.linvel(),v=new C(w.x,w.y,w.z).length(),A=Math.min(v/f,1),R=n.size.l*.8,P=n.size.l*5,D=jn.lerp(R,P,A);e.cam.playerToCam.subVectors(e.camera.position,o.position);const N=e.cam.playerToCam.clone().normalize();e.cam.raycaster.set(o.position,N),e.cam.raycaster.far=D;const F=e.cam.raycaster.intersectObject(e.collider,!1);if(F.length>0){const L=Math.max(F[0].distance-e.cam.epsilon,R);e.camera.position.lerp(o.position.clone().add(N.clone().multiplyScalar(L)),e.cam.collisionLerp)}else{e.cam.raycaster.far=P;const L=e.cam.raycaster.intersectObject(e.collider,!1),k=L.length>0?Math.min(D,L[0].distance-e.cam.epsilon):D;e.camera.position.lerp(o.position.clone().add(N.clone().multiplyScalar(k)),e.cam.collisionLerp)}if((e.input.fwd||e.input.bkd)&&this.params.followVehicleDirection){const L=r.linvel(),k=new C(L.x,L.y,L.z);if(k.length()>.3){this.camBehindDir.lerp(k.normalize().negate(),e.cam.collisionLerp).normalize();const V=M.clone().add(this.camBehindDir.clone().multiplyScalar(D)).add(new C(0,n.size.h,0));e.camera.position.lerp(V,e.cam.collisionLerp),e.controls.update()}}}if(e.upVector.clone().applyQuaternion(o.quaternion).angleTo(e.upVector)>Math.PI/2){const M=new C;n.vehicleBBox?.getSize(M);const w=r.translation();r.setTranslation(new this.RAPIER.Vector3(w.x,w.y+M.y,w.z),!0),r.setRotation(new this.RAPIER.Quaternion(0,0,0,1),!0),r.setLinvel(new this.RAPIER.Vector3(0,0,0),!0),r.setAngvel(new this.RAPIER.Vector3(0,0,0),!0)}}updateInertia(t){if(this.world){this.world.timestep=t,this.world.step();for(const e of this.list){const{vehicleController:n,chassisBody:i,vehicleGroup:r,updateWheelVisuals:o}=e;if(n.updateVehicle(t),i.isSleeping())continue;const a=i.linvel(),l=new C(a.x,a.y,a.z).length(),c=this.params.power.maxSpeed*e.speedMultiplier;if(l>c){const u=c/l;i.setLinvel(new this.RAPIER.Vector3(a.x*u,a.y*u,a.z*u),!0)}const h=i.translation(),d=i.rotation();r.position.set(h.x,h.y,h.z),r.quaternion.set(d.x,d.y,d.z,d.w),o?.()}}}setTransition(){this.ctrl.isChangeControllerTransitionTimer&&(clearTimeout(this.ctrl.isChangeControllerTransitionTimer),this.ctrl.isChangeControllerTransitionTimer=null),this.ctrl.isChangeControllerTransitionTimer=setTimeout(()=>{this.ctrl.isChangeControllerTransitionTimer=null,this.list.forEach(t=>this.clearVelocity(t))},3e3)}clearVelocity(t){if(!t||!this.world||!this.RAPIER)return;const{chassisBody:e,vehicleController:n}=t,i=new this.RAPIER.Vector3(0,0,0);e.setLinvel(i,!0),e.setAngvel(i,!0);for(let r=0;r<4;r++)n.setWheelEngineForce(r,0),n.setWheelBrake(r,1e6);n.updateVehicle(1/60),this.world.timestep=1/60,this.world.step(),e.setLinvel(i,!0),e.setAngvel(i,!0);for(let r=0;r<4;r++)n.setWheelBrake(r,0)}}function Md(){return{invMat:new Tt,localSeg:new Un,localBox:new ie,closestSeg:new C,closestTri:new C}}function bd(s,t,e,n,i){n.invMat.copy(e.matrixWorld).invert(),n.localSeg.start.copy(t.segment.start).applyMatrix4(s.matrixWorld).applyMatrix4(n.invMat),n.localSeg.end.copy(t.segment.end).applyMatrix4(s.matrixWorld).applyMatrix4(n.invMat),n.localBox.makeEmpty(),n.localBox.expandByPoint(n.localSeg.start).expandByPoint(n.localSeg.end),n.localBox.expandByScalar(t.radius),e.geometry?.boundsTree?.shapecast({intersectsBounds:l=>l.intersectsBox(n.localBox),intersectsTriangle:l=>{const c=l.closestPointToSegment(n.localSeg,n.closestSeg,n.closestTri);if(c>=t.radius)return;const h=n.closestTri.clone().sub(n.closestSeg).normalize();i?.(l,h)||(n.localSeg.start.addScaledVector(h,t.radius-c),n.localSeg.end.addScaledVector(h,t.radius-c))}});const r=n.closestSeg.copy(n.localSeg.start).applyMatrix4(e.matrixWorld),o=n.closestTri.subVectors(r,s.position),a=Math.max(0,o.length()-1e-5);s.position.add(o.normalize().multiplyScalar(a))}fe.prototype.raycast=lM;const CM=new cg;function RM(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)}class ZM{constructor(){this.loader=new wv,this.gravity=-2400,this.jumpHeight=600,this.playerSpeed=300,this.playerFlySpeed=2100,this.curPlayerSpeed=0,this.playerFlyEnabled=!0,this.enableOverShoulderView=!1,this.isShowMobileControls=!0,this.playerCapsuleRadius=30,this.playerCapsuleRadiusRatio=1,this.playerCapsuleHeight=180,this.isFirstPerson=!1,this.controllerMode=0,this.playerIsOnGround=!1,this.isupdate=!0,this.timeScale=1,this.isFlying=!1,this.isChangeControllerTransitionTimer=null,this.enableToward=!0,this.playerModel=null,this.playerModelHead=null,this.collider=null,this.visualizer=null,this.collected=[],this.dynamicColliders=[],this.activeDynamicCollider=null,this.slopeAngleThreshold=50,this.maxStepHeight=40,this.mobileControls=null,this.isNearVehicle=!1,this.nearCheckLocal=new C,this.nearCheckWorld=new C,this.displayPlayer=!1,this.displayCollider=!1,this.displayVisualizer=!1,this.rotationSpeed=10,this.upVector=new C(0,1,0),this.DIR_FWD=new C(0,0,-1),this.DIR_BKD=new C(0,0,1),this.DIR_LFT=new C(-1,0,0),this.DIR_RGT=new C(1,0,0),this.playerVelocity=new C,this.camDir=new C,this.moveDir=new C,this.targetQuat=new me,this.targetMat=new Tt,this.staticTemps=Md(),this.dynTemps=Md(),this.groundRaycaster=new gc(new C,new C(0,-1,0)),this.animation=new gM(this),this.cam=new _M(this),this.input=new xM(this),this.vehicle=new wM(this),this.groundRaycaster.firstHitOnly=!0}async init(t,e){const n=t.playerModelConfig,i=n.scale??1;this.scene=t.scene,this.camera=t.camera,this.camera.rotation.order="YXZ",this.controls=t.controls,this.playerModelConfig=n,this.initPos=t.initPos?new C(t.initPos.x,t.initPos.y,t.initPos.z):new C(0,0,0);const r=this.playerModelConfig;if(this.gravity=(r.gravity??this.gravity)*i,this.jumpHeight=(r.jumpHeight??this.jumpHeight)*i,this.playerSpeed=(r.speed??this.playerSpeed)*i,this.playerFlySpeed=(r.flySpeed??this.playerFlySpeed)*i,this.curPlayerSpeed=this.playerSpeed,this.playerFlyEnabled=r.flyEnabled??this.playerFlyEnabled,this.playerCapsuleRadiusRatio=r.capsuleRadiusRatio??this.playerCapsuleRadiusRatio,this.cam.sensitivity=t.mouseSensitivity??this.cam.sensitivity,this.cam.mouseMode=t.thirdMouseMode??this.cam.mouseMode,this.cam.enableSpringCamera=t.enableSpringCamera??this.cam.enableSpringCamera,this.cam.zoomEnabled=t.enableZoom??this.cam.zoomEnabled,this.cam.minDist=(t.minCamDistance??this.cam.minDist)*i,this.cam.maxDist=(t.maxCamDistance??this.cam.maxDist)*i,this.cam.lookAtHeightRatio=t.camLookAtHeightRatio??this.cam.lookAtHeightRatio,this.cam.originMaxDist=this.cam.maxDist,this.cam.epsilon=this.cam.epsilon*i,this.isShowMobileControls=(t.isShowMobileControls??this.isShowMobileControls)&&RM(),this.enableOverShoulderView=t.enableOverShoulderView??this.enableOverShoulderView,this.isFirstPerson=t.isFirstPerson??this.isFirstPerson,this.timeScale=t.timeScale??this.timeScale,this.isShowMobileControls&&(this.mobileControls=new mM(o=>this.input.setInput(o),this.controls),await this.mobileControls.init(t.mobileControls)),await this.initLoader(),this.buildStaticCollider(t.staticCollider),await this.loadPlayerModelGLB(),t.dynamicCollider){const o=Array.isArray(t.dynamicCollider)?t.dynamicCollider:[t.dynamicCollider];for(const a of o)this.addDynamicCollider(a)}this.input.bindEvents(),this.cam.setCamPos(),this.cam.initControls(),this.cam.setOverShoulder(this.isFirstPerson?!1:this.enableOverShoulderView),e?.()}async initLoader(){const t=new Tv;t.setDecoderPath("https://unpkg.com/three@0.182.0/examples/jsm/libs/draco/gltf/"),this.loader.setDRACOLoader(t)}async loadPlayerModelGLB(){try{const t=await this.loader.loadAsync(this.playerModelConfig.url);this.playerModel=t.scene,this.animation.mixer=new of(this.playerModel);const e=t.animations??[];this.animation.clips=e,this.animation.actions=new Map;const n=this.playerModelConfig,i=Array.isArray(n.jumpAnim);this.animation.hasThreePartJump=i;const r=[[n.idleAnim,"idle"],[n.walkAnim,"walking"],[n.leftWalkAnim||n.walkAnim,"left_walking"],[n.rightWalkAnim||n.walkAnim,"right_walking"],[n.backwardAnim||n.walkAnim,"walking_backward"],...i?[]:[[n.jumpAnim,"jumping"]],[n.runAnim,"running"],[n.flyIdleAnim||n.idleAnim,"flyidle"],[n.flyAnim||n.idleAnim,"flying"],[n.flyHoverForwardAnim||n.flyAnim||n.idleAnim,"flyHoverForward"],[n.flyHoverBackAnim||n.flyIdleAnim||n.idleAnim,"flyHoverBack"],[n.flyHoverLeftAnim||n.flyIdleAnim||n.idleAnim,"flyHoverLeft"],[n.flyHoverRightAnim||n.flyIdleAnim||n.idleAnim,"flyHoverRight"],[n.flyHoverUpAnim||n.flyIdleAnim||n.idleAnim,"flyHoverUp"],[n.flyHoverDownAnim||n.flyIdleAnim||n.idleAnim,"flyHoverDown"],[n.enterCarAnim||n.idleAnim,"enterCar"],[n.exitCarAnim||n.idleAnim,"exitCar"]];for(const[f,m]of r){const _=e.find(p=>p.name===f);if(!_)continue;const g=this.animation.mixer.clipAction(_);m==="jumping"?(g.setLoop(Rn,1),g.clampWhenFinished=!0,g.setEffectiveTimeScale(1.2)):(g.setLoop(Lr,1/0),g.setEffectiveTimeScale(1)),g.enabled=!0,g.setEffectiveWeight(0),this.animation.actions.set(m,g)}if(i){const[f,m,_]=n.jumpAnim,g=[[f,"jumpStart",Rn,!0],[m,"jumpLoop",Lr,!1],[_,"jumpEnd",Rn,!0]];for(const[p,x,S,y]of g){const T=e.find(w=>w.name===p);if(!T){console.warn(`找不到跳跃动画 clip: "${p}"`);continue}const M=this.animation.mixer.clipAction(T);M.setLoop(S,S===Rn?1:1/0),M.clampWhenFinished=y,M.setEffectiveTimeScale(x==="jumpStart"?1.2:1),M.enabled=!0,M.setEffectiveWeight(0),this.animation.actions.set(x,M)}}const o=new Map;for(const f of["idle","walking","walking_backward","running","jumping","flyidle","flying"]){const m=this.animation.actions.get(f);m&&o.set(f,m)}this.animation.sets.set("default",o),this.animation.actions.get("idle")?.setEffectiveWeight(1),this.animation.actions.get("idle")?.play(),this.animation.state=this.animation.actions.get("idle"),this.animation.mixerCb=f=>{const m=f.action,_=()=>{if(this.input.fwd){this.animation.playByName(this.input.shift?"running":"walking");return}if(this.input.bkd){this.animation.playByName("walking_backward");return}if(this.input.rgt||this.input.lft){this.animation.playByName("walking");return}this.animation.playByName("idle")};if(m===this.animation.actions?.get("jumping")){_();return}if(m===this.animation.actions?.get("jumpStart")){this.animation.playByName("jumpLoop");return}if(m===this.animation.actions?.get("jumpEnd")){_();return}m===this.animation.actions?.get("enterCar")&&this.vehicle.onEnterAnimFinished()},this.animation.mixer.addEventListener("finished",this.animation.mixerCb),this.animation.mixer.update(0),this.playerModel.updateMatrixWorld(!0);const{size:a}=this.getBbox(this.playerModel),l=this.playerCapsuleHeight/a.y,c=this.playerModelConfig.scale,h=this.playerCapsuleRadius*c*this.playerCapsuleRadiusRatio,d=this.playerCapsuleHeight*c;this.playerCapsule=new fe(new eh(h*2,d,h*2,1,75),new ha({color:new Dt(1,0,0),shadowSide:on,depthTest:!1,wireframe:!0,depthWrite:!1}));const u=d-2*h;this.playerCapsule.geometry.translate(0,-u/2,0),this.playerCapsule.capsuleInfo={radius:h,segment:new Un(new C,new C(0,-u,0))},this.playerCapsule.name="capsule",this.playerCapsule.material.visible=this.displayPlayer,this.scene.add(this.playerCapsule),this.reset(),this.playerCapsule.rotateY(this.playerModelConfig.rotateY??0),this.playerModel.scale.multiplyScalar(l*c),this.playerModel.position.set(0,-u-h,0),this.playerModel.traverse(f=>{f.name===this.playerModelConfig?.headBoneName&&(this.playerModelHead=f)}),this.playerCapsule.add(this.playerModel),this.reset()}catch(t){console.error("加载玩家模型失败:",t)}}async switchPlayerModel(t){const e=this.playerCapsule.position.clone(),n=this.playerCapsule.quaternion.clone(),i=this.isFirstPerson;i&&this.scene.attach(this.camera),this.playerCapsule&&this.scene.remove(this.playerCapsule),this.playerModel&&(this.playerCapsule.remove(this.playerModel),this.playerModel=null,this.playerModelHead=null);const r=this.animation;r.mixer&&(r.mixerCb&&(r.mixer.removeEventListener("finished",r.mixerCb),r.mixerCb=void 0),r.mixer.stopAllAction(),r.mixer.uncacheRoot(r.mixer.getRoot()),r.mixer=void 0,r.actions=void 0);const o=t.scale/this.playerModelConfig.scale;this.playerModelConfig={...this.playerModelConfig,...t},this.gravity*=o,this.jumpHeight*=o,this.playerSpeed*=o,this.playerFlySpeed*=o,this.curPlayerSpeed*=o,this.cam.epsilon*=o,this.cam.minDist*=o,this.cam.maxDist*=o,this.cam.originMaxDist*=o,await this.loadPlayerModelGLB(),this.playerCapsule.position.copy(e),this.playerCapsule.quaternion.copy(n),i&&this.cam.setFirstPerson(),this.setDebug(this.displayCollider)}getBbox(t){const e=new ie().setFromObject(t),n=new C,i=new C;return e.getCenter(n),e.getSize(i),{bbox:e,center:n,size:i}}ensureAttributesMinimal(t){if(!t.attributes.position)return null;if(t.attributes.normal||t.computeVertexNormals(),!t.attributes.uv){const e=t.attributes.position.count;t.setAttribute("uv",new ue(new Float32Array(e*2),2))}return t}unifiedAttribute(t){const e=new Map,n=new Set,i=new Set(["position","normal","uv"]);for(const r of t)for(const o of Object.keys(r.attributes))i.has(o)||r.deleteAttribute(o);for(const r of t)for(const o of Object.keys(r.attributes)){const a=r.attributes[o],l=a.array.constructor;if(!e.has(o))e.set(o,{itemSize:a.itemSize,arrayCtor:l,examples:1,normalized:a.normalized});else{const c=e.get(o);c.itemSize!==a.itemSize||c.arrayCtor!==l||c.normalized!==a.normalized?n.add(o):c.examples++}}for(const r of n){for(const o of t)o.attributes[r]&&o.deleteAttribute(r);e.delete(r)}for(const[r,o]of e)for(const a of t)if(!a.attributes[r]){const l=a.attributes.position.count;a.setAttribute(r,new ue(new o.arrayCtor(l*o.itemSize),o.itemSize,o.normalized))}return t}buildStaticCollider(t){this.collected=[],this.collider&&(this.scene.remove(this.collider),this.collider=null);const e=i=>{try{let r=i.geometry.clone();r.applyMatrix4(i.matrixWorld),r.index&&(r=r.toNonIndexed());const o=this.ensureAttributesMinimal(r);o&&this.collected.push(o)}catch(r){console.warn("处理网格时出错：",i,r)}};if(t){const i=Array.isArray(t)?t:[t];for(const r of i)r.updateMatrixWorld(!0),r.traverse(o=>{const a=o;(a.isMesh||a.isLineSegments)&&a.geometry&&o.name!=="capsule"&&e(a)})}else this.scene.traverse(i=>{const r=i;r?.isMesh&&r.geometry&&i.name!=="capsule"&&e(r)});if(!this.collected.length)return;this.collected=this.unifiedAttribute(this.collected);const n=Xu(this.collected,!1);if(!n){console.error("合并几何失败");return}n.boundsTree=new $s(n,{maxDepth:100}),this.collider=new fe(n,new Sn({opacity:.5,transparent:!0,wireframe:!0,depthTest:!0,side:on})),this.collider.layers.enable(1),this.displayCollider&&this.scene.add(this.collider),this.displayVisualizer&&(this.visualizer&&this.scene.remove(this.visualizer),this.visualizer=new ah(this.collider,10),this.scene.add(this.visualizer))}addDynamicCollider(t){if(this.dynamicColliders.find(a=>a.source===t))return;t.updateMatrixWorld(!0);const e=[],n=new Tt().copy(t.matrixWorld).invert();if(t.traverse(a=>{const l=a;if(!(!l?.isMesh||!l.geometry||a.name==="capsule"))try{let c=l.geometry.clone();c.applyMatrix4(new Tt().multiplyMatrices(n,l.matrixWorld)),c.index&&(c=c.toNonIndexed());const h=this.ensureAttributesMinimal(c);h&&e.push(h)}catch(c){console.warn("处理动态网格出错：",l,c)}}),!e.length)return;const i=this.unifiedAttribute(e),r=Xu(i,!1);if(!r){console.error("合并动态几何失败");return}r.boundsTree=new $s(r);const o=new fe(r,new Sn({opacity:.5,transparent:!0,wireframe:!0,depthTest:!0,side:on}));o.matrixAutoUpdate=!1,o.matrix.copy(t.matrixWorld),o.updateMatrixWorld(!0),this.dynamicColliders.push({source:t,mesh:o,prevWorldMatrix:new Tt().copy(t.matrixWorld),deltaPos:new C,deltaRotY:0}),this.displayCollider&&this.scene.add(o)}removeDynamicCollider(t){const e=this.dynamicColliders.findIndex(i=>i.source===t);if(e===-1)return;const n=this.dynamicColliders[e];this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.activeDynamicCollider===n&&(this.activeDynamicCollider=null),this.dynamicColliders.splice(e,1)}clearDynamicColliders(){for(const t of this.dynamicColliders)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.dynamicColliders=[],this.activeDynamicCollider=null}updateDynamicColliders(){if(!this.playerCapsule)return;const t=this.playerCapsule.position.clone();for(const e of this.dynamicColliders){const n=new Tt().copy(e.prevWorldMatrix).invert(),i=t.clone().applyMatrix4(n);e.source.updateMatrixWorld(!0),e.mesh.matrix.copy(e.source.matrixWorld),e.mesh.updateMatrixWorld(!0);const r=i.clone().applyMatrix4(e.source.matrixWorld);e.deltaPos.subVectors(r,t);const o=new Jn().setFromRotationMatrix(e.prevWorldMatrix,"YXZ"),a=new Jn().setFromRotationMatrix(e.source.matrixWorld,"YXZ");e.deltaRotY=a.y-o.y,e.prevWorldMatrix.copy(e.source.matrixWorld)}}shouldSkipTriCollision(t,e){const i=t.getNormal(new C).angleTo(this.upVector)*180/Math.PI;return i<this.slopeAngleThreshold||i>80&&i<100&&Math.max(t.a.y,t.b.y,t.c.y)-Math.min(t.a.y,t.b.y,t.c.y)<this.maxStepHeight*this.playerModelConfig.scale}async update(t=CM.getDelta()){!this.isupdate||!this.playerCapsule||!this.collider||(t=Math.min(t,1/40)*this.timeScale,this.controllerMode===1?this.vehicle.updateVehicle(t):(this.updatePlayer(t),this.isChangeControllerTransitionTimer&&this.vehicle.updateInertia(t)))}updatePlayer(t){this.updateDynamicColliders();const e=this.vehicle;if(e.isMovingToBoarding&&e.updateMoveTo(t),this.isFlying||this.playerCapsule.position.addScaledVector(this.playerVelocity,t),e.isBoardingAnim){const u=this.animation.actions?.get("enterCar");if(u){const f=u.getClip().duration,m=(f-u.time)/u.getEffectiveTimeScale()*1e3;if(!e.doorClosed&&m<=500&&(e.doorClosed=!0,e.openDoor(!1)),u.time>=f){e.isBoardingAnim=!1,e.doorClosed=!1,e.onEnterAnimFinished();return}}}if(e.isExitAnim){const u=this.animation.actions?.get("exitCar");if(u){const f=u.getClip().duration,m=(f-u.time)/u.getEffectiveTimeScale()*1e3;!e.exitDoorClosed&&m<=500&&(e.exitDoorClosed=!0,e.openDoor(!1)),u.time>=f&&(e.isExitAnim=!1,e.exitDoorClosed=!1,this.onVehicleExit?.(e.active))}}if(this.controllerMode===1){this.animation.updateMixers(t);return}this.camera.getWorldDirection(this.camDir);const n=2*Math.PI-(Math.atan2(this.camDir.z,this.camDir.x)+Math.PI/2);this.moveDir.set(0,0,0),this.input.fwd&&this.moveDir.add(this.DIR_FWD),this.input.bkd&&this.moveDir.add(this.DIR_BKD),this.input.lft&&this.moveDir.add(this.DIR_LFT),this.input.rgt&&this.moveDir.add(this.DIR_RGT),this.isFlying?(this.moveDir.y=this.input.fwd?this.camDir.y:0,this.input.space&&(this.moveDir.y+=1),this.input.ctrlKey&&(this.moveDir.y-=1),this.curPlayerSpeed=this.input.shift?this.playerFlySpeed*2:this.playerFlySpeed):this.curPlayerSpeed=this.input.shift?this.playerSpeed*2:this.playerSpeed,this.moveDir.normalize().applyAxisAngle(this.upVector,n),this.playerModelConfig.scale,this.groundRaycaster.ray.origin.copy(this.playerCapsule.position);let r=this.groundRaycaster.intersectObject(this.collider,!1)[0],o=null;for(const u of this.dynamicColliders){const f=this.groundRaycaster.intersectObject(u.mesh,!1);f.length>0&&(!r||f[0].point.y>r.point.y)&&(r=f[0],o=u)}if(this.activeDynamicCollider=o,!this.isFlying)if(r){const u=this.playerCapsule.capsuleInfo,f=parseFloat((-u.segment.end.y+u.radius).toFixed(6)),m=parseFloat((f*1.2).toFixed(6));parseFloat((this.playerCapsule.position.y-r.point.y).toFixed(6))>m?this.applyGravity(t):this.playerVelocity.y<=0&&this.snapToGround(r.point.y+f)}else this.applyGravity(t);const a=this.playerCapsule.capsuleInfo,l=this.curPlayerSpeed*t,c=a.radius*.8,h=Math.ceil(l/c)||1,d=l/h;for(let u=0;u<h;u++)if(this.playerCapsule.position.addScaledVector(this.moveDir,d),this.playerCapsule.updateMatrixWorld(),!e.isMovingToBoarding){bd(this.playerCapsule,a,this.collider,this.staticTemps,(f,m)=>!this.isFlying&&this.playerIsOnGround&&this.shouldSkipTriCollision(f,m));for(const f of this.dynamicColliders)this.playerCapsule.updateMatrixWorld(),bd(this.playerCapsule,a,f.mesh,this.dynTemps,(m,_)=>!this.isFlying&&this.playerIsOnGround&&this.shouldSkipTriCollision(m,_))}if(this.activeDynamicCollider&&this.playerIsOnGround&&!this.isFlying&&(this.playerCapsule.position.add(this.activeDynamicCollider.deltaPos),this.activeDynamicCollider.deltaRotY!==0&&this.playerCapsule.rotateY(this.activeDynamicCollider.deltaRotY)),!this.isFirstPerson){const u=this.camDir.clone().setY(0).normalize().negate(),f=this.moveDir.clone().normalize().negate();if(this.isFlying){const m=this.playerCapsule.position.clone().add(this.input.fwd?f:u);this.targetMat.lookAt(this.playerCapsule.position,m,this.playerCapsule.up),this.playerCapsule.quaternion.slerp(this.targetQuat.setFromRotationMatrix(this.targetMat),Math.min(1,this.rotationSpeed*t))}else if(this.cam.mouseMode===4||this.cam.mouseMode===5)this.targetMat.lookAt(this.playerCapsule.position,this.playerCapsule.position.clone().add(u),this.playerCapsule.up),this.playerCapsule.quaternion.copy(this.targetQuat.setFromRotationMatrix(this.targetMat));else if(this.cam.mouseMode===0||this.cam.mouseMode===2){const m=this.playerCapsule.position.clone().add(f.lengthSq()>0?f:u);this.targetMat.lookAt(this.playerCapsule.position,m,this.playerCapsule.up),this.playerCapsule.quaternion.slerp(this.targetQuat.setFromRotationMatrix(this.targetMat),Math.min(1,this.rotationSpeed*t))}else f.lengthSq()>0&&(this.targetMat.lookAt(this.playerCapsule.position,this.playerCapsule.position.clone().add(f),this.playerCapsule.up),this.playerCapsule.quaternion.slerp(this.targetQuat.setFromRotationMatrix(this.targetMat),Math.min(1,this.rotationSpeed*t)))}if(!this.isFirstPerson){const u=this.cam.applySpringToTarget(t);this.camera.position.sub(this.controls.target),this.camera.position.add(u),this.controls.target.copy(u),this.controls.update(),this.cam.zoomEnabled||this.cam.updateWithRaycast(this.controls.target,this.cam.playerToCam.subVectors(this.camera.position,this.controls.target).length(),this.cam.maxDist)}if(this.isShowMobileControls&&this.vehicle.list.length){let u=!1;for(const f of this.vehicle.list)if(this.nearCheckLocal.copy(f.boardingPoint).multiplyScalar(f.scale),f.vehicleGroup.localToWorld(this.nearCheckWorld.copy(this.nearCheckLocal)),this.playerCapsule.position.distanceTo(this.nearCheckWorld)<800*this.playerModelConfig.scale){u=!0;break}u!==this.isNearVehicle&&(this.isNearVehicle=u,this.mobileControls?.syncVehicleBtn(u))}this.animation.setAnimationByPressed(),this.animation.updateMixers(t)}syncDebugVisibility(){if(!this.playerCapsule)return;const t=this.displayCollider,e=this.controllerMode===1;this.collider&&(t?this.scene.children.includes(this.collider)||this.scene.add(this.collider):this.scene.remove(this.collider)),this.playerCapsule.material.visible=t&&!e;for(const n of this.dynamicColliders)t&&!e?this.scene.children.includes(n.mesh)||this.scene.add(n.mesh):this.scene.remove(n.mesh);this.vehicle.params.debug.showPhysicsBox=t&&e;for(const n of this.vehicle.list)n.physicsBoxMesh&&(t&&e?n.vehicleGroup.children.includes(n.physicsBoxMesh)||n.vehicleGroup.add(n.physicsBoxMesh):n.vehicleGroup.remove(n.physicsBoxMesh))}setOnGround(t){this.playerIsOnGround!==t&&(this.playerIsOnGround=t,this.onGroundChange?.(t),t?this.animation.onLand():this.animation.onBecomeAirborne())}applyGravity(t){this.playerVelocity.y+=t*this.gravity,this.playerCapsule.position.addScaledVector(this.playerVelocity,t),this.setOnGround(!1)}snapToGround(t){this.playerVelocity.set(0,0,0),this.playerCapsule.position.y=jn.lerp(this.playerCapsule.position.y,t,.5),this.setOnGround(!0)}setPlayerScale(t){if(t<=0)return;const e=t/this.playerModelConfig.scale;this.playerModelConfig.scale=t,this.gravity*=e,this.jumpHeight*=e,this.playerSpeed*=e,this.playerFlySpeed*=e,this.curPlayerSpeed*=e,this.cam.epsilon*=e,this.cam.minDist*=e,this.controls.minDistance*=e,this.cam.maxDist*=e,this.cam.originMaxDist*=e,this.isFirstPerson&&this.scene.attach(this.camera),this.playerCapsule?.scale.multiplyScalar(e),this.playerCapsule?.capsuleInfo&&(this.playerCapsule.capsuleInfo.radius*=e,this.playerCapsule.capsuleInfo.segment.end.y*=e),this.isFirstPerson&&this.cam.setFirstPerson()}reset(t){this.playerCapsule&&(this.playerVelocity.set(0,0,0),this.playerCapsule.position.copy(t??this.initPos))}getPosition(){return this.playerCapsule?.position}getVelocity(){return this.playerVelocity.clone()}getIsFirstPerson(){return this.isFirstPerson}getIsFlying(){return this.isFlying}getIsOnGround(){return this.playerIsOnGround}getControllerMode(){return this.controllerMode}getPlayerModel(){return this.playerModel}getPlayerCapsule(){return this.playerCapsule}getActiveVehicle(){return this.vehicle.active}getAllVehicles(){return this.vehicle.list}getCollider(){return this.collider}getActiveDynamicCollider(){return this.activeDynamicCollider}setMouseSensitivity(t){this.cam.sensitivity=t,this.controls.rotateSpeed=t*.05}setGravity(t){this.gravity=t*this.playerModelConfig.scale}setJumpHeight(t){this.jumpHeight=t*this.playerModelConfig.scale}setPlayerSpeed(t){this.playerSpeed=t*this.playerModelConfig.scale,this.curPlayerSpeed=this.playerSpeed}setPlayerFlySpeed(t){this.playerFlySpeed=t*this.playerModelConfig.scale}setEnableToward(t){this.enableToward=t}setMinCamDistance(t){this.cam.minDist=t*this.playerModelConfig.scale}setMaxCamDistance(t){this.cam.maxDist=t*this.playerModelConfig.scale,this.cam.originMaxDist=this.cam.maxDist}setCamLookAtHeightRatio(t){this.cam.lookAtHeightRatio=t}setThirdMouseMode(t){this.cam.mouseMode=t,this.cam.setPointerLock()}setEnableZoom(t){this.cam.zoomEnabled=t,this.controls.enableZoom=t}setDebug(t){this.displayCollider=t,this.syncDebugVisibility()}playPlayerAnimationByName(t,e){this.animation.playByName(t,e)}registerAnimation(t,e,n){this.animation.register(t,e,n)}playAnimation(t,e){this.animation.play(t,e)}registerLocomotionSet(t,e){this.animation.registerLocomotionSet(t,e)}switchLocomotionSet(t,e){this.animation.switchLocomotionSet(t,e)}getCurrentPlayerAnimationName(){return this.animation.getCurrentName()}getCurrentLocomotionSet(){return this.animation.currentLocomotionSet}changeView(){this.cam.changeView()}setFirstPersonCamera(t=0){this.cam.setFirstPerson(t)}setPointerLock(){this.cam.setPointerLock()}setOverShoulderView(t){this.cam.setOverShoulder(t)}getCenterScreenRaycastHit(){return this.cam.getCenterHit()}setInput(t){this.input.setInput(t)}onAllEvent(){this.input.bindEvents()}offAllEvent(){this.input.unbindEvents()}loadVehicleModel(t){return this.vehicle.load(t)}destroy(){this.input.unbindEvents(),this.playerCapsule&&(this.playerCapsule.remove(this.camera),this.scene.remove(this.playerCapsule)),this.playerCapsule=null,this.playerModel&&(this.scene.remove(this.playerModel),this.playerModel=null),this.cam.resetControls(),this.visualizer&&(this.scene.remove(this.visualizer),this.visualizer=null),this.collider&&(this.scene.remove(this.collider),this.collider=null),this.mobileControls?.destroy(),this.mobileControls=null,this.clearDynamicColliders();for(const t of this.vehicle.list)this.scene.remove(t.vehicleGroup),t.pathPlanner?.dispose(),t.vehicleController?.destroy?.();this.vehicle.list=[],this.vehicle.active=null}}export{Se as $,Cd as A,ie as B,cg as C,Tv as D,ya as E,gi as F,wv as G,In as H,kr as I,Lm as J,rm as K,Dm as L,Sn as M,Yd as N,YM as O,rn as P,me as Q,gc as R,NM as S,qM as T,ym as U,C as V,jM as W,xe as X,ue as Y,Dt as Z,Kc as _,kM as a,Ho as a$,is as a0,pn as a1,Js as a2,ns as a3,bn as a4,Hf as a5,Vf as a6,Ff as a7,WM as a8,_u as a9,Nn as aA,Bc as aB,Ue as aC,we as aD,cn as aE,PM as aF,sf as aG,zM as aH,IM as aI,DM as aJ,_i as aK,Or as aL,Fe as aM,Gt as aN,BM as aO,FM as aP,Kd as aQ,Yn as aR,Ii as aS,Fl as aT,Ul as aU,ic as aV,Jo as aW,lc as aX,oc as aY,ac as aZ,Xo as a_,ae as aa,Un as ab,of as ac,Lr as ad,Rn as ae,eh as af,HM as ag,qm as ah,he as ai,LM as aj,an as ak,ln as al,hf as am,fi as an,Wm as ao,Ne as ap,da as aq,ca as ar,fc as as,GM as at,Mm as au,Ch as av,Hd as aw,Fc as ax,Wc as ay,Oc as az,Zc as b,Go as b0,jl as b1,Gl as b2,Hl as b3,Zo as b4,Vl as b5,zl as b6,Ol as b7,kl as b8,kd as b9,Bd as ba,Fd as bb,Ir as bc,Ld as bd,Ll as be,Bl as bf,rc as bg,OM as bh,UM as bi,mc as bj,Fm as bk,VM as bl,Km as bm,Mh as bn,ks as bo,Os as bp,Ns as bq,fe as c,XM as d,$d as e,ha as f,on as g,bt as h,Hm as i,jn as j,Tt as k,Vt as l,$n as m,Qe as n,ss as o,ZM as p,Tr as q,Mu as r,tn as s,Ft as t,Qn as u,Fi as v,Jn as w,gu as x,KM as y,Xn as z};
