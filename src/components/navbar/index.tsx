import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  // { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-white border-b border-gray-200
        shadow-[5px_5px_12px_rgba(0,0,0,0.15)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Kauan Deyvid" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`
                text-sm font-medium transition-colors
                ${
                  active === link.href
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <XIcon size={28} /> : <ListIcon size={28} />}
          </button>
          <a
            href="https://wa.me/5588997620137"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-linear-to-r from-primary to-[#991519] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Contato
          </a>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`
                text-base font-medium transition-colors
                ${
                  active === link.href
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }
              `}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5588997620137"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                flex items-center justify-center
                gap-2
                bg-linear-to-r from-primary to-[#991519] text-white px-4 py-2
                rounded-lg font-medium
                hover:opacity-90 transition
              "
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
