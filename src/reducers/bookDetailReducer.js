import { GET_BOOK_DETAIL } from "../actions/types";

const bookDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: action.payload
      };
    default:
      return state;
  }
};

export default bookDetailReducer;
