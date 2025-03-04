import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from "./styles/GlobalStyle";
import { theme } from "./styles/theme"; 

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
    </>
  );
}

export default App;
