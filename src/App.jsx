import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Globe2,
  Scale,
  Wallet,
  CheckCircle2,
  Building2,
  Mail,
} from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div style={{ fontFamily: "system-ui", color: "#0a0a0a", background: "#fff", minHeight: "100vh" }}>
      {/* NAV */}
      <header style={{ borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "white", zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: "#111", color: "white", display: "grid", placeItems: "center" }}>
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, letterSpacing: -0.2 }}>SafeDeal</div>
              <div style={{ fontSize: 12, color: "#666" }}>Escrow infrastructure</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="#investors" style={{ textDecoration: "none", border: "1px solid #e7e7e7", padding: "10px 12px", borderRadius: 14, color: "#111", fontWeight: 650, fontSize: 13 }}>
              Investor overview
            </a>
            <button
              onClick={() => document.querySelector("#early")?.scrollIntoView({ behavior: "smooth" })}
              style={{ border: "none", background: "#111", color: "white", padding: "10px 14px", borderRadius: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
            >
              Request early access <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 28, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #eaeaea", padding: "8px 10px", borderRadius: 999, fontSize: 12, fontWeight: 700, color: "#444" }}>
              <Lock size={14} /> MVP live • onboarding pilot users
            </div>

            <h1 style={{ marginTop: 16, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.2, fontWeight: 900 }}>
              Secure transactions without trust issues.
            </h1>

            <p style={{ marginTop: 16, fontSize: 18, color: "#4b5563", lineHeight: 1.6 }}>
              SafeDeal protects buyers and sellers by holding funds securely until delivery is confirmed.
              Built for marketplaces, online deals, and cross-border transactions.
            </p>

            <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={pillStyle}><Lock size={14} /> Escrow hold</span>
              <span style={pillStyle}><Scale size={14} /> Dispute flow</span>
              <span style={pillStyle}><Globe2 size={14} /> Global ready</span>
            </div>

            <div style={{ marginTop: 22, padding: 14, borderRadius: 16, border: "1px solid #eee", background: "#fafafa" }}>
              <div style={{ fontWeight: 800 }}>Brand positioning</div>
              <div style={{ marginTop: 6, color: "#374151", lineHeight: 1.5 }}>
                <b>SafeDeal</b> is the trust layer for commerce in emerging markets —
                escrow-style protection for any transaction size.
              </div>
            </div>
          </div>

          {/* Right card */}
          <div style={{ border: "1px solid #eee", borderRadius: 22, padding: 22, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280" }}>Example deal</div>
                <div style={{ marginTop: 8, fontSize: 34, fontWeight: 900 }}>$1,200</div>
                <div style={{ marginTop: 6, fontSize: 13, color: "#6b7280" }}>
                  Buyer pays • SafeDeal holds • Seller delivers • Release
                </div>
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ecfdf5", color: "#047857", padding: "8px 10px", borderRadius: 999, fontSize: 12, fontWeight: 800 }}>
                <CheckCircle2 size={14} /> Funds held
              </div>
            </div>

            <div style={{ marginTop: 18, borderTop: "1px solid #eee", paddingTop: 14, display: "grid", gap: 10, fontSize: 14 }}>
              <Row label="Platform fee (3%)" value="$36" />
              <Row label="Estimated taxes" value="$4.68" />
              <Row label="Buyer pays" value="$1,240.68" bold />
              <Row label="Seller receives" value="$1,164" bold />
            </div>

            <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              <Mini title="Core value" value="Reduce fraud" />
              <Mini title="Outcome" value="Faster close" />
              <Mini title="Control" value="Audit trail" />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section id="investors" style={{ background: "#fafafa", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: 30, fontWeight: 900, letterSpacing: -0.6 }}>Investor overview</h2>
          <p style={{ marginTop: 12, color: "#4b5563", maxWidth: 880, lineHeight: 1.6 }}>
            SafeDeal is building the trust infrastructure for commerce in Central America — expanding to US corridors.
            Monetization: take-rate on escrowed volume + optional verification/services.
          </p>

          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <Box icon={<CheckCircle2 size={16} />} title="MVP live" body="Deployed on getsafedeal.com. Onboarding pilot users." />
            <Box icon={<Wallet size={16} />} title="Take-rate model" body="Simple pricing that scales with GMV." />
            <Box icon={<Building2 size={16} />} title="Go-to-market" body="P2P first → marketplaces → enterprise rails." />
          </div>
        </div>
      </section>

      {/* EARLY */}
      <section id="early" style={{ padding: "56px 20px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", border: "1px solid #eee", borderRadius: 22, padding: 22 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#111", color: "white", padding: "8px 10px", borderRadius: 999, fontSize: 12, fontWeight: 800 }}>
            <Mail size={14} /> Early access
          </div>
          <h2 style={{ marginTop: 14, fontSize: 30, fontWeight: 900, letterSpacing: -0.6 }}>Join the waitlist</h2>
          <p style={{ marginTop: 10, color: "#4b5563", lineHeight: 1.6 }}>
            We’re onboarding pilot users and marketplaces. Leave your email and we’ll contact you.
          </p>

          <form onSubmit={submit} style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@email.com"
              style={{ flex: "1 1 260px", padding: "12px 14px", borderRadius: 14, border: "1px solid #e5e7eb" }}
            />
            <button
              style={{ padding: "12px 14px", borderRadius: 14, border: "none", background: "#111", color: "white", fontWeight: 800, cursor: "pointer" }}
            >
              Join
            </button>
          </form>

          {submitted && (
            <div style={{ marginTop: 12, color: "#047857", fontWeight: 800 }}>
              ✔ Thanks — we’ll contact you soon.
            </div>
          )}

          <div style={{ marginTop: 12, fontSize: 12, color: "#6b7280" }}>
            MVP stage. Partnerships and roadmap shared upon request.
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #eee", padding: 18, textAlign: "center", color: "#6b7280", fontSize: 13 }}>
        © {new Date().getFullYear()} SafeDeal — Escrow infrastructure for modern commerce
      </footer>
    </div>
  );
}

const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  border: "1px solid #eee",
  padding: "8px 10px",
  borderRadius: 999,
  fontSize: 13,
  color: "#374151",
  background: "#fff",
};

function Row({ label, value, bold }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
      <span style={{ color: bold ? "#111" : "#4b5563", fontWeight: bold ? 800 : 600 }}>{label}</span>
      <span style={{ fontWeight: bold ? 900 : 800 }}>{value}</span>
    </div>
  );
}

function Mini({ title, value }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 12, background: "#fff" }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: "#6b7280" }}>{title}</div>
      <div style={{ marginTop: 6, fontWeight: 900 }}>{value}</div>
    </div>
  );
}

function Box({ icon, title, body }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 18, padding: 14, background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 900 }}>
        {icon} {title}
      </div>
      <div style={{ marginTop: 8, color: "#4b5563", lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

