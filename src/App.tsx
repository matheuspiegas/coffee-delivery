import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CartProvider } from "./contexts/CartContext";
// import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Router />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
