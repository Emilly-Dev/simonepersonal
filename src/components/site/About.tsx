const credentials = [
  ["Formação", "Bacharel em Educação Física"],
  ["Especialização", "Nutrição Clínica, Esportiva e Estética"],
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-nude/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <div>
          <p className="eyebrow">Sobre Simone</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Cuidado, planejamento e movimento.
          </h2>
        </div>
        <div className="min-w-0">
          <p className="text-lg leading-relaxed text-foreground/85">
            Meu trabalho é voltado ao treinamento personalizado, com planejamento de acordo com os objetivos e as possibilidades de cada aluno. A proposta é oferecer orientação, acompanhamento e uma rotina de exercícios pensada de forma individualizada.
          </p>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            <div className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Profissional</dt>
              <dd className="text-foreground">Simone Machado — Personal Trainer</dd>
            </div>
            {credentials.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                <dd className="text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
