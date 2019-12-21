import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import MenuBar from "./organisms/menu";
import PortfolioList from "./molecules/portfolio-list";
import PortfolioForm from "./molecules/portfolio-form";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
