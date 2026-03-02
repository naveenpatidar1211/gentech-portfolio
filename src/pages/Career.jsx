import { useEffect, useState } from "react"

function Career() {
  const [activeModal, setActiveModal] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const closeModal = () => setActiveModal(null)

  return (
    <>
      <section className="career-page">
        <div className="container">

          {/* HERO */}
          <div className="career-hero">
            <h1>Build the future with us 🚀</h1>
            <p>
              We are a small but ambitious team building AI-powered products,
              automation platforms and scalable web solutions for real-world impact.
            </p>
          </div>

          {/* CULTURE */}
          <div className="career-section">
            <h2>Our Culture</h2>
            <p>
              We believe in ownership, fast execution and practical innovation.
              Our environment encourages experimentation, continuous learning and
              solving meaningful problems rather than chasing trends.
            </p>
          </div>

          {/* OPPORTUNITIES */}
          <div className="career-section">
            <h2>Opportunities</h2>

            <div className="opportunity-grid">

              <div className="career-card clickable"
                onClick={() => setActiveModal("software")}
              >
                <h4>Software Development</h4>
              </div>

              <div className="career-card clickable"
                onClick={() => setActiveModal("sales")}
              >
                <h4>Sales & Marketing</h4>
              </div>

              <div className="career-card clickable"
                onClick={() => setActiveModal("design")}
              >
                <h4>UI / UX Design</h4>
              </div>

              <div className="career-card clickable"
                onClick={() => setActiveModal("strategy")}
              >
                <h4>Business Strategy</h4>
              </div>

            </div>
          </div>

          {/* BENEFITS */}
          <div className="career-section">
            <h2>Why work with us</h2>
            <ul className="career-benefits">
              <li>Flexible freelance engagement</li>
              <li>Real-world AI & automation projects</li>
              <li>Ownership and decision-making freedom</li>
              <li>Opportunity to grow with early-stage products</li>
              <li>Remote-first collaboration</li>
            </ul>
          </div>

        </div>
      </section>

      {/* GLOBAL MODAL */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content modern"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>✕</button>

            {activeModal === "software" && (
              <>
                <h2 className="modal-title-blue">Software Development Roles</h2>
                <div className="modal-grid-modern">
                  <div className="modal-card-modern">
                    <h4>AI / ML Developer</h4>
                    <p>LLMs, automation agents, data pipelines and applied AI systems.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Frontend Developer</h4>
                    <p>React interfaces, product UX and performance-driven UI, React Native development.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Backend Developer</h4>
                    <p>APIs, scalable architectures and integrations.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Product Engineer</h4>
                    <p>Full-stack ownership with system thinking and product mindset.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeModal === "sales" && (
              <>
                <h2 className="modal-title-blue">Sales & Marketing Roles</h2>
                <div className="modal-grid-modern">
                  <div className="modal-card-modern">
                    <h4>Sales Executive</h4>
                    <p>Lead generation, client outreach and closing B2B deals.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Digital Marketing Specialist</h4>
                    <p>Performance campaigns, SEO, paid ads and growth marketing.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Content Strategist</h4>
                    <p>Brand storytelling, blog strategy and content funnels.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Business Development Associate</h4>
                    <p>Strategic partnerships, networking and revenue growth initiatives.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeModal === "design" && (
              <>
                <h2 className="modal-title-blue">UI / UX Design Roles</h2>
                <div className="modal-grid-modern">
                  <div className="modal-card-modern">
                    <h4>UI Designer</h4>
                    <p>Clean, modern and responsive interface design systems.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>UX Researcher</h4>
                    <p>User research, testing, behavioral analysis and experience mapping.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Product Designer</h4>
                    <p>End-to-end product thinking with strong visual clarity.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Interaction Designer</h4>
                    <p>Micro-interactions, animations and usability refinement.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeModal === "strategy" && (
              <>
                <h2 className="modal-title-blue">Business Strategy Roles</h2>
                <div className="modal-grid-modern">
                  <div className="modal-card-modern">
                    <h4>Business Analyst</h4>
                    <p>Market research, competitor analysis and data-driven planning.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Growth Strategist</h4>
                    <p>Scaling strategies, monetization models and expansion planning.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Operations Manager</h4>
                    <p>Process optimization and operational excellence.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-card-modern">
                    <h4>Startup Consultant</h4>
                    <p>Product-market fit, validation and early-stage strategy.</p>
                    <div className="apply-wrapper">
                      <div className="apply-dot">
                        <span className="apply-text">Apply Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}

export default Career