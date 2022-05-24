import React from 'react';
import '../../css/style.css';
import '../../css/Project.css';

import underConstruction from '../../images/under-construction.jpg';

export default function Project(props) {
  return (
    <div className='project col-12 col-md-6'>
      <a href='' className=''>
        <img src={underConstruction} alt='image is nested in a link to the deployed app' />
      </a>
      <div>
        <h3>Project Title</h3>
        <p>Description</p>
        <a href=''>Link to Repo</a>
      </div>
    </div>
  )
};