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
        <Container className="header-wrapper ">
            <Row
                className="header-row py-4"
                style={{ color: theme.syntax, background: theme.bg }}
            >
                <Col
                    className="header-col mx-auto text-center"
                    style={{
                        color: theme.syntax,
                        background: theme.bg,
                        width: "200px",
                    }}
                >
                    {/* <p>You have {books.length} books to read.</p> */}

                    <h1 style={{ fontSize: "4rem", color: "#2F74C0" }}>
                        <span
                            className="iconify "
                            data-icon="bi:book-half"
                            data-inline="false"
                            style={{
                                color: "#2F74C0",
                                width: "65px",
                                height: "65px",
                            }}
                        >
                            {/* <p>You have {books.length} books to read.</p> */}
                        </span>
                        Book List
                    </h1>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar;
