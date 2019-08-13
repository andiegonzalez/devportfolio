import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Subscribe from "../components/subscribe"
import SEO from "../components/seo"

export default function Template({ data }) {
  // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-purple-700 font-extrabold">
          {frontmatter.title}
        </h1>
        <h2 className="mb-4">{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <section className="py-8">
          <Subscribe />
        </section>
      </div>
    </Layout>
  )
}
export const blogTemplateQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
