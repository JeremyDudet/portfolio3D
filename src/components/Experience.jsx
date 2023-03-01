import React from 'react'
import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { Environment, Float, Html } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { useThree } from '@react-three/fiber'
import IphoneModel from './IphoneModel'
import Nav from './Nav.jsx'
import screenshot from '/screenshot.jpeg'
import AnimatedHtmlSection from './AnimatedHtmlSection'

export default function Experience() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isInfoCardVisible, setIsInfoCardVisible] = useState(false)

  const iphoneRef = useRef()
  const htmlRef = useRef()

  const smallWindow = windowWidth < 1180
  const { size } = useThree()

  // calculate the size of the <Html> containe

  const { position } = useSpring({
    position: isInfoCardVisible
      ? [smallWindow ? 0 : -2, smallWindow ? 2.5 : 0.5, smallWindow ? -2 : 0]
      : [0, 0.4, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: isInfoCardVisible ? 0 : 200 // set a delay of 300ms when becoming isInfoCardVisible
  })

  const { rotation } = useSpring({
    rotation: isInfoCardVisible
      ? [
          smallWindow ? Math.PI / -12 : Math.PI / 12,
          smallWindow ? Math.PI / 12 : Math.PI / 8,
          smallWindow ? Math.PI / 12 : 0
        ]
      : [0, 0, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: isInfoCardVisible ? 0 : 270
  })

  const handleIphoneClick = () => {
    return setIsInfoCardVisible(v => !v) // toggle isInfoCardVisible
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 3, 1]} />

      <Nav position={[0, 3.45, 0]} />
      <animated.mesh position={position} rotation={rotation} ref={iphoneRef}>
        {smallWindow ? (
          <Html position={[1.9, 2.1, 0]}>
            <AnimatedHtmlSection
              isVisible={isInfoCardVisible}
              delay={300}
              duration={300}
            >
              <button
                onClick={handleIphoneClick}
                className="z-[999] flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 sm:w-10 sm:h-10 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </AnimatedHtmlSection>
          </Html>
        ) : null}
        <Float rotationIntensity={0.3}>
          <IphoneModel handleClick={handleIphoneClick} image={screenshot} />
        </Float>
      </animated.mesh>

      <mesh>
        <Html
          center={smallWindow ? true : false}
          ref={htmlRef}
          wrapperClass="html-section"
          position={[smallWindow ? 0 : 0, smallWindow ? -1.7 : 2.3, 0]}
        >
          <div
            className={` h-full flex flex-col items-center border-container relative w-${size.width}`}
          >
            <div className="w-full text-md sm:text-lg md:text-2xl">
              <AnimatedHtmlSection isVisible={isInfoCardVisible} delay={100}>
                <h1 className=" font-bold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl">
                  Make great craft cocktails with confidence
                </h1>
                <p className="leading-snug sm:leading-normal mt-2 sm:mt-4 text-gray-300 ">
                  With Crafted@, you'll have access to hundreds of cocktail
                  recipes right at your fingertips. Our intuitive interface
                  makes it easy for bartenders to find the perfect drink, no
                  matter what you have in stock. Simply enter your ingredients
                  and let Crafted@ do the rest - you'll be serving perfectly
                  crafted cocktail in no time.
                </p>
                <div className="mt-4 md:mt-6 flex items-center gap-x-6 pointer-events-auto">
                  <a
                    href="https://bar-app-b3bfe.web.app/"
                    target="_blank"
                    className="rounded-md bg-gradient-to-r from-violet-500 to-purple-400 px-3.5 py-2.5 text-normal font-semibold text-gray-900 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Visit App
                  </a>
                  <a
                    href="https://github.com/JeremyDudet/bar-cocktail-app"
                    target="_blank"
                    className=" text-normal md:text-lg font-medium leading-6 text-white"
                  >
                    view code <span aria-hidden="true">→</span>
                  </a>
                </div>
              </AnimatedHtmlSection>
            </div>
          </div>
        </Html>
      </mesh>
    </>
  )
}
