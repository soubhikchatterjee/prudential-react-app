import React, { useEffect } from "react";
import Books from "./Books";
import { useSelector, useDispatch } from "react-redux";
import { doSearch } from "../actions/searchAction";
import Loader from "./Loader";

const Listing = props => {
  const searchTerm = props.history.location.state.term || "";

  const dispatch = useDispatch();
  const result = useSelector(state => state.search);

  useEffect(() => {
    dispatch(doSearch(searchTerm));
  }, [dispatch, searchTerm]);

  if (!result.books) {
    return <Loader />;
  }

  if (result.books && result.books[0].children.length === 0) {
    return <h1 className="loader">No Matching Books</h1>;
  }

  return (
    <React.Fragment>
      <Books books={result.books && result.books[0].children} />
    </React.Fragment>
  );
};

export default Listing;
