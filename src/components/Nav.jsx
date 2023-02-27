import React from 'react';
import { Html, Text3D, Center } from '@react-three/drei';
import AnimatedButton from './AnimatedButton';

function Nav({ position }) {
  return (
    <mesh>
      <Html position={position} center>
        <nav className="text-white w-[90vw] flex justify-between items-center">
          <div className="text-lg font-semibold">Jeremy Dudet</div>
          <AnimatedButton>
            <a
              href="mailto:j.dudet@gmail.com"
              className="text-lg py-4 px-12 bg-[#1C1C1E] rounded-full font-bold">
              build with me
            </a>
          </AnimatedButton>
        </nav>
      </Html>
    </mesh>
  );
}

export default Nav;
