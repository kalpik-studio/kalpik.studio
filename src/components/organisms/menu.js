import React from "react";
import { useState, useCallback } from "react";
import useEventListener from "../../services/eventlistener";
import Logo from "../../assets/images/ks-white-h.png";

const MenuBar = () => {
  const [showLogo, setShowLogo] = useState(false);
  const handler = useCallback(() => {
    window.scrollY > 300 ? setShowLogo(true) : setShowLogo(false);
  }, [setShowLogo]);
  useEventListener("scroll", handler);
  return (
    <div id="app-menu">
      <img
        src={Logo}
        id="hero-logo"
        alt="KALPIK STUDIO"
        className={showLogo ? "visible" : "hidden"}
      />
      <div id="app-menubar">
        <a className="menu-item" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MenuBar;
