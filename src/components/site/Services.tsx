import { ClipboardList, CalendarRange, Users, Route as RouteIcon, LineChart } from "lucide-react";

const items = [
  { icon: ClipboardList, title: "Avaliação física inicial", text: "Um ponto de partida para conhecer as necessidades e os objetivos do aluno." },
  { icon: CalendarRange, title: "Planejamento do treinamento", text: "Montagem e planejamento do programa de treinamento com base nas possibilidades e nos objetivos do aluno." },
  { icon: Users, title: "Acompanhamento e orientação", text: "Acompanhamento e orientação presencial nos dias combinados." },
  { icon: RouteIcon, title: "Orientação para os dias de treino", text: "Prescrição e orientação para os dias em que o aluno não estiver na presença do personal trainer, conforme o planejamento estabelecido." },
  { icon: LineChart, title: "Avaliação periódica", text: "Acompanhamento periódico dos resultados e da evolução do planejamento." },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Como funciona o acompanhamento</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Um acompanhamento pensado para você.
          </h2>
        </div>
        <ol className="mt-14 grid gap-x-12 md:grid-cols-2">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-t border-border py-8">
              <span className="font-serif text-3xl leading-none text-primary/80">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
