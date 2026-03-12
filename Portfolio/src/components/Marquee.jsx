// ─── Marquee ──────────────────────────────────────────────────────────────
// Scrolling ticker strip — shows only tech logos, no text

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite,
  SiNodedotjs,
  SiPython,
  SiC,
  SiAxios,
  SiRedux,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc"; 

// each item: icon component + its brand color + tooltip label
const items = [
  { Icon: SiJavascript,  color: "#F7DF1E", label: "JavaScript"  },
  { Icon: SiReact,       color: "#61DAFB", label: "React"        },
  { Icon: SiHtml5,       color: "#E34F26", label: "HTML5"        },
  { Icon: SiCss,        color: "#1572B6", label: "CSS3"         },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  { Icon: SiGit,         color: "#F05032", label: "Git"          },
  { Icon: SiGithub,      color: "#eef5e0", label: "GitHub"       },
  { Icon: SiVite,        color: "#646CFF", label: "Vite"         },
  { Icon: SiNodedotjs,   color: "#339933", label: "Node.js"      },
  { Icon: SiPython,      color: "#3776AB", label: "Python"        },
  { Icon: SiC,           color: "#A8B9CC", label: "C"             },
  { Icon: SiAxios,       color: "#5A29E4", label: "Axios"         },
  { Icon: SiRedux,       color: "#764ABC", label: "Redux"         },
  { Icon: VscVscode,     color: "#007ACC", label: "VS Code"       },
  { Icon: SiVercel,      color: "#eef5e0", label: "Vercel"        },
];

// doubled so the loop looks seamless
const doubled = [...items, ...items];

const Marquee = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.1rem 0",
        background: "var(--surface)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          width: "max-content",
        }}
      >
        {doubled.map(({ Icon, color, label }, index) => (
          <span
            key={index}
            title={label}             /* tooltip on hover */
            style={{
              color: color,
              fontSize: "2rem",
              opacity: 0.7,
              transition: "opacity 0.2s, transform 0.2s",
              cursor: "default",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Icon />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;