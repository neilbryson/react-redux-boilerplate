import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import InitialHome from '../layouts/InitialHome';

class HomeView extends PureComponent {
  render() {
    if (this.props.kind === 'pop') {
      return <div>You just pressed the Back button.</div>
    }

    return <InitialHome />;
  }
}

export default connect(
  state => ({
    kind: state.location.kind,
  }),
  { }
)(HomeView);
