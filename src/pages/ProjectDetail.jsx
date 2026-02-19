import projects from "../data/projects_detail"

function ProjectDetail({ index }) {
  const p = projects[index]

  if (!p) {
    return (
      <section className="project-detail not-found">
        <div className="container">
          <p>Project not found.</p>
          <button className="btn" onClick={() => (window.location.hash = "")}>Back to Projects</button>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="container">

        <a className="back-link" onClick={() => (window.location.hash = "")}>← Back to Projects</a>

        {/* HERO CARD */}
        <div className="detail-hero">

          <div className="detail-image">
            <img src={p.image} alt={p.title} />
            <span className="badge">Featured</span>
          </div>

          <div className="detail-body">
            <h1>{p.title}</h1>

            <p className="lead">{p.description}</p>

            {/* META ROW */}
            <div className="meta-row">
              <div>⏱ Timeline <span>N/A</span></div>
              <div>📂 Category <span>Web</span></div>
              <div>⚡ Status <span>Active</span></div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="detail-actions">
              {p.live && <a href={p.live} target="_blank" className="btn live">Live</a>}
              {p.github && <a href={p.github} target="_blank" className="btn github">Code</a>}
              {p.video && <a href={p.video} target="_blank" className="btn demo">Demo</a>}
            </div>

            {/* TECH PILLS */}
            <h4 className="tech-title">Technologies Used</h4>
            <div className="project-tech">
              {p.technologies?.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>

          </div>
        </div>

        {/* ABOUT CARD */}
        <div className="detail-section">
          <h3>About This Project</h3>
          <p>{p.long_description || p.description}</p>
        </div>

      </div>
    </section>
  )
}

export default ProjectDetail
