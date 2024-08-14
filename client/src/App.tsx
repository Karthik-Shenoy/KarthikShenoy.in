import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./AppComponents/Navbar/Navbar";
import { AppContextProvider } from "./Contexts/AppContext";
import { ThemeProvider } from "./Contexts/ThemeProvider";
import { HomePage } from "./Pages/HomePage/HomePage";
import { PostsPage } from "./Pages/PostsPage/PostsPage";
import { BasePage } from "./Pages/BasePage/BasePage";

function App() {
    return (
        <ThemeProvider>
            <AppContextProvider>
                <BrowserRouter>
                    <div className="relative flex min-h-screen  max-w-[100vw] flex-col bg-background justify-center items-center">
                        <Navbar />
                        <BasePage>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/posts" element={<PostsPage />} />
                            </Routes>
                        </BasePage>
                    </div>
                </BrowserRouter>
            </AppContextProvider>
        </ThemeProvider>
    );
}

export default App;
