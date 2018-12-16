import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { localise } from 'react-locale-hoc';

import InitialHome from '../layouts/InitialHome';

class HomeView extends PureComponent {
  render() {
    const { kind, t } = this.props;

    if (kind === 'pop') {
      return <div>{t('message')}</div>;
    }

    return <InitialHome />;
  }
}

export default localise(
  connect(
    state => ({
      kind: state.location.kind,
    }),
    {}
  )(HomeView)
);
