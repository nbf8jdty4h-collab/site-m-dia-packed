import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles, Palette, Image as ImageIcon, Brush, Type, ShoppingCart, CreditCard,
  Download, Check, X, Star, ChevronDown, ArrowRight, Zap, MessageCircle,
} from "lucide-react";
import { CAKTO_LINKS, DISCORD_URL } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mídia Packed — A maior biblioteca de design do Discord" },
      { name: "description", content: "Mais de 60GB de recursos profissionais: logos, thumbnails, brushes, fontes, LUTs, presets e mais. Acesso vitalício." },
      { property: "og:title", content: "Mídia Packed — A maior biblioteca de design do Discord" },
      { property: "og:description", content: "Mais de 60GB de recursos premium para designers e editores. Acesso vitalício." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Landing() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <Benefits />
      <HowItWorks />
      <Plans />
      <Compare />
      <Testimonials />
      <DiscordSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg btn-neon grid place-items-center glow-neon">
        <Sparkles className="h-4 w-4" />
      </div>
      <span className="font-display font-bold tracking-tight text-lg">Mídia Packed</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
          <a href="#planos" className="hover:text-white transition">Planos</a>
          <a href="#avaliacoes" className="hover:text-white transition">Avaliações</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <a href="#planos" className="btn-neon btn-neon-hover rounded-full px-4 py-2 text-sm font-semibold">
          Quero entrar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-20 px-4">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-graphite/60 backdrop-blur px-4 py-1.5 text-xs sm:text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-neon" />
          <span>+60GB de conteúdo</span>
          <span className="text-neon">•</span>
          <span>Acesso Vitalício</span>
        </motion.div>

        <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight uppercase">
          A MAIOR BIBLIOTECA DE{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>
            DESIGN DO DISCORD
          </span>
        </motion.h1>

        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Mais de 60GB de recursos profissionais para designers, criadores de conteúdo e editores
          que querem produzir trabalhos de alto nível com materiais prontos e organizados.
        </motion.p>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#planos" className="btn-neon btn-neon-hover rounded-full px-7 py-3.5 font-semibold inline-flex items-center justify-center gap-2">
            <Zap className="h-4 w-4" /> Quero Entrar Agora
          </a>
          <a href="#beneficios" className="btn-ghost-dark rounded-full px-7 py-3.5 font-semibold inline-flex items-center justify-center gap-2">
            Ver Conteúdo <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-14">
          <StatsInline />
        </motion.div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "+2.500", label: "Arquivos" },
  { value: "+8.000", label: "Downloads" },
  { value: "+100", label: "Avaliações" },
  { value: "99%", label: "Satisfação" },
];

function StatsInline() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {STATS.map((s) => (
        <div key={s.label} className="card-graphite grain px-4 py-5 text-center">
          <div className="text-2xl sm:text-3xl font-black" style={{ backgroundImage: "var(--gradient-neon)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {s.value}
          </div>
          <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function Stats() { return null; }

const BENEFITS = [
  { icon: Palette, title: "Logos", desc: "Mais de 200 logos premium." },
  { icon: ImageIcon, title: "Thumbnails", desc: "Mais de 500 templates." },
  { icon: Brush, title: "Brushes", desc: "Mais de 300 brushes." },
  { icon: Type, title: "Fontes", desc: "Mais de 700 fontes." },
];

function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">Benefícios</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase">TUDO QUE VOCÊ PRECISA EM UM ÚNICO LUGAR</h2>
          <p className="mt-4 text-muted-foreground">Uma biblioteca curada, organizada e pronta para acelerar seu fluxo de trabalho.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((b, i) => (
            <motion.div key={b.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="card-graphite grain p-6 group">
              <div className="h-12 w-12 rounded-xl btn-neon grid place-items-center glow-neon group-hover:scale-110 transition-transform">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Escolha o pack ideal", desc: "Design, Edição ou Combo completo.", icon: Sparkles },
  { n: "02", title: "Clique em Comprar", desc: "Selecione o pack e siga para o checkout.", icon: ShoppingCart },
  { n: "03", title: "Finalize o pagamento", desc: "Pagamento 100% seguro pela Cakto.", icon: CreditCard },
  { n: "04", title: "Receba acesso imediatamente", desc: "Download liberado na hora, acesso vitalício.", icon: Download },
];

function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">Como funciona</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase">COMECE EM APENAS QUATRO PASSOS</h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/40 to-transparent" />
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <motion.div key={s.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative pl-16 sm:pl-20">
                <div className="absolute left-0 top-0 h-12 w-12 sm:h-16 sm:w-16 rounded-2xl btn-neon glow-neon grid place-items-center">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="card-graphite grain p-5">
                  <div className="text-xs font-mono text-neon">ETAPA {s.n}</div>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="planos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">Planos</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase">ESCOLHA O PACK IDEAL PARA VOCÊ</h2>
          <p className="mt-4 text-muted-foreground">Compre apenas o que precisa, ou leve tudo com o combo.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
          <PlanCard
            productKey="design"
            title="Pack de Design"
            price="R$ 27,90"
            items={["Logos", "Thumbnails", "Banners", "PSDs", "Mockups", "Brushes", "Fontes", "Texturas", "Gradientes", "Overlays"]}
            cta="Comprar Pack de Design"
          />
          <PlanCard
            productKey="combo"
            title="Combo Mídia Packed"
            price="R$ 54,90"
            highlighted
            items={["Pack de Design + Pack de Edição", "Acesso vitalício", "Todos os recursos incluídos", "Atualizações futuras", "Suporte prioritário"]}
            cta="Comprar Combo"
            note="Economize R$ 0,90 comprando o combo."
            description="Leve o Pack de Design + Pack de Edição em uma única compra e tenha acesso ao conteúdo completo da Mídia Packed."
          />
          <PlanCard
            productKey="edicao"
            title="Pack de Edição"
            price="R$ 27,90"
            items={["Presets", "LUTs", "Overlays", "Assets", "Recursos Premium", "Elementos", "Efeitos", "Transições"]}
            cta="Comprar Pack de Edição"
          />
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  productKey, title, price, items, cta, highlighted, note, description,
}: {
  productKey: "design" | "edicao" | "combo";
  title: string; price: string; items: string[]; cta: string;
  highlighted?: boolean; note?: string; description?: string;
}) {
  return (
    <motion.div {...fadeUp}
      className={`relative card-graphite grain p-7 flex flex-col ${highlighted ? "md:scale-[1.04] md:-my-2" : ""}`}
      style={highlighted ? { borderColor: "oklch(0.62 0.28 300 / 80%)", boxShadow: "var(--shadow-glow-strong)" } : undefined}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="btn-neon rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1">
            🔥 Melhor Oferta
          </div>
        </div>
      )}
      <div className="text-sm uppercase tracking-[0.15em] text-neon font-semibold">{highlighted ? "Combo" : "Pack"}</div>
      <h3 className="mt-2 text-2xl font-black uppercase">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-black" style={{ backgroundImage: "var(--gradient-neon)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{price}</span>
        <span className="text-xs text-muted-foreground">/ vitalício</span>
      </div>
      {note && <div className="mt-2 text-xs text-neon font-medium">{note}</div>}
      <ul className="mt-6 space-y-2.5 flex-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-neon shrink-0 mt-0.5" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a href={CAKTO_LINKS[productKey]} target="_blank" rel="noopener noreferrer"
        className={`mt-7 rounded-full px-6 py-3 font-bold text-center inline-flex items-center justify-center gap-2 uppercase ${highlighted ? "btn-neon btn-neon-hover glow-strong" : "btn-neon btn-neon-hover"}`}>
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

const COMPARE_ROWS: [string, boolean, boolean, boolean][] = [
  ["Logos", true, false, true],
  ["Thumbnails", true, false, true],
  ["Brushes", true, false, true],
  ["Fontes", true, false, true],
  ["Texturas", true, false, true],
  ["Presets", false, true, true],
  ["LUTs", false, true, true],
  ["Transições", false, true, true],
  ["Assets", false, true, true],
  ["Todos os recursos", false, false, true],
];

function Compare() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">Compare</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase">O QUE TEM EM CADA PACK</h2>
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 card-graphite grain overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="p-4 font-semibold text-muted-foreground">Recurso</th>
                  <th className="p-4 font-semibold text-center">Design</th>
                  <th className="p-4 font-semibold text-center">Edição</th>
                  <th className="p-4 font-semibold text-center">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>Combo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([label, a, b, c]) => (
                  <tr key={label} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-medium">{label}</td>
                    <Cell on={a} /><Cell on={b} /><Cell on={c} highlight />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function Cell({ on, highlight }: { on: boolean; highlight?: boolean }) {
  return (
    <td className={`p-4 text-center ${highlight ? "bg-neon/5" : ""}`}>
      {on ? <Check className="h-5 w-5 inline text-neon" /> : <X className="h-5 w-5 inline text-muted-foreground/50" />}
    </td>
  );
}

const REVIEWS = [
  { name: "Lucas Rodrigues", role: "Designer", text: "Os materiais são extremamente organizados e facilitaram muito meu fluxo de trabalho." },
  { name: "Ana Clara", role: "Designer Freelancer", text: "Valeu cada centavo. A qualidade dos arquivos supera minhas expectativas." },
  { name: "Gabriel Martins", role: "Criador de Conteúdo", text: "Hoje consigo produzir artes muito mais rápidas graças aos packs." },
  { name: "Mariana Souza", role: "Social Media", text: "O combo realmente compensa. Tem praticamente tudo que eu precisava." },
  { name: "João Victor", role: "Designer", text: "Biblioteca completa, organizada e muito fácil de usar." },
];

function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">Depoimentos</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase">MAIS DE 100 AVALIAÇÕES POSITIVAS</h2>
        </motion.div>

        <div className="mt-12 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {REVIEWS.map((r) => (
              <motion.div key={r.name} {...fadeUp}
                className="card-graphite grain p-6 min-w-[280px] sm:min-w-[340px] snap-start">
                <div className="flex gap-1 text-neon">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "O acesso é vitalício?", a: "Sim. Uma única compra dá acesso vitalício ao conteúdo escolhido, sem mensalidades." },
  { q: "Como recebo os arquivos?", a: "Assim que a compra é confirmada, você recebe acesso imediato à biblioteca completa via Discord." },
  { q: "Posso baixar quando quiser?", a: "Sim, todos os arquivos ficam disponíveis para download quantas vezes você precisar." },
  { q: "Receberei futuras atualizações?", a: "Sim. Novos pacotes e atualizações são adicionados regularmente e liberados para você automaticamente." },
  { q: "Existe suporte?", a: "Sim, oferecemos suporte direto pelo Discord para dúvidas e ajuda com os materiais." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">FAQ</div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase">PERGUNTAS FREQUENTES</h2>
        </motion.div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="card-graphite grain overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-neon shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DiscordSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto card-graphite grain p-8 sm:p-12 text-center relative overflow-hidden glow-strong"
        style={{ borderColor: "oklch(0.62 0.28 300 / 60%)" }}>
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <motion.div {...fadeUp} className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-graphite/60 backdrop-blur px-4 py-1.5 text-xs text-neon font-semibold uppercase tracking-wider">
            <MessageCircle className="h-3.5 w-3.5" /> Comunidade
          </div>
          <h2 className="mt-5 text-3xl sm:text-5xl font-black uppercase">
            ENTRE PARA A COMUNIDADE DA{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-neon)" }}>MÍDIA PACKED</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Entre no servidor oficial da Mídia Packed para receber novidades, suporte, atualizações dos packs e fazer parte da comunidade.
          </p>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
            className="mt-8 btn-neon btn-neon-hover rounded-full px-8 py-4 font-black uppercase inline-flex items-center justify-center gap-2 glow-strong">
            <MessageCircle className="h-5 w-5" /> ENTRAR NO DISCORD
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto card-graphite grain p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <motion.div {...fadeUp} className="relative">
          <h2 className="text-3xl sm:text-5xl font-black uppercase">ESCOLHA O PACK IDEAL PARA VOCÊ</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Compre apenas o que precisa ou aproveite o Combo Mídia Packed para ter acesso completo aos dois packs com o melhor custo-benefício.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CAKTO_LINKS.design} target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-hover rounded-full px-6 py-3 font-bold uppercase">Comprar Pack de Design</a>
            <a href={CAKTO_LINKS.edicao} target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-hover rounded-full px-6 py-3 font-bold uppercase">Comprar Pack de Edição</a>
            <a href={CAKTO_LINKS.combo} target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-hover rounded-full px-6 py-3 font-bold uppercase glow-strong">Comprar Combo</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A maior biblioteca de design do Discord. Recursos premium, acesso vitalício.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Navegação</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-neon transition">Início</a></li>
            <li><a href="#beneficios" className="hover:text-neon transition">Benefícios</a></li>
            <li><a href="#planos" className="hover:text-neon transition">Planos</a></li>
            <li><a href="#avaliacoes" className="hover:text-neon transition">Avaliações</a></li>
            <li><a href="#faq" className="hover:text-neon transition">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Contato</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Tire dúvidas, receba suporte e novidades direto no nosso servidor.
          </p>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
            className="mt-4 btn-neon btn-neon-hover rounded-full px-4 py-2.5 text-sm font-bold uppercase inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> ENTRAR NO DISCORD
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Comprar</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={CAKTO_LINKS.design} target="_blank" rel="noopener noreferrer" className="hover:text-neon transition">Pack de Design</a></li>
            <li><a href={CAKTO_LINKS.edicao} target="_blank" rel="noopener noreferrer" className="hover:text-neon transition">Pack de Edição</a></li>
            <li><a href={CAKTO_LINKS.combo} target="_blank" rel="noopener noreferrer" className="hover:text-neon transition">Combo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-muted-foreground text-center">
          © 2026 Mídia Packed. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
