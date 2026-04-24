"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function PartnersSection() {

  const wrapperRef = useRef<HTMLDivElement>(null)

  const partners = [
    "/partners/ntls.png",
    "/partners/msme.png",
    "/partners/startup-india.png",
    "/partners/startup-tn.png",
    "/partners/inspace.png",
    "/partners/departmentofspace.png",
    "/partners/ministryofdefence.png",
  ]


  useEffect(() => {

    const wrapper = wrapperRef.current
    if (!wrapper) return

    let targetSpeed = 22
    let currentSpeed = 22

    let targetTiltX = 0
    let targetTiltY = 0

    let currentTiltX = 0
    let currentTiltY = 0


    const easing = 0.08   // physics smoothing factor


    const animate = () => {

      /* interpolate speed */

      currentSpeed += (targetSpeed - currentSpeed) * easing

      wrapper.style.setProperty(
        "--logo-scroll-speed",
        `${currentSpeed}s`
      )


      /* interpolate tilt */

      currentTiltX += (targetTiltX - currentTiltX) * easing
      currentTiltY += (targetTiltY - currentTiltY) * easing

      wrapper.style.setProperty(
        "--tiltX",
        `${currentTiltX}deg`
      )

      wrapper.style.setProperty(
        "--tiltY",
        `${currentTiltY}deg`
      )


      requestAnimationFrame(animate)

    }


    animate()


    const handleMouseMove = (e: MouseEvent) => {

      const rect = wrapper.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2


      /* normalized offsets */

      const offsetX =
        (e.clientX - centerX) / rect.width

      const offsetY =
        (e.clientY - centerY) / rect.height


      /* update tilt targets */

      targetTiltY = offsetX * 6
      targetTiltX = -offsetY * 4


      /* update speed target */

      const distance =
        Math.abs(e.clientX - centerX) /
        (rect.width / 2)

      targetSpeed =
        22 + distance * 40

    }


    const handleLeave = () => {

      targetTiltX = 0
      targetTiltY = 0
      targetSpeed = 22

    }


    window.addEventListener(
      "mousemove",
      handleMouseMove
    )

    window.addEventListener(
      "mouseleave",
      handleLeave
    )


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )

      window.removeEventListener(
        "mouseleave",
        handleLeave
      )

    }

  }, [])



  return (

    <div
      ref={wrapperRef}
      className="partner-strip-wrapper w-full"
    >

      <div className="scroll-container flex gap-16 whitespace-nowrap">

        {[...partners, ...partners].map((logo, index) => (

          <div
            key={index}
            className="flex items-center justify-center min-w-[180px]"
          >

            <Image
              src={logo}
              alt="Partner Logo"
              width={160}
              height={80}
              className="opacity-80 hover:opacity-100 transition duration-300"
            />

          </div>

        ))}

      </div>

    </div>

  )

}