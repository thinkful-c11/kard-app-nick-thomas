import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import KardForm from './KardForm';
import Account from './account';
import AddItem from './addItem';


import * as actions from '../actions/kard';

export class Kard extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchKard());
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/*' component={NavBar} />
          <Route exact path='/' component={KardForm} />
          <Route exact path='/account/' component={Account} />
          <Route exact path='/add-item/' component={AddItem} />
        </div>
      </Router>
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
