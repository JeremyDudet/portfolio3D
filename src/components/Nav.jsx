import React from 'react'
import { Html } from '@react-three/drei'
import AnimatedButton from './AnimatedButton'

function Nav({ position }) {
  return (
    <mesh>
      <Html position={position} center>
        <nav className="text-white w-[90vw] flex justify-between items-center">
          <div className="text-lg font-semibold">Jeremy Dudet</div>

          <a
            href="mailto:j.dudet@gmail.com"
            className="text-lg py-2 px-10 bg-[#2C2C2E] rounded-full font-semibold"
          >
            build with me
          </a>
        </nav>
      </Html>
    </mesh>
  )
}

export default Nav
