import { useContext, FC, useEffect, Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BookContext } from "../../contexts/BookContext";
import ThemeToggle from "../ThemeToggle";
import AddBooksForm from "../AddBooksForm";
import BookDetails from "../BookDetails";
import { Message } from "../Message";
import Spinner from "../Spinner";

const BookListProvider: FC = () => {
    const { listBooks, books, isLoading, error } = useContext(BookContext);

    const { isLightMode, light, dark } = useContext(ThemeContext);
    const theme = isLightMode ? light : dark;

    useEffect(() => {
        listBooks();
    }, []);

    return (
        <Container
            className="book-list-wrapper"
            style={{ color: theme.syntax, background: theme.bg }}
        >
            <Row className="form-row">
                <Col className="form-col">
                    <AddBooksForm />
                </Col>
                {/* <ThemeToggle /> */}
            </Row>

            {!isLoading ? (
                <Row className="booklist-row">
                    {books.length ? (
                        <Fragment>
                            {[...books].reverse().map((book) => (
                                <Col
                                    key={book.id}
                                    sm={12}
                                    className="booklist-col"
                                >
                                    <BookDetails book={book} />
                                </Col>
                            ))}
                        </Fragment>
                    ) : (
                        <Col>No books to read.</Col>
                    )}
                </Row>
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Spinner />
            )}
        </Container>
    );
};

export default BookListProvider;
