import { Github, Mail, Linkedin } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="w-full py-24 border-t border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
              {t.contact.label}
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100">{t.contact.title}</h2>
            <p className="text-sm text-zinc-500 max-w-md leading-relaxed mt-1">
              {t.contact.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:seu@email.com"
              className="group flex items-center gap-3 w-fit text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              <Mail
                size={15}
                className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
              />
              luisemoliveira1000@email.com
            </a>

            <a
              href="https://github.com/Louiis04"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-fit text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              <Github
                size={15}
                className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
              />
              Louiis04
            </a>

            <a
              href="https://www.linkedin.com/in/lu%C3%ADs-eduardo-magalh%C3%A3es-oliveira-1ba715274/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-fit text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              <Linkedin
                size={15}
                className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
              />
              Luís Eduardo
            </a>
          </div>

          <p className="text-xs text-zinc-800 pt-4">
            © {new Date().getFullYear()} Luís. {t.contact.rights}
          </p>
        </div>
      </div>
    </section>
  )
}
