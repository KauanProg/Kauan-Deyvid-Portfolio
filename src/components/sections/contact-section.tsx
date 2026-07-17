import { PaperPlaneTilt } from "@phosphor-icons/react"

function ContactSection() {
  return (
    <section id="contato" className="bg-white text-[#061451]">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex h-7 items-center bg-[#f1f5f9] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
            Contato
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-[0.94] tracking-[-0.08em] text-black">
            Vamos <span className="text-[#009CC4]">conversar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-[#061451]/70 sm:text-[1.08rem]">
            Preencha o formulario e retornaremos com uma analise inicial do seu
            projeto.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,480px)] lg:items-stretch">
          <div className="flex h-full min-h-[420px] flex-col border border-[#061451]/10 bg-[#f8fbff] p-6 shadow-[0_18px_45px_rgba(6,20,81,0.08)] sm:p-8">
            <div className="flex h-full flex-col gap-6">
              <div className="max-w-xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#009CC4]">
                  Resposta rapida
                </p>
                <h3 className="mt-4 text-[clamp(1.6rem,2.2vw,2.4rem)] font-black leading-[1] tracking-[-0.06em] text-black">
                  Vamos alinhar sua ideia.
                </h3>
                <p className="mt-4 max-w-lg text-[1rem] leading-8 text-[#061451]/68">
                  Me envie uma mensagem curta com o contexto do projeto e eu
                  retorno com os proximos passos.
                </p>
              </div>

              <div className="border-l-2 border-[#009CC4] pl-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#061451]/55">
                  Direcao inicial
                </p>
                <p className="mt-3 max-w-lg text-[0.98rem] leading-8 text-[#061451]">
                  Um primeiro contato claro ja ajuda a definir escopo, ritmo e
                  o melhor caminho para o projeto.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-[#061451]/10 bg-white p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#061451]/55">
                    Localizacao
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-7 text-[#061451]">
                    Russas, CE
                  </p>
                </div>
                <div className="border border-[#061451]/10 bg-white p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#061451]/55">
                    Tempo medio
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-7 text-[#061451]">
                    Resposta em 1 dia util
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="flex h-full w-full max-w-[480px] justify-self-start border border-[#061451]/10 bg-white p-6 shadow-[0_18px_45px_rgba(6,20,81,0.06)] sm:p-7">
            <div className="grid h-full w-full gap-4">
              <label className="grid gap-3">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
                  Nome completo *
                </span>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="h-12 border border-[#061451]/12 bg-white px-4 text-[0.98rem] text-[#061451] outline-none transition placeholder:text-[#061451]/35 focus:border-[#009CC4]"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
                  E-mail *
                </span>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-12 border border-[#061451]/12 bg-white px-4 text-[0.98rem] text-[#061451] outline-none transition placeholder:text-[#061451]/35 focus:border-[#009CC4]"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#061451]">
                  Mensagem *
                </span>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente seu projeto ou necessidade..."
                  className="resize-none border border-[#061451]/12 bg-white px-4 py-3 text-[0.98rem] text-[#061451] outline-none transition placeholder:text-[#061451]/35 focus:border-[#009CC4]"
                />
              </label>

              <button
                type="submit"
                className="mt-auto inline-flex h-12 items-center justify-center gap-3 bg-[#061451] px-6 text-[0.95rem] font-semibold text-white transition hover:bg-[#009CC4]"
              >
                Enviar mensagem
                <PaperPlaneTilt size={18} weight="bold" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
