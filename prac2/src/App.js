import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Services from './pages/Services.js';
import Signup from './pages/Signup';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
