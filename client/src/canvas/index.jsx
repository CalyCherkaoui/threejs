import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shirt from './Shirt'
import BackDrop from './BackDrop'
import CameraRig from './CameraRig'


function CanvasModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full h-full max-w-full transition-all ease-in'
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />

      <CameraRig>
        <BackDrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>

 
    </Canvas>
  )
}

export default CanvasModel