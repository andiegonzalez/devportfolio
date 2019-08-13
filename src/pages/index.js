import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ContactForm from "../components/contactform"
import Social from "../components/social"
import Card from "../components/card"
import Subscribe from "../components/subscribe"
import SEO from "../components/seo"

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
      <section className="md:py-8 p-0 hero">
        <Image />
        <div className="inline-block md:ml-12">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-purple-700 font-extrabold">
            Hey, Andie here!
          </h1>
          <p className="my-2 text-xl">
            I love making beautiful, usable, accessible products, and cats.
          </p>
          <p className="my-2 text-xl">
            My expertise is full stack JavaScript applications with several
            technologies including Vuejs, React, Express, HTML, CSS and vanilla
            JS.
          </p>
          <div className="flex sm:justify-between">
            <p className="mr-3 my-2 text-2xl">Get in touch!</p>
            <Social color="purple" />
          </div>
        </div>
      </section>
      <section className="py-8">
        <p className="text-xl text-right">
          I’ve worked in a couple of personal, freelance and work projects.
        </p>
        <div
          className="sm:my-10"
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
      <section className="py-8">
        <p className="text-xl">
          I also write to help other developers and designers create awesome
          things.
        </p>
        <div
          className="sm:my-10"
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
