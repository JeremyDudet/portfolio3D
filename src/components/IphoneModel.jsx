/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Customized to load my own screenshot images
*/

import React, { useRef, useState, useEffect } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import screenshot from '/screenshot.jpeg';
import { easing } from 'maath';

const calculateScale = (windowWidth) => {
  const minSize = 1.1;
  const maxSize = 1.4;
  if (windowWidth / 500 < minSize) {
    return minSize;
  }
  const size = Math.min(windowWidth / 500, maxSize);
  return size;
};

export default function IphoneModel(props) {
  const [iphone] = useState(() => new THREE.Object3D());
  const [modelScale, setModelScale] = useState(calculateScale(window.innerWidth));
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
  );

  const resize = () => setModelScale(calculateScale(window.innerWidth));

  useEffect(() => {
    window.addEventListener('resize', () => resize());
    return () => {
      window.removeEventListener('resize', () => resize());
    };
  }, []);

  useFrame((state, dt) => {
    if (window.innerWidth > 600) {
      iphone.lookAt(state.pointer.x, state.pointer.y, 3);
      easing.dampQ(group.current.quaternion, iphone.quaternion, 0.2, dt);
    }
  });

  return (
    <group
      scale={[modelScale, modelScale, modelScale]}
      ref={group}
      {...props}
      dispose={null}
      // onMouseMove={onMouseMove}
    >
      <group position={[0, 0, 0]}>
        <mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
        <mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
        <mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
        <mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
        <mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
        <mesh
          geometry={nodes.AntennaLineBottom001.geometry}
          material={nodes.AntennaLineBottom001.material}
          position={[0, -2.68, 0]}
        />
        <mesh
          geometry={nodes.AntennaLineTop001.geometry}
          material={nodes.AntennaLineTop001.material}
          position={[0, 0.02, 0]}
        />
        <mesh
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={nodes.BackCameraBottomLens001.material}
          position={[0.7, 0.88, -0.08]}
        />
        <mesh
          geometry={nodes.AppleLogo001.geometry}
          material={materials['AppleLogo.001']}
          position={[0.17, 0.52, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 0.88, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraP1001.geometry}
          material={materials['Black.015']}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.7, 1.18, -0.08]}
        />
        <mesh
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials['FrontSpeaker.001']}
          position={[0.16, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.CameraBump001.geometry}
          material={nodes.CameraBump001.material}
          position={[0.7, 1.04, -0.08]}
        />
        <mesh
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials['FrontCameraBlack.002']}
          position={[0.34, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={nodes.BackCameraTopGreyRing001.material}
          position={[0.7, 1.18, -0.09]}
        />
        <mesh
          geometry={nodes.MuteSwitch001.geometry}
          material={nodes.MuteSwitch001.material}
          position={[-0.65, 0.92, 0.01]}
        />
        <mesh
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials['iPhoneLogo.001']}
          position={[0.2, -1.18, -0.08]}
        />
        <group position={[0.97, 0.56, 0]}>
          <mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
          <mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
        </group>
        <group position={[0.98, -0.04, 0]}>
          <mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
          <mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
        </group>
        <mesh
          geometry={nodes.VolumeButtons001.geometry}
          material={nodes.VolumeButtons001.material}
          position={[-0.66, 0.21, 0]}
        />
        <mesh>
          <Html
            transform
            wrapperClass="htmlScreen"
            position={[-0.58, 1.39, 0.089]}
            distanceFactor={0.96}>
            <img onClick={() => props.setActive()} src={screenshot} alt="App Screenshot" />
          </Html>
        </mesh>
        {props.children}
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
);
