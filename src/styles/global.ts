import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

  html {
      @media (width < 768px) {
      font-size: 87.5%;
    }
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
  input, select, textarea {
    font-size: clamp(16px, 1rem, 18px); /* Mínimo 16px, ideal 1rem, máximo 18px */
  }

  button {
    cursor: pointer;
  }
`;
