function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>GenTech AI</h3>
            <p>Driving innovation with Generative AI, Computer Vision & Deep Learning solutions</p>
            <p><i className="fas fa-map-marker-alt"></i> Indore, India</p>
          </div>
          <div className="footer-right">
            <div className="social-links">
              <a href="https://www.linkedin.com/company/gen-tech-ai" target="_blank" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/GenTechai" target="_blank" className="social-link"><i className="fab fa-github"></i></a>
              <a href="mailto:contact@GenTechai.com" className="social-link"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 GenTech AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer