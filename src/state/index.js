import React, { createContext, useReducer } from "react";
import reducer from './reducer';
import TYPES from './types';

const THEME = {
  text: {
    primary: '#e6e6e6',
    secondary: '#999999',
    disabled: '#808080',
  }
};

const initialState = {  
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

export { StateContext, StateProvider, TYPES, THEME };
