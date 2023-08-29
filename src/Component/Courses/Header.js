import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <p className="navbar-brand">Course Academy</p>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">All Courses</Link></li>
              <li><Link to="/user">User Enquiries</Link></li>
            </ul>
          </div>
        </nav>
      </div>      
    )
  }
}

export default Header;