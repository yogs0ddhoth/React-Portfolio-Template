import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/style.css';
import '../styles/Navigation.css';

export default function Navigation(props) {
  return (
    <div className='navDiv'>
      <nav className='navbar'>
        <ul className='nav'>
          <li>
            <NavLink to='about' className={''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='portfolio' className={''}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to='contact' className={''}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='resume' className={''}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
};