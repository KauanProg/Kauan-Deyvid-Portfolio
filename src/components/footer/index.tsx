import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  // InstagramLogoIcon,
  EnvelopeSimpleIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-black-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src="/logo.svg" alt="Kauan Deyvid" className="h-8 w-auto mb-3" />

          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Desenvolvedor focado em criar soluções digitais modernas, escaláveis
            e com excelente experiência do usuário.
          </p>

          <div className="flex gap-4 mt-6">
            <SocialLink
              href="https://github.com/KauanProg"
              icon={<GithubLogoIcon size={18} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/kauan-deyvid/"
              icon={<LinkedinLogoIcon size={18} />}
            />
            {/* <SocialLink
              href="https://www.instagram.com/kauandeyvid"
              icon={<InstagramLogoIcon size={18} />}
            /> */}
          </div>
        </div>

        <FooterColumn
          title="Navegação"
          links={[
            { label: "Início", href: "/" },
            { label: "Serviços", href: "/#servicos" },
            { label: "Projetos", href: "/#projetos" },
            // { label: "Contato", href: "/#contato" },
          ]}
        />

        <FooterColumn
          title="Serviços"
          links={[
            { label: "Desenvolvimento Web", href: "/#servicos" },
            { label: "APIs & Back-end", href: "/#servicos" },
            { label: "Aplicativos Mobile", href: "/#servicos" },
            { label: "UX/UI Design", href: "/#servicos" },
          ]}
        />
      </div>

      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-400">
          <a
            href="mailto:kauandeyvid3@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <EnvelopeSimpleIcon size={14} />
            kauandeyvid3@gmail.com
          </a>

          <a
            href="https://wa.me/5588997620137"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <WhatsappLogoIcon size={14} />
            +55 (88) 99762-0137
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Kauan Deyvid. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

type FooterLink = {
  label: string;
  href: string;
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h4 className="text-white text-sm font-semibold mb-4">{title}</h4>

    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-primary transition"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-9 h-9
      flex items-center justify-center
      rounded-full
      border border-white/10
      text-gray-400
      transition
      hover:border-primary
      hover:text-primary
    "
  >
    {icon}
  </a>
);
