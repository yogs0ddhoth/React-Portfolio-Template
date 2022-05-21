import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
// import './css/reset.css';
import './css/App.css';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='contentWrap'>
        <Header />

        <Routes>
          <Route path='react-portfolio-template/' element={<About />} />
          <Route path='react-portfolio-template/portfolio' element={<Portfolio />} />
          <Route path='react-portfolio-template/contact' element={<Contact />} />
          <Route path='react-portfolio-template/resume' element={<Resume />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
