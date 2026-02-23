import { Button } from "@/components/Button/Button"
import { Badge } from "@/components/Badge/Badge"
import { useLanguage } from "@/context/LanguageContext"

const stack = ["Node.js", "PHP", "Laravel", "PostgreSQL", "Docker", "Kubernetes", "React"]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Backend Developer</Badge>
            <span className="text-xs text-zinc-700">{t.hero.available}</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl leading-tight">
              {t.hero.greeting}
            </h1>
            <p className="text-lg text-zinc-500 font-normal">
              {t.hero.subtitle}
            </p>
          </div>

          <p className="max-w-lg text-sm text-zinc-500 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <a href="#projects">{t.hero.viewProjects}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">{t.hero.contact}</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
            {stack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                <span className="text-xs text-zinc-700">{tech}</span>
                {i < stack.length - 1 && (
                  <span className="text-zinc-800 text-xs">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
