import { useState } from "react";
import {
  GraduationCapIcon,
  CertificateIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@phosphor-icons/react";

const TrainingCertificationsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const certifications = [
    {
      title: "Microsoft Certification Challenge #4 - AZ 204",
      org: "DIO",
      year: "2025",
      description:
        "Certificação focada no desenvolvimento de soluções na Microsoft Azure, abordando criação e consumo de APIs, serviços de computação, armazenamento, segurança e monitoramento de aplicações em nuvem.",
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      org: "DIO",
      year: "2024",
      description:
        "Certificação introdutória em inteligência artificial no Azure, cobrindo conceitos de machine learning, visão computacional, processamento de linguagem natural e serviços cognitivos.",
    },
    {
      title: "Desenvolvimento Frontend com Angular",
      org: "DIO",
      year: "2024",
      description:
        "Formação em desenvolvimento frontend utilizando Angular, com foco em componentização, rotas, formulários reativos, boas práticas e integração com APIs.",
    },
  ];

  return (
    <section className="bg-white-300 py-28" id="certificados">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="flex items-center gap-3 font-display font-extrabold text-3xl mb-10">
              <GraduationCapIcon size={32} className="text-primary" />
              <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
                Formação Acadêmica
              </span>
            </h2>

            <div className="bg-black-700 rounded-2xl p-8 border border-transparent transition-all duration-300 hover:border-primary hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white">
                Bacharelado em Engenharia de Software
              </h3>

              <p className="text-primary mt-1 font-medium">
                Universidade Federal do Ceará (UFC)
              </p>

              <p className="text-gray-400 text-sm mt-1">
                2021 – 2026 (Previsão)
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Formação focada em desenvolvimento de sistemas, arquitetura de
                software, bancos de dados, engenharia de requisitos e
                metodologias ágeis.
              </p>
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-3 font-display font-extrabold text-3xl mb-10">
              <CertificateIcon size={32} className="text-primary" />
              <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
                Certificações
              </span>
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-black-700 rounded-xl border border-transparent transition-all duration-300 hover:border-primary"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 rounded-xl transition hover:bg-black-600"
                    >
                      <div className="text-left">
                        <h3 className="text-white font-semibold transition-colors duration-300 hover:text-primary">
                          {cert.title}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          {cert.org} • {cert.year}
                        </p>
                      </div>

                      <span className="flex items-center justify-center text-primary">
                        {isOpen ? (
                          <CaretUpIcon size={22} />
                        ) : (
                          <CaretDownIcon size={22} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCertificationsSection;
