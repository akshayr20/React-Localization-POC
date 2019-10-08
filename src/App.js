import './i18n';
import './i18n';
import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();
  return <h1>{t('h')}</h1>;
};
