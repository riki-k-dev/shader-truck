import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import * as THREE from 'three'
import Load from './components/Loader'
import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

function App() {
  const { progress } = useProgress()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <>
      <Load visible={showLoader} />
      <Canvas
        shadows
        camera={{ position: [0, 3, 9], fov: 42 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.5
          gl.outputEncoding = THREE.sRGBEncoding
        }}
      >
        <color attach="background" args={['#15151a']} />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
