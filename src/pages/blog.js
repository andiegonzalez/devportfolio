import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query blogInfo {
      allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/projects/**" } } }
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
      <h1 className="text-5xl text-purple-700 font-extrabold">Blog</h1>
      <section className="py-8">
        <p className="text-xl text-right">
          I also write to help other developers and designers create awesome
          things.
        </p>
        <div
          className="my-10"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
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
