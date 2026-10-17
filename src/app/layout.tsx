import type { Metadata } from "next"
import { Cactus_Classical_Serif, Inter, Just_Another_Hand } from "next/font/google"

import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const serif = Cactus_Classical_Serif({
  variable: "--font-cactus",
  weight: "400",
  subsets: ["latin"],
})
const hand = Just_Another_Hand({
  variable: "--font-just-hand",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Anurag Harishchandrakar's UX Portfolio",
  description:
    "UX Designer, Researcher & Engineer with 6 years of experience across UX Research & Design and UI Development.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${serif.variable} ${hand.variable} scroll-smooth antialiased`}
    >
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
