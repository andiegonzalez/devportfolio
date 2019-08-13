import React from "react"

const ContactForm = () => {
  return (
    <>
      <p className="my-2 text-xl max-w-lg text-center mx-auto my-0">
        Got an interesting project? Want to work together? Want to show me cat
        pictures?
      </p>
      <h2 className="text-2xl md:text-4xl lg:text-6xl text-purple-700 font-extrabold text-center">
        Let's Talk!
      </h2>
      <form
        className="flex max-w-lg mx-auto my-0"
        name="contactForm"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        style={{ flexDirection: "column" }}
      >
        <input type="hidden" name="bot-field" />
        <div>
          <label className="" htmlFor="name">
            Name
            <input
              className="input focus:outline-none focus:bg-white focus:border-yellow-700 mb-4"
              type="text"
              id="name"
              name="name"
            />
          </label>
        </div>
        <div>
          <label className="" htmlFor="email">
            Email
            <input
              className="input focus:outline-none focus:bg-white focus:border-yellow-700 mb-4"
              type="text"
              id="email"
              name="email"
            />
          </label>
        </div>
        <div>
          <label className="" htmlFor="message">
            Message
            <textarea
              className="input focus:outline-none focus:bg-white focus:border-yellow-700 resize-none mb-4"
              id="message"
              rows="6"
              name="message"
            ></textarea>
          </label>
        </div>
        <button
          type="submit"
          className="rounded bg-yellow-400 text-yellow-900 py-1 px-4 mb-2 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
        >
          Send
        </button>
      </form>
    </>
  )
}

export default ContactForm
