import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './courses.css';
import * as Constants from '../../services/common';
import User from './User';
const base_url = process.env.REACT_API_BASE_URL;

let enquiries = [];
const CourseEnquiry = (props) => { 
  let params = useParams();
  let initialState = {
    id: Math.floor(Math.random()*1000),
    username: '',
    phone: '',
    email: '',
    course: params.course
  }
  const [ userDetails, setUserDetails ] = useState(initialState);    

  const updateCourse = () => {    
    setUserDetails({id: Math.floor(Math.random()*1000)});
    const enquiriesData = JSON.stringify(userDetails);
    sessionStorage.setItem('enquiries', enquiriesData);
    fetch(Constants.url+'/enquiry', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: enquiriesData
    })
    .then((res) => res.json())
    .then((data) => {     
      props.history.push('/user');
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserDetails(values => ({...values, [name]: value}));    
  }

  return(        
    <div>      
      <div className="container enquiry-panel">         
        <div className="panel panel-primary">
          <div className="panel panel-heading">
            <label>Course Enquiry: {params.course}</label>
          </div>
          <div className="panel panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Name: </label>
                <input className="form-control" type="text" value={userDetails.username} name="username" onChange={handleChange}/>
              </div>
              <div className="col-md-6 form-group">
                <label>Phone: </label>
                <input className="form-control"type="text" value={userDetails.phone} name="phone" onChange={handleChange}/>
              </div>
              <div className="col-md-6 form-group">
                <label>Email: </label>
                <input className="form-control" type="text" value={userDetails.email} name="email" onChange={handleChange}/>
              </div>              
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <button type="submit" className="btn btn-primary" onClick={updateCourse}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseEnquiry;