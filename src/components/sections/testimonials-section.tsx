import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react"

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "O Kauan entendeu rapidamente o que o projeto precisava e transformou uma ideia ainda solta em uma experiencia clara, rapida e muito bem construida.",
    name: "Marina Costa",
    role: "Product Designer",
    initials: "MC",
  },
  {
    quote:
      "Alem da qualidade tecnica, a comunicacao durante todo o processo fez diferenca. Cada decisao veio acompanhada de contexto e atencao aos detalhes.",
    name: "Lucas Almeida",
    role: "Fundador, Norte Studio",
    initials: "LA",
  },
  {
    quote:
      "Trabalhar com o Kauan trouxe previsibilidade para a entrega. Ele organizou bem as prioridades e manteve o produto consistente do inicio ao fim.",
    name: "Rafael Martins",
    role: "Tech Lead",
    initials: "RM",
  },
]

function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-white text-[#061451]"
    >
      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#009CC4]">
            Depoimentos
          </p>
          <h2
            id="testimonials-title"
            className="mt-4 text-[clamp(1.95rem,3.2vw,3.6rem)] font-black leading-[0.98] tracking-[-0.06em] text-black"
          >
            Boas entregas tambem deixam boas historias.
          </h2>
          <p className="mt-6 text-[1rem] leading-8 text-[#061451]/70 sm:text-[1.06rem] sm:leading-9">
            A perspectiva de quem participou do processo - da primeira conversa
            ao produto em producao.
          </p>
        </div>

        <div className="mt-10 grid w-full gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="group flex h-full flex-col border border-[#061451]/10 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#009CC4]/50 motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
            >
              <Quotes
                aria-hidden="true"
                size={26}
                weight="fill"
                className="text-[#009CC4]"
              />
              <blockquote className="mt-5 flex-1 text-[1.05rem] leading-8 text-[#061451]/80">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-[#061451]/10 pt-5">
                <Avatar testimonial={testimonial} />
                <Person testimonial={testimonial} />
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          aria-label="Navegacao dos depoimentos"
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            type="button"
            aria-label="Depoimento anterior"
            className="grid h-11 w-11 place-items-center border border-[#061451]/12 bg-white text-[#061451] transition hover:border-[#009CC4]/50 hover:text-[#009CC4]"
          >
            <CaretLeft size={18} weight="bold" />
          </button>

          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-8 rounded-full bg-[#009CC4]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#061451]/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#061451]/18" />
          </div>

          <button
            type="button"
            aria-label="Proximo depoimento"
            className="grid h-11 w-11 place-items-center border border-[#061451]/12 bg-white text-[#061451] transition hover:border-[#009CC4]/50 hover:text-[#009CC4]"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  )
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  return (
    <span
      aria-hidden="true"
      className="grid h-12 w-12 shrink-0 place-items-center border border-[#009CC4]/25 bg-[#009CC4] text-[0.82rem] font-bold tracking-[0.05em] text-white"
    >
      {testimonial.initials}
    </span>
  )
}

function Person({ testimonial }: { testimonial: Testimonial }) {
  return (
    <span>
      <span className="block font-bold tracking-[-0.02em] text-[#061451]">
        {testimonial.name}
      </span>
      <span className="mt-1 block text-[0.84rem] text-[#061451]/60">
        {testimonial.role}
      </span>
    </span>
  )
}

export default TestimonialsSection
