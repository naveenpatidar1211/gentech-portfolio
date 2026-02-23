import TypingText from "./TypingText"
import { useScrollReveal } from "../hooks/useScrollReveal"

function Hero() {
  const [ref, visible] = useScrollReveal()

  return (
    <section 
      id="home" 
      ref={ref}
      className={`hero reveal ${visible ? "active" : ""}`}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <TypingText text="Welcome to " />
            <span className="highlight">
              <TypingText text="GenTech AI" speed={120} />
            </span>
          </h1>
          <h2 className="hero-subtitle">Empowering Innovation through Autonomous AI Agents</h2>
          <p className="hero-description">
            GenTech AI is an innovation-driven company specializing in Generative AI, Computer Vision,
            and Deep Learning. With expertise in building intelligent solutions and scalable ML workflows,
            we empower businesses to transform data into actionable insights and real-world impact.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Our Work</a>
            <a href="#team" className="btn btn-secondary"> Meet Our Team</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src="/GenTechAI_Logo.jpg" alt="GenTech AI Logo" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero