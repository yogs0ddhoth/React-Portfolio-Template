import React, { useState } from 'react';
import '../styles/style.css';
import Project from './Project';

export default function Contact(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      {/* TODO: create props to render individual projects */}
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  )
};