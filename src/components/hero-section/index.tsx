import {
  DownloadSimpleIcon,
  FolderOpenIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";

import Blob from "/blob.svg";
import Profile from "/minha-foto-2.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-white pt-20 md:pt-0"
      id="inicio"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-100 font-medium text-sm">
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
              Olá, eu sou
            </span>
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
              Kauan Deyvid
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Desenvolvedor Full-Stack
          </h2>

          <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções elegantes e
            eficientes. Atualmente cursando Engenharia de Software na UFC,
            combino conhecimento acadêmico com experiência prática para entregar
            aplicações web e mobile de alto nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#projetos"
              className="
                flex items-center justify-center gap-2
                w-full sm:w-auto
                bg-linear-to-r from-primary to-[#991519]
                text-white px-6 py-3 rounded-lg shadow
                hover:opacity-90 transition
              "
            >
              <FolderOpenIcon size={20} weight="bold" />
              Ver Projetos
            </a>

            <a
              href="/KAUAN DEYVID BEZERRA DE SOUSA - CURRÍCULO.pdf"
              download
              className="
                flex items-center justify-center gap-2
                w-full sm:w-auto
                border border-primary text-primary px-6 py-3 rounded-lg
                hover:bg-linear-to-r hover:from-primary hover:to-[#991519] hover:text-white
                transition
              "
            >
              <DownloadSimpleIcon size={20} weight="bold" />
              Baixar currículo
            </a>
          </div>

          <div className="flex gap-4">
            {[
              {
                icon: <GithubLogoIcon size={22} />,
                link: "https://github.com/KauanProg",
                external: true,
              },
              {
                icon: <LinkedinLogoIcon size={22} />,
                link: "https://www.linkedin.com/in/kauan-deyvid/",
                external: true,
              },
              {
                icon: <EnvelopeSimpleIcon size={22} />,
                link: "mailto:kauandeyvid3@gmail.com",
                external: false,
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="
                  w-12 h-12 flex items-center justify-center
                  rounded-xl bg-gray-100 text-gray-700
                  hover:bg-linear-to-r hover:from-primary hover:to-[#991519]
                  hover:text-white
                  transition
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-72 h-72
                md:w-80 md:h-80
                lg:w-135 lg:h-135
                flex items-center justify-center
              "
            >
              <img
                src={Blob}
                alt="Blob decorativo"
                className="absolute inset-0 w-full h-full"
              />

              <img
                src={Profile}
                alt="Foto de perfil"
                className="
                  relative
                  w-56 h-56
                  md:w-64 md:h-64
                  lg:w-88 lg:h-88
                  object-cover
                  rounded-full
                  border-4 border-white
                  shadow-2xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
