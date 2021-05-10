import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0.6rem;
`

export const SocialRow = styled.div`
  display: flex;
  justify-content: center;
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 34px;
  margin: 1rem 0.6rem;
  &:hover {
    filter: brightness(1.2);
  }
`
