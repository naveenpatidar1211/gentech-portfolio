import { useScrollReveal } from "../hooks/useScrollReveal"
import projects from "../data/projects_detail"

function Projects() {
  const [ref, visible] = useScrollReveal()

  

  return (
    <section id="projects" ref={ref} className={`projects reveal ${visible ? "active" : ""}`}>
      <div className="container">

        <div className="section-header">
          <h2><i className="fas fa-diagram-project"></i> Featured Projects</h2>
          <p>AI platforms, automation pipelines and production integrations</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card reveal delay-${(i%3)+1} ${visible ? "active" : ""}`}>

              {/* IMAGE */}
              <div className="project-image">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-content">
                <h3>{p.title}</h3>

                <p className="project-desc">{p.description}</p>

                {/* TECH TAGS */}
                <div className="project-tech">
                  {p.technologies.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="project-actions">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn live">
                        Live
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn github">
                        GitHub
                      </a>
                    )}
                    {p.video && (
                      <a href={p.video} target="_blank" rel="noreferrer" className="btn demo">
                        Demo
                      </a>
                    )}
                    <button
                      className="btn details"
                      onClick={() => (window.location.hash = `#/project/${i}`)}
                    >
                      Details
                    </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why do programmers prefer dark mode? Because light attracts bugs! 🐛

export default Projects
