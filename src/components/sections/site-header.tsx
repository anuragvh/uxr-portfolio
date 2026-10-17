"use client"

import { useSyncExternalStore } from "react"
import { Clock, MapPin } from "lucide-react"

import { LinkedInIcon } from "@/components/icons"
import { Marquee } from "@/components/ui/marquee"
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
  "flex h-7 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-2.5 text-xs text-neutral-300"

export function SiteHeader() {
  const time = useLocalTime(profile.timeZone)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <ScrollProgress className="top-auto bottom-0" />
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 md:px-6">
        <a href="#top" className="font-serif text-2xl tracking-tight text-white">
          {profile.name}
        </a>

        <div className="flex min-w-0 items-center gap-2">
          <div className={`${pill} w-28 overflow-hidden px-0`}>
            <Marquee className="p-0 [--duration:8s] [--gap:0.75rem]" repeat={3}>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                Open to work
              </span>
            </Marquee>
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
          <a href="#work" className="hidden transition-colors hover:text-white sm:block">
            Work
          </a>
          <a href="#about" className="hidden transition-colors hover:text-white sm:block">
            About
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
