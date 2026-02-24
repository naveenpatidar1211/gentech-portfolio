import { useEffect } from "react"

function Career() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
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

        {/* FREELANCE MODEL
        <div className="career-section highlight">
          <h2>Freelance-first collaboration</h2>
          <p>
            We actively collaborate with freelancers, independent engineers and
            designers. Instead of rigid roles, we work with specialists who can
            contribute to specific challenges and grow with us over time.
          </p>
        </div> */}

        {/* OPPORTUNITIES */}
        <div className="career-section">
          <h2>Opportunities</h2>

          <div className="career-grid">
            <div className="career-card">
              <h4>AI / ML Developer</h4>
              <p>LLMs, automation agents, data pipelines and applied AI systems.</p>
            </div>

            <div className="career-card">
              <h4>Frontend Developer</h4>
              <p>React interfaces, product UX and performance-driven UI, React native developer.</p>
            </div>

            <div className="career-card">
              <h4>Backend Developer</h4>
              <p>APIs, scalable architectures and integrations.</p>
            </div>

            <div className="career-card">
              <h4>Product Designers</h4>
              <p>UX thinking, product storytelling and interface clarity.</p>
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

        {/* CTA */}
        <div className="career-cta">
          <h3>Interested in collaborating?</h3>
          <p>Send us your portfolio and let’s explore how we can work together.</p>

          <a href="mailto:psonare56@gentechai.in" className="btn">
            Reach Out
          </a>
        </div>

      </div>
    </section>
  )
}

export default Career