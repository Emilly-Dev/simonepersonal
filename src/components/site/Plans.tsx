import { formatBRL, whatsappLink } from "@/lib/contact";

export const PLANS = [
  {
    name: "Mensal",
    key: "mensal",
    options: [
      { perWeek: 2, perMonth: 8, price: 500 },
      { perWeek: 3, perMonth: 12, price: 600 },
    ],
  },
  {
    name: "Trimestral",
    key: "trimestral",
    options: [
      { perWeek: 2, perMonth: 8, price: 475 },
      { perWeek: 3, perMonth: 12, price: 575 },
    ],
  },
];

export function planMessage(plan: string, perWeek: number) {
  return `Olá, Simone! Gostaria de saber mais sobre o plano ${plan} com ${perWeek} treinos por semana.`;
}

export function Plans() {
  return (
    <section id="planos" className="scroll-mt-20 bg-nude/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Planos</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Escolha o plano ideal para sua rotina.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Confira as opções de acompanhamento e entre em contato para conversar sobre o plano.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <article key={plan.key} className="rounded-3xl border border-border bg-card p-6 md:p-9">
              <header className="flex items-baseline justify-between border-b border-border pb-5">
                <h3 className="font-serif text-3xl text-foreground">Plano {plan.name}</h3>
              </header>
              <ul className="divide-y divide-border">
                {plan.options.map((o) => (
                  <li key={o.perWeek} className="py-7">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">{o.perWeek} vezes por semana</p>
                        <p className="mt-1 text-sm text-muted-foreground">{o.perMonth} aulas por mês</p>
                      </div>
                      <p className="whitespace-nowrap font-serif text-3xl text-foreground md:text-4xl">{formatBRL(o.price)}</p>
                    </div>
                    <a
                      href={whatsappLink(planMessage(plan.key, o.perWeek))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline mt-5 h-11 w-full text-sm"
                      aria-label={`Consultar plano ${plan.key}, ${o.perWeek} vezes por semana`}
                    >
                      Consultar este plano
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
