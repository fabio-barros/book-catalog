import BookList from "../components/pages/BookList";
import Header from "../components/pages/Header";
import ThemeContextProvider from "../contexts/ThemeContext";
import AuthContextProvider from "../contexts/AuthContext";
import BookContextProvider from "../contexts/BookContext";
import { Container } from "react-bootstrap";
import { Fragment } from "react";

function App() {
    return (
        <Fragment>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <BookContextProvider>
                        <Container className="main-wrapper " fluid>
                            <Header />
                            <BookList />
                        </Container>
                    </BookContextProvider>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Fragment>
    );
}

export default App;
