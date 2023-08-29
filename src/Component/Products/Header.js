import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (  
      <div>   
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <p className="navbar-brand">Arch React Learning</p>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/customer">Customer</Link></li>
              <li> <Link to="/product">Product</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;