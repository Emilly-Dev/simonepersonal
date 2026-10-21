import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-8 md:pb-24 md:pt-16">
        <div className="min-w-0">
          <p className="eyebrow">Treinamento personalizado</p>
          <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.08] text-foreground sm:text-5xl lg:text-[4rem]">
            Seu objetivo merece um plano <em className="text-primary">feito para você.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Treinamento individualizado, planejamento e acompanhamento para ajudar você a cuidar da sua saúde e evoluir respeitando seus objetivos e suas possibilidades.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#planos" className="btn-primary h-12 px-7">Conheça os planos</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline h-12 px-7">
              Fale comigo pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div aria-hidden className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-blush md:-right-6 md:-top-6" />
          <figure className="relative overflow-hidden rounded-[2rem] bg-nude">
            <img
              src="/simone-machado.jpg"
              alt="Simone Machado, personal trainer, sorrindo"
              className="aspect-[4/5] w-full object-cover object-[60%_30%]"
              width={1080}
              height={1080}
            />
          </figure>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-background px-5 py-3">
            <p className="font-serif text-lg leading-tight text-foreground">Simone Machado</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Personal Trainer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
