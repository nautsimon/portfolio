uniform float time;
uniform vec3 color;
					uniform sampler2D pallete;
					varying float vDisplace;
					uniform vec3 fogColor;
					uniform float fogNear;
					uniform float fogFar;
					varying float fogDepth;
					void main(){
						vec2 stripPos = vec2( 0.0, vDisplace );
						vec4 stripColor = texture2D( pallete, stripPos );
						stripColor *= pow(1.0-vDisplace, 1.0);
						gl_FragColor = stripColor;
						#ifdef USE_FOG
							float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
							gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
						#endif
					}
