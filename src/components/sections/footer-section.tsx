function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1480px] px-4 py-12 sm:px-6 lg:px-10 lg:py-14 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:gap-16">
          <div className="max-w-sm">
            <p className="inline-flex h-7 items-center bg-[#f1f5f9] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black">
              Kauan
            </p>
            <p className="mt-5 text-[0.96rem] leading-8 text-white/70">
              Desenvolvendo interfaces, sistemas e experiencias digitais com
              foco em clareza, ritmo e consistencia.
            </p>
          </div>

          <nav aria-label="Navegacao do rodape" className="grid gap-3">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white">
              Navegacao
            </p>
            <a href="#inicio" className="text-[0.95rem] text-white/68 transition hover:text-white">
              Inicio
            </a>
            <a href="#sobre-mim" className="text-[0.95rem] text-white/68 transition hover:text-white">
              Sobre
            </a>
            <a href="#projetos" className="text-[0.95rem] text-white/68 transition hover:text-white">
              Projetos
            </a>
            <a href="#contato" className="text-[0.95rem] text-white/68 transition hover:text-white">
              Contato
            </a>
          </nav>

          <div className="grid gap-3">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white">
              Social
            </p>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.95rem] text-white/68 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.95rem] text-white/68 transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#contato"
              className="text-[0.95rem] text-white/68 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-[0.84rem] text-white/48">
          © 2026 Kauan. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
