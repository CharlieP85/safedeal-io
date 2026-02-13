import { useMemo, useState } from "react";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Globe,
  Scale,
  Wallet,
  Building2,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function LogoMark({ className = "" }) {
  // Minimal vector: shield + simple handshake lines
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sdg" x1="14" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#FACC15" />
        </linearGradient>
      </defs>
      <path
        d="M32 6c8 6 16 6 22 8v18c0 14-9 22-22 26C19 54 10 46 10 32V14c6-2 14-2 22-8Z"
        stroke="url(#sdg)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* handshake */}
      <path
        d="M18 36c3-4 6-6 10-6h4c4 0 7 2 10 6"
        stroke="#E5E7EB"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 40l7 7c1 1 3 1 4 0l1-1"
        stroke="#E5E7EB"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 40l-4 4"
        stroke="#E5E7EB"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SafeDealLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState("es"); // "es" | "en"

  const t = useMemo(() => {
    const dict = {
      es: {
        navInvestor: "Resumen para inversores",
        navCta: "Pedir acceso temprano",
        badge: "MVP en vivo • onboarding de usuarios piloto",
        h1: "Transacciones seguras sin problemas de confianza.",
        lead:
          "SafeDeal protege a compradores y vendedores reteniendo los fondos de forma segura hasta confirmar la entrega. Hecho para marketplaces, ventas online y transacciones internacionales.",
        ctaInvestor: "Resumen para inversores",
        ctaEarly: "Acceso temprano",
        chips: { escrow: "Retención en escrow", dispute: "Flujo de disputa", global: "Listo para global" },
        positioningTitle: "Posicionamiento de marca",
        positioningBody:
          "SafeDeal es la capa de confianza para el comercio en mercados emergentes: protección tipo escrow para cualquier tamaño de transacción.",
        dealTitle: "Ejemplo de transacción",
        dealSub: "Comprador paga • SafeDeal retiene • Vendedor entrega • Liberación",
        held: "Fondos retenidos",
        fee: "Tarifa plataforma (3%)",
        tax: "Impuesto (SV IVA)",
        buyerPays: "Paga el comprador",
        sellerGets: "Recibe el vendedor",
        cards: {
          value: "Valor",
          outcome: "Resultado",
          control: "Control",
          reduceFraud: "Menos fraude",
          fasterClose: "Cierres más rápidos",
          auditTrail: "Rastro auditable",
        },
        invTitle: "Resumen para inversores",
        invLead:
          "Estamos construyendo infraestructura de confianza para el comercio en Centroamérica y expandiéndonos a corredores hacia EE. UU. Monetización: take-rate sobre volumen en escrow + verificación/servicios opcionales.",
        invStageTitle: "Etapa",
        invStage: "MVP en vivo",
        invStageBody:
          "Desplegado en getsafedeal.com. Onboarding de usuarios piloto y primeras integraciones con marketplaces.",
        invModelTitle: "Modelo de negocio",
        invModel: "Take-rate sobre GMV",
        invModelBody:
          "3% base (+ impuestos donde aplique). Upsells: verificación, automatización de disputas, rails empresariales.",
        invWinTitle: "Por qué ganamos",
        invWin: "Primitivas de confianza",
        invWinBody: "Flujo de escrow + rails de disputa + rastro auditable + rollout por país.",
        wedgeTitle: "Primera cuña",
        wedge: "Social commerce & FB/WhatsApp",
        wedgeBody: "Alto fraude + baja confianza → valor inmediato.",
        expansionTitle: "Expansión",
        expansion: "Marketplaces + PYMEs",
        expansionBody: "Agregar rails + módulos de verificación.",
        upsellTitle: "Upsell",
        upsell: "KYC/KYB + prueba de entrega",
        upsellBody: "Menos disputas, límites más altos.",
        moatTitle: "Moat",
        moat: "Compliance + redes",
        moatBody: "Playbooks por país + alianzas.",
        fitTitle: "Dónde encaja SafeDeal",
        fitLead:
          "Una capa neutral de escrow para cualquier transacción: protege compradores, garantiza vendedores y reduce el fraude.",
        fitNote: "API + dashboard (roadmap)",
        use1Title: "Tratos P2P",
        use1Body: "Transacciones en Facebook/WhatsApp. Retén fondos hasta el intercambio.",
        use1b1: "Protección anti-estafa",
        use1b2: "Más cierres",
        use2Title: "Marketplaces",
        use2Body: "Agrega SafeDeal en checkout para reducir disputas y contracargos.",
        use2b1: "Escrow embebido",
        use2b2: "Rastro auditable",
        use3Title: "Alto valor",
        use3Body:
          "Vehículos, equipo, servicios y propiedad. Hitos verificados + flujo de disputa.",
        use3b1: "Límites más altos",
        use3b2: "Listo para compliance",
        howTitle: "Cómo funciona",
        howLead:
          "Un flujo de escrow simple que escala desde compras pequeñas hasta tratos grandes y regulados.",
        steps: [
          { title: "Crear trato", body: "Define monto, partes y ventana de entrega." },
          { title: "Comprador paga", body: "Fondos quedan en escrow. Se notifica al vendedor." },
          { title: "Entrega", body: "El vendedor entrega. El comprador verifica." },
          { title: "Liberación", body: "Se libera al vendedor o entra a disputa." },
        ],
        pricingTitle: "Precios",
        pricingLead:
          "Empezamos simple para adopción. Luego expandimos con rails por país y features enterprise.",
        pricing: [
          {
            title: "Starter (MVP)",
            price: "3%",
            body: "+ impuestos donde aplique (p.ej. SV IVA).",
            bullets: ["Retención y liberación", "Flujo básico de disputa", "Recibos + rastro auditable"],
          },
          {
            title: "Scale",
            price: "Por tramos",
            body: "Precios por país + opciones de payout.",
            bullets: ["Módulos de verificación", "Automatización de disputas", "Límites más altos"],
          },
          {
            title: "Enterprise",
            price: "A medida",
            body: "Marketplaces & plataformas.",
            bullets: ["Rails personalizados", "SLAs", "Add-ons de compliance"],
          },
        ],
        investorNoteTitle: "Nota para inversores",
        investorNoteBody:
          "Modelo take-rate con unit economics predecibles. La expansión crece el TAM con corredores e integraciones.",
        earlyBadge: "Acceso temprano",
        earlyTitle: "Únete a la lista",
        earlyLead:
          "Estamos incorporando usuarios piloto y marketplaces. Déjanos tu correo y te contactamos.",
        earlyPlaceholder: "tu@email.com",
        earlyBtn: "Unirme",
        thanks: "✔ Gracias — te contactaremos pronto.",
        foot:
          "MVP. Roadmap y alianzas se comparten durante el proceso de onboarding.",
        footer: "Escrow infrastructure para el comercio moderno",
        langLabel: "ES / EN",
      },
      en: {
        navInvestor: "Investor overview",
        navCta: "Request early access",
        badge: "MVP live • onboarding pilot users",
        h1: "Secure transactions without trust issues.",
        lead:
          "SafeDeal protects buyers and sellers by holding funds securely until delivery is confirmed. Built for marketplaces, online deals, and cross-border transactions.",
        ctaInvestor: "Investor overview",
        ctaEarly: "Get early access",
        chips: { escrow: "Escrow hold", dispute: "Dispute flow", global: "Global ready" },
        positioningTitle: "Brand positioning",
        positioningBody:
          "SafeDeal is the trust layer for commerce in emerging markets — escrow-style protection for any transaction size.",
        dealTitle: "Example deal",
        dealSub: "Buyer pays • SafeDeal holds • Seller delivers • Release",
        held: "Funds held",
        fee: "Platform fee (3%)",
        tax: "Tax (SV IVA)",
        buyerPays: "Buyer pays",
        sellerGets: "Seller receives",
        cards: {
          value: "Core value",
          outcome: "Outcome",
          control: "Control",
          reduceFraud: "Reduce fraud",
          fasterClose: "Faster close",
          auditTrail: "Audit trail",
        },
        invTitle: "Investor overview",
        invLead:
          "We’re building trust infrastructure for commerce in Central America — expanding to US corridors. Monetization: take-rate on escrowed volume + optional verification/services.",
        invStageTitle: "Stage",
        invStage: "MVP live",
        invStageBody:
          "Deployed on getsafedeal.com. Onboarding pilot users and first marketplace integrations.",
        invModelTitle: "Business model",
        invModel: "Take-rate on GMV",
        invModelBody:
          "3% base fee (+ taxes where applicable). Upsells: verification, dispute automation, enterprise rails.",
        invWinTitle: "Why we win",
        invWin: "Trust primitives",
        invWinBody: "Escrow workflow + dispute rails + audit trail + country-by-country rollout.",
        wedgeTitle: "Target wedge",
        wedge: "Social commerce & FB/WhatsApp deals",
        wedgeBody: "High fraud + low trust → immediate value.",
        expansionTitle: "Expansion",
        expansion: "Marketplaces + SMEs",
        expansionBody: "Add rails + verification modules.",
        upsellTitle: "Upsell",
        upsell: "KYC/KYB + delivery proof",
        upsellBody: "Reduce disputes, unlock higher limits.",
        moatTitle: "Moat",
        moat: "Compliance + networks",
        moatBody: "Country playbooks + partnerships.",
        fitTitle: "Where SafeDeal fits",
        fitLead:
          "A neutral escrow layer for any transaction: protect buyers, guarantee sellers, and reduce fraud.",
        fitNote: "API + dashboard (roadmap)",
        use1Title: "P2P deals",
        use1Body: "Facebook/WhatsApp marketplace transactions. Hold funds until handoff.",
        use1b1: "Anti-scam protection",
        use1b2: "Faster close rates",
        use2Title: "Marketplaces",
        use2Body: "Add SafeDeal as a checkout option to reduce disputes and chargebacks.",
        use2b1: "Embedded escrow",
        use2b2: "Audit trail",
        use3Title: "High-value",
        use3Body:
          "Vehicles, equipment, services, and property. Verified milestones and dispute workflow.",
        use3b1: "Higher limits",
        use3b2: "Compliance-ready",
        howTitle: "How SafeDeal works",
        howLead:
          "A simple escrow flow that scales from small purchases to large, regulated deals.",
        steps: [
          { title: "Create a deal", body: "Set amount, parties, and a delivery window." },
          { title: "Buyer pays", body: "Funds are secured in escrow. Seller is notified." },
          { title: "Delivery", body: "Seller delivers. Buyer verifies the item/service." },
          { title: "Release", body: "Funds release to seller or move into dispute flow." },
        ],
        pricingTitle: "Pricing",
        pricingLead:
          "Start simple for adoption. Expand with country rails and enterprise features.",
        pricing: [
          {
            title: "Starter (MVP)",
            price: "3%",
            body: "+ taxes where applicable (e.g., SV IVA).",
            bullets: ["Escrow hold & release", "Basic dispute workflow", "Receipts + audit trail"],
          },
          {
            title: "Scale",
            price: "Tiered",
            body: "Country pricing + payout options.",
            bullets: ["Verification modules", "Dispute automation", "Higher limits"],
          },
          {
            title: "Enterprise",
            price: "Custom",
            body: "Marketplaces & platforms.",
            bullets: ["Custom rails", "SLAs", "Compliance add-ons"],
          },
        ],
        investorNoteTitle: "Investor note",
        investorNoteBody:
          "Take-rate business with predictable unit economics. Expansion adds TAM via corridors and platform integrations.",
        earlyBadge: "Early access",
        earlyTitle: "Join the waitlist",
        earlyLead:
          "We’re onboarding pilot users and marketplaces. Leave your email and we’ll contact you.",
        earlyPlaceholder: "you@email.com",
        earlyBtn: "Join",
        thanks: "✔ Thanks — we’ll contact you soon.",
        foot: "MVP stage. Roadmap + partnerships shared during onboarding.",
        footer: "Escrow infrastructure for modern commerce",
        langLabel: "ES / EN",
      },
    };
    return dict[lang];
  }, [lang]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-zinc-900 p-2 ring-1 ring-white/10">
              <LogoMark className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold">SafeDeal</div>
              <div className="text-xs text-zinc-400">Escrow infrastructure</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLang((v) => (v === "es" ? "en" : "es"))}
              className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/10 md:inline-flex"
              aria-label="Change language"
              title="Change language"
            >
              {t.langLabel}
            </button>

            <a
              href="#investors"
              className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10 md:inline-flex"
            >
              {t.navInvestor}
            </a>
            <Button
              className="rounded-2xl bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
              onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.navCta} <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200">
              <Lock size={14} /> {t.badge}
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{t.h1}</h1>
            <p className="mt-5 text-lg text-zinc-300">{t.lead}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="rounded-2xl bg-white text-zinc-950 hover:bg-zinc-100"
                onClick={() => document.querySelector("#investors")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.ctaInvestor} <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent text-zinc-50 hover:bg-white/10"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.ctaEarly}
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Lock size={14} /> {t.chips.escrow}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Scale size={14} /> {t.chips.dispute}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Globe size={14} /> {t.chips.global}
              </span>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
              <div className="font-semibold">{t.positioningTitle}</div>
              <div className="mt-1">{t.positioningBody}</div>
            </div>
          </div>

          {/* PRODUCT CARD */}
          <Card className="rounded-3xl border-white/10 bg-white/5 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-300">{t.dealTitle}</div>
                  <div className="mt-2 text-3xl font-bold">$1,200</div>
                  <div className="mt-1 text-sm text-zinc-400">{t.dealSub}</div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                  <CheckCircle2 size={14} /> {t.held}
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-300">{t.fee}</span>
                  <span className="font-semibold text-zinc-50">$36</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">{t.tax}</span>
                  <span className="font-semibold text-zinc-50">$4.68</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3">
                  <span className="text-zinc-200">{t.buyerPays}</span>
                  <span className="font-bold text-zinc-50">$1,240.68</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-200">{t.sellerGets}</span>
                  <span className="font-bold text-zinc-50">$1,164</span>
                </div>
              </div>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="text-xs font-semibold text-zinc-400">{t.cards.value}</div>
                  <div className="mt-1 font-bold">{t.cards.reduceFraud}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="text-xs font-semibold text-zinc-400">{t.cards.outcome}</div>
                  <div className="mt-1 font-bold">{t.cards.fasterClose}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="text-xs font-semibold text-zinc-400">{t.cards.control}</div>
                  <div className="mt-1 font-bold">{t.cards.auditTrail}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* INVESTOR OVERVIEW */}
      <section id="investors" className="border-t border-white/10 bg-zinc-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold">{t.invTitle}</h2>
              <p className="mt-3 max-w-3xl text-zinc-300">{t.invLead}</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent text-zinc-50 hover:bg-white/10"
                onClick={() => window.open("/", "_blank")}
              >
                1-pager (soon)
              </Button>
              <Button
                className="rounded-2xl bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.navCta} <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-zinc-400">{t.invStageTitle}</div>
                <div className="mt-2 text-xl font-bold">{t.invStage}</div>
                <p className="mt-2 text-sm text-zinc-300">{t.invStageBody}</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-zinc-400">{t.invModelTitle}</div>
                <div className="mt-2 text-xl font-bold">{t.invModel}</div>
                <p className="mt-2 text-sm text-zinc-300">{t.invModelBody}</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-zinc-400">{t.invWinTitle}</div>
                <div className="mt-2 text-xl font-bold">{t.invWin}</div>
                <p className="mt-2 text-sm text-zinc-300">{t.invWinBody}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <div className="text-xs font-semibold text-zinc-400">{t.wedgeTitle}</div>
                <div className="mt-2 font-bold">{t.wedge}</div>
                <div className="mt-2 text-sm text-zinc-300">{t.wedgeBody}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-400">{t.expansionTitle}</div>
                <div className="mt-2 font-bold">{t.expansion}</div>
                <div className="mt-2 text-sm text-zinc-300">{t.expansionBody}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-400">{t.upsellTitle}</div>
                <div className="mt-2 font-bold">{t.upsell}</div>
                <div className="mt-2 text-sm text-zinc-300">{t.upsellBody}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-400">{t.moatTitle}</div>
                <div className="mt-2 font-bold">{t.moat}</div>
                <div className="mt-2 text-sm text-zinc-300">{t.moatBody}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="product" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">{t.fitTitle}</h2>
              <p className="mt-3 max-w-3xl text-zinc-300">{t.fitLead}</p>
            </div>
            <div className="text-sm text-zinc-400">{t.fitNote}</div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Wallet size={16} /> {t.use1Title}
                </div>
                <p className="mt-2 text-sm text-zinc-300">{t.use1Body}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" /> {t.use1b1}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" /> {t.use1b2}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Building2 size={16} /> {t.use2Title}
                </div>
                <p className="mt-2 text-sm text-zinc-300">{t.use2Body}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" /> {t.use2b1}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" /> {t.use2b2}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Scale size={16} /> {t.use3Title}
                </div>
                <p className="mt-2 text-sm text-zinc-300">{t.use3Body}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" /> {t.use3b1}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-300" /> {t.use3b2}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="border-t border-white/10 bg-zinc-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">{t.howTitle}</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">{t.howLead}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {t.steps.map((x) => (
              <Card key={x.title} className="rounded-2xl border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{x.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{x.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">{t.pricingTitle}</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">{t.pricingLead}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.pricing.map((p) => (
              <Card key={p.title} className="rounded-2xl border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-zinc-400">{p.title}</div>
                  <div className="mt-2 text-3xl font-bold">{p.price}</div>
                  <div className="mt-2 text-sm text-zinc-300">{p.body}</div>
                  <ul className="mt-5 space-y-2 text-sm text-zinc-200">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-300" /> {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold text-zinc-50">{t.investorNoteTitle}</div>
                <div className="mt-1 text-sm text-zinc-300">{t.investorNoteBody}</div>
              </div>
              <Button
                className="rounded-2xl bg-yellow-400 text-zinc-950 hover:bg-yellow-300"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.navCta} <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="early" className="border-t border-white/10 bg-zinc-950 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-sm">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-2 text-xs font-semibold text-zinc-950">
              <Mail size={14} /> {t.earlyBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold">{t.earlyTitle}</h2>
            <p className="mt-3 text-zinc-300">{t.earlyLead}</p>

            <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                className="flex-1 rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-zinc-50 placeholder:text-zinc-500"
                placeholder={t.earlyPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button className="rounded-2xl bg-blue-600 hover:bg-blue-500">{t.earlyBtn}</Button>
            </form>

            {submitted && <div className="mt-4 text-sm font-semibold text-emerald-300">{t.thanks}</div>}

            <div className="mt-5 text-xs text-zinc-400">{t.foot}</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} SafeDeal — {t.footer}
      </footer>
    </div>
  );
}
