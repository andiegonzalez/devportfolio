import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteDescription, siteAuthor }) => (
  <header className="w-full flex items-center justify-end text-purple-700 font-semibold px-8 py-4">
    <a
      href="/projects"
      className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-lg"
    >
      projects
    </a>
    <a
      href="/blog"
      className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-lg"
    >
      blog
    </a>
    <a
      href="/contact"
      className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-lg"
    >
      contact
    </a>
  </header>
)

Header.propTypes = {
  siteDescription: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteDescription: ``,
  siteAuthor: ``,
}

export default Header
