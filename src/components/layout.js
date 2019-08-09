/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
        <main className="p-4 my-0 mx-auto max-w-4xl">{children}</main>
        <footer
          className="bg-purple-700"
          style={{
            padding: `1em`,
            display: `flex`,
            justifyContent: `space-between`,
            alignContent: `center`,
          }}
        >
          <p className="text-white">
            {data.site.siteMetadata.title} | {new Date().getFullYear()}
          </p>
          <Social color="text-white" />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
