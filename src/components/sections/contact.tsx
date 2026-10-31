import { ArrowRight } from "lucide-react"
import Image from "next/image"

import { LinkedInIcon } from "@/components/icons"
import { CalEmbed } from "@/components/sections/cal-embed"
import { LottieHeroScene } from "@/components/sections/lottie-hero-scene"
import { BlurFade } from "@/components/ui/blur-fade"
import { Particles } from "@/components/ui/particles"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { profile } from "@/lib/data"

export function Contact() {
  return (
    <section className="contact-section relative isolate mx-auto max-w-6xl px-4 pb-10 md:px-6">
      <Particles
        className="pointer-events-none absolute inset-0 left-1/2 -z-10 w-screen -translate-x-1/2 opacity-30"
        quantity={120}
        ease={70}
        color="#ffffff"
      />
      <div
        aria-hidden="true"
        className="contact-section__backdrop pointer-events-none absolute inset-x-1/2 top-16 bottom-0 -z-10 w-screen -translate-x-1/2 lg:top-[4.75rem]"
      />
      <BlurFade inView>
        <div className="relative grid gap-10 pt-16 lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-8">
          <div>
            <Image
              src={profile.avatar}
              alt=""
              width={64}
              height={64}
              unoptimized
              className="size-16 rounded-full border-2 border-white object-cover"
            />
            <h2 className="mt-4 text-3xl leading-[1.08] font-medium tracking-tight text-white">
              Don&apos;t be shy
              <br />
              Say hi :)
            </h2>
            <a href="#booking-calendar" className="mt-3 inline-block">
              <ShimmerButton
                background="rgba(10,10,10,1)"
                className="gap-2 px-3 py-2 text-[10px]"
              >
                Get in touch
                <ArrowRight className="size-3" />
              </ShimmerButton>
            </a>
          </div>

          <div id="booking-calendar" className="scroll-mt-8 lg:mt-3">
            <CalEmbed />
          </div>
        </div>
      </BlurFade>

      <LottieHeroScene />

      <footer className="-mx-4 mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-neutral-500 md:-mx-6">
        <p>
          © 2026 {profile.fullName}
        </p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-white"
        >
          <LinkedInIcon className="size-4" />
        </a>
      </footer>
    </section>
  )
}
