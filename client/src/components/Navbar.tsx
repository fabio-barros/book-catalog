import { FC, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

interface Props {}

const Navbar: FC = (props: Props) => {
    const { isLightMode, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightMode ? light : dark;

    return (
        <div>
            <nav style={{ color: theme.syntax, background: theme.bg }}>
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
