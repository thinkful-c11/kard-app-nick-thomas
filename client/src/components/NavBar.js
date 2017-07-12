import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <nav>
          <Link to={'/account/'}><img src='./man.svg' alt='Account Icon' /></Link>
          <Link to={'/add-item/'}><img src='./if_add_cross_new_plus_create_392530.svg' alt='Add Icon' /></Link>
        </nav>
      </div>
    );
  }
}
