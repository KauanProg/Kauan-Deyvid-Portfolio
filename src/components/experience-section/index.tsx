const experiences = [
  {
    period: "Jan 2026 – Presente",
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer",
    description: "Criação de landing pages, sites institucionais e sistemas de gestão para pequenos negócios locais.",
    side: "left",
  },
  {
    period: "Ago 2025 – Dez 2025",
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Realize Software",
    description: "Evolução e manutenção de sistemas industriais, com foco em performance e integrações. Desenvolvimento de APIs REST e interfaces modernas com Next.js e stack Node.js.",
    side: "right",
  },
  {
    period: "Jan 2025 – Jul 2025",
    role: "Estagiário em Desenvolvimento Full-Stack",
    company: "Realize Software",
    description: "Desenvolvimento e manutenção de sistemas industriais, APIs REST, WebSockets e automações. Atuação em melhorias e otimizações de sistemas legados.",
    side: "left",
  },
  {
    period: "Abr 2024 – Dez 2024",
    role: "Estagiário em Desenvolvimento Full-Stack",
    company: "UpValue Solutions",
    description: "Desenvolvimento de sistemas web e APIs para setores industrial e de engenharia. Atuação com FastAPI, Node.js e automações em Python.",
    side: "right",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-secondary py-24" id="experiencia">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl font-extrabold mb-2 text-white">
            Experiência{" "}
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
              Profissional
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Minha trajetória profissional e experiências que contribuíram para
            meu desenvolvimento como desenvolvedor
          </p>

          <div className="w-14 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          <div
            className="
              absolute top-0 h-full w-px bg-gray-700
              left-4 sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          {experiences.map((exp, index) => {
            const isLeft = exp.side === "left";

            return (
              <div
                key={index}
                className="relative mb-16 sm:mb-24 flex"
              >
                <div
                  className={`
                    w-full sm:w-1/2 pl-12
                    ${isLeft
                      ? "sm:pl-0 sm:pr-16 text-left sm:text-right"
                      : "sm:pl-16 ml-0 sm:ml-auto text-left"}
                  `}
                >
                  <div
                    className="
                      group
                      relative inline-block
                      bg-black-700
                      border border-black-600
                      rounded-2xl p-6
                      max-w-md
                      transition-all duration-300
                      hover:border-primary
                    "
                  >
                    {/* Seta */}
                    <span
                      className={`
                        hidden sm:block
                        absolute top-1/2 -translate-y-1/2
                        w-0 h-0
                        border-t-10 border-b-10
                        border-t-transparent border-b-transparent
                        transition-colors duration-300
                        ${
                          isLeft
                            ? "right-0 translate-x-full border-l-10 border-l-black-600 group-hover:border-l-primary"
                            : "left-0 -translate-x-full border-r-10 border-r-black-600 group-hover:border-r-primary"
                        }
                      `}
                    />

                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>

                    <h3 className="text-white text-lg font-semibold">
                      {exp.role}
                    </h3>

                    <p className="text-primary mt-1 font-medium">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Ponto da timeline */}
                <div
                  className="
                    absolute
                    left-4 sm:left-1/2
                    top-1/2 -translate-y-1/2
                    -translate-x-1/2
                    w-4 h-4
                    bg-secondary border-2 border-primary
                    rounded-full z-10
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
