import { Reducer } from "redux";
import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,
} from "../constants/booksConstants";
interface Books {
    id: number;
    title: string;
}

export const bookListReducer = (state = { books: [] as Books[] }, action: any) => {
    switch (action.type) {
        case BOOK_LIST_REQUEST:
            return { loading: true, books: [] };
        case BOOK_LIST_SUCCESS:
            return { loading: false, books: action.payload };
        case BOOK_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// export const manageBooksReducer = (state = { book: [] }, action) => {
//     switch (action.type) {
//         case BOOK_ADD_ITEM:
//             const item = action.payload;
//             return {
//                 ...state,
//                 book: [...state.book, item],
//             };

//         case BOOK_REMOVE_ITEM:
//             return {
//                 ...state,
//                 book: state.book.filter((x) => x.books !== action.payload),
//             };
//         default:
//             return state;
//     }
// };
