import { SEARCH_RESULT } from "../actions/types";

const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
