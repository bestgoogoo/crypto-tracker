import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default Root;
