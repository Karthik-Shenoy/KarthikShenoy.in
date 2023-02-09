import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import CodeDisplay from './components/CodeDisplay/CodeDisplay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element = {<CodeDisplay />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
