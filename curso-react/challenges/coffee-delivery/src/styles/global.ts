import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};

  }

  button, textArea,input, body {
    outline: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    --webkit-font-smoothing: antialiased,

  }

`;
