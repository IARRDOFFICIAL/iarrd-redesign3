"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Sphere, Float } from "@react-three/drei"
import { StarField } from "./star-field"
import { Earth } from "./earth"
import { Satellite } from "./satellite"
import * as THREE from "three"

// Floating particles component
function FloatingParticles() {
  const meshRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002
      })
    }
  })

  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number],
    scale: Math.random() * 0.1 + 0.05,
  }))

  return (
    <group ref={meshRef}>
      {particles.map((particle, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[particle.scale]} position={particle.position}>
            <meshStandardMaterial
              color={new THREE.Color().setHSL(Math.random(), 0.7, 0.6)}
              emissive={new THREE.Color().setHSL(Math.random(), 0.3, 0.2)}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

// Orbital rings component
function OrbitalRings() {
  const ringsRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={ringsRef}>
      {[4, 5, 6, 7].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
          <meshBasicMaterial
            color="#0ea5e9"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 3, 5]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#f59e0b" />

          <StarField count={4000} radius={60} />

          <FloatingParticles />

          <OrbitalRings />

          <Earth position={[2.5, -0.5, 0]} scale={2.2} />

          <Satellite orbitRadius={3.8} speed={0.25} inclination={0.4} startAngle={0} />
          <Satellite orbitRadius={4.2} speed={0.18} inclination={-0.3} startAngle={Math.PI / 2} />
          <Satellite orbitRadius={4.6} speed={0.15} inclination={0.2} startAngle={Math.PI} />
          <Satellite orbitRadius={5.0} speed={0.12} inclination={0.6} startAngle={Math.PI * 1.5} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
