import React from "react";
import { connect } from "react-redux";

import HomeView from "./HomeView";
import NextView from "./NextView";
import NotFoundView from "./NotFoundView";

import { route } from "../modules/routing";

const RootView = ({ location }) => {
  switch (location.type) {
    case route("HOME"):
      return <HomeView />;
    case route("SUCCESS"):
      return <NextView />;
    case "@@redux-first-router/NOT_FOUND":
      return <NotFoundView />;
    default:
      return null;
  }
};

export default connect(
  state => ({
    location: state.location,
  }),
  {}
)(RootView);
