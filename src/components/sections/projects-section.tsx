import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react"

type ProjectCard = {
  title: string
  description: string
  tags: string[]
  tone: "dark" | "light" | "blue" | "sand"
  repoUrl: string
}

const projects: ProjectCard[] = [
  {
    title: "Landing Pages",
    description:
      "Landing pages com foco em clareza, conversao e identidade visual consistente para apresentar produtos e servicos.",
    tags: ["React", "Tailwind", "UI"],
    tone: "dark",
    repoUrl: "#",
  },
  {
    title: "Sistemas Web",
    description:
      "Interfaces de operacao e gestao pensadas para fluxo simples, navegacao clara e manutencao mais facil.",
    tags: ["React", "APIs", "Fluxo"],
    tone: "light",
    repoUrl: "#",
  },
  {
    title: "Dashboards",
    description:
      "Paineis com leitura rapida de dados, hierarquia visual definida e componentes prontos para crescimento.",
    tags: ["Charts", "Data", "Insights"],
    tone: "blue",
    repoUrl: "#",
  },
  {
    title: "APIs REST",
    description:
      "Backends organizados para autenticacao, integracao e evolucao tecnica sem perder previsibilidade.",
    tags: ["Node.js", "REST", "Auth"],
    tone: "sand",
    repoUrl: "#",
  },
]

function ProjectsSection() {
  return (
    <section id="projetos" className="bg-white text-[#061451]">
      <div className="mx-auto w-full max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto grid max-w-[1320px] justify-items-center gap-10 lg:gap-14 xl:gap-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex h-7 items-center bg-[#f1f5f9] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
              Projetos
            </p>
            <h2 className="mx-auto mt-4 max-w-5xl text-[clamp(2.15rem,3.2vw,4.1rem)] font-black leading-[0.96] tracking-[-0.08em] text-black">
              Projetos que mostram como eu penso e construo
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem] sm:leading-9">
              Esta secao reune alguns trabalhos com foco em interface, estrutura
              e experiencia. A ideia e mostrar entregas reais com uma leitura
              visual clara, sem poluicao e alinhada a identidade do portfolio.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[1320px] gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden border border-[#d7deea] bg-white transition hover:-translate-y-1 hover:border-[#a8bdd3] hover:shadow-[0_18px_36px_rgba(6,20,81,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectPreview tone={project.tone} />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,81,0)_30%,rgba(6,20,81,0.22)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(6,20,81,0.12)_0%,rgba(6,20,81,0.55)_100%)]" />
                  <div className="absolute inset-0 bg-[#061451]/0 transition duration-300 group-hover:bg-[#061451]/35" />

                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#061451] text-white shadow-[0_10px_20px_rgba(6,20,81,0.18)]">
                      <ArrowSquareOut size={19} weight="bold" />
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#061451] shadow-[0_10px_20px_rgba(6,20,81,0.12)]">
                      <GithubLogo size={19} weight="fill" />
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="mt-3 text-[1.18rem] font-bold tracking-[-0.04em] text-black sm:text-[1.3rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[#334155]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#d7deea] px-3 py-1 text-[0.78rem] text-[#009CC4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repoUrl}
                    className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 border border-[#061451] px-4 text-[0.9rem] font-semibold text-[#061451] transition hover:bg-[#061451] hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver projeto
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectPreview({ tone }: { tone: ProjectCard["tone"] }) {
  const tones = {
    dark: {
      bg: "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_35%),linear-gradient(135deg,#061451_0%,#020617_100%)]",
      accent: "bg-[#009CC4]",
      panel: "bg-white/10 border-white/10",
    },
    light: {
      bg: "bg-[linear-gradient(180deg,#f8fbff_0%,#edf3fb_100%)]",
      accent: "bg-[#061451]",
      panel: "bg-white border-[#d7deea]",
    },
    blue: {
      bg: "bg-[radial-gradient(circle_at_70%_20%,rgba(124,236,255,0.48)_0%,rgba(124,236,255,0)_26%),linear-gradient(135deg,#dfeeff_0%,#f8fbff_100%)]",
      accent: "bg-[#009CC4]",
      panel: "bg-white border-[#d7deea]",
    },
    sand: {
      bg: "bg-[linear-gradient(180deg,#f4efe8_0%,#ebe4dc_100%)]",
      accent: "bg-[#061451]",
      panel: "bg-white border-[#d7deea]",
    },
  }[tone]

  return (
    <div className={`absolute inset-0 ${tones.bg}`}>
      <div className="absolute inset-x-0 top-0 h-8 border-b border-black/5 bg-white/60" />
      <div className="absolute left-5 top-[3.25rem] right-5 h-1 rounded-full bg-black/10" />
      <div className="absolute left-5 top-[5rem] right-28 h-4 rounded-full bg-black/10" />
      <div className="absolute left-5 top-[7.5rem] right-12 h-4 rounded-full bg-black/10" />

      <div
        className={`absolute left-5 top-[9rem] h-[58%] w-[58%] border ${tones.panel}`}
      >
        <div className="flex h-full flex-col p-4">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${tones.accent}`} />
            <span className="h-2.5 w-16 rounded-full bg-black/10" />
          </div>
          <div className="mt-4 grid flex-1 grid-rows-[1fr_auto] gap-3">
            <div className="rounded-none border border-dashed border-black/10 bg-white/55" />
            <div className="flex gap-2">
              <span className="h-8 flex-1 rounded-full bg-black/10" />
              <span className="h-8 w-12 rounded-full bg-black/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-24 h-[56%] w-[28%] rounded-none border border-black/10 bg-white/72" />

      <div className="absolute bottom-5 left-5 right-5 flex gap-3">
        <span className="h-9 flex-1 rounded-full bg-black/10" />
        <span className={`h-9 w-28 rounded-full ${tones.accent} opacity-85`} />
      </div>
    </div>
  )
}

export default ProjectsSection
