"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface SatelliteProps {
  orbitRadius?: number
  speed?: number
  inclination?: number
  startAngle?: number
}

export function Satellite({ 
  orbitRadius = 3.5, 
  speed = 0.3, 
  inclination = 0.3,
  startAngle = 0 
}: SatelliteProps) {
  const groupRef = useRef<THREE.Group>(null)
  const satelliteRef = useRef<THREE.Group>(null)
  const angleRef = useRef(startAngle)
  const trailRef = useRef<THREE.Line>(null)

  useFrame((_, delta) => {
    if (groupRef.current && satelliteRef.current) {
      angleRef.current += delta * speed
      
      const x = Math.cos(angleRef.current) * orbitRadius
      const z = Math.sin(angleRef.current) * orbitRadius
      const y = Math.sin(angleRef.current * 2) * inclination
      
      satelliteRef.current.position.set(x, y, z)
      satelliteRef.current.rotation.y = -angleRef.current + Math.PI / 2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.01, orbitRadius + 0.01, 128]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      {/* Satellite */}
      <group ref={satelliteRef}>
        {/* Main body */}
        <mesh>
          <boxGeometry args={[0.1, 0.1, 0.15]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Solar panel left */}
        <mesh position={[-0.2, 0, 0]}>
          <boxGeometry args={[0.25, 0.02, 0.12]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.6} roughness={0.3} />
        </mesh>
        
        {/* Solar panel right */}
        <mesh position={[0.2, 0, 0]}>
          <boxGeometry args={[0.25, 0.02, 0.12]} />
          <meshStandardMaterial color="#1e3a5f" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Antenna */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.005, 0.005, 0.08]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Signal glow */}
        <pointLight color="#0ea5e9" intensity={0.5} distance={1} />
      </group>
    </group>
  )
}
