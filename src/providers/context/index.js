import React, { useReducer, createContext } from 'react';
import defaultContext from './defaultContext';
import PropTypes from 'prop-types';

const AppContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return defaultContext;
    case 'setTheme':
      return { ...state, themeName: action.themeName };
    case 'setLang':
      return { ...state, siteLang: action.siteLang };
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
