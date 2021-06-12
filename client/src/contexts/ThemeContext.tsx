import { createContext, useState, FC } from "react";

interface themeTypes {
    syntax: string;
    ui: string;
    bg: string;
}

interface stateTypes {
    isLightMode: boolean;
    light: themeTypes;
    dark: themeTypes;
}

interface ContextProps extends stateTypes {
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({} as ContextProps);

const ThemeContextProvider: FC = ({ children }) => {
    const [state, setState] = useState<stateTypes>({
        isLightMode: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#fff", ui: "#333", bg: "#555" },
    });

    const toggleTheme = () => {
        setState({ ...state, isLightMode: !state.isLightMode });
    };

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
