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
          <Route path='React-Portfolio-Template/' element={<About />} />
          <Route path='React-Portfolio-Template/portfolio' element={<Portfolio />} />
          <Route path='React-Portfolio-Template/contact' element={<Contact />} />
          <Route path='React-Portfolio-Template/resume' element={<Resume />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
