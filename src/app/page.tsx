import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { SiteHeader } from "@/components/sections/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
