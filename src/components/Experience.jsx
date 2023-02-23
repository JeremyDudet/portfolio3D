import React from 'react';
import { Environment, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import IphoneModel from './IphoneModel';

export default function Experience() {
  return (
    <Canvas>
      <Environment preset="sunset" />
      <color args={['#242424']} attach="background" />
      <mesh>
        <Float rotationIntensity={1}>
          <IphoneModel />
        </Float>
      </mesh>
    </Canvas>
  );
}
