import type { ComponentType } from "react"
import { Article, BracketsCurly, Browser, ChartBar, CloudArrowUp, Database, Devices, ShieldCheck } from "@phosphor-icons/react"

type ConnectionFlow = "card-to-hub" | "hub-to-card"

type ServiceItem = {
  id: string
  title: string
  icon: ComponentType<{ className?: string }>
  side: "left" | "right"
  connection: {
    width: number
    offset: number
    flow: ConnectionFlow
    sourceAnchor: number
    targetAnchor: number
  }
}

const VIEWBOX_WIDTH = 1200
const VIEWBOX_HEIGHT = 760
const CARD_WIDTH = 256
const CARD_HEIGHT = 96
const HUB_WIDTH = 152
const HUB_HEIGHT = 152

const LEFT_CARD_X = 32
const RIGHT_CARD_X = VIEWBOX_WIDTH - LEFT_CARD_X - CARD_WIDTH
const HUB_X = (VIEWBOX_WIDTH - HUB_WIDTH) / 2
const HUB_Y = 280
const Y_POSITIONS = [56, 224, 392, 560]

const LEFT_HANDLE_YS = [0.18, 0.38, 0.58, 0.78]
const RIGHT_HANDLE_YS = [0.18, 0.38, 0.58, 0.78]

const leftServices: ServiceItem[] = [
  {
    id: "landing-pages",
    title: "Landing Pages",
    icon: Article,
    side: "left",
    connection: {
      width: 1.1,
      offset: 88,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: LEFT_HANDLE_YS[0],
    },
  },
  {
    id: "sistemas-web",
    title: "Sistemas Web",
    icon: Browser,
    side: "left",
    connection: {
      width: 1.25,
      offset: 28,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: LEFT_HANDLE_YS[1],
    },
  },
  {
    id: "dashboards",
    title: "Dashboards",
    icon: ChartBar,
    side: "left",
    connection: {
      width: 1.25,
      offset: 28,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: LEFT_HANDLE_YS[2],
    },
  },
  {
    id: "interfaces-responsivas",
    title: "Interfaces Responsivas",
    icon: Devices,
    side: "left",
    connection: {
      width: 1.1,
      offset: 88,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: LEFT_HANDLE_YS[3],
    },
  },
]

const rightServices: ServiceItem[] = [
  {
    id: "apis-rest",
    title: "APIs REST",
    icon: BracketsCurly,
    side: "right",
    connection: {
      width: 1.1,
      offset: 88,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: RIGHT_HANDLE_YS[0],
    },
  },
  {
    id: "banco-de-dados",
    title: "Banco de Dados",
    icon: Database,
    side: "right",
    connection: {
      width: 1.25,
      offset: 28,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: RIGHT_HANDLE_YS[1],
    },
  },
  {
    id: "autenticacao",
    title: "Autenticacao",
    icon: ShieldCheck,
    side: "right",
    connection: {
      width: 1.25,
      offset: 28,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: RIGHT_HANDLE_YS[2],
    },
  },
  {
    id: "deploy-e-infraestrutura",
    title: "Deploy e Infraestrutura",
    icon: CloudArrowUp,
    side: "right",
    connection: {
      width: 1.1,
      offset: 88,
      flow: "card-to-hub",
      sourceAnchor: 0.5,
      targetAnchor: RIGHT_HANDLE_YS[3],
    },
  },
]

function ServicesSection() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-white text-[#061451]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,156,196,0.08)_0%,rgba(0,156,196,0.03)_26%,rgba(255,255,255,0)_62%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(6,20,81,0.22)_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex h-7 items-center bg-[#f1f5f9] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
            Servicos
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[2rem] font-black tracking-[-0.065em] text-black sm:text-[3.25rem] sm:leading-[1.02]">
            Conexoes visuais que organizam cada entrega em um unico hub.
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#009CC4] to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-7 text-[#334155] sm:text-[1.08rem]">
            O diagrama foi desenhado para parecer uma interface real: cards
            simples, linhas precisas e leitura rapida para entender meu escopo
            sem ruido visual.
          </p>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="grid gap-4 sm:grid-cols-2">
            {[...leftServices, ...rightServices].map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-12 hidden lg:block">
          <div
            className="relative w-full"
            style={{
              aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}`,
              minHeight: 660,
            }}
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="connection-arrow"
                  viewBox="0 0 10 10"
                  refX="8.5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#009CC4" />
                </marker>
              </defs>

              {leftServices.map((service, index) => (
                <path
                  key={`left-line-${service.id}`}
                  d={buildConnectionPath({
                    sourceX: service.connection.flow === "card-to-hub" ? LEFT_CARD_X + CARD_WIDTH : HUB_X,
                    sourceY:
                      service.connection.flow === "card-to-hub"
                        ? cardCenterY(index, service.connection.sourceAnchor)
                        : HUB_Y + HUB_HEIGHT * service.connection.sourceAnchor,
                    targetX: service.connection.flow === "card-to-hub" ? HUB_X : LEFT_CARD_X + CARD_WIDTH,
                    targetY:
                      service.connection.flow === "card-to-hub"
                        ? HUB_Y + HUB_HEIGHT * service.connection.targetAnchor
                        : cardCenterY(index, service.connection.targetAnchor),
                    offset: service.connection.offset,
                  })}
                  fill="none"
                  stroke="#009CC4"
                  strokeWidth={service.connection.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#connection-arrow)"
                />
              ))}

              {rightServices.map((service, index) => (
                <path
                  key={`right-line-${service.id}`}
                  d={buildConnectionPath({
                    sourceX: RIGHT_CARD_X,
                    sourceY: cardCenterY(index, service.connection.sourceAnchor),
                    targetX: HUB_X + HUB_WIDTH,
                    targetY: HUB_Y + HUB_HEIGHT * service.connection.targetAnchor,
                    offset: service.connection.offset,
                  })}
                  fill="none"
                  stroke="#009CC4"
                  strokeWidth={service.connection.width}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#connection-arrow)"
                />
              ))}
            </svg>

            {leftServices.map((service, index) => (
              <DiagramCard
                key={service.id}
                item={service}
                x={LEFT_CARD_X}
                y={Y_POSITIONS[index]}
              />
            ))}

            <HubDiagram />

            {rightServices.map((service, index) => (
              <DiagramCard
                key={service.id}
                item={service}
                x={RIGHT_CARD_X}
                y={Y_POSITIONS[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function buildConnectionPath({
  sourceX,
  sourceY,
  targetX,
  targetY,
  offset,
}: {
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  offset: number
}) {
  const direction = Math.sign(targetX - sourceX) || 1
  const turnX = sourceX + direction * offset

  return `M ${sourceX} ${sourceY} H ${turnX} V ${targetY} H ${targetX}`
}

function cardCenterY(index: number, anchor = 0.5) {
  return Y_POSITIONS[index] + CARD_HEIGHT * anchor
}

function DiagramCard({
  item,
  x,
  y,
}: {
  item: ServiceItem
  x: number
  y: number
}) {
  return (
    <article
      className="absolute rounded-none border border-[#d7deea] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(6,20,81,0.06)]"
      style={{
        left: pctX(x),
        top: pctY(y),
        width: pctX(CARD_WIDTH),
        height: pctY(CARD_HEIGHT),
      }}
    >
      <div className="flex h-full items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#061451] text-white shadow-[0_10px_22px_rgba(6,20,81,0.14)]">
          <item.icon className="h-5 w-5" />
        </div>
        <h3 className="text-[1rem] font-semibold leading-tight text-black">{item.title}</h3>
      </div>
    </article>
  )
}

function HubDiagram() {
  return (
    <div
      className="absolute rounded-none border border-[#d7e7f2] bg-[#061451] shadow-[0_0_0_1px_rgba(0,156,196,0.08),0_0_48px_rgba(0,156,196,0.18),0_16px_60px_rgba(6,20,81,0.14)]"
      style={{
        left: pctX(HUB_X),
        top: pctY(HUB_Y),
        width: pctX(HUB_WIDTH),
        height: pctY(HUB_HEIGHT),
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,156,196,0.16)_0%,rgba(0,156,196,0.04)_38%,rgba(0,156,196,0)_68%)]" />
      <div className="absolute inset-[18%] flex items-center justify-center rounded-none border border-white/10 bg-[#061451]">
        <span className="font-mono text-[3.5rem] font-semibold tracking-[-0.12em] text-white">
          &lt;/&gt;
        </span>
      </div>
    </div>
  )
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="rounded-none border border-[#d7deea] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(6,20,81,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#009CC4]">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#061451] text-white shadow-[0_10px_22px_rgba(6,20,81,0.14)]">
          <item.icon className="h-5 w-5" />
        </div>
        <h3 className="text-[1rem] font-semibold leading-tight text-black">{item.title}</h3>
      </div>
    </article>
  )
}

function pctX(value: number) {
  return `${(value / VIEWBOX_WIDTH) * 100}%`
}

function pctY(value: number) {
  return `${(value / VIEWBOX_HEIGHT) * 100}%`
}

export default ServicesSection
