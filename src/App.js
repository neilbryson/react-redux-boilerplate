import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { LocaleProvider } from 'react-locale-hoc';

import configureStore from './configureStore';

import RootView from './views/RootView';

import locales from './helpers/locales';

const { store } = configureStore({});

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const App = () => (
  <Provider store={store}>
    <LocaleProvider strings={locales}>
      <Container>
        <RootView />
      </Container>
    </LocaleProvider>
  </Provider>
);

export default App;
