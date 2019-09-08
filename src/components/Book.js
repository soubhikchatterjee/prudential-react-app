import React from "react";
import { Link } from "react-router-dom";

const Book = ({ properties }) => {
  return (
    <div className="card">
      <img
        src={
          properties
            .getElementsByTagName("best_book")[0]
            .getElementsByTagName("image_url")[0].value
        }
        alt={
          properties
            .getElementsByTagName("best_book")[0]
            .getElementsByTagName("title")[0].value
        }
      />
      <h3>
        {
          properties
            .getElementsByTagName("best_book")[0]
            .getElementsByTagName("title")[0].value
        }
      </h3>
      <p>
        by{" "}
        {
          properties
            .getElementsByTagName("best_book")[0]
            .getElementsByTagName("author")[0]
            .getElementsByTagName("name")[0].value
        }
      </p>
      <Link
        className="btn btn-primary"
        to={`/detail/${
          properties
            .getElementsByTagName("best_book")[0]
            .getElementsByTagName("id")[0].value
        }`}
      >
        Read More
      </Link>
    </div>
  );
};

export default Book;
