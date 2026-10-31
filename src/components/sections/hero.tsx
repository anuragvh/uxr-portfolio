import Image from "next/image"

import { profile } from "@/lib/data"

export function Hero() {
  const currentRole = profile.roles[0]

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-28 pb-12 md:px-6 md:pt-36">
      <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10">
        <div className="relative flex min-h-56 items-start justify-start rounded-2xl bg-black md:min-h-[240px]">
          <div className="relative size-[188px]">
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.fullName}`}
              width={188}
              height={188}
              unoptimized
              className="size-[188px] rounded-full object-cover"
            />
            <span
              aria-label="Open to work"
              className="absolute right-[18px] bottom-[22px] z-10 size-[22px] translate-x-1/4 translate-y-1/4 rounded-full border-8 border-black bg-emerald-400 md:right-[15.5px] md:size-11"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-hand text-5xl leading-[0.9] tracking-wide text-white md:text-6xl">
            {profile.fullName}
          </h1>
          <p className="mt-0.5 text-base text-neutral-500">UX Researcher</p>

          <p className="mt-6 text-sm leading-relaxed text-neutral-400 sm:text-base">
            <span className="lg:block">
              I&apos;m an HCI-trained UX researcher with hands-on experience in design and
              engineering.
            </span>{" "}
            <span className="lg:block">
              Based in {profile.location}, I help teams turn complex product questions into
              evidence-backed decisions 🔎
            </span>
          </p>

          <div className="mt-8">
            <p className="text-sm font-medium text-white">{currentRole.title}</p>
            <p className="mt-1 text-sm text-neutral-500">{currentRole.org}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
