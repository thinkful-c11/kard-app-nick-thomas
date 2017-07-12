import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const whichDot = (this.props.match.url === '/') ? '.' : '..';
    const accountLink = <Link to={'/account/'}><img src={`${whichDot}/man.svg`} alt='Account Icon' /></Link>;
    const addItemLink = <Link to={'/add-item/'}><img src={`${whichDot}/if_add_cross_new_plus_create_392530.svg`} alt='Add Icon' /></Link>;
    const sendKardLink = <Link to={'/'}><img className='send-icon' src='../plane_send.svg' alt='Send Icon' /></Link>;
    return (
      <div className='nav-bar'>
        <nav>
          {(this.props.match.url === '/account/') ? sendKardLink : accountLink}
          {(this.props.match.url === '/add-item/') ? sendKardLink : addItemLink}
        </nav>
      </div>
    );
  }
}
