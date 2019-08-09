import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import Image from "../components/image"
import ContactForm from "../components/contactform"
import Social from "../components/social"
import Card from "../components/card"
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
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { frontmatter: { path: { glob: "/blog/**" } } }
        limit: 2
      ) {
        nodes {
          id
          frontmatter {
            date
            title
            path
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
      <section
        className=""
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
      >
        <Image className="profile-image" />
        <div className="inline-block">
          <h1 className="text-6xl text-purple-700 font-extrabold">
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
          <p className="my-2 text-2xl">Get in contact with me!</p>
          <Social color="text-purple-700" />
        </div>
      </section>
      <section className="py-16">
        <p className="text-xl text-right">
          I’ve worked in a couple of personal, freelance and work projects.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "1rem",
          }}
        >
          {projects.map(project => (
            <Card content={project} key={project.id} orientation="horizontal" />
          ))}
          {posts.map(post => (
            <Card content={post} key={post.id} orientation="vertical" />
          ))}
        </div>
      </section>
      <Link to="/contact">Let's Talk</Link>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </Layout>
  )
}

export default IndexPage
