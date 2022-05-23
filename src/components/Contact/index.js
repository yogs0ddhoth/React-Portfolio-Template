import React, { useState } from 'react';
import '../../css/style.css';

// import ContactForm from './contactForm';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [emailValid, setEmailValid] = useState('');

  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
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
        setEmailValid(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email) ? true : false);
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    setNameErr(name === '' ? true : null);
    setEmailErr(email === '' ? true : null);
    setMessageErr(message === '' ? true : null);

    setName(!([nameErr, emailErr, messageErr].includes(true)) ? '' : name);
    setEmail(!([nameErr, emailErr, messageErr].includes(true)) ? '' : email);
    setMessage(!([nameErr, emailErr, messageErr].includes(true)) ? '' : message);
  };

  const errStatus = (state, stateErr, selectedState, htmlId) => {
    if (stateErr === true || (stateErr === false && selectedState !== htmlId && state === '')) {
      return <span>* This field is required.</span>
    }
  };

  const emailStatus = () => {
    if (emailErr === true || emailValid === false || (emailErr === false && selected !== 'email' && emailValid === false)) {
      return <span>Enter a valid email address.</span>
    }
  }

  return (
    <div className='col-12 flex-row justify-center ' onClick={handleClick}>

      <h2 className='title col-12 col-md-9 text-center'>Contact Me</h2>

      <form className='col-12 col-md-9 col-lg-8 col-xl-7' onSubmit={handleFormSubmit}>
        
        <div className='col-12 flex-row justify-center'>

          <label className='col-10 pb-1' htmlFor='name'>
            Name: {errStatus(name, nameErr, selected, 'name')}
          </label>
          <input className='col-10' type='text' id='name' value={name} onChange={handleChange} />
        </div>

        <div className='col-12 flex-row justify-center'>

          <label className='col-10 pb-1' htmlFor='email'>
            Email Address: {errStatus(email, emailErr, selected, 'email')} {emailStatus()}
          </label>
          <input className='col-10' type='text' id='email' value={email} onChange={handleChange} />
        </div>

        <div className='col-12 flex-row justify-center'>

          <label className='col-10 pb-1' htmlFor='message'>
            Message: {errStatus(message, messageErr, selected, 'message')}
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