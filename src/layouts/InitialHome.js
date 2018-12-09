import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
    return (
      <>
      <Header>It works !</Header>
      <div>Now, try clicking the button below</div>
      <Button label="Click me" onClick={this.onClick} />
      </>
    );
  }
}

export default connect(state => ({}), { navigateTo })(InitialHome);
