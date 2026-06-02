import{c as q,m as Q,n as $,U as J,o as ee,V as x,S as te,G as oe,W as ae,A as ne,q as ie,P as se,O as re,i as le,D as ce,p as de,h as ue,R as me,r as he,j as P,s as fe,t as pe,k as S,u as L}from"./playerController-BA7oBZYI.js";import{L as ve,a as O}from"./LightProbeGridHelper-C2owk7XM.js";import{g as ge}from"./lil-gui.module.min-DqZR5HPe.js";import{S as we}from"./stats.module--VATS4Kh.js";import{K as ye}from"./KTX2Loader-XosHk8At.js";import{U as be,b as Me}from"./WMSCapabilitiesLoader-nJS67eJn-DEVKJWAt.js";import"./Pass-csPtpUry.js";class F extends q{constructor(){const t=F.SkyShader,n=new Q({name:t.name,uniforms:J.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:$,depthWrite:!1});super(new ee(1,1,1),n),this.isSky=!0}}F.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new x},up:{value:new x(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// Cloud noise functions
		float hash( vec2 p ) {
			return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 );
		}

		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			f = f * f * ( 3.0 - 2.0 * f );
			float a = hash( i );
			float b = hash( i + vec2( 1.0, 0.0 ) );
			float c = hash( i + vec2( 0.0, 1.0 ) );
			float d = hash( i + vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
		}

		float fbm( vec2 p ) {
			float value = 0.0;
			float amplitude = 0.5;
			for ( int i = 0; i < 5; i ++ ) {
				value += amplitude * noise( p );
				p *= 2.0;
				amplitude *= 0.5;
			}
			return value;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta ) * showSunDisc;
			L0 += ( vSunE * 19000.0 * Fex ) * sundisc;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Multi-octave noise for fluffy clouds
				float cloudNoise = fbm( cloudUV * 1000.0 );
				cloudNoise += 0.5 * fbm( cloudUV * 2000.0 + 3.7 );
				cloudNoise = cloudNoise * 0.5 + 0.5;

				// Apply coverage threshold
				float cloudMask = smoothstep( 1.0 - cloudCoverage, 1.0 - cloudCoverage + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.1 + 0.2 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting based on sun position
				float sunInfluence = dot( direction, vSunDirection ) * 0.5 + 0.5;
				float daylight = max( 0.0, vSunDirection.y * 2.0 );

				// Base cloud color affected by atmosphere
				vec3 atmosphereColor = Lin * 0.04;
				vec3 cloudColor = mix( vec3( 0.3 ), vec3( 1.0 ), daylight );
				cloudColor = mix( cloudColor, atmosphereColor + vec3( 1.0 ), sunInfluence * 0.5 );
				cloudColor *= vSunE * 0.00002;

				// Blend clouds with sky
				texColor = mix( texColor, cloudColor, cloudMask * cloudDensity );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Se=["bim/1F/tileset.json","bim/2F/tileset.json","bim/3F/tileset.json","bim/4F/tileset.json","bim/5F/tileset.json","bim/6F/tileset.json","bim/7F/tileset.json","bim/8F/tileset.json","bim/9F/tileset.json","bim/10F/tileset.json"],Ee=[{mesh_0_29:"glass"},{mesh_0_12:"glass"},{mesh_0_8:"glass"},{mesh_0_9:"glass"},{mesh_0_5:"glass"},{mesh_0_6:"glass"},{mesh_0_16:"glass"},{mesh_0_6:"glass"},{mesh_0_13:"glass"},{mesh_0_11:"glass"}],k={glass(e){const t=e.material;e.material=new L({map:t.map||null,normalMap:t.normalMap||null,roughnessMap:t.roughnessMap||null,metalnessMap:t.metalnessMap||null,aoMap:t.aoMap||null,metalness:0,roughness:0,transmission:.9,ior:1.6,transparent:!0,opacity:.85,envMapIntensity:1,thickness:.1,clearcoat:1,clearcoatRoughness:.05}),e.material.needsUpdate=!0},floor(e){const t=e.material;e.material=new L({map:t.map||null,normalMap:t.normalMap||null,roughnessMap:t.roughnessMap||null,aoMap:t.aoMap||null,metalness:0,roughness:.3,envMapIntensity:.8,clearcoat:.6,clearcoatRoughness:.1}),e.material.needsUpdate=!0,e.castShadow=o.shadows,e.receiveShadow=o.shadows,e.frustumCulled=!1},metal(e){const t=e.material;e.material=new L({map:t.map||null,normalMap:t.normalMap||null,roughnessMap:t.roughnessMap||null,metalnessMap:t.metalnessMap||null,aoMap:t.aoMap||null,metalness:1,roughness:0,envMapIntensity:1.5}),e.material.needsUpdate=!0,e.castShadow=o.shadows,e.receiveShadow=o.shadows,e.frustumCulled=!1},hidden(e){e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose(),e.removeFromParent()},_default(e){e.castShadow=o.shadows,e.receiveShadow=o.shadows,e.frustumCulled=!1}},m=new te,D=new oe,I=new we;let d,s,v;const w=[];let V=!0,M=null,W=!1,z,h=null,u=null,g,E=null;const B=new x;let c;const o={enabled:!0,showProbes:!1,skyEnvMap:!1,probeSize:.25,boundsX:0,boundsY:19,boundsZ:-8,sizeX:60,sizeY:37,sizeZ:20,countX:14,countY:12,countZ:5,lightAzimuth:45,lightElevation:19,lightIntensity:50,shadows:!0};xe();async function xe(){const e=document.querySelector("#container");s=new ae({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),s.toneMapping=ne,s.toneMappingExposure=.1,s.shadowMap.enabled=!0,s.shadowMap.type=ie,e.appendChild(s.domElement),Object.assign(I.dom.style,{position:"fixed",bottom:"0",left:"0",top:"auto",zIndex:"9998"}),document.body.appendChild(I.dom),d=new se(60,window.innerWidth/window.innerHeight,.1,1e3),d.rotation.order="YXZ",v=new re(d,s.domElement),v.maxDistance=2e3,v.maxPolarAngle=Math.PI/2,v.enableDamping=!0,v.dampingFactor=.1,v.target.set(0,0,0),v.update(),c=new le(16773852,o.lightIntensity),c.castShadow=!0,c.shadow.mapSize.setScalar(2048);const t=Math.max(o.sizeX,o.sizeZ)*.7;c.shadow.camera.left=-t,c.shadow.camera.right=t,c.shadow.camera.top=t,c.shadow.camera.bottom=-t,c.shadow.camera.near=.1,c.shadow.camera.far=o.sizeY*4,c.shadow.bias=-.001,m.add(c),m.add(c.target),g=new F,g.scale.setScalar(45e4),m.add(g);const n=g.material.uniforms;n.turbidity.value=10,n.rayleigh.value=2,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.8,E=new he(s),E.compileCubemapShader(),j();const a=new ce;a.setDecoderPath("https://unpkg.com/three@0.180.0/examples/jsm/libs/draco/"),D.setDRACOLoader(a);const i=new ye;i.setTranscoderPath("https://unpkg.com/three@0.180.0/examples/jsm/libs/basis/"),i.detectSupport(s),D.setKTX2Loader(i),s.setAnimationLoop(Ce),window.hideLoader(),await Re(Se),V=!1,ze(),m.environment=E.fromScene(g).texture,await X(),m.environment=o.skyEnvMap?E.fromScene(g).texture:null;const r=document.getElementById("start-btn");r.addEventListener("click",async()=>{r.style.display="none",document.getElementById("hints").style.display="block",await Pe()}),window.addEventListener("resize",Le),Fe()}function Ce(){W&&M?M.update():v.update(),V&&w.forEach(e=>e.update()),s.render(m,d),I.update()}async function Pe(){s.render(m,d),W=!0,M=new de,await M.init({scene:m,camera:d,controls:v,playerModelConfig:{url:"./glb/UEPerson.glb",scale:.01,idleAnim:"idle",walkAnim:"walk",runAnim:"run",jumpAnim:["jumpStart","jumpLoop","jumpEnd"],flyAnim:"fly",flyIdleAnim:"flyIdle",flyHoverForwardAnim:"flyHoverForward",flyHoverBackAnim:"flyHoverBack",flyHoverLeftAnim:"flyHoverLeft",flyHoverRightAnim:"flyHoverRight",flyHoverUpAnim:"flyHoverUp",flyHoverDownAnim:"flyHoverDown",rotateY:Math.PI},initPos:new x(1.27,0,11.524),minCamDistance:50,maxCamDistance:220,enableOverShoulderView:!0}),M.getPlayerModel()?.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),M.onViewChange=e=>{d.fov=e?75:60,d.updateProjectionMatrix()}}function j(){const e=P.degToRad(o.lightAzimuth),t=P.degToRad(o.lightElevation),n=100,a=Math.cos(t)*n,i=Math.sin(t)*n;c.position.set(Math.cos(e)*a,i,Math.sin(e)*a),c.target.position.set(0,0,0),c.target.updateMatrixWorld();const r=P.degToRad(90-o.lightElevation),l=P.degToRad(o.lightAzimuth);B.setFromSphericalCoords(1,r,l),g.material.uniforms.sunPosition.value.copy(B)}let R=null;function A(){R!==null&&clearTimeout(R),R=setTimeout(()=>{R=null,X()},250)}let T=!1,_=!1;async function X(){if(T){_=!0;return}T=!0,document.getElementById("bake-overlay").classList.add("visible"),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));do{_=!1,h&&(m.remove(h),h.dispose()),h=new ve(o.sizeX,o.sizeY,o.sizeZ,o.countX,o.countY,o.countZ),h.position.set(o.boundsX,o.boundsY,o.boundsZ),u&&(u.visible=!1);const e=Math.max(o.sizeX,o.sizeY,o.sizeZ)*2;h.bake(s,m,{cubemapSize:32,near:.05,far:e}),h.visible=o.enabled,m.add(h),u?(u.probes=h,u.update()):(u=new O(h,o.probeSize),m.add(u)),u.visible=o.showProbes}while(_);T=!1,document.getElementById("bake-overlay").classList.remove("visible")}function ze(){z=new ge;const e=z.addFolder("Environment");e.add(o,"skyEnvMap").name("Sky Env Map").onChange(a=>{m.environment=a?E.fromScene(g).texture:null}),e.open();const t=z.addFolder("Global Illumination (GI)");t.add(o,"enabled").name("Enable GI").onChange(a=>{h&&(h.visible=a)}),t.add(o,"showProbes").name("Show Probes").onChange(a=>{u&&(u.visible=a)}),t.add(o,"probeSize",.05,2,.05).name("Probe Size").onChange(a=>{u&&(m.remove(u),u.dispose(),u=new O(h,a),u.visible=o.showProbes,m.add(u))});const n=z.addFolder("Sun Settings");n.add(o,"lightAzimuth",-180,180,1).name("Azimuth").onChange(()=>{j()}).onFinishChange(()=>{A()}),n.add(o,"lightElevation",0,90,1).name("Elevation").onChange(()=>{j()}).onFinishChange(()=>{A()}),n.add(o,"lightIntensity",0,100,.1).name("Intensity").onChange(a=>{c.intensity=a}).onFinishChange(()=>{A()}),n.add(o,"shadows").name("Shadows").onFinishChange(a=>{s.shadowMap.enabled=a,c.castShadow=a,w.forEach(i=>{i.group.traverse(r=>{r.isMesh&&(r.castShadow=a,r.receiveShadow=a)})}),A()}),n.open()}function U(e,t){const n=new be(e);n.manager.addHandler(/\.(gltf|glb)$/g,D),n.errorTarget=4,n.displayActiveTiles=!0,n.registerPlugin(new Me);const a=Ee[t]??{};return n.addEventListener("load-model",({scene:i})=>{if(!i)return;const r=[];i.traverse(l=>{if(l.isMesh){const p=a[l.name];p==="hidden"?r.push(l):(k[p]??k._default)(l)}}),r.forEach(l=>k.hidden(l))}),m.add(n.group),n.setCamera(d),n.setResolutionFromRenderer(d,s),w.push(n),n}async function Re(e){const t=U(e[0],0),n=await new Promise(a=>{const i=()=>{const r=new fe;t.getBoundingSphere(r);const l=r.center.clone(),p=r.radius,y=new x(p*1.2,p,p*1.2),b=t.root;let f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];b?.children?.length>1&&b?.children[0].content?.uri?.includes("tileset.json")?b?.children[0]?.children&&(f=b.children[0].children[0].transform??f):b?.transform&&(f=b.transform);const Z=new pe().set(f[0],f[1],f[2],f[8],f[9],f[10],-f[4],-f[5],-f[6]),N=new S().setFromMatrix3(Z),Y=new S().makeTranslation(l.x,l.y,l.z),K=new S().makeTranslation(-l.x,-l.y,-l.z);let C=new S().multiplyMatrices(Y,N).multiply(K);C=new S().makeTranslation(-l.x,-l.y,-l.z).multiply(C),t.group.matrix.copy(C),t.group.matrixAutoUpdate=!1,t.group.updateMatrixWorld(!0),v.target.set(0,0,0),d.position.copy(y),d.lookAt(0,0,0),d.updateProjectionMatrix(),t.removeEventListener("load-tileset",i),a(C)};t.addEventListener("load-tileset",i)});for(let a=1;a<e.length;a++){const i=U(e[a],a);i.group.matrix.copy(n),i.group.matrixAutoUpdate=!1,i.group.updateMatrixWorld(!0)}await Ae()}function Ae(){return new Promise(e=>{let t=0;const n=30;let a=!1;function i(){const r=w.reduce((p,y)=>p+y.stats.downloading,0),l=w.reduce((p,y)=>p+y.stats.parsing,0);if(!a&&(r>0||l>0)&&(a=!0),a&&r===0&&l===0){if(t++,t>=n){e();return}}else t=0;requestAnimationFrame(i)}requestAnimationFrame(i)})}const H=new me,G=new ue;function Fe(){s.domElement.addEventListener("click",e=>{const t=s.domElement.getBoundingClientRect();G.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),H.setFromCamera(G,d);const n=[];w.forEach(i=>i.group.traverse(r=>{r.isMesh&&n.push(r)}));const a=H.intersectObjects(n,!1);a.length>0&&a[0].object})}function Le(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),w.forEach(e=>e.setResolutionFromRenderer(d,s))}
