"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

export default function ThreeScene() {
  const particlesRef = useRef<THREE.Points>(null)
  const particlesGeometryRef = useRef<THREE.BufferGeometry>(null)

  // Create particles
  const particlesCount = 2000
  const positions = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05
      particlesRef.current.rotation.x += delta * 0.01
    }
  })

  return (
    <>
      <color attach="background" args={["#000000"]} />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial
            color="#b786e0"
            emissive="#b786e0"
            emissiveIntensity={0.5}
            metalness={0.99}
            roughness={0.5}
          />
        </mesh>
      </Float>

      <points ref={particlesRef}>
        <bufferGeometry ref={particlesGeometryRef}>
          <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#ffffff"
          sizeAttenuation={true}
          transparent={true}
          alphaTest={0.5}
          opacity={0.85}
        />
      </points>

      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  )
}

