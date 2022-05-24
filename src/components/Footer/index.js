import React from 'react';
import '../../css/style.css';
import '../../css/Footer.css';

export default function Footer(props) {
  return (
    <div className='footer col-12 pt-3'>
      
      <ul className='col-12 flex-row justify-center'>

        <li className="icon email col-2 col-1-sm row justify-center">
          <a href="mailto:" className='col-12 row'>
            <i className="fas fa-envelope fa-2x align-start"></i>
          </a>
        </li>
        <li className="icon col-2 col-1-sm row justify-center">
          <a href="" className='col-12 row'>
            <i className="fab fa-github fa-2x align-start"></i>
          </a>
        </li>
        <li className="icon col-2 col-1-sm row justify-center">
          <a href="" className='col-12 row'>
            <i className="fab fa-stack-overflow fa-2x align-start"></i>
          </a>
        </li>
        <li className="icon col-2 col-1-sm row justify-center">
          <a href="" className='col-12 row'>
            <i className="fab fa-linkedin fa-2x align-start"></i>
          </a>
        </li>
      </ul>
    </div>
  )
};