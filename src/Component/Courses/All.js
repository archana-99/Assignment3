import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Constants from '../../services/common';
const base_url = process.env.REACT_API_BASE_URL;

class All extends Component {
  constructor() {
    super();

    this.state = {
      courses: []
    }
  }
  
  componentDidMount() {
    fetch(Constants.url+'/courses', {method: 'GET'})
    .then((res) => res.json())
    .then((data) => this.setState({courses: data}));
  }
  render() {
    return this.state.courses.map((course) => {
        return(           
          <div key={course.id}>
            <h3>{course.name}</h3> 
            <Link to={`/all/${course.name}`} className="btn btn-success">Enquire</Link>
          </div>
        )
      })
  }

}

export default All;