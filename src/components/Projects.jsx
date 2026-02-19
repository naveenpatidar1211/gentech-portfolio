import { useScrollReveal } from "../hooks/useScrollReveal"

function Projects() {
  const [ref, visible] = useScrollReveal()

  const projects = [
    {
      title: "Bzail Site Selection Tool",
      description:
        "The Bzail Site Selection Tool is a fully automated platform enabling brokers and developers to perform parcel intelligence using Agentic AI.",
      technologies: ["Python","FastAPI","PostgreSQL","PostGIS","AWS","React","TypeScript","Mapbox","OpenAI"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      live: "https://app.baizel.ai/"
    },

    {
      title: "End-to-End Guard Service Automation using Zoho CRM & Zoho Books",
      description:
        "Automated quotation and invoicing workflow integrated with Zoho ecosystem reducing onboarding effort.",
      technologies: ["Flask","React","Zoho CRM","Zoho Books","Webhooks"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      video: "https://youtu.be/drI_J-anbps"
    },

    {
      title: "HubSpot Dropbox Integration",
      description:
        "CRM–Dropbox synchronization enabling automated document lifecycle and collaboration.",
      technologies: ["Node.js","HubSpot API","Dropbox API","Redis"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      video: "https://youtu.be/AWGilgp66j0"
    },

    {
      title: "POS AUTOMATION",
      description:
        "Integrated NCR Aloha, QuBeyond, Clover and Square POS systems into enterprise software.",
      technologies: ["Python","AWS Cloud Formation","AWS SAM"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/dev-PankajK/Clover-POS-third-party-api-intg.git",
      video: "https://youtu.be/blSaRQ2o3ic"
    },

    {
      title: "FinChat: AI-Powered Assistant",
      description:
        "Financial multi-agent chatbot built using OpenAI and conversational orchestration.",
      technologies: ["OpenAI","Python","NLP","Machine Learning"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "https://github.com/dev-PankajK/Finchat.git",
      video: "https://youtu.be/U-jn0PO2mzg"
    },

    {
      title: "ChatPDF Powered by Azure - Automation",
      description:
        "Azure AI assistant using Blob Storage, Cognitive Search and Functions for automated document Q&A.",
      technologies: ["Azure AI","Cognitive Search","Python"],
      image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=600&h=400&fit=crop",
      github: "https://github.com/dev-PankajK/Azure_chatpdf.git"
    },

    {
      title: "SRS Agent: AI-Powered Medical Documentation",
      description:
        "AI agent detecting requirement gaps within SRS documents for regulated medical software.",
      technologies: ["OpenAI","Python","Medical AI"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      github: "https://github.com/dev-PankajK/SRS_medical_softwares.git"
    },

    {
      title: "Peerbie AI Platform Integration",
      description:
        "Embedded AI-driven workflow automation and collaboration features into Peerbie platform.",
      technologies: ["Python","OpenAI","FastAPI","HuggingFace"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },

    {
      title: "RAG-Based Quotation PDF Generator",
      description:
        "Automated furniture quotation generation using RAG pipeline and vector database retrieval.",
      technologies: ["Flask","React","OpenAI","Pinecone"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },

    {
      title: "Remote Photoplethysmography (rPPG) Pipeline",
      description:
        "Computer vision pipeline extracting physiological signals using Mediapipe and OpenCV.",
      technologies: ["Python","Mediapipe","Computer Vision"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    }
  ]

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
                  {p.live && <a href={p.live} target="_blank" className="btn live">Live</a>}
                  {p.github && <a href={p.github} target="_blank" className="btn github">GitHub</a>}
                  {p.video && <a href={p.video} target="_blank" className="btn demo">Demo</a>}
                  <button className="btn details">Details</button>
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
