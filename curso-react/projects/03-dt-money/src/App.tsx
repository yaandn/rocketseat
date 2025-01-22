import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/theme";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionContextProvider } from "./contexts/TransactionContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionContextProvider>
        <Transactions />
      </TransactionContextProvider>
    </ThemeProvider>
  );
}
