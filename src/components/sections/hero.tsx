import { ArrowRight } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { DotPattern } from "@/components/ui/dot-pattern"
import { TextAnimate } from "@/components/ui/text-animate"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44">
      <DotPattern
        width={22}
        height={22}
        className={cn(
          "text-white/15",
          "[mask-image:radial-gradient(520px_circle_at_20%_30%,white,transparent)]"
        )}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <BlurFade delay={0.05}>
          <div className="flex items-center gap-5">
            <h2 className="font-hand text-5xl text-[#4C8DFF] md:text-6xl">
              Hi :) I&apos;m {profile.name}
            </h2>
            <img
              src={profile.avatar}
              alt="Portrait of Anurag"
              className="size-16 rounded-full border-2 border-white object-cover md:size-20"
            />
          </div>
        </BlurFade>

        <h1 className="mt-4 text-5xl leading-[1.1] font-medium tracking-tight text-white md:text-7xl">
          <TextAnimate animation="blurInUp" by="word" delay={0.15} as="span" className="block">
            UX Designer,
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="word" delay={0.3} as="span" className="block">
            Researcher &amp; Engineer
          </TextAnimate>
        </h1>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <BlurFade delay={0.45}>
            <p className="max-w-sm text-base leading-relaxed text-neutral-300">
              <span className="font-semibold text-white">6 years</span> of experience across UX
              Research &amp; Design -&gt; UI Development in Healthcare, Sports &amp; Media,
              Logistics &amp; AI Technologies
            </p>
          </BlurFade>

          <ul className="space-y-4">
            {profile.roles.map((role, i) => (
              <BlurFade key={role.title} delay={0.55 + i * 0.1}>
                <li className="flex gap-3">
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-neutral-300" />
                  <div>
                    <p className="font-medium text-white">{role.title}</p>
                    <p className="text-sm text-neutral-400">{role.org}</p>
                  </div>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
