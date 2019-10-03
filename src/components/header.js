import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Logo2 from "./logo0"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteDescription, siteAuthor }) => (
  <header className="w-full flex items-center justify-between text-purple-700 font-semibold md:px-8 md:py-4 p-2">
    <AniLink
      paintDrip
      to="/"
      color="rebeccapurple"
      className="md:ml-5 m-0 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 w-36"
      style={{ maxWidth: `13rem` }}
    >
      <Logo2 />
    </AniLink>
    <div>
      <AniLink
        paintDrip
        to="/projects"
        color="rebeccapurple"
        className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-xl sm:text-2xl"
      >
        projects
      </AniLink>
      <AniLink
        paintDrip
        to="/blog"
        color="rebeccapurple"
        className="ml-5 p-1 border-2 border-transparent focus:outline-none focus:border-purple-700 text-xl sm:text-2xl"
      >
        blog
      </AniLink>
      {/*<div className="flex flex-col">
        <a href="">ENG</a>
        <a href="">ESP</a>
      </div>*/}
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
