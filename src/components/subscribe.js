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
        className="rounded bg-purple-300 text-purple-900 font-bold py-1 px-4 ml-2 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
      >
        Subscribe
      </button>
    </div>
  </form>
)

export default Subscribe
