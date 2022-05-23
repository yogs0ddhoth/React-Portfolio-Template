import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import '../../css/Navigation.css';

export default function Navigation(props) {
  // TODO: add underline styling to links when active
  return (
    <nav className='col-12 col-md-auto row align-end'>
      <ul className='flex-row'>
        <li>
          <NavLink to='/React-Portfolio-Template/' className={''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/React-Portfolio-Template/portfolio' className={''}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to='/React-Portfolio-Template/contact' className={''}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/React-Portfolio-Template/resume' className={''}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};