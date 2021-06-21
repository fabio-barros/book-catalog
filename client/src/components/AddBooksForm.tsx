import { useState, FormEvent, FC, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { BookContext } from "../contexts/BookContext";

const AddBooksForm: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");

    const { addBook } = useContext(BookContext);

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        addBook({ title: title, author: author, isbn: isbn });
        setAuthor("");
        setTitle("");
        setIsbn("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Mar Morto"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Jorge Amado"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>ISBN-13</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="978-8535911824"
                    value={isbn}
                    required
                    onChange={(e) => setIsbn(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" className="submit-btn" block>
                Submit
            </Button>
        </Form>
    );
};

export default AddBooksForm;
