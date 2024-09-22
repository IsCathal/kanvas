// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Node from './node';
import Edge from './edge';
import { nodes, edges } from './data';

function App() {
  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <Canvas style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Scene nodeMap={nodeMap} />
    </Canvas>
  );
}

function Scene({ nodeMap }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />

      {Object.values(nodeMap).map((node) => (
        <Node key={node.id} position={node.position} />
      ))}

      {edges.map((edge, index) => (
        <Edge
          key={index}
          start={nodeMap[edge.source].position}
          end={nodeMap[edge.target].position}
        />
      ))}

      <OrbitControls />
    </>
  );
}

export default App;