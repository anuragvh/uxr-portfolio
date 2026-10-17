"use client"

import { useRef, type ReactNode, type RefObject } from "react"

import { AnimatedBeam } from "@/components/ui/animated-beam"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

const tones = {
  purple: {
    node: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-300",
    tag: "bg-fuchsia-200 text-fuchsia-800",
    color: "#e879f9",
  },
  blue: {
    node: "border-sky-400/30 bg-sky-500/10 text-sky-300",
    tag: "bg-sky-200 text-sky-800",
    color: "#38bdf8",
  },
  green: {
    node: "border-lime-400/30 bg-lime-500/10 text-lime-300",
    tag: "bg-lime-200 text-lime-800",
    color: "#a3e635",
  },
} as const

type Tone = keyof typeof tones

function Node({
  ref,
  tone,
  children,
}: {
  ref: RefObject<HTMLDivElement | null>
  tone: Tone
  children: ReactNode
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 rounded-xl border px-3 py-2 text-center text-sm leading-tight font-medium backdrop-blur-sm sm:px-5 sm:py-3 sm:text-2xl",
        tones[tone].node
      )}
    >
      {children}
    </div>
  )
}

function Tag({
  ref,
  tone,
  children,
}: {
  ref: RefObject<HTMLDivElement | null>
  tone: Tone
  children: ReactNode
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 rounded-md px-2 py-1 text-center text-[10px] leading-tight font-medium sm:text-xs sm:whitespace-nowrap",
        tones[tone].tag
      )}
    >
      {children}
    </div>
  )
}

const columns: { tone: Tone; label: [string, string]; top: string; bottom: string }[] = [
  {
    tone: "purple",
    label: ["Research &", "Strategy"],
    top: "User & Service Research",
    bottom: "User Workshops",
  },
  {
    tone: "blue",
    label: ["Product", "Design"],
    top: "Design Systems",
    bottom: "Accessibility Design",
  },
  {
    tone: "green",
    label: ["UI", "Development"],
    top: "HTML, CSS, JS",
    bottom: "Angular, ReactNative",
  },
]

export function SkillsFlow() {
  const container = useRef<HTMLDivElement>(null)
  const research = useRef<HTMLDivElement>(null)
  const design = useRef<HTMLDivElement>(null)
  const dev = useRef<HTMLDivElement>(null)
  const t1 = useRef<HTMLDivElement>(null)
  const t2 = useRef<HTMLDivElement>(null)
  const t3 = useRef<HTMLDivElement>(null)
  const t4 = useRef<HTMLDivElement>(null)
  const t5 = useRef<HTMLDivElement>(null)
  const t6 = useRef<HTMLDivElement>(null)

  const nodeRefs = [research, design, dev]
  const topRefs = [t1, t3, t5]
  const bottomRefs = [t2, t4, t6]

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <BlurFade inView>
        <div
          ref={container}
          className="relative grid grid-cols-3 gap-x-4 gap-y-10 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-4 py-14 sm:gap-x-10 sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_65%)]"
          />
          {columns.map((col, i) => (
            <div key={col.top} className="flex flex-col items-center gap-10">
              <Tag ref={topRefs[i]} tone={col.tone}>
                {col.top}
              </Tag>
              <Node ref={nodeRefs[i]} tone={col.tone}>
                {col.label[0]}
                <br />
                {col.label[1]}
              </Node>
              <Tag ref={bottomRefs[i]} tone={col.tone}>
                {col.bottom}
              </Tag>
            </div>
          ))}

          {columns.map((col, i) => (
            <AnimatedBeam
              key={`top-${col.top}`}
              containerRef={container}
              fromRef={topRefs[i]}
              toRef={nodeRefs[i]}
              pathColor={tones[col.tone].color}
              gradientStartColor={tones[col.tone].color}
              gradientStopColor="#ffffff"
              duration={4}
            />
          ))}
          {columns.map((col, i) => (
            <AnimatedBeam
              key={`bottom-${col.bottom}`}
              containerRef={container}
              fromRef={bottomRefs[i]}
              toRef={nodeRefs[i]}
              pathColor={tones[col.tone].color}
              gradientStartColor={tones[col.tone].color}
              gradientStopColor="#ffffff"
              duration={4}
              delay={1}
              reverse
            />
          ))}
          <AnimatedBeam
            containerRef={container}
            fromRef={research}
            toRef={design}
            gradientStartColor={tones.purple.color}
            gradientStopColor={tones.blue.color}
            pathWidth={3}
            duration={3}
          />
          <AnimatedBeam
            containerRef={container}
            fromRef={design}
            toRef={dev}
            gradientStartColor={tones.blue.color}
            gradientStopColor={tones.green.color}
            pathWidth={3}
            duration={3}
            delay={1.5}
          />
        </div>
      </BlurFade>
    </section>
  )
}
