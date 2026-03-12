// ─── Contact ──────────────────────────────────────────────────────────────

import { useState } from "react";
import emailjs from "@emailjs/browser";

// ── EmailJS credentials ────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ── Static data ────────────────────────────────────────────────────────────
const socials = [
  { label: "GitHub",   icon: "⌥", href: "https://github.com/23kushwahaakash"          },
  { label: "LinkedIn", icon: "💼", href: "#"                                            },
  { label: "Twitter",  icon: "𝕏",  href: "#"                                            },
  { label: "Email",    icon: "✉",  href: "mailto:you@example.com"                       },
];

// ── Shared styles (outside component — never changes) ──────────────────────
const inputStyle = {
  width: "100%",
  padding: "0.9rem 1.2rem",
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "0.93rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const onFocus = (e) => (e.target.style.borderColor = "var(--accent1)");
const onBlur  = (e) => (e.target.style.borderColor = "var(--border)");

// ── Contact main component ─────────────────────────────────────────────────
const Contact = () => {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(false);
  const [form, setForm]       = useState({ name: "", email: "", msg: "" });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.msg,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", msg: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 4000);
      });
  };

  return (
    <section
      id="contact"
      style={{ padding: "7rem 2.5rem", background: "var(--surface)" }}
    >
      <div style={{ maxWidth: 650, margin: "0 auto" }}>

        {/* ── Section heading ── */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent1)",
              letterSpacing: "0.1em",
              marginBottom: "0.8rem",
            }}
          >
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Let's <span className="grad">Work Together</span>
          </h2>
          <p style={{ color: "var(--muted)", fontWeight: 300, lineHeight: 1.7 }}>
            I'm currently open to internships, freelance gigs, and cool
            collaborations. Drop me a message!
          </p>
        </div>

        {/* ── Form card ── */}
        <div
          className="reveal proj-card"
          style={{ borderRadius: 20, padding: "2.5rem" }}
        >

          {/* ── Success state ── */}
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
              <p
                className="grad"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                }}
              >
                Message Sent!
              </p>
              <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
                Thanks for reaching out — I'll get back to you soon.
              </p>
            </div>

          ) : error ? (

            /* ── Error state ── */
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>😕</div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "var(--accent4)",
                }}
              >
                Something went wrong!
              </p>
              <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
                Please try again or email me directly.
              </p>
            </div>

          ) : (

            /* ── Form ── */
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
            >
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <input
                required
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <textarea
                required
                rows={5}
                placeholder="What's on your mind?"
                value={form.msg}
                onChange={handleChange("msg")}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <button
                type="submit"
                className="btn-glow"
                disabled={loading}
                style={{
                  padding: "0.9rem",
                  borderRadius: 10,
                  background: loading
                    ? "var(--border)"                                          // grey while sending
                    : "linear-gradient(135deg, var(--accent1), var(--accent2))",
                  color: loading ? "var(--muted)" : "#080e09",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.03em",
                  transition: "background 0.3s",
                }}
              >
                {loading ? "Sending..." : "Send Message ✈"}
              </button>
            </form>
          )}
        </div>

        {/* ── Social links ── */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {socials.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="pill"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.9rem 1.4rem",
                borderRadius: 12,
                textDecoration: "none",
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;