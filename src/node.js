import React from 'react';
import { Sphere } from '@react-three/drei';

function Node({ position }) {
  return (
    <Sphere args={[0.1, 16, 16]} position={position}>
      <meshStandardMaterial color="skyblue" />
    </Sphere>
  );
}

export default Node;