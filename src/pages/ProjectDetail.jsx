import React, { useEffect, useState } from "react";
import projects from "../data/projects_detail";
import "./ProjectDetail.css";

export default function ProjectDetail(){
  const [project, setProject] = useState(null);

  useEffect(()=>{
    const update = () => {
      const m = window.location.hash.match(/#\/project\/(\d+)/);
      const idx = m ? parseInt(m[1],10) : 0;
      setProject(projects[idx] || projects[0]);
    };
    update();
    window.addEventListener("hashchange", update);
    return ()=> window.removeEventListener("hashchange", update);
  },[]);

  if(!project) return null;
  const paragraphs = (project.long_description || project.description || "").split("\n\n");

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">Naveen Patidar</h2>
        <nav>
          <a onClick={()=>window.location.hash=''}> Home</a>
          <a onClick={()=>window.location.hash='#/projects'}> Projects</a>
          <a onClick={()=>window.location.hash='#/skills'}> Skills</a>
          <a onClick={()=>window.location.hash='#/experience'}> Experience</a>
          <a onClick={()=>window.location.hash='#/education'}> Education</a>
          <a onClick={()=>window.location.hash='#/contact'}> Contact</a>
        </nav>
      </aside>

      <main className="page-content">
        <div className="container">
          <div className="stats-row">
            <div className="stat-card"><div className="stat-emoji"></div><h3>20+</h3><p>Projects Delivered</p></div>
            <div className="stat-card"><div className="stat-emoji"></div><h3>15+</h3><p>Satisfied Clients</p></div>
            <div className="stat-card"><div className="stat-emoji"></div><h3>1,000+</h3><p>Hours of Development</p></div>
          </div>

          <div className="project-detail">
            <div className="detail-hero">
              <div className="detail-image">
                {project.image ? <img src={project.image} alt={project.title} /> : null}
              </div>

              <div className="detail-body">
                <div className="badge">Project</div>
                <h1>{project.title}</h1>

                <div className="meta-row">
                  <div><strong>Timeline:</strong> {project.timeline || '2024'}</div>
                  <div><strong>Category:</strong> {project.category || 'Web App'}</div>
                  <div><strong>Status:</strong> {project.status || 'Live'}</div>
                </div>

                <div className="detail-actions">
                  {project.live && <a className="btn" href={project.live} target="_blank" rel="noreferrer">Live</a>}
                  {project.github && <a className="btn" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                  {project.video && <a className="btn" href={project.video} target="_blank" rel="noreferrer">Demo</a>}
                  <button className="btn secondary" onClick={()=>window.location.hash=''}>Back to Projects</button>
                </div>

                <div className="tech-list">
                  {project.technologies && project.technologies.map((t,i)=>(
                    <span className="tech-pill" key={i}>{t}</span>
                  ))}
                </div>

                <div className="detail-section">
                  <h3>About</h3>
                  {paragraphs.map((p,idx)=> <p key={idx}>{p}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
