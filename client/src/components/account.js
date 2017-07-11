import React from 'react';

import './account.css'

export default class Account extends React.Component {
  render () {
    return (
    <div class="account">
        <form className="accountForm">
            <label htmlFor='firstName-input'>
              First Name:
            </label>
            <input type="text" name="firstname" value="First name here" />
            <label htmlFor='lastName-input'>
              Last Name:
            </label>
            <input type="text" name="lastname" value="Last name here" />
               <label htmlFor='userName-input'>
             UserName:
            </label>
            <input type="text" name="username" value="Username here" />
            <label htmlFor='password-input'>
              Password:
            </label>
            <input type="text" name="password" value="Password here" />
            
            <input id="button" type="submit" value="Submit" />
        </form> 
    </div>
    );
  }
}
