import { createContext, useState, FC, useEffect, useReducer } from "react";
import { Book, BookInput } from "../interfaces/BookInterface";
import { bookReducer, ActionType, ListAction } from "../reducers/BookReducers";
import axios from "axios";

interface BookContextProps {
    books: Book[];
    listBooks: () => Promise<void>;
    addBook: (book: BookInput) => Promise<void>;
    removeBook: (id: number) => Promise<void>;
}

export const BookContext = createContext<BookContextProps>(
    {} as BookContextProps
);

const BookContextProvider: FC = ({ children }) => {
    // const [_books, setBooks] = useState<Book[]>([]);

    const [{ data: books, isLoading, error }, dispatch] = useReducer(
        bookReducer,
        {
            data: [],
            isLoading: false,
        }
    );

    const listBooks = async () => {
        try {
            dispatch({ type: ActionType.REQUEST });
            const { data } = await axios.get("http://localhost:5000/books");
            dispatch({
                type: ActionType.SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ActionType.FAILURE,
                error:
                    error.response && error.reponse.data.message
                        ? error.reponse.data.message
                        : error.message,
            });
        }
    };

    const addBook = async (book: BookInput) => {
        const { data } = await axios.post("http://localhost:5000/books", book);
        dispatch({
            type: ActionType.ADD,
            payload: data,
        });
    };

    const removeBook = async (id: number) => {
        await axios.delete(`http://localhost:5000/books/${id}`);
        dispatch({ type: ActionType.REMOVE, id: id });
    };

    // const addBook = async (book: BookInput) => {
    //     const { data } = await axios.post("http://localhost:5000/books", book);
    //     console.log(data);
    //     setBooks([..._books, data]);
    // };
    // const removeBook = async (id: number) => {
    //     // console.log("rem");
    //     await axios.delete(`http://localhost:5000/books/${id}`);
    //     setBooks(_books.filter((book) => book.id !== id));
    // };

    return (
        <BookContext.Provider
            value={{
                books: books,
                listBooks: listBooks,
                addBook: addBook,
                removeBook: removeBook,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
