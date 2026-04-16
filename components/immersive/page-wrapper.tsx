"use client"

import { ReactNode } from "react"
import { ImmersiveNavigation } from "./navigation"
import { ImmersiveFooter } from "./footer"

interface PageWrapperProps {
  children: ReactNode
  scene?: ReactNode
}

export function PageWrapper({ children, scene }: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-background relative">
      <ImmersiveNavigation />
      
      {/* 3D Background Scene */}
      {scene && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {scene}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      <ImmersiveFooter />
    </main>
  )
}
