import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./AppComponents/Navbar/Navbar";
import { AppContextProvider } from "./Contexts";
import { ThemeProvider } from "./Contexts/ThemeProvider";
import { HomePage } from "./Pages/HomePage/HomePage";
import { PostsPage } from "./Pages/PostsPage/PostsPage";
import { BasePage } from "./Pages/BasePage/BasePage";
import { ProjectsPage } from "./Pages/ProjectsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <AppContextProvider>
                    <BrowserRouter>
                        <div className="relative flex min-h-screen  max-w-[100vw] flex-col bg-background justify-center items-center">
                            <Navbar />
                            <BasePage>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/posts" element={<PostsPage />} />
                                    <Route path="/project" element={<ProjectsPage />} />
                                </Routes>
                            </BasePage>
                        </div>
                    </BrowserRouter>
                </AppContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
