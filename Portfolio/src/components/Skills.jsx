// ─── Skills ───────────────────────────────────────────────────────────────

// ── Static data (lives outside component — never changes) ──────────────────
const skillGroups = [
  {
    category: "Core",
    icon: "⚡",
    skills: [
      { name: "HTML5",            level: 90 },
      { name: "CSS3",      level: 88 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "React.js",         level: 78 },
    ],
  },
  {
    category: "Styling & Tools",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS",   level: 85 },
      { name: "Framer Motion",  level: 65 },
      { name: "Git / GitHub",   level: 75 },
    ],
  },
  {
    category: "Learning",
    icon: "🚀",
    skills: [
      { name: "Node.js",    level: 50 },
      { name: "DSA", level: 45 },
      { name: "Express.js",    level: 40 },
      { name: "MongoDB",   level: 30 },
    ],
  },
];

const tools = [
  "VS Code",
  "Chrome DevTools",
  "Postman",
  "Vercel",
  "npm",
  "Vite",
  "Prettier",
  "Git",
  "GitHub",
  "Figma"
];

// ── SkillBar sub-component (only used by Skills) ───────────────────────────
const SkillBar = ({ name, level }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>

      {/* name + percentage */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--text)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--muted)",
          }}
        >
          {level}%
        </span>
      </div>

      {/* progress track */}
      <div
        style={{
          height: 4,
          background: "var(--border)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {/* filled bar */}
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            background: "linear-gradient(90deg, var(--accent1), var(--accent3))",
            borderRadius: 2,
            transition: "width 1.2s cubic-bezier(.16, 1, .3, 1)",
          }}
        />
      </div>

    </div>
  );
};

// ── Skills main component ──────────────────────────────────────────────────
const Skills = () => {
  return (
    <section
      id="skills"
      style={{ padding: "7rem 2.5rem", background: "var(--surface)" }}
    >
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
            // my toolkit
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Skills &amp; <span className="grad">Technologies</span>
          </h2>
        </div>

        {/* ── Skill group cards ── */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {skillGroups.map(({ category, icon, skills }) => (
            <div
              key={category}
              className="proj-card"
              style={{ borderRadius: 16, padding: "2rem" }}
            >
              {/* card heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.8rem",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  {category}
                </h3>
              </div>

              {/* skill bars */}
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* ── Tools pill cloud ── */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginTop: "3rem",
            justifyContent: "center",
          }}
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="pill"
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--muted)",
              }}
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;