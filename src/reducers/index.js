import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import bookDetailReducer from "./bookDetailReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  book: bookDetailReducer
});

export default rootReducer;
