import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { localise } from 'react-locale-hoc';

import Button from '../components/Button';

import { navigateTo } from '../modules/routing';

const Header = styled('div')`
  font-weight: bold;
`;

class InitialHome extends PureComponent {
  onClick = () => {
    const { navigateTo } = this.props;

    navigateTo('SUCCESS');
  };

  render() {
    const { t } = this.props;

    return (
      <>
        <Header>{t('it_works')}</Header>
        <div>{t('instructions')}</div>
        <Button label="Click me" onClick={this.onClick} />
      </>
    );
  }
}

export default localise(
  connect(
    state => ({}),
    { navigateTo }
  )(InitialHome)
);
