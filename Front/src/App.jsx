import React from 'react';
import './App.css'; 
import Etusivu from './components/Etusivu.jsx';
import Sidebar from './components/Sidebar.jsx';
import Purpose from './components/Purpose.jsx';
import Explore from './components/Explore.jsx';

const App = () => {
  return (
    <div className="App">
      <Sidebar/> 
      <Etusivu/>
      <Purpose/>
      <Explore/>
    </div>
  );
};

export default App;
