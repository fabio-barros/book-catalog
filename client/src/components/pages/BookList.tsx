import { useContext, FC, useEffect, Fragment, useState } from "react";
import { Row, Col, Container, Table, Alert, Button } from "react-bootstrap";
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

    const [show, setShow] = useState(true);

    useEffect(() => {
        listBooks();
    }, []);

    return (
        <Container
            className="book-list-wrapper "
            style={{ color: theme.syntax, background: theme.bg }}
        >
            <Row>
                <Col>
                    <Alert show={show} variant="info">
                        <Alert.Heading>
                            <p>You have {books.length} books to read.</p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button
                                    onClick={() => setShow(false)}
                                    variant="outline-success"
                                >
                                    Close Alert!
                                </Button>
                            </div>
                        </Alert.Heading>
                    </Alert>
                    {!show && (
                        <Button onClick={() => setShow(true)}>
                            Show Alert
                        </Button>
                    )}
                </Col>
            </Row>
            <Row className="form-row pt-3 pb-4">
                <Col className="form-col">
                    <AddBooksForm />
                </Col>
                {/* <ThemeToggle /> */}
            </Row>

            {!isLoading ? (
                <Row className="booklist-row">
                    {books.length ? (
                        <Col lg={12}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>ISBN-13</th>
                                        {/* <th>Delete</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...books].reverse().map((book) => (
                                        <BookDetails book={book} />
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
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
