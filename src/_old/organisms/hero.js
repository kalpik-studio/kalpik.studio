import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Logo from "../assets/images/ks-white-v.png";

import { Icon } from 'react-icons-kit';
import { arrowDown } from 'react-icons-kit/feather';

const HeroSection = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div id="hero" className="pad100">
      <div id="hero-div">
        <img
          src={Logo}
          id="hero-logo"
          alt="KALPIK STUDIO Logo"
          style={{
            marginTop:
              window.innerHeight > 700
                ? (window.innerHeight - 800) / 2 + "px"
                : 0
          }}
        ></img>
        <h1 style={{ color: "var(--textAlt)" }}>
          Branding, Apps <br /> and Websites.
        </h1>
        <h2 style={{ color: "var(--textAlt)" }}>
          Designing and developing <br /> your business together.
          <br />
          <br />
        </h2>
        
          <a href="#contact" style={{opacity: hideOnScroll? 1: 0, color:"#FFFFFF"}}>
            <Icon icon={arrowDown} size={32}/>
          </a>
        
      </div>
    </div>
  );
};

export default HeroSection;
