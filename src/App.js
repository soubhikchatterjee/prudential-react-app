import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Listing from "./components/Listing";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/listing" component={Listing} />
      <Route path="/detail/:bookId" component={Detail} />
      <Footer />
    </Router>
  );
}

export default App;
