import { ThemeProvider } from "styled-components"
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from "./global/styles/theme"
import GlobalStyle from "./global/styles/globalStyles"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer";
import RoutesPaths from "./routes";
import { UserContext, TopicsContexts } from "./context";
import { ITopicInfos } from "./interfaces/Topics";

function App() {
  const [userLogged, setUserLogged] = useState({})
  const [userTopics, setUserTopics] = useState<ITopicInfos[]>([])

  return (
    <TopicsContexts.Provider value={{ userTopics, setUserTopics }}>
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
    </TopicsContexts.Provider>
  )
}
export default App
