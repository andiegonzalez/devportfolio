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
        className="input focus:outline-none focus:bg-white focus:border-yellow-700"
        id="email"
      />
      <button
        type="submit"
        className="rounded bg-yellow-400 text-yellow-900 py-1 px-4 ml-2 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
      >
        Subscribe
      </button>
    </div>
  </form>
)

export default Subscribe
