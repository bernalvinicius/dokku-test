import React from 'react';
import App from './App';
import { AppContextProvider } from './providers/context';

const Root = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

export default Root;
