import { ArrowRight } from "lucide-react"

import { LinkedInIcon } from "@/components/icons"
import { BlurFade } from "@/components/ui/blur-fade"
import { Particles } from "@/components/ui/particles"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { profile } from "@/lib/data"

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
      <BlurFade inView>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-6 py-16 md:px-14 md:py-24">
          <Particles className="absolute inset-0" quantity={120} ease={70} color="#ffffff" />
          <div className="relative">
            <img
              src={profile.avatar}
              alt=""
              className="size-16 rounded-full border-2 border-white object-cover"
            />
            <h2 className="mt-6 text-4xl leading-tight font-medium tracking-tight text-white md:text-6xl">
              Don&apos;t be shy
              <br />
              Say hi :)
            </h2>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-8 inline-block">
              <ShimmerButton background="rgba(10,10,10,1)" className="gap-2 px-5 py-3 text-sm">
                Get in touch
                <ArrowRight className="size-4" />
              </ShimmerButton>
            </a>
          </div>
        </div>
      </BlurFade>

      <footer className="mt-10 flex items-center justify-between text-sm text-neutral-500">
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
