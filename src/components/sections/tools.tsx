import Image from "next/image"

import { Marquee } from "@/components/ui/marquee"
import { asset } from "@/lib/data"

type Tool = {
  name: string
  icon: string
  cropIcon?: boolean
}

const tools = [
  { name: "Figma", icon: asset("/images/tool-icons/figma.svg") },
  { name: "VS Code", icon: asset("/images/tool-icons/vscode.svg") },
  { name: "UserZoom", icon: asset("/images/tool-icons/userzoom.svg"), cropIcon: true },
  { name: "Dovetail", icon: asset("/images/tool-icons/dovetail.svg") },
  { name: "Claude", icon: asset("/images/tool-icons/claude.svg") },
  { name: "Cursor", icon: asset("/images/tool-icons/cursor.svg") },
  { name: "Miro", icon: asset("/images/tool-icons/miro.svg") },
  { name: "SurveyMonkey", icon: asset("/images/tool-icons/surveymonkey.svg") },
  { name: "Angular", icon: asset("/images/tool-icons/angular.svg") },
  { name: "Git", icon: asset("/images/tool-icons/git.svg") },
  { name: "TypeScript", icon: asset("/images/tool-icons/typescript.svg") },
] satisfies Tool[]

function ToolTickerItem({ name, icon, cropIcon = false }: Tool) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.04]">
      <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden">
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
          className={cropIcon ? "size-7 object-cover object-left" : "size-7 object-contain"}
        />
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {name}
      </span>
    </div>
  )
}

export function Tools() {
  return (
    <section aria-labelledby="tools-heading">
      <h2
        id="tools-heading"
        className="max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base"
      >
        Tools I use every day
      </h2>
      <ul className="sr-only">
        {tools.map((tool) => (
          <li key={tool.name}>{tool.name}</li>
        ))}
      </ul>
      <div className="relative mt-6 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-10 before:bg-linear-to-r before:from-background before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-10 after:bg-linear-to-l after:from-background after:to-transparent">
        <Marquee
          aria-hidden="true"
          pauseOnHover
          className="p-0 [--duration:32s] [--gap:1rem]"
        >
          {tools.map((tool) => (
            <ToolTickerItem key={tool.name} {...tool} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
