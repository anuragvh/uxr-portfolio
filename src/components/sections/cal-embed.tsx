"use client"

import { useEffect } from "react"
import Script from "next/script"
import { useTheme } from "next-themes"

export function CalEmbed() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return

    const iframe = document.querySelector<HTMLIFrameElement>("#cal-inline iframe")
    if (!iframe?.src) return

    const frameUrl = new URL(iframe.src)
    if (
      frameUrl.searchParams.get("theme") === resolvedTheme &&
      frameUrl.searchParams.get("ui.color-scheme") === resolvedTheme
    ) {
      return
    }

    frameUrl.searchParams.set("theme", resolvedTheme)
    frameUrl.searchParams.set("ui.color-scheme", resolvedTheme)
    iframe.src = frameUrl.toString()
  }, [resolvedTheme])

  return (
    <>
      <div id="cal-inline" className="cal-embed-frame w-full" />
      <Script
        id="cal-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  let script = d.createElement("script");
                  script.src = A;
                  script.async = true;
                  d.head.appendChild(script);
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else {
                    p(cal, ar);
                  }
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
            Cal("init", { origin: "https://app.cal.com" });
            Cal("inline", {
              elementOrSelector: "#cal-inline",
              calLink: "anuragvh/30min",
              config: { layout: "month_view", theme }
            });
            Cal("ui", { theme, layout: "month_view" });
          `,
        }}
      />
    </>
  )
}
