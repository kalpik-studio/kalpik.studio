import React from "react";
// import ThemeContext from "./context/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import MenuBar from "./components/organisms/menu";
import PortfolioList from "./components/molecules/portfolio-list";
import PortfolioForm from "./components/molecules/portfolio-form";

function App() {
  return (
    <React.Fragment>
      <MenuBar />

      <Router>
        <Switch>
          <Route path="/portfolio">
            <PortfolioList />
          </Route>
          <Route path="/add">
            <PortfolioForm />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
