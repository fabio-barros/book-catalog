import { useContext, FC, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AddBooksForm from "../components/AddBooksForm";

import axios from "axios";

import {  useDispatch, useSelector } from "react-redux";
import { listBooks } from "../redux/actions/bookActions";
import { RootState } from "../redux/store";
import { AppDispatch } from "../redux/store";


interface Book {
    id: number;
    title: string;
}

const BookListProvider: FC = () => {

    const [_books, setBooks] = useState<Book[]>([]);

    const { isLightMode, light, dark } = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;
    
    //Using react-redux to list books instead of the 'getBooks' function
    const dispatch = useDispatch();

    const bookList = useSelector((state: RootState) =>{
        console.log(state.bookList);
        return state.bookList;
    })

    const { loading, error, books } = bookList;

    useEffect(() => {
        const getData = async () => {
            const booksFromServer = await getBooks();
            setBooks(booksFromServer);
            
        };
        getData();
        dispatch(listBooks());
    }, [dispatch]);

    //USING JSON-SERVER
    const getBooks = async () => {
        const res = await axios.get("http://localhost:5000/books");
        return res.data;
    };

    const addBook = async (book: { title: string }) => {
        const res = await axios.post("http://localhost:5000/books", book);
        setBooks([...books, res.data]);
    };

    // const deleteBook = async (id) => {
    //     await axios.delete(`http://localhost:5000/tasks/${id}`);
    //     setTasks(tasks.filter((task) => task.id !== id));
    // };

    return (
        <div
            className="book-list"
            style={{ color: theme.syntax, background: theme.bg }}
        >
            <ul>
                {_books.map((book) => {
                    return (
                        <li style={{ background: theme.ui }} key={book.id}>
                            {" "}
                            {book.title}
                        </li>
                    );
                })}
            </ul>
            <AddBooksForm onAdd={addBook} />
        </div>
    );
};

export default BookListProvider;
