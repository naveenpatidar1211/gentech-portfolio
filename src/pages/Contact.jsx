import { useState, useEffect } from "react"

function Contact() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
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
      `Name: ${form.first_name} ${form.last_name}
      Email: ${form.email}
      Country: ${form.country}
      Message: ${form.message}`
    )

    window.open(
      `mailto:${recipient}?subject=${subject}&body=${body}`,
      "_self"
    )

    setForm({ first_name: "", last_name: "", email: "", country: "", message: "" })
  }

  return (
    <section className="contact-page">
      <div className="container contact-grid">

        {/* LEFT — FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Have a project idea or collaboration? Let's talk.</p>

          <form onSubmit={handleSubmit}>
            {/* <input
              name="first_name"
              placeholder="First Name"
              required
              value={form.first_name}
              onChange={handleChange}
            />

            <input
              name="last_name"
              placeholder="Last Name"
              required
              value={form.last_name}
              onChange={handleChange}
            /> */}

            <div className="name-row">
              <div className="input-group">
                <label className="input-label">FIRST NAME</label>
                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label className="input-label">LAST NAME</label>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="country"
              placeholder="Your Country"
              required
              value={form.country}
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
        <div className="contact-info">
          <h3>Let's build something impactful</h3>
          <p className="contact-desc">
            We specialize in <strong>AI</strong>, <strong>ML</strong> systems, automation and scalable web platforms.
          </p>

          <div className="contact-card">
            <strong>Email</strong>
            <p>psonare56@gentechai.in</p>
          </div>

          <div className="contact-card">
            <strong>Phone</strong>
            <p>+91 85180 57069</p>
          </div>

          <div className="contact-card">
            <strong>Location</strong>
            <p>Indore, India</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
