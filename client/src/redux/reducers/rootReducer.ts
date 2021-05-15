import { combineReducers } from "redux";
import { bookListReducer } from "./bookReducers";

const rootReducer = combineReducers({
    bookList: bookListReducer,
    // book: manageBooksReducer,
});

export default rootReducer;

