import React from 'react';

import './NavBar.css';

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <nav>
          <a href='#account'><img src='./man.svg' alt='Account Icon' /></a>
        </nav>
      </div>
    );
  }
}
