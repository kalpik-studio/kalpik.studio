import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import uuid from 'uuid';
import { StateContext, TYPES, THEME } from "../state";
import PortfolioCard from "./PortfolioCard";
import { calcTimeDiffFromNow } from "../utilities";
import arrowIconRight from "../assets/images/arrowIconRight.svg";
import arrowIconLeft from "../assets/images/arrowIconLeft.svg";

const StyledSlider = styled.div`
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  position: relative;

  #buttonPrev,
  #buttonNext {
    position: absolute;
    top: 5vh;
    bottom: 5vh;
    width: 10vw;
    padding-top: calc(35vh - 20px); 
    text-align: center;    
    opacity: 0.5;

    :hover {
      opacity: 1;
    }
  }

  #buttonPrev {
    left: 0;    
  }
  #buttonNext {
    right: 0;
  }

  #SliderDots {
    position: absolute;
    top: -2vh;
    left: 50vw;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      margin: 0 0.5rem;
      width: 1vw;
      min-width: 10px;
      height: 5px;
      border-radius: 5px;
      background-color: ${THEME.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      :hover,
      &.selected {
        background-color: ${THEME.text.primary};
      }
    }
  }
`;

const silderTimeDelay = 10000; // Next slide in 10s

const Slider = () => {
  const { state, dispatch } = useContext(StateContext);

  const portfoliosCount = state.portfolios.length;

  const selectedIndex = state.portfolios.findIndex(
    x => x.id === state.currentPortfolioID
  );

  const nextPortfolioId =
    selectedIndex === -1
      ? ""
      : selectedIndex === portfoliosCount - 1
      ? state.portfolios[0].id
      : state.portfolios[selectedIndex + 1].id;

  const prevPortfolioId =
    selectedIndex === -1
      ? ""
      : selectedIndex === 0
      ? state.portfolios[portfoliosCount - 1].id
      : state.portfolios[selectedIndex - 1].id;

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (calcTimeDiffFromNow(state.timeOfLastInteraction) > silderTimeDelay) {
        clearInterval(autoSlideInterval);
        if (state.enableAutoSlider) {
          dispatch({
            type: TYPES.UPDATE_SELECTED_PORTFOLIO,
            payload: nextPortfolioId
          });
        }
      }
    }, 1000);
    return () => clearInterval(autoSlideInterval);
  }, [dispatch, selectedIndex, state, nextPortfolioId]);

  let filteredPortfolios = state.portfolios;

  switch (selectedIndex) {
    case -1:
      filteredPortfolios = [];
      break;
    case 0:
      filteredPortfolios = [
        filteredPortfolios[portfoliosCount - 1],
        ...filteredPortfolios.slice(0, 2)
      ];
      break;
    case portfoliosCount - 1:
      filteredPortfolios = [
        ...filteredPortfolios.slice(selectedIndex - 1, portfoliosCount),
        filteredPortfolios[0]
      ];
      break;
    default:
      filteredPortfolios = filteredPortfolios.slice(
        selectedIndex - 1,
        selectedIndex + 2
      );
  }

  return (
    <StyledSlider>
      {filteredPortfolios &&
        filteredPortfolios.map((portolfio, index) => (
          <PortfolioCard key={uuid()} index={index} {...portolfio} />
        ))}
      <div
        id="buttonPrev"
        onClick={() =>
          dispatch({
            type: TYPES.UPDATE_SELECTED_PORTFOLIO,
            payload: prevPortfolioId
          })
        }
      >
        <img
          src={arrowIconLeft}
          alt="Previous"
          style={{ width: '40px', height: '40px' }}
        />
      </div>
      <div
        id="buttonNext"
        onClick={() =>
          dispatch({
            type: TYPES.UPDATE_SELECTED_PORTFOLIO,
            payload: nextPortfolioId
          })
        }
      >
        <img
          src={arrowIconRight}
          alt="Next"
          style={{ width: '40px', height: '40px' }}
        />
      </div>
      <div id="SliderDots">
        {state.portfolios &&
          state.portfolios.map(portfolio => (
            <div
              key={uuid()}
              className={
                state.currentPortfolioID === portfolio.id ? "selected" : ""
              }
              onClick={() =>
                dispatch({
                  type: TYPES.UPDATE_SELECTED_PORTFOLIO,
                  payload: portfolio.id
                })
              }
            />
          ))}
      </div>
    </StyledSlider>
  );
};

export default Slider;
