import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import ContactForm from "../components/contactform"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hiey everyone!</h1>
    <p>I'm a ...</p>
    <p>Now go build something great.</p>
    <Link to="/contact">Let's Talk</Link>
    <ContactForm></ContactForm>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
