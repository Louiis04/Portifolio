import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/Badge/Badge"
import type { Project } from "@/types/Project"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

interface CardProjectProps {
  project: Project
}

export default function CardProject({ project }: CardProjectProps) {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700">
      {/* Image area */}
      <div
        ref={containerRef}
        className="aspect-video w-full overflow-hidden bg-zinc-800/60 flex items-center justify-center"
      >
        {project.image ? (
          <img
            src={isVisible ? project.image : ""}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-xs text-zinc-600 select-none">
            {t.projects.noImage}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-zinc-100 leading-snug">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.projects.viewOn} ${project.title}`}
            className="shrink-0 text-zinc-600 hover:text-zinc-300 transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
          {language === "en" ? project.descriptionEn : project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
