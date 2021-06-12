import { FC, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";

interface Props {}

const Navbar: FC = (props: Props) => {
    const { isLightMode, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { books } = useContext(BookContext);
    const theme = isLightMode ? light : dark;

    return (
        <div>
            <nav style={{ color: theme.syntax, background: theme.bg }}>
                <p>You have {books.length} books to read.</p>
                <h1>Book List</h1>
                <div onClick={toggleAuth}>
                    {isAuthenticated ? "logged in" : "logged out"}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
