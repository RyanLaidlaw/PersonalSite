import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './css/App.css';
import Resume from './Resume'; 
import Navbar from './Navbar';
import Projects from './Projects';
import Education from './Education';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
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
