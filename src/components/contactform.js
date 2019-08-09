import React from "react"

const ContactForm = () => {
  return (
    <>
      <p className="my-2 text-xl max-w-lg text-center mx-auto my-0">
        Got an interesting project? Want to work together? Want to show me cat
        pictures?
      </p>
      <h2 className="text-6xl text-purple-700 font-extrabold text-center">
        Let's Talk!
      </h2>
      <form
        className="flex max-w-lg mx-auto my-0"
        name="contactForm"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        style={{ flexDirection: "column" }}
      >
        <input type="hidden" name="bot-field" />
        <div>
          <label className="" htmlFor="name">
            Name
          </label>
          <input
            className="input focus:outline-none focus:bg-white focus:border-purple-700 mb-4"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className="input focus:outline-none focus:bg-white focus:border-purple-700 mb-4"
            type="text"
            id="email"
          />
        </div>
        <div>
          <label className="" htmlFor="message">
            Message
          </label>
          <textarea
            className="input focus:outline-none focus:bg-white focus:border-purple-700 resize-none mb-4"
            id="message"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded bg-purple-700 text-white py-1 px-4 mb-2 mr-2 hover:bg-purple-900 focus:outline-none focus:bg-purple-900"
        >
          Send
        </button>
      </form>
    </>
  )
}

export default ContactForm
