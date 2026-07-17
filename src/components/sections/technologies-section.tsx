import { useEffect, useRef, useState, type CSSProperties } from "react"
import {
  siAngular,
  siDocker,
  siGit,
  siGithub,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons"

type TechnologyName =
  | "React"
  | "TypeScript"
  | "JavaScript"
  | "Next.js"
  | "Tailwind CSS"
  | "Angular"
  | "Node.js"
  | "Python"
  | "PostgreSQL"
  | "Docker"
  | "Git"
  | "GitHub"

type Technology = {
  name: TechnologyName
  left: string
  desktopLeft: string
  top: string
  floats?: boolean
  floatDelay?: string
}

const technologyIcons: Record<TechnologyName, SimpleIcon> = {
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  Angular: siAngular,
  "Node.js": siNodedotjs,
  Python: siPython,
  PostgreSQL: siPostgresql,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
}

const technologies: Technology[] = [
  { name: "React", left: "7%", desktopLeft: "10%", top: "53%", floats: true, floatDelay: "-1.2s" },
  { name: "TypeScript", left: "18%", desktopLeft: "20%", top: "61%" },
  { name: "JavaScript", left: "7%", desktopLeft: "29%", top: "50%" },
  { name: "Next.js", left: "8%", desktopLeft: "11%", top: "73%" },
  { name: "Tailwind CSS", left: "18%", desktopLeft: "21%", top: "79%", floats: true, floatDelay: "-3.1s" },
  { name: "Angular", left: "17%", desktopLeft: "29%", top: "70%" },
  { name: "Node.js", left: "83%", desktopLeft: "71%", top: "51%", floats: true, floatDelay: "-4.2s" },
  { name: "Python", left: "92%", desktopLeft: "80%", top: "61%" },
  { name: "PostgreSQL", left: "93%", desktopLeft: "90%", top: "53%" },
  { name: "Docker", left: "82%", desktopLeft: "72%", top: "73%" },
  { name: "Git", left: "93%", desktopLeft: "82%", top: "79%", floats: true, floatDelay: "-2.4s" },
  { name: "GitHub", left: "83%", desktopLeft: "91%", top: "70%" },
]

function TechnologiesSection() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.22 },
    )

    observer.observe(scene)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tecnologias" className="bg-white py-16 text-[#030B2F] lg:py-24">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div
          ref={sceneRef}
          className={`technology-composition relative mx-auto aspect-4/5 min-h-[680px] w-full overflow-hidden sm:aspect-16/10 lg:aspect-video lg:min-h-0 ${isVisible ? "technology-composition--visible" : ""}`}
        >
          <header className="absolute inset-x-4 top-[6%] z-30 mx-auto text-center sm:inset-x-10">
            <p className="inline-flex h-7 items-center bg-[#f1f5f9] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
              Tecnologias
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(1.95rem,3.2vw,3.6rem)] font-black leading-[0.98] tracking-[-0.06em] text-black">
              Tecnologias que fazem parte da <span className="text-black">minha jornada</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[0.94rem] leading-7 text-[#667085] sm:text-[1.04rem]">
              Ferramentas que utilizo para desenvolver aplicações modernas, escaláveis e eficientes.
            </p>
          </header>

          <div aria-hidden="true" className="absolute bottom-[5%] left-1/2 h-[4%] w-[34%] -translate-x-1/2 rounded-[50%] bg-[#030B2F]/6 blur-xl" />

          <div className="technology-avatar absolute bottom-[3%] left-1/2 z-10 w-[56%] max-w-[540px] sm:w-[38%]">
            <img
              src="/avatar-3d.png"
              alt="Avatar 3D do desenvolvedor meditando sobre uma base circular"
              width="500"
              height="500"
              loading="lazy"
              className="technology-avatar__image h-auto w-full object-contain"
            />
          </div>

          <div aria-label="Tecnologias utilizadas" className="absolute inset-0 z-20">
            {technologies.map((technology, index) => (
              <div
                key={technology.name}
                className="technology-position technology-item absolute outline-none"
                style={{
                  "--technology-left": technology.left,
                  "--technology-left-desktop": technology.desktopLeft,
                  "--technology-top": technology.top,
                  "--technology-entry-delay": `${300 + index * 55}ms`,
                } as CSSProperties}
                aria-label={technology.name}
                tabIndex={0}
              >
                <div
                  className="technology-circle technology-gentle-float flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#030B2F] text-white shadow-[0_6px_14px_rgba(3,11,47,0.1)] sm:h-12 sm:w-12"
                  style={{
                    "--technology-delay": `${-(index * 0.73)}s`,
                    "--technology-duration": `${6.6 + (index % 4) * 0.65}s`,
                  } as CSSProperties}
                >
                  <TechnologyLogo name={technology.name} />
                </div>
                <span role="tooltip" className="technology-tooltip pointer-events-none absolute left-1/2 top-[calc(100%+8px)] min-w-max whitespace-nowrap rounded-full bg-[#030B2F] px-2.5 py-1 text-center text-[0.64rem] font-semibold tracking-wide text-white">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnologyLogo({ name }: { name: TechnologyName }) {
  const icon = technologyIcons[name]

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[52%] w-[52%]" fill="currentColor">
      <path d={icon.path} />
    </svg>
  )
}

export default TechnologiesSection
