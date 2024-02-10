import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import ResourcePage from './pages/ResourcePage/ResourcePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen App flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element = {<ResourcePage/>} />
          <Route path="/resources/single" element={<ResourcePage/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
