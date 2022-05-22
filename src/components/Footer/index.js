import React, { useState } from 'react';
import '../../css/style.css';
import '../../css/Footer.css';

export default function Footer(props) {
  return (
    <div className='footer col-12 pb-3'>
      
      <ul className='col-12 flex-row justify-center'>

        <li className="icon email col-1 row justify-center">
          <a href="mailto:">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </li>
        <li className="icon col-1 row justify-center">
          <a href="">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li className="icon col-1 row justify-center">
          <a href="">
            <i className="fab fa-stack-overflow fa-2x"></i>
          </a>
        </li>
        <li className="icon col-1 row justify-center">
          <a href="">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  )
};