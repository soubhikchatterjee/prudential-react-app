import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../actions/bookDetailAction";
import Loader from "./Loader";

const Detail = ({
  match: {
    params: { bookId }
  }
}) => {
  const dispatch = useDispatch();
  const bookDetail = useSelector(state => state.book.bookDetail);

  useEffect(() => {
    dispatch(getDetail(bookId));
  }, [dispatch, bookId]);

  if (!bookDetail) {
    return <Loader />;
  }

  const getStarRating = rating => {
    rating = Math.round(rating);

    let li = [];

    // Get yellow stars
    for (let i = 0; i < rating; i++) {
      li.push(
        <li key={Math.random()}>
          <i className="fas fa-star"></i>
        </li>
      );
    }

    // Get gray stars
    const TOTAL_STARS = 5;
    for (let i = 0; i < TOTAL_STARS - rating; i++) {
      li.push(
        <li key={Math.random()}>
          <i className="far fa-star"></i>
        </li>
      );
    }

    return li;
  };

  return (
    <section>
      <div className="container">
        <div className="left">
          <div className="photo">
            <img
              src={
                bookDetail &&
                bookDetail[0].getElementsByTagName("image_url")[0].value
              }
              alt={
                bookDetail &&
                bookDetail[0].getElementsByTagName("title")[0].value
              }
            />
          </div>
        </div>

        <div className="right">
          <div className="authors">
            <h2 className="title">
              {bookDetail &&
                bookDetail[0].getElementsByTagName("title")[0].value}
            </h2>
            <h4 className="author">
              {bookDetail &&
                bookDetail[0]
                  .getElementsByTagName("book")[0]
                  .getElementsByTagName("authors")[0]
                  .children.map(author => (
                    <span key={author.getElementsByTagName("id")[0].value}>
                      {author.getElementsByTagName("name")[0].value},&nbsp;
                    </span>
                  ))}
            </h4>
          </div>

          <div className="rating">
            <div className="stars">
              <ul>
                {bookDetail &&
                  getStarRating(
                    bookDetail[0].getElementsByTagName("average_rating")[0]
                      .value
                  )}
              </ul>
            </div>

            <p className="rating-counter">
              {bookDetail &&
                bookDetail[0].getElementsByTagName("ratings_count")[0]
                  .value}{" "}
              ratings
            </p>
          </div>

          <p className="description">
            {bookDetail &&
              bookDetail[0].getElementsByTagName("description")[0].value}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
