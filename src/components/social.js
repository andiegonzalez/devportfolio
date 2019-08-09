import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faDev } from "@fortawesome/free-brands-svg-icons"

const Social = ({ color }) => {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            dev
          }
        }
      }
    }
  `)
  return (
    <div className={color}>
      <a
        className="text-3xl"
        style={{
          textDecoration: `none`,
          margin: `0 0.5em`,
          display: `inline-block`,
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.twitter}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="text-3xl"
        style={{
          textDecoration: `none`,
          margin: `0 0.5em`,
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.github}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="text-3xl"
        style={{
          textDecoration: `none`,
          margin: `0 0.5em`,
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.dev}
      >
        <FontAwesomeIcon icon={faDev} />
      </a>
    </div>
  )
}

export default Social
