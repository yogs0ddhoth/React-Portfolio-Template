import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
