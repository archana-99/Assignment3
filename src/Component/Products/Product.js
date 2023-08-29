import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as Constants from './../../services/common';

const Products = ({ match }) => {
  return <p>{match.params.content}</p>;
}

class Product extends Component {

  componentDidMount() {
    fetch(Constants.url+'/products', {method: 'GET'})
    .then((respone) => respone.json())
    .then((data) => { console.log('Products: ', data) });
  }
  
  render() {
    return(
      <div>
        <h1> Product </h1>
        <h3> Select a Product </h3>
        <ul>
          <li>
            <Link to="/Product/ABC">Books</Link>
          </li>
          <li>
          <Link to="/Product/EFG">Pens</Link>
          </li>
        </ul>

        <Route path="/Product/:content" component={Products} />
      </div>
    )
  }

}

export default Product;