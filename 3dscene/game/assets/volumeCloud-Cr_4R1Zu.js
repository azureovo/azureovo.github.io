import{j as V,au as F,n as P,V as S,Z as A,av as O,c as T,o as j,aw as G,ax as R,$ as B}from"./playerController-BA7oBZYI.js";const{lerp:f}=V,r=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let e=0;e<256;e++)r[256+e]=r[e];function g(e){return e*e*e*(e*(e*6-15)+10)}function v(e,t,a,o){const n=e&15,c=n<8?t:a,i=n<4?a:n==12||n==14?t:o;return((n&1)==0?c:-c)+((n&2)==0?i:-i)}class k{noise(t,a,o){const n=Math.floor(t),c=Math.floor(a),i=Math.floor(o),m=n&255,u=c&255,s=i&255;t-=n,a-=c,o-=i;const l=t-1,d=a-1,p=o-1,x=g(t),h=g(a),C=g(o),b=r[m]+u,_=r[b]+s,w=r[b+1]+s,M=r[m+1]+u,y=r[M]+s,D=r[M+1]+s;return f(f(f(v(r[_],t,a,o),v(r[y],l,a,o),x),f(v(r[w],t,d,o),v(r[D],l,d,o),x),h),f(f(v(r[_+1],t,a,p),v(r[y+1],l,a,p),x),f(v(r[w+1],t,d,p),v(r[D+1],l,d,p),x),h),C)}}const L=`
    in vec3 position;

    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec3 cameraPos;

    out vec3 vOrigin;
    out vec3 vDirection;

    void main() {
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

        vOrigin = vec3( inverse( modelMatrix ) * vec4( cameraPos, 1.0 ) ).xyz;
        vDirection = position - vOrigin;

        gl_Position = projectionMatrix * mvPosition;
    }
`,N=`
    precision highp float;
    precision highp sampler3D;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    in vec3 vOrigin;
    in vec3 vDirection;

    out vec4 color;

    uniform vec3 base;
    uniform sampler3D map;

    uniform float threshold;
    uniform float range;
    uniform float opacity;
    uniform float steps;
    uniform float frame;

    uint wang_hash(uint seed)
    {
        seed = (seed ^ 61u) ^ (seed >> 16u);
        seed *= 9u;
        seed = seed ^ (seed >> 4u);
        seed *= 0x27d4eb2du;
        seed = seed ^ (seed >> 15u);
        return seed;
    }

    float randomFloat(inout uint seed)
    {
        return float(wang_hash(seed)) / 4294967296.;
    }

    vec2 hitBox( vec3 orig, vec3 dir ) {
        const vec3 box_min = vec3( - 0.5 );
        const vec3 box_max = vec3( 0.5 );
        vec3 inv_dir = 1.0 / dir;
        vec3 tmin_tmp = ( box_min - orig ) * inv_dir;
        vec3 tmax_tmp = ( box_max - orig ) * inv_dir;
        vec3 tmin = min( tmin_tmp, tmax_tmp );
        vec3 tmax = max( tmin_tmp, tmax_tmp );
        float t0 = max( tmin.x, max( tmin.y, tmin.z ) );
        float t1 = min( tmax.x, min( tmax.y, tmax.z ) );
        return vec2( t0, t1 );
    }

    float sample1( vec3 p ) {
        return texture( map, p ).r;
    }

    float shading( vec3 coord ) {
        float step = 0.01;
        return sample1( coord + vec3( - step ) ) - sample1( coord + vec3( step ) );
    }

    vec4 linearToSRGB( in vec4 value ) {
        return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
    }

    void main(){
        vec3 rayDir = normalize( vDirection );
        vec2 bounds = hitBox( vOrigin, rayDir );

        if ( bounds.x > bounds.y ) discard;

        bounds.x = max( bounds.x, 0.0 );

        float stepSize = ( bounds.y - bounds.x ) / steps;

        uint seed = uint( gl_FragCoord.x ) * uint( 1973 ) + uint( gl_FragCoord.y ) * uint( 9277 ) + uint( frame ) * uint( 26699 );
        vec3 size = vec3( textureSize( map, 0 ) );
        float randNum = randomFloat( seed ) * 2.0 - 1.0;
        vec3 p = vOrigin + bounds.x * rayDir;
        p += rayDir * randNum * ( 1.0 / size );

        vec4 ac = vec4( base, 0.0 );

        for ( float i = 0.0; i < steps; i += 1.0 ) {
            float d = sample1( p + 0.5 );

            d = smoothstep( threshold - range, threshold + range, d ) * opacity;

            float col = shading( p + 0.5 ) * 3.0 + ( ( p.x + p.y ) * 0.25 ) + 0.2;

            ac.rgb += ( 1.0 - ac.a ) * d * col;
            ac.a += ( 1.0 - ac.a ) * d;

            if ( ac.a >= 0.95 ) break;

            p += rayDir * stepSize;
        }

        color = linearToSRGB( ac );

        if ( color.a == 0.0 ) discard;
    }
`;function U(e,t){const a=new Uint8Array(e*e*e),o=new k,n=new S;let c=0;for(let m=0;m<e;m++)for(let u=0;u<e;u++)for(let s=0;s<e;s++){const l=1-n.set(s,u,m).subScalar(e/2).divideScalar(e).length();a[c]=(128+128*o.noise(s*t/1.5,u*t,m*t/1.5))*l*l,c++}const i=new G(a,e,e,e);return i.format=R,i.minFilter=B,i.magFilter=B,i.unpackAlignment=1,i.needsUpdate=!0,i}function W(e={}){const{size:t=96,noiseScale:a=.05,color:o=7965344,threshold:n=.25,opacity:c=.25,range:i=.1,steps:m=80,scale:u=[3,1.5,2.2]}=e,s=U(t,a),l=new F({glslVersion:O,uniforms:{base:{value:new A(o)},map:{value:s},cameraPos:{value:new S},threshold:{value:n},opacity:{value:c},range:{value:i},steps:{value:m},frame:{value:0}},vertexShader:L,fragmentShader:N,side:P,transparent:!0,depthWrite:!0}),d=new T(new j(1,1,1),l);return d.name="volumeCloud",d.scale.set(...u),d.frustumCulled=!1,d}function X(e,t,a=0){if(!e?.material?.uniforms||!t||!e.material.visible)return;const o=e.material.uniforms;t.getWorldPosition(o.cameraPos.value),o.frame.value+=1,a!==0&&(e.rotation.y+=a/60)}function Y(e){e&&(e.geometry?.dispose(),e.material?.uniforms?.map?.value?.dispose(),e.material?.dispose())}export{W as c,Y as d,X as u};
