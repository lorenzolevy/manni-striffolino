import React from "react"
import { Link } from "gatsby"

import Layout from "../features/Layout"
import FluidImage from "../features/FluidImage/FluidImage"
import SEO from "../features/Seo"
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
    <div>
      <FluidImage fluid={data.headshotOne.childImageSharp.fluid} />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
