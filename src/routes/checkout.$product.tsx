import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Shield, Download, Infinity as InfinityIcon, Star, CreditCard, Lock, Sparkles } from "lucide-react";
import { CAKTO_LINKS, PRODUCTS, type ProductKey } from "@/lib/products";

export const Route = createFileRoute("/checkout/$product")({
  head: ({ params }) => {
    const p = PRODUCTS[params.product as ProductKey];
    const title = p ? `Checkout — ${p.name} | Mídia Packed` : "Checkout | Mídia Packed";
    return {
      meta: [
        { title },
        { name: "description", content: p?.tagline ?? "Checkout Mídia Packed" },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  beforeLoad: ({ params }) => {
    if (!(params.product in PRODUCTS)) throw notFound();
  },
  component: Checkout,
});

function Checkout() {
  const { product } = Route.useParams();
  const p = PRODUCTS[product as ProductKey];
  const link = CAKTO_LINKS[product as ProductKey];
  const isCombo = product === "combo";

  return (
    <div className="min-h-screen text-white">
      <header className="border-b border-border bg-black/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md btn-neon grid place-items-center">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <span className="font-display font-bold">Mídia Packed</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5 text-neon" /> Pagamento seguro
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-14">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: product info */}
          <div className="card-graphite grain p-6 sm:p-8">
            {isCombo && (
              <div className="btn-neon inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                🔥 Melhor Oferta
              </div>
            )}
            <div className="mt-3 text-xs uppercase tracking-[0.2em] text-neon font-semibold">Você está comprando</div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-black">{p.name}</h1>
            <p className="mt-2 text-muted-foreground">{p.tagline}</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Perk icon={InfinityIcon} label="Acesso vitalício" />
              <Perk icon={Download} label="Download imediato" />
              <Perk icon={Shield} label="Pagamento seguro" />
              <Perk icon={Star} label="+100 avaliações" />
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Está incluso</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-neon shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: order summary */}
          <div className="card-graphite grain p-6 sm:p-8 h-fit lg:sticky lg:top-24"
            style={isCombo ? { boxShadow: "var(--shadow-glow-strong)", borderColor: "oklch(0.62 0.28 300 / 70%)" } : undefined}>
            <div className="text-xs uppercase tracking-[0.2em] text-neon font-semibold">Resumo do pedido</div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-semibold">{p.name}</span>
              <span className="text-2xl font-black" style={{ backgroundImage: "var(--gradient-neon)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {p.price}
              </span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Pagamento único • Acesso vitalício</div>

            <div className="my-6 h-px bg-border" />

            <div className="flex items-baseline justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="text-3xl font-black">{p.price}</span>
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer"
              className={`mt-6 w-full rounded-full px-6 py-4 font-bold text-center inline-flex items-center justify-center gap-2 btn-neon btn-neon-hover ${isCombo ? "glow-strong" : ""}`}>
              <CreditCard className="h-5 w-5" />
              {isCombo ? "COMPRAR COMBO" : "COMPRAR AGORA"}
            </a>

            <div className="mt-3 text-[11px] text-center text-muted-foreground">
              Link Cakto: <code className="text-neon break-all">{link}</code>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1"><Lock className="h-3.5 w-3.5 text-neon" /> SSL</div>
              <span>•</span>
              <div className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-neon" /> Cakto</div>
              <span>•</span>
              <div className="flex items-center gap-1"><CreditCard className="h-3.5 w-3.5 text-neon" /> Pix/Cartão</div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link to="/" className="btn-ghost-dark rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar para a landing
          </Link>
        </div>
      </main>
    </div>
  );
}

function Perk({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-graphite/40 p-3">
      <Icon className="h-5 w-5 text-neon" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
