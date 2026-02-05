import { useEffect, useState } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

function Projects() {
  const [ref, visible] = useScrollReveal()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError("Failed to load projects")
        setLoading(false)
      })
  }, [])

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`projects reveal ${visible ? "active" : ""}`}
    >
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-briefcase"></i> Featured Projects</h2>
          <p>Some of our recent work</p>
        </div>
        <div className="projects-grid">
          {loading ? (
            <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>Loading projects...</p>
          ) : error ? (
            <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "red" }}>{error}</p>
          ) : projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={project.id} className={`project-card reveal delay-${(index % 4) + 1} ${visible ? "active" : ""}`}>
                <div className="project-image">
                  <i className={project.icon || "fas fa-laptop"}></i>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {Array.isArray(project.technologies) ? (
                      project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))
                    ) : null}
                  </div>
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "15px" }}>
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>No projects found</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects