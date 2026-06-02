import{ai as L,V as m,B as k,aa as H,aj as q,$ as F,ak as N,al as j,am as O,an as K,ao as $,a4 as J,ap as U,m as S,aq as Q,c as Y,ar as ee,S as te,K as ce,b as ae,as as M,k as se}from"./playerController-BA7oBZYI.js";let x=null,y=null,f=null,w=null,R=0,u=null,p=null,E=null,B=0,C=0,W=0,b=null,D=0;const V=new m,P=new m,Z=new H,A=new H,_=1;class ue extends L{constructor(e=1,c=1,s=1,r,a,t){super(),this.isLightProbeGrid=!0,this.width=e,this.height=c,this.depth=s,this.resolution=new m(r!==void 0?r:Math.max(2,Math.round(e)+1),a!==void 0?a:Math.max(2,Math.round(c)+1),t!==void 0?t:Math.max(2,Math.round(s)+1)),this.boundingBox=new k,this.texture=null,this._renderTarget=null,this.updateBoundingBox()}getProbePosition(e,c,s,r){const a=this.position,t=this.resolution,l=this.width,o=this.height,d=this.depth;return r.set(t.x>1?a.x-l/2+e*l/(t.x-1):a.x,t.y>1?a.y-o/2+c*o/(t.y-1):a.y,t.z>1?a.z-d/2+s*d/(t.z-1):a.z),r}updateBoundingBox(){P.set(this.width,this.height,this.depth),this.boundingBox.setFromCenterAndSize(this.position,P)}bake(e,c,s={}){const{cubeRenderTarget:r,cubeCamera:a}=re(s);this._ensureTextures(),this.updateBoundingBox(),this.visible=!1;const t=this.resolution,l=t.x*t.y*t.z,o=ne(l),d=e.getRenderTarget();e.getViewport(Z),e.getScissor(A);const h=e.getScissorTest();o.scissorTest=!1,o.viewport.set(0,0,9,l),e.setRenderTarget(o),e.clear(),o.scissorTest=!0;const G=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0;for(let i=0;i<t.z;i++)for(let v=0;v<t.y;v++)for(let T=0;T<t.x;T++){const I=T+v*t.x+i*t.x*t.y;this.getProbePosition(T,v,i,V),a.position.copy(V),a.update(e,c),w.uniforms.envMap.value=r.texture,f.material=w,o.viewport.set(0,I,9,1),o.scissor.set(0,I,9,1),e.setRenderTarget(o),e.render(x,y)}e.shadowMap.autoUpdate=G,oe();const z=t.z+2*_,g=this._renderTarget;g.scissorTest=!1,g.viewport.set(0,0,t.x,t.y);for(let i=0;i<7;i++){u[i].uniforms.batchTexture.value=o.texture,u[i].uniforms.resolution.value.copy(t);for(let v=0;v<t.z;v++)u[i].uniforms.sliceZ.value=v,f.material=u[i],e.setRenderTarget(g,i*z+_+v),e.render(x,y);u[i].uniforms.sliceZ.value=0,f.material=u[i],e.setRenderTarget(g,i*z),e.render(x,y),u[i].uniforms.sliceZ.value=t.z-1,f.material=u[i],e.setRenderTarget(g,i*z+_+t.z),e.render(x,y)}e.setRenderTarget(d),e.setViewport(Z),e.setScissor(A),e.setScissorTest(h),this.visible=!0}_ensureTextures(){if(this._renderTarget!==null)return;const e=this.resolution,c=e.x,s=e.y,a=7*(e.z+2*_),t=new q(c,s,a,{format:j,type:N,minFilter:F,magFilter:F,generateMipmaps:!1,depthBuffer:!1});this._renderTarget=t,this.texture=t.texture}dispose(){this._renderTarget!==null&&(this._renderTarget.dispose(),this._renderTarget=null,this.texture=null)}}function X(){x===null&&(y=new Q(-1,1,1,-1,0,1),f=new Y(new ee(2,2)),x=new te,x.add(f))}function ie(n){X(),n!==R&&(w!==null&&w.dispose(),w=new S({precision:"highp",defines:{CUBEMAP_SIZE:n},uniforms:{envMap:{value:null}},vertexShader:`
				void main() {
					gl_Position = vec4( position.xy, 0.0, 1.0 );
				}
			`,fragmentShader:`
				#include <common>

				uniform samplerCube envMap;

				void main() {

					int coefIndex = int( gl_FragCoord.x );

					vec3 accum0 = vec3( 0.0 );
					vec3 accum1 = vec3( 0.0 );
					vec3 accum2 = vec3( 0.0 );
					vec3 accum3 = vec3( 0.0 );
					vec3 accum4 = vec3( 0.0 );
					vec3 accum5 = vec3( 0.0 );
					vec3 accum6 = vec3( 0.0 );
					vec3 accum7 = vec3( 0.0 );
					vec3 accum8 = vec3( 0.0 );
					float totalWeight = 0.0;
					float pixelSize = 2.0 / float( CUBEMAP_SIZE );

					for ( int face = 0; face < 6; face ++ ) {

						for ( int iy = 0; iy < CUBEMAP_SIZE; iy ++ ) {

							for ( int ix = 0; ix < CUBEMAP_SIZE; ix ++ ) {

								// WebGL cubemaps have a left-handed orientation (flip = -1)
								float col = ( float( ix ) + 0.5 ) * pixelSize - 1.0;
								float row = 1.0 - ( float( iy ) + 0.5 ) * pixelSize;

								vec3 coord;

								if ( face == 0 ) coord = vec3( 1.0, row, -col );
								else if ( face == 1 ) coord = vec3( -1.0, row, col );
								else if ( face == 2 ) coord = vec3( col, 1.0, -row );
								else if ( face == 3 ) coord = vec3( col, -1.0, row );
								else if ( face == 4 ) coord = vec3( col, row, 1.0 );
								else coord = vec3( -col, row, -1.0 );

								float lengthSq = dot( coord, coord );
								float weight = 4.0 / ( sqrt( lengthSq ) * lengthSq );
								totalWeight += weight;

								vec3 dir = normalize( coord );
								vec3 cw = textureCube( envMap, coord ).rgb * weight;

								// band 0
								accum0 += cw * 0.282095;

								// band 1
								accum1 += cw * ( 0.488603 * dir.y );
								accum2 += cw * ( 0.488603 * dir.z );
								accum3 += cw * ( 0.488603 * dir.x );

								// band 2
								accum4 += cw * ( 1.092548 * ( dir.x * dir.y ) );
								accum5 += cw * ( 1.092548 * ( dir.y * dir.z ) );
								accum6 += cw * ( 0.315392 * ( 3.0 * dir.z * dir.z - 1.0 ) );
								accum7 += cw * ( 1.092548 * ( dir.x * dir.z ) );
								accum8 += cw * ( 0.546274 * ( dir.x * dir.x - dir.y * dir.y ) );

							}

						}

					}

					float norm = 4.0 * PI / totalWeight;

					vec3 accum;
					if ( coefIndex == 0 ) accum = accum0;
					else if ( coefIndex == 1 ) accum = accum1;
					else if ( coefIndex == 2 ) accum = accum2;
					else if ( coefIndex == 3 ) accum = accum3;
					else if ( coefIndex == 4 ) accum = accum4;
					else if ( coefIndex == 5 ) accum = accum5;
					else if ( coefIndex == 6 ) accum = accum6;
					else if ( coefIndex == 7 ) accum = accum7;
					else accum = accum8;

					gl_FragColor = vec4( accum * norm, 1.0 );

				}
			`}),R=n)}function oe(){if(u!==null)return;X();const n=`
		void main() {
			gl_Position = vec4( position.xy, 0.0, 1.0 );
		}
	`;u=[];for(let e=0;e<7;e++)u[e]=new S({precision:"highp",defines:{TEXTURE_INDEX:e},uniforms:{batchTexture:{value:null},resolution:{value:new m},sliceZ:{value:0}},vertexShader:n,fragmentShader:`
				uniform sampler2D batchTexture;
				uniform vec3 resolution;
				uniform int sliceZ;

				void main() {

					int ix = int( gl_FragCoord.x );
					int iy = int( gl_FragCoord.y );
					int iz = sliceZ;

					int probeIndex = ix + iy * int( resolution.x ) + iz * int( resolution.x ) * int( resolution.y );

					// Read 9 SH coefficients from the batch texture row
					vec4 c0 = texelFetch( batchTexture, ivec2( 0, probeIndex ), 0 );
					vec4 c1 = texelFetch( batchTexture, ivec2( 1, probeIndex ), 0 );
					vec4 c2 = texelFetch( batchTexture, ivec2( 2, probeIndex ), 0 );
					vec4 c3 = texelFetch( batchTexture, ivec2( 3, probeIndex ), 0 );
					vec4 c4 = texelFetch( batchTexture, ivec2( 4, probeIndex ), 0 );
					vec4 c5 = texelFetch( batchTexture, ivec2( 5, probeIndex ), 0 );
					vec4 c6 = texelFetch( batchTexture, ivec2( 6, probeIndex ), 0 );
					vec4 c7 = texelFetch( batchTexture, ivec2( 7, probeIndex ), 0 );
					vec4 c8 = texelFetch( batchTexture, ivec2( 8, probeIndex ), 0 );

					// Pack into the output format for this texture index
					#if TEXTURE_INDEX == 0
						gl_FragColor = vec4( c0.rgb, c1.r );
					#elif TEXTURE_INDEX == 1
						gl_FragColor = vec4( c1.gb, c2.rg );
					#elif TEXTURE_INDEX == 2
						gl_FragColor = vec4( c2.b, c3.rgb );
					#elif TEXTURE_INDEX == 3
						gl_FragColor = vec4( c4.rgb, c5.r );
					#elif TEXTURE_INDEX == 4
						gl_FragColor = vec4( c5.gb, c6.rg );
					#elif TEXTURE_INDEX == 5
						gl_FragColor = vec4( c6.b, c7.rgb );
					#else
						gl_FragColor = vec4( c8.rgb, 0.0 );
					#endif

				}
			`})}function re(n){const{cubemapSize:e=8,near:c=.1,far:s=100}=n;return(p===null||e!==B||c!==C||s!==W)&&(p!==null&&p.dispose(),p=new O(e,{type:K}),E=new $(c,s,p),B=e,C=c,W=s),ie(e),{cubeRenderTarget:p,cubeCamera:E}}function ne(n){return(b===null||D!==n)&&(b!==null&&b.dispose(),b=new J(9,n,{type:N,minFilter:U,magFilter:U,depthBuffer:!1}),D=n),b}class de extends ce{constructor(e,c=.12){const s=new ae(c,16,16),r=new S({uniforms:{probesSH:{value:null},probesResolution:{value:new m}},vertexShader:`

				attribute vec3 instanceUVW;

				varying vec3 vWorldNormal;
				varying vec3 vUVW;

				void main() {

					vUVW = instanceUVW;
					vWorldNormal = normalize( mat3( modelMatrix ) * normal );
					gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4( position, 1.0 );

				}

			`,fragmentShader:`

				precision highp sampler3D;

				uniform sampler3D probesSH;
				uniform vec3 probesResolution;

				varying vec3 vWorldNormal;
				varying vec3 vUVW;

				void main() {

					// Atlas UV mapping — must match lightprobes_pars_fragment.glsl.js
					float nz          = probesResolution.z;
					float paddedSlices = nz + 2.0;
					float atlasDepth  = 7.0 * paddedSlices;
					float uvZBase     = vUVW.z * nz + 1.0;

					vec4 s0 = texture( probesSH, vec3( vUVW.xy, ( uvZBase                       ) / atlasDepth ) );
					vec4 s1 = texture( probesSH, vec3( vUVW.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
					vec4 s2 = texture( probesSH, vec3( vUVW.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
					vec4 s3 = texture( probesSH, vec3( vUVW.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
					vec4 s4 = texture( probesSH, vec3( vUVW.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
					vec4 s5 = texture( probesSH, vec3( vUVW.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
					vec4 s6 = texture( probesSH, vec3( vUVW.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );

					// Unpack 9 vec3 SH L2 coefficients

					vec3 c0 = s0.xyz;
					vec3 c1 = vec3( s0.w, s1.xy );
					vec3 c2 = vec3( s1.zw, s2.x );
					vec3 c3 = s2.yzw;
					vec3 c4 = s3.xyz;
					vec3 c5 = vec3( s3.w, s4.xy );
					vec3 c6 = vec3( s4.zw, s5.x );
					vec3 c7 = s5.yzw;
					vec3 c8 = s6.xyz;

					vec3 n = normalize( vWorldNormal );

					float x = n.x, y = n.y, z = n.z;

					// band 0
					vec3 result = c0 * 0.886227;

					// band 1,
					result += c1 * 2.0 * 0.511664 * y;
					result += c2 * 2.0 * 0.511664 * z;
					result += c3 * 2.0 * 0.511664 * x;

					// band 2,
					result += c4 * 2.0 * 0.429043 * x * y;
					result += c5 * 2.0 * 0.429043 * y * z;
					result += c6 * ( 0.743125 * z * z - 0.247708 );
					result += c7 * 2.0 * 0.429043 * x * z;
					result += c8 * 0.429043 * ( x * x - y * y );

					gl_FragColor = vec4( max( result, vec3( 0.0 ) ), 1.0 );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>

				}

			`}),a=e.resolution,t=a.x*a.y*a.z;super(s,r,t),this.probes=e,this.type="LightProbeGridHelper",this.update()}update(){const e=this.probes,c=e.resolution,s=c.x*c.y*c.z;this.instanceMatrix.count!==s&&(this.instanceMatrix=new M(new Float32Array(s*16),16)),this.count=s;const r=new Float32Array(s*3),a=new se,t=new m;let l=0;for(let o=0;o<c.z;o++)for(let d=0;d<c.y;d++)for(let h=0;h<c.x;h++)r[l*3]=(h+.5)/c.x,r[l*3+1]=(d+.5)/c.y,r[l*3+2]=(o+.5)/c.z,e.getProbePosition(h,d,o,t),a.makeTranslation(t.x,t.y,t.z),this.setMatrixAt(l,a),l++;this.instanceMatrix.needsUpdate=!0,this.geometry.setAttribute("instanceUVW",new M(r,3)),this.material.uniforms.probesSH.value=e.texture,this.material.uniforms.probesResolution.value.copy(e.resolution)}dispose(){this.geometry.dispose(),this.material.dispose()}}export{ue as L,de as a};
