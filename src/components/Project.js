import React, { useState } from 'react';
import '../css/style.css';
import '../css/Project.css';

import underConstruction from '../images/under-construction.jpg';

export default function Project(props) {
  return (
    <figure className='project'>
      <a href=''>
        <img src={underConstruction} alt='image is nested in a link to the deployed app'/>
      </a>
      <figcaption>
        <h3>Project Title</h3>
        <p>Description</p>
        <a href=''>Link to Repo</a>
      </figcaption>
    </figure>
  )
};