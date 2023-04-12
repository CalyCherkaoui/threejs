import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

function BackDrop() {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0, 0, -0.14]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={10}
      frames={60}
      alphaTest={0.85}
      temporal
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
      <RandomizedLight 
        amount={4}
        radius={3}
        intensity={0.2}
        ambient={0.55}
        position={[-5, 0, -4]}
      />
    </AccumulativeShadows>
  )
}

export default BackDrop