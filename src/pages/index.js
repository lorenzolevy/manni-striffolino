import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../features/Layout"

import SEO from "../features/Seo"
import { graphql } from "gatsby"

export const query = graphql`
  query HomePageQuery {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: "1100px" }}>
      <Img
        fluid={data.hero.childImageSharp.fluid}
        style={{ width: "500px", minWidth: "100%" }}
      />
    </div>
  </Layout>
)

export default IndexPage
