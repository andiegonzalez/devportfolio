import React from "react"

const Subscribe = () => (
  <form className="">
    <p className="my-2 text-xl mx-auto">
      If you enjoy what I write, feel free to leave your email below to get
      updates whenever I post!
    </p>
    <label htmlFor="email">Email</label>
    <div className="flex">
      <input
        type="email"
        className="input focus:outline-none focus:bg-white focus:border-purple-700"
        id="email"
      />
      <button
        type="submit"
        className="rounded bg-purple-700 text-white py-1 px-4 ml-2 hover:bg-purple-900 focus:outline-none focus:bg-purple-900"
      >
        Subscribe
      </button>
    </div>
  </form>
)

export default Subscribe
