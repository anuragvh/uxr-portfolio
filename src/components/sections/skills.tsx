import { Code2, MonitorSmartphone, PenTool, Search } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { MagicCard } from "@/components/ui/magic-card"
import { skills } from "@/lib/data"

const icons = {
  web: PenTool,
  mobile: MonitorSmartphone,
  research: Search,
  code: Code2,
}

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl border-t border-white/10 px-4 py-16 md:px-6">
      <p className="text-sm text-neutral-400">[02] My Skill Set</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skills.map((skill, i) => {
          const Icon = icons[skill.icon]
          return (
            <BlurFade
              key={skill.title}
              inView
              delay={i * 0.08}
              className={skill.icon === "research" ? "md:row-span-2" : undefined}
            >
              <MagicCard
                className="h-full rounded-2xl"
                gradientFrom="#4C8DFF"
                gradientTo="#a3e635"
                gradientColor="#1f1f1f"
              >
                <div className="flex h-full flex-col gap-6 p-6 md:p-8">
                  <div className="flex items-center gap-3 text-white">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="font-medium">{skill.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-sm text-neutral-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MagicCard>
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}
