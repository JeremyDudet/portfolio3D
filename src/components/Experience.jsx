import React from 'react';
import { useRef, useState } from 'react';
import { Environment, Float, Text, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import IphoneModel from './IphoneModel';

export default function Experience() {
  const iphoneRef = useRef();
  const [active, setActive] = useState(false);

  const { position } = useSpring({
    position: active ? [-1.5, 0, 0] : [0, 0, 0],
    config: {
      mass: 5,
      tension: 200,
      friction: 60
    },
    delay: active ? 0 : 150 // set a delay of 300ms when becoming inactive
  });
  const { rotation } = useSpring({
    rotation: active ? [0, Math.PI / 5, 0] : [0, 0, 0],
    delay: active ? 0 : 170
  });

  return (
    <>
      <Environment preset="sunset" />
      <color args={['#000']} attach="background" />
      <animated.mesh position={position} rotation={rotation} ref={iphoneRef}>
        <Float rotationIntensity={0.5}>
          <IphoneModel setActive={() => setActive(!active)} />
        </Float>
      </animated.mesh>
      <mesh>
        <Html
          wrapperClass={` ${active ? 'featureSection' : 'featureSection-hide'}`}
          position={[0.2, 1.7, 0]}>
          <div className={` ${active ? 'card' : 'card-hide'}`}>
            <div class="bg-transparent min-w-90">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-left">
                  <h2 class="text-base font-semibold leading-7 text-[#bb46f0]">Craft faster</h2>
                  <p class=" text-3xl font-bold text-gray-100">
                    Your custom craft cocktail recipe book
                  </p>
                  <p class="mt-1 text-lg leading-8 text-gray-400">
                    Discover what you can make with the ingredients you have on hand.
                  </p>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div class="relative pl-16 ">
                      <dt class="text-base font-semibold leading-7 text-gray-100">
                        <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bb46f0]">
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
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                          </svg>
                        </div>
                        Add ingredients
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-400">
                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper
                        morbi. Odio urna massa nunc massa.
                      </dd>
                    </div>

                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-100">
                        <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bb46f0]">
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
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </div>
                        SSL certificates
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-400">
                        Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem
                        sodales gravida quam turpis enim lacus amet.
                      </dd>
                    </div>

                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-100">
                        <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bb46f0]">
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
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                          </svg>
                        </div>
                        Simple queues
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-400">
                        Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis
                        auctor congue commodo diam neque.
                      </dd>
                    </div>

                    <div class="relative pl-16">
                      <dt class="text-base font-semibold leading-7 text-gray-100">
                        <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bb46f0]">
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
                              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                            />
                          </svg>
                        </div>
                        Advanced security
                      </dt>
                      <dd class="mt-2 text-base leading-7 text-gray-400">
                        Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac
                        quis. Id hac maecenas ac donec pharetra eget.
                      </dd>
                    </div>
                    <div className="p-4 bg-violet-400 rounded-full text-center font-bold text-xl text-black">
                      <a href="https://bar-app-b3bfe.web.app/" target="_blank">
                        visit crafted
                      </a>
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
