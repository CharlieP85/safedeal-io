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
    <div style={{ fontFamily: "system-ui", minHeight: "100vh", background: "#0b0b0f", color: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 18px" }}>
        {/* NAV */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 14,
                background: "linear-gradient(135deg, #2563eb, #facc15)",
                display: "grid",
                placeItems: "center",
                fontWeight: 800,
              }}
            >
              SD
            </div>
            <div>
             

