import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// add scene
const scene = new THREE.Scene();

// new mesh 01
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: '#ff0000' })
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

// add mesh to scene
scene.add(cubeMesh)

// cubeMesh.scale.y = 5;
// cubeMesh.scale.x = 5;
// cubeMesh.scale.z = 5;
cubeMesh.scale.set(5,5,5)

// initialize camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 200);
camera.position.z = 5;
camera.position.y = 5;
camera.position.x = 5;

// initialize render
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})

// onload canvas size
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(window.devicePixelRatio)
renderer.setPixelRatio(window.devicePixelRatio)


// initialize control
const controls = new OrbitControls( camera, canvas );
// for smoth orbit
controls.enableDamping = true;
controls.autoRotate = false;

window.addEventListener('resize', ()=>{
  // size ratio update
  camera.aspect = window.innerWidth/window.innerHeight;
  // mesh size and position update
  camera.updateProjectionMatrix();
  //render scene size update
  renderer.setSize(window.innerWidth, window.innerHeight);
}) 

// render scene
//renderer.setSize(window.innerWidth, window.innerHeight)
//renderer.render(scene, camera);


// for update canxas size auto
const renderLoop = () =>{
  //console.log("renderloop")
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop)
}

renderLoop();


console.log(canvas);
console.log(cubeMesh);
console.log(scene);
console.log(camera);

