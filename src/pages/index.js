import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ContactForm from "../components/contactform"
import Social from "../components/social"
import Card from "../components/card"
import Subscribe from "../components/subscribe"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query contentInfo {
      projects: allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/projects/**" } } }
        limit: 2
      ) {
        nodes {
          id
          frontmatter {
            date
            title
            path
            description
            demo
            thumb
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/blog/**" } } }
        limit: 3
      ) {
        nodes {
          id
          frontmatter {
            date
            title
            path
            description
            thumb
          }
        }
      }
    }
  `)
  const projects = data.projects.nodes
  const posts = data.posts.nodes
  // const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <section className="sm:py-8 p-0 hero">
        <Image />
        <div className="inline-block md:ml-12">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-purple-700 font-extrabold">
            Hey, Andie here!
          </h1>
          <p className="my-2 text-xl">
            I enjoy making usable, accessible, beautiful products, and cats.
          </p>
          <p className="my-2 text-xl">
            I develop full stack JavaScript applications with several
            technologies including Vuejs, React, Express, HTML, CSS and vanilla
            JS, concentrating more on the front of the front-end.{" "}
            <a
              href="https://drive.google.com/open?id=1_0Au4P0rs5oEXs0WpBgaBL2E2xMjbs9p"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-transparent focus:outline-none focus:border-purple-700 text-lg sm:text-xl text-purple-700 hover:text-purple-900"
            >
              See my resume.
            </a>
          </p>

          <div className="flex flex-col sm:flex-row justify-between sm:justify-start">
            <p className="mr-3 my-2 text-2xl">Get in touch!</p>
            <Social color="purple" />
          </div>
        </div>
      </section>
      <section className="py-4 sm:py-8">
        <p className="text-xl">Some projects I've worked on.</p>
        <div
          className="my-2 sm:my-10"
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
      <section className="py-4 sm:py-8">
        <p className="text-xl sm:w-3/4">
          I'm also getting into the habit of writing with the goal of
          documenting my goals and progress and helping others.
        </p>
        <div
          className="my-2 sm:my-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridGap: "1rem",
          }}
        >
          {posts.map(post => (
            <Card
              content={post}
              key={post.id}
              orientation="vertical"
              btnText="Read More"
            />
          ))}
        </div>
      </section>
      <section className="py-8">
        <Subscribe />
      </section>
      <section className="py-8">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default IndexPage
