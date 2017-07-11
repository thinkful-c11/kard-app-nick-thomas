import React from 'react';
import { connect } from 'react-redux';
import './KardForm.css';

export class CheckboxContainer extends React.Component {
  render () {
    return (
      <div className='contact-container'>
        <div className='check-container'>
          <input type='checkbox' id='contact-email' />
          <label htmlFor='contact-email'>
            Email
          </label>
        </div>
        <div  className='check-container'>
          <input type='checkbox' id='contact-phone' />
          <label htmlFor='contact-phone'>
            Phone
          </label>
        </div>
        <div className='check-container'>
          <input type='checkbox' id='contact-address' />
          <label htmlFor='contact-address'>
            Address
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    kard: state.kard,
  };
};

export default connect(mapStateToProps)(CheckboxContainer);
