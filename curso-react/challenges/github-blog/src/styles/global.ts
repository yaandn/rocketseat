import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,button,text-area,input {
    border: none;
    outline: 0;
    font-family: "Nunito";
    -webkit-font-smoothing: antialiased
  }
`;
