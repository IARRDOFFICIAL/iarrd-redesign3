"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const gridRef = useRef<THREE.LineSegments>(null)
  
  const gridGeometry = useMemo(() => {
    const vertices: number[] = []
    const radius = 2.02

    for (let lat = -80; lat <= 80; lat += 20) {
      const latRad = (lat * Math.PI) / 180
      const y = Math.sin(latRad) * radius
      const r = Math.cos(latRad) * radius
      
      for (let lon = 0; lon <= 360; lon += 10) {
        const lonRad = (lon * Math.PI) / 180
        const nextLonRad = ((lon + 10) * Math.PI) / 180
        
        vertices.push(
          Math.cos(lonRad) * r, y, Math.sin(lonRad) * r,
          Math.cos(nextLonRad) * r, y, Math.sin(nextLonRad) * r
        )
      }
    }

    for (let lon = 0; lon < 360; lon += 30) {
      const lonRad = (lon * Math.PI) / 180
      
      for (let lat = -90; lat < 90; lat += 10) {
        const latRad = (lat * Math.PI) / 180
        const nextLatRad = ((lat + 10) * Math.PI) / 180
        
        const y1 = Math.sin(latRad) * radius
        const r1 = Math.cos(latRad) * radius
        const y2 = Math.sin(nextLatRad) * radius
        const r2 = Math.cos(nextLatRad) * radius
        
        vertices.push(
          Math.cos(lonRad) * r1, y1, Math.sin(lonRad) * r1,
          Math.cos(lonRad) * r2, y2, Math.sin(lonRad) * r2
        )
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group position={[2, 0, 0]}>
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.3} roughness={0.7} />
      </mesh>
      <lineSegments ref={gridRef} geometry={gridGeometry}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.3} />
      </lineSegments>
      {/* India marker */}
      <mesh position={[1.2, 0.8, 1.3]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={1} />
      </mesh>
      {/* Pulse ring */}
      <mesh position={[1.2, 0.8, 1.3]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.15, 32]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function ConnectionLines() {
  const ref = useRef<THREE.Group>(null)
  
  const lines = useMemo(() => {
    const lineData: { start: [number, number, number], end: [number, number, number] }[] = [
      { start: [1.2, 0.8, 1.3], end: [-8, 3, -2] },
      { start: [1.2, 0.8, 1.3], end: [-8, -2, 3] },
      { start: [1.2, 0.8, 1.3], end: [-8, 0, -4] },
    ]
    return lineData
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const line = child as THREE.Line
        const material = line.material as THREE.LineBasicMaterial
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2
      })
    }
  })

  return (
    <group ref={ref}>
      {lines.map((line, i) => {
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(...line.start.map(v => v + 2)),
          new THREE.Vector3(
            (line.start[0] + line.end[0]) / 2 + 2,
            Math.max(line.start[1], line.end[1]) + 3,
            (line.start[2] + line.end[2]) / 2
          ),
          new THREE.Vector3(...line.end)
        )
        const points = curve.getPoints(50)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#00d4ff" transparent opacity={0.3} />
          </line>
        )
      })}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-5, 5, -5]} intensity={0.4} color="#00d4ff" />
      
      <Globe />
      <ConnectionLines />
    </>
  )
}

export function GlobeScene() {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas camera={{ position: [-5, 2, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
