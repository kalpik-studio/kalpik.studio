import React, { useState } from "react";
import styled from "@emotion/styled";
// import { StateContext, THEME, TYPES } from "../state";
import { THEME } from "../state";
import { useWindowSize } from "../utilities";
import Logo from "../assets/images/KSlogo.png";
import menuIcon from "../assets/images/menuIcon.svg";
import closeIcon from "../assets/images/closeIcon.svg";

const StyledAppBar = styled.div`
  margin: 0 10vw;
  width: 80vw;
  height: 60px;
  min-height: 60px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  > div {
    flex: 1 0 0px;
    height: 100%;
  }

  #Logo {
    text-align: left;
    cursor: pointer;
    img {
      max-height: 100%;
      width: auto;
      opacity: 0.75;
      transition: all 0.2s ease-in;
      :hover {
        opacity: 1;
      }
    }
  }

  #Navigation {
    position: relative;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      opacity: 0.75;
      transition: all 0.2s ease-in-out;

      :hover {
        opacity: 1;
      }
    }

    #popupNav {
      position: absolute;
      bottom: 60px;
      z-index: 100;
      background: #333333;
      padding: 0.5rem;
      border-radius: 10px;
      box-shadow: 0 0 20px 0 #000000;
      & > div {
        margin: 1rem 1rem;
      }
    }

    div {
      margin-left: 1rem;
      color: ${THEME.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      :hover,
      &.selected {
        color: ${THEME.text.primary};
      }
    }
  }
`;

/**
 * TODO: About, Services
 */
const AppBar = () => {
  // const { state, dispatch } = useContext(StateContext);
  const { isMobile } = useWindowSize();
  const [isMenu, setMenu] = useState(false);

  const navigation = (
    <>
      <div>About</div>
      <div>Services</div>
      <div onClick={() => (window.location = "mailto:hello@kalpik.studio")}>
        Contact
      </div>
    </>
  );

  return (
    <StyledAppBar id="AppBar">
      <div id="Logo">
        <img src={Logo} alt="KALPIK Studio" />
      </div>
      {isMobile ? (
        <div id="Navigation">
          <img
            alt="Menu"
            src={isMenu ? closeIcon : menuIcon}
            onClick={() => setMenu(prev => !prev)}
          />
          {isMenu ? <div id="popupNav">{navigation}</div> : null}
        </div>
      ) : (
        <div id="Navigation">{navigation}</div>
      )}
    </StyledAppBar>
  );
};

export default AppBar;
