import React, { useRef } from 'react';
import { ScrollControls, Scroll } from '@react-three/drei';
import Experience from './components/Experience';
import { Canvas } from '@react-three/fiber';

function App() {
  const canvasRef = useRef(null);

  return (
    <div className="relative w-screen h-screen  bg-[#0d0d10] overflow-auto">
      <Canvas ref={canvasRef} className="absolute top-0 h-full">
        <ScrollControls pages={2} damping={0.5}>
          <Scroll>
            <Experience />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
