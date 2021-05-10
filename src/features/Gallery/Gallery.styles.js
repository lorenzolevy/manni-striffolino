import styled from "styled-components"
import Img from "gatsby-image"

export const Grid = styled.div`
  @media (max-width: 1000px) and (min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 316px);
  }
  display: grid;
  grid-gap: 0.6rem;
  width: 100%;
`

export const Tile = styled.div`
  overflow: hidden;
  cursor: pointer;
  > div {
    border-radius: 0.3rem;
  }
  > div > div {
    padding-bottom: 100% !important;
  }
  &:hover {
    > div {
      border-radius: 0.6rem;
    }
  }
`

export const GalleryImg = styled(Img)`
  transition: transform 1s filter 0.35s !important;
  &:hover {
    transform: scale(1.1);
    filter: saturate(1.5);
  }
`
