import React, { useState } from 'react';
import '../../css/style.css';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [message, setMessage] = useState('');
  const [messageErr, setMessageErr] = useState('');
  
  const [selected, setSelected] = useState('');

  const handleClick = (event) => {
    const { id } = event.target;

    if (id === 'name') {
      setNameErr('false')
    }
    if (id === 'email') {
      setEmailErr('false')
    }
    if (id === 'message') {
      setMessageErr('false')
    }
    setSelected(id);
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (name === '') {
      setNameErr('true');
    }
    if (email === '') {
      setEmailErr('true');
    }
    if (message === '') {
      setMessageErr('true');
    }
  };

  return (
    <form className='col-12 col-md-9 col-lg-8 col-xl-7' onClick={handleClick} onSubmit={handleFormSubmit}>
      
      <div className='col-12 flex-row justify-center'>
        <label className='col-10 pb-1' htmlFor='name'>
          Name: 
          <span>{nameErr === 'true' || (nameErr === 'false' && selected !== 'name' && name === '') ? ' * this field is required' : ''}</span>
        </label>
        <input className='col-10' type='text' id='name' value={name} onChange={handleChange} />
      </div>
      
      <div className='col-12 flex-row justify-center'>
        <label className='col-10 pb-1' htmlFor='email'>
          Email Address: 
          <span>{emailErr === 'true' || (emailErr === 'false' && selected !== 'email' && email === '') ? ' * this field is required' : ''}</span>
        </label>
        <input className='col-10' type='text' id='email' value={email} onChange={handleChange} />
      </div>
      
      <div className='col-12 flex-row justify-center'>
        <label className='col-10 pb-1' htmlFor='message'>
          Message: 
          <span>{messageErr === 'true' || (messageErr === 'false' && selected !== 'message' && message === '') ? ' * this field is required' : ''}</span>
        </label>
        <textarea className='col-10' type='text' id='message' value={message} onChange={handleChange} />
      </div>
      
      <div className='col-12 pt-3 flex-row justify-center'>
        <input className='col-10' type='submit' />
      </div>
    </form>
  )
}