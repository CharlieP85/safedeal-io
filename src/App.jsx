import { useState } from "react";
import { ShieldCheck, ArrowRight, Lock, Globe, Scale } from "lucide-react";
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

          <Button
            className="rounded-2xl"
            onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request early access <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Secure transactions without trust issues.
            </h1>
            <p className="mt-5 text-lg text-zinc-600">
              SafeDeal protects buyers and sellers by holding funds securely until
              delivery is confirmed. Built for marketplaces, online deals, and
              cross‑border transactions.
            </p>

            <div className="mt-8 flex gap-3">
              <Button
                className="rounded-2xl px-6"
                onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get early access
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl px-6"
                onClick={() => document.querySelector("#how")?.scrollIntoView({ behavior: "smooth" })}
              >
                How it works
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
          </div>

          {/* PRODUCT CARD */}
          <Card className="rounded-3xl shadow-lg">
            <CardContent className="p-8">
              <div className="text-sm font-semibold text-zinc-500">Example deal</div>
              <div className="mt-2 text-3xl font-bold">$1,200</div>

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
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">How SafeDeal works</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold">Create a deal</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Buyer and seller agree on terms and amount.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold">Funds held securely</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Payment is secured until delivery is confirmed.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold">Release or dispute</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Funds release automatically or go into structured dispute flow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="early" className="py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-3xl font-bold">Join the early access list</h2>
          <p className="mt-3 text-zinc-600">
            We’re onboarding pilot users and marketplaces. Leave your email and
            we’ll contact you.
          </p>

          <form onSubmit={submit} className="mt-6 flex gap-3">
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} SafeDeal — Escrow infrastructure for modern commerce
      </footer>
    </div>
  );
}
