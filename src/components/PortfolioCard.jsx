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
  filter: brightness(1);
  transition: filter 0.2s ease-in-out;
  animation: fade-in-fwd 0.6s ease-in-out both;
  :hover {
    filter: brightness(1.25);
  }

  @-webkit-keyframes fade-in-fwd {
    0% {
      -webkit-transform: translateZ(-80px);
      transform: translateZ(-80px);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-fwd {
    0% {
      -webkit-transform: translateZ(-80px);
      transform: translateZ(-80px);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }

  .overlay {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(13, 13, 13, 0.9) 0%,
      rgba(13, 13, 13, 0.75) 30%,
      rgba(51, 51, 51, 0) 100%
    );
    padding: 40px;

    #heading {
      margin: 2rem 0;
      padding: 0;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.8rem;

      img {
        height: auto;
        width: auto;
        max-height: 80px;
        max-width: 300px;
      }
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

    #tech {
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
const PortfolioCard = ({
  index,
  id,
  title,
  logo,
  background,
  tags,
  date,
  description,
  tech,
}) => {
  const { state } = useContext(StateContext);
  const { isMobile } = useWindowSize();

  const positionInArray = index === 1 ? 0 : index === 0 ? -1 : 1;
  let positionLeft = positionInArray * cardWidth;
  if (positionLeft < 0) positionLeft += 5;
  else positionLeft += 25;
  positionLeft += "vw";

  if (state.currentPortfolioID === id) {
    positionLeft = "10vw";
    return (
      <StyledSelectedPortfolioCard
        // onMouseEnter={() => dispatch({ type: TYPES.TOGGLE_AUTO_SLIDER })}
        // onMouseLeave={() => dispatch({ type: TYPES.TOGGLE_AUTO_SLIDER })}
        left={"10vw"}
        style={{
          backgroundImage: ` url(${background})`
        }}
      >
        <div className="overlay">
          <div id="heading">
            {logo ? <img alt={title} src={logo} /> : title}
          </div>
          {date || tags ? (
            <div id="tags">
              {date ? date : ""} •
              {tags && tags.length > 0
                ? typeof tags === "string"
                  ? tags
                  : tags.join(", ")
                : null}
            </div>
          ) : null}
          {isMobile ? null : (
            <>
              {description ? <div id="description">{description}</div> : null}
              {tech ? (
                <div id="tech">
                  {typeof tech === "string" ? tech : tech.join(", ")}
                </div>
              ) : null}
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
          backgroundImage: `url(${background})`
        }}
      />
    );
};

export default PortfolioCard;
