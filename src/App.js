import React, { useContext } from 'react';
import { I18nProvider } from './providers/i18n';
import translate from './providers/i18n/translate';

import LangSwitcher from './components/LangSwitcher';
import { AppContext } from './providers/context';

const App = () => {
  const { state } = useContext(AppContext);

  return (
    <I18nProvider locale={state.siteLang}>
      <div>
        <LangSwitcher />
        Learn React - 6<div>{translate('hello', { name: 'vinicius' })}</div>
      </div>
    </I18nProvider>
  );
};

export default App;
