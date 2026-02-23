import React from "react"
import { useLanguage } from "@/context/LanguageContext"
import type { Language } from "@/i18n/translations"

function Logo() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Luís"
    >
      <rect width="34" height="34" rx="8" fill="white" fillOpacity="0.06" />
      <rect width="34" height="34" rx="8" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="10" y="8" width="3.5" height="18" rx="1" fill="white" />
      <rect x="10" y="22.5" width="14" height="3.5" rx="1" fill="white" />
      <circle cx="25" cy="9" r="2" fill="white" fillOpacity="0.5" />
    </svg>
  )
}

function BRFlag() {
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" fill="#009C3B" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.4" fill="#002776" />
      <rect x="6.6" y="6.3" width="6.8" height="1.4" rx="0.7" fill="white" transform="rotate(-10 10 7)" />
    </svg>
  )
}

function USFlag() {
  const stripeH = 14 / 13
  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={i * stripeH} width="20" height={stripeH} fill="white" />
      ))}
      <rect width="8" height={stripeH * 7} fill="#3C3B6E" />
    </svg>
  )
}

const flags: { lang: Language; label: string; Flag: () => React.ReactElement }[] = [
  { lang: "pt", label: "Português (BR)", Flag: BRFlag },
  { lang: "en", label: "English (US)", Flag: USFlag },
]

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo />
        </a>
        <nav className="flex items-center gap-7 text-sm text-zinc-500">
          <a href="#about" className="hover:text-zinc-200 transition-colors duration-200">
            {t.nav.about}
          </a>
          <a href="#projects" className="hover:text-zinc-200 transition-colors duration-200">
            {t.nav.projects}
          </a>
          <a href="#contact" className="hover:text-zinc-200 transition-colors duration-200">
            {t.nav.contact}
          </a>

          <div className="flex items-center gap-1 border border-zinc-800 rounded-lg p-0.5 bg-zinc-900/60">
            {flags.map(({ lang, label, Flag }) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                aria-label={label}
                title={label}
                className={`rounded-md px-1.5 py-1 transition-all duration-200 flex items-center ${
                  language === lang
                    ? "opacity-100 bg-zinc-700 shadow-sm"
                    : "opacity-40 hover:opacity-75 hover:bg-zinc-800"
                }`}
              >
                <Flag />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
