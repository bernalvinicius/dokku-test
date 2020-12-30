import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

import { LOCALES } from './locales';
import messages from './messages';

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

Provider.propTypes = {
  locale: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Provider;
