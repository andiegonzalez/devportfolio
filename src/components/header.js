import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteDescription, siteAuthor }) => (
  <header className="w-full flex items-center justify-end text-purple-700 font-bold px-8 py-4">
    <a href="#projects" className="pl-5">
      projects
    </a>
    <a href="#blog" className="pl-5">
      blog
    </a>
    <a href="#contact" className="pl-5">
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
