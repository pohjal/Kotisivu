// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-menu">
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Projects</a>
        <a href="#services">Apps</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;
