import React from 'react';

import './NavBar.css';

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <nav>
          <a href='#account'><img src='./man.svg' alt='Account Icon' /></a>
          <a href='#add-stuff'><img src='./if_add_cross_new_plus_create_392530.svg' alt='Add Icon' /></a>
        </nav>
      </div>
    );
  }
}
