import React from "react";
import { useState, useCallback, useContext } from "react";
import ThemeContext from '../../context/Theme'
import useEventListener from "../../services/eventlistener";
import Logo from "../../assets/images/ks-white-h.png";

const MenuBar = () => {
  const theme = useContext(ThemeContext);
  const [showLogo, setShowLogo] = useState(false);
  const handler = useCallback(() => {
    window.scrollY > 300 ? setShowLogo(true) : setShowLogo(false);
  }, [setShowLogo]);
  useEventListener("scroll", handler);
  return (
    <div id="app-menu" className={showLogo ? 'gradientBg': ''}>
      <img
        src={Logo}
        id="hero-logo"
        alt="KALPIK STUDIO"
        className={showLogo ? "visible" : "hidden"}
      />
      <div id="app-menubar">
        <span className="menu-item" onClick={()=>theme.toggle()}>
          Toggle
        </span>
        <a className="menu-item" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MenuBar;
