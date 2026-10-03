import CardProject from "@/components/CardProject/CardProject"
import Reveal from "@/components/Reveal/Reveal"
import SectionHeading from "@/components/SectionHeading/SectionHeading"
import { projects } from "@/data/projects"
import { useLanguage } from "@/context/LanguageContext"

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative w-full py-28 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] max-w-4xl rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-14">
          <Reveal>
            <SectionHeading
              index="02"
              label={t.projects.label}
              title={t.projects.title}
              description={t.projects.description}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 120} className="h-full">
                <CardProject project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
