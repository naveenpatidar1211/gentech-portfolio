import { useState, useEffect } from "react"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const recipient = "psonare56@gentechai.in"
    const subject = encodeURIComponent("Portfolio Contact")

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
    )

    window.open(
      `mailto:${recipient}?subject=${subject}&body=${body}`,
      "_self"
    )

    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="contact-page">
      <div className="container contact-grid">

        {/* LEFT — FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Have a project idea or collaboration? Let's talk.</p>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT — INFO */}
        <div className="info-hero">
            <h3>Let’s build something impactful 🚀</h3>
            <p>
            We specialize in AI systems, automation and scalable web platforms.
            If you have an idea — we can turn it into production reality.
            </p>
        </div>

        <div className="contact-card highlight">
            <span className="icon">📧</span>
            <div>
            <strong>Email</strong>
            <p>psonare56@gentechai.in</p>
            </div>
        </div>

        <div className="contact-card">
            <span className="icon">📍</span>
            <div>
            <strong>Location</strong>
            <p>Indore, India</p>
            </div>
        </div>

        <div className="info-cta">
            <p>Usually respond within 24 hours</p>
        </div>

      </div>
    </section>
  )
}

export default Contact
