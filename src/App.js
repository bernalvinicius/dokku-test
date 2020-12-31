import React, { useContext } from 'react';
import { I18nProvider } from './providers/i18n';
import translate from './providers/i18n/translate';
import { ThemeProvider } from 'styled-components';
import LangSwitcher from './components/LangSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import { AppContext } from './providers/context';
import { getTheme } from './providers/themes/getTheme';
import { Header } from './styles';

const App = () => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <I18nProvider locale={state.siteLang}>
        <div>
          <Header>
            <LangSwitcher />
            Learn React - 6<div>{translate('hello', { name: 'vinicius' })}</div>
            <ThemeSwitcher />
          </Header>
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
