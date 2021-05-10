import React from "react"
import { FooterContainer, SocialRow, SocialIcon } from "./Footer.styles"

const Footer = () => (
  <FooterContainer>
    <SocialRow>
      <a
        href="https://www.instagram.com/striffolinoart/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon className="insta" icon={["fab", "instagram"]} />
      </a>
      <a href="mailto:manni@mannistriffolino.com">
        <SocialIcon className="mailto" icon={["far", "envelope"]} />
      </a>
    </SocialRow>
    <p>© {new Date().getFullYear()} Manni Striffolino</p>
  </FooterContainer>
)

export default Footer
