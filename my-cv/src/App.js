import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Publications from './components/Publications';
import Contact from './components/Contact';
import './Header.css';  // CSS 파일 이름을 확인하세요

function App() {
  return (
    <Router>
      
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          © {new Date().getFullYear()} Han Jang. All Rights Reserved. | Wishing you a wonderful day ahead. 🌈
        </footer>
      </div>
    </Router>
  );
}

export default App;
