import { useLanguage } from "@/context/LanguageContext"

const skillGroups = [
  { key: "Backend" as const, items: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "JavaScript", "TypeScript", "Nest.js"] },
  { key: "Banco de Dados" as const, items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { key: "Infra & DevOps" as const, items: ["Docker", "Kubernetes", "CI/CD", "Linux"] },
  { key: "Frontend" as const, items: ["React", "TypeScript", "TailwindCSS", "Next.js", "Svelte"] },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
              {t.about.label}
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100">{t.about.title}</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Bio */}
            <div className="flex flex-col gap-4 text-sm text-zinc-500 leading-relaxed">
              <p>
                {t.about.bio1.split(t.about.bio1Highlight).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<span className="text-zinc-300 font-medium">{t.about.bio1Highlight}</span></span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <p>{t.about.bio2}</p>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-6">
              {skillGroups.map((group) => (
                <div key={group.key} className="flex flex-col gap-2">
                  <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
                    {t.about.skillCategories[group.key]}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
