import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/kard';

export class Kard extends React.Component{

  componentDidMount() {
    this.props.dispatch(actions.fetchKard());
  }

  render(){
    return (
      <div className=''>
        Text
        <p>{this.props.userName}</p>
      </div>);
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.loading,
    userName: state.userName,
    error: state.error
  };
};

export default connect(mapStateToProps)(Kard);
