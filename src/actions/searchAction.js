import http from "../lib/http";
import XMLParser from "react-xml-parser";
import { SEARCH_RESULT } from "./types";

const doSearch = searchTerm => dispatch => {
  // Run an Ajax call to fetch the search results
  http(`search/index.xml?q=${searchTerm}`)
    .get("")
    .then(function(response) {
      const xml = new XMLParser().parseFromString(response.data);
      const payload = xml.getElementsByTagName("results");
      dispatch({
        type: SEARCH_RESULT,
        payload
      });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export { doSearch };
