import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/kard';

import './addItem.css';

export class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleValue: '',
      contentValue: ''
    };
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({
        titleValue: event.target.value
      });
    } else {
      this.setState({
        contentValue: event.target.value
      });
    }
  }

  handleSubmit() {
    this.props.dispatch(actions.addItem(this.state.titleValue, this.state.contentValue, this.props.kard._id));
    this.setState({
      titleValue: '',
      contentValue: ''
    });
  }

  render () {
    return (
      <div className='addItem'>
        <form className='addForm' onSubmit={() => this.handleSubmit()}>
          <fieldset>
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
