import Counter from "./Counter"
import { useScrollReveal } from "../hooks/useScrollReveal"

function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section 
      id="about" 
      ref={ref}
      className={`about reveal ${visible ? "active" : ""}`}
    >
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-users"></i> About Us</h2>
          <p>Get to know GenTech AI better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Innovators in AI/ML & Generative AI Solutions</h3>
            <p>
              <strong>GenTech AI</strong> is a technology-driven company specializing in
              <strong>Generative AI</strong>, <strong>Computer Vision</strong>, and
              <strong>Deep Learning</strong>. We design and deploy intelligent solutions
              using advanced frameworks like <strong>TensorFlow</strong>, <strong>PyTorch</strong>,
              <strong>Hugging Face Transformers</strong>, and <strong>OpenCV</strong>.
              Our expertise spans the complete AI/ML pipeline — from data preprocessing with
              <strong>Pandas</strong> and <strong>NumPy</strong> to large-scale deployment
              on cloud platforms including <strong>AWS</strong>, <strong>GCP</strong>, and
              <strong>Azure</strong>.
            </p>
            <p>
              We specialize in building scalable AI-powered applications using
              <strong>Python</strong>, <strong>FastAPI</strong>, <strong>Django</strong>,
              and <strong>Flask</strong>, complemented by containerization and orchestration
              tools like <strong>Docker</strong> and <strong>Kubernetes</strong>.
              Our projects include implementing <strong>Large Language Models (LLMs)</strong>,
              <strong>Stable Diffusion</strong>, <strong>YOLO</strong>-based computer vision,
              classical ML with <strong>Scikit-learn</strong>, and data visualization with
              <strong>Matplotlib</strong> and <strong>Seaborn</strong>.
            </p>
            <p>
              At GenTech AI, we are passionate about exploring how
              <strong>Generative AI</strong>, <strong>Natural Language Processing</strong>,
              and <strong>Computer Vision</strong> can transform industries, enhance productivity,
              and unlock new opportunities. By leveraging technologies like
              <strong>LangChain</strong>, <strong>OpenAI GPT</strong>, <strong>BERT</strong>,
              and custom neural architectures, our mission is to push the boundaries of what's
              possible with machine learning and deliver real-world solutions that solve
              complex business challenges.
            </p>
            <div className="about-stats">
              <div className={`stat reveal delay-1 ${visible ? "active" : ""}`}>
                <Counter end={3} />
                <p>Years of Expertise</p>
              </div>
              <div className={`stat reveal delay-2 ${visible ? "active" : ""}`}>
                <Counter end={15} />
                <p>AI Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About