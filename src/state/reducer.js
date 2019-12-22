import TYPES from "./types";

const reducer = (state, action) => {  
  switch (action.type) {
    case TYPES.UPDATE_PORTFOLIOS:
      const defaultSelectedId =
        action.payload[1].id;
      return {
        ...state,
        portfolios: action.payload,
        timeOfLastInteraction: Date.now(),
        currentPortfolioID:
          state.currentPortfolioID === ""
            ? defaultSelectedId
            : state.currentPortfolioID
      };

    case TYPES.UPDATE_SELECTED_PORTFOLIO:
      return {
        ...state,
        timeOfLastInteraction: Date.now(),
        currentPortfolioID: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
