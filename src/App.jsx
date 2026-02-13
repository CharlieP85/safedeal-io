import { useMemo, useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const year = new Date().getFullYear();

  const stats = useMemo(
    () => [
      { label: "Avg. release time", value: "< 1 min" },
      { label: "Dispute window", value: "48–72 hrs" },
      { label: "Supported deal sizes", value: "$10 → $250k+" },
    ],
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setEmail("");
  };

  return (
    <div className="sd">
      <style>{css}</style>

      {/* Top gradient glow */}
      <div className="sd__glow" aria-hidden="true" />

      {/* NAV */}
      <header className="sd__nav">
        <div className="sd__container sd__navInner">
          <a className="sd__brand" href="#top" aria-label="SafeDeal">
            <span className="sd__logo" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.5l7.5 3.3v6.1c0 5.2-3.2 9.5-7.5 10.9C7.7 21.3 4.5 17 4.5 11.9V5.8L12 2.5z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M8.2 12.2l2.2 2.2 5.6-5.6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sd__brandText">
              <span className="sd__brandName">SafeDeal</span>
              <span className="sd__brandTag">Escrow for everyday deals</span>
            </span>
          </a>

          <nav className="sd__links" aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="sd__linkPill" href="#waitlist">
              Get early access
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="top" className="sd__container sd__hero">
        <div className="sd__heroLeft">
          <div className="sd__pill">
            <span className="sd__pillDot" />
            Buyer + seller protection • Hold → Verify → Release
          </div>

          <h1 className="sd__h1">
            The safest way to transact online —
            <span className="sd__h1Accent"> without trust issues.</span>
          </h1>

          <p className="sd__lead">
            SafeDeal is a private escrow layer for any transaction: phones, cars,
            services, and real estate. Funds are held securely and released only
            when both sides confirm.
          </p>

          <div className="sd__ctaRow" id="waitlist">
            <form className="sd__form" onSubmit={onSubmit}>
              <input
                className="sd__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email for early access"
                type="email"
                autoComplete="email"
              />
              <button className="sd__btn" type="submit">
                Request early access
                <span className="sd__btnArrow" aria-hidden="true">
                  →
                </span>
              </button>
            </form>
            <div className="sd__ctaHint">
              No spam. Private beta invites rolling out.
            </div>
          </div>

          <div className="sd__trustRow" aria-label="Trust badges">
            <div className="sd__trustItem">
              <span className="sd__trustIcon">🔒</span>
              Escrow-style holding
            </div>
            <div className="sd__trustItem">
              <span className="sd__trustIcon">⚖️</span>
              Dispute workflow
            </div>
            <div className="sd__trustItem">
              <span className="sd__trustIcon">🌎</span>
              Cross-border ready
            </div>
          </div>
        </div>

        <div className="sd__heroRight" aria-label="Product preview">
          <div className="sd__card sd__card--glass">
            <div className="sd__cardTop">
              <div>
                <div className="sd__cardKicker">Deal preview</div>
                <div className="sd__cardTitle">iPhone 15 Pro • $850</div>
              </div>
              <div className="sd__status">Holding</div>
            </div>

            <div className="sd__timeline">
              <div className="sd__step done">
                <div className="sd__dot" />
                <div>
                  <div className="sd__stepTitle">Deal created</div>
                  <div className="sd__stepSub">Buyer + seller verified</div>
                </div>
              </div>
              <div className="sd__step done">
                <div className="sd__dot" />
                <div>
                  <div className="sd__stepTitle">Funds secured</div>
                  <div className="sd__stepSub">Seller notified instantly</div>
                </div>
              </div>
              <div className="sd__step active">
                <div className="sd__dot" />
                <div>
                  <div className="sd__stepTitle">Delivery / verification</div>
                  <div className="sd__stepSub">Buyer checks item or service</div>
                </div>
              </div>
              <div className="sd__step">
                <div className="sd__dot" />
                <div>
                  <div className="sd__stepTitle">Release</div>
                  <div className="sd__stepSub">Funds sent to seller</div>
                </div>
              </div>
            </div>

            <div className="sd__split">
              <div className="sd__splitCol">
                <div className="sd__miniLabel">Estimated fee</div>
                <div className="sd__miniValue">3% + local taxes</div>
              </div>
              <div className="sd__splitCol">
                <div className="sd__miniLabel">Settlement</div>
                <div className="sd__miniValue">Instant / next-day</div>
              </div>
            </div>

            <div className="sd__cardBtns">
              <button className="sd__btn sd__btn--ghost" type="button">
                Open a deal
              </button>
              <button className="sd__btn sd__btn--soft" type="button">
                View dashboard
              </button>
            </div>
          </div>

          <div className="sd__stats">
            {stats.map((s) => (
              <div key={s.label} className="sd__stat">
                <div className="sd__statValue">{s.value}</div>
                <div className="sd__statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* HOW IT WORKS */}
      <section id="how" className="sd__container sd__section">
        <div className="sd__sectionHead">
          <h2 className="sd__h2">How SafeDeal works</h2>
          <p className="sd__sub">
            Built for everyday commerce — from $10 marketplace buys to large
            purchases.
          </p>
        </div>

        <div className="sd__grid3">
          <div className="sd__feature">
            <div className="sd__featureIcon">🧾</div>
            <h3>Create a deal</h3>
            <p>
              Share a secure link with the other party. Add amount, terms, and a
              verification window.
            </p>
          </div>
          <div className="sd__feature">
            <div className="sd__featureIcon">💰</div>
            <h3>We hold funds</h3>
            <p>
              Buyer funds the deal. Seller ships or delivers knowing the money is
              secured.
            </p>
          </div>
          <div className="sd__feature">
            <div className="sd__featureIcon">✅</div>
            <h3>Release or dispute</h3>
            <p>
              Buyer confirms to release. If something’s wrong, open a dispute and
              follow the process.
            </p>
          </div>
        </div>

        <div className="sd__callout">
          <div>
            <div className="sd__calloutTitle">Payments + wallets</div>
            <div className="sd__calloutText">
              Start with cards + local bank transfer. Expand with wallets per
              country (SV first, then CA + US).
            </div>
          </div>
          <a className="sd__btn sd__btn--soft" href="#pricing">
            See pricing
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="sd__container sd__section">
        <div className="sd__sectionHead">
          <h2 className="sd__h2">Simple pricing that scales</h2>
          <p className="sd__sub">
            Fees designed for frictionless adoption. Local taxes apply where
            required.
          </p>
        </div>

        <div className="sd__pricing">
          <div className="sd__priceCard">
            <div className="sd__priceTop">
              <div>
                <div className="sd__priceKicker">Everyday deals</div>
                <div className="sd__priceValue">3%</div>
                <div className="sd__priceNote">+ local taxes (e.g., IVA in SV)</div>
              </div>
              <div className="sd__badge">Most popular</div>
            </div>
            <ul className="sd__list">
              <li>Escrow hold & release</li>
              <li>Buyer & seller confirmations</li>
              <li>Basic dispute workflow</li>
              <li>Email support</li>
            </ul>
            <button className="sd__btn sd__btn--primary" type="button">
              Join the waitlist
            </button>
          </div>

          <div className="sd__priceCard sd__priceCard--alt">
            <div className="sd__priceTop">
              <div>
                <div className="sd__priceKicker">High-value / business</div>
                <div className="sd__priceValue">Custom</div>
                <div className="sd__priceNote">
                  Tiered fees + enhanced verification
                </div>
              </div>
            </div>
            <ul className="sd__list">
              <li>Higher limits & compliance-ready flow</li>
              <li>Optional ID + delivery proof</li>
              <li>Priority dispute handling</li>
              <li>Dedicated onboarding</li>
            </ul>
            <a className="sd__btn sd__btn--ghost" href="#waitlist">
              Talk to us
            </a>
          </div>
        </div>

        <div className="sd__fine">
          * Example only. Final pricing depends on payment rails and country.
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sd__container sd__section sd__sectionLast">
        <div className="sd__sectionHead">
          <h2 className="sd__h2">FAQ</h2>
          <p className="sd__sub">Short answers investors and users ask first.</p>
        </div>

        <div className="sd__faq">
          <details className="sd__qa" open>
            <summary>Is SafeDeal a marketplace?</summary>
            <p>
              No. SafeDeal is the escrow layer. You can use it inside any
              marketplace, social commerce, or direct deal.
            </p>
          </details>
          <details className="sd__qa">
            <summary>What happens if there’s a dispute?</summary>
            <p>
              Funds remain held while both sides provide evidence based on the
              deal terms (delivery proof, item condition, timelines).
            </p>
          </details>
          <details className="sd__qa">
            <summary>Which countries are supported?</summary>
            <p>
              Start in El Salvador, then expand across Central America and the US
              as payment rails and compliance are added.
            </p>
          </details>
          <details className="sd__qa">
            <summary>Can you escrow services too?</summary>
            <p>
              Yes. The buyer funds the deal, the seller delivers the service, and
              funds release when the buyer confirms.
            </p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sd__footer">
        <div className="sd__container sd__footerInner">
          <div className="sd__footerLeft">
            <div className="sd__footerBrand">SafeDeal</div>
            <div className="sd__footerSmall">
              © {year} SafeDeal. All rights reserved.
            </div>
          </div>
          <div className="sd__footerRight">
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
            <a href="#waitlist">Early access</a>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <div
        className={`sd__toast ${submitted ? "sd__toast--show" : ""}`}
        role="status"
        aria-live="polite"
      >
        ✅ Thanks — we’ll reach out when your invite is ready.
      </div>
    </div>
  );
}

const css = `
  :root{
    --bg:#050816;
    --panel: rgba(255,255,255,.06);
    --panel2: rgba(255,255,255,.08);
    --text: rgba(255,255,255,.92);
    --muted: rgba(255,255,255,.72);
    --muted2: rgba(255,255,255,.55);
    --line: rgba(255,255,255,.12);
    --brand:#7c3aed;
    --brand2:#22c55e;
    --shadow: 0 20px 60px rgba(0,0,0,.45);
  }
  *{box-sizing:border-box}
  html,body{height:100%}
  body{margin:0;background:radial-gradient(1200px 600px at 20% -10%, rgba(124,58,237,.35), transparent 55%), radial-gradient(900px 500px at 80% 0%, rgba(34,197,94,.22), transparent 55%), var(--bg); color:var(--text); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";}
  a{color:inherit; text-decoration:none}

  .sd{min-height:100vh; position:relative; overflow:hidden}
  .sd__glow{position:absolute; inset:-200px -200px auto -200px; height:520px; background: radial-gradient(closest-side, rgba(124,58,237,.35), transparent 65%); filter: blur(10px); pointer-events:none;}
  .sd__container{max-width:1120px; margin:0 auto; padding:0 20px;}

  .sd__nav{position:sticky; top:0; z-index:40; backdrop-filter: blur(14px); background: linear-gradient(to bottom, rgba(5,8,22,.88), rgba(5,8,22,.55)); border-bottom:1px solid var(--line)}
  .sd__navInner{display:flex; align-items:center; justify-content:space-between; padding:14px 0; gap:18px}

  .sd__brand{display:flex; align-items:center; gap:10px; min-width:260px}
  .sd__logo{display:inline-flex; align-items:center; justify-content:center; width:38px; height:38px; border-radius:14px; background: linear-gradient(135deg, rgba(124,58,237,.25), rgba(34,197,94,.18)); border:1px solid var(--line); box-shadow: 0 12px 30px rgba(0,0,0,.35)}
  .sd__brandText{display:flex; flex-direction:column; line-height:1.1}
  .sd__brandName{font-weight:800; letter-spacing:.2px}
  .sd__brandTag{font-size:12px; color:var(--muted2)}

  .sd__links{display:flex; align-items:center; gap:16px; color:var(--muted); font-size:14px}
  .sd__links a{padding:8px 10px; border-radius:12px; border:1px solid transparent}
  .sd__links a:hover{border-color:var(--line); background: rgba(255,255,255,.04)}
  .sd__linkPill{border-color: rgba(124,58,237,.35)!important; background: rgba(124,58,237,.14)}

  .sd__hero{display:grid; grid-template-columns: 1.1fr .9fr; gap:28px; padding:56px 20px 34px}

  .sd__pill{display:inline-flex; align-items:center; gap:10px; padding:10px 12px; border-radius:999px; border:1px solid var(--line); background: rgba(255,255,255,.04); color:var(--muted); width:max-content; font-size:13px}
  .sd__pillDot{width:8px; height:8px; border-radius:999px; background: radial-gradient(circle, var(--brand2), rgba(34,197,94,.3)); box-shadow: 0 0 0 6px rgba(34,197,94,.10)}

  .sd__h1{font-size:48px; line-height:1.06; margin:18px 0 12px; letter-spacing:-.6px}
  .sd__h1Accent{background: linear-gradient(90deg, #a78bfa, #22c55e); -webkit-background-clip:text; background-clip:text; color:transparent}
  .sd__lead{font-size:16.5px; color:var(--muted); line-height:1.55; max-width:52ch}

  .sd__ctaRow{margin-top:18px}
  .sd__form{display:flex; gap:10px; align-items:center; flex-wrap:wrap}
  .sd__input{flex:1; min-width:240px; padding:14px 14px; border-radius:14px; border:1px solid var(--line); background: rgba(255,255,255,.04); color:var(--text); outline:none}
  .sd__input::placeholder{color: rgba(255,255,255,.45)}
  .sd__input:focus{border-color: rgba(124,58,237,.55); box-shadow: 0 0 0 6px rgba(124,58,237,.12)}

  .sd__btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:13px 14px; border-radius:14px; border:1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.06); color:var(--text); cursor:pointer; font-weight:700}
  .sd__btn:hover{transform: translateY(-1px); background: rgba(255,255,255,.08)}
  .sd__btn:active{transform: translateY(0px)}
  .sd__btnArrow{font-weight:900; opacity:.9}
  .sd__btn--primary{background: linear-gradient(135deg, rgba(124,58,237,.95), rgba(34,197,94,.55)); border-color: rgba(255,255,255,.18)}
  .sd__btn--primary:hover{filter: brightness(1.05)}
  .sd__btn--ghost{background: transparent}
  .sd__btn--soft{background: rgba(124,58,237,.16); border-color: rgba(124,58,237,.30)}

  .sd__ctaHint{margin-top:10px; font-size:13px; color:var(--muted2)}

  .sd__trustRow{display:flex; gap:14px; flex-wrap:wrap; margin-top:18px}
  .sd__trustItem{display:flex; align-items:center; gap:8px; padding:10px 12px; border-radius:14px; border:1px solid var(--line); background: rgba(255,255,255,.03); color:var(--muted); font-size:13px}

  .sd__heroRight{display:flex; flex-direction:column; gap:14px}
  .sd__card{border-radius:22px; border:1px solid var(--line); background: rgba(255,255,255,.04); box-shadow: var(--shadow)}
  .sd__card--glass{background: linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.03))}
  .sd__cardTop{display:flex; align-items:flex-start; justify-content:space-between; padding:18px 18px 10px; gap:12px}
  .sd__cardKicker{font-size:12px; color:var(--muted2)}
  .sd__cardTitle{font-weight:800; margin-top:4px}
  .sd__status{font-size:12px; padding:8px 10px; border-radius:999px; border:1px solid rgba(34,197,94,.28); background: rgba(34,197,94,.10); color: rgba(229,255,240,.92)}

  .sd__timeline{padding:8px 18px 14px; display:flex; flex-direction:column; gap:12px}
  .sd__step{display:flex; gap:10px; align-items:flex-start; color:var(--muted)}
  .sd__dot{width:10px; height:10px; border-radius:999px; border:2px solid rgba(255,255,255,.28); margin-top:4px}
  .sd__step.done .sd__dot{border-color: rgba(34,197,94,.7); background: rgba(34,197,94,.35)}
  .sd__step.active .sd__dot{border-color: rgba(124,58,237,.85); background: rgba(124,58,237,.40); box-shadow: 0 0 0 6px rgba(124,58,237,.12)}
  .sd__stepTitle{font-weight:700; color: rgba(255,255,255,.9)}
  .sd__stepSub{font-size:12.5px; color:var(--muted2); margin-top:2px}

  .sd__split{display:grid; grid-template-columns:1fr 1fr; gap:10px; padding:0 18px 14px}
  .sd__splitCol{border:1px solid var(--line); border-radius:16px; padding:12px; background: rgba(255,255,255,.03)}
  .sd__miniLabel{font-size:12px; color:var(--muted2)}
  .sd__miniValue{font-weight:800; margin-top:4px}

  .sd__cardBtns{display:flex; gap:10px; padding:0 18px 18px}
  .sd__cardBtns .sd__btn{flex:1}

  .sd__stats{display:grid; grid-template-columns:repeat(3,1fr); gap:10px}
  .sd__stat{border:1px solid var(--line); background: rgba(255,255,255,.03); border-radius:18px; padding:14px}
  .sd__statValue{font-weight:900}
  .sd__statLabel{font-size:12px; color:var(--muted2); margin-top:4px}

  .sd__section{padding:40px 20px}
  .sd__sectionLast{padding-bottom:70px}
  .sd__sectionHead{display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; margin-bottom:16px}
  .sd__h2{font-size:30px; letter-spacing:-.3px; margin:0}
  .sd__sub{margin:0; color:var(--muted); max-width:62ch; line-height:1.5}

  .sd__grid3{display:grid; grid-template-columns:repeat(3,1fr); gap:14px}
  .sd__feature{border:1px solid var(--line); border-radius:22px; padding:18px; background: rgba(255,255,255,.03)}
  .sd__featureIcon{font-size:20px; width:42px; height:42px; display:flex; align-items:center; justify-content:center; border-radius:16px; border:1px solid var(--line); background: rgba(255,255,255,.04)}
  .sd__feature h3{margin:12px 0 6px; font-size:16px}
  .sd__feature p{margin:0; color:var(--muted); line-height:1.5; font-size:14px}

  .sd__callout{margin-top:14px; display:flex; justify-content:space-between; align-items:center; gap:14px; padding:16px 18px; border-radius:22px; border:1px solid rgba(124,58,237,.25); background: linear-gradient(90deg, rgba(124,58,237,.14), rgba(34,197,94,.08))}
  .sd__calloutTitle{font-weight:900}
  .sd__calloutText{color:var(--muted); margin-top:4px; font-size:14px}

  .sd__pricing{display:grid; grid-template-columns:1.05fr .95fr; gap:14px}
  .sd__priceCard{border:1px solid var(--line); border-radius:22px; padding:18px; background: rgba(255,255,255,.03)}
  .sd__priceCard--alt{background: rgba(255,255,255,.02)}
  .sd__priceTop{display:flex; align-items:flex-start; justify-content:space-between; gap:12px}
  .sd__priceKicker{font-size:12px; color:var(--muted2)}
  .sd__priceValue{font-size:42px; font-weight:1000; margin-top:6px; letter-spacing:-.6px}
  .sd__priceNote{color:var(--muted); font-size:13px; margin-top:2px}
  .sd__badge{font-size:12px; padding:8px 10px; border-radius:999px; border:1px solid rgba(124,58,237,.35); background: rgba(124,58,237,.14)}
  .sd__list{margin:14px 0 16px; padding:0; list-style:none; display:flex; flex-direction:column; gap:10px; color:var(--muted)}
  .sd__list li{position:relative; padding-left:22px}
  .sd__list li:before{content:"✓"; position:absolute; left:0; top:0; color: rgba(34,197,94,.95); font-weight:900}
  .sd__fine{margin-top:10px; color:var(--muted2); font-size:12px}

  .sd__faq{display:grid; grid-template-columns: 1fr; gap:10px}
  .sd__qa{border:1px solid var(--line); border-radius:18px; padding:14px 14px; background: rgba(255,255,255,.03)}
  .sd__qa summary{cursor:pointer; font-weight:800}
  .sd__qa p{color:var(--muted); line-height:1.55; margin:10px 0 0; font-size:14px}

  .sd__footer{border-top:1px solid var(--line); background: rgba(255,255,255,.02)}
  .sd__footerInner{display:flex; justify-content:space-between; align-items:center; gap:16px; padding:18px 0}
  .sd__footerBrand{font-weight:900}
  .sd__footerSmall{color:var(--muted2); font-size:12px; margin-top:4px}
  .sd__footerRight{display:flex; gap:14px; color:var(--muted); font-size:13px}
  .sd__footerRight a{padding:8px 10px; border-radius:12px; border:1px solid transparent}
  .sd__footerRight a:hover{border-color:var(--line); background: rgba(255,255,255,.04)}

  .sd__toast{position: fixed; left: 50%; bottom: 18px; transform: translateX(-50%) translateY(20px); opacity:0; padding:12px 14px; border-radius:14px; border:1px solid rgba(255,255,255,.14); background: rgba(5,8,22,.75); backdrop-filter: blur(10px); box-shadow: var(--shadow); color:var(--text); font-weight:700; font-size:13px; transition: all .25s ease; z-index:60}
  .sd__toast--show{opacity:1; transform: translateX(-50%) translateY(0)}

  @media (max-width: 980px){
    .sd__hero{grid-template-columns: 1fr; padding-top:38px}
    .sd__brand{min-width:auto}
    .sd__links{display:none}
    .sd__stats{grid-template-columns:1fr}
    .sd__grid3{grid-template-columns:1fr}
    .sd__pricing{grid-template-columns:1fr}
    .sd__h1{font-size:40px}
  }
`;
