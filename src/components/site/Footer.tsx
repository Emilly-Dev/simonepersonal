import { INSTAGRAM_URL, NAV, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-nude/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-serif text-xl text-foreground">Simone Machado</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-primary">Personal Trainer</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
        </nav>
      </div>
    </footer>
  );
}
