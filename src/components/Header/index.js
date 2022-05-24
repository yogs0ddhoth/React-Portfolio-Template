import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import '../../css/Header.css';

import Navigation from './Navigation';

export default function Header(props) {
  return (
    <div>
      <header className='header theme-3 col-12 flex-row align-end pt-3'>
        <NavLink to='/' className='home col-12 col-md-6'>
          <h1 className='theme-3'>Header</h1>
        </NavLink>
        <Navigation />
      </header>
    </div>
  )
};