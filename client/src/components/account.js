import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/kard';

import './account.css';

export class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleDelete(type, index) {
    const newArray = this.props.kard[type].slice();
    newArray.splice(index, 1);
    this.props.dispatch(actions.removeItem(newArray, this.props.kard._id, type));
    //this is a hack
    window.location.reload();
  }

  handleEdits(event) {
    this.setState ({
      [event.name]: event.target.value
    });
  }
  //
  // dispatchEdits(type, content, index) {
  //   const newArray = this.props.kard[type].slice();
  //   newArray[index].content = content;
  //   this.props.dispatch(actions.editItem(newArray, this.props.kard._id, type));
  // }

  render () {
    const data = this.props.kard.work.map((editcontent, index) => {
      return (
        <div className='account' key={'work' + index}>
          <li>
            <h3>
              {editcontent.type}
            </h3>
            <p>
              {editcontent.content}
            </p>
            <form>
              <input type='text' value={this.state.something} name={`work${index}`} onChange={e => this.handleEdits(e)} />
              <button type='submit' />
            </form>
            <button><img src='../edit2.svg.png' /></button>
            <button onClick={() => this.handleDelete('work', index)}><img src='../delete.png' /></button>
          </li>
        </div>
      );
    });
    const data2 = this.props.kard.social.map((editcontent, index) => {
      return (
        <div className='account' key={'social' + index}>
          <li>
            <h3>
              {editcontent.type}
            </h3>
            <p>
              {editcontent.content}
            </p>
            <button><img src='../edit2.svg.png' /></button>
            <button onClick={() => this.handleDelete('social', index)}><img src='../delete.png' /></button>
          </li>
        </div>
      );
    });
    const data3 =this.props.kard.contact.map((editcontent, index) => {
      return (
        <div className='account' key={'contact' + index}>
          <li>
            <h3>
              {editcontent.type}
            </h3>
            <p>
              {editcontent.content}
            </p>
            <button><img src='../edit2.svg.png' /></button>
            <button onClick={() => this.handleDelete('contact', index)}><img src='../delete.png' /></button>
          </li>
        </div>
      );
    });
    return (
      <div className='editContent'>
        <ul>
          {data}
          {data2}
          {data3}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    kard: state.kard
  };
};

export default connect(mapStateToProps)(Account);
