import { ThemeProvider } from "styled-components"
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from "./global/styles/theme"
import GlobalStyle from "./global/styles/globalStyles"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer";
import RoutesPaths from "./routes";
import { UserContext } from "./context";

function App() {
  const [userLogged, setUserLogged] = useState(false)
  console.log(userLogged)

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
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
    </UserContext.Provider>
  )
}
export default App
