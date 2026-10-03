import { ArrowUp, ArrowUpRight, Mail } from "lucide-react"
import { Button } from "@/components/Button/Button"
import Reveal from "@/components/Reveal/Reveal"
import SectionHeading from "@/components/SectionHeading/SectionHeading"
import { useLanguage } from "@/context/LanguageContext"
import { EMAIL, socials } from "@/data/socials"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <section id="contact" className="relative w-full py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/40 px-6 py-16 md:px-16 md:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
                <div className="absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
              </div>

              <div className="flex flex-col items-center gap-10">
                <SectionHeading
                  index="03"
                  label={t.contact.label}
                  title={t.contact.title}
                  description={t.contact.description}
                  align="center"
                />

                <Button size="lg" asChild>
                  <a href={`mailto:${EMAIL}`}>
                    <Mail size={16} />
                    {t.contact.emailMe}
                  </a>
                </Button>

                <div className="grid w-full max-w-4xl gap-4 md:grid-cols-3">
                  {socials.map(({ label, value, href, Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-zinc-950/80"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-zinc-300 transition-colors group-hover:bg-emerald-400/10 group-hover:text-emerald-300">
                        <Icon size={19} />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <span className="text-xs text-zinc-500">{label}</span>
                        <span className="truncate text-sm font-medium text-zinc-200">{value}</span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Luís Eduardo. {t.contact.rights}
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-emerald-300"
          >
            {t.contact.backToTop}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:-translate-y-0.5 group-hover:border-emerald-400/40">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </footer>
    </>
  )
}
