import React, { Component, useEffect, useState } from 'react';
import * as Constants from '../../services/common';

function User() {
    const [userDetails, setUserDetails] = useState([]);
    
    useEffect(() => {
      fetch(Constants.url + '/enquiry', { method: 'GET'} ).then((res) => res.json())
      .then((data) => setUserDetails(data));
    }, []); 

    const displayUserDetails = (details) => {
      return details.length > 0 && details.map((data) => {
        return(
          <div key={data.id}>
            <div className="container enquiry-panel">         
              <div className="panel panel-primary">
                <div className="panel panel-heading">
                  {data.course}
                </div>
                <div className="panel panel-body">
                  <div className='row'>
                      <label className="col-md-3">Name: </label>
                      <label className="col-md-9">{data.username}</label>
                  </div>
                  <div className='row'>
                      <label className="col-md-3">Phone: </label>
                      <label className="col-md-9">{data.phone}</label>
                  </div>
                  <div className='row'>
                      <label className="col-md-3">Email: </label>
                      <label className="col-md-9">{data.email}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }

    return(
      <div>
        <h1>User Enquiries</h1>
        { displayUserDetails(userDetails) }
      </div>
    )
}

export default User;