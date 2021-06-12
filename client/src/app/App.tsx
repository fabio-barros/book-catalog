import BookList from "../components/BookList";
import NavBar from "../components/Navbar";
import ThemeContextProvider from "../contexts/ThemeContext";
import AuthContextProvider from "../contexts/AuthContext";
import BookContextProvider from "../contexts/BookContext";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <BookContextProvider>
                        <NavBar />
                        <BookList />
                    </BookContextProvider> 
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
