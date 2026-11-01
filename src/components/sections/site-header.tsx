"use client"

import { useSyncExternalStore } from "react"
import { Clock, Mail, MapPin, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

import { LinkedInIcon } from "@/components/icons"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { profile } from "@/lib/data"

function subscribe(callback: () => void) {
  const id = setInterval(callback, 15_000)
  return () => clearInterval(id)
}

function useLocalTime(timeZone: string) {
  return useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone,
      }).format(new Date()),
    () => null
  )
}

const pill =
  "flex h-7 items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-2.5 text-xs text-neutral-300"

export function SiteHeader() {
  const time = useLocalTime(profile.timeZone)
  const { setTheme, theme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-md">
      <ScrollProgress className="top-auto bottom-0" />
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 md:px-6">
        <a href="#top" className="font-hand text-3xl tracking-tight text-white">
          {profile.name}
        </a>

        <div className="flex min-w-0 items-center gap-2">
          <div className={`${pill} w-28 overflow-hidden px-0`}>
            <span className="flex items-center justify-center gap-1.5 whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
              Open to work
            </span>
          </div>
          <div className={`${pill} hidden sm:flex`}>
            <Clock className="size-3.5" />
            <span className="tabular-nums">{time ?? "--:--"}</span>
          </div>
          <div className={`${pill} hidden md:flex`}>
            <MapPin className="size-3.5" />
            {profile.location}
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-5 text-sm text-neutral-400">
          <a
            href="#work"
            className="hidden transition-colors hover:font-bold hover:text-neutral-900 focus-visible:font-bold focus-visible:text-neutral-900 dark:hover:text-white dark:focus-visible:text-white sm:block"
          >
            Work
          </a>
          <a
            href="#about"
            className="hidden transition-colors hover:font-bold hover:text-neutral-900 focus-visible:font-bold focus-visible:text-neutral-900 dark:hover:text-white dark:focus-visible:text-white sm:block"
          >
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1KH8RBn2FJNOJA1zKxcwC5lZmJGgpfQqN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:font-bold hover:text-neutral-900 focus-visible:font-bold focus-visible:text-neutral-900 dark:hover:text-white dark:focus-visible:text-white"
          >
            Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-neutral-900 focus-visible:text-neutral-900 dark:hover:text-white dark:focus-visible:text-white"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href="mailto:anuragvh@gmail.com"
            aria-label="Email Anurag"
            className="transition-colors hover:text-neutral-900 focus-visible:text-neutral-900 dark:hover:text-white dark:focus-visible:text-white"
          >
            <Mail className="size-4" />
          </a>
          <button
            type="button"
            aria-label="Toggle light and dark theme"
            title="Toggle light and dark theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group flex size-8 cursor-pointer items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-neutral-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <SunMoon className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </nav>
      </div>
    </header>
  )
}
