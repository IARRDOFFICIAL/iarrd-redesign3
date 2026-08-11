"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function PartnersSection() {

  const wrapperRef = useRef<HTMLDivElement>(null)

  const partners = [
    "/partners/ntls.png",
    "/partners/msme.png",
    "/partners/startup-india.png",
    "/partners/spacemurak.png",
    "/partners/startup-tn.png",
    "/partners/inspace.png",
    "/partners/aarshi.png",
    "/partners/departmentofspace.png",
    "/partners/ministryofdefence.png",
  ]


  useEffect(() => {

    const wrapper = wrapperRef.current
    if (!wrapper) return


    /* base motion values */

    const baseSpeed = 26
    const slowSpeed = 48

    let targetSpeed = baseSpeed
    let currentSpeed = baseSpeed

    let targetTiltX = 0
    let targetTiltY = 0

    let currentTiltX = 0
    let currentTiltY = 0


    const easing = 0.05

    let animationFrame: number


    const animate = () => {

      /* inertia interpolation */

      currentSpeed += (targetSpeed - currentSpeed) * easing

      wrapper.style.setProperty(
        "--logo-scroll-speed",
        `${currentSpeed}s`
      )


      /* tilt smoothing */

      currentTiltX += (targetTiltX - currentTiltX) * easing
      currentTiltY += (targetTiltY - currentTiltY) * easing

      wrapper.style.setProperty("--tiltX", `${currentTiltX}deg`)
      wrapper.style.setProperty("--tiltY", `${currentTiltY}deg`)


      animationFrame = requestAnimationFrame(animate)

    }


    animate()


    const handleMouseMove = (e: MouseEvent) => {

      const rect = wrapper.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2


      const offsetX =
        (e.clientX - centerX) / rect.width

      const offsetY =
        (e.clientY - centerY) / rect.height


      /* subtle tilt */

      targetTiltY = offsetX * 3
      targetTiltX = -offsetY * 2


      /* proximity slowdown */

      const distance =
        Math.abs(e.clientX - centerX) /
        (rect.width / 2)


      const proximity =
        1 - Math.min(distance, 1)


      const eased =
        proximity * proximity


      /* slow when cursor near */

      targetSpeed =
        baseSpeed +
        eased * (slowSpeed - baseSpeed)

    }


    const handleLeave = () => {

      targetTiltX = 0
      targetTiltY = 0

      targetSpeed = baseSpeed

    }


    wrapper.addEventListener("mousemove", handleMouseMove)
    wrapper.addEventListener("mouseleave", handleLeave)


    return () => {

      cancelAnimationFrame(animationFrame)

      wrapper.removeEventListener("mousemove", handleMouseMove)
      wrapper.removeEventListener("mouseleave", handleLeave)

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