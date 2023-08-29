import React, { Component } from 'react';

class Customer extends Component {  

  render() {
    const {params} = this.props.match;
    return(
      <div>
        <h1> Customer </h1>
        <h2> { params.id }</h2>
      </div>
    )
  }

}

export default Customer;