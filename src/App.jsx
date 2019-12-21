import React, { useContext } from "react";
import styled from "@emotion/styled";
import { StateContext } from "./state";
import AppBar from './components/AppBar';

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle,#333333, #33333380), #000000;
  padding: 5vh 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:space-between;

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
  const { state, dispatch } = useContext(StateContext);
  console.log(state, dispatch);

  return (
    <LandingPage>
        <div id="slider">

        </div>
      <AppBar />
    </LandingPage>
  );
};

export default App;
