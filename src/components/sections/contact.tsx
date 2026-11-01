import { LinkedInIcon } from "@/components/icons"
import { CalEmbed } from "@/components/sections/cal-embed"
import { LottieHeroScene } from "@/components/sections/lottie-hero-scene"
import { BlurFade } from "@/components/ui/blur-fade"
import { Particles } from "@/components/ui/particles"
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
            <h2 className="font-hand text-5xl leading-[0.9] tracking-wide text-neutral-900 md:text-6xl dark:text-white">
              Don&apos;t be shy
              <br />
              Say hi :)
            </h2>
          </div>

          <div
            id="booking-calendar"
            className="scroll-mt-8 rounded-lg border border-neutral-300 bg-[#E1E4E8] p-4 lg:mt-3 dark:border-white/15 dark:bg-[#262728]"
          >
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
