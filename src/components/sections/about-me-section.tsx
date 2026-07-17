import { useEffect, useState, type CSSProperties, type MouseEvent } from "react"

type AboutPage = {
  number: string
  title: string
  text: string
}

const aboutPages: AboutPage[] = [
  {
    number: "01",
    title: "Minha trajetória",
    text:
      "Sou desenvolvedor Full Stack e estudante de Engenharia de Software. Gosto de construir interfaces claras, sistemas bem organizados e soluções que unem tecnologia, experiência do usuário e consistência visual. Minha prioridade é transformar contexto em produto com começo, meio e fim bem definidos, respeitando o objetivo real de cada projeto e mantendo a experiência final fácil de entender. Com o tempo, fui aprendendo a observar não só a aparência de uma solução, mas também o modo como ela sustenta a rotina de quem usa, se adapta a novas necessidades e continua coerente conforme o projeto amadurece.",
  },
  {
    number: "02",
    title: "Como eu trabalho",
    text:
      "Participo de diferentes etapas do desenvolvimento, desde o entendimento das necessidades e organização dos requisitos até a implementação, validação e evolução da solução. Tento manter cada decisão visível e cada entrega fácil de revisar, para que o projeto continue saudável ao crescer e possa ser ajustado com segurança ao longo do tempo, sem perder clareza nem consistência. Isso significa olhar para arquitetura, fluxo de tela, dados e manutenção como partes do mesmo trabalho, sempre buscando equilíbrio entre velocidade de entrega e cuidado com a base técnica.",
  },
  {
    number: "03",
    title: "O que eu construo",
    text:
      "Desenvolvo aplicações web e mobile, APIs, automações e sistemas de gestão. Busco criar interfaces fáceis de entender e estruturas preparadas para crescer e evoluir. O foco está em unir interface, lógica e dados de forma coerente, sem excesso de complexidade desnecessária, para que o resultado final seja útil, consistente e sustentável no dia a dia. Quando o projeto pede, também gosto de pensar em integrações, regras de negócio e pequenas automações que economizam tempo e tornam a experiência mais fluida para o usuário e para o time.",
  },
  {
    number: "04",
    title: "Meu objetivo",
    text:
      "Meu objetivo é continuar evoluindo como desenvolvedor e participar de projetos nos quais tecnologia, experiência do usuário e organização possam gerar resultados concretos. Quero trabalhar em ambientes onde o cuidado com o detalhe ajude a criar soluções sólidas, úteis e bem pensadas, com impacto real para quem usa e para o contexto em que o produto está inserido. Também quero ampliar minha visão de produto, colaborar com pessoas diferentes e transformar decisões técnicas em experiências que façam sentido no cotidiano, tanto para quem desenvolve quanto para quem utiliza a solução.",
  },
]

const defaultPhotoSrc = "/about-me-photo.png"

type AboutMeSectionProps = {
  photoSrc?: string
  photoAlt?: string
}

function AboutMeSection({
  photoSrc = defaultPhotoSrc,
  photoAlt = "Retrato profissional do desenvolvedor",
}: AboutMeSectionProps) {
  const [activePageIndex, setActivePageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [revealPoint, setRevealPoint] = useState({
    x: "50%",
    y: "50%",
    visible: false,
  })
  const activePage = aboutPages[activePageIndex]

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActivePageIndex((currentIndex) => (currentIndex + 1) % aboutPages.length)
    }, 15000)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  useEffect(() => {
    if (!isPaused) {
      return undefined
    }

    const resumeId = window.setTimeout(() => {
      setIsPaused(false)
    }, 15000)

    return () => window.clearTimeout(resumeId)
  }, [isPaused])

  function handleImageMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    setRevealPoint({
      x: `${Math.max(0, Math.min(100, x))}%`,
      y: `${Math.max(0, Math.min(100, y))}%`,
      visible: true,
    })
  }

  return (
    <section id="sobre-mim" className="bg-white text-[#061451]">
      <div className="mx-auto w-full max-w-[1540px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(340px,420px)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <div className="relative order-2 w-full lg:order-1">
            <div
              className="relative aspect-[0.8] overflow-hidden bg-[#ece6e1]"
              onMouseEnter={() =>
                setRevealPoint((current) => ({ ...current, visible: true }))
              }
              onMouseMove={handleImageMove}
              onMouseLeave={() =>
                setRevealPoint((current) => ({ ...current, visible: false }))
              }
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-10 h-[74%] w-[66%] bg-[#061451]"
              />
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-full w-[30%] bg-[#060606]"
              />
              <div
                aria-hidden="true"
                className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] border border-[#d8cec4]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_30%)]"
              />

              <img
                src={photoSrc}
                alt={photoAlt}
                className="absolute inset-0 h-full w-full object-cover object-[50%_18%] grayscale"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-150"
                style={
                  {
                    opacity: revealPoint.visible ? 1 : 0,
                    WebkitMaskImage: `radial-gradient(circle 125px at ${revealPoint.x} ${revealPoint.y}, #000 0 46%, transparent 72%)`,
                    maskImage: `radial-gradient(circle 125px at ${revealPoint.x} ${revealPoint.y}, #000 0 46%, transparent 72%)`,
                  } as CSSProperties
                }
              >
                <img
                  src={photoSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
                />
              </div>
            </div>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <div className="max-w-[900px]">
              <div className="mt-7 min-h-[220px] sm:min-h-[200px]">
                <div key={activePage.number} className="about-page-panel">
                  <p className="inline-flex h-7 items-center bg-[#f1f5f9] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
                    SOBRE MIM
                  </p>
                  <p className="mt-4 max-w-4xl text-[clamp(1.8rem,3vw,2.75rem)] font-black tracking-[-0.06em] text-black">
                    {activePage.title}
                  </p>
                  <p className="mt-4 max-w-5xl text-[0.98rem] leading-8 text-[#5b6478] text-justify sm:text-[1.05rem] sm:leading-9">
                    {activePage.text}
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                {aboutPages.map((page, index) => {
                  const isActive = index === activePageIndex

                  return (
                    <button
                      key={page.number}
                      type="button"
                      onClick={() => {
                        setActivePageIndex(index)
                        setIsPaused(true)
                      }}
                      className={`transition ${
                        isActive
                          ? "h-2.5 w-9 rounded-full bg-[#061451]"
                          : "h-3 w-3 rounded-full bg-[#d5dfec] hover:bg-[#bcc7d8]"
                      }`}
                      aria-label={`Ir para a página ${page.number}`}
                      aria-pressed={isActive}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
