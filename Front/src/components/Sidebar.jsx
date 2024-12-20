import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      // Add no-transition class to disable animations during resizing
      document.body.classList.add('no-transition');
      
      // Clear the timer if resizing is still happening
      clearTimeout(resizeTimer);
      
      // Set a timer to remove the class after resizing stops
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('no-transition');
        // Optionally close sidebar when resizing stops if the screen width is small
        if (window.innerWidth < 681) {
          setIsOpen(false);
        }
      }, 300);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="sidebar-menu">
      <div
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/projects" onClick={toggleSidebar}>Projects</Link>
        <Link to="/apps" onClick={toggleSidebar}>Apps</Link>
        <Link to="/about" onClick={toggleSidebar}>Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
