import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `)
  return (
    <div>
      <a
        style={{
          textDecoration: `none`,
          margin: `0 0.5em`,
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.twitter}
      >
        Twitter
      </a>
      <a
        style={{
          textDecoration: `none`,
          margin: `0 0.5em`,
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={data.site.siteMetadata.social.github}
      >
        Github
      </a>
    </div>
  )
}

export default Social
