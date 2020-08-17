import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FluidImage from "../components/Image/FluidImage"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const query = graphql`
  query HomePageQuery {
    headshotOne: file(relativePath: { eq: "ola-headshot1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <FluidImage fluid={data.headshotOne.childImageSharp.fluid} />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
