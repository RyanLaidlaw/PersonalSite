import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Resume from './Resume'; 
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Education from './Education';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
