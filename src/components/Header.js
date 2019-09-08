import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h2>
            <Link to="/">Prudential Book Store</Link>
          </h2>
          <p>Your one stop book shop</p>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
