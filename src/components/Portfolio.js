import React, { useState } from 'react';
import '../css/style.css';
import '../css/Portfolio.css';
import Project from './Project';

export default function Contact(props) {
  return (
    <div className='portfolio'>
      <h2>Portfolio</h2>
      {/* TODO: create props to render individual projects */}
      <div className='projects'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
};