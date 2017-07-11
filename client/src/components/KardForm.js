import React from 'react';
import './KardForm.css';

import CheckboxContainer from './CheckboxContainer';

export default class KardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange(event) {
    const value = event.value;
    const name = event.name;

    if (this.state[name]) {
      this.setState({
        [name]: undefined
      });
    } else {
      this.setState({
        [name]: value
      });
    }

  }
  render () {
    // const email = () => {
    //   for (var [key, value] of this.state) {
    //     // return `${key}: ${value}`;
    //     console.log(`${key}: ${value}`);
    //   }
    // };
    const email = Object.entries(this.state).toString().split(',');
    console.log(email);
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

            <CheckboxContainer type='contact' onChange={(event) => this.handleInputChange(event)} />
            <CheckboxContainer type='social' onChange={(event) => this.handleInputChange(event)} />
            <CheckboxContainer type='work' onChange={(event) => this.handleInputChange(event)} />

            <button type='submit' className='send-button'>
              <a
                href={`mailto:tckastanek@gmail.com?subject="Here is my Kard!"&body=${email}`}>Send!</a>
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
