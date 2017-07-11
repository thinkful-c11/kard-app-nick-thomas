import React from 'react';
import './KardForm.css';

export default class KardForm extends React.Component {
  render () {
    return (
      <div className='kard-form-container'>
        <h1>Kard</h1>
        <img className='profile-img' src='http://fillmurray.com/200/200' />
        <form className='kard-form'>
          <fieldset className='kard-fieldset'>
            <label htmlFor='send-input'>
              Who would you like to send a Kard to?
            </label>
            <input type='text' id='send-input' placeholder='Email address' />
            <label htmlFor='contact-info'>
              Contact Info
            </label>
            <input type='checkbox' id='contact-info' />
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
