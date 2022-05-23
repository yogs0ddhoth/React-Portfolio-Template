import React, { useState } from 'react';
import '../../css/style.css';

// import ContactForm from './contactForm';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValid, setEmailValid] = useState('');

  const [message, setMessage] = useState('');
  const [messageErr, setMessageErr] = useState('');
  
  const [selected, setSelected] = useState('')

  const handleClick = (event) => { // remove Err from input when clicked
    const { id } = event.target;
    
    switch (id) {
      case 'name':
        setNameErr(false);
        break;
      case 'email':
        setEmailErr(false);
        break;
      case 'message':
        setMessageErr(false);
        break;
    }

    setSelected(id);
  };
  const handleChange = (event) => { // save input data as states
    const { id, value } = event.target;
    
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        // 'validate' email format
        (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) === false) ? setEmailValid(false) : setEmailValid(true);
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    name === '' ? setNameErr(true) : setNameErr(null);
    
    if (email === '') {
      setEmailErr(true);
      setEmailValid(false);
    } else {
      setEmailErr(null);
    }
    message === '' ? setMessageErr(true) : setMessageErr(null);

    if (!([nameErr, emailErr, messageErr].includes(true))) {
      // clear the fields <- convert to server interaction later
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='col-12 flex-row justify-center ' onClick={handleClick}>

      <h2 className='title col-12 col-md-9 text-center'>Contact Me</h2>

      <form className='col-12 col-md-9 col-lg-8 col-xl-7' onSubmit={handleFormSubmit}>
        
        <div className='col-12 flex-row justify-center'>

          <label className='col-10 pb-1' htmlFor='name'>
            Name:
              <span>{nameErr === true || nameErr === false && selected !== 'name' && name === '' ? ' * This field is required.' : ''}</span>
          </label>
          <input className='col-10' type='text' id='name' value={name} onChange={handleChange} />
        </div>

        <div className='col-12 flex-row justify-center'>

          <label className='col-10 pb-1' htmlFor='email'>
            Email Address: 
              <span>{emailErr === true || emailErr === false && selected !== 'email' && email === '' ? ' * This field is required.' : ''}</span>
              <span>{emailValid === false || emailErr === false && selected !== 'email' && emailValid === false ? ' Enter a valid email address.' : ''}</span>
          </label>
          <input className='col-10' type='text' id='email' value={email} onChange={handleChange} />
        </div>

        <div className='col-12 flex-row justify-center'>

          <label className='col-10 pb-1' htmlFor='message'>
            Message: 
              <span>{messageErr === true || messageErr === false && selected !== 'message' && message === '' ? ' * This field is required.' : ''}</span>
          </label>
          <textarea className='col-10' type='text' id='message' value={message} onChange={handleChange} />
        </div>

        <div className='col-12 pt-3 flex-row justify-center'>

          <input className='col-10' type='submit' />
        </div>
      </form>
    </div>
  )
};