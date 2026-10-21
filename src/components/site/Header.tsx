import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, WHATSAPP_URL } from "@/lib/contact";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a href="#inicio" className="min-w-0 leading-none">
          <span className="block font-serif text-xl text-foreground md:text-2xl">Simone Machado</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
            Personal Trainer
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary h-10 px-5 text-sm">
            WhatsApp
          </a>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="menu-movel" aria-label="Menu móvel" className="border-t border-border bg-background px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 font-serif text-lg text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 h-12 w-full">
            Fale comigo pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
