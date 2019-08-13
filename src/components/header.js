import PropTypes from "prop-types"
import React from "react"
import Logo from "./Logo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteDescription, siteAuthor }) => (
  <header className="w-full flex items-center justify-between text-purple-700 font-semibold md:px-8 md:py-4 p-2">
    <AniLink
      paintDrip
      to="/"
      color="rebeccapurple"
      className="md:ml-5 m-0 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700"
      style={{ maxWidth: `13rem` }}
    >
      <Logo />
    </AniLink>
    <div>
      <AniLink
        paintDrip
        to="/projects"
        color="rebeccapurple"
        className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-sm md:text-xl"
      >
        projects
      </AniLink>
      <AniLink
        paintDrip
        to="/blog"
        color="rebeccapurple"
        className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-sm md:text-xl"
      >
        blog
      </AniLink>
    </div>
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
