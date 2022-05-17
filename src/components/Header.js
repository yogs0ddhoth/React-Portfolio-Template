import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/Header.css';

import Navigation from './Navigation';

export default function Header(props) {
  return (
    <div>
      <header className='header'>
        <h1>Header</h1>
        <Navigation />
      </header>
    </div>
  )
};