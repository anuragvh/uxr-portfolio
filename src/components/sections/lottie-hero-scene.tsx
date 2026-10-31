"use client"

import { Lottie } from "lottie-react"

import { asset } from "@/lib/data"

export function LottieHeroScene() {
  return (
    <div
      className="relative mt-10 h-[20.8rem] w-full overflow-hidden rounded-lg sm:h-[23.4rem] md:mt-14 md:h-[26rem]"
      aria-label="Halloween animation scene"
      role="group"
    >
      <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_105%_115%_at_center,black_88%,transparent_100%)]">
        <Lottie
          src={asset("/lottie/halloween%20background.json")}
          loop
          autoplay
          className="h-full w-full"
          aria-label="Halloween background"
        />
      </div>
      <div className="contact-scene__shade pointer-events-none absolute inset-0 z-[1]" />
      <div className="absolute bottom-[calc(-40%+12px)] left-0 z-10 w-[32%] min-w-[150px] max-w-[360px]">
        <Lottie
          src={asset("/lottie/Spider%20walking%20animation.json")}
          loop
          autoplay
          aria-label="Walking spider"
        />
      </div>
      <div className="absolute bottom-[-6px] left-[30%] z-10 w-[16.7%] max-w-[118px]">
        <Lottie
          src={asset("/lottie/Death%20Dance.json")}
          loop
          autoplay
          aria-label="Dancing character"
        />
      </div>
      <div className="absolute bottom-[-4%] left-[53%] z-10 w-[23.8%] max-w-[168px]">
        <Lottie
          src={asset("/lottie/Frankenstein.json")}
          loop
          autoplay
          aria-label="Frankenstein character"
        />
      </div>
    </div>
  )
}
