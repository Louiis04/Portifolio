import React, { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import type { Language } from "@/i18n/translations"
import { cn } from "@/lib/utils"

function Logo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Luís"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6ee7b7" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="34" height="34" rx="9" fill="white" fillOpacity="0.04" />
      <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="10" y="8" width="3.5" height="18" rx="1" fill="url(#logo-gradient)" />
      <rect x="10" y="22.5" width="14" height="3.5" rx="1" fill="url(#logo-gradient)" />
      <circle cx="25" cy="9" r="2" fill="#34d399" />
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

const sectionIds = ["about", "projects", "contact"] as const

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")

  // Fundo "glass" ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Destaca o link da seção visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    const home = document.getElementById("home")
    if (home) observer.observe(home)
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = sectionIds.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }))

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 md:px-4",
          scrolled || open
            ? "border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Início">
          <Logo />
          <span className="hidden font-mono text-sm font-medium text-zinc-200 sm:inline">
            luis<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "relative rounded-lg px-4 py-2 transition-colors duration-200",
                active === link.id ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-100"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-px h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent transition-opacity duration-300",
                  active === link.id ? "opacity-100" : "opacity-0"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 rounded-xl border border-white/10 bg-white/[0.03] p-1">
            {flags.map(({ lang, label, Flag }) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                aria-label={label}
                title={label}
                className={cn(
                  "flex items-center rounded-lg px-1.5 py-1 transition-all duration-200",
                  language === lang
                    ? "bg-white/10 opacity-100 shadow-sm"
                    : "opacity-40 hover:bg-white/5 hover:opacity-75"
                )}
              >
                <Flag />
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-xl bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300 lg:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-72 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        )}
      >
        <nav className="flex flex-col p-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-sm transition-colors",
                active === link.id ? "bg-white/5 text-zinc-50" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
