import React from "react";
import { withRouter } from "react-router-dom";

const Search = props => {
  const handleSearch = e => {
    if (e.keyCode === 13 && e.target.value) {
      return props.history.push("/listing", { term: e.target.value });
    }
  };

  return (
    <div className="search-box">
      <input type="search" placeholder="Search Books" onKeyUp={handleSearch} />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default withRouter(Search);
