import React, { createContext, useReducer } from "react";
import reducer from './reducer';
import TYPES from './types';


const initialState = {  
  portfolios: [],
  currentPortfolioID: '',
  timeOfLastInteraction: 0,
  enableAutoSlider: true,
};

const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};


const THEME = {
  text: {
    primary: '#e6e6e6',
    secondary: '#999999',
    disabled: '#808080',
  }
};

export { StateContext, StateProvider, TYPES, THEME };
