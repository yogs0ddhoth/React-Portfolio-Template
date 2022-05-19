import React, { useState } from 'react';
import '../../css/style.css';

import ContactForm from './contactForm';

export default function Contact(props) {
  return (
    <div>
      <h2 className='title'>Contact Me</h2>
      <ContactForm />
    </div>
  )
};