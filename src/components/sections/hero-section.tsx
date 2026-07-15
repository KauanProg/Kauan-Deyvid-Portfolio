import {
  Briefcase,
  ArrowSquareOut,
  FolderSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
  Stack,
} from "@phosphor-icons/react";
import { useState, type ElementType } from "react";

const navItems = ["Início", "Sobre", "Serviços", "Projetos", "Tecnologias", "Experiência"];
const navAnchors: Record<string, string> = {
  Início: "#inicio",
  Sobre: "#sobre",
  Serviços: "#servicos",
  Projetos: "#projetos",
  Tecnologias: "#tecnologias",
  Experiência: "#experiencia",
};
const selectedNavItem = "Início";
const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: InstagramLogo,
    containerClass:
      "bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_45%,#8134af_100%)]",
    iconClass: "text-white",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedinLogo,
    containerClass: "bg-[#0A66C2]",
    iconClass: "text-white",
  },
  {
    label: "Gmail",
    href: "#",
    icon: EnvelopeSimple,
    containerClass: "bg-white border border-[#d9e2ef]",
    iconClass: "text-[#EA4335]",
  },
];

const metrics = [
  {
    icon: FolderSimple,
    label: "Projetos",
    value: "12",
    detail: "entregas recentes",
  },
  { icon: Stack, label: "Tecnologias", value: "8+", detail: "stack principal" },
  {
    icon: Briefcase,
    label: "Experiência",
    value: "2+ anos",
    detail: "em produto digital",
  },
  { icon: GithubLogo, label: "GitHub", value: "156", detail: "contribuições" },
];

const heatmapWeekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const heatmapMonths = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const heatmapLevelColors = [
  "#edf3ff",
  "#d7e4ff",
  "#a8c5ff",
  "#6b93ef",
  "#2f63d5",
];
const recentProjects = [
  {
    title: "Portfolio v2",
    description:
      "Nova estrutura com foco em identidade visual, performance e leitura clara.",
    tags: ["React", "Tailwind"],
    repoUrl: "#",
  },
  {
    title: "API de autenticação",
    description:
      "Serviço REST com login, validação e organização da camada de domínio.",
    tags: ["Node.js", "JWT"],
    repoUrl: "#",
  },
  {
    title: "Dashboard financeiro",
    description:
      "Painel com métricas, filtros e visualização rápida de dados importantes.",
    tags: ["Charts", "UI"],
    repoUrl: "#",
  },
];
const calendarYear = new Date().getFullYear();
const currentYear = new Date().getFullYear();

const HeroSection = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const selectedCalendar = buildMonthCalendar(calendarYear, selectedMonth);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#061451] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,156,196,0.18),transparent_38%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.05),transparent_24%),linear-gradient(180deg,#061451_0%,#041033_52%,#020617_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 h-[740px] w-[min(1160px,92vw)] -translate-x-1/2 opacity-34 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[58px_58px,58px_58px] bg-center mask-[radial-gradient(circle_at_center,rgba(0,0,0,0.98)_0,rgba(0,0,0,0.96)_54%,rgba(0,0,0,0.36)_79%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-14 h-[700px] w-[min(980px,84vw)] -translate-x-1/2 opacity-82 bg-[radial-gradient(circle_at_center,rgba(0,156,196,0.32)_0,rgba(0,156,196,0.18)_12%,rgba(0,156,196,0)_32%),radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.05)_16%,rgba(255,255,255,0)_38%)] mask-[radial-gradient(circle_at_center,rgba(0,0,0,0.98)_0,rgba(0,0,0,0.94)_48%,rgba(0,0,0,0.56)_74%,transparent_100%)]"
      />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-120 w-232 -translate-x-1/2 rounded-full bg-[#009CC4]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-104 w-104 rounded-full bg-white/5 blur-3xl" />

      <header className="relative z-20 w-full">
        <div className="mx-auto w-full max-w-[1600px] px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
          <div className="flex h-[76px] items-center justify-between gap-4 bg-transparent px-4 sm:px-6">
            <a href="#inicio" className="flex items-center gap-4">
              <LogoMark />
              <span className="text-[1.3rem] font-extrabold tracking-tighter text-white sm:text-[1.7rem]">
                KAUAN <span className="text-[#009CC4]">DEV</span>
              </span>
            </a>

            <nav className="hidden items-center rounded-full border border-white/10 bg-white/6 px-1 py-1 text-[0.98rem] font-medium text-white/75 backdrop-blur-xl xl:flex">
              <div className="flex items-center gap-10">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={navAnchors[item] ?? `#${item.toLowerCase()}`}
                    className={`rounded-full px-4 py-2 transition hover:text-white ${
                      item === selectedNavItem
                        ? "border border-white/16 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur-xl"
                        : "text-white/75"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contato"
                className="hidden h-12 items-center justify-center rounded-4xl bg-white px-6 text-[0.95rem] font-semibold text-[#061451] transition hover:-translate-y-px md:inline-flex"
              >
                Contato
              </a>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-[#009CC4] text-white transition hover:bg-[#0082a6] xl:hidden"
                aria-label="Abrir menu"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="h-0.5 w-5 bg-white" />
                  <span className="h-0.5 w-5 bg-white" />
                  <span className="h-0.5 w-5 bg-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isDrawerOpen ? (
        <div className="fixed inset-0 z-30 xl:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-black/55"
            onClick={() => setIsDrawerOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[min(84vw,340px)] border-l border-white/10 bg-[#061451] p-5 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[1rem] font-bold tracking-[-0.04em]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#009CC4] text-lg font-medium text-white transition hover:bg-[#0082a6]"
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={navAnchors[item] ?? `#${item.toLowerCase()}`}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`rounded-xl px-2 py-2 text-[1rem] font-medium transition hover:bg-white/8 hover:text-white ${
                    item === "Início"
                      ? "border border-white/16 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur-xl"
                      : "text-white/82"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <a
              href="#contato"
              onClick={() => setIsDrawerOpen(false)}
              className="mt-6 inline-flex h-12 w-full items-center justify-center bg-[#061451] px-4 text-[0.98rem] font-semibold text-white transition hover:bg-[#0082a6]"
            >
              Contato
            </a>
          </aside>
        </div>
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <section
          id="inicio"
          className="mx-auto flex max-w-[1160px] flex-col items-center py-8 text-center sm:py-10 lg:py-14"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 px-1 py-1 text-[0.76rem] font-medium text-white/78 backdrop-blur-xl sm:text-[0.8rem]">
            <span className="inline-flex shrink-0 items-center rounded-full bg-[#061451] px-2.5 py-1 font-semibold text-white">
              Ideia ao produto
            </span>

            <span className="truncate pr-1">Soluções claras ✨</span>
          </div>

          <h1 className="mt-8 text-balance text-[2.4rem] font-extrabold leading-[0.98] tracking-[-0.07em] text-white sm:mt-10 sm:text-[4.3rem] lg:text-[5.7rem]">
            <span className="block">Desenvolvedor Full-Stack</span>
          </h1>

          <p className="mt-6 max-w-[820px] text-[0.98rem] leading-7 text-slate-400 sm:mt-8 sm:text-[1.12rem] sm:leading-8">
            Construo soluções web completas, unindo interfaces, sistemas, dados
            e boas práticas de engenharia para transformar ideias em produtos
            digitais funcionais, escaláveis e bem estruturados.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex h-12 w-full items-center justify-center border border-[#009CC4] bg-[#009CC4] px-8 text-[1rem] font-semibold text-white transition hover:-translate-y-px hover:bg-[#0082a6] sm:min-w-[220px]"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex h-12 w-full items-center justify-center bg-white px-8 text-[1rem] font-semibold text-black transition hover:-translate-y-px hover:bg-[#e6f7fb] sm:min-w-[220px]"
            >
              Baixar Currículo
            </a>
          </div>
        </section>

        <section
          id="sobre"
          className="mx-auto w-full max-w-[1320px]"
          aria-label="Visão geral do portfólio"
        >
          <div className="h-1.5 w-full bg-linear-to-r from-transparent via-[#009CC4] to-transparent" />
          <div className="border border-[#d7deea] bg-white">
            <div className="border-b border-[#d7e1f0] bg-white px-4 py-5 sm:px-7 sm:py-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#c7d3e9] bg-[#061451] shadow-sm sm:h-14 sm:w-14">
                      <div className="grid h-full w-full place-items-center text-[1.05rem] font-bold text-white">
                        KD
                      </div>

                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 translate-x-1/2 translate-y-1/2 rounded-full border-2 border-white bg-[#009CC4]" />
                    </div>

                    <div>
                      <h2 className="text-[1.2rem] font-bold tracking-[-0.04em] text-[#061451] sm:text-[1.85rem]">
                        Olá, eu sou Kauan 👋
                      </h2>

                      <p className="mt-1 max-w-3xl text-[0.92rem] leading-6 text-[#334155] sm:text-[1.02rem] sm:leading-7">
                        Desenvolvedor Full Stack apaixonado por performance,
                        acessibilidade e escalabilidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 p-2 sm:gap-4">
                    {socialLinks.map(
                      ({
                        label,
                        href,
                        icon: Icon,
                        containerClass,
                        iconClass,
                      }) => (
                        <a
                          key={label}
                          href={href}
                          className={`inline-flex h-10 w-10 items-center justify-center transition hover:-translate-y-px ${containerClass}`}
                          aria-label={label}
                        >
                          <Icon size={20} weight="fill" className={iconClass} />
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              id="tecnologias"
              className="grid gap-5 px-4 py-6 sm:grid-cols-2 xl:grid-cols-4 sm:px-7 sm:py-7"
            >
              {metrics.map(({ icon: Icon, label, value, detail }) => (
                <MetricCard
                  key={label}
                  icon={Icon}
                  label={label}
                  value={value}
                  detail={detail}
                />
              ))}
            </div>

            <div
              id="experiencia"
              className="grid gap-6 border-t border-[#e0e7f3] px-4 py-6 lg:grid-cols-[0.94fr_1.06fr] sm:px-7 sm:py-8"
            >
              <section className="border border-[#d7deea] bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-[1rem] font-bold text-black sm:text-[1.05rem]">
                    Atividade no GitHub
                  </h3>

                  <label className="flex items-center gap-2 text-[0.85rem] font-medium text-black/65">
                    <select
                      value={selectedMonth}
                      onChange={(event) =>
                        setSelectedMonth(Number(event.target.value))
                      }
                      className="h-9 border border-[#d7deea] bg-white px-3 text-[0.85rem] text-black outline-none transition focus:border-[#009CC4]"
                      aria-label="Selecionar mês"
                    >
                      {heatmapMonths.map((month, index) => (
                        <option key={month} value={index}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-5 overflow-hidden">
                  <div className="min-w-0">
                    <div className="overflow-x-auto pb-1">
                      <div className="w-full min-w-[320px] sm:min-w-[420px]">
                        <div className="grid w-full grid-cols-7 gap-1 pb-3 text-center text-[0.68rem] text-black/55 sm:text-[0.72rem]">
                          {heatmapWeekdays.map((day) => (
                            <span key={day}>{day}</span>
                          ))}
                        </div>

                        <div className="grid w-full gap-1">
                          {selectedCalendar.weeks.map((week, weekIndex) => (
                            <div
                              key={weekIndex}
                              className="grid w-full grid-cols-7 gap-1"
                            >
                              {week.map((day, dayIndex) =>
                                day ? (
                                  <span
                                    key={`${weekIndex}-${dayIndex}`}
                                    className="aspect-square w-full border border-white"
                                    style={{
                                      backgroundColor:
                                        heatmapLevelColors[day.level],
                                    }}
                                    title={`${heatmapMonths[selectedMonth]} ${day.number}, ${calendarYear}`}
                                  />
                                ) : (
                                  <span
                                    key={`${weekIndex}-${dayIndex}`}
                                    className="aspect-square w-full border border-transparent bg-transparent"
                                  />
                                ),
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-2 text-[0.8rem] text-black/65">
                      <span>Menos</span>
                      <div className="flex items-center gap-1">
                        {heatmapLevelColors.map((color, index) => (
                          <span
                            key={index}
                            className="h-2.5 w-2.5 border border-white"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span>Mais</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-[#edf2f7] pt-4 text-[0.9rem] text-black sm:text-[0.95rem]">
                  <GithubLogo size={20} weight="fill" className="text-black" />
                  <span>156 contribuições em {currentYear}</span>
                </div>
              </section>

              <section className="border border-[#d7deea] bg-white p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4 border-b border-[#edf2f7] pb-4">
                  <h3 className="text-[1rem] font-bold tracking-[-0.04em] text-black sm:text-[1.05rem]">
                    Principais projetos
                  </h3>
                </div>

                <div className="mt-4 grid gap-4">
                  {recentProjects.map((project) => (
                    <article
                      key={project.title}
                      className="group border border-[#d7deea] bg-white p-4 transition duration-300 hover:-translate-y-px hover:border-[#a8bdd3] hover:shadow-[0_16px_30px_rgba(6,20,81,0.06)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-[1.05rem] font-bold tracking-[-0.04em] text-black">
                          {project.title}
                        </h4>

                        <a
                          href={project.repoUrl}
                          className="grid h-10 w-10 shrink-0 place-items-center border border-[#061451] text-[#061451] transition hover:bg-[#061451] hover:text-white"
                          aria-label={`Abrir repositório de ${project.title}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowSquareOut size={16} weight="bold" />
                        </a>

                      </div>

                      <p className="mt-3 max-w-none text-[0.92rem] leading-7 text-[#334155]">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[#d7deea] bg-[#f8fbff] px-3 py-1 text-[0.76rem] text-[#009CC4]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

            </div>

            <span id="contato" className="sr-only">
              Contato
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: ElementType;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="flex min-h-[112px] items-center gap-4 border border-[#d7deea] bg-white px-5 py-4 transition hover:border-[#a8b8dc]">
      <div className="grid h-11 w-11 place-items-center bg-[#061451] text-white">
        <Icon size={20} weight="fill" />
      </div>
      <div>
        <p className="text-[0.92rem] font-medium text-black/75">{label}</p>
        <p className="mt-1 text-[1.9rem] font-bold tracking-[-0.06em] text-black">
          {value}
        </p>
        <p className="mt-1 text-[0.84rem] text-[#061451]">{detail}</p>
      </div>
    </article>
  );
}

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      className="shrink-0"
    >
      <rect
        x="6.5"
        y="6.5"
        width="39"
        height="39"
        rx="12"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <path
        d="M16.5 15.5v21l7-6.4 2.7 2.2 6-5.4-7.2-6 6.8-6.1-5.8-5-8 7.4V15.5Z"
        fill="#ffffff"
      />
      <path d="M18.8 30.2l8.8-7.9 2.7 2.2-8.7 7.8-2.8-2.1Z" fill="#009CC4" />
    </svg>
  );
}

export default HeroSection;

function buildMonthCalendar(year: number, monthIndex: number) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = normalizeWeekday(
    new Date(year, monthIndex, 1).getDay(),
  );
  const cells: Array<{ number: number; level: number } | null> = [];

  for (let index = 0; index < firstDayOfWeek; index += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({
      number: day,
      level: (monthIndex * 7 + day * 3) % heatmapLevelColors.length,
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  const weeks: Array<Array<{ number: number; level: number } | null>> = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }

  return { weeks };
}

function normalizeWeekday(day: number) {
  return (day + 6) % 7;
}
