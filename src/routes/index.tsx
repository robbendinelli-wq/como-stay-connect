import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  Building2,
  CalendarCheck,
  Camera,
  KeyRound,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import heroComo from "@/assets/hero-como.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affitti Brevi Como | Consulenza e Gestione Immobili sul Lago" },
      {
        name: "description",
        content:
          "Gestione professionale di affitti brevi a Como e sul Lago. Consulenza, ottimizzazione annunci e gestione completa del tuo immobile. Contattaci per una valutazione gratuita.",
      },
      { name: "keywords", content: "affitti brevi Como, gestione immobili Como, property management Lago di Como, affitti turistici Como" },
      { property: "og:title", content: "Affitti Brevi Como | Consulenza e Gestione Immobili" },
      {
        property: "og:description",
        content:
          "Gestione professionale di affitti brevi a Como e sul Lago. Contattaci per una valutazione gratuita del tuo immobile.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroComo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroComo },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: MessageCircle,
    title: "Consulenza Affitti Brevi",
    text: "Analizziamo il tuo immobile e il mercato di Como per definire la strategia di affitto più redditizia, in piena regola con le normative locali.",
  },
  {
    icon: KeyRound,
    title: "Gestione Completa",
    text: "Pensiamo a tutto: check-in e check-out, pulizie, biancheria, assistenza agli ospiti 7 giorni su 7. Tu ricevi solo le rendite.",
  },
  {
    icon: LineChart,
    title: "Ottimizzazione & Pricing",
    text: "Annunci professionali, prezzi dinamici e gestione multi-piattaforma (Airbnb, Booking, Vrbo) per massimizzare il tasso di occupazione.",
  },
];

const steps = [
  { icon: MapPin, title: "Valutazione", text: "Sopralluogo e analisi del potenziale del tuo immobile a Como." },
  { icon: Camera, title: "Allestimento", text: "Servizio fotografico, home staging e creazione degli annunci." },
  { icon: CalendarCheck, title: "Pubblicazione", text: "Online su tutte le piattaforme con calendario e prezzi sincronizzati." },
  { icon: Sparkles, title: "Gestione", text: "Ospiti, pulizie e assistenza gestiti da noi. Tu monitori i guadagni." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhySection />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-accent" />
          <span className="font-display text-2xl font-semibold tracking-tight">Lario Affitti Brevi</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servizi" className="transition-colors hover:text-foreground">Servizi</a>
          <a href="#perche" className="transition-colors hover:text-foreground">Perché noi</a>
          <a href="#processo" className="transition-colors hover:text-foreground">Come funziona</a>
        </nav>
        <a
          href="#contatti"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Contattaci
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroComo}
        alt="Vista del Lago di Como con ville e giardini al tramonto"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-deep)] opacity-90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-28 md:py-40">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-light-teal/40 bg-white/10 px-4 py-1.5 text-sm font-medium text-light-teal backdrop-blur">
          <MapPin className="h-4 w-4" /> Como e Lago di Como
        </span>
        <h1 className="max-w-3xl text-5xl leading-[1.05] text-white md:text-7xl">
          Il tuo immobile sul Lago, gestito con cura.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Consulenza e gestione completa di affitti brevi a Como. Massimizziamo le tue rendite mentre
          tu ti godi il tuo tempo, senza pensieri.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#contatti"
            className="rounded-md bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            Richiedi una valutazione gratuita
          </a>
          <a
            href="#servizi"
            className="rounded-md border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Scopri i servizi
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servizi" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">I nostri servizi</p>
        <h2 className="text-4xl md:text-5xl">Tutto ciò che serve al tuo affitto breve</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex rounded-lg bg-secondary p-3 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <s.icon className="h-7 w-7" />
            </div>
            <h3 className="text-2xl">{s.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  const points = [
    "Conoscenza profonda del mercato di Como e del Lago",
    "Trasparenza totale: report e rendite sempre sotto controllo",
    "Ospiti selezionati e immobile tutelato",
    "Gestione conforme alle normative su affitti turistici",
  ];
  return (
    <section id="perche" className="bg-secondary/50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
          <img
            src={apartmentInterior}
            alt="Interno elegante di un appartamento per affitti brevi a Como con vista lago"
            width={1200}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Perché sceglierci</p>
          <h2 className="text-4xl md:text-5xl">Rendite più alte, zero stress</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ci occupiamo di ogni dettaglio del tuo immobile, dalla strategia di prezzo all'accoglienza
            degli ospiti, così tu puoi affidare il tuo appartamento a chi conosce davvero Como.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Come funziona</p>
        <h2 className="text-4xl md:text-5xl">Semplice in quattro passi</h2>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-xl border border-border bg-card p-7">
            <span className="font-display text-5xl font-semibold text-accent/30">0{i + 1}</span>
            <s.icon className="mt-2 h-7 w-7 text-accent" />
            <h3 className="mt-4 text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "+30%", label: "rendita media rispetto all'affitto tradizionale" },
    { value: "24/7", label: "assistenza agli ospiti" },
    { value: "100%", label: "gestione conforme alle normative" },
  ];
  return (
    <section className="bg-[var(--gradient-deep)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-5xl font-semibold text-light-teal md:text-6xl">{s.value}</p>
            <p className="mt-2 text-sm text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState<"consulenza" | "gestione">("consulenza");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setLoading(true);
    try {
      await submit({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          requestType,
          message: String(fd.get("message") || ""),
        },
      });
      toast.success("Messaggio inviato! Ti ricontatteremo al più presto.");
      form.reset();
      setRequestType("consulenza");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Si è verificato un errore. Riprova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contatti" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:grid-cols-2 md:p-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contatti</p>
          <h2 className="text-4xl md:text-5xl">Parliamo del tuo immobile</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Compila il modulo per richiedere una consulenza o affidarci la gestione del tuo immobile a
            Como. Ti rispondiamo entro 24 ore, senza impegno.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3 text-foreground/90">
              <Mail className="h-5 w-5 text-accent" /> info@larioaffittibrevi.it
            </p>
            <p className="flex items-center gap-3 text-foreground/90">
              <Phone className="h-5 w-5 text-accent" /> +39 000 000 0000
            </p>
            <p className="flex items-center gap-3 text-foreground/90">
              <MapPin className="h-5 w-5 text-accent" /> Como, Lombardia
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Nome e cognome</label>
            <input
              id="name" name="name" required maxLength={100}
              className="rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email" name="email" type="email" required maxLength={255}
                className="rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">Telefono <span className="text-muted-foreground">(facoltativo)</span></label>
              <input
                id="phone" name="phone" maxLength={40}
                className="rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <span className="text-sm font-medium">Di cosa hai bisogno?</span>
            <div className="grid grid-cols-2 gap-3">
              {([
                { v: "consulenza", l: "Consulenza" },
                { v: "gestione", l: "Gestione immobile" },
              ] as const).map((o) => (
                <button
                  key={o.v} type="button" onClick={() => setRequestType(o.v)}
                  className={`rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                    requestType === o.v
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-input bg-background hover:border-accent"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
            <textarea
              id="message" name="message" required rows={4} maxLength={2000}
              placeholder="Raccontaci del tuo immobile (zona, dimensioni, situazione attuale)..."
              className="resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <button
            type="submit" disabled={loading}
            className="w-full rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? "Invio in corso..." : "Invia richiesta"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-accent" />
          <span className="font-display text-lg font-semibold text-foreground">Lario Affitti Brevi</span>
        </div>
        <p>© {new Date().getFullYear()} Lario Affitti Brevi · Como, Lago di Como</p>
      </div>
    </footer>
  );
}
