import React from 'react';
import { animated } from '@react-spring/three';

function IphoneComponent() {
  return (
    <div>
      <animated.mesh position={position} rotation={rotation} ref={iphoneRef}>
        <Float rotationIntensity={0.3}>
          <IphoneModel setActive={() => setActive(!active)} image={screenshot} />
        </Float>
      </animated.mesh>
    </div>
  );
}

export default IphoneComponent;
