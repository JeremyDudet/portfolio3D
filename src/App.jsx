import React from 'react';
import Experience from './components/Experience';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="w-screen h-screen bg-[#0d0d10]">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
