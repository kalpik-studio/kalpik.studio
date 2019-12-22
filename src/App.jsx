import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import firebase from "./firebase";
import { StateContext, TYPES } from "./state";
import Slider from "./components/Slider";
import AppBar from "./components/AppBar";
import PortfolioForm from "./components/PortfolioForm";

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle, #333333, #33333380), #000000;
  padding: 5vh 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 0 0 120px 0 rgba(0, 0, 0, 0.5);

  #slider {
    height: 80vh;
    min-height: 80vh;
    max-height: 80vh;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    background-color: #80808080;
  }
`;

const App = () => {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    const unsuscribe = firebase
      .firestore()
      .collection("portfolio")
      .onSnapshot(snapshot => {
        const payload = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        dispatch({ type: TYPES.UPDATE_PORTFOLIOS, payload });
      });

    return () => unsuscribe();
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage>
            <Slider />
            <AppBar />
          </LandingPage>
        </Route>
        <Route path="/form">
          <PortfolioForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
