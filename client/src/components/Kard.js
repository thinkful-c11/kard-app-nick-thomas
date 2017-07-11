import React from 'react';
import { connect } from 'react-redux';

import KardForm from './KardForm';
import NavBar from './NavBar';


import * as actions from '../actions/kard';

export class Kard extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchKard());
  }

  render() {
    return (
      <div>
        <NavBar />
        <KardForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    kard: state.kard,
    error: state.error
  };
};

export default connect(mapStateToProps)(Kard);
