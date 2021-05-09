import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { LayoutWrapper, ContentWrapper } from "./Layout.styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <LayoutWrapper>
        <ContentWrapper>
          <main>{children}</main>
        </ContentWrapper>
        <footer>© {new Date().getFullYear()} Manni Striffolino</footer>
      </LayoutWrapper>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
