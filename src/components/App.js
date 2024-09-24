import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import { Vector3 } from 'three';
import { XR, XROrigin, TeleportTarget } from '@react-three/xr';
import Node from './node';
import cluster from '../data/cluster.json'; // Import the JSON data
import store from '../context/store';


function Scene() {
  const { nodes, edges } = cluster;

  // Create a map for easy access to node positions by id
  const nodeMap = Object.fromEntries(nodes.map(node => [node.id, node]));

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Stars for visual effect */}
      <Stars />

      {/* Render Nodes */}
      {nodes.map(node => (
        <Node
          key={node.id}
          position={[node.x, node.y, node.z]}
          message={node.message}
          color={node.color}
        />
      ))}

      {/* Render Edges */}
      {edges.map((edge, index) => {
        const sourceNode = nodeMap[edge.source];
        const targetNode = nodeMap[edge.target];

        if (!sourceNode || !targetNode) return null;

        return (
          <Line
            key={index}
            points={[
              [sourceNode.x, sourceNode.y, sourceNode.z],
              [targetNode.x, targetNode.y, targetNode.z]
            ]}
            color="#ffffff"
            lineWidth={1}
          />
        );
      })}

      {/* Controls to orbit the scene */}
      <OrbitControls />
    </>
  );
}

function App() {
  const [position, setPosition] = useState(new Vector3());

  return (
    <>
      {/* Buttons for entering VR and AR */}
      <button onClick={() => store.enterVR()}>Enter VR</button>
      {/* Canvas for rendering the 3D scene */}
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <XR store={store}>
          <ambientLight />
          <XROrigin position={position} />
          <Scene />
          <TeleportTarget onTeleport={setPosition}>
            <mesh scale={[10, 1, 10]} position={[0, -0.5, 0]}>
              <meshBasicMaterial color="green" />
            </mesh>
          </TeleportTarget>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
