import React, { useState } from 'react';
import '../../css/style.css';
import '../../css/Header.css';

import Navigation from './Navigation';

export default function Header(props) {
  return (
    <div>
      <header className='header col-12 flex-row justify-space-around'>
        <h1 className='col-12 col-md-auto'>Header</h1>
        <Navigation />
      </header>
    </div>
  )
};