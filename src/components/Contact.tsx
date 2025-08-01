import { useState } from "react"
import "./Contact.scss"

const Contact = () => {
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim()
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim()
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim()

    if (!name || !email || !message) {
      setError("Please fill in all fields.")
      return
    }

    setError("")
    alert("Message sent!")
    form.reset()
  }

  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/Ch.StephenFrancis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/whyte.fanggg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/stephenchintalapudi-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/whyte-fanggg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/github.png" alt="GitHub" />
        </a>
      </div>

      {error && (
        <div className="error-message">
          <span>{error}</span>
          <button
            className="error-close"
            onClick={() => setError("")}
            type="button"
            aria-label="Close"
          >
            ✖
          </button>
        </div>
      )}

      <form
        className="contact-form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            rows={5}
            autoComplete="off"
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
