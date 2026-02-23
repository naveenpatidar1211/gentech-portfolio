import { useState } from "react"
import ContactModal from "./ContactModal"
import { useScrollReveal } from "../hooks/useScrollReveal"

function Footer() {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useScrollReveal()

  return (
    <>
      <footer 
        ref={ref}
        className={`footer reveal ${visible ? "active" : ""}`}
      >
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
                {/* EMAIL ICON */}
                {/* <button onClick={() => setOpen(true)} className="social-link">
                  <i className="fas fa-envelope"></i>
                </button> */}
                <a href="#contact" className="social-link"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 GenTech AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {open && <ContactModal close={() => setOpen(false)} />}
    </>
  )
}

export default Footer