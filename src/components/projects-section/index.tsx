import { useState } from "react";
import { ArrowSquareOut, GithubLogo, FolderOpen } from "@phosphor-icons/react";

const categories = ["Todos", "Web", "Mobile", "UX/UI", "Dados"];

const projects = [
  {
    title: "Resident Evil 4",
    category: "Web",
    description:
      "Landing page temática inspirada no jogo Resident Evil 4, desenvolvida com foco em layout, responsividade e interações visuais.",
    image: "/project-1.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://projeto-resident-evil-4.vercel.app/",
    github: "https://github.com/KauanProg/projeto-resident-evil-4",
  },
  {
    title: "OnBoarding",
    category: "Web",
    description:
      "Tela de onboarding responsiva com animações e transições, criada para praticar estruturação de layouts e fluxo de navegação.",
    image: "/project-2.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "on-boarding-eta.vercel.app",
    github: "https://github.com/KauanProg/OnBoarding",
  },
  {
    title: "IMC - Calculator",
    category: "Mobile",
    description:
      "Aplicativo mobile para cálculo de IMC, permitindo ao usuário inserir dados e obter resultados de forma simples e intuitiva.",
    image: "/project-3.svg",
    tags: ["React Native", "JavaScript"],
    site: "#",
    github: "https://github.com/KauanProg/imc-calculator",
  },
  {
    title: "Krypta",
    category: "Mobile",
    description:
      "Aplicativo mobile de geração de senhas desenvolvido para explorar conceitos de interface, navegação e componentização em React Native.",
    image: "/project-4.svg",
    tags: ["React Native", "JavaScript"],
    site: "#",
    github: "https://github.com/KauanProg/krypta",
  },
  {
    title: "Aquos Edu",
    category: "Mobile",
    description:
      "Aplicativo educacional para aquicultores desenvolvido em Flutter, focado em desempenho, organização de telas e experiência do usuário.",
    image: "/project-5.svg",
    tags: ["Flutter", "Dart"],
    site: "https://play.google.com/store/apps/details?id=com.aquos.aquos_edu&pcampaignid=web_share",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-24 bg-white-300" id="projetos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl font-extrabold mb-2 text-black-800">
            Meus{" "}
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Alguns projetos que demonstram minhas habilidades em desenvolvimento
            e design.
          </p>

          <div className="w-14 h-1 mx-auto mt-4 rounded-full bg-linear-to-r from-primary to-[#991519]" />
        </div>

        <div className="mb-14 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold transition
                  ${
                    activeCategory === category
                      ? "bg-linear-to-r from-primary to-[#991519] text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-linear-to-r hover:from-primary hover:to-[#991519] hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-linear-to-r from-primary/10 to-[#991519]/10 flex items-center justify-center mb-6">
              <FolderOpen
                size={36}
                className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-primary"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Nenhum projeto encontrado
            </h3>

            <p className="text-gray-500 max-w-md">
              Ainda não existem projetos cadastrados para esta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="
                  group bg-white border border-gray-200 rounded-xl
                  overflow-hidden transition
                  hover:border-transparent hover:shadow-xl
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-52 w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  />

                  {(project.site && project.site !== "#") ||
                  (project.github && project.github !== "#") ? (
                    <div
                      className="
                        absolute inset-0 bg-black/50
                        flex items-center justify-center gap-4
                        opacity-0 group-hover:opacity-100 transition
                      "
                    >
                      {project.site && project.site !== "#" && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-linear-to-r from-primary to-[#991519] text-white flex items-center justify-center"
                        >
                          <ArrowSquareOut size={20} />
                        </a>
                      )}

                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center"
                        >
                          <GithubLogo size={20} />
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <button
                    className="
                      w-full text-sm font-semibold py-2 rounded-md
                      bg-linear-to-r from-primary to-[#991519]
                      text-white hover:opacity-90 transition
                    "
                  >
                    Ver Detalhes
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
