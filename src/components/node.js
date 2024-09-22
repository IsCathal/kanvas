// src/Node.js
import React from 'react';
import { Html } from '@react-three/drei';

function Node({ position, message, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={color} />
      {/* Display the message as a tooltip */}
      <Html position={[0, 0.3, 0]} distanceFactor={10}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          padding: '2px 5px',
          borderRadius: '3px',
          whiteSpace: 'nowrap'
        }}>
          {message}
        </div>
      </Html>
    </mesh>
  );
}

export default Node;
