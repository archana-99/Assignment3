import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import All from './All';
import User from './User';
import CourseEnquiry from './CourseEnquiry';

const RoutingCourses = () => {
  return(
    <Router>
      <Header />
      <div className='container'>
        <Route exact path="/" component={All}></Route>
        <Route path="/all" component={All}></Route>
        <Route path="/all/:course" component={CourseEnquiry}></Route>
        <Route path="/user" component={User}></Route>
      </div> 
    </Router>
  )
}

export default RoutingCourses;