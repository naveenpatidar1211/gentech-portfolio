function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2><i className="fas fa-tools"></i> Technical Skills</h2>
          <p>Technologies We Work With</p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-python"></i>
            </div>
            <h3>Python Development</h3>
            <p>Advanced Python programming with FastAPI, Django, Flask. Expert in NumPy, Pandas, Scikit-learn for ML applications</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Generative AI</h3>
            <p>LLMs, GPT models, Stable Diffusion, Hugging Face Transformers, LangChain, and custom generative architectures</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-react"></i>
            </div>
            <h3>Deep Learning Frameworks</h3>
            <p>TensorFlow, PyTorch, Keras for neural networks, CNNs, RNNs, Transformers, and custom model architectures</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Computer Vision</h3>
            <p>OpenCV, YOLO, Object Detection, Image Segmentation, Facial Recognition, and Computer Vision pipelines</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Data Science & Analytics</h3>
            <p>Pandas, NumPy, Matplotlib, Seaborn, Statistical modeling, EDA, and advanced data visualization techniques</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fab fa-docker"></i>
            </div>
            <h3>MLOps & Cloud</h3>
            <p>Docker, Kubernetes, AWS, GCP, Azure, CI/CD pipelines, Model versioning, and scalable ML infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills