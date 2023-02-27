import React from 'react';
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Environment, Float, Html, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import IphoneModel from './IphoneModel';
import Nav from './Nav.jsx';
import screenshot from '/screenshot.jpeg';

export default function Experience() {
  const { size } = useThree();
  const data = useScroll();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const iphoneRef = useRef();
  const htmlRef = useRef();

  const smallWindow = windowWidth < 1180;

  // calculate the size of the <Html> container
  const getHtmlSize = () => {
    const newWidth = htmlRef.current?.clientWidth;
    console.log(newWidth);
    setHtmlWidth(newWidth);
    const newHeight = htmlRef.current?.clientHeight;
    console.log(newHeight);
    setHtmlHeight(newHeight);
  };

  const { position } = useSpring({
    position: active
      ? [smallWindow ? 0 : -1.5, smallWindow ? 2.5 : 0.5, smallWindow ? -2 : 0]
      : [0, 0.4, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: active ? 0 : 200 // set a delay of 300ms when becoming inactive
  });

  const { rotation } = useSpring({
    rotation: active
      ? [
          smallWindow ? Math.PI / 24 : Math.PI / 12,
          smallWindow ? Math.PI / 6 : Math.PI / 8,
          smallWindow ? 0 : 0
        ]
      : [0, 0, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: active ? 0 : 270
  });

  const handleIphoneClick = () => {
    return setActive(!active); // toggle active
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    getHtmlSize();
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    if (active) {
      setShowCard(true);
    } else {
      setTimeout(() => setShowCard(false), 500);
    }
  }, [active]);

  const CardContent = ({ active }) => {
    return (
      <div className={`${active ? 'card' : 'cardHidden'}`}>
        <div className={`flex flex-col items-center border-container relative w-${size.width}`}>
          <div className="w-full">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Make great craft cocktails with confidence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              With Crafted@, you'll have access to hundreds of cocktail recipes right at your
              fingertips. Our intuitive interface makes it easy for bartenders to find the perfect
              drink, no matter what you have in stock. Simply enter your ingredients and let
              Crafted@ do the rest - you'll be serving perfectly crafted cocktail in no time.
            </p>
            <div className="mt-10 flex items-center gap-x-6 pointer-events-auto">
              <a
                href="https://bar-app-b3bfe.web.app/"
                target="_blank"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                Visit App
              </a>
              <a
                href="https://github.com/JeremyDudet/bar-cocktail-app"
                target="_blank"
                className="text-sm font-semibold leading-6 text-white">
                view code <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 3, 1]} />

      <Nav position={[0, 3.5, 0]} />

      <animated.mesh position={position} rotation={rotation} ref={iphoneRef}>
        <Float rotationIntensity={0.3}>
          <IphoneModel handleClick={handleIphoneClick} image={screenshot} />
        </Float>
      </animated.mesh>

      <mesh>
        <Html
          center={smallWindow ? true : false}
          ref={htmlRef}
          wrapperClass="html-section"
          position={[smallWindow ? 0 : 0.2, smallWindow ? -2 : 2, 0]}
          style={{ overflow: 'visible' }}>
          {showCard && <CardContent active={active} />}
        </Html>
      </mesh>
    </>
  );
}
