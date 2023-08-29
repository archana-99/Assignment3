import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Customer from './Customer';
import Product from './Product';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
  return(
    <Router>
      <Header />
      <div className='container'>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/customer" component={Customer} />
        <Route path="/product" component={Product} />
      </div> 
    </Router>
  )
}

export default Routing;