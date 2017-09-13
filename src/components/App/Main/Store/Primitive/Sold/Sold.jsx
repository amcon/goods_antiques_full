import React from 'react';
import styles from './Sold.css';
import { Redirect, Link } from 'react-router-dom';

class Sold extends React.Component {
  render() {
    return(
      <div className="sold" onClick={() => this.props.handleGetProduct(this.props.id)}>
        <img src={this.props.mainImage} alt={this.props.mainImage} />
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
        <p hidden>{this.props.description}</p>
      </div>
    )
  }
}

export default Sold;
