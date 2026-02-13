import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div style={styles.page}>
      {/* NAV */}
      <header style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brand}>
            <div style={styles.logoBox}>SD</div>
            <div>
              <div style={styles.brandName}>SafeDeal</div>
              <div style={styles.brandTag}>Escrow infrastructure</div>
            </div>
          </div>

          <div style={styles.navActions}>
            <a href="#investors" style={styles.linkBtn}>
              Investor overview
            </a>
            <a href="#early" style={styles.primaryBtn}>
              Request early access →
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.badge}>🔒 MVP live • onboarding pilot users</div>

          <h1 style={styles.h1}>Secure transactions without trust issues.</h1>
          <p style={styles.p}>
            SafeDeal protects buyers and sellers by holding funds securely until delivery is confirmed.
            Built for marketplaces, online deals, and cross-border transactions.
          </p>

          <div style={styles.ctaRow}>
            <a href="#investors" style={styles.primaryBtn}>
              Investor overview →
            </a>
            <a href="#early" style={styles.secondaryBtn}>
              Get early access
            </a>
          </div>

          <div style={styles.chips}>
            <span style={styles.chip}>Escrow hold</span>
            <span style={styles.chip}>Dispute flow</span>
            <span style={styles.chip}>Global ready</span>
          </div>

          <div style={styles.positioning}>
            <div style={styles.positioningTitle}>Brand positioning</div>
            <div>
              <b>SafeDeal</b> is the trust layer for commerce in emerging markets — escrow-style protection
              for any transaction size.
            </div>
          </div>
        </section>

        {/* INVESTORS */}
        <section id="investors" style={styles.section}>
          <h2 style={styles.h2}>Investor overview</h2>
          <p style={styles.p}>
            We’re building trust infrastructure for commerce in Central America, expanding into US corridors.
            Monetization: take-rate on escrowed volume + optional verification/services.
          </p>

          <div style={styles.grid3}>
            <div style={styles.card}>
              <div style={styles.cardKicker}>Stage</div>
              <div style={styles.cardTitle}>MVP live</div>
              <div style={styles.cardBody}>Onboarding pilot users and first marketplace integrations.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardKicker}>Business model</div>
              <div style={styles.cardTitle}>Take-rate on GMV</div>
              <div style={styles.cardBody}>Simple fees to start, then tiering and rails by country.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardKicker}>Why we win</div>
              <div style={styles.cardTitle}>Trust primitives</div>
              <div style={styles.cardBody}>Escrow workflow + dispute rails + audit trail.</div>
            </div>
          </div>
        </section>

        {/* EARLY ACCESS */}
        <section id="early" style={styles.sectionAlt}>
          <div style={styles.formCard}>
            <div style={styles.formBadge}>Early access</div>
            <h2 style={{ ...styles.h2, marginTop: 12 }}>Join the waitlist</h2>
            <p style={styles.p}>
              Leave your email and we’ll contact you for the pilot.
            </p>

            <form onSubmit={onSubmit} style={styles.formRow}>
              <input
                style={styles.input}
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" style={styles.btnSubmit}>
                Join
              </button>
            </form>

            {submitted ? (
              <div style={styles.success}>✔ Thanks — we’ll contact you soon.</div>
            ) : null}

            <div style={styles.smallNote}>
              MVP stage. Roadmap + partnerships shared during onboarding.
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} SafeDeal — Escrow infrastructure for modern commerce
        </footer>
      </main>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#0b0b0f", color: "#fff" },
  nav: { borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0f", position: "sticky", top: 0, zIndex: 10 },
  navInner: { maxWidth: 1100, margin: "0 auto", padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logoBox: { width: 40, height: 40, borderRadius: 14, display: "grid", placeItems: "center", fontWeight: 800, background: "linear-gradient(135deg,#2563eb,#facc15)", color: "#0b0b0f" },
  brandName: { fontWeight: 800, letterSpacing: 0.2 },
  brandTag: { fontSize: 12, opacity: 0.7, marginTop: 2 },
  navActions: { display: "flex", gap: 10, alignItems: "center" },
  linkBtn: { textDecoration: "none", color: "rgba(255,255,255,0.85)", padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)" },
  primaryBtn: { textDecoration: "none", color: "#0b0b0f", padding: "10px 14px", borderRadius: 14, background: "#facc15", fontWeight: 800 },
  secondaryBtn: { textDecoration: "none", color: "rgba(255,255,255,0.9)", padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.18)" },
  main: { maxWidth: 1100, margin: "0 auto", padding: "28px 18px 40px" },
  hero: { padding: "34px 0 10px" },
  badge: { display: "inline-block", padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.04)", fontSize: 12, fontWeight: 700 },
  h1: { fontSize: 44, lineHeight: 1.06, margin: "18px 0 10px", fontWeight: 900, letterSpacing: -0.5 },
  h2: { fontSize: 28, lineHeight: 1.2, margin: 0, fontWeight: 900, letterSpacing: -0.2 },
  p: { marginTop: 10, marginBottom: 0, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", maxWidth: 820 },
  ctaRow: { marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" },
  chips: { marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" },
  chip: { padding: "8px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.04)", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.9)" },
  positioning: { marginTop: 18, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", borderRadius: 18, padding: 14, maxWidth: 860, color: "rgba(255,255,255,0.85)" },
  positioningTitle: { fontSize: 12, fontWeight: 800, opacity: 0.8, marginBottom: 6 },
  section: { marginTop: 34, paddingTop: 26, borderTop: "1px solid rgba(255,255,255,0.08)" },
  grid3: { marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },
  card: { border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", borderRadius: 18, padding: 14 },
  cardKicker: { fontSize: 12, opacity: 0.75, fontWeight: 800 },
  cardTitle: { marginTop: 8, fontSize: 18, fontWeight: 900 },
  cardBody: { marginTop: 6, fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 },
  sectionAlt: { marginTop: 34, paddingTop: 26, borderTop: "1px solid rgba(255,255,255,0.08)" },
  formCard: { marginTop: 14, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", borderRadius: 22, padding: 18, maxWidth: 720 },
  formBadge: { display: "inline-block", fontSize: 12, fontWeight: 900, padding: "8px 10px", borderRadius: 999, background: "rgba(250,204,21,0.16)", border: "1px solid rgba(250,204,21,0.35)", color: "#facc15" },
  formRow: { display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" },
  input: { flex: "1 1 260px", minWidth: 240, padding: "12px 12px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.16)", background: "rgba(0,0,0,0.25)", color: "#fff", outline: "none" },
  btnSubmit: { padding: "12px 14px", borderRadius: 14, border: "none", background: "#2563eb", color: "#fff", fontWeight: 900, cursor: "pointer" },
  success: { marginTop: 10, color: "#34d399", fontWeight: 900, fontSize: 14 },
  smallNote: { marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.65)" },
  footer: { marginTop: 40, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", fontSize: 12 },
};
