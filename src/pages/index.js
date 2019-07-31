import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import Image from "../components/image"
import ContactForm from "../components/contactform"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className=""
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
    >
      <Image className="profile-image" />
      <div className="inline-block">
        <h1 className="text-2xl text-purple-700 font-sans font-bold">
          Hey everyone!
        </h1>
        <p>I'm a ...</p>
      </div>
    </section>
    <Link to="/contact">Let's Talk</Link>
    <Projects></Projects>
    <ContactForm></ContactForm>
  </Layout>
)

export default IndexPage
