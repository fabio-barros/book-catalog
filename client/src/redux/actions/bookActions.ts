import axios from "axios";
import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,
} from "../constants/booksConstants";

export const listBooks = () => async (dispatch: any) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST });
        const { data } = await axios.get("http://localhost:5000/books");
        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload:
                error.response && error.reponse.data.message
                    ? error.reponse.data.message
                    : error.message,
        });
    }
};

// export const removeFromCart = (id) => async (dispatch, getState) => {
//     dispatch({
//         type: CART_REMOVE_ITEM,
//         payload: id,
//     });

//     localStorage.setItem(
//         "cartItems",
//         JSON.stringify(getState().cart.cartItems)
//     );
// };
