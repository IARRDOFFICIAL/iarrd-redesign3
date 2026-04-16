"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  
  const { nodes, connections } = useMemo(() => {
    const nodePositions: [number, number, number][] = []
    const layers = [4, 8, 12, 8, 4]
    const layerSpacing = 2
    
    layers.forEach((count, layerIdx) => {
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const radius = 1.5 + Math.random() * 0.5
        const x = (layerIdx - 2) * layerSpacing
        const y = Math.sin(angle) * radius
        const z = Math.cos(angle) * radius
        nodePositions.push([x, y, z])
      }
    })
    
    const connectionVertices: number[] = []
    let nodeIdx = 0
    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayerStart = nodeIdx
      const currentLayerSize = layers[l]
      const nextLayerStart = nodeIdx + currentLayerSize
      const nextLayerSize = layers[l + 1]
      
      for (let i = 0; i < currentLayerSize; i++) {
        for (let j = 0; j < Math.min(3, nextLayerSize); j++) {
          const targetIdx = nextLayerStart + ((i + j) % nextLayerSize)
          const from = nodePositions[currentLayerStart + i]
          const to = nodePositions[targetIdx]
          connectionVertices.push(...from, ...to)
        }
      }
      nodeIdx += currentLayerSize
    }
    
    return { nodes: nodePositions, connections: connectionVertices }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (lineRef.current) {
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1
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
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={0.5 + (i % 3) * 0.2} 
          />
        </mesh>
      ))}
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.3} />
      </lineSegments>
    </group>
  )
}

function DataParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 100
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#0088ff" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#00d4ff" />
      
      <NeuralNetwork />
      <DataParticles />
    </>
  )
}

export function NeuralScene() {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
