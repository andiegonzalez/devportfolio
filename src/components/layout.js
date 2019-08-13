/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import Header from "./header"
import Social from "./social"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteDescription={data.site.siteMetadata.description}
        siteAuthor={data.site.siteMetadata.author}
      />
      <div>
        <main className="p-4 my-0 mx-auto max-w-5xl">{children}</main>
        <footer className="bg-purple-700 p-4 flex justify-between items-center">
          <p className="text-white">
            {data.site.siteMetadata.title} | {new Date().getFullYear()}
          </p>
          <Social color="white" />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
