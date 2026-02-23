import CardProject from "@/components/CardProject/CardProject"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
              Projetos
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100">O que já desenvolvi</h2>
          </div>

          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <CardProject key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
