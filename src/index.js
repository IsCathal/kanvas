// src/index.js
import * as THREE from 'three';
import ForceGraph3D from '3d-force-graph';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 300;

// Create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; // Enable XR

// Append the renderer to the DOM
document.body.appendChild(renderer.domElement);

// Add VR button
document.body.appendChild(VRButton.createButton(renderer));

// Create graph data
const N = 100;
const nodes = [...Array(N).keys()].map((i) => ({
  id: i,
  group: Math.floor(Math.random() * 5),
}));
const links = [...Array(N).keys()]
  .filter((id) => id)
  .map((id) => ({
    source: id,
    target: Math.round(Math.random() * (id - 1)),
  }));

// Initialize the force graph
const Graph = new ForceGraph3D()
  .graphData({ nodes, links })
  .nodeAutoColorBy('group')
  .linkOpacity(0.5)
  .nodeThreeObject((node) => {
    const sphereGeometry = new THREE.SphereGeometry(5);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: node.color });
    return new THREE.Mesh(sphereGeometry, sphereMaterial);
  });

// Add the graph to the scene
scene.add(Graph);

// Animation loop
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
