import React, { useState } from 'react';
import '../../css/style.css';

import underConstruction from '../../images/under-construction.jpg';

export default function Resume() {
  const ulStyle = { listStyleType: 'disc' }
  return (
    <div className='col-12 flex-row'>
      <a href={underConstruction} download={underConstruction} className='title col-12 align-start'>
        <h2 className='title'>Resume</h2>
      </a>
      <div className='title col-12 flex-row align-start'>
        <h3 className='col-12'>Proficiencies:</h3>
        <ul className='col-12 '>
          <li>sed do</li>
          <li>eiusmod</li>
          <li>tempor incididunt</li>
          <li>ut labore</li>
          <li>et dolore</li>
          <li>magna aliqua</li>
        </ul>
      </div>
    </div>
  )
};