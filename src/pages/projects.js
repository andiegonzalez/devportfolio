import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query projectsInfo {
      allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/projects/**" } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            path
            description
            demo
            thumb
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-purple-700 font-extrabold text-center">
        Projects
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
          {projects.map(project => (
            <Card
              content={project}
              key={project.id}
              orientation="horizontal"
              btnText="Live Demo"
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
