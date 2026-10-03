import { Boxes, Container, Database, Monitor, Network, Server, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Reveal from "@/components/Reveal/Reveal"
import SectionHeading from "@/components/SectionHeading/SectionHeading"
import { useLanguage } from "@/context/LanguageContext"
import { projects } from "@/data/projects"

const skillGroups: { key: "Backend" | "Banco de Dados" | "Infra & DevOps" | "Frontend"; Icon: LucideIcon; items: string[] }[] = [
  { key: "Backend", Icon: Server, items: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "JavaScript", "TypeScript", "Nest.js"] },
  { key: "Banco de Dados", Icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { key: "Infra & DevOps", Icon: Container, items: ["Docker", "Kubernetes", "CI/CD", "Linux"] },
  { key: "Frontend", Icon: Monitor, items: ["React", "TypeScript", "TailwindCSS", "Next.js", "Svelte"] },
]

const services: { key: "apis" | "microservices" | "containers" | "queues"; Icon: LucideIcon }[] = [
  { key: "apis", Icon: Network },
  { key: "microservices", Icon: Boxes },
  { key: "containers", Icon: Container },
  { key: "queues", Icon: Workflow },
]

const totalTechs = new Set(skillGroups.flatMap((g) => g.items)).size

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { value: `${projects.length}+`, label: t.about.stats.projects },
    { value: `${totalTechs}+`, label: t.about.stats.technologies },
    { value: "IFPE", label: t.about.stats.student },
  ]

  return (
    <section id="about" className="relative w-full py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-14">
          <Reveal>
            <SectionHeading index="01" label={t.about.label} title={t.about.title} />
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-5">
            {/* Bio */}
            <Reveal className="lg:col-span-3">
              <div className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-10">
                <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-400 md:text-[17px]">
                  <p>
                    {t.about.bio1.split(t.about.bio1Highlight).map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <span className="font-semibold text-emerald-300">{t.about.bio1Highlight}</span>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                  <p>{t.about.bio2}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="bg-linear-to-br from-zinc-50 to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                        {stat.value}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-zinc-500">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* O que eu faço */}
            <Reveal delay={100} className="lg:col-span-2">
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{t.about.whatIDo}</span>
                <ul className="flex flex-col gap-5">
                  {services.map(({ key, Icon }) => (
                    <li key={key} className="group flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={18} />
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-zinc-100">{t.about.services[key].title}</span>
                        <span className="text-sm text-zinc-400">{t.about.services[key].description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Stack */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{t.about.stackTitle}</span>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map(({ key, Icon, items }, i) => (
                <Reveal key={key} delay={i * 80} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition-colors group-hover:text-emerald-300">
                          <Icon size={17} />
                        </span>
                        <span className="font-semibold text-zinc-100">{t.about.skillCategories[key]}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
