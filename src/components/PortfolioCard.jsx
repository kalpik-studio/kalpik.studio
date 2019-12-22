import React, { useContext } from "react";
import styled from "@emotion/styled";
import { StateContext, THEME } from "../state";
import { useWindowSize } from "../utilities";

const cardWidth = 70;
const selectedCardWidth = 80;

const StyledPortfolioCard = styled.div`
  position: absolute;
  background-color: #333333;
  border-radius: 20px;
  left: ${p => p.left};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-top: 5vh;
  opacity: 0.5;
  width: ${cardWidth}vw;
  min-width: ${cardWidth}vw;
  max-width: ${cardWidth}vw;
  height: ${cardWidth}vh;
  min-height: ${cardWidth}vh;
  max-height: ${cardWidth}vh;
  box-shadow: 0 0 40px 0 #000000;
`;

const StyledSelectedPortfolioCard = styled(StyledPortfolioCard)`
  margin-top: 0;
  opacity: 1;
  width: ${selectedCardWidth}vw;
  min-width: ${selectedCardWidth}vw;
  max-width: ${selectedCardWidth}vw;
  height: ${selectedCardWidth}vh;
  min-height: ${selectedCardWidth}vh;
  max-height: ${selectedCardWidth}vh;
  box-shadow: 0 0 80px 0 #000000;
  overflow: hidden;

  .overlay {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(13, 13, 13, 0.8) 0%,
      rgba(13, 13, 13, 0.5) 30%,
      rgba(51, 51, 51, 0) 100%
    );
    padding: 40px;

    #heading {
      margin: 2rem 0;
      padding: 0;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.8rem;
    }

    #tags {
      font-size: 0.7rem;
      color: ${THEME.text.primary};
      line-height: 1rem;
      margin-bottom: 1rem;
    }

    #description {
      color: ${THEME.text.primary};
      margin-bottom: 1rem;
      width: 320px;
    }

    #tags2 {
      font-size: 0.7rem;
      color: ${THEME.text.secondary};
      line-height: 1rem;
      margin-bottom: 1rem;
    }
  }
`;


/**
 * TODO: onClick Details
 */
const PortfolioCard = ({ index, id, title }) => {
  const { state } = useContext(StateContext);

  const { isMobile } = useWindowSize();
  console.log(isMobile);

  const positionInArray = index === 1 ? 0 : index === 0 ? -1 : 1;
  let positionLeft = positionInArray * cardWidth;
  if (positionLeft < 0) positionLeft += 5;
  else positionLeft += 25;
  positionLeft += "vw";

  if (state.currentPortfolioID === id) {
    positionLeft = "10vw";
    return (
      <StyledSelectedPortfolioCard
        left={"10vw"}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`
        }}
      >
        <div className="overlay">
          <div id="heading">{title}</div>
          <div id="tags">2019 • Branding, Style Guidelines</div>
          {isMobile ? null : (
            <>
              <div id="description">
                Business Espoo supports the vitality of businesses by offering
                the best, continuously developing services in one place.
              </div>
              <div id="tags2">Sketch, InDesign</div>
            </>
          )}
        </div>
      </StyledSelectedPortfolioCard>
    );
  } else
    return (
      <StyledPortfolioCard
        left={positionLeft}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1576935649119-53551e41cf62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`
        }}
      />
    );
};

export default PortfolioCard;
