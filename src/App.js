// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import Node from './node';
import cluster from './cluster.json'; // Import the JSON data


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

      {/* Axes Helper */}

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
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <Scene />
    </Canvas>
  );
}

export default App;
