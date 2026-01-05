import {
  QuotesIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";

const testimonials = [
  {
    text: "Um profissional extremamente dedicado e com um conhecimento técnico sólido. Recomendo fortemente para qualquer projeto complexo.",
    name: "Carlos Eduardo",
    role: "Tech Lead",
  },
  {
    text: "A atenção aos detalhes na interface do usuário fez toda a diferença no nosso produto. O Kauan tem um ótimo olho para design.",
    name: "Fernanda Lima",
    role: "Product Owner",
  },
  {
    text: "Entrega rápida, código bem organizado e excelente comunicação durante todo o projeto.",
    name: "Marcos Vinícius",
    role: "Founder",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white-300" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-secondary font-extrabold mb-2">
            Depoimentos
          </h2>
          <p className="text-gray-600">O que dizem sobre meu trabalho</p>
          <div className="w-14 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative flex items-center justify-center gap-6">

          <button
            className="
              hidden md:flex
              w-12 h-12
              shrink-0
              items-center justify-center
              rounded-full
              border border-gray-300
              text-gray-500
              transition-all duration-300
              hover:bg-primary
              hover:border-primary
              hover:text-white
            "
          >
            <ArrowLeftIcon size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-xl
                  border border-gray-200
                  p-6
                  transition-all duration-300
                  hover:bg-linear-to-r
                  hover:from-primary
                  hover:to-[#991519]
                  hover:border-transparent
                  hover:-translate-y-1
                "
              >
                <QuotesIcon
                  size={26}
                  weight="duotone"
                  className="
                    text-primary mb-4
                    transition-colors duration-300
                    group-hover:text-white
                  "
                />

                <p
                  className="
                    text-gray-700 text-sm leading-relaxed mb-6
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  “{item.text}”
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-11 h-11
                      rounded-full
                      bg-gray-100
                      border border-gray-200
                      flex items-center justify-center
                      text-sm font-semibold text-gray-700
                      transition-all duration-300
                      group-hover:bg-white
                      group-hover:text-primary
                      group-hover:border-white
                    "
                  >
                    {getInitials(item.name)}
                  </div>

                  <div>
                    <p
                      className="
                        text-sm font-semibold text-gray-900
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    >
                      {item.name}
                    </p>

                    <span
                      className="
                        text-xs text-gray-500
                        transition-colors duration-300
                        group-hover:text-white/80
                      "
                    >
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="
              hidden md:flex
              w-12 h-12
              shrink-0
              items-center justify-center
              rounded-full
              border border-gray-300
              text-gray-500
              transition-all duration-300
              hover:bg-primary
              hover:border-primary
              hover:text-white
            "
          >
            <ArrowRightIcon size={24} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
