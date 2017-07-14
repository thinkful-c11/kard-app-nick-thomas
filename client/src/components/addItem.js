import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/kard';

import './addItem.css';

export class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryValue: '',
      titleValue: '',
      contentValue: ''
    };
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({
        titleValue: event.target.value
      });
    } else if (event.target.name === 'content') {
      this.setState({
        contentValue: event.target.value
      });
    } else {
      this.setState({
        categoryValue: event.target.value
      });
    }
  }

  handleSubmit() {
    this.props.dispatch(actions.addItem(this.state.categoryValue, this.state.titleValue, this.state.contentValue, this.props.kard._id));
    this.setState({
      categoryValue: '',
      titleValue: '',
      contentValue: ''
    });
  }

  render () {
    return (
      <div className='addItem'>
        <form className='addForm' onSubmit={() => this.handleSubmit()}>
          <fieldset className='addForm-fieldset'>
            <select onChange={(event) => this.handleChange(event)} required>
              <option value='' disabled selected>Select One</option>
              <option value='work'>Work</option>
              <option value='social'>Social</option>
              <option value='contact'>Contact</option>
            </select>
            <label htmlFor='title-input'>
              Title here:
            </label>
            <input type='text' name='title' value={this.state.titleValue} onChange={(event) => this.handleChange(event)} placeholder='Enter title here' />
            <label htmlFor='content-input'>
              Content:
            </label>
            <input type='text' name='content' value={this.state.contentValue} onChange={(event) => this.handleChange(event)} placeholder='Enter content here' />

            <input id='button' type='submit' value='Submit' />
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    kard: state.kard,
    error: state.error
  };
};

export default connect(mapStateToProps)(AddItem);
