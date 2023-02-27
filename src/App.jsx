import React from 'react';
import Experience from './components/Experience';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
