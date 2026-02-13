import { useMemo, useState } from "react";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Globe2,
  Zap,
  BadgeCheck,
  Scale,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SafeDealLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* NAV */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-black p-2 text-white">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="font-bold">SafeDeal</div>
              <div className="text-xs text-zinc-500">Escrow infrastructure</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#investors"
              className="hidden rounded-2xl border px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 md:inline-flex"
            >
              Investor overview
            </a>
            <Button
              className="rounded-2xl"
              onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request early access <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
              <Lock size={14} /> MVP live • onboarding pilot users
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Secure transactions without trust issues.
            </h1>
            <p className="mt-5 text-lg text-zinc-600">
              SafeDeal protects buyers and sellers by holding funds securely until
              delivery is confirmed. Built for marketplaces, online deals, and
              cross-border transactions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="rounded-2xl px-6"
                onClick={() => document.querySelector("#investors")?.scrollIntoView({ behavior: "smooth" })}
              >
                Investor overview <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl px-6"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get early access
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2">
                <Lock size={14} /> Escrow hold
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2">
                <Scale size={14} /> Dispute flow
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2">
                <Globe size={14} /> Global ready
              </span>
            </div>

            <div className="mt-8 rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-700">
              <div className="font-semibold">Positioning</div>
              <div className="mt-1">
                <span className="font-semibold">SafeDeal</span> is the trust layer for commerce in emerging markets —
                escrow-style protection for any transaction size.
              </div>
            </div>
          </div>

          {/* PRODUCT CARD */}
          <Card className="rounded-3xl shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-500">Example deal</div>
                  <div className="mt-2 text-3xl font-bold">$1,200</div>
                  <div className="mt-1 text-sm text-zinc-500">Buyer pays • SafeDeal holds • Seller delivers • Release</div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={14} /> Funds held
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Platform fee (3%)</span>
                  <span className="font-semibold">$36</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Tax (SV IVA)</span>
                  <span className="font-semibold">$4.68</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-zinc-700">Buyer pays</span>
                  <span className="font-bold">$1,240.68</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-700">Seller receives</span>
                  <span className="font-bold">$1,164</span>
                </div>
              </div>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border bg-white p-4">
                  <div className="text-xs font-semibold text-zinc-500">Core value</div>
                  <div className="mt-1 font-bold">Reduce fraud</div>
                </div>
                <div className="rounded-2xl border bg-white p-4">
                  <div className="text-xs font-semibold text-zinc-500">Outcome</div>
                  <div className="mt-1 font-bold">Faster close</div>
                </div>
                <div className="rounded-2xl border bg-white p-4">
                  <div className="text-xs font-semibold text-zinc-500">Control</div>
                  <div className="mt-1 font-bold">Audit trail</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* INVESTOR OVERVIEW */}
      <section id="investors" className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold">Investor overview</h2>
              <p className="mt-3 max-w-3xl text-zinc-600">
                SafeDeal is building the trust infrastructure for commerce in Central America — expanding to US corridors.
                We monetize via take-rate on escrowed volume and optional verification/services.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="rounded-2xl"
                onClick={() => window.open("/", "_blank")}
              >
                Download 1-pager (soon)
              </Button>
              <Button
                className="rounded-2xl"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                Intro us <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-zinc-500">Stage</div>
                <div className="mt-2 text-xl font-bold">MVP live</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Deployed on getsafedeal.com. Onboarding pilot users and first marketplace integrations.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-zinc-500">Business model</div>
                <div className="mt-2 text-xl font-bold">Take-rate on GMV</div>
                <p className="mt-2 text-sm text-zinc-600">
                  3% base fee (+ taxes where applicable). Upsells: verification, dispute automation, enterprise rails.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-zinc-500">Why we win</div>
                <div className="mt-2 text-xl font-bold">Trust primitives</div>
                <p className="mt-2 text-sm text-zinc-600">
                  Escrow workflow + dispute rails + audit trail + country-by-country rollout.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <div className="text-xs font-semibold text-zinc-500">Target wedge</div>
                <div className="mt-2 font-bold">Social commerce & FB/WhatsApp deals</div>
                <div className="mt-2 text-sm text-zinc-600">High fraud + low trust → immediate value.</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500">Expansion</div>
                <div className="mt-2 font-bold">Marketplaces + SMEs</div>
                <div className="mt-2 text-sm text-zinc-600">Add rails + verification modules.</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500">Upsell</div>
                <div className="mt-2 font-bold">KYC/KYB + delivery proof</div>
                <div className="mt-2 text-sm text-zinc-600">Reduce disputes, unlock higher limits.</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-zinc-500">Moat</div>
                <div className="mt-2 font-bold">Compliance + networks</div>
                <div className="mt-2 text-sm text-zinc-600">Country playbooks + partnerships.</div>
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
              <h2 className="text-3xl font-bold">Where SafeDeal fits</h2>
              <p className="mt-3 max-w-3xl text-zinc-600">
                A neutral escrow layer for any transaction: protect buyers, guarantee sellers, and reduce fraud.
              </p>
            </div>
            <div className="text-sm text-zinc-500">API + dashboard (roadmap)</div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Wallet size={16} /> P2P deals
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Facebook/WhatsApp marketplace transactions. Hold funds until handoff.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/> Anti-scam protection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/> Faster close rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Building2 size={16} /> Marketplaces
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Add SafeDeal as a checkout option to reduce disputes and chargebacks.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/> Embedded escrow</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/> Audit trail</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Scale size={16} /> High-value
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Vehicles, equipment, services, and property. Verified milestones and dispute workflow.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/> Higher limits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600"/> Compliance-ready</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">How SafeDeal works</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">
            A simple escrow flow that scales from small purchases to large, regulated deals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { title: "Create a deal", body: "Set amount, parties, and a delivery window." },
              { title: "Buyer pays", body: "Funds are secured in escrow. Seller is notified." },
              { title: "Delivery", body: "Seller delivers. Buyer verifies the item/service." },
              { title: "Release", body: "Funds release to seller or move into dispute flow." },
            ].map((x) => (
              <Card key={x.title} className="rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold">{x.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{x.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">
            Start simple for adoption. Expand with country rails and enterprise features.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
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
            ].map((p) => (
              <Card key={p.title} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-zinc-500">{p.title}</div>
                  <div className="mt-2 text-3xl font-bold">{p.price}</div>
                  <div className="mt-2 text-sm text-zinc-600">{p.body}</div>
                  <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600" /> {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-zinc-50 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold text-zinc-900">Investor note</div>
                <div className="mt-1 text-sm text-zinc-600">
                  Take-rate business with predictable unit economics. Expansion adds TAM via corridors and platform integrations.
                </div>
              </div>
              <Button
                className="rounded-2xl"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in touch <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="early" className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-2 text-xs font-semibold text-white">
              <Mail size={14} /> Early access
            </div>
            <h2 className="mt-5 text-3xl font-bold">Join the waitlist</h2>
            <p className="mt-3 text-zinc-600">
              We’re onboarding pilot users and marketplaces. Leave your email and we’ll contact you.
            </p>

            <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                className="flex-1 rounded-2xl border px-4 py-3"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button className="rounded-2xl px-6">Join</Button>
            </form>

            {submitted && (
              <div className="mt-4 text-sm font-semibold text-emerald-600">
                ✔ Thanks — we’ll contact you soon.
              </div>
            )}

            <div className="mt-5 text-xs text-zinc-500">
              MVP stage. Revenue and partnerships will be shared during the accelerator process.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} SafeDeal — Escrow infrastructure for modern commerce
      </footer>
    </div>
  );
}
