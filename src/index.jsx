import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./state";
import "./assets/fonts/metropolis.css";
import App from "./App";
// import App2 from "./old/App";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        *:focus {
          outline: none !important;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
          color: white;
          background-color: black;
          font-family: "Metropolis", sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.4rem;
          overflow: hidden;
        }
      `}
    />
  );
};

ReactDOM.render(
  <StateProvider>
    <GlobalStyles />
    <App />
  </StateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
