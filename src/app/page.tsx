import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { SiteHeader } from "@/components/sections/site-header"
import { Skills } from "@/components/sections/skills"
import { SkillsFlow } from "@/components/sections/skills-flow"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SkillsFlow />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
