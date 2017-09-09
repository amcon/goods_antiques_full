import React from 'react';
import styles from './Sold.css';
import Link from 'react-router-dom';

class Sold extends React.Component {

  renderProductEdit() {
    const loggedIn = this.props.loggedIn;

    if (loggedIn) {
      return(
        <Link to='/editproduct'><button>Edit</button></Link>
      );
    }
  }

  render() {
    return(
      <div className="sold">
        <img src={this.props.mainImage} alt={this.props.mainImage} />
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
        <p hidden>{this.props.description}</p>
        {this.renderProductEdit()}
      </div>
    )
  }
}

export default Sold;
