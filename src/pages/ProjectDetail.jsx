import projects from "../data/projects_detail"
import Counter from "../components/Counter"

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

        <div className="detail-card">
          <div className="detail-image">
            <img src={p.image} alt={p.title} />
            <span className="badge">Featured</span>
          </div>

          <div className="detail-body">
            <h1><i className="fas fa-folder-open"></i> {p.title}</h1>
            <p className="lead">{p.long_description || p.longDescription || p.description}</p>

            <div className="detail-meta">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn live">View Live</a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn github">View Code</a>
              )}
              {p.video && (
                <a href={p.video} target="_blank" rel="noreferrer" className="btn demo">Watch Demo</a>
              )}
            </div>

            <div className="detail-sections">
              <div className="section">
                <h3>About This Project</h3>
                <p>{p.long_description || p.longDescription || p.description}</p>
                <div style={{marginTop:12}}>
                  <button className="btn" onClick={() => (window.location.hash = "")}>Back to Projects</button>
                </div>
              </div>

              <div className="section">
                <h3>Technologies Used</h3>
                <div className="project-tech">
                  {p.technologies && p.technologies.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {p.icons && p.icons[i] && <i className={p.icons[i]} style={{marginRight:8}}></i>}
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{height:24}} />

        <div className="stats-grid">
          <div className={`stat reveal delay-1`}>
            <Counter end={20} />
            <p>Projects Delivered</p>
          </div>
          <div className={`stat reveal delay-2`}>
            <Counter end={15} />
            <p>Satisfied Clients</p>
          </div>
          <div className={`stat reveal delay-3`}>
            <Counter end={1000} />
            <p>Hours of Development</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
