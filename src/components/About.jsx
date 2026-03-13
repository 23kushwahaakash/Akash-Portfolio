// ─── About ────────────────────────────────────────────────────────────────

import avatar from "../assets/avatar.png";

const info = [
  { icon: "📍", text: "Ghaziabad"          },
  { icon: "🎓", text: "ECE Under-graduate" },
  { icon: "🌐", text: "English / Hindi"    },
];

const About = () => {
  return (
    <section id="about" style={{ padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div className="reveal about-grid">

          {/* ── Left: Photo ── */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 340,
            }}>
              {/* gradient border frame */}
              <div style={{
                borderRadius: 24,
                background: "linear-gradient(135deg, var(--accent1) 0%, var(--accent2) 50%, var(--accent3) 100%)",
                padding: 3,
              }}>
                <div style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: "var(--card)",
                  aspectRatio: "1",
                }}>
                  <img
                    src={avatar}
                    alt="Akash Kushwaha"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* glow behind photo */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: 24,
                background: "radial-gradient(circle, rgba(200,241,53,0.1) 0%, transparent 70%)",
                filter: "blur(20px)",
                zIndex: -1,
              }} />
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div>

            {/* section label */}
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent1)",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
            }}>
            </p>

            {/* heading */}
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}>
              Turning ideas into<br />
              <span className="grad">pixel-perfect</span> reality
            </h2>

            {/* bio paragraphs */}
            <p style={{
              color: "var(--muted)",
              lineHeight: 1.85,
              marginBottom: "1rem",
              fontWeight: 300,
            }}>
              Aspiring Full Stack Developer, with strong fundamentals in HTML, CSS,
              JavaScript and React.js. Hands-on experience in building responsive,
              user-friendly web-interfaces and integrating REST APIs through academic
              and personal projects.
            </p>

            <p style={{
              color: "var(--muted)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}>
              When I'm not coding, you'll find me{" "}
              <span style={{ color: "var(--accent4)" }}>sketching UI ideas</span>,
              binging design YouTube, or trying to recreate cool animations I saw
              on the internet.
            </p>

            {/* info chips */}
            <div style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}>
              {info.map(({ icon, text }) => (
                <div key={text} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                }}>
                  {icon} {text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* tablet */
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        /* mobile */
        @media (max-width: 480px) {
          .about-grid {
            gap: 2rem;
          }
          #about {
            padding: 5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;