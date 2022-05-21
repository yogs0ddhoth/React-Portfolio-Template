import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import '../../css/Navigation.css';

export default function Navigation(props) {
  // TODO: add underline styling to links when active
  return (
    <nav className='col-12 col-md-auto flex-row justify-center justify-end-md'>
      <ul className='flex-row justify-center justify-flex-end-md'>
        <li>
          <NavLink to='react-portfolio-template/' className=''>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='react-portfolio-template/portfolio' className=''>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to='react-portfolio-template/contact' className=''>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='react-portfolio-template/resume' className=''>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};