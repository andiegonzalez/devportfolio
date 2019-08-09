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
        <h1 className="text-5xl text-purple-700 font-extrabold">
          {frontmatter.title}
        </h1>
        <h2 className="mb-4">{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <section className="py-8">
          <a
            href={frontmatter.demo}
            className="rounded bg-purple-700 text-white py-1 px-4 ml-2 hover:bg-purple-900 focus:outline-none focus:bg-purple-900"
          >
            Live Demo
          </a>
          <a
            href={frontmatter.repo}
            className="rounded bg-purple-700 text-white py-1 px-4 ml-2 hover:bg-purple-900 focus:outline-none focus:bg-purple-900"
          >
            Github Repo
          </a>
        </section>
      </div>
    </Layout>
  )
}
export const projectTemplateQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        demo
        repo
      }
    }
  }
`
