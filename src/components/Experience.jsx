import React from 'react';
import { useRef, useEffect } from 'react';
import { Environment, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import IphoneModel from './IphoneModel';

export default function Experience() {
  const iphoneRef = useRef();

  useFrame((state, delta) => {
    // iphoneRef.current.rotation.y += delta;
  });

  return (
    <>
      <Environment preset="sunset" />
      <color args={['#000']} attach="background" />
      <mesh ref={iphoneRef}>
        <Float rotationIntensity={1}>
          <IphoneModel />
        </Float>
      </mesh>
    </>
  );
}
