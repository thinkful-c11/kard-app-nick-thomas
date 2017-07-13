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
    // const whichDot = (this.props.match.url === '/') ? '.' : '..';
    // const accountLink = <Link to={'/account/'}><img className='editIcon' src={`${whichDot}/edit2.svg.png`} alt='Edit Icon' /></Link>;
    // const addItemLink = <Link to={'/add-item/'}><img src={`${whichDot}/if_add_cross_new_plus_create_392530.svg`} alt='Add Icon' /></Link>;
    // const sendKardLink = <Link to={'/'}><img className='send-icon' src='../plane_send.svg' alt='Send Icon' /></Link>;
    // return (
    //   <div className='nav-bar'>
    //     <nav>
    //       {(this.props.match.url === '/account/') ? sendKardLink : accountLink}
    //       {(this.props.match.url === '/add-item/') ? sendKardLink : addItemLink}
    //     </nav>
    //   </div>
    // );
    const hidden = (this.state.showNav) ? 'hidden' : '';

    return (
      <div className='nav-bar'>
        <div id='hamburger-button' className='hamburger' onClick={() => this.toggleNav()}>
          <div className='hamburger-stripe' />
          <div className='hamburger-stripe' />
          <div className='hamburger-stripe' />
        </div>


        <nav id='main-nav' className={`main-nav ${hidden}`} >
          <ul className='main-nav-container flex-container'>
            <li className='main-nav-link'><Link to={'/account/'}>Edit Items</Link></li>
            <li className='main-nav-link'><Link to={'/add-item/'}>Add Item</Link></li>
            <li className='main-nav-link'><Link to={'/'}>Home</Link></li>
          </ul>
        </nav>
      </div>



    );

  }
}
