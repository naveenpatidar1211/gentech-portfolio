import { useState } from "react";

function ContactModal({ close }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const recipient = "parassonare.stevesailab@gmail.com";

    const recipient = "psonare56@gentechai.in";

    const subject = encodeURIComponent("New Contact Form Message");

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
    );

    window.open(
      `mailto:${recipient}?subject=${subject}&body=${body}`,
      "_self"
    );

    // Clear form after submit
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => {
      close();
    }, 300);
  };

  return (
    <div className="contact-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Contact Us</h2>
          <button className="close-btn" onClick={close}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
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

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
