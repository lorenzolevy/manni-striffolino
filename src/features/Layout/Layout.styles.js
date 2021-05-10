import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 95vh;
`

export const ContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
`

export const StyledArrow = styled(FontAwesomeIcon)`
  font-size: 34px;
  color: hsla(287, 42%, 89%, 0.83);
  margin-bottom: 0.6rem;
  &:hover {
    filter: brightness(1.2);
  }
`

export const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0 1rem;
  > h1 {
    font-size: 2rem;
  }
`
