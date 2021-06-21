import { createContext, FC, useReducer } from "react";
import { Book, BookInput } from "../interfaces/BookInterface";
import { bookReducer, ActionType} from "../reducers/BookReducers";
import axios from "axios";

interface BookContextProps {
    books: Book[];
    isLoading?: boolean;
    error?: string;
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
    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const listBooks = async () => {
        try {
            
            dispatch({ type: ActionType.REQUEST });
            // await sleep(2000);
            const { data } = await axios.get(
                `${process.env.REACT_APP_DOTNET_API}`
            );
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
        const { data } = await axios.post(
            `${process.env.REACT_APP_DOTNET_API}`,
            book
        );
        dispatch({
            type: ActionType.ADD,
            payload: data,
        });
    };

    const removeBook = async (id: number) => {
        try {
            await axios.delete(`${process.env.REACT_APP_DOTNET_API}/${id}`);
            dispatch({ type: ActionType.REMOVE, id: id });
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
                isLoading: isLoading,
                error: error,
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
