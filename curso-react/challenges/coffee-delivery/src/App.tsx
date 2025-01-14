import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Router } from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./context/orderContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
