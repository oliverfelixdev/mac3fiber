import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import './style.css'
import MacContainer from './MacContainer'


function App() {
  return (
    <div className='w-full h-screen bg-black'>
      <div className="navbar w-full absolute top-0 left-1/2 -translate-x-1/2">
        {['Macbook', 'IOS', 'iPad', 'iPhone', 'Services'].map(e => <a href="#" className='#erdf'></a> )}
      </div>
      <div className="absolute text-white top-60 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <h3 className='font-semibold text-9xl uppercase font-[fed] glowing-text'>Macbook</h3>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 180] }}>
        <OrbitControls />
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App