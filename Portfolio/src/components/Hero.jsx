import { useState, useEffect } from "react";

// ─── Typewriter (sub-component, only used by Hero) ────────────────────────
const Typewriter = ({ words }) => {
  const [display, setDisplay]   = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting]  = useState(false);

  useEffect(() => {
    const word  = words[wordIndex];
    const speed = deleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!deleting) {
        // typing forward
        setDisplay(word.slice(0, charIndex + 1));

        if (charIndex + 1 === word.length) {
          // finished typing — pause then start deleting
          setTimeout(() => setDeleting(true), 1600);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        // deleting backward
        setDisplay(word.slice(0, charIndex - 1));

        if (charIndex - 1 === 0) {
          // finished deleting — move to next word
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer); // cleanup
  }, [display, deleting, wordIndex, charIndex, words]);

  return (
    <span>
      <span className="grad">{display}</span>
      <span className="cursor-blink" style={{ color: "var(--accent1)" }}>
        |
      </span>
    </span>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating blobs */}
      <div
        className="blob1"
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,241,53,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="blob2"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "2%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,106,53,0.22) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Background grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div style={{ maxWidth: 800, position: "relative", zIndex: 1 }}>

        {/* Available badge */}
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1px solid var(--border)",
            borderRadius: 999,
            padding: "0.35rem 1rem",
            marginBottom: "1.8rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--muted)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 6px #4ade80",
            }}
          />
          Open to opportunities · Fresher
        </div>

        {/* Name */}
        <h1
          className="hero-name"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "0.6rem",
          }}
        >
          Hi, I'm
          <br />
          <span className="grad">Akash Kushwaha</span>
        </h1>

        {/* Typewriter role */}
        <h2
          className="hero-role"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
            color: "var(--muted)",
            marginBottom: "1.4rem",
          }}
        >
          I build{" "}
          <Typewriter
            words={[
              "beautiful UIs",
              "responsive web experiences",
              "smooth React applications",
              "clean & scalable frontends",
            ]}
          />
        </h2>

        {/* Description */}
        <p
          className="hero-desc"
          style={{
            fontSize: "1.05rem",
            color: "var(--muted)",
            maxWidth: 520,
            lineHeight: 1.75,
            marginBottom: "2.2rem",
            fontWeight: 300,
          }}
        >
          An aspiring full-stack developer, currently specializing in 
          frontend development.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-cta"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            className="btn-glow"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              background:
                "linear-gradient(135deg, var(--accent1), var(--accent2))",
              color: "#080e09",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
            }}
          >
            View My Work ↓
          </a>

          <a
            href="#contact"
            className="btn-glow"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              border: "1px solid var(--border)",
              borderRadius: 8,
              color: "var(--text)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              background: "var(--card)",
            }}
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;