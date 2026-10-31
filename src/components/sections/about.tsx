import Image from "next/image"

import { BlurFade } from "@/components/ui/blur-fade"
import { Tools } from "@/components/sections/tools"
import { about, asset } from "@/lib/data"

const experience = [
  {
    dates: "2026 – Present",
    role: "UX Researcher",
    company: "UST Global (Contract)",
    logo: asset("/images/org-logos/ust.svg"),
  },
  {
    dates: "2024 – 2025",
    role: "Design Researcher",
    company: "Indiana CTSI",
    logo: asset("/images/org-logos/indiana-ctsi.png"),
  },
  {
    dates: "2023",
    role: "Product Designer",
    company: "INDYCAR (Co-op)",
    logo: asset("/images/org-logos/indycar.png"),
  },
  {
    dates: "2019 – 2021",
    role: "Front End Engineer",
    company: "L&T Technology Services Pvt Ltd",
    logo: asset("/images/org-logos/ltts.svg"),
  },
]

const education = [
  {
    dates: "2026 – Present",
    degree: "Master's in Artificial Intelligence & Machine Learning",
    school: "Indiana Wesleyan University",
    logo: asset("/images/org-logos/indiana-wesleyan.png"),
  },
  {
    dates: "2022 – 2023",
    degree: "Master's in Human-Computer Interaction",
    school: "Indiana University",
    logo: asset("/images/org-logos/indiana-university.png"),
  },
  {
    dates: "2015 – 2019",
    degree: "Bachelor's in Computer Science Engineering",
    school: "VTU",
    logo: asset("/images/org-logos/vtu.png"),
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-white/10 px-4 py-16 md:px-6 md:py-24">
      <p className="text-sm text-neutral-400">[01] About Me :)</p>

      <BlurFade inView>
        <h1 className="mt-8 max-w-4xl text-3xl leading-tight font-medium tracking-tight text-balance text-white md:text-[2.6rem]">
          {about.intro}
        </h1>
      </BlurFade>

      <div className="mt-12 space-y-8">
        {about.blocks.map((block, i) => (
          <BlurFade key={block} inView delay={0.1 + i * 0.1}>
            <h2 className="max-w-4xl whitespace-pre-line text-[15px] leading-relaxed text-neutral-400">
              {block}
            </h2>
          </BlurFade>
        ))}
      </div>

      <div className="mt-16">
        <Tools />
      </div>

      <div className="relative isolate mt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-80 overflow-hidden lg:block"
        >
          <Image
            src={asset("/images/experience-mandala.png")}
            alt=""
            width={554}
            height={554}
            className="absolute top-0 left-0 h-full w-auto max-w-none object-contain opacity-90 mix-blend-multiply dark:invert dark:mix-blend-screen"
          />
        </div>
        <div className="relative z-10">
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            My experience spans UX research, product design, and front-end engineering.
          </p>

          <ol className="mt-8 space-y-6">
            {experience.map((item) => (
              <li
                key={item.company}
                className="grid gap-2 sm:grid-cols-[164px_minmax(0,1fr)] sm:gap-8"
              >
                <p className="text-xs leading-5 tracking-wide text-neutral-500">{item.dates}</p>
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100">
                    <Image
                      src={item.logo}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm leading-5 font-medium text-neutral-200">{item.role}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">@ {item.company}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative z-10 mt-20">
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            My education brings together computer science, human-computer interaction, and AI.
          </p>

          <ol className="mt-8 space-y-6">
            {education.map((item) => (
              <li
                key={item.degree}
                className="grid gap-2 sm:grid-cols-[164px_minmax(0,1fr)] sm:gap-8"
              >
                <p className="text-xs leading-5 tracking-wide text-neutral-500">{item.dates}</p>
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100">
                    <Image
                      src={item.logo}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm leading-5 font-medium text-neutral-200">{item.degree}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">{item.school}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
