import React from "react"

const Subscribe = () => (
  <form action="https://codes.us3.list-manage.com/subscribe/post" method="POST">
    <input type="hidden" name="u" value="e35b841805729592d6010941a" />
    <input type="hidden" name="id" value="3f8a1611f1" />
    <p className="my-2 text-xl mx-auto">
      If you enjoy what I write, feel free to leave your email below to get
      updates whenever I post!
    </p>
    <div className="flex flex-col sm:flex-row w-full items-end justify-between">
      <label htmlFor="MERGE1" className="w-full">
        Name{" "}
        <input
          type="text"
          className="input focus:outline-none focus:bg-white focus:border-purple-700 mb-2 sm:mb-0"
          id="MERGE1"
          name="MERGE1"
        />
      </label>
      <label htmlFor="MERGE0" className="sm:ml-2 w-full">
        Email
        <input
          type="email"
          className="input focus:outline-none focus:bg-white focus:border-purple-700 mb-2 sm:mb-0"
          autoCapitalize="off"
          autoCorrect="off"
          name="MERGE0"
          id="MERGE0"
          required
        />
      </label>
      <button
        type="submit"
        className="rounded bg-purple-300 text-purple-900 font-bold py-2 px-4 sm:ml-2 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
      >
        Subscribe
      </button>
    </div>
  </form>
)

export default Subscribe
