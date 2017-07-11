import React from 'react';
import { connect } from 'react-redux';
import './KardForm.css';

export class CheckboxContainer extends React.Component {
  render () {
    let checkBoxes;
    switch (this.props.type) {
    case 'contact':
      checkBoxes = this.props.kard.contact;
      break;
    case 'social':
      checkBoxes = this.props.kard.social;
      break;
    case 'work':
      checkBoxes = this.props.kard.work;
      break;
    default:
      checkBoxes = 'Fill this in later';
    }

    const data = checkBoxes.map((checkBox, index) => {
      return (
        <div className='check-container'>
          <input type='checkbox' key={index} id={checkBox.type} />
          <label htmlFor={checkBox.type}>
            {checkBox.type}
          </label>
        </div>
      );
    });
    return (
      <div className='contact-container'>
        {data}
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
