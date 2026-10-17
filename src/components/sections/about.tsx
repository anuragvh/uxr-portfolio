import { BlurFade } from "@/components/ui/blur-fade"
import { about } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-white/10 px-4 py-16 md:px-6 md:py-24">
      <p className="text-sm text-neutral-400">[01] About Me :)</p>

      <BlurFade inView>
        <h1 className="mt-8 max-w-4xl text-4xl leading-tight font-medium tracking-tight text-balance text-white md:text-6xl">
          {about.intro}
        </h1>
      </BlurFade>

      <div className="mt-12 space-y-8">
        {about.blocks.map((block, i) => (
          <BlurFade key={block} inView delay={0.1 + i * 0.1}>
            <h2 className="max-w-3xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
              {block}
            </h2>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
