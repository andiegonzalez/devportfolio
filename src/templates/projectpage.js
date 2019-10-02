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
        <div className="flex flex-row align-start">
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="content max-w-4xl mr-4"
          />
          <p>{frontmatter.description}</p>
        </div>
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
        description
      }
    }
  }
`
