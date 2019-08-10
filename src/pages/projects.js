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
      <h1 className="text-5xl text-purple-700 font-extrabold">Projects</h1>
      <section className="py-8">
        <p className="text-xl text-right">
          I’ve worked in a couple of personal, freelance and work projects.
        </p>
        <div
          className="my-10"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
