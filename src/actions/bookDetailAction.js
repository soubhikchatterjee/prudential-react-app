import http from "../lib/http";
import XMLParser from "react-xml-parser";
import { GET_BOOK_DETAIL } from "./types";

const getDetail = bookId => dispatch => {
  // Run an Ajax call to fetch the search results
  http(`book/show/${bookId}.xml?`)
    .get("")
    .then(function(response) {
      const xml = new XMLParser().parseFromString(response.data);
      const payload = xml.getElementsByTagName("GoodreadsResponse");
      dispatch({
        type: GET_BOOK_DETAIL,
        payload
      });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export { getDetail };
