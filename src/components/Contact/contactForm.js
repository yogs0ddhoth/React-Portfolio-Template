import React, { useState } from 'react';
import '../../css/style.css';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
   
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' />

      <label htmlFor='email'>Email Address:</label>
      <input type='email' id='email' />

      <label htmlFor='message'>Message</label>
      <input type='text' id='message' />

      <input type='submit' />
    </form>
    
  )
}