import React from "react"
import Theme from "./src/core/theme"
import { GlobalStyle } from "./src/core/GlobalStyle"
import { ThemeProvider } from "styled-components"

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
