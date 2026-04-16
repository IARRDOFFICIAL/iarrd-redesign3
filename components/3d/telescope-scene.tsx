"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function Telescope() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -1, 0]} rotation={[0.3, 0, 0]}>
        {/* Main tube */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 3, 32]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Lens */}
        <mesh position={[0, 0, 1.5]}>
          <cylinderGeometry args={[0.45, 0.45, 0.1, 32]} />
          <meshStandardMaterial color="#00d4ff" metalness={0.5} roughness={0.2} transparent opacity={0.7} />
        </mesh>
        {/* Mount */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.1, 0.15, 1.5, 16]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Base */}
        <mesh position={[0, -1.6, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 0.2, 32]} />
          <meshStandardMaterial color="#222" metalness={0.7} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

function Stars() {
  const count = 500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 20 + Math.random() * 10
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 0.1 + 0.02
    }
    return s
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function ConstellationLines() {
  const geometry = useMemo(() => {
    const vertices: number[] = []
    // Create some constellation-like patterns
    const patterns = [
      [[5, 3, -15], [6, 4, -16], [7, 3.5, -14], [8, 4, -15]],
      [[-6, 2, -12], [-5, 3, -13], [-4, 2.5, -12]],
      [[0, 5, -18], [1, 6, -17], [2, 5.5, -19], [1, 4.5, -18]],
    ]
    
    patterns.forEach(pattern => {
      for (let i = 0; i < pattern.length - 1; i++) {
        vertices.push(...pattern[i], ...pattern[i + 1])
      }
    })
    
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geo
  }, [])

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00d4ff" transparent opacity={0.2} />
    </lineSegments>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <spotLight position={[0, 10, 5]} angle={0.3} intensity={0.8} color="#00d4ff" />
      
      <Telescope />
      <Stars />
      <ConstellationLines />
    </>
  )
}

export function TelescopeScene() {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
