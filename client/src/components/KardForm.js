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

            <CheckboxContainer type='contact' />

            <div  className='social-container'>
              <div className='check-container'>
                <input type='checkbox' id='facebook-check' />
                <label htmlFor='facebook-check'>
                  Facebook
                </label>
              </div>
              <div className='check-container'>
                <input type='checkbox' id='instagram-check' />
                <label htmlFor='instagram-check'>
                  Instagram
                </label>
              </div>
            </div>

            <button type='submit' className='send-button'>Send</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
