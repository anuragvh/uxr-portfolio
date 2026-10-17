import { CodeXml, HeartPulse, Rocket, ScanSearch } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { Iphone } from "@/components/ui/iphone"
import { MagicCard } from "@/components/ui/magic-card"
import { cn } from "@/lib/utils"
import { projects, type Project, type ProjectStatus } from "@/lib/data"

const statusStyles: Record<ProjectStatus, { icon: typeof CodeXml; className: string }> = {
  development: { icon: CodeXml, className: "bg-emerald-50 text-emerald-900" },
  launched: { icon: Rocket, className: "bg-sky-50 text-sky-900" },
  healthcare: { icon: HeartPulse, className: "bg-rose-50 text-rose-900" },
  research: { icon: ScanSearch, className: "bg-amber-50 text-amber-900" },
}

function Media({ media }: { media: Project["media"] }) {
  switch (media.kind) {
    case "logos":
      return (
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-10 bg-linear-to-br from-[#4f7cf0] via-[#4a97d6] to-[#3fb08f] p-10 md:aspect-[16/11]">
          {media.logos.map((logo, i) => (
            <img
              key={logo}
              src={logo}
              alt=""
              className={cn("object-contain", i === 0 ? "w-3/5 max-w-md" : "w-1/5 max-w-[140px]")}
            />
          ))}
        </div>
      )
    case "phones":
      return (
        <div
          className="relative flex aspect-[4/3] items-center gap-4 overflow-hidden bg-cover bg-center px-6 md:aspect-[16/11] md:gap-6"
          style={{ backgroundImage: `url(${media.background})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative flex w-full justify-center gap-4 md:gap-6">
            {media.screens.map((screen, i) => (
              <Iphone
                key={screen}
                src={screen}
                className={cn(
                  "max-w-[180px] flex-1 drop-shadow-2xl md:max-w-[230px]",
                  i >= 3 && "hidden sm:inline-block"
                )}
              />
            ))}
          </div>
        </div>
      )
    case "image":
      return (
        <img
          src={media.src}
          alt={media.alt}
          className="aspect-[4/3] w-full bg-white object-cover md:aspect-[16/11]"
        />
      )
  }
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status.type]
  const StatusIcon = status.icon
  const meta = [
    ["Role", project.role],
    ["Scope", project.scope],
    ["For", project.client],
    ["Industry", project.industry],
  ]

  return (
    <article className="border-t border-white/10 py-16 md:py-24">
      <BlurFade inView>
        <p className="text-sm text-neutral-400">{project.year}</p>
        <h3 className="mt-3 max-w-4xl text-3xl leading-tight font-medium tracking-tight text-balance text-white md:text-[2.6rem]">
          {project.title}
        </h3>
      </BlurFade>

      <BlurFade inView delay={0.1}>
        <ul className="mt-6 flex flex-wrap gap-2">
          <li
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium",
              status.className
            )}
          >
            <StatusIcon className="size-4" />
            {project.status.label}
          </li>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-sm text-neutral-200"
            >
              {tag}
            </li>
          ))}
        </ul>
      </BlurFade>

      <BlurFade inView delay={0.15}>
        <div className="mt-6 max-w-4xl space-y-3 text-[15px] leading-relaxed text-neutral-300">
          {project.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="text-neutral-500">{label}</dt>
              <dd className="mt-2 text-neutral-200">{value}</dd>
            </div>
          ))}
        </dl>
      </BlurFade>

      <BlurFade inView delay={0.2}>
        <MagicCard
          className="mt-12 overflow-hidden rounded-3xl p-0"
          gradientFrom="#4C8DFF"
          gradientTo="#a3e635"
          gradientColor="#262626"
        >
          <div className="relative overflow-hidden rounded-[inherit]">
            <Media media={project.media} />
            {project.status.type === "development" && (
              <BorderBeam size={260} duration={9} colorFrom="#4C8DFF" colorTo="#a3e635" />
            )}
          </div>
        </MagicCard>
      </BlurFade>
    </article>
  )
}

export function Projects() {
  return (
    <section id="work" className="mx-auto mt-20 max-w-6xl px-4 md:px-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  )
}
