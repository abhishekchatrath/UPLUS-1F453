import React, { Component } from 'react';
import logo from './TPL-Logo.jpg'

class TPL_Header extends Component {
  render() {
    return (
        <div className="header">
            <div className="header__row">
                <div id="logo">
                    <a href="#">
                        <img className="" alt="Toronto Public Library Homepage" src={logo} height="42" />
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default TPL_Header;