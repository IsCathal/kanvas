import React from 'react';

function Edge({ start, end }) {
  const points = [start, end];
  return (
    <line>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="white" />
    </line>
  );
}

export default Edge;