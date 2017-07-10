import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/cheese';

export class CheeseList extends React.Component{

  componentDidMount() {
    this.props.dispatch(actions.fetchCheeses());
  }

  render(){
    // return <div>Hi</div>;
    const mapMyCheeses=this.props.cheeses.map((cheese,index)=>
      <li key={index}>{cheese}</li>
        );
    return (
      <div className='listMyCheese'>
        <form className='cheese-form'>
          <label htmlFor='cheese-name-form'>Cheese</label>
          <input type='text' name='cheese-name' id='cheese-name' placeholder='Cheese Here' required />
          <button type='submit' id='submit-form'>Submit</button>
        </form>
        <ul>
          {mapMyCheeses}
        </ul>
      </div>);
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.loading,
    cheeses: state.cheeses,
    error: state.error
  };
};

export default connect(mapStateToProps)(CheeseList);
