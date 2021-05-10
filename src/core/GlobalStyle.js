import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto;
    color: #EBC83D;
    
  }

  a {
    text-decoration: none;
  }

  html, body {
    background-color: #35b1c9;
  }

`
