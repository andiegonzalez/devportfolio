import React from "react"

const ContactForm = () => {
  return (
    <form
      id="#contact"
      style={{
        height: `100vh`,
        alignSelf: `end`,
      }}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="message">Message</label>
      <textarea id="message"></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
