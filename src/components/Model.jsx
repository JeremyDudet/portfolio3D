import React from 'react';
import { useFrame } from '@react-three/fiber';

function Model({ path, isActive }) {
  const modelRef = useRef(null);
  useFrame(() => {
    if (isActive && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={modelRef}>
      <primitive object={model} />
    </mesh>
  );
}
export default Model;
