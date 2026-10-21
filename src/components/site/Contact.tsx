import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <p className="eyebrow">Contato</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Vamos conversar sobre seus objetivos?
        </h2>
        <p className="mt-5 text-muted-foreground">Entre em contato para conhecer melhor as opções de acompanhamento.</p>
        <div className="mt-9 flex flex-col items-center gap-5">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary h-14 w-full px-10 sm:w-auto">
            Fale com a Simone
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2 text-foreground hover:text-primary">
            <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden /> {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
