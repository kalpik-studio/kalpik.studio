import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
// import firebase from "./firebase";
import { StateContext, TYPES } from "./state";
import Slider from "./components/Slider";
import AppBar from "./components/AppBar";

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle, #333333, #33333380), #000000;
  padding: 5vh 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    // const unsuscribe = firebase
    //   .firestore()
    //   .collection("portfolio")
    //   .onSnapshot(snapshot => {
    //     const payload = snapshot.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }));
    //     dispatch({ type: TYPES.UPDATE_PORTFOLIOS, payload });
    //   });

    // return () => unsuscribe();
    dispatch({ type: TYPES.UPDATE_PORTFOLIOS, payload: [{id: "businessespoo", title: "Business Espoo"}, {id: "delta", title: "Delta"}, {id: "dexer", title: "Dexer"}, {id: "pocketinc", title: "Pocket Inc"}, {id: "something", title: "something"}] });
  }, [dispatch]);

  return (
    <LandingPage>
      <Slider />
      <AppBar />
    </LandingPage>
  );
};

export default App;
