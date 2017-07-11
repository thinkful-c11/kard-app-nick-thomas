import React from 'react';
import './KardForm.css';

import CheckboxContainer from './CheckboxContainer';

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

            <CheckboxContainer type='contact' />
            <CheckboxContainer type='social' />
            <CheckboxContainer type='work' />

            <button type='submit' className='send-button'>
              <a
                href='mailto:tckastanek@gmail.com'>Send!</a>
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
