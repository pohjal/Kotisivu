import React from 'react';
import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // Import ScrollToTop


const App = () => {
  return (
    <div className="App">
       <ScrollToTop /> {/* Scrolls to top on route change */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
