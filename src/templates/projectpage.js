import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  // this prop will be injected by the GraphQL query below.

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-purple-700 font-extrabold">
          {frontmatter.title}
        </h1>
        <h2 className="mb-4 -mt-2">{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="content max-w-6xl mx-auto"
        />
        <section className="py-4">
          <a
            href={frontmatter.demo}
            className="rounded bg-purple-300 text-purple-900 font-bold py-2 px-4 sm:ml-2 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
          >
            Live Demo
          </a>
          <a
            href={frontmatter.repo}
            className="rounded bg-purple-300 text-purple-900 font-bold py-2 px-4 sm:ml-2 hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
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
        thumb
        title
        demo
        repo
        description
      }
    }
  }
`
