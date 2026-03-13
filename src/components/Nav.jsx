import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NAVBAR_HEIGHT = "64px";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);
  const sections = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        height: NAVBAR_HEIGHT,
        padding: "0 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,14,9,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.35s ease",
      }}>

        {/* Logo */}
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}>
          <span className="grad">{"<"}</span>
          Akash Kushwaha
          <span className="grad">{"/>"}</span>
        </span>

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{ display: "flex", gap: "2rem" }}>
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="nav-link">
              {section}
            </a>
          ))}
        </div>

        {/* Menu icon button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            background: menuOpen
              ? "rgba(200,241,53,0.1)"
              : "rgba(13,21,14,0.6)",
            border: "1px solid rgba(200,241,53,0.15)",
            borderRadius: "10px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            color: "var(--accent1)",
            fontSize: "1.3rem",
            transition: "background 0.25s, border-color 0.25s",
          }}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </nav>

      {/* ── Dim overlay ── */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 198,
          background: "rgba(0,0,0,0.3)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Floating popup — freely floating, not touching any edge ── */}
      <div style={{
        position: "fixed",
        top: `calc(${NAVBAR_HEIGHT} + 16px)`, // gap from top
        right: "2rem",                          // ✅ gap from right edge
        zIndex: 199,
        width: "180px",
        height: "auto",
        background: "rgba(13, 21, 14, 0.65)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(200,241,53,0.13)",
        borderRadius: "16px",                   // ✅ all 4 corners rounded
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1.4rem 1.6rem 1.6rem 1.6rem",
        gap: "0",
        transform: menuOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.95)",
        opacity: menuOpen ? 1 : 0,
        transition: "transform 0.3s cubic-bezier(.16,1,.3,1), opacity 0.25s ease",
        pointerEvents: menuOpen ? "auto" : "none",
      }}>

        {/* lime accent bar */}
        <div style={{
          width: 24, height: 2,
          background: "var(--accent1)",
          borderRadius: 2,
          marginBottom: "1.2rem",
        }} />

        {/* nav links */}
        {sections.map((section, i) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            onClick={handleLinkClick}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
              padding: "0.55rem 0",
              width: "100%",
              cursor: "pointer",
              borderBottom: i < sections.length - 1
                ? "1px solid rgba(200,241,53,0.06)"
                : "none",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(10px)",
              transition: `opacity 0.3s ease ${i * 0.06 + 0.08}s,
                           transform 0.3s ease ${i * 0.06 + 0.08}s,
                           color 0.2s`,
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent1)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
          >
            {section}
          </a>
        ))}
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 640px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Nav;