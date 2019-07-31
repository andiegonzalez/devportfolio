import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Projects = ({ props }) => {
    const data = useStaticQuery(graphql `
    query {
      site {
        siteMetadata {
          description
          author
        }
      }
    }
  `)
    return (
        <>

        </>
    )
}

export default Projects
