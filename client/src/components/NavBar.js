import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const addItemLink = <Link to={'/add-item/'}><img src='./if_add_cross_new_plus_create_392530.svg' alt='Add Icon' /></Link>;
    const sendKardLink = <Link to={'/'}><img className='send-icon' src='../plane_send.svg' alt='Send Icon' /></Link>;
    return (
      <div className='nav-bar'>
        <nav>
          <Link to={'/account/'}><img src='./man.svg' alt='Account Icon' /></Link>
          {(this.props.match.url === '/add-item/') ? sendKardLink : addItemLink}
        </nav>
      </div>
    );
  }
}
