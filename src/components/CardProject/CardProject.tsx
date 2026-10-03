import { ArrowUpRight, FolderGit2, Github } from "lucide-react"
import { Badge } from "@/components/Badge/Badge"
import type { Project } from "@/types/Project"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

interface CardProjectProps {
  project: Project
  index?: number
}

export default function CardProject({ project, index }: CardProjectProps) {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const showImage = project.image && !imageFailed

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/30 hover:shadow-[0_20px_60px_-20px_rgba(52,211,153,0.25)]">
      {/* Image area */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-zinc-900"
      >
        {showImage ? (
          isVisible && (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden">
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
            <div className="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <FolderGit2 size={36} className="relative text-emerald-300/80" strokeWidth={1.5} />
            <span className="relative max-w-[80%] truncate font-mono text-xs text-zinc-500">
              {project.link.replace("https://github.com/", "")}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

        {index !== undefined && (
          <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-zinc-950/70 px-2.5 py-1 font-mono text-xs text-zinc-300 backdrop-blur">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <h3 className="text-lg font-semibold leading-snug text-zinc-50 transition-colors duration-300 group-hover:text-emerald-200">
          {project.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {language === "en" ? project.descriptionEn : project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projects.viewOn} ${project.title}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-300"
          >
            <Github size={16} />
            {t.projects.viewCode}
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
            tabIndex={-1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-emerald-400/40 group-hover:bg-emerald-400 group-hover:text-zinc-950"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
