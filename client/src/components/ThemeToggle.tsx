import { useContext, FC } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface Props {}

const ThemeToggle: FC = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ float: "right" }}>
            <button onClick={toggleTheme}> Mudar Tema</button>
        </div>
    );
};

export default ThemeToggle;
