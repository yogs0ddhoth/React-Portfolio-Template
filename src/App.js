import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
