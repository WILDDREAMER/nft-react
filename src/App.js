import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles"
import { theme } from "./theme"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./fonts/fonts.scss"
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Main>
            <Route exact path="/" component={Profile} />
          </Main>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
