import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import '../../css/Header.css';

import Navigation from './Navigation';

export default function Header(props) {
  return (
    <div>
      <header className='header col-12 flex-row align-end pt-3'>
        <NavLink to='react-portfolio-template/' className='home col-12 col-md-6'>
          <h1 className=''>Header</h1>
        </NavLink>
        <Navigation />
      </header>
    </div>
  )
};