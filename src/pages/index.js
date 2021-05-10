import React from "react"

import Hero from "../primitives/Hero"
import ImageLinks from "../primitives/ImageLinks"
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
    pencil: file(relativePath: { eq: "traditional_pencil_button.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wacom: file(relativePath: { eq: "digital_pencil_button.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    digital: file(relativePath: { eq: "digital_button.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    traditional: file(relativePath: { eq: "traditional_button.png" }) {
      childImageSharp {
        fixed(width: 155) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout isLanding>
    <SEO title="Home" />
    <Hero>
      <Img fluid={data.hero.childImageSharp.fluid} />
    </Hero>
    <ImageLinks
      imgObjs={[
        data.wacom.childImageSharp.fluid,
        data.pencil.childImageSharp.fluid,
        data.digital.childImageSharp.fixed,
        data.traditional.childImageSharp.fixed,
      ]}
    />
  </Layout>
)

export default IndexPage
