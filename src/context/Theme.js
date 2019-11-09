import React, { useState, useLayoutEffect } from "react";

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {}
});

export default ThemeContext;

export function ThemeProvider(props) {
  // keeps state of the current chosen theme
  const [dark, setDark] = useState(window.localStorage.getItem("darkTheme"));

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme.concat(commonTheme));
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      applyTheme(lightTheme.concat(commonTheme));
    }
    // if state changes, repaints the app
  }, [dark]);

  const applyTheme = theme => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  "--border: rgba(0,0,0,.2)",
  "--shadow: rgba(0,0,0,.1)",
  "--heading: #000",
  "--primary: #4d1a66",
  "--text: #000",
  "--textAlt: #fff",
  "--inactive: rgba(0,0,0,.3)",
  "--backgroundBase: #f2f2f7",
  "--backgroundElevated: #fff"
];

const darkTheme = [
  "--border: rgba(255,255,255,.1)",
  "--shadow: rgba(0,0,0,.5)",
  "--heading: #FFF",
  "--primary: #76299c",
  "--text: rgb(255, 255, 255)",
  "--textAlt: #fff",
  "--inactive: rgba(255,255,255,.3)",
  "--backgroundElevated: #1c1c1e",
  "--backgroundBase: #0d0d0d"
];

const commonTheme = [
  "--radius: 10px"
]