import React, { useContext } from 'react';
import THEMES from '../../providers/themes/themeList';
import { AppContext } from '../../providers/context';

const ThemeSwitcher = () => {
  const { dispatch } = useContext(AppContext);

  const setTheme = themeName =>
    dispatch({
      type: 'setTheme',
      themeName,
    });

  return (
    <div>
      {Object.keys(THEMES).map(theme => {
        return (
          <button onClick={() => setTheme(THEMES[theme])} key={theme}>
            {theme}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
