import {
  CodeIcon,
  DeviceMobileIcon,
  PaletteIcon,
  DatabaseIcon,
  WrenchIcon,
} from "@phosphor-icons/react";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web modernas, responsivas e de alta performance utilizando React e Next.js.",
    Icon: CodeIcon,
  },
  {
    title: "APIs & Back-end",
    description:
      "Arquiteturas robustas, seguras e escaláveis com Node.js, Python e Java.",
    Icon: DatabaseIcon,
  },
  {
    title: "Aplicativos Mobile",
    description: "Apps híbridos para iOS e Android com React Native e Flutter.",
    Icon: DeviceMobileIcon,
  },
  {
    title: "UX/UI Design",
    description:
      "Interfaces intuitivas e protótipos de alta fidelidade focados na experiência do usuário.",
    Icon: PaletteIcon,
  },
  {
    title: "Banco de Dados",
    description:
      "Modelagem, otimização e gerenciamento de bancos relacionais e não-relacionais.",
    Icon: DatabaseIcon,
  },
  {
    title: "Web Scraping",
    description:
      "Coleta e processamento automatizado de dados da web para análise estratégica.",
    Icon: WrenchIcon,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-secondary py-24" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl font-extrabold mb-2 text-white">
            Meus{" "}
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Soluções completas para transformar ideias em produtos digitais
            eficientes e escaláveis.
          </p>

          <div className="w-14 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.Icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  bg-black-800
                  border border-black-600
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:border-primary
                "
              >
                <div
                  className="
                    w-12 h-12 mb-4
                    flex items-center justify-center
                    rounded-lg
                    bg-black-700
                    border border-black-600
                    transition-all duration-300
                    group-hover:bg-linear-to-r
                    group-hover:from-primary
                    group-hover:to-[#991519]
                    group-hover:border-transparent
                    group-hover:scale-105
                  "
                >
                  <Icon size={22} weight="bold" className="text-white" />
                </div>

                <h3 className="text-white font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
