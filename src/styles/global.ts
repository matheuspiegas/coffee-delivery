import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.regular};
    background: ${({ theme }) => theme.colors.background};
  }

  input, select, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
`;
