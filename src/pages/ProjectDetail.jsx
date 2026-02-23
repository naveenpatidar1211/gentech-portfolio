import { useEffect } from "react"
import projects from "../data/projects_detail"
import Counter from "../components/Counter"

// Tech icon mapping
const techIcons = {
  Python: "🐍",
  FastAPI: "⚡",
  PostgreSQL: "🐘",
  PostGIS: "🗺️",
  AWS: "☁️",
  React: "⚛️",
  TypeScript: "📘",
  Mapbox: "🗺️",
  OpenAI: "🤖",
  Anthropic: "🧠",
  Gemini: "✨",
  "AWS Bedrock": "🪨",
  PySpark: "⚡",
  Flask: "🍶",
  "Zoho CRM": "📊",
  "Zoho Books": "📖",
  "Zoho API": "🔌",
  Webhooks: "🪝",
  JavaScript: "📜",
  "Node.js": "🟢",
  Express: "🚂",
  MongoDB: "🍃",
  Firebase: "🔥",
  TailwindCSS: "🎨",
  "Next.js": "▲",
  Vue: "💚",
}

function ProjectDetail({ index }) {
  const p = projects[index]

  /* =========================
     Scroll to top when opening project
  ========================= */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [index])

  /* =========================
     Handle browser BACK button
  ========================= */
  useEffect(() => {
    const handleBack = () => {
      if (!window.location.hash) {
        const el = document.getElementById("projects")
        el?.scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("hashchange", handleBack)

    return () => {
      window.removeEventListener("hashchange", handleBack)
    }
  }, [])

  /* =========================
     Shared back navigation
  ========================= */
  const goBackToProjects = () => {
    window.location.hash = ""

    setTimeout(() => {
      const el = document.getElementById("projects")
      el?.scrollIntoView({ behavior: "smooth" })
    }, 80)
  }

  if (!p) {
    return (
      <section className="project-detail not-found">
        <div className="container">
          <p>Project not found.</p>
          <button className="btn" onClick={goBackToProjects}>
            Back to Projects
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="container">

        <a className="back-link" onClick={goBackToProjects}>
          ← Back to Projects
        </a>

        {/* HERO */}
        <div className="detail-hero">

          <div className="detail-image">
            <img src={p.image} alt={p.title} />
          </div>

          <div className="detail-body">
            <h1>{p.title}</h1>
            <p className="lead">{p.description}</p>

            <div className="meta-row">
              <div>⏱ Timeline <span>N/A</span></div>
              <div>📂 Category <span>Web</span></div>
              <div>⚡ Status <span>Active</span></div>
            </div>

            <div className="detail-actions">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn live">
                  Live
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn github">
                  Code
                </a>
              )}
              {p.video && (
                <a href={p.video} target="_blank" rel="noreferrer" className="btn demo">
                  Demo
                </a>
              )}
            </div>

            <h4 className="tech-title">Technologies Used</h4>
            <div className="project-tech">
              {p.technologies?.map((t, i) => (
                <span key={i} className="tech-pill">
                  <span className="tech-icon">{techIcons[t] || "💻"}</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="detail-section">
          <h3>About This Project</h3>
          <p>{p.long_description}</p>
        </div>

        {/* STATS */}
        <div className="stats-row">

          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <Counter end={20} />
            <h5>Projects Delivered</h5>
            <p>Successfully completed projects across various domains</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🤝</div>
            <Counter end={15} />
            <h5>Satisfied Clients</h5>
            <p>Building long-term relationships with our clients</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <Counter end={1000} />
            <h5>Hours of Development</h5>
            <p>Dedicated to creating exceptional digital experiences</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectDetail