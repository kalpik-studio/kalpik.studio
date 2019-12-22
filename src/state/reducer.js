import TYPES from "./types";

const reducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case TYPES.UPDATE_PORTFOLIOS:
      const defaultSelectedId = action.payload[0].id;
      return {
        ...state,
        timeOfLastInteraction: Date.now(),
        portfolios: action.payload,
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

    case TYPES.TOGGLE_AUTO_SLIDER:
      return {
        ...state,
        timeOfLastInteraction: Date.now(),
        enableAutoSlider: !state.enableAutoSlider
      };

    case TYPES.RESET_INTERACTION_TIMER:
      return { ...state, timeOfLastInteraction: Date.now() };

    default:
      return state;
  }
};

export default reducer;
