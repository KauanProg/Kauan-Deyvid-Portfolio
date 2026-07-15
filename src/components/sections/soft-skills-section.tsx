const softSkills = [
  {
    number: "01",
    title: "Comunicação",
    description:
      "Explico decisões técnicas com clareza para alinhar contexto, time e entrega.",
  },
  {
    number: "02",
    title: "Colaboração",
    description:
      "Trabalho bem com produto, design e desenvolvimento para manter o fluxo saudável.",
  },
  {
    number: "03",
    title: "Organização",
    description:
      "Estruturo prioridades e entregas com previsibilidade, sem perder ritmo.",
  },
]

function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="bg-[#f5f8fc] text-[#061451]">
      <div className="mx-auto w-full max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(520px,640px)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="grid gap-4">
            {softSkills.map((skill) => (
              <article
                key={skill.title}
                className="border border-[#d7deea] bg-white p-5 transition hover:border-[#a8bdd3]"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#009CC4]">
                      {skill.number}
                    </p>
                    <h3 className="mt-3 text-[1.05rem] font-bold tracking-[-0.03em] text-black">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-sm text-[0.93rem] leading-7 text-[#334155]">
                  {skill.description}
                </p>
              </article>
            ))}
          </div>

          <div className="max-w-3xl lg:justify-self-end">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#009CC4]">
              Soft skills
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.2rem,4vw,4.6rem)] font-black leading-[0.92] tracking-[-0.08em] text-black">
              Como eu colaboro, organizo e entrego
            </h2>
            <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-[#334155] sm:text-[1.06rem] sm:leading-9">
              Essas habilidades ajudam a transformar código em entrega real,
              sustentam a comunicação no dia a dia e mantêm o trabalho fluindo
              com clareza em equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftSkillsSection
