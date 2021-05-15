import { createContext, useState, FC } from "react";

interface ContextProps {
    isAuthenticated: boolean;
    toggleAuth: () => void;
}

export const AuthContext = createContext({} as ContextProps);

const AuthContextProvider: FC = ({ children }) => {
    const [state, setState] = useState({ isAuthenticated: false });

    const toggleAuth = () => {
        setState({ isAuthenticated: !state.isAuthenticated });
    };

    return (
        <AuthContext.Provider value={{ ...state, toggleAuth: toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;