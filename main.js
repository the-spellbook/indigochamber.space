// importeren modellen
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// initials
const myScene = new THREE.Scene();
myScene.background = new THREE.Color( 0x04020B );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// blokje (niet gebruikt)
const geometry = new THREE.OctahedronGeometry( 0.5 );
const material = new THREE.MeshPhysicalMaterial( { color: 0xffffff, metalness : 0.5, roughness : 0.5, emissive : 0x000000} );
const cube = new THREE.Mesh( geometry, material );

// licht
const light = new THREE.DirectionalLight(0xffffff, 50); // White light
light.position.set(5, 5, 5);
myScene.add(light);

// nieuwe vormen aanmaken
const milkyway = new THREE.Group();
const octgem = new THREE.OctahedronGeometry(0.01);
const octmat = new THREE.MeshPhysicalMaterial( { color: 0xffffff, metalness : 0.5, roughness : 0, emissive : 0x000000} );

// sterren toevoegen
for (let i = 0; i < 1000; i++) {
    const star = new THREE.Mesh(octgem, octmat);
    star.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 
    );
    milkyway.add(star);
}

myScene.add(milkyway);

// const axesHelper = new THREE.AxesHelper( 5 );
// myScene.add( axesHelper );

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.z = 1;
camera.position.y = 1;
camera.position.x = 1;
orbit.update();


// const helper = new THREE.DirectionalLightHelper( light, 5 );
// myScene.add( helper );

renderer.render( myScene, camera);
function animate() {
    // myScene.add(cube);
    
    milkyway.rotation.x += 0.0002;
    milkyway.rotation.y += 0.0002;
    milkyway.rotation.z += 0.0002;
    // cube.rotation.y += 0.005;
    // cube.position.x = Math.random()*10 -5;
    // cube.position.y = Math.random()*10 -5;
    // cube.position.z = Math.random()*10 -5;

    renderer.render( myScene, camera );
}

renderer.setAnimationLoop(animate);






















// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 300, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );
// renderer.render( scene, camera );






