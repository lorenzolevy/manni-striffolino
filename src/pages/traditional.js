import React from "react"
import { graphql } from "gatsby"
import Layout from "../features/Layout"
import Gallery from "../Features/Gallery"
import SEO from "../features/Seo"

export const query = graphql`
  query TraditionalQuery {
    traditional: file(relativePath: { eq: "traditional_button.png" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgList: allFile(
      filter: { relativeDirectory: { eq: "traditional" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
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

const TraditionalPage = ({ data }) => (
  <Layout title={data.traditional.childImageSharp.fixed}>
    <SEO title="Traditional Artwork" />
    <Gallery imgList={data.imgList.edges} />
  </Layout>
)

export default TraditionalPage
