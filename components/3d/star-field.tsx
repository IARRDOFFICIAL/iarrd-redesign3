"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface StarFieldProps {
  count?: number
  radius?: number
  speed?: number
}

export function StarField({ count = 5000, radius = 100, speed = 0.05 }: StarFieldProps) {
  const points = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius * Math.cbrt(Math.random())

      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = r * Math.cos(phi)

      const brightness = 0.5 + Math.random() * 0.5
      const tint = Math.random()
      
      if (tint > 0.8) {
        colors[i3] = brightness * 0.8
        colors[i3 + 1] = brightness * 0.9
        colors[i3 + 2] = brightness
      } else if (tint > 0.6) {
        colors[i3] = brightness
        colors[i3 + 1] = brightness * 0.95
        colors[i3 + 2] = brightness * 0.8
      } else {
        colors[i3] = brightness
        colors[i3 + 1] = brightness
        colors[i3 + 2] = brightness
      }
    }

    return [positions, colors]
  }, [count, radius])

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * speed * 0.1
      points.current.rotation.x += delta * speed * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  )
}
