import React from 'react';
import avatar from '../images/avatar.png';
import '../css/style.css';

export default function About(props) {
  const imgStyle = { borderRadius: '50%' };
  
  return (
    <div className='col-12 flex-row'>
      <h2 className='title col-12 align-start'>About Me</h2>
      {/*Todo: add generic avatar image - favicon?*/}
      <img src={avatar} alt='Avatar' className='col-3 col-2-md col-1-lg' style={imgStyle}/>
      <p className='col-12'>Lorem ipsum dolor sit amet</p>
    </div>
  )
};