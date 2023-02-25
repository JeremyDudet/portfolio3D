import React from 'react';
import Experience from './components/Experience';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="h-[100vh] bg-black">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
