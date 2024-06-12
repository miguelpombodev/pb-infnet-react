import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from "./global/styles/theme"
import GlobalStyle from "./global/styles/globalStyles"

import Header from "./components/Header"
import Main from "./components/Main"

import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router>
        <Header />
          <Main>
            <Routes>
              <Route index path="/" element={<Home />}/> 
              <Route path="/posts" element={<Posts />}/> 
            </Routes>
          </Main>
        <Footer />
        </Router>
    </ThemeProvider>
  )
}
export default App
