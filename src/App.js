import React from "react";
// import { useContext } from 'react';
// import ThemeContext from "./context/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import PortfolioList from "./components/portfolio/portfolio-list";
import PortfolioForm from "./components/portfolio/portfolio-form";

function App() {
  // const { dark, toggle } = useContext(ThemeContext);

  return (
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
  );
}

export default App;
