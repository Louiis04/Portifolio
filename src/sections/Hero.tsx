import { ArrowRight } from "lucide-react"
import { Button } from "@/components/Button/Button"
import Reveal from "@/components/Reveal/Reveal"
import { useLanguage } from "@/context/LanguageContext"
import { socials } from "@/data/socials"

const stack = [
  "Node.js", "PHP", "Laravel", "TypeScript", "Nest.js", "Express", "PostgreSQL",
  "MySQL", "MongoDB", "Docker", "Kubernetes", "CI/CD", "Linux", "React", "Next.js",
]

type Token = { text: string; className?: string }

const kw = "text-fuchsia-400"
const prop = "text-sky-300"
const str = "text-emerald-300"
const punc = "text-zinc-500"
const fn = "text-amber-300"

const codeLines: Token[][] = [
  [{ text: "const ", className: kw }, { text: "luis", className: "text-zinc-100" }, { text: " = {", className: punc }],
  [{ text: "  role", className: prop }, { text: ": ", className: punc }, { text: '"Backend Developer"', className: str }, { text: ",", className: punc }],
  [{ text: "  focus", className: prop }, { text: ": ", className: punc }, { text: '"Backend + DevOps"', className: str }, { text: ",", className: punc }],
  [{ text: "  studying", className: prop }, { text: ": ", className: punc }, { text: '"IFPE"', className: str }, { text: ",", className: punc }],
  [
    { text: "  stack", className: prop }, { text: ": [", className: punc },
    { text: '"PHP"', className: str }, { text: ", ", className: punc },
    { text: '"Laravel"', className: str }, { text: ", ", className: punc },
    { text: '"Node.js"', className: str }, { text: "],", className: punc },
  ],
  [
    { text: "  infra", className: prop }, { text: ": [", className: punc },
    { text: '"Docker"', className: str }, { text: ", ", className: punc },
    { text: '"Kubernetes"', className: str }, { text: "],", className: punc },
  ],
  [{ text: "}", className: punc }],
  [],
  [{ text: "await ", className: kw }, { text: "luis", className: "text-zinc-100" }, { text: ".", className: punc }, { text: "build", className: fn }, { text: "(", className: punc }, { text: '"scalable-apis"', className: str }, { text: ")", className: punc }],
]

function TerminalCard() {
  return (
    <div className="relative">
      {/* brilho atrás do card */}
      <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-zinc-500">~/luis/index.ts</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className="flex animate-line-in"
              style={{ animationDelay: `${400 + i * 110}ms` }}
            >
              <span className="mr-5 w-4 shrink-0 select-none text-right text-zinc-700">{i + 1}</span>
              <code>
                {line.map((token, j) => (
                  <span key={j} className={token.className}>{token.text}</span>
                ))}
                {i === codeLines.length - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-emerald-400" />
                )}
              </code>
            </div>
          ))}
        </pre>

        <div className="flex items-center justify-between border-t border-white/5 bg-black/20 px-5 py-3 font-mono text-xs">
          <span className="text-zinc-500">
            <span className="text-emerald-400">GET</span> /api/luis
          </span>
          <span className="flex items-center gap-2 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            200 OK · 12ms
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative isolate overflow-hidden pt-36 md:pt-44">
      {/* Fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-16 px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="flex min-w-0 flex-col gap-7">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.hero.available}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
              {t.hero.greetingPrefix}{" "}
              <span className="bg-linear-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Luís
              </span>
            </h1>
            <p className="mt-4 font-mono text-base text-zinc-400 sm:text-lg">
              <span className="text-emerald-400">&gt;</span> {t.hero.role}
              <span className="ml-1 inline-block h-5 w-2.5 translate-y-1 animate-blink bg-zinc-400" />
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-xl font-medium text-zinc-200">{t.hero.subtitle}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400">{t.hero.description}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button size="lg" asChild>
                <a href="#projects">
                  {t.hero.viewProjects}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">{t.hero.contact}</a>
              </Button>

              <div className="ml-1 flex items-center gap-1">
                {socials.map(({ label, href, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 hover:text-emerald-300"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="animate-float">
            <TerminalCard />
          </div>
        </Reveal>
      </div>

      {/* Marquee da stack */}
      <div className="relative mt-24 border-y border-white/5 bg-white/[0.015] py-5 md:mt-32">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-zinc-950 to-transparent" />
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center">
            {[...stack, ...stack].map((tech, i) => (
              <span key={i} className="flex items-center font-mono text-sm text-zinc-500">
                <span className="px-6 transition-colors hover:text-zinc-200">{tech}</span>
                <span className="text-emerald-500/50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
