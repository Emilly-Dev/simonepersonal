import { formatBRL, whatsappLink } from "@/lib/contact";

type PlanOption = {
  price: number;
  perWeek?: number;
  perMonth?: number;
  label?: string;
  sub?: string;
  suffix?: string;
  message?: string;
  aria?: string;
};

type Plan = {
  name: string;
  key: string;
  options: PlanOption[];
};

export const PLANS: Plan[] = [
  {
    name: "Mensal",
    key: "mensal",
    options: [
      { price: 549.9, perWeek: 2, perMonth: 8 },
      { price: 699.9, perWeek: 3, perMonth: 12 },
    ],
  },
  {
    name: "Trimestral",
    key: "trimestral",
    options: [
      { price: 649.9, perWeek: 2, perMonth: 8 },
      { price: 599.9, perWeek: 3, perMonth: 12 },
    ],
  },
  {
    name: "Híbrido",
    key: "híbrido",
    options: [
      {
        price: 299.9,
        label: "1 aula presencial por semana",
        sub: "4 dias de treino guiado por aplicativo",
        suffix: "/mês",
        message: "Olá, Simone! Gostaria de saber mais sobre o plano Híbrido.",
        aria: "Consultar plano híbrido",
      },
    ],
  },
];

export function planMessage(plan: string, perWeek: number) {
  const noun = perWeek === 1 ? "treino" : "treinos";
  return `Olá, Simone! Gostaria de saber mais sobre o plano ${plan} com ${perWeek} ${noun} por semana.`;
}

function optionLabel(o: PlanOption) {
  return o.label ?? `${o.perWeek} vezes por semana`;
}

function optionSub(o: PlanOption) {
  return o.sub ?? `${o.perMonth} aulas por mês`;
}

function optionMessage(o: PlanOption, plan: Plan) {
  return o.message ?? planMessage(plan.key, o.perWeek ?? 0);
}

function optionAria(o: PlanOption, plan: Plan) {
  return o.aria ?? `Consultar plano ${plan.key}, ${o.perWeek} vezes por semana`;
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
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.key}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-7 xl:p-9"
            >
              <header className="border-b border-border pb-5">
                <h3 className="font-serif text-2xl text-foreground md:text-3xl">Plano {plan.name}</h3>
              </header>
              <ul className="flex flex-1 flex-col divide-y divide-border">
                {plan.options.map((o) => (
                  <li key={o.price} className="flex flex-1 flex-col py-7">
                    {o.label ? (
                      <div>
                        <p className="font-semibold text-foreground">{o.label}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{o.sub}</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground">{optionLabel(o)}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{optionSub(o)}</p>
                        </div>
                        <p className="whitespace-nowrap font-serif text-3xl text-foreground md:text-4xl">
                          {formatBRL(o.price)}
                        </p>
                      </div>
                    )}
                    <div aria-hidden className="hidden md:block md:flex-1" />
                    {o.label ? (
                      <p className="mt-6 whitespace-nowrap font-serif text-3xl text-foreground md:text-4xl">
                        {formatBRL(o.price)}
                        {o.suffix ? (
                          <span className="ml-1 align-middle font-sans text-sm font-medium text-muted-foreground">
                            {o.suffix}
                          </span>
                        ) : null}
                      </p>
                    ) : null}

                    <a
                      href={whatsappLink(optionMessage(o, plan))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline mt-5 h-11 w-full text-sm"
                      aria-label={optionAria(o, plan)}
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
