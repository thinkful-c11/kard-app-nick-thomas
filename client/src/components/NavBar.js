import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: true
    };
  }

  toggleNav() {
    (this.state.showNav) ? this.setState({showNav: false}) : this.setState({showNav: true});
  }
  render () {
    const hidden = (this.state.showNav) ? 'hidden' : '';

    return (
      <div className='nav-bar'>
        <div id='hamburger-button' className='hamburger' onClick={() => this.toggleNav()}>
          <div className='hamburger-stripe' />
          <div className='hamburger-stripe' />
          <div className='hamburger-stripe' />
        </div>


        <nav id='main-nav' className={`main-nav ${hidden}`} >
          <ul className='main-nav-container'>
            <div className='border-this'>
              <li className='main-nav-link'><Link to={'/'} onClick={() => this.toggleNav()}>Home</Link></li>
              <li className='main-nav-link'><Link to={'/account/'} onClick={() => this.toggleNav()}>Edit Items</Link></li>
              <li className='main-nav-link'><Link to={'/add-item/'} onClick={() => this.toggleNav()}>Add Item</Link></li>
            </div>

          </ul>
        </nav>
      </div>



    );

  }
}
