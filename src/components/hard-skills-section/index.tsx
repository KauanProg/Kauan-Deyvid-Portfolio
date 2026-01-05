import { useState } from "react";

const categories = [
  "Linguagens",
  "Front-end",
  "Back-end",
  "Mobile",
  "Banco de Dados",
  "Ferramentas",
];

const skillsByCategory: Record<string, { name: string; icon: string }[]> = {
  Linguagens: [
    { name: "TypeScript", icon: "/icons/TypeScript.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "Dart", icon: "/icons/Dart.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
  ],
  "Front-end": [
    { name: "React", icon: "/icons/ReactJS.svg" },
    { name: "ElectronJS", icon: "/icons/ElectronJS.svg" },
    { name: "Vite", icon: "/icons/Vite.svg" },
    { name: "Next.js", icon: "/icons/NextJS.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind Css.svg" },
    { name: "Shadcn UI", icon: "/icons/Shadcn UI.svg" },
    { name: "Ant Design", icon: "/icons/Ant Design.svg" },
    { name: "Styled Components", icon: "/icons/Styled Components.svg" },
    { name: "CSS", icon: "/icons/CSS.svg" },
    { name: "HTML", icon: "/icons/HTML.svg" },
  ],
  "Back-end": [
    { name: "Node.js", icon: "/icons/NodeJs.svg" },
    { name: "Express.js", icon: "/icons/Express JS.svg" },
    { name: "FastAPI", icon: "/icons/FastApi.svg" },
    { name: "Prisma ORM", icon: "/icons/Prisma ORM.svg" },
  ],
  Mobile: [
    { name: "Flutter", icon: "/icons/Flutter.svg" },
    { name: "React Native", icon: "/icons/ReactJS.svg" },
  ],
  "Banco de Dados": [
    { name: "PostgreSQL", icon: "/icons/PostgreSQL.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  ],
  Ferramentas: [
    { name: "Git", icon: "/icons/Git.svg" },
    { name: "GitHub", icon: "/icons/GitHub.svg" },
    { name: "Figma", icon: "/icons/Figma.svg" },
    { name: "Trello", icon: "/icons/Trello.svg" },
    { name: "ClickUp", icon: "/icons/ClickUp.svg" },
  ],
};

const HardSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Linguagens");

  return (
    <section className="py-24 bg-gray-50" id="habilidades">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-extrabold mb-2 text-black-800">
          Habilidades{" "}
          <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
            Técnicas
          </span>
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          Tecnologias e ferramentas que utilizo para criar soluções digitais de
          alta qualidade
        </p>

        <div className="w-14 h-1 mx-auto mt-4 rounded-full bg-linear-to-r from-primary to-[#991519]" />

        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2
                  rounded-full
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    activeCategory === category
                      ? "bg-linear-to-r from-primary to-[#991519] text-white shadow-md shadow-primary/30"
                      : "bg-gray-100 text-gray-700 hover:bg-linear-to-r hover:from-primary hover:to-[#991519] hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsByCategory[activeCategory].map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="
                    group
                    min-w-73
                    min-h-38
                    bg-black-800
                    border border-black-600
                    rounded-xl
                    px-6 py-4
                    transition-all duration-300
                    hover:border-primary
                    flex flex-col items-center justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      w-11 h-11 mb-2
                      flex items-center justify-center
                      rounded-lg
                      border border-black-600
                      bg-transparent
                      transition-all duration-300
                      group-hover:bg-primary
                      group-hover:border-primary
                    "
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  <p
                    className="
                      text-sm font-semibold text-white
                      transition-colors duration-300
                      group-hover:text-primary
                    "
                  >
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardSkillsSection;
