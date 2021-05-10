import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import Footer from "../../primitives/Footer"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faBars, faTimes, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import {
  LayoutWrapper,
  ContentWrapper,
  StyledArrow,
  TopNav,
} from "./Layout.styles"

library.add(faEnvelope, faBars, faTimes, faArrowLeft, faInstagram)

const Layout = ({ children, isLanding, title }) => {
  return (
    <Fragment>
      <LayoutWrapper>
        <ContentWrapper>
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!isLanding && (
              <TopNav>
                <Link to="/">
                  <StyledArrow icon="arrow-left" />
                </Link>
                {!!title && <Img fixed={title} />}
              </TopNav>
            )}
            {children}
          </main>
        </ContentWrapper>
        <Footer />
      </LayoutWrapper>
    </Fragment>
  )
}

Layout.defaultProps = {
  isLanding: false,
  title: null,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isLanding: PropTypes.bool,
  title: PropTypes.object,
}

export default Layout
