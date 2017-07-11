import React from 'react';
import './KardForm.css';

export default class KardForm extends React.Component {
  render () {
    return (
      <div className='kard-form-container'>
        <h1>Kard</h1>
        <img className='profile-img' src='http://fillmurray.com/200/200' alt='Profile' />
        <form className='kard-form'>
          <fieldset className='kard-fieldset'>
            <label htmlFor='send-input'>
              Who would you like to send a Kard to?
            </label>
            <input type='text' id='send-input' placeholder='Email address' />
            <label htmlFor='contact-email'>
              Email
            </label>
            <input type='checkbox' id='contact-email' />
            <label htmlFor='contact-phone'>
              Phone
            </label>
            <input type='checkbox' id='contact-phone' />
            <label htmlFor='contact-address'>
              Address
            </label>
            <input type='checkbox' id='contact-address' />
            <label htmlFor='social-select'>
              Social
            </label>
            <select id='social-select'>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>Instagram</option>
              <option value='twitter'>Twitter</option>
            </select>
            <label htmlFor='business-select'>
              Business
            </label>
            <select id='business-select'>
              <option value='linkedin'>LinkedIn</option>
              <option value='portfolio'>Portfolio</option>
              <option value='resume'>Resume</option>
            </select>
            <button type='submit'>Send</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
