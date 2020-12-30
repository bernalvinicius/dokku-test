import React, { useContext } from 'react';
import { LOCALES } from '../../providers/i18n';
import { AppContext } from '../../providers/context';

const LangSwitcher = () => {
  const { dispatch } = useContext(AppContext);

  const setLanguage = siteLang =>
    dispatch({
      type: 'setLang',
      siteLang,
    });

  return (
    <div>
      {Object.keys(LOCALES).map(locale => {
        return (
          <button onClick={() => setLanguage(LOCALES[locale])} key={locale}>
            {locale}
          </button>
        );
      })}
    </div>
  );
};

export default LangSwitcher;
