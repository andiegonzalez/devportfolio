import React from "react"

const ContactForm = () => {
  return (
    <form
      className="flex items-start"
      name="contactForm"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      style={{ flexDirection: "column" }}
    >
      <input type="hidden" name="bot-field" />
      <div>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="input focus:outline-none focus:bg-white focus:border-purple-700"
          type="text"
          id="name"
        />
      </div>
      <div>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input focus:outline-none focus:bg-white focus:border-purple-700"
          type="text"
          id="email"
        />
      </div>
      <div>
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          className="input focus:outline-none focus:bg-white focus:border-purple-700"
          id="message"
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
