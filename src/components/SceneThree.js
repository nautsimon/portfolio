import React, { Component } from "react";
import * as THREE from "three";
import pic from "./pallete.png";
var xfrag = `
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
  stripColor *= pow(2.0-vDisplace, 1.0);
  gl_FragColor = stripColor;
  #ifdef USE_FOG
    float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif
}`;

var xvert = `

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}
#define PI 3.1415926535897932384626433832795

uniform float time;
uniform float maxHeight;
uniform float speed;
uniform float distortCenter;
uniform float roadWidth;
varying float vDisplace;
varying float fogDepth;
void main(){
  float t = time * speed;
  float wRoad = distortCenter;
  float wRoad2 = wRoad * 0.5;
  
  float angleCenter = uv.y * PI*4.0;
  angleCenter += t * 0.9;
  
  float centerOff = (
    sin(angleCenter) + 
    sin(angleCenter*0.5) 
  ) * wRoad;
  
  vec3 noiseIn = vec3(uv, 1.0)*10.0;
  float noise = cnoise(vec3(noiseIn.x, noiseIn.y + t, noiseIn.z));
  noise += 1.0;
  float h = noise;
  float angle = (uv.x - centerOff) * PI;
  float f = abs(cos(angle));
  h *= pow(f, 1.5 + roadWidth);
  
  vDisplace = h;
  
  h*=maxHeight;
  vec3 transformed = vec3( position.x, position.y, position.z + h );
  vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  
  fogDepth = -mvPosition.z;
}`;

class SceneThree extends Component {
  constructor(props) {
    super(props);
    this.onInputMove = this.onInputMove.bind(this);
    this.start = this.start.bind(this);
    this.lerp = this.lerp.bind(this);
    this.map = this.map.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    // console.log(width, height);
    var mouse = { x: 0, y: 0, xDamped: 0, yDamped: 0 };
    var isMobile = typeof window.orientation !== "undefined";

    //////////////scene///////////////////
    var scene = new THREE.Scene();
    var fogColor = new THREE.Color(0x010101);
    scene.background = fogColor;
    scene.fog = new THREE.Fog(fogColor, 20, 400);
    var camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 10000);
    camera.position.y = 20;
    camera.position.z = 20;
    camera.rotation.z = (180 * Math.PI) / 180;
    var ambientLight = new THREE.AmbientLight(0xffffff, 300);
    scene.add(ambientLight);
    // var light = new THREE.DirectionalLight(0x4b66f6, 1);
    // light.position.set(-0.75, -1, 0.5);
    // scene.add(light);
    var renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio = devicePixelRatio;

    renderer.setClearColor("#ffffff");
    ///////////////end of scene///////////////

    //////////////scene Elements/////////////
    var geometry = new THREE.PlaneBufferGeometry(100, 400, 100, 100);

    var uniforms = {
      time: { type: "f", value: 0.0 },
      distortCenter: { type: "f", value: 0.1 },
      roadWidth: { type: "f", value: 0.5 },
      pallete: { type: "t", value: null },
      speed: { type: "f", value: 1 },
      maxHeight: { type: "f", value: 20.0 },
      color: new THREE.Color(1, 1, 1)
    };

    var material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        THREE.ShaderLib.basic.uniforms,
        uniforms
      ]),
      vertexShader: xvert,
      fragmentShader: xfrag,

      wireframe: true,
      fog: true
    });

    var terrain = new THREE.Mesh(geometry, material);
    terrain.position.z = -180;
    terrain.rotation.x = -Math.PI / 2;

    scene.add(terrain);
    //////////////end scene Elements///////////////
    //////////////textures/////////////
    new THREE.TextureLoader().load(pic, texture => {
      terrain.material.uniforms.pallete.value = texture;
      terrain.material.needsUpdate = true;
    });
    ////////end of textures/////

    if (isMobile) {
      window.addEventListener("touchmove", this.onInputMove, {
        passive: false
      });
    } else {
      window.addEventListener("mousemove", this.onInputMove);
    }

    this.scene = scene;
    this.camera = camera;
    this.terrain = terrain;
    this.mousex = mouse.x;
    this.mousey = mouse.y;
    this.mousexDamped = mouse.xDamped;
    this.mouseyDamped = mouse.yDamped;
    this.renderer = renderer;
    this.material = material;
    this.mount.appendChild(this.renderer.domElement);
    // console.log("about start");
    this.start();
    // console.log("ran start");
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
      // console.log("ran fram");
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }
  resizeCanvasToDisplaySize() {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    // console.log(canvas.clientWidth);
    if (canvas.width !== width || canvas.height !== height) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }
  map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }

  lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  onInputMove(e) {
    e.preventDefault();

    var x, y;
    if (e.type === "mousemove") {
      x = e.clientX;
      y = e.clientY;
    } else {
      x = e.changedTouches[0].clientX;
      y = e.changedTouches[0].clientY;
    }

    this.mousex = -x * 1.2;
    this.mousey = -y * 0.5;
  }

  animate() {
    var windowHeight = window.innerHeight;

    // damping mouse for smoother interaction
    this.mousexDamped = this.lerp(this.mousexDamped, this.mousex, 0.1);
    this.mouseyDamped = this.lerp(this.mouseyDamped, this.mousey, 0.1);

    var time = performance.now() * 0.001;
    this.terrain.material.uniforms.time.value = time;
    this.terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.1;
    this.terrain.material.uniforms.maxHeight.value = this.map(
      this.mouseyDamped,
      0,
      windowHeight,
      20,
      5
    );
    var tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov) / 2);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.fov =
      (360 / Math.PI) * Math.atan(tanFOV * (window.innerHeight / windowHeight));
    this.camera.updateProjectionMatrix();
    this.resizeCanvasToDisplaySize();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        className="three"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default SceneThree;
