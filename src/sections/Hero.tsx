import { Button } from "@/components/Button/Button"
import { Badge } from "@/components/Badge/Badge"

const stack = ["Node.js", "PHP", "Laravel", "PostgreSQL", "Docker", "Kubernetes", "React"]

export default function Hero() {
  return (
    <section className="w-full py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Backend Developer</Badge>
            <span className="text-xs text-zinc-700">disponível para oportunidades</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl leading-tight">
              Olá, eu sou o Luís
            </h1>
            <p className="text-lg text-zinc-500 font-normal">
              Construo sistemas backend eficientes e escaláveis.
            </p>
          </div>

          <p className="max-w-lg text-sm text-zinc-500 leading-relaxed">
            Fissurado em desenvolver APIs, microsserviços e sistemas de alta performance.
            Trabalho com PHP, Laravel, Node.js, Docker e muito mais.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <a href="#projects">Ver projetos</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contato</a>
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
