"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const { nodes, connections } = useMemo(() => {
    const nodePositions: [number, number, number][] = []
    const numNodes = 20
    
    for (let i = 0; i < numNodes; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 2
      nodePositions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      ])
    }
    
    const connectionVertices: number[] = []
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dist = Math.sqrt(
          Math.pow(nodePositions[i][0] - nodePositions[j][0], 2) +
          Math.pow(nodePositions[i][1] - nodePositions[j][1], 2) +
          Math.pow(nodePositions[i][2] - nodePositions[j][2], 2)
        )
        if (dist < 3) {
          connectionVertices.push(...nodePositions[i], ...nodePositions[j])
        }
      }
    }
    
    return { nodes: nodePositions, connections: connectionVertices }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(connections, 3))
    return geo
  }, [connections])

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.15 + (i % 3) * 0.05, 16, 16]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#0088ff" : "#00ffaa"} 
            emissive={i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#0088ff" : "#00ffaa"} 
            emissiveIntensity={0.3} 
          />
        </mesh>
      ))}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.2} />
      </lineSegments>
    </group>
  )
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 100
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00d4ff" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00d4ff" />
      
      <NetworkNodes />
      <FloatingParticles />
    </>
  )
}

export function NetworkScene() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
