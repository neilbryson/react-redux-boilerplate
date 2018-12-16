import React from 'react';

import { localise } from 'react-locale-hoc';

const NextView = ({ t }) => {
  return <div>{t('next_instructions')}</div>;
};

export default localise(NextView);
