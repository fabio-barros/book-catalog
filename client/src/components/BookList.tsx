import { useContext, FC, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
import AddBooksForm from "../components/AddBooksForm";
import { useDispatch, useSelector } from "react-redux";
// import { listBooks } from "../redux/actions/bookActions";
// import { RootState } from "../redux/store";
// import { AppDispatch } from "../redux/store";
import ThemeToggle from "./ThemeToggle";
import { BookDetails } from "./BookDetails";
import { ActionType } from "../reducers/BookReducers";

interface Book {
    id: number;
    title: string;
}

interface BookInput {
    title: string;
}

const BookListProvider: FC = () => {
    const { listBooks, books } = useContext(BookContext);

    // const [_books, setBooks] = useState<Book[]>([]);

    const { isLightMode, light, dark } = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;

    //***********************REDUX************************************** */
    //Using react-redux to list books instead of the 'getBooks' function
    // const dispatch = useDispatch();

    // const bookList = useSelector((state: RootState) => {
    //     console.log(state.bookList);
    //     return state.bookList;
    // });

    // const { loading, error, books } = bookList;

    useEffect(() => {
        const get = async () => {
            listBooks();
        };
        get();
    }, []);

    return books.length ? (
        <div
            className="book-list"
            style={{ color: theme.syntax, background: theme.bg }}
        >
            <ul>
                {books.map((book) => {
                    return <BookDetails book={book} />;
                })}
            </ul>
            <AddBooksForm />
            <ThemeToggle />
        </div>
    ) : (
        <div>No books to read.</div>
    );
};

export default BookListProvider;
