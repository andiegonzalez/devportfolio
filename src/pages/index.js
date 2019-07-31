import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
// import Image from "../components/image"
import ContactForm from "../components/contactform"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey everyone!</h1>
    <p>I'm a ...</p>
    <p>Now go build something great.</p>
    <Link to="/contact">Let's Talk</Link>
    <Projects></Projects>
    <ContactForm></ContactForm>
  </Layout>
)

export default IndexPage
