import React from 'react';
import styles from './Product.css';

class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
        <img src={this.props.mainImage} alt={this.props.mainImage} />
      </div>
    )
  }
}

export default Product;
