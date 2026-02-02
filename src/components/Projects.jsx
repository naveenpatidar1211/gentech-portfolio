function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-briefcase"></i> Featured Projects</h2>
          <p>Some of our recent work</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-brain"></i>
            </div>
            <div className="project-content">
              <h3>Smart Recommendation Engine</h3>
              <p>Built a collaborative filtering system that analyzes user behavior patterns and delivers personalized product recommendations. Integrated with multiple data sources and deployed on cloud infrastructure for real-time performance.</p>
              <div className="project-tech">
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Data Science</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-camera"></i>
            </div>
            <div className="project-content">
              <h3>Image Classification Platform</h3>
              <p>Developed a deep learning model for automated image categorization using convolutional neural networks. Trained on large datasets and optimized for production deployment with real-time inference capabilities.</p>
              <div className="project-tech">
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="project-content">
              <h3>Data Analytics Dashboard</h3>
              <p>Created an interactive dashboard that visualizes complex business metrics and KPIs. Integrated with multiple databases and provides real-time insights through intuitive visualizations and automated reports.</p>
              <div className="project-tech">
                <span className="tech-tag">Data Visualization</span>
                <span className="tech-tag">Analytics</span>
                <span className="tech-tag">Python</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-microphone"></i>
            </div>
            <div className="project-content">
              <h3>Voice Processing System</h3>
              <p>Engineered an advanced speech recognition and processing system using cutting-edge NLP techniques. Capable of understanding context, emotions, and intent for enhanced user interactions.</p>
              <div className="project-tech">
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">Audio Processing</span>
                <span className="tech-tag">PyTorch</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="project-content">
              <h3>Anomaly Detection System</h3>
              <p>Implemented a machine learning system to identify unusual patterns and potential threats in real-time data streams. Uses advanced algorithms for early warning and automated response mechanisms.</p>
              <div className="project-tech">
                <span className="tech-tag">Anomaly Detection</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Security</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <i className="fas fa-network-wired"></i>
            </div>
            <div className="project-content">
              <h3>Distributed ML Pipeline</h3>
              <p>Designed and implemented a scalable machine learning pipeline that processes large datasets across distributed computing clusters. Optimized for performance and reliability in production environments.</p>
              <div className="project-tech">
                <span className="tech-tag">Kubernetes</span>
                <span className="tech-tag">MLOps</span>
                <span className="tech-tag">Cloud Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects