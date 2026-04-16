import { MessageCircle } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";
import { siteContent } from "@/content/siteContent";

const whatsappHref = "https://wa.me/557583459255";

const BookingSection = () => {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 z-0">
        <img src={gallery3} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-4xl text-foreground sm:text-5xl md:text-7xl">
            LEVE O <span className="text-gradient-gold">{siteContent.brand.name.toUpperCase()}</span>
            <br />
            PARA SEU EVENTO
          </h2>
          <p className="mb-12 text-lg text-foreground/60">
            Fale direto com a producao e solicite seu orcamento pelo WhatsApp.
          </p>

          <div className="mx-auto mb-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#25d366] px-6 py-4 text-lg font-bold uppercase tracking-wider text-[#07140b] transition-all hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <a
              href={siteContent.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border-2 border-foreground/20 py-4 text-center text-lg font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary"
            >
              Abrir Instagram
            </a>
          </div>

          <div className="mx-auto grid max-w-3xl gap-4 text-left md:grid-cols-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/50"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">WhatsApp</p>
              <p className="font-medium text-foreground">+55 75 8345-9255</p>
            </a>
            <a
              href={siteContent.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/50"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Instagram</p>
              <p className="font-medium text-foreground">{siteContent.contact.instagramHandle}</p>
            </a>
            <a
              href={siteContent.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card/60 p-5 transition-all hover:border-primary/50"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Canal</p>
              <p className="font-medium text-foreground">YouTube oficial</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
