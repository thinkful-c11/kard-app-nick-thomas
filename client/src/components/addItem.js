import React from 'react';

import './addItem.css'

export default class AddItem extends React.Component {
  render () {
    return (
    <div class="addItem">
        <form className="addForm">
            <label htmlFor='title-input'>
              Title here:
            </label>
            <input type="text" name="title" value="Title here" />
            <label htmlFor='content-input'>
              Content:
            </label>
            <input type="text" name="content" value="Content here" />
            
            <input id="button" type="submit" value="Submit" />
        </form> 
    </div>
    );
  }
}
