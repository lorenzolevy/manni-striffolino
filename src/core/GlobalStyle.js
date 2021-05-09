import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    ${reset}
  * {
    box-sizing: border;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: #35b1c9;
  }

`
