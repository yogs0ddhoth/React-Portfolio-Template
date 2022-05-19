import React, { useState } from 'react';
import '../../css/style.css';

export default function About(props) {
  return (
    <div>
      <h2 className='title'>About Me</h2>
      {/*Todo: add generic avatar image - favicon?*/}
      <img src='' alt='Avatar' />
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
};