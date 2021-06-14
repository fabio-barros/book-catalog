import { FC, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BookContext } from "../../contexts/BookContext";
import { ThemeContext } from "../../contexts/ThemeContext";

interface Props {}

const Navbar: FC = (props: Props) => {
    const { isLightMode, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightMode ? light : dark;

    return (
        <Container className="header-wrapper">
            <Row className="header-row">
                <Col
                    className="header-col"
                    style={{ color: theme.syntax, background: theme.bg }}
                >
                    {/* <nav style={{ color: theme.syntax, background: theme.bg }}> */}
                    <p>You have {books.length} books to read.</p>
                    <h1>Book List</h1>
                    {/* </nav> */}
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar;
