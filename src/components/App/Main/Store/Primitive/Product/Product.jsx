import React from 'react';
import styles from './Product.css';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    return(
      <div onClick={() => this.props.handleGetProduct(this.props.id)} onTouchStart={() => this.props.handleGetProduct(this.props.id)} className="product">
        <img src={this.props.mainImage} alt={this.props.mainImage} />
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
        <p hidden>{this.props.description}</p>
      </div>
    )
  }
}

export default Product;
