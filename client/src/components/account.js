import React from 'react';
import { connect } from 'react-redux'

import './account.css'

export class Account extends React.Component {
  render () {


    const data = this.props.kard.work.map((editcontent, index) => {
     return (
     <div className="account" key={'work' + index}>
            <li>
              {editcontent.type} <img src="../edit2.svg.png" /><img src="../delete.png" />
            </li>
    </div>
     )
    });
    const data2 = this.props.kard.social.map((editcontent, index) => {
     return (
     <div className="account" key={'social' + index}>
            <li>
              {editcontent.type} <img src="../edit2.svg.png" /><img src="../delete.png" />
            </li>
    </div>
     )
    });
    const data3 =this.props.kard.contact.map((editcontent, index) => {
     return (
     <div className="account" key={'contact' + index}>
            <li>
              {editcontent.type} <img src="../edit2.svg.png" /><img src="../delete.png" />
            </li>
    </div>
     )
    });
    return (
      <div className='editContent'>
        <ul>
        {data}
        {data2}
        {data3}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    kard: state.kard
  };
};

export default connect(mapStateToProps)(Account);