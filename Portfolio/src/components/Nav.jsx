import { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.1rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,14,9,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
        }}
      >
        <span className="grad">{"<"}</span>
        Akash Kushwaha
        <span className="grad">{"/>"}</span>
      </span>

      {/* Links */}
      <div style={{ display: "flex", gap: "2rem" }}>
        {["About", "Skills", "Projects", "Contact"].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="nav-link"
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;