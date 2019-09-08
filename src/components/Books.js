import React from "react";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <main>
      <div className="book-section-container">
        <div className="book-section section-a">
          <h2>Search Results...</h2>
          <div className="card-wraper">
            {books &&
              books.map(book => (
                <Book
                  key={book.getElementsByTagName("id")[0].value}
                  properties={book}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
