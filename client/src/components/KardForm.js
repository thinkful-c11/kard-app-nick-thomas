import React from 'react';
import './KardForm.css';
import * as actions from '../actions/kard';

import CheckboxContainer from './CheckboxContainer';

export default class KardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleEmail(event) {
    this.setState ({
      email: event.target.value
    });
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

  handleSubmit(event) {
    event.preventDefault();
    const emailBody = JSON.stringify(this.state);
    this.props.dispatchEmail(emailBody);
  }

  render () {
    const email = Object.entries(this.state).toString().split(',');
    return (
      <div className='kard-form-container'>
        <h1>Kard</h1>
        {/* <img className='profile-img' src='http://fillmurray.com/200/200' alt='Profile' /> */}
        <form className='kard-form' onSubmit={e => this.handleSubmit(e)}>
          <fieldset className='kard-fieldset'>
            <label className='input-label' htmlFor='send-input'>
              Who would you like to send a Kard to?
            </label>
            <input type='text' id='send-input' name='email' placeholder='Email address' value={this.state.email} onChange={e => this.handleEmail(e)} />

            <div className='checkbox-container-container'>
              <CheckboxContainer type='contact' onChange={(event) => this.handleInputChange(event)} />
              <CheckboxContainer type='social' onChange={(event) => this.handleInputChange(event)} />
              <CheckboxContainer type='work' onChange={(event) => this.handleInputChange(event)} />
            </div>

            <button type='submit' className='send-button'>
              Send
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
