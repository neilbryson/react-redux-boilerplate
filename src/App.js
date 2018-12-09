import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import configureStore from "./configureStore";

import RootView from "./views/RootView";

const { store } = configureStore({});

const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const App = () => (
  <Provider store={store}>
    <Container>
      <RootView />
    </Container>
  </Provider>
);

export default App;
