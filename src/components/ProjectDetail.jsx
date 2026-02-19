import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { projects } from "./Projects.jsx"
import { ExternalLink, GitHub, Play } from "lucide-react"

function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const p = projects[parseInt(id, 10)]
    setProject(p || null)
  }, [id])

  if (!project) {
    return (
      <div className="container">
        <Link to="/" className="back-link">&larr; Back to Projects</Link>
        <div className="card">
          <p>Project not found.</p>
        </div>
      </div>
    )
  }

  return (
    <section className="project-detail container">
      <Link to="/" className="back-link">&larr; Back to Projects</Link>
      <div className="detail-card">
        <div className="detail-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="detail-content">
          <h1>{project.title} <span className="badge">Featured</span></h1>
          <p className="muted">{project.description}</p>

          <div className="tech-list">
            {project.technologies && project.technologies.map((t, i) => (
              <span key={i} className="tech-pill">{t}</span>
            ))}
          </div>

          <div className="actions">
            {project.live && (
              <a href={project.live} target="_blank" className="btn live">
                <ExternalLink size={14} style={{ marginRight: 6 }} /> Live
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" className="btn github">
                <GitHub size={14} style={{ marginRight: 6 }} /> GitHub
              </a>
            )}
            {project.video && (
              <a href={project.video} target="_blank" className="btn demo">
                <Play size={14} style={{ marginRight: 6 }} /> Demo
              </a>
            )}
          </div>

          <div className="about">
            <h3>About This Project</h3>
            <p>{project.longDescription || project.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
