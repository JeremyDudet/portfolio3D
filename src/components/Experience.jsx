import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Environment, Float, Html, Image, Text3D, Center } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import font from '../../public/Inter_Bold.json';
import IphoneModel from './IphoneModel';

export default function Experience() {
  const { size } = useThree();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [htmlWidth, setHtmlWidth] = useState(0);
  const [htmlHeight, setHtmlHeight] = useState(0);
  const iphoneRef = useRef();
  const htmlRef = useRef();
  const [active, setActive] = useState(false);
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
      ? [smallWindow ? 0 : -1.5, smallWindow ? 3 : 0.5, smallWindow ? -2 : -1.5]
      : [0, 0.5, 0],
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
          smallWindow ? 0 : Math.PI / 12,
          smallWindow ? Math.PI / 6 : Math.PI / 8,
          smallWindow ? Math.PI / 14 : 0
        ]
      : [0, 0, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: active ? 0 : 270
  });

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

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 3, 1]} />
      <animated.mesh position={position} rotation={rotation} ref={iphoneRef}>
        <Float rotationIntensity={0.5}>
          <IphoneModel setActive={() => setActive(!active)} />
        </Float>
      </animated.mesh>

      <mesh>
        <Html
          center={smallWindow ? true : false}
          ref={htmlRef}
          wrapperClass="featureSection"
          position={[smallWindow ? 0 : 0, smallWindow ? -2 : 0, 0]}>
          <div className={` ${active ? 'card' : 'card-hide'}`}>
            <div
              class={`border-container relative overflow-hidden bg-blue-200 w-${size.width} h-[450px]`}></div>
          </div>
        </Html>
      </mesh>
    </>
  );
}
