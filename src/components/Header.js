import React, { useState } from 'react';
import '../css/style.css';
import '../css/Header.css';

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