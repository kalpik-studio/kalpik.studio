import React from "react";
import Logo from "../../assets/ks-white-v.png";
import MdArrowDown from "react-ionicons/lib/MdArrowDown";

const HeroSection = () => {
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
        <a href="#contact">
          <MdArrowDown color="#FFFFFF" fontSize="2rem" onClick={() => {}} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
