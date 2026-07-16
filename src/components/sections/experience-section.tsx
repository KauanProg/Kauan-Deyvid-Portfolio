import { Briefcase, CalendarBlank } from "@phosphor-icons/react"

type ExperienceItem = {
  period: string
  role: string
  company: string
  description: string
  side: "left" | "right"
  current?: boolean
}

const experienceItems: ExperienceItem[] = [
  {
    period: "Jan 2026 - Presente",
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer",
    description:
      "Criação de landing pages, sites institucionais e sistemas de gestão para pequenos negócios locais.",
    side: "left",
    current: true,
  },
  {
    period: "Ago 2025 - Dez 2025",
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Realize Software",
    description:
      "Evolução e manutenção de sistemas industriais, com foco em performance e integrações. Desenvolvimento de APIs REST e interfaces modernas com Next.js e stack Node.js.",
    side: "right",
  },
  {
    period: "Mar 2025 - Jul 2025",
    role: "Desenvolvedor Web",
    company: "Projetos Independentes",
    description:
      "Construcao de interfaces responsivas e paginas institucionais, conectando design, componentes reutilizaveis e boas praticas de acessibilidade.",
    side: "left",
  },
  {
    period: "2024 - 2025",
    role: "Desenvolvedor em Formacao",
    company: "Projetos Academicos",
    description:
      "Desenvolvimento de aplicacoes web, APIs e sistemas de gestao durante a formacao em Engenharia de Software.",
    side: "right",
  },
]

function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-[#020304] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#030506_0%,#010202_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(93,126,130,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(93,126,130,0.18)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="relative mx-auto w-full max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#009CC4]">
            Experiência
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.1rem,4vw,4.8rem)] font-black leading-[0.94] tracking-[-0.08em] text-white">
            Uma linha do tempo com entregas reais e ritmo de produto.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[1rem] leading-8 text-white/68 sm:text-[1.06rem] sm:leading-9">
            A composição segue a referência: eixo central, cartões escuros e
            leitura alternada para acompanhar a evolução profissional sem
            poluir a tela.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 lg:left-1/2 lg:-translate-x-px" />

          <div className="grid gap-8 lg:gap-10">
            {experienceItems.map((item) => (
              <article
                key={item.period}
                className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_92px_minmax(0,1fr)] lg:gap-0"
              >
                <div className="pointer-events-none absolute left-5 top-10 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#009CC4] bg-[#020304] shadow-[0_0_0_8px_rgba(0,156,196,0.08)] lg:static lg:col-start-2 lg:row-start-1 lg:mx-auto lg:mt-17 lg:translate-x-0" />

                <div
                  className={`relative pl-9 lg:pl-0 ${
                    item.side === "left"
                      ? "lg:col-start-1 lg:row-start-1 lg:justify-self-end"
                      : "lg:col-start-3 lg:row-start-1 lg:justify-self-start"
                  }`}
                >
                  <article
                    className={`relative max-w-[620px] rounded-none border border-white/8 bg-[#1b1b1d] px-6 py-6 shadow-none transition duration-300 hover:-translate-y-1 hover:border-[#009CC4]/35 hover:shadow-none motion-reduce:transition-none ${
                      item.side === "right" ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`pointer-events-none absolute top-12 z-10 h-0 w-0 -translate-y-1/2 border-y-[9px] border-y-transparent lg:top-19 ${
                        item.side === "left"
                          ? "-left-px border-r-11 border-r-[#1b1b1d] lg:right-[-11px] lg:left-auto lg:border-r-0 lg:border-l-11 lg:border-l-[#1b1b1d]"
                          : "-left-px border-r-11 border-r-[#1b1b1d] lg:left-[-11px]"
                      }`}
                    />

                    <p className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#7fe7ff]">
                      <CalendarBlank size={14} weight="bold" />
                      {item.period}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-[1.2rem] font-bold tracking-[-0.04em] text-white sm:text-[1.35rem]">
                        {item.role}
                      </h3>
                      <p className="mt-2 inline-flex items-center gap-2 text-[1rem] font-semibold text-[#7fe7ff]">
                        <Briefcase size={16} weight="fill" />
                        {item.company}
                      </p>
                    </div>

                    <p className="mt-5 max-w-[40ch] text-[0.96rem] leading-7 text-white/72 sm:text-[1rem] sm:leading-8">
                      {item.description}
                    </p>
                  </article>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
