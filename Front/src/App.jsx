import React from 'react';
import './App.css'; // Add global styles if necessary
import Etusivu from './components/Etusivu.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  return (
    <div className="App">
      <Sidebar/> 
      <Etusivu/>
    </div>
  );
};

export default App;
