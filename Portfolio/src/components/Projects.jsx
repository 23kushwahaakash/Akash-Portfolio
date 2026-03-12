// ─── Projects ─────────────────────────────────────────────────────────────

// ── Static data (lives outside component — never changes) ──────────────────
const projects = [
  {
    title:  "NextStep",
    desc:   "A full-featured job portal and professional networking platform.",
    tags:   ["React", "Tailwind", "Axios", "REST APIs", "JavaScript", "Redux Toolkit"],
    emoji:  "💼",
    accent: "var(--accent1)",
    link:   "https://nextstep-gamma.vercel.app/",
    github: "https://github.com/23kushwahaakash/nextstep.git",
  },
  {
    title:  "Flappy Bird Game",
    desc:   "A python-based arcade game.",
    tags:   ["Python", "Pygame"],
    emoji:  "🐦",
    accent: "var(--accent3)",
    link:   null,   // no live demo — handled gracefully below
    github: "https://github.com/CSI-Trainees-25/Akash2431099-repo3.git",
  },
  {
    title:  "Portfolio v1",
    desc:   "My first personal portfolio — a minimal static site. Designed from scratch in Figma, then coded in HTML/CSS/JS.",
    tags:   ["HTML", "CSS"],
    emoji:  "👨🏻‍💻",
    accent: "var(--accent4)",
    link:   "https://23kushwahaakash.github.io/Portfolio/",
    github: "https://github.com/23kushwahaakash/Portfolio.git",
  },
];

// ── ProjectCard sub-component ──────────────────────────────────────────────
const ProjectCard = ({ title, desc, tags, emoji, accent, link, github }) => {
  return (
    <div
      className="proj-card"
      style={{
        borderRadius: 16,
        padding: "2rem",
        // ✅ flex column so links always pin to the bottom
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* emoji icon */}
      <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>
        {emoji}
      </div>

      {/* colored accent bar */}
      <div
        style={{
          width: 32,
          height: 3,
          background: accent,
          borderRadius: 2,
          marginBottom: "1rem",
        }}
      />

      {/* title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.2rem",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h3>

      {/* description — flexGrow pushes everything below it down equally */}
      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.88rem",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
          fontWeight: 300,
          flexGrow: 1,   // ✅ fills remaining space — this equalises all cards
        }}
      >
        {desc}
      </p>

      {/* tech tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1.8rem",
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              padding: "0.25rem 0.7rem",
              borderRadius: 999,
              border: `1px solid ${accent}55`,
              color: accent,
              background: `${accent}11`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* links — always pinned to bottom, same position on every card */}
      <div style={{ display: "flex", gap: "1rem" }}>

        {/* ✅ only show Live Demo if link exists */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: accent,
              textDecoration: "none",
              letterSpacing: "0.05em",
              cursor:"pointer",
            }}
          >
            Live Demo ↗
          </a>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--border)",
              letterSpacing: "0.05em",
              cursor:"pointer",
            }}
          >
            No Live Demo
          </span>
        )}

        {/* github always clickable */}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            cursor:"pointer",
          }}
        >
          GitHub →
        </a>
      </div>
    </div>
  );
};

// ── Projects main component ────────────────────────────────────────────────
const Projects = () => {
  return (
    <section id="projects" style={{ padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Section heading ── */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            // things i've built
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Featured <span className="grad">Projects</span>
          </h2>
        </div>

        {/* ── Project cards grid ── */}
        {/* ✅ alignItems stretch makes all cards same height */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;