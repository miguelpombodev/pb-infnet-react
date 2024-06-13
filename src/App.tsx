import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from 'react-router-dom';

import theme from "./global/styles/theme"
import GlobalStyle from "./global/styles/globalStyles"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer";
import RoutesPaths from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router>
        <Header />
          <Main>
            <RoutesPaths />
          </Main>
        <Footer />
        </Router>
    </ThemeProvider>
  )
}
export default App
