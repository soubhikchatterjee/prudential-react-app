import React from "react";
import Hero from "./Hero";
import { withRouter } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  );
};

export default withRouter(Home);
