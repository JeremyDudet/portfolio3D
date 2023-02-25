import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Environment, Float, Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import IphoneModel from './IphoneModel';

export default function Experience() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iphoneRef = useRef();
  const [active, setActive] = useState(false);
  const smallWindow = windowWidth < 1180;

  const { position } = useSpring({
    position: active ? [smallWindow ? 0 : -1.5, smallWindow ? 2 : 0, 0] : [0, 0, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: active ? 0 : 200 // set a delay of 300ms when becoming inactive
  });
  const { rotation } = useSpring({
    rotation: active
      ? [smallWindow ? 0 : Math.PI / 24, smallWindow ? 0 : Math.PI / 3, 0]
      : [0, 0, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: active ? 0 : 270
  });

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, []);

  if (smallWindow) {
    console.log('small');
  }

  return (
    <>
      <Environment preset="sunset" />
      <animated.mesh position={position} rotation={rotation} ref={iphoneRef}>
        <Float rotationIntensity={0.5}>
          <IphoneModel setActive={() => setActive(!active)} />
        </Float>
      </animated.mesh>
      <mesh>
        <Html
          wrapperClass="featureSection"
          position={[smallWindow ? -1.83 : -0.3, smallWindow ? -0.5 : 1.5, 0]}>
          <div className={` ${active ? 'card' : 'card-hide'}`}>
            <div class="border relative overflow-hidden  bg-transparent">
              <div class="mx-auto max-w-[590px] sm:max-w-sm md:max-w-8 lg:max-w-lg xl:max-w-none px-4">
                <div class="mx-auto grid xs:max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-xl grid-cols-1 gap-y-16 gap-x-8">
                  <div class="max-w-lg">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Subscribe to our newsletter.
                    </h2>
                    <p class="mt-4 text-lg leading-8 text-gray-300">
                      Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis.
                      Duis tempor incididunt dolore.
                    </p>
                  </div>
                  <dl class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1 lg:pt-2">
                    <div class="flex flex-col items-start">
                      <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg
                          class="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                          />
                        </svg>
                      </div>
                      <dt class="mt-4 font-semibold text-white">Weekly articles</dt>
                      <dd class="mt-2 leading-7 text-gray-400">
                        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat
                        duis commodo amet.
                      </dd>
                    </div>
                    <div class="flex flex-col items-start">
                      <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <svg
                          class="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                          />
                        </svg>
                      </div>
                      <dt class="mt-4 font-semibold text-white">No spam</dt>
                      <dd class="mt-2 leading-7 text-gray-400">
                        Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate
                        incididunt anim.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Html>
      </mesh>
    </>
  );
}
