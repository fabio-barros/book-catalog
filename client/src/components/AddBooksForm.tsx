import {
    useState,
    FormEvent,
    FormEventHandler,
    FC,
    useEffect,
    useContext,
} from "react";
import { BookContext } from "../contexts/BookContext";
import { BookInput } from "../interfaces/BookInterface";

const AddBooksForm: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const { addBook } = useContext(BookContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBook({ title: title, author: author });
        setAuthor("");
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Title"
                type="text"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Author"
                type="text"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input type="submit" value="add book" />
        </form>
    );
};

export default AddBooksForm;
