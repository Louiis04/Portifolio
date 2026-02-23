export default function About() {
  const skills = [
    { category: "Backend", items: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "JavaScript", "TypeScript", "Nest.js"] },
    { category: "Banco de Dados", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Infra & DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Linux"] },
    { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Next.js", "Svelte"] },
  ]

  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
              Sobre
            </span>
            <h2 className="text-2xl font-semibold text-zinc-100">Quem sou eu</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Bio */}
            <div className="flex flex-col gap-4 text-sm text-zinc-500 leading-relaxed">
              <p>
                Sou um desenvolvedor Backend, no qual busco cada vez mais me aprofundar nos conceitos de Backend + DevOps, gosto bastante de estruturar códigos em que tragam uma boa perfomance ao produto. Atualmente estudante no{" "}
                <span className="text-zinc-300 font-medium">IFPE</span>, onde
                desenvolvo soluções reais para problemas reais.
              </p>
              <p>
                Tenho experiência com arquitetura de microsserviços, filas de mensagens,
                containerização com Docker e orquestração com Kubernetes, sempre
                buscando escrever código limpo e escalável.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-6">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col gap-2">
                  <span className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
                    {group.category}
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
