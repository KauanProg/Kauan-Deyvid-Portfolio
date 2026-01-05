import { Code, Lightbulb, Gauge, Users } from "@phosphor-icons/react";

const AboutSection = () => {
  return (
    <section className="bg-secondary py-24" id="sobre">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-3xl text-white mb-6">
            Sobre{" "}
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent font-bold">
              Mim
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Sou estudante de Engenharia de Software na Universidade Federal do
              Ceará (UFC), com paixão por desenvolvimento de software e criação
              de experiências digitais impactantes.
            </p>

            <p>
              Minha jornada na programação começou com a curiosidade de entender
              como as tecnologias funcionam. Hoje, trabalho com desenvolvimento
              full-stack, criando aplicações web e mobile que unem design
              elegante com código robusto.
            </p>

            <p>
              Acredito que a tecnologia deve ser acessível e intuitiva. Por
              isso, me dedico a criar soluções que não apenas funcionam bem, mas
              também proporcionam experiências excepcionais aos usuários.
            </p>
          </div>

          <div className="mt-12 flex gap-12">
            <div>
              <span className="text-3xl font-bold bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
                1+
              </span>
              <p className="text-sm text-gray-400 mt-1">Anos de Experiência</p>
            </div>

            <div>
              <span className="text-3xl font-bold bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
                5+
              </span>
              <p className="text-sm text-gray-400 mt-1">Projetos Realizados</p>
            </div>

            <div>
              <span className="text-3xl font-bold bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
                20+
              </span>
              <p className="text-sm text-gray-400 mt-1">Tecnologias</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Código Limpo",
              desc: "Desenvolvimento com boas práticas e padrões de projeto",
              icon: Code,
            },
            {
              title: "Inovação",
              desc: "Sempre buscando as melhores soluções tecnológicas",
              icon: Lightbulb,
            },
            {
              title: "Performance",
              desc: "Aplicações otimizadas e de alta qualidade",
              icon: Gauge,
            },
            {
              title: "Colaboração",
              desc: "Trabalho em equipe e comunicação efetiva",
              icon: Users,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-black-700 rounded-2xl p-6 shadow-lg
                  transition-all duration-300
                  hover:scale-105 hover:shadow-2xl
                "
              >
                <div
                  className="
                    w-12 h-12 flex items-center justify-center rounded-xl
                    bg-black-800 text-primary mb-4
                    transition-all duration-300
                    group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-[#991519]
                    group-hover:text-white
                  "
                >
                  <Icon size={24} weight="bold" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
