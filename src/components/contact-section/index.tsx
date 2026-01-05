import {
  EnvelopeSimpleIcon,
  WhatsappLogoIcon,
  LinkedinLogoIcon,
  PaperPlaneRightIcon,
} from "@phosphor-icons/react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-black-800" id="contato">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-display font-extrabold text-white mb-4">
            Vamos{" "}
            <span className="bg-linear-to-r from-primary to-[#991519] bg-clip-text text-transparent">
              Conversar?
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mb-10">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
            Sinta-se à vontade para entrar em contato!
          </p>

          <div className="space-y-4">
            <ContactItem
              icon={<EnvelopeSimpleIcon size={20} />}
              title="Email"
              value="kauandeyvid@example.com"
            />
            <ContactItem
              icon={<WhatsappLogoIcon size={20} />}
              title="WhatsApp"
              value="+55 (88) 99999-9999"
            />
            <ContactItem
              icon={<LinkedinLogoIcon size={20} />}
              title="LinkedIn"
              value="linkedin.com/in/kauandeyvid"
            />
          </div>
        </div>

        <form className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-5">
          <Input label="Nome" placeholder="Seu nome completo" />
          <Input label="Email" placeholder="seu.email@exemplo.com" />
          <Textarea
            label="Mensagem"
            placeholder="Olá, gostaria de conversar sobre um projeto..."
          />

          <button
            type="submit"
            className="
              w-full
              bg-linear-to-r from-primary to-[#991519]
              text-white
              font-semibold
              py-3
              rounded-lg
              flex items-center justify-center gap-2
              transition-all duration-300
              hover:opacity-90
              hover:shadow-lg hover:shadow-red-500/30
            "
          >
            Enviar Mensagem
            <PaperPlaneRightIcon size={18} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;

const ContactItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div
    className="
      group
      flex items-center gap-4
      bg-white/5
      border border-white/10
      rounded-lg
      p-4
      transition-all duration-300
      hover:border-transparent
      hover:bg-white/10
    "
  >
    <div
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-linear-to-r from-primary to-[#991519]
        text-white
        transition-all duration-300
        group-hover:scale-105
      "
    >
      {icon}
    </div>

    <div>
      <p className="text-sm text-white font-medium">{title}</p>
      <span className="text-xs text-gray-400">{value}</span>
    </div>
  </div>
);

const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <label className="text-sm text-white mb-1 block">{label}</label>
    <input
      placeholder={placeholder}
      className="
        w-full
        bg-black/40
        border border-white/10
        rounded-lg
        px-4 py-2
        text-sm text-white
        placeholder:text-gray-500
        focus:outline-none
        focus:border-red-500
      "
    />
  </div>
);

const Textarea = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <label className="text-sm text-white mb-1 block">{label}</label>
    <textarea
      rows={4}
      placeholder={placeholder}
      className="
        w-full
        bg-black/40
        border border-white/10
        rounded-lg
        px-4 py-2
        text-sm text-white
        placeholder:text-gray-500
        focus:outline-none
        focus:border-red-500
        resize-none
      "
    />
  </div>
);
