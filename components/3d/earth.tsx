"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Procedural wireframe Earth - no external textures required
interface EarthProps {
  position?: [number, number, number]
  scale?: number
}

export function Earth({ position = [0, 0, 0], scale = 2 }: EarthProps) {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  const gridRef = useRef<THREE.LineSegments>(null)

  // Create a procedural grid pattern for a tech/wireframe Earth look
  const gridGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices: number[] = []
    const radius = 1.02

    // Latitude lines
    for (let lat = -80; lat <= 80; lat += 20) {
      const latRad = (lat * Math.PI) / 180
      const y = Math.sin(latRad) * radius
      const r = Math.cos(latRad) * radius
      
      for (let lon = 0; lon <= 360; lon += 5) {
        const lonRad = (lon * Math.PI) / 180
        const nextLonRad = ((lon + 5) * Math.PI) / 180
        
        vertices.push(
          Math.cos(lonRad) * r, y, Math.sin(lonRad) * r,
          Math.cos(nextLonRad) * r, y, Math.sin(nextLonRad) * r
        )
      }
    }

    // Longitude lines
    for (let lon = 0; lon < 360; lon += 30) {
      const lonRad = (lon * Math.PI) / 180
      
      for (let lat = -90; lat < 90; lat += 5) {
        const latRad = (lat * Math.PI) / 180
        const nextLatRad = ((lat + 5) * Math.PI) / 180
        
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

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geometry
  }, [])

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.07
    }
    if (gridRef.current) {
      gridRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group position={position}>
      {/* Core Earth sphere */}
      <mesh ref={earthRef} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0c1929"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Wireframe grid overlay */}
      <lineSegments ref={gridRef} scale={scale} geometry={gridGeometry}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.4} />
      </lineSegments>

      {/* Clouds layer */}
      <mesh ref={cloudsRef} scale={scale * 1.01}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh scale={scale * 1.15}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Inner glow */}
      <mesh scale={scale * 1.05}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}
