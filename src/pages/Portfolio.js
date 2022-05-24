import React from 'react';
import '../css/style.css';
import '../css/Portfolio.css';
import Project from '../components/Project';

export default function Contact(props) {
  return (
    <div className='portfolio col-12 flex-row'>
      <h2 className='title col-12 align-start'>Portfolio</h2>
      {/* TODO: create props to render individual projects */}
      <div className='projects align-start flex-row justify-space-around '>
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