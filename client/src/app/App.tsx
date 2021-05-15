import BookList from "../components/BookList";
import NavBar from "../components/Navbar";
import ThemeContextProvider from "../contexts/ThemeContext";
import AuthContextProvider from "../contexts/AuthContext";

import "../styles/css/App.css";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <NavBar />
                    <BookList />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
