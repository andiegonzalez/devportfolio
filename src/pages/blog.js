import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query blogInfo {
      allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/blog/**" } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            path
            description
            thumb
          }
        }
      }
    }
  `)
  const blogs = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-purple-700 font-extrabold text-center">
        Blog
      </h1>
      <section className="sm:py-8">
        <div
          className="my-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridGap: "1rem",
          }}
        >
          {blogs.map(post => (
            <Card
              content={post}
              key={post.id}
              orientation="vertical"
              btnText="Read More"
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
