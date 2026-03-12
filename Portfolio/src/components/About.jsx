// ─── About ────────────────────────────────────────────────────────────────

const stats = [
  { label: "Projects Built", val: "10+", top: "10%", right: "-10%" },
  { label: "Cups of Coffee", val: "∞",   bottom: "12%", right: "-8%" },
];

const info = [
  { icon: "📍", text: "Ghaziabad"    },
  { icon: "🎓", text: "ECE Under-graduate"  },
  { icon: "🌐", text: "English / Hindi" },
];

const About = () => {
  return (
    <section
      id="about"
      style={{ padding: "7rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >

        {/* ── Left: Avatar + stat chips ── */}
        <div style={{ position: "relative" }}>

          {/* gradient border avatar */}
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              maxWidth: 380,
              borderRadius: 24,
              background:
                "linear-gradient(135deg, var(--accent1) 0%, var(--accent2) 50%, var(--accent3) 100%)",
              padding: 3,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 22,
                background: "var(--card)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
              }}
            >
              👨‍💻
            </div>
          </div>

          {/* floating stat chips */}
          {stats.map(({ label, val, ...position }) => (
            <div
              key={label}
              style={{
                position: "absolute",
                ...position,
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "0.7rem 1.2rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="grad"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--muted)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: Text content ── */}
        <div>

          {/* section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent1)",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
            }}
          >
            // about me
          </p>

          {/* heading */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Turning ideas into
            <br />
            <span className="grad">pixel-perfect</span> reality
          </h2>

          {/* bio paragraphs */}
          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.85,
              marginBottom: "1rem",
              fontWeight: 300,
            }}
          >
            Aspiring Full Stack Developer, with strong fundamentals in HTML, CSS, JavaScript and React.js.
            Hands-on experience in building responsive, user-friendly web-interfaces and integrating REST APIs through
            academic and personal projects.
          </p>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            When I'm not coding, you'll find me{" "}
            <span style={{ color: "var(--accent4)" }}>
              sketching UI ideas
            </span>
            , binging design YouTube, or trying to recreate cool animations I
            saw on the internet.
          </p>

          {/* info chips */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {info.map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                }}
              >
                {icon} {text}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;