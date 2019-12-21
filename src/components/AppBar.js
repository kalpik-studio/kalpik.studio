import React, { useContext } from "react";
import styled from "@emotion/styled";
import { StateContext, THEME } from "../state";
import Logo from "../assets/images/KSlogo.png";

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
    }
  }

  #SliderDots {
    text-align: center;
    cursor: pointer;
  }

  #Navigation {
    text-align: right;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: calc((60px - 1.4 * 0.8rem) / 2) 10px;

    span {
      color: ${THEME.text.secondary};
      margin-left: 1rem;
      cursor: pointer;

      :hover {
        color: ${THEME.text.primary};
      }
    }
  }
`;

const AppBar = () => {
  const { state, dispatch } = useContext(StateContext);
  console.log(state, dispatch);

  return (
    <StyledAppBar id="AppBar">
      <div id="Logo">
        <img src={Logo} alt="KALPIK Studio" />
      </div>
      <div id="SliderDots">••••••••••</div>
      <div id="Navigation">
        <span>About</span>
        <span>Services</span>
        <span>Mail</span>
      </div>
    </StyledAppBar>
  );
};

export default AppBar;
