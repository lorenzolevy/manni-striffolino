import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  max-width: 900px;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`
const ButtonLink = styled.div`
  > div {
    width: ${({ width }) => width || "100px"};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 260px;
  margin: 1rem;
  box-sizing: border-box;
  @media only screen and (max-width: 650px) {
    flex-direction: row;
  }
  text-align: center;
  > p {
    font-size: 2rem;
  }
  &:hover {
    filter: brightness(1.2);
  }
`

const ImageLinks = ({ imgObjs }) => {
  return (
    <Container>
      <Link to="/digital/">
        <ButtonLink width="116px">
          <Img fluid={imgObjs[0]} />
          <Img fixed={imgObjs[2]} />
        </ButtonLink>
      </Link>
      <Link to="/traditional">
        <ButtonLink className="traditional" width="100px">
          <Img fluid={imgObjs[1]} />
          <Img fixed={imgObjs[3]} />
        </ButtonLink>
      </Link>
    </Container>
  )
}

export default ImageLinks
