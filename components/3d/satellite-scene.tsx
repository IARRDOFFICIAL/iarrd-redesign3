"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function CubeSatModel({ position = [0, 0, 0] as [number, number, number], scale = 1 }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Main body */}
        <mesh>
          <boxGeometry args={[1, 1, 2]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Solar panel left */}
        <mesh position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 12]}>
          <boxGeometry args={[2, 0.02, 1.5]} />
          <meshStandardMaterial color="#0066cc" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Solar panel right */}
        <mesh position={[1.5, 0, 0]} rotation={[0, 0, -Math.PI / 12]}>
          <boxGeometry args={[2, 0.02, 1.5]} />
          <meshStandardMaterial color="#0066cc" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Antenna */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.4]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Sensor */}
        <mesh position={[0, 0, 1.1]}>
          <cylinderGeometry args={[0.15, 0.2, 0.2]} />
          <meshStandardMaterial color="#00d4ff" metalness={0.5} roughness={0.3} emissive="#00d4ff" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

function OrbitRing({ radius = 5, color = "#00d4ff" }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
    }
    return pts
  }, [radius])

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  )
}

function ParticleField() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00d4ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
      
      <CubeSatModel position={[0, 0, 0]} scale={0.8} />
      <OrbitRing radius={4} />
      <OrbitRing radius={6} color="#0088ff" />
      <ParticleField />
    </>
  )
}

export function SatelliteScene() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
