import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faDev,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Social = ({ color }) => {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            dev
            linkedin
          }
        }
      }
    }
  `)
  const colorClass =
    color === "purple"
      ? "text-purple-700 w-1/2 mx-auto sm:w-auto flex justify-between"
      : "text-white w-1/3 sm:w-auto"
  const hoverClass =
    color === "purple" ? "hover:text-purple-900" : "hover:text-gray-200"
  const focusClass =
    color === "purple" ? "focus:border-purple-700" : "focus:border-white"
  return (
    <div className={colorClass}>
      <a
        className={`text-3xl border-2 border-transparent focus:outline-none ${focusClass} ${hoverClass} md:mx-2`}
        style={{
          textDecoration: `none`,
          display: `inline-block`,
        }}
        aria-label="Link to my Twitter profile"
        target="_blank"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.twitter}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className={`text-3xl border-2 border-transparent focus:outline-none ${focusClass} ${hoverClass} md:mx-2`}
        style={{
          textDecoration: `none`,
        }}
        target="_blank"
        aria-label="Link to my Github profile"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.github}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className={`text-3xl border-2 border-transparent focus:outline-none ${focusClass} ${hoverClass} md:mx-2`}
        style={{
          textDecoration: `none`,
        }}
        target="_blank"
        aria-label="Link to my Dev profile"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.dev}
      >
        <FontAwesomeIcon icon={faDev} />
      </a>
      <a
        className={`text-3xl border-2 border-transparent focus:outline-none ${focusClass} ${hoverClass} md:mx-2`}
        style={{
          textDecoration: `none`,
        }}
        target="_blank"
        aria-label="Link to my Dev profile"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.linkedin}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  )
}

export default Social
