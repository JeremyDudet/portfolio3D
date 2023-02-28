import React, { useRef } from 'react'
import Experience from './components/Experience'
import { Canvas } from '@react-three/fiber'

function App() {
  const canvasRef = useRef(null)

  return (
    <div className="relative w-screen h-screen  bg-[#0d0d10] overflow-auto">
      <Canvas ref={canvasRef} className="absolute top-0 h-full">
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
