import React from "react"
import { graphql } from "gatsby"
import Layout from "../features/Layout"
import Gallery from "../Features/Gallery"
import SEO from "../features/Seo"

export const query = graphql`
  query DigitalQuery {
    digital: file(relativePath: { eq: "digital_button.png" }) {
      childImageSharp {
        fixed(width: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgList: allFile(
      filter: { relativeDirectory: { eq: "digital" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const DigitalPage = ({ data }) => {
  return (
    <Layout title={data.digital.childImageSharp.fixed}>
      <SEO title="Digital Artwork" />
      <Gallery imgList={data.imgList.edges} />
    </Layout>
  )
}

export default DigitalPage
